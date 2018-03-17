const anchorElements = document.getElementsByTagName('a')[0];

anchorElements.addEventListener('mouseover', () => {
    anchorElements.textContent = anchorElements.textContent.toUpperCase();
});

anchorElements.addEventListener('mouseout', () => {
    anchorElements.textContent = anchorElements.textContent.toLowerCase();
});