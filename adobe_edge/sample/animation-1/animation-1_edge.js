/*jslint */
/*global AdobeEdge: false, window: false, document: false, console:false, alert: false */
(function (compId) {

    "use strict";
    var im='images/',
        aud='media/',
        vid='media/',
        js='js/',
        fonts = {
        },
        opts = {
            'gAudioPreloadPreference': 'auto',
            'gVideoPreloadPreference': 'auto'
        },
        resources = [
        ],
        scripts = [
        ],
        symbols = {
            "stage": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            id: 'BordingVista',
                            type: 'image',
                            rect: ['-414px', '126px', '414px', '98px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"BordingVista.png",'0px','0px']
                        },
                        {
                            id: 'Android',
                            type: 'image',
                            rect: ['410px', '-98px', '98px', '98px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"Android.png",'0px','0px']
                        },
                        {
                            id: 'php_logo',
                            type: 'image',
                            rect: ['280px', '-78px', '130px', '78px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"php_logo.png",'0px','0px']
                        },
                        {
                            id: 'asp-net',
                            type: 'image',
                            rect: ['173px', '-98px', '107px', '98px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"asp-net.png",'0px','0px']
                        },
                        {
                            id: 'java-logo3',
                            type: 'image',
                            rect: ['64px', '-109px', '109px', '109px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"java-logo.png",'0px','0px'],
                            transform: [[],['360']]
                        },
                        {
                            id: 'what_we_do',
                            type: 'text',
                            rect: ['64px', '31px', '409px', '51px', 'auto', 'auto'],
                            clip: 'rect(0px 0px 51px 0px)',
                            text: "<p style=\"margin: 0px;\">​What We do Here?&nbsp;</p>",
                            align: "left",
                            font: ['Arial, Helvetica, sans-serif', [42, "px"], "rgba(255,255,255,1)", "400", "none", "normal", "break-word", "normal"],
                            textStyle: ["", "", "", "", "none"]
                        },
                        {
                            id: 'Welcome',
                            type: 'text',
                            rect: ['77px', '146px', '396px', '107px', 'auto', 'auto'],
                            clip: 'rect(0px 396px 107px -40px)',
                            text: "<p style=\"margin: 0px; text-align: center;\">​<span style=\"font-weight: 800; font-family: Courier, 'Courier New', monospace; text-transform: uppercase;\">Welcome to Bording Vista</span></p>",
                            font: ['Arial, Helvetica, sans-serif', [42, "px"], "rgba(255,255,255,1.00)", "normal", "none", "", "break-word", "normal"],
                            transform: [[],[],[],['0','0']]
                        }
                    ],
                    style: {
                        '${Stage}': {
                            isStage: true,
                            rect: ['null', 'null', '550px', '400px', 'auto', 'auto'],
                            overflow: 'hidden',
                            fill: ["rgba(10,162,5,1.00)"]
                        }
                    }
                },
                timeline: {
                    duration: 27000,
                    autoPlay: true,
                    data: [
                        [
                            "eid109",
                            "rotateZ",
                            25500,
                            1000,
                            "linear",
                            "${BordingVista}",
                            '0deg',
                            '360deg'
                        ],
                        [
                            "eid27",
                            "clip",
                            6000,
                            500,
                            "linear",
                            "${what_we_do}",
                            [0,0,51,0],
                            [0,44,51,0],
                            {valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'}
                        ],
                        [
                            "eid29",
                            "clip",
                            6500,
                            500,
                            "linear",
                            "${what_we_do}",
                            [0,44,51,0],
                            [0,66,51,0],
                            {valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'}
                        ],
                        [
                            "eid31",
                            "clip",
                            7000,
                            500,
                            "linear",
                            "${what_we_do}",
                            [0,66,51,0],
                            [0,90,51,0],
                            {valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'}
                        ],
                        [
                            "eid33",
                            "clip",
                            7500,
                            500,
                            "linear",
                            "${what_we_do}",
                            [0,90,51,0],
                            [0,112,51,0],
                            {valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'}
                        ],
                        [
                            "eid35",
                            "clip",
                            8000,
                            500,
                            "linear",
                            "${what_we_do}",
                            [0,112,51,0],
                            [0,156,51,0],
                            {valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'}
                        ],
                        [
                            "eid37",
                            "clip",
                            8500,
                            500,
                            "linear",
                            "${what_we_do}",
                            [0,156,51,0],
                            [0,189,51,0],
                            {valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'}
                        ],
                        [
                            "eid39",
                            "clip",
                            9000,
                            500,
                            "linear",
                            "${what_we_do}",
                            [0,189,51,0],
                            [0,249,51,0],
                            {valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'}
                        ],
                        [
                            "eid41",
                            "clip",
                            9500,
                            500,
                            "linear",
                            "${what_we_do}",
                            [0,249,51,0],
                            [0,301,51,0],
                            {valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'}
                        ],
                        [
                            "eid43",
                            "clip",
                            10000,
                            500,
                            "linear",
                            "${what_we_do}",
                            [0,301,51,0],
                            [0,338,51,0],
                            {valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'}
                        ],
                        [
                            "eid45",
                            "clip",
                            10500,
                            500,
                            "linear",
                            "${what_we_do}",
                            [0,338,51,0],
                            [0,370,51,0],
                            {valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'}
                        ],
                        [
                            "eid86",
                            "top",
                            19000,
                            2000,
                            "linear",
                            "${php_logo}",
                            '-78px',
                            '322px'
                        ],
                        [
                            "eid15",
                            "scaleY",
                            0,
                            4000,
                            "linear",
                            "${Welcome}",
                            '1',
                            '1.64'
                        ],
                        [
                            "eid8",
                            "scaleY",
                            4000,
                            2000,
                            "linear",
                            "${Welcome}",
                            '1.64',
                            '0'
                        ],
                        [
                            "eid105",
                            "left",
                            25500,
                            1000,
                            "linear",
                            "${BordingVista}",
                            '-414px',
                            '39px'
                        ],
                        [
                            "eid2",
                            "scaleX",
                            0,
                            4000,
                            "linear",
                            "${Welcome}",
                            '1',
                            '1.64'
                        ],
                        [
                            "eid7",
                            "scaleX",
                            4000,
                            2000,
                            "linear",
                            "${Welcome}",
                            '1.64',
                            '0'
                        ],
                        [
                            "eid102",
                            "rotateZ",
                            25000,
                            500,
                            "linear",
                            "${Android}",
                            '0deg',
                            '360deg'
                        ],
                        [
                            "eid91",
                            "top",
                            23000,
                            2000,
                            "linear",
                            "${Android}",
                            '-98px',
                            '302px'
                        ],
                        [
                            "eid81",
                            "top",
                            11000,
                            2000,
                            "linear",
                            "${java-logo3}",
                            '-109px',
                            '291px'
                        ],
                        [
                            "eid84",
                            "top",
                            15000,
                            2000,
                            "linear",
                            "${asp-net}",
                            '-98px',
                            '302px'
                        ],
                        [
                            "eid95",
                            "top",
                            25500,
                            0,
                            "linear",
                            "${asp-net}",
                            '302px',
                            '302px'
                        ],
                        [
                            "eid100",
                            "rotateZ",
                            21000,
                            500,
                            "linear",
                            "${php_logo}",
                            '0deg',
                            '360deg'
                        ],
                        [
                            "eid97",
                            "rotateZ",
                            17000,
                            500,
                            "linear",
                            "${asp-net}",
                            '0deg',
                            '360deg'
                        ],
                        [
                            "eid94",
                            "rotateZ",
                            13000,
                            500,
                            "linear",
                            "${java-logo3}",
                            '360deg',
                            '721deg'
                        ]
                    ]
                }
            }
        };

    AdobeEdge.registerCompositionDefn(compId, symbols, fonts, scripts, resources, opts);

    if (!window.edge_authoring_mode) AdobeEdge.getComposition(compId).load("animation-1_edgeActions.js");
})("EDGE-16493000");
