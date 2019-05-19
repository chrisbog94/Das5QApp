var _53374 = ['exports', 'setViewIsReady', 'closeUnsolicitedPipe', 'changeAdvancedServiceLogState', 'path', 'net', 'Socket', 'events', 'env', 'Q_NODE_ENV', 'production', 'platform', './logger.js', 'child_process', 'execFile', 'communicationId', 'pid', 'firmwareVersion', 'freeze', '\x5c\x5c.\x5cpipe\x5cdaskeyboard_pipe', 'resolve', '/tmp/daskeyboard_pipe_in', '/tmp/daskeyboard_pipe_out', 'serviceChannelEvent', 'serviceConnected', 'servicePipeData', 'servicePipeTimeout', 'servicePipeClose', 'devicePluggedOut', 'listOfInovators', 'newDevicePlugged', 'getPluggedDevices', 'qButtonPressedAndReleased', 'qButtonPressed', 'qButtonReleased', 'firmwareUpdateStatus', 'error', 'info', 'ServiceTalker\x20changeAdvancedServiceLogState\x20to\x20', '/tmp/daskeyboard_pipe_unsolicited', '\x5c\x5c.\x5cPIPE\x5cdaskeyboard_pipe_unsolicited', 'darwin', 'tryToConnectToService():\x20Error\x20trying\x20to\x20connect\x20to\x20service\x20linux\x20', 'tryToConnectToService():\x20Error\x20trying\x20to\x20connect\x20to\x20service\x20Mac\x20', 'win32', 'createUnsolicitedPipe()', 'development', '/../app.asar.unpacked/', 'Error\x20when\x20trying\x20to\x20create\x20unsolicited\x20pipe\x20', 'Created\x20unsolicited\x20pipe\x20', 'Closing\x20unsolicited\x20pipe', 'CloseQAppUserServices', 'tryConnectToService():\x20trying\x20to\x20connect\x20to\x20the\x20service', 'connect', 'tryConnectToService():\x20Application\x20is\x20connected\x20to\x20the\x20service\x20through\x20the\x20pipe', 'data', 'ServiceTalker\x20pipe\x20receiving:', 'toString', 'Error\x20while\x20handling\x20data\x20from\x20pipe:\x20', 'end', 'emit', 'servicePipeEnd', 'timeout', 'tryConnectToService():\x20Connection\x20with\x20service\x20timeout', 'close', 'tryConnectToService():\x20Failed\x20to\x20connect\x20to\x20the\x20pipe:\x20', 'tryConnectToServiceMac():\x20trying\x20to\x20connect\x20to\x20the\x20service', 'createWriteStream', 'tryToConnectToSeriviceMac():\x20Error\x20with\x20pipe\x20read\x20creation', 'tryToConnectToSeriviceMac():\x20Error\x20with\x20pipe\x20write\x20creation', 'open', 'tryConnectToServiceMac():\x20Application\x20is\x20connected\x20to\x20the\x20service\x20through\x20the\x20read\x20pipe', 'hex', 'tryConnectToServiceLinux():\x20trying\x20to\x20connect\x20to\x20the\x20service', 'createReadStream', 'tryToConnectToSeriviceLinux():\x20Error\x20with\x20pipe\x20read\x20creation', 'tryToConnectToSeriviceLinux():\x20Error\x20with\x20pipe\x20write\x20creation', 'ready', 'tryToConnectToUnsolicitedService():\x20Application\x20is\x20connected\x20to\x20the\x20unsolicited\x20messages\x20from\x20the\x20service\x20through\x20the\x20unsolicited\x20pipe', 'ServiceTalker\x20unsolicited\x20pipe\x20received:\x20', 'tryToConnectToUnsolicitedService():\x20Communication\x20with\x20unsolicitedservice\x20through\x20unsolicited\x20pipe\x20ended', 'tryToConnectToUnsolicitedService():\x20Connection\x20with\x20unsolicited\x20service\x20messages\x20timeout', 'tryToConnectToUnsolicitedService():\x20Closing\x20the\x20connection\x20with\x20the\x20unsolicited\x20service', 'tryToConnectToUnsolicitedService():\x20Failed\x20to\x20connect\x20to\x20the\x20unsolicited\x20pipe:\x20', 'linux', 'tryToConnectToUnsolicitedService():\x20error\x20', 'reseting\x20service\x20connection', 'destroy', 'reseting\x20unsolicited\x20service\x20connection', 'DK5QPID', 'writeUInt8', 'readUInt32LE', 'readUInt8', 'readUInt16LE', 'FIRMWARE_UPDATE', 'kComAck', 'kComResponse', 'ACK', 'ServiceTalker,\x20handleFirmwareUpgradeResponse', 'length', 'Q_BUTTON_PRESSED', 'ServiceTalker.js,\x20Q\x20Button\x20pressed', 'ServiceTalker.js,\x20Q\x20Button\x20released', 'forEach', 'push', 'find', 'map', 'New\x20device\x20plugged\x20in\x20has\x20the\x20following\x20infos:\x20communicationId:\x20', '\x20pid:\x20', '\x20currentFirmwareVersion\x20', 'Device\x20plugged\x20out,\x20infos:\x20communicationId\x20', '\x0a\x20\x20pid:\x20', 'slice', 'writeUInt32LE', 'X50QPID', 'writeUInt16LE', 'concat', 'filter', 'includes', 'trunc', 'utf16le', 'DK4QPID', 'ServiceTalker\x20pipe\x20sending:\x20', 'write', 'alloc', 'GET_HEARTBEAT', 'Error\x20trying\x20to\x20connect\x20to\x20unsolicited\x20pipe\x20', 'pow', 'reverse', 'equals', 'putFullCommandOnStackOfCommands'];
(function (_3834492, _2422579) {
    var _4597888 = function (_4130086) {
        while (--_4130086) {
            _3834492['push'](_3834492['shift']());
        }
    };
    _4597888(++_2422579);
}(_53374, 266));
var deobfuscate = function (_1244827, _1239456) {
    _1244827 = _1244827 - 0;
    var _2795040 = _53374[_1244827];
    return _2795040;
};
const path_module = require('path'), netSocket = require('net')['Socket'],
    EventEmitter = require('events'),
    currentEnvironment = process['env']['Q_NODE_ENV'] || 'production', PLATFORM = process['platform'],
    appLogger = require('./logger.js'), execFile = require('child_process')['execFile'], fs = require('fs');
