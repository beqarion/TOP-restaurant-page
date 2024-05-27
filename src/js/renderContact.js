const renderContact = (parentNode) => {
  parentNode.innerHTML = "";

  const contactEl = document.createElement("article");
  contactEl.id = "contact";
  contactEl.classList.add("contact");

  const titleEl = document.createElement("h1");
  titleEl.classList.add("contact-title");
  titleEl.textContent = "Contact Us";

  const addressEl = document.createElement("div");
  addressEl.classList.add("address");
  addressEl.innerHTML = `<p>Address: 123 Foodie Lane, Gourmet City</p>
  <p>Phone: (123) 456-7890</p>
  <p>Email: contact@myrestaurant.com</p>`;

  const mapEl = document.createElement("iframe");
  mapEl.id = "shemoikhede-google-map";
  mapEl.src =
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1216.6948199610056!2d44.79356977351546!3d41.707587526793006!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40440cd8494eac93%3A0xd119472df2ce8346!2sShemoikhede%20Marjanishvilze!5e0!3m2!1sen!2sge!4v1716460783642!5m2!1sen!2sge";
  mapEl.width = "600";
  mapEl.height = "450";
  mapEl.style.border = "0";
  mapEl.allowFullscreen = true;
  mapEl.loading = "lazy";
  mapEl.referrerpolicy = "no-referrer-when-downgrade";

  contactEl.appendChild(titleEl);
  contactEl.appendChild(addressEl);
  contactEl.appendChild(mapEl);

  parentNode.appendChild(contactEl);
};

export default renderContact;
