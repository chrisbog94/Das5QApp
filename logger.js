var _0x18b0=['WRITE_LOG_FILE_INFO','WRITE_LOG_FILE_ERROR','write-log-error','WRITE_LOG_FILE_WARGNING','QDesktopLogger','info','YYYY-MM-DD\x20hh:mm:ss.ms','error','format','warning','add','transports','File','remove','WRITE_LOG_FILE_WARNING','winston','electron','homedir','moment','/.quio/v2/','quio.log.json','env','Q_NODE_ENV','production'];(function(_0x2641f9,_0x26715f){var _0x585741=function(_0x2d1462){while(--_0x2d1462){_0x2641f9['push'](_0x2641f9['shift']());}};_0x585741(++_0x26715f);}(_0x18b0,0x1d7));var _0x018b=function(_0x52471f,_0x4a6f42){_0x52471f=_0x52471f-0x0;var _0x366bde=_0x18b0[_0x52471f];return _0x366bde;};const winston=require(_0x018b('0x0')),{ipcMain:ipcMain}=require(_0x018b('0x1')),os=require('os'),homePath=os[_0x018b('0x2')](),moment=require(_0x018b('0x3')),pathToQuioV2Folder=homePath+_0x018b('0x4'),quioLogFile=_0x018b('0x5'),currentEnvironment=process[_0x018b('0x6')][_0x018b('0x7')]||_0x018b('0x8');global[_0x018b('0x9')]='write-log-info',global[_0x018b('0xa')]=_0x018b('0xb'),global[_0x018b('0xc')]='write-log-warning';const winstonOptions={'name':_0x018b('0xd'),'filename':pathToQuioV2Folder+quioLogFile,'maxsize':0x989680,'maxFiles':0x1,'handleExceptions':!0x0,'json':!0x0,'tailable':!0x0};function info(_0x4ac4ec){winston[_0x018b('0xe')](moment()['format'](_0x018b('0xf'))+'\x20'+_0x4ac4ec);}function error(_0x295b0c){winston[_0x018b('0x10')](moment()[_0x018b('0x11')](_0x018b('0xf'))+'\x20'+_0x295b0c);}function warning(_0x1f2641){winston[_0x018b('0x12')](moment()[_0x018b('0x11')](_0x018b('0xf'))+'\x20'+_0x1f2641);}winston[_0x018b('0x13')](winston[_0x018b('0x14')][_0x018b('0x15')],winstonOptions),_0x018b('0x8')===currentEnvironment&&winston[_0x018b('0x16')](winston[_0x018b('0x14')]['Console']),ipcMain&&(ipcMain['on'](global['WRITE_LOG_FILE_INFO'],(_0x1cdb49,_0x472969)=>{winston[_0x018b('0xe')](_0x472969);}),ipcMain['on'](global[_0x018b('0xa')],(_0x357cd0,_0x5145bb)=>{winston['error'](_0x5145bb);}),ipcMain['on'](global[_0x018b('0x17')],(_0x4f3736,_0x3cfa16)=>{winston[_0x018b('0x12')](_0x3cfa16);})),module['exports']['info']=info,module['exports'][_0x018b('0x10')]=error,module['exports'][_0x018b('0x12')]=warning;