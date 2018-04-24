const App = (function() {
  return class App {
    static init() {
      App.displayImages()
      App.fetchImages(1)
      let nextImagesButton = document.getElementById("nextImagesButton")
      nextImagesButton.addEventListener("click", function(event) {
        event.preventDefault()
        App.displayImages2()
      })
    }

    static fetchImages(nextPage) {
      Adapter.getImages(nextPage).then(data => {
        let images = data.records
        images.forEach(image => {
          let newImage = new Image(image)
        })
        App.displayImages2()
      })
    }

    static displayImages2() {
      let imageContainer = document.getElementById("desktopDisplay")
      imageContainer.innerHTML = ''
      let images = Image.showAll().slice(0, 10)
      if (images.length >= 10) {
        images.forEach(image => {
          imageContainer.append(image.renderImage())
        })
        Image.removeSet()
      } else {
        let nextImagesButton = document.getElementById("nextImagesButton")
        let nextPage = 1 + parseInt(nextImagesButton.getAttribute('data-page'))
        App.fetchImages(nextPage)
        nextImagesButton.setAttribute("data-page", nextPage)
      }
    }

    // static nextImages2() {
    //   let imageContainer = document.getElementById("desktopDisplay");
    //   imageContainer.innerHTML = ''
    //   let nextImagesButton = document.getElementById("nextImagesButton")
    //   let nextPage = 1 + parseInt(nextImagesButton.getAttribute('data-page'))
    //   Adapter.getImages(nextPage).then(data => {
    // }

    static displayImages() {
      let imageContainer = document.getElementById("desktopDisplay");
      // Adapter.getImages(1).then(data => {
      //   let images = data.records
      //   images.forEach(image => {
      //     let newImage = new Image(image)
      //     imageContainer.append(newImage.renderImage())
      //   })
      // })
    }

    static nextImages() {
      let imageContainer = document.getElementById("desktopDisplay");
      imageContainer.innerHTML = ''
      let nextImagesButton = document.getElementById("nextImagesButton")
      let nextPage = 1 + parseInt(nextImagesButton.getAttribute('data-page'))
      Adapter.getImages(nextPage).then(data => {
        let images = data.records
        images.forEach(image => {
          let newImage = new Image(image)
          imageContainer.append(newImage.renderImage())
          nextImagesButton.setAttribute("data-page", nextPage)
        })
      })
    }

    static imageDetails(event, id) {
      event.preventDefault()
      let specificImageContainer = document.getElementById('desktopSpecificImage')
      specificImageContainer.innerHTML = ''
      Adapter.getSpecificImage(id).then(data => {
        let specificImage = new Image(data)
        specificImageContainer.append(specificImage.renderImage())
      })
    }
  }
})();
