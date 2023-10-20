const projects = [
  {
    name: 'Recipe App',
    description: 'The Recipe App is a web application build on Ruby on Rails that allows you to save ingredients, keep track of what you have, create recipes, and generate a shopping list based on what you have and what you are missing from a recipe.',
    image: './Images/recipe-app.png',
    languages: ['Ruby', 'RoR', 'Javascript'],
    liveLink: 'https://recipe-app-zxdn.onrender.com/',
    sourceLink: 'https://github.com/Luffytaro22/Recipe-app',
  },
  {
    name: 'Budget App',
    description: 'The Budget App is a mobile web application build on Ruby on Rails where you can manage your budget: you have a list of transactions associated with a category, so that you can see how much money you spent and on what.',
    image: './Images/budget-app.png',
    languages: ['Ruby', 'RoR', 'Javascript'],
    liveLink: 'https://budget-app-8wpl.onrender.com/',
    sourceLink: 'https://github.com/Luffytaro22/Budget-app',
  },
  {
    name: 'Japanese Culture Festival',
    description: 'Based on a layout of a conference web page with the thematic of a Japanese Culture Festival.',
    image: './Images/Japan-festival.png',
    languages: ['HTML', 'CSS', 'Javascript'],
    liveLink: 'https://luffytaro22.github.io/Capstone-Japan/',
    sourceLink: 'https://github.com/Luffytaro22/Capstone-Japan',
  },
  {
    name: 'Todo list',
    description: 'To Do List allows the user to enter a task and mark it as completed or not. It also lets removing the done tasks and save them in the local storage.',
    image: './Images/Todolist.png',
    languages: ['HTML', 'CSS', 'Javascript'],
    liveLink: 'https://luffytaro22.github.io/To-do-list/',
    sourceLink: 'https://github.com/Luffytaro22/To-do-list',
  },
  {
    name: 'TV Shows',
    description: 'TV Shows is a an application that fetches tv shows from TVMaze API and also has a feature of posting and fetching Likes, Comments and Reservations from an involvement API.',
    image: './Images/TVshows.png',
    languages: ['HTML', 'CSS', 'Javascript'],
    liveLink: 'https://demesameneshoa.github.io/JavaScript-Capstone/',
    sourceLink: 'https://github.com/Luffytaro22/JavaScript-Capstone"',
  },
  {
    name: 'Countries App',
    description: 'Countries Webapp makes use of Geography API to display information about the population at each continent, country and more detailed information about a specific country.',
    image: './Images/countries-app.png',
    languages: ['React', 'Redux', 'Javascript'],
    liveLink: 'https://countries-webapp.vercel.app/',
    sourceLink: 'https://github.com/Luffytaro22/countries-webapp',
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
  const sections = document.querySelectorAll('section');
  const footer = document.querySelector('footer');

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

  /* Change the blur of the body */
  header.classList.add('blur-effect');
  sections.forEach((section) => {
    section.classList.add('blur-effect');
  });
  footer.classList.add('blur-effect');

  /* Change the display of the div container */
  popUp.style.display = 'flex';

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
    sections.forEach((section) => {
      section.classList.remove('blur-effect');
    });
    footer.classList.remove('blur-effect');
  }
  i.addEventListener('click', closeProject);
}

/* A click listener to each project's button */
buttons.forEach((button) => button.addEventListener('click', selectPopUp));
