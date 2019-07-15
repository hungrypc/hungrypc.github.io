$(document).ready(function () {

    $('a[href*="#"]').on('click', function(e) {
        e.preventDefault()

        $('#content-box').animate(
          {
            scrollTop: $($(this).attr('href')).offset().top - $('#content-box').offset().top + $('#content-box').scrollTop()
          },
          1000,
          'easeInOutExpo'
        )
      })

})