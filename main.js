$(document).ready(function () {

    console.log('jquery is brought in')


    $('a[href*="#"]').on('click', function(e) {
        e.preventDefault()

        $('#content-box').animate(
          {
            scrollTop: $($(this).attr('href')).offset().top - $('#content-box').offset().top + $('#content-box').scrollTop()
          },
          300,
          'linear'
        )
      })

    
})