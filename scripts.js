document.addEventListener('DOMContentLoaded', () => {
    // Initialize AOS
    AOS.init();
  
    // Smooth Scroll
    document.querySelectorAll('.smooth-scroll').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
          behavior: 'smooth'
        });
      });
    });
  
    // Form Validation
    const form = document.getElementById('contact-form');
    form.addEventListener('submit', function (e) {
      const name = document.getElementById('name').value;
      const email = document.getElementById('email').value;
      const message = document.getElementById('message').value;
  
      if (!name || !email || !message) {
        alert('Please fill out all fields.');
        e.preventDefault();
      }
    });
  
    // Image Preview Modal
    const slideImages = document.querySelectorAll('.slide-image');
    const modals = document.querySelectorAll('.modal');
  
    slideImages.forEach((image, index) => {
      image.addEventListener('click', () => {
        const modalId = image.getAttribute('data-target');
        modals.forEach(modal => modal.style.display = 'none');
        document.getElementById(modalId).style.display = 'block';
      });
    });

    document.getElementById('contact-form').addEventListener('submit', function(event) {
        event.preventDefault();
      
        const formData = new FormData(this);
        const data = Object.fromEntries(formData.entries());
      
        // Convert data to CSV format
        const csvContent = Object.keys(data).map(key => data[key]).join(',') + '\r\n';
        const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
        const link = document.createElement("a");
        
        link.href = URL.createObjectURL(blob);
        link.download = "form-submission.csv";
        link.click();
      });
  
    // Close Modal
    const closeButtons = document.querySelectorAll('.close-button');
    closeButtons.forEach(button => {
      button.addEventListener('click', () => {
        const modal = button.parentElement.parentElement;
        modal.style.display = 'none';
      });
    });
  
    // Close Modal on Overlay Click
    const modalOverlays = document.querySelectorAll('.modal');
    modalOverlays.forEach(overlay => {
      overlay.addEventListener('click', (event) => {
        if (event.target === overlay) {
          overlay.style.display = 'none';
        }
      });
    });
  });