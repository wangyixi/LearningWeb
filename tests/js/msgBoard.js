window.onload = function(){
	var box = document.getElementById('box');
	var name = document.getElementById('name');
	var msg = document.getElementById('content');
	var ul = document.getElementById('comments');
	var li = document.getElementById('comment');
	var btn = document.getElementById('btn');
	btn.onclick = function(){
			if(name.value == ''){
				alert("姓名不能为空!");
				return;
			} 
			if(msg.value == ''){
				alert("内容不能为空!");
				return;
			}
			var li = document.createElement(li);
			li.innerHTML = '<h3>'+name.value+':  </h3><p>'+msg.value+'</p>';
			if(ul.children==0){
				ul.appendChild(li);
			}else{
				ul.insertBefore(li, ul.children[0]);
			}
	};
};