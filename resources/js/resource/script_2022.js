

// $(function(){
// 	var sWSon = document.documentElement.clientWidth;
// 		if(sWSon>1220){
// 				$(window).scroll(function(){
// 			var scrollTop = $(window).scrollTop();
// 			if(scrollTop > 10){
// 				$('.wraq_header').addClass('current');
// 				//$('.ser').addClass('current');
// 				$('.top').css({display:'none'}).stop().animate({top:"-40px"},300);}
// 			else{
// 				$('.wraq_header').removeClass('current');
// 	//			$('.ser').removeClass('current');
// 				$('.top').css({display:'block'}).stop().animate({top:0},300);}
// 		});
			
// 		}else{
		
// 		}
// 	})
 

function Menu(menu,main){
  var onOff = true;
  $(menu).bind('click',function (){  
      $(main).slideToggle();
      if($(this).find('span').hasClass('fa-navicon')){
    $(this).find('span').removeClass('fa-navicon');
    $(this).find('span').addClass('fa-remove');
  }else{
    $(this).find('span').addClass('fa-navicon');
    $(this).find('span').removeClass('fa-remove');
    }
  
  })
  $(main).find('li > span').bind('click',function (){
    if($(this).hasClass('fa-chevron-right')){
    $(this).removeClass('fa-chevron-right');
    $(this).addClass('fa-chevron-down');
  }else{
    $(this).addClass('fa-chevron-right');
    $(this).removeClass('fa-chevron-down');
    }
      if($(this).parent().hasClass('on')){
          $(this).parent().find('.subNavs').slideUp();
          $(this).parent().removeClass('on');
          return false;  
      };
      $(this).parent().siblings().removeClass('on').find('.subNavs');
      $(this).parent().siblings().find('.subNavs').slideUp();
      $(this).parent().addClass('on').find('.subNavs');
      $(this).parent().find('.subNavs').slideDown();
  })

};


function side_subMenu(){
$('.sub_nav').find('.arrow').click(function(){
  if($(this).parent().hasClass('on')){
          $(this).parent().find('dl').slideUp();
          $(this).parent().removeClass('on');
    $(this).html("+")
          return false;
      };
      $(this).parent().siblings().removeClass('on');
      $(this).parent().siblings().find('dl').slideUp();
      $(this).parent().addClass('on');
      $(this).parent().find('dl').slideDown();
  $(this).html('&times;');
  })
}




function snavWidth(){
var liWidth = $("#nav li").width()
$('.subNav').css('width',2*liWidth)
}

function Nav(id){
var oNav = $(id);
var aLi = oNav.find('li');

aLi.hover(function (){
      $(this).addClass('on');
},function (){
      $(this).removeClass('on');
})	
};




function SubImgHeight(){
  var iWSon = document.documentElement.clientWidth;
  var oSubbanner = document.getElementById('subbanner');

  if(iWSon>=1920){
    oSubbanner.style.height = 500+'px';
  }else if(iWSon<1920){
    oSubbanner.style.height = iWSon * (500/1920)+'px';
}

window.onscroll = window.onresize = function (){
  var iWSon = document.documentElement.clientWidth;
  if(iWSon>=1920){
        oSubbanner.style.height = 500+'px';
    }else if(iWSon<1920){
    oSubbanner.style.height = iWSon * (500/1920)+'px';
  }
}

}





$(function(){
  $(window).resize(function(){
        var h = $(window).height();
        $('.goTop').css('top',h-150);
        $(window).scroll(function(){				
          var scrollTop = $(document).scrollTop();					  
          $('.goTop').stop().animate({
            top: h + scrollTop-150
          },300);
        });
  }).resize();
});
//gotop

$('.goTop').click(function(){

$('body,html').stop().animate({scrollTop:0});

return false;

});
  
// $(function(){
// 	$("#main li").mousemove(function(){
  
// 		$(this).find('.til_slides').fadeIn(500);
  
// 		})
// 	$("#main li").mouseleave(function(){
// 		$(this).find('.til_slides').fadeOut(2000);
  
// 		})
// 	});
//campus and outside
function tab(id){
var oTab = $(id);
var oLi = oTab.find('ul').eq(0).find('li');
var oDd = oTab.find('dd')
 oLi.hover(function(e) {
   var thisLi =$(this);
          //$(this).addClass('active').sibling('li').removeClass('active');
         //setTimeout(function(){
       thisLi.siblings('li').removeClass('active');  
      thisLi.addClass('active');                            
      oDd.css('display','none');
      oDd.eq(thisLi.index()).css('display','block').siblings().css('display','none');
       }
       //,100)
      //}
  );
}


$(function(){
  $(".size1").click(function(){
    $(".floatR").toggle(500);
  })
})


$(function(){
$('.techList').each(function(){
  var techT=$(this).find("li").length;
  if(techT % 2==1){
    $(this).find('li:last').css('width','100%');
  }
})	
})

function ImgHeight(){
  var iWSon = document.documentElement.clientWidth;
  var iHSon = document.documentElement.clientHeight;
  let newHeight = iWSon*(400/720) > iHSon ? iHSon : iWSon*(400/720);
  $('#main,.slides li').css('height',newHeight);
  $('#main,.slides li').css('width','100%');
  $('#main,.slides li img').css('width','100%');
  $('#main,.slides li img').css('height',newHeight);
}

window.onscroll = window.onresize = function (){
  var iWSon = document.documentElement.clientWidth;
  var iHSon = document.documentElement.clientHeight;
  let newHeight = iWSon*(400/720) > iHSon ? iHSon : iWSon*(400/720);
  $('#main,.slides li').css('height',newHeight);
  $('#main,.slides li').css('width','100%');
  $('#main,.slides li img').css('width','100%');
  $('#main,.slides li img').css('height',newHeight);
}

function changeVisible() {
  const ACTIVE = 'active_index';
  $(".SEARCH").bind("click",function(){
    if ($(".Tripple").hasClass(ACTIVE)) {
      $(".Tripple").removeClass(ACTIVE);
      $("#topLinks").fadeOut();
      $("#topLinks input").val("");
    }
    else {
      $(".Tripple").addClass(ACTIVE);
      $("#topLinks").fadeIn(500);
    }
  });
}

$(function(){
  changeVisible();
});