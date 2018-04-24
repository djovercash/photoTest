const App = (function() {
  return class App {
    static init() {
      App.fetchImages(1)
      let nextImagesButton = document.getElementById("nextImagesButton")
      let prevImagesButton = document.getElementById('prevImagesButton')
      nextImagesButton.addEventListener("click", function(event) {
        event.preventDefault()
        App.displayCurrentImages()
      })
      prevImagesButton.addEventListener("click", function(event) {
        event.preventDefault()
        App.displayPastImages()
      })
    }

    static fetchImages(nextPage) {
      Adapter.getImages(nextPage).then(data => {
        let images = data.records
        images.forEach(image => {
          let newImage = new Image(image)
        })
        App.displayCurrentImages()
      })
    }

    static displayCurrentImages() {
      let imageContainer = document.getElementById("desktopDisplay")
      imageContainer.innerHTML = ''
      let images = Image.showNewImages().slice(0, 10)
      Image.pastImages(images)
      if (images.length >= 10) {
        images.forEach(image => {
          imageContainer.append(image.renderImage())
        })
        Image.removeNewImagesSet()
      } else {
        let nextImagesButton = document.getElementById("nextImagesButton")
        let nextPage = 1 + parseInt(nextImagesButton.getAttribute('data-page'))
        App.fetchImages(nextPage)
        nextImagesButton.setAttribute("data-page", nextPage)
      }
    }

    static displayPastImages() {
      let pastImages = Image.showPastImages()
      if (pastImages.length >= 10) {
        let slicedPastImages = pastImages.splice(pastImages.length - 20, 20)
        Image.returnPastImages(slicedPastImages)
      } 
      App.displayCurrentImages()
    }

    static imageDetails(event, id) {
      event.preventDefault()
      let specificImageContainer = document.getElementById('desktopSpecificImage')
      specificImageContainer.innerHTML = ''
      Adapter.getSpecificImage(id).then(data => {
        let specificImage = new Image(data)
        Image.removeDuplicateImage(specificImage)
        specificImageContainer.append(specificImage.renderSpecificImage())
      })
    }

    static removeImage(event) {
      let specificImageContainer = document.getElementById('desktopSpecificImage')
      specificImageContainer.innerHTML = ''
    }
  }
})();
