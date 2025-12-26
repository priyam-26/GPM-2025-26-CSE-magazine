const pages = document.querySelectorAll('.page');

/* Set proper stacking */
pages.forEach((page, index) => {
  if (index % 2 === 0) {
    page.style.zIndex = pages.length - index;
  }
  page.pageNum = index + 1;

  // Accessibility
  page.setAttribute('tabindex', '0');
});

/* Click + Keyboard flip */
pages.forEach(page => {
  const flipPage = () => {
    const next = page.nextElementSibling;
    const prev = page.previousElementSibling;

    if (page.pageNum % 2 === 0) {
      page.classList.remove('flipped');
      prev && prev.classList.remove('flipped');
    } else {
      page.classList.add('flipped');
      next && next.classList.add('flipped');
    }
  };

  page.addEventListener('click', flipPage);

  page.addEventListener('keydown', e => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      flipPage();
    }
  });
});
