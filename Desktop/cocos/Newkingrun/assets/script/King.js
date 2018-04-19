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
        jumpHeight:0,
         
         // 主角跳跃持续时间
        jumpDuration:0,
        //主角状态
        state:'run',
    },
    run:function(){
        this.getComponent(cc.Animation).play('king_run');
        this.state='run';
    },
   jump:function(){
       if(this.state=='run'){
           this.state = 'jump';
           this.getComponent(cc.Animation).stop();
           this.node.runAction(cc.sequence(cc.jumpBy(this.jumpDuration,cc.p(0,0),this.jumpHeight,1),
           cc.callFunc(function () { 
               this.run();
            },this)));
       }
   },
   down:function(){
        if(this.state=='run'){
            this.state='down';
            this.node.runAction(cc.scaleTo(0.05,1,0.5));
        }
   },
   downRelease:function(){
    if(this.state == 'down'){
        this.node.runAction(cc.sequence(cc.scaleTo(0.05, 1, 1),
                            cc.callFunc(function() {
                                this.run();
                            }, this)));
    }
},
    // onLoad () {},

    start () {

    },

    // update (dt) {},
});
