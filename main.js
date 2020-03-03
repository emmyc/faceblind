function waitingForHover() {
  gsap.set(".eye", { backgroundPosition: "0" });
}

function eyeOpen(e) {
  console.log(e.target);
  gsap.set(e.target, { backgroundPosition: "0" });
  gsap.to(e.target, 0.3, {
    backgroundPosition: "-450px",
    ease: SteppedEase.config(3)
  });
}

function eyeClose(e) {
  gsap.set(e.target, { backgroundPosition: "-450px" });
  gsap.to(e.target, 0.3, {
    backgroundPosition: "0",
    ease: SteppedEase.config(3)
  });
}

document.addEventListener(
  "DOMContentLoaded",
  () => {
    waitingForHover();

    for (let elem of document.getElementsByClassName("eye")) {
      elem.addEventListener("mouseover", eyeOpen);
      elem.addEventListener("mouseout", eyeClose);
    }
  },
  false
);

// PAGE 1
