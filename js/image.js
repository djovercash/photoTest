const Image = (function() {
  let images = []
  let pastImages = []

  return class Image {
    constructor(json) {
      this.id = json.imageid
      this.image_url = json.baseimageurl
      images.push(this)
    }

    static showNewImages() {
      return images
    }

    static removeNewImagesSet() {
      images.splice(0, 10)
    }

    static removeDuplicateImage(selectedImage) {
      let filteredImages = images.filter(image => image.id !== selectedImage.id)
      images = [...filteredImages]
    }

    static pastImages(images) {
      images.forEach(image => pastImages.push(image))
    }

    static showPastImages() {
      return pastImages
    }

    static returnPastImages(returnedImages) {
      images = [...returnedImages, ...images]
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
      let h4 = document.createElement('h4')
      let h1 = document.createElement('h1')
      div.setAttribute("id", "specificImageDiv")
      div.setAttribute("onclick", `App.removeImage(event)`)
      img.setAttribute("id", this.id)
      img.setAttribute("src", this.image_url)
      h4.innerText = `Reference Number: ${this.id}`
      h1.innerText = "X"
      div.append(h1)
      div.append(img)
      div.append(h4)
      return div
    }

  }
})();
