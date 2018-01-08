define(['knockout', 'text!./approval.html'], function(ko, templateMarkup) {

  function Approval(params) {
  }

  // This runs when the component is torn down. Put here any logic necessary to clean up,
  // for example cancelling setTimeouts or disposing Knockout subscriptions/computeds.
  Approval.prototype.dispose = function() { };

  return { viewModel: Approval, template: templateMarkup };

});
