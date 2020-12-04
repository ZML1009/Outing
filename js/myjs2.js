window.onload = function(){
	function shijian(){
		var lin = document.getElementById('lin');
		var lin1 = document.getElementById('lin1');
		var lin2 = document.getElementById('lin2');
		var date = new Date();
		var yue = date.getMonth()+1;
		var ri = date.getDate();
		if(ri<10){
			var ri = '0'+ri;
		}
		if(yue<10){
			var yue = '0'+yue;
		}
		
		lin.innerHTML = yue+'-'+ri;
		lin1.innerHTML = yue+'-'+ri;
		lin2.innerHTML = yue+'-'+ri;
	}
	shijian();
}