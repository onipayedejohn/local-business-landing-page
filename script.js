"use strict";
// 1. Small-screen navigation: sync visual state and assistive-technology state.
const menuButton = document.querySelector(".menu-toggle");
const navigation = document.querySelector("#navigation");
function closeMenu() {
  navigation.classList.remove("is-open");
  menuButton.setAttribute("aria-expanded", "false");
  menuButton.setAttribute("aria-label", "Open navigation");
}
menuButton.addEventListener("click", () => {
  const open = menuButton.getAttribute("aria-expanded") !== "true";
  navigation.classList.toggle("is-open", open);
  menuButton.setAttribute("aria-expanded", String(open));
  menuButton.setAttribute(
    "aria-label",
    open ? "Close navigation" : "Open navigation",
  );
});
navigation
  .querySelectorAll("a")
  .forEach((link) => link.addEventListener("click", closeMenu));
document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && navigation.classList.contains("is-open")) {
    closeMenu();
    menuButton.focus();
  }
});
document.addEventListener("click", (event) => {
  if (!event.target.closest(".header")) closeMenu();
});
window.matchMedia("(min-width: 761px)").addEventListener("change", (event) => {
  if (event.matches) closeMenu();
});
// 2. Five-photo carousel. Four-second timer after manual navigation.
const carousel = document.querySelector(".hero-visual");
const slides = [...document.querySelectorAll(".slide")];
const dots = [...document.querySelectorAll(".slide-dots button")];
const pauseButton = document.querySelector("#pause-slides");
const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
let currentSlide = 0;
let paused = reducedMotion.matches;
let timer;
function showSlide(index) {
  currentSlide = (index + slides.length) % slides.length;
  slides.forEach((slide, i) => {
    slide.classList.toggle("is-active", i === currentSlide);
    slide.setAttribute("aria-hidden", String(i !== currentSlide));
    if (i === currentSlide) dots[i].setAttribute("aria-current", "true");
    else dots[i].removeAttribute("aria-current");
  });
  document.querySelector("#slide-number").textContent = String(
    currentSlide + 1,
  ).padStart(2, "0");
}
function startTimer() {
  clearInterval(timer);
  if (
    !paused &&
    !document.hidden &&
    !carousel.matches(":hover") &&
    !carousel.contains(document.activeElement)
  ) {
    timer = setInterval(() => showSlide(currentSlide + 1), 4000);
  }
}
function updatePauseButton() {
  pauseButton.setAttribute("aria-pressed", String(paused));
  pauseButton.setAttribute(
    "aria-label",
    paused ? "Play slideshow" : "Pause slideshow",
  );
  pauseButton.firstElementChild.textContent = paused ? "▶" : "Ⅱ";
}
function moveSlide(step) {
  showSlide(currentSlide + step);
  startTimer();
}
document
  .querySelector("#previous-slide")
  .addEventListener("click", () => moveSlide(-1));
document
  .querySelector("#next-slide")
  .addEventListener("click", () => moveSlide(1));
dots.forEach((dot, index) =>
  dot.addEventListener("click", () => {
    showSlide(index);
    startTimer();
  }),
);
pauseButton.addEventListener("click", () => {
  paused = !paused;
  updatePauseButton();
  startTimer();
});
carousel.addEventListener("mouseenter", () => clearInterval(timer));
carousel.addEventListener("mouseleave", startTimer);
carousel.addEventListener("focusin", () => clearInterval(timer));
carousel.addEventListener("focusout", () => setTimeout(startTimer, 0));
document.addEventListener("visibilitychange", startTimer);
reducedMotion.addEventListener("change", (event) => {
  paused = event.matches;
  updatePauseButton();
  startTimer();
});
updatePauseButton();
startTimer();
// 3. Native dialog supplies keyboard focus containment and Escape-to-close.
const dialog = document.querySelector("#gallery-dialog");
const galleryButtons = [...document.querySelectorAll(".gallery-button")];
let galleryIndex = 0;
let galleryOpener;
function showGalleryImage(index) {
  galleryIndex = (index + galleryButtons.length) % galleryButtons.length;
  const button = galleryButtons[galleryIndex];
  document.querySelector("#gallery-image").src = button.dataset.image;
  document.querySelector("#gallery-image").alt =
    button.querySelector("img").alt;
  document.querySelector("#gallery-title").textContent = button.dataset.title;
  document.querySelector("#gallery-description").textContent =
    button.dataset.description;
  document.querySelector("#gallery-count").textContent =
    `${galleryIndex + 1} / ${galleryButtons.length}`;
}
galleryButtons.forEach((button, index) =>
  button.addEventListener("click", () => {
    galleryOpener = button;
    showGalleryImage(index);
    dialog.showModal();
    document.body.classList.add("modal-open");
  }),
);
document
  .querySelector(".dialog-close")
  .addEventListener("click", () => dialog.close());
document
  .querySelector("#gallery-previous")
  .addEventListener("click", () => showGalleryImage(galleryIndex - 1));
