const accordionItemHeaders = document.querySelectorAll('.accordion-item-header');

accordionItemHeaders.forEach(accordionItemHeader => {
    accordionItemHeader.addEventListener('click', () => {

        // Closing active opened accordion if any is open when clicked another one 
        const currentlyActive = document.querySelector('.accordion-item-header.active');
        if (currentlyActive && currentlyActive !== accordionItemHeader) {
            currentlyActive.classList.remove('active');
            currentlyActive.nextElementSibling.style.maxHeight = 0;
        }

        // applying active classlist for opening content
        accordionItemHeader.classList.toggle('active')

        // selecting accordion-item-body
        const accordionItemBody = accordionItemHeader.nextElementSibling;

        // adding animation and strict height of content
        if (accordionItemHeader.classList.contains('active')) {
            accordionItemBody.style.maxHeight = accordionItemBody.scrollHeight + 'px';
        } else {
            accordionItemBody.style.maxHeight = 0;
        }
    });
});