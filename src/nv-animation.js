/**
 *  @file       nv-animation.js
 *  @version    1.1
 *  @date       2017-05-16
 *  @author     VO, Nhu-Hoai Robert <nhuhoai.vo@nhuvo.ch>
 *  @copyright  NhuVo
 *  @brief      Create NV logo animation
 *  @details    Require fabric.js library
 */

function NV_animation_waiting(id, size) {
  var container = document.getElementById(id);
  var logo_size = Math.floor(size / Math.sqrt(2));
  
  var wrapper = document.createElement("div");
  wrapper.style.position = "relative";
  wrapper.style.width = container.offsetWidth + "px";
  wrapper.style.height = size + "px";
  wrapper.style.padding = "5px 0";
  container.insertBefore(wrapper, container.childNodes[0]);
  
  var canvas = document.createElement("canvas");
  var C = new fabric.Canvas(canvas);
  C.setWidth(size);
  C.setHeight(size);
  canvas.style.width = size + "px";
  canvas.style.height = size + "px";
  canvas.style.position = "relative";
  canvas.style.margin = "0 auto";
  canvas.style.left = ((container.offsetWidth / 2) - Math.floor(size / 2)) + "px";
  wrapper.insertBefore(canvas, wrapper.childNodes[0]);
  
  var ratio = logo_size / 400.0;
  var N = makeN(ratio, Math.floor(size / 2), Math.floor(size / 2), 1);
  var V = makeV(ratio, Math.floor(size / 2), Math.floor(size / 2), 1);
  
  C.add(N, V);
  
  var count = 1;
  var turnLogo = function() {
    N.animate({
      angle: 360 * count
    }, {
      duration: 1200,
      onChange: C.renderAll.bind(C),
      onComplete: function() {

      },
      easing: function (t, b, c, d) {return c*t/d + b;}
    });

    V.animate({
      angle: 360 * count
    }, {
      duration: 1200,
      onChange: C.renderAll.bind(C),
      onComplete: function() {
        turnLogo();
      },
      easing: function (t, b, c, d) {return c*t/d + b;}
    });
    
    count++;
  };
  
  turnLogo();
}

function NV_animation_welcome(id) {
  var container = document.getElementById(id);
  container.style.overflowX = "hidden";
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
  wrapper.style.height = (canvas_height + 20) + "px";
  wrapper.style.padding = "10px 0";
  container.insertBefore(wrapper, container.childNodes[0]);
  
  var canvas = document.createElement("canvas");
  var C = new fabric.Canvas(canvas);
  C.setWidth(canvas_width);
  C.setHeight(canvas_height);
  canvas.style.width = canvas_width + "px";
  canvas.style.height = canvas_height + "px";
  canvas.style.position = "absolute";
  canvas.style.top = "10px";
  canvas.style.left = ((container.offsetWidth / 2) - Math.floor(canvas_width / 2)) + "px";
  wrapper.insertBefore(canvas, wrapper.childNodes[0]);
  
  var N = makeN(ratio, Math.floor(canvas_height / 2), Math.floor(canvas_height / 2), 0);
  var V = makeV(ratio, Math.floor(canvas_height / 2), Math.floor(canvas_height / 2) + (2 * canvas_height), 0);
  
  C.add(N, V);
  
  N.animate({
    left: Math.floor(canvas_height / 2) + canvas_height,
    opacity: 1
  }, {
    duration: 2200,
    onChange: C.renderAll.bind(C),
    onComplete: function() {

    },
    easing: fabric.util.ease["easeOutSine"]
  });

  V.animate({
    left: Math.floor(canvas_height / 2) + canvas_height,
    opacity: 1
  }, {
    duration: 2200,
    onChange: C.renderAll.bind(C),
    onComplete: function() {
      N.animate({
        angle: -45
      }, {
        duration: 2500,
        onChange: C.renderAll.bind(C),
        onComplete: function() {

        },
        easing: fabric.util.ease["easeOutSine"]
      });

      V.animate({
        angle: -45
      }, {
        duration: 2500,
        onChange: C.renderAll.bind(C),
        onComplete: function() {
          
        },
        easing: fabric.util.ease["easeOutSine"]
      });
    },
    easing: fabric.util.ease["easeOutSine"]
  });
}

function makeN(ratio, top, left, opacity) {
  return new fabric.Polygon([
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
    top: top,
    left: left,
    fill: "#FA0",
    originX: 'center',
    originY: 'center',
    opacity: opacity
  });
}

function makeV(ratio, top, left, opacity) {
  return new fabric.Polygon([
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
    top: top,
    left: left,
    originX: 'center',
    originY: 'center',
    fill: "#07F",
    opacity: opacity
  });
}