let advancedLoggingActivated = !0;

class Device {
    constructor(_1750428, _3940076, _14558201) {
        this['communicationId'] = _1750428, this['pid'] = _3940076, this['firmwareVersion'] = _14558201;
    }
}

let pluggedDevices = [];
const ProtocoleV1CommandType = Object['freeze']({'GET_HEARTBEAT': 13, 'FIRMWARE_UPDATE': 240}),
    DK5CommandTypes = Object['freeze']({
        'kComLight': 1,
        'kComQueryLight': 2,
        'kComMouse': 3,
        'kComQueryMouse': 4,
        'kComKeyboard': 5,
        'kComQueryKeyboard': 6,
        'kComLCD': 7,
        'kComFirmwareDlSetup': 8,
        'kComFirmwareDataPacket': 9,
        'kComMacroDlSetup': 10,
        'kComMacroDataPacket': 11,
        'kComActivateProfile': 12,
        'kComQueryProfile': 13,
        'kComSetMacroKey': 14,
        'kComQueryMacroKey': 15,
        'kComSetDefaultExePage': 16,
        'kComQueryFirmwareVersion': 17,
        'kComResetFirmware': 18,
        'kComSetPasswd': 19,
        'kComAck': 20,
        'kComResponse': 21,
        'kComWriteFlash': 22,
        'kComSetName': 23,
        'kComExePathSetup': 24,
        'kComExePathDataPacket': 25,
        'kComQueryName': 26,
        'kComQueryExePathSetup': 27,
        'kComQueryExePathDataPacket': 28,
        'kComSetSerialTime': 29,
        'kComQuerySerialTime': 30,
        'kComQueryMacroSetup': 31,
        'kComQueryMacroDataPacket': 32,
        'kComQueryNameSetup': 33,
        'kComNameSetup': 34,
        'kComclearFlash': 35,
        'kComsaveSettings': 36,
        'kComresetMouse': 37,
        'kComcloseMouse': 38,
        'kComQueryMemoryData': 39,
        'kComSetLedEffect': 40,
        'kComQueryScanData': 41,
        'kComQueryMeasurementData': 42,
        'kComSetLedGain': 43,
        'kComSetBackgroundEffect': 44,
        'kComSetSyncronizeLEDStart': 45,
        'kComGetSupporters': 46,
        'kComGetInfo': 47,
        'kComFirmwareUpgrade': 48,
        'kComLast': 49
    }), ProtocoleV1ResponseType = Object['freeze']({
        'ACK': 0,
        'RESPONSE': 1,
        'ERROR': 2,
        'Q_BUTTON_PRESSED': 85,
        'Q_BUTTON_RELEASED': 86
    }), PIPE_PATH_WIN_32 = '\x5c\x5c.\x5cpipe\x5cdaskeyboard_pipe', pipePathWin32 = path_module['resolve'](PIPE_PATH_WIN_32),
    PIPE_PATH_MAC = '/tmp/daskeyboard_pipe_in', PIPE_PATH_READ_MAC = '/tmp/daskeyboard_pipe_out',
    pipePathMac = path_module['resolve'](PIPE_PATH_MAC),
    pipePathReadMac = path_module['resolve'](PIPE_PATH_READ_MAC), PIPE_PATH_LINUX = '/tmp/daskeyboard_pipe_in',
    PIPE_PATH_READ_LINUX = '/tmp/daskeyboard_pipe_out', pipePathLinux = path_module['resolve'](PIPE_PATH_LINUX),
    pipePathReadLinux = path_module['resolve'](PIPE_PATH_READ_LINUX);
