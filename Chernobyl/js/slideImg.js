console.log("Script Load");
(function($) {
    $(document).ready(function() {
        console.log('jQuery Ready');
        // Image Slider.
        
        var _this = this;
        
        var _cuId = 0,
            _exId = 0,
            _max = void 0;

        var _isAni = false;

        function init() {
            // 초기화 함수.
            layout();
            setting();
            addEvent();
            reset();
        }

        function layout() {
            
            // banner
            _this.$slide = $('.slide');
            _this.$slideImg = _this.$slide.children('.slide-img');
            _this.$imgWrap = _this.$slide.children('.img-wrap');
            _this.$img = _this.$imgWrap.children('.cs-img');

            // paddle navigation
            _this.$paddle = _this.$slide.find('.paddle');
            _this.$PaddlePrev = _this.$paddle.find('.paddle.prev');
            _this.$PaddleNext = _this.$paddle.find('.paddle.next');
        }

        function setting() {
            _cuId = 0;
            _exId = _cuId;
            
            _max = _this.$img.length;
        }

        function addEvent() {
            _this.$paddle.on('click', onClickPaddle);
        }

        function reset() {

        }

        function onClickPaddle(e) {
            if(_isAni) return;

            var $el = $(e.currentTarget);

            if($el.hasClass('prev')) {
                console.log('이전');
                _cuId--; 

                if(_cuId < 0) {
                    _cuId = 0;
                }

            }else if($el.hasClass('next')) {
                console.log('다음');
                _cuId++;

                if(_cuId > _max - 1) {
                    _cuId = _max - 1;
                }

            }

            if (_exId !== _cuId) { 
                changeImg();
            }
        }

        function changeImg() {
            console.log('Change');

            _isAni = true; 

            var left = 832 * _cuId * 1;
            var duration = 350 + Math.abs(_exId - _cuId) * 150;

            _this.$slideImg.stop(true)
                .animate(
                    { 'left' : left }, // 애니메이션이 이뤄질 스타일
                    { // 애니메이션 옵션.
                        'duration' : duration, // duration - 애니메이션 속도.
                        'easing' : 'easeInOutQuad', // easing - 애니메이션의 가속도 설정 - jQuery Easing 의 설정값을 받아서 기입
                        'complete' : function() { // complete 함수 - 애니메이션 완료 callback 함수.
                            // console.log('Complete');
                            _exId = _cuId;
                            _isAni = false; // 애니메이션이 완료 - 클릭이 될 수 있는 상태.
                        }
                    });

        }
        
        // 전체 호출.
        init();
    });
})(jQuery);