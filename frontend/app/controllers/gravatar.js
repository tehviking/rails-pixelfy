import Ember from 'ember';

export default Ember.Controller.extend({
  gravatarEmail: "",
  gravatarUrl: Ember.computed("gravatarEmail", function() {
    var hash = md5(this.get("gravatarEmail").trim().toLowerCase());
    return `http://gravatar.com/avatar/${hash}?s=400`;
  }),

  createBlobUrl: function() {
    var imageUrl = this.get("gravatarUrl");
    var controller = this;
    var xhr = new XMLHttpRequest();
    xhr.open('GET', imageUrl, true);

    xhr.responseType = 'arraybuffer';

    xhr.onload = function() {
      if (this.status === 200) {
        var uInt8Array = new Uint8Array(this.response);
        var i = uInt8Array.length;
        var biStr = new Array(i);
        while (i--)
        { biStr[i] = String.fromCharCode(uInt8Array[i]);
        }
        var data = biStr.join('');
        var base64 = window.btoa(data);
        console.log("base64!!!");
        controller.set("base64Url", "data:image/png;base64," + base64);
      }
    };

    xhr.send();
  }.on("init"),

  actions: {
    pixelfyImage: function() {
      this.createBlobUrl();
    }
  }

});
