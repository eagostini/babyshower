webpackJsonp([1],{

/***/ "./node_modules/particles.js/particles.js":
/***/ (function(module, exports) {

/* -----------------------------------------------
/* Author : Vincent Garreau  - vincentgarreau.com
/* MIT license: http://opensource.org/licenses/MIT
/* Demo / Generator : vincentgarreau.com/particles.js
/* GitHub : github.com/VincentGarreau/particles.js
/* How to use? : Check the GitHub README
/* v2.0.0
/* ----------------------------------------------- */

var pJS = function(tag_id, params){

  var canvas_el = document.querySelector('#'+tag_id+' > .particles-js-canvas-el');

  /* particles.js variables with default values */
  this.pJS = {
    canvas: {
      el: canvas_el,
      w: canvas_el.offsetWidth,
      h: canvas_el.offsetHeight
    },
    particles: {
      number: {
        value: 400,
        density: {
          enable: true,
          value_area: 800
        }
      },
      color: {
        value: '#fff'
      },
      shape: {
        type: 'circle',
        stroke: {
          width: 0,
          color: '#ff0000'
        },
        polygon: {
          nb_sides: 5
        },
        image: {
          src: '',
          width: 100,
          height: 100
        }
      },
      opacity: {
        value: 1,
        random: false,
        anim: {
          enable: false,
          speed: 2,
          opacity_min: 0,
          sync: false
        }
      },
      size: {
        value: 20,
        random: false,
        anim: {
          enable: false,
          speed: 20,
          size_min: 0,
          sync: false
        }
      },
      line_linked: {
        enable: true,
        distance: 100,
        color: '#fff',
        opacity: 1,
        width: 1
      },
      move: {
        enable: true,
        speed: 2,
        direction: 'none',
        random: false,
        straight: false,
        out_mode: 'out',
        bounce: false,
        attract: {
          enable: false,
          rotateX: 3000,
          rotateY: 3000
        }
      },
      array: []
    },
    interactivity: {
      detect_on: 'canvas',
      events: {
        onhover: {
          enable: true,
          mode: 'grab'
        },
        onclick: {
          enable: true,
          mode: 'push'
        },
        resize: true
      },
      modes: {
        grab:{
          distance: 100,
          line_linked:{
            opacity: 1
          }
        },
        bubble:{
          distance: 200,
          size: 80,
          duration: 0.4
        },
        repulse:{
          distance: 200,
          duration: 0.4
        },
        push:{
          particles_nb: 4
        },
        remove:{
          particles_nb: 2
        }
      },
      mouse:{}
    },
    retina_detect: false,
    fn: {
      interact: {},
      modes: {},
      vendors:{}
    },
    tmp: {}
  };

  var pJS = this.pJS;

  /* params settings */
  if(params){
    Object.deepExtend(pJS, params);
  }

  pJS.tmp.obj = {
    size_value: pJS.particles.size.value,
    size_anim_speed: pJS.particles.size.anim.speed,
    move_speed: pJS.particles.move.speed,
    line_linked_distance: pJS.particles.line_linked.distance,
    line_linked_width: pJS.particles.line_linked.width,
    mode_grab_distance: pJS.interactivity.modes.grab.distance,
    mode_bubble_distance: pJS.interactivity.modes.bubble.distance,
    mode_bubble_size: pJS.interactivity.modes.bubble.size,
    mode_repulse_distance: pJS.interactivity.modes.repulse.distance
  };


  pJS.fn.retinaInit = function(){

    if(pJS.retina_detect && window.devicePixelRatio > 1){
      pJS.canvas.pxratio = window.devicePixelRatio; 
      pJS.tmp.retina = true;
    } 
    else{
      pJS.canvas.pxratio = 1;
      pJS.tmp.retina = false;
    }

    pJS.canvas.w = pJS.canvas.el.offsetWidth * pJS.canvas.pxratio;
    pJS.canvas.h = pJS.canvas.el.offsetHeight * pJS.canvas.pxratio;

    pJS.particles.size.value = pJS.tmp.obj.size_value * pJS.canvas.pxratio;
    pJS.particles.size.anim.speed = pJS.tmp.obj.size_anim_speed * pJS.canvas.pxratio;
    pJS.particles.move.speed = pJS.tmp.obj.move_speed * pJS.canvas.pxratio;
    pJS.particles.line_linked.distance = pJS.tmp.obj.line_linked_distance * pJS.canvas.pxratio;
    pJS.interactivity.modes.grab.distance = pJS.tmp.obj.mode_grab_distance * pJS.canvas.pxratio;
    pJS.interactivity.modes.bubble.distance = pJS.tmp.obj.mode_bubble_distance * pJS.canvas.pxratio;
    pJS.particles.line_linked.width = pJS.tmp.obj.line_linked_width * pJS.canvas.pxratio;
    pJS.interactivity.modes.bubble.size = pJS.tmp.obj.mode_bubble_size * pJS.canvas.pxratio;
    pJS.interactivity.modes.repulse.distance = pJS.tmp.obj.mode_repulse_distance * pJS.canvas.pxratio;

  };



  /* ---------- pJS functions - canvas ------------ */

  pJS.fn.canvasInit = function(){
    pJS.canvas.ctx = pJS.canvas.el.getContext('2d');
  };

  pJS.fn.canvasSize = function(){

    pJS.canvas.el.width = pJS.canvas.w;
    pJS.canvas.el.height = pJS.canvas.h;

    if(pJS && pJS.interactivity.events.resize){

      window.addEventListener('resize', function(){

          pJS.canvas.w = pJS.canvas.el.offsetWidth;
          pJS.canvas.h = pJS.canvas.el.offsetHeight;

          /* resize canvas */
          if(pJS.tmp.retina){
            pJS.canvas.w *= pJS.canvas.pxratio;
            pJS.canvas.h *= pJS.canvas.pxratio;
          }

          pJS.canvas.el.width = pJS.canvas.w;
          pJS.canvas.el.height = pJS.canvas.h;

          /* repaint canvas on anim disabled */
          if(!pJS.particles.move.enable){
            pJS.fn.particlesEmpty();
            pJS.fn.particlesCreate();
            pJS.fn.particlesDraw();
            pJS.fn.vendors.densityAutoParticles();
          }

        /* density particles enabled */
        pJS.fn.vendors.densityAutoParticles();

      });

    }

  };


  pJS.fn.canvasPaint = function(){
    pJS.canvas.ctx.fillRect(0, 0, pJS.canvas.w, pJS.canvas.h);
  };

  pJS.fn.canvasClear = function(){
    pJS.canvas.ctx.clearRect(0, 0, pJS.canvas.w, pJS.canvas.h);
  };


  /* --------- pJS functions - particles ----------- */

  pJS.fn.particle = function(color, opacity, position){

    /* size */
    this.radius = (pJS.particles.size.random ? Math.random() : 1) * pJS.particles.size.value;
    if(pJS.particles.size.anim.enable){
      this.size_status = false;
      this.vs = pJS.particles.size.anim.speed / 100;
      if(!pJS.particles.size.anim.sync){
        this.vs = this.vs * Math.random();
      }
    }

    /* position */
    this.x = position ? position.x : Math.random() * pJS.canvas.w;
    this.y = position ? position.y : Math.random() * pJS.canvas.h;

    /* check position  - into the canvas */
    if(this.x > pJS.canvas.w - this.radius*2) this.x = this.x - this.radius;
    else if(this.x < this.radius*2) this.x = this.x + this.radius;
    if(this.y > pJS.canvas.h - this.radius*2) this.y = this.y - this.radius;
    else if(this.y < this.radius*2) this.y = this.y + this.radius;

    /* check position - avoid overlap */
    if(pJS.particles.move.bounce){
      pJS.fn.vendors.checkOverlap(this, position);
    }

    /* color */
    this.color = {};
    if(typeof(color.value) == 'object'){

      if(color.value instanceof Array){
        var color_selected = color.value[Math.floor(Math.random() * pJS.particles.color.value.length)];
        this.color.rgb = hexToRgb(color_selected);
      }else{
        if(color.value.r != undefined && color.value.g != undefined && color.value.b != undefined){
          this.color.rgb = {
            r: color.value.r,
            g: color.value.g,
            b: color.value.b
          }
        }
        if(color.value.h != undefined && color.value.s != undefined && color.value.l != undefined){
          this.color.hsl = {
            h: color.value.h,
            s: color.value.s,
            l: color.value.l
          }
        }
      }

    }
    else if(color.value == 'random'){
      this.color.rgb = {
        r: (Math.floor(Math.random() * (255 - 0 + 1)) + 0),
        g: (Math.floor(Math.random() * (255 - 0 + 1)) + 0),
        b: (Math.floor(Math.random() * (255 - 0 + 1)) + 0)
      }
    }
    else if(typeof(color.value) == 'string'){
      this.color = color;
      this.color.rgb = hexToRgb(this.color.value);
    }

    /* opacity */
    this.opacity = (pJS.particles.opacity.random ? Math.random() : 1) * pJS.particles.opacity.value;
    if(pJS.particles.opacity.anim.enable){
      this.opacity_status = false;
      this.vo = pJS.particles.opacity.anim.speed / 100;
      if(!pJS.particles.opacity.anim.sync){
        this.vo = this.vo * Math.random();
      }
    }

    /* animation - velocity for speed */
    var velbase = {}
    switch(pJS.particles.move.direction){
      case 'top':
        velbase = { x:0, y:-1 };
      break;
      case 'top-right':
        velbase = { x:0.5, y:-0.5 };
      break;
      case 'right':
        velbase = { x:1, y:-0 };
      break;
      case 'bottom-right':
        velbase = { x:0.5, y:0.5 };
      break;
      case 'bottom':
        velbase = { x:0, y:1 };
      break;
      case 'bottom-left':
        velbase = { x:-0.5, y:1 };
      break;
      case 'left':
        velbase = { x:-1, y:0 };
      break;
      case 'top-left':
        velbase = { x:-0.5, y:-0.5 };
      break;
      default:
        velbase = { x:0, y:0 };
      break;
    }

    if(pJS.particles.move.straight){
      this.vx = velbase.x;
      this.vy = velbase.y;
      if(pJS.particles.move.random){
        this.vx = this.vx * (Math.random());
        this.vy = this.vy * (Math.random());
      }
    }else{
      this.vx = velbase.x + Math.random()-0.5;
      this.vy = velbase.y + Math.random()-0.5;
    }

    // var theta = 2.0 * Math.PI * Math.random();
    // this.vx = Math.cos(theta);
    // this.vy = Math.sin(theta);

    this.vx_i = this.vx;
    this.vy_i = this.vy;

    

    /* if shape is image */

    var shape_type = pJS.particles.shape.type;
    if(typeof(shape_type) == 'object'){
      if(shape_type instanceof Array){
        var shape_selected = shape_type[Math.floor(Math.random() * shape_type.length)];
        this.shape = shape_selected;
      }
    }else{
      this.shape = shape_type;
    }

    if(this.shape == 'image'){
      var sh = pJS.particles.shape;
      this.img = {
        src: sh.image.src,
        ratio: sh.image.width / sh.image.height
      }
      if(!this.img.ratio) this.img.ratio = 1;
      if(pJS.tmp.img_type == 'svg' && pJS.tmp.source_svg != undefined){
        pJS.fn.vendors.createSvgImg(this);
        if(pJS.tmp.pushing){
          this.img.loaded = false;
        }
      }
    }

    

  };


  pJS.fn.particle.prototype.draw = function() {

    var p = this;

    if(p.radius_bubble != undefined){
      var radius = p.radius_bubble; 
    }else{
      var radius = p.radius;
    }

    if(p.opacity_bubble != undefined){
      var opacity = p.opacity_bubble;
    }else{
      var opacity = p.opacity;
    }

    if(p.color.rgb){
      var color_value = 'rgba('+p.color.rgb.r+','+p.color.rgb.g+','+p.color.rgb.b+','+opacity+')';
    }else{
      var color_value = 'hsla('+p.color.hsl.h+','+p.color.hsl.s+'%,'+p.color.hsl.l+'%,'+opacity+')';
    }

    pJS.canvas.ctx.fillStyle = color_value;
    pJS.canvas.ctx.beginPath();

    switch(p.shape){

      case 'circle':
        pJS.canvas.ctx.arc(p.x, p.y, radius, 0, Math.PI * 2, false);
      break;

      case 'edge':
        pJS.canvas.ctx.rect(p.x-radius, p.y-radius, radius*2, radius*2);
      break;

      case 'triangle':
        pJS.fn.vendors.drawShape(pJS.canvas.ctx, p.x-radius, p.y+radius / 1.66, radius*2, 3, 2);
      break;

      case 'polygon':
        pJS.fn.vendors.drawShape(
          pJS.canvas.ctx,
          p.x - radius / (pJS.particles.shape.polygon.nb_sides/3.5), // startX
          p.y - radius / (2.66/3.5), // startY
          radius*2.66 / (pJS.particles.shape.polygon.nb_sides/3), // sideLength
          pJS.particles.shape.polygon.nb_sides, // sideCountNumerator
          1 // sideCountDenominator
        );
      break;

      case 'star':
        pJS.fn.vendors.drawShape(
          pJS.canvas.ctx,
          p.x - radius*2 / (pJS.particles.shape.polygon.nb_sides/4), // startX
          p.y - radius / (2*2.66/3.5), // startY
          radius*2*2.66 / (pJS.particles.shape.polygon.nb_sides/3), // sideLength
          pJS.particles.shape.polygon.nb_sides, // sideCountNumerator
          2 // sideCountDenominator
        );
      break;

      case 'image':

        function draw(){
          pJS.canvas.ctx.drawImage(
            img_obj,
            p.x-radius,
            p.y-radius,
            radius*2,
            radius*2 / p.img.ratio
          );
        }

        if(pJS.tmp.img_type == 'svg'){
          var img_obj = p.img.obj;
        }else{
          var img_obj = pJS.tmp.img_obj;
        }

        if(img_obj){
          draw();
        }

      break;

    }

    pJS.canvas.ctx.closePath();

    if(pJS.particles.shape.stroke.width > 0){
      pJS.canvas.ctx.strokeStyle = pJS.particles.shape.stroke.color;
      pJS.canvas.ctx.lineWidth = pJS.particles.shape.stroke.width;
      pJS.canvas.ctx.stroke();
    }
    
    pJS.canvas.ctx.fill();
    
  };


  pJS.fn.particlesCreate = function(){
    for(var i = 0; i < pJS.particles.number.value; i++) {
      pJS.particles.array.push(new pJS.fn.particle(pJS.particles.color, pJS.particles.opacity.value));
    }
  };

  pJS.fn.particlesUpdate = function(){

    for(var i = 0; i < pJS.particles.array.length; i++){

      /* the particle */
      var p = pJS.particles.array[i];

      // var d = ( dx = pJS.interactivity.mouse.click_pos_x - p.x ) * dx + ( dy = pJS.interactivity.mouse.click_pos_y - p.y ) * dy;
      // var f = -BANG_SIZE / d;
      // if ( d < BANG_SIZE ) {
      //     var t = Math.atan2( dy, dx );
      //     p.vx = f * Math.cos(t);
      //     p.vy = f * Math.sin(t);
      // }

      /* move the particle */
      if(pJS.particles.move.enable){
        var ms = pJS.particles.move.speed/2;
        p.x += p.vx * ms;
        p.y += p.vy * ms;
      }

      /* change opacity status */
      if(pJS.particles.opacity.anim.enable) {
        if(p.opacity_status == true) {
          if(p.opacity >= pJS.particles.opacity.value) p.opacity_status = false;
          p.opacity += p.vo;
        }else {
          if(p.opacity <= pJS.particles.opacity.anim.opacity_min) p.opacity_status = true;
          p.opacity -= p.vo;
        }
        if(p.opacity < 0) p.opacity = 0;
      }

      /* change size */
      if(pJS.particles.size.anim.enable){
        if(p.size_status == true){
          if(p.radius >= pJS.particles.size.value) p.size_status = false;
          p.radius += p.vs;
        }else{
          if(p.radius <= pJS.particles.size.anim.size_min) p.size_status = true;
          p.radius -= p.vs;
        }
        if(p.radius < 0) p.radius = 0;
      }

      /* change particle position if it is out of canvas */
      if(pJS.particles.move.out_mode == 'bounce'){
        var new_pos = {
          x_left: p.radius,
          x_right:  pJS.canvas.w,
          y_top: p.radius,
          y_bottom: pJS.canvas.h
        }
      }else{
        var new_pos = {
          x_left: -p.radius,
          x_right: pJS.canvas.w + p.radius,
          y_top: -p.radius,
          y_bottom: pJS.canvas.h + p.radius
        }
      }

      if(p.x - p.radius > pJS.canvas.w){
        p.x = new_pos.x_left;
        p.y = Math.random() * pJS.canvas.h;
      }
      else if(p.x + p.radius < 0){
        p.x = new_pos.x_right;
        p.y = Math.random() * pJS.canvas.h;
      }
      if(p.y - p.radius > pJS.canvas.h){
        p.y = new_pos.y_top;
        p.x = Math.random() * pJS.canvas.w;
      }
      else if(p.y + p.radius < 0){
        p.y = new_pos.y_bottom;
        p.x = Math.random() * pJS.canvas.w;
      }

      /* out of canvas modes */
      switch(pJS.particles.move.out_mode){
        case 'bounce':
          if (p.x + p.radius > pJS.canvas.w) p.vx = -p.vx;
          else if (p.x - p.radius < 0) p.vx = -p.vx;
          if (p.y + p.radius > pJS.canvas.h) p.vy = -p.vy;
          else if (p.y - p.radius < 0) p.vy = -p.vy;
        break;
      }

      /* events */
      if(isInArray('grab', pJS.interactivity.events.onhover.mode)){
        pJS.fn.modes.grabParticle(p);
      }

      if(isInArray('bubble', pJS.interactivity.events.onhover.mode) || isInArray('bubble', pJS.interactivity.events.onclick.mode)){
        pJS.fn.modes.bubbleParticle(p);
      }

      if(isInArray('repulse', pJS.interactivity.events.onhover.mode) || isInArray('repulse', pJS.interactivity.events.onclick.mode)){
        pJS.fn.modes.repulseParticle(p);
      }

      /* interaction auto between particles */
      if(pJS.particles.line_linked.enable || pJS.particles.move.attract.enable){
        for(var j = i + 1; j < pJS.particles.array.length; j++){
          var p2 = pJS.particles.array[j];

          /* link particles */
          if(pJS.particles.line_linked.enable){
            pJS.fn.interact.linkParticles(p,p2);
          }

          /* attract particles */
          if(pJS.particles.move.attract.enable){
            pJS.fn.interact.attractParticles(p,p2);
          }

          /* bounce particles */
          if(pJS.particles.move.bounce){
            pJS.fn.interact.bounceParticles(p,p2);
          }

        }
      }


    }

  };

  pJS.fn.particlesDraw = function(){

    /* clear canvas */
    pJS.canvas.ctx.clearRect(0, 0, pJS.canvas.w, pJS.canvas.h);

    /* update each particles param */
    pJS.fn.particlesUpdate();

    /* draw each particle */
    for(var i = 0; i < pJS.particles.array.length; i++){
      var p = pJS.particles.array[i];
      p.draw();
    }

  };

  pJS.fn.particlesEmpty = function(){
    pJS.particles.array = [];
  };

  pJS.fn.particlesRefresh = function(){

    /* init all */
    cancelRequestAnimFrame(pJS.fn.checkAnimFrame);
    cancelRequestAnimFrame(pJS.fn.drawAnimFrame);
    pJS.tmp.source_svg = undefined;
    pJS.tmp.img_obj = undefined;
    pJS.tmp.count_svg = 0;
    pJS.fn.particlesEmpty();
    pJS.fn.canvasClear();
    
    /* restart */
    pJS.fn.vendors.start();

  };


  /* ---------- pJS functions - particles interaction ------------ */

  pJS.fn.interact.linkParticles = function(p1, p2){

    var dx = p1.x - p2.x,
        dy = p1.y - p2.y,
        dist = Math.sqrt(dx*dx + dy*dy);

    /* draw a line between p1 and p2 if the distance between them is under the config distance */
    if(dist <= pJS.particles.line_linked.distance){

      var opacity_line = pJS.particles.line_linked.opacity - (dist / (1/pJS.particles.line_linked.opacity)) / pJS.particles.line_linked.distance;

      if(opacity_line > 0){        
        
        /* style */
        var color_line = pJS.particles.line_linked.color_rgb_line;
        pJS.canvas.ctx.strokeStyle = 'rgba('+color_line.r+','+color_line.g+','+color_line.b+','+opacity_line+')';
        pJS.canvas.ctx.lineWidth = pJS.particles.line_linked.width;
        //pJS.canvas.ctx.lineCap = 'round'; /* performance issue */
        
        /* path */
        pJS.canvas.ctx.beginPath();
        pJS.canvas.ctx.moveTo(p1.x, p1.y);
        pJS.canvas.ctx.lineTo(p2.x, p2.y);
        pJS.canvas.ctx.stroke();
        pJS.canvas.ctx.closePath();

      }

    }

  };


  pJS.fn.interact.attractParticles  = function(p1, p2){

    /* condensed particles */
    var dx = p1.x - p2.x,
        dy = p1.y - p2.y,
        dist = Math.sqrt(dx*dx + dy*dy);

    if(dist <= pJS.particles.line_linked.distance){

      var ax = dx/(pJS.particles.move.attract.rotateX*1000),
          ay = dy/(pJS.particles.move.attract.rotateY*1000);

      p1.vx -= ax;
      p1.vy -= ay;

      p2.vx += ax;
      p2.vy += ay;

    }
    

  }


  pJS.fn.interact.bounceParticles = function(p1, p2){

    var dx = p1.x - p2.x,
        dy = p1.y - p2.y,
        dist = Math.sqrt(dx*dx + dy*dy),
        dist_p = p1.radius+p2.radius;

    if(dist <= dist_p){
      p1.vx = -p1.vx;
      p1.vy = -p1.vy;

      p2.vx = -p2.vx;
      p2.vy = -p2.vy;
    }

  }


  /* ---------- pJS functions - modes events ------------ */

  pJS.fn.modes.pushParticles = function(nb, pos){

    pJS.tmp.pushing = true;

    for(var i = 0; i < nb; i++){
      pJS.particles.array.push(
        new pJS.fn.particle(
          pJS.particles.color,
          pJS.particles.opacity.value,
          {
            'x': pos ? pos.pos_x : Math.random() * pJS.canvas.w,
            'y': pos ? pos.pos_y : Math.random() * pJS.canvas.h
          }
        )
      )
      if(i == nb-1){
        if(!pJS.particles.move.enable){
          pJS.fn.particlesDraw();
        }
        pJS.tmp.pushing = false;
      }
    }

  };


  pJS.fn.modes.removeParticles = function(nb){

    pJS.particles.array.splice(0, nb);
    if(!pJS.particles.move.enable){
      pJS.fn.particlesDraw();
    }

  };


  pJS.fn.modes.bubbleParticle = function(p){

    /* on hover event */
    if(pJS.interactivity.events.onhover.enable && isInArray('bubble', pJS.interactivity.events.onhover.mode)){

      var dx_mouse = p.x - pJS.interactivity.mouse.pos_x,
          dy_mouse = p.y - pJS.interactivity.mouse.pos_y,
          dist_mouse = Math.sqrt(dx_mouse*dx_mouse + dy_mouse*dy_mouse),
          ratio = 1 - dist_mouse / pJS.interactivity.modes.bubble.distance;

      function init(){
        p.opacity_bubble = p.opacity;
        p.radius_bubble = p.radius;
      }

      /* mousemove - check ratio */
      if(dist_mouse <= pJS.interactivity.modes.bubble.distance){

        if(ratio >= 0 && pJS.interactivity.status == 'mousemove'){
          
          /* size */
          if(pJS.interactivity.modes.bubble.size != pJS.particles.size.value){

            if(pJS.interactivity.modes.bubble.size > pJS.particles.size.value){
              var size = p.radius + (pJS.interactivity.modes.bubble.size*ratio);
              if(size >= 0){
                p.radius_bubble = size;
              }
            }else{
              var dif = p.radius - pJS.interactivity.modes.bubble.size,
                  size = p.radius - (dif*ratio);
              if(size > 0){
                p.radius_bubble = size;
              }else{
                p.radius_bubble = 0;
              }
            }

          }

          /* opacity */
          if(pJS.interactivity.modes.bubble.opacity != pJS.particles.opacity.value){

            if(pJS.interactivity.modes.bubble.opacity > pJS.particles.opacity.value){
              var opacity = pJS.interactivity.modes.bubble.opacity*ratio;
              if(opacity > p.opacity && opacity <= pJS.interactivity.modes.bubble.opacity){
                p.opacity_bubble = opacity;
              }
            }else{
              var opacity = p.opacity - (pJS.particles.opacity.value-pJS.interactivity.modes.bubble.opacity)*ratio;
              if(opacity < p.opacity && opacity >= pJS.interactivity.modes.bubble.opacity){
                p.opacity_bubble = opacity;
              }
            }

          }

        }

      }else{
        init();
      }


      /* mouseleave */
      if(pJS.interactivity.status == 'mouseleave'){
        init();
      }
    
    }

    /* on click event */
    else if(pJS.interactivity.events.onclick.enable && isInArray('bubble', pJS.interactivity.events.onclick.mode)){


      if(pJS.tmp.bubble_clicking){
        var dx_mouse = p.x - pJS.interactivity.mouse.click_pos_x,
            dy_mouse = p.y - pJS.interactivity.mouse.click_pos_y,
            dist_mouse = Math.sqrt(dx_mouse*dx_mouse + dy_mouse*dy_mouse),
            time_spent = (new Date().getTime() - pJS.interactivity.mouse.click_time)/1000;

        if(time_spent > pJS.interactivity.modes.bubble.duration){
          pJS.tmp.bubble_duration_end = true;
        }

        if(time_spent > pJS.interactivity.modes.bubble.duration*2){
          pJS.tmp.bubble_clicking = false;
          pJS.tmp.bubble_duration_end = false;
        }
      }


      function process(bubble_param, particles_param, p_obj_bubble, p_obj, id){

        if(bubble_param != particles_param){

          if(!pJS.tmp.bubble_duration_end){
            if(dist_mouse <= pJS.interactivity.modes.bubble.distance){
              if(p_obj_bubble != undefined) var obj = p_obj_bubble;
              else var obj = p_obj;
              if(obj != bubble_param){
                var value = p_obj - (time_spent * (p_obj - bubble_param) / pJS.interactivity.modes.bubble.duration);
                if(id == 'size') p.radius_bubble = value;
                if(id == 'opacity') p.opacity_bubble = value;
              }
            }else{
              if(id == 'size') p.radius_bubble = undefined;
              if(id == 'opacity') p.opacity_bubble = undefined;
            }
          }else{
            if(p_obj_bubble != undefined){
              var value_tmp = p_obj - (time_spent * (p_obj - bubble_param) / pJS.interactivity.modes.bubble.duration),
                  dif = bubble_param - value_tmp;
                  value = bubble_param + dif;
              if(id == 'size') p.radius_bubble = value;
              if(id == 'opacity') p.opacity_bubble = value;
            }
          }

        }

      }

      if(pJS.tmp.bubble_clicking){
        /* size */
        process(pJS.interactivity.modes.bubble.size, pJS.particles.size.value, p.radius_bubble, p.radius, 'size');
        /* opacity */
        process(pJS.interactivity.modes.bubble.opacity, pJS.particles.opacity.value, p.opacity_bubble, p.opacity, 'opacity');
      }

    }

  };


  pJS.fn.modes.repulseParticle = function(p){

    if(pJS.interactivity.events.onhover.enable && isInArray('repulse', pJS.interactivity.events.onhover.mode) && pJS.interactivity.status == 'mousemove') {

      var dx_mouse = p.x - pJS.interactivity.mouse.pos_x,
          dy_mouse = p.y - pJS.interactivity.mouse.pos_y,
          dist_mouse = Math.sqrt(dx_mouse*dx_mouse + dy_mouse*dy_mouse);

      var normVec = {x: dx_mouse/dist_mouse, y: dy_mouse/dist_mouse},
          repulseRadius = pJS.interactivity.modes.repulse.distance,
          velocity = 100,
          repulseFactor = clamp((1/repulseRadius)*(-1*Math.pow(dist_mouse/repulseRadius,2)+1)*repulseRadius*velocity, 0, 50);
      
      var pos = {
        x: p.x + normVec.x * repulseFactor,
        y: p.y + normVec.y * repulseFactor
      }

      if(pJS.particles.move.out_mode == 'bounce'){
        if(pos.x - p.radius > 0 && pos.x + p.radius < pJS.canvas.w) p.x = pos.x;
        if(pos.y - p.radius > 0 && pos.y + p.radius < pJS.canvas.h) p.y = pos.y;
      }else{
        p.x = pos.x;
        p.y = pos.y;
      }
    
    }


    else if(pJS.interactivity.events.onclick.enable && isInArray('repulse', pJS.interactivity.events.onclick.mode)) {

      if(!pJS.tmp.repulse_finish){
        pJS.tmp.repulse_count++;
        if(pJS.tmp.repulse_count == pJS.particles.array.length){
          pJS.tmp.repulse_finish = true;
        }
      }

      if(pJS.tmp.repulse_clicking){

        var repulseRadius = Math.pow(pJS.interactivity.modes.repulse.distance/6, 3);

        var dx = pJS.interactivity.mouse.click_pos_x - p.x,
            dy = pJS.interactivity.mouse.click_pos_y - p.y,
            d = dx*dx + dy*dy;

        var force = -repulseRadius / d * 1;

        function process(){

          var f = Math.atan2(dy,dx);
          p.vx = force * Math.cos(f);
          p.vy = force * Math.sin(f);

          if(pJS.particles.move.out_mode == 'bounce'){
            var pos = {
              x: p.x + p.vx,
              y: p.y + p.vy
            }
            if (pos.x + p.radius > pJS.canvas.w) p.vx = -p.vx;
            else if (pos.x - p.radius < 0) p.vx = -p.vx;
            if (pos.y + p.radius > pJS.canvas.h) p.vy = -p.vy;
            else if (pos.y - p.radius < 0) p.vy = -p.vy;
          }

        }

        // default
        if(d <= repulseRadius){
          process();
        }

        // bang - slow motion mode
        // if(!pJS.tmp.repulse_finish){
        //   if(d <= repulseRadius){
        //     process();
        //   }
        // }else{
        //   process();
        // }
        

      }else{

        if(pJS.tmp.repulse_clicking == false){

          p.vx = p.vx_i;
          p.vy = p.vy_i;
        
        }

      }

    }

  }


  pJS.fn.modes.grabParticle = function(p){

    if(pJS.interactivity.events.onhover.enable && pJS.interactivity.status == 'mousemove'){

      var dx_mouse = p.x - pJS.interactivity.mouse.pos_x,
          dy_mouse = p.y - pJS.interactivity.mouse.pos_y,
          dist_mouse = Math.sqrt(dx_mouse*dx_mouse + dy_mouse*dy_mouse);

      /* draw a line between the cursor and the particle if the distance between them is under the config distance */
      if(dist_mouse <= pJS.interactivity.modes.grab.distance){

        var opacity_line = pJS.interactivity.modes.grab.line_linked.opacity - (dist_mouse / (1/pJS.interactivity.modes.grab.line_linked.opacity)) / pJS.interactivity.modes.grab.distance;

        if(opacity_line > 0){

          /* style */
          var color_line = pJS.particles.line_linked.color_rgb_line;
          pJS.canvas.ctx.strokeStyle = 'rgba('+color_line.r+','+color_line.g+','+color_line.b+','+opacity_line+')';
          pJS.canvas.ctx.lineWidth = pJS.particles.line_linked.width;
          //pJS.canvas.ctx.lineCap = 'round'; /* performance issue */
          
          /* path */
          pJS.canvas.ctx.beginPath();
          pJS.canvas.ctx.moveTo(p.x, p.y);
          pJS.canvas.ctx.lineTo(pJS.interactivity.mouse.pos_x, pJS.interactivity.mouse.pos_y);
          pJS.canvas.ctx.stroke();
          pJS.canvas.ctx.closePath();

        }

      }

    }

  };



  /* ---------- pJS functions - vendors ------------ */

  pJS.fn.vendors.eventsListeners = function(){

    /* events target element */
    if(pJS.interactivity.detect_on == 'window'){
      pJS.interactivity.el = window;
    }else{
      pJS.interactivity.el = pJS.canvas.el;
    }


    /* detect mouse pos - on hover / click event */
    if(pJS.interactivity.events.onhover.enable || pJS.interactivity.events.onclick.enable){

      /* el on mousemove */
      pJS.interactivity.el.addEventListener('mousemove', function(e){

        if(pJS.interactivity.el == window){
          var pos_x = e.clientX,
              pos_y = e.clientY;
        }
        else{
          var pos_x = e.offsetX || e.clientX,
              pos_y = e.offsetY || e.clientY;
        }

        pJS.interactivity.mouse.pos_x = pos_x;
        pJS.interactivity.mouse.pos_y = pos_y;

        if(pJS.tmp.retina){
          pJS.interactivity.mouse.pos_x *= pJS.canvas.pxratio;
          pJS.interactivity.mouse.pos_y *= pJS.canvas.pxratio;
        }

        pJS.interactivity.status = 'mousemove';

      });

      /* el on onmouseleave */
      pJS.interactivity.el.addEventListener('mouseleave', function(e){

        pJS.interactivity.mouse.pos_x = null;
        pJS.interactivity.mouse.pos_y = null;
        pJS.interactivity.status = 'mouseleave';

      });

    }

    /* on click event */
    if(pJS.interactivity.events.onclick.enable){

      pJS.interactivity.el.addEventListener('click', function(){

        pJS.interactivity.mouse.click_pos_x = pJS.interactivity.mouse.pos_x;
        pJS.interactivity.mouse.click_pos_y = pJS.interactivity.mouse.pos_y;
        pJS.interactivity.mouse.click_time = new Date().getTime();

        if(pJS.interactivity.events.onclick.enable){

          switch(pJS.interactivity.events.onclick.mode){

            case 'push':
              if(pJS.particles.move.enable){
                pJS.fn.modes.pushParticles(pJS.interactivity.modes.push.particles_nb, pJS.interactivity.mouse);
              }else{
                if(pJS.interactivity.modes.push.particles_nb == 1){
                  pJS.fn.modes.pushParticles(pJS.interactivity.modes.push.particles_nb, pJS.interactivity.mouse);
                }
                else if(pJS.interactivity.modes.push.particles_nb > 1){
                  pJS.fn.modes.pushParticles(pJS.interactivity.modes.push.particles_nb);
                }
              }
            break;

            case 'remove':
              pJS.fn.modes.removeParticles(pJS.interactivity.modes.remove.particles_nb);
            break;

            case 'bubble':
              pJS.tmp.bubble_clicking = true;
            break;

            case 'repulse':
              pJS.tmp.repulse_clicking = true;
              pJS.tmp.repulse_count = 0;
              pJS.tmp.repulse_finish = false;
              setTimeout(function(){
                pJS.tmp.repulse_clicking = false;
              }, pJS.interactivity.modes.repulse.duration*1000)
            break;

          }

        }

      });
        
    }


  };

  pJS.fn.vendors.densityAutoParticles = function(){

    if(pJS.particles.number.density.enable){

      /* calc area */
      var area = pJS.canvas.el.width * pJS.canvas.el.height / 1000;
      if(pJS.tmp.retina){
        area = area/(pJS.canvas.pxratio*2);
      }

      /* calc number of particles based on density area */
      var nb_particles = area * pJS.particles.number.value / pJS.particles.number.density.value_area;

      /* add or remove X particles */
      var missing_particles = pJS.particles.array.length - nb_particles;
      if(missing_particles < 0) pJS.fn.modes.pushParticles(Math.abs(missing_particles));
      else pJS.fn.modes.removeParticles(missing_particles);

    }

  };


  pJS.fn.vendors.checkOverlap = function(p1, position){
    for(var i = 0; i < pJS.particles.array.length; i++){
      var p2 = pJS.particles.array[i];

      var dx = p1.x - p2.x,
          dy = p1.y - p2.y,
          dist = Math.sqrt(dx*dx + dy*dy);

      if(dist <= p1.radius + p2.radius){
        p1.x = position ? position.x : Math.random() * pJS.canvas.w;
        p1.y = position ? position.y : Math.random() * pJS.canvas.h;
        pJS.fn.vendors.checkOverlap(p1);
      }
    }
  };


  pJS.fn.vendors.createSvgImg = function(p){

    /* set color to svg element */
    var svgXml = pJS.tmp.source_svg,
        rgbHex = /#([0-9A-F]{3,6})/gi,
        coloredSvgXml = svgXml.replace(rgbHex, function (m, r, g, b) {
          if(p.color.rgb){
            var color_value = 'rgba('+p.color.rgb.r+','+p.color.rgb.g+','+p.color.rgb.b+','+p.opacity+')';
          }else{
            var color_value = 'hsla('+p.color.hsl.h+','+p.color.hsl.s+'%,'+p.color.hsl.l+'%,'+p.opacity+')';
          }
          return color_value;
        });

    /* prepare to create img with colored svg */
    var svg = new Blob([coloredSvgXml], {type: 'image/svg+xml;charset=utf-8'}),
        DOMURL = window.URL || window.webkitURL || window,
        url = DOMURL.createObjectURL(svg);

    /* create particle img obj */
    var img = new Image();
    img.addEventListener('load', function(){
      p.img.obj = img;
      p.img.loaded = true;
      DOMURL.revokeObjectURL(url);
      pJS.tmp.count_svg++;
    });
    img.src = url;

  };


  pJS.fn.vendors.destroypJS = function(){
    cancelAnimationFrame(pJS.fn.drawAnimFrame);
    canvas_el.remove();
    pJSDom = null;
  };


  pJS.fn.vendors.drawShape = function(c, startX, startY, sideLength, sideCountNumerator, sideCountDenominator){

    // By Programming Thomas - https://programmingthomas.wordpress.com/2013/04/03/n-sided-shapes/
    var sideCount = sideCountNumerator * sideCountDenominator;
    var decimalSides = sideCountNumerator / sideCountDenominator;
    var interiorAngleDegrees = (180 * (decimalSides - 2)) / decimalSides;
    var interiorAngle = Math.PI - Math.PI * interiorAngleDegrees / 180; // convert to radians
    c.save();
    c.beginPath();
    c.translate(startX, startY);
    c.moveTo(0,0);
    for (var i = 0; i < sideCount; i++) {
      c.lineTo(sideLength,0);
      c.translate(sideLength,0);
      c.rotate(interiorAngle);
    }
    //c.stroke();
    c.fill();
    c.restore();

  };

  pJS.fn.vendors.exportImg = function(){
    window.open(pJS.canvas.el.toDataURL('image/png'), '_blank');
  };


  pJS.fn.vendors.loadImg = function(type){

    pJS.tmp.img_error = undefined;

    if(pJS.particles.shape.image.src != ''){

      if(type == 'svg'){

        var xhr = new XMLHttpRequest();
        xhr.open('GET', pJS.particles.shape.image.src);
        xhr.onreadystatechange = function (data) {
          if(xhr.readyState == 4){
            if(xhr.status == 200){
              pJS.tmp.source_svg = data.currentTarget.response;
              pJS.fn.vendors.checkBeforeDraw();
            }else{
              console.log('Error pJS - Image not found');
              pJS.tmp.img_error = true;
            }
          }
        }
        xhr.send();

      }else{

        var img = new Image();
        img.addEventListener('load', function(){
          pJS.tmp.img_obj = img;
          pJS.fn.vendors.checkBeforeDraw();
        });
        img.src = pJS.particles.shape.image.src;

      }

    }else{
      console.log('Error pJS - No image.src');
      pJS.tmp.img_error = true;
    }

  };


  pJS.fn.vendors.draw = function(){

    if(pJS.particles.shape.type == 'image'){

      if(pJS.tmp.img_type == 'svg'){

        if(pJS.tmp.count_svg >= pJS.particles.number.value){
          pJS.fn.particlesDraw();
          if(!pJS.particles.move.enable) cancelRequestAnimFrame(pJS.fn.drawAnimFrame);
          else pJS.fn.drawAnimFrame = requestAnimFrame(pJS.fn.vendors.draw);
        }else{
          //console.log('still loading...');
          if(!pJS.tmp.img_error) pJS.fn.drawAnimFrame = requestAnimFrame(pJS.fn.vendors.draw);
        }

      }else{

        if(pJS.tmp.img_obj != undefined){
          pJS.fn.particlesDraw();
          if(!pJS.particles.move.enable) cancelRequestAnimFrame(pJS.fn.drawAnimFrame);
          else pJS.fn.drawAnimFrame = requestAnimFrame(pJS.fn.vendors.draw);
        }else{
          if(!pJS.tmp.img_error) pJS.fn.drawAnimFrame = requestAnimFrame(pJS.fn.vendors.draw);
        }

      }

    }else{
      pJS.fn.particlesDraw();
      if(!pJS.particles.move.enable) cancelRequestAnimFrame(pJS.fn.drawAnimFrame);
      else pJS.fn.drawAnimFrame = requestAnimFrame(pJS.fn.vendors.draw);
    }

  };


  pJS.fn.vendors.checkBeforeDraw = function(){

    // if shape is image
    if(pJS.particles.shape.type == 'image'){

      if(pJS.tmp.img_type == 'svg' && pJS.tmp.source_svg == undefined){
        pJS.tmp.checkAnimFrame = requestAnimFrame(check);
      }else{
        //console.log('images loaded! cancel check');
        cancelRequestAnimFrame(pJS.tmp.checkAnimFrame);
        if(!pJS.tmp.img_error){
          pJS.fn.vendors.init();
          pJS.fn.vendors.draw();
        }
        
      }

    }else{
      pJS.fn.vendors.init();
      pJS.fn.vendors.draw();
    }

  };


  pJS.fn.vendors.init = function(){

    /* init canvas + particles */
    pJS.fn.retinaInit();
    pJS.fn.canvasInit();
    pJS.fn.canvasSize();
    pJS.fn.canvasPaint();
    pJS.fn.particlesCreate();
    pJS.fn.vendors.densityAutoParticles();

    /* particles.line_linked - convert hex colors to rgb */
    pJS.particles.line_linked.color_rgb_line = hexToRgb(pJS.particles.line_linked.color);

  };


  pJS.fn.vendors.start = function(){

    if(isInArray('image', pJS.particles.shape.type)){
      pJS.tmp.img_type = pJS.particles.shape.image.src.substr(pJS.particles.shape.image.src.length - 3);
      pJS.fn.vendors.loadImg(pJS.tmp.img_type);
    }else{
      pJS.fn.vendors.checkBeforeDraw();
    }

  };




  /* ---------- pJS - start ------------ */


  pJS.fn.vendors.eventsListeners();

  pJS.fn.vendors.start();
  


};

/* ---------- global functions - vendors ------------ */

Object.deepExtend = function(destination, source) {
  for (var property in source) {
    if (source[property] && source[property].constructor &&
     source[property].constructor === Object) {
      destination[property] = destination[property] || {};
      arguments.callee(destination[property], source[property]);
    } else {
      destination[property] = source[property];
    }
  }
  return destination;
};

window.requestAnimFrame = (function(){
  return  window.requestAnimationFrame ||
    window.webkitRequestAnimationFrame ||
    window.mozRequestAnimationFrame    ||
    window.oRequestAnimationFrame      ||
    window.msRequestAnimationFrame     ||
    function(callback){
      window.setTimeout(callback, 1000 / 60);
    };
})();

window.cancelRequestAnimFrame = ( function() {
  return window.cancelAnimationFrame         ||
    window.webkitCancelRequestAnimationFrame ||
    window.mozCancelRequestAnimationFrame    ||
    window.oCancelRequestAnimationFrame      ||
    window.msCancelRequestAnimationFrame     ||
    clearTimeout
} )();

function hexToRgb(hex){
  // By Tim Down - http://stackoverflow.com/a/5624139/3493650
  // Expand shorthand form (e.g. "03F") to full form (e.g. "0033FF")
  var shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
  hex = hex.replace(shorthandRegex, function(m, r, g, b) {
     return r + r + g + g + b + b;
  });
  var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result ? {
      r: parseInt(result[1], 16),
      g: parseInt(result[2], 16),
      b: parseInt(result[3], 16)
  } : null;
};

function clamp(number, min, max) {
  return Math.min(Math.max(number, min), max);
};

function isInArray(value, array) {
  return array.indexOf(value) > -1;
}


/* ---------- particles.js functions - start ------------ */

window.pJSDom = [];

window.particlesJS = function(tag_id, params){

  //console.log(params);

  /* no string id? so it's object params, and set the id with default id */
  if(typeof(tag_id) != 'string'){
    params = tag_id;
    tag_id = 'particles-js';
  }

  /* no id? set the id to default id */
  if(!tag_id){
    tag_id = 'particles-js';
  }

  /* pJS elements */
  var pJS_tag = document.getElementById(tag_id),
      pJS_canvas_class = 'particles-js-canvas-el',
      exist_canvas = pJS_tag.getElementsByClassName(pJS_canvas_class);

  /* remove canvas if exists into the pJS target tag */
  if(exist_canvas.length){
    while(exist_canvas.length > 0){
      pJS_tag.removeChild(exist_canvas[0]);
    }
  }

  /* create canvas element */
  var canvas_el = document.createElement('canvas');
  canvas_el.className = pJS_canvas_class;

  /* set size canvas */
  canvas_el.style.width = "100%";
  canvas_el.style.height = "100%";

  /* append canvas */
  var canvas = document.getElementById(tag_id).appendChild(canvas_el);

  /* launch particle.js */
  if(canvas != null){
    pJSDom.push(new pJS(tag_id, params));
  }

};

window.particlesJS.load = function(tag_id, path_config_json, callback){

  /* load json config */
  var xhr = new XMLHttpRequest();
  xhr.open('GET', path_config_json);
  xhr.onreadystatechange = function (data) {
    if(xhr.readyState == 4){
      if(xhr.status == 200){
        var params = JSON.parse(data.currentTarget.response);
        window.particlesJS(tag_id, params);
        if(callback) callback();
      }else{
        console.log('Error pJS - XMLHttpRequest status: '+xhr.status);
        console.log('Error pJS - File config not found');
      }
    }
  };
  xhr.send();

};

/***/ }),

/***/ "./resources/assets/js/app.jsx":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* WEBPACK VAR INJECTION */(function(React) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_particles_js__ = __webpack_require__("./node_modules/particles.js/particles.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_particles_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_particles_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_App_jsx__ = __webpack_require__("./resources/assets/js/components/App.jsx");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_dom__ = __webpack_require__("./node_modules/react-dom/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_dom___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react_dom__);





particlesJS('particles', {
    "particles": {
        "number": {
            "value": 25
        },
        "color": {
            "value": ["#5BD2CB", "#D25BCD"]
        },
        "opacity": {
            "value": 0.15
        },
        "size": {
            "value": 20
        },
        "line_linked": {
            "enable": false
        },
        "move": {
            "enable": true,
            "speed": 3,
            "direction": "none",
            "random": false,
            "straight": false,
            "out_mode": "out",
            "bounce": false
        }
    },
    "retina_detect": true
});

__WEBPACK_IMPORTED_MODULE_2_react_dom___default.a.render(React.createElement(__WEBPACK_IMPORTED_MODULE_1__components_App_jsx__["a" /* default */], null), document.getElementById('app'));
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("./node_modules/react/index.js")))

/***/ }),

