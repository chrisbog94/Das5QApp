var _0xd07e = ['exports', 'setViewIsReady', 'closeUnsolicitedPipe', 'changeAdvancedServiceLogState', 'path', 'net', 'Socket', 'events', 'env', 'Q_NODE_ENV', 'production', 'platform', './logger.js', 'child_process', 'execFile', 'communicationId', 'pid', 'firmwareVersion', 'freeze', '\x5c\x5c.\x5cpipe\x5cdaskeyboard_pipe', 'resolve', '/tmp/daskeyboard_pipe_in', '/tmp/daskeyboard_pipe_out', 'serviceChannelEvent', 'serviceConnected', 'servicePipeData', 'servicePipeTimeout', 'servicePipeClose', 'devicePluggedOut', 'listOfInovators', 'newDevicePlugged', 'getPluggedDevices', 'qButtonPressedAndReleased', 'qButtonPressed', 'qButtonReleased', 'firmwareUpdateStatus', 'error', 'info', 'ServiceTalker\x20changeAdvancedServiceLogState\x20to\x20', '/tmp/daskeyboard_pipe_unsolicited', '\x5c\x5c.\x5cPIPE\x5cdaskeyboard_pipe_unsolicited', 'darwin', 'tryToConnectToService():\x20Error\x20trying\x20to\x20connect\x20to\x20service\x20linux\x20', 'tryToConnectToService():\x20Error\x20trying\x20to\x20connect\x20to\x20service\x20Mac\x20', 'win32', 'createUnsolicitedPipe()', 'development', '/../app.asar.unpacked/', 'Error\x20when\x20trying\x20to\x20create\x20unsolicited\x20pipe\x20', 'Created\x20unsolicited\x20pipe\x20', 'Closing\x20unsolicited\x20pipe', 'CloseQAppUserServices', 'tryConnectToService():\x20trying\x20to\x20connect\x20to\x20the\x20service', 'connect', 'tryConnectToService():\x20Application\x20is\x20connected\x20to\x20the\x20service\x20through\x20the\x20pipe', 'data', 'ServiceTalker\x20pipe\x20receiving:', 'toString', 'Error\x20while\x20handling\x20data\x20from\x20pipe:\x20', 'end', 'emit', 'servicePipeEnd', 'timeout', 'tryConnectToService():\x20Connection\x20with\x20service\x20timeout', 'close', 'tryConnectToService():\x20Failed\x20to\x20connect\x20to\x20the\x20pipe:\x20', 'tryConnectToServiceMac():\x20trying\x20to\x20connect\x20to\x20the\x20service', 'createWriteStream', 'tryToConnectToSeriviceMac():\x20Error\x20with\x20pipe\x20read\x20creation', 'tryToConnectToSeriviceMac():\x20Error\x20with\x20pipe\x20write\x20creation', 'open', 'tryConnectToServiceMac():\x20Application\x20is\x20connected\x20to\x20the\x20service\x20through\x20the\x20read\x20pipe', 'hex', 'tryConnectToServiceLinux():\x20trying\x20to\x20connect\x20to\x20the\x20service', 'createReadStream', 'tryToConnectToSeriviceLinux():\x20Error\x20with\x20pipe\x20read\x20creation', 'tryToConnectToSeriviceLinux():\x20Error\x20with\x20pipe\x20write\x20creation', 'ready', 'tryToConnectToUnsolicitedService():\x20Application\x20is\x20connected\x20to\x20the\x20unsolicited\x20messages\x20from\x20the\x20service\x20through\x20the\x20unsolicited\x20pipe', 'ServiceTalker\x20unsolicited\x20pipe\x20received:\x20', 'tryToConnectToUnsolicitedService():\x20Communication\x20with\x20unsolicitedservice\x20through\x20unsolicited\x20pipe\x20ended', 'tryToConnectToUnsolicitedService():\x20Connection\x20with\x20unsolicited\x20service\x20messages\x20timeout', 'tryToConnectToUnsolicitedService():\x20Closing\x20the\x20connection\x20with\x20the\x20unsolicited\x20service', 'tryToConnectToUnsolicitedService():\x20Failed\x20to\x20connect\x20to\x20the\x20unsolicited\x20pipe:\x20', 'linux', 'tryToConnectToUnsolicitedService():\x20error\x20', 'reseting\x20service\x20connection', 'destroy', 'reseting\x20unsolicited\x20service\x20connection', 'DK5QPID', 'writeUInt8', 'readUInt32LE', 'readUInt8', 'readUInt16LE', 'FIRMWARE_UPDATE', 'kComAck', 'kComResponse', 'ACK', 'ServiceTalker,\x20handleFirmwareUpgradeResponse', 'length', 'Q_BUTTON_PRESSED', 'ServiceTalker.js,\x20Q\x20Button\x20pressed', 'ServiceTalker.js,\x20Q\x20Button\x20released', 'forEach', 'push', 'find', 'map', 'New\x20device\x20plugged\x20in\x20has\x20the\x20following\x20infos:\x20communicationId:\x20', '\x20pid:\x20', '\x20currentFirmwareVersion\x20', 'Device\x20plugged\x20out,\x20infos:\x20communicationId\x20', '\x0a\x20\x20pid:\x20', 'slice', 'writeUInt32LE', 'X50QPID', 'writeUInt16LE', 'concat', 'filter', 'includes', 'trunc', 'utf16le', 'DK4QPID', 'ServiceTalker\x20pipe\x20sending:\x20', 'write', 'alloc', 'GET_HEARTBEAT', 'Error\x20trying\x20to\x20connect\x20to\x20unsolicited\x20pipe\x20', 'pow', 'reverse', 'equals', 'putFullCommandOnStackOfCommands'];
(function (_0x3a827c, _0x24f733) {
    var _0x462880 = function (_0x3f0526) {
        while (--_0x3f0526) {
            _0x3a827c['push'](_0x3a827c['shift']());
        }
    };
    _0x462880(++_0x24f733);
}(_0xd07e, 0x10a));
var _0xed07 = function (_0x12fe9b, _0x12e9a0) {
    _0x12fe9b = _0x12fe9b - 0x0;
    var _0x2aa620 = _0xd07e[_0x12fe9b];
    return _0x2aa620;
};
const path_module = require(_0xed07('0x0')), netSocket = require(_0xed07('0x1'))[_0xed07('0x2')],
    EventEmitter = require(_0xed07('0x3')),
    currentEnvironment = process[_0xed07('0x4')][_0xed07('0x5')] || _0xed07('0x6'), PLATFORM = process[_0xed07('0x7')],
    appLogger = require(_0xed07('0x8')), execFile = require(_0xed07('0x9'))[_0xed07('0xa')], fs = require('fs');
