$(document).ready(function(){
  $(":checkbox").change(function() {
    var className = $(this).attr('id');
    if($(this).is(':checked')){
      $("tr."+className).show();
    }else{
      $("tr."+className).toggle();
    };
  });
});
