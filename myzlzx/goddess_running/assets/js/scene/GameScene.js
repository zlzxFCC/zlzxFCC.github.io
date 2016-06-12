/*游戏界面*/
var GameScene = my.Class(BaseScene, {
    constructor: function() {
        this.stage = Stage.stage;
        this.queue = Stage.queue;
        this.init();
        this.initWindowEvent();
    },

    init: function() {
        console.log("GameScene init");
        //游戏界面容器
        this.el = new createjs.Container;
        this.stage.addChild(this.el);
        this.initGame();
    },

    initScenery: function() {
        var me = this;
        var map = this.gameData.map;
        var sideMap = resConfig.sceneryMap[map].sideMap;
        this.scenerys = {};
        this.scenerys.objs = new Array();
        this.scenerys.ui = new createjs.Container;
        this.el.addChild(this.scenerys.ui);
        for (var i = 0; i < sideMap.length; i++) {
            var scenery = new Scenery(sideMap[i]);
            me.scenerys.objs.push(scenery);
            me.scenerys.ui.addChild(scenery.getScenery());
        }

        window.wayLineSet = resConfig.wayLineSet;
        var data = resConfig.sceneryMap[map].wayLine;
        for (var i = 0; i < 2; i++) {
            for (var j = 0; j < wayLineSet.length; j++) {
                var wayLine = new WayLine(data, i, j);
                me.scenerys.objs.push(wayLine);
                me.scenerys.ui.addChild(wayLine.getWayLine());
            }
        }
    },

    initGame: function() {
        var me = this;

        //暂停
        this._pause = false;
        this.lvData = [];
        this.pops = {};
        createjs.Tween.removeAllTweens();

        var level = Config.level;
        this.gameData = resConfig.gameData["level" + level];
        this.weight = this.gameData.maxWeight;
        this.distance = 0;
        //碰撞判断调整距离
        this._d = 0;
        this.winCount = 0;

        window.SPEED = this.gameData.speed;

        //背景
        var backGround = new createjs.Bitmap(this.queue.getResult(this.gameData.map));
        backGround.x = 0;
        backGround.y = 0;
        this.el.addChild(backGround);
        this.initScenery();

        //障碍物池初始化
        this.foods = {};
        this.foods.objs = new Array();
        this.foods.ui = new createjs.Container;
        this.el.addChild(this.foods.ui);

        //获取障碍物地图
        this.foodMap = resConfig.foodMap['level' + Config.level].concat();
        this.foodCur = this.foodMap.shift();

        //人物
        this.goddess = new Goddess(this);
        this.el.addChild(this.goddess.getGirl());

        //计分
        var fps = this.fpsTxt = new createjs.Text("fps:", "16px Arial", "#000");
        fps.x = 0;
        fps.y = 0;
        this.el.addChild(fps);

        //游戏互动文字
        this.okBit = new createjs.Bitmap(this.queue.getResult("ok"));
        this.noBit = new createjs.Bitmap(this.queue.getResult("no"));
        this.goodBit = new createjs.Bitmap(this.queue.getResult("good"));
        this.coolBit = new createjs.Bitmap(this.queue.getResult("cool"));
        this.awesomeBit = new createjs.Bitmap(this.queue.getResult("awesome"));
        this.excellentBit = new createjs.Bitmap(this.queue.getResult("excellent"));

        this.el.addChild(this.okBit);
        this.el.addChild(this.noBit);
        this.el.addChild(this.goodBit);
        this.el.addChild(this.coolBit);
        this.el.addChild(this.awesomeBit);
        this.el.addChild(this.excellentBit);

        this.okBit.visible = false;
        this.noBit.visible = false;
        this.goodBit.visible = false;
        this.coolBit.visible = false;
        this.awesomeBit.visible = false;
        this.excellentBit.visible = false;

        //距离进度条 数值
        this.distanceBar = new createjs.Bitmap(this.queue.getResult("distanceBar"));
        this.distanceBar.x = 30;
        this.distanceBar.y = 20;
        this.el.addChild(this.distanceBar);

        this.progress_distance = new createjs.Bitmap(this.queue.getResult("progress1"));
        this.progress_distance.x = 73;
        this.progress_distance.y = 42;
        this.progress_distance.scaleX = 0;
        this.el.addChild(this.progress_distance);

        this.distanceIcon = new createjs.Bitmap(this.queue.getResult("distance"));
        this.distanceIcon.x = 26;
        this.distanceIcon.y = 13;
        this.el.addChild(this.distanceIcon);

        this.distaceNum = new createjs.BitmapText('0', num.distaceNum);
        this.distaceNum.x = 140;
        this.distaceNum.y = 80;
        this.el.addChild(this.distaceNum);

        //体重进度条 数值
        this.weightBar = new createjs.Bitmap(this.queue.getResult("weightBar"));
        this.weightBar.x = 360;
        this.weightBar.y = 20;
        this.el.addChild(this.weightBar);

        this.progress_weight = new createjs.Bitmap(this.queue.getResult("progress2"));
        this.progress_weight.regX = 200;
        this.progress_weight.x = 563;
        this.progress_weight.y = 42;
        this.progress_weight.scaleX = 1;
        this.el.addChild(this.progress_weight);       

        this.weightIcon = new createjs.Bitmap(this.queue.getResult("weight"));
        this.weightIcon.x = 524;
        this.weightIcon.y = 14;
        this.el.addChild(this.weightIcon);

        this.weightNum = new createjs.BitmapText('0', num.weightNum);
        this.weightNum.x = 400;
        this.weightNum.y = 80;
        this.el.addChild(this.weightNum);

        //logo
        // var boyaa = new createjs.Bitmap(this.queue.getResult("boyaa"));
        // boyaa.x = 220, boyaa.y = 890;
        // this.el.addChild(boyaa);

        //暂停按钮
        this.pauseBtn = new createjs.Bitmap(this.queue.getResult("pauseBtn"));
        this.pauseBtn.x = 520;
        this.pauseBtn.y = 110;
        this.el.addChild(this.pauseBtn);
        this.pauseBtn.visible = false;

        me.initEvent();
        // this.visibilityEvent();
        me.stage.update();
        me.start();
    },
    showGoal: function() {
        var me = this;
        this.goal = new createjs.Container();
        this.goal.x = 40;
        this.goal.y = -360;

        this.el.addChild(this.goal);

        this.pop_bg = new createjs.Bitmap(this.queue.getResult("pop_bg"));
        this.goal.addChild(this.pop_bg);

        this.star1 = new createjs.Bitmap(this.queue.getResult("star"));
        this.star1.x = 80, this.star1.y = 170;
        this.goal.addChild(this.star1);

        this.star2 = new createjs.Bitmap(this.queue.getResult("star"));
        this.star2.x = 80, this.star2.y = 270;
        this.goal.addChild(this.star2);

        this.m = new createjs.Bitmap(this.queue.getResult("m"));
        this.m.x = 440, this.m.y = 170;
        this.goal.addChild(this.m);

        this.g = new createjs.Bitmap(this.queue.getResult("g"));
        this.g.x = 440, this.g.y = 270;
        this.goal.addChild(this.g);

        this.run_over = new createjs.Bitmap(this.queue.getResult("run_over"));
        this.run_over.x = 130, this.run_over.y = 170;
        this.goal.addChild(this.run_over);

        this.subtract = new createjs.Bitmap(this.queue.getResult("subtract"));
        this.subtract.x = 130, this.subtract.y = 270;
        this.goal.addChild(this.subtract);

        this.distaceNums = new createjs.BitmapText(resConfig.gameData['level' + Config.level].distance.toString(), num.distaceNum);
        this.distaceNums.x = 280, this.distaceNums.y = 180;
        this.goal.addChild(this.distaceNums);

        this.weightNums = new createjs.BitmapText(resConfig.gameData['level' + Config.level].minWeight.toString(), num.weightNum);
        this.weightNums.x = 280, this.weightNums.y = 280;
        this.goal.addChild(this.weightNums);

        this.story2 = new createjs.Bitmap(this.queue.getResult("story2"));
        this.story2.x = 0, this.story2.y = 0;
        this.el.addChild(this.story2);
        this.story2.visible = false;

        createjs.Tween.get(this.goal).to({
            y: 0
        }, 300).wait(800).to({
            y: -360
        }, 200).call(function() {
            me.goal.visible = false;
        });
    },

    visibilityEvent: function() {
        var me = this;
        var hidden, state, visibilityChange;
        if (typeof document.hidden !== "undefined") {
            hidden = "hidden";
            visibilityChange = "visibilitychange";
            state = "visibilityState";
        } else if (typeof document.mozHidden !== "undefined") {
            hidden = "mozHidden";
            visibilityChange = "mozvisibilitychange";
            state = "mozVisibilityState";
        } else if (typeof document.msHidden !== "undefined") {
            hidden = "msHidden";
            visibilityChange = "msvisibilitychange";
            state = "msVisibilityState";
        } else if (typeof document.webkitHidden !== "undefined") {
            hidden = "webkitHidden";
            visibilityChange = "webkitvisibilitychange";
            state = "webkitVisibilityState";
        }

        document.addEventListener(visibilityChange, function() {
            if (document[state] == "visible") {
                console.log("leave");
                me.start();
            } else {
                console.log("focus");
                me.pause();
            }
        }, false);
    },

    onTouchStart: function(e) {
        var me = this;
        e.preventDefault();
        var touch = e.touches[0];
        me.touchX = touch.pageX;
        me.touchY = touch.pageY;
        //console.log(e);
    },

    onTouchMove: function(e) {
        var me = this;
        e.preventDefault();
        var touch = e.touches[0];
        me.touchMoveX = touch.pageX;
        me.touchMoveY = touch.pageY;
        console.log(me.touchMoveX,me.touchMoveY);
    },

    onTouchEnd: function(e) {
        //console.log(touchX>>0,touchMoveX>>0);
        var me = this;
        var touchX = me.touchX,
            touchY = me.touchY,
            touchMoveX = me.touchMoveX,
            touchMoveY = me.touchMoveY;

        if (touchMoveX != null || touchMoveY != null) {
            if ((touchX - touchMoveX) > 60) {
                window.goddess.action("turnLeft");
            } else if ((touchX - touchMoveX) < (-60)) {
                window.goddess.action("turnRight");
            } else if ((touchY - touchMoveY) > 60) {
                window.goddess.action("jump");
                console.log("跳");
            } else if ((touchY - touchMoveY) < (-60)) {
                window.goddess.action("lie");
            }

            me.touchMoveX = null, me.touchMoveY = null;
        }


    },

    initEvent: function() {
        var me = this;
        var canvas = this.stage.canvas;
        canvas.addEventListener('touchstart', me.onTouchStart, true);
        canvas.addEventListener('touchmove', me.onTouchMove, true);
        canvas.addEventListener('touchend', me.onTouchEnd, true);
        window.goddess = me.goddess;

        //暂停
        this.pauseBtn.onTap(function(event) {
            me.pauseBtn.visible = false;
            me.stage.update();
            me.pause();
            me.showPop("pause");
            me.popEvent("pause");
        });

        //点击事件，控制左右跳卧
        // me.stage.onTap(function(e) {
        //     if (!me._pause) {
        //         // me.clickMove(e.stageX, e.stageY);
        //     }
        // });
    },

    showPop: function(type) {
        var pop = new PopScene(type, this);
        this.pop = pop;
        this.stage.update();
    },

    popEvent: function() {
        var me = this;
        var self = me.pop;

        if (self.type == "pause") {
            //继续
            self.continueBtn.onTap(function(event) {
                self.remove();
                me.pauseBtn.visible = true;
                me.stage.update();
                me.goOn();
            });

            //重玩
            self.replayBtn.onTap(function(event) {
                me.stage.removeChild(me.el);
                me.init();
            });

            //关卡
            self.levelBtn.onTap(function(event) {
                me.stage.removeChild(me.el);
                Run.inMap();
            });
        } else if (self.type == "scuess") {
            //下一关
            self.nextBtn.onTap(function(event) {
                me.stage.removeChild(me.el);
                if (++Config.level <= 10) {
                    me.init();
                } else {
                    me.stage.removeChild(me.el);
                    Run.inMap();
                };
            });

            //分享
            self.shareBtn.onTap(function(event) {
                me.stage.removeChild(me.el);
                Run.inMap();
            });

            //更多游戏
            self.moreBtn.onTap(function(event) {
                location.href = "http://266.com";
            });

        } else {
            //重玩
            self.replayBtn.onTap(function(event) {
                me.stage.removeChild(me.el);
                me.init();
            });
        }
    },

    initWindowEvent: function() {
        var me = this;
        //键盘事件
        $(window).on('keydown', function(e) {
            if (!me._pause) {
                var keyCode = e.keyCode;
                if (keyCode > 36 && keyCode < 41) {
                    me.keyMove(keyCode, 'keydown');
                }
            }
        });
    },

    keyMove: function(keyCode, key) {
        if (key == "keydown") {
            if (keyCode == 37) {
                this.goddess.action("turnLeft");
            } else if (keyCode == 39) {
                this.goddess.action("turnRight");
            } else if (keyCode == 38) {
                this.goddess.action("jump");
            } else if (keyCode == 40) {
                this.goddess.action("lie");
            }
        }
    },

    // clickMove: function(stageX, stageY) {
    //     if (stageY < 470) {
    //         this.goddess.action("jump");
    //         return;
    //     } else if (stageY > 780) {
    //         this.goddess.action("lie");
    //         return;
    //     }
    //     if (stageX > 0 && stageX < 320) {
    //         this.goddess.action("turnLeft");
    //     } else {
    //         this.goddess.action("turnRight");
    //     }
    // },

    tick: function() {
        if (!this._pause) {
            var me = this;
            // SPEED = (125000 - this.weight) / 25000.0;
            if (this.fpsTxt) this.fpsTxt.text = "FPS : " + parseInt(createjs.Ticker.getMeasuredFPS());
            if (this.foodCur != null && this.distance > this.foodCur[0]) {
                this.addFood(this.foodCur[1]);
                if (this.foodMap.length > 0) {
                    this.foodCur = this.foodMap.shift();
                } else {
                    this.foodCur = null;
                }
            }

            if (this.distance >= this.gameData.distance) {
                me.over();
            }
            me.changeProgress();
            me.checkFood();
            me.moveScenery();
            me.stage.update();
        }
    },

    changeProgress: function() {
        this.distance += SPEED * 0.5;
        this.progress_distance.scaleX = (this.distance / this.gameData.distance) * 0.9 + 0.1;
        this.distaceNum.text = parseInt(this.distance).toString();

        this.weight -= SPEED;
        if(this.weight < this.gameData.maxWeight) {
            this.progress_weight.scaleX = (this.weight - this.gameData.minWeight) / (this.gameData.maxWeight - this.gameData.minWeight) * 0.6 + 0.4;
        }
        this.weightNum.text = parseInt(this.weight).toString();
    },

    addFood: function(groupId) {
        var me = this;
        var group = resConfig.foodGroup[groupId];
        for (var i = 0; i < 3; i++) {
            if (group[i] > 0) {
                var food = new Food(i, "food" + group[i]);
                this.foods.objs.push(food);
                this.foods.ui.addChild(food.getFood());
            }
        }
    },

    switch: function() {
        // console.log("foodui="+this.el.getChildIndex(this.foods.ui));
        // console.log("goddess=" + this.el.getChildIndex(this.goddess.el));
        this.el.swapChildren(this.foods.ui, this.goddess.el);
        if (this._d == 0) {
            this._d = 180;
        } else {
            this._d = 0;
        }
    },

    /*障碍物检测*/
    checkFood: function() {
        var me = this,
            food, _y;
        var cacheList = new Array();
        while (me.foods.objs.length > 0) {
            food = me.foods.objs.pop();
            food.move();
            _y = food.getFood().y;

            if (_y >= 780 - me._d && _y < 850 + food.el.height && me.goddess.position == food.position) {
                if (food.motion == 0 || me.goddess.motion != food.motion) {
                    this.weight += food.calorie;
                    //吃东西音效
                    if (Config.isAndroid) {
                        createjs.Sound.play('eat', true);
                    }
                    me.foods.ui.removeChild(food.getFood());
                    me.showWord(false);
                } else {
                    cacheList.push(food);
                }
            } else {
                if (!food.pass && _y >= 850 + food.el.height && _y <= 875 + food.el.height && me.goddess.position == food.position) {
                    food.pass = true;
                    me.showWord(true);
                }
                if (_y >= 1300) {
                    me.foods.ui.removeChild(food.getFood());
                } else {
                    cacheList.push(food);
                }
            }
        }
        if (cacheList.length > 0) me.foods.objs = cacheList;
    },

    showWord: function(win) {
        var me = this;
        var word;
        if (win) {
            me.winCount++;
            if (me.winCount > 8) {
                word = me.excellentBit;
            } else {
                if (me.winCount > 6) {
                    word = me.awesomeBit;
                } else {
                    if (me.winCount > 4) {
                        word = me.coolBit;
                    } else {
                        if (me.winCount > 2) {
                            word = me.goodBit;
                        } else {
                            word = me.okBit;
                        }
                    }
                }
            }
        } else {
            me.winCount = 0;
            word = me.noBit;
        }
        word.visible = true;
        word.regX = 200;
        word.x = 320 + (me.goddess.position - 1) * 180;
        word.y = 400;
        createjs.Tween.removeTweens(word);
        createjs.Tween.get(word).to({
                y: me.goddess.el.y - 130
            }, 500)
            .to({
                visible: false
            }, 100);
    },

    moveScenery: function() {
        var me = this;
        var scenery;
        for (var i = 0; i < me.scenerys.objs.length; i++) {
            scenery = me.scenerys.objs[i];
            scenery.move();
        }
    },

    /*开始游戏*/
    start: function() {
        console.log("start");
        var me = this;
        this._pause = false;
        this.pauseBtn.visible = true;
        createjs.Ticker.setPaused(false);
        if (!Run.gameTicker) {
            createjs.Ticker.on("tick", function() {
                if (!me._pause) {
                    me.tick.call(me);
                }
            });
            Run.gameTicker = true;
        }
        me.showGoal();
    },

    /*暂停游戏*/
    pause: function() {
        this._pause = true;
        createjs.Ticker.setPaused(true);
        this.goddess.stop();
    },

    /*继续*/
    goOn: function() {
        this._pause = false;
        createjs.Ticker.setPaused(false);
        this.goddess.play();
    },

    /*游戏结束弹窗*/
    over: function() {
        var me = this;
        var level = Config.level;
        this.lvData[level - 1] = {
            "distance": this.distance,
            "weight": this.weight,
            "level": level
        };
        var lvData = JSON.stringify(this.lvData);
        localStorage.setItem("lvData", lvData);
        this.pause.call(this);

        var _level = "level" + Config.level;
        var _minWeight = resConfig.gameData[_level].minWeight;
        var _type;

        if (this.weight > _minWeight) {
            _type = "lose";
            document.title = "第" + level + "关都没过，得了《" + rankData[level - 1] + "》称号";
            window.shareData.tTitle = document.title;
        } else {
            _type = "scuess";
            document.title = "恭喜，过了" + level + "关，得了《" + rankData[level] + "》称号";
            window.shareData.tTitle = document.title;
            if (level == 10) {
                this.stage.removeChild(this.el);
                Run.inStory("end");
                return;
            }
        }
        this.showPop(_type);
        this.popEvent(_type);
        this.stage.update();
        console.log(this.foods);
    },

    showHint: function() {
        var hint = new createjs.Container();
        var bgLayer = new createjs.Shape();
        bgLayer.graphics.beginFill("#000");
        bgLayer.graphics.drawRect(0, 0, 640, 960);
        bgLayer.graphics.endFill();
        bgLayer.alpha = 0.6;
    },
});