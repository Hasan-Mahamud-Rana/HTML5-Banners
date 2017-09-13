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
                scaleToFit: "both",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            id: 'snakes',
                            type: 'image',
                            rect: ['50px', '22px', '600px', '1106px', 'auto', 'auto'],
                            clip: 'rect(0px 600px 235px 0px)',
                            fill: ["rgba(0,0,0,0)",im+"snakes.png",'0px','0px']
                        },
                        {
                            id: 'circle1',
                            type: 'ellipse',
                            rect: ['81px', '51px', '21px', '20px', 'auto', 'auto'],
                            borderRadius: ["50%", "50%", "50%", "50%"],
                            opacity: '0',
                            fill: ["rgba(221,20,26,1.00)"],
                            stroke: [0,"rgba(0,0,0,1)","none"],
                            userClass: "",
                            c: [
                            {
                                id: '_1986',
                                type: 'text',
                                tag: 'p',
                                rect: ['-14px', '-26px', '72px', '20px', 'auto', 'auto'],
                                opacity: '0',
                                text: "<p style=\"margin: 0px;\">​1986</p>",
                                font: ['Arial, Helvetica, sans-serif', [18, "px"], "rgba(255,0,0,1.00)", "700", "none", "", "break-word", "normal"]
                            }]
                        },
                        {
                            id: '_1996',
                            type: 'text',
                            tag: 'p',
                            rect: ['589px', '147px', '89px', '16px', 'auto', 'auto'],
                            opacity: '0',
                            text: "<p style=\"margin: 0px;\">​1996</p>",
                            align: "left",
                            font: ['Arial, Helvetica, sans-serif', [18, "px"], "rgba(255,0,0,1)", "700", "none", "normal", "break-word", "normal"],
                            textStyle: ["", "", "", "", "none"],
                            transform: [[],[],[],['1.08']]
                        },
                        {
                            id: 'circle-2',
                            type: 'rect',
                            rect: ['592px', '176px', '21px', '20px', 'auto', 'auto'],
                            borderRadius: ["10px", "10px", "10px", "10px"],
                            opacity: '0',
                            fill: ["rgba(221,20,26,1)"],
                            stroke: [0,"rgb(0, 0, 0)","none"],
                            userClass: ""
                        },
                        {
                            id: '_2000',
                            type: 'text',
                            tag: 'p',
                            rect: ['57px', '398px', '77px', '20px', 'auto', 'auto'],
                            opacity: '0',
                            text: "<p style=\"margin: 0px; text-align: center;\">​2000</p>",
                            align: "left",
                            font: ['Arial, Helvetica, sans-serif', [24, "px"], "rgba(255,0,0,1)", "700", "none", "normal", "break-word", "normal"],
                            textStyle: ["", "", "", "", "none"],
                            transform: [[],[],[],['0.5','0.5']]
                        },
                        {
                            id: 'circle3',
                            type: 'rect',
                            rect: ['85px', '422px', '21px', '20px', 'auto', 'auto'],
                            borderRadius: ["10px", "10px", "10px", "10px"],
                            opacity: '0',
                            fill: ["rgba(221,20,26,1)"],
                            stroke: [0,"rgb(0, 0, 0)","none"],
                            userClass: ""
                        },
                        {
                            id: '_2006',
                            type: 'text',
                            tag: 'p',
                            rect: ['583px', '671px', '77px', '20px', 'auto', 'auto'],
                            opacity: '0',
                            text: "<p style=\"margin: 0px;\">​2006</p>",
                            align: "left",
                            font: ['Arial, Helvetica, sans-serif', [18, "px"], "rgba(255,0,0,1)", "700", "none", "normal", "break-word", "normal"],
                            textStyle: ["", "", "", "", "none"],
                            transform: [[],[],[],['0.5','0.5']]
                        },
                        {
                            id: 'circle4',
                            type: 'rect',
                            rect: ['594px', '691px', '21px', '20px', 'auto', 'auto'],
                            borderRadius: ["10px", "10px", "10px", "10px"],
                            opacity: '0',
                            fill: ["rgba(221,20,26,1)"],
                            stroke: [0,"rgb(0, 0, 0)","none"],
                            userClass: ""
                        },
                        {
                            id: '_2010',
                            type: 'text',
                            tag: 'p',
                            rect: ['76px', '920px', '44px', '20px', 'auto', 'auto'],
                            opacity: '0',
                            text: "<p style=\"margin: 0px;\">​2010</p><p style=\"margin: 0px;\">​</p>",
                            align: "left",
                            font: ['Arial, Helvetica, sans-serif', [18, "px"], "rgba(255,0,0,1)", "700", "none", "normal", "break-word", "normal"],
                            textStyle: ["", "", "", "", "none"],
                            transform: [[],[],[],['0.5']]
                        },
                        {
                            id: 'circle5',
                            type: 'rect',
                            rect: ['85px', '944px', '21px', '20px', 'auto', 'auto'],
                            borderRadius: ["10px", "10px", "10px", "10px"],
                            opacity: '0',
                            fill: ["rgba(221,20,26,1)"],
                            stroke: [0,"rgb(0, 0, 0)","none"],
                            userClass: ""
                        },
                        {
                            id: '_2016',
                            type: 'text',
                            tag: 'p',
                            rect: ['584px', '1051px', '44px', '20px', 'auto', 'auto'],
                            opacity: '0',
                            text: "<p style=\"margin: 0px;\">​2015</p><p style=\"margin: 0px;\">​</p>",
                            align: "left",
                            font: ['Arial, Helvetica, sans-serif', [18, "px"], "rgba(255,0,0,1)", "700", "none", "normal", "break-word", "normal"],
                            textStyle: ["", "", "", "", "none"],
                            transform: [[],[],[],['0.5','0.5']]
                        },
                        {
                            id: 'circle6',
                            type: 'rect',
                            rect: ['594px', '1078px', '21px', '20px', 'auto', 'auto'],
                            borderRadius: ["10px", "10px", "10px", "10px"],
                            opacity: '0',
                            fill: ["rgba(221,20,26,1)"],
                            stroke: [0,"rgb(0, 0, 0)","none"],
                            userClass: ""
                        }
                    ],
                    style: {
                        '${Stage}': {
                            isStage: true,
                            rect: ['null', 'null', '700px', '1150px', 'auto', 'auto'],
                            overflow: 'hidden',
                            fill: ["rgba(255,255,255,1)"]
                        }
                    }
                },
                timeline: {
                    duration: 12840,
                    autoPlay: true,
                    data: [
                        [
                            "eid147",
                            "width",
                            12840,
                            0,
                            "linear",
                            "${_2016}",
                            '44px',
                            '44px'
                        ],
                        [
                            "eid111",
                            "opacity",
                            9840,
                            500,
                            "linear",
                            "${circle5}",
                            '0',
                            '1'
                        ],
                        [
                            "eid143",
                            "scaleX",
                            12340,
                            500,
                            "linear",
                            "${_2016}",
                            '0.5',
                            '1'
                        ],
                        [
                            "eid73",
                            "scaleX",
                            7340,
                            500,
                            "linear",
                            "${circle3}",
                            '1',
                            '1.5'
                        ],
                        [
                            "eid75",
                            "scaleX",
                            7840,
                            500,
                            "linear",
                            "${circle3}",
                            '1.5',
                            '1'
                        ],
                        [
                            "eid146",
                            "top",
                            12840,
                            0,
                            "linear",
                            "${_2016}",
                            '1051px',
                            '1051px'
                        ],
                        [
                            "eid125",
                            "top",
                            11340,
                            0,
                            "linear",
                            "${_2010}",
                            '920px',
                            '920px'
                        ],
                        [
                            "eid62",
                            "font-size",
                            5340,
                            0,
                            "linear",
                            "${_1986}",
                            '18px',
                            '18px'
                        ],
                        [
                            "eid85",
                            "scaleX",
                            8340,
                            500,
                            "linear",
                            "${_2000}",
                            '0.5',
                            '1'
                        ],
                        [
                            "eid79",
                            "opacity",
                            8340,
                            500,
                            "linear",
                            "${_2000}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid45",
                            "opacity",
                            6840,
                            250,
                            "linear",
                            "${_1996}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid6",
                            "clip",
                            0,
                            283,
                            "linear",
                            "${snakes}",
                            [0,0,0,0],
                            [0,118,75,0],
                            {valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'}
                        ],
                        [
                            "eid7",
                            "clip",
                            283,
                            413,
                            "linear",
                            "${snakes}",
                            [0,118,75,0],
                            [0,273,75,0],
                            {valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'}
                        ],
                        [
                            "eid8",
                            "clip",
                            695,
                            348,
                            "linear",
                            "${snakes}",
                            [0,273,75,0],
                            [0,513,75,0],
                            {valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'}
                        ],
                        [
                            "eid9",
                            "clip",
                            1043,
                            419,
                            "linear",
                            "${snakes}",
                            [0,513,75,0],
                            [0,600,235,0],
                            {valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'}
                        ],
                        [
                            "eid10",
                            "clip",
                            1463,
                            1787,
                            "linear",
                            "${snakes}",
                            [0,600,235,0],
                            [0,600,1150,0],
                            {valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'}
                        ],
                        [
                            "eid106",
                            "scaleY",
                            9590,
                            250,
                            "linear",
                            "${_2006}",
                            '0.5',
                            '1'
                        ],
                        [
                            "eid74",
                            "scaleY",
                            7340,
                            500,
                            "linear",
                            "${circle3}",
                            '1',
                            '1.5'
                        ],
                        [
                            "eid76",
                            "scaleY",
                            7840,
                            500,
                            "linear",
                            "${circle3}",
                            '1.5',
                            '1'
                        ],
                        [
                            "eid120",
                            "scaleY",
                            10840,
                            500,
                            "linear",
                            "${_2010}",
                            '0.5',
                            '1'
                        ],
                        [
                            "eid113",
                            "scaleX",
                            9840,
                            500,
                            "linear",
                            "${circle5}",
                            '1',
                            '1.5'
                        ],
                        [
                            "eid115",
                            "scaleX",
                            10340,
                            500,
                            "linear",
                            "${circle5}",
                            '1.5',
                            '1'
                        ],
                        [
                            "eid13",
                            "opacity",
                            3250,
                            512,
                            "linear",
                            "${circle1}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid38",
                            "scaleX",
                            5840,
                            500,
                            "linear",
                            "${circle-2}",
                            '1',
                            '1.5'
                        ],
                        [
                            "eid40",
                            "scaleX",
                            6340,
                            500,
                            "linear",
                            "${circle-2}",
                            '1.5',
                            '1'
                        ],
                        [
                            "eid86",
                            "scaleY",
                            8340,
                            500,
                            "linear",
                            "${_2000}",
                            '0.5',
                            '1'
                        ],
                        [
                            "eid112",
                            "scaleY",
                            9840,
                            500,
                            "linear",
                            "${circle5}",
                            '1',
                            '1.5'
                        ],
                        [
                            "eid114",
                            "scaleY",
                            10340,
                            500,
                            "linear",
                            "${circle5}",
                            '1.5',
                            '1'
                        ],
                        [
                            "eid16",
                            "scaleX",
                            3762,
                            512,
                            "linear",
                            "${circle1}",
                            '1',
                            '1.5'
                        ],
                        [
                            "eid19",
                            "scaleX",
                            4274,
                            512,
                            "linear",
                            "${circle1}",
                            '1.5',
                            '1'
                        ],
                        [
                            "eid55",
                            "scaleX",
                            4786,
                            2304,
                            "linear",
                            "${circle1}",
                            '1',
                            '1.02'
                        ],
                        [
                            "eid54",
                            "left",
                            7090,
                            0,
                            "linear",
                            "${_1996}",
                            '589px',
                            '589px'
                        ],
                        [
                            "eid126",
                            "width",
                            11340,
                            0,
                            "linear",
                            "${_2010}",
                            '44px',
                            '44px'
                        ],
                        [
                            "eid93",
                            "scaleX",
                            9090,
                            250,
                            "linear",
                            "${circle4}",
                            '1',
                            '1.5'
                        ],
                        [
                            "eid95",
                            "scaleX",
                            9340,
                            250,
                            "linear",
                            "${circle4}",
                            '1.5',
                            '1'
                        ],
                        [
                            "eid18",
                            "background-color",
                            4274,
                            0,
                            "linear",
                            "${circle1}",
                            'rgba(221,20,26,1.00)',
                            'rgba(221,20,26,1.00)'
                        ],
                        [
                            "eid17",
                            "scaleY",
                            3762,
                            512,
                            "linear",
                            "${circle1}",
                            '1',
                            '1.5'
                        ],
                        [
                            "eid20",
                            "scaleY",
                            4274,
                            512,
                            "linear",
                            "${circle1}",
                            '1.5',
                            '1'
                        ],
                        [
                            "eid144",
                            "scaleY",
                            12340,
                            500,
                            "linear",
                            "${_2016}",
                            '0.5',
                            '1'
                        ],
                        [
                            "eid50",
                            "scaleX",
                            6840,
                            250,
                            "linear",
                            "${_1996}",
                            '1',
                            '1.25'
                        ],
                        [
                            "eid145",
                            "left",
                            12840,
                            0,
                            "linear",
                            "${_2016}",
                            '584px',
                            '584px'
                        ],
                        [
                            "eid90",
                            "opacity",
                            8840,
                            250,
                            "linear",
                            "${circle4}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid107",
                            "scaleX",
                            9590,
                            250,
                            "linear",
                            "${_2006}",
                            '0.5',
                            '1'
                        ],
                        [
                            "eid88",
                            "font-size",
                            8840,
                            0,
                            "linear",
                            "${_2000}",
                            '24px',
                            '24px'
                        ],
                        [
                            "eid133",
                            "scaleY",
                            11340,
                            500,
                            "linear",
                            "${circle6}",
                            '1',
                            '1.5'
                        ],
                        [
                            "eid135",
                            "scaleY",
                            11840,
                            500,
                            "linear",
                            "${circle6}",
                            '1.5',
                            '1'
                        ],
                        [
                            "eid94",
                            "scaleY",
                            9090,
                            250,
                            "linear",
                            "${circle4}",
                            '1',
                            '1.5'
                        ],
                        [
                            "eid96",
                            "scaleY",
                            9340,
                            250,
                            "linear",
                            "${circle4}",
                            '1.5',
                            '1'
                        ],
                        [
                            "eid32",
                            "scaleY",
                            5340,
                            500,
                            "linear",
                            "${_1986}",
                            '1',
                            '1.25'
                        ],
                        [
                            "eid105",
                            "opacity",
                            9590,
                            250,
                            "linear",
                            "${_2006}",
                            '0',
                            '1'
                        ],
                        [
                            "eid119",
                            "opacity",
                            10840,
                            500,
                            "linear",
                            "${_2010}",
                            '0',
                            '1'
                        ],
                        [
                            "eid35",
                            "opacity",
                            5340,
                            500,
                            "linear",
                            "${circle-2}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid134",
                            "scaleX",
                            11340,
                            500,
                            "linear",
                            "${circle6}",
                            '1',
                            '1.5'
                        ],
                        [
                            "eid136",
                            "scaleX",
                            11840,
                            500,
                            "linear",
                            "${circle6}",
                            '1.5',
                            '1'
                        ],
                        [
                            "eid132",
                            "opacity",
                            11340,
                            500,
                            "linear",
                            "${circle6}",
                            '0',
                            '1'
                        ],
                        [
                            "eid31",
                            "scaleX",
                            5340,
                            500,
                            "linear",
                            "${_1986}",
                            '1',
                            '1.25'
                        ],
                        [
                            "eid24",
                            "opacity",
                            4840,
                            500,
                            "linear",
                            "${_1986}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid68",
                            "top",
                            5340,
                            0,
                            "linear",
                            "${_1986}",
                            '-26px',
                            '-26px'
                        ],
                        [
                            "eid67",
                            "left",
                            5340,
                            0,
                            "linear",
                            "${_1986}",
                            '-14px',
                            '-14px'
                        ],
                        [
                            "eid51",
                            "scaleY",
                            6840,
                            250,
                            "linear",
                            "${_1996}",
                            '1',
                            '1.25'
                        ],
                        [
                            "eid39",
                            "scaleY",
                            5840,
                            500,
                            "linear",
                            "${circle-2}",
                            '1',
                            '1.5'
                        ],
                        [
                            "eid41",
                            "scaleY",
                            6340,
                            500,
                            "linear",
                            "${circle-2}",
                            '1.5',
                            '1'
                        ],
                        [
                            "eid70",
                            "opacity",
                            7090,
                            250,
                            "linear",
                            "${circle3}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid142",
                            "opacity",
                            12340,
                            500,
                            "linear",
                            "${_2016}",
                            '0',
                            '1'
                        ],
                        [
                            "eid121",
                            "scaleX",
                            10840,
                            500,
                            "linear",
                            "${_2010}",
                            '0.5',
                            '1'
                        ],
                        [
                            "eid128",
                            "left",
                            11340,
                            0,
                            "linear",
                            "${_2010}",
                            '76px',
                            '76px'
                        ]
                    ]
                }
            }
        };

    AdobeEdge.registerCompositionDefn(compId, symbols, fonts, scripts, resources, opts);

    if (!window.edge_authoring_mode) AdobeEdge.getComposition(compId).load("timeline_edgeActions.js");
})("EDGE-9918337");
