window.onload = function () {
	document.querySelector('#js-preloader').classList.add('loaded');
	setTimeout(function () {
		document.querySelector('#js-preloader').classList.add('d-none');
	}, 250);
}