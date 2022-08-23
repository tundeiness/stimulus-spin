import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="slideshow"
export default class extends Controller {

  static targets = ['slide']

  initialize(){
    this.index = 0
    this.showCurrentSlide();
  }

  next(){
    this.index++
    this.showCurrentSlide();
  }

  previous(){
    this.index--
    this.showCurrentSlide();
  }


  connect() {
  }

  showCurrentSlide(){
    this.slideTargets.forEach((ele, index)=>{
      ele.hidden = index != this.index
    })
  }
}
