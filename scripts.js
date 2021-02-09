const paletteDivs = document.querySelectorAll("#palette div");
const display = document.querySelector("#display");

const paletteStyles = getComputedStyle(paletteDivs[0]);

paletteDivs.forEach((paletteDiv, index) => {
  paletteDiv.style.setProperty(
    "background-color",
    paletteStyles.getPropertyValue(`--${index}`)
  );
  paletteDiv.addEventListener("click", function handleClick() {
    display.style.setProperty("background-color", this.style.backgroundColor);
    console.log("this", this.style, "clicked");
  });
});