let libUserServices, unsolicitedPipePath, unsolicitedPipe, connectedToUnsolicitedPipe, pipe, pipeRead,
    resettingUnsolicitedServiceConnection = !1, connectedToService = !1, connectedToServiceWrite = !1,
    isWaitingForServiceResponse = !1, firmwareUpgradeLock = !1, resettingServiceConnection = !1,
    stackOfCommands = [], typeOfLatestCommand = 0;
const DEFAULT_COMMAND_PERIOD = 100;
let periodTimeout, sendNextCommandPeriod = DEFAULT_COMMAND_PERIOD, qButtonPressed = !1,
    serviceEmitter = new EventEmitter();
global['serviceChannelEvent'] = {
    'serviceConnected': 'serviceConnected',
    'servicePipeData': 'servicePipeData',
    'servicePipeEnd': 'servicePipeEnd',
    'servicePipeTimeout': 'servicePipeTimeout',
    'servicePipeClose': 'servicePipeClose',
    'servicePipeError': 'servicePipeError',
    'commandForService': 'commandForService',
    'devicePluggedOut': 'devicePluggedOut',
    'listOfInovators': 'listOfInovators',
    'newDevicePlugged': 'newDevicePlugged',
    'stackOfCommands': 'stackOfCommands',
    'getDevicePluggedDevices': 'getPluggedDevices',
    'qButtonPressedAndReleased': 'qButtonPressedAndReleased',
    'qButtonPressed': 'qButtonPressed',
    'qButtonReleased': 'qButtonReleased',
    'firmwareUpdateStatus': 'firmwareUpdateStatus'
};
let appViewIsReady = !1;
initializeUnsolicitedPipePathDependingOnOs();
try {
    createUnsolicitedPipe();
} catch (_3756167) {
    appLogger['error'](_3756167);
}

function changeAdvancedServiceLogState(_3212061) {
    appLogger['info']('ServiceTalker changeAdvancedServiceLogState to ' + _3212061), advancedLoggingActivated = _3212061;
}

function initializeUnsolicitedPipePathDependingOnOs() {
    let _1473022;
    switch (PLATFORM) {
        case'linux':
            _1473022 = '/tmp/daskeyboard_pipe_unsolicited';
            break;
        case'win32':
            _1473022 = '\\.\PIPE\daskeyboard_pipe_unsolicited';
            break;
        case 'darwin':
            _1473022 = '/tmp/daskeyboard_pipe_unsolicited';
    }
    unsolicitedPipePath = path_module['resolve'](_1473022);
}

function tryToConnectToService() {
    switch (PLATFORM) {
        case'linux':
            try {
                connectedToService && connectedToServiceWrite || tryToConnectToServiceLinux();
            } catch (_3555759) {
                appLogger['error']('tryToConnectToService(): Error trying to connect to service linux  ' + _3555759), connectedToService = !1, connectedToServiceWrite = !1;
            }
            break;
        case'win32':
            connectedToService || tryToConnectToServiceWin32();
            break;
        case 'darwin':
            try {
                connectedToService && connectedToServiceWrite || tryToConnectToServiceMac();
            } catch (_2558321) {
                connectedToService = !1, connectedToServiceWrite = !1, appLogger['error']('tryToConnectToService(): Error trying to connect to service Mac ' + _2558321);
            }
    }
}

function createUnsolicitedPipe() {
    if ('win32' !== PLATFORM) return;
    appLogger['info']('createUnsolicitedPipe()');
    const _12527218 = ('development' === currentEnvironment ? '' : '/../app.asar.unpacked/') + 'assets/externalLibraries/DKWindowsUserServicesHelper';
    execFile(path_module['join'](__dirname, _12527218), [], (_1183646, _5534711, _4627923) => {
        _1183646 ? appLogger['error']('Error when trying to create unsolicited pipe ' + _1183646) : appLogger['info']('Created unsolicited pipe ' + _5534711);
    });
}

