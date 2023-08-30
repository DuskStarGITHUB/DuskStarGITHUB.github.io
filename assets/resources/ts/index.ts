const buttons = document.querySelectorAll(".options button");
let openedTab: Window | null = null;

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const tabId = button.id;
    const url = `../../../assets/pages/mas-info/index.html#${tabId}`;

    if (openedTab && !openedTab.closed) {
      openedTab.location.href = url;
      openedTab.focus();
    } else {
      openedTab = window.open(url, "_blank");
    }
  });
});
