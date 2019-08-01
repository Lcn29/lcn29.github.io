(function ($) {
	var body = $('body')
	var galMenu = $('.gal-menu')

	body.on('mousedown', function (e) {
		if(e.which !== 3 && $(e.target).parents('.gal-menu').length < 1) {
			body.find('.gal-menu').stop(true, false).animate({
				opacity: 0
			}, {
				duration: 100,
				queue: false,
				complete: function() {
					$(this).css('display', 'none')
				}
			})
			$(".circle").removeClass("open")
			$(".GalMenu").delay(400).hide(0)
		}
	})

	$("#my-live-control").on('click', function (e) {

		e.preventDefault();
		e.stopPropagation();
		var target = e || window.event;
		var clickX = 0
		var docEl = document.documentElement
		if ((target.clientX || target.clientY) && document.body && document.body.scrollLeft !== null) {
			clickX= target.clientX + document.body.scrollLeft
		}
		// 确定标准兼容模式开启
		if ((target.clientX || target.clientY) && document.compatMode === 'CSS1Compat' && docEl && docEl.scrollLeft !== null) {
			clickX = target.clientX + docEl.scrollLeft
		}
		if (target.pageX || target.pageY) {
			clickX = target.pageX
		}
		var boundary = 150
		var top = target.clientY - boundary
		var left = (body[0] === e.target) ? clickX - boundary : target.clientX - boundary
		var clientHeight = docEl.clientHeight
		var clientWidth = docEl.clientWidth
		if (top < 0) {
			top = 0
		}
		if (clientHeight - target.clientY < 75) {
			top = clientHeight - 150
		}
		if (left < 0) {
			left = 0
		}
		if (body[0] === e.target) {
			if (clientWidth - clickX < 75) {
				left = clientWidth - 150
			}
		} else {
			if (clientWidth - target.clientX < 75) {
				left = clientWidth - 150
			}
		}

        // 此处值 做了特殊处理, 请根据自身进行调整
        top = top >= 520 ? 520 : top + boundary/2;
		left += 110;

		galMenu.css({
			top: top + 'px',
			left: left + 'px',
			display: 'block'
		}).stop(true, false).animate({
			opacity: 1
		}, {
			duration: 100,
			queue: false
		})
		if ($("#gal").hasClass("open")) {
			$(".circle").removeClass("open")
			$(".GalMenu").delay(400).hide(0)
		} else {
			$(".circle").addClass("open")
		}
	})

    //上一首
    $("#last-song").on("click", function(){
        ap.skipBack();
        if (ap.audio.paused) {
            $("#toggle").text("暂停");
            ap.play();
    	};
    });
    
    // 播放状态切换
    $("#toggle").on("click", function(){
    	if (!ap.audio.paused) {
            this.innerHTML = "播放";
    	} else {
    		this.innerHTML  ="暂停";
    	}
    	ap.toggle();
    });
    
    // 下一首
    $("#next-song").on("click", function(){
    	ap.skipForward();
    	if (ap.audio.paused) {
           $("#toggle").text("暂停");
           ap.play();
    	};
    });

    const musicList = [
        // again
        "https://music.163.com/song/media/outer/url?id=30953009.mp3",
        // 僕らの戦場～Freyja Solo Edition～
        "https://music.163.com/song/media/outer/url?id=455345165.mp3",
        // 超远距链接【茜色诗集】
        "https://music.163.com/song/media/outer/url?id=444803276.mp3",

        // Rolling In The Deep 
        "https://music.163.com/song/media/outer/url?id=16435051.mp3",
        // Re:make
        "https://music.163.com/song/media/outer/url?id=16794080.mp3",
        // 腐草为萤
        "https://music.163.com/song/media/outer/url?id=28308572.mp3",

        // Not Afraid 
        "https://music.163.com/song/media/outer/url?id=1378896431.mp3",
        // 創聖のアクエリオン
        "https://music.163.com/song/media/outer/url?id=558173.mp3",
        // 墨宝 古龙群侠传
        "https://music.163.com/song/media/outer/url?id=29818167.mp3",

        // Shape of You
        "https://music.163.com/song/media/outer/url?id=468882985.mp3",
        // 優しい詩
        "https://music.163.com/song/media/outer/url?id=28283406.mp3",
        // 战争世界
        "https://music.163.com/song/media/outer/url?id=445781206.mp3",

        // My Love
        "https://music.163.com/song/media/outer/url?id=2081057.mp3",
        // 「ねぇ。」
        "https://music.163.com/song/media/outer/url?id=26108696.mp3",
        // 时间飞行
        "https://music.163.com/song/media/outer/url?id=1306683696.mp3",

        // Pretty Boy
        "https://music.163.com/song/media/outer/url?id=5134011.mp3",
        //东京不太热(日语版)
        "https://music.163.com/song/media/outer/url?id=32063404.mp3",
        // 浮生
        "https://music.163.com/song/media/outer/url?id=28306692.mp3",

        // Something Just Like This
        "https://music.163.com/song/media/outer/url?id=470795480.mp3",
        // Cynic
        "https://music.163.com/song/media/outer/url?id=540085263.mp3",
        // 山外小楼夜听雨
        "https://music.163.com/song/media/outer/url?id=405597568.mp3",

        // Never Had A Dream Come True
        "https://music.163.com/song/media/outer/url?id=21784955.mp3",
        // Each and All
        "https://music.163.com/song/media/outer/url?id=26484124.mp3",
        // 小永远
        "https://music.163.com/song/media/outer/url?id=240125.mp3",

        // The Day You Went Away
        "https://music.163.com/song/media/outer/url?id=21198949.mp3",
        // Your song*
        "https://music.163.com/song/media/outer/url?id=27969933.mp3",
        // 我
        "https://music.163.com/song/media/outer/url?id=209529.mp3",

         // Numb
        "https://music.163.com/song/media/outer/url?id=4153366.mp3",
        // Wonderful Wonder World
        "https://music.163.com/song/media/outer/url?id=29583959.mp3",
        // 九连环-乡愁夜南
        "https://music.163.com/song/media/outer/url?id=464555697.mp3",

    ];

    // 打乱随机播放
    var newArr = shuffle(musicList);
    var audioArr = [];
    newArr.forEach(function(item, index){  
        var temp = {
        	url : item
        };
        audioArr[index] = temp;
    });

    // 音乐播放列表
	const ap = new APlayer({
        container: document.getElementById('music-control'),
        mini: true,
        autoplay: false,
        audio: audioArr
    });

})($)


function shuffle (arr) {
  if (!Array.isArray(arr)) { 
  	return [];
  }

  var len = Math.floor(Math.random() * (arr.length - 1)) + 1;
  return arr.slice(len).concat(arr.slice(0, len));
}