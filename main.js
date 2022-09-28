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

// function reveal() {
//   var reveals = document.querySelectorAll(".reveal");

//   for (var i = 0; i < reveals.length; i++) {
//     var windowHeight = window.innerHeight;
//     var elementTop = reveals[i].getBoundingClientRect().top;
//     var elementVisible = 150;

//     if (elementTop < windowHeight - elementVisible) {
//       reveals[i].classList.add("active");
//     } else {
//       reveals[i].classList.remove("active");
//     }
//   }
// }

// window.addEventListener("scroll", reveal);

