window.onload=function () {
	let img=document.querySelectorAll('.banner a>.tu')
	let dot=document.querySelectorAll('.banner .dot>li')
	let ban=document.querySelector('.banner')
	console.log(img,dot,ban)
	banner(img,dot,'hot',ban)


	let btl=document.querySelector('.in-top .itr')
	let btr=document.querySelector('.in-top .itrr')
	let ul=document.querySelector('.in-b ul')
	let w=parseInt(getComputedStyle(ul,null).width)/2
	console.log(btr,btl,ul,w)
	yi(btl,btr,ul,w)

	let cart=document.querySelector('#ul .l')
	let mune=document.querySelector('#ul .l .x')
	cart.onmouseover=function(){
		// mune.style.background='#fff';
		mune.style.height='214px';
		// mune.style.display='block'
		mune.style.lineHeight='214px';
	}
	cart.onmouseout=function(){
		mune.style.background='#fff';
		mune.style.height='0px';
	}

	let cart1=document.querySelector('#fuye li:nth-child(2)')
	let mune2=document.querySelector('#fuye .sj .a-children')
	cart1.onmouseover=function(){
		mune2.style.height='322px';
	}
	cart1.onmouseout=function(){
		mune2.style.height='0px';

	}
}