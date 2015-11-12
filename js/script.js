$('.shrink').hover(function() {
    $(this).stop(true).fadeTo("slow", 0.25);
}, function() {
    $(this).stop(true).fadeTo("slow", 1);
});

$(function(){
  $("img").on('click', function() {
    if ($(this).attr("src") == "images/greensquare.png") {
      this.src = this.src.replace("images/greensquare.png","images/clicked.png");
    } else {
      this.src = this.src.replace("images/clicked.png","images/greensquare.png");
    }
  });
});
