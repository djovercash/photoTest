const Image = (function() {
  let images = []

  return class Image {
    constructor(json) {
      this.id = json.imageid
      this.image_url = json.baseimageurl
      images.push(this)
    }

    static showAll() {
      return images
    }

    static removeSet() {
      images.splice(0, 10)
    }

    renderImage() {
      let div = document.createElement('div')
      let img = document.createElement('img')
      div.setAttribute("class", "imageDiv")
      div.setAttribute("onclick", `App.imageDetails(event, ${this.id})`)
      img.setAttribute("id", this.id)
      img.setAttribute("src", this.image_url)
      div.append(img)
      return div
    }

    renderSpecificImage() {
      let div = document.createElement('div')
      let img = document.createElement('img')
      div.setAttribute("id", "specificImageDiv")
      div.setAttribute("onclick", `App.removeImage(event)`)
      img.setAttribute("id", this.id)
      img.setAttribute("src", this.image_url)
      div.append(img)
      return div
    }

  }
})();
