document.addEventListener("DOMContentLoaded", function () {
  var downloadButton = document.querySelector(".button-cv");
  downloadButton.addEventListener("click", function () {
    var link = document.createElement("a");
    link.href = "assets/archives/docs/CV_Speencer Pulido Romero.pdf";
    link.target = "_blank";
    link.click();
  });
});

document.getElementById("blogButton").addEventListener("click", function () {
  window.open("https://linktr.ee/DuskStar", "_blank");
});
