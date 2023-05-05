// Add a click event listener to each product card
const productCards = document.querySelectorAll('.product-card');
productCards.forEach(productCard => {
  productCard.addEventListener('click', () => {
    alert(`You clicked on the ${productCard.querySelector('h3').textContent} product!`);
  });
});

// Add a submit event listener to the contact form
const contactForm = document.querySelector('.contact-us form');
contactForm.addEventListener('submit', event => {
  event.preventDefault();
  const name = contactForm.querySelector('#name').value;
  const email = contactForm.querySelector('#email').value;
  const message = contactForm.querySelector('#message').value;
  alert(`Thank you for your message, ${name}! We will get back to you at ${email} as soon as possible.\n\nMessage:\n${message}`);
  contactForm.reset();
});
