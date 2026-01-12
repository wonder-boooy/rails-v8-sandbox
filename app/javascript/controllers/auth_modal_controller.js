import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  static targets = ["modal", "page"]

  open(event) {
    event.preventDefault()
    const modalName = event.params.modal
    this.modalTargets.forEach((modal) => {
      if (modal.dataset.modalName === modalName) {
        modal.classList.remove("hidden")
      } else {
        modal.classList.add("hidden")
      }
    })
    this.pageTarget.classList.add("blur-sm", "scale-[0.99]")
    this.pageTarget.setAttribute("aria-hidden", "true")
  }

  close(event) {
    if (event) {
      event.preventDefault()
    }
    this.modalTargets.forEach((modal) => modal.classList.add("hidden"))
    this.pageTarget.classList.remove("blur-sm", "scale-[0.99]")
    this.pageTarget.removeAttribute("aria-hidden")
    this.clearErrors()
  }

  submit(event) {
    event.preventDefault()
    const form = event.target
    const errorsTarget = form.querySelector("[data-auth-modal-target='errors']")
    const errors = []

    form.querySelectorAll("input[required]").forEach((input) => {
      if (!input.value.trim()) {
        errors.push(`${input.previousElementSibling?.textContent || "必須"}を入力してください。`)
      }
    })

    const passwordInput = form.querySelector("input[name='password']")
    if (passwordInput && passwordInput.value && passwordInput.value.length < 8) {
      errors.push("パスワードは8文字以上で入力してください。")
    }

    if (errors.length > 0) {
      errorsTarget.textContent = errors.join(" ")
      errorsTarget.classList.remove("hidden")
      return
    }

    errorsTarget.classList.add("hidden")
    form.reset()
    this.close()
  }

  clearErrors() {
    this.modalTargets.forEach((modal) => {
      const errorsTarget = modal.querySelector("[data-auth-modal-target='errors']")
      if (errorsTarget) {
        errorsTarget.classList.add("hidden")
        errorsTarget.textContent = ""
      }
    })
  }
}
