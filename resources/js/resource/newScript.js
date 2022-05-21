;(function sub2menu () {
	$("ul#nav").find('.sub_on').each(function(index,element){
		var nav_index = $(this).parent().children().index(this);
		console.log(nav_index);
		$(this).children('.sub2Nav').css('top',`${nav_index === String(0)?0:String(nav_index * 42)+'px'}`);
		$(this).mouseover(function(){
			if ($(this).children('.sub2Nav')) {
				$(this).children('.sub2Nav').css('display','block');
			}
		});
		$(this).mouseout(function(){
			if ($(this).children('.sub2Nav')) {
				$(this).children('.sub2Nav').css('display','none');
			}
		});
	});
}());