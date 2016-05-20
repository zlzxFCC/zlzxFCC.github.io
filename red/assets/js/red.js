(function() {
    function preloadimages(obj, cb) {
        var loaded = 0;
        var toload = 0;
        var images = obj instanceof Array ? [] : {};

        for (var i in obj) {
            toload++;
            images[i] = new Image();
            images[i].onload = load;
            images[i].onerror = load;
            images[i].onabort = load;
            images[i].src = obj[i];
        }

        function load() {
            if (++loaded >= toload) cb(images);
        }
    }

    window.game = {
         $el: {
            "grid": $(".grid"),
            "start":  $("#btn-start"),
            "over": $("#over"),
            "scuess": $(".scuess"),
            "fail": $(".fail"),
            "error":$(".error"),
            "result":$(".scuess,.fail,.error")
        },
        init: function() {
            this.$el.grid.show();
        },
        initEvent: function(unionID,pkgID) {
            var me=this;
            var tap = (!!('ontouchstart' in window || window.DocumentTouch && document instanceof DocumentTouch)) ? "click" : "click";
            me.$el.start.on(tap, function(e) {
                 // $(".loading").show();
                me.$el.over.show();
                me.$el.result.hide();
                me.getRed(unionID,pkgID);
                // me.wxpay();
            });

            $("#over").on('click', function(e) {
                var show=$(this).css("display")=="block";
                if(show) $(this).hide();
            });
             $("#btn-ticket").on('click', function(e) {
                
             });
            
        },
        getRed: function() {debugger
            var me=this;
            $(".loading").show();
            me.$el.over.show();
            me.$el.result.hide();
             var getData = Math.floor(Math.random() * (2 - 0) + 0);
                if (getData) {
                    me.$el.scuess.show();
                } else {
                    me.$el.fail.show();
                }
            $(".loading").hide();
            // setTimeout(function(){$(".loading").hide();}, 3000);
        },
        wxpay:function(){
            $.ajax({
                type: "GET",
                url: "",
                success: function(data) {
                    // prepay_id
                },
                error: function(data) {}
            });

            // 注意：此 Demo 使用 2.7 版本支付接口实现，建议使用此接口时参考微信支付相关最新文档。
            wx.chooseWXPay({
              appId:signPackage.appId,
              timestamp: signPackage.timestamp,
              nonceStr: signPackage.nonceStr,
              package: 'prepay_id=sara',
              signType: 'MD5',
              paySign: signPackage.signature,
              success: function (res) {
                var res={
                "errcode":0,
                "errmsg":"ok",
                "ticket":"bxLdikRXVbTPdHSM05e5u5sUoXNKd8-41ZO3MhKoyN5OfkWITDGgnr2fwJ0m9E8NYzWKVZvdVtaUgWvsdshFKA",
                "expires_in":7200
                };
                if(res.errmsg=="ok"){
                    // 支付成功
                }else if(res.errmsg=="cancel"){
                    // 支付过程中用户取消
                }else if(res.errmsg=="fail"){
                    // 支付失败
                }
              }
            });
        }
    }

    var imgList = ['assets/img/bg.png', 'assets/img/mailer.png', 'assets/img/share.png', 'assets/img/startBtn.png', 'assets/img/ticketBtn.png'];
    preloadimages(imgList, function() {
        $(".loading").hide();
        game.init();
    });

})(window);


