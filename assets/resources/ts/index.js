var buttons = document.querySelectorAll(".options button");
var openedTab = null;
buttons.forEach(function (button) {
    button.addEventListener("click", function () {
        var tabId = button.id;
        var url = "../../../assets/pages/mas-info/index.html#".concat(tabId);
        if (openedTab && !openedTab.closed) {
            openedTab.location.href = url;
            openedTab.focus();
        }
        else {
            openedTab = window.open(url, "_blank");
        }
    });
});
