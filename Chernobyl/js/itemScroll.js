// console.log('Script Load');
// (function($){
//     $(document).ready(function(){
//         console.log('jQuery Ready');

//         var _this = this;
//         var _scrollTop = null;

//         var _winW = null;
//         var _winH = null;

//         var _horizontalH = null;
//         var _horizontalMax = null;

//         function init(){
//             layout();
//             setting();
//             addEvent();
//             reset();
//         }

//         function layout(){
//             _this.$win = $(window);

//             _this.$container = $('#container');
//             _this.$txtArea = _this.$container.find('.desc');
//             _this.$title = _this.$txtArea.children('h3');
//             _this.$desc = _this.$txtArea.children('p');
//             // console.log(_this.$title);

//             _this.$sticky = $('#sticky-img');

//             _this.$list = $('#process');
//             _this.$listWrap = _this.$list.find('.list-wrap');
//             _this.$listItem - _this.$listWrap.find('.list');

//             // console.log(_this.$sticky);
//         }

//         function setting(){
//             // _horizontalMax = _this.$listItem.length;
//             // console.log(_horizontalMax);
//         }

//         function addEvent(){
//             _this.$win.on('scroll', onScroll);
//         }

//         function reset(){
//             _this.$win.trigger('scroll');
//         }

//         function onResize(e){
//             // console.log('resize');

//             _winW = _this.$win.width();
//             _winH = _this.$win.height();

//             _horizontalH = _winW * _horizontalMax;
//             _this.$list.outerHeight(_horizontalH, true);
//         }

//         function onScroll(e){
//             // console.log('scroll');
//             _scrollTop = _this.$win.scrollTop();

//             itemScroll();
//         }

//         function itemScroll(){
            
//         }

//         init();

//     });
// })(jQuery);

$.fn.moveIt = function(){
    var $window = $(window);
    var instances = [];
    
    $(this).each(function(){
      instances.push(new moveItItem($(this)));
    });
    
    window.addEventListener('scroll', function(){
      var scrollTop = $window.scrollTop();
      instances.forEach(function(inst){
        inst.update(scrollTop);
      });
    }, {passive: true});
  }
  
  var moveItItem = function(el){
    this.el = $(el);
    this.speed = parseInt(this.el.attr('data-scroll-speed'));
  };
  
  moveItItem.prototype.update = function(scrollTop){
    this.el.css('transform', 'translateY(' + -(scrollTop / this.speed) + 'px)');
  };
  
  // Initialization
  $(function(){
    // $('[data-scroll-speed]').moveIt();
    $('.list').moveIt();
  });