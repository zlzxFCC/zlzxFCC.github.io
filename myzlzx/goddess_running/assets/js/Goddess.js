/*
   人物类
*/
var Goddess = my.Class({
  constructor: function(parent) {
    this.parent = parent;
    this.config = {
      middleX: 320,
      dx: 220,
      normalY: 650,
      lieY: 630,
      jumpY: 450,
      jumpTime: 1200 / SPEED,
      turnTime: 300 / SPEED,
      lieTime: 1500 / SPEED,
    }

    this.init();
  },

  init: function() {
    this.queue = Stage.queue;
    createjs.MotionGuidePlugin.install(createjs.Tween);
    //胖妹纸跑步动画
    if (Config.level > 8) {
      var data = {
        "animations": {
          "run": [0, 5, "run", 0.1],
          "turn": [8],
          "jump": [6],
          "lie": [9]
        },
        "images": [this.queue.getResult("running3")],
        "frames": {
          "height": 352,
          "width": 180,
          "regX": 0,
          "regY": 0,
          "count": 60
        }
      }
    } else if (Config.level > 4) {
      var data = {
        "animations": {
          "run": [0, 7, "run", 0.14],
          "turn": [8],
          "jump": [9],
          "lie": [10]
        },
        "images": [this.queue.getResult("running2")],
        "frames": {
          "height": 306,
          "width": 180,
          "regX": 0,
          "regY": 0,
          "count": 60
        }
      }
    } else {
      var data = {
        "animations": {
          "run": [0, 5, "run", 0.07],
          "turn": [7],
          "jump": [8],
          "lie": [9]
        },
        "images": [this.queue.getResult("running1")],
        "frames": {
          "height": 286,
          "width": 210,
          "regX": 0,
          "regY": 0,
          "count": 60
        }
      }
    }
    //实例精灵动画集
    var move = new createjs.SpriteSheet(data);

    //SpriteSheet类设置帧和动画,里面的run为开始的动画
    this.el = new createjs.Sprite(move, "run");
    this.el.width = data.frames.width;
    this.el.height = data.frames.width;
    this.el.regX = this.el.width / 2;
    this.el.regY = this.el.height / 2;

    //设置在舞台中的位置
    this.el.x = this.config.middleX;
    this.el.y = this.config.normalY;

    //初始状态
    this.position = 1;
    this.motion = 0;
    this.moving = false;
  },

  getGirl: function() {
    return this.el;
  },

  action: function(type) {
    var me = this;
    var cf = me.config;
    switch (type) {
      case "turnLeft":
        if (me.position > 0 && !me.moving) {
          me.moving = true;
          if (me.motion == 0) {
            me.el.gotoAndPlay("turn");
          }
          var targetX = me.position == 1 ? 100 : 320;
          var path = [me.el.x, cf.normalY, (me.el.x + targetX) / 2, cf.normalY -
            80, targetX, cf.normalY
          ];
          createjs.Tween.get(me.el).to({
            guide: {
              path: path,
              start: 0,
              end: 1
            }
          }, cf.turnTime).call(function() {
            if (me.motion == 0) {
              me.el.gotoAndPlay("run");
            }
            me.position--;
            me.moving = false;
          });
        }
        break;
      case "turnRight":
        if (me.position < 2 && !me.moving) {
          me.moving = true;
          if (me.motion == 0) {
            me.el.gotoAndPlay("turn");
          }
          var targetX = me.position == 1 ? 540 : 320;
          var path = [me.el.x, cf.normalY, (me.el.x + targetX) / 2, cf.normalY -
            80, targetX, cf.normalY
          ];
          createjs.Tween.get(me.el).to({
            guide: {
              path: path,
              start: 0,
              end: 1
            }
          }, cf.turnTime).call(function() {
            if (me.motion == 0) {
              me.el.gotoAndPlay("run");
            }
            me.position++;
            me.moving = false;
          });
        }
        break;
      case "jump":
        if (me.motion != 1 && !me.moving) {
          me.el.y = cf.normalY;
          if (me.motion == 2) {
            me.parent.switch();
          }
          createjs.Tween.removeTweens(me.el);
          createjs.Tween.get(me.el).to({
            y: cf.jumpY
          }, cf.jumpTime / 2).to({
            y: cf.normalY
          }, cf.jumpTime / 2).call(function() {
            me.el.gotoAndPlay("run");
            me.motion = 0;
          });
          me.el.gotoAndPlay("jump");
          me.motion = 1;
        }
        break;
      case "lie":
        if (me.motion != 2 && !me.moving) {
          me.el.y = cf.normalY;
          me.parent.switch();
          createjs.Tween.removeTweens(me.el);
          createjs.Tween.get(me.el).to({
            y: cf.lieY
          }, cf.lieTime).call(function() {
            me.el.y = cf.normalY;
            me.el.gotoAndPlay("run");
            me.parent.switch();
            me.motion = 0;
          });
          me.el.gotoAndPlay("lie");
          me.motion = 2;
        }
        break;
    }
  },

  stop: function() {
    this.el.stop();
  },

  play: function() {
    this.el.play();
  }
});
