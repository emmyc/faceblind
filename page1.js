const tl = gsap.timeline();
// gsap.set("#text1", { display: "block" });
gsap.set("#text2", { display: "none" });

// gsap.set("#eye1", { x: 450, y: 150 });
// gsap.set("#eye2", { x: 200, y: 46 });
// gsap.set(".nose", { x: 350, y: -20 });
// gsap.set(".mouth", { x: 318, y: 200 });

function animate() {
  tl.to({}, 1, {});

  tl.from("#text1", { opacity: 0, duration: 0.5 });
  tl.to({}, 0.8, {});
  tl.to("#text1", { opacity: 0 });

  tl.to("#text1", { display: "none" });
  tl.to("#text2", { display: "block" });

  tl.from("#text2", { opacity: 0, duration: 0.5 });
  tl.to("#text2", { opacity: 0, duration: 0, display: "none", duration: 0.5 });

  tl.to(".face", { display: "block", opacity: 0 });
  tl.to("#intro-text", { display: "none" });
  tl.to("#main", { display: "flex" });
  tl.to("#body1", { opacity: 1, duration: 1 });
  tl.to(".face", { opacity: 1, duration: 1.5 });
  tl.to("#body2", { opacity: 1, duration: 1 });
  tl.to("#body3", { opacity: 1, duration: 1 });
  tl.to(
    "#eye2",
    { transform: "rotate(-90deg)", x: -40, y: 200, duration: 0.5 },
    "-=0.2"
  );
  tl.to("#eye1", { transform: "rotate(-90deg)", x: -280, duration: 0.5 });

  tl.to({}, 0.8, {});
  tl.to("#body4", { opacity: 1, duration: 0.5 });

  tl.to(".mouth", { y: -230, duration: 1 });
  tl.to(".nose", { y: 70, duration: 1 });

  tl.to({}, 1, {});
  tl.to("#author", { opacity: 1, duration: 0.5 });

  // lower opacity line by line
}

document.addEventListener("DOMContentLoaded", () => animate());