function closeUnsolicitedPipe() {
    if (libUserServices) try {
        appLogger['info']('Closing unsolicited pipe'), libUserServices['CloseQAppUserServices']();
    } catch (_1878713) {
        appLogger['error'](_1878713);
    }
}

function tryToConnectToServiceWin32() {
    appLogger['info']('tryConnectToService(): trying to connect to the service'), resetServiceConnection(), pipe = new netSocket(), setTimeout(() => {
        pipe['connect'](pipePathWin32, () => {
            appLogger['info']('tryConnectToService(): Application is connected to the service through the pipe'), connectedToService = !0;
        });
    }, 100), pipe['on']('data', _12156849 => {
        advancedLoggingActivated && (appLogger['info']('ServiceTalker pipe receiving:'), appLogger['info']('' + _12156849['toString']('hex')));
        try {
            handleDataFromPipe(_12156849);
        } catch (_4849162) {
            appLogger['error']('Error while handling data from pipe: ' + _4849162), resetServiceConnection();
        }
        isWaitingForServiceResponse = !1;
    }), pipe['on']('end', () => {
        appLogger['info']('tryConnectToService():\x20Communication\x20with\x20service\x20through\x20pipe\x20ended'), serviceEmitter['emit'](global['serviceChannelEvent']['servicePipeEnd']), resetServiceConnection();
    }), pipe['on']('timeout', () => {
        appLogger['error']('tryConnectToService(): Connection with service timeout'), resetServiceConnection();
    }), pipe['on']('close', () => {
        appLogger['info']('tryConnectToService():\x20Closing\x20the\x20connection\x20with\x20the\x20service'), emptyListOfDeviceAndNotifyClientSide(), connectedToService = !1;
    }), pipe['on']('error', _1512033 => {
        appLogger['error']('tryConnectToService(): Failed to connect to the pipe: ' + _1512033), resetServiceConnection();
    });
}

function tryToConnectToServiceMac() {
    appLogger['info']('tryConnectToServiceMac(): trying to connect to the service'), resetServiceConnection(), pipe = fs['createWriteStream'](pipePathMac), (pipeRead = fs['createReadStream'](pipePathReadMac))['on']('error', _3386744 => {
        appLogger['error']('tryToConnectToSeriviceMac(): Error with pipe read creation' + _3386744), connectedToService = !1;
    }), pipe['on']('error', _3351579 => {
        appLogger['error']('tryToConnectToSeriviceMac(): Error with pipe write creation' + _3351579), connectedToServiceWrite = !1;
    }), pipeRead['on']('open', () => {
        appLogger['info']('tryConnectToServiceMac(): Application is connected to the service through the read pipe'), connectedToService = !0;
    }), pipe['on']('ready', () => {
        appLogger['info']('tryConnectToServiceMac():\x20Application\x20is\x20connected\x20to\x20the\x20service\x20through\x20the\x20write\x20pipe'), connectedToServiceWrite = !0;
    }), pipeRead['on']('data', _4134687 => {
        advancedLoggingActivated && (appLogger['info']('ServiceTalker pipe receiving:'), appLogger['info']('' + _4134687['toString']('hex'))), handleDataFromPipe(_4134687), isWaitingForServiceResponse = !1;
    });
}

function tryToConnectToServiceLinux() {
    appLogger['info']('tryConnectToServiceLinux(): trying to connect to the service'), resetServiceConnection(), pipe = fs['createWriteStream'](pipePathLinux), (pipeRead = fs['createReadStream'](pipePathReadLinux))['on']('error', _5583739 => {
        appLogger['error']('tryToConnectToSeriviceLinux(): Error with pipe read creation' + _5583739), connectedToService = !1;
    }), pipe['on']('error', _5081283 => {
        appLogger['error']('tryToConnectToSeriviceLinux(): Error with pipe write creation' + _5081283), connectedToServiceWrite = !1;
    }), pipeRead['on']('open', () => {
        appLogger['info']('tryConnectToServiceLinux():\x20Application\x20is\x20connected\x20to\x20the\x20service\x20through\x20the\x20read\x20pipe'), connectedToService = !0;
    }), pipe['on']('ready', () => {
        appLogger['info']('tryConnectToServiceLinux():\x20Application\x20is\x20connected\x20to\x20the\x20service\x20through\x20the\x20write\x20pipe'), connectedToServiceWrite = !0;
    }), pipeRead['on']('data', _5728536 => {
        advancedLoggingActivated && (appLogger['info']('ServiceTalker pipe receiving:'), appLogger['info']('' + _5728536['toString']('hex'))), handleDataFromPipe(_5728536), isWaitingForServiceResponse = !1;
    });
}

