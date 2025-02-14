/**
 * @description: 音乐生成器
    var audioInstall = new AudioGen({
      // url: "https://qianduan.253923.com/ljy/test.mp3",
      // url: "https://qianduan.253923.com/ljy/m_q_suc.mp3",
      url: "https://qianduan.253923.com/ljy/orl.mp3",
      loop: false,
      autoplay: true,
      cache: true,
    });
    document.querySelector("#btnPlay").addEventListener("click", () => {
      test.play();
    });
    document.querySelector("#btnPause").addEventListener("click", () => {
      test.pause();
    });
 * @author: liejiayong(809206619@qq.com)
 * @Date: 2023-03-15 15:40:45
 */
!function(t,i){"object"==typeof exports&&"undefined"!=typeof module?module.exports=i():"function"==typeof define&&define.amd?define(i):(t="undefined"!=typeof globalThis?globalThis:t||self).AudioGen=i()}(this,(function(){"use strict";var t=function(){function t(i){this.duration=0,i=i||Object.create(null),this.opts=function(t,i){var e=Object.create(null);for(var o in t)i.hasOwnProperty(o)?e[o]=i[o]:e[o]=t[o];return e}(t.options,i),this.audio=new Audio;var e=this.opts.url;this.opts.cache&&(e+="?t="+Date.now()),this.audio.setAttribute("src",e),this.opts.loop&&this.audio.setAttribute("loop","true"),this.opts.append&&document.body.appendChild(this.audio),this.audio.volume=this.volume,this.audio.style.cssText=this.opts.domStyle,this.$btn=document.querySelector(this.opts.button),this.firstClick=!0,this.playing=!0,this._init()}return Object.defineProperty(t.prototype,"volume",{get:function(){return this.opts.volume/100},enumerable:!1,configurable:!0}),t.prototype.toggle=function(){this.audio.paused?this.audio.play():this.audio.pause()},t.prototype.play=function(){this.audio.paused&&this.audio.play()},t.prototype.pause=function(){this.audio.pause()},t.prototype.getPlayStatus=function(){return!this.audio.paused},t.prototype._changeStatus_=function(t){this.audio.currentTime>0&&this.firstClick&&(this.firstClick=!1);var i="boolean"==typeof t?t:this.getPlayStatus();this.playing=i,this.$btn&&this.$btn.classList[i?"add":"remove"](this.opts.activeCls)},t.prototype._firstPlay_=function(){this.firstClick&&this.audio.paused&&(this.firstClick=!1,this.play(),window.removeEventListener("click",this._firstPlay_))},t.prototype._init=function(){var t=this;/android/.test(navigator.userAgent)&&this.audio.setAttribute("preload","auto"),this.audio.addEventListener("abort",this._curring(this._changeStatus_,!1),!1),this.audio.addEventListener("error",this._curring(this._changeStatus_,!1),!1),this.audio.addEventListener("pause",this._curring(this._changeStatus_,!1),!1),this.audio.addEventListener("play",this._curring(this._changeStatus_,!0),!1),this.audio.onloadedmetadata=function(){return t.duration=t.audio.duration},this.$btn&&this.$btn.addEventListener("click",this.toggle.bind(this)),this.opts.autoplay&&(this.audio.setAttribute("autoplay","autoplay"),window.addEventListener("click",this._firstPlay_.bind(this)),/micromessenger/i.test(navigator.userAgent)?document.attachEvent?(document.attachEvent("WeixinJSBridgeReady",this.play.bind(this)),document.attachEvent("onWeixinJSBridgeReady",this.play.bind(this))):document.addEventListener("WeixinJSBridgeReady",this.play.bind(this),!1):this.audio.addEventListener("canplaythrough",this.play.bind(this)))},t.prototype._curring=function(t,i,e){var o=[].slice.call(arguments,1),s=this;return function(){return t.apply(s,o)}},t.options={url:"",button:".jBtnAudio",activeCls:"active",loop:!0,autoplay:!0,cache:!1,volume:50,domStyle:"position:absolute;pointer-events: none;opacity:.1;height:1px;",append:!0},t}();return t}));
