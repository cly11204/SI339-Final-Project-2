function gotoLinkedIn() {
    window.location.href = "https://www.linkedin.com/in/caitlin-yeung/"
}

$('.skip').on('click', function(event) {
    event.preventDefault();
    var target = $(this).attr('href');
    $(target).attr('tabindex', '-1').focus();
  });