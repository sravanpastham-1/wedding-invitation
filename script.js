document.addEventListener('DOMContentLoaded', () => {
    const giftBox = document.getElementById('giftBox');

    giftBox.addEventListener('click', () => {
        if (!giftBox.classList.contains('open')) {
            // This is the only line that needs to run!
            giftBox.classList.add('open');
        }
    });
});