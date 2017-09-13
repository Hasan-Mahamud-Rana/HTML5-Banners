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
                            id: 'snakes',
                            type: 'image',
                            rect: ['0px', '7px', '1000px', '714px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"snakes.jpg",'0px','0px']
                        },
                        {
                            id: 'Text2',
                            type: 'text',
                            rect: ['466px', '607px', 'auto', 'auto', 'auto', 'auto'],
                            text: "<p style=\"margin: 0px;\">​2015</p>",
                            align: "left",
                            font: ['Arial, Helvetica, sans-serif', [24, "px"], "rgba(255,255,255,1)", "400", "none", "normal", "break-word", "nowrap"],
                            textStyle: ["", "", "", "", "none"]
                        },
                        {
                            id: 'Text',
                            type: 'text',
                            rect: ['330px', '87px', 'auto', 'auto', 'auto', 'auto'],
                            text: "<p style=\"margin: 0px;\">​1984</p>",
                            font: ['Arial, Helvetica, sans-serif', [24, ""], "rgba(255,255,255,1.00)", "normal", "none", "", "break-word", "nowrap"]
                        },
                        {
                            id: 'TextCopy',
                            type: 'text',
                            rect: ['726px', '290px', 'auto', 'auto', 'auto', 'auto'],
                            text: "<p style=\"margin: 0px;\">​1990</p>",
                            font: ['Arial, Helvetica, sans-serif', [24, ""], "rgba(255,255,255,1.00)", "normal", "none", "", "break-word", "nowrap"]
                        },
                        {
                            id: 'TextCopy2',
                            type: 'text',
                            rect: ['720px', '476px', 'auto', 'auto', 'auto', 'auto'],
                            text: "<p style=\"margin: 0px;\">​1995</p>",
                            font: ['Arial, Helvetica, sans-serif', [24, ""], "rgba(255,255,255,1.00)", "normal", "none", "", "break-word", "nowrap"]
                        },
                        {
                            id: 'TextCopy3',
                            type: 'text',
                            rect: ['356px', '383px', 'auto', 'auto', 'auto', 'auto'],
                            text: "<p style=\"margin: 0px;\">​2000</p>",
                            font: ['Arial, Helvetica, sans-serif', [24, ""], "rgba(255,255,255,1.00)", "normal", "none", "", "break-word", "nowrap"]
                        },
                        {
                            id: 'TextCopy4',
                            type: 'text',
                            rect: ['38px', '438px', 'auto', 'auto', 'auto', 'auto'],
                            text: "<p style=\"margin: 0px;\">​2007</p>",
                            font: ['Arial, Helvetica, sans-serif', [24, ""], "rgba(49,49,49,1.00)", "normal", "none", "", "break-word", "nowrap"]
                        }
                    ],
                    style: {
                        '${Stage}': {
                            isStage: true,
                            rect: [undefined, undefined, '1000px', '800px'],
                            overflow: 'hidden',
                            fill: ["rgba(255,255,255,1)"]
                        }
                    }
                },
                timeline: {
                    duration: 6000,
                    autoPlay: true,
                    data: [
                        [
                            "eid30",
                            "scaleY",
                            3000,
                            500,
                            "linear",
                            "${TextCopy3}",
                            '1',
                            '1.5'
                        ],
                        [
                            "eid32",
                            "scaleY",
                            3500,
                            500,
                            "linear",
                            "${TextCopy3}",
                            '1.5',
                            '1'
                        ],
                        [
                            "eid23",
                            "scaleX",
                            2000,
                            500,
                            "linear",
                            "${TextCopy2}",
                            '1',
                            '1.5'
                        ],
                        [
                            "eid25",
                            "scaleX",
                            2500,
                            500,
                            "linear",
                            "${TextCopy2}",
                            '1.5',
                            '1'
                        ],
                        [
                            "eid47",
                            "scaleX",
                            5000,
                            500,
                            "linear",
                            "${Text2}",
                            '1',
                            '1.5'
                        ],
                        [
                            "eid49",
                            "scaleX",
                            5500,
                            500,
                            "linear",
                            "${Text2}",
                            '1.5',
                            '1'
                        ],
                        [
                            "eid51",
                            "left",
                            6000,
                            0,
                            "linear",
                            "${Text2}",
                            '466px',
                            '466px'
                        ],
                        [
                            "eid48",
                            "scaleY",
                            5000,
                            500,
                            "linear",
                            "${Text2}",
                            '1',
                            '1.5'
                        ],
                        [
                            "eid50",
                            "scaleY",
                            5500,
                            500,
                            "linear",
                            "${Text2}",
                            '1.5',
                            '1'
                        ],
                        [
                            "eid17",
                            "scaleX",
                            1000,
                            500,
                            "linear",
                            "${TextCopy}",
                            '1',
                            '1.5'
                        ],
                        [
                            "eid19",
                            "scaleX",
                            1500,
                            500,
                            "linear",
                            "${TextCopy}",
                            '1.5',
                            '1'
                        ],
                        [
                            "eid18",
                            "scaleY",
                            1000,
                            500,
                            "linear",
                            "${TextCopy}",
                            '1',
                            '1.5'
                        ],
                        [
                            "eid20",
                            "scaleY",
                            1500,
                            500,
                            "linear",
                            "${TextCopy}",
                            '1.5',
                            '1'
                        ],
                        [
                            "eid35",
                            "scaleX",
                            4000,
                            500,
                            "linear",
                            "${TextCopy4}",
                            '1',
                            '1.5'
                        ],
                        [
                            "eid37",
                            "scaleX",
                            4500,
                            500,
                            "linear",
                            "${TextCopy4}",
                            '1.5',
                            '1'
                        ],
                        [
                            "eid11",
                            "scaleX",
                            0,
                            500,
                            "linear",
                            "${Text}",
                            '1',
                            '1.5'
                        ],
                        [
                            "eid13",
                            "scaleX",
                            500,
                            500,
                            "linear",
                            "${Text}",
                            '1.5',
                            '1'
                        ],
                        [
                            "eid12",
                            "scaleY",
                            0,
                            500,
                            "linear",
                            "${Text}",
                            '1',
                            '1.5'
                        ],
                        [
                            "eid14",
                            "scaleY",
                            500,
                            500,
                            "linear",
                            "${Text}",
                            '1.5',
                            '1'
                        ],
                        [
                            "eid36",
                            "scaleY",
                            4000,
                            500,
                            "linear",
                            "${TextCopy4}",
                            '1',
                            '1.5'
                        ],
                        [
                            "eid38",
                            "scaleY",
                            4500,
                            500,
                            "linear",
                            "${TextCopy4}",
                            '1.5',
                            '1'
                        ],
                        [
                            "eid24",
                            "scaleY",
                            2000,
                            500,
                            "linear",
                            "${TextCopy2}",
                            '1',
                            '1.5'
                        ],
                        [
                            "eid26",
                            "scaleY",
                            2500,
                            500,
                            "linear",
                            "${TextCopy2}",
                            '1.5',
                            '1'
                        ],
                        [
                            "eid29",
                            "scaleX",
                            3000,
                            500,
                            "linear",
                            "${TextCopy3}",
                            '1',
                            '1.5'
                        ],
                        [
                            "eid31",
                            "scaleX",
                            3500,
                            500,
                            "linear",
                            "${TextCopy3}",
                            '1.5',
                            '1'
                        ]
                    ]
                }
            }
        };

    AdobeEdge.registerCompositionDefn(compId, symbols, fonts, scripts, resources, opts);

    if (!window.edge_authoring_mode) AdobeEdge.getComposition(compId).load("graf_edgeActions.js");
})("EDGE-9934968");
