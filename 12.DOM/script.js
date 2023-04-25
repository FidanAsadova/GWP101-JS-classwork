let body = document.querySelector('body')
let header = document.createElement('header');
let nav = document.createElement('nav');
let ul = document.createElement('ul');
let liHome = document.createElement('li');
let liAbout = document.createElement('li');
let liBlog = document.createElement('li');
let liContact = document.createElement('li');
let sectionHome = document.createElement('section');
let sectionAbout = document.createElement('section');
let sectionBlog = document.createElement('section');
let sectionContact = document.createElement('section');


document.body.append(header);
header.append(nav);
nav.append(ul);
ul.append(liHome);
ul.append(liAbout);
ul.append(liBlog);
ul.append(liContact);

liHome.innerHTML = "<strong>Home</strong>";
liAbout.innerHTML = "<strong>About</strong>";
liBlog.innerHTML = "<strong>Blog</strong>";
liContact.innerHTML = "<strong>Contact</strong>";

sectionHome.id = 'home'
sectionAbout.id = 'about'
sectionBlog.id = 'blog'
sectionContact.id = 'contact'

liHome.addEventListener('click', function(){
   window.location = '#home'
})
liAbout.addEventListener('click', function(){
   window.location = '#about'
})
liBlog.addEventListener('click', function(){
   window.location = '#blog'
})
liContact.addEventListener('click', function(){
   window.location = '#contact'
})



sectionHome.innerHTML = "<strong><h2>Home</h2></strong>";
sectionAbout.innerHTML = "<strong><h2>About</h2></strong>";
sectionBlog.innerHTML = "<strong><h2>Blog</h2></strong>";
sectionContact.innerHTML = "<strong><h2>Contact</h2></strong>";

document.body.append(sectionHome);
document.body.append(sectionAbout);
document.body.append(sectionBlog);
document.body.append(sectionContact);

header.style.backgroundColor = 'black';
header.style.padding = '5px';
header.style.marginBottom = '15px';

ul.style.display = "flex";
ul.style.justifyContent = 'space-around';
ul.style.listStyle = 'none';

liHome.style.color = 'white';
liHome.style.cursor = "pointer"

liAbout.style.color = 'white';
liAbout.style.cursor = "pointer"

liBlog.style.color = 'white';
liBlog.style.cursor = "pointer"

liContact.style.color = 'white';
liContact.style.cursor = "pointer"


sectionHome.style.height = '100vh';
sectionHome.style.border = '1px dashed black';
sectionHome.style.display = 'flex';
sectionHome.style.justifyContent = 'center';
sectionHome.style.alignItems = 'center';
sectionHome.style.marginBottom = '20px'

sectionAbout.style.height = '100vh';
sectionAbout.style.border = '1px dashed black';
sectionAbout.style.display = 'flex';
sectionAbout.style.justifyContent = 'center';
sectionAbout.style.alignItems = 'center';
sectionAbout.style.marginBottom = '20px'


sectionBlog.style.height = '100vh';
sectionBlog.style.border = '1px dashed black';
sectionBlog.style.display = 'flex';
sectionBlog.style.justifyContent = 'center';
sectionBlog.style.alignItems = 'center';
sectionBlog.style.marginBottom = '20px'


sectionContact.style.height = '100vh';
sectionContact.style.border = '1px dashed black';
sectionContact.style.display = 'flex';
sectionContact.style.justifyContent = 'center';
sectionContact.style.alignItems = 'center';
sectionContact.style.marginBottom = '20px'
