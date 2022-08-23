import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  // connect() {
  //   this.element.textContent = "Hello World!"
  // }
  static targets = [ 'argument' ]

  connect() {
    console.log("Hello, Stimulus!", this.element)
  }


   get name() {
    return this.argumentTarget.value
  }

  greet() {
    // console.log("Hello, Stimulus!", this.element)
    console.log(`Hello, ${this.name}!`)
    // const element = this.argumentTarget
    // const name = element.value
    // console.log(`Hello, ${name}!`)
  }


 
}
