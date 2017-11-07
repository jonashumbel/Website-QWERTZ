define(['knockout', 'text!./app.html', 'googlemaps'], function(ko, template, google) {

  function App(params) {
    // This viewmodel doesn't do anything except pass through the 'route' parameter to the view.
    this.route = params.route;
    $(document).ready(function() {
      $('#topBtn').on('click', function() {
        window.scrollTo({
          top: 0,
          left: 0,
          behavior: 'smooth'
        });
        return false;
      });

    });

    function initMap() {
      var shop = {
        lat: 46.958421,
        lng: 7.443559
      };
      var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 14,
        center: shop
      });
      var marker = new google.maps.Marker({
        position: shop,
        map: map
      });
    }
  }

  return {
    viewModel: App,
    template: template
  };
});
