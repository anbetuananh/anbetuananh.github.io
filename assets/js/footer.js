// $(document).ready(function(){
//     $("#footer").load("footer.html");
//  });

!(function($) {
    "use strict";

    $(function() {
        $.get("footer.html", function(data) {
        $("#footer-bg1").html(data);
        });
    });

})(jQuery);