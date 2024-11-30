document.addEventListener("DOMContentLoaded", () => {
    const menuItems = document.querySelectorAll("#comp-kmerqljf a");
    menuItems.forEach((item) => {
      item.addEventListener("click", () => {
        menuItems.forEach((el) => el.classList.remove("active"));
        item.classList.add("active");
      });
    });
  });
  