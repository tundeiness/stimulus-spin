import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="multiple-loader"
export default class extends Controller {
  connect() {
  }


  load({params}){
      fetch(params.url)
        .then((response) => response.json())
        .then((html) => (this.element.innerHTML = html.title));
  }
}
