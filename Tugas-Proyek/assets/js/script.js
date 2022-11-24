$(document).ready(function () {
	// Header Change theme on scroll
	$(window).scroll(function () {
		if (window.scrollY > 100) {
			// Bayangan header
			$("header").addClass("bg-white shadow-lg");

			// Mengubah teks logo menjadi hitam
			$("header > div").children("a").addClass("text-black");

			// Mengubah teks menu menjadi hitam
			$("header > nav > ul > li").children("a").addClass("text-black");

			// Mengubah tombol humberger menjadi hitam
			$("#btnHumberger").addClass("text-black");
		} else {
			$("header > nav > ul > li").children("a").removeClass("text-black");
			$("header > div")
				.children("a")
				.addClass("text-white")
				.removeClass("text-black");
			$("header").removeClass("bg-white shadow-lg");

			// Mengubah tombol humberger menjadi hitam
			$("#btnHumberger").removeClass("text-black").addClass("text-white");
		}
	});

	// Humberger menu on mobile devices
	$("#btnHumberger > input").click(function () {
		// console.log($("#menuHumberger").hasClass("hidden"));
		if ($("#menuHumberger").hasClass("hidden")) {
			$("#menuHumberger").removeClass("hidden").addClass("block");
		} else {
			$("#menuHumberger").removeClass("block").addClass("hidden");
		}
	});

	$("#welcomeModal").click();
});