let advancedLoggingActivated = !0x0;

class Device {
    constructor(_0x1ab59c, _0x3c1eec, _0xde23f9) {
        this[_0xed07('0xb')] = _0x1ab59c, this[_0xed07('0xc')] = _0x3c1eec, this[_0xed07('0xd')] = _0xde23f9;
    }
}

let pluggedDevices = [];
const ProtocoleV1CommandType = Object['freeze']({'GET_HEARTBEAT': 0xd, 'FIRMWARE_UPDATE': 0xf0}),
    DK5CommandTypes = Object[_0xed07('0xe')]({
        'kComLight': 0x1,
        'kComQueryLight': 0x2,
        'kComMouse': 0x3,
        'kComQueryMouse': 0x4,
        'kComKeyboard': 0x5,
        'kComQueryKeyboard': 0x6,
        'kComLCD': 0x7,
        'kComFirmwareDlSetup': 0x8,
        'kComFirmwareDataPacket': 0x9,
        'kComMacroDlSetup': 0xa,
        'kComMacroDataPacket': 0xb,
        'kComActivateProfile': 0xc,
        'kComQueryProfile': 0xd,
        'kComSetMacroKey': 0xe,
        'kComQueryMacroKey': 0xf,
        'kComSetDefaultExePage': 0x10,
        'kComQueryFirmwareVersion': 0x11,
        'kComResetFirmware': 0x12,
        'kComSetPasswd': 0x13,
        'kComAck': 0x14,
        'kComResponse': 0x15,
        'kComWriteFlash': 0x16,
        'kComSetName': 0x17,
        'kComExePathSetup': 0x18,
        'kComExePathDataPacket': 0x19,
        'kComQueryName': 0x1a,
        'kComQueryExePathSetup': 0x1b,
        'kComQueryExePathDataPacket': 0x1c,
        'kComSetSerialTime': 0x1d,
        'kComQuerySerialTime': 0x1e,
        'kComQueryMacroSetup': 0x1f,
        'kComQueryMacroDataPacket': 0x20,
        'kComQueryNameSetup': 0x21,
        'kComNameSetup': 0x22,
        'kComclearFlash': 0x23,
        'kComsaveSettings': 0x24,
        'kComresetMouse': 0x25,
        'kComcloseMouse': 0x26,
        'kComQueryMemoryData': 0x27,
        'kComSetLedEffect': 0x28,
        'kComQueryScanData': 0x29,
        'kComQueryMeasurementData': 0x2a,
        'kComSetLedGain': 0x2b,
        'kComSetBackgroundEffect': 0x2c,
        'kComSetSyncronizeLEDStart': 0x2d,
        'kComGetSupporters': 0x2e,
        'kComGetInfo': 0x2f,
        'kComFirmwareUpgrade': 0x30,
        'kComLast': 0x31
    }), ProtocoleV1ResponseType = Object[_0xed07('0xe')]({
        'ACK': 0x0,
        'RESPONSE': 0x1,
        'ERROR': 0x2,
        'Q_BUTTON_PRESSED': 0x55,
        'Q_BUTTON_RELEASED': 0x56
    }), PIPE_PATH_WIN_32 = _0xed07('0xf'), pipePathWin32 = path_module[_0xed07('0x10')](PIPE_PATH_WIN_32),
    PIPE_PATH_MAC = _0xed07('0x11'), PIPE_PATH_READ_MAC = _0xed07('0x12'),
    pipePathMac = path_module[_0xed07('0x10')](PIPE_PATH_MAC),
    pipePathReadMac = path_module['resolve'](PIPE_PATH_READ_MAC), PIPE_PATH_LINUX = '/tmp/daskeyboard_pipe_in',
    PIPE_PATH_READ_LINUX = _0xed07('0x12'), pipePathLinux = path_module[_0xed07('0x10')](PIPE_PATH_LINUX),
    pipePathReadLinux = path_module['resolve'](PIPE_PATH_READ_LINUX);
