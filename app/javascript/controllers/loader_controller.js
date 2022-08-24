import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="loader"
export default class extends Controller {
 

  static values = {url: String}

  connect() {
    this.load()
  }

  load() {
    fetch(this.urlValue)
    .then(res => res.text())
    .then(html => this.element.innerHTML = html)
  }
}
