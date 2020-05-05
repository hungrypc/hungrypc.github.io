$(document).ready(function () {
  // $('.ui.basic.modal').modal('show');

  $(document).on('scroll', function () {
    if ($(document).scrollTop() >= $('.page-section').outerHeight() - 80) {
      $('.navigation').addClass('fixed')
    } else {
      $('.navigation').removeClass('fixed')

    }
  });

  $('a[href*="#"]').on('click', function (e) {
    e.preventDefault()
    $('html, body').animate(
      {
        scrollTop: $($(this).attr('href')).offset().top - $('.page-section').offset().top + $('.page-section').scrollTop()
      },
      1000,
      'easeInOutExpo'
    )
  })
  $.fn.visible = function (partial) {
    var $t = $(this),
      $w = $(window),
      viewTop = $w.scrollTop(),
      viewBottom = viewTop + $w.height(),
      _top = $t.offset().top,
      _bottom = _top + $t.height(),
      compareTop = partial === true ? _bottom : _top,
      compareBottom = partial === true ? _top : _bottom;

    return ((compareBottom <= viewBottom) && (compareTop >= viewTop));
  };

  var allMods = $(".mod");

  // Already visible modules
  allMods.each(function (i, el) {
    var el = $(el);
    if (el.visible(true)) {
      el.addClass("already-visible");
    }
  });

  $(window).scroll(function (event) {
    var scrollPos = $(document).scrollTop();
    if (scrollPos === 0) {
      $('a[href^="#1"]').addClass('active-link');
      return;
    }

    $('.nav-link').each(function () {
      var currLink = $(this);
      var refElement = $(currLink.attr("href"));
      if (refElement.position().top <= scrollPos && refElement.position().top + refElement.height() > scrollPos) {
        $('.nav-link').removeClass("active-link");
        currLink.addClass("active-link");
      } else {
        // currLink.removeClass("active-link");
      }
    });

    allMods.each(function (i, el) {
      var el = $(el);
      if (el.visible(true)) {
        el.addClass("come-in");
      }
    });
  })

  $('#tabs li a:not(:first)').addClass('inactive-tab');
  $('.tab-container').hide();
  $('.tab-container:first').show();

  $('#tabs li a').click(function () {
    var t = $(this).attr('id');
    if ($(this).hasClass('inactive-tab')) {
      $('#tabs li a').addClass('inactive-tab');
      $(this).removeClass('inactive-tab');

      $('.tab-container').hide();
      $('#' + t + 'C').fadeIn('slow');
    }

  })

})