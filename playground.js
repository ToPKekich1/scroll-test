// const img = document.querySelector('.git img');

// // window.addEventListener('scroll', () => {
// // 	const { top } = title.getBoundingClientRect();
// // 	if (top < window.innerHeight / 3) {
// // 		// title.style.background = 'red';
// // 	}
// // });

// const options = {
// 	// определяет на какой высоте элемента менять значение isIntersecting
// 	threshold: 0.5
// };

// const animate = entries => {
// 	// entries - список елементов
// 	// isIntersecting - находится ли элемент в видимой области экрана и ниже
// 	entries.forEach(entry => {
// 		if (entry.isIntersecting) {
// 			img.style.transition = 'transform .5s';
// 			img.style.transform = 'scale(2)';
// 		}
// 	});
// };

// const observer = new IntersectionObserver(animate, options);

// observer.observe(img);

const controller = new ScrollMagic.Controller();

const scene = new ScrollMagic.Scene({
	triggerElement: '.git',
	triggerHook: 0.5
})
	.addIndicators()
	.setClassToggle('.git', 'active')
	.addTo(controller);