function tryToConnectToUnsolicitedService() {
    switch (appLogger['info']('tryToConnectToUnsolicitedService():\x20trying\x20to\x20connect\x20to\x20theunsolicited\x20messages\x20from\x20the\x20service'), resetUnsolicitedServiceConnection(), PLATFORM) {
        case 'win32':
            unsolicitedPipe = new netSocket(), setTimeout(() => {
                unsolicitedPipe['connect'](unsolicitedPipePath, () => {
                    appLogger['info']('tryToConnectToUnsolicitedService(): Application is connected to the unsolicited messages from the service through the unsolicited pipe'), connectedToUnsolicitedPipe = !0;
                });
            }, 100), unsolicitedPipe['on']('data', _1066158 => {
                advancedLoggingActivated && (appLogger['info']('ServiceTalker unsolicited pipe received: '), appLogger['info']('' + _1066158['toString']('hex'))), handleUnsolicitedData(_1066158);
            }), unsolicitedPipe['on']('end', () => {
                appLogger['info']('tryToConnectToUnsolicitedService(): Communication with unsolicitedservice through unsolicited pipe ended'), resetUnsolicitedServiceConnection();
            }), unsolicitedPipe['on']('timeout', () => {
                appLogger['error']('tryToConnectToUnsolicitedService(): Connection with unsolicited service messages timeout'), resetUnsolicitedServiceConnection();
            }), unsolicitedPipe['on']('close', () => {
                appLogger['info']('tryToConnectToUnsolicitedService(): Closing the connection with the unsolicited service'), connectedToUnsolicitedPipe = !1;
            }), unsolicitedPipe['on']('error', _4914017 => {
                appLogger['error']('tryToConnectToUnsolicitedService(): Failed to connect to the unsolicited pipe: ' + _4914017), resetUnsolicitedServiceConnection();
            });
            break;
        case 'linux':
        case'darwin':
            (unsolicitedPipe = fs['createReadStream'](unsolicitedPipePath))['on']('open', () => {
                appLogger['info']('tryToConnectToUnsolicitedService(): Application is connected to the unsolicited messages from the service through the unsolicited pipe'), connectedToUnsolicitedPipe = !0;
            }), unsolicitedPipe['on']('data', _2457073 => {
                advancedLoggingActivated && (appLogger['info']('ServiceTalker unsolicited pipe received: '), appLogger['info']('' + _2457073['toString']('hex'))), handleUnsolicitedData(_2457073);
            }), unsolicitedPipe['on']('error', _4359753 => {
                appLogger['error']('tryToConnectToUnsolicitedService(): error ' + _4359753), resetUnsolicitedServiceConnection(), connectedToUnsolicitedPipe = !1;
            });
    }
}

function resetServiceConnection() {
    appLogger['info']('reseting service connection'), resettingServiceConnection || (resettingServiceConnection = !0, pipe && pipe['destroy'](), pipeRead && pipeRead['destroy'](), resettingServiceConnection = !1), emptyListOfDeviceAndNotifyClientSide(), connectedToService = !1, connectedToServiceWrite = !1;
}

function resetUnsolicitedServiceConnection() {
    appLogger['info']('reseting unsolicited service connection'), resettingUnsolicitedServiceConnection || (resettingUnsolicitedServiceConnection = !0, unsolicitedPipe && unsolicitedPipe['destroy'](), resettingUnsolicitedServiceConnection = !1), connectedToUnsolicitedPipe = !1;
}

function askForTheMatrixOfZonePressed(_3286929) {
    switch (PLATFORM) {
        case 'darwin':
            if (0 === _3286929['communicationId']) return;
            if ('DK5QPID' !== _3286929['pid']) return;
            let _4312908 = Buffer['alloc'](1);
            switch (_3286929['pid']) {
                case 'DK5QPID':
                    _4312908['writeUInt8'](DK5CommandTypes['kComQueryScanData'], 0);
            }
            putCommandOnStackOfCommands(_3286929, _4312908);
    }
}

function handleDataFromPipe(_2341326) {
    let _1879825 = _2341326['readUInt32LE'](0), _9334352 = _2341326['readUInt8'](6), _4977819 = 0;
    if (0 === _1879825) return void handleHeartBeatResponse(_2341326);
    _4977819 = _2341326['readUInt32LE'](0);
    const _1781967 = getDevicePid(_2341326['readUInt16LE'](4));
    _2341326 = removeHeaderOfResponse(_2341326), 'DK5QPID' === _1781967 ? typeOfLatestCommand === ProtocoleV1CommandType['FIRMWARE_UPDATE'] ? handleDataFromPipeProtocoleV1(_9334352, _4977819, _2341326) : handleDataFromPipeProtocoleV0(_9334352, _4977819, _2341326) : handleDataFromPipeProtocoleV1(_9334352, _4977819, _2341326);
}

