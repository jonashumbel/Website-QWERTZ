define(['knockout', 'text!./shop.html', 'jquery'], function(ko, templateMarkup, $) {

  function Shop(params) {
    $(document).ready(function(){
      $('.colorClick1').click(function(){
        $('.colorClick1').removeClass('active');
        $(this).toggleClass('active');
      });
      $('.colorClick2').click(function(){
        $('.colorClick2').removeClass('active');
        $(this).toggleClass('active');
      })
    })
  }

  // This runs when the component is torn down. Put here any logic necessary to clean up,
  // for example cancelling setTimeouts or disposing Knockout subscriptions/computeds.
  Shop.prototype.dispose = function() { };

  return { viewModel: Shop, template: templateMarkup };

});
