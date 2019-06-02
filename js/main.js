// apostropheReady is called at domReady
// it hooks into the a_js javascript framework
// it can be used for progressive enhancements at runtime
// such as Cufon text replacement

function apostropheReady()
{
}

$(function () {

  /* Use this js doc for all application specific JS */

  /* TABS --------------------------------- */
  /* Remove if you don't need :) */

  function activateTab($tab) {
    var $activeTab = $tab.closest('dl').find('a.active'),
    contentLocation = $tab.attr("href") + 'Tab';

    // Strip off the current url that IE adds
    contentLocation = contentLocation.replace(/^.+#/, '#');

    //Make Tab Active
    $activeTab.removeClass('active');
    $tab.addClass('active');

    //Show Tab Content
    $(contentLocation).closest('.tabs-content').children('li').hide();
    $(contentLocation).css('display', 'block');
  }

  $('dl.tabs').each(function () {
    //Get all tabs
    var tabs = $(this).children('dd').children('a');
    tabs.click(function (e) {
      activateTab($(this));
    });
  });

  if (window.location.hash) {
    activateTab($('a[href="' + window.location.hash + '"]'));
  }

  /* ALERT BOXES ------------ */
  $(".alert-box").delegate("a.close", "click", function(event) {
    event.preventDefault();
    $(this).closest(".alert-box").fadeOut(function(event){
      $(this).remove();
    });
  });


  /* PLACEHOLDER FOR FORMS ------------- */
  /* Remove this and jquery.placeholder.min.js if you don't need :) */
  //$('input, textarea').placeholder();

  /* TOOLTIPS ------------ */
  $(this).tooltips();



  /* UNCOMMENT THE LINE YOU WANT BELOW IF YOU WANT IE6/7/8 SUPPORT AND ARE USING .block-grids */
  //	$('.block-grid.two-up>li:nth-child(2n+1)').css({clear: 'left'});
  //	$('.block-grid.three-up>li:nth-child(3n+1)').css({clear: 'left'});
  //	$('.block-grid.four-up>li:nth-child(4n+1)').css({clear: 'left'});
  //	$('.block-grid.five-up>li:nth-child(5n+1)').css({clear: 'left'});



  /* DROPDOWN NAV ------------- */

  var lockNavBar = false;
  $('.nav-bar a.flyout-toggle').live('click', function(e) {
    e.preventDefault();
    var flyout = $(this).siblings('.flyout');
    if (lockNavBar === false) {
      $('.nav-bar .flyout').not(flyout).slideUp(500);
      flyout.slideToggle(500, function(){
        lockNavBar = false;
      });
    }
    lockNavBar = true;
  });
  if (Modernizr.touch) {
    $('.nav-bar>li.has-flyout>a.main').css({
      'padding-right' : '75px',
    });
    $('.nav-bar>li.has-flyout>a.flyout-toggle').css({
      'border-left' : '1px dashed #eee'
    });
  } else {
    $('.nav-bar>li.has-flyout').hover(function() {
      $(this).children('.flyout').slideToggle(180);
    }, function() {
      $(this).children('.flyout').slideToggle(180);
    })
  }

/* Language Selection */
if ($('#select_language_form').length && $('#select_language').length) {
  $('#select_language').bind('change', function(event) {
    window.location = $(this).val();
  });
}

/* DISABLED BUTTONS ------------- */
/* Gives elements with a class of 'disabled' a return: false; */

  if ($('#timeline').length) {
    $('#timeline').show();
    timeline = new VMM.Timeline();
    timeline.init({
      start_zoom_adjust: 3
    });
  }

  /* Decode email links encoded using ROT13 */
  $('a.rot13').each(function(){
    var a = $(this);
    var v = a.data("rot13").rot13();
    a.attr("href", "mailto:"+v);
    a.text(v);
  })

});