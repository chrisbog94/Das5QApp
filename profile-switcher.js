var _0x7aa0 = ['setWindowDetectionOnOSX\x20', '\x5c-1', 'parameters', 'push', 'stdout', 'utf8', 'data', 'toString', 'setWindowDetection():\x20', 'stdin', 'kill', 'title', 'replace', 'slice', 'split', 'darwin', 'development', '/assets/scripts/linux.sh', '/../app.asar.unpacked', '/assets/scripts/mac.sh', '/assets/scripts/mac.scpt', 'powershell', '-ExecutionPolicy', '-File', '\x5c..\x5capp.asar.unpacked', '\x5cassets\x5cscripts\x5cwindows.ps1', 'mac', 'Operating\x20System\x20not\x20supported\x20yet.\x20', 'script', 'app.asar/../', 'exports', 'stopOsScript', 'child_process', 'exec', 'Das\x20Keyboard\x20Q', './logger', 'events', 'env', 'Q_NODE_ENV', 'production', 'platform', 'windowNameChange', 'linux', 'win32', 'error', 'setWindowDetectionOnWindows', 'app', 'Detected\x20foreground\x20app\x20change\x20->\x20', 'emit', 'info', 'profileSwitcher,\x20setWindowDetectionOnOSX', 'then', 'owner', 'name'];
(function (_0x31cfbc, _0x26edbd) {
    var _0x19888c = function (_0x4d4753) {
        while (--_0x4d4753) {
            _0x31cfbc['push'](_0x31cfbc['shift']());
        }
    };
    _0x19888c(++_0x26edbd);
}(_0x7aa0, 0xf8));
var _0x07aa = function (_0x521adc, _0x17fd0c) {
    _0x521adc = _0x521adc - 0x0;
    var _0xb2a04b = _0x7aa0[_0x521adc];
    return _0xb2a04b;
};
const spawn = require('child_process')['spawn'], exec = require('child_process')['exec'],
    APP_NAME ='Das Keyboard Q', appLogger = require('./logger'), EventEmitter = require('events'),
    currentEnvironment = process['env']['Q_NODE_ENV'] || 'production', PLATFORM = process['platform'];
let osScript, detectionInterval, titleOfForegroundWindow = APP_NAME, profileSwitcherFeatureHasBeenActivatedOnce = !0x1,
    osScriptConfig = getConfig();
const currentWindowPollingInterval = 0x1388;
global['windowNameChange'] = 'windowNameChangeChannel';
const profileSwitcherEmitter = new EventEmitter();

function setWindowDetection() {
    switch (PLATFORM) {
        case 'linux':
        case 'win32':
            setWindowDetectionOnWindows();
            break;
        case'darwin':
            setWindowDetectionOnOSX();
    }
}

function setWindowDetectionOnWindows() {
    if (!profileSwitcherFeatureHasBeenActivatedOnce) {
        try {
            getActiveWindow(-0x1, 0x5);
        } catch (myerror) {
            appLogger['error']('setWindowDetectionOnWindows' + myerror);
        }
        profileSwitcherFeatureHasBeenActivatedOnce = !0x0;
    }
}

function checkForegroundWindowApp(_0x4914c3) {
    _0x4914c3['app'] !== titleOfForegroundWindow && (titleOfForegroundWindow = _0x4914c3['app'], appLogger['info'](_0x07aa('0xf') + titleOfForegroundWindow), profileSwitcherEmitter[_0x07aa('0x10')](global['windowNameChange'], titleOfForegroundWindow));
}

function setWindowDetectionOnOSX() {
    appLogger[_0x07aa('0x11')](_0x07aa('0x12'));
    const _0x3f91dc = require('active-win');
    detectionInterval = setInterval(() => {
        appLogger[_0x07aa('0x11')]('profileSwitcher,\x20checking\x20for\x20active\x20window');
        try {
            _0x3f91dc()[_0x07aa('0x13')](_0x290a8c => {
                _0x290a8c && _0x290a8c['owner'] && _0x290a8c[_0x07aa('0x14')][_0x07aa('0x15')] && (titleOfForegroundWindow = _0x290a8c[_0x07aa('0x14')]['name'], profileSwitcherEmitter[_0x07aa('0x10')](global['windowNameChange'], titleOfForegroundWindow));
            })['catch'](_0x2c85f5 => {
                appLogger['error'](_0x07aa('0x16') + _0x2c85f5);
            });
        } catch (_0x875a54) {
            appLogger['error'](_0x07aa('0x16') + _0x875a54);
        }
    }, currentWindowPollingInterval);
}

function launchOsxScript() {
    exec('osascript\x20-e\x20\x27tell\x20application\x20\x22System\x20Events\x22\x27\x20-e\x20\x27set\x20frontApp\x20to\x20name\x20of\x20first\x20application\x20process\x20whose\x20frontmost\x20is\x20true\x27\x20-e\x20\x27end\x20tell\x20\x27', function (_0x3b9fb0, _0x2a6252, _0x14e1e2) {
        null !== _0x3b9fb0 && appLogger['error']('Execution\x20error\x20:' + _0x3b9fb0);
        _0x2a6252 !== titleOfForegroundWindow && (titleOfForegroundWindow = _0x2a6252, profileSwitcherEmitter[_0x07aa('0x10')](global['windowNameChange'], titleOfForegroundWindow));
    });
}

