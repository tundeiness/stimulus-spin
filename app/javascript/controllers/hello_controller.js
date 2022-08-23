import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  // connect() {
  //   this.element.textContent = "Hello World!"
  // }
  static targets = [ 'argument' ]

  connect() {
    console.log("Hello, Stimulus!", this.element)
  }

  greet() {
    // console.log("Hello, Stimulus!", this.element)
    const element = this.argumentTarget
    const name = element.value
    console.log(`Hello, ${name}!`)
  }
}
