// Learn cc.Class:
//  - [Chinese] http://docs.cocos.com/creator/manual/zh/scripting/class.html
//  - [English] http://www.cocos2d-x.org/docs/creator/en/scripting/class.html
// Learn Attribute:
//  - [Chinese] http://docs.cocos.com/creator/manual/zh/scripting/reference/attributes.html
//  - [English] http://www.cocos2d-x.org/docs/creator/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - [Chinese] http://docs.cocos.com/creator/manual/zh/scripting/life-cycle-callbacks.html
//  - [English] http://www.cocos2d-x.org/docs/creator/en/scripting/life-cycle-callbacks.html

cc.Class({
    extends: cc.Component,

    properties: {
        king:{
            default:null,
            type:cc.Node,
        },
      

       
    },
   
    // 当碰撞产生时，切换到Over场景
   
     onLoad:function () {
      //  cc.director.getCollisionManager().enabled=true;//开启碰撞管理的显示
         var self = this;
         //左侧蹲，右侧跳  touchstart 当触摸在指定区域内时
         this.node.on('touchstart',function(event){
             //cc.director.getvisiblsize 获取运行场景的可见大小
            var visibleSize = cc.director.getVisibleSize();
            if(event.getLocationX()<visibleSize.width/2){
                self.king.getComponent('King').down();
            }else{
                self.king.getComponent('King').jump();
            }
         });
         //左侧松手就恢复跑的状态 touchend
         this.node.on('touchend',function(event){
            var visibleSize = cc.director.getVisibleSize();
            if(event.getLocationX()<visibleSize.width/2){
                self.king.getComponent('King').downRelease();
            }else{
                // self.king.getComponent('King').jump();
            }
        });
     },

    start () {

    },

    // update (dt) {},
});
