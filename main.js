const callback = (entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        document.body.style.backgroundColor = entry.target.dataset.color;
      }
    });
  };
  
  const changes = document.querySelectorAll('.change');
  
  const observer = new IntersectionObserver(callback, { threshold: .5 });
  
  changes.forEach(change => {
    observer.observe(change);
  });
  
  const sections = document.querySelectorAll('.accordian')
  
  Array.from(sections).forEach(section => {
      const button = section.querySelector('button')
      button.addEventListener('click', e => {
          section.classList.toggle('is-open')
      })
  })