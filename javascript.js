document.querySelectorAll(".imageContainer").forEach(function (elem, index) {
  gsap.to(elem, {
    ease: Expo.easeInOut,
    width: "100%",
    duration: 2,
    delay: index * 2,
  });
});

document.querySelectorAll("#borderLine").forEach(function (elem, index) {
  gsap.to(elem, {
    ease: Expo.easeInOut,
    border: "1px solid #000",
    // width: "1px  ",
    duration: 2,
    delay: index * 2,
    stagger: 0.4,
  });
});