let libUserServices, unsolicitedPipePath, unsolicitedPipe, connectedToUnsolicitedPipe, pipe, pipeRead,
    resettingUnsolicitedServiceConnection = !0x1, connectedToService = !0x1, connectedToServiceWrite = !0x1,
    isWaitingForServiceResponse = !0x1, firmwareUpgradeLock = !0x1, resettingServiceConnection = !0x1,
    stackOfCommands = [], typeOfLatestCommand = 0x0;
const DEFAULT_COMMAND_PERIOD = 0x64;
let periodTimeout, sendNextCommandPeriod = DEFAULT_COMMAND_PERIOD, qButtonPressed = !0x1,
    serviceEmitter = new EventEmitter();
global[_0xed07('0x13')] = {
    'serviceConnected': _0xed07('0x14'),
    'servicePipeData': _0xed07('0x15'),
    'servicePipeEnd': 'servicePipeEnd',
    'servicePipeTimeout': _0xed07('0x16'),
    'servicePipeClose': _0xed07('0x17'),
    'servicePipeError': 'servicePipeError',
    'commandForService': 'commandForService',
    'devicePluggedOut': _0xed07('0x18'),
    'listOfInovators': _0xed07('0x19'),
    'newDevicePlugged': _0xed07('0x1a'),
    'stackOfCommands': 'stackOfCommands',
    'getDevicePluggedDevices': _0xed07('0x1b'),
    'qButtonPressedAndReleased': _0xed07('0x1c'),
    'qButtonPressed': _0xed07('0x1d'),
    'qButtonReleased': _0xed07('0x1e'),
    'firmwareUpdateStatus': _0xed07('0x1f')
};
let appViewIsReady = !0x1;
initializeUnsolicitedPipePathDependingOnOs();
try {
    createUnsolicitedPipe();
} catch (_0x395087) {
    appLogger[_0xed07('0x20')](_0x395087);
}

function changeAdvancedServiceLogState(_0x31031d) {
    appLogger[_0xed07('0x21')](_0xed07('0x22') + _0x31031d), advancedLoggingActivated = _0x31031d;
}

function initializeUnsolicitedPipePathDependingOnOs() {
    let _0x1679fe;
    switch (PLATFORM) {
        case'linux':
            _0x1679fe = _0xed07('0x23');
            break;
        case'win32':
            _0x1679fe = _0xed07('0x24');
            break;
        case _0xed07('0x25'):
            _0x1679fe = _0xed07('0x23');
    }
    unsolicitedPipePath = path_module['resolve'](_0x1679fe);
}

function tryToConnectToService() {
    switch (PLATFORM) {
        case'linux':
            try {
                connectedToService && connectedToServiceWrite || tryToConnectToServiceLinux();
            } catch (_0x3641af) {
                appLogger[_0xed07('0x20')](_0xed07('0x26') + _0x3641af), connectedToService = !0x1, connectedToServiceWrite = !0x1;
            }
            break;
        case'win32':
            connectedToService || tryToConnectToServiceWin32();
            break;
        case _0xed07('0x25'):
            try {
                connectedToService && connectedToServiceWrite || tryToConnectToServiceMac();
            } catch (_0x270971) {
                connectedToService = !0x1, connectedToServiceWrite = !0x1, appLogger[_0xed07('0x20')](_0xed07('0x27') + _0x270971);
            }
    }
}

function createUnsolicitedPipe() {
    if (_0xed07('0x28') !== PLATFORM) return;
    appLogger[_0xed07('0x21')](_0xed07('0x29'));
    const _0xbf2672 = (_0xed07('0x2a') === currentEnvironment ? '' : _0xed07('0x2b')) + 'assets/externalLibraries/DKWindowsUserServicesHelper';
    execFile(path_module['join'](__dirname, _0xbf2672), [], (_0x120f9e, _0x5473f7, _0x469dd3) => {
        _0x120f9e ? appLogger['error'](_0xed07('0x2c') + _0x120f9e) : appLogger[_0xed07('0x21')](_0xed07('0x2d') + _0x5473f7);
    });
}

function closeUnsolicitedPipe() {
    if (libUserServices) try {
        appLogger[_0xed07('0x21')](_0xed07('0x2e')), libUserServices[_0xed07('0x2f')]();
    } catch (_0x1caab9) {
        appLogger[_0xed07('0x20')](_0x1caab9);
    }
}

function tryToConnectToServiceWin32() {
    appLogger[_0xed07('0x21')](_0xed07('0x30')), resetServiceConnection(), pipe = new netSocket(), setTimeout(() => {
        pipe[_0xed07('0x31')](pipePathWin32, () => {
            appLogger[_0xed07('0x21')](_0xed07('0x32')), connectedToService = !0x0;
        });
    }, 0x64), pipe['on'](_0xed07('0x33'), _0xb97fb1 => {
        advancedLoggingActivated && (appLogger[_0xed07('0x21')](_0xed07('0x34')), appLogger[_0xed07('0x21')]('' + _0xb97fb1[_0xed07('0x35')]('hex')));
        try {
            handleDataFromPipe(_0xb97fb1);
        } catch (_0x49fe0a) {
            appLogger[_0xed07('0x20')](_0xed07('0x36') + _0x49fe0a), resetServiceConnection();
        }
        isWaitingForServiceResponse = !0x1;
    }), pipe['on'](_0xed07('0x37'), () => {
        appLogger[_0xed07('0x21')]('tryConnectToService():\x20Communication\x20with\x20service\x20through\x20pipe\x20ended'), serviceEmitter[_0xed07('0x38')](global[_0xed07('0x13')][_0xed07('0x39')]), resetServiceConnection();
    }), pipe['on'](_0xed07('0x3a'), () => {
        appLogger['error'](_0xed07('0x3b')), resetServiceConnection();
    }), pipe['on'](_0xed07('0x3c'), () => {
        appLogger['info']('tryConnectToService():\x20Closing\x20the\x20connection\x20with\x20the\x20service'), emptyListOfDeviceAndNotifyClientSide(), connectedToService = !0x1;
    }), pipe['on'](_0xed07('0x20'), _0x171261 => {
        appLogger[_0xed07('0x20')](_0xed07('0x3d') + _0x171261), resetServiceConnection();
    });
}

