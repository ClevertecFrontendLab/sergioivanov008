export const toggleBodyNotScrollable = (set) => {
    const body = document.querySelector('body');

    if (set) {
        body.classList.add('body_not-scrollable')
    } else {
        body.classList.remove('body_not-scrollable');
    }
}
