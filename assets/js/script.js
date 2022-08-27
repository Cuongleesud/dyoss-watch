let close_1 = document.getElementById("close_1");
let menu = document.getElementById("nav-mobi");
let open_1 = document.getElementById("bars-btn");
close_1.onclick = function () {
  menu.style.transform = "translateY(-110%)";
};
open_1.onclick = function () {
  menu.style.transform = "translateY(0%)";
};

const btnAdds = document.querySelectorAll(".btn-add");

for (let i = 0; i < btnAdds.length; i++) {
  const btn = btnAdds[i];
  let content = btn.nextSibling.nextElementSibling;

  btn.addEventListener("click", function (e) {
    let icon = btn.querySelector("i").classList;
    toggleBtnIcon(icon);
    toggleContent(content);
  });
}

function toggleContent(content) {
  content.style.display =
    content.style.display === "" || content.style.display === "none"
      ? "block"
      : "none";
}

function toggleBtnIcon(icon) {
  if (icon[1] == "fa-plus") {
    icon.add("fa-minus");
    icon.remove("fa-plus");
  } else {
    icon.remove("fa-minus");
    icon.add("fa-plus");
  }
}