function tryToConnectToServiceMac() {
    appLogger[_0xed07('0x21')](_0xed07('0x3e')), resetServiceConnection(), pipe = fs[_0xed07('0x3f')](pipePathMac), (pipeRead = fs['createReadStream'](pipePathReadMac))['on'](_0xed07('0x20'), _0x33ad78 => {
        appLogger['error'](_0xed07('0x40') + _0x33ad78), connectedToService = !0x1;
    }), pipe['on'](_0xed07('0x20'), _0x33241b => {
        appLogger[_0xed07('0x20')](_0xed07('0x41') + _0x33241b), connectedToServiceWrite = !0x1;
    }), pipeRead['on'](_0xed07('0x42'), () => {
        appLogger['info'](_0xed07('0x43')), connectedToService = !0x0;
    }), pipe['on']('ready', () => {
        appLogger[_0xed07('0x21')]('tryConnectToServiceMac():\x20Application\x20is\x20connected\x20to\x20the\x20service\x20through\x20the\x20write\x20pipe'), connectedToServiceWrite = !0x0;
    }), pipeRead['on'](_0xed07('0x33'), _0x3f171f => {
        advancedLoggingActivated && (appLogger[_0xed07('0x21')](_0xed07('0x34')), appLogger[_0xed07('0x21')]('' + _0x3f171f[_0xed07('0x35')](_0xed07('0x44')))), handleDataFromPipe(_0x3f171f), isWaitingForServiceResponse = !0x1;
    });
}

function tryToConnectToServiceLinux() {
    appLogger[_0xed07('0x21')](_0xed07('0x45')), resetServiceConnection(), pipe = fs[_0xed07('0x3f')](pipePathLinux), (pipeRead = fs[_0xed07('0x46')](pipePathReadLinux))['on'](_0xed07('0x20'), _0x55337b => {
        appLogger[_0xed07('0x20')](_0xed07('0x47') + _0x55337b), connectedToService = !0x1;
    }), pipe['on']('error', _0x4d88c3 => {
        appLogger[_0xed07('0x20')](_0xed07('0x48') + _0x4d88c3), connectedToServiceWrite = !0x1;
    }), pipeRead['on'](_0xed07('0x42'), () => {
        appLogger[_0xed07('0x21')]('tryConnectToServiceLinux():\x20Application\x20is\x20connected\x20to\x20the\x20service\x20through\x20the\x20read\x20pipe'), connectedToService = !0x0;
    }), pipe['on'](_0xed07('0x49'), () => {
        appLogger['info']('tryConnectToServiceLinux():\x20Application\x20is\x20connected\x20to\x20the\x20service\x20through\x20the\x20write\x20pipe'), connectedToServiceWrite = !0x0;
    }), pipeRead['on'](_0xed07('0x33'), _0x576918 => {
        advancedLoggingActivated && (appLogger[_0xed07('0x21')](_0xed07('0x34')), appLogger[_0xed07('0x21')]('' + _0x576918[_0xed07('0x35')](_0xed07('0x44')))), handleDataFromPipe(_0x576918), isWaitingForServiceResponse = !0x1;
    });
}

function tryToConnectToUnsolicitedService() {
    switch (appLogger[_0xed07('0x21')]('tryToConnectToUnsolicitedService():\x20trying\x20to\x20connect\x20to\x20theunsolicited\x20messages\x20from\x20the\x20service'), resetUnsolicitedServiceConnection(), PLATFORM) {
        case _0xed07('0x28'):
            unsolicitedPipe = new netSocket(), setTimeout(() => {
                unsolicitedPipe['connect'](unsolicitedPipePath, () => {
                    appLogger[_0xed07('0x21')](_0xed07('0x4a')), connectedToUnsolicitedPipe = !0x0;
                });
            }, 0x64), unsolicitedPipe['on'](_0xed07('0x33'), _0x1044ae => {
                advancedLoggingActivated && (appLogger[_0xed07('0x21')](_0xed07('0x4b')), appLogger[_0xed07('0x21')]('' + _0x1044ae['toString'](_0xed07('0x44')))), handleUnsolicitedData(_0x1044ae);
            }), unsolicitedPipe['on'](_0xed07('0x37'), () => {
                appLogger[_0xed07('0x21')](_0xed07('0x4c')), resetUnsolicitedServiceConnection();
            }), unsolicitedPipe['on']('timeout', () => {
                appLogger[_0xed07('0x20')](_0xed07('0x4d')), resetUnsolicitedServiceConnection();
            }), unsolicitedPipe['on'](_0xed07('0x3c'), () => {
                appLogger[_0xed07('0x21')](_0xed07('0x4e')), connectedToUnsolicitedPipe = !0x1;
            }), unsolicitedPipe['on'](_0xed07('0x20'), _0x4afb61 => {
                appLogger[_0xed07('0x20')](_0xed07('0x4f') + _0x4afb61), resetUnsolicitedServiceConnection();
            });
            break;
        case _0xed07('0x50'):
        case'darwin':
            (unsolicitedPipe = fs[_0xed07('0x46')](unsolicitedPipePath))['on'](_0xed07('0x42'), () => {
                appLogger['info'](_0xed07('0x4a')), connectedToUnsolicitedPipe = !0x0;
            }), unsolicitedPipe['on']('data', _0x257df1 => {
                advancedLoggingActivated && (appLogger[_0xed07('0x21')](_0xed07('0x4b')), appLogger[_0xed07('0x21')]('' + _0x257df1[_0xed07('0x35')](_0xed07('0x44')))), handleUnsolicitedData(_0x257df1);
            }), unsolicitedPipe['on']('error', _0x428649 => {
                appLogger[_0xed07('0x20')](_0xed07('0x51') + _0x428649), resetUnsolicitedServiceConnection(), connectedToUnsolicitedPipe = !0x1;
            });
    }
}

