function percentCounter() {
    $("#loading_line").animate({
        width: "365"
    }, {
        easing: "linear",
        duration: 1500,
        step: function(s) {
            var t = 3.65,
                i = s / t;
            datatwo = i.toFixed(0), datapos = Math.abs(datatwo), datapos = Math.min(datapos, 99), $("#loading_percent").html(datapos + "%")
        }
    })
}
jQuery(document).ready(function(s) {
	$( ".tricky" ).addClass( "me" );
    function t(s, t, i, n, e) {
        1 == s && percentCounter()
    }
    var i = [{
            $Duration: 100,
            $Opacity: 1,
            $Brother: {
                $Duration: 100,
                $Opacity: 1
            }
        }],
        n = [];
    n.L = {
        $Duration: 900,
        x: .6,
        $Easing: {
            $Left: $JssorEasing$.$EaseInOutSine
        },
        $Opacity: 2
    }, n.R = {
        $Duration: 900,
        x: -.6,
        $Easing: {
            $Left: $JssorEasing$.$EaseInOutSine
        },
        $Opacity: 2
    }, n.B = {
        $Duration: 900,
        y: -.6,
        $Easing: {
            $Top: $JssorEasing$.$EaseInOutSine
        },
    $Opacity: 2
		}, n.F = {
        $Duration: 100,
        $Opacity: 2
    }, n.FADE = {
        $Duration: 900,
        $Opacity: 2
    };
    var e = {
		 $ShowLoading:true,
		 $LazyLoading: 0,
            $AutoPlay: !0,
            $AutoPlaySteps: 1,
            $Loop: 0,
            $AutoPlayInterval: 1e3,
            $PauseOnHover: 1,
            $StartIndex: 0,
            $ArrowKeyNavigation: !1,
            $SlideEasing: $JssorEasing$.$EaseOutQuint,
            $SlideDuration: 800,
            $MinDragOffsetToSlide: 20,
            $SlideSpacing: 0,
            $DisplayPieces: 1,
            $ParkingPosition: 0,
            $UISearchMode: 1,
            $PlayOrientation: 1,
            $DragOrientation: 0,
            $SlideshowOptions: {
                $Class: $JssorSlideshowRunner$,
                $Transitions: i,
                $TransitionsOrder: 1,
                $ShowLink: !0
            },
            $CaptionSliderOptions: {
                $Class: $JssorCaptionSlider$,
                $CaptionTransitions: n,
                $PlayInMode: 1,
                $PlayOutMode: 3
            },
            $ArrowNavigatorOptions: {
                $Class: $JssorArrowNavigator$,
                $ChanceToShow: 1,
                $AutoCenter: 2,
                $Steps: 1
            },
            $BulletNavigatorOptions: {
                $Class: $JssorBulletNavigator$,
                $ChanceToShow: 2,
                $AutoCenter: 1,
                $Steps: 1,
                $Lanes: 1,
                $SpacingX: 4,
                $SpacingY: 4,
                $Orientation: 1
            }
        },
        o = new $JssorSlider$("slider_container", e);
    s("img.se-svar").click(function() {
        o.$Next(), percentCounter()
    }), o.$On($JssorSlider$.$EVT_SLIDESHOW_END, t), t(0)
});
var opts = {
        lines: 14,
        length: 0,
        width: 17,
        radius: 41,
        scale: 1,
        corners: 1,
        color: "#ee2d26",
        opacity: .25,
        rotate: 0,
        direction: 1,
        speed: 1,
        trail: 60,
        fps: 20,
        zIndex: 2e9,
        className: "spinner",
        top: "50%",
        left: "50%",
        shadow: !1,
        hwaccel: !1,
        position: "absolute"
    },
    target = document.getElementById("loading"),
    spinner = new Spinner(opts).spin(target),
    discounts = [];
discounts[500] = "227", discounts[1e3] = "343", discounts[1500] = " 466", discounts[2e3] = "593", discounts[2500] = "727", discounts[3e3] = "876", discounts[3500] = "1.047", discounts[4e3] = "1.209", discounts[4500] = "1.389", discounts[5e3] = "1.581", discounts[5500] = "1.772", discounts[6e3] = "1.956", discounts[6500] = "2.146", discounts[7e3] = "2.336", discounts[7500] = "2.521", discounts[8e3] = "2.719", discounts[8500] = "2.918", discounts[9e3] = "3.116", discounts[9500] = "3.313", discounts[1e4] = "3.513", $(".slider").slider({
    min: 500,
    max: 1e4,
    step: 500,
    value: 3500
}).slider("float", {
    suffix: "&nbsp;kr."
}).on("slidechange", function(s, t) {
    $("#custom-labels-slider-result").text(discounts[t.value])
}), $(".vSlider").slider({
    min: 500,
    max: 1e4,
    step: 500,
    value: 3500,
    orientation: "vertical"
}).slider("float", {
    suffix: "&nbsp;kr."
}).on("slidechange", function(s, t) {
    $("#custom-labels-slider-result").text(discounts[t.value])
});