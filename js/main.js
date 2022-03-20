window.addEventListener('load', () => {

  const grid = new Isotope("section", {
    itemSelector: "article",
    columnWidth: "article",
    transitionDuation: "0.8s"
  });

  const btns = document.querySelectorAll("main ul li");

  for (const el of btns) {
    el.addEventListener('click', (e) => {
      e.preventDefault();

      const sort = e.currentTarget.querySelector('a').getAttribute('href');

      grid.arrange({
        filter: sort
      })

      for (const el of btns) {
        el.classList.remove('on');
        e.currentTarget.classList.add('on');
      }
      
    })
  }
})