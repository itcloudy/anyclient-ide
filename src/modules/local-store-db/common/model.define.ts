import { AllConnectionType, AuthType, ServerType } from '../../base/types/server-node.types';

/**
 *
 * 同步原则
 * 一.本地没有数据，线上有数据
 * 用户登录，从线上同步下来用户数据
 *
 * 二.本地有数据，线上无数据
 * 用户登录，本地数据全部同步到线上
 *
 * 三.本地有数据，线上有数据
 * 1.将线上数据下载下来，和本地同步，
 *   合并原则 - serverId本地是否有相同的，有，谁的updateDate最新，使用谁的，服务端updateDate最新，数据覆盖，客户端的updateDate最新，如果isUpload为false，稍后将数据上传
 *          - serverId本地是否有相同的，无，查看address & port & serverType & username是否有相同的，有覆盖本地serverId
 *          以上合并完后
 *          剩下的 serverId仍然为空的，同步到线上，
 *
 * 四.本地无数据，线上无数据
 * 不做任何操作
 *
 * 五.当数据发生变动时， is_upload改为false update_date改成当前时间
 *
 */

export interface ConnectQuery {
  server: ServerInfo;
  cluster?: ServerCluster[] | null;
  serverId?: string;
  ssh?: SSHConfig;
  db?: string | number;
  //数据库
  schema?: string;
  originPassword?: boolean;
}

export interface ServerInfo {
  _id?: string;
  serverId?: string;
  serverName?: string;
  user?: string;
  password?: string;
  token?:string;

  port?: number;
  host?: string;
  serverType?: ServerType;

  connectionType?: AllConnectionType;
  authType?: AuthType;
  /**
   * 实例名称
   */
  instanceName?: string;
  version?: string;
  /**
   * 登录角色
   * oracle会用到
   */
  role?: string;
  /**
   * 部门数据库要求连接时，必须指定数据库，否则无法连接
   */
  database?: string;
  /**
   * 租户
   */
  tenant?: string;
  /**
   * 记录密码
   */
  rememberMe?: boolean;

  connectionUrl?: string;

  connectTimeout?: number;
  requestTimeout?: number;
  //连接时区
  timezone?: string;
  //连接字符编码
  connectEncoding?: string;
  //连接池最大连接数
  maximumPoolSize?: number;
  //连接池最小连接数
  minimumIdle?: number;
  //空闲连接超时时间
  idleTimeout?: number;
  //连接会话时长
  maxLifeTime?: number;
  /**
   * ssh
   */
  usingSsh?: boolean;
  sshHost?: string;
  sshPort?: number;
  sshUser?: string;
  sshRememberMe?: boolean;
  /**
   * 1 密码
   * 2 秘钥
   * 3 密码加秘钥
   */
  sshCheckType?: number;
  sshPassword?: string;
  sshPublicKeyUrl?: string;

  /**
   * ssl
   */
  useSsl?: boolean;

  caPath?: string;
  clientCertPath?: string;
  clientKeyPath?: string;

  /**
   * sqlite only
   */
  dbPath?: string;

  /**
   * mssql only
   */
  mssqlEncrypt?: boolean;

  mssqlDomain?: string;
  mssqlAuthType?: string;

  /**
   * oracle
   */
  orclConnType?: string;
  /**
   * ServerName||Sid，
   * 存储在instanceName
   */
  orclServerType?: 'Service Name' | 'SID' | string;
  orclLibPath?: string;

  //redisServerType?:;
  redisMasterPassword?:string;
  redisMasterName?:string;

  /**
   * es only
   */
  esScheme?: string;
  esAuth?: string;
  esToken?: string;
  /**
   * using when ssh tunnel
   */
  esUrl?: string;

  /**
   * encoding, ftp only
   */
  encoding?: string;
  showHidden?: boolean;

  sortNo?: number;
  /**
   * 本服务最后一次打开连接时间
   */
  lastOpenTime?: string | null; //Date;
  /**
   * 发生数据变化时，更新时间
   * 第一次数据创建，将创建时间插入
   */
  updateDate?: string | null; //Date;
  createDate?: string | null; //Date;

  /**
   * 是否上传到服务端
   * 默认为flase
   */
  isUpload?: boolean;
  /**
   * 首字母
   */
  initialLetter?: string;
  // serverClass?: ServerClass;
  /**
   * kafka信息
   */
  clientId?: string;
  groupId?: string;
}

export interface SSHConfig {
  _id?: string;
  sshId: string;
  /**
   * local tunnel port
   */
  tunnelPort: number;
  host: string;
  port: number;
  username: string;
  password?: string;
  /**
   * password privateKey native
   */
  type?: string;
  privateKeyPath?: string;
  watingTime?: number;
  /**
   * only support private keys generated by ssh-keygen, which means pkcs8 is not support.
   */
  privateKey?: Buffer;
  passphrase?: string;
  algorithms?: Algorithms;
  /**
   * only ssh connection
   */
  key: string;
}

export interface Algorithms {
  cipher?: string[];
}

export interface OpenRecentInfo {
  _id?: string;
  recentId: string;
  serverId: string;
  workspace: string;
  sortNo: number;
  openTime?: string | null;
}

export interface ServerCluster {
  _id?: string;
  clusterId: string;
  serverId: string;
  port?: number;
  host?: string;
  user?: string;
  password?: string;
}

export interface ProductVersion{
  _id?:string;
  versionId?:string;
  version:string;
  //1 ignore
  ignore?:number;
}
