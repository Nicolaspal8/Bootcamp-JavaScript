
$(document).ready(function(){
    $('a').click(function(){
        var hash = this.hash;
        $('html, body').animate(
            {
                scrollTop: $(hash).offset().top - 86
            },
            800
        )
    })
});
var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
  return new bootstrap.Tooltip(tooltipTriggerEl)
})
var myModal = document.getElementById('myModal')
var myInput = document.getElementById('myInput')

myModal.addEventListener('shown.bs.modal', function () {
  myInput.focus()
})