function handleDataFromPipeProtocoleV0(_3838453, _3720759, _11485219) {
    switch (_3838453) {
        case DK5CommandTypes['kComAck']:
            return;
        case DK5CommandTypes['kComResponse']:
            return void handleResponseOfServiceProtocoleV0(_3720759, _11485219);
        case DK5CommandTypes['kComLast']:
            return;
    }
}

function handleDataFromPipeProtocoleV1(_3470474, _2593179, _2007737) {
    switch (_3470474) {
        case ProtocoleV1ResponseType['ACK']:
            return;
        case ProtocoleV1ResponseType['RESPONSE']:
            return void handleResponseOfServiceProtocoleV1(_2593179, _2007737);
        case DK5CommandTypes['ERROR']:
            return;
    }
}

function handleResponseOfServiceProtocoleV1(_5350868, _2447568) {
    switch (typeOfLatestCommand) {
        case ProtocoleV1CommandType['FIRMWARE_UPDATE']:
            handleFirmwareUpgradeResponse(_5350868, _2447568);
    }
}

function handleFirmwareUpgradeResponse(_4493503, _1819098) {
    appLogger['info']('ServiceTalker, handleFirmwareUpgradeResponse'), firmwareUpgradeLock = !0;
    const _3655321 = setTimeout(() => {
        firmwareUpgradeLock = !1, clearTimeout(_3655321);
    }, 5000), _6040290 = _1819098['readUInt8'](0);
    serviceEmitter['emit'](global['serviceChannelEvent']['firmwareUpdateStatus'], _6040290, _4493503);
}

function handleUnsolicitedData(_3352972) {
    if (!_3352972 || _3352972['length'] > 7) return;
    let _1771199 = _3352972['readUInt8'](6);
    _1771199 === ProtocoleV1ResponseType['Q_BUTTON_PRESSED'] && (appLogger['info']('ServiceTalker.js, Q Button pressed'), qButtonPressed || (qButtonPressed = !0, serviceEmitter['emit'](global['serviceChannelEvent']['qButtonPressed']))), _1771199 === ProtocoleV1ResponseType['Q_BUTTON_RELEASED'] && (appLogger['info']('ServiceTalker.js, Q Button released'), qButtonPressed && (qButtonPressed = !1, serviceEmitter['emit'](global['serviceChannelEvent']['qButtonReleased'])));
}

function handleHeartBeatResponse(_4033774) {
    let _5166407 = removeHeaderOfResponse(_4033774);
    if (_5166407['length'] <= 8) return void (pluggedDevices['length'] > 0 && (pluggedDevices['forEach'](_2919289 => {
        notifyClientSideForDevicePluggedOut(_2919289['communicationId'], _2919289['pid']);
    }), pluggedDevices = []));
    let _15687990 = [];
    for (let _4033774 = 0; _4033774 < _5166407['length']; _4033774 += 9) {
        let _2842361 = getDevicePid(_5166407['readUInt16LE'](_4033774)),
            _3996136 = _5166407['readUInt32LE'](_4033774 + 2),
            _4288766 = _5166407['readUInt8'](_4033774 + 6),
            _4204231 = _5166407['readUInt8'](_4033774 + 7),
            _4296229 = _5166407['readUInt8'](_4033774 + 8),
            _1812539 = new Device(_3996136, _2842361, _4288766 + '.' + _4204231 + '.' + _4296229);
        _15687990['push'](_1812539);
    }
    _15687990['forEach'](_4824075 => {
        let _6246510 = pluggedDevices['find'](_5271362 => _5271362['pid'] === _4824075['pid']);
        _6246510 ? _6246510['communicationId'] !== _4824075['communicationId'] && (pluggedDevices = pluggedDevices['map'](_2302793 => _2302793['pid'] === _6246510['pid'] ? _4824075 : _2302793), notifyClientSideForNewDevice(_4824075['communicationId'], _4824075['pid'], _4824075['firmwareVersion'])) : (pluggedDevices['push'](_4824075), notifyClientSideForNewDevice(_4824075['communicationId'], _4824075['pid'], _4824075['firmwareVersion']));
    }), pluggedDevices['forEach'](_1788456 => {
        _15687990['map'](_2801203 => _2801203['pid'])['includes'](_1788456['pid']) || (notifyClientSideForDevicePluggedOut(_1788456['communicationId'], _1788456['pid']), pluggedDevices = pluggedDevices['filter'](_6092854 => _6092854['pid'] !== _1788456['pid']));
    });
}

