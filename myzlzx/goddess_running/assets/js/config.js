/* 配置文件 */
var Config = {
    isIOS: (/iPhone|iPad/i).test(navigator.userAgent),

    isAndroid: (/android/i).test(navigator.userAgent),

    isMobile: (/mobile/i).test(navigator.userAgent),

    W: 640,

    H: 960,

    score: 0,

    timer: 60,

    level: 0,

    winNum:0

};

var _timer = parseInt(Date.now() + Math.random() * 100000000000);
window.shareData = {
    "imgUrl": "http://mj28501.static.17c.cn/html5/h5mini/goddess_running/assets/img/icon.jpg",
    "timeLineLink": "http://mj28501.static.17c.cn/html5/h5mini/goddess_running/index.php?timer=" + _timer,
    "tTitle": "奔跑吧女神",
    "tContent": "奔跑吧女神"
};
var rankData = ["胖妹子","呆萌萝莉", "邻家小妹", "小家碧玉", "眉清目秀", "窈窕淑女", "沉鱼落雁", "闭月羞花", "倾国倾城", "绝代佳人", "全民女神"];
var textArr = ["恭喜通关！", "在你不懈努力下胖妞终于变身女神！", "策划：博雅刺客工作室", "开发：付翠翠 、 陈尚俗"];
var resConfig = {
    startFunc: setup,
    wayLineSet: [0.016, 0.028, 0.052, 0.094, 0.170, 0.309, 0.562, 1],
    img: {
        path: "assets/img/",
        manifest: [{
            src: "girl1.png",
            id: "girl1"
        }, {
            src: "girl2.png",
            id: "girl2"
        }, {
            src: "girl3.png",
            id: "girl3"
        }, {
            src: "lock.png",
            id: "lock"
        }, {
            src: "pop_bg.png",
            id: "pop_bg"
        }, {
            src: "g.png",
            id: "g"
        }, {
            src: "m.png",
            id: "m"
        }, {
            src: "run_over.png",
            id: "run_over"
        }, {
            src: "subtract.png",
            id: "subtract"
        }, {
            src: "star.png",
            id: "star"
        }, {
            src: "key_up.png",
            id: "key_up"
        }, {
            src: "key_down.png",
            id: "key_down"
        }, {
            src: "key_left.png",
            id: "key_left"
        }, {
            src: "key_right.png",
            id: "key_right"
        }, {
            src: "up.png",
            id: "up"
        }, {
            src: "down.png",
            id: "down"
        }, {
            src: "left.png",
            id: "left"
        }, {
            src: "right.png",
            id: "right"
        }, {
            src: "okBtn.png",
            id: "okBtn"
        }, {
            src: "ok.png",
            id: "ok"
        }, {
            src: "no.png",
            id: "no"
        }, {
            src: "story1.png",
            id: "story1"
        }, {
            src: "story2.png",
            id: "story2"
        }, {
            src: "scuess_bg.png",
            id: "scuess_bg"
        }, {
            src: "pause_bg.png",
            id: "pause_bg"
        }, {
            src: "lose_bg.png",
            id: "lose_bg"
        }, {
            src: "continueBtn.png",
            id: "continueBtn"
        }, {
            src: "replayBtn.png",
            id: "replayBtn"
        }, {
            src: "levelBtn.png",
            id: "levelBtn"
        }, {
            src: "nextBtn.png",
            id: "nextBtn"
        }, {
            src: "shareBtn.png",
            id: "shareBtn"
        }, {
            src: "moreBtn.png",
            id: "moreBtn"
        }, {
            src: "running1.png",
            id: "running1"
        }, {
            src: "running2.png",
            id: "running2"
        }, {
            src: "running3.png",
            id: "running3"
        }, {
            src: "map.png",
            id: "map"
        }, {
            src: "1.png",
            id: "map1"
        }, {
            src: "2.png",
            id: "map2"
        }, {
            src: "3.png",
            id: "map3"
        }, {
            src: "4.png",
            id: "map4"
        }, {
            src: "5.png",
            id: "map5"
        }, {
            src: "6.png",
            id: "map6"
        }, {
            src: "7.png",
            id: "map7"
        }, {
            src: "8.png",
            id: "map8"
        }, {
            src: "9.png",
            id: "map9"
        }, {
            src: "10.png",
            id: "map10"
        }, {
            src: "pause.png",
            id: "pauseBtn"
        }, {
            src: "continue.png",
            id: "continuesBtn"
        }, {
            src: "bg_start.png",
            id: "bgStart"
        }, {
            src: "boyaa.png",
            id: "boyaa"
        }, {
            src: "play.png",
            id: "play"
        }, {
            src: "girl.png",
            id: "girl"
        }, { //进度条
            src: "weight.png",
            id: "weight"
        }, {
            src: "weightBar.png",
            id: "weightBar"
        }, {
            src: "distance.png",
            id: "distance"
        }, {
            src: "distanceBar.png",
            id: "distanceBar"
        }, {
            src: "progress1.png",
            id: "progress1"
        }, {
            src: "progress2.png",
            id: "progress2"
        }, {
            src: "number.png",
            id: "number"
        }, { //场景1
            src: "bg.png",
            id: "town"
        }, {
            src: "house1.png",
            id: "house1"
        }, {
            src: "house2.png",
            id: "house2"
        }, {
            src: "house3.png",
            id: "house3"
        }, {
            src: "grass1.png",
            id: "grass1"
        }, {
            src: "grass2.png",
            id: "grass2"
        }, {
            src: "grass3.png",
            id: "grass3"
        }, {
            src: "tree1.png",
            id: "tree1"
        }, {
            src: "tree2.png",
            id: "tree2"
        }, {
            src: "tree3.png",
            id: "tree3"
        }, {
            src: "pole.png",
            id: "pole"
        }, { //场景2
            src: "bg2.png",
            id: "grassland"
        }, {
            src: "l_fungus1.png",
            id: "l_fungus1"
        }, {
            src: "l_fungus2.png",
            id: "l_fungus2"
        }, {
            src: "l_tree1.png",
            id: "l_tree1"
        }, {
            src: "l_tree2.png",
            id: "l_tree2"
        }, {
            src: "l_tree3.png",
            id: "l_tree3"
        }, {
            src: "lr_pole2.png",
            id: "lr_pole2"
        }, {
            src: "lr_tree.png",
            id: "lr_tree"
        }, {
            src: "lr_tree2.png",
            id: "lr_tree2"
        }, {
            src: "r_fungus1.png",
            id: "r_fungus1"
        }, {
            src: "r_fungus2.png",
            id: "r_fungus2"
        }, {
            src: "r_tree2.png",
            id: "r_tree2"
        }, {
            src: "r_tree3.png",
            id: "r_tree3"
        }, {
            src: "root2.png",
            id: "root2"
        }, {
            src: "root1.png",
            id: "root1"
        }, {
            src: "tree_root1.png",
            id: "tree_root1"
        }, {
            src: "tree_root2.png",
            id: "tree_root2"
        }, {
            src: "line1.png",
            id: "line1"
        }, { //场景3
            src: "bg3.png",
            id: "beach"
        }, {
            src: "l_coconut1.png",
            id: "l_coconut1"
        }, {
            src: "l_coconut2.png",
            id: "l_coconut2"
        }, {
            src: "l_coconut3.png",
            id: "l_coconut3"
        }, {
            src: "l_shell.png",
            id: "l_shell"
        }, {
            src: "r_shell.png",
            id: "r_shell"
        }, {
            src: "l_spade1.png",
            id: "l_spade1"
        }, {
            src: "l_spade2.png",
            id: "l_spade2"
        }, {
            src: "l_umbrella1.png",
            id: "l_umbrella1"
        }, {
            src: "l_umbrella2.png",
            id: "l_umbrella2"
        }, {
            src: "l_umbrella3.png",
            id: "l_umbrella3"
        }, {
            src: "l_umbrella4.png",
            id: "l_umbrella4"
        }, {
            src: "r_boat1.png",
            id: "r_boat1"
        }, {
            src: "r_boat2.png",
            id: "r_boat2"
        }, {
            src: "r_boat3.png",
            id: "r_boat3"
        }, {
            src: "r_flag1.png",
            id: "r_flag1"
        }, {
            src: "r_flag2.png",
            id: "r_flag2"
        }, {
            src: "r_ring1.png",
            id: "r_ring1"
        }, {
            src: "r_ring2.png",
            id: "r_ring2"
        }, {
            src: "food1.png",
            id: "food1",
        }, {
            src: "food2.png",
            id: "food2",
        }, {
            src: "food3.png",
            id: "food3",
        }, {
            src: "food4.png",
            id: "food4",
        }, {
            src: "food5.png",
            id: "food5",
        }, {
            src: "food6.png",
            id: "food6",
        }, {
            src: "food7.png",
            id: "food7",
        }, {
            src: "food8.png",
            id: "food8",
        }, {
            src: "food9.png",
            id: "food9",
        }, {
            src: "food10.png",
            id: "food10",
        }, {
            src: "table.png",
            id: "table",
        }, {
            src: "awesome.png",
            id: "awesome",
        }, {
            src: "cool.png",
            id: "cool",
        }, {
            src: "excellent.png",
            id: "excellent",
        }, {
            src: "go.png",
            id: "go",
        }, {
            src: "good.png",
            id: "good",
        }, {
            src: "nice.png",
            id: "nice",
        }, {
            src: "ready.png",
            id: "ready",
        }, {
            src: "story_bg.png",
            id: "story_bg",
        }, {
            src: "story_blink.png",
            id: "story_blink",
        }, {
            src: "story_gd.png",
            id: "story_gd",
        }, {
            src: "story_heart1.png",
            id: "story_heart1",
        }, {
            src: "story_heart2.png",
            id: "story_heart2",
        }, {
            src: "story_light.png",
            id: "story_light",
        }, {
            src: "story_star.png",
            id: "story_star",
        }]
    },
    audio: {
        path: "assets/audio/",
        manifest: [{
            src: "eat.wav",
            id: "eat"
        }]
    },
    //关卡数据，maxWeight关卡初始体重(g)，minWeight关卡目标体重(g)，distance路程(m), speed人物动画速度
    gameData: {
        level1: {
            map: "town",
            maxWeight: 100000,
            minWeight: 97000,
            distance: 2500,
            speed: 1.6
        },
        level2: {
            map: "town",
            maxWeight: 97000,
            minWeight: 92000,
            distance: 3000,
            speed: 2
        },
        level3: {
            map: "town",
            maxWeight: 92000,
            minWeight: 87000,
            distance: 3000,
            speed: 2.5
        },
        level4: {
            map: "town",
            maxWeight: 87000,
            minWeight: 80000,
            distance: 4000,
            speed: 3
        },
        level5: {
            map: "grassland",
            maxWeight: 80000,
            minWeight: 76000,
            distance: 2500,
            speed: 1.6
        },
        level6: {
            map: "grassland",
            maxWeight: 76000,
            minWeight: 71000,
            distance: 3000,
            speed: 2
        },
        level7: {
            map: "grassland",
            maxWeight: 71000,
            minWeight: 66000,
            distance: 3000,
            speed: 2.5
        },
        level8: {
            map: "grassland",
            maxWeight: 66000,
            minWeight: 60000,
            distance: 3500,
            speed: 3
        },
        level9: {
            map: "beach",
            maxWeight: 60000,
            minWeight: 55000,
            distance: 3000,
            speed: 2
        },
        level10: {
            map: "beach",
            maxWeight: 55000,
            minWeight: 45000,
            distance: 5500,
            // minWeight: 55000,
            // distance: 50,            
            speed: 3
        },
        levelEX: {
            maxWeight: 100000,
            minWeight: 1,
            distance: 100000,
            speed: 3
        }
    },
    sceneryMap: {
        town: {
            //道路两边
            sideMap: [{
                imgName: "grass1",
                direction: "left",
                width: 67,
                height: 40,
                x: 250,
                y: 400
            }, {
                imgName: "house3",
                direction: "left",
                width: 184,
                height: 160,
                x: 220,
                y: 220
            }, {
                imgName: "pole",
                direction: "left",
                width: 24,
                height: 61,
                x: 290,
                y: 200
            }, {
                imgName: "tree2",
                direction: "left",
                width: 67,
                height: 81,
                x: 230,
                y: 100
            }, {
                imgName: "house2",
                direction: "left",
                width: 133,
                height: 117,
                x: 200,
                y: 30
            }, {
                imgName: "pole",
                direction: "left",
                width: 24,
                height: 61,
                x: 290,
                y: 30
            }, {
                imgName: "grass3",
                direction: "left",
                width: 86,
                height: 48,
                x: 140,
                y: 10
            }, {
                imgName: "tree3",
                direction: "left",
                width: 140,
                height: 170,
                x: 240,
                y: 8
            }, {
                imgName: "grass3",
                direction: "right",
                width: 86,
                height: 48,
                x: 180,
                y: 500
            }, {
                imgName: "pole",
                direction: "right",
                width: 24,
                height: 61,
                x: 270,
                y: 450
            }, {
                imgName: "house2",
                direction: "right",
                width: 133,
                height: 117,
                x: 150,
                y: 200
            }, {
                imgName: "tree2",
                direction: "right",
                width: 67,
                height: 81,
                x: 230,
                y: 200
            }, {
                imgName: "grass1",
                direction: "right",
                width: 67,
                height: 40,
                x: 280,
                y: 60
            }, {
                imgName: "pole",
                direction: "right",
                width: 24,
                height: 61,
                x: 270,
                y: 62
            }, {
                imgName: "house3",
                direction: "right",
                width: 184,
                height: 160,
                x: 220,
                y: 30
            }, {
                imgName: "tree3",
                direction: "right",
                width: 140,
                height: 170,
                x: 180,
                y: 12
            }, {
                imgName: "tree3",
                direction: "right",
                width: 140,
                height: 170,
                x: 240,
                y: 1
            }],
            wayLine: {
                imgName: "line1",
                width: 45,
                height: 101
            }
        },
        grassland: {
            //场景2：道路两边
            sideMap: [{
                imgName: "root2",
                direction: "left",
                width: 77,
                height: 42,
                x: 160,
                y: 420
            }, {
                imgName: "l_tree1",
                direction: "left",
                width: 85,
                height: 114,
                x: 260,
                y: 300
            }, {
                imgName: "l_fungus1",
                direction: "left",
                width: 27,
                height: 23,
                x: 290,
                y: 350
            }, {
                imgName: "lr_pole2",
                direction: "left",
                width: 35,
                height: 62,
                x: 300,
                y: 200
            }, {
                imgName: "tree_root2",
                direction: "left",
                width: 75,
                height: 53,
                x: 250,
                y: 170
            }, {
                imgName: "l_tree3",
                direction: "left",
                width: 153,
                height: 204,
                x: 200,
                y: 100
            }, {
                imgName: "l_fungus2",
                direction: "left",
                width: 66,
                height: 52,
                x: 280,
                y: 70
            }, {
                imgName: "l_tree1",
                direction: "left",
                width: 85,
                height: 114,
                x: 260,
                y: 50
            }, {
                imgName: "lr_pole2",
                direction: "left",
                width: 35,
                height: 62,
                x: 300,
                y: 30
            }, {
                imgName: "l_tree2",
                direction: "left",
                width: 127,
                height: 170,
                x: 230,
                y: 20
            }, {
                imgName: "l_tree2",
                direction: "left",
                width: 127,
                height: 170,
                x: 210,
                y: 8
            }, {
                imgName: "r_tree1",
                direction: "right",
                width: 44,
                height: 59,
                x: 200,
                y: 400
            }, {
                imgName: "lr_pole2",
                direction: "right",
                width: 35,
                height: 62,
                x: 290,
                y: 450
            }, {
                imgName: "r_fungus1",
                direction: "right",
                width: 27,
                height: 23,
                x: 280,
                y: 300
            }, {
                imgName: "r_tree3",
                direction: "right",
                width: 108,
                height: 145,
                x: 230,
                y: 460
            }, {
                imgName: "r_tree1",
                direction: "right",
                width: 44,
                height: 59,
                x: 200,
                y: 360
            }, {
                imgName: "r_tree3",
                direction: "right",
                width: 108,
                height: 145,
                x: 230,
                y: 260
            }, {
                imgName: "r_tree1",
                direction: "right",
                width: 44,
                height: 59,
                x: 200,
                y: 160
            }, {
                imgName: "r_tree3",
                direction: "right",
                width: 108,
                height: 145,
                x: 200,
                y: 100
            }, {
                imgName: "r_tree1",
                direction: "right",
                width: 44,
                height: 59,
                x: 200,
                y: 80
            }, {
                imgName: "lr_pole2",
                direction: "right",
                width: 35,
                height: 62,
                x: 290,
                y: 62
            }, {
                imgName: "r_tree2",
                direction: "right",
                width: 184,
                height: 160,
                x: 220,
                y: 30
            }, {
                imgName: "r_fungus2",
                direction: "right",
                width: 49,
                height: 40,
                x: 280,
                y: 20
            }, {
                imgName: "r_tree2",
                direction: "right",
                width: 184,
                height: 160,
                x: 200,
                y: 10
            }, {
                imgName: "root2",
                direction: "right",
                width: 77,
                height: 42,
                x: 280,
                y: 1
            }],
            wayLine: {
                imgName: "tree_root2",
                width: 75,
                height: 53
            }
        },
        beach: {
            //场景3：道路两边
            sideMap: [{
                imgName: "l_coconut3",
                direction: "left",
                width: 86,
                height: 110,
                x: 20,
                y: 300
            }, {
                imgName: "l_coconut2",
                direction: "left",
                width: 37,
                height: 49,
                x: 50,
                y: 200
            }, {
                imgName: "l_coconut1",
                direction: "left",
                width: 23,
                height: 29,
                x: 100,
                y: 100
            }, {
                imgName: "l_umbrella4",
                direction: "left",
                width: 204,
                height: 223,
                x: 250,
                y: 400
            }, {
                imgName: "l_umbrella3",
                direction: "left",
                width: 152,
                height: 170,
                x: 250,
                y: 220
            }, {
                imgName: "l_spade2",
                direction: "left",
                width: 36,
                height: 45,
                x: 290,
                y: 200
            }, {
                imgName: "l_umbrella2",
                direction: "left",
                width: 101,
                height: 110,
                x: 230,
                y: 100
            }, {
                imgName: "l_umbrella1",
                direction: "left",
                width: 54,
                height: 52,
                x: 230,
                y: 80
            }, {
                imgName: "l_spade1",
                direction: "left",
                width: 23,
                height: 27,
                x: 290,
                y: 60
            }, {
                imgName: "l_umbrella3",
                direction: "left",
                width: 152,
                height: 170,
                x: 250,
                y: 50
            }, {
                imgName: "l_umbrella2",
                direction: "left",
                width: 101,
                height: 110,
                x: 230,
                y: 30
            }, {
                imgName: "l_umbrella2",
                direction: "left",
                width: 101,
                height: 110,
                x: 230,
                y: 10
            }, {
                imgName: "r_ring2",
                direction: "right",
                width: 62,
                height: 37,
                x: 180,
                y: 500
            }, {
                imgName: "r_flag2",
                direction: "right",
                width: 24,
                height: 27,
                x: 270,
                y: 450
            }, {
                imgName: "r_boat3",
                direction: "right",
                width: 145,
                height: 150,
                x: 150,
                y: 200
            }, {
                imgName: "r_boat2",
                direction: "right",
                width: 75,
                height: 75,
                x: 230,
                y: 200
            }, {
                imgName: "r_ring1",
                direction: "right",
                width: 37,
                height: 22,
                x: 280,
                y: 60
            }, {
                imgName: "r_flag1",
                direction: "right",
                width: 14,
                height: 14,
                x: 270,
                y: 62
            }, {
                imgName: "r_boat1",
                direction: "right",
                width: 30,
                height: 33,
                x: 220,
                y: 30
            }, {
                imgName: "r_boat3",
                direction: "right",
                width: 145,
                height: 150,
                x: 180,
                y: 12
            }, {
                imgName: "r_boat3",
                direction: "right",
                width: 145,
                height: 150,
                x: 240,
                y: 1
            }],
            wayLine: {
                imgName: "l_shell",
                width: 45,
                height: 101
            }
        }
    },
    //障碍物种类 calorie:卡路里 motion:回避动作(0:必须绕开，1:可跳过, 2:可卧倒穿过)
    foodKind: {
        food1: {
            calorie: 100,
            img: "food1",
            width: 290,
            height: 117,
            motion: 1
        },
        food2: {
            calorie: 100,
            img: "food2",
            width: 290,
            height: 94,
            motion: 1
        },
        food3: {
            calorie: 100,
            img: "food3",
            width: 290,
            height: 142,
            motion: 1
        },
        food4: {
            calorie: 100,
            img: "food4",
            width: 290,
            height: 123,
            motion: 1
        },
        food5: {
            calorie: 150,
            img: "food5",
            width: 290,
            height: 137,
            motion: 1
        },
        food6: {
            calorie: 150,
            img: "food6",
            width: 290,
            height: 141,
            motion: 1
        },
        food7: {
            calorie: 160,
            img: "food7",
            width: 290,
            height: 145,
            motion: 2
        },
        food8: {
            calorie: 160,
            img: "food8",
            width: 290,
            height: 113,
            motion: 2
        },
        food9: {
            calorie: 160,
            img: "food9",
            width: 290,
            height: 249,
            motion: 0
        },
        food10: {
            calorie: 160,
            img: "food10",
            width: 290,
            height: 234,
            motion: 0
        },
    },
    //关卡障碍物[距离，障碍物组合id]
    foodMap: {
        level1: [
            [0, 17],
            [100, 19],
            [200, 2],
            [300, 31],
            [370, 4],
            [420, 24],
            [500, 26],
            [550, 1],
            [600, 16],
            [650, 17],
            [700, 36],
            [750, 10],
            [800, 27],
            [900, 18],
            [1000, 20],
            [1100, 23],
            [1150, 0],
            [1200, 23],
            [1300, 18],
            [1340, 1],
            [1400, 3],
            [1440, 31],
            [1500, 1],
            [1600, 9],
            [1670, 42],
            [1720, 46],
            [1760, 2],
            [1800, 29],
            [1850, 36],
            [1900, 4],
            [1950, 21],
            [2000, 17],
            [2050, 15],
            [2150, 3],
            [2200, 40],
        ],
        level2: [
            [0, 1],
            [50, 19],
            [120, 9],
            [190, 31],
            [260, 42],
            [300, 12],
            [380, 13],
            [460, 0],
            [540, 10],
            [620, 2],
            [700, 29],
            [780, 4],
            [820, 17],
            [870, 26],
            [940, 21],
            [1000, 3],
            [1050, 26],
            [1120, 20],
            [1170, 2],
            [1220, 19],
            [1280, 20],
            [1360, 24],
            [1440, 10],
            [1520, 12],
            [1600, 11],
            [1680, 17],
            [1760, 19],
            [1840, 28],
            [1920, 21],
            [2000, 0],
            [2050, 1],
            [2100, 20],
            [2200, 2],
            [2280, 17],
            [2320, 21],
            [2370, 4],
            [2430, 13],
            [2480, 37],
            [2580, 1],
            [2680, 10],
            [2750, 41],
        ],
        level3: [
            [0, 2],
            [80, 17],
            [160, 16],
            [200, 10],
            [250, 20],
            [300, 41],
            [380, 13],
            [460, 50],
            [540, 3],
            [600, 26],
            [650, 22],
            [700, 29],
            [780, 0],
            [860, 25],
            [940, 23],
            [1000, 19],
            [1120, 21],
            [1200, 47],
            [1250, 27],
            [1300, 24],
            [1360, 11],
            [1440, 20],
            [1520, 18],
            [1600, 28],
            [1680, 26],
            [1760, 12],
            [1800, 34],
            [1850, 50],
            [1920, 31],
            [2000, 13],
            [2100, 15],
            [2200, 17],
            [2250, 19],
            [2300, 29],
            [2340, 8],
            [2400, 28],
            [2480, 3],
            [2580, 27],
            [2680, 21],
            [2730, 10],
        ],
        level4: [
            [0, 21],
            [60, 10],
            [140, 14],
            [200, 26],
            [360, 28],
            [430, 10],
            [500, 12],
            [550, 22],
            [600, 14],
            [650, 24],
            [710, 46],
            [760, 16],
            [800, 28],
            [860, 21],
            [910, 20],
            [960, 0],
            [1000, 22],
            [1100, 24],
            [1200, 26],
            [1250, 21],
            [1300, 11],
            [1340, 28],
            [1400, 40],
            [1500, 12],
            [1600, 44],
            [1650, 2],
            [1700, 26],
            [1800, 48],
            [1850, 18],
            [1900, 40],
            [1950, 28],
            [2000, 42],
            [2100, 44],
            [2200, 45],
            [2300, 30],
            [2400, 21],
            [2450, 10],
            [2500, 19],
            [2600, 23],
            [2700, 49],
            [2750, 41],
            [2800, 11],
            [2900, 13],
            [2950, 23],
            [3000, 15],
            [3060, 25],
            [3100, 17],
            [3200, 29],
            [3300, 21],
            [3400, 23],
            [3500, 25],
            [3600, 29],
            [3700, 20],
        ],
        level5: [
            [0, 0],
            [50, 19],
            [100, 20],
            [150, 23],
            [200, 4],
            [250, 15],
            [300, 16],
            [350, 27],
            [400, 48],
            [450, 19],
            [500, 10],
            [550, 11],
            [600, 12],
            [650, 23],
            [700, 22],
            [750, 19],
            [800, 46],
            [850, 17],
            [900, 48],
            [950, 19],
            [1050, 20],
            [1100, 31],
            [1150, 2],
            [1200, 9],
            [1250, 24],
            [1300, 25],
            [1350, 16],
            [1400, 27],
            [1450, 28],
            [1500, 29],
            [1550, 40],
            [1600, 1],
            [1650, 42],
            [1700, 33],
            [1750, 44],
            [1800, 15],
            [1850, 26],
            [1900, 27],
            [1950, 0],
            [2000, 19],
            [2050, 20],
            [2150, 41],
            [2200, 22],
            [2250, 43],
        ],
        level6: [
            [0, 40],
            [80, 29],
            [160, 28],
            [220, 22],
            [300, 24],
            [380, 16],
            [460, 45],
            [540, 47],
            [620, 24],
            [700, 13],
            [780, 19],
            [860, 11],
            [940, 21],
            [1120, 22],
            [1200, 43],
            [1280, 14],
            [1360, 45],
            [1440, 26],
            [1520, 37],
            [1600, 18],
            [1680, 18],
            [1760, 27],
            [1840, 21],
            [1920, 24],
            [2000, 23],
            [2100, 44],
            [2200, 15],
            [2280, 17],
            [2380, 28],
            [2480, 49],
            [2580, 20],
            [2680, 41],
            [2780, 22],
        ],
        level7: [
            [0, 45],
            [80, 44],
            [160, 43],
            [220, 42],
            [300, 41],
            [380, 40],
            [460, 30],
            [540, 28],
            [620, 26],
            [700, 29],
            [780, 27],
            [860, 25],
            [940, 23],
            [1120, 21],
            [1200, 26],
            [1280, 24],
            [1360, 22],
            [1440, 20],
            [1520, 18],
            [1600, 16],
            [1680, 14],
            [1760, 12],
            [1840, 10],
            [1920, 11],
            [2000, 13],
            [2100, 15],
            [2200, 17],
            [2280, 19],
            [2380, 8],
            [2480, 46],
            [2580, 4],
            [2680, 2],
            [2780, 1],
            [2880, 3],
            [2900, 5],
        ],
        level8: [
            [0, 13],
            [60, 20],
            [140, 41],
            [200, 19],
            [360, 14],
            [430, 23],
            [500, 27],
            [550, 22],
            [600, 41],
            [650, 20],
            [710, 44],
            [760, 36],
            [800, 19],
            [860, 1],
            [910, 18],
            [960, 2],
            [1000, 31],
            [1100, 16],
            [1200, 45],
            [1250, 23],
            [1300, 24],
            [1340, 42],
            [1400, 15],
            [1500, 46],
            [1600, 44],
            [1650, 2],
            [1700, 26],
            [1800, 48],
            [1850, 28],
            [1900, 40],
            [1950, 5],
            [2000, 42],
            [2100, 19],
            [2200, 45],
            [2300, 30],
            [2400, 21],
            [2450, 13],
            [2500, 19],
            [2600, 23],
            [2700, 49],
            [2750, 41],
            [2800, 11],
            [2900, 13],
            [2950, 23],
            [3000, 15],
            [3060, 25],
            [3100, 17],
            [3200, 29],
            [3300, 21],
        ],
        level9: [
            [0, 13],
            [100, 25],
            [200, 17],
            [300, 19],
            [400, 21],
            [500, 17],
            [600, 18],
            [700, 12],
            [800, 3],
            [900, 30],
            [1000, 20],
            [1100, 23],
            [1200, 15],
            [1300, 19],
            [1400, 45],
            [1500, 5],
            [1600, 42],
            [1700, 44],
            [1800, 2],
            [1900, 29],
            [2000, 20],
            [2100, 18],
            [2200, 46],
            [3300, 8],
            [2400, 41],
            [2500, 34],
            [2600, 5],
            [2700, 26],
        ],
        level10: [
            [0, 17],
            [100, 18],
            [200, 12],
            [300, 3],
            [400, 34],
            [500, 5],
            [600, 26],
            [700, 17],
            [800, 2],
            [900, 29],
            [1000, 20],
            [1100, 18],
            [1200, 21],
            [1300, 8],
            [1400, 41],
            [1500, 3],
            [1600, 47],
            [1700, 29],
            [1800, 30],
            [1900, 5],
            [2000, 42],
            [2100, 44],
            [2200, 45],
            [2300, 22],
            [2400, 19],
            [2500, 44],
            [2600, 45],
            [2700, 29],
            [2800, 21],
            [2900, 13],
            [3000, 25],
            [3100, 17],
            [3200, 19],
            [3300, 21],
            [3400, 20],
            [3500, 25],
            [3600, 29],
            [3700, 1],
            [3800, 43],
            [3900, 15],
            [4000, 42],
            [4100, 24],
            [4200, 45],
            [4300, 0],
            [4400, 20],
            [4500, 23],
            [4600, 15],
            [4700, 19],
            [4800, 45],
            [4900, 3],
            [5000, 13],
            [5100, 18],
            [5200, 17],
        ],
        level11: [
            [0, 32],
            [200, 1],
            [400, 17],
            [600, 19],
            [800, 21],
            [1000, 5],
            [1200, 20],
            [1400, 10],
            [1600, 28],
            [1800, 19],
            [2000, 10],
            [2200, 24],
            [2400, 26],
            [2600, 28],
            [2800, 30],
            [3000, 32],
            [3200, 34],
            [3400, 36],
            [3600, 38],
            [3800, 40],
            [4000, 42],
            [4200, 44],
            [4400, 45],
            [4600, 0],
            [4800, 1],
            [5000, 30],
            [5200, 45],
            [5400, 9],
            [5600, 11],
            [5800, 13],
            [6000, 15],
            [6200, 17],
            [6400, 19],
            [6600, 21],
            [6800, 23],
            [7000, 25],
            [7200, 29],
            [7400, 31],
            [7600, 23],
            [7800, 5],
            [8000, 42],
            [8200, 44],
            [8400, 45],
            [8600, 0],
            [8800, 17],
            [9000, 19],
            [9200, 21],
            [9400, 19],
            [9600, 11],
        ],
    },
    //障碍物组合
    foodGroup: [
        [1, 1, 1], // 0
        [2, 2, 2], // 1
        [3, 3, 3], // 2
        [4, 4, 4], // 3
        [5, 5, 5], // 4
        [6, 6, 6], // 5
        [7, 7, 7], // 6
        [8, 8, 8], // 7
        [0, 9, 0], // 8
        [0, 10, 0], //9

        [0, 1, 1], //10
        [2, 0, 2], //11
        [3, 3, 0], //12
        [0, 7, 7], //13
        [7, 0, 7], //14
        [8, 0, 8], //15
        [8, 8, 0], //16
        [0, 9, 9], //17
        [9, 0, 9], //18
        [10, 10, 0], //19
        [10, 0, 10], // 20

        //绕+跳
        [1, 9, 9], //21
        [9, 2, 9], //22
        [9, 9, 3], //23
        [4, 10, 10], //24
        [10, 5, 10], //25
        [10, 10, 6], //26
        [1, 9, 1], //27
        [9, 3, 3], //28
        [2, 10, 2], //29
        [4, 4, 10], //30

        //绕+卧
        [7, 9, 9], //31
        [9, 7, 9], //32
        [9, 9, 7], //33
        [8, 9, 9], //34
        [9, 8, 9], //35
        [8, 10, 10], //36
        [10, 8, 10], //37
        [10, 10, 8], //38
        [10, 10, 7], //39
        [10, 7, 10], //40

        //跳+卧
        [7, 1, 1], //41
        [2, 7, 2], //42
        [3, 3, 7], //43
        [8, 4, 4], //44
        [5, 8, 5], //45
        [6, 6, 8], //46
        [7, 1, 7], //47
        [7, 7, 2], //48
        [8, 3, 8], //49
        [4, 8, 8], //50
    ]
};

var animateRes = {
    "running1": {
        "animations": {
            "run": [0, 5, "run", 0.1],
            "turn": [8],
            "jump": [6],
            "lie": [9]
        },
        "images": ["running1.png"],
        "frames": {
            "height": 286,
            "width": 210,
            "regX": 0,
            "regY": 0,
            "count": 60
        }
    },

    "running2": {
        "animations": {
            "run": [0, 7, "run", 0.14],
            "turn": [8],
            "jump": [9],
            "lie": [10]
        },
        "images": ["running2.png"],
        "frames": {
            "height": 306,
            "width": 180,
            "regX": 0,
            "regY": 0,
            "count": 60
        }
    },
    "running3": {
        "animations": {
            "run": [0, 5, "run", 0.07],
            "turn": [7],
            "jump": [8],
            "lie": [9]
        },
        "images": ["running3.png"],
        "frames": {
            "height": 352,
            "width": 180,
            "regX": 0,
            "regY": 0,
            "count": 60
        }
    }
}

function setup() {

    createjs.DisplayObject.prototype.onTap = function(cb) {
        this.on("mousedown", function(event) {
            event.stopPropagation();
            cb(event);
        });
    };

    Run.init();
}