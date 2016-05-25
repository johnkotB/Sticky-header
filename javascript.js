$(document).ready(function () {

    debugger;

    function stickyHeader(header, currentPos) {
        window.addEventListener('scroll', function (e) {
            var distanceY = window.pageYOffset || document.documentElement.scrollTop;

            if (distanceY > currentPos) {
                header.classList.add("sticky");
            }
            else {
                header.classList.remove("sticky");
            }
        });
    }

    var header = document.querySelector(".head");
    stickyHeader(header, header.clientHeight);

    var header2 = document.getElementById('head');
    stickyHeader(header2, header2.offsetTop);


    //function stickyHeader() {
    //    window.addEventListener('scroll', function (e) {
    //        var distanceY = window.pageYOffset || document.documentElement.scrollTop;
    //        var header = document.querySelector(".head");
    //        var shrinkOn = header.clientHeight;
    //        if (distanceY > shrinkOn) {
    //            header.classList.add("sticky");
    //        }
    //        else {
    //            if (header.classList.contains("sticky")) {
    //                header.classList.remove("sticky");
    //            }
    //        }
    //    });
    //}
    //stickyHeader();



    //var header1 = document.querySelector('.head[data-header]');
    //var origOffsetY = 1;
    //function onScroll(e) {
    //    window.scrollY >= origOffsetY ? header1.classList.add('sticky') : header1.classList.remove('sticky');
    //};
    //document.addEventListener('scroll', onScroll);
});


