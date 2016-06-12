/*选关界面*/
var MapScene = my.Class(BaseScene, {
	constructor: function() {
		this.init();
	},
	init: function() {
		var me = this;
		this.stage = Stage.stage;
		this.queue = Stage.queue;

		//关卡界面容器
		this.el = new createjs.Container;
		this.stage.addChild(this.el);

		//关卡背景
		var map = new createjs.Bitmap(this.queue.getResult("map"));
		map.x = 0, map.y = 0;
		this.el.addChild(map);

		//关卡数字
		var pointArr = [
			[440, 40],
			[300, 90],
			[160, 110],
			[95, 280],
			[120, 410],
			[340, 500],
			[430, 540],
			[220, 580],
			[90, 645],
			[270, 785]
		];

		//生成10个关卡精灵，并绑定事件
		for (var i = 0; i < 10; i++) {
			var n = i + 1;
			var map;

			if (Config.level < n) {
				i == 0 ? map = "map" + n : map = "lock";
			} else {
				map = "map" + n;
			}

			var point = new createjs.Bitmap(this.queue.getResult(map));
			point.x = pointArr[i][0];
			point.y = pointArr[i][1];

			point.level = n;
			map == "lock" ? point.lock = 1 : point.lock = 0;

			this.el.addChild(point);

			// 绑定事件
			point.onTap(function(e) {
				// if (e.target.lock) {
				// 	console.log("不要乱点，按顺序通关，方可解锁~");
				// 	return;
				// }
				Config.level = e.target.level;
				console.log("关数:", Config.level);
				
				Run.inGame();
			});

		}

		var girl1 = new createjs.Bitmap(this.queue.getResult("girl1"));
		girl1.x = 500, girl1.y = 10;
		this.el.addChild(girl1);

		var girl2 = new createjs.Bitmap(this.queue.getResult("girl2"));
		girl2.x = 170, girl2.y = 350;
		this.el.addChild(girl2);

		var girl3 = new createjs.Bitmap(this.queue.getResult("girl3"));
		girl3.x = 145, girl3.y = 600;
		this.el.addChild(girl3);

		var boyaa = new createjs.Bitmap(this.queue.getResult("boyaa"));
		boyaa.x = 220, boyaa.y = 890;
		this.el.addChild(boyaa);

		this.stage.update();
	}
});