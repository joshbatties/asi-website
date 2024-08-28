document.addEventListener('scroll', function() {
    const mainFooter = document.querySelector('#footer'); // Assuming your main footer has an ID of 'footer'
    const secondFooter = mainFooter.querySelector('.second-footer');
    const windowHeight = window.innerHeight;
    const mainFooterRect = mainFooter.getBoundingClientRect();

    // Check if the user has scrolled to the bottom of the main footer
    if (mainFooterRect.top < windowHeight && mainFooterRect.bottom <= windowHeight) {
        // Add a wheel event listener to detect further scrolling down
        window.addEventListener('wheel', detectFurtherScroll);
    } else {
        secondFooter.classList.remove('show-footer');
        window.removeEventListener('wheel', detectFurtherScroll);
    }
});

function detectFurtherScroll(event) {
    if (event.deltaY > 0) { // If the user scrolls down
        const mainFooter = document.querySelector('#footer');
        const secondFooter = mainFooter.querySelector('.second-footer');
        secondFooter.classList.add('show-footer');
        // Remove the event listener to prevent multiple triggers
        window.removeEventListener('wheel', detectFurtherScroll);
    }
}