function getActiveWindow(_0x5a5892, _0x411162) {
    _0x411162 = _0x411162 || 0x0, _0x5a5892 = _0x5a5892 || 0x1, 'win32' === PLATFORM && _0x5a5892 < 0x0 && (_0x5a5892 = _0x07aa('0x17'));
    let _0x1ebf5b = osScriptConfig[_0x07aa('0x18')];
    _0x1ebf5b['push'](_0x5a5892), _0x1ebf5b[_0x07aa('0x19')](_0x411162), (osScript = spawn(osScriptConfig['bin'], _0x1ebf5b))[_0x07aa('0x1a')]['setEncoding'](_0x07aa('0x1b')), osScript[_0x07aa('0x1a')]['on'](_0x07aa('0x1c'), function (_0x221c23) {
        checkForegroundWindowApp(parseScriptOutput(_0x221c23['toString']()));
    }), osScript['stderr']['on'](_0x07aa('0x1c'), function (_0x265e3b) {
        appLogger['error']('getActiveWindow\x20error\x20-\x20' + _0x265e3b[_0x07aa('0x1d')]());
    }), osScript['on']('error', _0x3adcaa => {
        appLogger['error'](_0x07aa('0x1e') + _0x3adcaa);
    }), osScript[_0x07aa('0x1f')]['end']();
}

function stopOsScript() {
    if (clearInterval(detectionInterval), osScript) try {
        osScript[_0x07aa('0x20')]();
    } catch (_0xa202b7) {
        appLogger['error'](_0xa202b7);
    }
}

function parseScriptOutput(_0x210009) {
    let _0x3eadd1 = {};
    return 'linux' === PLATFORM ? (_0x210009 = _0x210009['replace'](/(WM_CLASS|WM_NAME)(\(\w+\)\s=\s)/g, '')['split']('\x0a', 0x2), _0x3eadd1['app'] = _0x210009[0x0], _0x3eadd1[_0x07aa('0x21')] = _0x210009[0x1])
        : 'win32' === PLATFORM ? (_0x210009 = _0x210009[_0x07aa('0x22')](/(@{ProcessName=| AppTitle=)/g, '')[_0x07aa('0x23')](0x0, -0x1)[_0x07aa('0x24')](';', 0x2), _0x3eadd1['app'] = _0x210009[0x0], _0x3eadd1[_0x07aa('0x21')] = _0x210009[0x1])
            : _0x07aa('0x25') === PLATFORM && (_0x210009 = _0x210009[_0x07aa('0x24')](','), _0x3eadd1['app'] = _0x210009[0x0], _0x3eadd1[_0x07aa('0x21')] = _0x210009[0x1]['replace'](/\n$/, '')[_0x07aa('0x22')](/^\s/, '')), _0x3eadd1;
}

function getConfig() {
    let _0x42cfa3 = {
        'linux': {
            'bin': 'sh',
            'parameters': [],
            'script': (_0x07aa('0x26') === currentEnvironment ? '' : '/../app.asar.unpacked') + _0x07aa('0x27')
        },
        'mac': {
            'bin': 'sh',
            'parameters': [],
            'script': ('development' === currentEnvironment ? '' : _0x07aa('0x28')) + _0x07aa('0x29'),
            'subscript': (_0x07aa('0x26') === currentEnvironment ? '' : _0x07aa('0x28')) + _0x07aa('0x2a')
        },
        'win32': {
            'bin': 'powershell',
            'parameters': ["-ExecutionPolicy", 'Bypass', "-File"],
            'script': ('development' === currentEnvironment ? '' : "\..\app.asar.unpacked") + "\assets\scripts\windows.ps1"
        }
    }, _0x1251d4 = {};
    switch (PLATFORM) {
        case 'linux':
            _0x1251d4 = _0x42cfa3['linux'];
            break;
        case'win32':
            _0x1251d4 = _0x42cfa3['win32'];
            break;
        case _0x07aa('0x25'):
            _0x1251d4 = _0x42cfa3[_0x07aa('0x30')];
            break;
        default:
            appLogger['error'](_0x07aa('0x31') + PLATFORM);
    }
    return 'linux' === PLATFORM ? _0x1251d4[_0x07aa('0x18')][_0x07aa('0x19')]((__dirname + _0x1251d4[_0x07aa('0x32')])[_0x07aa('0x22')](_0x07aa('0x33'), '')) : _0x1251d4[_0x07aa('0x18')]['push'](__dirname + _0x1251d4[_0x07aa('0x32')]), _0x07aa('0x25') === PLATFORM && _0x1251d4[_0x07aa('0x18')][_0x07aa('0x19')](__dirname + _0x1251d4['subscript']), _0x1251d4;
}

try {
    setWindowDetection();
} catch (_0x35a05a) {
    appLogger['error'](_0x07aa('0x1e') + _0x35a05a);
}
module[_0x07aa('0x34')] = profileSwitcherEmitter, module[_0x07aa('0x34')][_0x07aa('0x35')] = stopOsScript;