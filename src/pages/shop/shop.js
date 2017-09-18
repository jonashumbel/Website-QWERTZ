define(['knockout', 'text!./shop.html'], function(ko, templateMarkup) {

  function Shop(params) {
    this.message = ko.observable('Hello from the shop page!');
  }

  // This runs when the component is torn down. Put here any logic necessary to clean up,
  // for example cancelling setTimeouts or disposing Knockout subscriptions/computeds.
  Shop.prototype.dispose = function() { };

  return { viewModel: Shop, template: templateMarkup };

});
