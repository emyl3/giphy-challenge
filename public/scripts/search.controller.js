angular.module('giphyApp')
       .controller('SearchController', SearchController);

function SearchController(gif) {
  var sCtrl = this;

  sCtrl.results = [];
  sCtrl.image = '';

  giphy.getSearchImage = function (search) {
    var searchString = '';

    //clears previous results
    sCtrl.results = [];
    sCtrl.image = '';

    //sets search value and clears form data

    sCtrl.sectionOneStatus = 'hide';
    sCtrl.sectionTwoStatus = 'show';

    //determines if search has spaces, one word, or is blank
    if (search) {
      if (/\s/.test(search)) {
        searchString = search.split(' ').join('+');
      } else {
        searchString = search;
      }

      gif.searchQuery(searchString).then(function (results) {
        sCtrl.results = results;
        search = '';
      });

    } else {
      alert('Please enter any search term... not a blank one. :-)');
      search = '';
    }
  };
}
