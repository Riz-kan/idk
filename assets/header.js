let stickyT;
function setStickyState(headerEl, state) {
  clearTimeout(stickyT);
  stickyT = setTimeout(() => {
    headerEl.dataset.stickyState = state;   // 'active' | 'idle'
    headerEl.removeAttribute('data-animating'); // avoid opacity rule entirely
  }, 80); // 60–100ms is the sweet spot
}

