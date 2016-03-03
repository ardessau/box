$( document ).ready(function() {  // line 1 does the same thing as line 21

    var box = $(".box");

    box.on("click", function(event){

       var el = $(this);

        el.animate({
            "margin-left": 1600, // 900 in class
            "background-color": "red"
        }, 3000, "easeOutSine", function onComplete(){
            el.css({
                "margin-left": 20,
                "background-color": "white"
            });
        });
    });
});

// $(function() {  // line 21 is seen more than line 1
//
// });
