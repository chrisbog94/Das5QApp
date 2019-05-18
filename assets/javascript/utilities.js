class Utilities {
    // Script to prevent user to drag and drop files or url in the browser window
    static preventDragAndDrop() {
        document.addEventListener('dragover', function (event) {
            event.preventDefault();
            return false;
        }, false);

        document.addEventListener('drop', function (event) {
            event.preventDefault();
            return false;
        }, false);
    }

}
