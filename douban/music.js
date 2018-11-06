// js
window.onload = function(){
	var ads = document.getElementById("ads");
	var imgs = ads.getElementsByTagName("img");
	var lits = ads.getElementsByTagName("li");
	var timer = null;
	var cur = 0;

	timer = setInterval(autoPlay,4000);
	ads.onmouseover = function(){
		clearInterval(timer);
	}
	ads.onmouseout = function(){
		timer = setInterval(autoPlay,5000);
	}

	for (var i=0;i<lits.length;i++){
		(function(x){
			lits[x].onclick = function(){
				changePic(x);
				cur = x;
			}
		})(i);
	}

	function autoPlay(){
		cur++;
		if (cur>=lits.length){cur=0}
		changePic(cur);
	}
	function changePic(curIndex){
		for (var i=0;i<lits.length;i++){
			imgs[i].className = "";
			lits[i].className = "";
		}
		imgs[curIndex].className = "show";
		lits[curIndex].className = "active";
	}

	var mus = document.getElementById("musician");
	var fash = document.getElementById("fash1")
	var quik = document.getElementById("quik1")
	var tab = mus.getElementsByTagName("div");
	
	fash.onclick = function(){
		quik.className = "";
		this.className = "show1";
		tab[1].className = "";
		tab[0].className = "show";
	}
	quik.onclick = function(){
		fash.className = "";
		this.className = "show1";
		tab[0].className = "";
		tab[1].className = "show";
	}

	var sen2 = document.getElementById("sen2");
	var sen3 = document.getElementById("sen3");
	var but1 = document.getElementById("but1");
	var but2 = document.getElementById("but2");
	but1.onclick = function(){
		this.style.background = "#80cfbb";
		but2.style.background = "#23ab88";
		sen3.className = "";
		sen2.className = "show";
	}
	but2.onclick = function(){
		this.style.background = "#80cfbb";
		but1.style.background = "#23ab88";
		sen2.className = "";
		sen3.className = "show";
	}

	var li = document.getElementById("hot").getElementsByTagName("a");
	var lis = document.getElementById("hot-lis").getElementsByTagName("ul");

	for (var i=0;i<lis.length;i++){
		li[i].index = i;
		li[i].onclick = function(){
			for (var j=0;j<lis.length;j++){
				li[j].className = "";
				lis[j].className = "";
			}
			this.className = "sec";
			lis[this.index].className = "sec";
		}
	}

}
