define(['knockout', 'text!./shop.html'], function(ko, templateMarkup) {

  function Shop(params) {
    $(document).ready(function(){
      $('.colorChoice').click(function(){
        $('.colorChoice').removeClass('active');
        $(this).toggleClass('active');
      })
    })
  }

  // This runs when the component is torn down. Put here any logic necessary to clean up,
  // for example cancelling setTimeouts or disposing Knockout subscriptions/computeds.
  Shop.prototype.dispose = function() { };

  return { viewModel: Shop, template: templateMarkup };

});
