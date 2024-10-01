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

jQuery(document).ready(function($){
	var button = '';
	if(seed_wnb_js_localize.button_label != '' && seed_wnb_js_localize.button_link != ''){
		var button = '<a href="'+seed_wnb_js_localize.button_link+'" target="'+seed_wnb_js_localize.button_target+'"><span class="wnb-bar-button">'+seed_wnb_js_localize.button_label+'</span></a>';
	}
	$('body').prepend('<div id="wnb-bar"><span>' + seed_wnb_js_localize.msg + '</span> ' + button + '</div>');
	var pt = $('body').css('padding-top');

	if($('#wpwrap').length < 1){
		$('body').css('padding-top', (parseFloat(pt) + 33) + 'px');
	}
});


}
/*
     FILE ARCHIVED ON 05:41:56 Feb 07, 2019 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 21:52:24 Sep 30, 2024.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 0.995
  exclusion.robots: 0.043
  exclusion.robots.policy: 0.027
  esindex: 0.013
  cdx.remote: 25.164
  LoadShardBlock: 52.402 (3)
  PetaboxLoader3.datanode: 64.127 (4)
  load_resource: 48.853
  PetaboxLoader3.resolve: 34.317
*/