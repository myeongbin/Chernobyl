console.log("Script Load");
(function($){
    $(document).ready(function() {
        console.log('jQuery Ready');

        var _this = this;
        var _scrollTop = 0;
        var _exScrollTop = null;
        var _isAni = void 0; // undefined 값으로 강제로 지정.
        
        // todo.
        // 1. 메뉴클릭 - 스크롤 이동
        // 2. 스크롤 이벤트 시 - 메뉴 활성화

        function init() {
            layout();
            setting();
            addEvent();
            reset();
        }

        function layout() {
            _this.$win = $(window);

            _this.$scroll = $('html, body');

            _this.$scrollNav = _this.$scroll.find('#scroll-nav');
            _this.$scrollNavEls = _this.$scrollNav.find('a');

            _this.$container = $('#container');
            _this.$section = _this.$container.find('.section');

            _this.$btnTop = _this.$container.find('.btn-wrap .top');
        }

        // 초기 변수 값 지정.
        function setting() {
            _isAni = false; //애니메이션 실행 체크
        }

        // 이벤트 핸들러
        function addEvent() {
            _this.$win.on('scroll', onScrollWin).trigger('scroll');
            _this.$scrollNavEls.on('click', onClickNav);
            _this.$btnTop.on('click', onClickNav);
        }

        function reset() {
        }

        // 스크롤 이벤트 함수
        function onScrollWin(e) {
            // console.log('window scroll');
            _scrollTop = _this.$win.scrollTop();
            // console.log(_scrollTop);

            if(!_isAni){
                scrollNavActive();
            }

            scrollNavVisible();

            _exScrollTop = _scrollTop;
        }

        // 스크롤 시 각 섹션 별 ScrollNavEls 활성화
        function scrollNavActive(){
            $.each(_this.$section, function(index, el){
                var $el = $(el),
                    start,
                    end;

                start = $el.offset().top - 30;
                end = start + $el.innerHeight();

                if(index === 0){
                    start = 0;
                }
                
                if(_scrollTop >= start && _scrollTop < end){
                    if(!_this.$scrollNavEls.eq(index).hasClass('active')){
                        _this.$scrollNavEls.removeClass('active');
                        _this.$scrollNavEls.eq(index).addClass('active');
                    }
                }
            });
        }

        // 스크롤 시 Scroll-Nav 영역 활성화
        function scrollNavVisible(){
            if(_exScrollTop === null) return;
            if(_scrollTop < 0) return;

            if(_scrollTop >= _this.$container.innerHeight() - _this.$win.height()) return;

            var $first = $('#preview');


            if(_scrollTop > $first.offset().top){
                // console.log('visible');
                if(_this.$scrollNav.hasClass('hide')) _this.$scrollNav.removeClass('hide');
            }else{
                // console.log('unvisible');
                if(!_this.$scrollNav.hasClass('hide')) _this.$scrollNav.addClass('hide');
            }
        }

        // 메뉴 클릭 이벤트 함수
        function onClickNav(e) {
            e.preventDefault();
            // console.log('click');

            if(_isAni) return;

            var $el = $(e.currentTarget),
                index = _this.$scrollNav.index(e.currentTarget),
                id = $el.attr('href'),
                $section,
                sectionTop = 0;

            _this.$scrollNavEls.removeClass('active');
            $el.addClass('active');

            $section = _this.$section.eq(index);
            $section = $(id);
            sectionTop = $section.offset().top - 30;
            if(index === 0){
                sectionTop = 0;
            }

            _isAni = true;

            _this.$scroll
                .stop(true)
                .animate(
                    {scrollTop : sectionTop},
                    {duration : 600, easing : 'easeInOutCubic', complete : function(){
                        console.log('Animation');
                        _isAni = false;
                    }}
                );

        }

        init();

    });
})(jQuery);