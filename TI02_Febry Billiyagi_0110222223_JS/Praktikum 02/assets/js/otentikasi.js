// Otentikasi di dalam halaman login.html
document.querySelector("#btnSubmit").addEventListener("click", function () {
	let username = document.querySelector("#username").value;
	let password = document.querySelector("#password").value;

	if (username == "ahmad2017" && password == "integrity") {
		document.querySelector("form").remove();
		document.querySelector("#successAuth").classList.remove("hidden");
	} else {
		alert("Authentication Failed.");
	}
});
