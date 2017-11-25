function highlight_map_states() {

  if ($(".states_section").size() > 0) {

    $(".states_section .list_states .item .link").hover(function() {
      var a = "#state_" + $(this).text().toLowerCase();
      $(a).attr("class", "state hover");
    }, function() {
      var a = "#state_" + $(this).text().toLowerCase();
      $(a).attr("class", "state")
    })
  }
};

$(function() {
  var $tooltip = $('.tooltip');
  $('path').hover(function() {
    var t = this.getBoundingClientRect().top,
      l = this.getBoundingClientRect().left;
    $tooltip.css({
      "top": t + "px",
      "left": l + "px"
    }).show();
  }, function() {
    $tooltip.hide();
  });
});
