/*jslint */
/*global AdobeEdge: false, window: false, document: false, console:false, alert: false */
(function (compId) {

    "use strict";
    var im='images/',
        aud='media/',
        vid='media/',
        js='js/',
        fonts = {
            'abel, sans-serif': '<script src=\"http://use.edgefonts.net/abel:n4:all.js\"></script>',
            'quicksand, sans-serif': '<script src=\"http://use.edgefonts.net/quicksand:i4,n3,i7,n7,n4,i3:all.js\"></script>'        },
        opts = {
            'gAudioPreloadPreference': 'auto',
            'gVideoPreloadPreference': 'auto'
        },
        resources = [
        ],
        scripts = [
            "https://s1.adform.net/banners/scripts/rmb/Adform.DHTML.js"
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
                            id: 'girl',
                            type: 'image',
                            rect: ['-132px', '-106px', '934px', '327px', 'auto', 'auto'],
                            opacity: '1',
                            fill: ["rgba(0,0,0,0)",im+"girl.jpg",'0px','0px'],
                            transform: [[],[],[],['1.43','0.68']]
                        },
                        {
                            id: 'papir',
                            type: 'image',
                            rect: ['0px', '-5px', '728px', '49px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"papir.png",'0px','0px']
                        },
                        {
                            id: 'papirCopy',
                            type: 'image',
                            rect: ['0px', '65px', '728px', '78px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"papir.png",'0px','0px'],
                            transform: [[],['180']]
                        },
                        {
                            id: 'RoundRect',
                            type: 'rect',
                            rect: ['641px', '5px', '80px', '15px', 'auto', 'auto'],
                            borderRadius: ["6px", "6px", "6px", "6px 6px"],
                            fill: ["rgba(192,192,192,1)",[270,[['rgba(240,177,177,1.00)',0],['rgba(252,42,42,1.00)',37]]]],
                            stroke: [1,"rgba(116,0,0,1.00)","solid"],
                            boxShadow: ["", 3, 4, 4, 0, "rgba(0,0,0,0.51)"]
                        },
                        {
                            id: 'HverTime_over2',
                            type: 'image',
                            rect: ['205px', '-4px', '363px', '26px', 'auto', 'auto'],
                            clip: 'rect(0px 368px 27px 0px)',
                            fill: ["rgba(0,0,0,0)",im+"HverTime_over2.png",'0px','0px'],
                            transform: [[],[],[],['0.39694','0.34939']]
                        },
                        {
                            id: 'Katastrofen3',
                            type: 'image',
                            rect: ['315px', '17px', '142px', '7px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"Katastrofen3.png",'0px','0px'],
                            transform: [[],[],[],['0.94','0.94']]
                        },
                        {
                            id: 'redbarnet',
                            type: 'image',
                            rect: ['15px', '1px', '62px', '23px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"redbarnet.png",'0px','0px']
                        },
                        {
                            id: 'Text3',
                            type: 'text',
                            rect: ['652px', '10px', '60px', '5px', 'auto', 'auto'],
                            text: "<p style=\"margin: 0px;\">BLIV INDSAMLER</p>",
                            align: "center",
                            font: ['Arial, Helvetica, sans-serif', [7, "px"], "rgba(255,255,255,1.00)", "200", "none", "normal", "break-word", ""],
                            textStyle: ["", "", "", "", "none"]
                        },
                        {
                            id: 'bliv_indsamler3',
                            type: 'image',
                            rect: ['219px', '50px', '290px', '17px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"bliv_indsamler3.png",'0px','0px']
                        },
                        {
                            id: 'Rectangle2',
                            type: 'rect',
                            rect: ['0px', '0px', '930px', '180px', 'auto', 'auto'],
                            cursor: 'pointer',
                            opacity: '0',
                            fill: ["rgba(192,192,192,1)"],
                            stroke: [1,"rgb(116, 0, 0)","none"]
                        }
                    ],
                    style: {
                        '${Stage}': {
                            isStage: true,
                            rect: ['null', 'null', '728px', '90px', 'auto', 'auto'],
                            overflow: 'hidden',
                            fill: ["rgba(0,0,0,1.00)"]
                        }
                    }
                },
                timeline: {
                    duration: 11407,
                    autoPlay: true,
                    data: [
                        [
                            "eid95",
                            "height",
                            11407,
                            0,
                            "linear",
                            "${girl}",
                            '327px',
                            '327px'
                        ],
                        [
                            "eid161",
                            "left",
                            11407,
                            0,
                            "linear",
                            "${Katastrofen3}",
                            '315px',
                            '315px'
                        ],
                        [
                            "eid55",
                            "scaleY",
                            0,
                            8170,
                            "easeOutCubic",
                            "${girl}",
                            '0.38796',
                            '0.68'
                        ],
                        [
                            "eid170",
                            "opacity",
                            10000,
                            1407,
                            "linear",
                            "${bliv_indsamler3}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid165",
                            "left",
                            11407,
                            0,
                            "linear",
                            "${girl}",
                            '-132px',
                            '-132px'
                        ],
                        [
                            "eid155",
                            "left",
                            11407,
                            0,
                            "linear",
                            "${HverTime_over2}",
                            '205px',
                            '205px'
                        ],
                        [
                            "eid100",
                            "top",
                            11407,
                            0,
                            "linear",
                            "${girl}",
                            '-106px',
                            '-106px'
                        ],
                        [
                            "eid91",
                            "left",
                            11407,
                            0,
                            "linear",
                            "${bliv_indsamler3}",
                            '219px',
                            '219px'
                        ],
                        [
                            "eid154",
                            "scaleY",
                            11407,
                            0,
                            "linear",
                            "${HverTime_over2}",
                            '0.34939',
                            '0.34939'
                        ],
                        [
                            "eid157",
                            "height",
                            11407,
                            0,
                            "linear",
                            "${Katastrofen3}",
                            '7px',
                            '7px'
                        ],
                        [
                            "eid160",
                            "width",
                            11407,
                            0,
                            "linear",
                            "${Katastrofen3}",
                            '142px',
                            '142px'
                        ],
                        [
                            "eid153",
                            "scaleX",
                            11407,
                            0,
                            "linear",
                            "${HverTime_over2}",
                            '0.39694',
                            '0.39694'
                        ],
                        [
                            "eid98",
                            "width",
                            11407,
                            0,
                            "linear",
                            "${girl}",
                            '934px',
                            '934px'
                        ],
                        [
                            "eid67",
                            "opacity",
                            8317,
                            1884,
                            "linear",
                            "${girl}",
                            '1',
                            '0'
                        ],
                        [
                            "eid86",
                            "background-image",
                            11407,
                            0,
                            "linear",
                            "${Stage}",
                            [270,[['rgba(255,255,255,0)',0],['rgba(255,255,255,0)',100]]],
                            [270,[['rgba(255,255,255,0)',0],['rgba(255,255,255,0)',100]]]
                        ],
                        [
                            "eid162",
                            "top",
                            11407,
                            0,
                            "linear",
                            "${Katastrofen3}",
                            '17px',
                            '17px'
                        ],
                        [
                            "eid105",
                            "clip",
                            1395,
                            0,
                            "linear",
                            "${HverTime_over2}",
                            [0,-7,27,0],
                            [0,-7,27,0],
                            {valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'}
                        ],
                        [
                            "eid106",
                            "clip",
                            1641,
                            0,
                            "linear",
                            "${HverTime_over2}",
                            [0,-7,27,0],
                            [0,23,27,0],
                            {valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'}
                        ],
                        [
                            "eid131",
                            "clip",
                            1894,
                            0,
                            "easeInOutQuart",
                            "${HverTime_over2}",
                            [0,23,27,0],
                            [0,44,27,0],
                            {valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'}
                        ],
                        [
                            "eid134",
                            "clip",
                            2145,
                            0,
                            "easeInOutQuart",
                            "${HverTime_over2}",
                            [0,44,27,0],
                            [0,67,27,0],
                            {valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'}
                        ],
                        [
                            "eid109",
                            "clip",
                            2389,
                            0,
                            "linear",
                            "${HverTime_over2}",
                            [0,67,27,0],
                            [0,116,27,0],
                            {valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'}
                        ],
                        [
                            "eid135",
                            "clip",
                            2722,
                            0,
                            "easeInOutQuart",
                            "${HverTime_over2}",
                            [0,116,27,0],
                            [0,109,27,0],
                            {valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'}
                        ],
                        [
                            "eid137",
                            "clip",
                            2882,
                            0,
                            "easeInOutQuart",
                            "${HverTime_over2}",
                            [0,109,27,0],
                            [0,137,27,0],
                            {valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'}
                        ],
                        [
                            "eid138",
                            "clip",
                            3094,
                            0,
                            "easeInOutQuart",
                            "${HverTime_over2}",
                            [0,156,27,0],
                            [0,157,27,0],
                            {valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'}
                        ],
                        [
                            "eid113",
                            "clip",
                            3261,
                            0,
                            "linear",
                            "${HverTime_over2}",
                            [0,190,27,0],
                            [0,181,27,0],
                            {valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'}
                        ],
                        [
                            "eid114",
                            "clip",
                            3472,
                            0,
                            "linear",
                            "${HverTime_over2}",
                            [0,212,27,0],
                            [0,235,27,0],
                            {valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'}
                        ],
                        [
                            "eid115",
                            "clip",
                            3670,
                            0,
                            "linear",
                            "${HverTime_over2}",
                            [0,235,27,0],
                            [0,249,27,0],
                            {valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'}
                        ],
                        [
                            "eid116",
                            "clip",
                            3831,
                            0,
                            "linear",
                            "${HverTime_over2}",
                            [0,262,27,0],
                            [0,271,27,0],
                            {valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'}
                        ],
                        [
                            "eid117",
                            "clip",
                            4010,
                            0,
                            "linear",
                            "${HverTime_over2}",
                            [0,287,27,0],
                            [0,290,27,0],
                            {valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'}
                        ],
                        [
                            "eid118",
                            "clip",
                            4170,
                            0,
                            "linear",
                            "${HverTime_over2}",
                            [0,310,27,0],
                            [0,320,27,0],
                            {valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'}
                        ],
                        [
                            "eid119",
                            "clip",
                            4342,
                            0,
                            "linear",
                            "${HverTime_over2}",
                            [0,336,27,0],
                            [0,343,27,0],
                            {valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'}
                        ],
                        [
                            "eid120",
                            "clip",
                            4528,
                            0,
                            "linear",
                            "${HverTime_over2}",
                            [0,360,27,0],
                            [0,368,27,0],
                            {valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'}
                        ],
                        [
                            "eid121",
                            "clip",
                            4670,
                            0,
                            "linear",
                            "${HverTime_over2}",
                            [0,385,27,0],
                            [0,379,27,0],
                            {valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'}
                        ],
                        [
                            "eid88",
                            "width",
                            11407,
                            0,
                            "linear",
                            "${bliv_indsamler3}",
                            '290px',
                            '290px'
                        ],
                        [
                            "eid87",
                            "height",
                            11407,
                            0,
                            "linear",
                            "${bliv_indsamler3}",
                            '17px',
                            '17px'
                        ],
                        [
                            "eid92",
                            "top",
                            11407,
                            0,
                            "linear",
                            "${bliv_indsamler3}",
                            '50px',
                            '50px'
                        ],
                        [
                            "eid156",
                            "top",
                            11407,
                            0,
                            "linear",
                            "${HverTime_over2}",
                            '-4px',
                            '-4px'
                        ],
                        [
                            "eid141",
                            "opacity",
                            5250,
                            2348,
                            "easeInOutQuart",
                            "${Katastrofen3}",
                            '0',
                            '1'
                        ],
                        [
                            "eid103",
                            "display",
                            0,
                            0,
                            "easeInOutQuart",
                            "${HverTime_over2}",
                            'none',
                            'none'
                        ],
                        [
                            "eid104",
                            "display",
                            1395,
                            0,
                            "easeInOutQuart",
                            "${HverTime_over2}",
                            'none',
                            'block'
                        ],
                        [
                            "eid51",
                            "scaleX",
                            0,
                            8170,
                            "easeOutCubic",
                            "${girl}",
                            '0.85714',
                            '1.43'
                        ]
                    ]
                }
            }
        };

    AdobeEdge.registerCompositionDefn(compId, symbols, fonts, scripts, resources, opts);

    if (!window.edge_authoring_mode) AdobeEdge.getComposition(compId).load("728x90_edgeActions.js");
})("EDGE-212867510");
