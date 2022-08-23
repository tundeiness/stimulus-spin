import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="slideshow"
export default class extends Controller {

  static targets = ['slide']
  //  defining values by describing them in a static object property called values
  //  in this case the single numeric value is called index
  static values = {index: Number}

  // setting default values
  // this will start the index at 2 if no data-slideshow-index-value attribute was defined
  // on the controller element
  // static values = { index: { type: Number, default:2 } }

  //  for other kinds of value state the following
  // static values = { index: Number, effect: { type: String, default: "kenburns" } }

  // initialize(){
    // set this.index for controller to track state
    // this.index = 0

    // approach to start the slide show with the second slide
    //  read the attribute declared as data-index='1' in index.html
    // this.index = Number(this.element.dataset.index)
    // this.showCurrentSlide();
  // }



  connect() {
  }

  next(){
    // this.index++
    this.indexValue++;
    // this.showCurrentSlide();
  }

  previous(){
    // this.index--
    this.indexValue--;
    // this.showCurrentSlide();
  }


  showCurrentSlide(){
    this.slideTargets.forEach((ele, index)=>{
      // ele.hidden = index != this.index
      ele.hidden = index != this.indexValue
    })
  }

  indexValueChanged() {
    this.showCurrentSlide()
  }
}
