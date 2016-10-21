angular.module('giphyApp')
       .controller('RandomController', RandomController);

function RandomController(gif) {
  var rCtrl = this;

  rCtrl.image = '';

  //gets a random image
  rCtrl.getRandomImage = function () {
    rCtrl.image = '';
    rCtrl.sectionOneStatus = 'show';
    rCtrl.sectionTwoStatus = 'hide';

    gif.randomImageRequest().then(function (url) {
      rCtrl.image = url;
    });
  };
}
