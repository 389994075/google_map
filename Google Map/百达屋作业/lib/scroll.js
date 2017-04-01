//滚动条
;
(function (w, d) {
    var myScroll;
    window.addEventListener("load", loaded, false);

    function loaded() {
        myScroll = new IScroll(".main", {
            scrollbars: true,
            /*出现滚动条*/
            shrinkScrollbars: 'scale',
            /*滚动条是否支持缩放*/
            fadeScrollbars: true,
            /*是否‘支持淡入淡出*/
            disableMouse: true,
            /*是够允许pc端滑动*/
            mouseWheel: false,
            /*是否允许滚轮滑动*/
        })
    }

})(window, document)