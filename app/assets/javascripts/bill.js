$(document).ready(function(){
    $(":checkbox").change(function() {
        var className = $(this).attr('id');
        console.log(className);
        $("tr."+className).toggle();
      });
});
