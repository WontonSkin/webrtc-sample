/*
*  Copyright (c) 2016 The WebRTC project authors. All Rights Reserved.
*
*  Use of this source code is governed by a BSD-style license
*  that can be found in the LICENSE file in the root of the source
*  tree.
*/
'use strict';

// leftVideo，为HTML媒体元素接口，HTMLMediaElement 
const leftVideo = document.getElementById('leftVideo');
const rightVideo = document.getElementById('rightVideo');


// HTMLMediaElement从父级 HTMLElement, Element, Node, 和 EventTarget 继承属性
// EventTarget.addEventListener()方法，在EventTarget上注册特定事件类型的事件处理程序
// 当浏览器能够开始播放指定的音频/视频时，会发生 canplay 事件；相关事件还有playing/play/pause等等
// 箭头函数，(参数1, 参数2, …, 参数N) => { 函数声明 }
// leftVideo.addEventListener('canplay', () => {
leftVideo.addEventListener('play', () => {
  //let 声明的变量只在 let 命令所在的代码块内有效 
  let stream;
  const fps = 0;
  
  // HTMLMediaElement.captureStream()属性，返回MediaStream对象(对实时流捕获返回的MediaStream对象)。
  if (leftVideo.captureStream) {
    stream = leftVideo.captureStream(fps);
  } else if (leftVideo.mozCaptureStream) {
    stream = leftVideo.mozCaptureStream(fps);
  } else {
    console.error('Stream capture is not supported');
    stream = null;
  }
  
  // HTMLMediaElement.srcObject 属性设定或返回一个媒体对象
  rightVideo.srcObject = stream;
});
