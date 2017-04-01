;
(function ($) {
    var common = function () {
        var ls=window.localStorage;
        var loadUp = function () {
                $("#site").on("click", function () {
                    location.href = "city.html";
                })
            }
            //解析地址栏中的信息
        var getParam = function () {
            var url = location.search.substr(1),
                obj = {};
            if (!url) return false;
            var arr = url.split("&");
            for (var i = 0, len = arr.length; i < len; i++) {
                var params = arr[i].split("=");
                    //地址栏解码用decodeURI
                obj[params[0]] = decodeURI(params[1]);
            }
            return obj;
        }
        //显示城市
        var showCity=function(){
            var cityName=$("#city_name"),
                cityId=$("#city_id");
            //判断地址栏中是否有参数
            if(getParam()){
                cityName.text(getParam().city_name);
                cityId.val(getParam().city_id);
                ls.setItem("city_id",getParam().city_id);
                ls.setItem("city_name",getParam().city_name);
            }else{
                cityName.text("北京");
                cityId.val("28");
                ls.setItem("city_id","28");
                ls.setItem("city_name","北京");
            }
            
        }
        var renderCity = function () {
            //渲染热门城市
            var hotCityStr = "";
            $.getJSON("../data/hotcity.json", function (data) {
                    $.each(data, function (i, v) {
                        hotCityStr += '<li>' + v + '</li>';
                    })
                    $(".hotcitylist").html(hotCityStr)
                })
                //渲染酒店
            var hotelStr = "";
            $.getJSON("../data/hotel.json", function (obj) {
                $.each(obj.result.hotel_list, function (key, val) {
                    hotelStr += '<div class="box"><img src="' + val.image + '" class="img1"><p>' + val.name + '</p><p>' + val.stars + '级</p><p><span>最低价' + val.low_price + '</span> ></p><p>' + val.addr + '<span class="distance">' + val.distance + '米</span></p></div>'
                })
                $(".content").html(hotelStr)
            })
        }
        return {
            init: function () {
                loadUp();
                getParam();
                showCity();
            },
            render: function () {
                renderCity()
            }
        }
    }()
    window.common = common;
})(Zepto);