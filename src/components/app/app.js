define(['knockout', 'text!./app.html'], function(ko, template) {

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
  }

  return {
    viewModel: App,
    template: template
  };
});
