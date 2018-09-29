function banner(img,dot,hot,ban) {
	let t;
	let num=0;
	for (let i = 0; i < dot.length; i++) {
		img[0].style.opacity=1;
		dot[0].classList.add(hot);
		dot[i].onclick=function() {
		for (let j = 0;j<img.length; j++) {
			img[j].style.opacity=0;
			dot[j].classList.remove(hot);
			}
		img[i].style.opacity=1;
		dot[i].classList.add(hot)
		}
		num=i;
	}
	t=setInterval(move,1500)
	function move() {
		num++;
		if (num>img.length-1) {
			num=0;
		}
		for (let k= 0; k <img.length; k++) {
			img[k].style.opacity=0;
			dot[k].classList.remove(hot);
		}
		img[num].style.opacity=1;
		dot[num].classList.add(hot);
	}
	ban.onmouseover=function (argument) {
		clearInterval(t)
	}
	ban.onmouseout=function (argument) {
		t=setInterval(move,1500)
	}
}


function yi(btnl,btnr,ul,w){
	let nu=0;
	btnr.onclick=function(){
		nu++;
		if (nu==2) {
			nu=1;
			return;
		}
		ul.style.transform='translate('+(-w*nu)+'px)'
	}
	btnl.onclick=function(){
		nu--;
		if (nu==-1) {
			nu=0;
			return;
		}
		ul.style.transform='translate('+(-w*nu)+'px)'
	}
}