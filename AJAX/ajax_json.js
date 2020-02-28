function json2url(json) {
	var timer = null;
	json.t = Math.random();
	var arr = [];
	for (var name in json) {
		arr.push(name + '=' + json[name]);
	}
	return arr.join('&');
}


function ajax(json) {
	json = json || {};
	if (!json.url) {
		return;
	}
	json.type = json.type || "GET";
	json.timeout = json.timeout || 0;
	json.data = json || {};
	//1.创建ajax对象
	if (window.XMLHttpRequest) {
		var oAjax = new XMLHttpRequest;
	} else {
		var oAjax = new ActiveXObject('Microsoft.XMLHTTP');
	}
	//2.建立连接 
	switch (json.type.toLocaleLowerCase()) {
		case 'get':
			oAjax.open('GET', json.url + '?' + json2url(json.data), true);
			//3.发送请求
			oAjax.send();
			break;
		case 'post':
			oAjax.open('POST', json.url, true);
			//3.发送请求
			oAjax.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
			oAjax.send(json2url(json.data));
			break;
			json.loading || json.loading();
	}
	//4.接收
	oAjax.onreadystatechange = function() {
		if (oAjax.readyState == 4) {
			clearTimeout(timer);
			if (oAjax.status >= 200 || oAjax.status == 304) {
				json.success && json.success(oAjax.responseText);
			} else {
				json.error && json.error(oAjax.status);
			}
		}
	};
	timer = setTimeout(function() {
		alert("网络出错");
		oAjax.abort();
	}, json.timeout);
}
