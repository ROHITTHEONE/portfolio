function _show(){
	const navig = document.getElementById('nav');
	const ham = document.getElementById('ham');
	if(navig.className == 'closed'){
		navig.className = 'opened';
		ham.className = 'cross';
	} else{
		navig.className = 'closed';
		ham.className = 'header-hamburger';
	}
}

function _add(el, tar){
	var arr = document.getElementById('list').children;
	for (var i = arr.length - 1; i >= 0; i--) {
		arr[i].className = '';
	}
	el.className = 'is-active'; 
	// smoothScroll(tar, 1000);
}


function _animate(){
	document.getElementById('contact-form').className = 'animated';
}


// function smoothScroll(target, duration){
// 	var target = document.querySelector(target);
// 	var targetPosition = target.getBoundingClientRect().top;
// 	var startPosition = window.pageYOffset;
// 	var distance = targetPosition - startPosition;
// 	var startTime = null;

// 	function animation(currentTime){
// 		if(startTime === currentTime)
// 				startTime = currentTime;
// 		var timeElapsed = currentTime - startTime;
// 		var run = ease(timeElapsed, startTime, distance, duration);
// 		var ob = window.scrollTo(0, run);
// 		if(timeElapsed < duration){
// 			requestAnimationFrame(animation);
// 		}
// 	}

// 	function ease(t, b, c, d){
// 		t /= d / 2;
// 		if(t < 1)
// 			return c / 2 * t * t + b;
// 		t--;
// 		return -c / 2 * (t * (t - 2) - 1) + b;
// 	}
// 	requestAnimationFrame(animation);
// }