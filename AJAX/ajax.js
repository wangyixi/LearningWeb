function ajax(url, fuSucc, fuErr){
	//创建ajax对象
	if(window.XMLHttpRequest){
		var oAjax = new XMLHttpRequest;
	}else{
		//<!--[if lte IE 6]>
		var oAjax = new ActiveXObject('Microsoft.XMLHTTP');
	}
	//建立连接
	oAjax.open('GET', url+'?t=Math.random()', true);
	//发送请求
	oAjax.send();
	//接受
	oAjax.onreadystatechange = function(){
		//判断通信状态
		if(oAjax.readyState == 4){
			if(oAjax.status == 200 || oAjax.status == 304){
				fuSucc(oAjax.responseText);
			}else{
				fnErr(oAjax.status);
			}
		}
	};
}