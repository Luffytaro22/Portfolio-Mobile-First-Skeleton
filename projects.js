let projects = [
  { 
    name: "Calculator",
    description: "A simple calculator that can do the basics operations.",
    image: "Images\calculator.png",
    languages: ["HTML", "CSS", "Javascript"],
    liveLink: "https://luffytaro22.github.io/Calculator/",
    sourceLink: "https://github.com/Luffytaro22/Calculator"
  },
  { 
    name: "Calculator",
    description: "A simple calculator that can do the basics operations.",
    image: "Images\calculator.png",
    languages: ["HTML", "CSS", "Javascript"],
    liveLink: "https://luffytaro22.github.io/Calculator/",
    sourceLink: "https://github.com/Luffytaro22/Calculator"
  },
  { 
    name: "Calculator",
    description: "A simple calculator that can do the basics operations.",
    image: "Images\calculator.png",
    languages: ["HTML", "CSS", "Javascript"],
    liveLink: "https://luffytaro22.github.io/Calculator/",
    sourceLink: "https://github.com/Luffytaro22/Calculator"
  },
  {
    name: "Etch-A-Aketch",
    description: "A recreation of the Etch-A-Sketch interactive dashboard where you can select the quantity of spaces and the colors.",
    image: "Images\etch-a-sketch.png",
    languages: ["HTML", "CSS", "Javascript"],
    liveLink: "https://luffytaro22.github.io/Etch-A-Sketch/",
    sourceLink: "https://github.com/Luffytaro22/Etch-A-Sketch"
  },
  {
    name: "Rock-Paper-Scissors",
    description: "The global-popular game against the computer. Will you be winner or the losser? Try it out!",
    image: "Images\rock-paper-scissors.png",
    languages: ["HTML", "CSS", "Javascript"],
    liveLink: "https://luffytaro22.github.io/Rock-Paper-Scissors/",
    sourceLink: "https://github.com/Luffytaro22/Rock-Paper-Scissors"
  },
  {
    name: "Form Page",
    description: "A form page that collects user info with a nice-looking design",
    image: "Images\form-page.png",
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
