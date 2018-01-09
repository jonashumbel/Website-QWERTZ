define(["knockout", "text!./home.html", "jquery"], function(ko, homeTemplate, $) {

  function HomeViewModel(route) {
    $(document).ready(function(){
      $('.colorClick3').click(function(){
        $('.colorClick3').removeClass('active');
        $(this).toggleClass('active');
      });
      $('#closePromoter').click(function(){
        $('.eventPromoter').addClass('noPromoter');
      });
    })
  }


  return { viewModel: HomeViewModel, template: homeTemplate };

});
