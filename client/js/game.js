$(function(){
	//初始化游戏
newGame("15","15");
//下棋
pushChess("15","15");
//接受输赢信息
winChess("play1");
	//初始化游戏
function newGame(x,y){
	$(function(){
		var chesss=parseInt(x*y);
		var chesssx=parseInt(x*50+x*2)+"px"
		var chesssy=parseInt(y*50+y*2)+"px"
		$("ul").css({"width":chesssx})
		$("ul").css({"height":chesssy})
		for(var i=0;i<chesss;i++){
			 $("ul").append("<li></li>");
		}
	})
}
//下棋
var color=1;
function pushChess(x,y,color){
	$("ul").on("click","li",function(){
			if($(this).html()==""){
        			$(this).append("<span></span>");
        		if(color){$("span").css({"background":"black"})}
        			else{$("span").css({"background":"white"})}
        	}
    })
}     	            	
//接受输赢信息
function winChess(play1){
	//alert(play1);
}
})

