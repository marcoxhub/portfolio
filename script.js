
window.addEventListener('scroll', () => {
    const backToTopButton = document.getElementById('back-to-top');
    if (window.scrollY > 300) {
        backToTopButton.style.display = 'block';
    } else {
        backToTopButton.style.display = 'none';
    }
});

document.getElementById('back-to-top').addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});


document.querySelectorAll('code.sql').forEach(codeBlock => {
    codeBlock.addEventListener('mouseover', () => {
        codeBlock.style.backgroundColor = '#f9f9f9';
    });

    codeBlock.addEventListener('mouseout', () => {
        codeBlock.style.backgroundColor = '#f4f4f4';
    });
});