function notifyClientSideForNewDevice(_3782641, _4198209, _1059822) {
    appLogger['info']('New device plugged in has the following infos: communicationId: ' + _3782641 + ' pid: ' + _4198209 + ' currentFirmwareVersion ' + _1059822), serviceEmitter['emit'](global['serviceChannelEvent']['newDevicePlugged'], _4198209, _3782641, _1059822);
}

function notifyClientSideForDevicePluggedOut(_1697837, _1443681) {
    appLogger['info']('Device plugged out, infos: communicationId ' + _1697837 + ' pid: ' + _1443681), serviceEmitter['emit'](global['serviceChannelEvent']['devicePluggedOut'], _1697837, _1443681);
}

function emptyListOfDeviceAndNotifyClientSide() {
    pluggedDevices['forEach'](_14638907 => {
        notifyClientSideForDevicePluggedOut(_14638907['communicationId'], _14638907['pid']);
    }), pluggedDevices = [], stackOfCommands = [], isWaitingForServiceResponse = !1;
}

function removeHeaderOfResponse(_1868776) {
    return _1868776['slice'](7);
}

function putCommandOnStackOfCommands(_1397953, _3081733) {
    if (!connectedToService) return !1;
    let _5644980 = Buffer['alloc'](6);
    if (_1397953) switch (_5644980['writeUInt32LE'](_1397953['communicationId'], 0), _1397953['pid']) {
        case 'DK5QPID':
            _5644980['writeUInt16LE'](0, 4);
            break;
        case 'X50QPID':
            _5644980['writeUInt16LE'](1, 4);
    } else _5644980['writeUInt32LE'](0, 0), _5644980['writeUInt16LE'](1, 4);
    stackOfCommands['push'](Buffer['concat']([_5644980, _3081733]));
}

function putFullCommandOnStackOfCommands(_6907327) {
    stackOfCommands['push'](Buffer['from'](_6907327));
}

function emptyCommandsForDevice(_3549820) {
    stackOfCommands = stackOfCommands['filter'](_2112824 => _2112824['readUInt32LE'](0) !== _3549820['communicationId']);
}

function handleResponseOfServiceProtocoleV0(_5537137, _3323036) {
    switch (typeOfLatestCommand) {
        case DK5CommandTypes['kComQueryScanData']: {
            const _1698943 = handleKeyMatrixOfDevice(_5537137, _3323036);
            if (_1698943['includes'](21) && qButtonPressed) return;
            if (_1698943['includes'](21) && !qButtonPressed) return serviceEmitter['emit'](global['serviceChannelEvent']['qButtonPressed']), void (qButtonPressed = !0);
            if (!_1698943['includes'](21) && qButtonPressed) return qButtonPressed = !1, void serviceEmitter['emit'](global['serviceChannelEvent']['qButtonReleased']);
            break;
        }
    }
}

function handleListOfInovatorsData(_5859719) {
    let _2710921 = Math['trunc'](_5859719['length'] / 2), _10131200 = [], _1893407 = '',
        _930487 = _5859719['toString']('utf16le');
    for (let _5859719 = 0; _5859719 < _2710921; _5859719++) ' ' === _930487[_5859719] ? (_10131200['push'](_1893407), _1893407 = '') : _1893407 += _930487[_5859719];
    return _10131200;
}

function getDevicePid(_3364814) {
    switch (_3364814) {
        case 8224:
            return 'DK5QPID';
        case 8235:
            return 'X50QPID';
        case 8247:
            return 'DK4QPID';
        default:
            return 'DK5QPID';
    }
}

function onCommandForService(_4841754) {
    pipe && (advancedLoggingActivated && (appLogger['info']('ServiceTalker pipe sending: '), appLogger['info']('' + _4841754['toString']('hex'))), pipe['write'](_4841754));
}

function sendNextCommandToServicePeriodically() {
    connectedToService && stackOfCommands['length'] > 0 && !firmwareUpgradeLock && !isWaitingForServiceResponse && appViewIsReady && (typeOfLatestCommand = stackOfCommands[0]['readUInt8'](6), onCommandForService(stackOfCommands[0]), stackOfCommands = stackOfCommands['slice'](1), isWaitingForServiceResponse = !0, stackOfCommands['length'] > 0 && !periodTimeout && (sendNextCommandPeriod = 0, periodTimeout = setTimeout(() => {
        sendNextCommandPeriod = DEFAULT_COMMAND_PERIOD, clearTimeout(periodTimeout), periodTimeout = null;
    }, 1000)));
    const _5851625 = setTimeout(() => {
        sendNextCommandToServicePeriodically(), clearTimeout(_5851625), delete _5851625;
    }, sendNextCommandPeriod);
}

