import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  static targets = ["icon"]

  connect() {
    // Load saved theme or default to dark
    const savedTheme = localStorage.getItem("theme") || "dark"
    this.setTheme(savedTheme)
  }

  toggle() {
    const currentTheme = document.documentElement.classList.contains("dark") ? "dark" : "light"
    const newTheme = currentTheme === "dark" ? "light" : "dark"
    this.setTheme(newTheme)
    localStorage.setItem("theme", newTheme)
  }

  setTheme(theme) {
    if (theme === "dark") {
      document.documentElement.classList.add("dark")
      document.documentElement.classList.remove("light")
    } else {
      document.documentElement.classList.add("light")
      document.documentElement.classList.remove("dark")
    }
    this.updateIcon()
  }

  updateIcon() {
    const isDark = document.documentElement.classList.contains("dark")
    if (this.hasIconTarget) {
      this.iconTarget.textContent = isDark ? "☀️" : "🌙"
    }
  }
}
