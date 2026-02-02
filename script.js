
document.querySelector("form").addEventListener("submit", function(e){
  e.preventDefault();
  alert("Form submitted successfully!");
});
const faqItems = document.querySelectorAll('.faq-item');

  faqItems.forEach(item => {
    item.querySelector('.faq-header').addEventListener('click', () => {

      faqItems.forEach(other => {
        if (other !== item) {
          other.classList.remove('active');
        }
      });

      item.classList.toggle('active');
    });
  });
   const items = document.querySelectorAll('.expertise-item');

  items.forEach(item => {
    item.querySelector('.expertise-header').addEventListener('click', () => {

      items.forEach(other => {
        if (other !== item) {
          other.classList.remove('active');
        }
      });

      item.classList.toggle('active');
    });
  });