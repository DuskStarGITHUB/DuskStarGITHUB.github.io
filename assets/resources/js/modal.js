document.addEventListener("DOMContentLoaded", function () {
  const proyectoRadio = document.getElementById("proyecto-radio");
  const proyectoNTS = document.getElementById("proyecto-nts");
  const radioModal = document.getElementById("radio-modal");
  const ntsModal = document.getElementById("nts-modal");
  const modalClose = document.querySelectorAll(".modal-close");
  let isModalOpen = false;
  let currentOpenModal = null;
  let lastScrollPosition = 0;

  const closeModal = () => {
    if (currentOpenModal) {
      currentOpenModal.classList.remove("active");
      document.body.style.overflow = "";
      isModalOpen = false;
      currentOpenModal = null;
    }
  };

  const openModal = (modal) => {
    modal.classList.add("active");
    document.body.style.overflow = "hidden";
    isModalOpen = true;
    currentOpenModal = modal;
    lastScrollPosition =
      window.pageYOffset || document.documentElement.scrollTop;

    const galleryMain = modal.querySelector(".gallery-main img");
    const thumbnails = modal.querySelectorAll(".thumb");

    if (galleryMain && thumbnails.length > 0) {
      thumbnails.forEach((thumb) => {
        thumb.addEventListener("click", function () {
          thumbnails.forEach((t) => t.classList.remove("active"));
          this.classList.add("active");
          galleryMain.src = this.src;
          galleryMain.alt = this.alt;
        });
      });
    }
  };

  proyectoRadio.addEventListener("click", () => openModal(radioModal));
  proyectoNTS.addEventListener("click", () => openModal(ntsModal));

  modalClose.forEach((closeBtn) => {
    closeBtn.addEventListener("click", closeModal);
  });

  [radioModal, ntsModal].forEach((modal) => {
    modal.addEventListener("click", function (e) {
      if (e.target === modal) {
        closeModal();
      }
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
