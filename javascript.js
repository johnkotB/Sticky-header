$(document).ready(function () {

    function stickyHeader(header, currentPos) {

        window.addEventListener('scroll', function (e) {

            var scrollDistanceY = window.pageYOffset || document.documentElement.scrollTop;

            if (scrollDistanceY > currentPos) {
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
});


