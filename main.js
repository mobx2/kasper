let header = document.getElementById("home");
console.log(header);

window.addEventListener("scroll", function () {
  if (this.oldScroll > this.scrollY === true) {
    this.oldScroll = this.scrollY;
    header.style.backgroundColor = `transparent`;
    header.style.top = `0`;
    header.style.position = "absolute";
    header.style.zIndex = `4`;
  } else {
    this.oldScroll = this.scrollY;
    header.style.top = `${scrollY}px`;
    header.style.position = "absolute";
    header.style.backgroundColor = `black`;
    header.style.zIndex = `4`;
  }
});

let swipeUp = document.getElementById("scrollToTopBtn");

window.onscroll = function () {
  if (window.scrollY >= 600) {
    swipeUp.style.display = "block";

    swipeUp.onclick = function () {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth",
      });
    };
  } else {
    swipeUp.style.display = "none";
  }
};
