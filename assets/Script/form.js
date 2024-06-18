function validateForm() {
    const userName = document.getElementById('userName').value;
    const title = document.getElementById('title').value;
    const content = document.getElementById('content').value;
  
    if (userName === '' || title === '' || content === '') {
      alert('Please enter a valid entry');
      return false; 
    }
  }
  
  form.addEventListener ('click', function() {
   validateForm();
  });