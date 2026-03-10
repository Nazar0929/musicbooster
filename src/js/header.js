window.addEventListener('load', () => {
  const preloader = document.querySelector('.preloader');
  const content = document.getElementById('content');
  const circle = document.querySelector('.progress-ring__circle');
  const radius = circle.r.baseVal.value;
  const circumference = 2 * Math.PI * radius;

  circle.style.strokeDasharray = `${circumference} ${circumference}`;
  circle.style.strokeDashoffset = circumference;


  let progress = 0;
  const interval = setInterval(() => {
    progress += 1;
    const offset = circumference - (progress / 100) * circumference;
    circle.style.strokeDashoffset = offset;
    if (progress >= 100) {
      clearInterval(interval);
  
      preloader.style.transition = 'opacity 1s ease';
      preloader.style.opacity = '0';
      setTimeout(() => {
        preloader.style.display = 'none';
        content.style.display = 'block';
        document.body.style.overflow = 'auto';
      }, 1000);
    }
  }, 15);
});

const countryBox = document.querySelector(".country");

countryInput.addEventListener("click", () => {

  countryList.classList.toggle("open");
  countryBox.classList.toggle("open");

});