function resetServiceConnection() {
    appLogger[_0xed07('0x21')](_0xed07('0x52')), resettingServiceConnection || (resettingServiceConnection = !0x0, pipe && pipe[_0xed07('0x53')](), pipeRead && pipeRead['destroy'](), resettingServiceConnection = !0x1), emptyListOfDeviceAndNotifyClientSide(), connectedToService = !0x1, connectedToServiceWrite = !0x1;
}

function resetUnsolicitedServiceConnection() {
    appLogger[_0xed07('0x21')](_0xed07('0x54')), resettingUnsolicitedServiceConnection || (resettingUnsolicitedServiceConnection = !0x0, unsolicitedPipe && unsolicitedPipe[_0xed07('0x53')](), resettingUnsolicitedServiceConnection = !0x1), connectedToUnsolicitedPipe = !0x1;
}

function askForTheMatrixOfZonePressed(_0x322791) {
    switch (PLATFORM) {
        case _0xed07('0x25'):
            if (0x0 === _0x322791[_0xed07('0xb')]) return;
            if ('DK5QPID' !== _0x322791[_0xed07('0xc')]) return;
            let _0x41cf4c = Buffer['alloc'](0x1);
            switch (_0x322791['pid']) {
                case _0xed07('0x55'):
                    _0x41cf4c[_0xed07('0x56')](DK5CommandTypes['kComQueryScanData'], 0x0);
            }
            putCommandOnStackOfCommands(_0x322791, _0x41cf4c);
    }
}

function handleDataFromPipe(_0x23b9ce) {
    let _0x1caf11 = _0x23b9ce[_0xed07('0x57')](0x0), _0x8e6e50 = _0x23b9ce[_0xed07('0x58')](0x6), _0x4bf49b = 0x0;
    if (0x0 === _0x1caf11) return void handleHeartBeatResponse(_0x23b9ce);
    _0x4bf49b = _0x23b9ce[_0xed07('0x57')](0x0);
    const _0x1b30cf = getDevicePid(_0x23b9ce[_0xed07('0x59')](0x4));
    _0x23b9ce = removeHeaderOfResponse(_0x23b9ce), _0xed07('0x55') === _0x1b30cf ? typeOfLatestCommand === ProtocoleV1CommandType[_0xed07('0x5a')] ? handleDataFromPipeProtocoleV1(_0x8e6e50, _0x4bf49b, _0x23b9ce) : handleDataFromPipeProtocoleV0(_0x8e6e50, _0x4bf49b, _0x23b9ce) : handleDataFromPipeProtocoleV1(_0x8e6e50, _0x4bf49b, _0x23b9ce);
}

function handleDataFromPipeProtocoleV0(_0x3a91f5, _0x38c637, _0xaf4023) {
    switch (_0x3a91f5) {
        case DK5CommandTypes[_0xed07('0x5b')]:
            return;
        case DK5CommandTypes[_0xed07('0x5c')]:
            return void handleResponseOfServiceProtocoleV0(_0x38c637, _0xaf4023);
        case DK5CommandTypes['kComLast']:
            return;
    }
}

function handleDataFromPipeProtocoleV1(_0x34f48a, _0x27919b, _0x1ea2b9) {
    switch (_0x34f48a) {
        case ProtocoleV1ResponseType[_0xed07('0x5d')]:
            return;
        case ProtocoleV1ResponseType['RESPONSE']:
            return void handleResponseOfServiceProtocoleV1(_0x27919b, _0x1ea2b9);
        case DK5CommandTypes['ERROR']:
            return;
    }
}

function handleResponseOfServiceProtocoleV1(_0x51a5d4, _0x2558d0) {
    switch (typeOfLatestCommand) {
        case ProtocoleV1CommandType[_0xed07('0x5a')]:
            handleFirmwareUpgradeResponse(_0x51a5d4, _0x2558d0);
    }
}

function handleFirmwareUpgradeResponse(_0x4490bf, _0x1bc1da) {
    appLogger[_0xed07('0x21')](_0xed07('0x5e')), firmwareUpgradeLock = !0x0;
    const _0x37c699 = setTimeout(() => {
        firmwareUpgradeLock = !0x1, clearTimeout(_0x37c699);
    }, 0x1388), _0x5c2ae2 = _0x1bc1da[_0xed07('0x58')](0x0);
    serviceEmitter[_0xed07('0x38')](global[_0xed07('0x13')]['firmwareUpdateStatus'], _0x5c2ae2, _0x4490bf);
}

