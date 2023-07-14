document.addEventListener('DOMContentLoaded', () => {
    const loginBtn = document.getElementById('loginBtn');
  
    loginBtn.addEventListener('click', () => {
      // Redirect to the backend Google authentication route
      window.location.href = 'http://localhost:5000/auth/google';
    });
  });