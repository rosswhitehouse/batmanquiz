$('.home-button').click(function(){
   
  $('.home').slideToggle();
  $('.main').show();
  
});

$('.answerA').click(function(){
  
  $(this).addClass('selected');
  $(this).siblings().removeClass('selected');
  
});


$('.answerB').click(function(){
  
  $(this).addClass('selected');
  $(this).siblings().removeClass('selected');
  
});

$('.answerC').click(function(){
  
  $(this).addClass('selected');
  $(this).siblings().removeClass('selected');
  
});


  
 $('.submit').click(function(){
   
    var A = $('.selected.answerA').length;
    var B = $('.answerB.selected').length;
    var C = $('.answerC.selected').length;
   
   console.log(A);
   console.log(B);
   console.log(C);
   
   $('body').css('color', 'white');
   
   $('.backtotop').show();
   $('.backtotop').click(function(){
     $('html, body').animate({
            scrollTop: 0
        }, 200);
     $('.backtotop').hide();
   });
   $(".batman").hide();
   
   if((A>B)&&(A>C)){$(".submit-div").html('<div class="result"><div class="result-title">SUPERMAN</div><br />You\'re an all-out good guy. Nobody can argue when it comes to doing the best thing you\'re the man. Even if Bruce thinks you\'re a boy-scout.</div>');
   //Picture Part
   $(".picture").html("<img src='http://static.comicvine.com/uploads/original/13/132703/2653109-can.png' class='superman'>");
   $('body').css('background', '#2980B9');
    $('html, body').animate({
            scrollTop: $('.superman').offset().top
        }, 400);
   }
                   
    
   if((A>B)&&(B>C)){$(".submit-div").html('<div class="result"><div class="result-title">JIM GORDON</div><br />Nobody argues that when it comes to cops, you\'re the best of the lot. In a sea of corruption and deciept, you serve as a shining example to everyone around. Even still, times are hard. And you appreciate the need to bend the rules every now and then.</div>');
   //Picture Part
   $(".picture").html("<img src='http://bakarenders.com/renders/albums/userpics/21033/normal_JimGordon-001.png' class='gordon'>");
   $('body').css('background', '#C0392B');
    $('html, body').animate({
            scrollTop: $('.gordon').offset().top
        }, 400);
  }
   
   if((A==B)&&(A>C)){$(".submit-div").html('<div class="result"><div class="result-title">ROBIN</div><br />As Batman\'s moral compass, you remind him that he is there to do the right thing, and stop him losing his edge. Coupled with all of the butt-kicking you do, you have your work cut out. But you know your duty and are happy to do it!</div>');
   //Picture Part
   $(".picture").html("<img src='http://bakarenders.com/renders/albums/userpics/21033/normal_Robin-001.png' class='robin'>");
   $('body').css('background', 'green');
    $('html, body').animate({
            scrollTop: $('.robin').offset().top
        }, 400);
   }
   
   if((B>A)&&(B>C)){$(".submit-div").html('<div class="result"><div class="result-title">ALFRED</div><br />A faithful servant, you\'ve had your share of bad decisions, but you\'ve only ever had the interest of your friends at heart.</div>');
   //Picture Part
   $(".picture").html("<img src='http://www.comicsblend.com/wp-content/uploads/2014/01/gettoknow_alfred_alt2.png' class='alfred'>");
                    $('body').css({'background':'#333'});
    $('html, body').animate({
            scrollTop: $('.alfred').offset().top
        }, 400);
   }
   
   
   if((B>A)&&(A>C)){$(".submit-div").html('<div class="result"><div class="result-title">BATMAN</div><br />You are a metaphor for some of Gotham City\'s darkest hour, and are determined to drag the city from the clutches of evil, though you understand that to do this, you must become a criminal. You separate yourself from the scum you deter, however, by never killing an enemy, only doing what is necessary to stop them.</div>');
   //Picture Part
   $(".picture").html("<img src='http://jkyyuen.files.wordpress.com/2013/02/batman.png' class='batman2'>");
    $('html, body').animate({
            scrollTop: $('.batman2').offset().top
        }, 400);}
   
   if((B>C)&&(C>A)){$(".submit-div").html('<div class="result"><div class="result-title">PENGUIN</div><br />You\'re a bad guy. Everyone knows you\'re a bad guy. But, all the same, you\'re kind of the joke of the bad guys. You aren\'t exactly evil... More angry with the world. And you like fish.</div>');
   //Picture Part
   $(".picture").html("<img src='http://img3.wikia.nocookie.net/__cb20130918202628/marvel_dc/images/1/1c/Batman_Vol_2_23.3_The_Penguin_Textless.jpg' class='penguin'>");
                    $('body').css({'background':'white', 'color':'black'});
    $('html, body').animate({
            scrollTop: $('.penguin').offset().top
        }, 400);
   }
   
   if((C==B)&&(B>A)){$(".submit-div").html('<div class="result"><div class="result-title">RIDDLER</div><br/>You count yourself amongst the most intellectual of your peers and you aren\'t far wrong. You\'re a devious, clever, underhanded baddie who loves to get one up on those ignorant do-gooders.</div>');
   //Picture Part
   $(".picture").html("<img src='http://fc09.deviantart.net/fs71/f/2013/118/8/3/batman_arkham_city_riddler_render_by_american_paladin-d63crqo.png' class='riddler'>");
   $('body').css('background', '#197316');
    $('html, body').animate({
            scrollTop: $('.riddler').offset().top
        }, 400);}
   
   if((C>B)&&(C>A)){$(".submit-div").html('<div class="result"><div class="result-title">JOKER</div><br />Evil incarnate, people fear you and never know what you\'ll do next. Just the sight of you strikes fear into the heart of most, but nobody\'s managed to stop you yet. Not for long, anyway.</div>');
   //Picture Part
   $(".picture").html("<img src='http://fc02.deviantart.net/fs70/f/2013/019/1/a/joker_black_and_white_colored_in_ps_by_zerods111-d5ryjiq.png' class='joker'>");
   $('body').css('background','#8E44AD');
    $('html, body').animate({
            scrollTop: $('.joker').offset().top
        }, 400);}
   
   if((C>B)&&(B>A)){$(".submit-div").html('<div class="result"><div class="result-title">TWO-FACE</div><br />Everyone knows you\'re a nasty piece of work, and so nobody ever crosses you. They know what you\'d do to them! Maybe you used to be more of an idealist, but maybe you\'ve always had this evil side in you.</div>');
   //Picture Part
   $(".picture").html("<img src='http://img2.wikia.nocookie.net/__cb20110315234910/batman/images/7/7a/Two-face.png' class='face'>");
                    $('body').css({'background-image':'url(http://1.bp.blogspot.com/-w4P1FHSrXWM/UN04v4eixnI/AAAAAAAAAeg/4Q_kagUkd6E/s1600/scar1.jpg)', 'background-repeat':'no-repeat', 'background-size':'cover', '-webkit-background-size':'cover', '-o-background-size':'cover', '-moz-background-size':'cover'});
    $('html, body').animate({
            scrollTop: $('.face').offset().top
        }, 400);}
   
   
   
   if((A==C)&&(A>B)){$(".submit-div").html('<div class="result"><div class="result-title">CATWOMAN</div><br />\'Good\' and \'bad\' hardly apply to you. You\'ve done some heroic things, and you\'ve done some terrible things too, but all for profit. You have a good heart and a bad attitude, and you\'re so unpredictable! A girl has to do what a girl has to do, right?</div>');
   //Picture Part
   $(".picture").html("<img src='http://rollingout.com/wp-content/uploads/2012/07/catwoman.png' class='cat'>");
   $('body').css('background', '#2C3E50');
    $('html, body').animate({
            scrollTop: $('.cat').offset().top
        }, 400);}   
 });                       