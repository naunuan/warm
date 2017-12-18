//rem 动态获取html的 font-size
~function (desW) {
  //html的 font-size 计算公式 设备的宽度／设计稿的宽度*100+px
  var winW = document.documentElement.clientWidth,
    ratio = winW / desW;
  document.documentElement.style.fontSize = ratio * 100 + 'px'
}(640);

//swiper 插件
var mySwiper = new Swiper(".swiper-container", {
  //配置的参数
  direction: 'vertical',//垂直方向滑动
  loop: true,//无缝循环滚动
  onSlideChangeEnd: function (swiper) {//onSlideChangeEnd从一个slide结束到另一个slide执行
    //获取当前滑块的索引值
    var curIndex = swiper.activeIndex;//swiper与function（swiper）括号里面保持一致
    var slideAry = swiper.slides;//获取所有滑块的总数
    var targetId = 'page0';
    var total = slideAry.length;
    switch (curIndex) {
      case 0://第一张 其实是最后一张
        targetId += total - 2;
        break;
      case total - 1://最后一张 其实是第一张
        targetId += 1;
        break;
      default://中间正常
        targetId += curIndex;
    }
    [].forEach.call(slideAry, function (item, index) {
      if (curIndex === index) {//当前屏加上id其他屏id为空
        item.id = targetId
      } else {
        item.id = null
      }
    })
  }
});
/* 音乐播放器 */

var musicBox = document.querySelector('#musicBox'),
  musicAudio = document.querySelector('#musicAudio');
//定时器 控制音乐播放器延迟的时间
window.setTimeout(function () {
  musicAudio.play();

  //添加监听事件canplay检测音频有声音添加
  musicAudio.addEventListener('canplay', function () {
    musicBox.className = 'music musicMoves';
  }, false)
}, 1000);

musicBox.addEventListener('click', function () {

  if (musicAudio.paused) {//如果播放器状态暂停,让他播放
    musicAudio.play();

    musicBox.className = 'music musicMoves';

  } else {
    musicAudio.pause();

    musicBox.className = 'music';
    musicBox.style.opacity = 1;
  }
}, false);











