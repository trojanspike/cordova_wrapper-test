document.addEventListener('deviceready', function(){

	window.requestFileSystem(LocalFileSystem.PERSISTENT, 0, function(fileSystem){
		// good to go
		fileSystem.root.getFile("readme.txt", {create: true, exclusive: false}, 
		function(writer){
			// have writer
			writer.onwriteend = function(evt) {
				writer.truncate(11);
				writer.onwriteend = function(evt) {
					writer.seek(4);
					writer.write(" Some text added from file system");
				};
			};

			// read and render
			var reader = new FileReader();
			reader.onloadend = function(evt) {
			    console.log("Read as text");
			    console.log(evt.target.result);
				};
			reader.readAsText(file);
		}, function(){
			// fail
		});
	}, function(){
		// failure
	});



	

}, false);
