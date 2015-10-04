$( document ).ready(function() {
    $("article.post").fitVids();

    /* Organize all of our social and subscription icons */
    console.log("***** DEBUG_jwir3: Running main.js");
    var numChildren = $(".icon-bar").children().length;
    var i = 0;
    $(".icon-bar").children().each(function() {
      $(this).css('left', (i * 100 / (numChildren-1)) + "%");
      i++;
    });
});
