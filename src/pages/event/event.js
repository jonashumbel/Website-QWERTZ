define(['knockout', 'text!./event.html'], function(ko, templateMarkup) {

  function Event(params) {
    var self = this;
    self.registerChoice = ko.observable('');
    self.addPerson = ko.observable(false);
    self.ownValue = ko.observable('');
  }

  // This runs when the component is torn down. Put here any logic necessary to clean up,
  // for example cancelling setTimeouts or disposing Knockout subscriptions/computeds.
  Event.prototype.dispose = function() { };

  return { viewModel: Event, template: templateMarkup };

});
