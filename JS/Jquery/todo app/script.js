$("ul").on("click", "li", function () {
  $(this).toggleClass("linethrough");
});

$("ul").on("click", ".fa-trash", function () {
  $(this)
    .parent()
    .fadeOut(500, function () {
      $(this).remove();
    });
});

$("#inp").keypress(function (e) {
  if (e.which == 13) {
    const data = $(this).val();
    $(this).val("");

    let li = `<li><span class="fas fa-trash"></span> &emsp; ${data}</li>`;
    $("ul").append(li);
  }
});
