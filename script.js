// Modal Logic
function openModal(project) {
  const modal = document.getElementById('projectModal');
  const img = document.getElementById('modalImg');
  const caption = document.getElementById('modalCaption');
  
  const projects = {
    zomato: {
      src: 'assets/images/zomato.jpg',
      text: 'Zomato GUI - Simulated food ordering interface using HTML/CSS/JS'
    },
    portfolio: {
      src: 'assets/images/portfolio.jpg',
      text: 'Personal Portfolio - Showcase of skills and projects built with HTML/CSS'
    },
    hotel: {
      src: 'assets/images/hotel.jpg',
      text: 'Hotel Billing System - C-based automation for billing processes'
    }
  };

  img.src = projects[project].src;
  caption.innerHTML = `<h3>${projects[project].text}</h3>`;
  modal.style.display = 'block';
}

function closeModal() {
  document.getElementById('projectModal').style.display = 'none';
}

// Email Form (Example with Formspree)
function sendEmail(event) {
  event.preventDefault();
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const message = document.getElementById('message').value;
  
  // Replace with your Formspree endpoint
  fetch('https://formspree.io/f/YOUREMAIL ', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ name, email, message })
  }).then(() => alert('Message sent!')).catch(() => alert('Error sending message.'));
}
