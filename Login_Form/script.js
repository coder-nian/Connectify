
const container = document.querySelector(".container")
const toggleCheckbox = document.querySelector(".theme-toggle input")

toggleCheckbox.addEventListener("change", () => {
  container.classList.toggle("dark-theme", toggleCheckbox.checked)
  document.body.classList.toggle("dark-theme", toggleCheckbox.checked)
})
