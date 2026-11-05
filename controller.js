function increaseCount() {
    model.count++;
    updateView();
}

function resetCount() {
    model.count = 0;
    updateView();
}