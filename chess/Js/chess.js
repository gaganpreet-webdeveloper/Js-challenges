var res;
const textbox = document.getElementById("t1");
const btn = document.getElementById("Button");
btn.addEventListener("click", function click() {
	res = parseInt(textbox.value);
	const innerchess = document.getElementById("outer");
	for (let i = 1; i <= res; i++) {
		for (let j = 1; j <= res; j++) {
			if (i % 2 != 0) {
				if (j % 2 == 0) {
					innerchess.innerHTML += `<div class="box2">
                                </div> `;
				} else {
					innerchess.innerHTML += `<div class="box1">
                                </div> `;
				}
			} else {
				if (j % 2 != 0) {
					innerchess.innerHTML += `<div class="box2">
                                </div> `;
				} else {
					innerchess.innerHTML += `<div class="box1">
                                </div> `;
				}
			}
		}
	}
	textbox.value = "";
});
