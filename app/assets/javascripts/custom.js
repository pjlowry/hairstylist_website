//Background Slider Settings
jQuery(function($){
$.supersized({
	// Functionality
	slideshow               :   1,			// Slideshow on/off
	autoplay				:	1,			// Slideshow starts playing automatically
	start_slide             :   1,			// Start slide (0 is random)
	stop_loop				:	0,			// Pauses slideshow on last slide
	random					: 	0,			// Randomize slide order (Ignores start slide)
	slide_interval          :   5000,		// Length between transitions
	transition              :   1, 			// 0-None, 1-Fade, 2-Slide Top, 3-Slide Right, 4-Slide Bottom, 5-Slide Left, 6-Carousel Right, 7-Carousel Left
	transition_speed		:	1000,		// Speed of transition
	new_window				:	1,			// Image links open in new window/tab
	pause_hover             :   0,			// Pause slideshow on hover
	keyboard_nav            :   1,			// Keyboard navigation on/off
	performance				:	1,			// 0-Normal, 1-Hybrid speed/quality, 2-Optimizes image quality, 3-Optimizes transition speed // (Only works for Firefox/IE, not Webkit)
	image_protect			:	1,			// Disables image dragging and right click with Javascript
											   
	// Size & Position						   
	min_width		        :   0,			// Min width allowed (in pixels)
	min_height		        :   0,			// Min height allowed (in pixels)
	vertical_center         :   1,			// Vertically center background
	horizontal_center       :   1,			// Horizontally center background
	fit_always				:	0,			// Image will never exceed browser width or height (Ignores min. dimensions)
	fit_portrait         	:   1,			// Portrait images will not exceed browser height
	fit_landscape			:   0,			// Landscape images will not exceed browser width
											   
	// Components							
	slide_links				:	'blank',	// Individual links for each slide (Options: false, 'num', 'name', 'blank')
	thumb_links				:	1,			// Individual thumb links for each slide
	thumbnail_navigation    :   0,			// Thumbnail navigation
	slides 					:  	[			// Slideshow Images
										{image : 'app/assets/images/slides/profile.jpg', title : '<h1>Hi, I am <span class="pink raleway">Tiffany</span></h1>'},
										{image : 'app/assets/images/slides/fur.jpg', title : '<h1>I do <br><span class="pink raleway">Hair and shit</span></h1>'}
										],		
								
	// Theme Options			   
	progress_bar			:	0,			// Timer for each slide							
	mouse_scrub				:	0
	
});   
});


//Tooltips
$(document).ready(function () {
	var tooltips = $('a.tooltips');
    $(tooltips).tooltip();
   });

// CSS3 animation for top menu panel
     jQuery('.nav a').hover(function(){
	if(!jQuery(this).parent().hasClass('current'))
		jQuery(this).find('span').addClass('animate0 rotateIcon');
     },function(){
	jQuery(this).find('span').removeClass('animate0 rotateIcon');
     });

//Colorbox
	$(document).ready(function(){
				//Examples of how to assign the ColorBox event to elements
				$(".gallery_pics").colorbox({rel:'gallery_pics'});
				$(".portfolio_pics").colorbox({rel:'portfolio_pics', transition:"fade"});
				$(".youtube").colorbox({iframe:true, innerWidth:425, innerHeight:344});
				$(".vimeo").colorbox({iframe:true, innerWidth:500, innerHeight:409});
				$(".iframe").colorbox({iframe:true, width:"80%", height:"80%"});
				$(".inline").colorbox({inline:true, width:"50%"});
				$(".callbacks").colorbox({
					onOpen:function(){ alert('onOpen: colorbox is about to open'); },
					onLoad:function(){ alert('onLoad: colorbox has started to load the targeted content'); },
					onComplete:function(){ alert('onComplete: colorbox has displayed the loaded content'); },
					onCleanup:function(){ alert('onCleanup: colorbox has begun the close process'); },
					onClosed:function(){ alert('onClosed: colorbox has completely closed'); }
				});

				$('.non-retina').colorbox({rel:'group5', transition:'none'})
				$('.retina').colorbox({rel:'group5', transition:'none', retinaImage:true, retinaUrl:true});
				
				//Example of preserving a JavaScript event for inline calls.
				$("#click").click(function(){ 
					$('#click').css({"background-color":"#f00", "color":"#fff", "cursor":"inherit"}).text("Open this window again and this message will still be here.");
					return false;
				});
			});


//Google maps: put in here your Geodata, just change the two values in google.maps.LatLng()
jQuery(document).ready(function() {
    var position = new google.maps.LatLng(40.714346,-74.005966);
    $('.map').gmap({'center': position,'zoom': 15, 'disableDefaultUI':true, 'callback': function() {
            var self = this;
            self.addMarker({'position': this.get('map').getCenter() });	
        }
    }); 
});


//Tabs

$('#myTab a').click(function (e) {
  e.preventDefault();
  $(this).tab('show');
})

//Contact Form
jQuery(document).ready(function() {
    $('.contact-form form').submit(function() {

        $('.contact-form form .nameLabel').html('Name');
        $('.contact-form form .emailLabel').html('Email');
        $('.contact-form form .messageLabel').html('Message');

        var postdata = $('.contact-form form').serialize();
        $.ajax({
            type: 'POST',
            url: 'php/sendmail.php',
            data: postdata,
            dataType: 'json',
            success: function(json) {
                if(json.nameMessage != '') {
                    $('.contact-form form .nameLabel').append(' - <span class="pink" style="font-size: 13px; font-style: italic"> ' + json.nameMessage + '</span>');
                }
                if(json.emailMessage != '') {
                    $('.contact-form form .emailLabel').append(' - <span class="pink" style="font-size: 13px; font-style: italic"> ' + json.emailMessage + '</span>');
                }
                if(json.messageMessage != '') {
                    $('.contact-form form .messageLabel').append(' - <span class="pink" style="font-size: 13px; font-style: italic"> ' + json.messageMessage + '</span>');
                }
                if(json.nameMessage == '' && json.emailMessage == '' && json.messageMessage == '') {
                    $('.contact-form form').fadeOut('fast', function() {
                        $('.contact-form').append('<p><span class="pink">Thanks for contacting us!</span> We will get back to you very soon.</p> <p><a class="btn" href="contact.html">Back</a></p>');
                    });
                }
            }
        });
        return false;
    });
});


