require('../scripts/apply-product');

const { productName } = require('../product.json');
const useNpmMirror = Boolean(process.env.USE_NPM_MIRROR);

const fs = require('fs');
const path = require('path');
const electronBuilder = require('electron-builder');
const rootPackage = require('../package.json');
const rimraf = require('rimraf');
const DEFAULT_TARGET_PLATFORM = process.platform;
// x64 arm64 全部值见 {electronBuilder.Arch}
const TARGET_ARCH = process.env.TARGET_ARCHES || 'x64';

// disable code sign
process.env.CSC_IDENTITY_AUTO_DISCOVERY = false;

// use double package.json structure, auto handle node_modules
fs.copyFileSync(path.join(__dirname, '../build/package.json'), path.join(__dirname, '../app/package.json'));

const targetPlatforms = (process.env.TARGET_PLATFORMS || DEFAULT_TARGET_PLATFORM).split(',').map((str) => str.trim());
const targetArches = TARGET_ARCH.split(',').map((str) => str.trim());

const targets = new Map();
if (targetPlatforms.includes('win32')) {
  targets.set(electronBuilder.Platform.WINDOWS, new Map([[electronBuilder.Arch.x64, ['nsis']]]));
}

if (targetPlatforms.includes('darwin')) {
  const archMap = new Map(targetArches.map((v) => [electronBuilder.Arch[v], ['dmg']]));
  // archMap.set(electronBuilder.Arch.universal, ['dmg']);
  targets.set(electronBuilder.Platform.MAC, archMap);
}

const outputPath = path.join(__dirname, '../out');
rimraf.sync(outputPath);

electronBuilder.build({
  publish: null,
  targets: targets.size ? targets : undefined,
  config: {
    productName,
    npmArgs: useNpmMirror ? ['--registry=https://registry.npmmirror.com'] : [],
    electronVersion: rootPackage.devDependencies.electron,
    extraResources: [
      {
        from: path.join(__dirname, '../extensions'),
        to: 'extensions',
        filter: ['**/*'],
      },
      {
        from: path.join(__dirname, '../resources'),
        to: 'resources',
        filter: ['**/*'],
      },
    ],
    nsis: {
      oneClick: false, // 是否一键安装
      allowElevation: true, // 允许请求提升。 如果为false，则用户必须使用提升的权限重新启动安装程序。
      allowToChangeInstallationDirectory: true, // 允许修改安装目录
      // installerIcon: ".build/icon/anyclient.ico",// 安装图标
      // uninstallerIcon: "build/icon/anyclient.ico",//卸载图标
      // installerHeaderIcon: "build/icon/anyclient.ico", // 安装时头部图标
      createDesktopShortcut: true, // 创建桌面图标
      createStartMenuShortcut: true, // 创建开始菜单图标
    },
    directories: {
      output: outputPath,
    },
    asar: true,
    asarUnpack: ['node_modules/@opensumi/vscode-ripgrep'],
    mac: {
      icon: 'build/icon/anyclient.png',
      artifactName: '${productName}-${version}_mac-${arch}.${ext}',
      target: 'dmg',
    },
    win: {
      artifactName: '${productName}-${version}_windows-${arch}.${ext}',
      icon: 'build/icon/anyclient.ico',
      target: [
        {
          target: 'nsis',
          arch: ['x64'],
        },
      ],
    },
    linux: {
      artifactName: '${productName}-${version}-${arch}.${ext}',
      icon: 'build/icon/anyclient.png',
      target: [
        {
          target: 'deb',
          arch: ['x64'],
        },
      ],
    },
  },
});
