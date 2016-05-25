$(document).ready(function () {
    var header1 = document.querySelector('.head[data-header]');
    //var header2 = document.getElementById('head');
    var origOffsetY = 1;
    //var offSetY = header2.offsetTop;

    function onScroll(e) {
        window.scrollY >= origOffsetY ? header1.classList.add('sticky') : header1.classList.remove('sticky');

    };

    document.addEventListener('scroll', onScroll);

});


