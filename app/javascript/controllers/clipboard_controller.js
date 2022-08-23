import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="clipboard"
export default class extends Controller {
  //  define a static array called targets 
  static targets = ['origin']
  // the above makes the following available to us: this.originTarget
  // this.originTargets evaluate to an array of all origin targets in the controller's scope.
  // this.hasOriginTarget evaluates to true if there is a origin target or false if not.


  connect() {
  }

  copy(){
    // select input field's content and call the clipboard API
    navigator.clipboard.writeText(this.originTarget.value)
  }


  copy(event){
    event.preventDefault()
    // select input field's content and call the clipboard API
    navigator.clipboard.writeText(this.originTarget.value)
  }
}