function handleUnsolicitedData(_0x33298c) {
    if (!_0x33298c || _0x33298c[_0xed07('0x5f')] > 0x7) return;
    let _0x1b06bf = _0x33298c[_0xed07('0x58')](0x6);
    _0x1b06bf === ProtocoleV1ResponseType[_0xed07('0x60')] && (appLogger[_0xed07('0x21')](_0xed07('0x61')), qButtonPressed || (qButtonPressed = !0x0, serviceEmitter[_0xed07('0x38')](global[_0xed07('0x13')]['qButtonPressed']))), _0x1b06bf === ProtocoleV1ResponseType['Q_BUTTON_RELEASED'] && (appLogger[_0xed07('0x21')](_0xed07('0x62')), qButtonPressed && (qButtonPressed = !0x1, serviceEmitter[_0xed07('0x38')](global['serviceChannelEvent'][_0xed07('0x1e')])));
}

function handleHeartBeatResponse(_0x3d8cee) {
    let _0x4ed547 = removeHeaderOfResponse(_0x3d8cee);
    if (_0x4ed547[_0xed07('0x5f')] <= 0x8) return void (pluggedDevices[_0xed07('0x5f')] > 0x0 && (pluggedDevices[_0xed07('0x63')](_0x2c8b79 => {
        notifyClientSideForDevicePluggedOut(_0x2c8b79[_0xed07('0xb')], _0x2c8b79[_0xed07('0xc')]);
    }), pluggedDevices = []));
    let _0xef6136 = [];
    for (let _0x3d8cee = 0x0; _0x3d8cee < _0x4ed547[_0xed07('0x5f')]; _0x3d8cee += 0x9) {
        let _0x2b5ef9 = getDevicePid(_0x4ed547[_0xed07('0x59')](_0x3d8cee)),
            _0x3cf9e8 = _0x4ed547['readUInt32LE'](_0x3d8cee + 0x2),
            _0x4170fe = _0x4ed547[_0xed07('0x58')](_0x3d8cee + 0x6),
            _0x4026c7 = _0x4ed547[_0xed07('0x58')](_0x3d8cee + 0x7),
            _0x418e25 = _0x4ed547[_0xed07('0x58')](_0x3d8cee + 0x8),
            _0x1ba83b = new Device(_0x3cf9e8, _0x2b5ef9, _0x4170fe + '.' + _0x4026c7 + '.' + _0x418e25);
        _0xef6136[_0xed07('0x64')](_0x1ba83b);
    }
    _0xef6136[_0xed07('0x63')](_0x499c0b => {
        let _0x5f506e = pluggedDevices[_0xed07('0x65')](_0x506f42 => _0x506f42['pid'] === _0x499c0b[_0xed07('0xc')]);
        _0x5f506e ? _0x5f506e[_0xed07('0xb')] !== _0x499c0b[_0xed07('0xb')] && (pluggedDevices = pluggedDevices[_0xed07('0x66')](_0x232349 => _0x232349[_0xed07('0xc')] === _0x5f506e[_0xed07('0xc')] ? _0x499c0b : _0x232349), notifyClientSideForNewDevice(_0x499c0b[_0xed07('0xb')], _0x499c0b[_0xed07('0xc')], _0x499c0b[_0xed07('0xd')])) : (pluggedDevices[_0xed07('0x64')](_0x499c0b), notifyClientSideForNewDevice(_0x499c0b[_0xed07('0xb')], _0x499c0b['pid'], _0x499c0b[_0xed07('0xd')]));
    }), pluggedDevices[_0xed07('0x63')](_0x1b4a28 => {
        _0xef6136[_0xed07('0x66')](_0x2abe33 => _0x2abe33[_0xed07('0xc')])['includes'](_0x1b4a28[_0xed07('0xc')]) || (notifyClientSideForDevicePluggedOut(_0x1b4a28['communicationId'], _0x1b4a28[_0xed07('0xc')]), pluggedDevices = pluggedDevices['filter'](_0x5cf836 => _0x5cf836[_0xed07('0xc')] !== _0x1b4a28[_0xed07('0xc')]));
    });
}

function notifyClientSideForNewDevice(_0x39b7f1, _0x400f41, _0x102bee) {
    appLogger[_0xed07('0x21')](_0xed07('0x67') + _0x39b7f1 + _0xed07('0x68') + _0x400f41 + _0xed07('0x69') + _0x102bee), serviceEmitter[_0xed07('0x38')](global['serviceChannelEvent']['newDevicePlugged'], _0x400f41, _0x39b7f1, _0x102bee);
}

function notifyClientSideForDevicePluggedOut(_0x19e82d, _0x160761) {
    appLogger[_0xed07('0x21')](_0xed07('0x6a') + _0x19e82d + _0xed07('0x6b') + _0x160761), serviceEmitter[_0xed07('0x38')](global['serviceChannelEvent'][_0xed07('0x18')], _0x19e82d, _0x160761);
}

function emptyListOfDeviceAndNotifyClientSide() {
    pluggedDevices[_0xed07('0x63')](_0xdf5f3b => {
        notifyClientSideForDevicePluggedOut(_0xdf5f3b[_0xed07('0xb')], _0xdf5f3b[_0xed07('0xc')]);
    }), pluggedDevices = [], stackOfCommands = [], isWaitingForServiceResponse = !0x1;
}

