let toggleNavStatus = false;

let toggelNav = function () {
    let getSidebar = document.querySelector(".second-nav");
    let getSidebarSpan = document.querySelector(".second-nav span");
    let getSidebarLinks = document.querySelectorAll(".second-nav a");

    if (toggleNavStatus === false) {
        getSidebar.style.width = "200px";
        getSidebarSpan.style.opacity = "0.8";

        let linksLength = getSidebarLinks.length;
        for (let i = 0; i < linksLength; i++) {
            getSidebarLinks[i].style.opacity = "1";
        }
        toggleNavStatus = true;
    } else {
      getSidebar.style.width = "50px";
      getSidebarSpan.style.opacity = "0";

      let linksLength = getSidebarLinks.length;
      for (let i = 0; i < linksLength; i++) {
          getSidebarLinks[i].style.opacity = "0";
      }
      toggleNavStatus = false;
    }
}
