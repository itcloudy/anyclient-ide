import { describe, it, expect, beforeEach, vi } from 'vitest';

// FIXME: Skipping all tests due to missing OpenSumi dependencies and DI container setup
// Need to properly mock @opensumi/di, @opensumi/ide-core-browser and other OpenSumi modules
describe.skip('StatusBarContribution', () => {
  let statusBarContribution: any;
  let mockStatusBarService: any;
  let mockIconService: any;
  let mockStatusBarElement: any;

  beforeEach(() => {
    mockStatusBarService = {
      addElement: vi.fn(),
    };

    mockIconService = {};

    mockStatusBarElement = {
      update: vi.fn(),
    };

    vi.mocked(mockStatusBarService.addElement).mockReturnValue(mockStatusBarElement);

    statusBarContribution = {};
    statusBarContribution['statusBarService'] = mockStatusBarService;
    statusBarContribution['iconService'] = mockIconService;
  });

  it('should add status bar element on start', () => {
    statusBarContribution.onDidStart();
    expect(mockStatusBarService.addElement).toHaveBeenCalledWith('OpenSumi', {
      backgroundColor: 'var(--button-background)',
      color: '#FFFFFF',
      tooltip: 'OpenSumi',
      alignment: 'left',
      iconClass: 'mock-icon',
      priority: Infinity,
    });
  });

  it('should update status bar on disconnect', () => {
    statusBarContribution['statusBarElement'] = mockStatusBarElement;
    statusBarContribution.onDidDisConnect();
    expect(mockStatusBarElement.update).toHaveBeenCalledWith({
      text: 'Disconnected',
      backgroundColor: 'var(--kt-statusbar-offline-background)',
      alignment: 'left',
    });
  });

  it('should update status bar on connect', () => {
    statusBarContribution['statusBarElement'] = mockStatusBarElement;
    statusBarContribution.onDidConnected();
    expect(mockStatusBarElement.update).toHaveBeenCalledWith({
      text: undefined,
      backgroundColor: 'var(--button-background)',
      alignment: 'left',
    });
  });
});
