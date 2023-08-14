$(function () {
    $('.mobile').click(function () {
        $('.mobile').find('ul').slideToggle();

    })

    var currentValue = 0
    var IsDrag = false
    var precoMaximo = 70000
    var preco = 0
    $('.pointer-barra').mousedown(function () {
        IsDrag = true;
    })
    $(document).mouseup(function () {
        IsDrag = false
        enableText()
    })
    $('.barra-preco').mousemove(function (e) {

        if (IsDrag) {
            disableText()
            var elementoBase = $(this)
            var mouseX = e.pageX - elementoBase.offset().left;
            if (mouseX < 0) {
                mouseX = 0
            }
            if (mouseX > elementoBase.width()) {
                mouseX = elementoBase.width();
            }
            $('.pointer-barra').css('left', (mouseX - 13) + 'px')
            currentValue = (mouseX / elementoBase.width()) * 100
            $('.barra-preco-fill').css('width', currentValue + '%')
            preco = ((currentValue / 100) * precoMaximo).toFixed(2);
            $('.precoAtual').html('R$' + preco)
        }
    })
    function disableText() {
        $('body').css('-webkit-user-select', 'none')
        $('body').css('-moz-user-select', 'none')
        $('body').css('-ms-user-select', 'none')
        $('body').css('user-select', 'none')
        $('body').css('-o-user-select', 'none')
    }

    function enableText() {
        $('body').css('-webkit-user-select', 'auto')
        $('body').css('-moz-user-select', 'auto')
        $('body').css('-ms-user-select', 'auto')
        $('body').css('user-select', 'auto')
        $('body').css('-o-user-select', 'auto')
    }
    var imgShow = 3
    var MaxIndex = Math.ceil($('.mini-img-wraper').length / 3) - 1
    var currentIndex = 0

    function initSlider() {
        var amount = $('.mini-img-wraper').length * 33.3;
        var elementoScroll = $('.nav-galeria-wrapper');
        var elementoSingle = $('.mini-img-wraper');
        elementoScroll.css("width", amount + "%");
        elementoSingle.css("width", 33.3 * (100 / amount) + "%")
    }
    initSlider()
    function navigateSlider() {
        $(".arrow-right-nav").click(function () {
            if (currentIndex < MaxIndex) {
                currentIndex++
                var elementoOffset = $('.mini-img-wraper').eq(currentIndex * 3).offset().left - $('.nav-galeria-wraper').offset().left
                $('.nav-galeria').animate({ 'scrollLeft': elementoOffset + 'px' })
            }
        })
        $('.arrow-left-nav').click(function () {
            if (currentIndex > 0) {
                currentIndex--
                var elementoOffset = $('.mini-img-wraper').eq(currentIndex * 3).offset().left - $('.nav-galeria-wraper').offset().left
                $('.nav-galeria').animate({ 'scrollLeft': elementoOffset + 'px' })
            }

        })
    }
    navigateSlider()
    function clickSlider() {
        $('.mini-img ').click(function () {
            $('.mini-img').css('box-shadow','0px 0px 0px 0px black')
            $(this).css('box-shadow','0px 0px 8px 0px black')
            var img=$(this).css('background-image')
            $('.foto-destaque').css('background-image', img)
        })
        $('.mini-img').eq(0).click()
    }
    clickSlider()

    $('[goto=contato]').click(function(e){
        $('html,body').animate({'scrollTop':$('#contato').offset().top})
        return false
    })
})

// style="background-image: url(./imagens/carro1.jpg);"