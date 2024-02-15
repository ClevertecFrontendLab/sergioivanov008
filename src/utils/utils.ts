export const toggleBodyNotScrollable = (set: boolean) => {
    if (set) {
        document.body.classList.add('body_not-scrollable');
    } else {
        document.body.classList.remove('body_not-scrollable');
    }
};
