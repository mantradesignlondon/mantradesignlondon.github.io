$('#exampleModal, #exampleModal1').on('show.bs.modal', function (event) {
    var div = $(event.relatedTarget)
    $(this).find('.modal-body img').attr("src", div.data('src'));
  })