let projects = [
  { 
    name: "Calculator",
    description: "A simple calculator that can do the basics operations.",
    image: "./Images/calculator.png",
    languages: ["HTML", "CSS", "Javascript"],
    liveLink: "https://luffytaro22.github.io/Calculator/",
    sourceLink: "https://github.com/Luffytaro22/Calculator"
  },
  { 
    name: "Calculator",
    description: "A simple calculator that can do the basics operations.",
    image: "./Images/calculator.png",
    languages: ["HTML", "CSS", "Javascript"],
    liveLink: "https://luffytaro22.github.io/Calculator/",
    sourceLink: "https://github.com/Luffytaro22/Calculator"
  },
  { 
    name: "Calculator",
    description: "A simple calculator that can do the basics operations.",
    image: "./Images/calculator.png",
    languages: ["HTML", "CSS", "Javascript"],
    liveLink: "https://luffytaro22.github.io/Calculator/",
    sourceLink: "https://github.com/Luffytaro22/Calculator"
  },
  {
    name: "Etch-A-Sketch",
    description: "A recreation of the Etch-A-Sketch interactive dashboard where you can select the quantity of spaces and the colors.",
    image: "./Images/etch-a-sketch.png",
    languages: ["HTML", "CSS", "Javascript"],
    liveLink: "https://luffytaro22.github.io/Etch-A-Sketch/",
    sourceLink: "https://github.com/Luffytaro22/Etch-A-Sketch"
  },
  {
    name: "Rock-Paper-Scissors",
    description: "The global-popular game against the computer. Will you be winner or the losser? Try it out!",
    image: "./Images/rock-paper-scissors.png",
    languages: ["HTML", "CSS", "Javascript"],
    liveLink: "https://luffytaro22.github.io/Rock-Paper-Scissors/",
    sourceLink: "https://github.com/Luffytaro22/Rock-Paper-Scissors"
  },
  {
    name: "Form Page",
    description: "A form page that collects user info with a nice-looking design",
    image: "./Images/form-page.png",
    languages: ["HTML", "CSS", "Javascript"],
    liveLink: "https://luffytaro22.github.io/Sign-Up_form/",
    sourceLink: "https://github.com/Luffytaro22/Sign-Up_form"
  }
];
/* The container for the projects */
var worksContainer = document.getElementById('works-container');

projects.forEach((project) => {
  /* Create the elements */
  let div = document.createElement('div');
  let h2 = document.createElement('h2');
  let p = document.createElement('p');
  let ul = document.createElement('ul');
  let button = document.createElement('button');

  /* Assign classes */
  div.classList.add('works');
  ul.classList.add('lw', 'languages');
  button.classList.add('hide');
  button.type = "button";

  /* Assign values to the elements */
  h2.textContent = project.name;
  p.textContent = project.description;
  button.textContent = "See Project";
  button.name = project.name;

  /* Create li's, added the languages and append them to the ul element */
  for(let i = 0; i < 3; i++) {
    let li = document.createElement('li');
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
let popUp = document.getElementById('pop-up');
let buttons = document.querySelectorAll('button[class="hide"]');

/* A function that determines if the clicked button is the one of the project's name */
function selectPopUp(event) {
  let index = projects.findIndex((project) => project.name === event.target.name);

  /* Create the elements of the pop-up */
  let h2 = document.createElement('h2');
  let ul = document.createElement('ul');
  for(let i = 0; i < 3; i++) {
    let li = document.createElement('li');
    li.textContent = projects[index].languages[i];
    ul.appendChild(li);
  }
  let img = document.createElement('img');
  let p = document.createElement('p');
  let div = document.createElement('div'); //The buttons container.
  let aLive = document.createElement('a');
  let aSource = document.createElement('a');
  let buttonLive = document.createElement('button');
  let buttonSource = document.createElement('button');
  var i = document.createElement('i');
  let imgLive = document.createElement('img');
  let imgSource = document.createElement('img');

  /* Assign properties */
  ul.classList.add("languages");
  i.classList.add("fa-solid", "fa-x");
  div.id = "pop-up-buttons";
  img.src = projects[index].image;
  imgLive.src = "./Normal Button/open-link.png";
  imgSource.src = "./Normal Button/github-white.png";

  aLive.href = projects[index].liveLink;
  aLive.target = "_blank";
  aLive.rel = "noopener";

  aSource.href = projects[index].sourceLink;
  aSource.target = "_blank";
  aSource.rel = "noopener";

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
  popUp.appendChild(img);
  popUp.appendChild(p);
  popUp.appendChild(div);

  /* Change the display of the div container */
  popUp.style.display = "flex";

  /* A click listener to the "x" icon */
  i.addEventListener('click', closeProject);

  function closeProject() {
    popUp.style = "display: none;";
    popUp.removeChild(h2);
    popUp.removeChild(i);
    popUp.removeChild(ul);
    popUp.removeChild(img);
    popUp.removeChild(p);
    popUp.removeChild(div);
    div.remove();
  }
}

/* A click listener to each project's button */
buttons.forEach((button) => button.addEventListener('click', selectPopUp));


