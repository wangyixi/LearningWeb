//禁止复制(ctrl+c 或者 右键复制)
/*document.onkeydown = function(ev) {
	var oEv = event;
	if (oEv.keyCode = 'C' && oEv.ctrlKey) {
		return false;
	}
}
document.oncontextmenu = function() {
	return false;
}*/
//禁止复制(无法选中)
window.onmousedown = function() {
	return false
}
