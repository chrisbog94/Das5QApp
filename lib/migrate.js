var _0x55ca=['Legacy\x20file\x20does\x20not\x20exist:\x20','store','keys','initialized','Migrating\x20key:\x20','\x20=\x20','_migrated','toISOString','exports','node-storage','./storage','info','Migrating\x20legacy\x20store\x20from\x20','New\x20store\x20is\x20null.','existsSync'];(function(_0x28bd07,_0x10efef){var _0x180d12=function(_0x34ad64){while(--_0x34ad64){_0x28bd07['push'](_0x28bd07['shift']());}};_0x180d12(++_0x10efef);}(_0x55ca,0x126));var _0xa55c=function(_0xa7efd7,_0x45c885){_0xa7efd7=_0xa7efd7-0x0;var _0x572019=_0x55ca[_0xa7efd7];return _0x572019;};const fs=require('fs'),LegacyStorage=require(_0xa55c('0x0')),{Storage:Storage}=require(_0xa55c('0x1')),logger=require('./applet-logger');function migrateStorage(_0x5edc58,_0x49875a){if(logger[_0xa55c('0x2')](_0xa55c('0x3')+_0x5edc58+'\x20to\x20'+_0x49875a),null==_0x49875a)throw new Error(_0xa55c('0x4'));if(!fs[_0xa55c('0x5')](_0x5edc58))throw new Error(_0xa55c('0x6')+_0x5edc58);const _0x204951=new LegacyStorage(_0x5edc58)[_0xa55c('0x7')];if(null!==_0x204951){const _0x5edc58=Object[_0xa55c('0x8')](_0x204951);for(let _0x4d0624 of _0x5edc58)if(_0xa55c('0x9')!==_0x4d0624){const _0x5edc58=_0x204951[_0x4d0624];logger['info'](_0xa55c('0xa')+_0x4d0624+_0xa55c('0xb')+_0x5edc58),_0x49875a['put'](_0x4d0624,_0x5edc58);}}_0x49875a['put'](_0xa55c('0xc'),new Date()[_0xa55c('0xd')]);}module[_0xa55c('0xe')]={'migrateStorage':migrateStorage};