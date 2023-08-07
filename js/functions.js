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

})