(($, window, document, undefined) => {
    class Agency {
        init(){
            this.parallax();
            this.header();
            this.section1();
            this.section2();
            this.section3();
            this.section4();
            this.section5();
            this.section6();
            this.section7();
            this.section8();
            this.section9();
            this.section10();
            this.footer();
            this.gotop();
        }
        parallax(){
            let object = {
                init(){
                    this.section2();
                    this.section3();
                    this.section4();
                    this.section6();
                    this.section7();
                    this.section8();
                    this.section9();
                    this.section10();
                },
                section2(){
                    const Window = $(window);
                    const sec2Title = $('#section2 .title');
                    const sec2Col = $('#section2 .col');
                    let sec2TitleTop = sec2Title.offset().top - Window.height()-300;
                    let sec2ColTop = sec2Col.offset().top - Window.height()-1000;

                    Window.scroll(() => {
                        if(Window.scrollTop() == 0){
                            sec2Title.removeClass('addParallax');
                            sec2Col.removeClass('addParallax');
                        }
                        if(Window.scrollTop() > sec2TitleTop){
                            sec2Title.addClass('addParallax');
                        }
                        if(Window.scrollTop() > sec2ColTop){
                            sec2Col.addClass('addParallax');
                        } 
                    });
                },
                section3(){
                    const Window = $(window);
                    const sec3Title = $('#section3 .title');
                    const sec3Col = $('#section3 .col');
                    let sec3TitleTop = sec3Title.offset().top - Window.height()-300;
                    let sec3ColTop = sec3Col.offset().top - Window.height()-1000;

                    Window.scroll(() => {
                        if(Window.scrollTop() == 0){
                            sec3Title.removeClass('addParallax');
                            sec3Col.removeClass('addParallax');
                        }
                        if(Window.scrollTop() > sec3TitleTop){
                            sec3Title.addClass('addParallax');
                        }
                        if(Window.scrollTop() > sec3ColTop){
                            sec3Col.addClass('addParallax');
                        }
                    });
                },
                section4(){
                    const Window = $(window);
                    const sec4Title = $('#section4 .title');
                    const sec4TopCol = $('#section4 .top-col');
                    const sec4BottomCol = $('#section4 .bottom-col');
                    let sec4TitleTop = sec4Title.offset().top - Window.height()-50;
                    let sec4TopColTop = sec4TopCol.offset().top - Window.height()-800;
                    let sec4BottomColTop = sec4BottomCol.offset().top - Window.height()-1100;
                    let t1 = false;
                    let t2 = false;

                    Window.scroll(() => {
                        if(Window.scrollTop() == 0){
                            t1 = false;
                            t2 = false;
                            sec4Title.removeClass('addParallax');
                            sec4TopCol.removeClass('addParallax');
                            sec4BottomCol.removeClass('addParallax');
                        }
                        if(Window.scrollTop() > sec4TitleTop){
                            sec4Title.addClass('addParallax');
                        }
                        if(Window.scrollTop() > sec4TopColTop){
                            if(t1 == false){
                                t1 = true;
                                sec4TopCol.addClass('addParallax');
                            }
                        }
                        if(Window.scrollTop() > sec4BottomColTop){
                            if(t2 == false){
                                t2 = true;
                                sec4BottomCol.addClass('addParallax');
                            }
                        }
                    });
                },
                section6(){
                    const Window = $(window);
                    const sec6 = $('#section6');
                    let sec6Top = sec6.offset().top - Window.height()+200;

                    Window.scroll(() => {
                        if(Window.scrollTop() == 0){
                            sec6.removeClass('addParallax');
                        }
                        if(Window.scrollTop() > sec6Top){
                            sec6.addClass('addParallax');
                        }
                    });
                },
                section7(){
                    const Window = $(window);
                    const sec7 = $('#section7');
                    const sec7Title = $('#section7 .title');
                    let sec7Top = sec7.offset().top - Window.height()+500;

                    Window.scroll(() => {
                        if(Window.scrollTop() == 0){
                            sec7.removeClass('addParallax');
                            sec7Title.removeClass('addParallax');
                        }
                        if(Window.scrollTop() > sec7Top){
                            sec7.addClass('addParallax');
                            sec7Title.addClass('addParallax');
                        }
                    });
                },
                section8(){
                    const Window = $(window);
                    const sec8 = $('#section8');
                    let sec8Top = sec8.offset().top - Window.height()+700;

                    Window.scroll(() => {
                        if(Window.scrollTop() == 0){
                            sec8.removeClass('addParallax');
                        }
                        if(Window.scrollTop() > sec8Top){
                            sec8.addClass('addParallax');
                        }
                    });
                },
                section9(){
                    const Window = $(window);
                    const sec9 = $('#section9');
                    let sec9Top = sec9.offset().top - Window.height()+800;

                    Window.scroll(() => {
                        if(Window.scrollTop() == 0){
                            sec9.removeClass('addParallax');
                        }
                        if(Window.scrollTop() > sec9Top){
                            sec9.addClass('addParallax');
                        }
                    });
                },
                section10(){
                    const Window = $(window);
                    const sec10 = $('#section10');
                    let sec10Top = sec10.offset().top - Window.height()+800;

                    Window.scroll(() => {
                        if(Window.scrollTop() == 0){
                            sec10.removeClass('addParallax');
                        }
                        if(Window.scrollTop() > sec10Top){
                            sec10.addClass('addParallax');
                        }
                    }); 
                }
            }
            object.init();
        }
        header(){
            const Window = $(window);
            let newTop = $(window).scrollTop();
            let oldTop = newTop;
            let x = '';
      
            Window.scroll(function(){
                if(Window.scrollTop() == 0 ){
                    $('#header').removeClass('addH60');
                    $('#header').removeClass('addShow');
                    $('#header').removeClass('addHide');
                }
                else {
                   $('#header').addClass('addH60');
                    newTop = Window.scrollTop();
                    x = oldTop-newTop > 0 ? 'UP' : 'DOWN';
      
                    if(x == 'UP'){
                        $('#header').addClass('addShow');
                        $('#header').removeClass('addHide');
                    }
                    if(x == 'DOWN'){
                        $('#header').addClass('addHide');
                        $('#header').removeClass('addShow');
                    }
                   oldTop = newTop;
                }
            });

            //메인버튼 이벤트
            const mainBtn = $('.main-btn');
            const sub = $('.sub');
            const nav = $('#nav');
            const subBtn = $('.sub-btn');
            const subSub = $('.sub-sub');
            let   t = 0;

            $('.sub').stop().slideUp(0);
            
            resizefn();
            function resizefn(){
                if($(window).innerWidth() <= 991){
                    if(t == 0){
                        t = 1;
                        mainBtn.off('mouseenter');
                        mainBtn.bind('click',function(){
                            $(this).next('.sub').stop().slideToggle(300); 
                        });
                    }              
                }
                else {
                    t = 0;
                    $('.sub').stop().fadeOut(0);
                    mainBtn.off('click');

                    mainBtn.on({
                        mouseenter(){
                            const $this = $(this);
                            sub.stop().fadeOut(0);
                            $this.next().stop().fadeIn(300);
                        },
                        focusin(){
                            const $this = $(this);
                            sub.stop().fadeOut(0);
                            $this.next().stop().fadeIn(300);
                        }
                    });
      
                    nav.on({
                        mouseleave(){
                            sub.stop().fadeOut(300);
                            subSub.stop().fadeOut(300);
                        }
                    });    

                    subBtn.on({
                        mouseenter(){
                            const $this = $(this);
                            subSub.stop().fadeOut(0);
                            $this.next().stop().fadeIn(300);
                        },
                        focusin(){
                            const $this = $(this);
                            subSub.stop().fadeOut(0);
                            $this.next().stop().fadeIn(300);
                        }
                    });
                }
            }
      
            Window.resize(function(){
                resizefn();
            });
            
            $('.mobile-btn').on({
                click: function(){
                    nav.slideToggle(300);  
                    $(this).children().toggleClass('addMobile');
                }
            });
        }
        section1(){
            const Window = $(window);
            const slideWrap = $('.slide-wrap');
            const slideView = $('.slide-view');
            const pageBtn = $('.page-btn');
            let cnt = 0;
            let winW = Window.innerWidth();

            resizefn();
            function resizefn(){
                return winW = Window.innerWidth();
            }
            Window.resize(function(){
                resizefn();
            });
            
            function mainSlide(){
                slideWrap.stop().animate({left: -winW*cnt}, 500, 'easeInOutExpo', function(){
                    if(cnt>2){cnt=0}
                    if(cnt<0){cnt=2}
                    slideWrap.stop().animate({left: -winW*cnt}, 0);
                });
                pageEvent();
            }
            function nextCount(){
                cnt++;
                mainSlide();
            }
            function prevCount(){
                cnt--;
                mainSlide();
            }
            function pausefn(){
                clearInterval(setId);
                t = 1;
                second = 0;
                clearInterval(setId2);
                setId2 = setInterval(() => {
                    second++;
                    if(second >= 3){
                        autoTimer();
                        clearInterval(setId2);
                    }
                },1000);
            }

            let mouseStart = null;
            let mouseEnd = null;
            let dragStart = null;
            let dragEnd = null;
            let mouseDown = null;
            let setId = null;
            let t = 0;
            let second = 0;
            let setId2 = null;

            slideView.on({
                mousedown(e){
                    mouseStart = e.clientX;
                    dragStart = e.clientX - slideWrap.offset().left-winW;
                    mouseDown = true;
                    pausefn();
                },
                mouseup(e){
                    mouseEnd = e.clientX;
                    mouseDown = false;
                    if(mouseStart - mouseEnd > 0){
                        nextCount();
                    }
                    if(mouseStart - mouseEnd < 0){
                        prevCount();
                    }
                    pausefn();
                },
                mouseleave(e){
                    if(mouseDown !== true){return}
                    mouseEnd = e.clientX;
                    mouseDown = false;
                    if((mouseStart - mouseEnd) > 0){
                        nextCount();
                    }
                    if((mouseStart - mouseEnd) < 0){
                        prevCount();
                    }
                },
                mousemove(e){
                    if(!mouseDown){return}
                    dragEnd = e.clientX;
                    slideWrap.css({left: dragEnd - dragStart});
                    pausefn();
                }
            });

            // 반응형 모바일 터치 이벤트 추가
            slideView.on({
                touchstart(e){    // 터치 시작 mousedown
                    mouseStart = e.originalEvent.touches[0].clientX;
                    dragStart = e.originalEvent.touches[0].clientX - slideWrap.offset().left-winW;
                    mouseDown = true;
                    pausefn();
                },
                touchend(e){      // 터치 종료 mouseup
                    mouseEnd = e.originalEvent.changedTouches[0].clientX;
                    mouseDown = false;
                    if(mouseStart - mouseEnd > 0){
                        nextCount();
                    }
                    if(mouseStart - mouseEnd < 0){
                        prevCount();
                    }
                    pausefn();
                },
                touchmove(e){    // 터치 이동 mousemove
                    if(!mouseDown){return}
                    dragEnd = e.originalEvent.touches[0].clientX;
                    slideWrap.css({left: dragEnd - dragStart});
                    pausefn();
                }
            });




            function pageEvent(){
                pageBtn.removeClass('addPage');
                pageBtn.eq(cnt>2 ? 0 : cnt).addClass('addPage');
            }
            pageBtn.each(function(idx){
                const $this = $(this);
                $this.on({
                  click: function(e){
                    e.preventDefault();
                    cnt = idx;
                    mainSlide();
                    pausefn();
                  }
                });
            });
            function autoTimer(){
                setId = setInterval(nextCount, 5000);
            }
            setTimeout(autoTimer, 100);
        }
        section2(){
            
        }
        section3(){
            
        }
        section4(){
            const Window = $(window);
            const galleryItem = $('.gallery-item');
            const galleryBtn = $('.gallery-btn');
            const gallery = $('.gallery');
            let galW = Window.innerWidth()/4;
            let galH = galW*0.6666;
            let idx = 0;
            let col = 4;
            let winW = Window.innerWidth();

            function resizefn(){
                winW = Window.innerWidth();

                if(winW >= 1200){
                    col = 4;
                }
                else if(winW >= 992){
                    col = 3;
                }
                else if(winW >= 761){
                    col = 2;
                }
                else {
                    col = 1;
                }

                galW = Window.innerWidth()/col;
                galH = galW*0.6666;
                galleryItem.animate({width:galW, height:galH}, 0);

                galleryItem.removeClass('addParallax');
                galleryItem.removeClass('addGallery');

                if(idx == 0){
                    gallery.css({height: galH*Math.ceil(8/col)});
                    galleryBtn.removeClass('addClick');
                    galleryBtn.eq(0).addClass('addClick');

                    if(col == 4){
                        galleryItem.eq(0).show().animate({top:galH*0, left:galW*0}, 0);
                        galleryItem.eq(1).show().animate({top:galH*0, left:galW*1}, 0);
                        galleryItem.eq(2).show().animate({top:galH*0, left:galW*2}, 0);
                        galleryItem.eq(3).show().animate({top:galH*0, left:galW*3}, 0);
                        galleryItem.eq(4).show().animate({top:galH*1, left:galW*0}, 0);
                        galleryItem.eq(5).show().animate({top:galH*1, left:galW*1}, 0);
                        galleryItem.eq(6).show().animate({top:galH*1, left:galW*2}, 0);
                        galleryItem.eq(7).show().animate({top:galH*1, left:galW*3}, 0);
                    }
                    else if(col == 3){
                        galleryItem.eq(0).show().animate({top:galH*0, left:galW*0}, 0);
                        galleryItem.eq(1).show().animate({top:galH*0, left:galW*1}, 0);
                        galleryItem.eq(2).show().animate({top:galH*0, left:galW*2}, 0);

                        galleryItem.eq(3).show().animate({top:galH*1, left:galW*0}, 0);
                        galleryItem.eq(4).show().animate({top:galH*1, left:galW*1}, 0);
                        galleryItem.eq(5).show().animate({top:galH*1, left:galW*2}, 0);
                        
                        galleryItem.eq(6).show().animate({top:galH*2, left:galW*0}, 0);
                        galleryItem.eq(7).show().animate({top:galH*2, left:galW*1}, 0);
                    }
                    else if(col == 2){
                        galleryItem.eq(0).show().animate({top:galH*0, left:galW*0}, 0);
                        galleryItem.eq(1).show().animate({top:galH*0, left:galW*1}, 0);

                        galleryItem.eq(2).show().animate({top:galH*1, left:galW*0}, 0);
                        galleryItem.eq(3).show().animate({top:galH*1, left:galW*1}, 0);

                        galleryItem.eq(4).show().animate({top:galH*2, left:galW*0}, 0);
                        galleryItem.eq(5).show().animate({top:galH*2, left:galW*1}, 0);
                        
                        galleryItem.eq(6).show().animate({top:galH*3, left:galW*0}, 0);
                        galleryItem.eq(7).show().animate({top:galH*3, left:galW*1}, 0);
                    }
                    else {
                        galleryItem.eq(0).show().animate({top:galH*0, left:galW*0}, 0);
                        galleryItem.eq(1).show().animate({top:galH*1, left:galW*0}, 0);
                        galleryItem.eq(2).show().animate({top:galH*2, left:galW*0}, 0);
                        galleryItem.eq(3).show().animate({top:galH*3, left:galW*0}, 0);
                        galleryItem.eq(4).show().animate({top:galH*4, left:galW*0}, 0);
                        galleryItem.eq(5).show().animate({top:galH*5, left:galW*0}, 0);
                        galleryItem.eq(6).show().animate({top:galH*6, left:galW*0}, 0);
                        galleryItem.eq(7).show().animate({top:galH*7, left:galW*0}, 0);
                    }
                    galleryItem.eq(4).removeClass('top-col');
                    galleryItem.eq(5).removeClass('top-col');
                    galleryItem.eq(6).removeClass('top-col');
                    galleryItem.eq(7).removeClass('top-col');
  
                    galleryItem.eq(4).removeClass('bottom-col');
                    galleryItem.eq(5).removeClass('bottom-col');
                    galleryItem.eq(6).removeClass('bottom-col');
                    galleryItem.eq(7).removeClass('bottom-col');
                }
                else if(idx == 1){
                    gallery.css({height: galH*Math.ceil(2/col)});
                    galleryBtn.removeClass('addClick');
                    galleryBtn.eq(1).addClass('addClick');

                    galleryItem.eq(0).hide();
                    galleryItem.eq(2).hide();
                    galleryItem.eq(3).hide();
                    galleryItem.eq(4).hide();
                    galleryItem.eq(5).hide();
                    galleryItem.eq(7).hide();
                    
                    if(col == 4){
                        galleryItem.eq(1).show().animate({top:galH*0, left:galW*0}, 0);
                        galleryItem.eq(6).show().animate({top:galH*0, left:galW*1}, 0);
                    }
                    else if(col == 3){
                        galleryItem.eq(1).show().animate({top:galH*0, left:galW*0}, 0);
                        galleryItem.eq(6).show().animate({top:galH*0, left:galW*1}, 0);
                    }
                    else if(col == 2){
                        galleryItem.eq(1).show().animate({top:galH*0, left:galW*0}, 0);
                        galleryItem.eq(6).show().animate({top:galH*0, left:galW*1}, 0);
                    }
                    else {
                        galleryItem.eq(1).show().animate({top:galH*0, left:galW*0}, 0);
                        galleryItem.eq(6).show().animate({top:galH*1, left:galW*0}, 0);
                    }
                    galleryItem.eq(6).removeClass('bottom-col');
                    galleryItem.eq(6).addClass('top-col');
                }
                else if(idx == 2){
                    gallery.css({height: galH*Math.ceil(6/col)});
                    galleryBtn.removeClass('addClick');
                    galleryBtn.eq(2).addClass('addClick');

                    galleryItem.eq(3).hide();
                    galleryItem.eq(7).hide();

                    if(col == 4){
                        galleryItem.eq(0).show().animate({top:galH*0, left:galW*0}, 0);
                        galleryItem.eq(1).show().animate({top:galH*0, left:galW*1}, 0);
                        galleryItem.eq(2).show().animate({top:galH*0, left:galW*2}, 0);
                        galleryItem.eq(4).show().animate({top:galH*0, left:galW*3}, 0);
                        galleryItem.eq(5).show().animate({top:galH*1, left:galW*0}, 0);
                        galleryItem.eq(6).show().animate({top:galH*1, left:galW*1}, 0);
                    }
                    else if(col == 3){
                        galleryItem.eq(0).show().animate({top:galH*0, left:galW*0}, 0);
                        galleryItem.eq(1).show().animate({top:galH*0, left:galW*1}, 0);
                        galleryItem.eq(2).show().animate({top:galH*0, left:galW*2}, 0);

                        galleryItem.eq(4).show().animate({top:galH*1, left:galW*0}, 0);
                        galleryItem.eq(5).show().animate({top:galH*1, left:galW*1}, 0);
                        galleryItem.eq(6).show().animate({top:galH*1, left:galW*2}, 0);
                    }
                    else if(col == 2){
                        galleryItem.eq(0).show().animate({top:galH*0, left:galW*0}, 0);
                        galleryItem.eq(1).show().animate({top:galH*0, left:galW*1}, 0);

                        galleryItem.eq(2).show().animate({top:galH*1, left:galW*0}, 0);
                        galleryItem.eq(4).show().animate({top:galH*1, left:galW*1}, 0);

                        galleryItem.eq(5).show().animate({top:galH*2, left:galW*0}, 0);
                        galleryItem.eq(6).show().animate({top:galH*2, left:galW*1}, 0);
                    }
                    else {
                        galleryItem.eq(0).show().animate({top:galH*0, left:galW*0}, 0);
                        galleryItem.eq(1).show().animate({top:galH*1, left:galW*0}, 0);
                        galleryItem.eq(2).show().animate({top:galH*2, left:galW*0}, 0);
                        galleryItem.eq(4).show().animate({top:galH*3, left:galW*0}, 0);
                        galleryItem.eq(5).show().animate({top:galH*4, left:galW*0}, 0);
                        galleryItem.eq(6).show().animate({top:galH*5, left:galW*0}, 0);
                    }
                    galleryItem.eq(4).removeClass('bottom-col');
                    galleryItem.eq(5).removeClass('bottom-col');
                    galleryItem.eq(6).removeClass('bottom-col');
                    galleryItem.eq(4).addClass('top-col');
                    galleryItem.eq(5).addClass('top-col');
                    galleryItem.eq(6).addClass('top-col');
                }
                else if(idx == 3){
                    gallery.css({height: galH*Math.ceil(4/col)});
                    galleryBtn.removeClass('addClick');
                    galleryBtn.eq(3).addClass('addClick');

                    galleryItem.eq(1).hide();
                    galleryItem.eq(3).hide();
                    galleryItem.eq(6).hide();
                    galleryItem.eq(7).hide();

                    if(col == 4){
                        galleryItem.eq(0).show().animate({top:galH*0, left:galW*0}, 0);
                        galleryItem.eq(2).show().animate({top:galH*0, left:galW*1}, 0);
                        galleryItem.eq(4).show().animate({top:galH*0, left:galW*2}, 0);
                        galleryItem.eq(5).show().animate({top:galH*0, left:galW*3}, 0);
                    }
                    else if(col == 3){
                        galleryItem.eq(0).show().animate({top:galH*0, left:galW*0}, 0);
                        galleryItem.eq(2).show().animate({top:galH*0, left:galW*1}, 0);
                        galleryItem.eq(4).show().animate({top:galH*0, left:galW*2}, 0);

                        galleryItem.eq(5).show().animate({top:galH*1, left:galW*0}, 0);
                    }
                    else if(col == 2){
                        galleryItem.eq(0).show().animate({top:galH*0, left:galW*0}, 0);
                        galleryItem.eq(2).show().animate({top:galH*0, left:galW*1}, 0);

                        galleryItem.eq(4).show().animate({top:galH*1, left:galW*0}, 0);
                        galleryItem.eq(5).show().animate({top:galH*1, left:galW*1}, 0);
                    }
                    else {
                        galleryItem.eq(0).show().animate({top:galH*0, left:galW*0}, 0);
                        galleryItem.eq(2).show().animate({top:galH*1, left:galW*0}, 0);
                        galleryItem.eq(4).show().animate({top:galH*2, left:galW*0}, 0);
                        galleryItem.eq(5).show().animate({top:galH*3, left:galW*0}, 0);
                    }
                    galleryItem.eq(4).removeClass('bottom-col');
                    galleryItem.eq(5).removeClass('bottom-col');
                    galleryItem.eq(4).addClass('top-col');
                    galleryItem.eq(5).addClass('top-col');
                }
                else if(idx == 4){
                    gallery.css({height: galH*Math.ceil(2/col)});
                    galleryBtn.removeClass('addClick');
                    galleryBtn.eq(4).addClass('addClick');

                    galleryItem.eq(0).hide();
                    galleryItem.eq(1).hide();
                    galleryItem.eq(2).hide();
                    galleryItem.eq(4).hide();
                    galleryItem.eq(5).hide();
                    galleryItem.eq(6).hide();

                    if(col == 4){
                        galleryItem.eq(3).show().animate({top:galH*0, left:galW*0}, 0);
                        galleryItem.eq(7).show().animate({top:galH*0, left:galW*1}, 0);
                    }
                    else if(col == 3){
                        galleryItem.eq(3).show().animate({top:galH*0, left:galW*0}, 0);
                        galleryItem.eq(7).show().animate({top:galH*0, left:galW*1}, 0);
                    }
                    else if(col == 2){
                        galleryItem.eq(3).show().animate({top:galH*0, left:galW*0}, 0);
                        galleryItem.eq(7).show().animate({top:galH*0, left:galW*1}, 0);
                    }
                    else {
                        galleryItem.eq(3).show().animate({top:galH*0, left:galW*0}, 0);
                        galleryItem.eq(7).show().animate({top:galH*1, left:galW*0}, 0);
                    }
                    galleryItem.eq(7).removeClass('bottom-col');
                    galleryItem.eq(7).addClass('top-col');
                }
                else if(idx == 5){
                    gallery.css({height: galH*Math.ceil(3/col)});
                    galleryBtn.removeClass('addClick');
                    galleryBtn.eq(5).addClass('addClick');

                    galleryItem.eq(1).hide();
                    galleryItem.eq(2).hide();
                    galleryItem.eq(4).hide();
                    galleryItem.eq(5).hide();
                    galleryItem.eq(7).hide();

                    if(col == 4){
                        galleryItem.eq(0).show().animate({top:galH*0, left:galW*0}, 0);
                        galleryItem.eq(3).show().animate({top:galH*0, left:galW*1}, 0);
                        galleryItem.eq(6).show().animate({top:galH*0, left:galW*2}, 0);
                    }
                    else if(col == 3){
                        galleryItem.eq(0).show().animate({top:galH*0, left:galW*0}, 0);
                        galleryItem.eq(3).show().animate({top:galH*0, left:galW*1}, 0);
                        galleryItem.eq(6).show().animate({top:galH*0, left:galW*2}, 0);
                    }
                    else if(col == 2){
                        galleryItem.eq(0).show().animate({top:galH*0, left:galW*0}, 0);
                        galleryItem.eq(3).show().animate({top:galH*0, left:galW*1}, 0);

                        galleryItem.eq(6).show().animate({top:galH*1, left:galW*0}, 0);
                    }
                    else {
                        galleryItem.eq(0).show().animate({top:galH*0, left:galW*0}, 0);
                        galleryItem.eq(3).show().animate({top:galH*1, left:galW*0}, 0);
                        galleryItem.eq(6).show().animate({top:galH*2, left:galW*0}, 0);
                    }
                    galleryItem.eq(6).removeClass('bottom-col');
                    galleryItem.eq(6).addClass('top-col');
                }
                galleryItem.addClass('addGallery');
            }
            Window.resize(function(){
                resizefn();
            });
            resizefn();

            galleryBtn.each(function(index){
                const $this = $(this);
                $this.on({
                    click: function(e){
                        e.preventDefault();
                        idx = index;
                        resizefn();
                    }
                });
            });


        }
        section5(){
            const Window = $(window);
            const sec5 = $('#section5');
            const circle = $('.circle circle');
            const number = $('.number');
            const per = [0.92, 0.56, 0.87, 0.79];
            const second = 3;
            let perSize = [];
            let size = [];
            let piece = [];
            let counter = [0, 0, 0, 0];
            let setId = [];
            let sec5Top = sec5.offset().top - Window.height()+300;
            let t = false;

            Window.scroll(() => {
                if(Window.scrollTop() == 0){
                    t = false;
                }
                if(Window.scrollTop() > sec5Top){
                    if(t == false){
                        t = true;
                        svgAni();
                    }
                }
            });
            function svgAni(){
                counter = [0, 0, 0, 0];
                $.each(circle, function(idx, obj){
                    size[idx] = obj.getTotalLength();

                    obj.style.strokeDasharray = size[idx];
                    obj.style.strokeDashoffset = size[idx];
                    perSize[idx] = size[idx] * per[idx];
                    piece[idx] = (perSize[idx]/second)/100;

                    function mainSvg(){
                        $(obj).css({strokeDashoffset: size[idx] - counter[idx]});
                        number.eq(idx).text(Math.ceil(counter[idx]/size[idx]*100) + '%');
                    }
                    function countTimer(){
                        counter[idx] += piece[idx];
                        if(counter[idx] >= perSize[idx]){
                            clearInterval(setId[idx]);
                        }
                        else {
                            mainSvg();
                        }
                    }
                    setId[idx] = setInterval(countTimer, 10);
                });
            }
        }
        section6(){
            
        }
        section7(){
            
        }
        section8(){
            
        }
        section9(){
            
        }
        section10(){
            const submitBtn = $('.submit-btn');
            const name = $('#name');
            const mail = $('#mail');
            const listBtn = $('.list-btn');
            const listBoxTbody = $('.list-box tbody')

            submitBtn.on({
                click: function(e){
                    e.preventDefault();
                    if(name.val() == ''){
                        alert('YOUR NAME을 입력하세요.');
                        name.focus();
                        return false;
                    }
                    if(mail.val() == ''){
                        alert('YOUR MAIL을 입력하세요.');
                        mail.focus();
                        return false;
                    }

                    $.ajax({
                        url: './response.php',
                        method: 'POST',
                        data: {
                            name: name.val(),
                            mail: mail.val()
                        },
                        success: function(result){
                            $('#name').val('');
                            $('#mail').val('');
                            $('#name').focus('');
                        },
                        error: function(err){
                            console.log(err);
                            alert('AJAX 전송 오류!!');
                        }
                    });
                }
            });

            listBtn.on({
                click: function(e){
                    e.preventDefault();
                    $.ajax({
                        url: './data/member_mail2.json',
                        method: 'GET',
                        success: function(result){
                            let txt = '';
                            $.each(result, function(idx, item){
                                txt+= "<tr>";
                                txt+= "<td>" + (idx +1) + "</td>";
                                txt+= "<td>" + item.이름 + "</td>";
                                txt+= "<td>" + item.이메일 + "</td>";
                                txt+= "</tr>";
                            });
                            listBoxTbody.html(txt);
                        },
                        error: function(err){
                            console.log(err);
                            alert('AJAX 전송 오류!!');
                        }
                    });
                }
            });
        }
        footer(){
            
        }
        gotop(){
            const Window =$(window);
            const goTop = $('.go-top');
            const htmlBody = $('html, body');

            goTop.on({
                click: function(){
                    htmlBody.stop().animate({scrollTop:0}, 600, 'easeOutExpo');
                }
            });
            goTop.stop().fadeOut(0);
            Window.scroll(function(){
                if(Window.scrollTop() >= 100){
                    goTop.stop().fadeIn(500);
                }
                else {
                    goTop.stop().fadeOut(200, 'easeOutExpo');
                }
            });
        }
    }
    const newAgency = new Agency();
    newAgency.init();
})(jQuery, window, document);