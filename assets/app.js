const SITE_CONFIG = {
  whatsapp: 'https://wa.link/a35phw',
  paymentLinks: {
    'Makeup Class': '',
    'Camera Rental M10': ''
  }
};

document.getElementById('year').textContent = new Date().getFullYear();

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });
document.querySelectorAll('.reveal').forEach((el) => observer.observe(el));

const dialog = document.getElementById('checkoutDialog');
const closeDialog = document.querySelector('.dialog-close');
const checkoutTitle = document.getElementById('checkoutTitle');
const checkoutProduct = document.getElementById('checkoutProduct');
const checkoutPrice = document.getElementById('checkoutPrice');
const checkoutForm = document.getElementById('checkoutForm');
let selectedProduct = '';
let selectedPrice = '';

document.querySelectorAll('.pay-button').forEach((button) => {
  button.addEventListener('click', () => {
    selectedProduct = button.dataset.product;
    selectedPrice = button.dataset.price;
    checkoutTitle.textContent = selectedProduct;
    checkoutProduct.textContent = selectedProduct;
    checkoutPrice.textContent = `RM${selectedPrice}`;
    dialog.showModal();
  });
});

closeDialog.addEventListener('click', () => dialog.close());
dialog.addEventListener('click', (event) => {
  const rect = dialog.getBoundingClientRect();
  const inside = event.clientX >= rect.left && event.clientX <= rect.right && event.clientY >= rect.top && event.clientY <= rect.bottom;
  if (!inside) dialog.close();
});

checkoutForm.addEventListener('submit', async (event) => {
  event.preventDefault();
  const form = new FormData(checkoutForm);
  const liveUrl = SITE_CONFIG.paymentLinks[selectedProduct];

  if (liveUrl) {
    window.location.href = liveUrl;
    return;
  }

  const bookingText = [
    `Hi Shafika, I want to book: ${selectedProduct} (RM${selectedPrice}).`,
    `Name: ${form.get('name')}`,
    `WhatsApp: ${form.get('phone')}`,
    form.get('date') ? `Preferred date: ${form.get('date')}` : '',
    form.get('notes') ? `Notes: ${form.get('notes')}` : ''
  ].filter(Boolean).join('\n');

  try { await navigator.clipboard.writeText(bookingText); } catch (_) {}
  dialog.close();
  window.open(SITE_CONFIG.whatsapp, '_blank', 'noopener');
});
