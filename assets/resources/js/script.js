gsap.config({ trialWarn: false });
gsap.registerPlugin(Observer);

let sections = document.querySelectorAll("section"),
  images = document.querySelectorAll(".page"),
  outerWrappers = gsap.utils.toArray(".outer"),
  innerWrappers = gsap.utils.toArray(".inner"),
  currentIndex = -1,
  wrap = gsap.utils.wrap(0, sections.length),
  animating;

gsap.set(outerWrappers, { yPercent: 100 });
gsap.set(innerWrappers, { yPercent: -100 });

function gotoSection(index, direction) {
  index = wrap(index);
  animating = true;
  let fromTop = direction === -1,
    dFactor = fromTop ? -1 : 1,
    tl = gsap.timeline({
      defaults: { duration: 1.25, ease: "power1.inOut" },
      onComplete: () => (animating = false),
    });
  if (currentIndex >= 0) {
    gsap.set(sections[currentIndex], { zIndex: 0 });
    tl.to(images[currentIndex], { yPercent: -15 * dFactor }).set(
      sections[currentIndex],
      { autoAlpha: 0 }
    );
  }
  gsap.set(sections[index], { autoAlpha: 1, zIndex: 1 });
  tl.fromTo(
    [outerWrappers[index], innerWrappers[index]],
    {
      yPercent: (i) => (i ? -100 * dFactor : 100 * dFactor),
    },
    {
      yPercent: 0,
    },
    0
  ).fromTo(images[index], { yPercent: 15 * dFactor }, { yPercent: 0 }, 0);
  currentIndex = index;
  let currentSection = sections[currentIndex];
  let sectionTitle = currentSection.getAttribute("data-title");
  document.title = sectionTitle;
}

Observer.create({
  type: "wheel,touch,pointer",
  wheelSpeed: -1,
  onDown: () => !animating && gotoSection(currentIndex - 1, -1),
  onUp: () => !animating && gotoSection(currentIndex + 1, 1),
  tolerance: 10,
  preventDefault: true,
});

function updateCurrentSection() {
  let scrollTop = window.scrollY || window.pageYOffset;
  let currentSection = Array.from(sections).find(
    (section) =>
      scrollTop >= section.offsetTop &&
      scrollTop < section.offsetTop + section.offsetHeight
  );
  if (currentSection) {
    let sectionIndex = Array.from(sections).indexOf(currentSection);
    currentIndex = sectionIndex;
  }
}

window.addEventListener("scroll", updateCurrentSection);
gotoSection(0, 1);

document.addEventListener("DOMContentLoaded", function () {
  var switchInput = document.querySelector(".switch input");
  var pages = document.querySelectorAll(".page");
  var textElements = document.querySelectorAll(
    ".page h1, .page h2, .page h3, .page h4, .page h5, .page h6, .page p, .page, strong, .span-cv, .signal-text,#blogButton,#utilities,#languages,#more, .deco-s3, .options, .tecno,.resources-s,.resources-s2, .color"
  );
  var svgElements = document.querySelectorAll("svg");
  var buttonCv = document.querySelector(".button-cv");
  var card2 = document.querySelector(".card-2");
  var container1 = document.querySelector(".container1");
  var img1 = document.querySelector(".IMG-1");
  var pS = document.querySelector(".p-s");
  var h4S2 = document.querySelector(".h4-s-2");
  switchInput.addEventListener("change", function () {
    if (this.checked) {
      pages.forEach(function (page) {
        page.style.backgroundImage = "none";
        page.style.backgroundColor = "#ffffff";
      });
      textElements.forEach(function (element) {
        element.style.color = "#000000";
      });
      container1.classList.add("no-before");
      img1.style.background = "none";
      pS.style.background = "none";
      h4S2.style.setProperty('color', '#ffffff', 'important');
      changeSVGFill("#000000");
      buttonCv.style.borderColor = "#000000";
    } else {
      pages.forEach(function (page) {
        page.style.backgroundImage =
          "linear-gradient(180deg, rgba(0, 0, 0, 0.6) 0%, rgba(0, 0, 0, 0.3) 100%)";
        page.style.backgroundColor = "#000000";
      });
      textElements.forEach(function (element) {
        element.style.color = "#ffffff";
      });
      container1.classList.remove("no-before");
      img1.style.background = "linear-gradient(to left, rgba(0, 0, 0, 0.9) -50%, transparent 100%)";
      pS.style.background = "rgba(0, 0, 0, 1)";
      h4S2.style.removeProperty('color');
      
      changeSVGFill("#ffffff");
      buttonCv.style.borderColor = "#fff";
    }
  });

  function changeSVGFill(color) {
    svgElements.forEach(function (svg) {
      var paths = svg.querySelectorAll("path");
      var polygons = svg.querySelectorAll("polygon");
      var circles = svg.querySelectorAll("circle");
      var ellipses = svg.querySelectorAll("ellipse");
      var rects = svg.querySelectorAll("rect");
      paths.forEach(function (path) {
        path.style.fill = color;
      });
      polygons.forEach(function (polygon) {
        polygon.style.fill = color;
      });
      circles.forEach(function (circle) {
        circle.style.fill = color;
      });
      ellipses.forEach(function (ellipse) {
        ellipse.style.fill = color;
      });
      rects.forEach(function (rect) {
        rect.style.fill = color;
      });
    });
  }
});
