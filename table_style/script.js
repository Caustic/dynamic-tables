var resize = function () {
  var width = $('.row').width();
  $('.row').remove();
  var col = Math.floor(width / 100);
  col = col === 0 ? 1 : col;
  $('.col').width(100 / col + "%").each(function (index) {
    if (index % col === 0) {
      $('#mytable').append('<tr class="row"></tr>');
    }
    $('.row').last().append(this.cloneNode(true));
  });
};

$(document).ready(resize);
$(window).resize(resize);