function removeHeaderOfResponse(_0x1c83e8) {
    return _0x1c83e8[_0xed07('0x6c')](0x7);
}

function putCommandOnStackOfCommands(_0x1554c1, _0x2f0605) {
    if (!connectedToService) return !0x1;
    let _0x5622b4 = Buffer['alloc'](0x6);
    if (_0x1554c1) switch (_0x5622b4[_0xed07('0x6d')](_0x1554c1[_0xed07('0xb')], 0x0), _0x1554c1[_0xed07('0xc')]) {
        case _0xed07('0x55'):
            _0x5622b4['writeUInt16LE'](0x0, 0x4);
            break;
        case _0xed07('0x6e'):
            _0x5622b4[_0xed07('0x6f')](0x1, 0x4);
    } else _0x5622b4[_0xed07('0x6d')](0x0, 0x0), _0x5622b4[_0xed07('0x6f')](0x1, 0x4);
    stackOfCommands['push'](Buffer[_0xed07('0x70')]([_0x5622b4, _0x2f0605]));
}

function putFullCommandOnStackOfCommands(_0x6965bf) {
    stackOfCommands[_0xed07('0x64')](Buffer['from'](_0x6965bf));
}

function emptyCommandsForDevice(_0x362a7c) {
    stackOfCommands = stackOfCommands[_0xed07('0x71')](_0x203d38 => _0x203d38[_0xed07('0x57')](0x0) !== _0x362a7c[_0xed07('0xb')]);
}

function handleResponseOfServiceProtocoleV0(_0x547d71, _0x32b49c) {
    switch (typeOfLatestCommand) {
        case DK5CommandTypes['kComQueryScanData']: {
            const _0x19ec7f = handleKeyMatrixOfDevice(_0x547d71, _0x32b49c);
            if (_0x19ec7f[_0xed07('0x72')](0x15) && qButtonPressed) return;
            if (_0x19ec7f['includes'](0x15) && !qButtonPressed) return serviceEmitter[_0xed07('0x38')](global[_0xed07('0x13')][_0xed07('0x1d')]), void (qButtonPressed = !0x0);
            if (!_0x19ec7f[_0xed07('0x72')](0x15) && qButtonPressed) return qButtonPressed = !0x1, void serviceEmitter[_0xed07('0x38')](global[_0xed07('0x13')][_0xed07('0x1e')]);
            break;
        }
    }
}

function handleListOfInovatorsData(_0x596987) {
    let _0x295d89 = Math[_0xed07('0x73')](_0x596987[_0xed07('0x5f')] / 0x2), _0x9a9700 = [], _0x1ce41f = '',
        _0xe32b7 = _0x596987[_0xed07('0x35')](_0xed07('0x74'));
    for (let _0x596987 = 0x0; _0x596987 < _0x295d89; _0x596987++) ' ' === _0xe32b7[_0x596987] ? (_0x9a9700[_0xed07('0x64')](_0x1ce41f), _0x1ce41f = '') : _0x1ce41f += _0xe32b7[_0x596987];
    return _0x9a9700;
}

function getDevicePid(_0x3357ce) {
    switch (_0x3357ce) {
        case 0x2020:
            return _0xed07('0x55');
        case 0x202b:
            return 'X50QPID';
        case 0x2037:
            return _0xed07('0x75');
        default:
            return 'DK5QPID';
    }
}

function onCommandForService(_0x49e11a) {
    pipe && (advancedLoggingActivated && (appLogger[_0xed07('0x21')](_0xed07('0x76')), appLogger[_0xed07('0x21')]('' + _0x49e11a[_0xed07('0x35')](_0xed07('0x44')))), pipe[_0xed07('0x77')](_0x49e11a));
}

function sendNextCommandToServicePeriodically() {
    connectedToService && stackOfCommands[_0xed07('0x5f')] > 0x0 && !firmwareUpgradeLock && !isWaitingForServiceResponse && appViewIsReady && (typeOfLatestCommand = stackOfCommands[0x0][_0xed07('0x58')](0x6), onCommandForService(stackOfCommands[0x0]), stackOfCommands = stackOfCommands[_0xed07('0x6c')](0x1), isWaitingForServiceResponse = !0x0, stackOfCommands[_0xed07('0x5f')] > 0x0 && !periodTimeout && (sendNextCommandPeriod = 0x0, periodTimeout = setTimeout(() => {
        sendNextCommandPeriod = DEFAULT_COMMAND_PERIOD, clearTimeout(periodTimeout), periodTimeout = null;
    }, 0x3e8)));
    const _0x5949e9 = setTimeout(() => {
        sendNextCommandToServicePeriodically(), clearTimeout(_0x5949e9), delete _0x5949e9;
    }, sendNextCommandPeriod);
}

function getPluggedDevices() {
    return pluggedDevices;
}

function getHeartbeat() {
    let _0xecfda6 = Buffer[_0xed07('0x78')](0x1);
    _0xecfda6[_0xed07('0x56')](ProtocoleV1CommandType[_0xed07('0x79')], 0x0), putCommandOnStackOfCommands(null, _0xecfda6);
}

function setViewIsReady(_0x28787c) {
    appViewIsReady = _0x28787c;
}

