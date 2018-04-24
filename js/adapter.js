const Adapter = (function() {
  const HARVARDURL = "https://api.harvardartmuseums.org/"
  const APIKEY = "5c799910-47d1-11e8-ad61-77d2112d0543"

  return class Adapter {

    static getImages(pageNumber) {
      return fetch(`${HARVARDURL}image?apikey=${APIKEY}&size=50&page=${pageNumber}`).then(res => res.json())
    }

    static getSpecificImage(imageId) {
      return fetch(`${HARVARDURL}image/${imageId}?apikey=${APIKEY}`).then(res => res.json())
    }
  }
})();
