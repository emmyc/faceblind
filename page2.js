let button1 = document.getElementById("button-1");
const tl = gsap.timeline();

button1.addEventListener("click", () => {
  console.log("click");
  tl.to(".lobster-main", { opacity: 0, duration: 1 });
  tl.to("#intro-text", { opacity: 0, duration: 1 }, "-=0.5");
  tl.to(".frame-1", { opacity: 0, duration: 1, display: "none" }, "-=0.5");

  tl.to(".frame-2", { display: "flex", opacity: 1 });
  tl.to("#text-1", { opacity: 1, duration: 1 });

  loadLobsters();
  tl.to(".all-lobsters", { display: "flex", opacity: 1, duration: 0.5 });
});

function loadLobsters() {
  let lobsters = document.getElementsByClassName("lobster");

  [...lobsters].forEach(element => {
    let rand = Math.floor(Math.random() * 359);
    element.style.transform = `rotate(${rand}deg)`;

    element.addEventListener("mouseover", () => {
      console.log(element.style.transform);
      element.style.transform += "scale(1.2)";
    });
    element.addEventListener("mouseout", () => {
      console.log(element);
      element.style.transform = `rotate(${rand}deg)`;
    });

    element.addEventListener("click", () => {
      element.style.transform = `rotate(${rand}deg)`;
      if (numClicks > 3) {
        element.style.transform += "scale(1.2)";
        element.src = "img/lobster-red.png";
        tl.to({}, 2, {});
      }
      displayMessage();
    });
  });
}

let numClicks = 0;
let tryAgain = document.getElementsByClassName("tryagain");
[...tryAgain].forEach(element => {
  element.addEventListener("click", () => {
    tl.to(".frame-3", { display: "none", opacity: 0, duration: 0.5 });
    tl.to(".frame-2", { display: "flex", opacity: 1 });
    tl.to("#text-1", { opacity: 1, duration: 1 });
    loadLobsters();
    tl.to(".all-lobsters", { display: "flex", opacity: 1, duration: 0.5 });
  });
});
function displayMessage() {
  tl.to(".frame-2", { display: "none", opacity: 0, duration: 0.5 });
  tl.to(".all-lobsters", { display: "none", opacity: 0, duration: 0.5 });
  if (numClicks === 0) {
    numClicks = 1;
    tl.to(".frame-3", { display: "flex", opacity: 1, duration: 0.5 });
    // tl.to("#text-2", { opacity: 1, duration: 0.5 });
    // tl.to("#subtext-2", { opacity: 1, duration: 0.5 });
    // tl.to("#button-2", { opacity: 1, duration: 0.5 });
    // tl.to("#wrong-1", { display: "flex", opacity: 1, duration: 0.5 });
  } else if (numClicks === 1) {
    console.log("boop");
    numClicks = 2;
    tl.to(".frame-3", { display: "flex", opacity: 1, duration: 0.5 });
    document.getElementById("text-2").innerHTML = "Wrong #2";
    document.getElementById("subtext-2").innerHTML = "Mistakes happen. ";
  } else if (numClicks === 2) {
    numClicks += 1;
    tl.to(".frame-3", { display: "flex", opacity: 1, duration: 0.5 });
    document.getElementById("text-2").innerHTML =
      "Ils semblent tous se mélanger, comme une mer de homards.";
    document.getElementById("subtext-2").innerHTML =
      "They all seem to blend together, like a sea of lobsters.";
  } else if (numClicks === 3) {
    numClicks += 1;
    tl.to(".frame-3", { display: "flex", opacity: 1, duration: 0.5 });
    document.getElementById("text-2").innerHTML = "Wrong #4";
    document.getElementById("subtext-2").innerHTML = "Perhaps another day...";
  } else {
    tl.to(".frame-3", { display: "flex", opacity: 1, duration: 0.5 });
    document.getElementById("text-2").innerHTML = "Correct";
    document.getElementById("subtext-2").innerHTML = "About time!";
    document.getElementById("button-2").innerHTML = "home";
  }
}
