var _0xb308 = ['getSignalByZoneIdResponse', '/signals/pid/:pid/zoneId/:zoneId/color', 'getSignalsColorRequest', 'getSignalsColorResponse', 'delete', '/signals/:id', 'deleteSignalByIdRequest', 'deleteSignalByIdResponse', 'pid', 'deleteSignalByZoneIdResponse', 'Local\x20api\x20v2\x20running...', 'post', '/signals', 'getSignalsRequest', 'getSignalsResponse', 'getSignalByIdRequest', 'getSignalByIdResponse', '/zoneConfiguration/:zoneId', 'getZoneConfigurationByZoneIdResponse', '/zoneConfiguration/pid/:pid/zoneId/:zoneId', 'getZoneConfigurationByZoneIdAndPidRequest', '/signals/applets/:appletUuid', 'deleteSignalForAppletRequest', 'error', 'EADDRINUSE', 'code', 'listen', 'local\x20api\x20server\x20started\x20on\x20port27301', 'exports', 'setDasKeyboardQMainWindow', 'express', 'cors', 'body-parser', 'http', '1.0', '/api/1.0', '/apI/2.0', 'getAllSignalsResponseV1', 'postSignalResponseV1', 'getShadowSignalsByPidRequestV1', 'getShadowSignalsByPidResonseV1', 'getSignalByZoneIdRequestV1', 'getSignalByZoneIdResponseV1', 'getSignalsColorRequestV1', 'getSignalsColorResponseV1', 'deleteSignalByIdRequestV1', 'deleteSignalByIdResponseV1', 'deleteSignalByZoneIdResponseV1', 'getAllSignalsV2', 'postSignalRequestV2', 'getSignalByIdResponseV2', 'deleteSignalByIdRequestV2', 'deleteSignalByIdResponseV2', 'getZoneConfigurationByZoneIdRequestV2', 'getZoneConfigurationByZoneIdResponseV2', 'getZoneConfigurationByZoneIdAndPidRequestV2', 'getZoneConfigurationByZoneIdAndPidResponseV2', 'getLatestSignalForAppletRequest', 'getLatestSignalForAppletResponse', 'deleteSignalForAppletResponse', 'publicHttpApiEventsV1', 'publicHttpApiEventsV2', 'info', 'use', 'json', 'createServer', 'all', 'status', 'TOO_MANY_REQUESTS', 'send', 'INTERNAL_SERVER_ERROR', 'Waiting\x20for\x20application\x20to\x20start', 'Request\x20received,\x20quota\x20OK', 'Request\x20received,\x20quota\x20error', 'Initializing\x20routes\x20for\x20local\x20api\x20v1...', 'get', 'Local\x20api\x20v1\x20running...', '/signals/shadows', 'webContents', 'signalsAllRequest', 'once', 'body', 'postSignalRequest', 'postSignalResponse', '/signals/pid/:pid/shadows', 'params', 'getShadowSignalsByPidRequest', 'getShadowSignalsByPidResponse', '/signals/pid/:pid/zoneId/:zoneId', 'zoneId', 'getSignalByZoneIdRequest'];
(function (_0x5eed54, _0x50bf79) {
    var _0x5c55db = function (_0x16bea1) {
        while (--_0x16bea1) {
            _0x5eed54['push'](_0x5eed54['shift']());
        }
    };
    _0x5c55db(++_0x50bf79);
}(_0xb308, 0x18a));
var _0x8b30 = function (_0x21c351, _0xefb37f) {
    _0x21c351 = _0x21c351 - 0x0;
    var _0x45932a = _0xb308[_0x21c351];
    return _0x45932a;
};
const express = require(_0x8b30('0x0')), cors = require(_0x8b30('0x1')), logger = require('./logger'),
    bodyParser = require(_0x8b30('0x2')), HttpStatus = require('http-status-codes'), http = require(_0x8b30('0x3')),
    defaultListenPort = 0x6aa5, API_V1 = _0x8b30('0x4'), API_V2 = '2.0', apiV1BaseRoute = _0x8b30('0x5'),
    apiV2BaseRoute = _0x8b30('0x6'), {ipcMain: ipcMain} = require('electron'), publicHttpApiEventsV1 = {
        'signalsAllRequest': 'getAllSignalsV1',
        'signalsAllResponse': _0x8b30('0x7'),
        'postSignalRequest': 'postSignalRequestV1',
        'postSignalResponse': _0x8b30('0x8'),
        'getShadowSignalsByPidRequest': _0x8b30('0x9'),
        'getShadowSignalsByPidResponse': _0x8b30('0xa'),
        'getSignalByZoneIdRequest': _0x8b30('0xb'),
        'getSignalByZoneIdResponse': _0x8b30('0xc'),
        'getSignalsColorRequest': _0x8b30('0xd'),
        'getSignalsColorResponse': _0x8b30('0xe'),
        'deleteSignalByIdRequest': _0x8b30('0xf'),
        'deleteSignalByIdResponse': _0x8b30('0x10'),
        'deleteSignalByZoneIdRequest': 'deleteSignalByZoneIdRequestV1',
        'deleteSignalByZoneIdResponse': _0x8b30('0x11')
    }, publicHttpApiEventsV2 = {
        'getSignalsRequest': _0x8b30('0x12'),
        'getSignalsResponse': 'getAllSignalsResponseV2',
        'postSignalRequest': _0x8b30('0x13'),
        'postSignalResponse': 'postSignalResponseV2',
        'getSignalByIdRequest': 'getSignalByIdRequestV2',
        'getSignalByIdResponse': _0x8b30('0x14'),
        'deleteSignalByIdRequest': _0x8b30('0x15'),
        'deleteSignalByIdResponse': _0x8b30('0x16'),
        'getZoneConfigurationByZoneIdRequest': _0x8b30('0x17'),
        'getZoneConfigurationByZoneIdResponse': _0x8b30('0x18'),
        'getZoneConfigurationByZoneIdAndPidRequest': _0x8b30('0x19'),
        'getZoneConfigurationByZoneIdAndPidResponse': _0x8b30('0x1a'),
        'getLatestSignalForAppletRequest': _0x8b30('0x1b'),
        'getLatestSignalForAppletResponse': _0x8b30('0x1c'),
        'deleteSignalForAppletRequest': 'deleteSignalForAppletRequest',
        'deleteSignalForAppletResponse': _0x8b30('0x1d')
    };
