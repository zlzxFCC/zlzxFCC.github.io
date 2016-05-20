(function(win) {
	//确认签名已拿到
	if (typeof signPackage != "undefined") {
		wx.config({
			debug: false,
			appId: signPackage.appId,
			timestamp: signPackage.timestamp,
			nonceStr: signPackage.nonceStr,
			signature: signPackage.signature,
			jsApiList: [　'checkJsApi',
				'onMenuShareTimeline',
				'onMenuShareAppMessage',
				'onMenuShareQQ',
				'onMenuShareWeibo',
				'onMenuShareQZone',
				'chooseWXPay'
			],
			success: function(res) {
				alert(JSON.stringify(res));
			},
			fail: function(res) {
				alert(JSON.stringify(res));
			}
		});
		wxShare();
	}
})(window);

/*
 * 微信JS-SDK 分享类接口
 * @gameOver
 * @param {String} title    分享标题
 * @param {String} desc     分享描述
 * @param {String} link     分享链接
 * @param {String} imgUrl   分享图标
 * @allparam
 */
function wxShare() {
	wx.ready(function() {
		//分享给朋友
		wx.onMenuShareAppMessage({
			trigger: function(res) {
				this.title = window.shareData.tTitle;
				this.desc = window.shareData.tContent;
				this.link = window.shareData.timeLineLink;
				this.imgUrl = window.shareData.imgUrl;
			},
			success: function(res) {
				statistics("onShareFriends");
				// alert(JSON.stringify(res));
			},
			fail: function(res) {
				// alert(JSON.stringify(res));
			}
		});
		//分享到朋友圈
		wx.onMenuShareTimeline({
			trigger: function(res) {
				this.title = window.shareData.tTitle;
				this.link = window.shareData.timeLineLink;
				this.imgUrl = window.shareData.imgUrl;
			},
			success: function(res) {
				statistics("onShareCircle");
				// alert(JSON.stringify(res));
			},
			fail: function(res) {
				// alert(JSON.stringify(res));
			}
		});
		//分享到QQ
		wx.onMenuShareQQ({
			trigger: function(res) {
				this.title = window.shareData.tTitle;
				this.desc = window.shareData.tContent;
				this.link = window.shareData.timeLineLink;
				this.imgUrl = window.shareData.imgUrl;
			},
			success: function() {
				statistics("onMenuShareQQ");
			}
		});
		//分享到QQ空间
		wx.onMenuShareQZone({
			trigger: function(res) {
				this.title = window.shareData.tTitle;
				this.desc = window.shareData.tContent;
				this.link = window.shareData.timeLineLink;
				this.imgUrl = window.shareData.imgUrl;
			},
			success: function() {
				statistics("onMenuShareQZone");
			}
		});
		//分享到腾讯微博
		wx.onMenuShareWeibo({
			trigger: function(res) {
				this.title = window.shareData.tTitle;
				this.desc = window.shareData.tContent;
				this.link = window.shareData.timeLineLink;
				this.imgUrl = window.shareData.imgUrl;
			},
			success: function() {
				statistics("onMenuShareWeibo");
			}
		});
	   //微信支付
	    wx.chooseWXPay({
	      timestamp: 1414723227,
	      nonceStr: 'noncestr',
	      package: 'addition=action_id%3dgaby1234%26limit_pay%3d&bank_type=WX&body=innertest&fee_type=1&input_charset=GBK&notify_url=http%3A%2F%2F120.204.206.246%2Fcgi-bin%2Fmmsupport-bin%2Fnotifypay&out_trade_no=1414723227818375338&partner=1900000109&spbill_create_ip=127.0.0.1&total_fee=1&sign=432B647FE95C7BF73BCD177CEECBEF8D',
	      signType: 'SHA1', // 注意：新版支付接口使用 MD5 加密
	      paySign: 'bd5b1933cda6e9548862944836a9b52e8c9a2b69'
	    });
	});
}

// 判断哪种统计 cnzz , DCAgent 
function statistics(shareName) {
	if (typeof _cnz != "undefined") {

		//cnzz
		// if (shareName == "onShareCircle") {
		// 	_czc.push(['_trackEvent', '分享朋友圈']);
		// } else {
		// 	_czc.push(['_trackEvent', '分享好友']);
		// }

	} else if (typeof DCAgent != "undefined") {

		//dataeye
		if (shareName == "onShareCircle") {
			DCAgent.onEvent("share_timeline", 1, {
				userID: 'null'
			});
		} else if (shareName == "onShareFriends") {
			DCAgent.onEvent("share_friends", 1, {
				userID: 'null'
			});
		} else if (shareName == "onMenuShareQQ") {
			DCAgent.onEvent("share_timeline", 1, {
				userID: 'null'
			});
		} else if (shareName == "onMenuShareQZone") {
			DCAgent.onEvent("share_QZone", 1, {
				userID: 'null'
			});
		} else {
			DCAgent.onEvent("share_weibo", 1, {
				userID: 'null'
			});
		}

	}
}
//判断是否为微信环境
function isWeiXin() {
	var ua = window.navigator.userAgent.toLowerCase();
	if (ua.match(/MicroMessenger/i) == 'micromessenger') {
		return true;
	} else {
		return false;
	}
}