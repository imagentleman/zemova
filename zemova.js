(function() {
	var d = document;
	var z = d.querySelector('.zemova');
	z.style.boxSizing = 'border-box'; //chrome get the right width with this
	var zStyle = window.getComputedStyle(z); //but firefox needs the computer style
	var TARGET_WIDTH = z.clientWidth;
	var imgs = z.querySelectorAll('img');
	var NUM_IMGS = imgs.length;
	var mask = z.querySelector('.zemova-mask');

	z.style.position = 'relative';
	mask.style.position = 'absolute';
	mask.style.transition = 'left .8s';

	for (var i=0; i<NUM_IMGS; i++) {
		mask.appendChild(imgs[i].cloneNode());
	}
	mask.appendChild(imgs[0].cloneNode());

	mask.style.width = (1 + NUM_IMGS * 2) * TARGET_WIDTH + 'px';
	mask.style.left = -TARGET_WIDTH * NUM_IMGS + 'px';

	var imgs = z.querySelectorAll('img');

	[].map.call(imgs, function(img) {
		img.style.width = zStyle.width; //fixes weird firefox behavior
		img.style.boxSizing = 'border-box';
	});

	var step = TARGET_WIDTH;
	var offset = -step * NUM_IMGS;
	var counterOffset = 0;
	var leftBoundary = offset + step * (NUM_IMGS - 1);
	var rightBoundary = offset - step * (NUM_IMGS - 1);

	var prev = d.querySelector('.zemova-prev');
	if (prev) {
		prev.addEventListener('click', function(e) {
			e.preventDefault();
			if (offset === rightBoundary) {
				rightBoundary -= step * NUM_IMGS;
				leftBoundary -= step * NUM_IMGS;
				counterOffset = -offset;
				document.querySelector('.mask').style.webkitTransform = 'translateX(' + counterOffset + 'px)';
				document.querySelector('.mask').style.transform = 'translateX(' + counterOffset + 'px)';
			}
			offset -= step;
			d.querySelector('.mask').style.left = offset + 'px';
		});
	}

	var next = d.querySelector('.zemova-next');
	if (next) {
		next.addEventListener('click', function(e) {
			e.preventDefault();
			if (offset === leftBoundary) {
				leftBoundary += step * NUM_IMGS;
				rightBoundary += step * NUM_IMGS;
				counterOffset = -offset - step * NUM_IMGS;
				document.querySelector('.mask').style.webkitTransform = 'translateX(' + (counterOffset) + 'px)';
				document.querySelector('.mask').style.transform = 'translateX(' + (counterOffset) + 'px)';
			}
			offset += step;
			d.querySelector('.mask').style.left = offset + 'px';
		});
	}

})();