global[_0x8b30('0x1e')] = publicHttpApiEventsV1, global[_0x8b30('0x1f')] = publicHttpApiEventsV2;
const REQUEST_QUOTA = 0x32, TIME_QUOTA_REFRESH = 0x3e8;
let currentNumberOfRequest = 0x0;
setInterval(() => {
    currentNumberOfRequest = 0x0;
}, 0x3e8);
let appMainWindow = null;
logger[_0x8b30('0x20')]('local\x20api\x20is\x20starting...');
const app = express();
app[_0x8b30('0x21')](cors()), app['use'](bodyParser[_0x8b30('0x22')]());
const server = http[_0x8b30('0x23')](app);

async function run() {
    Promise[_0x8b30('0x24')]([initRoutesApiV1(), initRoutesApiV2()])['then'](function () {
        logger[_0x8b30('0x20')]('local-api,\x20Routes\x20V1\x20and\x20V2\x20have\x20been\x20initialized...');
    });
}

function addMiddleware(_0x25e50c) {
    _0x25e50c[_0x8b30('0x21')](function (_0x103f5f, _0x1707f, _0x4adcf4) {
        appMainWindow ? isCurrentQuotaValid() ? _0x4adcf4() : _0x1707f[_0x8b30('0x25')](HttpStatus[_0x8b30('0x26')])[_0x8b30('0x27')]('Over\x20quota') : (logger['error']('Received\x20request\x20but\x20app\x20is\x20not\x20ready'), _0x1707f[_0x8b30('0x25')](HttpStatus[_0x8b30('0x28')])[_0x8b30('0x27')](_0x8b30('0x29')));
    });
}

