exports.file = function(fileEntry, success, error){
		var path
		if(device.platform=="Android"){
			path = fileEntry.nativeURL;
		}else{
			path = fileEntry.toURL();
		}
		if (path){
			cordova.exec(success, error, "md5chksum", "file", [path]);
		}else{
			error("md5chksum: no path");
		}
};


