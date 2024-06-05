document.addEventListener('DOMContentLoaded', function () {
    const saveButton = document.getElementById('save');
    const clearButton = document.getElementById('clear');
    const noteArea = document.getElementById('notes');
    const cancelButton = document.getElementById('cancel');

    chrome.storage.sync.get('note', function (data) {
        if (data.note) {
            noteArea.value = data.note;
        }
    });

    saveButton.addEventListener('click', function () {
        const note = noteArea.value;
        chrome.storage.sync.set({ note: note }, function () {
        });
    });

    clearButton.addEventListener('click', function () {
        chrome.storage.sync.clear(function () {
            noteArea.value = '';
        });
    });
    cancelButton.addEventListener('click', function () {
        window.close();
    });
});
