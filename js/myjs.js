window.onload = function(){
	var ck = function(){
		    var x = prompt ("输入昵称: ", "Tom");/*第一个变量为提示语，第二个变量为默认初始值*/
			var name = document.getElementById('name');
		    name.innerHTML = x;
	}
				var myul = document.getElementById('ul1');
				var myli = document.getElementsByTagName('li');
				var speed = 1.5;
				myul.innerHTML += myul.innerHTML;
				myul.style.width = myli.length*50+'px';
				function move(){
					if(myul.offsetLeft > 0){
						myul.style.left = -(myul.offsetWidth/2)+'px';
					}
					myul.style.left = myul.offsetLeft + speed + 'px';
					shijian();
				}
				
				var timer = setInterval(move,30);//全局变量 ，保存返回的定时器
						 
				oDiv.addEventListener('mouseout', function () {
				  timer = setInterval(move,30);
				},false);
				oDiv.addEventListener('mousemove', function () {
				  clearInterval(timer);//鼠标移入清除定时器
				},false);
				function shijian(){
					var obj = document.getElementById('id1');
					var start = document.getElementById('start');
					var end = document.getElementById('end');
					var sp_start = document.getElementById('sp_start');
					var sp_end = document.getElementById('sp_end');
					var lin = document.getElementById('lin');
					var date = new Date();
					var yue = date.getMonth()+1;
					var ri = date.getDate();
					var shi = date.getHours();
					var fen = date.getMinutes();
					var miao = date.getSeconds();
					if(ri<10){
						var ri = '0'+ri;
					}
					if(shi<10){
						var shi = '0'+shi;
					}
					if(fen<10){
						var fen = '0'+fen;
					}
					if(miao<10){
						var miao = '0'+miao;
					}
					obj.innerHTML = '当前时间:'
					+date.getFullYear()
					+'-'+yue
					+'-'+ri
					+' '+shi
					+':'+fen
					+':'+miao;
					
					start.innerHTML = yue+'-'+ri+' '+'07:00';
					end.innerHTML = yue+'-'+ri+' '+'23:00';
					sp_start.innerHTML = yue+'-'+ri+' '+'06:05';
					sp_end.innerHTML = yue+'-'+ri+' '+'06:10';
					lin.innerHTML = yue+'-'+ri;
					

					}
					
			}
