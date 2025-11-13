document.addEventListener("contextmenu", function (e) {
    e.preventDefault();
});
document.addEventListener("keydown", function (e) {
    if (e.key === "F12") {
        e.preventDefault();
        return false;
    }
    if (e.ctrlKey && e.shiftKey && e.key.toLowerCase() === "i") {
        e.preventDefault();
        return false;
    }
    if (e.ctrlKey && e.key.toLowerCase() === "u") {
        e.preventDefault();
        return false;
    }
    if (e.ctrlKey && e.shiftKey && e.key.toLowerCase() === "c") {
        e.preventDefault();
        return false;
    }
    if (e.ctrlKey && e.shiftKey && e.key.toLowerCase() === "j") {
        e.preventDefault();
        return false;
    }
});
document.addEventListener('copy', function(e) {
    e.preventDefault();
    if (e.clipboardData) {
        e.clipboardData.setData('text/plain', ' ');
    }
    return false;
});
