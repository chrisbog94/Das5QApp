var _0x34e8=['write-json-file','write-file','read-file','mkdir','walk-directory','get-home-dir','existsSync','resolve','mkdirSync','FileManager:\x20writeJSON:\x20','info','stringify','FileManager:\x20write:\x20','writeFileSync','error','FileManager:\x20isFileExisting\x20','FileManager:\x20readFile\x20','readFileSync','utf-8','FileManager:\x20readDirectory\x20\x20','FileManager:\x20removeFile\x20\x20','unlinkSync','FlashNoticeType','ERROR','returnValue','exists-file','parse','sendFlashNoticeToClientSide','The\x20file\x20','\x20was\x20corrupted\x20so\x20it\x20has\x20been\x20deleted','remove-file','isFileExisting','readFile','exports','readFileAbsolutePath','write','electron','ipcMain','homedir','path','./flash-notice-to-client.js','/.quio','/.quio/v2/','profile-switcher-setting'];(function(_0x137704,_0x3ce80f){var _0x20026f=function(_0x340445){while(--_0x340445){_0x137704['push'](_0x137704['shift']());}};_0x20026f(++_0x3ce80f);}(_0x34e8,0x12c));var _0x834e=function(_0x29a50c,_0xcd723f){_0x29a50c=_0x29a50c-0x0;var _0x586624=_0x34e8[_0x29a50c];return _0x586624;};const fs_socket=require('fs'),ipcMain=require(_0x834e('0x0'))[_0x834e('0x1')],os=require('os'),homePath=os[_0x834e('0x2')](),pathModule=require(_0x834e('0x3')),appLogger=require('./logger.js'),flashNotice=require(_0x834e('0x4')),quio=_0x834e('0x5'),pathToQuioV2Folder=homePath+_0x834e('0x6'),profileSwitcherSetting=_0x834e('0x7'),WRITE_JSON_FILE_CHANNEL=_0x834e('0x8'),WRITE_FILE_CHANNEL=_0x834e('0x9'),READ_FILE_CHANNEL=_0x834e('0xa'),EXISTS_FILE_CHANNEL='exists-file',MKDIR_CHANNEL=_0x834e('0xb'),REMOVE_FILE_CHANNEL='remove-file',WALK_DIRECTORY_CHANNEL=_0x834e('0xc'),GET_HOME_DIR_PATH_CHANNEL=_0x834e('0xd');function createTheQuioFolder(){createFolderIfnotExistQuio(),createFolderIfnotExistProfileSwitcherSetting();}function createFolderIfnotExistQuio(){createFolderIfNotExists(homePath+quio),createFolderIfNotExists(pathToQuioV2Folder);}function createFolderIfNotExistsInQuioV2Folder(_0x3a3ef6){fs_socket[_0x834e('0xe')](pathModule[_0x834e('0xf')](pathToQuioV2Folder+_0x3a3ef6))||fs_socket[_0x834e('0x10')](pathModule[_0x834e('0xf')](pathToQuioV2Folder+_0x3a3ef6));}function createFolderIfnotExistProfileSwitcherSetting(){createFolderIfNotExistsInQuioV2Folder(profileSwitcherSetting);}function createFolderIfNotExists(_0x1af45a){_0x1af45a=pathModule[_0x834e('0xf')](_0x1af45a),fs_socket[_0x834e('0xe')](_0x1af45a)||fs_socket[_0x834e('0x10')](_0x1af45a);}function writeJSON(_0x36e124,_0x14038b){try{const _0x2e1a37=_0x834e('0x11')+(_0x36e124=pathModule[_0x834e('0xf')](homePath+_0x36e124));appLogger[_0x834e('0x12')](_0x2e1a37),fs_socket['writeFileSync'](_0x36e124,JSON[_0x834e('0x13')](_0x14038b));}catch(_0x6cd9b9){appLogger['error'](_0x6cd9b9);}}function write(_0x23848e,_0x2d95f2){try{const _0x28e659=_0x834e('0x14')+(_0x23848e=pathModule['resolve'](_0x23848e));appLogger[_0x834e('0x12')](_0x28e659),fs_socket[_0x834e('0x15')](_0x23848e,_0x2d95f2);}catch(_0x57274a){appLogger[_0x834e('0x16')](_0x57274a);}}function isFileExisting(_0x4a9cdc){try{const _0x38a8cd=_0x834e('0x17')+(_0x4a9cdc=pathModule['resolve'](homePath+_0x4a9cdc));return appLogger[_0x834e('0x12')](_0x38a8cd),fs_socket[_0x834e('0xe')](_0x4a9cdc);}catch(_0x370fb5){return appLogger['error'](_0x370fb5),!0x1;}}function readFile(_0x283e56){try{const _0x211e9a=_0x834e('0x18')+(_0x283e56=pathModule[_0x834e('0xf')](homePath+_0x283e56));return appLogger[_0x834e('0x12')](_0x211e9a),fs_socket[_0x834e('0x19')](_0x283e56,_0x834e('0x1a'));}catch(_0x595515){return appLogger[_0x834e('0x16')](_0x595515),'';}}function readFileAbsolutePath(_0x1fd2c6){try{const _0x113ff4=_0x834e('0x18')+(_0x1fd2c6=pathModule['resolve'](_0x1fd2c6));return appLogger[_0x834e('0x12')](_0x113ff4),fs_socket[_0x834e('0x19')](_0x1fd2c6,'utf-8');}catch(_0x1b4bdf){return appLogger[_0x834e('0x16')](_0x1b4bdf),'';}}function mkdirFolder(_0x8d406e){try{const _0x5c55ca='FileManager:\x20mkdirFolder\x20'+(_0x8d406e=pathModule[_0x834e('0xf')](homePath+_0x8d406e));appLogger[_0x834e('0x12')](_0x5c55ca),fs_socket['existsSync'](_0x8d406e)||fs_socket[_0x834e('0x10')](_0x8d406e);}catch(_0x1dc1e0){appLogger['error'](_0x1dc1e0);}}function readDirectory(_0x3bc4f7){try{const _0x2e1983=_0x834e('0x1b')+(_0x3bc4f7=pathModule['resolve'](homePath+_0x3bc4f7));if(appLogger[_0x834e('0x12')](_0x2e1983),fs_socket[_0x834e('0xe')](_0x3bc4f7)){return fs_socket['readdirSync'](_0x3bc4f7);}}catch(_0x5bef62){return appLogger[_0x834e('0x16')](_0x5bef62),[];}}function removeFile(_0x508a1d){const _0x2826ec=_0x834e('0x1c')+(_0x508a1d=pathModule[_0x834e('0xf')](_0x508a1d));appLogger[_0x834e('0x12')](_0x2826ec);try{fs_socket[_0x834e('0x1d')](_0x508a1d);}catch(_0x130cc5){appLogger['error'](_0x130cc5),flashNotice['sendFlashNoticeToClientSide']('The\x20file\x20'+_0x508a1d+'\x20could\x20not\x20be\x20deleted',flashNotice[_0x834e('0x1e')][_0x834e('0x1f')]);}}createTheQuioFolder(),ipcMain['on'](_0x834e('0x8'),function(_0x5dacc1,_0xb5bc06,_0x11f1ce){writeJSON(_0xb5bc06,_0x11f1ce),_0x5dacc1[_0x834e('0x20')]=_0x11f1ce;}),ipcMain['on'](_0x834e('0x9'),function(_0x4551f5,_0x390119,_0x3d149d){write(_0x390119,_0x3d149d),_0x4551f5[_0x834e('0x20')]=_0x3d149d;}),ipcMain['on'](_0x834e('0x21'),function(_0x493289,_0xef9ec2){_0x493289['returnValue']=isFileExisting(_0xef9ec2);}),ipcMain['on'](_0x834e('0xa'),function(_0x3787b0,_0x9ab921){let _0x2b3418={};try{_0x2b3418=JSON[_0x834e('0x22')](readFile(_0x9ab921));}catch(_0x4689c2){appLogger[_0x834e('0x16')](_0x4689c2),removeFile(_0x9ab921),flashNotice[_0x834e('0x23')](_0x834e('0x24')+_0x9ab921+_0x834e('0x25'),flashNotice['FlashNoticeType'][_0x834e('0x1f')]);}_0x3787b0[_0x834e('0x20')]=_0x2b3418;}),ipcMain['on'](_0x834e('0xb'),function(_0xaf01f4,_0x595cc0){mkdirFolder(_0x595cc0),_0xaf01f4[_0x834e('0x20')]=!0x0;}),ipcMain['on'](_0x834e('0x26'),function(_0x4b12f5,_0x496533){removeFile(_0x496533);}),ipcMain['on']('walk-directory',function(_0x3e58fa,_0x41bf4d){_0x3e58fa[_0x834e('0x20')]=readDirectory(_0x41bf4d);}),ipcMain['on'](_0x834e('0xd'),function(_0x339e28){_0x339e28[_0x834e('0x20')]=homePath;}),module['exports'][_0x834e('0x27')]=isFileExisting,module['exports'][_0x834e('0x28')]=readFile,module[_0x834e('0x29')]['removeFile']=removeFile,module[_0x834e('0x29')][_0x834e('0x2a')]=readFileAbsolutePath,module['exports']['writeJSON']=writeJSON,module[_0x834e('0x29')][_0x834e('0x2b')]=write;