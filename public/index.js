console.log("Hello from JS")
var script = document.createElement('script');
script.onload = function () {
    console.log("Addon loaded.")
};
script.src = "http://localhost:3000/addons/myaddon/index.js";

document.head.appendChild(script);