function isCurrentQuotaValid() {
    return currentNumberOfRequest < REQUEST_QUOTA ? (logger[_0x8b30('0x20')](_0x8b30('0x2a')), currentNumberOfRequest += 0x1, !0x0) : (logger['info'](_0x8b30('0x2b')), !0x1);
}

async function initRoutesApiV1() {
    logger[_0x8b30('0x20')](_0x8b30('0x2c')), app[_0x8b30('0x2d')](apiV1BaseRoute, function (_0x19ec8b, _0x439760) {
        _0x439760[_0x8b30('0x25')](HttpStatus['OK'])[_0x8b30('0x27')](_0x8b30('0x2e'));
    }), app[_0x8b30('0x2d')](apiV1BaseRoute + _0x8b30('0x2f'), (_0x44fc94, _0x2ba3ce) => {
        appMainWindow[_0x8b30('0x30')]['send'](publicHttpApiEventsV1[_0x8b30('0x31')]), ipcMain[_0x8b30('0x32')](publicHttpApiEventsV1['signalsAllResponse'], (_0xf0e09b, _0x457a68, _0x1de252) => {
            _0x2ba3ce[_0x8b30('0x25')](_0x1de252)[_0x8b30('0x27')](_0x457a68);
        });
    }), app['post'](apiV1BaseRoute + '/signals', (_0x1138ef, _0x51a7af) => {
        const _0x1d81c0 = _0x1138ef[_0x8b30('0x33')];
        appMainWindow[_0x8b30('0x30')]['send'](publicHttpApiEventsV1[_0x8b30('0x34')], _0x1d81c0), ipcMain['once'](publicHttpApiEventsV1[_0x8b30('0x35')], (_0x54f05c, _0x204181, _0x3bf1ab) => {
            _0x51a7af[_0x8b30('0x25')](_0x3bf1ab)[_0x8b30('0x27')](_0x204181);
        });
    }), app[_0x8b30('0x2d')](apiV1BaseRoute + _0x8b30('0x36'), (_0x2bab55, _0x39967b) => {
        const _0x17b6ab = _0x2bab55[_0x8b30('0x37')]['pid'];
        appMainWindow[_0x8b30('0x30')][_0x8b30('0x27')](publicHttpApiEventsV1[_0x8b30('0x38')], _0x17b6ab), ipcMain[_0x8b30('0x32')](publicHttpApiEventsV1[_0x8b30('0x39')], (_0x2f6185, _0x339ca1, _0x1162a1) => {
            _0x39967b[_0x8b30('0x25')](_0x1162a1)[_0x8b30('0x27')](_0x339ca1);
        });
    }), app[_0x8b30('0x2d')](apiV1BaseRoute + _0x8b30('0x3a'), (_0x4581ce, _0x5fe5d3) => {
        const _0x67c503 = _0x4581ce[_0x8b30('0x37')][_0x8b30('0x3b')];
        appMainWindow['webContents'][_0x8b30('0x27')](publicHttpApiEventsV1[_0x8b30('0x3c')], _0x67c503), ipcMain[_0x8b30('0x32')](publicHttpApiEventsV1[_0x8b30('0x3d')], (_0x385b63, _0x14c865, _0x1459c6) => {
            _0x5fe5d3[_0x8b30('0x25')](_0x1459c6)[_0x8b30('0x27')](_0x14c865);
        });
    }), app['get'](apiV1BaseRoute + _0x8b30('0x3e'), (_0x46c7cb, _0x33aff4) => {
        const _0x27a27e = _0x46c7cb[_0x8b30('0x37')][_0x8b30('0x3b')], _0x497862 = _0x46c7cb[_0x8b30('0x37')]['pid'];
        appMainWindow[_0x8b30('0x30')][_0x8b30('0x27')](publicHttpApiEventsV1[_0x8b30('0x3f')], _0x497862, _0x27a27e), ipcMain[_0x8b30('0x32')](publicHttpApiEventsV1[_0x8b30('0x40')], (_0x4e4772, _0xb62720, _0x154ea1) => {
            _0x33aff4[_0x8b30('0x25')](_0x154ea1)[_0x8b30('0x27')](_0xb62720);
        });
    }), app[_0x8b30('0x41')](apiV1BaseRoute + _0x8b30('0x42'), (_0x37ec52, _0x5a1e60) => {
        const _0x50557e = _0x37ec52[_0x8b30('0x37')]['id'];
        appMainWindow[_0x8b30('0x30')][_0x8b30('0x27')](publicHttpApiEventsV1[_0x8b30('0x43')], _0x50557e), ipcMain[_0x8b30('0x32')](publicHttpApiEventsV1[_0x8b30('0x44')], (_0x2b3c9d, _0x2110f5, _0x34033e) => {
            _0x5a1e60[_0x8b30('0x25')](_0x34033e)[_0x8b30('0x27')](_0x2110f5);
        });
    }), app[_0x8b30('0x41')](apiV1BaseRoute + _0x8b30('0x3a'), (_0x262916, _0x161b09) => {
        const _0xb6c47c = _0x262916[_0x8b30('0x37')]['zoneId'], _0x10e66e = _0x262916['params'][_0x8b30('0x45')];
        appMainWindow[_0x8b30('0x30')][_0x8b30('0x27')](publicHttpApiEventsV1['deleteSignalByZoneIdRequest'], _0xb6c47c, _0x10e66e), ipcMain[_0x8b30('0x32')](publicHttpApiEventsV1[_0x8b30('0x46')], (_0x5cac34, _0x496eed, _0x5b7777) => {
            _0x161b09[_0x8b30('0x25')](_0x5b7777)[_0x8b30('0x27')](_0x496eed);
        });
    });
}

