const d = document;
const $template = d.getElementById("card").content;
const $fragment = d.createDocumentFragment();
const $main = d.querySelector(".main");

const cardsContent = [
  {
    title: "TypeScript",
    img: "./assets/images/typescript-icon.svg",
    link: "./typescript-notes.html",
  },
  {
    title: "JavaScript",
    img: "./assets/images/javascript.svg",
    link: "./js-notes.html",
  },
  {
    title: "Angular",
    img: "./assets/images/angular-icon.svg",
    link: "./angular-notes.html",
  },
  {
    title: "React",
    img: "./assets/images/react.svg",
    link: "#",
  },
  {
    title: "Bash Scripting",
    img: "./assets/images/bash-icon.svg",
    link: "#",
  },
  {
    title: "Java",
    img: "./assets/images/java.svg",
    link: "#",
  },
  {
    title: "Node JS",
    img: "./assets/images/nodejs-icon.svg",
    link: "#",
  },
  {
    title: "C++",
    img: "./assets/images/c-plusplus.svg",
    link: "#",
  },
];

cardsContent.forEach((el) => {
  $template.querySelector(".card-title").textContent = el.title;
  $template.querySelector(".card-img").setAttribute("alt", `${el.title} image`);
  $template.querySelector(".card-img").setAttribute("src", el.img);
  $template.querySelector(".card-link").setAttribute("href", el.link);

  let $clone = d.importNode($template, true);
  $fragment.appendChild($clone);
});

$main.appendChild($fragment);

d.addEventListener("DOMContentLoaded", () => {
  const $cardLinks = d.querySelectorAll(".card-link");
  const $modal = d.querySelector("dialog");
  const $close = d.getElementById("close");

  $cardLinks.forEach((el) => {
    if (el.getAttribute("href") === "#") {
      el.addEventListener("click", (e) => {
        e.preventDefault();
        $modal.showModal();
      });
    }
  });
  $close.addEventListener("click", () => $modal.close());
});
