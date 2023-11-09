export const scrollIndicator = () => {
  const winScroll =
    document.body.scrollTop || document.documentElement.scrollTop;
  const height =
    document.documentElement.scrollHeight -
    document.documentElement.clientHeight;
  const scrolled = (winScroll / height) * 100;
  document.getElementById("scrollIndicator")!.style.width = scrolled + "%";
};

export const toggleBurger = () => {
  (document.getElementById("menu-toggle") as HTMLInputElement).checked = false;
};

export const scrollFunction = () => {
  if (document.body.scrollTop > 1 || document.documentElement.scrollTop > 1) {
    document.getElementById(
      "navbar"
    )!.style.cssText = `background-color: white; transition: 0.5s`;
  } else {
    document.getElementById(
      "navbar"
    )!.style.cssText = `background-color: ; transition: 0.5s`;
  }
};