function getPluggedDevices() {
    return pluggedDevices;
}

function getHeartbeat() {
    let _15531430 = Buffer['alloc'](1);
    _15531430['writeUInt8'](ProtocoleV1CommandType['GET_HEARTBEAT'], 0), putCommandOnStackOfCommands(null, _15531430);
}

function setViewIsReady(_2652284) {
    appViewIsReady = _2652284;
}

setInterval(() => {
    connectedToService && pluggedDevices['forEach'](_5783871 => {
        askForTheMatrixOfZonePressed(_5783871);
    });
}, 50), setInterval(() => {
    if (tryToConnectToService(), !connectedToUnsolicitedPipe) try {
        tryToConnectToUnsolicitedService();
    } catch (_1390512) {
        appLogger['error']('Error trying to connect to unsolicited pipe ' + _1390512);
    }
}, 5000), sendNextCommandToServicePeriodically(), setInterval(() => {
    connectedToService && getHeartbeat();
}, 1000);
const dk5Matrix = [0, 145, 147, 1928, 0, 155, 159, 160, 165, 166, 0, 146, 1931, 151, 130, 156, 157, 162, 1891, 0, 0, 121, 125, 126, 131, 132, 1927, 161, 164, 0, 0, 123, 124, 128, 129, 1842, 135, 137, 141, 0, 0, 1892, 101, 127, 106, 109, 111, 139, 140, 0, 0, 97, 102, 103, 107, 108, 87, 115, 116, 0, 0, 99, 100, 104, 105, 85, 89, 90, 117, 166, 0, 73, 77, 78, 82, 83, 88, 91, 92, 94, 0, 74, 75, 79, 80, 84, 64, 65, 93, 70, 0, 49, 76, 55, 81, 60, 63, 66, 68, 69, 0, 50, 53, 54, 58, 59, 38, 41, 43, 0, 0, 51, 52, 56, 57, 61, 1929, 67, 44, 45, 0, 25, 28, 30, 34, 35, 39, 40, 0, 0, 0, 27, 29, 32, 33, 36, 37, 42, 0, 21];

function getDk5MatrixValue(_5549142) {
    const _2203985 = coordinateToLinear(_5549142, 10);
    return dk5Matrix[_2203985];
}

function coordinateToLinear(_5158063, _4167047) {
    return _5158063['y'] + _4167047 * _5158063['x'];
}

function handleKeyMatrixOfDevice(_4006620, _1418424) {
    const _3247237 = _1418424['slice'](0, 20);
    if (!isBufferDataMatching(_3247237, _1418424['slice'](20, 40))) return [];
    const _1269312 = [];
    for (let _4006620 = 0; _4006620 < _3247237['length']; _4006620 += 2) {
        const _1418424 = _3247237['readUInt16LE'](_4006620);
        if (_1418424) {
            const _3979278 = Math['trunc'](_4006620 / 2);
            numberToBinary(_1418424)['forEach']((_11939468, _6194225) => {
                if (1 === _11939468) {
                    const _11939468 = getDk5MatrixValue({'x': _6194225 - 2, 'y': _3979278});
                    _1269312['push'](_11939468);
                }
            });
        }
    }
    return _1269312;
}

function numberToBinary(_3007885, _1769664 = 16) {
    Math['pow'](2, _1769664);
    const _5141507 = [];
    let _2705970 = _3007885, _3415865 = 0;
    for (let _3007885 = 0; _3007885 < _1769664; _3007885++) _3415865 = _2705970 % 2, _2705970 = Math['trunc'](_2705970 / 2), 0 === _3415865 ? _5141507['push'](0) : _5141507['push'](1);
    return _5141507['reverse']();
}

function isBufferDataMatching(_1177174, _1958446) {
    return _1177174['equals'](_1958446);
}

module['exports'] = serviceEmitter, module['exports']['putFullCommandOnStackOfCommands'] = putFullCommandOnStackOfCommands, module['exports']['getPluggedDevices'] = getPluggedDevices, module['exports']['setViewIsReady'] = setViewIsReady, module['exports']['closeUnsolicitedPipe'] = closeUnsolicitedPipe, module['exports']['changeAdvancedServiceLogState'] = changeAdvancedServiceLogState;