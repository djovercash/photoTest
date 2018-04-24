const Adapter = (function() {
  const HARVARDURL = "https://api.harvardartmuseums.org/image?apikey="
  const APIKEY = "5c799910-47d1-11e8-ad61-77d2112d0543"

  return class Adapter {

    static getImages() {
      return fetch(`${HARVARDURL}${APIKEY}`).then(res => res.json())
    }

  }
})();
