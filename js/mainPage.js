$(document).ready(function(){
	$(document).on("click",".menu_wrapper a",function(){
		var 
		$menuList=$(this).parents(".menu_wrapper").children("a");
		$itemList=$(this).parents(".menu_container").siblings(".item_container").children("table");
		index=$menuList.index(this);
		$itemList.eq(index).show(1000).siblings("table").hide();

	});
	$(".item_container table:first-child").show();

	
	

});