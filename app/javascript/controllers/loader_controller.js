import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="loader"
export default class extends Controller {
 

  static values = {url: String, refreshInterval: Number}


  connect() {
    this.load()
    if(this.hasRefreshIntervalValue){
      this.commenceRefresh()
    }
  }

  commenceRefresh(){
    setInterval(() => {
      this.load()
    }, this.refreshIntervalValue)
  }

  load() {
    fetch(this.urlValue)
      .then((response) => response.json())
      // .then((json) => console.log(json));
    // .then(res => res.text())
    .then(html => this.element.innerHTML = html.title)
  }
}
