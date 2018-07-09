var el = document.getElementsByTagName("audio")[0],

mobileplay = function() {el.play()};

mobileplay();

document.addEventListener("WeixinJSBridgeReady", mobileplay);

$('html').one('touchstart',function(){
    el.play();
});

function play(){
    $('#music')[0].play();
    $('.music_btn').addClass('music_anim');
  };

  function pause(){
    $('#music')[0].pause();
    $('.music_btn').removeClass('music_anim');
  };
  $('.music_btn').on('click',function(e){
		e.stopPropagation();
		e.preventDefault();
		if($(this).hasClass('music_anim')){
			pause();
		}
		else{
			play();
		}
		return false;

	});