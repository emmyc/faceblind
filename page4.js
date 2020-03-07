let light = document.getElementById("light");
let scribble = document.getElementById("scribble");
let mirror = document.getElementById("mirror-img");

let state = 0;

console.log(light);
light.addEventListener("click", () => {
  if (state === 1) {
    document.body.style.background = "black";
    document.body.style.color = "white";
    scribble.style.display = "none";
    mirror.style.filter = "invert(1)";
    state = 0;
  } else {
    document.body.style.background = "white";
    document.body.style.color = "black";
    mirror.style.filter = "invert(0)";

    scribble.style.display = "block";
    state = 1;
  }
});
