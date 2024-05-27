import heroImage from "../images/home/chemo-kargo.jpg";

const galleryImages = require.context(
  "../images/home/",
  false,
  /\.(png|svg|jpg|gif|webp)$/
);
const galleryImagesData = galleryImages.keys().map((key) => galleryImages(key));

const renderHome = (parentNode) => {
  parentNode.style.visibility = "hidden";
  parentNode.innerHTML = "";

  // home
  const homeEl = document.createElement("article");
  homeEl.setAttribute("id", "home");
  homeEl.classList.add("home", "tab-content");

  // hero
  const heroEl = document.createElement("section");
  heroEl.classList.add("hero");

  const heroTitle = document.createElement("h1");
  heroTitle.textContent = "Welcome to My Restaurant";
  heroTitle.setAttribute("class", "hero-title");
  heroEl.appendChild(heroTitle);
  // hero - figure
  const figureEl = document.createElement("figure");
  const heroImgEl = createImage(heroImage, "Facade of my restaurant");
  const figCaption = document.createElement("figcaption");
  figCaption.textContent =
    "We serve the best food in town! Come and enjoy our delicious meals prepared with the freshest ingredients.";
  figureEl.appendChild(heroImgEl);
  figureEl.appendChild(figCaption);
  heroEl.appendChild(figureEl);

  homeEl.appendChild(heroEl);

  parentNode.appendChild(homeEl);

  // gallery
  const galleryEl = document.createElement("section");
  galleryEl.classList.add("gallery");

  const galleryTitle = document.createElement("h3");
  galleryTitle.textContent = "Featured Pics";
  galleryEl.appendChild(galleryTitle);

  const galleryPics = document.createElement("div");
  galleryPics.classList.add("gallery-pics");

  const imagePromises = galleryImagesData.map((url) => {
    const filename = url.split("/").pop().split[0];
    const img = createImage(url, filename);
    img.style.width = "100%";
    galleryPics.appendChild(img);

    return new Promise((resolve) => {
      img.onload = resolve;
      img.onerror = resolve;
    });
  });

  galleryEl.appendChild(galleryPics);
  homeEl.appendChild(galleryEl);

  Promise.all(imagePromises).then(() => {
    parentNode.style.visibility = "visible";
  });
};

export default renderHome;

function createImage(src, alt) {
  const img = document.createElement("img");
  img.src = src;
  img.alt = alt;
  img.style.width = "100%";
  return img;
}
