const projects = [
  {
    name: 'Calculator',
    description: 'A simple calculator that can do the basics operations.',
    image: './Images/calculator.png',
    languages: ['HTML', 'CSS', 'Javascript'],
    liveLink: 'https://luffytaro22.github.io/Calculator/',
    sourceLink: 'https://github.com/Luffytaro22/Calculator',
  },
  {
    name: 'Calculator',
    description: 'A simple calculator that can do the basics operations.',
    image: './Images/calculator.png',
    languages: ['HTML', 'CSS', 'Javascript'],
    liveLink: 'https://luffytaro22.github.io/Calculator/',
    sourceLink: 'https://github.com/Luffytaro22/Calculator',
  },
  {
    name: 'Calculator',
    description: 'A simple calculator that can do the basics operations.',
    image: './Images/calculator.png',
    languages: ['HTML', 'CSS', 'Javascript'],
    liveLink: 'https://luffytaro22.github.io/Calculator/',
    sourceLink: 'https://github.com/Luffytaro22/Calculator',
  },
  {
    name: 'Etch-A-Sketch',
    description: 'A recreation of the Etch-A-Sketch interactive dashboard where you can select the quantity of spaces and the colors.',
    image: './Images/etch-a-sketch.png',
    languages: ['HTML', 'CSS', 'Javascript'],
    liveLink: 'https://luffytaro22.github.io/Etch-A-Sketch/',
    sourceLink: 'https://github.com/Luffytaro22/Etch-A-Sketch',
  },
  {
    name: 'Rock-Paper-Scissors',
    description: 'The global-popular game against the computer. Will you be winner or the losser? Try it out!',
    image: './Images/rock-paper-scissors.png',
    languages: ['HTML', 'CSS', 'Javascript'],
    liveLink: 'https://luffytaro22.github.io/Rock-Paper-Scissors/',
    sourceLink: 'https://github.com/Luffytaro22/Rock-Paper-Scissors"',
  },
  {
    name: 'Form Page',
    description: 'A form page that collects user info with a nice-looking design',
    image: './Images/form-page.png',
    languages: ['HTML', 'CSS', 'Javascript'],
    liveLink: 'https://luffytaro22.github.io/Sign-Up_form/',
    sourceLink: 'https://github.com/Luffytaro22/Sign-Up_form',
  },
];
/* The container for the projects */
const worksContainer = document.getElementById('works-container');

projects.forEach((project) => {
  /* Create the elements */
  const div = document.createElement('div');
  const h2 = document.createElement('h2');
  const p = document.createElement('p');
  const ul = document.createElement('ul');
  const button = document.createElement('button');

  /* Assign classes */
  div.classList.add('works');
  ul.classList.add('lw', 'languages');
  button.classList.add('hide');
  button.type = 'button';

  /* Assign values to the elements */
  h2.textContent = project.name;
  p.textContent = project.description;
  button.textContent = 'See Project';
  button.name = project.name;

  /* Create li's, added the languages and append them to the ul element */
  for (let i = 0; i < 3; i += 1) {
    const li = document.createElement('li');
    li.textContent = project.languages[i];
    ul.appendChild(li);
  }

  /* Append elements to the div */
  div.appendChild(h2);
  div.appendChild(p);
  div.appendChild(ul);
  div.appendChild(button);

  /* Append the div to the container */
  worksContainer.appendChild(div);
});

/* The container for the pop up */
const popUp = document.getElementById('pop-up');
const buttons = document.querySelectorAll('button[class="hide"]');

/* A function that determines if the clicked button is the one of the project's name */
function selectPopUp(event) {
  const index = projects.findIndex((project) => project.name === event.target.name);

  /* Create the elements of the pop-up */
  const h2 = document.createElement('h2');
  const ul = document.createElement('ul');
  for (let i = 0; i < 3; i += 1) {
    const li = document.createElement('li');
    li.textContent = projects[index].languages[i];
    ul.appendChild(li);
  }
  const img = document.createElement('img');
  const p = document.createElement('p');
  const div = document.createElement('div'); // The buttons container.
  const divContainer = document.createElement('div'); // div container for the p and the buttons div container.
  const divContainer0 = document.createElement('div'); // div container for the img and the other div container.
  const aLive = document.createElement('a');
  const aSource = document.createElement('a');
  const buttonLive = document.createElement('button');
  const buttonSource = document.createElement('button');
  const i = document.createElement('i');
  const imgLive = document.createElement('img');
  const imgSource = document.createElement('img');
  const header = document.querySelector('header');
  const headline = document.querySelector('#headline');

  /* Assign properties */
  ul.classList.add('languages');
  i.classList.add('fa-solid', 'fa-x');
  div.id = 'pop-up-buttons';
  img.src = projects[index].image;
  imgLive.src = './Normal Button/open-link.png';
  imgSource.src = './Normal Button/github-white.png';

  aLive.href = projects[index].liveLink;
  aLive.target = '_blank';
  aLive.rel = 'noopener';

  aSource.href = projects[index].sourceLink;
  aSource.target = '_blank';
  aSource.rel = 'noopener';

  /* Assign text to the elements. */
  h2.textContent = projects[index].name;
  p.textContent = projects[index].description;
  buttonLive.textContent = 'See Live';
  buttonSource.textContent = 'See Source';

  /* Add more text if the window is too wide */
  if (window.innerWidth >= 768) {
    p.textContent = 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maxime, molestias sit similique quas quasi, voluptas laboriosam aspernatur exercitationem reprehenderit dolorem adipisci laborum illum. Vitae quae itaque nesciunt! Necessitatibus, voluptatem a. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maxime, molestias sit similique quas quasi, voluptas laboriosam aspernatur exercitationem reprehenderit dolorem adipisci laborum illum. Vitae quae itaque nesciunt! Necessitatibus, voluptatem a.';
  }

  /* Append elements */
  aLive.appendChild(buttonLive);
  buttonLive.appendChild(imgLive);
  aSource.appendChild(buttonSource);
  buttonSource.appendChild(imgSource);
  div.appendChild(aLive);
  div.appendChild(aSource);

  /* Append to the container */
  popUp.appendChild(h2);
  popUp.appendChild(i);
  popUp.appendChild(ul);
  divContainer0.appendChild(img);
  divContainer.appendChild(p);
  divContainer.appendChild(div);
  divContainer0.appendChild(divContainer);
  popUp.appendChild(divContainer0);

  /* Change the display of the div container */
  header.classList.add('blur-effect');
  headline.classList.add('blur-effect');
  popUp.style.display = 'flex';
  /* Change the blur of the body */
  

  /* A click listener to the "x" icon */
  function closeProject() {
    popUp.style = 'display: none;';
    popUp.removeChild(h2);
    popUp.removeChild(i);
    popUp.removeChild(ul);
    popUp.removeChild(divContainer0);
    divContainer.remove();
    div.remove();
    header.classList.remove('blur-effect');
    headline.classList.remove('blur-effect');
  }
  i.addEventListener('click', closeProject);
}

/* A click listener to each project's button */
buttons.forEach((button) => button.addEventListener('click', selectPopUp));
