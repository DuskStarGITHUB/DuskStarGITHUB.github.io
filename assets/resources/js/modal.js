document.addEventListener("DOMContentLoaded", function () {
  const proyectoRadio = document.getElementById("proyecto-radio");
  const radioModal = document.getElementById("radio-modal");
  const modalClose = document.querySelector(".modal-close");
  const thumbnails = document.querySelectorAll(".thumb");
  const mainImage = document.getElementById("main-image");
  let isModalOpen = false;
  let lastScrollPosition = 0;
  const closeModal = () => {
    radioModal.classList.remove("active");
    document.body.style.overflow = "";
    isModalOpen = false;
  };
  proyectoRadio.addEventListener("click", function () {
    radioModal.classList.add("active");
    document.body.style.overflow = "hidden";
    isModalOpen = true;
    lastScrollPosition =
      window.pageYOffset || document.documentElement.scrollTop;
  });
  modalClose.addEventListener("click", closeModal);
  radioModal.addEventListener("click", function (e) {
    if (e.target === radioModal) {
      closeModal();
    }
  });

  thumbnails.forEach((thumb) => {
    thumb.addEventListener("click", function () {
      thumbnails.forEach((t) => t.classList.remove("active"));
      this.classList.add("active");
      mainImage.src = this.src;
      mainImage.alt = this.alt;
    });
  });

  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape" && isModalOpen) {
      closeModal();
    }
  });
  window.addEventListener(
    "wheel",
    function (e) {
      if (isModalOpen) {
        // Detectamos la dirección del scroll
        const delta = Math.sign(e.deltaY);
        if (delta !== 0) {
          closeModal();
        }
      }
    },
    { passive: true }
  );
  let touchStartY = 0;
  window.addEventListener(
    "touchstart",
    function (e) {
      if (isModalOpen) {
        touchStartY = e.touches[0].clientY;
      }
    },
    { passive: true }
  );
  window.addEventListener(
    "touchmove",
    function (e) {
      if (isModalOpen) {
        const touchY = e.touches[0].clientY;
        const deltaY = touchY - touchStartY;
        if (Math.abs(deltaY) > 10) {
          closeModal();
        }
      }
    },
    { passive: true }
  );
  window.addEventListener(
    "scroll",
    function () {
      if (isModalOpen) {
        const currentScroll =
          window.pageYOffset || document.documentElement.scrollTop;
        if (Math.abs(currentScroll - lastScrollPosition) > 5) {
          closeModal();
        }
      }
    },
    { passive: true }
  );
});