document
  .querySelector("#gallery-next")
  .addEventListener("click", () => showGalleryImage(galleryIndex + 1));
dialog.addEventListener("keydown", (event) => {
  if (event.key === "ArrowLeft") {
    event.preventDefault();
    showGalleryImage(galleryIndex - 1);
  }
  if (event.key === "ArrowRight") {
    event.preventDefault();
    showGalleryImage(galleryIndex + 1);
  }
});
dialog.addEventListener("click", (event) => {
  const box = dialog.getBoundingClientRect();
  if (
    event.target === dialog &&
    (event.clientX < box.left ||
      event.clientX > box.right ||
      event.clientY < box.top ||
      event.clientY > box.bottom)
  )
    dialog.close();
});
dialog.addEventListener("close", () => {
  document.body.classList.remove("modal-open");
  galleryOpener?.focus();
});
// 4. Service choices carry through to the enquiry. No customer data is stored or sent.
const form = document.querySelector("#booking-form");
const status = document.querySelector("#form-status");
const whatsappDraft = document.querySelector("#send-whatsapp");
const locationSelect = form.elements.location;
const otherLocation = form.elements.otherLocation;
function hidePreview() {
  status.hidden = true;
  whatsappDraft.hidden = true;
  whatsappDraft.href = "https://wa.me/233249698992";
}
locationSelect.addEventListener("change", () => {
  const showOther = locationSelect.value === "other";
  document.querySelector("#other-location-field").hidden = !showOther;
  otherLocation.disabled = !showOther;
  otherLocation.required = showOther;
  if (!showOther) {
    otherLocation.value = "";
    otherLocation.removeAttribute("aria-invalid");
    document.querySelector("#other-location-error").textContent = "";
  }
  hidePreview();
  if (locationSelect.hasAttribute("aria-invalid")) validate(locationSelect);
});
const dateInput = form.elements.date;
function localToday() {
  const now = new Date();
  return `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, "0")}-${String(now.getDate()).padStart(2, "0")}`;
}
dateInput.min = localToday();
document.querySelectorAll("[data-service]").forEach((link) =>
  link.addEventListener("click", () => {
    form.elements.service.value = link.dataset.service;
    hidePreview();
  }),
);
function errorFor(field) {
  const value = field.value.trim();
  if (field.name === "name" && value.length < 2)
    return "Please enter your name (at least 2 characters).";
  if (field.name === "email" && (!value || field.validity.typeMismatch))
    return "Please enter a valid email address.";
  if (field.name === "message" && value.length < 10)
    return "Please add at least 10 characters so we understand your enquiry.";
  if (field.name === "date" && value && value < localToday())
    return "Please choose today or a future date.";
  if (field.name === "location" && !value)
    return "Please select your location.";
  if (field.name === "otherLocation" && !field.disabled && value.length < 2)
    return "Please enter your town or neighbourhood.";
  return "";
}
function validate(field) {
  const error = errorFor(field);
  document.querySelector(`#${field.id}-error`).textContent = error;
  field.setAttribute("aria-invalid", String(Boolean(error)));
  return !error;
}
const validatedFields = [
  "name",
  "email",
  "date",
  "location",
  "otherLocation",
  "message",
].map((name) => form.elements[name]);
validatedFields.forEach((field) =>
  field.addEventListener("input", () => {
    hidePreview();
    if (field.hasAttribute("aria-invalid")) validate(field);
  }),
);
form.elements.service.addEventListener("change", () => {
  hidePreview();
});
form.addEventListener("submit", (event) => {
  event.preventDefault();
  dateInput.min = localToday();
  const results = validatedFields.map(validate);
  if (results.includes(false)) {
    hidePreview();
    validatedFields[results.indexOf(false)].focus();
    return;
  }
  const selectedDate = dateInput.value
    ? new Date(`${dateInput.value}T12:00:00`).toLocaleDateString("en-GB", {
        weekday: "short",
        day: "numeric",
        month: "long",
        year: "numeric",
      })
    : "Date to be discussed";
  const area =
    locationSelect.value === "other"
      ? otherLocation.value.trim()
      : locationSelect.value;
  const enquiry = `Hello CHAIRMAN, I would like to enquire about a visit.\n\nName: ${form.elements.name.value.trim()}\nService: ${form.elements.service.value || "Help choosing a service"}\nLocation: ${area}\nPreferred date: ${selectedDate}\nEmail: ${form.elements.email.value.trim()}\nMessage: ${form.elements.message.value.trim()}`;
  // Keep personal input as text. Nothing is sent until the visitor sends it in WhatsApp.
  status.textContent = `${enquiry}\n\nNothing has been sent or booked. Check your details, then continue to WhatsApp and press Send there.`;
  whatsappDraft.href =
    "https://wa.me/233249698992?text=" + encodeURIComponent(enquiry);
  whatsappDraft.hidden = false;
  status.hidden = false;
  status.focus();
});
document.querySelector("#year").textContent = new Date().getFullYear();
