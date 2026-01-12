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
    const formData = new FormData(form)
    const token = document.querySelector("meta[name='csrf-token']")?.content

    fetch(form.action, {
      method: form.method || "post",
      headers: {
        "Accept": "application/json",
        "X-CSRF-Token": token
      },
      body: formData,
      credentials: "same-origin"
    })
      .then(async (response) => {
        const data = await response.json().catch(() => ({}))
        if (!response.ok) {
          throw data
        }
        return data
      })
      .then(() => {
        errorsTarget.classList.add("hidden")
        form.reset()
        this.close()
      })
      .catch((data) => {
        const errors = data?.errors || ["入力内容をご確認ください。"]
        errorsTarget.textContent = errors.join(" ")
        errorsTarget.classList.remove("hidden")
      })
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