/***/ "./resources/assets/js/components/App.jsx":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(React) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Footer_jsx__ = __webpack_require__("./resources/assets/js/components/Footer.jsx");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Host_jsx__ = __webpack_require__("./resources/assets/js/components/Host.jsx");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Information_jsx__ = __webpack_require__("./resources/assets/js/components/Information.jsx");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Main_jsx__ = __webpack_require__("./resources/assets/js/components/Main.jsx");
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }






var App = function (_React$Component) {
    _inherits(App, _React$Component);

    function App() {
        _classCallCheck(this, App);

        return _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).apply(this, arguments));
    }

    _createClass(App, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                __WEBPACK_IMPORTED_MODULE_3__Main_jsx__["a" /* default */],
                { title: 'Oh Baby!' },
                React.createElement(__WEBPACK_IMPORTED_MODULE_1__Host_jsx__["a" /* default */], { name: 'Pamella Agostini' }),
                React.createElement(__WEBPACK_IMPORTED_MODULE_2__Information_jsx__["a" /* default */], null),
                React.createElement(
                    __WEBPACK_IMPORTED_MODULE_0__Footer_jsx__["a" /* default */],
                    null,
                    'Gifts registered at ',
                    React.createElement(
                        'a',
                        { className: 'text-green', href: 'https://www.amazon.com/baby-reg/pamella-agostini-june-2018-auckland/34AUTU90EHB5C', target: '_blank' },
                        'Amazon.com'
                    )
                )
            );
        }
    }]);

    return App;
}(React.Component);

/* harmony default export */ __webpack_exports__["a"] = (App);
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("./node_modules/react/index.js")))

/***/ }),

