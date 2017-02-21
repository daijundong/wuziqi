(function(){
    var App = function(){
        this.init();
        this.bind();
    };



    var handler = App.prototype;

    handler.init = function(){
        var so = this.so = io('ws://localhost:3000');
        
    };

    handler.bind = function(){
        var self = this;
        var so = self.so;

        ///
        var dict = {};
        dict['user.join'] = function(data){
            console.log(data);
        };

        dict['game.start'] = function(data){
            console.log('game.start');
            var rows = data.rows,
                cols = data.cols;
            var userList = data.userList;

            this.myColor = _.find(userList,function(us){
                return us.username = this.username;
            }.bind(this)).color;

            var ga = this.game = new Game(rows,cols,container);
        };

        dict['game.currColor'] = function(data){
            var color = data.color;
            if(color == this.myColor){
                console.log('it is my turn');
            }
        };

        so.on('message',function(data){
            var type = data.type;
            dict[type].call(self,data);
        });

    };

    handler.act = function(type,data){
        var so = this.so;
        data.type = type;
        so.emit('message',data);
    };

    this.App = App;

}).call(this);

// var so = app.so;

var container;
$(function(){
    container = $('#game');
    var app = new App();

    var username = app.username = 'tongjinle'+ Math.floor(Math.random()*100);
    app.act('user.enter',{username:username});


});
















































// $(function(){
//     var arrName=[]

//     var height=$(window).height()/2+"px";  //获取游览器高度的一半
//     $("#top").css({height:height});
//     $("#bottom").css({height:height,marginTop:height});
//     $("#bg").css({height:$(window).height()+"px"});


//     //点击进入登录操作
//     $("button").on("click",function(){
//         $("#top").animate({"marginTop":-$(window).height()/2},1000);

//         $("#bottom").animate({"marginTop":$(window).height()},1000);
//         $("#bg").css("display","block")

//     });

//     //自动进入登录操作
//     setTimeout(function(){
//         $("#top").animate({"marginTop":-$(window).height()/2},1000);

//         $("#bottom").animate({"marginTop":$(window).height()},1000);
//         $("#bg").css("display","block")
//     },3000)
// //           req:
// //            url:'/login/play'
// //            play:{
// //                type:"enter"，
// //	            name:string，
// //                color:num
// //            }
//     //点击登录按钮 提交用户名信息给后台
//     $(".go").on("click",function(){
//         $(".tishi ").html(null);
//         //获取用户名
//         var name=$("#name").val();
//         //判断用户名是否已经存在
//         for(var i=0;i<arrName.length;i++){
//             if (name==arrName[i]){
//                 $(".tishi ").html("用户名已存在");
//             }else {
//             }
//         }
//         arrName.push(name);
//         //生成提交信息
//         var play={
//             type:"enter",
//             name:name
//         };
//         if(validLogin(play)){
//             $("#name").val(null);
//            clientSocket.send(play);
//            $(this).parent().attr({
//                href:"game.html",
//                target:"_blank"
//            });
//         }
//         console.log(play)
//     });
//     //验证用户名是否为空
//     function validLogin(play){
//         if(!play.name){
//             $(".tishi ").html("用户名不能为空");
//             return false;

//         }else{
//         }
//         return true;
//     }

// });