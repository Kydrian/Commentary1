
const body = document.body;
const submit = document.getElementById("submit");


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

const form = document.getElementById('myform');
const userName = document.getElementById('userName');
const title  = document.getElementById('title');
const content = document.getElementById('content');


form.addEventListener('submit', function(event) {

event.preventDefault();


const firstNameValue = userName.value.trim(); 
const blogTitleValue = title.value.trim();
const blogContentValue = content.value.trim(); 

if (!firstNameValue || !blogTitleValue || !blogContentValue) {
  alert('Please fill out all fields.');
  return; // Stop form submission
}

const blogPost = {
  userName: firstNameValue,
  title: blogTitleValue,
  content: blogContentValue
};

let blogPosts = JSON.parse(localStorage.getItem('blogPosts')) || [];
blogPosts.push(blogPost);

localStorage.setItem('blogPosts', JSON.stringify(blogPosts));

form.reset();
alert('Blog post saved!');

localStorage.setItem('userName', firstNameValue);
localStorage.setItem('blogTitle', blogTitleValue);
localStorage.setItem('blogcontent', blogContentValue);

window.location.href = "blog.html";
});