/***/ "./resources/assets/js/components/Footer.jsx":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(React) {var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Information = function (_React$Component) {
    _inherits(Information, _React$Component);

    function Information() {
        _classCallCheck(this, Information);

        return _possibleConstructorReturn(this, (Information.__proto__ || Object.getPrototypeOf(Information)).apply(this, arguments));
    }

    _createClass(Information, [{
        key: "render",
        value: function render() {
            return React.createElement(
                "footer",
                null,
                this.props.children
            );
        }
    }]);

    return Information;
}(React.Component);

/* harmony default export */ __webpack_exports__["a"] = (Information);
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("./node_modules/react/index.js")))

/***/ }),

/***/ "./resources/assets/js/components/Host.jsx":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(React) {var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Host = function (_React$Component) {
    _inherits(Host, _React$Component);

    function Host() {
        _classCallCheck(this, Host);

        return _possibleConstructorReturn(this, (Host.__proto__ || Object.getPrototypeOf(Host)).apply(this, arguments));
    }

    _createClass(Host, [{
        key: "render",
        value: function render() {
            return React.createElement(
                "div",
                null,
                React.createElement(
                    "p",
                    { className: "m-8" },
                    "Please, join us at a baby shower in honor of"
                ),
                React.createElement(
                    "h2",
                    { className: "text-5xl text-purple-darkest" },
                    this.props.name
                )
            );
        }
    }]);

    return Host;
}(React.Component);

/* harmony default export */ __webpack_exports__["a"] = (Host);
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("./node_modules/react/index.js")))

/***/ }),

/***/ "./resources/assets/js/components/Information.jsx":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(React) {var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Information = function (_React$Component) {
    _inherits(Information, _React$Component);

    function Information() {
        _classCallCheck(this, Information);

        return _possibleConstructorReturn(this, (Information.__proto__ || Object.getPrototypeOf(Information)).apply(this, arguments));
    }

    _createClass(Information, [{
        key: "render",
        value: function render() {
            return React.createElement(
                "p",
                { className: "m-8" },
                "Sunday, 15th of April at 3pm ",
                React.createElement("br", null),
                " 27 Edgewood Way, Henderson"
            );
        }
    }]);

    return Information;
}(React.Component);

/* harmony default export */ __webpack_exports__["a"] = (Information);
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("./node_modules/react/index.js")))

/***/ }),

/***/ "./resources/assets/js/components/Main.jsx":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(React) {var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Main = function (_React$Component) {
    _inherits(Main, _React$Component);

    function Main() {
        _classCallCheck(this, Main);

        return _possibleConstructorReturn(this, (Main.__proto__ || Object.getPrototypeOf(Main)).apply(this, arguments));
    }

    _createClass(Main, [{
        key: "render",
        value: function render() {
            return React.createElement(
                "section",
                { className: "flex flex-wrap h-screen items-center justify-center" },
                React.createElement(
                    "div",
                    { className: "text-center text-xl w-128" },
                    React.createElement(
                        "h1",
                        { className: "font-coursive text-6xl lowercase text-purple-darkest" },
                        this.props.title
                    ),
                    this.props.children
                )
            );
        }
    }]);

    return Main;
}(React.Component);

/* harmony default export */ __webpack_exports__["a"] = (Main);
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("./node_modules/react/index.js")))

/***/ }),

/***/ "./resources/assets/sass/app.scss":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__("./resources/assets/js/app.jsx");
module.exports = __webpack_require__("./resources/assets/sass/app.scss");


