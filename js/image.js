const Image = (function() {

  return class Image {
    constructor(json) {
      this.id = json.imageid
      this.image_url = json.baseimageurl
    }

    renderImage() {
      let div = document.createElement('div')
      let img = document.createElement('img')
      div.setAttribute("class", "imageDiv")
      img.setAttribute("id", this.id)
      img.setAttribute("src", this.image_url)
      div.append(img)
      return div
    }

  }
})();
