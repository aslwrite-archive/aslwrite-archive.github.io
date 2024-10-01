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

jQuery(document).ready(function() {
	// remember hidden option, and act accordingly
	if(fsmlReadCookie('fsmlOpen')=='closed'){
		jQuery('#fsml_ff').hide(0, function() { jQuery('#fsml_ffhidden').show(0); });
	}
});

function fsmlHide(an,uc,cl){
	switch(an){
		case 'fade': jQuery('#fsml_fblikemodal').fadeOut(300); jQuery('#fsml_ff').fadeOut(600, function() { jQuery('#fsml_ffhidden').fadeIn(400); }); break; 
		case 'none': jQuery('#fsml_fblikemodal').hide(); jQuery('#fsml_ff').hide(); jQuery('#fsml_ffhidden').show(); break; 
		default: jQuery('#fsml_fblikemodal').hide(300); jQuery('#fsml_ff').hide(600, function() { jQuery('#fsml_ffhidden').fadeIn(400); }); break; 
	}
	if(uc)
		fsmlCreateCookie('fsmlOpen','closed',cl);
}

function fsmlShow(an){
	switch(an){
		case 'fade': jQuery('#fsml_ff').fadeIn(1000); jQuery('#fsml_ffhidden').fadeOut(500); break;
		case 'none': jQuery('#fsml_ff').show(); jQuery('#fsml_ffhidden').hide(); break;
		default: jQuery('#fsml_ff').show(1000); jQuery('#fsml_ffhidden').hide(500); break;
	}
	fsmlEraseCookie('fsmlOpen'); //continue to clear cookies on show regardless of cookies setting
}

function fsmlCreateCookie(name,value,days) {
	if (days) {
			var date = new Date();
			date.setTime(date.getTime()+(days*24*60*60*1000));
			var expires = "; expires="+date.toGMTString();
	}
	else var expires = "";
	document.cookie = name+"="+value+expires+"; path=/";
}

function fsmlReadCookie(name){
	var nameEQ = name + "=";
	var ca = document.cookie.split(';');
	for(var i=0; i < ca.length; i++) {
			var c = ca[i];
			while (c.charAt(0)==' ') c = c.substring(1,c.length);
			if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
	}
	return null;
}
function fsmlEraseCookie(name){
	fsmlCreateCookie(name,"",-1);
}

}
/*
     FILE ARCHIVED ON 05:42:00 Feb 07, 2019 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 21:52:16 Sep 30, 2024.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 1.006
  exclusion.robots: 0.064
  exclusion.robots.policy: 0.047
  esindex: 0.017
  cdx.remote: 16.922
  LoadShardBlock: 123.3 (3)
  PetaboxLoader3.datanode: 115.164 (4)
  PetaboxLoader3.resolve: 123.469 (2)
  load_resource: 323.22
*/