async function initRoutesApiV2() {
    app['get'](apiV2BaseRoute, function (_0xc2f755, _0x1a3b3d) {
        _0x1a3b3d[_0x8b30('0x25')](HttpStatus['OK'])[_0x8b30('0x27')](_0x8b30('0x47'));
    }), app[_0x8b30('0x48')](apiV2BaseRoute + _0x8b30('0x49'), function (_0x29cdd5, _0x5d8c01) {
        const _0x1bf569 = _0x29cdd5[_0x8b30('0x33')];
        appMainWindow[_0x8b30('0x30')]['send'](publicHttpApiEventsV2[_0x8b30('0x34')], _0x1bf569), ipcMain[_0x8b30('0x32')](publicHttpApiEventsV2['postSignalResponse'], (_0x4e5801, _0x3e97d5, _0x26bc57) => {
            _0x5d8c01['status'](_0x26bc57)['send'](_0x3e97d5);
        });
    }), app['get'](apiV2BaseRoute + _0x8b30('0x2f'), function (_0x5e42b5, _0x4925ca) {
        appMainWindow[_0x8b30('0x30')][_0x8b30('0x27')](publicHttpApiEventsV2[_0x8b30('0x4a')]), ipcMain['once'](publicHttpApiEventsV2[_0x8b30('0x4b')], (_0x44ccf8, _0x40a854, _0x276097) => {
            _0x4925ca['status'](_0x276097)['send'](_0x40a854);
        });
    }), app[_0x8b30('0x2d')](apiV2BaseRoute + '/signals/:id', function (_0x5b4c4a, _0x5b8f79) {
        const _0x529347 = _0x5b4c4a[_0x8b30('0x37')]['id'];
        appMainWindow[_0x8b30('0x30')][_0x8b30('0x27')](publicHttpApiEventsV2[_0x8b30('0x4c')], _0x529347), ipcMain[_0x8b30('0x32')](publicHttpApiEventsV2[_0x8b30('0x4d')], (_0x4784f8, _0x2d10a8, _0x4699a3) => {
            _0x5b8f79[_0x8b30('0x25')](_0x4699a3)['send'](_0x2d10a8);
        });
    }), app['delete'](apiV2BaseRoute + _0x8b30('0x42'), function (_0x1254d1, _0x703899) {
        const _0x2cc7c8 = _0x1254d1[_0x8b30('0x37')]['id'];
        appMainWindow[_0x8b30('0x30')][_0x8b30('0x27')](publicHttpApiEventsV2[_0x8b30('0x43')], _0x2cc7c8), ipcMain[_0x8b30('0x32')](publicHttpApiEventsV2['deleteSignalByIdResponse'], (_0x3bc93d, _0x4399cb, _0x342739) => {
            _0x703899[_0x8b30('0x25')](_0x342739)[_0x8b30('0x27')](_0x4399cb);
        });
    }), app[_0x8b30('0x2d')](apiV2BaseRoute + _0x8b30('0x4e'), function (_0x42115d, _0x523d7b) {
        const _0x1d7d8f = _0x42115d['params'][_0x8b30('0x3b')];
        appMainWindow[_0x8b30('0x30')][_0x8b30('0x27')](publicHttpApiEventsV2['getZoneConfigurationByZoneIdRequest'], _0x1d7d8f), ipcMain[_0x8b30('0x32')](publicHttpApiEventsV2[_0x8b30('0x4f')], (_0x45a3b6, _0xb58dfa, _0xf939dd) => {
            _0x523d7b[_0x8b30('0x25')](_0xf939dd)[_0x8b30('0x27')](_0xb58dfa);
        });
    }), app[_0x8b30('0x2d')](apiV2BaseRoute + _0x8b30('0x50'), function (_0x1ac369, _0x52bf2f) {
        const _0x49569c = _0x1ac369['params'][_0x8b30('0x3b')], _0x4be49d = _0x1ac369[_0x8b30('0x37')][_0x8b30('0x45')];
        appMainWindow['webContents'][_0x8b30('0x27')](publicHttpApiEventsV2[_0x8b30('0x51')], _0x49569c, _0x4be49d), ipcMain[_0x8b30('0x32')](publicHttpApiEventsV2['getZoneConfigurationByZoneIdAndPidResponse'], (_0x21d02d, _0x5e2846, _0x3453ff) => {
            _0x52bf2f[_0x8b30('0x25')](_0x3453ff)[_0x8b30('0x27')](_0x5e2846);
        });
    }), app['get'](apiV2BaseRoute + _0x8b30('0x52'), function (_0x17f086, _0x20abf8) {
        const _0x3fa94b = _0x17f086['params']['appletUuid'];
        appMainWindow['webContents']['send'](publicHttpApiEventsV2[_0x8b30('0x1b')], _0x3fa94b), ipcMain[_0x8b30('0x32')](publicHttpApiEventsV2[_0x8b30('0x1c')], (_0x1439ab, _0x366dc6, _0x52af79) => {
            _0x20abf8[_0x8b30('0x25')](_0x52af79)['send'](_0x366dc6);
        });
    }), app[_0x8b30('0x41')](apiV2BaseRoute + _0x8b30('0x52'), function (_0x408737, _0x197e06) {
        const _0x47d727 = _0x408737[_0x8b30('0x37')]['appletUuid'];
        appMainWindow[_0x8b30('0x30')]['send'](publicHttpApiEventsV2[_0x8b30('0x53')], _0x47d727), ipcMain[_0x8b30('0x32')](publicHttpApiEventsV2[_0x8b30('0x1d')], (_0x1feb14, _0x240111, _0x29fd9a) => {
            _0x197e06[_0x8b30('0x25')](_0x29fd9a)['send'](_0x240111);
        });
    });
}

function handleServerErrors(_0x4e8ad6) {
    _0x4e8ad6['on'](_0x8b30('0x54'), _0xf0986 => {
        _0x8b30('0x55') === _0xf0986[_0x8b30('0x56')] ? (logger[_0x8b30('0x54')](_0xf0986['code']), logger['error']('local-api,\x20port\x2027301\x20is\x20already\x20used')) : logger[_0x8b30('0x54')](_0xf0986);
    });
}

function setDasKeyboardQMainWindow(_0x51e45f) {
    appMainWindow = _0x51e45f;
}

server[_0x8b30('0x57')](0x6aa5), handleServerErrors(server), addMiddleware(app), logger[_0x8b30('0x20')](_0x8b30('0x58')), run(), module[_0x8b30('0x59')][_0x8b30('0x5a')] = setDasKeyboardQMainWindow;