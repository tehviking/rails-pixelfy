import Image from '../models/image';

var imageData = function (id) {
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
    },
    "6": {
      id: "6",
      url: "/assets/thought-leader.jpg"
    },
    "7": {
      id: "7",
      url: "/assets/dowager-countess.jpg"
    },
    "8": {
      id: "8",
      url: "/assets/yeezus.jpg"
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
};

export default imageData;
