let modal = document.querySelector(".modal");

let close = document.querySelector(".close");

let open = document.querySelector(".bars");

let mockUpImage = document.querySelector(".mockup-image");

document.querySelectorAll(".mobile-menu-toggle").forEach((el) =>
  el.addEventListener("click", () => {
    let modalDisplay = modal.style.display;
    console.log("clicked", modalDisplay);
    if (modalDisplay === "block") {
      hideModal();
    } else {
      showModal();
    }
  })
);

function showModal() {
  modal.style.display = "block";
  open.style.display = "none";
  close.style.display = "block";
  mockUpImage.style.visibility = "hidden";
  document.getElementsByTagName("body")[0].style.overflow = "hidden";
}

function hideModal() {
  modal.style.display = "none";
  open.style.display = "block";
  close.style.display = "none";
  mockUpImage.style.visibility = "visible";
  document.getElementsByTagName("body")[0].style.overflow = "scroll";
}

window.onresize = hideToggle;

function hideToggle() {
  if (window.innerWidth >= 600) {
    hideModal();
    open.style.display = "none";
  } else {
    open.style.display = "block";
  }
}
