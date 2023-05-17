// const body = document.querySelector("body"),
// 	drkTgl = document.querySelector("#darkmode"),
// 	drkMd = {
// 		on() {
// 			drkTgl.checked = true;
// 			body.classList.add("darkmode");
// 		},
// 		off() {
// 			drkTgl.checked = false;
// 			body.classList.remove("darkmode");
// 		}
// 	};
// // Check system preference
// if (window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches) {
// 	drkMd.on();
// } else {
// 	drkMd.off();
// }

// // Watch for system preference change
// window
// 	.matchMedia("(prefers-color-scheme: dark)")
// 	.addEventListener("change", (event) => {
// 		const colorPref = event.matches ? drkMd.on() : drkMd.off();
// 		return colorPref;
// 	});
// // Darkmode Toggle btn
// drkTgl.addEventListener("change", function () {
// 	const colorPref = drkTgl.checked ? drkMd.on() : drkMd.off();
// 	return colorPref;
// });
















