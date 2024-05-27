import menuData from "../data/menu.json";

const renderMenu = (parentNode) => {
  parentNode.innerHTML = "";
  parentNode.style.visibility = "hidden";

  const menuEl = document.createElement("section");
  menuEl.setAttribute("id", "menu");

  // header
  const headerEl = document.createElement("div");
  headerEl.classList.add("menu-header");
  const titleEl = document.createElement("h1");
  titleEl.classList.add("menu-title");
  titleEl.textContent = "Our Menu";

  headerEl.appendChild(titleEl);
  menuEl.appendChild(headerEl);

  // menu
  const itemsEl = document.createElement("div");
  itemsEl.classList.add("menu-items");

  const imagePromises = menuData.map((item) => {
    const articleEl = document.createElement("article");
    articleEl.classList.add("dish");

    const nameEl = document.createElement("h3");
    nameEl.classList.add("dish-name");
    nameEl.textContent = item.name;

    const descriptionEl = document.createElement("p");
    descriptionEl.classList.add("dish-description");
    descriptionEl.textContent = item.description;

    const priceEl = document.createElement("p");
    priceEl.textContent = `$${item.price.toFixed(2)}`;

    const imageEl = createImage(
      require(`../images/menu/${item.imageUrl}`),
      item.description
    );
    imageEl.classList.add("dish-pic");

    articleEl.appendChild(nameEl);
    articleEl.appendChild(descriptionEl);
    articleEl.appendChild(imageEl);
    articleEl.appendChild(priceEl);

    itemsEl.appendChild(articleEl);

    return new Promise((resolve) => {
      imageEl.onload = resolve;
      imageEl.onerror = resolve;
    });
  });
  Promise.all(imagePromises).then(() => {
    parentNode.style.visibility = "visible";
  });
  menuEl.appendChild(itemsEl);

  parentNode.appendChild(menuEl);
};

export default renderMenu;

function createImage(src, alt) {
  const img = document.createElement("img");
  img.src = src;
  img.alt = alt;
  img.style.width = "100%";
  return img;
}
