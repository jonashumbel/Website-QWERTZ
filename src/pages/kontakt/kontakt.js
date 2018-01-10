define(['knockout', 'text!./kontakt.html'], function(ko, templateMarkup) {

  function Kontakt(params) {


  }

  // This runs when the component is torn down. Put here any logic necessary to clean up,
  // for example cancelling setTimeouts or disposing Knockout subscriptions/computeds.
  Kontakt.prototype.dispose = function() {};

  return {
    viewModel: Kontakt,
    template: templateMarkup
  };

});
