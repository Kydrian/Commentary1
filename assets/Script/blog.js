const body = document.body;
const themetoggle = document.getElementById ("themeToggle");

let mode = "light"

themetoggle.addEventListener('click', function(event) {
event.preventDefault
  theme = body.getAttribute("data-toggle");
  if( mode === "light") {
    mode = "dark"
      body.setAttribute('class', 'dark');
    } else {
      mode ="light"
      body.setAttribute('class', "light")

    }

  })

  const name = localStorage.getItem('userName');
  const title = localStorage.getItem('blogTitle');
  const blog = localStorage.getItem('blogcontent');

document.getElementById('firstNameValue').textContent = name
document.getElementById('blogTitleValue').textContent = title
document.getElementById('blogcontentValue').textContent = blog
