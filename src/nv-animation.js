/**
 *  @file       nv-animation.js
 *  @version    1.1
 *  @date       2017-05-16
 *  @author     VO, Nhu-Hoai Robert <nhuhoai.vo@nhuvo.ch>
 *  @copyright  NhuVo
 *  @brief      Create NV logo animation
 *  @details    Require fabric.js library
 */

function NV_animation_welcome(id) {
  var container = document.getElementById(id);
  var container_width = container.offsetWidth;
  if(container_width > 400) {
    container_width = 400;
  }
  var canvas_height = Math.floor(container_width * 0.7);
  var logo_size = Math.floor(canvas_height / Math.sqrt(2));
  var canvas_width = canvas_height * 3;
  var ratio = logo_size / 400.0;
  
  var wrapper = document.createElement("div");
  wrapper.style.position = "relative";
  wrapper.style.width = container.offsetWidth + "px";
  wrapper.style.height = canvas_height + "px";
  container.insertBefore(wrapper, container.childNodes[0]);
  
  var canvas = document.createElement("canvas");
  var C = new fabric.Canvas(canvas);
  C.setWidth(canvas_width);
  C.setHeight(canvas_height);
  canvas.style.width = canvas_width + "px";
  canvas.style.height = canvas_height + "px";
  canvas.style.position = "absolute";
  canvas.style.top = 0;
  canvas.style.left = (container.offsetWidth / 2) + (container_width - canvas_width) + "px";
  wrapper.insertBefore(canvas, wrapper.childNodes[0]);  
  
  var N = new fabric.Polygon([
    { x: Math.floor(0 * ratio), y: Math.floor(0 * ratio)},
    { x: Math.floor(0 * ratio), y: Math.floor(400 * ratio)},
    { x: Math.floor(100 * ratio), y: Math.floor(400 * ratio)},
    { x: Math.floor(100 * ratio), y: Math.floor(0 * ratio)},
    
    { x: Math.floor(0 * ratio), y: Math.floor(0 * ratio)},
    { x: Math.floor(275 * ratio), y: Math.floor(400 * ratio)},
    { x: Math.floor(400 * ratio), y: Math.floor(400 * ratio)},
    { x: Math.floor(400 * ratio), y: Math.floor(0 * ratio)},
    
    { x: Math.floor(300 * ratio), y: Math.floor(0 * ratio)},
    { x: Math.floor(300 * ratio), y: Math.floor(400 * ratio)},
    { x: Math.floor(400 * ratio), y: Math.floor(400 * ratio)},
    { x: Math.floor(125 * ratio), y: Math.floor(0 * ratio)}
  ], {
    top: Math.floor(canvas_height / 2),
    left: Math.floor(canvas_height / 2),
    fill: "#FA0",
    originX: 'center',
    originY: 'center',
    opacity: 0
  });

  var V = new fabric.Polygon([
    { x: Math.floor(300 * ratio), y: Math.floor(0 * ratio)},
    { x: Math.floor(400 * ratio), y: Math.floor(0 * ratio)},
    { x: Math.floor(400 * ratio), y: Math.floor(400 * ratio)},
    { x: Math.floor(300 * ratio), y: Math.floor(400 * ratio)},
    
    { x: Math.floor(300 * ratio), y: Math.floor(0 * ratio)},
    { x: Math.floor(300 * ratio), y: Math.floor(400 * ratio)},
    { x: Math.floor(275 * ratio), y: Math.floor(400 * ratio)},
    { x: Math.floor(0 * ratio), y: Math.floor(0 * ratio)},
    
    { x: Math.floor(125 * ratio), y: Math.floor(0 * ratio)},
    { x: Math.floor(400 * ratio), y: Math.floor(400 * ratio)},
    { x: Math.floor(300 * ratio), y: Math.floor(400 * ratio)}
  ], {
    top: Math.floor(canvas_height / 2),
    left: Math.floor(canvas_height / 2) + (2 * canvas_height),
    originX: 'center',
    originY: 'center',
    fill: "#07F",
    opacity: 0
  });
  
  C.add(N, V);
  
  N.animate({
    left: Math.floor(canvas_height / 2) + canvas_height,
    opacity: 1
  }, {
    duration: 1500,
    onChange: C.renderAll.bind(C),
    onComplete: function() {

    },
    easing: fabric.util.ease["easeOutSine"]
  });

  V.animate({
    left: Math.floor(canvas_height / 2) + canvas_height,
    opacity: 1
  }, {
    duration: 1500,
    onChange: C.renderAll.bind(C),
    onComplete: function() {
      N.animate({
        angle: -45
      }, {
        duration: 2000,
        onChange: C.renderAll.bind(C),
        onComplete: function() {

        },
        easing: fabric.util.ease["easeOutSine"]
      });

      V.animate({
        angle: -45
      }, {
        duration: 2000,
        onChange: C.renderAll.bind(C),
        onComplete: function() {
          
        },
        easing: fabric.util.ease["easeOutSine"]
      });
    },
    easing: fabric.util.ease["easeOutSine"]
  });
}