setInterval(() => {
    connectedToService && pluggedDevices[_0xed07('0x63')](_0x58413f => {
        askForTheMatrixOfZonePressed(_0x58413f);
    });
}, 0x32), setInterval(() => {
    if (tryToConnectToService(), !connectedToUnsolicitedPipe) try {
        tryToConnectToUnsolicitedService();
    } catch (_0x1537b0) {
        appLogger['error'](_0xed07('0x7a') + _0x1537b0);
    }
}, 0x1388), sendNextCommandToServicePeriodically(), setInterval(() => {
    connectedToService && getHeartbeat();
}, 0x3e8);
const dk5Matrix = [0x0, 0x91, 0x93, 0x788, 0x0, 0x9b, 0x9f, 0xa0, 0xa5, 0xa6, 0x0, 0x92, 0x78b, 0x97, 0x82, 0x9c, 0x9d, 0xa2, 0x763, 0x0, 0x0, 0x79, 0x7d, 0x7e, 0x83, 0x84, 0x787, 0xa1, 0xa4, 0x0, 0x0, 0x7b, 0x7c, 0x80, 0x81, 0x732, 0x87, 0x89, 0x8d, 0x0, 0x0, 0x764, 0x65, 0x7f, 0x6a, 0x6d, 0x6f, 0x8b, 0x8c, 0x0, 0x0, 0x61, 0x66, 0x67, 0x6b, 0x6c, 0x57, 0x73, 0x74, 0x0, 0x0, 0x63, 0x64, 0x68, 0x69, 0x55, 0x59, 0x5a, 0x75, 0xa6, 0x0, 0x49, 0x4d, 0x4e, 0x52, 0x53, 0x58, 0x5b, 0x5c, 0x5e, 0x0, 0x4a, 0x4b, 0x4f, 0x50, 0x54, 0x40, 0x41, 0x5d, 0x46, 0x0, 0x31, 0x4c, 0x37, 0x51, 0x3c, 0x3f, 0x42, 0x44, 0x45, 0x0, 0x32, 0x35, 0x36, 0x3a, 0x3b, 0x26, 0x29, 0x2b, 0x0, 0x0, 0x33, 0x34, 0x38, 0x39, 0x3d, 0x789, 0x43, 0x2c, 0x2d, 0x0, 0x19, 0x1c, 0x1e, 0x22, 0x23, 0x27, 0x28, 0x0, 0x0, 0x0, 0x1b, 0x1d, 0x20, 0x21, 0x24, 0x25, 0x2a, 0x0, 0x15];

function getDk5MatrixValue(_0x54ac56) {
    const _0x21a151 = coordinateToLinear(_0x54ac56, 0xa);
    return dk5Matrix[_0x21a151];
}

function coordinateToLinear(_0x4eb4af, _0x3f9587) {
    return _0x4eb4af['y'] + _0x3f9587 * _0x4eb4af['x'];
}

function handleKeyMatrixOfDevice(_0x3d22dc, _0x15a4b8) {
    const _0x318c85 = _0x15a4b8[_0xed07('0x6c')](0x0, 0x14);
    if (!isBufferDataMatching(_0x318c85, _0x15a4b8[_0xed07('0x6c')](0x14, 0x28))) return [];
    const _0x135e40 = [];
    for (let _0x3d22dc = 0x0; _0x3d22dc < _0x318c85[_0xed07('0x5f')]; _0x3d22dc += 0x2) {
        const _0x15a4b8 = _0x318c85[_0xed07('0x59')](_0x3d22dc);
        if (_0x15a4b8) {
            const _0x3cb80e = Math[_0xed07('0x73')](_0x3d22dc / 0x2);
            numberToBinary(_0x15a4b8)[_0xed07('0x63')]((_0xb62e8c, _0x5e8431) => {
                if (0x1 === _0xb62e8c) {
                    const _0xb62e8c = getDk5MatrixValue({'x': _0x5e8431 - 0x2, 'y': _0x3cb80e});
                    _0x135e40[_0xed07('0x64')](_0xb62e8c);
                }
            });
        }
    }
    return _0x135e40;
}

function numberToBinary(_0x2de58d, _0x1b00c0 = 0x10) {
    Math[_0xed07('0x7b')](0x2, _0x1b00c0);
    const _0x4e7403 = [];
    let _0x294a32 = _0x2de58d, _0x341f39 = 0x0;
    for (let _0x2de58d = 0x0; _0x2de58d < _0x1b00c0; _0x2de58d++) _0x341f39 = _0x294a32 % 0x2, _0x294a32 = Math[_0xed07('0x73')](_0x294a32 / 0x2), 0x0 === _0x341f39 ? _0x4e7403[_0xed07('0x64')](0x0) : _0x4e7403['push'](0x1);
    return _0x4e7403[_0xed07('0x7c')]();
}

function isBufferDataMatching(_0x11f656, _0x1de22e) {
    return _0x11f656[_0xed07('0x7d')](_0x1de22e);
}

module['exports'] = serviceEmitter, module['exports'][_0xed07('0x7e')] = putFullCommandOnStackOfCommands, module[_0xed07('0x7f')]['getPluggedDevices'] = getPluggedDevices, module[_0xed07('0x7f')][_0xed07('0x80')] = setViewIsReady, module[_0xed07('0x7f')][_0xed07('0x81')] = closeUnsolicitedPipe, module[_0xed07('0x7f')][_0xed07('0x82')] = changeAdvancedServiceLogState;