/***/ })

},[0]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcGFydGljbGVzLmpzL3BhcnRpY2xlcy5qcyIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2FwcC5qc3giLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL0FwcC5qc3giLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL0Zvb3Rlci5qc3giLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL0hvc3QuanN4Iiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9JbmZvcm1hdGlvbi5qc3giLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL01haW4uanN4Iiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvc2Fzcy9hcHAuc2Nzcz8yODI5Il0sIm5hbWVzIjpbInBhcnRpY2xlc0pTIiwiUmVhY3RET00iLCJyZW5kZXIiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwiQXBwIiwiUmVhY3QiLCJDb21wb25lbnQiLCJJbmZvcm1hdGlvbiIsInByb3BzIiwiY2hpbGRyZW4iLCJIb3N0IiwibmFtZSIsIk1haW4iLCJ0aXRsZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0Esa0JBQWtCO0FBQ2xCLGVBQWU7QUFDZjtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBOztBQUVBO0FBQ0EsbUQ7QUFDQTtBQUNBLEs7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7OztBQUlBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUEsT0FBTzs7QUFFUDs7QUFFQTs7O0FBR0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUI7QUFDbkI7QUFDQTtBQUNBLG1CQUFtQjtBQUNuQjtBQUNBO0FBQ0EsbUJBQW1CO0FBQ25CO0FBQ0E7QUFDQSxtQkFBbUI7QUFDbkI7QUFDQTtBQUNBLG1CQUFtQjtBQUNuQjtBQUNBO0FBQ0EsbUJBQW1CO0FBQ25CO0FBQ0E7QUFDQSxtQkFBbUI7QUFDbkI7QUFDQTtBQUNBLG1CQUFtQjtBQUNuQjtBQUNBO0FBQ0EsbUJBQW1CO0FBQ25CO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOzs7O0FBSUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OztBQUlBOzs7QUFHQTs7QUFFQTs7QUFFQTtBQUNBLG1DO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7OztBQUdBO0FBQ0Esa0JBQWtCLGdDQUFnQztBQUNsRDtBQUNBO0FBQ0E7O0FBRUE7O0FBRUEsa0JBQWtCLGdDQUFnQzs7QUFFbEQ7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSwwQkFBMEIsZ0NBQWdDO0FBQzFEOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7OztBQUdBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLGtCQUFrQixnQ0FBZ0M7QUFDbEQ7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7OztBQUdBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBLDJCOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkNBQTJDOztBQUUzQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7OztBQUdBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBOzs7QUFHQTs7O0FBR0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7O0FBR0E7O0FBRUE7O0FBRUE7O0FBRUEsa0JBQWtCLFFBQVE7QUFDMUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7O0FBR0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7OztBQUdBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlO0FBQ2Y7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBLE9BQU87QUFDUDtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOzs7QUFHQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEscUJBQXFCLCtDQUErQztBQUNwRTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTs7QUFFQTs7O0FBR0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVk7QUFDWjtBQUNBOzs7QUFHQSxPQUFPOztBQUVQOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7OztBQUdBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNkNBQTZDOztBQUU3QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7Ozs7QUFJQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQSxPQUFPOztBQUVQO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLE9BQU87O0FBRVA7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsZUFBZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlO0FBQ2Y7O0FBRUE7O0FBRUE7O0FBRUEsT0FBTzs7QUFFUDs7O0FBR0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOzs7QUFHQTtBQUNBLGtCQUFrQixnQ0FBZ0M7QUFDbEQ7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTs7QUFFQTtBQUNBO0FBQ0EsNkJBQTZCLElBQUk7QUFDakM7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQTtBQUNBLFNBQVM7O0FBRVQ7QUFDQSx5Q0FBeUMscUJBQXFCLGVBQWU7QUFDN0U7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1RUFBdUU7QUFDdkU7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUIsZUFBZTtBQUNsQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBOztBQUVBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxPQUFPOztBQUVQO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUOztBQUVBOztBQUVBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7O0FBRUE7OztBQUdBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTs7QUFFQSxPQUFPOztBQUVQO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7O0FBRUE7O0FBRUEsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7QUFHQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7O0FBRUE7OztBQUdBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7OztBQUdBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBOzs7OztBQUtBOzs7QUFHQTs7QUFFQTs7OztBQUlBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSCw0QkFBNEIsRUFBRSxVQUFVLEVBQUUsVUFBVSxFQUFFO0FBQ3REO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBOztBQUVBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLEU7Ozs7Ozs7Ozs7Ozs7O0FDcGdEQTs7QUFFQTtBQUNBOztBQUVBQSxZQUFZLFdBQVosRUFBeUI7QUFDckIsaUJBQWE7QUFDVCxrQkFBVTtBQUNOLHFCQUFTO0FBREgsU0FERDtBQUlULGlCQUFTO0FBQ0wscUJBQVMsQ0FBQyxTQUFELEVBQVksU0FBWjtBQURKLFNBSkE7QUFPVCxtQkFBVztBQUNQLHFCQUFTO0FBREYsU0FQRjtBQVVULGdCQUFRO0FBQ0oscUJBQVM7QUFETCxTQVZDO0FBYVQsdUJBQWU7QUFDWCxzQkFBVTtBQURDLFNBYk47QUFnQlQsZ0JBQVE7QUFDSixzQkFBVSxJQUROO0FBRUoscUJBQVMsQ0FGTDtBQUdKLHlCQUFhLE1BSFQ7QUFJSixzQkFBVSxLQUpOO0FBS0osd0JBQVksS0FMUjtBQU1KLHdCQUFZLEtBTlI7QUFPSixzQkFBVTtBQVBOO0FBaEJDLEtBRFE7QUEyQnJCLHFCQUFpQjtBQTNCSSxDQUF6Qjs7QUE4QkEsaURBQUFDLENBQVNDLE1BQVQsQ0FBZ0Isb0JBQUMsb0VBQUQsT0FBaEIsRUFBeUJDLFNBQVNDLGNBQVQsQ0FBd0IsS0FBeEIsQ0FBekIsRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbkNBO0FBQ0E7QUFDQTtBQUNBOztJQUVxQkMsRzs7Ozs7Ozs7Ozs7aUNBQ1A7QUFDTixtQkFDSTtBQUFDLDBFQUFEO0FBQUEsa0JBQU0sT0FBTSxVQUFaO0FBQ0ksb0NBQUMsMERBQUQsSUFBTSxNQUFLLGtCQUFYLEdBREo7QUFFSSxvQ0FBQyxpRUFBRCxPQUZKO0FBR0k7QUFBQyxnRkFBRDtBQUFBO0FBQUE7QUFDd0I7QUFBQTtBQUFBLDBCQUFHLFdBQVUsWUFBYixFQUEwQixNQUFLLG1GQUEvQixFQUFtSCxRQUFPLFFBQTFIO0FBQUE7QUFBQTtBQUR4QjtBQUhKLGFBREo7QUFTSDs7OztFQVg0QkMsTUFBTUMsUzs7eURBQWxCRixHOzs7Ozs7Ozs7Ozs7Ozs7OztJQ0xBRyxXOzs7Ozs7Ozs7OztpQ0FDUDtBQUNOLG1CQUNJO0FBQUE7QUFBQTtBQUFVLHFCQUFLQyxLQUFMLENBQVdDO0FBQXJCLGFBREo7QUFHSDs7OztFQUxvQ0osTUFBTUMsUzs7eURBQTFCQyxXOzs7Ozs7Ozs7Ozs7Ozs7OztJQ0FBRyxJOzs7Ozs7Ozs7OztpQ0FDUDtBQUNOLG1CQUNJO0FBQUE7QUFBQTtBQUNJO0FBQUE7QUFBQSxzQkFBRyxXQUFVLEtBQWI7QUFBQTtBQUFBLGlCQURKO0FBRUk7QUFBQTtBQUFBLHNCQUFJLFdBQVUsOEJBQWQ7QUFBK0MseUJBQUtGLEtBQUwsQ0FBV0c7QUFBMUQ7QUFGSixhQURKO0FBTUg7Ozs7RUFSNkJOLE1BQU1DLFM7O3lEQUFuQkksSTs7Ozs7Ozs7Ozs7Ozs7Ozs7SUNBQUgsVzs7Ozs7Ozs7Ozs7aUNBQ1A7QUFDTixtQkFDSTtBQUFBO0FBQUEsa0JBQUcsV0FBVSxLQUFiO0FBQUE7QUFBZ0QsK0NBQWhEO0FBQUE7QUFBQSxhQURKO0FBR0g7Ozs7RUFMb0NGLE1BQU1DLFM7O3lEQUExQkMsVzs7Ozs7Ozs7Ozs7Ozs7Ozs7SUNBQUssSTs7Ozs7Ozs7Ozs7aUNBQ1A7QUFDTixtQkFDSTtBQUFBO0FBQUEsa0JBQVMsV0FBVSxxREFBbkI7QUFDSTtBQUFBO0FBQUEsc0JBQUssV0FBVSwyQkFBZjtBQUNJO0FBQUE7QUFBQSwwQkFBSSxXQUFVLHNEQUFkO0FBQXVFLDZCQUFLSixLQUFMLENBQVdLO0FBQWxGLHFCQURKO0FBR00seUJBQUtMLEtBQUwsQ0FBV0M7QUFIakI7QUFESixhQURKO0FBU0g7Ozs7RUFYNkJKLE1BQU1DLFM7O3lEQUFuQk0sSTs7Ozs7Ozs7QUNBckIseUMiLCJmaWxlIjoiL2pzL2FwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4vKiBBdXRob3IgOiBWaW5jZW50IEdhcnJlYXUgIC0gdmluY2VudGdhcnJlYXUuY29tXG4vKiBNSVQgbGljZW5zZTogaHR0cDovL29wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL01JVFxuLyogRGVtbyAvIEdlbmVyYXRvciA6IHZpbmNlbnRnYXJyZWF1LmNvbS9wYXJ0aWNsZXMuanNcbi8qIEdpdEh1YiA6IGdpdGh1Yi5jb20vVmluY2VudEdhcnJlYXUvcGFydGljbGVzLmpzXG4vKiBIb3cgdG8gdXNlPyA6IENoZWNrIHRoZSBHaXRIdWIgUkVBRE1FXG4vKiB2Mi4wLjBcbi8qIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXG5cbnZhciBwSlMgPSBmdW5jdGlvbih0YWdfaWQsIHBhcmFtcyl7XG5cbiAgdmFyIGNhbnZhc19lbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyMnK3RhZ19pZCsnID4gLnBhcnRpY2xlcy1qcy1jYW52YXMtZWwnKTtcblxuICAvKiBwYXJ0aWNsZXMuanMgdmFyaWFibGVzIHdpdGggZGVmYXVsdCB2YWx1ZXMgKi9cbiAgdGhpcy5wSlMgPSB7XG4gICAgY2FudmFzOiB7XG4gICAgICBlbDogY2FudmFzX2VsLFxuICAgICAgdzogY2FudmFzX2VsLm9mZnNldFdpZHRoLFxuICAgICAgaDogY2FudmFzX2VsLm9mZnNldEhlaWdodFxuICAgIH0sXG4gICAgcGFydGljbGVzOiB7XG4gICAgICBudW1iZXI6IHtcbiAgICAgICAgdmFsdWU6IDQwMCxcbiAgICAgICAgZGVuc2l0eToge1xuICAgICAgICAgIGVuYWJsZTogdHJ1ZSxcbiAgICAgICAgICB2YWx1ZV9hcmVhOiA4MDBcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIGNvbG9yOiB7XG4gICAgICAgIHZhbHVlOiAnI2ZmZidcbiAgICAgIH0sXG4gICAgICBzaGFwZToge1xuICAgICAgICB0eXBlOiAnY2lyY2xlJyxcbiAgICAgICAgc3Ryb2tlOiB7XG4gICAgICAgICAgd2lkdGg6IDAsXG4gICAgICAgICAgY29sb3I6ICcjZmYwMDAwJ1xuICAgICAgICB9LFxuICAgICAgICBwb2x5Z29uOiB7XG4gICAgICAgICAgbmJfc2lkZXM6IDVcbiAgICAgICAgfSxcbiAgICAgICAgaW1hZ2U6IHtcbiAgICAgICAgICBzcmM6ICcnLFxuICAgICAgICAgIHdpZHRoOiAxMDAsXG4gICAgICAgICAgaGVpZ2h0OiAxMDBcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIG9wYWNpdHk6IHtcbiAgICAgICAgdmFsdWU6IDEsXG4gICAgICAgIHJhbmRvbTogZmFsc2UsXG4gICAgICAgIGFuaW06IHtcbiAgICAgICAgICBlbmFibGU6IGZhbHNlLFxuICAgICAgICAgIHNwZWVkOiAyLFxuICAgICAgICAgIG9wYWNpdHlfbWluOiAwLFxuICAgICAgICAgIHN5bmM6IGZhbHNlXG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBzaXplOiB7XG4gICAgICAgIHZhbHVlOiAyMCxcbiAgICAgICAgcmFuZG9tOiBmYWxzZSxcbiAgICAgICAgYW5pbToge1xuICAgICAgICAgIGVuYWJsZTogZmFsc2UsXG4gICAgICAgICAgc3BlZWQ6IDIwLFxuICAgICAgICAgIHNpemVfbWluOiAwLFxuICAgICAgICAgIHN5bmM6IGZhbHNlXG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBsaW5lX2xpbmtlZDoge1xuICAgICAgICBlbmFibGU6IHRydWUsXG4gICAgICAgIGRpc3RhbmNlOiAxMDAsXG4gICAgICAgIGNvbG9yOiAnI2ZmZicsXG4gICAgICAgIG9wYWNpdHk6IDEsXG4gICAgICAgIHdpZHRoOiAxXG4gICAgICB9LFxuICAgICAgbW92ZToge1xuICAgICAgICBlbmFibGU6IHRydWUsXG4gICAgICAgIHNwZWVkOiAyLFxuICAgICAgICBkaXJlY3Rpb246ICdub25lJyxcbiAgICAgICAgcmFuZG9tOiBmYWxzZSxcbiAgICAgICAgc3RyYWlnaHQ6IGZhbHNlLFxuICAgICAgICBvdXRfbW9kZTogJ291dCcsXG4gICAgICAgIGJvdW5jZTogZmFsc2UsXG4gICAgICAgIGF0dHJhY3Q6IHtcbiAgICAgICAgICBlbmFibGU6IGZhbHNlLFxuICAgICAgICAgIHJvdGF0ZVg6IDMwMDAsXG4gICAgICAgICAgcm90YXRlWTogMzAwMFxuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgYXJyYXk6IFtdXG4gICAgfSxcbiAgICBpbnRlcmFjdGl2aXR5OiB7XG4gICAgICBkZXRlY3Rfb246ICdjYW52YXMnLFxuICAgICAgZXZlbnRzOiB7XG4gICAgICAgIG9uaG92ZXI6IHtcbiAgICAgICAgICBlbmFibGU6IHRydWUsXG4gICAgICAgICAgbW9kZTogJ2dyYWInXG4gICAgICAgIH0sXG4gICAgICAgIG9uY2xpY2s6IHtcbiAgICAgICAgICBlbmFibGU6IHRydWUsXG4gICAgICAgICAgbW9kZTogJ3B1c2gnXG4gICAgICAgIH0sXG4gICAgICAgIHJlc2l6ZTogdHJ1ZVxuICAgICAgfSxcbiAgICAgIG1vZGVzOiB7XG4gICAgICAgIGdyYWI6e1xuICAgICAgICAgIGRpc3RhbmNlOiAxMDAsXG4gICAgICAgICAgbGluZV9saW5rZWQ6e1xuICAgICAgICAgICAgb3BhY2l0eTogMVxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgYnViYmxlOntcbiAgICAgICAgICBkaXN0YW5jZTogMjAwLFxuICAgICAgICAgIHNpemU6IDgwLFxuICAgICAgICAgIGR1cmF0aW9uOiAwLjRcbiAgICAgICAgfSxcbiAgICAgICAgcmVwdWxzZTp7XG4gICAgICAgICAgZGlzdGFuY2U6IDIwMCxcbiAgICAgICAgICBkdXJhdGlvbjogMC40XG4gICAgICAgIH0sXG4gICAgICAgIHB1c2g6e1xuICAgICAgICAgIHBhcnRpY2xlc19uYjogNFxuICAgICAgICB9LFxuICAgICAgICByZW1vdmU6e1xuICAgICAgICAgIHBhcnRpY2xlc19uYjogMlxuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgbW91c2U6e31cbiAgICB9LFxuICAgIHJldGluYV9kZXRlY3Q6IGZhbHNlLFxuICAgIGZuOiB7XG4gICAgICBpbnRlcmFjdDoge30sXG4gICAgICBtb2Rlczoge30sXG4gICAgICB2ZW5kb3JzOnt9XG4gICAgfSxcbiAgICB0bXA6IHt9XG4gIH07XG5cbiAgdmFyIHBKUyA9IHRoaXMucEpTO1xuXG4gIC8qIHBhcmFtcyBzZXR0aW5ncyAqL1xuICBpZihwYXJhbXMpe1xuICAgIE9iamVjdC5kZWVwRXh0ZW5kKHBKUywgcGFyYW1zKTtcbiAgfVxuXG4gIHBKUy50bXAub2JqID0ge1xuICAgIHNpemVfdmFsdWU6IHBKUy5wYXJ0aWNsZXMuc2l6ZS52YWx1ZSxcbiAgICBzaXplX2FuaW1fc3BlZWQ6IHBKUy5wYXJ0aWNsZXMuc2l6ZS5hbmltLnNwZWVkLFxuICAgIG1vdmVfc3BlZWQ6IHBKUy5wYXJ0aWNsZXMubW92ZS5zcGVlZCxcbiAgICBsaW5lX2xpbmtlZF9kaXN0YW5jZTogcEpTLnBhcnRpY2xlcy5saW5lX2xpbmtlZC5kaXN0YW5jZSxcbiAgICBsaW5lX2xpbmtlZF93aWR0aDogcEpTLnBhcnRpY2xlcy5saW5lX2xpbmtlZC53aWR0aCxcbiAgICBtb2RlX2dyYWJfZGlzdGFuY2U6IHBKUy5pbnRlcmFjdGl2aXR5Lm1vZGVzLmdyYWIuZGlzdGFuY2UsXG4gICAgbW9kZV9idWJibGVfZGlzdGFuY2U6IHBKUy5pbnRlcmFjdGl2aXR5Lm1vZGVzLmJ1YmJsZS5kaXN0YW5jZSxcbiAgICBtb2RlX2J1YmJsZV9zaXplOiBwSlMuaW50ZXJhY3Rpdml0eS5tb2Rlcy5idWJibGUuc2l6ZSxcbiAgICBtb2RlX3JlcHVsc2VfZGlzdGFuY2U6IHBKUy5pbnRlcmFjdGl2aXR5Lm1vZGVzLnJlcHVsc2UuZGlzdGFuY2VcbiAgfTtcblxuXG4gIHBKUy5mbi5yZXRpbmFJbml0ID0gZnVuY3Rpb24oKXtcblxuICAgIGlmKHBKUy5yZXRpbmFfZGV0ZWN0ICYmIHdpbmRvdy5kZXZpY2VQaXhlbFJhdGlvID4gMSl7XG4gICAgICBwSlMuY2FudmFzLnB4cmF0aW8gPSB3aW5kb3cuZGV2aWNlUGl4ZWxSYXRpbzsgXG4gICAgICBwSlMudG1wLnJldGluYSA9IHRydWU7XG4gICAgfSBcbiAgICBlbHNle1xuICAgICAgcEpTLmNhbnZhcy5weHJhdGlvID0gMTtcbiAgICAgIHBKUy50bXAucmV0aW5hID0gZmFsc2U7XG4gICAgfVxuXG4gICAgcEpTLmNhbnZhcy53ID0gcEpTLmNhbnZhcy5lbC5vZmZzZXRXaWR0aCAqIHBKUy5jYW52YXMucHhyYXRpbztcbiAgICBwSlMuY2FudmFzLmggPSBwSlMuY2FudmFzLmVsLm9mZnNldEhlaWdodCAqIHBKUy5jYW52YXMucHhyYXRpbztcblxuICAgIHBKUy5wYXJ0aWNsZXMuc2l6ZS52YWx1ZSA9IHBKUy50bXAub2JqLnNpemVfdmFsdWUgKiBwSlMuY2FudmFzLnB4cmF0aW87XG4gICAgcEpTLnBhcnRpY2xlcy5zaXplLmFuaW0uc3BlZWQgPSBwSlMudG1wLm9iai5zaXplX2FuaW1fc3BlZWQgKiBwSlMuY2FudmFzLnB4cmF0aW87XG4gICAgcEpTLnBhcnRpY2xlcy5tb3ZlLnNwZWVkID0gcEpTLnRtcC5vYmoubW92ZV9zcGVlZCAqIHBKUy5jYW52YXMucHhyYXRpbztcbiAgICBwSlMucGFydGljbGVzLmxpbmVfbGlua2VkLmRpc3RhbmNlID0gcEpTLnRtcC5vYmoubGluZV9saW5rZWRfZGlzdGFuY2UgKiBwSlMuY2FudmFzLnB4cmF0aW87XG4gICAgcEpTLmludGVyYWN0aXZpdHkubW9kZXMuZ3JhYi5kaXN0YW5jZSA9IHBKUy50bXAub2JqLm1vZGVfZ3JhYl9kaXN0YW5jZSAqIHBKUy5jYW52YXMucHhyYXRpbztcbiAgICBwSlMuaW50ZXJhY3Rpdml0eS5tb2Rlcy5idWJibGUuZGlzdGFuY2UgPSBwSlMudG1wLm9iai5tb2RlX2J1YmJsZV9kaXN0YW5jZSAqIHBKUy5jYW52YXMucHhyYXRpbztcbiAgICBwSlMucGFydGljbGVzLmxpbmVfbGlua2VkLndpZHRoID0gcEpTLnRtcC5vYmoubGluZV9saW5rZWRfd2lkdGggKiBwSlMuY2FudmFzLnB4cmF0aW87XG4gICAgcEpTLmludGVyYWN0aXZpdHkubW9kZXMuYnViYmxlLnNpemUgPSBwSlMudG1wLm9iai5tb2RlX2J1YmJsZV9zaXplICogcEpTLmNhbnZhcy5weHJhdGlvO1xuICAgIHBKUy5pbnRlcmFjdGl2aXR5Lm1vZGVzLnJlcHVsc2UuZGlzdGFuY2UgPSBwSlMudG1wLm9iai5tb2RlX3JlcHVsc2VfZGlzdGFuY2UgKiBwSlMuY2FudmFzLnB4cmF0aW87XG5cbiAgfTtcblxuXG5cbiAgLyogLS0tLS0tLS0tLSBwSlMgZnVuY3Rpb25zIC0gY2FudmFzIC0tLS0tLS0tLS0tLSAqL1xuXG4gIHBKUy5mbi5jYW52YXNJbml0ID0gZnVuY3Rpb24oKXtcbiAgICBwSlMuY2FudmFzLmN0eCA9IHBKUy5jYW52YXMuZWwuZ2V0Q29udGV4dCgnMmQnKTtcbiAgfTtcblxuICBwSlMuZm4uY2FudmFzU2l6ZSA9IGZ1bmN0aW9uKCl7XG5cbiAgICBwSlMuY2FudmFzLmVsLndpZHRoID0gcEpTLmNhbnZhcy53O1xuICAgIHBKUy5jYW52YXMuZWwuaGVpZ2h0ID0gcEpTLmNhbnZhcy5oO1xuXG4gICAgaWYocEpTICYmIHBKUy5pbnRlcmFjdGl2aXR5LmV2ZW50cy5yZXNpemUpe1xuXG4gICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgZnVuY3Rpb24oKXtcblxuICAgICAgICAgIHBKUy5jYW52YXMudyA9IHBKUy5jYW52YXMuZWwub2Zmc2V0V2lkdGg7XG4gICAgICAgICAgcEpTLmNhbnZhcy5oID0gcEpTLmNhbnZhcy5lbC5vZmZzZXRIZWlnaHQ7XG5cbiAgICAgICAgICAvKiByZXNpemUgY2FudmFzICovXG4gICAgICAgICAgaWYocEpTLnRtcC5yZXRpbmEpe1xuICAgICAgICAgICAgcEpTLmNhbnZhcy53ICo9IHBKUy5jYW52YXMucHhyYXRpbztcbiAgICAgICAgICAgIHBKUy5jYW52YXMuaCAqPSBwSlMuY2FudmFzLnB4cmF0aW87XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgcEpTLmNhbnZhcy5lbC53aWR0aCA9IHBKUy5jYW52YXMudztcbiAgICAgICAgICBwSlMuY2FudmFzLmVsLmhlaWdodCA9IHBKUy5jYW52YXMuaDtcblxuICAgICAgICAgIC8qIHJlcGFpbnQgY2FudmFzIG9uIGFuaW0gZGlzYWJsZWQgKi9cbiAgICAgICAgICBpZighcEpTLnBhcnRpY2xlcy5tb3ZlLmVuYWJsZSl7XG4gICAgICAgICAgICBwSlMuZm4ucGFydGljbGVzRW1wdHkoKTtcbiAgICAgICAgICAgIHBKUy5mbi5wYXJ0aWNsZXNDcmVhdGUoKTtcbiAgICAgICAgICAgIHBKUy5mbi5wYXJ0aWNsZXNEcmF3KCk7XG4gICAgICAgICAgICBwSlMuZm4udmVuZG9ycy5kZW5zaXR5QXV0b1BhcnRpY2xlcygpO1xuICAgICAgICAgIH1cblxuICAgICAgICAvKiBkZW5zaXR5IHBhcnRpY2xlcyBlbmFibGVkICovXG4gICAgICAgIHBKUy5mbi52ZW5kb3JzLmRlbnNpdHlBdXRvUGFydGljbGVzKCk7XG5cbiAgICAgIH0pO1xuXG4gICAgfVxuXG4gIH07XG5cblxuICBwSlMuZm4uY2FudmFzUGFpbnQgPSBmdW5jdGlvbigpe1xuICAgIHBKUy5jYW52YXMuY3R4LmZpbGxSZWN0KDAsIDAsIHBKUy5jYW52YXMudywgcEpTLmNhbnZhcy5oKTtcbiAgfTtcblxuICBwSlMuZm4uY2FudmFzQ2xlYXIgPSBmdW5jdGlvbigpe1xuICAgIHBKUy5jYW52YXMuY3R4LmNsZWFyUmVjdCgwLCAwLCBwSlMuY2FudmFzLncsIHBKUy5jYW52YXMuaCk7XG4gIH07XG5cblxuICAvKiAtLS0tLS0tLS0gcEpTIGZ1bmN0aW9ucyAtIHBhcnRpY2xlcyAtLS0tLS0tLS0tLSAqL1xuXG4gIHBKUy5mbi5wYXJ0aWNsZSA9IGZ1bmN0aW9uKGNvbG9yLCBvcGFjaXR5LCBwb3NpdGlvbil7XG5cbiAgICAvKiBzaXplICovXG4gICAgdGhpcy5yYWRpdXMgPSAocEpTLnBhcnRpY2xlcy5zaXplLnJhbmRvbSA/IE1hdGgucmFuZG9tKCkgOiAxKSAqIHBKUy5wYXJ0aWNsZXMuc2l6ZS52YWx1ZTtcbiAgICBpZihwSlMucGFydGljbGVzLnNpemUuYW5pbS5lbmFibGUpe1xuICAgICAgdGhpcy5zaXplX3N0YXR1cyA9IGZhbHNlO1xuICAgICAgdGhpcy52cyA9IHBKUy5wYXJ0aWNsZXMuc2l6ZS5hbmltLnNwZWVkIC8gMTAwO1xuICAgICAgaWYoIXBKUy5wYXJ0aWNsZXMuc2l6ZS5hbmltLnN5bmMpe1xuICAgICAgICB0aGlzLnZzID0gdGhpcy52cyAqIE1hdGgucmFuZG9tKCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLyogcG9zaXRpb24gKi9cbiAgICB0aGlzLnggPSBwb3NpdGlvbiA/IHBvc2l0aW9uLnggOiBNYXRoLnJhbmRvbSgpICogcEpTLmNhbnZhcy53O1xuICAgIHRoaXMueSA9IHBvc2l0aW9uID8gcG9zaXRpb24ueSA6IE1hdGgucmFuZG9tKCkgKiBwSlMuY2FudmFzLmg7XG5cbiAgICAvKiBjaGVjayBwb3NpdGlvbiAgLSBpbnRvIHRoZSBjYW52YXMgKi9cbiAgICBpZih0aGlzLnggPiBwSlMuY2FudmFzLncgLSB0aGlzLnJhZGl1cyoyKSB0aGlzLnggPSB0aGlzLnggLSB0aGlzLnJhZGl1cztcbiAgICBlbHNlIGlmKHRoaXMueCA8IHRoaXMucmFkaXVzKjIpIHRoaXMueCA9IHRoaXMueCArIHRoaXMucmFkaXVzO1xuICAgIGlmKHRoaXMueSA+IHBKUy5jYW52YXMuaCAtIHRoaXMucmFkaXVzKjIpIHRoaXMueSA9IHRoaXMueSAtIHRoaXMucmFkaXVzO1xuICAgIGVsc2UgaWYodGhpcy55IDwgdGhpcy5yYWRpdXMqMikgdGhpcy55ID0gdGhpcy55ICsgdGhpcy5yYWRpdXM7XG5cbiAgICAvKiBjaGVjayBwb3NpdGlvbiAtIGF2b2lkIG92ZXJsYXAgKi9cbiAgICBpZihwSlMucGFydGljbGVzLm1vdmUuYm91bmNlKXtcbiAgICAgIHBKUy5mbi52ZW5kb3JzLmNoZWNrT3ZlcmxhcCh0aGlzLCBwb3NpdGlvbik7XG4gICAgfVxuXG4gICAgLyogY29sb3IgKi9cbiAgICB0aGlzLmNvbG9yID0ge307XG4gICAgaWYodHlwZW9mKGNvbG9yLnZhbHVlKSA9PSAnb2JqZWN0Jyl7XG5cbiAgICAgIGlmKGNvbG9yLnZhbHVlIGluc3RhbmNlb2YgQXJyYXkpe1xuICAgICAgICB2YXIgY29sb3Jfc2VsZWN0ZWQgPSBjb2xvci52YWx1ZVtNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBwSlMucGFydGljbGVzLmNvbG9yLnZhbHVlLmxlbmd0aCldO1xuICAgICAgICB0aGlzLmNvbG9yLnJnYiA9IGhleFRvUmdiKGNvbG9yX3NlbGVjdGVkKTtcbiAgICAgIH1lbHNle1xuICAgICAgICBpZihjb2xvci52YWx1ZS5yICE9IHVuZGVmaW5lZCAmJiBjb2xvci52YWx1ZS5nICE9IHVuZGVmaW5lZCAmJiBjb2xvci52YWx1ZS5iICE9IHVuZGVmaW5lZCl7XG4gICAgICAgICAgdGhpcy5jb2xvci5yZ2IgPSB7XG4gICAgICAgICAgICByOiBjb2xvci52YWx1ZS5yLFxuICAgICAgICAgICAgZzogY29sb3IudmFsdWUuZyxcbiAgICAgICAgICAgIGI6IGNvbG9yLnZhbHVlLmJcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYoY29sb3IudmFsdWUuaCAhPSB1bmRlZmluZWQgJiYgY29sb3IudmFsdWUucyAhPSB1bmRlZmluZWQgJiYgY29sb3IudmFsdWUubCAhPSB1bmRlZmluZWQpe1xuICAgICAgICAgIHRoaXMuY29sb3IuaHNsID0ge1xuICAgICAgICAgICAgaDogY29sb3IudmFsdWUuaCxcbiAgICAgICAgICAgIHM6IGNvbG9yLnZhbHVlLnMsXG4gICAgICAgICAgICBsOiBjb2xvci52YWx1ZS5sXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICB9XG4gICAgZWxzZSBpZihjb2xvci52YWx1ZSA9PSAncmFuZG9tJyl7XG4gICAgICB0aGlzLmNvbG9yLnJnYiA9IHtcbiAgICAgICAgcjogKE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqICgyNTUgLSAwICsgMSkpICsgMCksXG4gICAgICAgIGc6IChNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAoMjU1IC0gMCArIDEpKSArIDApLFxuICAgICAgICBiOiAoTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogKDI1NSAtIDAgKyAxKSkgKyAwKVxuICAgICAgfVxuICAgIH1cbiAgICBlbHNlIGlmKHR5cGVvZihjb2xvci52YWx1ZSkgPT0gJ3N0cmluZycpe1xuICAgICAgdGhpcy5jb2xvciA9IGNvbG9yO1xuICAgICAgdGhpcy5jb2xvci5yZ2IgPSBoZXhUb1JnYih0aGlzLmNvbG9yLnZhbHVlKTtcbiAgICB9XG5cbiAgICAvKiBvcGFjaXR5ICovXG4gICAgdGhpcy5vcGFjaXR5ID0gKHBKUy5wYXJ0aWNsZXMub3BhY2l0eS5yYW5kb20gPyBNYXRoLnJhbmRvbSgpIDogMSkgKiBwSlMucGFydGljbGVzLm9wYWNpdHkudmFsdWU7XG4gICAgaWYocEpTLnBhcnRpY2xlcy5vcGFjaXR5LmFuaW0uZW5hYmxlKXtcbiAgICAgIHRoaXMub3BhY2l0eV9zdGF0dXMgPSBmYWxzZTtcbiAgICAgIHRoaXMudm8gPSBwSlMucGFydGljbGVzLm9wYWNpdHkuYW5pbS5zcGVlZCAvIDEwMDtcbiAgICAgIGlmKCFwSlMucGFydGljbGVzLm9wYWNpdHkuYW5pbS5zeW5jKXtcbiAgICAgICAgdGhpcy52byA9IHRoaXMudm8gKiBNYXRoLnJhbmRvbSgpO1xuICAgICAgfVxuICAgIH1cblxuICAgIC8qIGFuaW1hdGlvbiAtIHZlbG9jaXR5IGZvciBzcGVlZCAqL1xuICAgIHZhciB2ZWxiYXNlID0ge31cbiAgICBzd2l0Y2gocEpTLnBhcnRpY2xlcy5tb3ZlLmRpcmVjdGlvbil7XG4gICAgICBjYXNlICd0b3AnOlxuICAgICAgICB2ZWxiYXNlID0geyB4OjAsIHk6LTEgfTtcbiAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAndG9wLXJpZ2h0JzpcbiAgICAgICAgdmVsYmFzZSA9IHsgeDowLjUsIHk6LTAuNSB9O1xuICAgICAgYnJlYWs7XG4gICAgICBjYXNlICdyaWdodCc6XG4gICAgICAgIHZlbGJhc2UgPSB7IHg6MSwgeTotMCB9O1xuICAgICAgYnJlYWs7XG4gICAgICBjYXNlICdib3R0b20tcmlnaHQnOlxuICAgICAgICB2ZWxiYXNlID0geyB4OjAuNSwgeTowLjUgfTtcbiAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAnYm90dG9tJzpcbiAgICAgICAgdmVsYmFzZSA9IHsgeDowLCB5OjEgfTtcbiAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAnYm90dG9tLWxlZnQnOlxuICAgICAgICB2ZWxiYXNlID0geyB4Oi0wLjUsIHk6MSB9O1xuICAgICAgYnJlYWs7XG4gICAgICBjYXNlICdsZWZ0JzpcbiAgICAgICAgdmVsYmFzZSA9IHsgeDotMSwgeTowIH07XG4gICAgICBicmVhaztcbiAgICAgIGNhc2UgJ3RvcC1sZWZ0JzpcbiAgICAgICAgdmVsYmFzZSA9IHsgeDotMC41LCB5Oi0wLjUgfTtcbiAgICAgIGJyZWFrO1xuICAgICAgZGVmYXVsdDpcbiAgICAgICAgdmVsYmFzZSA9IHsgeDowLCB5OjAgfTtcbiAgICAgIGJyZWFrO1xuICAgIH1cblxuICAgIGlmKHBKUy5wYXJ0aWNsZXMubW92ZS5zdHJhaWdodCl7XG4gICAgICB0aGlzLnZ4ID0gdmVsYmFzZS54O1xuICAgICAgdGhpcy52eSA9IHZlbGJhc2UueTtcbiAgICAgIGlmKHBKUy5wYXJ0aWNsZXMubW92ZS5yYW5kb20pe1xuICAgICAgICB0aGlzLnZ4ID0gdGhpcy52eCAqIChNYXRoLnJhbmRvbSgpKTtcbiAgICAgICAgdGhpcy52eSA9IHRoaXMudnkgKiAoTWF0aC5yYW5kb20oKSk7XG4gICAgICB9XG4gICAgfWVsc2V7XG4gICAgICB0aGlzLnZ4ID0gdmVsYmFzZS54ICsgTWF0aC5yYW5kb20oKS0wLjU7XG4gICAgICB0aGlzLnZ5ID0gdmVsYmFzZS55ICsgTWF0aC5yYW5kb20oKS0wLjU7XG4gICAgfVxuXG4gICAgLy8gdmFyIHRoZXRhID0gMi4wICogTWF0aC5QSSAqIE1hdGgucmFuZG9tKCk7XG4gICAgLy8gdGhpcy52eCA9IE1hdGguY29zKHRoZXRhKTtcbiAgICAvLyB0aGlzLnZ5ID0gTWF0aC5zaW4odGhldGEpO1xuXG4gICAgdGhpcy52eF9pID0gdGhpcy52eDtcbiAgICB0aGlzLnZ5X2kgPSB0aGlzLnZ5O1xuXG4gICAgXG5cbiAgICAvKiBpZiBzaGFwZSBpcyBpbWFnZSAqL1xuXG4gICAgdmFyIHNoYXBlX3R5cGUgPSBwSlMucGFydGljbGVzLnNoYXBlLnR5cGU7XG4gICAgaWYodHlwZW9mKHNoYXBlX3R5cGUpID09ICdvYmplY3QnKXtcbiAgICAgIGlmKHNoYXBlX3R5cGUgaW5zdGFuY2VvZiBBcnJheSl7XG4gICAgICAgIHZhciBzaGFwZV9zZWxlY3RlZCA9IHNoYXBlX3R5cGVbTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogc2hhcGVfdHlwZS5sZW5ndGgpXTtcbiAgICAgICAgdGhpcy5zaGFwZSA9IHNoYXBlX3NlbGVjdGVkO1xuICAgICAgfVxuICAgIH1lbHNle1xuICAgICAgdGhpcy5zaGFwZSA9IHNoYXBlX3R5cGU7XG4gICAgfVxuXG4gICAgaWYodGhpcy5zaGFwZSA9PSAnaW1hZ2UnKXtcbiAgICAgIHZhciBzaCA9IHBKUy5wYXJ0aWNsZXMuc2hhcGU7XG4gICAgICB0aGlzLmltZyA9IHtcbiAgICAgICAgc3JjOiBzaC5pbWFnZS5zcmMsXG4gICAgICAgIHJhdGlvOiBzaC5pbWFnZS53aWR0aCAvIHNoLmltYWdlLmhlaWdodFxuICAgICAgfVxuICAgICAgaWYoIXRoaXMuaW1nLnJhdGlvKSB0aGlzLmltZy5yYXRpbyA9IDE7XG4gICAgICBpZihwSlMudG1wLmltZ190eXBlID09ICdzdmcnICYmIHBKUy50bXAuc291cmNlX3N2ZyAhPSB1bmRlZmluZWQpe1xuICAgICAgICBwSlMuZm4udmVuZG9ycy5jcmVhdGVTdmdJbWcodGhpcyk7XG4gICAgICAgIGlmKHBKUy50bXAucHVzaGluZyl7XG4gICAgICAgICAgdGhpcy5pbWcubG9hZGVkID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBcblxuICB9O1xuXG5cbiAgcEpTLmZuLnBhcnRpY2xlLnByb3RvdHlwZS5kcmF3ID0gZnVuY3Rpb24oKSB7XG5cbiAgICB2YXIgcCA9IHRoaXM7XG5cbiAgICBpZihwLnJhZGl1c19idWJibGUgIT0gdW5kZWZpbmVkKXtcbiAgICAgIHZhciByYWRpdXMgPSBwLnJhZGl1c19idWJibGU7IFxuICAgIH1lbHNle1xuICAgICAgdmFyIHJhZGl1cyA9IHAucmFkaXVzO1xuICAgIH1cblxuICAgIGlmKHAub3BhY2l0eV9idWJibGUgIT0gdW5kZWZpbmVkKXtcbiAgICAgIHZhciBvcGFjaXR5ID0gcC5vcGFjaXR5X2J1YmJsZTtcbiAgICB9ZWxzZXtcbiAgICAgIHZhciBvcGFjaXR5ID0gcC5vcGFjaXR5O1xuICAgIH1cblxuICAgIGlmKHAuY29sb3IucmdiKXtcbiAgICAgIHZhciBjb2xvcl92YWx1ZSA9ICdyZ2JhKCcrcC5jb2xvci5yZ2IucisnLCcrcC5jb2xvci5yZ2IuZysnLCcrcC5jb2xvci5yZ2IuYisnLCcrb3BhY2l0eSsnKSc7XG4gICAgfWVsc2V7XG4gICAgICB2YXIgY29sb3JfdmFsdWUgPSAnaHNsYSgnK3AuY29sb3IuaHNsLmgrJywnK3AuY29sb3IuaHNsLnMrJyUsJytwLmNvbG9yLmhzbC5sKyclLCcrb3BhY2l0eSsnKSc7XG4gICAgfVxuXG4gICAgcEpTLmNhbnZhcy5jdHguZmlsbFN0eWxlID0gY29sb3JfdmFsdWU7XG4gICAgcEpTLmNhbnZhcy5jdHguYmVnaW5QYXRoKCk7XG5cbiAgICBzd2l0Y2gocC5zaGFwZSl7XG5cbiAgICAgIGNhc2UgJ2NpcmNsZSc6XG4gICAgICAgIHBKUy5jYW52YXMuY3R4LmFyYyhwLngsIHAueSwgcmFkaXVzLCAwLCBNYXRoLlBJICogMiwgZmFsc2UpO1xuICAgICAgYnJlYWs7XG5cbiAgICAgIGNhc2UgJ2VkZ2UnOlxuICAgICAgICBwSlMuY2FudmFzLmN0eC5yZWN0KHAueC1yYWRpdXMsIHAueS1yYWRpdXMsIHJhZGl1cyoyLCByYWRpdXMqMik7XG4gICAgICBicmVhaztcblxuICAgICAgY2FzZSAndHJpYW5nbGUnOlxuICAgICAgICBwSlMuZm4udmVuZG9ycy5kcmF3U2hhcGUocEpTLmNhbnZhcy5jdHgsIHAueC1yYWRpdXMsIHAueStyYWRpdXMgLyAxLjY2LCByYWRpdXMqMiwgMywgMik7XG4gICAgICBicmVhaztcblxuICAgICAgY2FzZSAncG9seWdvbic6XG4gICAgICAgIHBKUy5mbi52ZW5kb3JzLmRyYXdTaGFwZShcbiAgICAgICAgICBwSlMuY2FudmFzLmN0eCxcbiAgICAgICAgICBwLnggLSByYWRpdXMgLyAocEpTLnBhcnRpY2xlcy5zaGFwZS5wb2x5Z29uLm5iX3NpZGVzLzMuNSksIC8vIHN0YXJ0WFxuICAgICAgICAgIHAueSAtIHJhZGl1cyAvICgyLjY2LzMuNSksIC8vIHN0YXJ0WVxuICAgICAgICAgIHJhZGl1cyoyLjY2IC8gKHBKUy5wYXJ0aWNsZXMuc2hhcGUucG9seWdvbi5uYl9zaWRlcy8zKSwgLy8gc2lkZUxlbmd0aFxuICAgICAgICAgIHBKUy5wYXJ0aWNsZXMuc2hhcGUucG9seWdvbi5uYl9zaWRlcywgLy8gc2lkZUNvdW50TnVtZXJhdG9yXG4gICAgICAgICAgMSAvLyBzaWRlQ291bnREZW5vbWluYXRvclxuICAgICAgICApO1xuICAgICAgYnJlYWs7XG5cbiAgICAgIGNhc2UgJ3N0YXInOlxuICAgICAgICBwSlMuZm4udmVuZG9ycy5kcmF3U2hhcGUoXG4gICAgICAgICAgcEpTLmNhbnZhcy5jdHgsXG4gICAgICAgICAgcC54IC0gcmFkaXVzKjIgLyAocEpTLnBhcnRpY2xlcy5zaGFwZS5wb2x5Z29uLm5iX3NpZGVzLzQpLCAvLyBzdGFydFhcbiAgICAgICAgICBwLnkgLSByYWRpdXMgLyAoMioyLjY2LzMuNSksIC8vIHN0YXJ0WVxuICAgICAgICAgIHJhZGl1cyoyKjIuNjYgLyAocEpTLnBhcnRpY2xlcy5zaGFwZS5wb2x5Z29uLm5iX3NpZGVzLzMpLCAvLyBzaWRlTGVuZ3RoXG4gICAgICAgICAgcEpTLnBhcnRpY2xlcy5zaGFwZS5wb2x5Z29uLm5iX3NpZGVzLCAvLyBzaWRlQ291bnROdW1lcmF0b3JcbiAgICAgICAgICAyIC8vIHNpZGVDb3VudERlbm9taW5hdG9yXG4gICAgICAgICk7XG4gICAgICBicmVhaztcblxuICAgICAgY2FzZSAnaW1hZ2UnOlxuXG4gICAgICAgIGZ1bmN0aW9uIGRyYXcoKXtcbiAgICAgICAgICBwSlMuY2FudmFzLmN0eC5kcmF3SW1hZ2UoXG4gICAgICAgICAgICBpbWdfb2JqLFxuICAgICAgICAgICAgcC54LXJhZGl1cyxcbiAgICAgICAgICAgIHAueS1yYWRpdXMsXG4gICAgICAgICAgICByYWRpdXMqMixcbiAgICAgICAgICAgIHJhZGl1cyoyIC8gcC5pbWcucmF0aW9cbiAgICAgICAgICApO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYocEpTLnRtcC5pbWdfdHlwZSA9PSAnc3ZnJyl7XG4gICAgICAgICAgdmFyIGltZ19vYmogPSBwLmltZy5vYmo7XG4gICAgICAgIH1lbHNle1xuICAgICAgICAgIHZhciBpbWdfb2JqID0gcEpTLnRtcC5pbWdfb2JqO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYoaW1nX29iail7XG4gICAgICAgICAgZHJhdygpO1xuICAgICAgICB9XG5cbiAgICAgIGJyZWFrO1xuXG4gICAgfVxuXG4gICAgcEpTLmNhbnZhcy5jdHguY2xvc2VQYXRoKCk7XG5cbiAgICBpZihwSlMucGFydGljbGVzLnNoYXBlLnN0cm9rZS53aWR0aCA+IDApe1xuICAgICAgcEpTLmNhbnZhcy5jdHguc3Ryb2tlU3R5bGUgPSBwSlMucGFydGljbGVzLnNoYXBlLnN0cm9rZS5jb2xvcjtcbiAgICAgIHBKUy5jYW52YXMuY3R4LmxpbmVXaWR0aCA9IHBKUy5wYXJ0aWNsZXMuc2hhcGUuc3Ryb2tlLndpZHRoO1xuICAgICAgcEpTLmNhbnZhcy5jdHguc3Ryb2tlKCk7XG4gICAgfVxuICAgIFxuICAgIHBKUy5jYW52YXMuY3R4LmZpbGwoKTtcbiAgICBcbiAgfTtcblxuXG4gIHBKUy5mbi5wYXJ0aWNsZXNDcmVhdGUgPSBmdW5jdGlvbigpe1xuICAgIGZvcih2YXIgaSA9IDA7IGkgPCBwSlMucGFydGljbGVzLm51bWJlci52YWx1ZTsgaSsrKSB7XG4gICAgICBwSlMucGFydGljbGVzLmFycmF5LnB1c2gobmV3IHBKUy5mbi5wYXJ0aWNsZShwSlMucGFydGljbGVzLmNvbG9yLCBwSlMucGFydGljbGVzLm9wYWNpdHkudmFsdWUpKTtcbiAgICB9XG4gIH07XG5cbiAgcEpTLmZuLnBhcnRpY2xlc1VwZGF0ZSA9IGZ1bmN0aW9uKCl7XG5cbiAgICBmb3IodmFyIGkgPSAwOyBpIDwgcEpTLnBhcnRpY2xlcy5hcnJheS5sZW5ndGg7IGkrKyl7XG5cbiAgICAgIC8qIHRoZSBwYXJ0aWNsZSAqL1xuICAgICAgdmFyIHAgPSBwSlMucGFydGljbGVzLmFycmF5W2ldO1xuXG4gICAgICAvLyB2YXIgZCA9ICggZHggPSBwSlMuaW50ZXJhY3Rpdml0eS5tb3VzZS5jbGlja19wb3NfeCAtIHAueCApICogZHggKyAoIGR5ID0gcEpTLmludGVyYWN0aXZpdHkubW91c2UuY2xpY2tfcG9zX3kgLSBwLnkgKSAqIGR5O1xuICAgICAgLy8gdmFyIGYgPSAtQkFOR19TSVpFIC8gZDtcbiAgICAgIC8vIGlmICggZCA8IEJBTkdfU0laRSApIHtcbiAgICAgIC8vICAgICB2YXIgdCA9IE1hdGguYXRhbjIoIGR5LCBkeCApO1xuICAgICAgLy8gICAgIHAudnggPSBmICogTWF0aC5jb3ModCk7XG4gICAgICAvLyAgICAgcC52eSA9IGYgKiBNYXRoLnNpbih0KTtcbiAgICAgIC8vIH1cblxuICAgICAgLyogbW92ZSB0aGUgcGFydGljbGUgKi9cbiAgICAgIGlmKHBKUy5wYXJ0aWNsZXMubW92ZS5lbmFibGUpe1xuICAgICAgICB2YXIgbXMgPSBwSlMucGFydGljbGVzLm1vdmUuc3BlZWQvMjtcbiAgICAgICAgcC54ICs9IHAudnggKiBtcztcbiAgICAgICAgcC55ICs9IHAudnkgKiBtcztcbiAgICAgIH1cblxuICAgICAgLyogY2hhbmdlIG9wYWNpdHkgc3RhdHVzICovXG4gICAgICBpZihwSlMucGFydGljbGVzLm9wYWNpdHkuYW5pbS5lbmFibGUpIHtcbiAgICAgICAgaWYocC5vcGFjaXR5X3N0YXR1cyA9PSB0cnVlKSB7XG4gICAgICAgICAgaWYocC5vcGFjaXR5ID49IHBKUy5wYXJ0aWNsZXMub3BhY2l0eS52YWx1ZSkgcC5vcGFjaXR5X3N0YXR1cyA9IGZhbHNlO1xuICAgICAgICAgIHAub3BhY2l0eSArPSBwLnZvO1xuICAgICAgICB9ZWxzZSB7XG4gICAgICAgICAgaWYocC5vcGFjaXR5IDw9IHBKUy5wYXJ0aWNsZXMub3BhY2l0eS5hbmltLm9wYWNpdHlfbWluKSBwLm9wYWNpdHlfc3RhdHVzID0gdHJ1ZTtcbiAgICAgICAgICBwLm9wYWNpdHkgLT0gcC52bztcbiAgICAgICAgfVxuICAgICAgICBpZihwLm9wYWNpdHkgPCAwKSBwLm9wYWNpdHkgPSAwO1xuICAgICAgfVxuXG4gICAgICAvKiBjaGFuZ2Ugc2l6ZSAqL1xuICAgICAgaWYocEpTLnBhcnRpY2xlcy5zaXplLmFuaW0uZW5hYmxlKXtcbiAgICAgICAgaWYocC5zaXplX3N0YXR1cyA9PSB0cnVlKXtcbiAgICAgICAgICBpZihwLnJhZGl1cyA+PSBwSlMucGFydGljbGVzLnNpemUudmFsdWUpIHAuc2l6ZV9zdGF0dXMgPSBmYWxzZTtcbiAgICAgICAgICBwLnJhZGl1cyArPSBwLnZzO1xuICAgICAgICB9ZWxzZXtcbiAgICAgICAgICBpZihwLnJhZGl1cyA8PSBwSlMucGFydGljbGVzLnNpemUuYW5pbS5zaXplX21pbikgcC5zaXplX3N0YXR1cyA9IHRydWU7XG4gICAgICAgICAgcC5yYWRpdXMgLT0gcC52cztcbiAgICAgICAgfVxuICAgICAgICBpZihwLnJhZGl1cyA8IDApIHAucmFkaXVzID0gMDtcbiAgICAgIH1cblxuICAgICAgLyogY2hhbmdlIHBhcnRpY2xlIHBvc2l0aW9uIGlmIGl0IGlzIG91dCBvZiBjYW52YXMgKi9cbiAgICAgIGlmKHBKUy5wYXJ0aWNsZXMubW92ZS5vdXRfbW9kZSA9PSAnYm91bmNlJyl7XG4gICAgICAgIHZhciBuZXdfcG9zID0ge1xuICAgICAgICAgIHhfbGVmdDogcC5yYWRpdXMsXG4gICAgICAgICAgeF9yaWdodDogIHBKUy5jYW52YXMudyxcbiAgICAgICAgICB5X3RvcDogcC5yYWRpdXMsXG4gICAgICAgICAgeV9ib3R0b206IHBKUy5jYW52YXMuaFxuICAgICAgICB9XG4gICAgICB9ZWxzZXtcbiAgICAgICAgdmFyIG5ld19wb3MgPSB7XG4gICAgICAgICAgeF9sZWZ0OiAtcC5yYWRpdXMsXG4gICAgICAgICAgeF9yaWdodDogcEpTLmNhbnZhcy53ICsgcC5yYWRpdXMsXG4gICAgICAgICAgeV90b3A6IC1wLnJhZGl1cyxcbiAgICAgICAgICB5X2JvdHRvbTogcEpTLmNhbnZhcy5oICsgcC5yYWRpdXNcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZihwLnggLSBwLnJhZGl1cyA+IHBKUy5jYW52YXMudyl7XG4gICAgICAgIHAueCA9IG5ld19wb3MueF9sZWZ0O1xuICAgICAgICBwLnkgPSBNYXRoLnJhbmRvbSgpICogcEpTLmNhbnZhcy5oO1xuICAgICAgfVxuICAgICAgZWxzZSBpZihwLnggKyBwLnJhZGl1cyA8IDApe1xuICAgICAgICBwLnggPSBuZXdfcG9zLnhfcmlnaHQ7XG4gICAgICAgIHAueSA9IE1hdGgucmFuZG9tKCkgKiBwSlMuY2FudmFzLmg7XG4gICAgICB9XG4gICAgICBpZihwLnkgLSBwLnJhZGl1cyA+IHBKUy5jYW52YXMuaCl7XG4gICAgICAgIHAueSA9IG5ld19wb3MueV90b3A7XG4gICAgICAgIHAueCA9IE1hdGgucmFuZG9tKCkgKiBwSlMuY2FudmFzLnc7XG4gICAgICB9XG4gICAgICBlbHNlIGlmKHAueSArIHAucmFkaXVzIDwgMCl7XG4gICAgICAgIHAueSA9IG5ld19wb3MueV9ib3R0b207XG4gICAgICAgIHAueCA9IE1hdGgucmFuZG9tKCkgKiBwSlMuY2FudmFzLnc7XG4gICAgICB9XG5cbiAgICAgIC8qIG91dCBvZiBjYW52YXMgbW9kZXMgKi9cbiAgICAgIHN3aXRjaChwSlMucGFydGljbGVzLm1vdmUub3V0X21vZGUpe1xuICAgICAgICBjYXNlICdib3VuY2UnOlxuICAgICAgICAgIGlmIChwLnggKyBwLnJhZGl1cyA+IHBKUy5jYW52YXMudykgcC52eCA9IC1wLnZ4O1xuICAgICAgICAgIGVsc2UgaWYgKHAueCAtIHAucmFkaXVzIDwgMCkgcC52eCA9IC1wLnZ4O1xuICAgICAgICAgIGlmIChwLnkgKyBwLnJhZGl1cyA+IHBKUy5jYW52YXMuaCkgcC52eSA9IC1wLnZ5O1xuICAgICAgICAgIGVsc2UgaWYgKHAueSAtIHAucmFkaXVzIDwgMCkgcC52eSA9IC1wLnZ5O1xuICAgICAgICBicmVhaztcbiAgICAgIH1cblxuICAgICAgLyogZXZlbnRzICovXG4gICAgICBpZihpc0luQXJyYXkoJ2dyYWInLCBwSlMuaW50ZXJhY3Rpdml0eS5ldmVudHMub25ob3Zlci5tb2RlKSl7XG4gICAgICAgIHBKUy5mbi5tb2Rlcy5ncmFiUGFydGljbGUocCk7XG4gICAgICB9XG5cbiAgICAgIGlmKGlzSW5BcnJheSgnYnViYmxlJywgcEpTLmludGVyYWN0aXZpdHkuZXZlbnRzLm9uaG92ZXIubW9kZSkgfHwgaXNJbkFycmF5KCdidWJibGUnLCBwSlMuaW50ZXJhY3Rpdml0eS5ldmVudHMub25jbGljay5tb2RlKSl7XG4gICAgICAgIHBKUy5mbi5tb2Rlcy5idWJibGVQYXJ0aWNsZShwKTtcbiAgICAgIH1cblxuICAgICAgaWYoaXNJbkFycmF5KCdyZXB1bHNlJywgcEpTLmludGVyYWN0aXZpdHkuZXZlbnRzLm9uaG92ZXIubW9kZSkgfHwgaXNJbkFycmF5KCdyZXB1bHNlJywgcEpTLmludGVyYWN0aXZpdHkuZXZlbnRzLm9uY2xpY2subW9kZSkpe1xuICAgICAgICBwSlMuZm4ubW9kZXMucmVwdWxzZVBhcnRpY2xlKHApO1xuICAgICAgfVxuXG4gICAgICAvKiBpbnRlcmFjdGlvbiBhdXRvIGJldHdlZW4gcGFydGljbGVzICovXG4gICAgICBpZihwSlMucGFydGljbGVzLmxpbmVfbGlua2VkLmVuYWJsZSB8fCBwSlMucGFydGljbGVzLm1vdmUuYXR0cmFjdC5lbmFibGUpe1xuICAgICAgICBmb3IodmFyIGogPSBpICsgMTsgaiA8IHBKUy5wYXJ0aWNsZXMuYXJyYXkubGVuZ3RoOyBqKyspe1xuICAgICAgICAgIHZhciBwMiA9IHBKUy5wYXJ0aWNsZXMuYXJyYXlbal07XG5cbiAgICAgICAgICAvKiBsaW5rIHBhcnRpY2xlcyAqL1xuICAgICAgICAgIGlmKHBKUy5wYXJ0aWNsZXMubGluZV9saW5rZWQuZW5hYmxlKXtcbiAgICAgICAgICAgIHBKUy5mbi5pbnRlcmFjdC5saW5rUGFydGljbGVzKHAscDIpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC8qIGF0dHJhY3QgcGFydGljbGVzICovXG4gICAgICAgICAgaWYocEpTLnBhcnRpY2xlcy5tb3ZlLmF0dHJhY3QuZW5hYmxlKXtcbiAgICAgICAgICAgIHBKUy5mbi5pbnRlcmFjdC5hdHRyYWN0UGFydGljbGVzKHAscDIpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC8qIGJvdW5jZSBwYXJ0aWNsZXMgKi9cbiAgICAgICAgICBpZihwSlMucGFydGljbGVzLm1vdmUuYm91bmNlKXtcbiAgICAgICAgICAgIHBKUy5mbi5pbnRlcmFjdC5ib3VuY2VQYXJ0aWNsZXMocCxwMik7XG4gICAgICAgICAgfVxuXG4gICAgICAgIH1cbiAgICAgIH1cblxuXG4gICAgfVxuXG4gIH07XG5cbiAgcEpTLmZuLnBhcnRpY2xlc0RyYXcgPSBmdW5jdGlvbigpe1xuXG4gICAgLyogY2xlYXIgY2FudmFzICovXG4gICAgcEpTLmNhbnZhcy5jdHguY2xlYXJSZWN0KDAsIDAsIHBKUy5jYW52YXMudywgcEpTLmNhbnZhcy5oKTtcblxuICAgIC8qIHVwZGF0ZSBlYWNoIHBhcnRpY2xlcyBwYXJhbSAqL1xuICAgIHBKUy5mbi5wYXJ0aWNsZXNVcGRhdGUoKTtcblxuICAgIC8qIGRyYXcgZWFjaCBwYXJ0aWNsZSAqL1xuICAgIGZvcih2YXIgaSA9IDA7IGkgPCBwSlMucGFydGljbGVzLmFycmF5Lmxlbmd0aDsgaSsrKXtcbiAgICAgIHZhciBwID0gcEpTLnBhcnRpY2xlcy5hcnJheVtpXTtcbiAgICAgIHAuZHJhdygpO1xuICAgIH1cblxuICB9O1xuXG4gIHBKUy5mbi5wYXJ0aWNsZXNFbXB0eSA9IGZ1bmN0aW9uKCl7XG4gICAgcEpTLnBhcnRpY2xlcy5hcnJheSA9IFtdO1xuICB9O1xuXG4gIHBKUy5mbi5wYXJ0aWNsZXNSZWZyZXNoID0gZnVuY3Rpb24oKXtcblxuICAgIC8qIGluaXQgYWxsICovXG4gICAgY2FuY2VsUmVxdWVzdEFuaW1GcmFtZShwSlMuZm4uY2hlY2tBbmltRnJhbWUpO1xuICAgIGNhbmNlbFJlcXVlc3RBbmltRnJhbWUocEpTLmZuLmRyYXdBbmltRnJhbWUpO1xuICAgIHBKUy50bXAuc291cmNlX3N2ZyA9IHVuZGVmaW5lZDtcbiAgICBwSlMudG1wLmltZ19vYmogPSB1bmRlZmluZWQ7XG4gICAgcEpTLnRtcC5jb3VudF9zdmcgPSAwO1xuICAgIHBKUy5mbi5wYXJ0aWNsZXNFbXB0eSgpO1xuICAgIHBKUy5mbi5jYW52YXNDbGVhcigpO1xuICAgIFxuICAgIC8qIHJlc3RhcnQgKi9cbiAgICBwSlMuZm4udmVuZG9ycy5zdGFydCgpO1xuXG4gIH07XG5cblxuICAvKiAtLS0tLS0tLS0tIHBKUyBmdW5jdGlvbnMgLSBwYXJ0aWNsZXMgaW50ZXJhY3Rpb24gLS0tLS0tLS0tLS0tICovXG5cbiAgcEpTLmZuLmludGVyYWN0LmxpbmtQYXJ0aWNsZXMgPSBmdW5jdGlvbihwMSwgcDIpe1xuXG4gICAgdmFyIGR4ID0gcDEueCAtIHAyLngsXG4gICAgICAgIGR5ID0gcDEueSAtIHAyLnksXG4gICAgICAgIGRpc3QgPSBNYXRoLnNxcnQoZHgqZHggKyBkeSpkeSk7XG5cbiAgICAvKiBkcmF3IGEgbGluZSBiZXR3ZWVuIHAxIGFuZCBwMiBpZiB0aGUgZGlzdGFuY2UgYmV0d2VlbiB0aGVtIGlzIHVuZGVyIHRoZSBjb25maWcgZGlzdGFuY2UgKi9cbiAgICBpZihkaXN0IDw9IHBKUy5wYXJ0aWNsZXMubGluZV9saW5rZWQuZGlzdGFuY2Upe1xuXG4gICAgICB2YXIgb3BhY2l0eV9saW5lID0gcEpTLnBhcnRpY2xlcy5saW5lX2xpbmtlZC5vcGFjaXR5IC0gKGRpc3QgLyAoMS9wSlMucGFydGljbGVzLmxpbmVfbGlua2VkLm9wYWNpdHkpKSAvIHBKUy5wYXJ0aWNsZXMubGluZV9saW5rZWQuZGlzdGFuY2U7XG5cbiAgICAgIGlmKG9wYWNpdHlfbGluZSA+IDApeyAgICAgICAgXG4gICAgICAgIFxuICAgICAgICAvKiBzdHlsZSAqL1xuICAgICAgICB2YXIgY29sb3JfbGluZSA9IHBKUy5wYXJ0aWNsZXMubGluZV9saW5rZWQuY29sb3JfcmdiX2xpbmU7XG4gICAgICAgIHBKUy5jYW52YXMuY3R4LnN0cm9rZVN0eWxlID0gJ3JnYmEoJytjb2xvcl9saW5lLnIrJywnK2NvbG9yX2xpbmUuZysnLCcrY29sb3JfbGluZS5iKycsJytvcGFjaXR5X2xpbmUrJyknO1xuICAgICAgICBwSlMuY2FudmFzLmN0eC5saW5lV2lkdGggPSBwSlMucGFydGljbGVzLmxpbmVfbGlua2VkLndpZHRoO1xuICAgICAgICAvL3BKUy5jYW52YXMuY3R4LmxpbmVDYXAgPSAncm91bmQnOyAvKiBwZXJmb3JtYW5jZSBpc3N1ZSAqL1xuICAgICAgICBcbiAgICAgICAgLyogcGF0aCAqL1xuICAgICAgICBwSlMuY2FudmFzLmN0eC5iZWdpblBhdGgoKTtcbiAgICAgICAgcEpTLmNhbnZhcy5jdHgubW92ZVRvKHAxLngsIHAxLnkpO1xuICAgICAgICBwSlMuY2FudmFzLmN0eC5saW5lVG8ocDIueCwgcDIueSk7XG4gICAgICAgIHBKUy5jYW52YXMuY3R4LnN0cm9rZSgpO1xuICAgICAgICBwSlMuY2FudmFzLmN0eC5jbG9zZVBhdGgoKTtcblxuICAgICAgfVxuXG4gICAgfVxuXG4gIH07XG5cblxuICBwSlMuZm4uaW50ZXJhY3QuYXR0cmFjdFBhcnRpY2xlcyAgPSBmdW5jdGlvbihwMSwgcDIpe1xuXG4gICAgLyogY29uZGVuc2VkIHBhcnRpY2xlcyAqL1xuICAgIHZhciBkeCA9IHAxLnggLSBwMi54LFxuICAgICAgICBkeSA9IHAxLnkgLSBwMi55LFxuICAgICAgICBkaXN0ID0gTWF0aC5zcXJ0KGR4KmR4ICsgZHkqZHkpO1xuXG4gICAgaWYoZGlzdCA8PSBwSlMucGFydGljbGVzLmxpbmVfbGlua2VkLmRpc3RhbmNlKXtcblxuICAgICAgdmFyIGF4ID0gZHgvKHBKUy5wYXJ0aWNsZXMubW92ZS5hdHRyYWN0LnJvdGF0ZVgqMTAwMCksXG4gICAgICAgICAgYXkgPSBkeS8ocEpTLnBhcnRpY2xlcy5tb3ZlLmF0dHJhY3Qucm90YXRlWSoxMDAwKTtcblxuICAgICAgcDEudnggLT0gYXg7XG4gICAgICBwMS52eSAtPSBheTtcblxuICAgICAgcDIudnggKz0gYXg7XG4gICAgICBwMi52eSArPSBheTtcblxuICAgIH1cbiAgICBcblxuICB9XG5cblxuICBwSlMuZm4uaW50ZXJhY3QuYm91bmNlUGFydGljbGVzID0gZnVuY3Rpb24ocDEsIHAyKXtcblxuICAgIHZhciBkeCA9IHAxLnggLSBwMi54LFxuICAgICAgICBkeSA9IHAxLnkgLSBwMi55LFxuICAgICAgICBkaXN0ID0gTWF0aC5zcXJ0KGR4KmR4ICsgZHkqZHkpLFxuICAgICAgICBkaXN0X3AgPSBwMS5yYWRpdXMrcDIucmFkaXVzO1xuXG4gICAgaWYoZGlzdCA8PSBkaXN0X3Ape1xuICAgICAgcDEudnggPSAtcDEudng7XG4gICAgICBwMS52eSA9IC1wMS52eTtcblxuICAgICAgcDIudnggPSAtcDIudng7XG4gICAgICBwMi52eSA9IC1wMi52eTtcbiAgICB9XG5cbiAgfVxuXG5cbiAgLyogLS0tLS0tLS0tLSBwSlMgZnVuY3Rpb25zIC0gbW9kZXMgZXZlbnRzIC0tLS0tLS0tLS0tLSAqL1xuXG4gIHBKUy5mbi5tb2Rlcy5wdXNoUGFydGljbGVzID0gZnVuY3Rpb24obmIsIHBvcyl7XG5cbiAgICBwSlMudG1wLnB1c2hpbmcgPSB0cnVlO1xuXG4gICAgZm9yKHZhciBpID0gMDsgaSA8IG5iOyBpKyspe1xuICAgICAgcEpTLnBhcnRpY2xlcy5hcnJheS5wdXNoKFxuICAgICAgICBuZXcgcEpTLmZuLnBhcnRpY2xlKFxuICAgICAgICAgIHBKUy5wYXJ0aWNsZXMuY29sb3IsXG4gICAgICAgICAgcEpTLnBhcnRpY2xlcy5vcGFjaXR5LnZhbHVlLFxuICAgICAgICAgIHtcbiAgICAgICAgICAgICd4JzogcG9zID8gcG9zLnBvc194IDogTWF0aC5yYW5kb20oKSAqIHBKUy5jYW52YXMudyxcbiAgICAgICAgICAgICd5JzogcG9zID8gcG9zLnBvc195IDogTWF0aC5yYW5kb20oKSAqIHBKUy5jYW52YXMuaFxuICAgICAgICAgIH1cbiAgICAgICAgKVxuICAgICAgKVxuICAgICAgaWYoaSA9PSBuYi0xKXtcbiAgICAgICAgaWYoIXBKUy5wYXJ0aWNsZXMubW92ZS5lbmFibGUpe1xuICAgICAgICAgIHBKUy5mbi5wYXJ0aWNsZXNEcmF3KCk7XG4gICAgICAgIH1cbiAgICAgICAgcEpTLnRtcC5wdXNoaW5nID0gZmFsc2U7XG4gICAgICB9XG4gICAgfVxuXG4gIH07XG5cblxuICBwSlMuZm4ubW9kZXMucmVtb3ZlUGFydGljbGVzID0gZnVuY3Rpb24obmIpe1xuXG4gICAgcEpTLnBhcnRpY2xlcy5hcnJheS5zcGxpY2UoMCwgbmIpO1xuICAgIGlmKCFwSlMucGFydGljbGVzLm1vdmUuZW5hYmxlKXtcbiAgICAgIHBKUy5mbi5wYXJ0aWNsZXNEcmF3KCk7XG4gICAgfVxuXG4gIH07XG5cblxuICBwSlMuZm4ubW9kZXMuYnViYmxlUGFydGljbGUgPSBmdW5jdGlvbihwKXtcblxuICAgIC8qIG9uIGhvdmVyIGV2ZW50ICovXG4gICAgaWYocEpTLmludGVyYWN0aXZpdHkuZXZlbnRzLm9uaG92ZXIuZW5hYmxlICYmIGlzSW5BcnJheSgnYnViYmxlJywgcEpTLmludGVyYWN0aXZpdHkuZXZlbnRzLm9uaG92ZXIubW9kZSkpe1xuXG4gICAgICB2YXIgZHhfbW91c2UgPSBwLnggLSBwSlMuaW50ZXJhY3Rpdml0eS5tb3VzZS5wb3NfeCxcbiAgICAgICAgICBkeV9tb3VzZSA9IHAueSAtIHBKUy5pbnRlcmFjdGl2aXR5Lm1vdXNlLnBvc195LFxuICAgICAgICAgIGRpc3RfbW91c2UgPSBNYXRoLnNxcnQoZHhfbW91c2UqZHhfbW91c2UgKyBkeV9tb3VzZSpkeV9tb3VzZSksXG4gICAgICAgICAgcmF0aW8gPSAxIC0gZGlzdF9tb3VzZSAvIHBKUy5pbnRlcmFjdGl2aXR5Lm1vZGVzLmJ1YmJsZS5kaXN0YW5jZTtcblxuICAgICAgZnVuY3Rpb24gaW5pdCgpe1xuICAgICAgICBwLm9wYWNpdHlfYnViYmxlID0gcC5vcGFjaXR5O1xuICAgICAgICBwLnJhZGl1c19idWJibGUgPSBwLnJhZGl1cztcbiAgICAgIH1cblxuICAgICAgLyogbW91c2Vtb3ZlIC0gY2hlY2sgcmF0aW8gKi9cbiAgICAgIGlmKGRpc3RfbW91c2UgPD0gcEpTLmludGVyYWN0aXZpdHkubW9kZXMuYnViYmxlLmRpc3RhbmNlKXtcblxuICAgICAgICBpZihyYXRpbyA+PSAwICYmIHBKUy5pbnRlcmFjdGl2aXR5LnN0YXR1cyA9PSAnbW91c2Vtb3ZlJyl7XG4gICAgICAgICAgXG4gICAgICAgICAgLyogc2l6ZSAqL1xuICAgICAgICAgIGlmKHBKUy5pbnRlcmFjdGl2aXR5Lm1vZGVzLmJ1YmJsZS5zaXplICE9IHBKUy5wYXJ0aWNsZXMuc2l6ZS52YWx1ZSl7XG5cbiAgICAgICAgICAgIGlmKHBKUy5pbnRlcmFjdGl2aXR5Lm1vZGVzLmJ1YmJsZS5zaXplID4gcEpTLnBhcnRpY2xlcy5zaXplLnZhbHVlKXtcbiAgICAgICAgICAgICAgdmFyIHNpemUgPSBwLnJhZGl1cyArIChwSlMuaW50ZXJhY3Rpdml0eS5tb2Rlcy5idWJibGUuc2l6ZSpyYXRpbyk7XG4gICAgICAgICAgICAgIGlmKHNpemUgPj0gMCl7XG4gICAgICAgICAgICAgICAgcC5yYWRpdXNfYnViYmxlID0gc2l6ZTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICAgIHZhciBkaWYgPSBwLnJhZGl1cyAtIHBKUy5pbnRlcmFjdGl2aXR5Lm1vZGVzLmJ1YmJsZS5zaXplLFxuICAgICAgICAgICAgICAgICAgc2l6ZSA9IHAucmFkaXVzIC0gKGRpZipyYXRpbyk7XG4gICAgICAgICAgICAgIGlmKHNpemUgPiAwKXtcbiAgICAgICAgICAgICAgICBwLnJhZGl1c19idWJibGUgPSBzaXplO1xuICAgICAgICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgICAgICBwLnJhZGl1c19idWJibGUgPSAwO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICB9XG5cbiAgICAgICAgICAvKiBvcGFjaXR5ICovXG4gICAgICAgICAgaWYocEpTLmludGVyYWN0aXZpdHkubW9kZXMuYnViYmxlLm9wYWNpdHkgIT0gcEpTLnBhcnRpY2xlcy5vcGFjaXR5LnZhbHVlKXtcblxuICAgICAgICAgICAgaWYocEpTLmludGVyYWN0aXZpdHkubW9kZXMuYnViYmxlLm9wYWNpdHkgPiBwSlMucGFydGljbGVzLm9wYWNpdHkudmFsdWUpe1xuICAgICAgICAgICAgICB2YXIgb3BhY2l0eSA9IHBKUy5pbnRlcmFjdGl2aXR5Lm1vZGVzLmJ1YmJsZS5vcGFjaXR5KnJhdGlvO1xuICAgICAgICAgICAgICBpZihvcGFjaXR5ID4gcC5vcGFjaXR5ICYmIG9wYWNpdHkgPD0gcEpTLmludGVyYWN0aXZpdHkubW9kZXMuYnViYmxlLm9wYWNpdHkpe1xuICAgICAgICAgICAgICAgIHAub3BhY2l0eV9idWJibGUgPSBvcGFjaXR5O1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgICAgdmFyIG9wYWNpdHkgPSBwLm9wYWNpdHkgLSAocEpTLnBhcnRpY2xlcy5vcGFjaXR5LnZhbHVlLXBKUy5pbnRlcmFjdGl2aXR5Lm1vZGVzLmJ1YmJsZS5vcGFjaXR5KSpyYXRpbztcbiAgICAgICAgICAgICAgaWYob3BhY2l0eSA8IHAub3BhY2l0eSAmJiBvcGFjaXR5ID49IHBKUy5pbnRlcmFjdGl2aXR5Lm1vZGVzLmJ1YmJsZS5vcGFjaXR5KXtcbiAgICAgICAgICAgICAgICBwLm9wYWNpdHlfYnViYmxlID0gb3BhY2l0eTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgfVxuXG4gICAgICAgIH1cblxuICAgICAgfWVsc2V7XG4gICAgICAgIGluaXQoKTtcbiAgICAgIH1cblxuXG4gICAgICAvKiBtb3VzZWxlYXZlICovXG4gICAgICBpZihwSlMuaW50ZXJhY3Rpdml0eS5zdGF0dXMgPT0gJ21vdXNlbGVhdmUnKXtcbiAgICAgICAgaW5pdCgpO1xuICAgICAgfVxuICAgIFxuICAgIH1cblxuICAgIC8qIG9uIGNsaWNrIGV2ZW50ICovXG4gICAgZWxzZSBpZihwSlMuaW50ZXJhY3Rpdml0eS5ldmVudHMub25jbGljay5lbmFibGUgJiYgaXNJbkFycmF5KCdidWJibGUnLCBwSlMuaW50ZXJhY3Rpdml0eS5ldmVudHMub25jbGljay5tb2RlKSl7XG5cblxuICAgICAgaWYocEpTLnRtcC5idWJibGVfY2xpY2tpbmcpe1xuICAgICAgICB2YXIgZHhfbW91c2UgPSBwLnggLSBwSlMuaW50ZXJhY3Rpdml0eS5tb3VzZS5jbGlja19wb3NfeCxcbiAgICAgICAgICAgIGR5X21vdXNlID0gcC55IC0gcEpTLmludGVyYWN0aXZpdHkubW91c2UuY2xpY2tfcG9zX3ksXG4gICAgICAgICAgICBkaXN0X21vdXNlID0gTWF0aC5zcXJ0KGR4X21vdXNlKmR4X21vdXNlICsgZHlfbW91c2UqZHlfbW91c2UpLFxuICAgICAgICAgICAgdGltZV9zcGVudCA9IChuZXcgRGF0ZSgpLmdldFRpbWUoKSAtIHBKUy5pbnRlcmFjdGl2aXR5Lm1vdXNlLmNsaWNrX3RpbWUpLzEwMDA7XG5cbiAgICAgICAgaWYodGltZV9zcGVudCA+IHBKUy5pbnRlcmFjdGl2aXR5Lm1vZGVzLmJ1YmJsZS5kdXJhdGlvbil7XG4gICAgICAgICAgcEpTLnRtcC5idWJibGVfZHVyYXRpb25fZW5kID0gdHJ1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmKHRpbWVfc3BlbnQgPiBwSlMuaW50ZXJhY3Rpdml0eS5tb2Rlcy5idWJibGUuZHVyYXRpb24qMil7XG4gICAgICAgICAgcEpTLnRtcC5idWJibGVfY2xpY2tpbmcgPSBmYWxzZTtcbiAgICAgICAgICBwSlMudG1wLmJ1YmJsZV9kdXJhdGlvbl9lbmQgPSBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgfVxuXG5cbiAgICAgIGZ1bmN0aW9uIHByb2Nlc3MoYnViYmxlX3BhcmFtLCBwYXJ0aWNsZXNfcGFyYW0sIHBfb2JqX2J1YmJsZSwgcF9vYmosIGlkKXtcblxuICAgICAgICBpZihidWJibGVfcGFyYW0gIT0gcGFydGljbGVzX3BhcmFtKXtcblxuICAgICAgICAgIGlmKCFwSlMudG1wLmJ1YmJsZV9kdXJhdGlvbl9lbmQpe1xuICAgICAgICAgICAgaWYoZGlzdF9tb3VzZSA8PSBwSlMuaW50ZXJhY3Rpdml0eS5tb2Rlcy5idWJibGUuZGlzdGFuY2Upe1xuICAgICAgICAgICAgICBpZihwX29ial9idWJibGUgIT0gdW5kZWZpbmVkKSB2YXIgb2JqID0gcF9vYmpfYnViYmxlO1xuICAgICAgICAgICAgICBlbHNlIHZhciBvYmogPSBwX29iajtcbiAgICAgICAgICAgICAgaWYob2JqICE9IGJ1YmJsZV9wYXJhbSl7XG4gICAgICAgICAgICAgICAgdmFyIHZhbHVlID0gcF9vYmogLSAodGltZV9zcGVudCAqIChwX29iaiAtIGJ1YmJsZV9wYXJhbSkgLyBwSlMuaW50ZXJhY3Rpdml0eS5tb2Rlcy5idWJibGUuZHVyYXRpb24pO1xuICAgICAgICAgICAgICAgIGlmKGlkID09ICdzaXplJykgcC5yYWRpdXNfYnViYmxlID0gdmFsdWU7XG4gICAgICAgICAgICAgICAgaWYoaWQgPT0gJ29wYWNpdHknKSBwLm9wYWNpdHlfYnViYmxlID0gdmFsdWU7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1lbHNle1xuICAgICAgICAgICAgICBpZihpZCA9PSAnc2l6ZScpIHAucmFkaXVzX2J1YmJsZSA9IHVuZGVmaW5lZDtcbiAgICAgICAgICAgICAgaWYoaWQgPT0gJ29wYWNpdHknKSBwLm9wYWNpdHlfYnViYmxlID0gdW5kZWZpbmVkO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1lbHNle1xuICAgICAgICAgICAgaWYocF9vYmpfYnViYmxlICE9IHVuZGVmaW5lZCl7XG4gICAgICAgICAgICAgIHZhciB2YWx1ZV90bXAgPSBwX29iaiAtICh0aW1lX3NwZW50ICogKHBfb2JqIC0gYnViYmxlX3BhcmFtKSAvIHBKUy5pbnRlcmFjdGl2aXR5Lm1vZGVzLmJ1YmJsZS5kdXJhdGlvbiksXG4gICAgICAgICAgICAgICAgICBkaWYgPSBidWJibGVfcGFyYW0gLSB2YWx1ZV90bXA7XG4gICAgICAgICAgICAgICAgICB2YWx1ZSA9IGJ1YmJsZV9wYXJhbSArIGRpZjtcbiAgICAgICAgICAgICAgaWYoaWQgPT0gJ3NpemUnKSBwLnJhZGl1c19idWJibGUgPSB2YWx1ZTtcbiAgICAgICAgICAgICAgaWYoaWQgPT0gJ29wYWNpdHknKSBwLm9wYWNpdHlfYnViYmxlID0gdmFsdWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuXG4gICAgICAgIH1cblxuICAgICAgfVxuXG4gICAgICBpZihwSlMudG1wLmJ1YmJsZV9jbGlja2luZyl7XG4gICAgICAgIC8qIHNpemUgKi9cbiAgICAgICAgcHJvY2VzcyhwSlMuaW50ZXJhY3Rpdml0eS5tb2Rlcy5idWJibGUuc2l6ZSwgcEpTLnBhcnRpY2xlcy5zaXplLnZhbHVlLCBwLnJhZGl1c19idWJibGUsIHAucmFkaXVzLCAnc2l6ZScpO1xuICAgICAgICAvKiBvcGFjaXR5ICovXG4gICAgICAgIHByb2Nlc3MocEpTLmludGVyYWN0aXZpdHkubW9kZXMuYnViYmxlLm9wYWNpdHksIHBKUy5wYXJ0aWNsZXMub3BhY2l0eS52YWx1ZSwgcC5vcGFjaXR5X2J1YmJsZSwgcC5vcGFjaXR5LCAnb3BhY2l0eScpO1xuICAgICAgfVxuXG4gICAgfVxuXG4gIH07XG5cblxuICBwSlMuZm4ubW9kZXMucmVwdWxzZVBhcnRpY2xlID0gZnVuY3Rpb24ocCl7XG5cbiAgICBpZihwSlMuaW50ZXJhY3Rpdml0eS5ldmVudHMub25ob3Zlci5lbmFibGUgJiYgaXNJbkFycmF5KCdyZXB1bHNlJywgcEpTLmludGVyYWN0aXZpdHkuZXZlbnRzLm9uaG92ZXIubW9kZSkgJiYgcEpTLmludGVyYWN0aXZpdHkuc3RhdHVzID09ICdtb3VzZW1vdmUnKSB7XG5cbiAgICAgIHZhciBkeF9tb3VzZSA9IHAueCAtIHBKUy5pbnRlcmFjdGl2aXR5Lm1vdXNlLnBvc194LFxuICAgICAgICAgIGR5X21vdXNlID0gcC55IC0gcEpTLmludGVyYWN0aXZpdHkubW91c2UucG9zX3ksXG4gICAgICAgICAgZGlzdF9tb3VzZSA9IE1hdGguc3FydChkeF9tb3VzZSpkeF9tb3VzZSArIGR5X21vdXNlKmR5X21vdXNlKTtcblxuICAgICAgdmFyIG5vcm1WZWMgPSB7eDogZHhfbW91c2UvZGlzdF9tb3VzZSwgeTogZHlfbW91c2UvZGlzdF9tb3VzZX0sXG4gICAgICAgICAgcmVwdWxzZVJhZGl1cyA9IHBKUy5pbnRlcmFjdGl2aXR5Lm1vZGVzLnJlcHVsc2UuZGlzdGFuY2UsXG4gICAgICAgICAgdmVsb2NpdHkgPSAxMDAsXG4gICAgICAgICAgcmVwdWxzZUZhY3RvciA9IGNsYW1wKCgxL3JlcHVsc2VSYWRpdXMpKigtMSpNYXRoLnBvdyhkaXN0X21vdXNlL3JlcHVsc2VSYWRpdXMsMikrMSkqcmVwdWxzZVJhZGl1cyp2ZWxvY2l0eSwgMCwgNTApO1xuICAgICAgXG4gICAgICB2YXIgcG9zID0ge1xuICAgICAgICB4OiBwLnggKyBub3JtVmVjLnggKiByZXB1bHNlRmFjdG9yLFxuICAgICAgICB5OiBwLnkgKyBub3JtVmVjLnkgKiByZXB1bHNlRmFjdG9yXG4gICAgICB9XG5cbiAgICAgIGlmKHBKUy5wYXJ0aWNsZXMubW92ZS5vdXRfbW9kZSA9PSAnYm91bmNlJyl7XG4gICAgICAgIGlmKHBvcy54IC0gcC5yYWRpdXMgPiAwICYmIHBvcy54ICsgcC5yYWRpdXMgPCBwSlMuY2FudmFzLncpIHAueCA9IHBvcy54O1xuICAgICAgICBpZihwb3MueSAtIHAucmFkaXVzID4gMCAmJiBwb3MueSArIHAucmFkaXVzIDwgcEpTLmNhbnZhcy5oKSBwLnkgPSBwb3MueTtcbiAgICAgIH1lbHNle1xuICAgICAgICBwLnggPSBwb3MueDtcbiAgICAgICAgcC55ID0gcG9zLnk7XG4gICAgICB9XG4gICAgXG4gICAgfVxuXG5cbiAgICBlbHNlIGlmKHBKUy5pbnRlcmFjdGl2aXR5LmV2ZW50cy5vbmNsaWNrLmVuYWJsZSAmJiBpc0luQXJyYXkoJ3JlcHVsc2UnLCBwSlMuaW50ZXJhY3Rpdml0eS5ldmVudHMub25jbGljay5tb2RlKSkge1xuXG4gICAgICBpZighcEpTLnRtcC5yZXB1bHNlX2ZpbmlzaCl7XG4gICAgICAgIHBKUy50bXAucmVwdWxzZV9jb3VudCsrO1xuICAgICAgICBpZihwSlMudG1wLnJlcHVsc2VfY291bnQgPT0gcEpTLnBhcnRpY2xlcy5hcnJheS5sZW5ndGgpe1xuICAgICAgICAgIHBKUy50bXAucmVwdWxzZV9maW5pc2ggPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmKHBKUy50bXAucmVwdWxzZV9jbGlja2luZyl7XG5cbiAgICAgICAgdmFyIHJlcHVsc2VSYWRpdXMgPSBNYXRoLnBvdyhwSlMuaW50ZXJhY3Rpdml0eS5tb2Rlcy5yZXB1bHNlLmRpc3RhbmNlLzYsIDMpO1xuXG4gICAgICAgIHZhciBkeCA9IHBKUy5pbnRlcmFjdGl2aXR5Lm1vdXNlLmNsaWNrX3Bvc194IC0gcC54LFxuICAgICAgICAgICAgZHkgPSBwSlMuaW50ZXJhY3Rpdml0eS5tb3VzZS5jbGlja19wb3NfeSAtIHAueSxcbiAgICAgICAgICAgIGQgPSBkeCpkeCArIGR5KmR5O1xuXG4gICAgICAgIHZhciBmb3JjZSA9IC1yZXB1bHNlUmFkaXVzIC8gZCAqIDE7XG5cbiAgICAgICAgZnVuY3Rpb24gcHJvY2Vzcygpe1xuXG4gICAgICAgICAgdmFyIGYgPSBNYXRoLmF0YW4yKGR5LGR4KTtcbiAgICAgICAgICBwLnZ4ID0gZm9yY2UgKiBNYXRoLmNvcyhmKTtcbiAgICAgICAgICBwLnZ5ID0gZm9yY2UgKiBNYXRoLnNpbihmKTtcblxuICAgICAgICAgIGlmKHBKUy5wYXJ0aWNsZXMubW92ZS5vdXRfbW9kZSA9PSAnYm91bmNlJyl7XG4gICAgICAgICAgICB2YXIgcG9zID0ge1xuICAgICAgICAgICAgICB4OiBwLnggKyBwLnZ4LFxuICAgICAgICAgICAgICB5OiBwLnkgKyBwLnZ5XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAocG9zLnggKyBwLnJhZGl1cyA+IHBKUy5jYW52YXMudykgcC52eCA9IC1wLnZ4O1xuICAgICAgICAgICAgZWxzZSBpZiAocG9zLnggLSBwLnJhZGl1cyA8IDApIHAudnggPSAtcC52eDtcbiAgICAgICAgICAgIGlmIChwb3MueSArIHAucmFkaXVzID4gcEpTLmNhbnZhcy5oKSBwLnZ5ID0gLXAudnk7XG4gICAgICAgICAgICBlbHNlIGlmIChwb3MueSAtIHAucmFkaXVzIDwgMCkgcC52eSA9IC1wLnZ5O1xuICAgICAgICAgIH1cblxuICAgICAgICB9XG5cbiAgICAgICAgLy8gZGVmYXVsdFxuICAgICAgICBpZihkIDw9IHJlcHVsc2VSYWRpdXMpe1xuICAgICAgICAgIHByb2Nlc3MoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIGJhbmcgLSBzbG93IG1vdGlvbiBtb2RlXG4gICAgICAgIC8vIGlmKCFwSlMudG1wLnJlcHVsc2VfZmluaXNoKXtcbiAgICAgICAgLy8gICBpZihkIDw9IHJlcHVsc2VSYWRpdXMpe1xuICAgICAgICAvLyAgICAgcHJvY2VzcygpO1xuICAgICAgICAvLyAgIH1cbiAgICAgICAgLy8gfWVsc2V7XG4gICAgICAgIC8vICAgcHJvY2VzcygpO1xuICAgICAgICAvLyB9XG4gICAgICAgIFxuXG4gICAgICB9ZWxzZXtcblxuICAgICAgICBpZihwSlMudG1wLnJlcHVsc2VfY2xpY2tpbmcgPT0gZmFsc2Upe1xuXG4gICAgICAgICAgcC52eCA9IHAudnhfaTtcbiAgICAgICAgICBwLnZ5ID0gcC52eV9pO1xuICAgICAgICBcbiAgICAgICAgfVxuXG4gICAgICB9XG5cbiAgICB9XG5cbiAgfVxuXG5cbiAgcEpTLmZuLm1vZGVzLmdyYWJQYXJ0aWNsZSA9IGZ1bmN0aW9uKHApe1xuXG4gICAgaWYocEpTLmludGVyYWN0aXZpdHkuZXZlbnRzLm9uaG92ZXIuZW5hYmxlICYmIHBKUy5pbnRlcmFjdGl2aXR5LnN0YXR1cyA9PSAnbW91c2Vtb3ZlJyl7XG5cbiAgICAgIHZhciBkeF9tb3VzZSA9IHAueCAtIHBKUy5pbnRlcmFjdGl2aXR5Lm1vdXNlLnBvc194LFxuICAgICAgICAgIGR5X21vdXNlID0gcC55IC0gcEpTLmludGVyYWN0aXZpdHkubW91c2UucG9zX3ksXG4gICAgICAgICAgZGlzdF9tb3VzZSA9IE1hdGguc3FydChkeF9tb3VzZSpkeF9tb3VzZSArIGR5X21vdXNlKmR5X21vdXNlKTtcblxuICAgICAgLyogZHJhdyBhIGxpbmUgYmV0d2VlbiB0aGUgY3Vyc29yIGFuZCB0aGUgcGFydGljbGUgaWYgdGhlIGRpc3RhbmNlIGJldHdlZW4gdGhlbSBpcyB1bmRlciB0aGUgY29uZmlnIGRpc3RhbmNlICovXG4gICAgICBpZihkaXN0X21vdXNlIDw9IHBKUy5pbnRlcmFjdGl2aXR5Lm1vZGVzLmdyYWIuZGlzdGFuY2Upe1xuXG4gICAgICAgIHZhciBvcGFjaXR5X2xpbmUgPSBwSlMuaW50ZXJhY3Rpdml0eS5tb2Rlcy5ncmFiLmxpbmVfbGlua2VkLm9wYWNpdHkgLSAoZGlzdF9tb3VzZSAvICgxL3BKUy5pbnRlcmFjdGl2aXR5Lm1vZGVzLmdyYWIubGluZV9saW5rZWQub3BhY2l0eSkpIC8gcEpTLmludGVyYWN0aXZpdHkubW9kZXMuZ3JhYi5kaXN0YW5jZTtcblxuICAgICAgICBpZihvcGFjaXR5X2xpbmUgPiAwKXtcblxuICAgICAgICAgIC8qIHN0eWxlICovXG4gICAgICAgICAgdmFyIGNvbG9yX2xpbmUgPSBwSlMucGFydGljbGVzLmxpbmVfbGlua2VkLmNvbG9yX3JnYl9saW5lO1xuICAgICAgICAgIHBKUy5jYW52YXMuY3R4LnN0cm9rZVN0eWxlID0gJ3JnYmEoJytjb2xvcl9saW5lLnIrJywnK2NvbG9yX2xpbmUuZysnLCcrY29sb3JfbGluZS5iKycsJytvcGFjaXR5X2xpbmUrJyknO1xuICAgICAgICAgIHBKUy5jYW52YXMuY3R4LmxpbmVXaWR0aCA9IHBKUy5wYXJ0aWNsZXMubGluZV9saW5rZWQud2lkdGg7XG4gICAgICAgICAgLy9wSlMuY2FudmFzLmN0eC5saW5lQ2FwID0gJ3JvdW5kJzsgLyogcGVyZm9ybWFuY2UgaXNzdWUgKi9cbiAgICAgICAgICBcbiAgICAgICAgICAvKiBwYXRoICovXG4gICAgICAgICAgcEpTLmNhbnZhcy5jdHguYmVnaW5QYXRoKCk7XG4gICAgICAgICAgcEpTLmNhbnZhcy5jdHgubW92ZVRvKHAueCwgcC55KTtcbiAgICAgICAgICBwSlMuY2FudmFzLmN0eC5saW5lVG8ocEpTLmludGVyYWN0aXZpdHkubW91c2UucG9zX3gsIHBKUy5pbnRlcmFjdGl2aXR5Lm1vdXNlLnBvc195KTtcbiAgICAgICAgICBwSlMuY2FudmFzLmN0eC5zdHJva2UoKTtcbiAgICAgICAgICBwSlMuY2FudmFzLmN0eC5jbG9zZVBhdGgoKTtcblxuICAgICAgICB9XG5cbiAgICAgIH1cblxuICAgIH1cblxuICB9O1xuXG5cblxuICAvKiAtLS0tLS0tLS0tIHBKUyBmdW5jdGlvbnMgLSB2ZW5kb3JzIC0tLS0tLS0tLS0tLSAqL1xuXG4gIHBKUy5mbi52ZW5kb3JzLmV2ZW50c0xpc3RlbmVycyA9IGZ1bmN0aW9uKCl7XG5cbiAgICAvKiBldmVudHMgdGFyZ2V0IGVsZW1lbnQgKi9cbiAgICBpZihwSlMuaW50ZXJhY3Rpdml0eS5kZXRlY3Rfb24gPT0gJ3dpbmRvdycpe1xuICAgICAgcEpTLmludGVyYWN0aXZpdHkuZWwgPSB3aW5kb3c7XG4gICAgfWVsc2V7XG4gICAgICBwSlMuaW50ZXJhY3Rpdml0eS5lbCA9IHBKUy5jYW52YXMuZWw7XG4gICAgfVxuXG5cbiAgICAvKiBkZXRlY3QgbW91c2UgcG9zIC0gb24gaG92ZXIgLyBjbGljayBldmVudCAqL1xuICAgIGlmKHBKUy5pbnRlcmFjdGl2aXR5LmV2ZW50cy5vbmhvdmVyLmVuYWJsZSB8fCBwSlMuaW50ZXJhY3Rpdml0eS5ldmVudHMub25jbGljay5lbmFibGUpe1xuXG4gICAgICAvKiBlbCBvbiBtb3VzZW1vdmUgKi9cbiAgICAgIHBKUy5pbnRlcmFjdGl2aXR5LmVsLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbW92ZScsIGZ1bmN0aW9uKGUpe1xuXG4gICAgICAgIGlmKHBKUy5pbnRlcmFjdGl2aXR5LmVsID09IHdpbmRvdyl7XG4gICAgICAgICAgdmFyIHBvc194ID0gZS5jbGllbnRYLFxuICAgICAgICAgICAgICBwb3NfeSA9IGUuY2xpZW50WTtcbiAgICAgICAgfVxuICAgICAgICBlbHNle1xuICAgICAgICAgIHZhciBwb3NfeCA9IGUub2Zmc2V0WCB8fCBlLmNsaWVudFgsXG4gICAgICAgICAgICAgIHBvc195ID0gZS5vZmZzZXRZIHx8IGUuY2xpZW50WTtcbiAgICAgICAgfVxuXG4gICAgICAgIHBKUy5pbnRlcmFjdGl2aXR5Lm1vdXNlLnBvc194ID0gcG9zX3g7XG4gICAgICAgIHBKUy5pbnRlcmFjdGl2aXR5Lm1vdXNlLnBvc195ID0gcG9zX3k7XG5cbiAgICAgICAgaWYocEpTLnRtcC5yZXRpbmEpe1xuICAgICAgICAgIHBKUy5pbnRlcmFjdGl2aXR5Lm1vdXNlLnBvc194ICo9IHBKUy5jYW52YXMucHhyYXRpbztcbiAgICAgICAgICBwSlMuaW50ZXJhY3Rpdml0eS5tb3VzZS5wb3NfeSAqPSBwSlMuY2FudmFzLnB4cmF0aW87XG4gICAgICAgIH1cblxuICAgICAgICBwSlMuaW50ZXJhY3Rpdml0eS5zdGF0dXMgPSAnbW91c2Vtb3ZlJztcblxuICAgICAgfSk7XG5cbiAgICAgIC8qIGVsIG9uIG9ubW91c2VsZWF2ZSAqL1xuICAgICAgcEpTLmludGVyYWN0aXZpdHkuZWwuYWRkRXZlbnRMaXN0ZW5lcignbW91c2VsZWF2ZScsIGZ1bmN0aW9uKGUpe1xuXG4gICAgICAgIHBKUy5pbnRlcmFjdGl2aXR5Lm1vdXNlLnBvc194ID0gbnVsbDtcbiAgICAgICAgcEpTLmludGVyYWN0aXZpdHkubW91c2UucG9zX3kgPSBudWxsO1xuICAgICAgICBwSlMuaW50ZXJhY3Rpdml0eS5zdGF0dXMgPSAnbW91c2VsZWF2ZSc7XG5cbiAgICAgIH0pO1xuXG4gICAgfVxuXG4gICAgLyogb24gY2xpY2sgZXZlbnQgKi9cbiAgICBpZihwSlMuaW50ZXJhY3Rpdml0eS5ldmVudHMub25jbGljay5lbmFibGUpe1xuXG4gICAgICBwSlMuaW50ZXJhY3Rpdml0eS5lbC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKCl7XG5cbiAgICAgICAgcEpTLmludGVyYWN0aXZpdHkubW91c2UuY2xpY2tfcG9zX3ggPSBwSlMuaW50ZXJhY3Rpdml0eS5tb3VzZS5wb3NfeDtcbiAgICAgICAgcEpTLmludGVyYWN0aXZpdHkubW91c2UuY2xpY2tfcG9zX3kgPSBwSlMuaW50ZXJhY3Rpdml0eS5tb3VzZS5wb3NfeTtcbiAgICAgICAgcEpTLmludGVyYWN0aXZpdHkubW91c2UuY2xpY2tfdGltZSA9IG5ldyBEYXRlKCkuZ2V0VGltZSgpO1xuXG4gICAgICAgIGlmKHBKUy5pbnRlcmFjdGl2aXR5LmV2ZW50cy5vbmNsaWNrLmVuYWJsZSl7XG5cbiAgICAgICAgICBzd2l0Y2gocEpTLmludGVyYWN0aXZpdHkuZXZlbnRzLm9uY2xpY2subW9kZSl7XG5cbiAgICAgICAgICAgIGNhc2UgJ3B1c2gnOlxuICAgICAgICAgICAgICBpZihwSlMucGFydGljbGVzLm1vdmUuZW5hYmxlKXtcbiAgICAgICAgICAgICAgICBwSlMuZm4ubW9kZXMucHVzaFBhcnRpY2xlcyhwSlMuaW50ZXJhY3Rpdml0eS5tb2Rlcy5wdXNoLnBhcnRpY2xlc19uYiwgcEpTLmludGVyYWN0aXZpdHkubW91c2UpO1xuICAgICAgICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgICAgICBpZihwSlMuaW50ZXJhY3Rpdml0eS5tb2Rlcy5wdXNoLnBhcnRpY2xlc19uYiA9PSAxKXtcbiAgICAgICAgICAgICAgICAgIHBKUy5mbi5tb2Rlcy5wdXNoUGFydGljbGVzKHBKUy5pbnRlcmFjdGl2aXR5Lm1vZGVzLnB1c2gucGFydGljbGVzX25iLCBwSlMuaW50ZXJhY3Rpdml0eS5tb3VzZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2UgaWYocEpTLmludGVyYWN0aXZpdHkubW9kZXMucHVzaC5wYXJ0aWNsZXNfbmIgPiAxKXtcbiAgICAgICAgICAgICAgICAgIHBKUy5mbi5tb2Rlcy5wdXNoUGFydGljbGVzKHBKUy5pbnRlcmFjdGl2aXR5Lm1vZGVzLnB1c2gucGFydGljbGVzX25iKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICBjYXNlICdyZW1vdmUnOlxuICAgICAgICAgICAgICBwSlMuZm4ubW9kZXMucmVtb3ZlUGFydGljbGVzKHBKUy5pbnRlcmFjdGl2aXR5Lm1vZGVzLnJlbW92ZS5wYXJ0aWNsZXNfbmIpO1xuICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgIGNhc2UgJ2J1YmJsZSc6XG4gICAgICAgICAgICAgIHBKUy50bXAuYnViYmxlX2NsaWNraW5nID0gdHJ1ZTtcbiAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICBjYXNlICdyZXB1bHNlJzpcbiAgICAgICAgICAgICAgcEpTLnRtcC5yZXB1bHNlX2NsaWNraW5nID0gdHJ1ZTtcbiAgICAgICAgICAgICAgcEpTLnRtcC5yZXB1bHNlX2NvdW50ID0gMDtcbiAgICAgICAgICAgICAgcEpTLnRtcC5yZXB1bHNlX2ZpbmlzaCA9IGZhbHNlO1xuICAgICAgICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7XG4gICAgICAgICAgICAgICAgcEpTLnRtcC5yZXB1bHNlX2NsaWNraW5nID0gZmFsc2U7XG4gICAgICAgICAgICAgIH0sIHBKUy5pbnRlcmFjdGl2aXR5Lm1vZGVzLnJlcHVsc2UuZHVyYXRpb24qMTAwMClcbiAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgfVxuXG4gICAgICAgIH1cblxuICAgICAgfSk7XG4gICAgICAgIFxuICAgIH1cblxuXG4gIH07XG5cbiAgcEpTLmZuLnZlbmRvcnMuZGVuc2l0eUF1dG9QYXJ0aWNsZXMgPSBmdW5jdGlvbigpe1xuXG4gICAgaWYocEpTLnBhcnRpY2xlcy5udW1iZXIuZGVuc2l0eS5lbmFibGUpe1xuXG4gICAgICAvKiBjYWxjIGFyZWEgKi9cbiAgICAgIHZhciBhcmVhID0gcEpTLmNhbnZhcy5lbC53aWR0aCAqIHBKUy5jYW52YXMuZWwuaGVpZ2h0IC8gMTAwMDtcbiAgICAgIGlmKHBKUy50bXAucmV0aW5hKXtcbiAgICAgICAgYXJlYSA9IGFyZWEvKHBKUy5jYW52YXMucHhyYXRpbyoyKTtcbiAgICAgIH1cblxuICAgICAgLyogY2FsYyBudW1iZXIgb2YgcGFydGljbGVzIGJhc2VkIG9uIGRlbnNpdHkgYXJlYSAqL1xuICAgICAgdmFyIG5iX3BhcnRpY2xlcyA9IGFyZWEgKiBwSlMucGFydGljbGVzLm51bWJlci52YWx1ZSAvIHBKUy5wYXJ0aWNsZXMubnVtYmVyLmRlbnNpdHkudmFsdWVfYXJlYTtcblxuICAgICAgLyogYWRkIG9yIHJlbW92ZSBYIHBhcnRpY2xlcyAqL1xuICAgICAgdmFyIG1pc3NpbmdfcGFydGljbGVzID0gcEpTLnBhcnRpY2xlcy5hcnJheS5sZW5ndGggLSBuYl9wYXJ0aWNsZXM7XG4gICAgICBpZihtaXNzaW5nX3BhcnRpY2xlcyA8IDApIHBKUy5mbi5tb2Rlcy5wdXNoUGFydGljbGVzKE1hdGguYWJzKG1pc3NpbmdfcGFydGljbGVzKSk7XG4gICAgICBlbHNlIHBKUy5mbi5tb2Rlcy5yZW1vdmVQYXJ0aWNsZXMobWlzc2luZ19wYXJ0aWNsZXMpO1xuXG4gICAgfVxuXG4gIH07XG5cblxuICBwSlMuZm4udmVuZG9ycy5jaGVja092ZXJsYXAgPSBmdW5jdGlvbihwMSwgcG9zaXRpb24pe1xuICAgIGZvcih2YXIgaSA9IDA7IGkgPCBwSlMucGFydGljbGVzLmFycmF5Lmxlbmd0aDsgaSsrKXtcbiAgICAgIHZhciBwMiA9IHBKUy5wYXJ0aWNsZXMuYXJyYXlbaV07XG5cbiAgICAgIHZhciBkeCA9IHAxLnggLSBwMi54LFxuICAgICAgICAgIGR5ID0gcDEueSAtIHAyLnksXG4gICAgICAgICAgZGlzdCA9IE1hdGguc3FydChkeCpkeCArIGR5KmR5KTtcblxuICAgICAgaWYoZGlzdCA8PSBwMS5yYWRpdXMgKyBwMi5yYWRpdXMpe1xuICAgICAgICBwMS54ID0gcG9zaXRpb24gPyBwb3NpdGlvbi54IDogTWF0aC5yYW5kb20oKSAqIHBKUy5jYW52YXMudztcbiAgICAgICAgcDEueSA9IHBvc2l0aW9uID8gcG9zaXRpb24ueSA6IE1hdGgucmFuZG9tKCkgKiBwSlMuY2FudmFzLmg7XG4gICAgICAgIHBKUy5mbi52ZW5kb3JzLmNoZWNrT3ZlcmxhcChwMSk7XG4gICAgICB9XG4gICAgfVxuICB9O1xuXG5cbiAgcEpTLmZuLnZlbmRvcnMuY3JlYXRlU3ZnSW1nID0gZnVuY3Rpb24ocCl7XG5cbiAgICAvKiBzZXQgY29sb3IgdG8gc3ZnIGVsZW1lbnQgKi9cbiAgICB2YXIgc3ZnWG1sID0gcEpTLnRtcC5zb3VyY2Vfc3ZnLFxuICAgICAgICByZ2JIZXggPSAvIyhbMC05QS1GXXszLDZ9KS9naSxcbiAgICAgICAgY29sb3JlZFN2Z1htbCA9IHN2Z1htbC5yZXBsYWNlKHJnYkhleCwgZnVuY3Rpb24gKG0sIHIsIGcsIGIpIHtcbiAgICAgICAgICBpZihwLmNvbG9yLnJnYil7XG4gICAgICAgICAgICB2YXIgY29sb3JfdmFsdWUgPSAncmdiYSgnK3AuY29sb3IucmdiLnIrJywnK3AuY29sb3IucmdiLmcrJywnK3AuY29sb3IucmdiLmIrJywnK3Aub3BhY2l0eSsnKSc7XG4gICAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICB2YXIgY29sb3JfdmFsdWUgPSAnaHNsYSgnK3AuY29sb3IuaHNsLmgrJywnK3AuY29sb3IuaHNsLnMrJyUsJytwLmNvbG9yLmhzbC5sKyclLCcrcC5vcGFjaXR5KycpJztcbiAgICAgICAgICB9XG4gICAgICAgICAgcmV0dXJuIGNvbG9yX3ZhbHVlO1xuICAgICAgICB9KTtcblxuICAgIC8qIHByZXBhcmUgdG8gY3JlYXRlIGltZyB3aXRoIGNvbG9yZWQgc3ZnICovXG4gICAgdmFyIHN2ZyA9IG5ldyBCbG9iKFtjb2xvcmVkU3ZnWG1sXSwge3R5cGU6ICdpbWFnZS9zdmcreG1sO2NoYXJzZXQ9dXRmLTgnfSksXG4gICAgICAgIERPTVVSTCA9IHdpbmRvdy5VUkwgfHwgd2luZG93LndlYmtpdFVSTCB8fCB3aW5kb3csXG4gICAgICAgIHVybCA9IERPTVVSTC5jcmVhdGVPYmplY3RVUkwoc3ZnKTtcblxuICAgIC8qIGNyZWF0ZSBwYXJ0aWNsZSBpbWcgb2JqICovXG4gICAgdmFyIGltZyA9IG5ldyBJbWFnZSgpO1xuICAgIGltZy5hZGRFdmVudExpc3RlbmVyKCdsb2FkJywgZnVuY3Rpb24oKXtcbiAgICAgIHAuaW1nLm9iaiA9IGltZztcbiAgICAgIHAuaW1nLmxvYWRlZCA9IHRydWU7XG4gICAgICBET01VUkwucmV2b2tlT2JqZWN0VVJMKHVybCk7XG4gICAgICBwSlMudG1wLmNvdW50X3N2ZysrO1xuICAgIH0pO1xuICAgIGltZy5zcmMgPSB1cmw7XG5cbiAgfTtcblxuXG4gIHBKUy5mbi52ZW5kb3JzLmRlc3Ryb3lwSlMgPSBmdW5jdGlvbigpe1xuICAgIGNhbmNlbEFuaW1hdGlvbkZyYW1lKHBKUy5mbi5kcmF3QW5pbUZyYW1lKTtcbiAgICBjYW52YXNfZWwucmVtb3ZlKCk7XG4gICAgcEpTRG9tID0gbnVsbDtcbiAgfTtcblxuXG4gIHBKUy5mbi52ZW5kb3JzLmRyYXdTaGFwZSA9IGZ1bmN0aW9uKGMsIHN0YXJ0WCwgc3RhcnRZLCBzaWRlTGVuZ3RoLCBzaWRlQ291bnROdW1lcmF0b3IsIHNpZGVDb3VudERlbm9taW5hdG9yKXtcblxuICAgIC8vIEJ5IFByb2dyYW1taW5nIFRob21hcyAtIGh0dHBzOi8vcHJvZ3JhbW1pbmd0aG9tYXMud29yZHByZXNzLmNvbS8yMDEzLzA0LzAzL24tc2lkZWQtc2hhcGVzL1xuICAgIHZhciBzaWRlQ291bnQgPSBzaWRlQ291bnROdW1lcmF0b3IgKiBzaWRlQ291bnREZW5vbWluYXRvcjtcbiAgICB2YXIgZGVjaW1hbFNpZGVzID0gc2lkZUNvdW50TnVtZXJhdG9yIC8gc2lkZUNvdW50RGVub21pbmF0b3I7XG4gICAgdmFyIGludGVyaW9yQW5nbGVEZWdyZWVzID0gKDE4MCAqIChkZWNpbWFsU2lkZXMgLSAyKSkgLyBkZWNpbWFsU2lkZXM7XG4gICAgdmFyIGludGVyaW9yQW5nbGUgPSBNYXRoLlBJIC0gTWF0aC5QSSAqIGludGVyaW9yQW5nbGVEZWdyZWVzIC8gMTgwOyAvLyBjb252ZXJ0IHRvIHJhZGlhbnNcbiAgICBjLnNhdmUoKTtcbiAgICBjLmJlZ2luUGF0aCgpO1xuICAgIGMudHJhbnNsYXRlKHN0YXJ0WCwgc3RhcnRZKTtcbiAgICBjLm1vdmVUbygwLDApO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgc2lkZUNvdW50OyBpKyspIHtcbiAgICAgIGMubGluZVRvKHNpZGVMZW5ndGgsMCk7XG4gICAgICBjLnRyYW5zbGF0ZShzaWRlTGVuZ3RoLDApO1xuICAgICAgYy5yb3RhdGUoaW50ZXJpb3JBbmdsZSk7XG4gICAgfVxuICAgIC8vYy5zdHJva2UoKTtcbiAgICBjLmZpbGwoKTtcbiAgICBjLnJlc3RvcmUoKTtcblxuICB9O1xuXG4gIHBKUy5mbi52ZW5kb3JzLmV4cG9ydEltZyA9IGZ1bmN0aW9uKCl7XG4gICAgd2luZG93Lm9wZW4ocEpTLmNhbnZhcy5lbC50b0RhdGFVUkwoJ2ltYWdlL3BuZycpLCAnX2JsYW5rJyk7XG4gIH07XG5cblxuICBwSlMuZm4udmVuZG9ycy5sb2FkSW1nID0gZnVuY3Rpb24odHlwZSl7XG5cbiAgICBwSlMudG1wLmltZ19lcnJvciA9IHVuZGVmaW5lZDtcblxuICAgIGlmKHBKUy5wYXJ0aWNsZXMuc2hhcGUuaW1hZ2Uuc3JjICE9ICcnKXtcblxuICAgICAgaWYodHlwZSA9PSAnc3ZnJyl7XG5cbiAgICAgICAgdmFyIHhociA9IG5ldyBYTUxIdHRwUmVxdWVzdCgpO1xuICAgICAgICB4aHIub3BlbignR0VUJywgcEpTLnBhcnRpY2xlcy5zaGFwZS5pbWFnZS5zcmMpO1xuICAgICAgICB4aHIub25yZWFkeXN0YXRlY2hhbmdlID0gZnVuY3Rpb24gKGRhdGEpIHtcbiAgICAgICAgICBpZih4aHIucmVhZHlTdGF0ZSA9PSA0KXtcbiAgICAgICAgICAgIGlmKHhoci5zdGF0dXMgPT0gMjAwKXtcbiAgICAgICAgICAgICAgcEpTLnRtcC5zb3VyY2Vfc3ZnID0gZGF0YS5jdXJyZW50VGFyZ2V0LnJlc3BvbnNlO1xuICAgICAgICAgICAgICBwSlMuZm4udmVuZG9ycy5jaGVja0JlZm9yZURyYXcoKTtcbiAgICAgICAgICAgIH1lbHNle1xuICAgICAgICAgICAgICBjb25zb2xlLmxvZygnRXJyb3IgcEpTIC0gSW1hZ2Ugbm90IGZvdW5kJyk7XG4gICAgICAgICAgICAgIHBKUy50bXAuaW1nX2Vycm9yID0gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgeGhyLnNlbmQoKTtcblxuICAgICAgfWVsc2V7XG5cbiAgICAgICAgdmFyIGltZyA9IG5ldyBJbWFnZSgpO1xuICAgICAgICBpbWcuYWRkRXZlbnRMaXN0ZW5lcignbG9hZCcsIGZ1bmN0aW9uKCl7XG4gICAgICAgICAgcEpTLnRtcC5pbWdfb2JqID0gaW1nO1xuICAgICAgICAgIHBKUy5mbi52ZW5kb3JzLmNoZWNrQmVmb3JlRHJhdygpO1xuICAgICAgICB9KTtcbiAgICAgICAgaW1nLnNyYyA9IHBKUy5wYXJ0aWNsZXMuc2hhcGUuaW1hZ2Uuc3JjO1xuXG4gICAgICB9XG5cbiAgICB9ZWxzZXtcbiAgICAgIGNvbnNvbGUubG9nKCdFcnJvciBwSlMgLSBObyBpbWFnZS5zcmMnKTtcbiAgICAgIHBKUy50bXAuaW1nX2Vycm9yID0gdHJ1ZTtcbiAgICB9XG5cbiAgfTtcblxuXG4gIHBKUy5mbi52ZW5kb3JzLmRyYXcgPSBmdW5jdGlvbigpe1xuXG4gICAgaWYocEpTLnBhcnRpY2xlcy5zaGFwZS50eXBlID09ICdpbWFnZScpe1xuXG4gICAgICBpZihwSlMudG1wLmltZ190eXBlID09ICdzdmcnKXtcblxuICAgICAgICBpZihwSlMudG1wLmNvdW50X3N2ZyA+PSBwSlMucGFydGljbGVzLm51bWJlci52YWx1ZSl7XG4gICAgICAgICAgcEpTLmZuLnBhcnRpY2xlc0RyYXcoKTtcbiAgICAgICAgICBpZighcEpTLnBhcnRpY2xlcy5tb3ZlLmVuYWJsZSkgY2FuY2VsUmVxdWVzdEFuaW1GcmFtZShwSlMuZm4uZHJhd0FuaW1GcmFtZSk7XG4gICAgICAgICAgZWxzZSBwSlMuZm4uZHJhd0FuaW1GcmFtZSA9IHJlcXVlc3RBbmltRnJhbWUocEpTLmZuLnZlbmRvcnMuZHJhdyk7XG4gICAgICAgIH1lbHNle1xuICAgICAgICAgIC8vY29uc29sZS5sb2coJ3N0aWxsIGxvYWRpbmcuLi4nKTtcbiAgICAgICAgICBpZighcEpTLnRtcC5pbWdfZXJyb3IpIHBKUy5mbi5kcmF3QW5pbUZyYW1lID0gcmVxdWVzdEFuaW1GcmFtZShwSlMuZm4udmVuZG9ycy5kcmF3KTtcbiAgICAgICAgfVxuXG4gICAgICB9ZWxzZXtcblxuICAgICAgICBpZihwSlMudG1wLmltZ19vYmogIT0gdW5kZWZpbmVkKXtcbiAgICAgICAgICBwSlMuZm4ucGFydGljbGVzRHJhdygpO1xuICAgICAgICAgIGlmKCFwSlMucGFydGljbGVzLm1vdmUuZW5hYmxlKSBjYW5jZWxSZXF1ZXN0QW5pbUZyYW1lKHBKUy5mbi5kcmF3QW5pbUZyYW1lKTtcbiAgICAgICAgICBlbHNlIHBKUy5mbi5kcmF3QW5pbUZyYW1lID0gcmVxdWVzdEFuaW1GcmFtZShwSlMuZm4udmVuZG9ycy5kcmF3KTtcbiAgICAgICAgfWVsc2V7XG4gICAgICAgICAgaWYoIXBKUy50bXAuaW1nX2Vycm9yKSBwSlMuZm4uZHJhd0FuaW1GcmFtZSA9IHJlcXVlc3RBbmltRnJhbWUocEpTLmZuLnZlbmRvcnMuZHJhdyk7XG4gICAgICAgIH1cblxuICAgICAgfVxuXG4gICAgfWVsc2V7XG4gICAgICBwSlMuZm4ucGFydGljbGVzRHJhdygpO1xuICAgICAgaWYoIXBKUy5wYXJ0aWNsZXMubW92ZS5lbmFibGUpIGNhbmNlbFJlcXVlc3RBbmltRnJhbWUocEpTLmZuLmRyYXdBbmltRnJhbWUpO1xuICAgICAgZWxzZSBwSlMuZm4uZHJhd0FuaW1GcmFtZSA9IHJlcXVlc3RBbmltRnJhbWUocEpTLmZuLnZlbmRvcnMuZHJhdyk7XG4gICAgfVxuXG4gIH07XG5cblxuICBwSlMuZm4udmVuZG9ycy5jaGVja0JlZm9yZURyYXcgPSBmdW5jdGlvbigpe1xuXG4gICAgLy8gaWYgc2hhcGUgaXMgaW1hZ2VcbiAgICBpZihwSlMucGFydGljbGVzLnNoYXBlLnR5cGUgPT0gJ2ltYWdlJyl7XG5cbiAgICAgIGlmKHBKUy50bXAuaW1nX3R5cGUgPT0gJ3N2ZycgJiYgcEpTLnRtcC5zb3VyY2Vfc3ZnID09IHVuZGVmaW5lZCl7XG4gICAgICAgIHBKUy50bXAuY2hlY2tBbmltRnJhbWUgPSByZXF1ZXN0QW5pbUZyYW1lKGNoZWNrKTtcbiAgICAgIH1lbHNle1xuICAgICAgICAvL2NvbnNvbGUubG9nKCdpbWFnZXMgbG9hZGVkISBjYW5jZWwgY2hlY2snKTtcbiAgICAgICAgY2FuY2VsUmVxdWVzdEFuaW1GcmFtZShwSlMudG1wLmNoZWNrQW5pbUZyYW1lKTtcbiAgICAgICAgaWYoIXBKUy50bXAuaW1nX2Vycm9yKXtcbiAgICAgICAgICBwSlMuZm4udmVuZG9ycy5pbml0KCk7XG4gICAgICAgICAgcEpTLmZuLnZlbmRvcnMuZHJhdygpO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgfVxuXG4gICAgfWVsc2V7XG4gICAgICBwSlMuZm4udmVuZG9ycy5pbml0KCk7XG4gICAgICBwSlMuZm4udmVuZG9ycy5kcmF3KCk7XG4gICAgfVxuXG4gIH07XG5cblxuICBwSlMuZm4udmVuZG9ycy5pbml0ID0gZnVuY3Rpb24oKXtcblxuICAgIC8qIGluaXQgY2FudmFzICsgcGFydGljbGVzICovXG4gICAgcEpTLmZuLnJldGluYUluaXQoKTtcbiAgICBwSlMuZm4uY2FudmFzSW5pdCgpO1xuICAgIHBKUy5mbi5jYW52YXNTaXplKCk7XG4gICAgcEpTLmZuLmNhbnZhc1BhaW50KCk7XG4gICAgcEpTLmZuLnBhcnRpY2xlc0NyZWF0ZSgpO1xuICAgIHBKUy5mbi52ZW5kb3JzLmRlbnNpdHlBdXRvUGFydGljbGVzKCk7XG5cbiAgICAvKiBwYXJ0aWNsZXMubGluZV9saW5rZWQgLSBjb252ZXJ0IGhleCBjb2xvcnMgdG8gcmdiICovXG4gICAgcEpTLnBhcnRpY2xlcy5saW5lX2xpbmtlZC5jb2xvcl9yZ2JfbGluZSA9IGhleFRvUmdiKHBKUy5wYXJ0aWNsZXMubGluZV9saW5rZWQuY29sb3IpO1xuXG4gIH07XG5cblxuICBwSlMuZm4udmVuZG9ycy5zdGFydCA9IGZ1bmN0aW9uKCl7XG5cbiAgICBpZihpc0luQXJyYXkoJ2ltYWdlJywgcEpTLnBhcnRpY2xlcy5zaGFwZS50eXBlKSl7XG4gICAgICBwSlMudG1wLmltZ190eXBlID0gcEpTLnBhcnRpY2xlcy5zaGFwZS5pbWFnZS5zcmMuc3Vic3RyKHBKUy5wYXJ0aWNsZXMuc2hhcGUuaW1hZ2Uuc3JjLmxlbmd0aCAtIDMpO1xuICAgICAgcEpTLmZuLnZlbmRvcnMubG9hZEltZyhwSlMudG1wLmltZ190eXBlKTtcbiAgICB9ZWxzZXtcbiAgICAgIHBKUy5mbi52ZW5kb3JzLmNoZWNrQmVmb3JlRHJhdygpO1xuICAgIH1cblxuICB9O1xuXG5cblxuXG4gIC8qIC0tLS0tLS0tLS0gcEpTIC0gc3RhcnQgLS0tLS0tLS0tLS0tICovXG5cblxuICBwSlMuZm4udmVuZG9ycy5ldmVudHNMaXN0ZW5lcnMoKTtcblxuICBwSlMuZm4udmVuZG9ycy5zdGFydCgpO1xuICBcblxuXG59O1xuXG4vKiAtLS0tLS0tLS0tIGdsb2JhbCBmdW5jdGlvbnMgLSB2ZW5kb3JzIC0tLS0tLS0tLS0tLSAqL1xuXG5PYmplY3QuZGVlcEV4dGVuZCA9IGZ1bmN0aW9uKGRlc3RpbmF0aW9uLCBzb3VyY2UpIHtcbiAgZm9yICh2YXIgcHJvcGVydHkgaW4gc291cmNlKSB7XG4gICAgaWYgKHNvdXJjZVtwcm9wZXJ0eV0gJiYgc291cmNlW3Byb3BlcnR5XS5jb25zdHJ1Y3RvciAmJlxuICAgICBzb3VyY2VbcHJvcGVydHldLmNvbnN0cnVjdG9yID09PSBPYmplY3QpIHtcbiAgICAgIGRlc3RpbmF0aW9uW3Byb3BlcnR5XSA9IGRlc3RpbmF0aW9uW3Byb3BlcnR5XSB8fCB7fTtcbiAgICAgIGFyZ3VtZW50cy5jYWxsZWUoZGVzdGluYXRpb25bcHJvcGVydHldLCBzb3VyY2VbcHJvcGVydHldKTtcbiAgICB9IGVsc2Uge1xuICAgICAgZGVzdGluYXRpb25bcHJvcGVydHldID0gc291cmNlW3Byb3BlcnR5XTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIGRlc3RpbmF0aW9uO1xufTtcblxud2luZG93LnJlcXVlc3RBbmltRnJhbWUgPSAoZnVuY3Rpb24oKXtcbiAgcmV0dXJuICB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lIHx8XG4gICAgd2luZG93LndlYmtpdFJlcXVlc3RBbmltYXRpb25GcmFtZSB8fFxuICAgIHdpbmRvdy5tb3pSZXF1ZXN0QW5pbWF0aW9uRnJhbWUgICAgfHxcbiAgICB3aW5kb3cub1JlcXVlc3RBbmltYXRpb25GcmFtZSAgICAgIHx8XG4gICAgd2luZG93Lm1zUmVxdWVzdEFuaW1hdGlvbkZyYW1lICAgICB8fFxuICAgIGZ1bmN0aW9uKGNhbGxiYWNrKXtcbiAgICAgIHdpbmRvdy5zZXRUaW1lb3V0KGNhbGxiYWNrLCAxMDAwIC8gNjApO1xuICAgIH07XG59KSgpO1xuXG53aW5kb3cuY2FuY2VsUmVxdWVzdEFuaW1GcmFtZSA9ICggZnVuY3Rpb24oKSB7XG4gIHJldHVybiB3aW5kb3cuY2FuY2VsQW5pbWF0aW9uRnJhbWUgICAgICAgICB8fFxuICAgIHdpbmRvdy53ZWJraXRDYW5jZWxSZXF1ZXN0QW5pbWF0aW9uRnJhbWUgfHxcbiAgICB3aW5kb3cubW96Q2FuY2VsUmVxdWVzdEFuaW1hdGlvbkZyYW1lICAgIHx8XG4gICAgd2luZG93Lm9DYW5jZWxSZXF1ZXN0QW5pbWF0aW9uRnJhbWUgICAgICB8fFxuICAgIHdpbmRvdy5tc0NhbmNlbFJlcXVlc3RBbmltYXRpb25GcmFtZSAgICAgfHxcbiAgICBjbGVhclRpbWVvdXRcbn0gKSgpO1xuXG5mdW5jdGlvbiBoZXhUb1JnYihoZXgpe1xuICAvLyBCeSBUaW0gRG93biAtIGh0dHA6Ly9zdGFja292ZXJmbG93LmNvbS9hLzU2MjQxMzkvMzQ5MzY1MFxuICAvLyBFeHBhbmQgc2hvcnRoYW5kIGZvcm0gKGUuZy4gXCIwM0ZcIikgdG8gZnVsbCBmb3JtIChlLmcuIFwiMDAzM0ZGXCIpXG4gIHZhciBzaG9ydGhhbmRSZWdleCA9IC9eIz8oW2EtZlxcZF0pKFthLWZcXGRdKShbYS1mXFxkXSkkL2k7XG4gIGhleCA9IGhleC5yZXBsYWNlKHNob3J0aGFuZFJlZ2V4LCBmdW5jdGlvbihtLCByLCBnLCBiKSB7XG4gICAgIHJldHVybiByICsgciArIGcgKyBnICsgYiArIGI7XG4gIH0pO1xuICB2YXIgcmVzdWx0ID0gL14jPyhbYS1mXFxkXXsyfSkoW2EtZlxcZF17Mn0pKFthLWZcXGRdezJ9KSQvaS5leGVjKGhleCk7XG4gIHJldHVybiByZXN1bHQgPyB7XG4gICAgICByOiBwYXJzZUludChyZXN1bHRbMV0sIDE2KSxcbiAgICAgIGc6IHBhcnNlSW50KHJlc3VsdFsyXSwgMTYpLFxuICAgICAgYjogcGFyc2VJbnQocmVzdWx0WzNdLCAxNilcbiAgfSA6IG51bGw7XG59O1xuXG5mdW5jdGlvbiBjbGFtcChudW1iZXIsIG1pbiwgbWF4KSB7XG4gIHJldHVybiBNYXRoLm1pbihNYXRoLm1heChudW1iZXIsIG1pbiksIG1heCk7XG59O1xuXG5mdW5jdGlvbiBpc0luQXJyYXkodmFsdWUsIGFycmF5KSB7XG4gIHJldHVybiBhcnJheS5pbmRleE9mKHZhbHVlKSA+IC0xO1xufVxuXG5cbi8qIC0tLS0tLS0tLS0gcGFydGljbGVzLmpzIGZ1bmN0aW9ucyAtIHN0YXJ0IC0tLS0tLS0tLS0tLSAqL1xuXG53aW5kb3cucEpTRG9tID0gW107XG5cbndpbmRvdy5wYXJ0aWNsZXNKUyA9IGZ1bmN0aW9uKHRhZ19pZCwgcGFyYW1zKXtcblxuICAvL2NvbnNvbGUubG9nKHBhcmFtcyk7XG5cbiAgLyogbm8gc3RyaW5nIGlkPyBzbyBpdCdzIG9iamVjdCBwYXJhbXMsIGFuZCBzZXQgdGhlIGlkIHdpdGggZGVmYXVsdCBpZCAqL1xuICBpZih0eXBlb2YodGFnX2lkKSAhPSAnc3RyaW5nJyl7XG4gICAgcGFyYW1zID0gdGFnX2lkO1xuICAgIHRhZ19pZCA9ICdwYXJ0aWNsZXMtanMnO1xuICB9XG5cbiAgLyogbm8gaWQ/IHNldCB0aGUgaWQgdG8gZGVmYXVsdCBpZCAqL1xuICBpZighdGFnX2lkKXtcbiAgICB0YWdfaWQgPSAncGFydGljbGVzLWpzJztcbiAgfVxuXG4gIC8qIHBKUyBlbGVtZW50cyAqL1xuICB2YXIgcEpTX3RhZyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHRhZ19pZCksXG4gICAgICBwSlNfY2FudmFzX2NsYXNzID0gJ3BhcnRpY2xlcy1qcy1jYW52YXMtZWwnLFxuICAgICAgZXhpc3RfY2FudmFzID0gcEpTX3RhZy5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKHBKU19jYW52YXNfY2xhc3MpO1xuXG4gIC8qIHJlbW92ZSBjYW52YXMgaWYgZXhpc3RzIGludG8gdGhlIHBKUyB0YXJnZXQgdGFnICovXG4gIGlmKGV4aXN0X2NhbnZhcy5sZW5ndGgpe1xuICAgIHdoaWxlKGV4aXN0X2NhbnZhcy5sZW5ndGggPiAwKXtcbiAgICAgIHBKU190YWcucmVtb3ZlQ2hpbGQoZXhpc3RfY2FudmFzWzBdKTtcbiAgICB9XG4gIH1cblxuICAvKiBjcmVhdGUgY2FudmFzIGVsZW1lbnQgKi9cbiAgdmFyIGNhbnZhc19lbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2NhbnZhcycpO1xuICBjYW52YXNfZWwuY2xhc3NOYW1lID0gcEpTX2NhbnZhc19jbGFzcztcblxuICAvKiBzZXQgc2l6ZSBjYW52YXMgKi9cbiAgY2FudmFzX2VsLnN0eWxlLndpZHRoID0gXCIxMDAlXCI7XG4gIGNhbnZhc19lbC5zdHlsZS5oZWlnaHQgPSBcIjEwMCVcIjtcblxuICAvKiBhcHBlbmQgY2FudmFzICovXG4gIHZhciBjYW52YXMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCh0YWdfaWQpLmFwcGVuZENoaWxkKGNhbnZhc19lbCk7XG5cbiAgLyogbGF1bmNoIHBhcnRpY2xlLmpzICovXG4gIGlmKGNhbnZhcyAhPSBudWxsKXtcbiAgICBwSlNEb20ucHVzaChuZXcgcEpTKHRhZ19pZCwgcGFyYW1zKSk7XG4gIH1cblxufTtcblxud2luZG93LnBhcnRpY2xlc0pTLmxvYWQgPSBmdW5jdGlvbih0YWdfaWQsIHBhdGhfY29uZmlnX2pzb24sIGNhbGxiYWNrKXtcblxuICAvKiBsb2FkIGpzb24gY29uZmlnICovXG4gIHZhciB4aHIgPSBuZXcgWE1MSHR0cFJlcXVlc3QoKTtcbiAgeGhyLm9wZW4oJ0dFVCcsIHBhdGhfY29uZmlnX2pzb24pO1xuICB4aHIub25yZWFkeXN0YXRlY2hhbmdlID0gZnVuY3Rpb24gKGRhdGEpIHtcbiAgICBpZih4aHIucmVhZHlTdGF0ZSA9PSA0KXtcbiAgICAgIGlmKHhoci5zdGF0dXMgPT0gMjAwKXtcbiAgICAgICAgdmFyIHBhcmFtcyA9IEpTT04ucGFyc2UoZGF0YS5jdXJyZW50VGFyZ2V0LnJlc3BvbnNlKTtcbiAgICAgICAgd2luZG93LnBhcnRpY2xlc0pTKHRhZ19pZCwgcGFyYW1zKTtcbiAgICAgICAgaWYoY2FsbGJhY2spIGNhbGxiYWNrKCk7XG4gICAgICB9ZWxzZXtcbiAgICAgICAgY29uc29sZS5sb2coJ0Vycm9yIHBKUyAtIFhNTEh0dHBSZXF1ZXN0IHN0YXR1czogJyt4aHIuc3RhdHVzKTtcbiAgICAgICAgY29uc29sZS5sb2coJ0Vycm9yIHBKUyAtIEZpbGUgY29uZmlnIG5vdCBmb3VuZCcpO1xuICAgICAgfVxuICAgIH1cbiAgfTtcbiAgeGhyLnNlbmQoKTtcblxufTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9wYXJ0aWNsZXMuanMvcGFydGljbGVzLmpzXG4vLyBtb2R1bGUgaWQgPSAuL25vZGVfbW9kdWxlcy9wYXJ0aWNsZXMuanMvcGFydGljbGVzLmpzXG4vLyBtb2R1bGUgY2h1bmtzID0gMSIsImltcG9ydCAncGFydGljbGVzLmpzJztcblxuaW1wb3J0IEFwcCBmcm9tICcuL2NvbXBvbmVudHMvQXBwLmpzeCc7XG5pbXBvcnQgUmVhY3RET00gZnJvbSAncmVhY3QtZG9tJztcblxucGFydGljbGVzSlMoJ3BhcnRpY2xlcycsIHtcbiAgICBcInBhcnRpY2xlc1wiOiB7XG4gICAgICAgIFwibnVtYmVyXCI6IHtcbiAgICAgICAgICAgIFwidmFsdWVcIjogMjVcbiAgICAgICAgfSxcbiAgICAgICAgXCJjb2xvclwiOiB7XG4gICAgICAgICAgICBcInZhbHVlXCI6IFtcIiM1QkQyQ0JcIiwgXCIjRDI1QkNEXCJdXG4gICAgICAgIH0sXG4gICAgICAgIFwib3BhY2l0eVwiOiB7XG4gICAgICAgICAgICBcInZhbHVlXCI6IDAuMTVcbiAgICAgICAgfSxcbiAgICAgICAgXCJzaXplXCI6IHtcbiAgICAgICAgICAgIFwidmFsdWVcIjogMjBcbiAgICAgICAgfSxcbiAgICAgICAgXCJsaW5lX2xpbmtlZFwiOiB7XG4gICAgICAgICAgICBcImVuYWJsZVwiOiBmYWxzZVxuICAgICAgICB9LFxuICAgICAgICBcIm1vdmVcIjoge1xuICAgICAgICAgICAgXCJlbmFibGVcIjogdHJ1ZSxcbiAgICAgICAgICAgIFwic3BlZWRcIjogMyxcbiAgICAgICAgICAgIFwiZGlyZWN0aW9uXCI6IFwibm9uZVwiLFxuICAgICAgICAgICAgXCJyYW5kb21cIjogZmFsc2UsXG4gICAgICAgICAgICBcInN0cmFpZ2h0XCI6IGZhbHNlLFxuICAgICAgICAgICAgXCJvdXRfbW9kZVwiOiBcIm91dFwiLFxuICAgICAgICAgICAgXCJib3VuY2VcIjogZmFsc2VcbiAgICAgICAgfVxuICAgIH0sXG4gICAgXCJyZXRpbmFfZGV0ZWN0XCI6IHRydWVcbn0pO1xuXG5SZWFjdERPTS5yZW5kZXIoPEFwcCAvPiwgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FwcCcpKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3Jlc291cmNlcy9hc3NldHMvanMvYXBwLmpzeCIsImltcG9ydCBGb290ZXIgZnJvbSAnLi9Gb290ZXIuanN4JztcbmltcG9ydCBIb3N0IGZyb20gJy4vSG9zdC5qc3gnO1xuaW1wb3J0IEluZm9ybWF0aW9uIGZyb20gJy4vSW5mb3JtYXRpb24uanN4JztcbmltcG9ydCBNYWluIGZyb20gJy4vTWFpbi5qc3gnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBBcHAgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICAgIHJlbmRlciAoKSB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8TWFpbiB0aXRsZT1cIk9oIEJhYnkhXCI+XG4gICAgICAgICAgICAgICAgPEhvc3QgbmFtZT1cIlBhbWVsbGEgQWdvc3RpbmlcIiAvPlxuICAgICAgICAgICAgICAgIDxJbmZvcm1hdGlvbiAvPlxuICAgICAgICAgICAgICAgIDxGb290ZXI+XG4gICAgICAgICAgICAgICAgICAgIEdpZnRzIHJlZ2lzdGVyZWQgYXQgPGEgY2xhc3NOYW1lPVwidGV4dC1ncmVlblwiIGhyZWY9XCJodHRwczovL3d3dy5hbWF6b24uY29tL2JhYnktcmVnL3BhbWVsbGEtYWdvc3RpbmktanVuZS0yMDE4LWF1Y2tsYW5kLzM0QVVUVTkwRUhCNUNcIiB0YXJnZXQ9XCJfYmxhbmtcIj5BbWF6b24uY29tPC9hPlxuICAgICAgICAgICAgICAgIDwvRm9vdGVyPlxuICAgICAgICAgICAgPC9NYWluPlxuICAgICAgICApO1xuICAgIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9BcHAuanN4IiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgSW5mb3JtYXRpb24gZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICAgIHJlbmRlciAoKSB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8Zm9vdGVyPnsgdGhpcy5wcm9wcy5jaGlsZHJlbiB9PC9mb290ZXI+XG4gICAgICAgICk7XG4gICAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL0Zvb3Rlci5qc3giLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBIb3N0IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgICByZW5kZXIgKCkge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJtLThcIj5QbGVhc2UsIGpvaW4gdXMgYXQgYSBiYWJ5IHNob3dlciBpbiBob25vciBvZjwvcD5cbiAgICAgICAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwidGV4dC01eGwgdGV4dC1wdXJwbGUtZGFya2VzdFwiPnsgdGhpcy5wcm9wcy5uYW1lIH08L2gyPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICk7XG4gICAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL0hvc3QuanN4IiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgSW5mb3JtYXRpb24gZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICAgIHJlbmRlciAoKSB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJtLThcIj5TdW5kYXksIDE1dGggb2YgQXByaWwgYXQgM3BtIDxiciAvPiAyNyBFZGdld29vZCBXYXksIEhlbmRlcnNvbjwvcD5cbiAgICAgICAgKTtcbiAgICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvSW5mb3JtYXRpb24uanN4IiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgTWFpbiBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gICAgcmVuZGVyICgpIHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cImZsZXggZmxleC13cmFwIGgtc2NyZWVuIGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlclwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXIgdGV4dC14bCB3LTEyOFwiPlxuICAgICAgICAgICAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwiZm9udC1jb3Vyc2l2ZSB0ZXh0LTZ4bCBsb3dlcmNhc2UgdGV4dC1wdXJwbGUtZGFya2VzdFwiPnsgdGhpcy5wcm9wcy50aXRsZSB9PC9oMT5cblxuICAgICAgICAgICAgICAgICAgICB7IHRoaXMucHJvcHMuY2hpbGRyZW4gfVxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9zZWN0aW9uPlxuICAgICAgICApO1xuICAgIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9NYWluLmpzeCIsIi8vIHJlbW92ZWQgYnkgZXh0cmFjdC10ZXh0LXdlYnBhY2stcGx1Z2luXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9yZXNvdXJjZXMvYXNzZXRzL3Nhc3MvYXBwLnNjc3Ncbi8vIG1vZHVsZSBpZCA9IC4vcmVzb3VyY2VzL2Fzc2V0cy9zYXNzL2FwcC5zY3NzXG4vLyBtb2R1bGUgY2h1bmtzID0gMSJdLCJzb3VyY2VSb290IjoiIn0=