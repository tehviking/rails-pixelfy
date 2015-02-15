import Image from '../models/image';

export default function imageData(id) {
  var images = {
    "1": {
      id: "1",
      url: "/assets/bey.jpg"
    },
    "2": {
      id: "2",
      url: "/assets/flippin-sweet.jpg"
    },
    "3": {
      id: "3",
      url: "/assets/freeman.jpg"
    },
    "4": {
      id: "4",
      url: "/assets/shake-it-off.jpg"
    },
    "5": {
      id: "5",
      url: "/assets/so-fetch.jpg"
    }
  };
  if(arguments.length) {
    return Image.create(images[id]);
  } else {
    var imagesArray = Object.keys(images).map(function(k){
      return Image.create(images[k]);
    });
    return imagesArray;
  }
}
