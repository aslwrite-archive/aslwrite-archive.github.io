var _____WB$wombat$assign$function_____ = function(name) {return (self._wb_wombat && self._wb_wombat.local_init && self._wb_wombat.local_init(name)) || self[name]; };
if (!self.__WB_pmw) { self.__WB_pmw = function(obj) { this.__WB_source = obj; return this; } }
{
  let window = _____WB$wombat$assign$function_____("window");
  let self = _____WB$wombat$assign$function_____("self");
  let document = _____WB$wombat$assign$function_____("document");
  let location = _____WB$wombat$assign$function_____("location");
  let top = _____WB$wombat$assign$function_____("top");
  let parent = _____WB$wombat$assign$function_____("parent");
  let frames = _____WB$wombat$assign$function_____("frames");
  let opener = _____WB$wombat$assign$function_____("opener");

jQuery(document).ready(function($){ // START

  // Input title
  $( "input[title], textarea[title]" ).each(function() {if($(this).val() === '') {$(this).val($(this).attr('title'));}
    $(this).focus(function() {if($(this).val() == $(this).attr('title')) {$(this).val('').addClass('focused');}});
    $(this).blur(function() {if($(this).val() === '') {$(this).val($(this).attr('title')).removeClass('focused');}});
  });


  // Fade in and out
  $( ".fade" ).hover(
    function() {$(this).fadeTo( "medium", 1 );},
    function() {$(this).fadeTo( "medium", 0.5 );}
  );


  // Accordion
	$( ".accordion-content" ).hide();
	$( ".accordion-title" ).click(function() {
  $( ".accordion-content" ).slideUp( "normal" );
  $( ".accordion-title" ).removeClass( "accordion-open" );
    if($(this).next().is( ":hidden" ) == true) {
      $(this).next().slideDown( "normal" );
      $(this).addClass( "accordion-open" );
    } 
  });


  // Add .has-sub class into sub menu parent
  $( "ul ul" ).parent().addClass( "has-sub" );


  // Double Tap To Go
  $( ".nav li:has(ul)" ).doubleTapToGo();


  // Mobile menu
  $( "nav.nav .menu ul" ).tinyNav({
    active: 'current_page_item'
  });


  // Fluid video
  $( ".article" ).fitVids();


  //Check to see if the window is top if not then display button
  $(window).scroll(function(){
    if ($(this).scrollTop() > 100) { $('.BackTop').fadeIn(); } else { $('.BackTop').fadeOut(); }
  });
  //Click event to scroll to top
  $('.BackTop').click(function(){ $('html, body').animate({scrollTop : 0},300); return false; });

}); // END

}
/*
     FILE ARCHIVED ON 12:17:51 Feb 02, 2019 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 21:52:21 Sep 30, 2024.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 0.819
  exclusion.robots: 0.05
  exclusion.robots.policy: 0.034
  esindex: 0.014
  cdx.remote: 7.245
  LoadShardBlock: 188.295 (3)
  PetaboxLoader3.datanode: 67.255 (5)
  PetaboxLoader3.resolve: 324.814 (3)
  load_resource: 339.311 (2)
*/