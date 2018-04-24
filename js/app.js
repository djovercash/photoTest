const App = (function() {
  return class App {
    static init() {
      App.displayImages()
    }

    static displayImages() {
      let imageContainer = document.getElementById("desktopDisplay");
      Adapter.getImages().then(data => {
        let images = data.records
        images.forEach(image => {
          let newImage = new Image(image)
          imageContainer.append(newImage.renderImage())
        })
      })
    }
  }
})();
