// BOTON CV
document.addEventListener("DOMContentLoaded", function () {
  var downloadButton = document.querySelector(".button-cv");

  downloadButton.addEventListener("click", function () {
    var link = document.createElement("a");
    link.href = "assets/archives/docs/CVSpeencerPulido.pdf";
    link.target = "_blank";
    link.click();
  });
});

// BOTON BLOG
document.getElementById("blogButton").addEventListener("click", function () {
  window.open("#", "_blank");
});
// MORE INFOR BTN
document.getElementById("more-info-s").addEventListener("click", function () {
  window.open("assets/pages/mas-info/index.html", "_blank");
});