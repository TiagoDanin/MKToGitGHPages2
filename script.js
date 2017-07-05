var name_repo = "" //config
var converter = new showdown.Converter();
converter.setFlavor("github");
$.getJSON("https://api.github.com/repos/TiagoDanin/" + name_repo, function(v) {
	var name = v['name'];
	var url_readme = "https://raw.githubusercontent.com/TiagoDanin/" + name + "/master/README.md";
	var description = v['description'];
	document.getElementsByTagName("title")[0].textContent = name;
	document.getElementsByTagName("meta")[2].content = description + "by TiagoDanin";
	document.getElementsByTagName("meta")[4].content = name + ", tiago, danin, tiagodanin, tiagoedge";
	document.getElementsByTagName("meta")[6].content = name;
	document.getElementsByTagName("meta")[7].content = name;
	document.getElementsByTagName("meta")[8].content = name + " by @_TiagoEDGE";
	document.getElementsByTagName("h1")[0].textContent = "$ cd TiagoDanin/" + name;
	(document.getElementsByClassName("container")[0]).getElementsByTagName("a")[0].href = "https://github.com/TiagoDanin/" + name;
	(document.getElementsByClassName("container")[0]).getElementsByTagName("a")[2].href = "https://github.com/TiagoDanin/" + name;
	document.getElementsByClassName("ti-star")[0].textContent = v['watchers'];
	document.getElementsByClassName("ti-tag")[0].textContent = v['language'];
	document.getElementsByClassName("ti-download")[0].textContent = v['size'];
	document.getElementsByClassName("fh5co-workwithus-intro")[0].textContent = "ERRO 404!";
	$.get(url_readme, function(data){
		html = converter.makeHtml(data);
		document.getElementsByClassName("fh5co-workwithus-intro")[0].innerHTML = html;
	});
});