//Temporary holding space for lanuage packs to clean up main source

"+s0g": function (n, t, e) {
    !function (n) {
        "use strict";
        var t = "jan._feb._mrt._apr._mei_jun._jul._aug._sep._okt._nov._dec.".split("_"),
            e = "jan_feb_mrt_apr_mei_jun_jul_aug_sep_okt_nov_dec".split("_"),
            o = [/^jan/i, /^feb/i, /^maart|mrt.?$/i, /^apr/i, /^mei$/i, /^jun[i.]?$/i, /^jul[i.]?$/i, /^aug/i, /^sep/i, /^okt/i, /^nov/i, /^dec/i],
            l = /^(januari|februari|maart|april|mei|ju[nl]i|augustus|september|oktober|november|december|jan\.?|feb\.?|mrt\.?|apr\.?|ju[nl]\.?|aug\.?|sep\.?|okt\.?|nov\.?|dec\.?)/i;
        n.defineLocale("nl", {
            months: "januari_februari_maart_april_mei_juni_juli_augustus_september_oktober_november_december".split("_"),
            monthsShort: function (n, o) {
                return n ? /-MMM-/.test(o) ? e[n.month()] : t[n.month()] : t
            },
            monthsRegex: l,
            monthsShortRegex: l,
            monthsStrictRegex: /^(januari|februari|maart|april|mei|ju[nl]i|augustus|september|oktober|november|december)/i,
            monthsShortStrictRegex: /^(jan\.?|feb\.?|mrt\.?|apr\.?|mei|ju[nl]\.?|aug\.?|sep\.?|okt\.?|nov\.?|dec\.?)/i,
            monthsParse: o,
            longMonthsParse: o,
            shortMonthsParse: o,
            weekdays: "zondag_maandag_dinsdag_woensdag_donderdag_vrijdag_zaterdag".split("_"),
            weekdaysShort: "zo._ma._di._wo._do._vr._za.".split("_"),
            weekdaysMin: "zo_ma_di_wo_do_vr_za".split("_"),
            weekdaysParseExact: !0,
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD-MM-YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY HH:mm",
                LLLL: "dddd D MMMM YYYY HH:mm"
            },
            calendar: {
                sameDay: "[vandaag om] LT",
                nextDay: "[morgen om] LT",
                nextWeek: "dddd [om] LT",
                lastDay: "[gisteren om] LT",
                lastWeek: "[afgelopen] dddd [om] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "over %s",
                past: "%s geleden",
                s: "een paar seconden",
                ss: "%d seconden",
                m: "\xe9\xe9n minuut",
                mm: "%d minuten",
                h: "\xe9\xe9n uur",
                hh: "%d uur",
                d: "\xe9\xe9n dag",
                dd: "%d dagen",
                M: "\xe9\xe9n maand",
                MM: "%d maanden",
                y: "\xe9\xe9n jaar",
                yy: "%d jaar"
            },
            dayOfMonthOrdinalParse: /\d{1,2}(ste|de)/,
            ordinal: function (n) {
                return n + (1 === n || 8 === n || n >= 20 ? "ste" : "de")
            },
            week: {dow: 1, doy: 4}
        })
    }(e("wd/R"))
},
"//9w": function (n, t, e) {
    !function (n) {
        "use strict";
        e("wd/R").defineLocale("se", {
            months: "o\u0111\u0111ajagem\xe1nnu_guovvam\xe1nnu_njuk\u010dam\xe1nnu_cuo\u014bom\xe1nnu_miessem\xe1nnu_geassem\xe1nnu_suoidnem\xe1nnu_borgem\xe1nnu_\u010dak\u010dam\xe1nnu_golggotm\xe1nnu_sk\xe1bmam\xe1nnu_juovlam\xe1nnu".split("_"),
            monthsShort: "o\u0111\u0111j_guov_njuk_cuo_mies_geas_suoi_borg_\u010dak\u010d_golg_sk\xe1b_juov".split("_"),
            weekdays: "sotnabeaivi_vuoss\xe1rga_ma\u014b\u014beb\xe1rga_gaskavahkku_duorastat_bearjadat_l\xe1vvardat".split("_"),
            weekdaysShort: "sotn_vuos_ma\u014b_gask_duor_bear_l\xe1v".split("_"),
            weekdaysMin: "s_v_m_g_d_b_L".split("_"),
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD.MM.YYYY",
                LL: "MMMM D. [b.] YYYY",
                LLL: "MMMM D. [b.] YYYY [ti.] HH:mm",
                LLLL: "dddd, MMMM D. [b.] YYYY [ti.] HH:mm"
            },
            calendar: {
                sameDay: "[otne ti] LT",
                nextDay: "[ihttin ti] LT",
                nextWeek: "dddd [ti] LT",
                lastDay: "[ikte ti] LT",
                lastWeek: "[ovddit] dddd [ti] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "%s gea\u017ees",
                past: "ma\u014bit %s",
                s: "moadde sekunddat",
                ss: "%d sekunddat",
                m: "okta minuhta",
                mm: "%d minuhtat",
                h: "okta diimmu",
                hh: "%d diimmut",
                d: "okta beaivi",
                dd: "%d beaivvit",
                M: "okta m\xe1nnu",
                MM: "%d m\xe1nut",
                y: "okta jahki",
                yy: "%d jagit"
            },
            dayOfMonthOrdinalParse: /\d{1,2}\./,
            ordinal: "%d.",
            week: {dow: 1, doy: 4}
        })
    }()
},
"/X5v": function (n, t, e) {
    !function (n) {
        "use strict";
        e("wd/R").defineLocale("x-pseudo", {
            months: "J~\xe1\xf1\xfa\xe1~r\xfd_F~\xe9br\xfa~\xe1r\xfd_~M\xe1rc~h_\xc1p~r\xedl_~M\xe1\xfd_~J\xfa\xf1\xe9~_J\xfal~\xfd_\xc1\xfa~g\xfast~_S\xe9p~t\xe9mb~\xe9r_\xd3~ct\xf3b~\xe9r_\xd1~\xf3v\xe9m~b\xe9r_~D\xe9c\xe9~mb\xe9r".split("_"),
            monthsShort: "J~\xe1\xf1_~F\xe9b_~M\xe1r_~\xc1pr_~M\xe1\xfd_~J\xfa\xf1_~J\xfal_~\xc1\xfag_~S\xe9p_~\xd3ct_~\xd1\xf3v_~D\xe9c".split("_"),
            monthsParseExact: !0,
            weekdays: "S~\xfa\xf1d\xe1~\xfd_M\xf3~\xf1d\xe1\xfd~_T\xfa\xe9~sd\xe1\xfd~_W\xe9d~\xf1\xe9sd~\xe1\xfd_T~h\xfars~d\xe1\xfd_~Fr\xedd~\xe1\xfd_S~\xe1t\xfar~d\xe1\xfd".split("_"),
            weekdaysShort: "S~\xfa\xf1_~M\xf3\xf1_~T\xfa\xe9_~W\xe9d_~Th\xfa_~Fr\xed_~S\xe1t".split("_"),
            weekdaysMin: "S~\xfa_M\xf3~_T\xfa_~W\xe9_T~h_Fr~_S\xe1".split("_"),
            weekdaysParseExact: !0,
            longDateFormat: {
                LT: "HH:mm",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY HH:mm",
                LLLL: "dddd, D MMMM YYYY HH:mm"
            },
            calendar: {
                sameDay: "[T~\xf3d\xe1~\xfd \xe1t] LT",
                nextDay: "[T~\xf3m\xf3~rr\xf3~w \xe1t] LT",
                nextWeek: "dddd [\xe1t] LT",
                lastDay: "[\xdd~\xe9st~\xe9rd\xe1~\xfd \xe1t] LT",
                lastWeek: "[L~\xe1st] dddd [\xe1t] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "\xed~\xf1 %s",
                past: "%s \xe1~g\xf3",
                s: "\xe1 ~f\xe9w ~s\xe9c\xf3~\xf1ds",
                ss: "%d s~\xe9c\xf3\xf1~ds",
                m: "\xe1 ~m\xed\xf1~\xfat\xe9",
                mm: "%d m~\xed\xf1\xfa~t\xe9s",
                h: "\xe1~\xf1 h\xf3~\xfar",
                hh: "%d h~\xf3\xfars",
                d: "\xe1 ~d\xe1\xfd",
                dd: "%d d~\xe1\xfds",
                M: "\xe1 ~m\xf3\xf1~th",
                MM: "%d m~\xf3\xf1t~hs",
                y: "\xe1 ~\xfd\xe9\xe1r",
                yy: "%d \xfd~\xe9\xe1rs"
            },
            dayOfMonthOrdinalParse: /\d{1,2}(th|st|nd|rd)/,
            ordinal: function (n) {
                var t = n % 10;
                return n + (1 == ~~(n % 100 / 10) ? "th" : 1 === t ? "st" : 2 === t ? "nd" : 3 === t ? "rd" : "th")
            },
            week: {dow: 1, doy: 4}
        })
    }()
},
"0mo+": function (n, t, e) {
    !function (n) {
        "use strict";
        var t = {
            1: "\u0f21",
            2: "\u0f22",
            3: "\u0f23",
            4: "\u0f24",
            5: "\u0f25",
            6: "\u0f26",
            7: "\u0f27",
            8: "\u0f28",
            9: "\u0f29",
            0: "\u0f20"
        }, e = {
            "\u0f21": "1",
            "\u0f22": "2",
            "\u0f23": "3",
            "\u0f24": "4",
            "\u0f25": "5",
            "\u0f26": "6",
            "\u0f27": "7",
            "\u0f28": "8",
            "\u0f29": "9",
            "\u0f20": "0"
        };
        n.defineLocale("bo", {
            months: "\u0f5f\u0fb3\u0f0b\u0f56\u0f0b\u0f51\u0f44\u0f0b\u0f54\u0f7c_\u0f5f\u0fb3\u0f0b\u0f56\u0f0b\u0f42\u0f49\u0f72\u0f66\u0f0b\u0f54_\u0f5f\u0fb3\u0f0b\u0f56\u0f0b\u0f42\u0f66\u0f74\u0f58\u0f0b\u0f54_\u0f5f\u0fb3\u0f0b\u0f56\u0f0b\u0f56\u0f5e\u0f72\u0f0b\u0f54_\u0f5f\u0fb3\u0f0b\u0f56\u0f0b\u0f63\u0f94\u0f0b\u0f54_\u0f5f\u0fb3\u0f0b\u0f56\u0f0b\u0f51\u0fb2\u0f74\u0f42\u0f0b\u0f54_\u0f5f\u0fb3\u0f0b\u0f56\u0f0b\u0f56\u0f51\u0f74\u0f53\u0f0b\u0f54_\u0f5f\u0fb3\u0f0b\u0f56\u0f0b\u0f56\u0f62\u0f92\u0fb1\u0f51\u0f0b\u0f54_\u0f5f\u0fb3\u0f0b\u0f56\u0f0b\u0f51\u0f42\u0f74\u0f0b\u0f54_\u0f5f\u0fb3\u0f0b\u0f56\u0f0b\u0f56\u0f45\u0f74\u0f0b\u0f54_\u0f5f\u0fb3\u0f0b\u0f56\u0f0b\u0f56\u0f45\u0f74\u0f0b\u0f42\u0f45\u0f72\u0f42\u0f0b\u0f54_\u0f5f\u0fb3\u0f0b\u0f56\u0f0b\u0f56\u0f45\u0f74\u0f0b\u0f42\u0f49\u0f72\u0f66\u0f0b\u0f54".split("_"),
            monthsShort: "\u0f5f\u0fb3\u0f0b\u0f56\u0f0b\u0f51\u0f44\u0f0b\u0f54\u0f7c_\u0f5f\u0fb3\u0f0b\u0f56\u0f0b\u0f42\u0f49\u0f72\u0f66\u0f0b\u0f54_\u0f5f\u0fb3\u0f0b\u0f56\u0f0b\u0f42\u0f66\u0f74\u0f58\u0f0b\u0f54_\u0f5f\u0fb3\u0f0b\u0f56\u0f0b\u0f56\u0f5e\u0f72\u0f0b\u0f54_\u0f5f\u0fb3\u0f0b\u0f56\u0f0b\u0f63\u0f94\u0f0b\u0f54_\u0f5f\u0fb3\u0f0b\u0f56\u0f0b\u0f51\u0fb2\u0f74\u0f42\u0f0b\u0f54_\u0f5f\u0fb3\u0f0b\u0f56\u0f0b\u0f56\u0f51\u0f74\u0f53\u0f0b\u0f54_\u0f5f\u0fb3\u0f0b\u0f56\u0f0b\u0f56\u0f62\u0f92\u0fb1\u0f51\u0f0b\u0f54_\u0f5f\u0fb3\u0f0b\u0f56\u0f0b\u0f51\u0f42\u0f74\u0f0b\u0f54_\u0f5f\u0fb3\u0f0b\u0f56\u0f0b\u0f56\u0f45\u0f74\u0f0b\u0f54_\u0f5f\u0fb3\u0f0b\u0f56\u0f0b\u0f56\u0f45\u0f74\u0f0b\u0f42\u0f45\u0f72\u0f42\u0f0b\u0f54_\u0f5f\u0fb3\u0f0b\u0f56\u0f0b\u0f56\u0f45\u0f74\u0f0b\u0f42\u0f49\u0f72\u0f66\u0f0b\u0f54".split("_"),
            weekdays: "\u0f42\u0f5f\u0f60\u0f0b\u0f49\u0f72\u0f0b\u0f58\u0f0b_\u0f42\u0f5f\u0f60\u0f0b\u0f5f\u0fb3\u0f0b\u0f56\u0f0b_\u0f42\u0f5f\u0f60\u0f0b\u0f58\u0f72\u0f42\u0f0b\u0f51\u0f58\u0f62\u0f0b_\u0f42\u0f5f\u0f60\u0f0b\u0f63\u0fb7\u0f42\u0f0b\u0f54\u0f0b_\u0f42\u0f5f\u0f60\u0f0b\u0f55\u0f74\u0f62\u0f0b\u0f56\u0f74_\u0f42\u0f5f\u0f60\u0f0b\u0f54\u0f0b\u0f66\u0f44\u0f66\u0f0b_\u0f42\u0f5f\u0f60\u0f0b\u0f66\u0fa4\u0f7a\u0f53\u0f0b\u0f54\u0f0b".split("_"),
            weekdaysShort: "\u0f49\u0f72\u0f0b\u0f58\u0f0b_\u0f5f\u0fb3\u0f0b\u0f56\u0f0b_\u0f58\u0f72\u0f42\u0f0b\u0f51\u0f58\u0f62\u0f0b_\u0f63\u0fb7\u0f42\u0f0b\u0f54\u0f0b_\u0f55\u0f74\u0f62\u0f0b\u0f56\u0f74_\u0f54\u0f0b\u0f66\u0f44\u0f66\u0f0b_\u0f66\u0fa4\u0f7a\u0f53\u0f0b\u0f54\u0f0b".split("_"),
            weekdaysMin: "\u0f49\u0f72\u0f0b\u0f58\u0f0b_\u0f5f\u0fb3\u0f0b\u0f56\u0f0b_\u0f58\u0f72\u0f42\u0f0b\u0f51\u0f58\u0f62\u0f0b_\u0f63\u0fb7\u0f42\u0f0b\u0f54\u0f0b_\u0f55\u0f74\u0f62\u0f0b\u0f56\u0f74_\u0f54\u0f0b\u0f66\u0f44\u0f66\u0f0b_\u0f66\u0fa4\u0f7a\u0f53\u0f0b\u0f54\u0f0b".split("_"),
            longDateFormat: {
                LT: "A h:mm",
                LTS: "A h:mm:ss",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY, A h:mm",
                LLLL: "dddd, D MMMM YYYY, A h:mm"
            },
            calendar: {
                sameDay: "[\u0f51\u0f72\u0f0b\u0f62\u0f72\u0f44] LT",
                nextDay: "[\u0f66\u0f44\u0f0b\u0f49\u0f72\u0f53] LT",
                nextWeek: "[\u0f56\u0f51\u0f74\u0f53\u0f0b\u0f55\u0fb2\u0f42\u0f0b\u0f62\u0f97\u0f7a\u0f66\u0f0b\u0f58], LT",
                lastDay: "[\u0f41\u0f0b\u0f66\u0f44] LT",
                lastWeek: "[\u0f56\u0f51\u0f74\u0f53\u0f0b\u0f55\u0fb2\u0f42\u0f0b\u0f58\u0f50\u0f60\u0f0b\u0f58] dddd, LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "%s \u0f63\u0f0b",
                past: "%s \u0f66\u0f94\u0f53\u0f0b\u0f63",
                s: "\u0f63\u0f58\u0f0b\u0f66\u0f44",
                ss: "%d \u0f66\u0f90\u0f62\u0f0b\u0f46\u0f0d",
                m: "\u0f66\u0f90\u0f62\u0f0b\u0f58\u0f0b\u0f42\u0f45\u0f72\u0f42",
                mm: "%d \u0f66\u0f90\u0f62\u0f0b\u0f58",
                h: "\u0f46\u0f74\u0f0b\u0f5a\u0f7c\u0f51\u0f0b\u0f42\u0f45\u0f72\u0f42",
                hh: "%d \u0f46\u0f74\u0f0b\u0f5a\u0f7c\u0f51",
                d: "\u0f49\u0f72\u0f53\u0f0b\u0f42\u0f45\u0f72\u0f42",
                dd: "%d \u0f49\u0f72\u0f53\u0f0b",
                M: "\u0f5f\u0fb3\u0f0b\u0f56\u0f0b\u0f42\u0f45\u0f72\u0f42",
                MM: "%d \u0f5f\u0fb3\u0f0b\u0f56",
                y: "\u0f63\u0f7c\u0f0b\u0f42\u0f45\u0f72\u0f42",
                yy: "%d \u0f63\u0f7c"
            },
            preparse: function (n) {
                return n.replace(/[\u0f21\u0f22\u0f23\u0f24\u0f25\u0f26\u0f27\u0f28\u0f29\u0f20]/g, function (n) {
                    return e[n]
                })
            },
            postformat: function (n) {
                return n.replace(/\d/g, function (n) {
                    return t[n]
                })
            },
            meridiemParse: /\u0f58\u0f5a\u0f53\u0f0b\u0f58\u0f7c|\u0f5e\u0f7c\u0f42\u0f66\u0f0b\u0f40\u0f66|\u0f49\u0f72\u0f53\u0f0b\u0f42\u0f74\u0f44|\u0f51\u0f42\u0f7c\u0f44\u0f0b\u0f51\u0f42|\u0f58\u0f5a\u0f53\u0f0b\u0f58\u0f7c/,
            meridiemHour: function (n, t) {
                return 12 === n && (n = 0), "\u0f58\u0f5a\u0f53\u0f0b\u0f58\u0f7c" === t && n >= 4 || "\u0f49\u0f72\u0f53\u0f0b\u0f42\u0f74\u0f44" === t && n < 5 || "\u0f51\u0f42\u0f7c\u0f44\u0f0b\u0f51\u0f42" === t ? n + 12 : n
            },
            meridiem: function (n, t, e) {
                return n < 4 ? "\u0f58\u0f5a\u0f53\u0f0b\u0f58\u0f7c" : n < 10 ? "\u0f5e\u0f7c\u0f42\u0f66\u0f0b\u0f40\u0f66" : n < 17 ? "\u0f49\u0f72\u0f53\u0f0b\u0f42\u0f74\u0f44" : n < 20 ? "\u0f51\u0f42\u0f7c\u0f44\u0f0b\u0f51\u0f42" : "\u0f58\u0f5a\u0f53\u0f0b\u0f58\u0f7c"
            },
            week: {dow: 0, doy: 6}
        })
    }(e("wd/R"))
},
"0tRk": function (n, t, e) {
    !function (n) {
        "use strict";
        e("wd/R").defineLocale("pt-br", {
            months: "Janeiro_Fevereiro_Mar\xe7o_Abril_Maio_Junho_Julho_Agosto_Setembro_Outubro_Novembro_Dezembro".split("_"),
            monthsShort: "Jan_Fev_Mar_Abr_Mai_Jun_Jul_Ago_Set_Out_Nov_Dez".split("_"),
            weekdays: "Domingo_Segunda-feira_Ter\xe7a-feira_Quarta-feira_Quinta-feira_Sexta-feira_S\xe1bado".split("_"),
            weekdaysShort: "Dom_Seg_Ter_Qua_Qui_Sex_S\xe1b".split("_"),
            weekdaysMin: "Do_2\xaa_3\xaa_4\xaa_5\xaa_6\xaa_S\xe1".split("_"),
            weekdaysParseExact: !0,
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD/MM/YYYY",
                LL: "D [de] MMMM [de] YYYY",
                LLL: "D [de] MMMM [de] YYYY [\xe0s] HH:mm",
                LLLL: "dddd, D [de] MMMM [de] YYYY [\xe0s] HH:mm"
            },
            calendar: {
                sameDay: "[Hoje \xe0s] LT",
                nextDay: "[Amanh\xe3 \xe0s] LT",
                nextWeek: "dddd [\xe0s] LT",
                lastDay: "[Ontem \xe0s] LT",
                lastWeek: function () {
                    return 0 === this.day() || 6 === this.day() ? "[\xdaltimo] dddd [\xe0s] LT" : "[\xdaltima] dddd [\xe0s] LT"
                },
                sameElse: "L"
            },
            relativeTime: {
                future: "em %s",
                past: "h\xe1 %s",
                s: "poucos segundos",
                ss: "%d segundos",
                m: "um minuto",
                mm: "%d minutos",
                h: "uma hora",
                hh: "%d horas",
                d: "um dia",
                dd: "%d dias",
                M: "um m\xeas",
                MM: "%d meses",
                y: "um ano",
                yy: "%d anos"
            },
            dayOfMonthOrdinalParse: /\d{1,2}\xba/,
            ordinal: "%d\xba"
        })
    }()
},
"1rYy": function (n, t, e) {
    !function (n) {
        "use strict";
        e("wd/R").defineLocale("hy-am", {
            months: {
                format: "\u0570\u0578\u0582\u0576\u057e\u0561\u0580\u056b_\u0583\u0565\u057f\u0580\u057e\u0561\u0580\u056b_\u0574\u0561\u0580\u057f\u056b_\u0561\u057a\u0580\u056b\u056c\u056b_\u0574\u0561\u0575\u056b\u057d\u056b_\u0570\u0578\u0582\u0576\u056b\u057d\u056b_\u0570\u0578\u0582\u056c\u056b\u057d\u056b_\u0585\u0563\u0578\u057d\u057f\u0578\u057d\u056b_\u057d\u0565\u057a\u057f\u0565\u0574\u0562\u0565\u0580\u056b_\u0570\u0578\u056f\u057f\u0565\u0574\u0562\u0565\u0580\u056b_\u0576\u0578\u0575\u0565\u0574\u0562\u0565\u0580\u056b_\u0564\u0565\u056f\u057f\u0565\u0574\u0562\u0565\u0580\u056b".split("_"),
                standalone: "\u0570\u0578\u0582\u0576\u057e\u0561\u0580_\u0583\u0565\u057f\u0580\u057e\u0561\u0580_\u0574\u0561\u0580\u057f_\u0561\u057a\u0580\u056b\u056c_\u0574\u0561\u0575\u056b\u057d_\u0570\u0578\u0582\u0576\u056b\u057d_\u0570\u0578\u0582\u056c\u056b\u057d_\u0585\u0563\u0578\u057d\u057f\u0578\u057d_\u057d\u0565\u057a\u057f\u0565\u0574\u0562\u0565\u0580_\u0570\u0578\u056f\u057f\u0565\u0574\u0562\u0565\u0580_\u0576\u0578\u0575\u0565\u0574\u0562\u0565\u0580_\u0564\u0565\u056f\u057f\u0565\u0574\u0562\u0565\u0580".split("_")
            },
            monthsShort: "\u0570\u0576\u057e_\u0583\u057f\u0580_\u0574\u0580\u057f_\u0561\u057a\u0580_\u0574\u0575\u057d_\u0570\u0576\u057d_\u0570\u056c\u057d_\u0585\u0563\u057d_\u057d\u057a\u057f_\u0570\u056f\u057f_\u0576\u0574\u0562_\u0564\u056f\u057f".split("_"),
            weekdays: "\u056f\u056b\u0580\u0561\u056f\u056b_\u0565\u0580\u056f\u0578\u0582\u0577\u0561\u0562\u0569\u056b_\u0565\u0580\u0565\u0584\u0577\u0561\u0562\u0569\u056b_\u0579\u0578\u0580\u0565\u0584\u0577\u0561\u0562\u0569\u056b_\u0570\u056b\u0576\u0563\u0577\u0561\u0562\u0569\u056b_\u0578\u0582\u0580\u0562\u0561\u0569_\u0577\u0561\u0562\u0561\u0569".split("_"),
            weekdaysShort: "\u056f\u0580\u056f_\u0565\u0580\u056f_\u0565\u0580\u0584_\u0579\u0580\u0584_\u0570\u0576\u0563_\u0578\u0582\u0580\u0562_\u0577\u0562\u0569".split("_"),
            weekdaysMin: "\u056f\u0580\u056f_\u0565\u0580\u056f_\u0565\u0580\u0584_\u0579\u0580\u0584_\u0570\u0576\u0563_\u0578\u0582\u0580\u0562_\u0577\u0562\u0569".split("_"),
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD.MM.YYYY",
                LL: "D MMMM YYYY \u0569.",
                LLL: "D MMMM YYYY \u0569., HH:mm",
                LLLL: "dddd, D MMMM YYYY \u0569., HH:mm"
            },
            calendar: {
                sameDay: "[\u0561\u0575\u057d\u0585\u0580] LT",
                nextDay: "[\u057e\u0561\u0572\u0568] LT",
                lastDay: "[\u0565\u0580\u0565\u056f] LT",
                nextWeek: function () {
                    return "dddd [\u0585\u0580\u0568 \u056a\u0561\u0574\u0568] LT"
                },
                lastWeek: function () {
                    return "[\u0561\u0576\u0581\u0561\u056e] dddd [\u0585\u0580\u0568 \u056a\u0561\u0574\u0568] LT"
                },
                sameElse: "L"
            },
            relativeTime: {
                future: "%s \u0570\u0565\u057f\u0578",
                past: "%s \u0561\u057c\u0561\u057b",
                s: "\u0574\u056b \u0584\u0561\u0576\u056b \u057e\u0561\u0575\u0580\u056f\u0575\u0561\u0576",
                ss: "%d \u057e\u0561\u0575\u0580\u056f\u0575\u0561\u0576",
                m: "\u0580\u0578\u057a\u0565",
                mm: "%d \u0580\u0578\u057a\u0565",
                h: "\u056a\u0561\u0574",
                hh: "%d \u056a\u0561\u0574",
                d: "\u0585\u0580",
                dd: "%d \u0585\u0580",
                M: "\u0561\u0574\u056b\u057d",
                MM: "%d \u0561\u0574\u056b\u057d",
                y: "\u057f\u0561\u0580\u056b",
                yy: "%d \u057f\u0561\u0580\u056b"
            },
            meridiemParse: /\u0563\u056b\u0577\u0565\u0580\u057e\u0561|\u0561\u057c\u0561\u057e\u0578\u057f\u057e\u0561|\u0581\u0565\u0580\u0565\u056f\u057e\u0561|\u0565\u0580\u0565\u056f\u0578\u0575\u0561\u0576/,
            isPM: function (n) {
                return /^(\u0581\u0565\u0580\u0565\u056f\u057e\u0561|\u0565\u0580\u0565\u056f\u0578\u0575\u0561\u0576)$/.test(n)
            },
            meridiem: function (n) {
                return n < 4 ? "\u0563\u056b\u0577\u0565\u0580\u057e\u0561" : n < 12 ? "\u0561\u057c\u0561\u057e\u0578\u057f\u057e\u0561" : n < 17 ? "\u0581\u0565\u0580\u0565\u056f\u057e\u0561" : "\u0565\u0580\u0565\u056f\u0578\u0575\u0561\u0576"
            },
            dayOfMonthOrdinalParse: /\d{1,2}|\d{1,2}-(\u056b\u0576|\u0580\u0564)/,
            ordinal: function (n, t) {
                switch (t) {
                    case"DDD":
                    case"w":
                    case"W":
                    case"DDDo":
                        return 1 === n ? n + "-\u056b\u0576" : n + "-\u0580\u0564";
                    default:
                        return n
                }
            },
            week: {dow: 1, doy: 7}
        })
    }()
},
"1xZ4": function (n, t, e) {
    !function (n) {
        "use strict";
        e("wd/R").defineLocale("ca", {
            months: {
                standalone: "gener_febrer_mar\xe7_abril_maig_juny_juliol_agost_setembre_octubre_novembre_desembre".split("_"),
                format: "de gener_de febrer_de mar\xe7_d'abril_de maig_de juny_de juliol_d'agost_de setembre_d'octubre_de novembre_de desembre".split("_"),
                isFormat: /D[oD]?(\s)+MMMM/
            },
            monthsShort: "gen._febr._mar\xe7_abr._maig_juny_jul._ag._set._oct._nov._des.".split("_"),
            monthsParseExact: !0,
            weekdays: "diumenge_dilluns_dimarts_dimecres_dijous_divendres_dissabte".split("_"),
            weekdaysShort: "dg._dl._dt._dc._dj._dv._ds.".split("_"),
            weekdaysMin: "dg_dl_dt_dc_dj_dv_ds".split("_"),
            weekdaysParseExact: !0,
            longDateFormat: {
                LT: "H:mm",
                LTS: "H:mm:ss",
                L: "DD/MM/YYYY",
                LL: "D MMMM [de] YYYY",
                ll: "D MMM YYYY",
                LLL: "D MMMM [de] YYYY [a les] H:mm",
                lll: "D MMM YYYY, H:mm",
                LLLL: "dddd D MMMM [de] YYYY [a les] H:mm",
                llll: "ddd D MMM YYYY, H:mm"
            },
            calendar: {
                sameDay: function () {
                    return "[avui a " + (1 !== this.hours() ? "les" : "la") + "] LT"
                }, nextDay: function () {
                    return "[dem\xe0 a " + (1 !== this.hours() ? "les" : "la") + "] LT"
                }, nextWeek: function () {
                    return "dddd [a " + (1 !== this.hours() ? "les" : "la") + "] LT"
                }, lastDay: function () {
                    return "[ahir a " + (1 !== this.hours() ? "les" : "la") + "] LT"
                }, lastWeek: function () {
                    return "[el] dddd [passat a " + (1 !== this.hours() ? "les" : "la") + "] LT"
                }, sameElse: "L"
            },
            relativeTime: {
                future: "d'aqu\xed %s",
                past: "fa %s",
                s: "uns segons",
                ss: "%d segons",
                m: "un minut",
                mm: "%d minuts",
                h: "una hora",
                hh: "%d hores",
                d: "un dia",
                dd: "%d dies",
                M: "un mes",
                MM: "%d mesos",
                y: "un any",
                yy: "%d anys"
            },
            dayOfMonthOrdinalParse: /\d{1,2}(r|n|t|\xe8|a)/,
            ordinal: function (n, t) {
                var e = 1 === n ? "r" : 2 === n ? "n" : 3 === n ? "r" : 4 === n ? "t" : "\xe8";
                return "w" !== t && "W" !== t || (e = "a"), n + e
            },
            week: {dow: 1, doy: 4}
        })
    }()
},
"2fjn": function (n, t, e) {
    !function (n) {
        "use strict";
        e("wd/R").defineLocale("fr-ca", {
            months: "janvier_f\xe9vrier_mars_avril_mai_juin_juillet_ao\xfbt_septembre_octobre_novembre_d\xe9cembre".split("_"),
            monthsShort: "janv._f\xe9vr._mars_avr._mai_juin_juil._ao\xfbt_sept._oct._nov._d\xe9c.".split("_"),
            monthsParseExact: !0,
            weekdays: "dimanche_lundi_mardi_mercredi_jeudi_vendredi_samedi".split("_"),
            weekdaysShort: "dim._lun._mar._mer._jeu._ven._sam.".split("_"),
            weekdaysMin: "di_lu_ma_me_je_ve_sa".split("_"),
            weekdaysParseExact: !0,
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "YYYY-MM-DD",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY HH:mm",
                LLLL: "dddd D MMMM YYYY HH:mm"
            },
            calendar: {
                sameDay: "[Aujourd\u2019hui \xe0] LT",
                nextDay: "[Demain \xe0] LT",
                nextWeek: "dddd [\xe0] LT",
                lastDay: "[Hier \xe0] LT",
                lastWeek: "dddd [dernier \xe0] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "dans %s",
                past: "il y a %s",
                s: "quelques secondes",
                ss: "%d secondes",
                m: "une minute",
                mm: "%d minutes",
                h: "une heure",
                hh: "%d heures",
                d: "un jour",
                dd: "%d jours",
                M: "un mois",
                MM: "%d mois",
                y: "un an",
                yy: "%d ans"
            },
            dayOfMonthOrdinalParse: /\d{1,2}(er|e)/,
            ordinal: function (n, t) {
                switch (t) {
                    default:
                    case"M":
                    case"Q":
                    case"D":
                    case"DDD":
                    case"d":
                        return n + (1 === n ? "er" : "e");
                    case"w":
                    case"W":
                        return n + (1 === n ? "re" : "e")
                }
            }
        })
    }()
},
"2ykv": function (n, t, e) {
    !function (n) {
        "use strict";
        var t = "jan._feb._mrt._apr._mei_jun._jul._aug._sep._okt._nov._dec.".split("_"),
            e = "jan_feb_mrt_apr_mei_jun_jul_aug_sep_okt_nov_dec".split("_"),
            o = [/^jan/i, /^feb/i, /^maart|mrt.?$/i, /^apr/i, /^mei$/i, /^jun[i.]?$/i, /^jul[i.]?$/i, /^aug/i, /^sep/i, /^okt/i, /^nov/i, /^dec/i],
            l = /^(januari|februari|maart|april|mei|ju[nl]i|augustus|september|oktober|november|december|jan\.?|feb\.?|mrt\.?|apr\.?|ju[nl]\.?|aug\.?|sep\.?|okt\.?|nov\.?|dec\.?)/i;
        n.defineLocale("nl-be", {
            months: "januari_februari_maart_april_mei_juni_juli_augustus_september_oktober_november_december".split("_"),
            monthsShort: function (n, o) {
                return n ? /-MMM-/.test(o) ? e[n.month()] : t[n.month()] : t
            },
            monthsRegex: l,
            monthsShortRegex: l,
            monthsStrictRegex: /^(januari|februari|maart|april|mei|ju[nl]i|augustus|september|oktober|november|december)/i,
            monthsShortStrictRegex: /^(jan\.?|feb\.?|mrt\.?|apr\.?|mei|ju[nl]\.?|aug\.?|sep\.?|okt\.?|nov\.?|dec\.?)/i,
            monthsParse: o,
            longMonthsParse: o,
            shortMonthsParse: o,
            weekdays: "zondag_maandag_dinsdag_woensdag_donderdag_vrijdag_zaterdag".split("_"),
            weekdaysShort: "zo._ma._di._wo._do._vr._za.".split("_"),
            weekdaysMin: "zo_ma_di_wo_do_vr_za".split("_"),
            weekdaysParseExact: !0,
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY HH:mm",
                LLLL: "dddd D MMMM YYYY HH:mm"
            },
            calendar: {
                sameDay: "[vandaag om] LT",
                nextDay: "[morgen om] LT",
                nextWeek: "dddd [om] LT",
                lastDay: "[gisteren om] LT",
                lastWeek: "[afgelopen] dddd [om] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "over %s",
                past: "%s geleden",
                s: "een paar seconden",
                ss: "%d seconden",
                m: "\xe9\xe9n minuut",
                mm: "%d minuten",
                h: "\xe9\xe9n uur",
                hh: "%d uur",
                d: "\xe9\xe9n dag",
                dd: "%d dagen",
                M: "\xe9\xe9n maand",
                MM: "%d maanden",
                y: "\xe9\xe9n jaar",
                yy: "%d jaar"
            },
            dayOfMonthOrdinalParse: /\d{1,2}(ste|de)/,
            ordinal: function (n) {
                return n + (1 === n || 8 === n || n >= 20 ? "ste" : "de")
            },
            week: {dow: 1, doy: 4}
        })
    }(e("wd/R"))
},
"3E1r": function (n, t, e) {
    !function (n) {
        "use strict";
        var t = {
            1: "\u0967",
            2: "\u0968",
            3: "\u0969",
            4: "\u096a",
            5: "\u096b",
            6: "\u096c",
            7: "\u096d",
            8: "\u096e",
            9: "\u096f",
            0: "\u0966"
        }, e = {
            "\u0967": "1",
            "\u0968": "2",
            "\u0969": "3",
            "\u096a": "4",
            "\u096b": "5",
            "\u096c": "6",
            "\u096d": "7",
            "\u096e": "8",
            "\u096f": "9",
            "\u0966": "0"
        };
        n.defineLocale("hi", {
            months: "\u091c\u0928\u0935\u0930\u0940_\u092b\u093c\u0930\u0935\u0930\u0940_\u092e\u093e\u0930\u094d\u091a_\u0905\u092a\u094d\u0930\u0948\u0932_\u092e\u0908_\u091c\u0942\u0928_\u091c\u0941\u0932\u093e\u0908_\u0905\u0917\u0938\u094d\u0924_\u0938\u093f\u0924\u092e\u094d\u092c\u0930_\u0905\u0915\u094d\u091f\u0942\u092c\u0930_\u0928\u0935\u092e\u094d\u092c\u0930_\u0926\u093f\u0938\u092e\u094d\u092c\u0930".split("_"),
            monthsShort: "\u091c\u0928._\u092b\u093c\u0930._\u092e\u093e\u0930\u094d\u091a_\u0905\u092a\u094d\u0930\u0948._\u092e\u0908_\u091c\u0942\u0928_\u091c\u0941\u0932._\u0905\u0917._\u0938\u093f\u0924._\u0905\u0915\u094d\u091f\u0942._\u0928\u0935._\u0926\u093f\u0938.".split("_"),
            monthsParseExact: !0,
            weekdays: "\u0930\u0935\u093f\u0935\u093e\u0930_\u0938\u094b\u092e\u0935\u093e\u0930_\u092e\u0902\u0917\u0932\u0935\u093e\u0930_\u092c\u0941\u0927\u0935\u093e\u0930_\u0917\u0941\u0930\u0942\u0935\u093e\u0930_\u0936\u0941\u0915\u094d\u0930\u0935\u093e\u0930_\u0936\u0928\u093f\u0935\u093e\u0930".split("_"),
            weekdaysShort: "\u0930\u0935\u093f_\u0938\u094b\u092e_\u092e\u0902\u0917\u0932_\u092c\u0941\u0927_\u0917\u0941\u0930\u0942_\u0936\u0941\u0915\u094d\u0930_\u0936\u0928\u093f".split("_"),
            weekdaysMin: "\u0930_\u0938\u094b_\u092e\u0902_\u092c\u0941_\u0917\u0941_\u0936\u0941_\u0936".split("_"),
            longDateFormat: {
                LT: "A h:mm \u092c\u091c\u0947",
                LTS: "A h:mm:ss \u092c\u091c\u0947",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY, A h:mm \u092c\u091c\u0947",
                LLLL: "dddd, D MMMM YYYY, A h:mm \u092c\u091c\u0947"
            },
            calendar: {
                sameDay: "[\u0906\u091c] LT",
                nextDay: "[\u0915\u0932] LT",
                nextWeek: "dddd, LT",
                lastDay: "[\u0915\u0932] LT",
                lastWeek: "[\u092a\u093f\u091b\u0932\u0947] dddd, LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "%s \u092e\u0947\u0902",
                past: "%s \u092a\u0939\u0932\u0947",
                s: "\u0915\u0941\u091b \u0939\u0940 \u0915\u094d\u0937\u0923",
                ss: "%d \u0938\u0947\u0915\u0902\u0921",
                m: "\u090f\u0915 \u092e\u093f\u0928\u091f",
                mm: "%d \u092e\u093f\u0928\u091f",
                h: "\u090f\u0915 \u0918\u0902\u091f\u093e",
                hh: "%d \u0918\u0902\u091f\u0947",
                d: "\u090f\u0915 \u0926\u093f\u0928",
                dd: "%d \u0926\u093f\u0928",
                M: "\u090f\u0915 \u092e\u0939\u0940\u0928\u0947",
                MM: "%d \u092e\u0939\u0940\u0928\u0947",
                y: "\u090f\u0915 \u0935\u0930\u094d\u0937",
                yy: "%d \u0935\u0930\u094d\u0937"
            },
            preparse: function (n) {
                return n.replace(/[\u0967\u0968\u0969\u096a\u096b\u096c\u096d\u096e\u096f\u0966]/g, function (n) {
                    return e[n]
                })
            },
            postformat: function (n) {
                return n.replace(/\d/g, function (n) {
                    return t[n]
                })
            },
            meridiemParse: /\u0930\u093e\u0924|\u0938\u0941\u092c\u0939|\u0926\u094b\u092a\u0939\u0930|\u0936\u093e\u092e/,
            meridiemHour: function (n, t) {
                return 12 === n && (n = 0), "\u0930\u093e\u0924" === t ? n < 4 ? n : n + 12 : "\u0938\u0941\u092c\u0939" === t ? n : "\u0926\u094b\u092a\u0939\u0930" === t ? n >= 10 ? n : n + 12 : "\u0936\u093e\u092e" === t ? n + 12 : void 0
            },
            meridiem: function (n, t, e) {
                return n < 4 ? "\u0930\u093e\u0924" : n < 10 ? "\u0938\u0941\u092c\u0939" : n < 17 ? "\u0926\u094b\u092a\u0939\u0930" : n < 20 ? "\u0936\u093e\u092e" : "\u0930\u093e\u0924"
            },
            week: {dow: 0, doy: 6}
        })
    }(e("wd/R"))
},
"4MV3": function (n, t, e) {
    !function (n) {
        "use strict";
        var t = {
            1: "\u0ae7",
            2: "\u0ae8",
            3: "\u0ae9",
            4: "\u0aea",
            5: "\u0aeb",
            6: "\u0aec",
            7: "\u0aed",
            8: "\u0aee",
            9: "\u0aef",
            0: "\u0ae6"
        }, e = {
            "\u0ae7": "1",
            "\u0ae8": "2",
            "\u0ae9": "3",
            "\u0aea": "4",
            "\u0aeb": "5",
            "\u0aec": "6",
            "\u0aed": "7",
            "\u0aee": "8",
            "\u0aef": "9",
            "\u0ae6": "0"
        };
        n.defineLocale("gu", {
            months: "\u0a9c\u0abe\u0aa8\u0acd\u0aaf\u0ac1\u0a86\u0ab0\u0ac0_\u0aab\u0ac7\u0aac\u0acd\u0ab0\u0ac1\u0a86\u0ab0\u0ac0_\u0aae\u0abe\u0ab0\u0acd\u0a9a_\u0a8f\u0aaa\u0acd\u0ab0\u0abf\u0ab2_\u0aae\u0ac7_\u0a9c\u0ac2\u0aa8_\u0a9c\u0ac1\u0ab2\u0abe\u0a88_\u0a91\u0a97\u0ab8\u0acd\u0a9f_\u0ab8\u0aaa\u0acd\u0a9f\u0ac7\u0aae\u0acd\u0aac\u0ab0_\u0a91\u0a95\u0acd\u0a9f\u0acd\u0aac\u0ab0_\u0aa8\u0ab5\u0ac7\u0aae\u0acd\u0aac\u0ab0_\u0aa1\u0abf\u0ab8\u0ac7\u0aae\u0acd\u0aac\u0ab0".split("_"),
            monthsShort: "\u0a9c\u0abe\u0aa8\u0acd\u0aaf\u0ac1._\u0aab\u0ac7\u0aac\u0acd\u0ab0\u0ac1._\u0aae\u0abe\u0ab0\u0acd\u0a9a_\u0a8f\u0aaa\u0acd\u0ab0\u0abf._\u0aae\u0ac7_\u0a9c\u0ac2\u0aa8_\u0a9c\u0ac1\u0ab2\u0abe._\u0a91\u0a97._\u0ab8\u0aaa\u0acd\u0a9f\u0ac7._\u0a91\u0a95\u0acd\u0a9f\u0acd._\u0aa8\u0ab5\u0ac7._\u0aa1\u0abf\u0ab8\u0ac7.".split("_"),
            monthsParseExact: !0,
            weekdays: "\u0ab0\u0ab5\u0abf\u0ab5\u0abe\u0ab0_\u0ab8\u0acb\u0aae\u0ab5\u0abe\u0ab0_\u0aae\u0a82\u0a97\u0ab3\u0ab5\u0abe\u0ab0_\u0aac\u0ac1\u0aa7\u0acd\u0ab5\u0abe\u0ab0_\u0a97\u0ac1\u0ab0\u0ac1\u0ab5\u0abe\u0ab0_\u0ab6\u0ac1\u0a95\u0acd\u0ab0\u0ab5\u0abe\u0ab0_\u0ab6\u0aa8\u0abf\u0ab5\u0abe\u0ab0".split("_"),
            weekdaysShort: "\u0ab0\u0ab5\u0abf_\u0ab8\u0acb\u0aae_\u0aae\u0a82\u0a97\u0ab3_\u0aac\u0ac1\u0aa7\u0acd_\u0a97\u0ac1\u0ab0\u0ac1_\u0ab6\u0ac1\u0a95\u0acd\u0ab0_\u0ab6\u0aa8\u0abf".split("_"),
            weekdaysMin: "\u0ab0_\u0ab8\u0acb_\u0aae\u0a82_\u0aac\u0ac1_\u0a97\u0ac1_\u0ab6\u0ac1_\u0ab6".split("_"),
            longDateFormat: {
                LT: "A h:mm \u0ab5\u0abe\u0a97\u0acd\u0aaf\u0ac7",
                LTS: "A h:mm:ss \u0ab5\u0abe\u0a97\u0acd\u0aaf\u0ac7",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY, A h:mm \u0ab5\u0abe\u0a97\u0acd\u0aaf\u0ac7",
                LLLL: "dddd, D MMMM YYYY, A h:mm \u0ab5\u0abe\u0a97\u0acd\u0aaf\u0ac7"
            },
            calendar: {
                sameDay: "[\u0a86\u0a9c] LT",
                nextDay: "[\u0a95\u0abe\u0ab2\u0ac7] LT",
                nextWeek: "dddd, LT",
                lastDay: "[\u0a97\u0a87\u0a95\u0abe\u0ab2\u0ac7] LT",
                lastWeek: "[\u0aaa\u0abe\u0a9b\u0ab2\u0abe] dddd, LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "%s \u0aae\u0abe",
                past: "%s \u0aaa\u0ac7\u0ab9\u0ab2\u0abe",
                s: "\u0a85\u0aae\u0ac1\u0a95 \u0aaa\u0ab3\u0acb",
                ss: "%d \u0ab8\u0ac7\u0a95\u0a82\u0aa1",
                m: "\u0a8f\u0a95 \u0aae\u0abf\u0aa8\u0abf\u0a9f",
                mm: "%d \u0aae\u0abf\u0aa8\u0abf\u0a9f",
                h: "\u0a8f\u0a95 \u0a95\u0ab2\u0abe\u0a95",
                hh: "%d \u0a95\u0ab2\u0abe\u0a95",
                d: "\u0a8f\u0a95 \u0aa6\u0abf\u0ab5\u0ab8",
                dd: "%d \u0aa6\u0abf\u0ab5\u0ab8",
                M: "\u0a8f\u0a95 \u0aae\u0ab9\u0abf\u0aa8\u0acb",
                MM: "%d \u0aae\u0ab9\u0abf\u0aa8\u0acb",
                y: "\u0a8f\u0a95 \u0ab5\u0ab0\u0acd\u0ab7",
                yy: "%d \u0ab5\u0ab0\u0acd\u0ab7"
            },
            preparse: function (n) {
                return n.replace(/[\u0ae7\u0ae8\u0ae9\u0aea\u0aeb\u0aec\u0aed\u0aee\u0aef\u0ae6]/g, function (n) {
                    return e[n]
                })
            },
            postformat: function (n) {
                return n.replace(/\d/g, function (n) {
                    return t[n]
                })
            },
            meridiemParse: /\u0ab0\u0abe\u0aa4|\u0aac\u0aaa\u0acb\u0ab0|\u0ab8\u0ab5\u0abe\u0ab0|\u0ab8\u0abe\u0a82\u0a9c/,
            meridiemHour: function (n, t) {
                return 12 === n && (n = 0), "\u0ab0\u0abe\u0aa4" === t ? n < 4 ? n : n + 12 : "\u0ab8\u0ab5\u0abe\u0ab0" === t ? n : "\u0aac\u0aaa\u0acb\u0ab0" === t ? n >= 10 ? n : n + 12 : "\u0ab8\u0abe\u0a82\u0a9c" === t ? n + 12 : void 0
            },
            meridiem: function (n, t, e) {
                return n < 4 ? "\u0ab0\u0abe\u0aa4" : n < 10 ? "\u0ab8\u0ab5\u0abe\u0ab0" : n < 17 ? "\u0aac\u0aaa\u0acb\u0ab0" : n < 20 ? "\u0ab8\u0abe\u0a82\u0a9c" : "\u0ab0\u0abe\u0aa4"
            },
            week: {dow: 0, doy: 6}
        })
    }(e("wd/R"))
},
"4dOw": function (n, t, e) {
    !function (n) {
        "use strict";
        e("wd/R").defineLocale("en-ie", {
            months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"),
            monthsShort: "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),
            weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),
            weekdaysShort: "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),
            weekdaysMin: "Su_Mo_Tu_We_Th_Fr_Sa".split("_"),
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY HH:mm",
                LLLL: "dddd D MMMM YYYY HH:mm"
            },
            calendar: {
                sameDay: "[Today at] LT",
                nextDay: "[Tomorrow at] LT",
                nextWeek: "dddd [at] LT",
                lastDay: "[Yesterday at] LT",
                lastWeek: "[Last] dddd [at] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "in %s",
                past: "%s ago",
                s: "a few seconds",
                ss: "%d seconds",
                m: "a minute",
                mm: "%d minutes",
                h: "an hour",
                hh: "%d hours",
                d: "a day",
                dd: "%d days",
                M: "a month",
                MM: "%d months",
                y: "a year",
                yy: "%d years"
            },
            dayOfMonthOrdinalParse: /\d{1,2}(st|nd|rd|th)/,
            ordinal: function (n) {
                var t = n % 10;
                return n + (1 == ~~(n % 100 / 10) ? "th" : 1 === t ? "st" : 2 === t ? "nd" : 3 === t ? "rd" : "th")
            },
            week: {dow: 1, doy: 4}
        })
    }()
},
"6+QB": function (n, t, e) {
    !function (n) {
        "use strict";
        e("wd/R").defineLocale("ms", {
            months: "Januari_Februari_Mac_April_Mei_Jun_Julai_Ogos_September_Oktober_November_Disember".split("_"),
            monthsShort: "Jan_Feb_Mac_Apr_Mei_Jun_Jul_Ogs_Sep_Okt_Nov_Dis".split("_"),
            weekdays: "Ahad_Isnin_Selasa_Rabu_Khamis_Jumaat_Sabtu".split("_"),
            weekdaysShort: "Ahd_Isn_Sel_Rab_Kha_Jum_Sab".split("_"),
            weekdaysMin: "Ah_Is_Sl_Rb_Km_Jm_Sb".split("_"),
            longDateFormat: {
                LT: "HH.mm",
                LTS: "HH.mm.ss",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY [pukul] HH.mm",
                LLLL: "dddd, D MMMM YYYY [pukul] HH.mm"
            },
            meridiemParse: /pagi|tengahari|petang|malam/,
            meridiemHour: function (n, t) {
                return 12 === n && (n = 0), "pagi" === t ? n : "tengahari" === t ? n >= 11 ? n : n + 12 : "petang" === t || "malam" === t ? n + 12 : void 0
            },
            meridiem: function (n, t, e) {
                return n < 11 ? "pagi" : n < 15 ? "tengahari" : n < 19 ? "petang" : "malam"
            },
            calendar: {
                sameDay: "[Hari ini pukul] LT",
                nextDay: "[Esok pukul] LT",
                nextWeek: "dddd [pukul] LT",
                lastDay: "[Kelmarin pukul] LT",
                lastWeek: "dddd [lepas pukul] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "dalam %s",
                past: "%s yang lepas",
                s: "beberapa saat",
                ss: "%d saat",
                m: "seminit",
                mm: "%d minit",
                h: "sejam",
                hh: "%d jam",
                d: "sehari",
                dd: "%d hari",
                M: "sebulan",
                MM: "%d bulan",
                y: "setahun",
                yy: "%d tahun"
            },
            week: {dow: 1, doy: 7}
        })
    }()
},
"6B0Y": function (n, t, e) {
    !function (n) {
        "use strict";
        var t = {
            1: "\u17e1",
            2: "\u17e2",
            3: "\u17e3",
            4: "\u17e4",
            5: "\u17e5",
            6: "\u17e6",
            7: "\u17e7",
            8: "\u17e8",
            9: "\u17e9",
            0: "\u17e0"
        }, e = {
            "\u17e1": "1",
            "\u17e2": "2",
            "\u17e3": "3",
            "\u17e4": "4",
            "\u17e5": "5",
            "\u17e6": "6",
            "\u17e7": "7",
            "\u17e8": "8",
            "\u17e9": "9",
            "\u17e0": "0"
        };
        n.defineLocale("km", {
            months: "\u1798\u1780\u179a\u17b6_\u1780\u17bb\u1798\u17d2\u1797\u17c8_\u1798\u17b8\u1793\u17b6_\u1798\u17c1\u179f\u17b6_\u17a7\u179f\u1797\u17b6_\u1798\u17b7\u1790\u17bb\u1793\u17b6_\u1780\u1780\u17d2\u1780\u178a\u17b6_\u179f\u17b8\u17a0\u17b6_\u1780\u1789\u17d2\u1789\u17b6_\u178f\u17bb\u179b\u17b6_\u179c\u17b7\u1785\u17d2\u1786\u17b7\u1780\u17b6_\u1792\u17d2\u1793\u17bc".split("_"),
            monthsShort: "\u1798\u1780\u179a\u17b6_\u1780\u17bb\u1798\u17d2\u1797\u17c8_\u1798\u17b8\u1793\u17b6_\u1798\u17c1\u179f\u17b6_\u17a7\u179f\u1797\u17b6_\u1798\u17b7\u1790\u17bb\u1793\u17b6_\u1780\u1780\u17d2\u1780\u178a\u17b6_\u179f\u17b8\u17a0\u17b6_\u1780\u1789\u17d2\u1789\u17b6_\u178f\u17bb\u179b\u17b6_\u179c\u17b7\u1785\u17d2\u1786\u17b7\u1780\u17b6_\u1792\u17d2\u1793\u17bc".split("_"),
            weekdays: "\u17a2\u17b6\u1791\u17b7\u178f\u17d2\u1799_\u1785\u17d0\u1793\u17d2\u1791_\u17a2\u1784\u17d2\u1782\u17b6\u179a_\u1796\u17bb\u1792_\u1796\u17d2\u179a\u17a0\u179f\u17d2\u1794\u178f\u17b7\u17cd_\u179f\u17bb\u1780\u17d2\u179a_\u179f\u17c5\u179a\u17cd".split("_"),
            weekdaysShort: "\u17a2\u17b6_\u1785_\u17a2_\u1796_\u1796\u17d2\u179a_\u179f\u17bb_\u179f".split("_"),
            weekdaysMin: "\u17a2\u17b6_\u1785_\u17a2_\u1796_\u1796\u17d2\u179a_\u179f\u17bb_\u179f".split("_"),
            weekdaysParseExact: !0,
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY HH:mm",
                LLLL: "dddd, D MMMM YYYY HH:mm"
            },
            meridiemParse: /\u1796\u17d2\u179a\u17b9\u1780|\u179b\u17d2\u1784\u17b6\u1785/,
            isPM: function (n) {
                return "\u179b\u17d2\u1784\u17b6\u1785" === n
            },
            meridiem: function (n, t, e) {
                return n < 12 ? "\u1796\u17d2\u179a\u17b9\u1780" : "\u179b\u17d2\u1784\u17b6\u1785"
            },
            calendar: {
                sameDay: "[\u1790\u17d2\u1784\u17c3\u1793\u17c1\u17c7 \u1798\u17c9\u17c4\u1784] LT",
                nextDay: "[\u179f\u17d2\u17a2\u17c2\u1780 \u1798\u17c9\u17c4\u1784] LT",
                nextWeek: "dddd [\u1798\u17c9\u17c4\u1784] LT",
                lastDay: "[\u1798\u17d2\u179f\u17b7\u179b\u1798\u17b7\u1789 \u1798\u17c9\u17c4\u1784] LT",
                lastWeek: "dddd [\u179f\u1794\u17d2\u178f\u17b6\u17a0\u17cd\u1798\u17bb\u1793] [\u1798\u17c9\u17c4\u1784] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "%s\u1791\u17c0\u178f",
                past: "%s\u1798\u17bb\u1793",
                s: "\u1794\u17c9\u17bb\u1793\u17d2\u1798\u17b6\u1793\u179c\u17b7\u1793\u17b6\u1791\u17b8",
                ss: "%d \u179c\u17b7\u1793\u17b6\u1791\u17b8",
                m: "\u1798\u17bd\u1799\u1793\u17b6\u1791\u17b8",
                mm: "%d \u1793\u17b6\u1791\u17b8",
                h: "\u1798\u17bd\u1799\u1798\u17c9\u17c4\u1784",
                hh: "%d \u1798\u17c9\u17c4\u1784",
                d: "\u1798\u17bd\u1799\u1790\u17d2\u1784\u17c3",
                dd: "%d \u1790\u17d2\u1784\u17c3",
                M: "\u1798\u17bd\u1799\u1781\u17c2",
                MM: "%d \u1781\u17c2",
                y: "\u1798\u17bd\u1799\u1786\u17d2\u1793\u17b6\u17c6",
                yy: "%d \u1786\u17d2\u1793\u17b6\u17c6"
            },
            dayOfMonthOrdinalParse: /\u1791\u17b8\d{1,2}/,
            ordinal: "\u1791\u17b8%d",
            preparse: function (n) {
                return n.replace(/[\u17e1\u17e2\u17e3\u17e4\u17e5\u17e6\u17e7\u17e8\u17e9\u17e0]/g, function (n) {
                    return e[n]
                })
            },
            postformat: function (n) {
                return n.replace(/\d/g, function (n) {
                    return t[n]
                })
            },
            week: {dow: 1, doy: 4}
        })
    }(e("wd/R"))
},
"7BjC": function (n, t, e) {
    !function (n) {
        "use strict";

        function t(n, t, e, o) {
            var l = {
                s: ["m\xf5ne sekundi", "m\xf5ni sekund", "paar sekundit"],
                ss: [n + "sekundi", n + "sekundit"],
                m: ["\xfche minuti", "\xfcks minut"],
                mm: [n + " minuti", n + " minutit"],
                h: ["\xfche tunni", "tund aega", "\xfcks tund"],
                hh: [n + " tunni", n + " tundi"],
                d: ["\xfche p\xe4eva", "\xfcks p\xe4ev"],
                M: ["kuu aja", "kuu aega", "\xfcks kuu"],
                MM: [n + " kuu", n + " kuud"],
                y: ["\xfche aasta", "aasta", "\xfcks aasta"],
                yy: [n + " aasta", n + " aastat"]
            };
            return t ? l[e][2] ? l[e][2] : l[e][1] : o ? l[e][0] : l[e][1]
        }

        e("wd/R").defineLocale("et", {
            months: "jaanuar_veebruar_m\xe4rts_aprill_mai_juuni_juuli_august_september_oktoober_november_detsember".split("_"),
            monthsShort: "jaan_veebr_m\xe4rts_apr_mai_juuni_juuli_aug_sept_okt_nov_dets".split("_"),
            weekdays: "p\xfchap\xe4ev_esmasp\xe4ev_teisip\xe4ev_kolmap\xe4ev_neljap\xe4ev_reede_laup\xe4ev".split("_"),
            weekdaysShort: "P_E_T_K_N_R_L".split("_"),
            weekdaysMin: "P_E_T_K_N_R_L".split("_"),
            longDateFormat: {
                LT: "H:mm",
                LTS: "H:mm:ss",
                L: "DD.MM.YYYY",
                LL: "D. MMMM YYYY",
                LLL: "D. MMMM YYYY H:mm",
                LLLL: "dddd, D. MMMM YYYY H:mm"
            },
            calendar: {
                sameDay: "[T\xe4na,] LT",
                nextDay: "[Homme,] LT",
                nextWeek: "[J\xe4rgmine] dddd LT",
                lastDay: "[Eile,] LT",
                lastWeek: "[Eelmine] dddd LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "%s p\xe4rast",
                past: "%s tagasi",
                s: t,
                ss: t,
                m: t,
                mm: t,
                h: t,
                hh: t,
                d: t,
                dd: "%d p\xe4eva",
                M: t,
                MM: t,
                y: t,
                yy: t
            },
            dayOfMonthOrdinalParse: /\d{1,2}\./,
            ordinal: "%d.",
            week: {dow: 1, doy: 4}
        })
    }()
},
"7aV9": function (n, t, e) {
    !function (n) {
        "use strict";
        e("wd/R").defineLocale("si", {
            months: "\u0da2\u0db1\u0dc0\u0dcf\u0dbb\u0dd2_\u0db4\u0dd9\u0db6\u0dbb\u0dc0\u0dcf\u0dbb\u0dd2_\u0db8\u0dcf\u0dbb\u0dca\u0dad\u0dd4_\u0d85\u0db4\u0dca\u200d\u0dbb\u0dda\u0dbd\u0dca_\u0db8\u0dd0\u0dba\u0dd2_\u0da2\u0dd6\u0db1\u0dd2_\u0da2\u0dd6\u0dbd\u0dd2_\u0d85\u0d9c\u0ddd\u0dc3\u0dca\u0dad\u0dd4_\u0dc3\u0dd0\u0db4\u0dca\u0dad\u0dd0\u0db8\u0dca\u0db6\u0dbb\u0dca_\u0d94\u0d9a\u0dca\u0dad\u0ddd\u0db6\u0dbb\u0dca_\u0db1\u0ddc\u0dc0\u0dd0\u0db8\u0dca\u0db6\u0dbb\u0dca_\u0daf\u0dd9\u0dc3\u0dd0\u0db8\u0dca\u0db6\u0dbb\u0dca".split("_"),
            monthsShort: "\u0da2\u0db1_\u0db4\u0dd9\u0db6_\u0db8\u0dcf\u0dbb\u0dca_\u0d85\u0db4\u0dca_\u0db8\u0dd0\u0dba\u0dd2_\u0da2\u0dd6\u0db1\u0dd2_\u0da2\u0dd6\u0dbd\u0dd2_\u0d85\u0d9c\u0ddd_\u0dc3\u0dd0\u0db4\u0dca_\u0d94\u0d9a\u0dca_\u0db1\u0ddc\u0dc0\u0dd0_\u0daf\u0dd9\u0dc3\u0dd0".split("_"),
            weekdays: "\u0d89\u0dbb\u0dd2\u0daf\u0dcf_\u0dc3\u0db3\u0dd4\u0daf\u0dcf_\u0d85\u0d9f\u0dc4\u0dbb\u0dd4\u0dc0\u0dcf\u0daf\u0dcf_\u0db6\u0daf\u0dcf\u0daf\u0dcf_\u0db6\u0dca\u200d\u0dbb\u0dc4\u0dc3\u0dca\u0db4\u0dad\u0dd2\u0db1\u0dca\u0daf\u0dcf_\u0dc3\u0dd2\u0d9a\u0dd4\u0dbb\u0dcf\u0daf\u0dcf_\u0dc3\u0dd9\u0db1\u0dc3\u0dd4\u0dbb\u0dcf\u0daf\u0dcf".split("_"),
            weekdaysShort: "\u0d89\u0dbb\u0dd2_\u0dc3\u0db3\u0dd4_\u0d85\u0d9f_\u0db6\u0daf\u0dcf_\u0db6\u0dca\u200d\u0dbb\u0dc4_\u0dc3\u0dd2\u0d9a\u0dd4_\u0dc3\u0dd9\u0db1".split("_"),
            weekdaysMin: "\u0d89_\u0dc3_\u0d85_\u0db6_\u0db6\u0dca\u200d\u0dbb_\u0dc3\u0dd2_\u0dc3\u0dd9".split("_"),
            weekdaysParseExact: !0,
            longDateFormat: {
                LT: "a h:mm",
                LTS: "a h:mm:ss",
                L: "YYYY/MM/DD",
                LL: "YYYY MMMM D",
                LLL: "YYYY MMMM D, a h:mm",
                LLLL: "YYYY MMMM D [\u0dc0\u0dd0\u0db1\u0dd2] dddd, a h:mm:ss"
            },
            calendar: {
                sameDay: "[\u0d85\u0daf] LT[\u0da7]",
                nextDay: "[\u0dc4\u0dd9\u0da7] LT[\u0da7]",
                nextWeek: "dddd LT[\u0da7]",
                lastDay: "[\u0d8a\u0dba\u0dda] LT[\u0da7]",
                lastWeek: "[\u0db4\u0dc3\u0dd4\u0d9c\u0dd2\u0dba] dddd LT[\u0da7]",
                sameElse: "L"
            },
            relativeTime: {
                future: "%s\u0d9a\u0dd2\u0db1\u0dca",
                past: "%s\u0d9a\u0da7 \u0db4\u0dd9\u0dbb",
                s: "\u0dad\u0dad\u0dca\u0db4\u0dbb \u0d9a\u0dd2\u0dc4\u0dd2\u0db4\u0dba",
                ss: "\u0dad\u0dad\u0dca\u0db4\u0dbb %d",
                m: "\u0db8\u0dd2\u0db1\u0dd2\u0dad\u0dca\u0dad\u0dd4\u0dc0",
                mm: "\u0db8\u0dd2\u0db1\u0dd2\u0dad\u0dca\u0dad\u0dd4 %d",
                h: "\u0db4\u0dd0\u0dba",
                hh: "\u0db4\u0dd0\u0dba %d",
                d: "\u0daf\u0dd2\u0db1\u0dba",
                dd: "\u0daf\u0dd2\u0db1 %d",
                M: "\u0db8\u0dcf\u0dc3\u0dba",
                MM: "\u0db8\u0dcf\u0dc3 %d",
                y: "\u0dc0\u0dc3\u0dbb",
                yy: "\u0dc0\u0dc3\u0dbb %d"
            },
            dayOfMonthOrdinalParse: /\d{1,2} \u0dc0\u0dd0\u0db1\u0dd2/,
            ordinal: function (n) {
                return n + " \u0dc0\u0dd0\u0db1\u0dd2"
            },
            meridiemParse: /\u0db4\u0dd9\u0dbb \u0dc0\u0dbb\u0dd4|\u0db4\u0dc3\u0dca \u0dc0\u0dbb\u0dd4|\u0db4\u0dd9.\u0dc0|\u0db4.\u0dc0./,
            isPM: function (n) {
                return "\u0db4.\u0dc0." === n || "\u0db4\u0dc3\u0dca \u0dc0\u0dbb\u0dd4" === n
            },
            meridiem: function (n, t, e) {
                return n > 11 ? e ? "\u0db4.\u0dc0." : "\u0db4\u0dc3\u0dca \u0dc0\u0dbb\u0dd4" : e ? "\u0db4\u0dd9.\u0dc0." : "\u0db4\u0dd9\u0dbb \u0dc0\u0dbb\u0dd4"
            }
        })
    }()
},
"8/+R": function (n, t, e) {
    !function (n) {
        "use strict";
        var t = {
            1: "\u0a67",
            2: "\u0a68",
            3: "\u0a69",
            4: "\u0a6a",
            5: "\u0a6b",
            6: "\u0a6c",
            7: "\u0a6d",
            8: "\u0a6e",
            9: "\u0a6f",
            0: "\u0a66"
        }, e = {
            "\u0a67": "1",
            "\u0a68": "2",
            "\u0a69": "3",
            "\u0a6a": "4",
            "\u0a6b": "5",
            "\u0a6c": "6",
            "\u0a6d": "7",
            "\u0a6e": "8",
            "\u0a6f": "9",
            "\u0a66": "0"
        };
        n.defineLocale("pa-in", {
            months: "\u0a1c\u0a28\u0a35\u0a30\u0a40_\u0a2b\u0a3c\u0a30\u0a35\u0a30\u0a40_\u0a2e\u0a3e\u0a30\u0a1a_\u0a05\u0a2a\u0a4d\u0a30\u0a48\u0a32_\u0a2e\u0a08_\u0a1c\u0a42\u0a28_\u0a1c\u0a41\u0a32\u0a3e\u0a08_\u0a05\u0a17\u0a38\u0a24_\u0a38\u0a24\u0a70\u0a2c\u0a30_\u0a05\u0a15\u0a24\u0a42\u0a2c\u0a30_\u0a28\u0a35\u0a70\u0a2c\u0a30_\u0a26\u0a38\u0a70\u0a2c\u0a30".split("_"),
            monthsShort: "\u0a1c\u0a28\u0a35\u0a30\u0a40_\u0a2b\u0a3c\u0a30\u0a35\u0a30\u0a40_\u0a2e\u0a3e\u0a30\u0a1a_\u0a05\u0a2a\u0a4d\u0a30\u0a48\u0a32_\u0a2e\u0a08_\u0a1c\u0a42\u0a28_\u0a1c\u0a41\u0a32\u0a3e\u0a08_\u0a05\u0a17\u0a38\u0a24_\u0a38\u0a24\u0a70\u0a2c\u0a30_\u0a05\u0a15\u0a24\u0a42\u0a2c\u0a30_\u0a28\u0a35\u0a70\u0a2c\u0a30_\u0a26\u0a38\u0a70\u0a2c\u0a30".split("_"),
            weekdays: "\u0a10\u0a24\u0a35\u0a3e\u0a30_\u0a38\u0a4b\u0a2e\u0a35\u0a3e\u0a30_\u0a2e\u0a70\u0a17\u0a32\u0a35\u0a3e\u0a30_\u0a2c\u0a41\u0a27\u0a35\u0a3e\u0a30_\u0a35\u0a40\u0a30\u0a35\u0a3e\u0a30_\u0a38\u0a3c\u0a41\u0a71\u0a15\u0a30\u0a35\u0a3e\u0a30_\u0a38\u0a3c\u0a28\u0a40\u0a1a\u0a30\u0a35\u0a3e\u0a30".split("_"),
            weekdaysShort: "\u0a10\u0a24_\u0a38\u0a4b\u0a2e_\u0a2e\u0a70\u0a17\u0a32_\u0a2c\u0a41\u0a27_\u0a35\u0a40\u0a30_\u0a38\u0a3c\u0a41\u0a15\u0a30_\u0a38\u0a3c\u0a28\u0a40".split("_"),
            weekdaysMin: "\u0a10\u0a24_\u0a38\u0a4b\u0a2e_\u0a2e\u0a70\u0a17\u0a32_\u0a2c\u0a41\u0a27_\u0a35\u0a40\u0a30_\u0a38\u0a3c\u0a41\u0a15\u0a30_\u0a38\u0a3c\u0a28\u0a40".split("_"),
            longDateFormat: {
                LT: "A h:mm \u0a35\u0a1c\u0a47",
                LTS: "A h:mm:ss \u0a35\u0a1c\u0a47",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY, A h:mm \u0a35\u0a1c\u0a47",
                LLLL: "dddd, D MMMM YYYY, A h:mm \u0a35\u0a1c\u0a47"
            },
            calendar: {
                sameDay: "[\u0a05\u0a1c] LT",
                nextDay: "[\u0a15\u0a32] LT",
                nextWeek: "[\u0a05\u0a17\u0a32\u0a3e] dddd, LT",
                lastDay: "[\u0a15\u0a32] LT",
                lastWeek: "[\u0a2a\u0a3f\u0a1b\u0a32\u0a47] dddd, LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "%s \u0a35\u0a3f\u0a71\u0a1a",
                past: "%s \u0a2a\u0a3f\u0a1b\u0a32\u0a47",
                s: "\u0a15\u0a41\u0a1d \u0a38\u0a15\u0a3f\u0a70\u0a1f",
                ss: "%d \u0a38\u0a15\u0a3f\u0a70\u0a1f",
                m: "\u0a07\u0a15 \u0a2e\u0a3f\u0a70\u0a1f",
                mm: "%d \u0a2e\u0a3f\u0a70\u0a1f",
                h: "\u0a07\u0a71\u0a15 \u0a18\u0a70\u0a1f\u0a3e",
                hh: "%d \u0a18\u0a70\u0a1f\u0a47",
                d: "\u0a07\u0a71\u0a15 \u0a26\u0a3f\u0a28",
                dd: "%d \u0a26\u0a3f\u0a28",
                M: "\u0a07\u0a71\u0a15 \u0a2e\u0a39\u0a40\u0a28\u0a3e",
                MM: "%d \u0a2e\u0a39\u0a40\u0a28\u0a47",
                y: "\u0a07\u0a71\u0a15 \u0a38\u0a3e\u0a32",
                yy: "%d \u0a38\u0a3e\u0a32"
            },
            preparse: function (n) {
                return n.replace(/[\u0a67\u0a68\u0a69\u0a6a\u0a6b\u0a6c\u0a6d\u0a6e\u0a6f\u0a66]/g, function (n) {
                    return e[n]
                })
            },
            postformat: function (n) {
                return n.replace(/\d/g, function (n) {
                    return t[n]
                })
            },
            meridiemParse: /\u0a30\u0a3e\u0a24|\u0a38\u0a35\u0a47\u0a30|\u0a26\u0a41\u0a2a\u0a39\u0a3f\u0a30|\u0a38\u0a3c\u0a3e\u0a2e/,
            meridiemHour: function (n, t) {
                return 12 === n && (n = 0), "\u0a30\u0a3e\u0a24" === t ? n < 4 ? n : n + 12 : "\u0a38\u0a35\u0a47\u0a30" === t ? n : "\u0a26\u0a41\u0a2a\u0a39\u0a3f\u0a30" === t ? n >= 10 ? n : n + 12 : "\u0a38\u0a3c\u0a3e\u0a2e" === t ? n + 12 : void 0
            },
            meridiem: function (n, t, e) {
                return n < 4 ? "\u0a30\u0a3e\u0a24" : n < 10 ? "\u0a38\u0a35\u0a47\u0a30" : n < 17 ? "\u0a26\u0a41\u0a2a\u0a39\u0a3f\u0a30" : n < 20 ? "\u0a38\u0a3c\u0a3e\u0a2e" : "\u0a30\u0a3e\u0a24"
            },
            week: {dow: 0, doy: 6}
        })
    }(e("wd/R"))
},
"8mBD": function (n, t, e) {
    !function (n) {
        "use strict";
        e("wd/R").defineLocale("pt", {
            months: "Janeiro_Fevereiro_Mar\xe7o_Abril_Maio_Junho_Julho_Agosto_Setembro_Outubro_Novembro_Dezembro".split("_"),
            monthsShort: "Jan_Fev_Mar_Abr_Mai_Jun_Jul_Ago_Set_Out_Nov_Dez".split("_"),
            weekdays: "Domingo_Segunda-feira_Ter\xe7a-feira_Quarta-feira_Quinta-feira_Sexta-feira_S\xe1bado".split("_"),
            weekdaysShort: "Dom_Seg_Ter_Qua_Qui_Sex_S\xe1b".split("_"),
            weekdaysMin: "Do_2\xaa_3\xaa_4\xaa_5\xaa_6\xaa_S\xe1".split("_"),
            weekdaysParseExact: !0,
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD/MM/YYYY",
                LL: "D [de] MMMM [de] YYYY",
                LLL: "D [de] MMMM [de] YYYY HH:mm",
                LLLL: "dddd, D [de] MMMM [de] YYYY HH:mm"
            },
            calendar: {
                sameDay: "[Hoje \xe0s] LT",
                nextDay: "[Amanh\xe3 \xe0s] LT",
                nextWeek: "dddd [\xe0s] LT",
                lastDay: "[Ontem \xe0s] LT",
                lastWeek: function () {
                    return 0 === this.day() || 6 === this.day() ? "[\xdaltimo] dddd [\xe0s] LT" : "[\xdaltima] dddd [\xe0s] LT"
                },
                sameElse: "L"
            },
            relativeTime: {
                future: "em %s",
                past: "h\xe1 %s",
                s: "segundos",
                ss: "%d segundos",
                m: "um minuto",
                mm: "%d minutos",
                h: "uma hora",
                hh: "%d horas",
                d: "um dia",
                dd: "%d dias",
                M: "um m\xeas",
                MM: "%d meses",
                y: "um ano",
                yy: "%d anos"
            },
            dayOfMonthOrdinalParse: /\d{1,2}\xba/,
            ordinal: "%d\xba",
            week: {dow: 1, doy: 4}
        })
    }()
},
"9rRi": function (n, t, e) {
    !function (n) {
        "use strict";
        e("wd/R").defineLocale("gd", {
            months: ["Am Faoilleach", "An Gearran", "Am M\xe0rt", "An Giblean", "An C\xe8itean", "An t-\xd2gmhios", "An t-Iuchar", "An L\xf9nastal", "An t-Sultain", "An D\xe0mhair", "An t-Samhain", "An D\xf9bhlachd"],
            monthsShort: ["Faoi", "Gear", "M\xe0rt", "Gibl", "C\xe8it", "\xd2gmh", "Iuch", "L\xf9n", "Sult", "D\xe0mh", "Samh", "D\xf9bh"],
            monthsParseExact: !0,
            weekdays: ["Did\xf2mhnaich", "Diluain", "Dim\xe0irt", "Diciadain", "Diardaoin", "Dihaoine", "Disathairne"],
            weekdaysShort: ["Did", "Dil", "Dim", "Dic", "Dia", "Dih", "Dis"],
            weekdaysMin: ["D\xf2", "Lu", "M\xe0", "Ci", "Ar", "Ha", "Sa"],
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY HH:mm",
                LLLL: "dddd, D MMMM YYYY HH:mm"
            },
            calendar: {
                sameDay: "[An-diugh aig] LT",
                nextDay: "[A-m\xe0ireach aig] LT",
                nextWeek: "dddd [aig] LT",
                lastDay: "[An-d\xe8 aig] LT",
                lastWeek: "dddd [seo chaidh] [aig] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "ann an %s",
                past: "bho chionn %s",
                s: "beagan diogan",
                ss: "%d diogan",
                m: "mionaid",
                mm: "%d mionaidean",
                h: "uair",
                hh: "%d uairean",
                d: "latha",
                dd: "%d latha",
                M: "m\xecos",
                MM: "%d m\xecosan",
                y: "bliadhna",
                yy: "%d bliadhna"
            },
            dayOfMonthOrdinalParse: /\d{1,2}(d|na|mh)/,
            ordinal: function (n) {
                return n + (1 === n ? "d" : n % 10 == 2 ? "na" : "mh")
            },
            week: {dow: 1, doy: 4}
        })
    }()
},
"A+xa": function (n, t, e) {
    !function (n) {
        "use strict";
        e("wd/R").defineLocale("cv", {
            months: "\u043a\u04d1\u0440\u043b\u0430\u0447_\u043d\u0430\u0440\u04d1\u0441_\u043f\u0443\u0448_\u0430\u043a\u0430_\u043c\u0430\u0439_\u04ab\u04d7\u0440\u0442\u043c\u0435_\u0443\u0442\u04d1_\u04ab\u0443\u0440\u043b\u0430_\u0430\u0432\u04d1\u043d_\u044e\u043f\u0430_\u0447\u04f3\u043a_\u0440\u0430\u0448\u0442\u0430\u0432".split("_"),
            monthsShort: "\u043a\u04d1\u0440_\u043d\u0430\u0440_\u043f\u0443\u0448_\u0430\u043a\u0430_\u043c\u0430\u0439_\u04ab\u04d7\u0440_\u0443\u0442\u04d1_\u04ab\u0443\u0440_\u0430\u0432\u043d_\u044e\u043f\u0430_\u0447\u04f3\u043a_\u0440\u0430\u0448".split("_"),
            weekdays: "\u0432\u044b\u0440\u0441\u0430\u0440\u043d\u0438\u043a\u0443\u043d_\u0442\u0443\u043d\u0442\u0438\u043a\u0443\u043d_\u044b\u0442\u043b\u0430\u0440\u0438\u043a\u0443\u043d_\u044e\u043d\u043a\u0443\u043d_\u043a\u04d7\u04ab\u043d\u0435\u0440\u043d\u0438\u043a\u0443\u043d_\u044d\u0440\u043d\u0435\u043a\u0443\u043d_\u0448\u04d1\u043c\u0430\u0442\u043a\u0443\u043d".split("_"),
            weekdaysShort: "\u0432\u044b\u0440_\u0442\u0443\u043d_\u044b\u0442\u043b_\u044e\u043d_\u043a\u04d7\u04ab_\u044d\u0440\u043d_\u0448\u04d1\u043c".split("_"),
            weekdaysMin: "\u0432\u0440_\u0442\u043d_\u044b\u0442_\u044e\u043d_\u043a\u04ab_\u044d\u0440_\u0448\u043c".split("_"),
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD-MM-YYYY",
                LL: "YYYY [\u04ab\u0443\u043b\u0445\u0438] MMMM [\u0443\u0439\u04d1\u0445\u04d7\u043d] D[-\u043c\u04d7\u0448\u04d7]",
                LLL: "YYYY [\u04ab\u0443\u043b\u0445\u0438] MMMM [\u0443\u0439\u04d1\u0445\u04d7\u043d] D[-\u043c\u04d7\u0448\u04d7], HH:mm",
                LLLL: "dddd, YYYY [\u04ab\u0443\u043b\u0445\u0438] MMMM [\u0443\u0439\u04d1\u0445\u04d7\u043d] D[-\u043c\u04d7\u0448\u04d7], HH:mm"
            },
            calendar: {
                sameDay: "[\u041f\u0430\u044f\u043d] LT [\u0441\u0435\u0445\u0435\u0442\u0440\u0435]",
                nextDay: "[\u042b\u0440\u0430\u043d] LT [\u0441\u0435\u0445\u0435\u0442\u0440\u0435]",
                lastDay: "[\u04d6\u043d\u0435\u0440] LT [\u0441\u0435\u0445\u0435\u0442\u0440\u0435]",
                nextWeek: "[\u04aa\u0438\u0442\u0435\u0441] dddd LT [\u0441\u0435\u0445\u0435\u0442\u0440\u0435]",
                lastWeek: "[\u0418\u0440\u0442\u043d\u04d7] dddd LT [\u0441\u0435\u0445\u0435\u0442\u0440\u0435]",
                sameElse: "L"
            },
            relativeTime: {
                future: function (n) {
                    return n + (/\u0441\u0435\u0445\u0435\u0442$/i.exec(n) ? "\u0440\u0435\u043d" : /\u04ab\u0443\u043b$/i.exec(n) ? "\u0442\u0430\u043d" : "\u0440\u0430\u043d")
                },
                past: "%s \u043a\u0430\u044f\u043b\u043b\u0430",
                s: "\u043f\u04d7\u0440-\u0438\u043a \u04ab\u0435\u043a\u043a\u0443\u043d\u0442",
                ss: "%d \u04ab\u0435\u043a\u043a\u0443\u043d\u0442",
                m: "\u043f\u04d7\u0440 \u043c\u0438\u043d\u0443\u0442",
                mm: "%d \u043c\u0438\u043d\u0443\u0442",
                h: "\u043f\u04d7\u0440 \u0441\u0435\u0445\u0435\u0442",
                hh: "%d \u0441\u0435\u0445\u0435\u0442",
                d: "\u043f\u04d7\u0440 \u043a\u0443\u043d",
                dd: "%d \u043a\u0443\u043d",
                M: "\u043f\u04d7\u0440 \u0443\u0439\u04d1\u0445",
                MM: "%d \u0443\u0439\u04d1\u0445",
                y: "\u043f\u04d7\u0440 \u04ab\u0443\u043b",
                yy: "%d \u04ab\u0443\u043b"
            },
            dayOfMonthOrdinalParse: /\d{1,2}-\u043c\u04d7\u0448/,
            ordinal: "%d-\u043c\u04d7\u0448",
            week: {dow: 1, doy: 7}
        })
    }()
},
AQ68: function (n, t, e) {
    !function (n) {
        "use strict";
        e("wd/R").defineLocale("uz-latn", {
            months: "Yanvar_Fevral_Mart_Aprel_May_Iyun_Iyul_Avgust_Sentabr_Oktabr_Noyabr_Dekabr".split("_"),
            monthsShort: "Yan_Fev_Mar_Apr_May_Iyun_Iyul_Avg_Sen_Okt_Noy_Dek".split("_"),
            weekdays: "Yakshanba_Dushanba_Seshanba_Chorshanba_Payshanba_Juma_Shanba".split("_"),
            weekdaysShort: "Yak_Dush_Sesh_Chor_Pay_Jum_Shan".split("_"),
            weekdaysMin: "Ya_Du_Se_Cho_Pa_Ju_Sha".split("_"),
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY HH:mm",
                LLLL: "D MMMM YYYY, dddd HH:mm"
            },
            calendar: {
                sameDay: "[Bugun soat] LT [da]",
                nextDay: "[Ertaga] LT [da]",
                nextWeek: "dddd [kuni soat] LT [da]",
                lastDay: "[Kecha soat] LT [da]",
                lastWeek: "[O'tgan] dddd [kuni soat] LT [da]",
                sameElse: "L"
            },
            relativeTime: {
                future: "Yaqin %s ichida",
                past: "Bir necha %s oldin",
                s: "soniya",
                ss: "%d soniya",
                m: "bir daqiqa",
                mm: "%d daqiqa",
                h: "bir soat",
                hh: "%d soat",
                d: "bir kun",
                dd: "%d kun",
                M: "bir oy",
                MM: "%d oy",
                y: "bir yil",
                yy: "%d yil"
            },
            week: {dow: 1, doy: 7}
        })
    }()
},
AvvY: function (n, t, e) {
    !function (n) {
        "use strict";
        e("wd/R").defineLocale("ml", {
            months: "\u0d1c\u0d28\u0d41\u0d35\u0d30\u0d3f_\u0d2b\u0d46\u0d2c\u0d4d\u0d30\u0d41\u0d35\u0d30\u0d3f_\u0d2e\u0d3e\u0d7c\u0d1a\u0d4d\u0d1a\u0d4d_\u0d0f\u0d2a\u0d4d\u0d30\u0d3f\u0d7d_\u0d2e\u0d47\u0d2f\u0d4d_\u0d1c\u0d42\u0d7a_\u0d1c\u0d42\u0d32\u0d48_\u0d13\u0d17\u0d38\u0d4d\u0d31\u0d4d\u0d31\u0d4d_\u0d38\u0d46\u0d2a\u0d4d\u0d31\u0d4d\u0d31\u0d02\u0d2c\u0d7c_\u0d12\u0d15\u0d4d\u0d1f\u0d4b\u0d2c\u0d7c_\u0d28\u0d35\u0d02\u0d2c\u0d7c_\u0d21\u0d3f\u0d38\u0d02\u0d2c\u0d7c".split("_"),
            monthsShort: "\u0d1c\u0d28\u0d41._\u0d2b\u0d46\u0d2c\u0d4d\u0d30\u0d41._\u0d2e\u0d3e\u0d7c._\u0d0f\u0d2a\u0d4d\u0d30\u0d3f._\u0d2e\u0d47\u0d2f\u0d4d_\u0d1c\u0d42\u0d7a_\u0d1c\u0d42\u0d32\u0d48._\u0d13\u0d17._\u0d38\u0d46\u0d2a\u0d4d\u0d31\u0d4d\u0d31._\u0d12\u0d15\u0d4d\u0d1f\u0d4b._\u0d28\u0d35\u0d02._\u0d21\u0d3f\u0d38\u0d02.".split("_"),
            monthsParseExact: !0,
            weekdays: "\u0d1e\u0d3e\u0d2f\u0d31\u0d3e\u0d34\u0d4d\u0d1a_\u0d24\u0d3f\u0d19\u0d4d\u0d15\u0d33\u0d3e\u0d34\u0d4d\u0d1a_\u0d1a\u0d4a\u0d35\u0d4d\u0d35\u0d3e\u0d34\u0d4d\u0d1a_\u0d2c\u0d41\u0d27\u0d28\u0d3e\u0d34\u0d4d\u0d1a_\u0d35\u0d4d\u0d2f\u0d3e\u0d34\u0d3e\u0d34\u0d4d\u0d1a_\u0d35\u0d46\u0d33\u0d4d\u0d33\u0d3f\u0d2f\u0d3e\u0d34\u0d4d\u0d1a_\u0d36\u0d28\u0d3f\u0d2f\u0d3e\u0d34\u0d4d\u0d1a".split("_"),
            weekdaysShort: "\u0d1e\u0d3e\u0d2f\u0d7c_\u0d24\u0d3f\u0d19\u0d4d\u0d15\u0d7e_\u0d1a\u0d4a\u0d35\u0d4d\u0d35_\u0d2c\u0d41\u0d27\u0d7b_\u0d35\u0d4d\u0d2f\u0d3e\u0d34\u0d02_\u0d35\u0d46\u0d33\u0d4d\u0d33\u0d3f_\u0d36\u0d28\u0d3f".split("_"),
            weekdaysMin: "\u0d1e\u0d3e_\u0d24\u0d3f_\u0d1a\u0d4a_\u0d2c\u0d41_\u0d35\u0d4d\u0d2f\u0d3e_\u0d35\u0d46_\u0d36".split("_"),
            longDateFormat: {
                LT: "A h:mm -\u0d28\u0d41",
                LTS: "A h:mm:ss -\u0d28\u0d41",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY, A h:mm -\u0d28\u0d41",
                LLLL: "dddd, D MMMM YYYY, A h:mm -\u0d28\u0d41"
            },
            calendar: {
                sameDay: "[\u0d07\u0d28\u0d4d\u0d28\u0d4d] LT",
                nextDay: "[\u0d28\u0d3e\u0d33\u0d46] LT",
                nextWeek: "dddd, LT",
                lastDay: "[\u0d07\u0d28\u0d4d\u0d28\u0d32\u0d46] LT",
                lastWeek: "[\u0d15\u0d34\u0d3f\u0d1e\u0d4d\u0d1e] dddd, LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "%s \u0d15\u0d34\u0d3f\u0d1e\u0d4d\u0d1e\u0d4d",
                past: "%s \u0d2e\u0d41\u0d7b\u0d2a\u0d4d",
                s: "\u0d05\u0d7d\u0d2a \u0d28\u0d3f\u0d2e\u0d3f\u0d37\u0d19\u0d4d\u0d19\u0d7e",
                ss: "%d \u0d38\u0d46\u0d15\u0d4d\u0d15\u0d7b\u0d21\u0d4d",
                m: "\u0d12\u0d30\u0d41 \u0d2e\u0d3f\u0d28\u0d3f\u0d31\u0d4d\u0d31\u0d4d",
                mm: "%d \u0d2e\u0d3f\u0d28\u0d3f\u0d31\u0d4d\u0d31\u0d4d",
                h: "\u0d12\u0d30\u0d41 \u0d2e\u0d23\u0d3f\u0d15\u0d4d\u0d15\u0d42\u0d7c",
                hh: "%d \u0d2e\u0d23\u0d3f\u0d15\u0d4d\u0d15\u0d42\u0d7c",
                d: "\u0d12\u0d30\u0d41 \u0d26\u0d3f\u0d35\u0d38\u0d02",
                dd: "%d \u0d26\u0d3f\u0d35\u0d38\u0d02",
                M: "\u0d12\u0d30\u0d41 \u0d2e\u0d3e\u0d38\u0d02",
                MM: "%d \u0d2e\u0d3e\u0d38\u0d02",
                y: "\u0d12\u0d30\u0d41 \u0d35\u0d7c\u0d37\u0d02",
                yy: "%d \u0d35\u0d7c\u0d37\u0d02"
            },
            meridiemParse: /\u0d30\u0d3e\u0d24\u0d4d\u0d30\u0d3f|\u0d30\u0d3e\u0d35\u0d3f\u0d32\u0d46|\u0d09\u0d1a\u0d4d\u0d1a \u0d15\u0d34\u0d3f\u0d1e\u0d4d\u0d1e\u0d4d|\u0d35\u0d48\u0d15\u0d41\u0d28\u0d4d\u0d28\u0d47\u0d30\u0d02|\u0d30\u0d3e\u0d24\u0d4d\u0d30\u0d3f/i,
            meridiemHour: function (n, t) {
                return 12 === n && (n = 0), "\u0d30\u0d3e\u0d24\u0d4d\u0d30\u0d3f" === t && n >= 4 || "\u0d09\u0d1a\u0d4d\u0d1a \u0d15\u0d34\u0d3f\u0d1e\u0d4d\u0d1e\u0d4d" === t || "\u0d35\u0d48\u0d15\u0d41\u0d28\u0d4d\u0d28\u0d47\u0d30\u0d02" === t ? n + 12 : n
            },
            meridiem: function (n, t, e) {
                return n < 4 ? "\u0d30\u0d3e\u0d24\u0d4d\u0d30\u0d3f" : n < 12 ? "\u0d30\u0d3e\u0d35\u0d3f\u0d32\u0d46" : n < 17 ? "\u0d09\u0d1a\u0d4d\u0d1a \u0d15\u0d34\u0d3f\u0d1e\u0d4d\u0d1e\u0d4d" : n < 20 ? "\u0d35\u0d48\u0d15\u0d41\u0d28\u0d4d\u0d28\u0d47\u0d30\u0d02" : "\u0d30\u0d3e\u0d24\u0d4d\u0d30\u0d3f"
            }
        })
    }()
},
B55N: function (n, t, e) {
    !function (n) {
        "use strict";
        e("wd/R").defineLocale("ja", {
            months: "\u4e00\u6708_\u4e8c\u6708_\u4e09\u6708_\u56db\u6708_\u4e94\u6708_\u516d\u6708_\u4e03\u6708_\u516b\u6708_\u4e5d\u6708_\u5341\u6708_\u5341\u4e00\u6708_\u5341\u4e8c\u6708".split("_"),
            monthsShort: "1\u6708_2\u6708_3\u6708_4\u6708_5\u6708_6\u6708_7\u6708_8\u6708_9\u6708_10\u6708_11\u6708_12\u6708".split("_"),
            weekdays: "\u65e5\u66dc\u65e5_\u6708\u66dc\u65e5_\u706b\u66dc\u65e5_\u6c34\u66dc\u65e5_\u6728\u66dc\u65e5_\u91d1\u66dc\u65e5_\u571f\u66dc\u65e5".split("_"),
            weekdaysShort: "\u65e5_\u6708_\u706b_\u6c34_\u6728_\u91d1_\u571f".split("_"),
            weekdaysMin: "\u65e5_\u6708_\u706b_\u6c34_\u6728_\u91d1_\u571f".split("_"),
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "YYYY/MM/DD",
                LL: "YYYY\u5e74M\u6708D\u65e5",
                LLL: "YYYY\u5e74M\u6708D\u65e5 HH:mm",
                LLLL: "YYYY\u5e74M\u6708D\u65e5 dddd HH:mm",
                l: "YYYY/MM/DD",
                ll: "YYYY\u5e74M\u6708D\u65e5",
                lll: "YYYY\u5e74M\u6708D\u65e5 HH:mm",
                llll: "YYYY\u5e74M\u6708D\u65e5(ddd) HH:mm"
            },
            meridiemParse: /\u5348\u524d|\u5348\u5f8c/i,
            isPM: function (n) {
                return "\u5348\u5f8c" === n
            },
            meridiem: function (n, t, e) {
                return n < 12 ? "\u5348\u524d" : "\u5348\u5f8c"
            },
            calendar: {
                sameDay: "[\u4eca\u65e5] LT", nextDay: "[\u660e\u65e5] LT", nextWeek: function (n) {
                    return n.week() < this.week() ? "[\u6765\u9031]dddd LT" : "dddd LT"
                }, lastDay: "[\u6628\u65e5] LT", lastWeek: function (n) {
                    return this.week() < n.week() ? "[\u5148\u9031]dddd LT" : "dddd LT"
                }, sameElse: "L"
            },
            dayOfMonthOrdinalParse: /\d{1,2}\u65e5/,
            ordinal: function (n, t) {
                switch (t) {
                    case"d":
                    case"D":
                    case"DDD":
                        return n + "\u65e5";
                    default:
                        return n
                }
            },
            relativeTime: {
                future: "%s\u5f8c",
                past: "%s\u524d",
                s: "\u6570\u79d2",
                ss: "%d\u79d2",
                m: "1\u5206",
                mm: "%d\u5206",
                h: "1\u6642\u9593",
                hh: "%d\u6642\u9593",
                d: "1\u65e5",
                dd: "%d\u65e5",
                M: "1\u30f6\u6708",
                MM: "%d\u30f6\u6708",
                y: "1\u5e74",
                yy: "%d\u5e74"
            }
        })
    }()
},
BVg3: function (n, t, e) {
    !function (n) {
        "use strict";

        function t(n) {
            return n % 100 == 11 || n % 10 != 1
        }

        function o(n, e, o, l) {
            var r = n + " ";
            switch (o) {
                case"s":
                    return e || l ? "nokkrar sek\xfandur" : "nokkrum sek\xfandum";
                case"ss":
                    return t(n) ? r + (e || l ? "sek\xfandur" : "sek\xfandum") : r + "sek\xfanda";
                case"m":
                    return e ? "m\xedn\xfata" : "m\xedn\xfatu";
                case"mm":
                    return t(n) ? r + (e || l ? "m\xedn\xfatur" : "m\xedn\xfatum") : e ? r + "m\xedn\xfata" : r + "m\xedn\xfatu";
                case"hh":
                    return t(n) ? r + (e || l ? "klukkustundir" : "klukkustundum") : r + "klukkustund";
                case"d":
                    return e ? "dagur" : l ? "dag" : "degi";
                case"dd":
                    return t(n) ? e ? r + "dagar" : r + (l ? "daga" : "d\xf6gum") : e ? r + "dagur" : r + (l ? "dag" : "degi");
                case"M":
                    return e ? "m\xe1nu\xf0ur" : l ? "m\xe1nu\xf0" : "m\xe1nu\xf0i";
                case"MM":
                    return t(n) ? e ? r + "m\xe1nu\xf0ir" : r + (l ? "m\xe1nu\xf0i" : "m\xe1nu\xf0um") : e ? r + "m\xe1nu\xf0ur" : r + (l ? "m\xe1nu\xf0" : "m\xe1nu\xf0i");
                case"y":
                    return e || l ? "\xe1r" : "\xe1ri";
                case"yy":
                    return t(n) ? r + (e || l ? "\xe1r" : "\xe1rum") : r + (e || l ? "\xe1r" : "\xe1ri")
            }
        }

        e("wd/R").defineLocale("is", {
            months: "jan\xfaar_febr\xfaar_mars_apr\xedl_ma\xed_j\xfan\xed_j\xfal\xed_\xe1g\xfast_september_okt\xf3ber_n\xf3vember_desember".split("_"),
            monthsShort: "jan_feb_mar_apr_ma\xed_j\xfan_j\xfal_\xe1g\xfa_sep_okt_n\xf3v_des".split("_"),
            weekdays: "sunnudagur_m\xe1nudagur_\xferi\xf0judagur_mi\xf0vikudagur_fimmtudagur_f\xf6studagur_laugardagur".split("_"),
            weekdaysShort: "sun_m\xe1n_\xferi_mi\xf0_fim_f\xf6s_lau".split("_"),
            weekdaysMin: "Su_M\xe1_\xder_Mi_Fi_F\xf6_La".split("_"),
            longDateFormat: {
                LT: "H:mm",
                LTS: "H:mm:ss",
                L: "DD.MM.YYYY",
                LL: "D. MMMM YYYY",
                LLL: "D. MMMM YYYY [kl.] H:mm",
                LLLL: "dddd, D. MMMM YYYY [kl.] H:mm"
            },
            calendar: {
                sameDay: "[\xed dag kl.] LT",
                nextDay: "[\xe1 morgun kl.] LT",
                nextWeek: "dddd [kl.] LT",
                lastDay: "[\xed g\xe6r kl.] LT",
                lastWeek: "[s\xed\xf0asta] dddd [kl.] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "eftir %s",
                past: "fyrir %s s\xed\xf0an",
                s: o,
                ss: o,
                m: o,
                mm: o,
                h: "klukkustund",
                hh: o,
                d: o,
                dd: o,
                M: o,
                MM: o,
                y: o,
                yy: o
            },
            dayOfMonthOrdinalParse: /\d{1,2}\./,
            ordinal: "%d.",
            week: {dow: 1, doy: 4}
        })
    }()
},
ByF4: function (n, t, e) {
    !function (n) {
        "use strict";
        e("wd/R").defineLocale("fo", {
            months: "januar_februar_mars_apr\xedl_mai_juni_juli_august_september_oktober_november_desember".split("_"),
            monthsShort: "jan_feb_mar_apr_mai_jun_jul_aug_sep_okt_nov_des".split("_"),
            weekdays: "sunnudagur_m\xe1nadagur_t\xfdsdagur_mikudagur_h\xf3sdagur_fr\xedggjadagur_leygardagur".split("_"),
            weekdaysShort: "sun_m\xe1n_t\xfds_mik_h\xf3s_fr\xed_ley".split("_"),
            weekdaysMin: "su_m\xe1_t\xfd_mi_h\xf3_fr_le".split("_"),
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY HH:mm",
                LLLL: "dddd D. MMMM, YYYY HH:mm"
            },
            calendar: {
                sameDay: "[\xcd dag kl.] LT",
                nextDay: "[\xcd morgin kl.] LT",
                nextWeek: "dddd [kl.] LT",
                lastDay: "[\xcd gj\xe1r kl.] LT",
                lastWeek: "[s\xed\xf0stu] dddd [kl] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "um %s",
                past: "%s s\xed\xf0ani",
                s: "f\xe1 sekund",
                ss: "%d sekundir",
                m: "ein minuttur",
                mm: "%d minuttir",
                h: "ein t\xedmi",
                hh: "%d t\xedmar",
                d: "ein dagur",
                dd: "%d dagar",
                M: "ein m\xe1na\xf0ur",
                MM: "%d m\xe1na\xf0ir",
                y: "eitt \xe1r",
                yy: "%d \xe1r"
            },
            dayOfMonthOrdinalParse: /\d{1,2}\./,
            ordinal: "%d.",
            week: {dow: 1, doy: 4}
        })
    }()
},
CjzT: function (n, t, e) {
    !function (n) {
        "use strict";
        var t = "ene._feb._mar._abr._may._jun._jul._ago._sep._oct._nov._dic.".split("_"),
            e = "ene_feb_mar_abr_may_jun_jul_ago_sep_oct_nov_dic".split("_"),
            o = [/^ene/i, /^feb/i, /^mar/i, /^abr/i, /^may/i, /^jun/i, /^jul/i, /^ago/i, /^sep/i, /^oct/i, /^nov/i, /^dic/i],
            l = /^(enero|febrero|marzo|abril|mayo|junio|julio|agosto|septiembre|octubre|noviembre|diciembre|ene\.?|feb\.?|mar\.?|abr\.?|may\.?|jun\.?|jul\.?|ago\.?|sep\.?|oct\.?|nov\.?|dic\.?)/i;
        n.defineLocale("es-do", {
            months: "enero_febrero_marzo_abril_mayo_junio_julio_agosto_septiembre_octubre_noviembre_diciembre".split("_"),
            monthsShort: function (n, o) {
                return n ? /-MMM-/.test(o) ? e[n.month()] : t[n.month()] : t
            },
            monthsRegex: l,
            monthsShortRegex: l,
            monthsStrictRegex: /^(enero|febrero|marzo|abril|mayo|junio|julio|agosto|septiembre|octubre|noviembre|diciembre)/i,
            monthsShortStrictRegex: /^(ene\.?|feb\.?|mar\.?|abr\.?|may\.?|jun\.?|jul\.?|ago\.?|sep\.?|oct\.?|nov\.?|dic\.?)/i,
            monthsParse: o,
            longMonthsParse: o,
            shortMonthsParse: o,
            weekdays: "domingo_lunes_martes_mi\xe9rcoles_jueves_viernes_s\xe1bado".split("_"),
            weekdaysShort: "dom._lun._mar._mi\xe9._jue._vie._s\xe1b.".split("_"),
            weekdaysMin: "do_lu_ma_mi_ju_vi_s\xe1".split("_"),
            weekdaysParseExact: !0,
            longDateFormat: {
                LT: "h:mm A",
                LTS: "h:mm:ss A",
                L: "DD/MM/YYYY",
                LL: "D [de] MMMM [de] YYYY",
                LLL: "D [de] MMMM [de] YYYY h:mm A",
                LLLL: "dddd, D [de] MMMM [de] YYYY h:mm A"
            },
            calendar: {
                sameDay: function () {
                    return "[hoy a la" + (1 !== this.hours() ? "s" : "") + "] LT"
                }, nextDay: function () {
                    return "[ma\xf1ana a la" + (1 !== this.hours() ? "s" : "") + "] LT"
                }, nextWeek: function () {
                    return "dddd [a la" + (1 !== this.hours() ? "s" : "") + "] LT"
                }, lastDay: function () {
                    return "[ayer a la" + (1 !== this.hours() ? "s" : "") + "] LT"
                }, lastWeek: function () {
                    return "[el] dddd [pasado a la" + (1 !== this.hours() ? "s" : "") + "] LT"
                }, sameElse: "L"
            },
            relativeTime: {
                future: "en %s",
                past: "hace %s",
                s: "unos segundos",
                ss: "%d segundos",
                m: "un minuto",
                mm: "%d minutos",
                h: "una hora",
                hh: "%d horas",
                d: "un d\xeda",
                dd: "%d d\xedas",
                M: "un mes",
                MM: "%d meses",
                y: "un a\xf1o",
                yy: "%d a\xf1os"
            },
            dayOfMonthOrdinalParse: /\d{1,2}\xba/,
            ordinal: "%d\xba",
            week: {dow: 1, doy: 4}
        })
    }(e("wd/R"))
},
CoRJ: function (n, t, e) {
    !function (n) {
        "use strict";
        e("wd/R").defineLocale("ar-ma", {
            months: "\u064a\u0646\u0627\u064a\u0631_\u0641\u0628\u0631\u0627\u064a\u0631_\u0645\u0627\u0631\u0633_\u0623\u0628\u0631\u064a\u0644_\u0645\u0627\u064a_\u064a\u0648\u0646\u064a\u0648_\u064a\u0648\u0644\u064a\u0648\u0632_\u063a\u0634\u062a_\u0634\u062a\u0646\u0628\u0631_\u0623\u0643\u062a\u0648\u0628\u0631_\u0646\u0648\u0646\u0628\u0631_\u062f\u062c\u0646\u0628\u0631".split("_"),
            monthsShort: "\u064a\u0646\u0627\u064a\u0631_\u0641\u0628\u0631\u0627\u064a\u0631_\u0645\u0627\u0631\u0633_\u0623\u0628\u0631\u064a\u0644_\u0645\u0627\u064a_\u064a\u0648\u0646\u064a\u0648_\u064a\u0648\u0644\u064a\u0648\u0632_\u063a\u0634\u062a_\u0634\u062a\u0646\u0628\u0631_\u0623\u0643\u062a\u0648\u0628\u0631_\u0646\u0648\u0646\u0628\u0631_\u062f\u062c\u0646\u0628\u0631".split("_"),
            weekdays: "\u0627\u0644\u0623\u062d\u062f_\u0627\u0644\u0625\u062a\u0646\u064a\u0646_\u0627\u0644\u062b\u0644\u0627\u062b\u0627\u0621_\u0627\u0644\u0623\u0631\u0628\u0639\u0627\u0621_\u0627\u0644\u062e\u0645\u064a\u0633_\u0627\u0644\u062c\u0645\u0639\u0629_\u0627\u0644\u0633\u0628\u062a".split("_"),
            weekdaysShort: "\u0627\u062d\u062f_\u0627\u062a\u0646\u064a\u0646_\u062b\u0644\u0627\u062b\u0627\u0621_\u0627\u0631\u0628\u0639\u0627\u0621_\u062e\u0645\u064a\u0633_\u062c\u0645\u0639\u0629_\u0633\u0628\u062a".split("_"),
            weekdaysMin: "\u062d_\u0646_\u062b_\u0631_\u062e_\u062c_\u0633".split("_"),
            weekdaysParseExact: !0,
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY HH:mm",
                LLLL: "dddd D MMMM YYYY HH:mm"
            },
            calendar: {
                sameDay: "[\u0627\u0644\u064a\u0648\u0645 \u0639\u0644\u0649 \u0627\u0644\u0633\u0627\u0639\u0629] LT",
                nextDay: "[\u063a\u062f\u0627 \u0639\u0644\u0649 \u0627\u0644\u0633\u0627\u0639\u0629] LT",
                nextWeek: "dddd [\u0639\u0644\u0649 \u0627\u0644\u0633\u0627\u0639\u0629] LT",
                lastDay: "[\u0623\u0645\u0633 \u0639\u0644\u0649 \u0627\u0644\u0633\u0627\u0639\u0629] LT",
                lastWeek: "dddd [\u0639\u0644\u0649 \u0627\u0644\u0633\u0627\u0639\u0629] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "\u0641\u064a %s",
                past: "\u0645\u0646\u0630 %s",
                s: "\u062b\u0648\u0627\u0646",
                ss: "%d \u062b\u0627\u0646\u064a\u0629",
                m: "\u062f\u0642\u064a\u0642\u0629",
                mm: "%d \u062f\u0642\u0627\u0626\u0642",
                h: "\u0633\u0627\u0639\u0629",
                hh: "%d \u0633\u0627\u0639\u0627\u062a",
                d: "\u064a\u0648\u0645",
                dd: "%d \u0623\u064a\u0627\u0645",
                M: "\u0634\u0647\u0631",
                MM: "%d \u0623\u0634\u0647\u0631",
                y: "\u0633\u0646\u0629",
                yy: "%d \u0633\u0646\u0648\u0627\u062a"
            },
            week: {dow: 6, doy: 12}
        })
    }()
},
"D/JM": function (n, t, e) {
    !function (n) {
        "use strict";
        e("wd/R").defineLocale("eu", {
            months: "urtarrila_otsaila_martxoa_apirila_maiatza_ekaina_uztaila_abuztua_iraila_urria_azaroa_abendua".split("_"),
            monthsShort: "urt._ots._mar._api._mai._eka._uzt._abu._ira._urr._aza._abe.".split("_"),
            monthsParseExact: !0,
            weekdays: "igandea_astelehena_asteartea_asteazkena_osteguna_ostirala_larunbata".split("_"),
            weekdaysShort: "ig._al._ar._az._og._ol._lr.".split("_"),
            weekdaysMin: "ig_al_ar_az_og_ol_lr".split("_"),
            weekdaysParseExact: !0,
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "YYYY-MM-DD",
                LL: "YYYY[ko] MMMM[ren] D[a]",
                LLL: "YYYY[ko] MMMM[ren] D[a] HH:mm",
                LLLL: "dddd, YYYY[ko] MMMM[ren] D[a] HH:mm",
                l: "YYYY-M-D",
                ll: "YYYY[ko] MMM D[a]",
                lll: "YYYY[ko] MMM D[a] HH:mm",
                llll: "ddd, YYYY[ko] MMM D[a] HH:mm"
            },
            calendar: {
                sameDay: "[gaur] LT[etan]",
                nextDay: "[bihar] LT[etan]",
                nextWeek: "dddd LT[etan]",
                lastDay: "[atzo] LT[etan]",
                lastWeek: "[aurreko] dddd LT[etan]",
                sameElse: "L"
            },
            relativeTime: {
                future: "%s barru",
                past: "duela %s",
                s: "segundo batzuk",
                ss: "%d segundo",
                m: "minutu bat",
                mm: "%d minutu",
                h: "ordu bat",
                hh: "%d ordu",
                d: "egun bat",
                dd: "%d egun",
                M: "hilabete bat",
                MM: "%d hilabete",
                y: "urte bat",
                yy: "%d urte"
            },
            dayOfMonthOrdinalParse: /\d{1,2}\./,
            ordinal: "%d.",
            week: {dow: 1, doy: 7}
        })
    }()
},
"DKr+": function (n, t, e) {
    !function (n) {
        "use strict";

        function t(n, t, e, o) {
            var l = {
                s: ["thodde secondanim", "thodde second"],
                ss: [n + " secondanim", n + " second"],
                m: ["eka mintan", "ek minute"],
                mm: [n + " mintanim", n + " mintam"],
                h: ["eka voran", "ek vor"],
                hh: [n + " voranim", n + " voram"],
                d: ["eka disan", "ek dis"],
                dd: [n + " disanim", n + " dis"],
                M: ["eka mhoinean", "ek mhoino"],
                MM: [n + " mhoineanim", n + " mhoine"],
                y: ["eka vorsan", "ek voros"],
                yy: [n + " vorsanim", n + " vorsam"]
            };
            return t ? l[e][0] : l[e][1]
        }

        e("wd/R").defineLocale("gom-latn", {
            months: "Janer_Febrer_Mars_Abril_Mai_Jun_Julai_Agost_Setembr_Otubr_Novembr_Dezembr".split("_"),
            monthsShort: "Jan._Feb._Mars_Abr._Mai_Jun_Jul._Ago._Set._Otu._Nov._Dez.".split("_"),
            monthsParseExact: !0,
            weekdays: "Aitar_Somar_Mongllar_Budvar_Brestar_Sukrar_Son'var".split("_"),
            weekdaysShort: "Ait._Som._Mon._Bud._Bre._Suk._Son.".split("_"),
            weekdaysMin: "Ai_Sm_Mo_Bu_Br_Su_Sn".split("_"),
            weekdaysParseExact: !0,
            longDateFormat: {
                LT: "A h:mm [vazta]",
                LTS: "A h:mm:ss [vazta]",
                L: "DD-MM-YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY A h:mm [vazta]",
                LLLL: "dddd, MMMM[achea] Do, YYYY, A h:mm [vazta]",
                llll: "ddd, D MMM YYYY, A h:mm [vazta]"
            },
            calendar: {
                sameDay: "[Aiz] LT",
                nextDay: "[Faleam] LT",
                nextWeek: "[Ieta to] dddd[,] LT",
                lastDay: "[Kal] LT",
                lastWeek: "[Fatlo] dddd[,] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "%s",
                past: "%s adim",
                s: t,
                ss: t,
                m: t,
                mm: t,
                h: t,
                hh: t,
                d: t,
                dd: t,
                M: t,
                MM: t,
                y: t,
                yy: t
            },
            dayOfMonthOrdinalParse: /\d{1,2}(er)/,
            ordinal: function (n, t) {
                switch (t) {
                    case"D":
                        return n + "er";
                    default:
                    case"M":
                    case"Q":
                    case"DDD":
                    case"d":
                    case"w":
                    case"W":
                        return n
                }
            },
            week: {dow: 1, doy: 4},
            meridiemParse: /rati|sokalli|donparam|sanje/,
            meridiemHour: function (n, t) {
                return 12 === n && (n = 0), "rati" === t ? n < 4 ? n : n + 12 : "sokalli" === t ? n : "donparam" === t ? n > 12 ? n : n + 12 : "sanje" === t ? n + 12 : void 0
            },
            meridiem: function (n, t, e) {
                return n < 4 ? "rati" : n < 12 ? "sokalli" : n < 16 ? "donparam" : n < 20 ? "sanje" : "rati"
            }
        })
    }()
},
Dkky: function (n, t, e) {
    !function (n) {
        "use strict";
        e("wd/R").defineLocale("fr-ch", {
            months: "janvier_f\xe9vrier_mars_avril_mai_juin_juillet_ao\xfbt_septembre_octobre_novembre_d\xe9cembre".split("_"),
            monthsShort: "janv._f\xe9vr._mars_avr._mai_juin_juil._ao\xfbt_sept._oct._nov._d\xe9c.".split("_"),
            monthsParseExact: !0,
            weekdays: "dimanche_lundi_mardi_mercredi_jeudi_vendredi_samedi".split("_"),
            weekdaysShort: "dim._lun._mar._mer._jeu._ven._sam.".split("_"),
            weekdaysMin: "di_lu_ma_me_je_ve_sa".split("_"),
            weekdaysParseExact: !0,
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD.MM.YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY HH:mm",
                LLLL: "dddd D MMMM YYYY HH:mm"
            },
            calendar: {
                sameDay: "[Aujourd\u2019hui \xe0] LT",
                nextDay: "[Demain \xe0] LT",
                nextWeek: "dddd [\xe0] LT",
                lastDay: "[Hier \xe0] LT",
                lastWeek: "dddd [dernier \xe0] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "dans %s",
                past: "il y a %s",
                s: "quelques secondes",
                ss: "%d secondes",
                m: "une minute",
                mm: "%d minutes",
                h: "une heure",
                hh: "%d heures",
                d: "un jour",
                dd: "%d jours",
                M: "un mois",
                MM: "%d mois",
                y: "un an",
                yy: "%d ans"
            },
            dayOfMonthOrdinalParse: /\d{1,2}(er|e)/,
            ordinal: function (n, t) {
                switch (t) {
                    default:
                    case"M":
                    case"Q":
                    case"D":
                    case"DDD":
                    case"d":
                        return n + (1 === n ? "er" : "e");
                    case"w":
                    case"W":
                        return n + (1 === n ? "re" : "e")
                }
            },
            week: {dow: 1, doy: 4}
        })
    }()
},
Dmvi: function (n, t, e) {
    !function (n) {
        "use strict";
        e("wd/R").defineLocale("en-au", {
            months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"),
            monthsShort: "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),
            weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),
            weekdaysShort: "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),
            weekdaysMin: "Su_Mo_Tu_We_Th_Fr_Sa".split("_"),
            longDateFormat: {
                LT: "h:mm A",
                LTS: "h:mm:ss A",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY h:mm A",
                LLLL: "dddd, D MMMM YYYY h:mm A"
            },
            calendar: {
                sameDay: "[Today at] LT",
                nextDay: "[Tomorrow at] LT",
                nextWeek: "dddd [at] LT",
                lastDay: "[Yesterday at] LT",
                lastWeek: "[Last] dddd [at] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "in %s",
                past: "%s ago",
                s: "a few seconds",
                ss: "%d seconds",
                m: "a minute",
                mm: "%d minutes",
                h: "an hour",
                hh: "%d hours",
                d: "a day",
                dd: "%d days",
                M: "a month",
                MM: "%d months",
                y: "a year",
                yy: "%d years"
            },
            dayOfMonthOrdinalParse: /\d{1,2}(st|nd|rd|th)/,
            ordinal: function (n) {
                var t = n % 10;
                return n + (1 == ~~(n % 100 / 10) ? "th" : 1 === t ? "st" : 2 === t ? "nd" : 3 === t ? "rd" : "th")
            },
            week: {dow: 1, doy: 4}
        })
    }()
},
DoHr: function (n, t, e) {
    !function (n) {
        "use strict";
        var t = {
            1: "'inci",
            5: "'inci",
            8: "'inci",
            70: "'inci",
            80: "'inci",
            2: "'nci",
            7: "'nci",
            20: "'nci",
            50: "'nci",
            3: "'\xfcnc\xfc",
            4: "'\xfcnc\xfc",
            100: "'\xfcnc\xfc",
            6: "'nc\u0131",
            9: "'uncu",
            10: "'uncu",
            30: "'uncu",
            60: "'\u0131nc\u0131",
            90: "'\u0131nc\u0131"
        };
        n.defineLocale("tr", {
            months: "Ocak_\u015eubat_Mart_Nisan_May\u0131s_Haziran_Temmuz_A\u011fustos_Eyl\xfcl_Ekim_Kas\u0131m_Aral\u0131k".split("_"),
            monthsShort: "Oca_\u015eub_Mar_Nis_May_Haz_Tem_A\u011fu_Eyl_Eki_Kas_Ara".split("_"),
            weekdays: "Pazar_Pazartesi_Sal\u0131_\xc7ar\u015famba_Per\u015fembe_Cuma_Cumartesi".split("_"),
            weekdaysShort: "Paz_Pts_Sal_\xc7ar_Per_Cum_Cts".split("_"),
            weekdaysMin: "Pz_Pt_Sa_\xc7a_Pe_Cu_Ct".split("_"),
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD.MM.YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY HH:mm",
                LLLL: "dddd, D MMMM YYYY HH:mm"
            },
            calendar: {
                sameDay: "[bug\xfcn saat] LT",
                nextDay: "[yar\u0131n saat] LT",
                nextWeek: "[gelecek] dddd [saat] LT",
                lastDay: "[d\xfcn] LT",
                lastWeek: "[ge\xe7en] dddd [saat] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "%s sonra",
                past: "%s \xf6nce",
                s: "birka\xe7 saniye",
                ss: "%d saniye",
                m: "bir dakika",
                mm: "%d dakika",
                h: "bir saat",
                hh: "%d saat",
                d: "bir g\xfcn",
                dd: "%d g\xfcn",
                M: "bir ay",
                MM: "%d ay",
                y: "bir y\u0131l",
                yy: "%d y\u0131l"
            },
            ordinal: function (n, e) {
                switch (e) {
                    case"d":
                    case"D":
                    case"Do":
                    case"DD":
                        return n;
                    default:
                        if (0 === n) return n + "'\u0131nc\u0131";
                        var o = n % 10;
                        return n + (t[o] || t[n % 100 - o] || t[n >= 100 ? 100 : null])
                }
            },
            week: {dow: 1, doy: 7}
        })
    }(e("wd/R"))
},
DxQv: function (n, t, e) {
    !function (n) {
        "use strict";
        e("wd/R").defineLocale("da", {
            months: "januar_februar_marts_april_maj_juni_juli_august_september_oktober_november_december".split("_"),
            monthsShort: "jan_feb_mar_apr_maj_jun_jul_aug_sep_okt_nov_dec".split("_"),
            weekdays: "s\xf8ndag_mandag_tirsdag_onsdag_torsdag_fredag_l\xf8rdag".split("_"),
            weekdaysShort: "s\xf8n_man_tir_ons_tor_fre_l\xf8r".split("_"),
            weekdaysMin: "s\xf8_ma_ti_on_to_fr_l\xf8".split("_"),
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD.MM.YYYY",
                LL: "D. MMMM YYYY",
                LLL: "D. MMMM YYYY HH:mm",
                LLLL: "dddd [d.] D. MMMM YYYY [kl.] HH:mm"
            },
            calendar: {
                sameDay: "[i dag kl.] LT",
                nextDay: "[i morgen kl.] LT",
                nextWeek: "p\xe5 dddd [kl.] LT",
                lastDay: "[i g\xe5r kl.] LT",
                lastWeek: "[i] dddd[s kl.] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "om %s",
                past: "%s siden",
                s: "f\xe5 sekunder",
                ss: "%d sekunder",
                m: "et minut",
                mm: "%d minutter",
                h: "en time",
                hh: "%d timer",
                d: "en dag",
                dd: "%d dage",
                M: "en m\xe5ned",
                MM: "%d m\xe5neder",
                y: "et \xe5r",
                yy: "%d \xe5r"
            },
            dayOfMonthOrdinalParse: /\d{1,2}\./,
            ordinal: "%d.",
            week: {dow: 1, doy: 4}
        })
    }()
},
Dzi0: function (n, t, e) {
    !function (n) {
        "use strict";
        e("wd/R").defineLocale("tl-ph", {
            months: "Enero_Pebrero_Marso_Abril_Mayo_Hunyo_Hulyo_Agosto_Setyembre_Oktubre_Nobyembre_Disyembre".split("_"),
            monthsShort: "Ene_Peb_Mar_Abr_May_Hun_Hul_Ago_Set_Okt_Nob_Dis".split("_"),
            weekdays: "Linggo_Lunes_Martes_Miyerkules_Huwebes_Biyernes_Sabado".split("_"),
            weekdaysShort: "Lin_Lun_Mar_Miy_Huw_Biy_Sab".split("_"),
            weekdaysMin: "Li_Lu_Ma_Mi_Hu_Bi_Sab".split("_"),
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "MM/D/YYYY",
                LL: "MMMM D, YYYY",
                LLL: "MMMM D, YYYY HH:mm",
                LLLL: "dddd, MMMM DD, YYYY HH:mm"
            },
            calendar: {
                sameDay: "LT [ngayong araw]",
                nextDay: "[Bukas ng] LT",
                nextWeek: "LT [sa susunod na] dddd",
                lastDay: "LT [kahapon]",
                lastWeek: "LT [noong nakaraang] dddd",
                sameElse: "L"
            },
            relativeTime: {
                future: "sa loob ng %s",
                past: "%s ang nakalipas",
                s: "ilang segundo",
                ss: "%d segundo",
                m: "isang minuto",
                mm: "%d minuto",
                h: "isang oras",
                hh: "%d oras",
                d: "isang araw",
                dd: "%d araw",
                M: "isang buwan",
                MM: "%d buwan",
                y: "isang taon",
                yy: "%d taon"
            },
            dayOfMonthOrdinalParse: /\d{1,2}/,
            ordinal: function (n) {
                return n
            },
            week: {dow: 1, doy: 4}
        })
    }()
},
"E+lV": function (n, t, e) {
    !function (n) {
        "use strict";
        var t = {
            words: {
                ss: ["\u0441\u0435\u043a\u0443\u043d\u0434\u0430", "\u0441\u0435\u043a\u0443\u043d\u0434\u0435", "\u0441\u0435\u043a\u0443\u043d\u0434\u0438"],
                m: ["\u0458\u0435\u0434\u0430\u043d \u043c\u0438\u043d\u0443\u0442", "\u0458\u0435\u0434\u043d\u0435 \u043c\u0438\u043d\u0443\u0442\u0435"],
                mm: ["\u043c\u0438\u043d\u0443\u0442", "\u043c\u0438\u043d\u0443\u0442\u0435", "\u043c\u0438\u043d\u0443\u0442\u0430"],
                h: ["\u0458\u0435\u0434\u0430\u043d \u0441\u0430\u0442", "\u0458\u0435\u0434\u043d\u043e\u0433 \u0441\u0430\u0442\u0430"],
                hh: ["\u0441\u0430\u0442", "\u0441\u0430\u0442\u0430", "\u0441\u0430\u0442\u0438"],
                dd: ["\u0434\u0430\u043d", "\u0434\u0430\u043d\u0430", "\u0434\u0430\u043d\u0430"],
                MM: ["\u043c\u0435\u0441\u0435\u0446", "\u043c\u0435\u0441\u0435\u0446\u0430", "\u043c\u0435\u0441\u0435\u0446\u0438"],
                yy: ["\u0433\u043e\u0434\u0438\u043d\u0430", "\u0433\u043e\u0434\u0438\u043d\u0435", "\u0433\u043e\u0434\u0438\u043d\u0430"]
            }, correctGrammaticalCase: function (n, t) {
                return 1 === n ? t[0] : n >= 2 && n <= 4 ? t[1] : t[2]
            }, translate: function (n, e, o) {
                var l = t.words[o];
                return 1 === o.length ? e ? l[0] : l[1] : n + " " + t.correctGrammaticalCase(n, l)
            }
        };
        n.defineLocale("sr-cyrl", {
            months: "\u0458\u0430\u043d\u0443\u0430\u0440_\u0444\u0435\u0431\u0440\u0443\u0430\u0440_\u043c\u0430\u0440\u0442_\u0430\u043f\u0440\u0438\u043b_\u043c\u0430\u0458_\u0458\u0443\u043d_\u0458\u0443\u043b_\u0430\u0432\u0433\u0443\u0441\u0442_\u0441\u0435\u043f\u0442\u0435\u043c\u0431\u0430\u0440_\u043e\u043a\u0442\u043e\u0431\u0430\u0440_\u043d\u043e\u0432\u0435\u043c\u0431\u0430\u0440_\u0434\u0435\u0446\u0435\u043c\u0431\u0430\u0440".split("_"),
            monthsShort: "\u0458\u0430\u043d._\u0444\u0435\u0431._\u043c\u0430\u0440._\u0430\u043f\u0440._\u043c\u0430\u0458_\u0458\u0443\u043d_\u0458\u0443\u043b_\u0430\u0432\u0433._\u0441\u0435\u043f._\u043e\u043a\u0442._\u043d\u043e\u0432._\u0434\u0435\u0446.".split("_"),
            monthsParseExact: !0,
            weekdays: "\u043d\u0435\u0434\u0435\u0459\u0430_\u043f\u043e\u043d\u0435\u0434\u0435\u0459\u0430\u043a_\u0443\u0442\u043e\u0440\u0430\u043a_\u0441\u0440\u0435\u0434\u0430_\u0447\u0435\u0442\u0432\u0440\u0442\u0430\u043a_\u043f\u0435\u0442\u0430\u043a_\u0441\u0443\u0431\u043e\u0442\u0430".split("_"),
            weekdaysShort: "\u043d\u0435\u0434._\u043f\u043e\u043d._\u0443\u0442\u043e._\u0441\u0440\u0435._\u0447\u0435\u0442._\u043f\u0435\u0442._\u0441\u0443\u0431.".split("_"),
            weekdaysMin: "\u043d\u0435_\u043f\u043e_\u0443\u0442_\u0441\u0440_\u0447\u0435_\u043f\u0435_\u0441\u0443".split("_"),
            weekdaysParseExact: !0,
            longDateFormat: {
                LT: "H:mm",
                LTS: "H:mm:ss",
                L: "DD.MM.YYYY",
                LL: "D. MMMM YYYY",
                LLL: "D. MMMM YYYY H:mm",
                LLLL: "dddd, D. MMMM YYYY H:mm"
            },
            calendar: {
                sameDay: "[\u0434\u0430\u043d\u0430\u0441 \u0443] LT",
                nextDay: "[\u0441\u0443\u0442\u0440\u0430 \u0443] LT",
                nextWeek: function () {
                    switch (this.day()) {
                        case 0:
                            return "[\u0443] [\u043d\u0435\u0434\u0435\u0459\u0443] [\u0443] LT";
                        case 3:
                            return "[\u0443] [\u0441\u0440\u0435\u0434\u0443] [\u0443] LT";
                        case 6:
                            return "[\u0443] [\u0441\u0443\u0431\u043e\u0442\u0443] [\u0443] LT";
                        case 1:
                        case 2:
                        case 4:
                        case 5:
                            return "[\u0443] dddd [\u0443] LT"
                    }
                },
                lastDay: "[\u0458\u0443\u0447\u0435 \u0443] LT",
                lastWeek: function () {
                    return ["[\u043f\u0440\u043e\u0448\u043b\u0435] [\u043d\u0435\u0434\u0435\u0459\u0435] [\u0443] LT", "[\u043f\u0440\u043e\u0448\u043b\u043e\u0433] [\u043f\u043e\u043d\u0435\u0434\u0435\u0459\u043a\u0430] [\u0443] LT", "[\u043f\u0440\u043e\u0448\u043b\u043e\u0433] [\u0443\u0442\u043e\u0440\u043a\u0430] [\u0443] LT", "[\u043f\u0440\u043e\u0448\u043b\u0435] [\u0441\u0440\u0435\u0434\u0435] [\u0443] LT", "[\u043f\u0440\u043e\u0448\u043b\u043e\u0433] [\u0447\u0435\u0442\u0432\u0440\u0442\u043a\u0430] [\u0443] LT", "[\u043f\u0440\u043e\u0448\u043b\u043e\u0433] [\u043f\u0435\u0442\u043a\u0430] [\u0443] LT", "[\u043f\u0440\u043e\u0448\u043b\u0435] [\u0441\u0443\u0431\u043e\u0442\u0435] [\u0443] LT"][this.day()]
                },
                sameElse: "L"
            },
            relativeTime: {
                future: "\u0437\u0430 %s",
                past: "\u043f\u0440\u0435 %s",
                s: "\u043d\u0435\u043a\u043e\u043b\u0438\u043a\u043e \u0441\u0435\u043a\u0443\u043d\u0434\u0438",
                ss: t.translate,
                m: t.translate,
                mm: t.translate,
                h: t.translate,
                hh: t.translate,
                d: "\u0434\u0430\u043d",
                dd: t.translate,
                M: "\u043c\u0435\u0441\u0435\u0446",
                MM: t.translate,
                y: "\u0433\u043e\u0434\u0438\u043d\u0443",
                yy: t.translate
            },
            dayOfMonthOrdinalParse: /\d{1,2}\./,
            ordinal: "%d.",
            week: {dow: 1, doy: 7}
        })
    }(e("wd/R"))
},
EOgW: function (n, t, e) {
    !function (n) {
        "use strict";
        e("wd/R").defineLocale("th", {
            months: "\u0e21\u0e01\u0e23\u0e32\u0e04\u0e21_\u0e01\u0e38\u0e21\u0e20\u0e32\u0e1e\u0e31\u0e19\u0e18\u0e4c_\u0e21\u0e35\u0e19\u0e32\u0e04\u0e21_\u0e40\u0e21\u0e29\u0e32\u0e22\u0e19_\u0e1e\u0e24\u0e29\u0e20\u0e32\u0e04\u0e21_\u0e21\u0e34\u0e16\u0e38\u0e19\u0e32\u0e22\u0e19_\u0e01\u0e23\u0e01\u0e0e\u0e32\u0e04\u0e21_\u0e2a\u0e34\u0e07\u0e2b\u0e32\u0e04\u0e21_\u0e01\u0e31\u0e19\u0e22\u0e32\u0e22\u0e19_\u0e15\u0e38\u0e25\u0e32\u0e04\u0e21_\u0e1e\u0e24\u0e28\u0e08\u0e34\u0e01\u0e32\u0e22\u0e19_\u0e18\u0e31\u0e19\u0e27\u0e32\u0e04\u0e21".split("_"),
            monthsShort: "\u0e21.\u0e04._\u0e01.\u0e1e._\u0e21\u0e35.\u0e04._\u0e40\u0e21.\u0e22._\u0e1e.\u0e04._\u0e21\u0e34.\u0e22._\u0e01.\u0e04._\u0e2a.\u0e04._\u0e01.\u0e22._\u0e15.\u0e04._\u0e1e.\u0e22._\u0e18.\u0e04.".split("_"),
            monthsParseExact: !0,
            weekdays: "\u0e2d\u0e32\u0e17\u0e34\u0e15\u0e22\u0e4c_\u0e08\u0e31\u0e19\u0e17\u0e23\u0e4c_\u0e2d\u0e31\u0e07\u0e04\u0e32\u0e23_\u0e1e\u0e38\u0e18_\u0e1e\u0e24\u0e2b\u0e31\u0e2a\u0e1a\u0e14\u0e35_\u0e28\u0e38\u0e01\u0e23\u0e4c_\u0e40\u0e2a\u0e32\u0e23\u0e4c".split("_"),
            weekdaysShort: "\u0e2d\u0e32\u0e17\u0e34\u0e15\u0e22\u0e4c_\u0e08\u0e31\u0e19\u0e17\u0e23\u0e4c_\u0e2d\u0e31\u0e07\u0e04\u0e32\u0e23_\u0e1e\u0e38\u0e18_\u0e1e\u0e24\u0e2b\u0e31\u0e2a_\u0e28\u0e38\u0e01\u0e23\u0e4c_\u0e40\u0e2a\u0e32\u0e23\u0e4c".split("_"),
            weekdaysMin: "\u0e2d\u0e32._\u0e08._\u0e2d._\u0e1e._\u0e1e\u0e24._\u0e28._\u0e2a.".split("_"),
            weekdaysParseExact: !0,
            longDateFormat: {
                LT: "H:mm",
                LTS: "H:mm:ss",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY \u0e40\u0e27\u0e25\u0e32 H:mm",
                LLLL: "\u0e27\u0e31\u0e19dddd\u0e17\u0e35\u0e48 D MMMM YYYY \u0e40\u0e27\u0e25\u0e32 H:mm"
            },
            meridiemParse: /\u0e01\u0e48\u0e2d\u0e19\u0e40\u0e17\u0e35\u0e48\u0e22\u0e07|\u0e2b\u0e25\u0e31\u0e07\u0e40\u0e17\u0e35\u0e48\u0e22\u0e07/,
            isPM: function (n) {
                return "\u0e2b\u0e25\u0e31\u0e07\u0e40\u0e17\u0e35\u0e48\u0e22\u0e07" === n
            },
            meridiem: function (n, t, e) {
                return n < 12 ? "\u0e01\u0e48\u0e2d\u0e19\u0e40\u0e17\u0e35\u0e48\u0e22\u0e07" : "\u0e2b\u0e25\u0e31\u0e07\u0e40\u0e17\u0e35\u0e48\u0e22\u0e07"
            },
            calendar: {
                sameDay: "[\u0e27\u0e31\u0e19\u0e19\u0e35\u0e49 \u0e40\u0e27\u0e25\u0e32] LT",
                nextDay: "[\u0e1e\u0e23\u0e38\u0e48\u0e07\u0e19\u0e35\u0e49 \u0e40\u0e27\u0e25\u0e32] LT",
                nextWeek: "dddd[\u0e2b\u0e19\u0e49\u0e32 \u0e40\u0e27\u0e25\u0e32] LT",
                lastDay: "[\u0e40\u0e21\u0e37\u0e48\u0e2d\u0e27\u0e32\u0e19\u0e19\u0e35\u0e49 \u0e40\u0e27\u0e25\u0e32] LT",
                lastWeek: "[\u0e27\u0e31\u0e19]dddd[\u0e17\u0e35\u0e48\u0e41\u0e25\u0e49\u0e27 \u0e40\u0e27\u0e25\u0e32] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "\u0e2d\u0e35\u0e01 %s",
                past: "%s\u0e17\u0e35\u0e48\u0e41\u0e25\u0e49\u0e27",
                s: "\u0e44\u0e21\u0e48\u0e01\u0e35\u0e48\u0e27\u0e34\u0e19\u0e32\u0e17\u0e35",
                ss: "%d \u0e27\u0e34\u0e19\u0e32\u0e17\u0e35",
                m: "1 \u0e19\u0e32\u0e17\u0e35",
                mm: "%d \u0e19\u0e32\u0e17\u0e35",
                h: "1 \u0e0a\u0e31\u0e48\u0e27\u0e42\u0e21\u0e07",
                hh: "%d \u0e0a\u0e31\u0e48\u0e27\u0e42\u0e21\u0e07",
                d: "1 \u0e27\u0e31\u0e19",
                dd: "%d \u0e27\u0e31\u0e19",
                M: "1 \u0e40\u0e14\u0e37\u0e2d\u0e19",
                MM: "%d \u0e40\u0e14\u0e37\u0e2d\u0e19",
                y: "1 \u0e1b\u0e35",
                yy: "%d \u0e1b\u0e35"
            }
        })
    }()
},
G0Uy: function (n, t, e) {
    !function (n) {
        "use strict";
        e("wd/R").defineLocale("mt", {
            months: "Jannar_Frar_Marzu_April_Mejju_\u0120unju_Lulju_Awwissu_Settembru_Ottubru_Novembru_Di\u010bembru".split("_"),
            monthsShort: "Jan_Fra_Mar_Apr_Mej_\u0120un_Lul_Aww_Set_Ott_Nov_Di\u010b".split("_"),
            weekdays: "Il-\u0126add_It-Tnejn_It-Tlieta_L-Erbg\u0127a_Il-\u0126amis_Il-\u0120img\u0127a_Is-Sibt".split("_"),
            weekdaysShort: "\u0126ad_Tne_Tli_Erb_\u0126am_\u0120im_Sib".split("_"),
            weekdaysMin: "\u0126a_Tn_Tl_Er_\u0126a_\u0120i_Si".split("_"),
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY HH:mm",
                LLLL: "dddd, D MMMM YYYY HH:mm"
            },
            calendar: {
                sameDay: "[Illum fil-]LT",
                nextDay: "[G\u0127ada fil-]LT",
                nextWeek: "dddd [fil-]LT",
                lastDay: "[Il-biera\u0127 fil-]LT",
                lastWeek: "dddd [li g\u0127adda] [fil-]LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "f\u2019 %s",
                past: "%s ilu",
                s: "ftit sekondi",
                ss: "%d sekondi",
                m: "minuta",
                mm: "%d minuti",
                h: "sieg\u0127a",
                hh: "%d sieg\u0127at",
                d: "\u0121urnata",
                dd: "%d \u0121ranet",
                M: "xahar",
                MM: "%d xhur",
                y: "sena",
                yy: "%d sni"
            },
            dayOfMonthOrdinalParse: /\d{1,2}\xba/,
            ordinal: "%d\xba",
            week: {dow: 1, doy: 4}
        })
    }()
},
H8ED: function (n, t, e) {
    !function (n) {
        "use strict";

        function t(n, t, e) {
            var o, l;
            return "m" === e ? t ? "\u0445\u0432\u0456\u043b\u0456\u043d\u0430" : "\u0445\u0432\u0456\u043b\u0456\u043d\u0443" : "h" === e ? t ? "\u0433\u0430\u0434\u0437\u0456\u043d\u0430" : "\u0433\u0430\u0434\u0437\u0456\u043d\u0443" : n + " " + (o = +n, l = {
                ss: t ? "\u0441\u0435\u043a\u0443\u043d\u0434\u0430_\u0441\u0435\u043a\u0443\u043d\u0434\u044b_\u0441\u0435\u043a\u0443\u043d\u0434" : "\u0441\u0435\u043a\u0443\u043d\u0434\u0443_\u0441\u0435\u043a\u0443\u043d\u0434\u044b_\u0441\u0435\u043a\u0443\u043d\u0434",
                mm: t ? "\u0445\u0432\u0456\u043b\u0456\u043d\u0430_\u0445\u0432\u0456\u043b\u0456\u043d\u044b_\u0445\u0432\u0456\u043b\u0456\u043d" : "\u0445\u0432\u0456\u043b\u0456\u043d\u0443_\u0445\u0432\u0456\u043b\u0456\u043d\u044b_\u0445\u0432\u0456\u043b\u0456\u043d",
                hh: t ? "\u0433\u0430\u0434\u0437\u0456\u043d\u0430_\u0433\u0430\u0434\u0437\u0456\u043d\u044b_\u0433\u0430\u0434\u0437\u0456\u043d" : "\u0433\u0430\u0434\u0437\u0456\u043d\u0443_\u0433\u0430\u0434\u0437\u0456\u043d\u044b_\u0433\u0430\u0434\u0437\u0456\u043d",
                dd: "\u0434\u0437\u0435\u043d\u044c_\u0434\u043d\u0456_\u0434\u0437\u0451\u043d",
                MM: "\u043c\u0435\u0441\u044f\u0446_\u043c\u0435\u0441\u044f\u0446\u044b_\u043c\u0435\u0441\u044f\u0446\u0430\u045e",
                yy: "\u0433\u043e\u0434_\u0433\u0430\u0434\u044b_\u0433\u0430\u0434\u043e\u045e"
            }[e].split("_"), o % 10 == 1 && o % 100 != 11 ? l[0] : o % 10 >= 2 && o % 10 <= 4 && (o % 100 < 10 || o % 100 >= 20) ? l[1] : l[2])
        }

        e("wd/R").defineLocale("be", {
            months: {
                format: "\u0441\u0442\u0443\u0434\u0437\u0435\u043d\u044f_\u043b\u044e\u0442\u0430\u0433\u0430_\u0441\u0430\u043a\u0430\u0432\u0456\u043a\u0430_\u043a\u0440\u0430\u0441\u0430\u0432\u0456\u043a\u0430_\u0442\u0440\u0430\u045e\u043d\u044f_\u0447\u044d\u0440\u0432\u0435\u043d\u044f_\u043b\u0456\u043f\u0435\u043d\u044f_\u0436\u043d\u0456\u045e\u043d\u044f_\u0432\u0435\u0440\u0430\u0441\u043d\u044f_\u043a\u0430\u0441\u0442\u0440\u044b\u0447\u043d\u0456\u043a\u0430_\u043b\u0456\u0441\u0442\u0430\u043f\u0430\u0434\u0430_\u0441\u043d\u0435\u0436\u043d\u044f".split("_"),
                standalone: "\u0441\u0442\u0443\u0434\u0437\u0435\u043d\u044c_\u043b\u044e\u0442\u044b_\u0441\u0430\u043a\u0430\u0432\u0456\u043a_\u043a\u0440\u0430\u0441\u0430\u0432\u0456\u043a_\u0442\u0440\u0430\u0432\u0435\u043d\u044c_\u0447\u044d\u0440\u0432\u0435\u043d\u044c_\u043b\u0456\u043f\u0435\u043d\u044c_\u0436\u043d\u0456\u0432\u0435\u043d\u044c_\u0432\u0435\u0440\u0430\u0441\u0435\u043d\u044c_\u043a\u0430\u0441\u0442\u0440\u044b\u0447\u043d\u0456\u043a_\u043b\u0456\u0441\u0442\u0430\u043f\u0430\u0434_\u0441\u043d\u0435\u0436\u0430\u043d\u044c".split("_")
            },
            monthsShort: "\u0441\u0442\u0443\u0434_\u043b\u044e\u0442_\u0441\u0430\u043a_\u043a\u0440\u0430\u0441_\u0442\u0440\u0430\u0432_\u0447\u044d\u0440\u0432_\u043b\u0456\u043f_\u0436\u043d\u0456\u0432_\u0432\u0435\u0440_\u043a\u0430\u0441\u0442_\u043b\u0456\u0441\u0442_\u0441\u043d\u0435\u0436".split("_"),
            weekdays: {
                format: "\u043d\u044f\u0434\u0437\u0435\u043b\u044e_\u043f\u0430\u043d\u044f\u0434\u0437\u0435\u043b\u0430\u043a_\u0430\u045e\u0442\u043e\u0440\u0430\u043a_\u0441\u0435\u0440\u0430\u0434\u0443_\u0447\u0430\u0446\u0432\u0435\u0440_\u043f\u044f\u0442\u043d\u0456\u0446\u0443_\u0441\u0443\u0431\u043e\u0442\u0443".split("_"),
                standalone: "\u043d\u044f\u0434\u0437\u0435\u043b\u044f_\u043f\u0430\u043d\u044f\u0434\u0437\u0435\u043b\u0430\u043a_\u0430\u045e\u0442\u043e\u0440\u0430\u043a_\u0441\u0435\u0440\u0430\u0434\u0430_\u0447\u0430\u0446\u0432\u0435\u0440_\u043f\u044f\u0442\u043d\u0456\u0446\u0430_\u0441\u0443\u0431\u043e\u0442\u0430".split("_"),
                isFormat: /\[ ?[\u0423\u0443\u045e] ?(?:\u043c\u0456\u043d\u0443\u043b\u0443\u044e|\u043d\u0430\u0441\u0442\u0443\u043f\u043d\u0443\u044e)? ?\] ?dddd/
            },
            weekdaysShort: "\u043d\u0434_\u043f\u043d_\u0430\u0442_\u0441\u0440_\u0447\u0446_\u043f\u0442_\u0441\u0431".split("_"),
            weekdaysMin: "\u043d\u0434_\u043f\u043d_\u0430\u0442_\u0441\u0440_\u0447\u0446_\u043f\u0442_\u0441\u0431".split("_"),
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD.MM.YYYY",
                LL: "D MMMM YYYY \u0433.",
                LLL: "D MMMM YYYY \u0433., HH:mm",
                LLLL: "dddd, D MMMM YYYY \u0433., HH:mm"
            },
            calendar: {
                sameDay: "[\u0421\u0451\u043d\u043d\u044f \u045e] LT",
                nextDay: "[\u0417\u0430\u045e\u0442\u0440\u0430 \u045e] LT",
                lastDay: "[\u0423\u0447\u043e\u0440\u0430 \u045e] LT",
                nextWeek: function () {
                    return "[\u0423] dddd [\u045e] LT"
                },
                lastWeek: function () {
                    switch (this.day()) {
                        case 0:
                        case 3:
                        case 5:
                        case 6:
                            return "[\u0423 \u043c\u0456\u043d\u0443\u043b\u0443\u044e] dddd [\u045e] LT";
                        case 1:
                        case 2:
                        case 4:
                            return "[\u0423 \u043c\u0456\u043d\u0443\u043b\u044b] dddd [\u045e] LT"
                    }
                },
                sameElse: "L"
            },
            relativeTime: {
                future: "\u043f\u0440\u0430\u0437 %s",
                past: "%s \u0442\u0430\u043c\u0443",
                s: "\u043d\u0435\u043a\u0430\u043b\u044c\u043a\u0456 \u0441\u0435\u043a\u0443\u043d\u0434",
                m: t,
                mm: t,
                h: t,
                hh: t,
                d: "\u0434\u0437\u0435\u043d\u044c",
                dd: t,
                M: "\u043c\u0435\u0441\u044f\u0446",
                MM: t,
                y: "\u0433\u043e\u0434",
                yy: t
            },
            meridiemParse: /\u043d\u043e\u0447\u044b|\u0440\u0430\u043d\u0456\u0446\u044b|\u0434\u043d\u044f|\u0432\u0435\u0447\u0430\u0440\u0430/,
            isPM: function (n) {
                return /^(\u0434\u043d\u044f|\u0432\u0435\u0447\u0430\u0440\u0430)$/.test(n)
            },
            meridiem: function (n, t, e) {
                return n < 4 ? "\u043d\u043e\u0447\u044b" : n < 12 ? "\u0440\u0430\u043d\u0456\u0446\u044b" : n < 17 ? "\u0434\u043d\u044f" : "\u0432\u0435\u0447\u0430\u0440\u0430"
            },
            dayOfMonthOrdinalParse: /\d{1,2}-(\u0456|\u044b|\u0433\u0430)/,
            ordinal: function (n, t) {
                switch (t) {
                    case"M":
                    case"d":
                    case"DDD":
                    case"w":
                    case"W":
                        return n % 10 != 2 && n % 10 != 3 || n % 100 == 12 || n % 100 == 13 ? n + "-\u044b" : n + "-\u0456";
                    case"D":
                        return n + "-\u0433\u0430";
                    default:
                        return n
                }
            },
            week: {dow: 1, doy: 7}
        })
    }()
},
HP3h: function (n, t, e) {
    !function (n) {
        "use strict";
        var t = {1: "1", 2: "2", 3: "3", 4: "4", 5: "5", 6: "6", 7: "7", 8: "8", 9: "9", 0: "0"}, e = function (n) {
                return 0 === n ? 0 : 1 === n ? 1 : 2 === n ? 2 : n % 100 >= 3 && n % 100 <= 10 ? 3 : n % 100 >= 11 ? 4 : 5
            }, o = {
                s: ["\u0623\u0642\u0644 \u0645\u0646 \u062b\u0627\u0646\u064a\u0629", "\u062b\u0627\u0646\u064a\u0629 \u0648\u0627\u062d\u062f\u0629", ["\u062b\u0627\u0646\u064a\u062a\u0627\u0646", "\u062b\u0627\u0646\u064a\u062a\u064a\u0646"], "%d \u062b\u0648\u0627\u0646", "%d \u062b\u0627\u0646\u064a\u0629", "%d \u062b\u0627\u0646\u064a\u0629"],
                m: ["\u0623\u0642\u0644 \u0645\u0646 \u062f\u0642\u064a\u0642\u0629", "\u062f\u0642\u064a\u0642\u0629 \u0648\u0627\u062d\u062f\u0629", ["\u062f\u0642\u064a\u0642\u062a\u0627\u0646", "\u062f\u0642\u064a\u0642\u062a\u064a\u0646"], "%d \u062f\u0642\u0627\u0626\u0642", "%d \u062f\u0642\u064a\u0642\u0629", "%d \u062f\u0642\u064a\u0642\u0629"],
                h: ["\u0623\u0642\u0644 \u0645\u0646 \u0633\u0627\u0639\u0629", "\u0633\u0627\u0639\u0629 \u0648\u0627\u062d\u062f\u0629", ["\u0633\u0627\u0639\u062a\u0627\u0646", "\u0633\u0627\u0639\u062a\u064a\u0646"], "%d \u0633\u0627\u0639\u0627\u062a", "%d \u0633\u0627\u0639\u0629", "%d \u0633\u0627\u0639\u0629"],
                d: ["\u0623\u0642\u0644 \u0645\u0646 \u064a\u0648\u0645", "\u064a\u0648\u0645 \u0648\u0627\u062d\u062f", ["\u064a\u0648\u0645\u0627\u0646", "\u064a\u0648\u0645\u064a\u0646"], "%d \u0623\u064a\u0627\u0645", "%d \u064a\u0648\u0645\u064b\u0627", "%d \u064a\u0648\u0645"],
                M: ["\u0623\u0642\u0644 \u0645\u0646 \u0634\u0647\u0631", "\u0634\u0647\u0631 \u0648\u0627\u062d\u062f", ["\u0634\u0647\u0631\u0627\u0646", "\u0634\u0647\u0631\u064a\u0646"], "%d \u0623\u0634\u0647\u0631", "%d \u0634\u0647\u0631\u0627", "%d \u0634\u0647\u0631"],
                y: ["\u0623\u0642\u0644 \u0645\u0646 \u0639\u0627\u0645", "\u0639\u0627\u0645 \u0648\u0627\u062d\u062f", ["\u0639\u0627\u0645\u0627\u0646", "\u0639\u0627\u0645\u064a\u0646"], "%d \u0623\u0639\u0648\u0627\u0645", "%d \u0639\u0627\u0645\u064b\u0627", "%d \u0639\u0627\u0645"]
            }, l = function (n) {
                return function (t, l, r, i) {
                    var a = e(t), s = o[n][e(t)];
                    return 2 === a && (s = s[l ? 0 : 1]), s.replace(/%d/i, t)
                }
            },
            r = ["\u064a\u0646\u0627\u064a\u0631", "\u0641\u0628\u0631\u0627\u064a\u0631", "\u0645\u0627\u0631\u0633", "\u0623\u0628\u0631\u064a\u0644", "\u0645\u0627\u064a\u0648", "\u064a\u0648\u0646\u064a\u0648", "\u064a\u0648\u0644\u064a\u0648", "\u0623\u063a\u0633\u0637\u0633", "\u0633\u0628\u062a\u0645\u0628\u0631", "\u0623\u0643\u062a\u0648\u0628\u0631", "\u0646\u0648\u0641\u0645\u0628\u0631", "\u062f\u064a\u0633\u0645\u0628\u0631"];
        n.defineLocale("ar-ly", {
            months: r,
            monthsShort: r,
            weekdays: "\u0627\u0644\u0623\u062d\u062f_\u0627\u0644\u0625\u062b\u0646\u064a\u0646_\u0627\u0644\u062b\u0644\u0627\u062b\u0627\u0621_\u0627\u0644\u0623\u0631\u0628\u0639\u0627\u0621_\u0627\u0644\u062e\u0645\u064a\u0633_\u0627\u0644\u062c\u0645\u0639\u0629_\u0627\u0644\u0633\u0628\u062a".split("_"),
            weekdaysShort: "\u0623\u062d\u062f_\u0625\u062b\u0646\u064a\u0646_\u062b\u0644\u0627\u062b\u0627\u0621_\u0623\u0631\u0628\u0639\u0627\u0621_\u062e\u0645\u064a\u0633_\u062c\u0645\u0639\u0629_\u0633\u0628\u062a".split("_"),
            weekdaysMin: "\u062d_\u0646_\u062b_\u0631_\u062e_\u062c_\u0633".split("_"),
            weekdaysParseExact: !0,
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "D/\u200fM/\u200fYYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY HH:mm",
                LLLL: "dddd D MMMM YYYY HH:mm"
            },
            meridiemParse: /\u0635|\u0645/,
            isPM: function (n) {
                return "\u0645" === n
            },
            meridiem: function (n, t, e) {
                return n < 12 ? "\u0635" : "\u0645"
            },
            calendar: {
                sameDay: "[\u0627\u0644\u064a\u0648\u0645 \u0639\u0646\u062f \u0627\u0644\u0633\u0627\u0639\u0629] LT",
                nextDay: "[\u063a\u062f\u064b\u0627 \u0639\u0646\u062f \u0627\u0644\u0633\u0627\u0639\u0629] LT",
                nextWeek: "dddd [\u0639\u0646\u062f \u0627\u0644\u0633\u0627\u0639\u0629] LT",
                lastDay: "[\u0623\u0645\u0633 \u0639\u0646\u062f \u0627\u0644\u0633\u0627\u0639\u0629] LT",
                lastWeek: "dddd [\u0639\u0646\u062f \u0627\u0644\u0633\u0627\u0639\u0629] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "\u0628\u0639\u062f %s",
                past: "\u0645\u0646\u0630 %s",
                s: l("s"),
                ss: l("s"),
                m: l("m"),
                mm: l("m"),
                h: l("h"),
                hh: l("h"),
                d: l("d"),
                dd: l("d"),
                M: l("M"),
                MM: l("M"),
                y: l("y"),
                yy: l("y")
            },
            preparse: function (n) {
                return n.replace(/\u060c/g, ",")
            },
            postformat: function (n) {
                return n.replace(/\d/g, function (n) {
                    return t[n]
                }).replace(/,/g, "\u060c")
            },
            week: {dow: 6, doy: 12}
        })
    }(e("wd/R"))
},
IBtZ: function (n, t, e) {
    !function (n) {
        "use strict";
        e("wd/R").defineLocale("ka", {
            months: {
                standalone: "\u10d8\u10d0\u10dc\u10d5\u10d0\u10e0\u10d8_\u10d7\u10d4\u10d1\u10d4\u10e0\u10d5\u10d0\u10da\u10d8_\u10db\u10d0\u10e0\u10e2\u10d8_\u10d0\u10de\u10e0\u10d8\u10da\u10d8_\u10db\u10d0\u10d8\u10e1\u10d8_\u10d8\u10d5\u10dc\u10d8\u10e1\u10d8_\u10d8\u10d5\u10da\u10d8\u10e1\u10d8_\u10d0\u10d2\u10d5\u10d8\u10e1\u10e2\u10dd_\u10e1\u10d4\u10e5\u10e2\u10d4\u10db\u10d1\u10d4\u10e0\u10d8_\u10dd\u10e5\u10e2\u10dd\u10db\u10d1\u10d4\u10e0\u10d8_\u10dc\u10dd\u10d4\u10db\u10d1\u10d4\u10e0\u10d8_\u10d3\u10d4\u10d9\u10d4\u10db\u10d1\u10d4\u10e0\u10d8".split("_"),
                format: "\u10d8\u10d0\u10dc\u10d5\u10d0\u10e0\u10e1_\u10d7\u10d4\u10d1\u10d4\u10e0\u10d5\u10d0\u10da\u10e1_\u10db\u10d0\u10e0\u10e2\u10e1_\u10d0\u10de\u10e0\u10d8\u10da\u10d8\u10e1_\u10db\u10d0\u10d8\u10e1\u10e1_\u10d8\u10d5\u10dc\u10d8\u10e1\u10e1_\u10d8\u10d5\u10da\u10d8\u10e1\u10e1_\u10d0\u10d2\u10d5\u10d8\u10e1\u10e2\u10e1_\u10e1\u10d4\u10e5\u10e2\u10d4\u10db\u10d1\u10d4\u10e0\u10e1_\u10dd\u10e5\u10e2\u10dd\u10db\u10d1\u10d4\u10e0\u10e1_\u10dc\u10dd\u10d4\u10db\u10d1\u10d4\u10e0\u10e1_\u10d3\u10d4\u10d9\u10d4\u10db\u10d1\u10d4\u10e0\u10e1".split("_")
            },
            monthsShort: "\u10d8\u10d0\u10dc_\u10d7\u10d4\u10d1_\u10db\u10d0\u10e0_\u10d0\u10de\u10e0_\u10db\u10d0\u10d8_\u10d8\u10d5\u10dc_\u10d8\u10d5\u10da_\u10d0\u10d2\u10d5_\u10e1\u10d4\u10e5_\u10dd\u10e5\u10e2_\u10dc\u10dd\u10d4_\u10d3\u10d4\u10d9".split("_"),
            weekdays: {
                standalone: "\u10d9\u10d5\u10d8\u10e0\u10d0_\u10dd\u10e0\u10e8\u10d0\u10d1\u10d0\u10d7\u10d8_\u10e1\u10d0\u10db\u10e8\u10d0\u10d1\u10d0\u10d7\u10d8_\u10dd\u10d7\u10ee\u10e8\u10d0\u10d1\u10d0\u10d7\u10d8_\u10ee\u10e3\u10d7\u10e8\u10d0\u10d1\u10d0\u10d7\u10d8_\u10de\u10d0\u10e0\u10d0\u10e1\u10d9\u10d4\u10d5\u10d8_\u10e8\u10d0\u10d1\u10d0\u10d7\u10d8".split("_"),
                format: "\u10d9\u10d5\u10d8\u10e0\u10d0\u10e1_\u10dd\u10e0\u10e8\u10d0\u10d1\u10d0\u10d7\u10e1_\u10e1\u10d0\u10db\u10e8\u10d0\u10d1\u10d0\u10d7\u10e1_\u10dd\u10d7\u10ee\u10e8\u10d0\u10d1\u10d0\u10d7\u10e1_\u10ee\u10e3\u10d7\u10e8\u10d0\u10d1\u10d0\u10d7\u10e1_\u10de\u10d0\u10e0\u10d0\u10e1\u10d9\u10d4\u10d5\u10e1_\u10e8\u10d0\u10d1\u10d0\u10d7\u10e1".split("_"),
                isFormat: /(\u10ec\u10d8\u10dc\u10d0|\u10e8\u10d4\u10db\u10d3\u10d4\u10d2)/
            },
            weekdaysShort: "\u10d9\u10d5\u10d8_\u10dd\u10e0\u10e8_\u10e1\u10d0\u10db_\u10dd\u10d7\u10ee_\u10ee\u10e3\u10d7_\u10de\u10d0\u10e0_\u10e8\u10d0\u10d1".split("_"),
            weekdaysMin: "\u10d9\u10d5_\u10dd\u10e0_\u10e1\u10d0_\u10dd\u10d7_\u10ee\u10e3_\u10de\u10d0_\u10e8\u10d0".split("_"),
            longDateFormat: {
                LT: "h:mm A",
                LTS: "h:mm:ss A",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY h:mm A",
                LLLL: "dddd, D MMMM YYYY h:mm A"
            },
            calendar: {
                sameDay: "[\u10d3\u10e6\u10d4\u10e1] LT[-\u10d6\u10d4]",
                nextDay: "[\u10ee\u10d5\u10d0\u10da] LT[-\u10d6\u10d4]",
                lastDay: "[\u10d2\u10e3\u10e8\u10d8\u10dc] LT[-\u10d6\u10d4]",
                nextWeek: "[\u10e8\u10d4\u10db\u10d3\u10d4\u10d2] dddd LT[-\u10d6\u10d4]",
                lastWeek: "[\u10ec\u10d8\u10dc\u10d0] dddd LT-\u10d6\u10d4",
                sameElse: "L"
            },
            relativeTime: {
                future: function (n) {
                    return /(\u10ec\u10d0\u10db\u10d8|\u10ec\u10e3\u10d7\u10d8|\u10e1\u10d0\u10d0\u10d7\u10d8|\u10ec\u10d4\u10da\u10d8)/.test(n) ? n.replace(/\u10d8$/, "\u10e8\u10d8") : n + "\u10e8\u10d8"
                },
                past: function (n) {
                    return /(\u10ec\u10d0\u10db\u10d8|\u10ec\u10e3\u10d7\u10d8|\u10e1\u10d0\u10d0\u10d7\u10d8|\u10d3\u10e6\u10d4|\u10d7\u10d5\u10d4)/.test(n) ? n.replace(/(\u10d8|\u10d4)$/, "\u10d8\u10e1 \u10ec\u10d8\u10dc") : /\u10ec\u10d4\u10da\u10d8/.test(n) ? n.replace(/\u10ec\u10d4\u10da\u10d8$/, "\u10ec\u10da\u10d8\u10e1 \u10ec\u10d8\u10dc") : void 0
                },
                s: "\u10e0\u10d0\u10db\u10d3\u10d4\u10dc\u10d8\u10db\u10d4 \u10ec\u10d0\u10db\u10d8",
                ss: "%d \u10ec\u10d0\u10db\u10d8",
                m: "\u10ec\u10e3\u10d7\u10d8",
                mm: "%d \u10ec\u10e3\u10d7\u10d8",
                h: "\u10e1\u10d0\u10d0\u10d7\u10d8",
                hh: "%d \u10e1\u10d0\u10d0\u10d7\u10d8",
                d: "\u10d3\u10e6\u10d4",
                dd: "%d \u10d3\u10e6\u10d4",
                M: "\u10d7\u10d5\u10d4",
                MM: "%d \u10d7\u10d5\u10d4",
                y: "\u10ec\u10d4\u10da\u10d8",
                yy: "%d \u10ec\u10d4\u10da\u10d8"
            },
            dayOfMonthOrdinalParse: /0|1-\u10da\u10d8|\u10db\u10d4-\d{1,2}|\d{1,2}-\u10d4/,
            ordinal: function (n) {
                return 0 === n ? n : 1 === n ? n + "-\u10da\u10d8" : n < 20 || n <= 100 && n % 20 == 0 || n % 100 == 0 ? "\u10db\u10d4-" + n : n + "-\u10d4"
            },
            week: {dow: 1, doy: 7}
        })
    }()
},
"Ivi+": function (n, t, e) {
    !function (n) {
        "use strict";
        e("wd/R").defineLocale("ko", {
            months: "1\uc6d4_2\uc6d4_3\uc6d4_4\uc6d4_5\uc6d4_6\uc6d4_7\uc6d4_8\uc6d4_9\uc6d4_10\uc6d4_11\uc6d4_12\uc6d4".split("_"),
            monthsShort: "1\uc6d4_2\uc6d4_3\uc6d4_4\uc6d4_5\uc6d4_6\uc6d4_7\uc6d4_8\uc6d4_9\uc6d4_10\uc6d4_11\uc6d4_12\uc6d4".split("_"),
            weekdays: "\uc77c\uc694\uc77c_\uc6d4\uc694\uc77c_\ud654\uc694\uc77c_\uc218\uc694\uc77c_\ubaa9\uc694\uc77c_\uae08\uc694\uc77c_\ud1a0\uc694\uc77c".split("_"),
            weekdaysShort: "\uc77c_\uc6d4_\ud654_\uc218_\ubaa9_\uae08_\ud1a0".split("_"),
            weekdaysMin: "\uc77c_\uc6d4_\ud654_\uc218_\ubaa9_\uae08_\ud1a0".split("_"),
            longDateFormat: {
                LT: "A h:mm",
                LTS: "A h:mm:ss",
                L: "YYYY.MM.DD.",
                LL: "YYYY\ub144 MMMM D\uc77c",
                LLL: "YYYY\ub144 MMMM D\uc77c A h:mm",
                LLLL: "YYYY\ub144 MMMM D\uc77c dddd A h:mm",
                l: "YYYY.MM.DD.",
                ll: "YYYY\ub144 MMMM D\uc77c",
                lll: "YYYY\ub144 MMMM D\uc77c A h:mm",
                llll: "YYYY\ub144 MMMM D\uc77c dddd A h:mm"
            },
            calendar: {
                sameDay: "\uc624\ub298 LT",
                nextDay: "\ub0b4\uc77c LT",
                nextWeek: "dddd LT",
                lastDay: "\uc5b4\uc81c LT",
                lastWeek: "\uc9c0\ub09c\uc8fc dddd LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "%s \ud6c4",
                past: "%s \uc804",
                s: "\uba87 \ucd08",
                ss: "%d\ucd08",
                m: "1\ubd84",
                mm: "%d\ubd84",
                h: "\ud55c \uc2dc\uac04",
                hh: "%d\uc2dc\uac04",
                d: "\ud558\ub8e8",
                dd: "%d\uc77c",
                M: "\ud55c \ub2ec",
                MM: "%d\ub2ec",
                y: "\uc77c \ub144",
                yy: "%d\ub144"
            },
            dayOfMonthOrdinalParse: /\d{1,2}(\uc77c|\uc6d4|\uc8fc)/,
            ordinal: function (n, t) {
                switch (t) {
                    case"d":
                    case"D":
                    case"DDD":
                        return n + "\uc77c";
                    case"M":
                        return n + "\uc6d4";
                    case"w":
                    case"W":
                        return n + "\uc8fc";
                    default:
                        return n
                }
            },
            meridiemParse: /\uc624\uc804|\uc624\ud6c4/,
            isPM: function (n) {
                return "\uc624\ud6c4" === n
            },
            meridiem: function (n, t, e) {
                return n < 12 ? "\uc624\uc804" : "\uc624\ud6c4"
            }
        })
    }()
},
"JCF/": function (n, t, e) {
    !function (n) {
        "use strict";
        var t = {
                1: "\u0661",
                2: "\u0662",
                3: "\u0663",
                4: "\u0664",
                5: "\u0665",
                6: "\u0666",
                7: "\u0667",
                8: "\u0668",
                9: "\u0669",
                0: "\u0660"
            }, e = {
                "\u0661": "1",
                "\u0662": "2",
                "\u0663": "3",
                "\u0664": "4",
                "\u0665": "5",
                "\u0666": "6",
                "\u0667": "7",
                "\u0668": "8",
                "\u0669": "9",
                "\u0660": "0"
            },
            o = ["\u06a9\u0627\u0646\u0648\u0646\u06cc \u062f\u0648\u0648\u06d5\u0645", "\u0634\u0648\u0628\u0627\u062a", "\u0626\u0627\u0632\u0627\u0631", "\u0646\u06cc\u0633\u0627\u0646", "\u0626\u0627\u06cc\u0627\u0631", "\u062d\u0648\u0632\u06d5\u06cc\u0631\u0627\u0646", "\u062a\u06d5\u0645\u0645\u0648\u0632", "\u0626\u0627\u0628", "\u0626\u06d5\u06cc\u0644\u0648\u0648\u0644", "\u062a\u0634\u0631\u06cc\u0646\u06cc \u06cc\u06d5\u0643\u06d5\u0645", "\u062a\u0634\u0631\u06cc\u0646\u06cc \u062f\u0648\u0648\u06d5\u0645", "\u0643\u0627\u0646\u0648\u0646\u06cc \u06cc\u06d5\u06a9\u06d5\u0645"];
        n.defineLocale("ku", {
            months: o,
            monthsShort: o,
            weekdays: "\u06cc\u0647\u200c\u0643\u0634\u0647\u200c\u0645\u0645\u0647\u200c_\u062f\u0648\u0648\u0634\u0647\u200c\u0645\u0645\u0647\u200c_\u0633\u06ce\u0634\u0647\u200c\u0645\u0645\u0647\u200c_\u0686\u0648\u0627\u0631\u0634\u0647\u200c\u0645\u0645\u0647\u200c_\u067e\u06ce\u0646\u062c\u0634\u0647\u200c\u0645\u0645\u0647\u200c_\u0647\u0647\u200c\u06cc\u0646\u06cc_\u0634\u0647\u200c\u0645\u0645\u0647\u200c".split("_"),
            weekdaysShort: "\u06cc\u0647\u200c\u0643\u0634\u0647\u200c\u0645_\u062f\u0648\u0648\u0634\u0647\u200c\u0645_\u0633\u06ce\u0634\u0647\u200c\u0645_\u0686\u0648\u0627\u0631\u0634\u0647\u200c\u0645_\u067e\u06ce\u0646\u062c\u0634\u0647\u200c\u0645_\u0647\u0647\u200c\u06cc\u0646\u06cc_\u0634\u0647\u200c\u0645\u0645\u0647\u200c".split("_"),
            weekdaysMin: "\u06cc_\u062f_\u0633_\u0686_\u067e_\u0647_\u0634".split("_"),
            weekdaysParseExact: !0,
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY HH:mm",
                LLLL: "dddd, D MMMM YYYY HH:mm"
            },
            meridiemParse: /\u0626\u06ce\u0648\u0627\u0631\u0647\u200c|\u0628\u0647\u200c\u06cc\u0627\u0646\u06cc/,
            isPM: function (n) {
                return /\u0626\u06ce\u0648\u0627\u0631\u0647\u200c/.test(n)
            },
            meridiem: function (n, t, e) {
                return n < 12 ? "\u0628\u0647\u200c\u06cc\u0627\u0646\u06cc" : "\u0626\u06ce\u0648\u0627\u0631\u0647\u200c"
            },
            calendar: {
                sameDay: "[\u0626\u0647\u200c\u0645\u0631\u06c6 \u0643\u0627\u062a\u0698\u0645\u06ce\u0631] LT",
                nextDay: "[\u0628\u0647\u200c\u06cc\u0627\u0646\u06cc \u0643\u0627\u062a\u0698\u0645\u06ce\u0631] LT",
                nextWeek: "dddd [\u0643\u0627\u062a\u0698\u0645\u06ce\u0631] LT",
                lastDay: "[\u062f\u0648\u06ce\u0646\u06ce \u0643\u0627\u062a\u0698\u0645\u06ce\u0631] LT",
                lastWeek: "dddd [\u0643\u0627\u062a\u0698\u0645\u06ce\u0631] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "\u0644\u0647\u200c %s",
                past: "%s",
                s: "\u0686\u0647\u200c\u0646\u062f \u0686\u0631\u0643\u0647\u200c\u06cc\u0647\u200c\u0643",
                ss: "\u0686\u0631\u0643\u0647\u200c %d",
                m: "\u06cc\u0647\u200c\u0643 \u062e\u0648\u0644\u0647\u200c\u0643",
                mm: "%d \u062e\u0648\u0644\u0647\u200c\u0643",
                h: "\u06cc\u0647\u200c\u0643 \u0643\u0627\u062a\u0698\u0645\u06ce\u0631",
                hh: "%d \u0643\u0627\u062a\u0698\u0645\u06ce\u0631",
                d: "\u06cc\u0647\u200c\u0643 \u0695\u06c6\u0698",
                dd: "%d \u0695\u06c6\u0698",
                M: "\u06cc\u0647\u200c\u0643 \u0645\u0627\u0646\u06af",
                MM: "%d \u0645\u0627\u0646\u06af",
                y: "\u06cc\u0647\u200c\u0643 \u0633\u0627\u06b5",
                yy: "%d \u0633\u0627\u06b5"
            },
            preparse: function (n) {
                return n.replace(/[\u0661\u0662\u0663\u0664\u0665\u0666\u0667\u0668\u0669\u0660]/g, function (n) {
                    return e[n]
                }).replace(/\u060c/g, ",")
            },
            postformat: function (n) {
                return n.replace(/\d/g, function (n) {
                    return t[n]
                }).replace(/,/g, "\u060c")
            },
            week: {dow: 6, doy: 12}
        })
    }(e("wd/R"))
},
JVSJ: function (n, t, e) {
    !function (n) {
        "use strict";

        function t(n, t, e) {
            var o = n + " ";
            switch (e) {
                case"ss":
                    return o + (1 === n ? "sekunda" : 2 === n || 3 === n || 4 === n ? "sekunde" : "sekundi");
                case"m":
                    return t ? "jedna minuta" : "jedne minute";
                case"mm":
                    return o + (1 === n ? "minuta" : 2 === n || 3 === n || 4 === n ? "minute" : "minuta");
                case"h":
                    return t ? "jedan sat" : "jednog sata";
                case"hh":
                    return o + (1 === n ? "sat" : 2 === n || 3 === n || 4 === n ? "sata" : "sati");
                case"dd":
                    return o + (1 === n ? "dan" : "dana");
                case"MM":
                    return o + (1 === n ? "mjesec" : 2 === n || 3 === n || 4 === n ? "mjeseca" : "mjeseci");
                case"yy":
                    return o + (1 === n ? "godina" : 2 === n || 3 === n || 4 === n ? "godine" : "godina")
            }
        }

        e("wd/R").defineLocale("bs", {
            months: "januar_februar_mart_april_maj_juni_juli_august_septembar_oktobar_novembar_decembar".split("_"),
            monthsShort: "jan._feb._mar._apr._maj._jun._jul._aug._sep._okt._nov._dec.".split("_"),
            monthsParseExact: !0,
            weekdays: "nedjelja_ponedjeljak_utorak_srijeda_\u010detvrtak_petak_subota".split("_"),
            weekdaysShort: "ned._pon._uto._sri._\u010det._pet._sub.".split("_"),
            weekdaysMin: "ne_po_ut_sr_\u010de_pe_su".split("_"),
            weekdaysParseExact: !0,
            longDateFormat: {
                LT: "H:mm",
                LTS: "H:mm:ss",
                L: "DD.MM.YYYY",
                LL: "D. MMMM YYYY",
                LLL: "D. MMMM YYYY H:mm",
                LLLL: "dddd, D. MMMM YYYY H:mm"
            },
            calendar: {
                sameDay: "[danas u] LT", nextDay: "[sutra u] LT", nextWeek: function () {
                    switch (this.day()) {
                        case 0:
                            return "[u] [nedjelju] [u] LT";
                        case 3:
                            return "[u] [srijedu] [u] LT";
                        case 6:
                            return "[u] [subotu] [u] LT";
                        case 1:
                        case 2:
                        case 4:
                        case 5:
                            return "[u] dddd [u] LT"
                    }
                }, lastDay: "[ju\u010der u] LT", lastWeek: function () {
                    switch (this.day()) {
                        case 0:
                        case 3:
                            return "[pro\u0161lu] dddd [u] LT";
                        case 6:
                            return "[pro\u0161le] [subote] [u] LT";
                        case 1:
                        case 2:
                        case 4:
                        case 5:
                            return "[pro\u0161li] dddd [u] LT"
                    }
                }, sameElse: "L"
            },
            relativeTime: {
                future: "za %s",
                past: "prije %s",
                s: "par sekundi",
                ss: t,
                m: t,
                mm: t,
                h: t,
                hh: t,
                d: "dan",
                dd: t,
                M: "mjesec",
                MM: t,
                y: "godinu",
                yy: t
            },
            dayOfMonthOrdinalParse: /\d{1,2}\./,
            ordinal: "%d.",
            week: {dow: 1, doy: 7}
        })
    }()
},
JvlW: function (n, t, e) {
    !function (n) {
        "use strict";
        var t = {
            ss: "sekund\u0117_sekund\u017ei\u0173_sekundes",
            m: "minut\u0117_minut\u0117s_minut\u0119",
            mm: "minut\u0117s_minu\u010di\u0173_minutes",
            h: "valanda_valandos_valand\u0105",
            hh: "valandos_valand\u0173_valandas",
            d: "diena_dienos_dien\u0105",
            dd: "dienos_dien\u0173_dienas",
            M: "m\u0117nuo_m\u0117nesio_m\u0117nes\u012f",
            MM: "m\u0117nesiai_m\u0117nesi\u0173_m\u0117nesius",
            y: "metai_met\u0173_metus",
            yy: "metai_met\u0173_metus"
        };

        function e(n, t, e, o) {
            return t ? l(e)[0] : o ? l(e)[1] : l(e)[2]
        }

        function o(n) {
            return n % 10 == 0 || n > 10 && n < 20
        }

        function l(n) {
            return t[n].split("_")
        }

        function r(n, t, r, i) {
            var a = n + " ";
            return 1 === n ? a + e(0, t, r[0], i) : t ? a + (o(n) ? l(r)[1] : l(r)[0]) : i ? a + l(r)[1] : a + (o(n) ? l(r)[1] : l(r)[2])
        }

        n.defineLocale("lt", {
            months: {
                format: "sausio_vasario_kovo_baland\u017eio_gegu\u017e\u0117s_bir\u017eelio_liepos_rugpj\u016b\u010dio_rugs\u0117jo_spalio_lapkri\u010dio_gruod\u017eio".split("_"),
                standalone: "sausis_vasaris_kovas_balandis_gegu\u017e\u0117_bir\u017eelis_liepa_rugpj\u016btis_rugs\u0117jis_spalis_lapkritis_gruodis".split("_"),
                isFormat: /D[oD]?(\[[^\[\]]*\]|\s)+MMMM?|MMMM?(\[[^\[\]]*\]|\s)+D[oD]?/
            },
            monthsShort: "sau_vas_kov_bal_geg_bir_lie_rgp_rgs_spa_lap_grd".split("_"),
            weekdays: {
                format: "sekmadien\u012f_pirmadien\u012f_antradien\u012f_tre\u010diadien\u012f_ketvirtadien\u012f_penktadien\u012f_\u0161e\u0161tadien\u012f".split("_"),
                standalone: "sekmadienis_pirmadienis_antradienis_tre\u010diadienis_ketvirtadienis_penktadienis_\u0161e\u0161tadienis".split("_"),
                isFormat: /dddd HH:mm/
            },
            weekdaysShort: "Sek_Pir_Ant_Tre_Ket_Pen_\u0160e\u0161".split("_"),
            weekdaysMin: "S_P_A_T_K_Pn_\u0160".split("_"),
            weekdaysParseExact: !0,
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "YYYY-MM-DD",
                LL: "YYYY [m.] MMMM D [d.]",
                LLL: "YYYY [m.] MMMM D [d.], HH:mm [val.]",
                LLLL: "YYYY [m.] MMMM D [d.], dddd, HH:mm [val.]",
                l: "YYYY-MM-DD",
                ll: "YYYY [m.] MMMM D [d.]",
                lll: "YYYY [m.] MMMM D [d.], HH:mm [val.]",
                llll: "YYYY [m.] MMMM D [d.], ddd, HH:mm [val.]"
            },
            calendar: {
                sameDay: "[\u0160iandien] LT",
                nextDay: "[Rytoj] LT",
                nextWeek: "dddd LT",
                lastDay: "[Vakar] LT",
                lastWeek: "[Pra\u0117jus\u012f] dddd LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "po %s", past: "prie\u0161 %s", s: function (n, t, e, o) {
                    return t ? "kelios sekund\u0117s" : o ? "keli\u0173 sekund\u017ei\u0173" : "kelias sekundes"
                }, ss: r, m: e, mm: r, h: e, hh: r, d: e, dd: r, M: e, MM: r, y: e, yy: r
            },
            dayOfMonthOrdinalParse: /\d{1,2}-oji/,
            ordinal: function (n) {
                return n + "-oji"
            },
            week: {dow: 1, doy: 4}
        })
    }(e("wd/R"))
},
"K/tc": function (n, t, e) {
    !function (n) {
        "use strict";
        e("wd/R").defineLocale("af", {
            months: "Januarie_Februarie_Maart_April_Mei_Junie_Julie_Augustus_September_Oktober_November_Desember".split("_"),
            monthsShort: "Jan_Feb_Mrt_Apr_Mei_Jun_Jul_Aug_Sep_Okt_Nov_Des".split("_"),
            weekdays: "Sondag_Maandag_Dinsdag_Woensdag_Donderdag_Vrydag_Saterdag".split("_"),
            weekdaysShort: "Son_Maa_Din_Woe_Don_Vry_Sat".split("_"),
            weekdaysMin: "So_Ma_Di_Wo_Do_Vr_Sa".split("_"),
            meridiemParse: /vm|nm/i,
            isPM: function (n) {
                return /^nm$/i.test(n)
            },
            meridiem: function (n, t, e) {
                return n < 12 ? e ? "vm" : "VM" : e ? "nm" : "NM"
            },
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY HH:mm",
                LLLL: "dddd, D MMMM YYYY HH:mm"
            },
            calendar: {
                sameDay: "[Vandag om] LT",
                nextDay: "[M\xf4re om] LT",
                nextWeek: "dddd [om] LT",
                lastDay: "[Gister om] LT",
                lastWeek: "[Laas] dddd [om] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "oor %s",
                past: "%s gelede",
                s: "'n paar sekondes",
                ss: "%d sekondes",
                m: "'n minuut",
                mm: "%d minute",
                h: "'n uur",
                hh: "%d ure",
                d: "'n dag",
                dd: "%d dae",
                M: "'n maand",
                MM: "%d maande",
                y: "'n jaar",
                yy: "%d jaar"
            },
            dayOfMonthOrdinalParse: /\d{1,2}(ste|de)/,
            ordinal: function (n) {
                return n + (1 === n || 8 === n || n >= 20 ? "ste" : "de")
            },
            week: {dow: 1, doy: 4}
        })
    }()
},
KSF8: function (n, t, e) {
    !function (n) {
        "use strict";
        e("wd/R").defineLocale("vi", {
            months: "th\xe1ng 1_th\xe1ng 2_th\xe1ng 3_th\xe1ng 4_th\xe1ng 5_th\xe1ng 6_th\xe1ng 7_th\xe1ng 8_th\xe1ng 9_th\xe1ng 10_th\xe1ng 11_th\xe1ng 12".split("_"),
            monthsShort: "Th01_Th02_Th03_Th04_Th05_Th06_Th07_Th08_Th09_Th10_Th11_Th12".split("_"),
            monthsParseExact: !0,
            weekdays: "ch\u1ee7 nh\u1eadt_th\u1ee9 hai_th\u1ee9 ba_th\u1ee9 t\u01b0_th\u1ee9 n\u0103m_th\u1ee9 s\xe1u_th\u1ee9 b\u1ea3y".split("_"),
            weekdaysShort: "CN_T2_T3_T4_T5_T6_T7".split("_"),
            weekdaysMin: "CN_T2_T3_T4_T5_T6_T7".split("_"),
            weekdaysParseExact: !0,
            meridiemParse: /sa|ch/i,
            isPM: function (n) {
                return /^ch$/i.test(n)
            },
            meridiem: function (n, t, e) {
                return n < 12 ? e ? "sa" : "SA" : e ? "ch" : "CH"
            },
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD/MM/YYYY",
                LL: "D MMMM [n\u0103m] YYYY",
                LLL: "D MMMM [n\u0103m] YYYY HH:mm",
                LLLL: "dddd, D MMMM [n\u0103m] YYYY HH:mm",
                l: "DD/M/YYYY",
                ll: "D MMM YYYY",
                lll: "D MMM YYYY HH:mm",
                llll: "ddd, D MMM YYYY HH:mm"
            },
            calendar: {
                sameDay: "[H\xf4m nay l\xfac] LT",
                nextDay: "[Ng\xe0y mai l\xfac] LT",
                nextWeek: "dddd [tu\u1ea7n t\u1edbi l\xfac] LT",
                lastDay: "[H\xf4m qua l\xfac] LT",
                lastWeek: "dddd [tu\u1ea7n r\u1ed3i l\xfac] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "%s t\u1edbi",
                past: "%s tr\u01b0\u1edbc",
                s: "v\xe0i gi\xe2y",
                ss: "%d gi\xe2y",
                m: "m\u1ed9t ph\xfat",
                mm: "%d ph\xfat",
                h: "m\u1ed9t gi\u1edd",
                hh: "%d gi\u1edd",
                d: "m\u1ed9t ng\xe0y",
                dd: "%d ng\xe0y",
                M: "m\u1ed9t th\xe1ng",
                MM: "%d th\xe1ng",
                y: "m\u1ed9t n\u0103m",
                yy: "%d n\u0103m"
            },
            dayOfMonthOrdinalParse: /\d{1,2}/,
            ordinal: function (n) {
                return n
            },
            week: {dow: 1, doy: 4}
        })
    }()
},
KTz0: function (n, t, e) {
    !function (n) {
        "use strict";
        var t = {
            words: {
                ss: ["sekund", "sekunda", "sekundi"],
                m: ["jedan minut", "jednog minuta"],
                mm: ["minut", "minuta", "minuta"],
                h: ["jedan sat", "jednog sata"],
                hh: ["sat", "sata", "sati"],
                dd: ["dan", "dana", "dana"],
                MM: ["mjesec", "mjeseca", "mjeseci"],
                yy: ["godina", "godine", "godina"]
            }, correctGrammaticalCase: function (n, t) {
                return 1 === n ? t[0] : n >= 2 && n <= 4 ? t[1] : t[2]
            }, translate: function (n, e, o) {
                var l = t.words[o];
                return 1 === o.length ? e ? l[0] : l[1] : n + " " + t.correctGrammaticalCase(n, l)
            }
        };
        n.defineLocale("me", {
            months: "januar_februar_mart_april_maj_jun_jul_avgust_septembar_oktobar_novembar_decembar".split("_"),
            monthsShort: "jan._feb._mar._apr._maj_jun_jul_avg._sep._okt._nov._dec.".split("_"),
            monthsParseExact: !0,
            weekdays: "nedjelja_ponedjeljak_utorak_srijeda_\u010detvrtak_petak_subota".split("_"),
            weekdaysShort: "ned._pon._uto._sri._\u010det._pet._sub.".split("_"),
            weekdaysMin: "ne_po_ut_sr_\u010de_pe_su".split("_"),
            weekdaysParseExact: !0,
            longDateFormat: {
                LT: "H:mm",
                LTS: "H:mm:ss",
                L: "DD.MM.YYYY",
                LL: "D. MMMM YYYY",
                LLL: "D. MMMM YYYY H:mm",
                LLLL: "dddd, D. MMMM YYYY H:mm"
            },
            calendar: {
                sameDay: "[danas u] LT", nextDay: "[sjutra u] LT", nextWeek: function () {
                    switch (this.day()) {
                        case 0:
                            return "[u] [nedjelju] [u] LT";
                        case 3:
                            return "[u] [srijedu] [u] LT";
                        case 6:
                            return "[u] [subotu] [u] LT";
                        case 1:
                        case 2:
                        case 4:
                        case 5:
                            return "[u] dddd [u] LT"
                    }
                }, lastDay: "[ju\u010de u] LT", lastWeek: function () {
                    return ["[pro\u0161le] [nedjelje] [u] LT", "[pro\u0161log] [ponedjeljka] [u] LT", "[pro\u0161log] [utorka] [u] LT", "[pro\u0161le] [srijede] [u] LT", "[pro\u0161log] [\u010detvrtka] [u] LT", "[pro\u0161log] [petka] [u] LT", "[pro\u0161le] [subote] [u] LT"][this.day()]
                }, sameElse: "L"
            },
            relativeTime: {
                future: "za %s",
                past: "prije %s",
                s: "nekoliko sekundi",
                ss: t.translate,
                m: t.translate,
                mm: t.translate,
                h: t.translate,
                hh: t.translate,
                d: "dan",
                dd: t.translate,
                M: "mjesec",
                MM: t.translate,
                y: "godinu",
                yy: t.translate
            },
            dayOfMonthOrdinalParse: /\d{1,2}\./,
            ordinal: "%d.",
            week: {dow: 1, doy: 7}
        })
    }(e("wd/R"))
},
Loxo: function (n, t, e) {
    !function (n) {
        "use strict";
        e("wd/R").defineLocale("uz", {
            months: "\u044f\u043d\u0432\u0430\u0440_\u0444\u0435\u0432\u0440\u0430\u043b_\u043c\u0430\u0440\u0442_\u0430\u043f\u0440\u0435\u043b_\u043c\u0430\u0439_\u0438\u044e\u043d_\u0438\u044e\u043b_\u0430\u0432\u0433\u0443\u0441\u0442_\u0441\u0435\u043d\u0442\u044f\u0431\u0440_\u043e\u043a\u0442\u044f\u0431\u0440_\u043d\u043e\u044f\u0431\u0440_\u0434\u0435\u043a\u0430\u0431\u0440".split("_"),
            monthsShort: "\u044f\u043d\u0432_\u0444\u0435\u0432_\u043c\u0430\u0440_\u0430\u043f\u0440_\u043c\u0430\u0439_\u0438\u044e\u043d_\u0438\u044e\u043b_\u0430\u0432\u0433_\u0441\u0435\u043d_\u043e\u043a\u0442_\u043d\u043e\u044f_\u0434\u0435\u043a".split("_"),
            weekdays: "\u042f\u043a\u0448\u0430\u043d\u0431\u0430_\u0414\u0443\u0448\u0430\u043d\u0431\u0430_\u0421\u0435\u0448\u0430\u043d\u0431\u0430_\u0427\u043e\u0440\u0448\u0430\u043d\u0431\u0430_\u041f\u0430\u0439\u0448\u0430\u043d\u0431\u0430_\u0416\u0443\u043c\u0430_\u0428\u0430\u043d\u0431\u0430".split("_"),
            weekdaysShort: "\u042f\u043a\u0448_\u0414\u0443\u0448_\u0421\u0435\u0448_\u0427\u043e\u0440_\u041f\u0430\u0439_\u0416\u0443\u043c_\u0428\u0430\u043d".split("_"),
            weekdaysMin: "\u042f\u043a_\u0414\u0443_\u0421\u0435_\u0427\u043e_\u041f\u0430_\u0416\u0443_\u0428\u0430".split("_"),
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY HH:mm",
                LLLL: "D MMMM YYYY, dddd HH:mm"
            },
            calendar: {
                sameDay: "[\u0411\u0443\u0433\u0443\u043d \u0441\u043e\u0430\u0442] LT [\u0434\u0430]",
                nextDay: "[\u042d\u0440\u0442\u0430\u0433\u0430] LT [\u0434\u0430]",
                nextWeek: "dddd [\u043a\u0443\u043d\u0438 \u0441\u043e\u0430\u0442] LT [\u0434\u0430]",
                lastDay: "[\u041a\u0435\u0447\u0430 \u0441\u043e\u0430\u0442] LT [\u0434\u0430]",
                lastWeek: "[\u0423\u0442\u0433\u0430\u043d] dddd [\u043a\u0443\u043d\u0438 \u0441\u043e\u0430\u0442] LT [\u0434\u0430]",
                sameElse: "L"
            },
            relativeTime: {
                future: "\u042f\u043a\u0438\u043d %s \u0438\u0447\u0438\u0434\u0430",
                past: "\u0411\u0438\u0440 \u043d\u0435\u0447\u0430 %s \u043e\u043b\u0434\u0438\u043d",
                s: "\u0444\u0443\u0440\u0441\u0430\u0442",
                ss: "%d \u0444\u0443\u0440\u0441\u0430\u0442",
                m: "\u0431\u0438\u0440 \u0434\u0430\u043a\u0438\u043a\u0430",
                mm: "%d \u0434\u0430\u043a\u0438\u043a\u0430",
                h: "\u0431\u0438\u0440 \u0441\u043e\u0430\u0442",
                hh: "%d \u0441\u043e\u0430\u0442",
                d: "\u0431\u0438\u0440 \u043a\u0443\u043d",
                dd: "%d \u043a\u0443\u043d",
                M: "\u0431\u0438\u0440 \u043e\u0439",
                MM: "%d \u043e\u0439",
                y: "\u0431\u0438\u0440 \u0439\u0438\u043b",
                yy: "%d \u0439\u0438\u043b"
            },
            week: {dow: 1, doy: 7}
        })
    }()
},
OIYi: function (n, t, e) {
    !function (n) {
        "use strict";
        e("wd/R").defineLocale("en-ca", {
            months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"),
            monthsShort: "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),
            weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),
            weekdaysShort: "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),
            weekdaysMin: "Su_Mo_Tu_We_Th_Fr_Sa".split("_"),
            longDateFormat: {
                LT: "h:mm A",
                LTS: "h:mm:ss A",
                L: "YYYY-MM-DD",
                LL: "MMMM D, YYYY",
                LLL: "MMMM D, YYYY h:mm A",
                LLLL: "dddd, MMMM D, YYYY h:mm A"
            },
            calendar: {
                sameDay: "[Today at] LT",
                nextDay: "[Tomorrow at] LT",
                nextWeek: "dddd [at] LT",
                lastDay: "[Yesterday at] LT",
                lastWeek: "[Last] dddd [at] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "in %s",
                past: "%s ago",
                s: "a few seconds",
                ss: "%d seconds",
                m: "a minute",
                mm: "%d minutes",
                h: "an hour",
                hh: "%d hours",
                d: "a day",
                dd: "%d days",
                M: "a month",
                MM: "%d months",
                y: "a year",
                yy: "%d years"
            },
            dayOfMonthOrdinalParse: /\d{1,2}(st|nd|rd|th)/,
            ordinal: function (n) {
                var t = n % 10;
                return n + (1 == ~~(n % 100 / 10) ? "th" : 1 === t ? "st" : 2 === t ? "nd" : 3 === t ? "rd" : "th")
            }
        })
    }()
},
Oaa7: function (n, t, e) {
    !function (n) {
        "use strict";
        e("wd/R").defineLocale("en-gb", {
            months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"),
            monthsShort: "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),
            weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),
            weekdaysShort: "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),
            weekdaysMin: "Su_Mo_Tu_We_Th_Fr_Sa".split("_"),
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY HH:mm",
                LLLL: "dddd, D MMMM YYYY HH:mm"
            },
            calendar: {
                sameDay: "[Today at] LT",
                nextDay: "[Tomorrow at] LT",
                nextWeek: "dddd [at] LT",
                lastDay: "[Yesterday at] LT",
                lastWeek: "[Last] dddd [at] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "in %s",
                past: "%s ago",
                s: "a few seconds",
                ss: "%d seconds",
                m: "a minute",
                mm: "%d minutes",
                h: "an hour",
                hh: "%d hours",
                d: "a day",
                dd: "%d days",
                M: "a month",
                MM: "%d months",
                y: "a year",
                yy: "%d years"
            },
            dayOfMonthOrdinalParse: /\d{1,2}(st|nd|rd|th)/,
            ordinal: function (n) {
                var t = n % 10;
                return n + (1 == ~~(n % 100 / 10) ? "th" : 1 === t ? "st" : 2 === t ? "nd" : 3 === t ? "rd" : "th")
            },
            week: {dow: 1, doy: 4}
        })
    }()
},
Ob0Z: function (n, t, e) {
    !function (n) {
        "use strict";
        var t = {
            1: "\u0967",
            2: "\u0968",
            3: "\u0969",
            4: "\u096a",
            5: "\u096b",
            6: "\u096c",
            7: "\u096d",
            8: "\u096e",
            9: "\u096f",
            0: "\u0966"
        }, e = {
            "\u0967": "1",
            "\u0968": "2",
            "\u0969": "3",
            "\u096a": "4",
            "\u096b": "5",
            "\u096c": "6",
            "\u096d": "7",
            "\u096e": "8",
            "\u096f": "9",
            "\u0966": "0"
        };

        function o(n, t, e, o) {
            var l = "";
            if (t) switch (e) {
                case"s":
                    l = "\u0915\u093e\u0939\u0940 \u0938\u0947\u0915\u0902\u0926";
                    break;
                case"ss":
                    l = "%d \u0938\u0947\u0915\u0902\u0926";
                    break;
                case"m":
                    l = "\u090f\u0915 \u092e\u093f\u0928\u093f\u091f";
                    break;
                case"mm":
                    l = "%d \u092e\u093f\u0928\u093f\u091f\u0947";
                    break;
                case"h":
                    l = "\u090f\u0915 \u0924\u093e\u0938";
                    break;
                case"hh":
                    l = "%d \u0924\u093e\u0938";
                    break;
                case"d":
                    l = "\u090f\u0915 \u0926\u093f\u0935\u0938";
                    break;
                case"dd":
                    l = "%d \u0926\u093f\u0935\u0938";
                    break;
                case"M":
                    l = "\u090f\u0915 \u092e\u0939\u093f\u0928\u093e";
                    break;
                case"MM":
                    l = "%d \u092e\u0939\u093f\u0928\u0947";
                    break;
                case"y":
                    l = "\u090f\u0915 \u0935\u0930\u094d\u0937";
                    break;
                case"yy":
                    l = "%d \u0935\u0930\u094d\u0937\u0947"
            } else switch (e) {
                case"s":
                    l = "\u0915\u093e\u0939\u0940 \u0938\u0947\u0915\u0902\u0926\u093e\u0902";
                    break;
                case"ss":
                    l = "%d \u0938\u0947\u0915\u0902\u0926\u093e\u0902";
                    break;
                case"m":
                    l = "\u090f\u0915\u093e \u092e\u093f\u0928\u093f\u091f\u093e";
                    break;
                case"mm":
                    l = "%d \u092e\u093f\u0928\u093f\u091f\u093e\u0902";
                    break;
                case"h":
                    l = "\u090f\u0915\u093e \u0924\u093e\u0938\u093e";
                    break;
                case"hh":
                    l = "%d \u0924\u093e\u0938\u093e\u0902";
                    break;
                case"d":
                    l = "\u090f\u0915\u093e \u0926\u093f\u0935\u0938\u093e";
                    break;
                case"dd":
                    l = "%d \u0926\u093f\u0935\u0938\u093e\u0902";
                    break;
                case"M":
                    l = "\u090f\u0915\u093e \u092e\u0939\u093f\u0928\u094d\u092f\u093e";
                    break;
                case"MM":
                    l = "%d \u092e\u0939\u093f\u0928\u094d\u092f\u093e\u0902";
                    break;
                case"y":
                    l = "\u090f\u0915\u093e \u0935\u0930\u094d\u0937\u093e";
                    break;
                case"yy":
                    l = "%d \u0935\u0930\u094d\u0937\u093e\u0902"
            }
            return l.replace(/%d/i, n)
        }

        n.defineLocale("mr", {
            months: "\u091c\u093e\u0928\u0947\u0935\u093e\u0930\u0940_\u092b\u0947\u092c\u094d\u0930\u0941\u0935\u093e\u0930\u0940_\u092e\u093e\u0930\u094d\u091a_\u090f\u092a\u094d\u0930\u093f\u0932_\u092e\u0947_\u091c\u0942\u0928_\u091c\u0941\u0932\u0948_\u0911\u0917\u0938\u094d\u091f_\u0938\u092a\u094d\u091f\u0947\u0902\u092c\u0930_\u0911\u0915\u094d\u091f\u094b\u092c\u0930_\u0928\u094b\u0935\u094d\u0939\u0947\u0902\u092c\u0930_\u0921\u093f\u0938\u0947\u0902\u092c\u0930".split("_"),
            monthsShort: "\u091c\u093e\u0928\u0947._\u092b\u0947\u092c\u094d\u0930\u0941._\u092e\u093e\u0930\u094d\u091a._\u090f\u092a\u094d\u0930\u093f._\u092e\u0947._\u091c\u0942\u0928._\u091c\u0941\u0932\u0948._\u0911\u0917._\u0938\u092a\u094d\u091f\u0947\u0902._\u0911\u0915\u094d\u091f\u094b._\u0928\u094b\u0935\u094d\u0939\u0947\u0902._\u0921\u093f\u0938\u0947\u0902.".split("_"),
            monthsParseExact: !0,
            weekdays: "\u0930\u0935\u093f\u0935\u093e\u0930_\u0938\u094b\u092e\u0935\u093e\u0930_\u092e\u0902\u0917\u0933\u0935\u093e\u0930_\u092c\u0941\u0927\u0935\u093e\u0930_\u0917\u0941\u0930\u0942\u0935\u093e\u0930_\u0936\u0941\u0915\u094d\u0930\u0935\u093e\u0930_\u0936\u0928\u093f\u0935\u093e\u0930".split("_"),
            weekdaysShort: "\u0930\u0935\u093f_\u0938\u094b\u092e_\u092e\u0902\u0917\u0933_\u092c\u0941\u0927_\u0917\u0941\u0930\u0942_\u0936\u0941\u0915\u094d\u0930_\u0936\u0928\u093f".split("_"),
            weekdaysMin: "\u0930_\u0938\u094b_\u092e\u0902_\u092c\u0941_\u0917\u0941_\u0936\u0941_\u0936".split("_"),
            longDateFormat: {
                LT: "A h:mm \u0935\u093e\u091c\u0924\u093e",
                LTS: "A h:mm:ss \u0935\u093e\u091c\u0924\u093e",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY, A h:mm \u0935\u093e\u091c\u0924\u093e",
                LLLL: "dddd, D MMMM YYYY, A h:mm \u0935\u093e\u091c\u0924\u093e"
            },
            calendar: {
                sameDay: "[\u0906\u091c] LT",
                nextDay: "[\u0909\u0926\u094d\u092f\u093e] LT",
                nextWeek: "dddd, LT",
                lastDay: "[\u0915\u093e\u0932] LT",
                lastWeek: "[\u092e\u093e\u0917\u0940\u0932] dddd, LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "%s\u092e\u0927\u094d\u092f\u0947",
                past: "%s\u092a\u0942\u0930\u094d\u0935\u0940",
                s: o,
                ss: o,
                m: o,
                mm: o,
                h: o,
                hh: o,
                d: o,
                dd: o,
                M: o,
                MM: o,
                y: o,
                yy: o
            },
            preparse: function (n) {
                return n.replace(/[\u0967\u0968\u0969\u096a\u096b\u096c\u096d\u096e\u096f\u0966]/g, function (n) {
                    return e[n]
                })
            },
            postformat: function (n) {
                return n.replace(/\d/g, function (n) {
                    return t[n]
                })
            },
            meridiemParse: /\u0930\u093e\u0924\u094d\u0930\u0940|\u0938\u0915\u093e\u0933\u0940|\u0926\u0941\u092a\u093e\u0930\u0940|\u0938\u093e\u092f\u0902\u0915\u093e\u0933\u0940/,
            meridiemHour: function (n, t) {
                return 12 === n && (n = 0), "\u0930\u093e\u0924\u094d\u0930\u0940" === t ? n < 4 ? n : n + 12 : "\u0938\u0915\u093e\u0933\u0940" === t ? n : "\u0926\u0941\u092a\u093e\u0930\u0940" === t ? n >= 10 ? n : n + 12 : "\u0938\u093e\u092f\u0902\u0915\u093e\u0933\u0940" === t ? n + 12 : void 0
            },
            meridiem: function (n, t, e) {
                return n < 4 ? "\u0930\u093e\u0924\u094d\u0930\u0940" : n < 10 ? "\u0938\u0915\u093e\u0933\u0940" : n < 17 ? "\u0926\u0941\u092a\u093e\u0930\u0940" : n < 20 ? "\u0938\u093e\u092f\u0902\u0915\u093e\u0933\u0940" : "\u0930\u093e\u0924\u094d\u0930\u0940"
            },
            week: {dow: 0, doy: 6}
        })
    }(e("wd/R"))
},
OjkT: function (n, t, e) {
    !function (n) {
        "use strict";
        var t = {
            1: "\u0967",
            2: "\u0968",
            3: "\u0969",
            4: "\u096a",
            5: "\u096b",
            6: "\u096c",
            7: "\u096d",
            8: "\u096e",
            9: "\u096f",
            0: "\u0966"
        }, e = {
            "\u0967": "1",
            "\u0968": "2",
            "\u0969": "3",
            "\u096a": "4",
            "\u096b": "5",
            "\u096c": "6",
            "\u096d": "7",
            "\u096e": "8",
            "\u096f": "9",
            "\u0966": "0"
        };
        n.defineLocale("ne", {
            months: "\u091c\u0928\u0935\u0930\u0940_\u092b\u0947\u092c\u094d\u0930\u0941\u0935\u0930\u0940_\u092e\u093e\u0930\u094d\u091a_\u0905\u092a\u094d\u0930\u093f\u0932_\u092e\u0908_\u091c\u0941\u0928_\u091c\u0941\u0932\u093e\u0908_\u0905\u0917\u0937\u094d\u091f_\u0938\u0947\u092a\u094d\u091f\u0947\u092e\u094d\u092c\u0930_\u0905\u0915\u094d\u091f\u094b\u092c\u0930_\u0928\u094b\u092d\u0947\u092e\u094d\u092c\u0930_\u0921\u093f\u0938\u0947\u092e\u094d\u092c\u0930".split("_"),
            monthsShort: "\u091c\u0928._\u092b\u0947\u092c\u094d\u0930\u0941._\u092e\u093e\u0930\u094d\u091a_\u0905\u092a\u094d\u0930\u093f._\u092e\u0908_\u091c\u0941\u0928_\u091c\u0941\u0932\u093e\u0908._\u0905\u0917._\u0938\u0947\u092a\u094d\u091f._\u0905\u0915\u094d\u091f\u094b._\u0928\u094b\u092d\u0947._\u0921\u093f\u0938\u0947.".split("_"),
            monthsParseExact: !0,
            weekdays: "\u0906\u0907\u0924\u092c\u093e\u0930_\u0938\u094b\u092e\u092c\u093e\u0930_\u092e\u0919\u094d\u0917\u0932\u092c\u093e\u0930_\u092c\u0941\u0927\u092c\u093e\u0930_\u092c\u093f\u0939\u093f\u092c\u093e\u0930_\u0936\u0941\u0915\u094d\u0930\u092c\u093e\u0930_\u0936\u0928\u093f\u092c\u093e\u0930".split("_"),
            weekdaysShort: "\u0906\u0907\u0924._\u0938\u094b\u092e._\u092e\u0919\u094d\u0917\u0932._\u092c\u0941\u0927._\u092c\u093f\u0939\u093f._\u0936\u0941\u0915\u094d\u0930._\u0936\u0928\u093f.".split("_"),
            weekdaysMin: "\u0906._\u0938\u094b._\u092e\u0902._\u092c\u0941._\u092c\u093f._\u0936\u0941._\u0936.".split("_"),
            weekdaysParseExact: !0,
            longDateFormat: {
                LT: "A\u0915\u094b h:mm \u092c\u091c\u0947",
                LTS: "A\u0915\u094b h:mm:ss \u092c\u091c\u0947",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY, A\u0915\u094b h:mm \u092c\u091c\u0947",
                LLLL: "dddd, D MMMM YYYY, A\u0915\u094b h:mm \u092c\u091c\u0947"
            },
            preparse: function (n) {
                return n.replace(/[\u0967\u0968\u0969\u096a\u096b\u096c\u096d\u096e\u096f\u0966]/g, function (n) {
                    return e[n]
                })
            },
            postformat: function (n) {
                return n.replace(/\d/g, function (n) {
                    return t[n]
                })
            },
            meridiemParse: /\u0930\u093e\u0924\u093f|\u092c\u093f\u0939\u093e\u0928|\u0926\u093f\u0909\u0901\u0938\u094b|\u0938\u093e\u0901\u091d/,
            meridiemHour: function (n, t) {
                return 12 === n && (n = 0), "\u0930\u093e\u0924\u093f" === t ? n < 4 ? n : n + 12 : "\u092c\u093f\u0939\u093e\u0928" === t ? n : "\u0926\u093f\u0909\u0901\u0938\u094b" === t ? n >= 10 ? n : n + 12 : "\u0938\u093e\u0901\u091d" === t ? n + 12 : void 0
            },
            meridiem: function (n, t, e) {
                return n < 3 ? "\u0930\u093e\u0924\u093f" : n < 12 ? "\u092c\u093f\u0939\u093e\u0928" : n < 16 ? "\u0926\u093f\u0909\u0901\u0938\u094b" : n < 20 ? "\u0938\u093e\u0901\u091d" : "\u0930\u093e\u0924\u093f"
            },
            calendar: {
                sameDay: "[\u0906\u091c] LT",
                nextDay: "[\u092d\u094b\u0932\u093f] LT",
                nextWeek: "[\u0906\u0909\u0901\u0926\u094b] dddd[,] LT",
                lastDay: "[\u0939\u093f\u091c\u094b] LT",
                lastWeek: "[\u0917\u090f\u0915\u094b] dddd[,] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "%s\u092e\u093e",
                past: "%s \u0905\u0917\u093e\u0921\u093f",
                s: "\u0915\u0947\u0939\u0940 \u0915\u094d\u0937\u0923",
                ss: "%d \u0938\u0947\u0915\u0947\u0923\u094d\u0921",
                m: "\u090f\u0915 \u092e\u093f\u0928\u0947\u091f",
                mm: "%d \u092e\u093f\u0928\u0947\u091f",
                h: "\u090f\u0915 \u0918\u0923\u094d\u091f\u093e",
                hh: "%d \u0918\u0923\u094d\u091f\u093e",
                d: "\u090f\u0915 \u0926\u093f\u0928",
                dd: "%d \u0926\u093f\u0928",
                M: "\u090f\u0915 \u092e\u0939\u093f\u0928\u093e",
                MM: "%d \u092e\u0939\u093f\u0928\u093e",
                y: "\u090f\u0915 \u092c\u0930\u094d\u0937",
                yy: "%d \u092c\u0930\u094d\u0937"
            },
            week: {dow: 0, doy: 6}
        })
    }(e("wd/R"))
},
Oxv6: function (n, t, e) {
    !function (n) {
        "use strict";
        var t = {
            0: "-\u0443\u043c",
            1: "-\u0443\u043c",
            2: "-\u044e\u043c",
            3: "-\u044e\u043c",
            4: "-\u0443\u043c",
            5: "-\u0443\u043c",
            6: "-\u0443\u043c",
            7: "-\u0443\u043c",
            8: "-\u0443\u043c",
            9: "-\u0443\u043c",
            10: "-\u0443\u043c",
            12: "-\u0443\u043c",
            13: "-\u0443\u043c",
            20: "-\u0443\u043c",
            30: "-\u044e\u043c",
            40: "-\u0443\u043c",
            50: "-\u0443\u043c",
            60: "-\u0443\u043c",
            70: "-\u0443\u043c",
            80: "-\u0443\u043c",
            90: "-\u0443\u043c",
            100: "-\u0443\u043c"
        };
        n.defineLocale("tg", {
            months: "\u044f\u043d\u0432\u0430\u0440_\u0444\u0435\u0432\u0440\u0430\u043b_\u043c\u0430\u0440\u0442_\u0430\u043f\u0440\u0435\u043b_\u043c\u0430\u0439_\u0438\u044e\u043d_\u0438\u044e\u043b_\u0430\u0432\u0433\u0443\u0441\u0442_\u0441\u0435\u043d\u0442\u044f\u0431\u0440_\u043e\u043a\u0442\u044f\u0431\u0440_\u043d\u043e\u044f\u0431\u0440_\u0434\u0435\u043a\u0430\u0431\u0440".split("_"),
            monthsShort: "\u044f\u043d\u0432_\u0444\u0435\u0432_\u043c\u0430\u0440_\u0430\u043f\u0440_\u043c\u0430\u0439_\u0438\u044e\u043d_\u0438\u044e\u043b_\u0430\u0432\u0433_\u0441\u0435\u043d_\u043e\u043a\u0442_\u043d\u043e\u044f_\u0434\u0435\u043a".split("_"),
            weekdays: "\u044f\u043a\u0448\u0430\u043d\u0431\u0435_\u0434\u0443\u0448\u0430\u043d\u0431\u0435_\u0441\u0435\u0448\u0430\u043d\u0431\u0435_\u0447\u043e\u0440\u0448\u0430\u043d\u0431\u0435_\u043f\u0430\u043d\u04b7\u0448\u0430\u043d\u0431\u0435_\u04b7\u0443\u043c\u044a\u0430_\u0448\u0430\u043d\u0431\u0435".split("_"),
            weekdaysShort: "\u044f\u0448\u0431_\u0434\u0448\u0431_\u0441\u0448\u0431_\u0447\u0448\u0431_\u043f\u0448\u0431_\u04b7\u0443\u043c_\u0448\u043d\u0431".split("_"),
            weekdaysMin: "\u044f\u0448_\u0434\u0448_\u0441\u0448_\u0447\u0448_\u043f\u0448_\u04b7\u043c_\u0448\u0431".split("_"),
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY HH:mm",
                LLLL: "dddd, D MMMM YYYY HH:mm"
            },
            calendar: {
                sameDay: "[\u0418\u043c\u0440\u04ef\u0437 \u0441\u043e\u0430\u0442\u0438] LT",
                nextDay: "[\u041f\u0430\u0433\u043e\u04b3 \u0441\u043e\u0430\u0442\u0438] LT",
                lastDay: "[\u0414\u0438\u0440\u04ef\u0437 \u0441\u043e\u0430\u0442\u0438] LT",
                nextWeek: "dddd[\u0438] [\u04b3\u0430\u0444\u0442\u0430\u0438 \u043e\u044f\u043d\u0434\u0430 \u0441\u043e\u0430\u0442\u0438] LT",
                lastWeek: "dddd[\u0438] [\u04b3\u0430\u0444\u0442\u0430\u0438 \u0433\u0443\u0437\u0430\u0448\u0442\u0430 \u0441\u043e\u0430\u0442\u0438] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "\u0431\u0430\u044a\u0434\u0438 %s",
                past: "%s \u043f\u0435\u0448",
                s: "\u044f\u043a\u0447\u0430\u043d\u0434 \u0441\u043e\u043d\u0438\u044f",
                m: "\u044f\u043a \u0434\u0430\u049b\u0438\u049b\u0430",
                mm: "%d \u0434\u0430\u049b\u0438\u049b\u0430",
                h: "\u044f\u043a \u0441\u043e\u0430\u0442",
                hh: "%d \u0441\u043e\u0430\u0442",
                d: "\u044f\u043a \u0440\u04ef\u0437",
                dd: "%d \u0440\u04ef\u0437",
                M: "\u044f\u043a \u043c\u043e\u04b3",
                MM: "%d \u043c\u043e\u04b3",
                y: "\u044f\u043a \u0441\u043e\u043b",
                yy: "%d \u0441\u043e\u043b"
            },
            meridiemParse: /\u0448\u0430\u0431|\u0441\u0443\u0431\u04b3|\u0440\u04ef\u0437|\u0431\u0435\u0433\u043e\u04b3/,
            meridiemHour: function (n, t) {
                return 12 === n && (n = 0), "\u0448\u0430\u0431" === t ? n < 4 ? n : n + 12 : "\u0441\u0443\u0431\u04b3" === t ? n : "\u0440\u04ef\u0437" === t ? n >= 11 ? n : n + 12 : "\u0431\u0435\u0433\u043e\u04b3" === t ? n + 12 : void 0
            },
            meridiem: function (n, t, e) {
                return n < 4 ? "\u0448\u0430\u0431" : n < 11 ? "\u0441\u0443\u0431\u04b3" : n < 16 ? "\u0440\u04ef\u0437" : n < 19 ? "\u0431\u0435\u0433\u043e\u04b3" : "\u0448\u0430\u0431"
            },
            dayOfMonthOrdinalParse: /\d{1,2}-(\u0443\u043c|\u044e\u043c)/,
            ordinal: function (n) {
                return n + (t[n] || t[n % 10] || t[n >= 100 ? 100 : null])
            },
            week: {dow: 1, doy: 7}
        })
    }(e("wd/R"))
},
PA2r: function (n, t, e) {
    !function (n) {
        "use strict";
        var t = "leden_\xfanor_b\u0159ezen_duben_kv\u011bten_\u010derven_\u010dervenec_srpen_z\xe1\u0159\xed_\u0159\xedjen_listopad_prosinec".split("_"),
            e = "led_\xfano_b\u0159e_dub_kv\u011b_\u010dvn_\u010dvc_srp_z\xe1\u0159_\u0159\xedj_lis_pro".split("_"),
            o = [/^led/i, /^\xfano/i, /^b\u0159e/i, /^dub/i, /^kv\u011b/i, /^(\u010dvn|\u010derven$|\u010dervna)/i, /^(\u010dvc|\u010dervenec|\u010dervence)/i, /^srp/i, /^z\xe1\u0159/i, /^\u0159\xedj/i, /^lis/i, /^pro/i],
            l = /^(leden|\xfanor|b\u0159ezen|duben|kv\u011bten|\u010dervenec|\u010dervence|\u010derven|\u010dervna|srpen|z\xe1\u0159\xed|\u0159\xedjen|listopad|prosinec|led|\xfano|b\u0159e|dub|kv\u011b|\u010dvn|\u010dvc|srp|z\xe1\u0159|\u0159\xedj|lis|pro)/i;

        function r(n) {
            return n > 1 && n < 5 && 1 != ~~(n / 10)
        }

        function i(n, t, e, o) {
            var l = n + " ";
            switch (e) {
                case"s":
                    return t || o ? "p\xe1r sekund" : "p\xe1r sekundami";
                case"ss":
                    return t || o ? l + (r(n) ? "sekundy" : "sekund") : l + "sekundami";
                case"m":
                    return t ? "minuta" : o ? "minutu" : "minutou";
                case"mm":
                    return t || o ? l + (r(n) ? "minuty" : "minut") : l + "minutami";
                case"h":
                    return t ? "hodina" : o ? "hodinu" : "hodinou";
                case"hh":
                    return t || o ? l + (r(n) ? "hodiny" : "hodin") : l + "hodinami";
                case"d":
                    return t || o ? "den" : "dnem";
                case"dd":
                    return t || o ? l + (r(n) ? "dny" : "dn\xed") : l + "dny";
                case"M":
                    return t || o ? "m\u011bs\xedc" : "m\u011bs\xedcem";
                case"MM":
                    return t || o ? l + (r(n) ? "m\u011bs\xedce" : "m\u011bs\xedc\u016f") : l + "m\u011bs\xedci";
                case"y":
                    return t || o ? "rok" : "rokem";
                case"yy":
                    return t || o ? l + (r(n) ? "roky" : "let") : l + "lety"
            }
        }

        n.defineLocale("cs", {
            months: t,
            monthsShort: e,
            monthsRegex: l,
            monthsShortRegex: l,
            monthsStrictRegex: /^(leden|ledna|\xfanora|\xfanor|b\u0159ezen|b\u0159ezna|duben|dubna|kv\u011bten|kv\u011btna|\u010dervenec|\u010dervence|\u010derven|\u010dervna|srpen|srpna|z\xe1\u0159\xed|\u0159\xedjen|\u0159\xedjna|listopadu|listopad|prosinec|prosince)/i,
            monthsShortStrictRegex: /^(led|\xfano|b\u0159e|dub|kv\u011b|\u010dvn|\u010dvc|srp|z\xe1\u0159|\u0159\xedj|lis|pro)/i,
            monthsParse: o,
            longMonthsParse: o,
            shortMonthsParse: o,
            weekdays: "ned\u011ble_pond\u011bl\xed_\xfater\xfd_st\u0159eda_\u010dtvrtek_p\xe1tek_sobota".split("_"),
            weekdaysShort: "ne_po_\xfat_st_\u010dt_p\xe1_so".split("_"),
            weekdaysMin: "ne_po_\xfat_st_\u010dt_p\xe1_so".split("_"),
            longDateFormat: {
                LT: "H:mm",
                LTS: "H:mm:ss",
                L: "DD.MM.YYYY",
                LL: "D. MMMM YYYY",
                LLL: "D. MMMM YYYY H:mm",
                LLLL: "dddd D. MMMM YYYY H:mm",
                l: "D. M. YYYY"
            },
            calendar: {
                sameDay: "[dnes v] LT", nextDay: "[z\xedtra v] LT", nextWeek: function () {
                    switch (this.day()) {
                        case 0:
                            return "[v ned\u011bli v] LT";
                        case 1:
                        case 2:
                            return "[v] dddd [v] LT";
                        case 3:
                            return "[ve st\u0159edu v] LT";
                        case 4:
                            return "[ve \u010dtvrtek v] LT";
                        case 5:
                            return "[v p\xe1tek v] LT";
                        case 6:
                            return "[v sobotu v] LT"
                    }
                }, lastDay: "[v\u010dera v] LT", lastWeek: function () {
                    switch (this.day()) {
                        case 0:
                            return "[minulou ned\u011bli v] LT";
                        case 1:
                        case 2:
                            return "[minul\xe9] dddd [v] LT";
                        case 3:
                            return "[minulou st\u0159edu v] LT";
                        case 4:
                        case 5:
                            return "[minul\xfd] dddd [v] LT";
                        case 6:
                            return "[minulou sobotu v] LT"
                    }
                }, sameElse: "L"
            },
            relativeTime: {
                future: "za %s",
                past: "p\u0159ed %s",
                s: i,
                ss: i,
                m: i,
                mm: i,
                h: i,
                hh: i,
                d: i,
                dd: i,
                M: i,
                MM: i,
                y: i,
                yy: i
            },
            dayOfMonthOrdinalParse: /\d{1,2}\./,
            ordinal: "%d.",
            week: {dow: 1, doy: 4}
        })
    }(e("wd/R"))
},
PeUW: function (n, t, e) {
    !function (n) {
        "use strict";
        var t = {
            1: "\u0be7",
            2: "\u0be8",
            3: "\u0be9",
            4: "\u0bea",
            5: "\u0beb",
            6: "\u0bec",
            7: "\u0bed",
            8: "\u0bee",
            9: "\u0bef",
            0: "\u0be6"
        }, e = {
            "\u0be7": "1",
            "\u0be8": "2",
            "\u0be9": "3",
            "\u0bea": "4",
            "\u0beb": "5",
            "\u0bec": "6",
            "\u0bed": "7",
            "\u0bee": "8",
            "\u0bef": "9",
            "\u0be6": "0"
        };
        n.defineLocale("ta", {
            months: "\u0b9c\u0ba9\u0bb5\u0bb0\u0bbf_\u0baa\u0bbf\u0baa\u0bcd\u0bb0\u0bb5\u0bb0\u0bbf_\u0bae\u0bbe\u0bb0\u0bcd\u0b9a\u0bcd_\u0b8f\u0baa\u0bcd\u0bb0\u0bb2\u0bcd_\u0bae\u0bc7_\u0b9c\u0bc2\u0ba9\u0bcd_\u0b9c\u0bc2\u0bb2\u0bc8_\u0b86\u0b95\u0bb8\u0bcd\u0b9f\u0bcd_\u0b9a\u0bc6\u0baa\u0bcd\u0b9f\u0bc6\u0bae\u0bcd\u0baa\u0bb0\u0bcd_\u0b85\u0b95\u0bcd\u0b9f\u0bc7\u0bbe\u0baa\u0bb0\u0bcd_\u0ba8\u0bb5\u0bae\u0bcd\u0baa\u0bb0\u0bcd_\u0b9f\u0bbf\u0b9a\u0bae\u0bcd\u0baa\u0bb0\u0bcd".split("_"),
            monthsShort: "\u0b9c\u0ba9\u0bb5\u0bb0\u0bbf_\u0baa\u0bbf\u0baa\u0bcd\u0bb0\u0bb5\u0bb0\u0bbf_\u0bae\u0bbe\u0bb0\u0bcd\u0b9a\u0bcd_\u0b8f\u0baa\u0bcd\u0bb0\u0bb2\u0bcd_\u0bae\u0bc7_\u0b9c\u0bc2\u0ba9\u0bcd_\u0b9c\u0bc2\u0bb2\u0bc8_\u0b86\u0b95\u0bb8\u0bcd\u0b9f\u0bcd_\u0b9a\u0bc6\u0baa\u0bcd\u0b9f\u0bc6\u0bae\u0bcd\u0baa\u0bb0\u0bcd_\u0b85\u0b95\u0bcd\u0b9f\u0bc7\u0bbe\u0baa\u0bb0\u0bcd_\u0ba8\u0bb5\u0bae\u0bcd\u0baa\u0bb0\u0bcd_\u0b9f\u0bbf\u0b9a\u0bae\u0bcd\u0baa\u0bb0\u0bcd".split("_"),
            weekdays: "\u0b9e\u0bbe\u0baf\u0bbf\u0bb1\u0bcd\u0bb1\u0bc1\u0b95\u0bcd\u0b95\u0bbf\u0bb4\u0bae\u0bc8_\u0ba4\u0bbf\u0b99\u0bcd\u0b95\u0b9f\u0bcd\u0b95\u0bbf\u0bb4\u0bae\u0bc8_\u0b9a\u0bc6\u0bb5\u0bcd\u0bb5\u0bbe\u0baf\u0bcd\u0b95\u0bbf\u0bb4\u0bae\u0bc8_\u0baa\u0bc1\u0ba4\u0ba9\u0bcd\u0b95\u0bbf\u0bb4\u0bae\u0bc8_\u0bb5\u0bbf\u0baf\u0bbe\u0bb4\u0b95\u0bcd\u0b95\u0bbf\u0bb4\u0bae\u0bc8_\u0bb5\u0bc6\u0bb3\u0bcd\u0bb3\u0bbf\u0b95\u0bcd\u0b95\u0bbf\u0bb4\u0bae\u0bc8_\u0b9a\u0ba9\u0bbf\u0b95\u0bcd\u0b95\u0bbf\u0bb4\u0bae\u0bc8".split("_"),
            weekdaysShort: "\u0b9e\u0bbe\u0baf\u0bbf\u0bb1\u0bc1_\u0ba4\u0bbf\u0b99\u0bcd\u0b95\u0bb3\u0bcd_\u0b9a\u0bc6\u0bb5\u0bcd\u0bb5\u0bbe\u0baf\u0bcd_\u0baa\u0bc1\u0ba4\u0ba9\u0bcd_\u0bb5\u0bbf\u0baf\u0bbe\u0bb4\u0ba9\u0bcd_\u0bb5\u0bc6\u0bb3\u0bcd\u0bb3\u0bbf_\u0b9a\u0ba9\u0bbf".split("_"),
            weekdaysMin: "\u0b9e\u0bbe_\u0ba4\u0bbf_\u0b9a\u0bc6_\u0baa\u0bc1_\u0bb5\u0bbf_\u0bb5\u0bc6_\u0b9a".split("_"),
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY, HH:mm",
                LLLL: "dddd, D MMMM YYYY, HH:mm"
            },
            calendar: {
                sameDay: "[\u0b87\u0ba9\u0bcd\u0bb1\u0bc1] LT",
                nextDay: "[\u0ba8\u0bbe\u0bb3\u0bc8] LT",
                nextWeek: "dddd, LT",
                lastDay: "[\u0ba8\u0bc7\u0bb1\u0bcd\u0bb1\u0bc1] LT",
                lastWeek: "[\u0b95\u0b9f\u0ba8\u0bcd\u0ba4 \u0bb5\u0bbe\u0bb0\u0bae\u0bcd] dddd, LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "%s \u0b87\u0bb2\u0bcd",
                past: "%s \u0bae\u0bc1\u0ba9\u0bcd",
                s: "\u0b92\u0bb0\u0bc1 \u0b9a\u0bbf\u0bb2 \u0bb5\u0bbf\u0ba8\u0bbe\u0b9f\u0bbf\u0b95\u0bb3\u0bcd",
                ss: "%d \u0bb5\u0bbf\u0ba8\u0bbe\u0b9f\u0bbf\u0b95\u0bb3\u0bcd",
                m: "\u0b92\u0bb0\u0bc1 \u0ba8\u0bbf\u0bae\u0bbf\u0b9f\u0bae\u0bcd",
                mm: "%d \u0ba8\u0bbf\u0bae\u0bbf\u0b9f\u0b99\u0bcd\u0b95\u0bb3\u0bcd",
                h: "\u0b92\u0bb0\u0bc1 \u0bae\u0ba3\u0bbf \u0ba8\u0bc7\u0bb0\u0bae\u0bcd",
                hh: "%d \u0bae\u0ba3\u0bbf \u0ba8\u0bc7\u0bb0\u0bae\u0bcd",
                d: "\u0b92\u0bb0\u0bc1 \u0ba8\u0bbe\u0bb3\u0bcd",
                dd: "%d \u0ba8\u0bbe\u0b9f\u0bcd\u0b95\u0bb3\u0bcd",
                M: "\u0b92\u0bb0\u0bc1 \u0bae\u0bbe\u0ba4\u0bae\u0bcd",
                MM: "%d \u0bae\u0bbe\u0ba4\u0b99\u0bcd\u0b95\u0bb3\u0bcd",
                y: "\u0b92\u0bb0\u0bc1 \u0bb5\u0bb0\u0bc1\u0b9f\u0bae\u0bcd",
                yy: "%d \u0b86\u0ba3\u0bcd\u0b9f\u0bc1\u0b95\u0bb3\u0bcd"
            },
            dayOfMonthOrdinalParse: /\d{1,2}\u0bb5\u0ba4\u0bc1/,
            ordinal: function (n) {
                return n + "\u0bb5\u0ba4\u0bc1"
            },
            preparse: function (n) {
                return n.replace(/[\u0be7\u0be8\u0be9\u0bea\u0beb\u0bec\u0bed\u0bee\u0bef\u0be6]/g, function (n) {
                    return e[n]
                })
            },
            postformat: function (n) {
                return n.replace(/\d/g, function (n) {
                    return t[n]
                })
            },
            meridiemParse: /\u0baf\u0bbe\u0bae\u0bae\u0bcd|\u0bb5\u0bc8\u0b95\u0bb1\u0bc8|\u0b95\u0bbe\u0bb2\u0bc8|\u0ba8\u0ba3\u0bcd\u0baa\u0b95\u0bb2\u0bcd|\u0b8e\u0bb1\u0bcd\u0baa\u0bbe\u0b9f\u0bc1|\u0bae\u0bbe\u0bb2\u0bc8/,
            meridiem: function (n, t, e) {
                return n < 2 ? " \u0baf\u0bbe\u0bae\u0bae\u0bcd" : n < 6 ? " \u0bb5\u0bc8\u0b95\u0bb1\u0bc8" : n < 10 ? " \u0b95\u0bbe\u0bb2\u0bc8" : n < 14 ? " \u0ba8\u0ba3\u0bcd\u0baa\u0b95\u0bb2\u0bcd" : n < 18 ? " \u0b8e\u0bb1\u0bcd\u0baa\u0bbe\u0b9f\u0bc1" : n < 22 ? " \u0bae\u0bbe\u0bb2\u0bc8" : " \u0baf\u0bbe\u0bae\u0bae\u0bcd"
            },
            meridiemHour: function (n, t) {
                return 12 === n && (n = 0), "\u0baf\u0bbe\u0bae\u0bae\u0bcd" === t ? n < 2 ? n : n + 12 : "\u0bb5\u0bc8\u0b95\u0bb1\u0bc8" === t || "\u0b95\u0bbe\u0bb2\u0bc8" === t ? n : "\u0ba8\u0ba3\u0bcd\u0baa\u0b95\u0bb2\u0bcd" === t && n >= 10 ? n : n + 12
            },
            week: {dow: 0, doy: 6}
        })
    }(e("wd/R"))
},
PpIw: function (n, t, e) {
    !function (n) {
        "use strict";
        var t = {
            1: "\u0ce7",
            2: "\u0ce8",
            3: "\u0ce9",
            4: "\u0cea",
            5: "\u0ceb",
            6: "\u0cec",
            7: "\u0ced",
            8: "\u0cee",
            9: "\u0cef",
            0: "\u0ce6"
        }, e = {
            "\u0ce7": "1",
            "\u0ce8": "2",
            "\u0ce9": "3",
            "\u0cea": "4",
            "\u0ceb": "5",
            "\u0cec": "6",
            "\u0ced": "7",
            "\u0cee": "8",
            "\u0cef": "9",
            "\u0ce6": "0"
        };
        n.defineLocale("kn", {
            months: "\u0c9c\u0ca8\u0cb5\u0cb0\u0cbf_\u0cab\u0cc6\u0cac\u0ccd\u0cb0\u0cb5\u0cb0\u0cbf_\u0cae\u0cbe\u0cb0\u0ccd\u0c9a\u0ccd_\u0c8f\u0caa\u0ccd\u0cb0\u0cbf\u0cb2\u0ccd_\u0cae\u0cc6\u0cd5_\u0c9c\u0cc2\u0ca8\u0ccd_\u0c9c\u0cc1\u0cb2\u0cc6\u0cd6_\u0c86\u0c97\u0cb8\u0ccd\u0c9f\u0ccd_\u0cb8\u0cc6\u0caa\u0ccd\u0c9f\u0cc6\u0c82\u0cac\u0cb0\u0ccd_\u0c85\u0c95\u0ccd\u0c9f\u0cc6\u0cc2\u0cd5\u0cac\u0cb0\u0ccd_\u0ca8\u0cb5\u0cc6\u0c82\u0cac\u0cb0\u0ccd_\u0ca1\u0cbf\u0cb8\u0cc6\u0c82\u0cac\u0cb0\u0ccd".split("_"),
            monthsShort: "\u0c9c\u0ca8_\u0cab\u0cc6\u0cac\u0ccd\u0cb0_\u0cae\u0cbe\u0cb0\u0ccd\u0c9a\u0ccd_\u0c8f\u0caa\u0ccd\u0cb0\u0cbf\u0cb2\u0ccd_\u0cae\u0cc6\u0cd5_\u0c9c\u0cc2\u0ca8\u0ccd_\u0c9c\u0cc1\u0cb2\u0cc6\u0cd6_\u0c86\u0c97\u0cb8\u0ccd\u0c9f\u0ccd_\u0cb8\u0cc6\u0caa\u0ccd\u0c9f\u0cc6\u0c82_\u0c85\u0c95\u0ccd\u0c9f\u0cc6\u0cc2\u0cd5_\u0ca8\u0cb5\u0cc6\u0c82_\u0ca1\u0cbf\u0cb8\u0cc6\u0c82".split("_"),
            monthsParseExact: !0,
            weekdays: "\u0cad\u0cbe\u0ca8\u0cc1\u0cb5\u0cbe\u0cb0_\u0cb8\u0cc6\u0cc2\u0cd5\u0cae\u0cb5\u0cbe\u0cb0_\u0cae\u0c82\u0c97\u0cb3\u0cb5\u0cbe\u0cb0_\u0cac\u0cc1\u0ca7\u0cb5\u0cbe\u0cb0_\u0c97\u0cc1\u0cb0\u0cc1\u0cb5\u0cbe\u0cb0_\u0cb6\u0cc1\u0c95\u0ccd\u0cb0\u0cb5\u0cbe\u0cb0_\u0cb6\u0ca8\u0cbf\u0cb5\u0cbe\u0cb0".split("_"),
            weekdaysShort: "\u0cad\u0cbe\u0ca8\u0cc1_\u0cb8\u0cc6\u0cc2\u0cd5\u0cae_\u0cae\u0c82\u0c97\u0cb3_\u0cac\u0cc1\u0ca7_\u0c97\u0cc1\u0cb0\u0cc1_\u0cb6\u0cc1\u0c95\u0ccd\u0cb0_\u0cb6\u0ca8\u0cbf".split("_"),
            weekdaysMin: "\u0cad\u0cbe_\u0cb8\u0cc6\u0cc2\u0cd5_\u0cae\u0c82_\u0cac\u0cc1_\u0c97\u0cc1_\u0cb6\u0cc1_\u0cb6".split("_"),
            longDateFormat: {
                LT: "A h:mm",
                LTS: "A h:mm:ss",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY, A h:mm",
                LLLL: "dddd, D MMMM YYYY, A h:mm"
            },
            calendar: {
                sameDay: "[\u0c87\u0c82\u0ca6\u0cc1] LT",
                nextDay: "[\u0ca8\u0cbe\u0cb3\u0cc6] LT",
                nextWeek: "dddd, LT",
                lastDay: "[\u0ca8\u0cbf\u0ca8\u0ccd\u0ca8\u0cc6] LT",
                lastWeek: "[\u0c95\u0cc6\u0cc2\u0ca8\u0cc6\u0caf] dddd, LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "%s \u0ca8\u0c82\u0ca4\u0cb0",
                past: "%s \u0cb9\u0cbf\u0c82\u0ca6\u0cc6",
                s: "\u0c95\u0cc6\u0cb2\u0cb5\u0cc1 \u0c95\u0ccd\u0cb7\u0ca3\u0c97\u0cb3\u0cc1",
                ss: "%d \u0cb8\u0cc6\u0c95\u0cc6\u0c82\u0ca1\u0cc1\u0c97\u0cb3\u0cc1",
                m: "\u0c92\u0c82\u0ca6\u0cc1 \u0ca8\u0cbf\u0cae\u0cbf\u0cb7",
                mm: "%d \u0ca8\u0cbf\u0cae\u0cbf\u0cb7",
                h: "\u0c92\u0c82\u0ca6\u0cc1 \u0c97\u0c82\u0c9f\u0cc6",
                hh: "%d \u0c97\u0c82\u0c9f\u0cc6",
                d: "\u0c92\u0c82\u0ca6\u0cc1 \u0ca6\u0cbf\u0ca8",
                dd: "%d \u0ca6\u0cbf\u0ca8",
                M: "\u0c92\u0c82\u0ca6\u0cc1 \u0ca4\u0cbf\u0c82\u0c97\u0cb3\u0cc1",
                MM: "%d \u0ca4\u0cbf\u0c82\u0c97\u0cb3\u0cc1",
                y: "\u0c92\u0c82\u0ca6\u0cc1 \u0cb5\u0cb0\u0ccd\u0cb7",
                yy: "%d \u0cb5\u0cb0\u0ccd\u0cb7"
            },
            preparse: function (n) {
                return n.replace(/[\u0ce7\u0ce8\u0ce9\u0cea\u0ceb\u0cec\u0ced\u0cee\u0cef\u0ce6]/g, function (n) {
                    return e[n]
                })
            },
            postformat: function (n) {
                return n.replace(/\d/g, function (n) {
                    return t[n]
                })
            },
            meridiemParse: /\u0cb0\u0cbe\u0ca4\u0ccd\u0cb0\u0cbf|\u0cac\u0cc6\u0cb3\u0cbf\u0c97\u0ccd\u0c97\u0cc6|\u0cae\u0ca7\u0ccd\u0caf\u0cbe\u0cb9\u0ccd\u0ca8|\u0cb8\u0c82\u0c9c\u0cc6/,
            meridiemHour: function (n, t) {
                return 12 === n && (n = 0), "\u0cb0\u0cbe\u0ca4\u0ccd\u0cb0\u0cbf" === t ? n < 4 ? n : n + 12 : "\u0cac\u0cc6\u0cb3\u0cbf\u0c97\u0ccd\u0c97\u0cc6" === t ? n : "\u0cae\u0ca7\u0ccd\u0caf\u0cbe\u0cb9\u0ccd\u0ca8" === t ? n >= 10 ? n : n + 12 : "\u0cb8\u0c82\u0c9c\u0cc6" === t ? n + 12 : void 0
            },
            meridiem: function (n, t, e) {
                return n < 4 ? "\u0cb0\u0cbe\u0ca4\u0ccd\u0cb0\u0cbf" : n < 10 ? "\u0cac\u0cc6\u0cb3\u0cbf\u0c97\u0ccd\u0c97\u0cc6" : n < 17 ? "\u0cae\u0ca7\u0ccd\u0caf\u0cbe\u0cb9\u0ccd\u0ca8" : n < 20 ? "\u0cb8\u0c82\u0c9c\u0cc6" : "\u0cb0\u0cbe\u0ca4\u0ccd\u0cb0\u0cbf"
            },
            dayOfMonthOrdinalParse: /\d{1,2}(\u0ca8\u0cc6\u0cd5)/,
            ordinal: function (n) {
                return n + "\u0ca8\u0cc6\u0cd5"
            },
            week: {dow: 0, doy: 6}
        })
    }(e("wd/R"))
},
Qj4J: function (n, t, e) {
    !function (n) {
        "use strict";
        e("wd/R").defineLocale("ar-kw", {
            months: "\u064a\u0646\u0627\u064a\u0631_\u0641\u0628\u0631\u0627\u064a\u0631_\u0645\u0627\u0631\u0633_\u0623\u0628\u0631\u064a\u0644_\u0645\u0627\u064a_\u064a\u0648\u0646\u064a\u0648_\u064a\u0648\u0644\u064a\u0648\u0632_\u063a\u0634\u062a_\u0634\u062a\u0646\u0628\u0631_\u0623\u0643\u062a\u0648\u0628\u0631_\u0646\u0648\u0646\u0628\u0631_\u062f\u062c\u0646\u0628\u0631".split("_"),
            monthsShort: "\u064a\u0646\u0627\u064a\u0631_\u0641\u0628\u0631\u0627\u064a\u0631_\u0645\u0627\u0631\u0633_\u0623\u0628\u0631\u064a\u0644_\u0645\u0627\u064a_\u064a\u0648\u0646\u064a\u0648_\u064a\u0648\u0644\u064a\u0648\u0632_\u063a\u0634\u062a_\u0634\u062a\u0646\u0628\u0631_\u0623\u0643\u062a\u0648\u0628\u0631_\u0646\u0648\u0646\u0628\u0631_\u062f\u062c\u0646\u0628\u0631".split("_"),
            weekdays: "\u0627\u0644\u0623\u062d\u062f_\u0627\u0644\u0625\u062a\u0646\u064a\u0646_\u0627\u0644\u062b\u0644\u0627\u062b\u0627\u0621_\u0627\u0644\u0623\u0631\u0628\u0639\u0627\u0621_\u0627\u0644\u062e\u0645\u064a\u0633_\u0627\u0644\u062c\u0645\u0639\u0629_\u0627\u0644\u0633\u0628\u062a".split("_"),
            weekdaysShort: "\u0627\u062d\u062f_\u0627\u062a\u0646\u064a\u0646_\u062b\u0644\u0627\u062b\u0627\u0621_\u0627\u0631\u0628\u0639\u0627\u0621_\u062e\u0645\u064a\u0633_\u062c\u0645\u0639\u0629_\u0633\u0628\u062a".split("_"),
            weekdaysMin: "\u062d_\u0646_\u062b_\u0631_\u062e_\u062c_\u0633".split("_"),
            weekdaysParseExact: !0,
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY HH:mm",
                LLLL: "dddd D MMMM YYYY HH:mm"
            },
            calendar: {
                sameDay: "[\u0627\u0644\u064a\u0648\u0645 \u0639\u0644\u0649 \u0627\u0644\u0633\u0627\u0639\u0629] LT",
                nextDay: "[\u063a\u062f\u0627 \u0639\u0644\u0649 \u0627\u0644\u0633\u0627\u0639\u0629] LT",
                nextWeek: "dddd [\u0639\u0644\u0649 \u0627\u0644\u0633\u0627\u0639\u0629] LT",
                lastDay: "[\u0623\u0645\u0633 \u0639\u0644\u0649 \u0627\u0644\u0633\u0627\u0639\u0629] LT",
                lastWeek: "dddd [\u0639\u0644\u0649 \u0627\u0644\u0633\u0627\u0639\u0629] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "\u0641\u064a %s",
                past: "\u0645\u0646\u0630 %s",
                s: "\u062b\u0648\u0627\u0646",
                ss: "%d \u062b\u0627\u0646\u064a\u0629",
                m: "\u062f\u0642\u064a\u0642\u0629",
                mm: "%d \u062f\u0642\u0627\u0626\u0642",
                h: "\u0633\u0627\u0639\u0629",
                hh: "%d \u0633\u0627\u0639\u0627\u062a",
                d: "\u064a\u0648\u0645",
                dd: "%d \u0623\u064a\u0627\u0645",
                M: "\u0634\u0647\u0631",
                MM: "%d \u0623\u0634\u0647\u0631",
                y: "\u0633\u0646\u0629",
                yy: "%d \u0633\u0646\u0648\u0627\u062a"
            },
            week: {dow: 0, doy: 12}
        })
    }()
},
RAwQ: function (n, t, e) {
    !function (n) {
        "use strict";

        function t(n, t, e, o) {
            var l = {
                m: ["eng Minutt", "enger Minutt"],
                h: ["eng Stonn", "enger Stonn"],
                d: ["een Dag", "engem Dag"],
                M: ["ee Mount", "engem Mount"],
                y: ["ee Joer", "engem Joer"]
            };
            return t ? l[e][0] : l[e][1]
        }

        function o(n) {
            if (n = parseInt(n, 10), isNaN(n)) return !1;
            if (n < 0) return !0;
            if (n < 10) return 4 <= n && n <= 7;
            if (n < 100) {
                var t = n % 10;
                return o(0 === t ? n / 10 : t)
            }
            if (n < 1e4) {
                for (; n >= 10;) n /= 10;
                return o(n)
            }
            return o(n /= 1e3)
        }

        e("wd/R").defineLocale("lb", {
            months: "Januar_Februar_M\xe4erz_Abr\xebll_Mee_Juni_Juli_August_September_Oktober_November_Dezember".split("_"),
            monthsShort: "Jan._Febr._Mrz._Abr._Mee_Jun._Jul._Aug._Sept._Okt._Nov._Dez.".split("_"),
            monthsParseExact: !0,
            weekdays: "Sonndeg_M\xe9indeg_D\xebnschdeg_M\xebttwoch_Donneschdeg_Freideg_Samschdeg".split("_"),
            weekdaysShort: "So._M\xe9._D\xeb._M\xeb._Do._Fr._Sa.".split("_"),
            weekdaysMin: "So_M\xe9_D\xeb_M\xeb_Do_Fr_Sa".split("_"),
            weekdaysParseExact: !0,
            longDateFormat: {
                LT: "H:mm [Auer]",
                LTS: "H:mm:ss [Auer]",
                L: "DD.MM.YYYY",
                LL: "D. MMMM YYYY",
                LLL: "D. MMMM YYYY H:mm [Auer]",
                LLLL: "dddd, D. MMMM YYYY H:mm [Auer]"
            },
            calendar: {
                sameDay: "[Haut um] LT",
                sameElse: "L",
                nextDay: "[Muer um] LT",
                nextWeek: "dddd [um] LT",
                lastDay: "[G\xebschter um] LT",
                lastWeek: function () {
                    switch (this.day()) {
                        case 2:
                        case 4:
                            return "[Leschten] dddd [um] LT";
                        default:
                            return "[Leschte] dddd [um] LT"
                    }
                }
            },
            relativeTime: {
                future: function (n) {
                    return o(n.substr(0, n.indexOf(" "))) ? "a " + n : "an " + n
                },
                past: function (n) {
                    return o(n.substr(0, n.indexOf(" "))) ? "viru " + n : "virun " + n
                },
                s: "e puer Sekonnen",
                ss: "%d Sekonnen",
                m: t,
                mm: "%d Minutten",
                h: t,
                hh: "%d Stonnen",
                d: t,
                dd: "%d Deeg",
                M: t,
                MM: "%d M\xe9int",
                y: t,
                yy: "%d Joer"
            },
            dayOfMonthOrdinalParse: /\d{1,2}\./,
            ordinal: "%d.",
            week: {dow: 1, doy: 4}
        })
    }()
},
S6ln: function (n, t, e) {
    !function (n) {
        "use strict";

        function t(n, t, e) {
            var o = n + " ";
            switch (e) {
                case"ss":
                    return o + (1 === n ? "sekunda" : 2 === n || 3 === n || 4 === n ? "sekunde" : "sekundi");
                case"m":
                    return t ? "jedna minuta" : "jedne minute";
                case"mm":
                    return o + (1 === n ? "minuta" : 2 === n || 3 === n || 4 === n ? "minute" : "minuta");
                case"h":
                    return t ? "jedan sat" : "jednog sata";
                case"hh":
                    return o + (1 === n ? "sat" : 2 === n || 3 === n || 4 === n ? "sata" : "sati");
                case"dd":
                    return o + (1 === n ? "dan" : "dana");
                case"MM":
                    return o + (1 === n ? "mjesec" : 2 === n || 3 === n || 4 === n ? "mjeseca" : "mjeseci");
                case"yy":
                    return o + (1 === n ? "godina" : 2 === n || 3 === n || 4 === n ? "godine" : "godina")
            }
        }

        e("wd/R").defineLocale("hr", {
            months: {
                format: "sije\u010dnja_velja\u010de_o\u017eujka_travnja_svibnja_lipnja_srpnja_kolovoza_rujna_listopada_studenoga_prosinca".split("_"),
                standalone: "sije\u010danj_velja\u010da_o\u017eujak_travanj_svibanj_lipanj_srpanj_kolovoz_rujan_listopad_studeni_prosinac".split("_")
            },
            monthsShort: "sij._velj._o\u017eu._tra._svi._lip._srp._kol._ruj._lis._stu._pro.".split("_"),
            monthsParseExact: !0,
            weekdays: "nedjelja_ponedjeljak_utorak_srijeda_\u010detvrtak_petak_subota".split("_"),
            weekdaysShort: "ned._pon._uto._sri._\u010det._pet._sub.".split("_"),
            weekdaysMin: "ne_po_ut_sr_\u010de_pe_su".split("_"),
            weekdaysParseExact: !0,
            longDateFormat: {
                LT: "H:mm",
                LTS: "H:mm:ss",
                L: "DD.MM.YYYY",
                LL: "D. MMMM YYYY",
                LLL: "D. MMMM YYYY H:mm",
                LLLL: "dddd, D. MMMM YYYY H:mm"
            },
            calendar: {
                sameDay: "[danas u] LT", nextDay: "[sutra u] LT", nextWeek: function () {
                    switch (this.day()) {
                        case 0:
                            return "[u] [nedjelju] [u] LT";
                        case 3:
                            return "[u] [srijedu] [u] LT";
                        case 6:
                            return "[u] [subotu] [u] LT";
                        case 1:
                        case 2:
                        case 4:
                        case 5:
                            return "[u] dddd [u] LT"
                    }
                }, lastDay: "[ju\u010der u] LT", lastWeek: function () {
                    switch (this.day()) {
                        case 0:
                        case 3:
                            return "[pro\u0161lu] dddd [u] LT";
                        case 6:
                            return "[pro\u0161le] [subote] [u] LT";
                        case 1:
                        case 2:
                        case 4:
                        case 5:
                            return "[pro\u0161li] dddd [u] LT"
                    }
                }, sameElse: "L"
            },
            relativeTime: {
                future: "za %s",
                past: "prije %s",
                s: "par sekundi",
                ss: t,
                m: t,
                mm: t,
                h: t,
                hh: t,
                d: "dan",
                dd: t,
                M: "mjesec",
                MM: t,
                y: "godinu",
                yy: t
            },
            dayOfMonthOrdinalParse: /\d{1,2}\./,
            ordinal: "%d.",
            week: {dow: 1, doy: 7}
        })
    }()
},
SFxW: function (n, t, e) {
    !function (n) {
        "use strict";
        var t = {
            1: "-inci",
            5: "-inci",
            8: "-inci",
            70: "-inci",
            80: "-inci",
            2: "-nci",
            7: "-nci",
            20: "-nci",
            50: "-nci",
            3: "-\xfcnc\xfc",
            4: "-\xfcnc\xfc",
            100: "-\xfcnc\xfc",
            6: "-nc\u0131",
            9: "-uncu",
            10: "-uncu",
            30: "-uncu",
            60: "-\u0131nc\u0131",
            90: "-\u0131nc\u0131"
        };
        n.defineLocale("az", {
            months: "yanvar_fevral_mart_aprel_may_iyun_iyul_avqust_sentyabr_oktyabr_noyabr_dekabr".split("_"),
            monthsShort: "yan_fev_mar_apr_may_iyn_iyl_avq_sen_okt_noy_dek".split("_"),
            weekdays: "Bazar_Bazar ert\u0259si_\xc7\u0259r\u015f\u0259nb\u0259 ax\u015fam\u0131_\xc7\u0259r\u015f\u0259nb\u0259_C\xfcm\u0259 ax\u015fam\u0131_C\xfcm\u0259_\u015e\u0259nb\u0259".split("_"),
            weekdaysShort: "Baz_BzE_\xc7Ax_\xc7\u0259r_CAx_C\xfcm_\u015e\u0259n".split("_"),
            weekdaysMin: "Bz_BE_\xc7A_\xc7\u0259_CA_C\xfc_\u015e\u0259".split("_"),
            weekdaysParseExact: !0,
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD.MM.YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY HH:mm",
                LLLL: "dddd, D MMMM YYYY HH:mm"
            },
            calendar: {
                sameDay: "[bug\xfcn saat] LT",
                nextDay: "[sabah saat] LT",
                nextWeek: "[g\u0259l\u0259n h\u0259ft\u0259] dddd [saat] LT",
                lastDay: "[d\xfcn\u0259n] LT",
                lastWeek: "[ke\xe7\u0259n h\u0259ft\u0259] dddd [saat] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "%s sonra",
                past: "%s \u0259vv\u0259l",
                s: "birne\xe7\u0259 saniy\u0259",
                ss: "%d saniy\u0259",
                m: "bir d\u0259qiq\u0259",
                mm: "%d d\u0259qiq\u0259",
                h: "bir saat",
                hh: "%d saat",
                d: "bir g\xfcn",
                dd: "%d g\xfcn",
                M: "bir ay",
                MM: "%d ay",
                y: "bir il",
                yy: "%d il"
            },
            meridiemParse: /gec\u0259|s\u0259h\u0259r|g\xfcnd\xfcz|ax\u015fam/,
            isPM: function (n) {
                return /^(g\xfcnd\xfcz|ax\u015fam)$/.test(n)
            },
            meridiem: function (n, t, e) {
                return n < 4 ? "gec\u0259" : n < 12 ? "s\u0259h\u0259r" : n < 17 ? "g\xfcnd\xfcz" : "ax\u015fam"
            },
            dayOfMonthOrdinalParse: /\d{1,2}-(\u0131nc\u0131|inci|nci|\xfcnc\xfc|nc\u0131|uncu)/,
            ordinal: function (n) {
                if (0 === n) return n + "-\u0131nc\u0131";
                var e = n % 10;
                return n + (t[e] || t[n % 100 - e] || t[n >= 100 ? 100 : null])
            },
            week: {dow: 1, doy: 7}
        })
    }(e("wd/R"))
},
SatO: function (n, t, e) {
    !function (n) {
        "use strict";
        e("wd/R").defineLocale("zh-hk", {
            months: "\u4e00\u6708_\u4e8c\u6708_\u4e09\u6708_\u56db\u6708_\u4e94\u6708_\u516d\u6708_\u4e03\u6708_\u516b\u6708_\u4e5d\u6708_\u5341\u6708_\u5341\u4e00\u6708_\u5341\u4e8c\u6708".split("_"),
            monthsShort: "1\u6708_2\u6708_3\u6708_4\u6708_5\u6708_6\u6708_7\u6708_8\u6708_9\u6708_10\u6708_11\u6708_12\u6708".split("_"),
            weekdays: "\u661f\u671f\u65e5_\u661f\u671f\u4e00_\u661f\u671f\u4e8c_\u661f\u671f\u4e09_\u661f\u671f\u56db_\u661f\u671f\u4e94_\u661f\u671f\u516d".split("_"),
            weekdaysShort: "\u9031\u65e5_\u9031\u4e00_\u9031\u4e8c_\u9031\u4e09_\u9031\u56db_\u9031\u4e94_\u9031\u516d".split("_"),
            weekdaysMin: "\u65e5_\u4e00_\u4e8c_\u4e09_\u56db_\u4e94_\u516d".split("_"),
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "YYYY/MM/DD",
                LL: "YYYY\u5e74M\u6708D\u65e5",
                LLL: "YYYY\u5e74M\u6708D\u65e5 HH:mm",
                LLLL: "YYYY\u5e74M\u6708D\u65e5dddd HH:mm",
                l: "YYYY/M/D",
                ll: "YYYY\u5e74M\u6708D\u65e5",
                lll: "YYYY\u5e74M\u6708D\u65e5 HH:mm",
                llll: "YYYY\u5e74M\u6708D\u65e5dddd HH:mm"
            },
            meridiemParse: /\u51cc\u6668|\u65e9\u4e0a|\u4e0a\u5348|\u4e2d\u5348|\u4e0b\u5348|\u665a\u4e0a/,
            meridiemHour: function (n, t) {
                return 12 === n && (n = 0), "\u51cc\u6668" === t || "\u65e9\u4e0a" === t || "\u4e0a\u5348" === t ? n : "\u4e2d\u5348" === t ? n >= 11 ? n : n + 12 : "\u4e0b\u5348" === t || "\u665a\u4e0a" === t ? n + 12 : void 0
            },
            meridiem: function (n, t, e) {
                var o = 100 * n + t;
                return o < 600 ? "\u51cc\u6668" : o < 900 ? "\u65e9\u4e0a" : o < 1130 ? "\u4e0a\u5348" : o < 1230 ? "\u4e2d\u5348" : o < 1800 ? "\u4e0b\u5348" : "\u665a\u4e0a"
            },
            calendar: {
                sameDay: "[\u4eca\u5929]LT",
                nextDay: "[\u660e\u5929]LT",
                nextWeek: "[\u4e0b]ddddLT",
                lastDay: "[\u6628\u5929]LT",
                lastWeek: "[\u4e0a]ddddLT",
                sameElse: "L"
            },
            dayOfMonthOrdinalParse: /\d{1,2}(\u65e5|\u6708|\u9031)/,
            ordinal: function (n, t) {
                switch (t) {
                    case"d":
                    case"D":
                    case"DDD":
                        return n + "\u65e5";
                    case"M":
                        return n + "\u6708";
                    case"w":
                    case"W":
                        return n + "\u9031";
                    default:
                        return n
                }
            },
            relativeTime: {
                future: "%s\u5167",
                past: "%s\u524d",
                s: "\u5e7e\u79d2",
                ss: "%d \u79d2",
                m: "1 \u5206\u9418",
                mm: "%d \u5206\u9418",
                h: "1 \u5c0f\u6642",
                hh: "%d \u5c0f\u6642",
                d: "1 \u5929",
                dd: "%d \u5929",
                M: "1 \u500b\u6708",
                MM: "%d \u500b\u6708",
                y: "1 \u5e74",
                yy: "%d \u5e74"
            }
        })
    }()
},
UDhR: function (n, t, e) {
    !function (n) {
        "use strict";
        e("wd/R").defineLocale("id", {
            months: "Januari_Februari_Maret_April_Mei_Juni_Juli_Agustus_September_Oktober_November_Desember".split("_"),
            monthsShort: "Jan_Feb_Mar_Apr_Mei_Jun_Jul_Agt_Sep_Okt_Nov_Des".split("_"),
            weekdays: "Minggu_Senin_Selasa_Rabu_Kamis_Jumat_Sabtu".split("_"),
            weekdaysShort: "Min_Sen_Sel_Rab_Kam_Jum_Sab".split("_"),
            weekdaysMin: "Mg_Sn_Sl_Rb_Km_Jm_Sb".split("_"),
            longDateFormat: {
                LT: "HH.mm",
                LTS: "HH.mm.ss",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY [pukul] HH.mm",
                LLLL: "dddd, D MMMM YYYY [pukul] HH.mm"
            },
            meridiemParse: /pagi|siang|sore|malam/,
            meridiemHour: function (n, t) {
                return 12 === n && (n = 0), "pagi" === t ? n : "siang" === t ? n >= 11 ? n : n + 12 : "sore" === t || "malam" === t ? n + 12 : void 0
            },
            meridiem: function (n, t, e) {
                return n < 11 ? "pagi" : n < 15 ? "siang" : n < 19 ? "sore" : "malam"
            },
            calendar: {
                sameDay: "[Hari ini pukul] LT",
                nextDay: "[Besok pukul] LT",
                nextWeek: "dddd [pukul] LT",
                lastDay: "[Kemarin pukul] LT",
                lastWeek: "dddd [lalu pukul] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "dalam %s",
                past: "%s yang lalu",
                s: "beberapa detik",
                ss: "%d detik",
                m: "semenit",
                mm: "%d menit",
                h: "sejam",
                hh: "%d jam",
                d: "sehari",
                dd: "%d hari",
                M: "sebulan",
                MM: "%d bulan",
                y: "setahun",
                yy: "%d tahun"
            },
            week: {dow: 1, doy: 7}
        })
    }()
},
USCx: function (n, t, e) {
    !function (n) {
        "use strict";
        e("wd/R").defineLocale("ga", {
            months: ["Ean\xe1ir", "Feabhra", "M\xe1rta", "Aibre\xe1n", "Bealtaine", "M\xe9itheamh", "I\xfail", "L\xfanasa", "Me\xe1n F\xf3mhair", "Deaireadh F\xf3mhair", "Samhain", "Nollaig"],
            monthsShort: ["Ean\xe1", "Feab", "M\xe1rt", "Aibr", "Beal", "M\xe9it", "I\xfail", "L\xfana", "Me\xe1n", "Deai", "Samh", "Noll"],
            monthsParseExact: !0,
            weekdays: ["D\xe9 Domhnaigh", "D\xe9 Luain", "D\xe9 M\xe1irt", "D\xe9 C\xe9adaoin", "D\xe9ardaoin", "D\xe9 hAoine", "D\xe9 Satharn"],
            weekdaysShort: ["Dom", "Lua", "M\xe1i", "C\xe9a", "D\xe9a", "hAo", "Sat"],
            weekdaysMin: ["Do", "Lu", "M\xe1", "Ce", "D\xe9", "hA", "Sa"],
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY HH:mm",
                LLLL: "dddd, D MMMM YYYY HH:mm"
            },
            calendar: {
                sameDay: "[Inniu ag] LT",
                nextDay: "[Am\xe1rach ag] LT",
                nextWeek: "dddd [ag] LT",
                lastDay: "[Inn\xe9 aig] LT",
                lastWeek: "dddd [seo caite] [ag] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "i %s",
                past: "%s \xf3 shin",
                s: "c\xfapla soicind",
                ss: "%d soicind",
                m: "n\xf3im\xe9ad",
                mm: "%d n\xf3im\xe9ad",
                h: "uair an chloig",
                hh: "%d uair an chloig",
                d: "l\xe1",
                dd: "%d l\xe1",
                M: "m\xed",
                MM: "%d m\xed",
                y: "bliain",
                yy: "%d bliain"
            },
            dayOfMonthOrdinalParse: /\d{1,2}(d|na|mh)/,
            ordinal: function (n) {
                return n + (1 === n ? "d" : n % 10 == 2 ? "na" : "mh")
            },
            week: {dow: 1, doy: 4}
        })
    }()
},
UpQW: function (n, t, e) {
    !function (n) {
        "use strict";
        var t = ["\u062c\u0646\u0648\u0631\u06cc", "\u0641\u0631\u0648\u0631\u06cc", "\u0645\u0627\u0631\u0686", "\u0627\u067e\u0631\u06cc\u0644", "\u0645\u0626\u06cc", "\u062c\u0648\u0646", "\u062c\u0648\u0644\u0627\u0626\u06cc", "\u0627\u06af\u0633\u062a", "\u0633\u062a\u0645\u0628\u0631", "\u0627\u06a9\u062a\u0648\u0628\u0631", "\u0646\u0648\u0645\u0628\u0631", "\u062f\u0633\u0645\u0628\u0631"],
            o = ["\u0627\u062a\u0648\u0627\u0631", "\u067e\u06cc\u0631", "\u0645\u0646\u06af\u0644", "\u0628\u062f\u06be", "\u062c\u0645\u0639\u0631\u0627\u062a", "\u062c\u0645\u0639\u06c1", "\u06c1\u0641\u062a\u06c1"];
        e("wd/R").defineLocale("ur", {
            months: t,
            monthsShort: t,
            weekdays: o,
            weekdaysShort: o,
            weekdaysMin: o,
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY HH:mm",
                LLLL: "dddd\u060c D MMMM YYYY HH:mm"
            },
            meridiemParse: /\u0635\u0628\u062d|\u0634\u0627\u0645/,
            isPM: function (n) {
                return "\u0634\u0627\u0645" === n
            },
            meridiem: function (n, t, e) {
                return n < 12 ? "\u0635\u0628\u062d" : "\u0634\u0627\u0645"
            },
            calendar: {
                sameDay: "[\u0622\u062c \u0628\u0648\u0642\u062a] LT",
                nextDay: "[\u06a9\u0644 \u0628\u0648\u0642\u062a] LT",
                nextWeek: "dddd [\u0628\u0648\u0642\u062a] LT",
                lastDay: "[\u06af\u0630\u0634\u062a\u06c1 \u0631\u0648\u0632 \u0628\u0648\u0642\u062a] LT",
                lastWeek: "[\u06af\u0630\u0634\u062a\u06c1] dddd [\u0628\u0648\u0642\u062a] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "%s \u0628\u0639\u062f",
                past: "%s \u0642\u0628\u0644",
                s: "\u0686\u0646\u062f \u0633\u06cc\u06a9\u0646\u0688",
                ss: "%d \u0633\u06cc\u06a9\u0646\u0688",
                m: "\u0627\u06cc\u06a9 \u0645\u0646\u0679",
                mm: "%d \u0645\u0646\u0679",
                h: "\u0627\u06cc\u06a9 \u06af\u06be\u0646\u0679\u06c1",
                hh: "%d \u06af\u06be\u0646\u0679\u06d2",
                d: "\u0627\u06cc\u06a9 \u062f\u0646",
                dd: "%d \u062f\u0646",
                M: "\u0627\u06cc\u06a9 \u0645\u0627\u06c1",
                MM: "%d \u0645\u0627\u06c1",
                y: "\u0627\u06cc\u06a9 \u0633\u0627\u0644",
                yy: "%d \u0633\u0627\u0644"
            },
            preparse: function (n) {
                return n.replace(/\u060c/g, ",")
            },
            postformat: function (n) {
                return n.replace(/,/g, "\u060c")
            },
            week: {dow: 1, doy: 4}
        })
    }()
},
Ur1D: function (n, t, e) {
    !function (n) {
        "use strict";
        e("wd/R").defineLocale("ss", {
            months: "Bhimbidvwane_Indlovana_Indlov'lenkhulu_Mabasa_Inkhwekhweti_Inhlaba_Kholwane_Ingci_Inyoni_Imphala_Lweti_Ingongoni".split("_"),
            monthsShort: "Bhi_Ina_Inu_Mab_Ink_Inh_Kho_Igc_Iny_Imp_Lwe_Igo".split("_"),
            weekdays: "Lisontfo_Umsombuluko_Lesibili_Lesitsatfu_Lesine_Lesihlanu_Umgcibelo".split("_"),
            weekdaysShort: "Lis_Umb_Lsb_Les_Lsi_Lsh_Umg".split("_"),
            weekdaysMin: "Li_Us_Lb_Lt_Ls_Lh_Ug".split("_"),
            weekdaysParseExact: !0,
            longDateFormat: {
                LT: "h:mm A",
                LTS: "h:mm:ss A",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY h:mm A",
                LLLL: "dddd, D MMMM YYYY h:mm A"
            },
            calendar: {
                sameDay: "[Namuhla nga] LT",
                nextDay: "[Kusasa nga] LT",
                nextWeek: "dddd [nga] LT",
                lastDay: "[Itolo nga] LT",
                lastWeek: "dddd [leliphelile] [nga] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "nga %s",
                past: "wenteka nga %s",
                s: "emizuzwana lomcane",
                ss: "%d mzuzwana",
                m: "umzuzu",
                mm: "%d emizuzu",
                h: "lihora",
                hh: "%d emahora",
                d: "lilanga",
                dd: "%d emalanga",
                M: "inyanga",
                MM: "%d tinyanga",
                y: "umnyaka",
                yy: "%d iminyaka"
            },
            meridiemParse: /ekuseni|emini|entsambama|ebusuku/,
            meridiem: function (n, t, e) {
                return n < 11 ? "ekuseni" : n < 15 ? "emini" : n < 19 ? "entsambama" : "ebusuku"
            },
            meridiemHour: function (n, t) {
                return 12 === n && (n = 0), "ekuseni" === t ? n : "emini" === t ? n >= 11 ? n : n + 12 : "entsambama" === t || "ebusuku" === t ? 0 === n ? 0 : n + 12 : void 0
            },
            dayOfMonthOrdinalParse: /\d{1,2}/,
            ordinal: "%d",
            week: {dow: 1, doy: 4}
        })
    }()
},
V2x9: function (n, t, e) {
    !function (n) {
        "use strict";
        e("wd/R").defineLocale("tet", {
            months: "Janeiru_Fevereiru_Marsu_Abril_Maiu_Ju\xf1u_Jullu_Agustu_Setembru_Outubru_Novembru_Dezembru".split("_"),
            monthsShort: "Jan_Fev_Mar_Abr_Mai_Jun_Jul_Ago_Set_Out_Nov_Dez".split("_"),
            weekdays: "Domingu_Segunda_Tersa_Kuarta_Kinta_Sesta_Sabadu".split("_"),
            weekdaysShort: "Dom_Seg_Ters_Kua_Kint_Sest_Sab".split("_"),
            weekdaysMin: "Do_Seg_Te_Ku_Ki_Ses_Sa".split("_"),
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY HH:mm",
                LLLL: "dddd, D MMMM YYYY HH:mm"
            },
            calendar: {
                sameDay: "[Ohin iha] LT",
                nextDay: "[Aban iha] LT",
                nextWeek: "dddd [iha] LT",
                lastDay: "[Horiseik iha] LT",
                lastWeek: "dddd [semana kotuk] [iha] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "iha %s",
                past: "%s liuba",
                s: "minutu balun",
                ss: "minutu %d",
                m: "minutu ida",
                mm: "minutu %d",
                h: "oras ida",
                hh: "oras %d",
                d: "loron ida",
                dd: "loron %d",
                M: "fulan ida",
                MM: "fulan %d",
                y: "tinan ida",
                yy: "tinan %d"
            },
            dayOfMonthOrdinalParse: /\d{1,2}(st|nd|rd|th)/,
            ordinal: function (n) {
                var t = n % 10;
                return n + (1 == ~~(n % 100 / 10) ? "th" : 1 === t ? "st" : 2 === t ? "nd" : 3 === t ? "rd" : "th")
            },
            week: {dow: 1, doy: 4}
        })
    }()
},
Vclq: function (n, t, e) {
    !function (n) {
        "use strict";
        var t = "ene._feb._mar._abr._may._jun._jul._ago._sep._oct._nov._dic.".split("_"),
            e = "ene_feb_mar_abr_may_jun_jul_ago_sep_oct_nov_dic".split("_"),
            o = [/^ene/i, /^feb/i, /^mar/i, /^abr/i, /^may/i, /^jun/i, /^jul/i, /^ago/i, /^sep/i, /^oct/i, /^nov/i, /^dic/i],
            l = /^(enero|febrero|marzo|abril|mayo|junio|julio|agosto|septiembre|octubre|noviembre|diciembre|ene\.?|feb\.?|mar\.?|abr\.?|may\.?|jun\.?|jul\.?|ago\.?|sep\.?|oct\.?|nov\.?|dic\.?)/i;
        n.defineLocale("es-us", {
            months: "enero_febrero_marzo_abril_mayo_junio_julio_agosto_septiembre_octubre_noviembre_diciembre".split("_"),
            monthsShort: function (n, o) {
                return n ? /-MMM-/.test(o) ? e[n.month()] : t[n.month()] : t
            },
            monthsRegex: l,
            monthsShortRegex: l,
            monthsStrictRegex: /^(enero|febrero|marzo|abril|mayo|junio|julio|agosto|septiembre|octubre|noviembre|diciembre)/i,
            monthsShortStrictRegex: /^(ene\.?|feb\.?|mar\.?|abr\.?|may\.?|jun\.?|jul\.?|ago\.?|sep\.?|oct\.?|nov\.?|dic\.?)/i,
            monthsParse: o,
            longMonthsParse: o,
            shortMonthsParse: o,
            weekdays: "domingo_lunes_martes_mi\xe9rcoles_jueves_viernes_s\xe1bado".split("_"),
            weekdaysShort: "dom._lun._mar._mi\xe9._jue._vie._s\xe1b.".split("_"),
            weekdaysMin: "do_lu_ma_mi_ju_vi_s\xe1".split("_"),
            weekdaysParseExact: !0,
            longDateFormat: {
                LT: "h:mm A",
                LTS: "h:mm:ss A",
                L: "MM/DD/YYYY",
                LL: "D [de] MMMM [de] YYYY",
                LLL: "D [de] MMMM [de] YYYY h:mm A",
                LLLL: "dddd, D [de] MMMM [de] YYYY h:mm A"
            },
            calendar: {
                sameDay: function () {
                    return "[hoy a la" + (1 !== this.hours() ? "s" : "") + "] LT"
                }, nextDay: function () {
                    return "[ma\xf1ana a la" + (1 !== this.hours() ? "s" : "") + "] LT"
                }, nextWeek: function () {
                    return "dddd [a la" + (1 !== this.hours() ? "s" : "") + "] LT"
                }, lastDay: function () {
                    return "[ayer a la" + (1 !== this.hours() ? "s" : "") + "] LT"
                }, lastWeek: function () {
                    return "[el] dddd [pasado a la" + (1 !== this.hours() ? "s" : "") + "] LT"
                }, sameElse: "L"
            },
            relativeTime: {
                future: "en %s",
                past: "hace %s",
                s: "unos segundos",
                ss: "%d segundos",
                m: "un minuto",
                mm: "%d minutos",
                h: "una hora",
                hh: "%d horas",
                d: "un d\xeda",
                dd: "%d d\xedas",
                M: "un mes",
                MM: "%d meses",
                y: "un a\xf1o",
                yy: "%d a\xf1os"
            },
            dayOfMonthOrdinalParse: /\d{1,2}\xba/,
            ordinal: "%d\xba",
            week: {dow: 0, doy: 6}
        })
    }(e("wd/R"))
},
WYrj: function (n, t, e) {
    !function (n) {
        "use strict";
        var t = ["\u0796\u07ac\u0782\u07aa\u0787\u07a6\u0783\u07a9", "\u078a\u07ac\u0784\u07b0\u0783\u07aa\u0787\u07a6\u0783\u07a9", "\u0789\u07a7\u0783\u07a8\u0797\u07aa", "\u0787\u07ad\u0795\u07b0\u0783\u07a9\u078d\u07aa", "\u0789\u07ad", "\u0796\u07ab\u0782\u07b0", "\u0796\u07aa\u078d\u07a6\u0787\u07a8", "\u0787\u07af\u078e\u07a6\u0790\u07b0\u0793\u07aa", "\u0790\u07ac\u0795\u07b0\u0793\u07ac\u0789\u07b0\u0784\u07a6\u0783\u07aa", "\u0787\u07ae\u0786\u07b0\u0793\u07af\u0784\u07a6\u0783\u07aa", "\u0782\u07ae\u0788\u07ac\u0789\u07b0\u0784\u07a6\u0783\u07aa", "\u0791\u07a8\u0790\u07ac\u0789\u07b0\u0784\u07a6\u0783\u07aa"],
            o = ["\u0787\u07a7\u078b\u07a8\u0787\u07b0\u078c\u07a6", "\u0780\u07af\u0789\u07a6", "\u0787\u07a6\u0782\u07b0\u078e\u07a7\u0783\u07a6", "\u0784\u07aa\u078b\u07a6", "\u0784\u07aa\u0783\u07a7\u0790\u07b0\u078a\u07a6\u078c\u07a8", "\u0780\u07aa\u0786\u07aa\u0783\u07aa", "\u0780\u07ae\u0782\u07a8\u0780\u07a8\u0783\u07aa"];
        e("wd/R").defineLocale("dv", {
            months: t,
            monthsShort: t,
            weekdays: o,
            weekdaysShort: o,
            weekdaysMin: "\u0787\u07a7\u078b\u07a8_\u0780\u07af\u0789\u07a6_\u0787\u07a6\u0782\u07b0_\u0784\u07aa\u078b\u07a6_\u0784\u07aa\u0783\u07a7_\u0780\u07aa\u0786\u07aa_\u0780\u07ae\u0782\u07a8".split("_"),
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "D/M/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY HH:mm",
                LLLL: "dddd D MMMM YYYY HH:mm"
            },
            meridiemParse: /\u0789\u0786|\u0789\u078a/,
            isPM: function (n) {
                return "\u0789\u078a" === n
            },
            meridiem: function (n, t, e) {
                return n < 12 ? "\u0789\u0786" : "\u0789\u078a"
            },
            calendar: {
                sameDay: "[\u0789\u07a8\u0787\u07a6\u078b\u07aa] LT",
                nextDay: "[\u0789\u07a7\u078b\u07a6\u0789\u07a7] LT",
                nextWeek: "dddd LT",
                lastDay: "[\u0787\u07a8\u0787\u07b0\u0794\u07ac] LT",
                lastWeek: "[\u078a\u07a7\u0787\u07a8\u078c\u07aa\u0788\u07a8] dddd LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "\u078c\u07ac\u0783\u07ad\u078e\u07a6\u0787\u07a8 %s",
                past: "\u0786\u07aa\u0783\u07a8\u0782\u07b0 %s",
                s: "\u0790\u07a8\u0786\u07aa\u0782\u07b0\u078c\u07aa\u0786\u07ae\u0785\u07ac\u0787\u07b0",
                ss: "d% \u0790\u07a8\u0786\u07aa\u0782\u07b0\u078c\u07aa",
                m: "\u0789\u07a8\u0782\u07a8\u0793\u07ac\u0787\u07b0",
                mm: "\u0789\u07a8\u0782\u07a8\u0793\u07aa %d",
                h: "\u078e\u07a6\u0791\u07a8\u0787\u07a8\u0783\u07ac\u0787\u07b0",
                hh: "\u078e\u07a6\u0791\u07a8\u0787\u07a8\u0783\u07aa %d",
                d: "\u078b\u07aa\u0788\u07a6\u0780\u07ac\u0787\u07b0",
                dd: "\u078b\u07aa\u0788\u07a6\u0790\u07b0 %d",
                M: "\u0789\u07a6\u0780\u07ac\u0787\u07b0",
                MM: "\u0789\u07a6\u0790\u07b0 %d",
                y: "\u0787\u07a6\u0780\u07a6\u0783\u07ac\u0787\u07b0",
                yy: "\u0787\u07a6\u0780\u07a6\u0783\u07aa %d"
            },
            preparse: function (n) {
                return n.replace(/\u060c/g, ",")
            },
            postformat: function (n) {
                return n.replace(/,/g, "\u060c")
            },
            week: {dow: 7, doy: 12}
        })
    }()
},
WxRl: function (n, t, e) {
    !function (n) {
        "use strict";
        var t = "vas\xe1rnap h\xe9tf\u0151n kedden szerd\xe1n cs\xfct\xf6rt\xf6k\xf6n p\xe9nteken szombaton".split(" ");

        function e(n, t, e, o) {
            var l = n;
            switch (e) {
                case"s":
                    return o || t ? "n\xe9h\xe1ny m\xe1sodperc" : "n\xe9h\xe1ny m\xe1sodperce";
                case"ss":
                    return l + (o || t) ? " m\xe1sodperc" : " m\xe1sodperce";
                case"m":
                    return "egy" + (o || t ? " perc" : " perce");
                case"mm":
                    return l + (o || t ? " perc" : " perce");
                case"h":
                    return "egy" + (o || t ? " \xf3ra" : " \xf3r\xe1ja");
                case"hh":
                    return l + (o || t ? " \xf3ra" : " \xf3r\xe1ja");
                case"d":
                    return "egy" + (o || t ? " nap" : " napja");
                case"dd":
                    return l + (o || t ? " nap" : " napja");
                case"M":
                    return "egy" + (o || t ? " h\xf3nap" : " h\xf3napja");
                case"MM":
                    return l + (o || t ? " h\xf3nap" : " h\xf3napja");
                case"y":
                    return "egy" + (o || t ? " \xe9v" : " \xe9ve");
                case"yy":
                    return l + (o || t ? " \xe9v" : " \xe9ve")
            }
            return ""
        }

        function o(n) {
            return (n ? "" : "[m\xfalt] ") + "[" + t[this.day()] + "] LT[-kor]"
        }

        n.defineLocale("hu", {
            months: "janu\xe1r_febru\xe1r_m\xe1rcius_\xe1prilis_m\xe1jus_j\xfanius_j\xfalius_augusztus_szeptember_okt\xf3ber_november_december".split("_"),
            monthsShort: "jan_feb_m\xe1rc_\xe1pr_m\xe1j_j\xfan_j\xfal_aug_szept_okt_nov_dec".split("_"),
            weekdays: "vas\xe1rnap_h\xe9tf\u0151_kedd_szerda_cs\xfct\xf6rt\xf6k_p\xe9ntek_szombat".split("_"),
            weekdaysShort: "vas_h\xe9t_kedd_sze_cs\xfct_p\xe9n_szo".split("_"),
            weekdaysMin: "v_h_k_sze_cs_p_szo".split("_"),
            longDateFormat: {
                LT: "H:mm",
                LTS: "H:mm:ss",
                L: "YYYY.MM.DD.",
                LL: "YYYY. MMMM D.",
                LLL: "YYYY. MMMM D. H:mm",
                LLLL: "YYYY. MMMM D., dddd H:mm"
            },
            meridiemParse: /de|du/i,
            isPM: function (n) {
                return "u" === n.charAt(1).toLowerCase()
            },
            meridiem: function (n, t, e) {
                return n < 12 ? !0 === e ? "de" : "DE" : !0 === e ? "du" : "DU"
            },
            calendar: {
                sameDay: "[ma] LT[-kor]", nextDay: "[holnap] LT[-kor]", nextWeek: function () {
                    return o.call(this, !0)
                }, lastDay: "[tegnap] LT[-kor]", lastWeek: function () {
                    return o.call(this, !1)
                }, sameElse: "L"
            },
            relativeTime: {
                future: "%s m\xfalva",
                past: "%s",
                s: e,
                ss: e,
                m: e,
                mm: e,
                h: e,
                hh: e,
                d: e,
                dd: e,
                M: e,
                MM: e,
                y: e,
                yy: e
            },
            dayOfMonthOrdinalParse: /\d{1,2}\./,
            ordinal: "%d.",
            week: {dow: 1, doy: 4}
        })
    }(e("wd/R"))
},
X709: function (n, t, e) {
    !function (n) {
        "use strict";
        e("wd/R").defineLocale("sv", {
            months: "januari_februari_mars_april_maj_juni_juli_augusti_september_oktober_november_december".split("_"),
            monthsShort: "jan_feb_mar_apr_maj_jun_jul_aug_sep_okt_nov_dec".split("_"),
            weekdays: "s\xf6ndag_m\xe5ndag_tisdag_onsdag_torsdag_fredag_l\xf6rdag".split("_"),
            weekdaysShort: "s\xf6n_m\xe5n_tis_ons_tor_fre_l\xf6r".split("_"),
            weekdaysMin: "s\xf6_m\xe5_ti_on_to_fr_l\xf6".split("_"),
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "YYYY-MM-DD",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY [kl.] HH:mm",
                LLLL: "dddd D MMMM YYYY [kl.] HH:mm",
                lll: "D MMM YYYY HH:mm",
                llll: "ddd D MMM YYYY HH:mm"
            },
            calendar: {
                sameDay: "[Idag] LT",
                nextDay: "[Imorgon] LT",
                lastDay: "[Ig\xe5r] LT",
                nextWeek: "[P\xe5] dddd LT",
                lastWeek: "[I] dddd[s] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "om %s",
                past: "f\xf6r %s sedan",
                s: "n\xe5gra sekunder",
                ss: "%d sekunder",
                m: "en minut",
                mm: "%d minuter",
                h: "en timme",
                hh: "%d timmar",
                d: "en dag",
                dd: "%d dagar",
                M: "en m\xe5nad",
                MM: "%d m\xe5nader",
                y: "ett \xe5r",
                yy: "%d \xe5r"
            },
            dayOfMonthOrdinalParse: /\d{1,2}(e|a)/,
            ordinal: function (n) {
                var t = n % 10;
                return n + (1 == ~~(n % 100 / 10) ? "e" : 1 === t ? "a" : 2 === t ? "a" : "e")
            },
            week: {dow: 1, doy: 4}
        })
    }()
},
XDpg: function (n, t, e) {
    !function (n) {
        "use strict";
        e("wd/R").defineLocale("zh-cn", {
            months: "\u4e00\u6708_\u4e8c\u6708_\u4e09\u6708_\u56db\u6708_\u4e94\u6708_\u516d\u6708_\u4e03\u6708_\u516b\u6708_\u4e5d\u6708_\u5341\u6708_\u5341\u4e00\u6708_\u5341\u4e8c\u6708".split("_"),
            monthsShort: "1\u6708_2\u6708_3\u6708_4\u6708_5\u6708_6\u6708_7\u6708_8\u6708_9\u6708_10\u6708_11\u6708_12\u6708".split("_"),
            weekdays: "\u661f\u671f\u65e5_\u661f\u671f\u4e00_\u661f\u671f\u4e8c_\u661f\u671f\u4e09_\u661f\u671f\u56db_\u661f\u671f\u4e94_\u661f\u671f\u516d".split("_"),
            weekdaysShort: "\u5468\u65e5_\u5468\u4e00_\u5468\u4e8c_\u5468\u4e09_\u5468\u56db_\u5468\u4e94_\u5468\u516d".split("_"),
            weekdaysMin: "\u65e5_\u4e00_\u4e8c_\u4e09_\u56db_\u4e94_\u516d".split("_"),
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "YYYY/MM/DD",
                LL: "YYYY\u5e74M\u6708D\u65e5",
                LLL: "YYYY\u5e74M\u6708D\u65e5Ah\u70b9mm\u5206",
                LLLL: "YYYY\u5e74M\u6708D\u65e5ddddAh\u70b9mm\u5206",
                l: "YYYY/M/D",
                ll: "YYYY\u5e74M\u6708D\u65e5",
                lll: "YYYY\u5e74M\u6708D\u65e5 HH:mm",
                llll: "YYYY\u5e74M\u6708D\u65e5dddd HH:mm"
            },
            meridiemParse: /\u51cc\u6668|\u65e9\u4e0a|\u4e0a\u5348|\u4e2d\u5348|\u4e0b\u5348|\u665a\u4e0a/,
            meridiemHour: function (n, t) {
                return 12 === n && (n = 0), "\u51cc\u6668" === t || "\u65e9\u4e0a" === t || "\u4e0a\u5348" === t ? n : "\u4e0b\u5348" === t || "\u665a\u4e0a" === t ? n + 12 : n >= 11 ? n : n + 12
            },
            meridiem: function (n, t, e) {
                var o = 100 * n + t;
                return o < 600 ? "\u51cc\u6668" : o < 900 ? "\u65e9\u4e0a" : o < 1130 ? "\u4e0a\u5348" : o < 1230 ? "\u4e2d\u5348" : o < 1800 ? "\u4e0b\u5348" : "\u665a\u4e0a"
            },
            calendar: {
                sameDay: "[\u4eca\u5929]LT",
                nextDay: "[\u660e\u5929]LT",
                nextWeek: "[\u4e0b]ddddLT",
                lastDay: "[\u6628\u5929]LT",
                lastWeek: "[\u4e0a]ddddLT",
                sameElse: "L"
            },
            dayOfMonthOrdinalParse: /\d{1,2}(\u65e5|\u6708|\u5468)/,
            ordinal: function (n, t) {
                switch (t) {
                    case"d":
                    case"D":
                    case"DDD":
                        return n + "\u65e5";
                    case"M":
                        return n + "\u6708";
                    case"w":
                    case"W":
                        return n + "\u5468";
                    default:
                        return n
                }
            },
            relativeTime: {
                future: "%s\u5185",
                past: "%s\u524d",
                s: "\u51e0\u79d2",
                ss: "%d \u79d2",
                m: "1 \u5206\u949f",
                mm: "%d \u5206\u949f",
                h: "1 \u5c0f\u65f6",
                hh: "%d \u5c0f\u65f6",
                d: "1 \u5929",
                dd: "%d \u5929",
                M: "1 \u4e2a\u6708",
                MM: "%d \u4e2a\u6708",
                y: "1 \u5e74",
                yy: "%d \u5e74"
            },
            week: {dow: 1, doy: 4}
        })
    }()
},
XLvN: function (n, t, e) {
    !function (n) {
        "use strict";
        e("wd/R").defineLocale("te", {
            months: "\u0c1c\u0c28\u0c35\u0c30\u0c3f_\u0c2b\u0c3f\u0c2c\u0c4d\u0c30\u0c35\u0c30\u0c3f_\u0c2e\u0c3e\u0c30\u0c4d\u0c1a\u0c3f_\u0c0f\u0c2a\u0c4d\u0c30\u0c3f\u0c32\u0c4d_\u0c2e\u0c47_\u0c1c\u0c42\u0c28\u0c4d_\u0c1c\u0c41\u0c32\u0c48_\u0c06\u0c17\u0c38\u0c4d\u0c1f\u0c41_\u0c38\u0c46\u0c2a\u0c4d\u0c1f\u0c46\u0c02\u0c2c\u0c30\u0c4d_\u0c05\u0c15\u0c4d\u0c1f\u0c4b\u0c2c\u0c30\u0c4d_\u0c28\u0c35\u0c02\u0c2c\u0c30\u0c4d_\u0c21\u0c3f\u0c38\u0c46\u0c02\u0c2c\u0c30\u0c4d".split("_"),
            monthsShort: "\u0c1c\u0c28._\u0c2b\u0c3f\u0c2c\u0c4d\u0c30._\u0c2e\u0c3e\u0c30\u0c4d\u0c1a\u0c3f_\u0c0f\u0c2a\u0c4d\u0c30\u0c3f._\u0c2e\u0c47_\u0c1c\u0c42\u0c28\u0c4d_\u0c1c\u0c41\u0c32\u0c48_\u0c06\u0c17._\u0c38\u0c46\u0c2a\u0c4d._\u0c05\u0c15\u0c4d\u0c1f\u0c4b._\u0c28\u0c35._\u0c21\u0c3f\u0c38\u0c46.".split("_"),
            monthsParseExact: !0,
            weekdays: "\u0c06\u0c26\u0c3f\u0c35\u0c3e\u0c30\u0c02_\u0c38\u0c4b\u0c2e\u0c35\u0c3e\u0c30\u0c02_\u0c2e\u0c02\u0c17\u0c33\u0c35\u0c3e\u0c30\u0c02_\u0c2c\u0c41\u0c27\u0c35\u0c3e\u0c30\u0c02_\u0c17\u0c41\u0c30\u0c41\u0c35\u0c3e\u0c30\u0c02_\u0c36\u0c41\u0c15\u0c4d\u0c30\u0c35\u0c3e\u0c30\u0c02_\u0c36\u0c28\u0c3f\u0c35\u0c3e\u0c30\u0c02".split("_"),
            weekdaysShort: "\u0c06\u0c26\u0c3f_\u0c38\u0c4b\u0c2e_\u0c2e\u0c02\u0c17\u0c33_\u0c2c\u0c41\u0c27_\u0c17\u0c41\u0c30\u0c41_\u0c36\u0c41\u0c15\u0c4d\u0c30_\u0c36\u0c28\u0c3f".split("_"),
            weekdaysMin: "\u0c06_\u0c38\u0c4b_\u0c2e\u0c02_\u0c2c\u0c41_\u0c17\u0c41_\u0c36\u0c41_\u0c36".split("_"),
            longDateFormat: {
                LT: "A h:mm",
                LTS: "A h:mm:ss",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY, A h:mm",
                LLLL: "dddd, D MMMM YYYY, A h:mm"
            },
            calendar: {
                sameDay: "[\u0c28\u0c47\u0c21\u0c41] LT",
                nextDay: "[\u0c30\u0c47\u0c2a\u0c41] LT",
                nextWeek: "dddd, LT",
                lastDay: "[\u0c28\u0c3f\u0c28\u0c4d\u0c28] LT",
                lastWeek: "[\u0c17\u0c24] dddd, LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "%s \u0c32\u0c4b",
                past: "%s \u0c15\u0c4d\u0c30\u0c3f\u0c24\u0c02",
                s: "\u0c15\u0c4a\u0c28\u0c4d\u0c28\u0c3f \u0c15\u0c4d\u0c37\u0c23\u0c3e\u0c32\u0c41",
                ss: "%d \u0c38\u0c46\u0c15\u0c28\u0c4d\u0c32\u0c41",
                m: "\u0c12\u0c15 \u0c28\u0c3f\u0c2e\u0c3f\u0c37\u0c02",
                mm: "%d \u0c28\u0c3f\u0c2e\u0c3f\u0c37\u0c3e\u0c32\u0c41",
                h: "\u0c12\u0c15 \u0c17\u0c02\u0c1f",
                hh: "%d \u0c17\u0c02\u0c1f\u0c32\u0c41",
                d: "\u0c12\u0c15 \u0c30\u0c4b\u0c1c\u0c41",
                dd: "%d \u0c30\u0c4b\u0c1c\u0c41\u0c32\u0c41",
                M: "\u0c12\u0c15 \u0c28\u0c46\u0c32",
                MM: "%d \u0c28\u0c46\u0c32\u0c32\u0c41",
                y: "\u0c12\u0c15 \u0c38\u0c02\u0c35\u0c24\u0c4d\u0c38\u0c30\u0c02",
                yy: "%d \u0c38\u0c02\u0c35\u0c24\u0c4d\u0c38\u0c30\u0c3e\u0c32\u0c41"
            },
            dayOfMonthOrdinalParse: /\d{1,2}\u0c35/,
            ordinal: "%d\u0c35",
            meridiemParse: /\u0c30\u0c3e\u0c24\u0c4d\u0c30\u0c3f|\u0c09\u0c26\u0c2f\u0c02|\u0c2e\u0c27\u0c4d\u0c2f\u0c3e\u0c39\u0c4d\u0c28\u0c02|\u0c38\u0c3e\u0c2f\u0c02\u0c24\u0c4d\u0c30\u0c02/,
            meridiemHour: function (n, t) {
                return 12 === n && (n = 0), "\u0c30\u0c3e\u0c24\u0c4d\u0c30\u0c3f" === t ? n < 4 ? n : n + 12 : "\u0c09\u0c26\u0c2f\u0c02" === t ? n : "\u0c2e\u0c27\u0c4d\u0c2f\u0c3e\u0c39\u0c4d\u0c28\u0c02" === t ? n >= 10 ? n : n + 12 : "\u0c38\u0c3e\u0c2f\u0c02\u0c24\u0c4d\u0c30\u0c02" === t ? n + 12 : void 0
            },
            meridiem: function (n, t, e) {
                return n < 4 ? "\u0c30\u0c3e\u0c24\u0c4d\u0c30\u0c3f" : n < 10 ? "\u0c09\u0c26\u0c2f\u0c02" : n < 17 ? "\u0c2e\u0c27\u0c4d\u0c2f\u0c3e\u0c39\u0c4d\u0c28\u0c02" : n < 20 ? "\u0c38\u0c3e\u0c2f\u0c02\u0c24\u0c4d\u0c30\u0c02" : "\u0c30\u0c3e\u0c24\u0c4d\u0c30\u0c3f"
            },
            week: {dow: 0, doy: 6}
        })
    }()
},
YRex: function (n, t, e) {
    !function (n) {
        "use strict";
        e("wd/R").defineLocale("ug-cn", {
            months: "\u064a\u0627\u0646\u06cb\u0627\u0631_\u0641\u06d0\u06cb\u0631\u0627\u0644_\u0645\u0627\u0631\u062a_\u0626\u0627\u067e\u0631\u06d0\u0644_\u0645\u0627\u064a_\u0626\u0649\u064a\u06c7\u0646_\u0626\u0649\u064a\u06c7\u0644_\u0626\u0627\u06cb\u063a\u06c7\u0633\u062a_\u0633\u06d0\u0646\u062a\u06d5\u0628\u0649\u0631_\u0626\u06c6\u0643\u062a\u06d5\u0628\u0649\u0631_\u0646\u0648\u064a\u0627\u0628\u0649\u0631_\u062f\u06d0\u0643\u0627\u0628\u0649\u0631".split("_"),
            monthsShort: "\u064a\u0627\u0646\u06cb\u0627\u0631_\u0641\u06d0\u06cb\u0631\u0627\u0644_\u0645\u0627\u0631\u062a_\u0626\u0627\u067e\u0631\u06d0\u0644_\u0645\u0627\u064a_\u0626\u0649\u064a\u06c7\u0646_\u0626\u0649\u064a\u06c7\u0644_\u0626\u0627\u06cb\u063a\u06c7\u0633\u062a_\u0633\u06d0\u0646\u062a\u06d5\u0628\u0649\u0631_\u0626\u06c6\u0643\u062a\u06d5\u0628\u0649\u0631_\u0646\u0648\u064a\u0627\u0628\u0649\u0631_\u062f\u06d0\u0643\u0627\u0628\u0649\u0631".split("_"),
            weekdays: "\u064a\u06d5\u0643\u0634\u06d5\u0646\u0628\u06d5_\u062f\u06c8\u0634\u06d5\u0646\u0628\u06d5_\u0633\u06d5\u064a\u0634\u06d5\u0646\u0628\u06d5_\u0686\u0627\u0631\u0634\u06d5\u0646\u0628\u06d5_\u067e\u06d5\u064a\u0634\u06d5\u0646\u0628\u06d5_\u062c\u06c8\u0645\u06d5_\u0634\u06d5\u0646\u0628\u06d5".split("_"),
            weekdaysShort: "\u064a\u06d5_\u062f\u06c8_\u0633\u06d5_\u0686\u0627_\u067e\u06d5_\u062c\u06c8_\u0634\u06d5".split("_"),
            weekdaysMin: "\u064a\u06d5_\u062f\u06c8_\u0633\u06d5_\u0686\u0627_\u067e\u06d5_\u062c\u06c8_\u0634\u06d5".split("_"),
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "YYYY-MM-DD",
                LL: "YYYY-\u064a\u0649\u0644\u0649M-\u0626\u0627\u064a\u0646\u0649\u06adD-\u0643\u06c8\u0646\u0649",
                LLL: "YYYY-\u064a\u0649\u0644\u0649M-\u0626\u0627\u064a\u0646\u0649\u06adD-\u0643\u06c8\u0646\u0649\u060c HH:mm",
                LLLL: "dddd\u060c YYYY-\u064a\u0649\u0644\u0649M-\u0626\u0627\u064a\u0646\u0649\u06adD-\u0643\u06c8\u0646\u0649\u060c HH:mm"
            },
            meridiemParse: /\u064a\u06d0\u0631\u0649\u0645 \u0643\u06d0\u0686\u06d5|\u0633\u06d5\u06be\u06d5\u0631|\u0686\u06c8\u0634\u062a\u0649\u0646 \u0628\u06c7\u0631\u06c7\u0646|\u0686\u06c8\u0634|\u0686\u06c8\u0634\u062a\u0649\u0646 \u0643\u06d0\u064a\u0649\u0646|\u0643\u06d5\u0686/,
            meridiemHour: function (n, t) {
                return 12 === n && (n = 0), "\u064a\u06d0\u0631\u0649\u0645 \u0643\u06d0\u0686\u06d5" === t || "\u0633\u06d5\u06be\u06d5\u0631" === t || "\u0686\u06c8\u0634\u062a\u0649\u0646 \u0628\u06c7\u0631\u06c7\u0646" === t ? n : "\u0686\u06c8\u0634\u062a\u0649\u0646 \u0643\u06d0\u064a\u0649\u0646" === t || "\u0643\u06d5\u0686" === t ? n + 12 : n >= 11 ? n : n + 12
            },
            meridiem: function (n, t, e) {
                var o = 100 * n + t;
                return o < 600 ? "\u064a\u06d0\u0631\u0649\u0645 \u0643\u06d0\u0686\u06d5" : o < 900 ? "\u0633\u06d5\u06be\u06d5\u0631" : o < 1130 ? "\u0686\u06c8\u0634\u062a\u0649\u0646 \u0628\u06c7\u0631\u06c7\u0646" : o < 1230 ? "\u0686\u06c8\u0634" : o < 1800 ? "\u0686\u06c8\u0634\u062a\u0649\u0646 \u0643\u06d0\u064a\u0649\u0646" : "\u0643\u06d5\u0686"
            },
            calendar: {
                sameDay: "[\u0628\u06c8\u06af\u06c8\u0646 \u0633\u0627\u0626\u06d5\u062a] LT",
                nextDay: "[\u0626\u06d5\u062a\u06d5 \u0633\u0627\u0626\u06d5\u062a] LT",
                nextWeek: "[\u0643\u06d0\u0644\u06d5\u0631\u0643\u0649] dddd [\u0633\u0627\u0626\u06d5\u062a] LT",
                lastDay: "[\u062a\u06c6\u0646\u06c8\u06af\u06c8\u0646] LT",
                lastWeek: "[\u0626\u0627\u0644\u062f\u0649\u0646\u0642\u0649] dddd [\u0633\u0627\u0626\u06d5\u062a] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "%s \u0643\u06d0\u064a\u0649\u0646",
                past: "%s \u0628\u06c7\u0631\u06c7\u0646",
                s: "\u0646\u06d5\u0686\u0686\u06d5 \u0633\u06d0\u0643\u0648\u0646\u062a",
                ss: "%d \u0633\u06d0\u0643\u0648\u0646\u062a",
                m: "\u0628\u0649\u0631 \u0645\u0649\u0646\u06c7\u062a",
                mm: "%d \u0645\u0649\u0646\u06c7\u062a",
                h: "\u0628\u0649\u0631 \u0633\u0627\u0626\u06d5\u062a",
                hh: "%d \u0633\u0627\u0626\u06d5\u062a",
                d: "\u0628\u0649\u0631 \u0643\u06c8\u0646",
                dd: "%d \u0643\u06c8\u0646",
                M: "\u0628\u0649\u0631 \u0626\u0627\u064a",
                MM: "%d \u0626\u0627\u064a",
                y: "\u0628\u0649\u0631 \u064a\u0649\u0644",
                yy: "%d \u064a\u0649\u0644"
            },
            dayOfMonthOrdinalParse: /\d{1,2}(-\u0643\u06c8\u0646\u0649|-\u0626\u0627\u064a|-\u06be\u06d5\u067e\u062a\u06d5)/,
            ordinal: function (n, t) {
                switch (t) {
                    case"d":
                    case"D":
                    case"DDD":
                        return n + "-\u0643\u06c8\u0646\u0649";
                    case"w":
                    case"W":
                        return n + "-\u06be\u06d5\u067e\u062a\u06d5";
                    default:
                        return n
                }
            },
            preparse: function (n) {
                return n.replace(/\u060c/g, ",")
            },
            postformat: function (n) {
                return n.replace(/,/g, "\u060c")
            },
            week: {dow: 1, doy: 7}
        })
    }()
},
Z4QM: function (n, t, e) {
    !function (n) {
        "use strict";
        var t = ["\u062c\u0646\u0648\u0631\u064a", "\u0641\u064a\u0628\u0631\u0648\u0631\u064a", "\u0645\u0627\u0631\u0686", "\u0627\u067e\u0631\u064a\u0644", "\u0645\u0626\u064a", "\u062c\u0648\u0646", "\u062c\u0648\u0644\u0627\u0621\u0650", "\u0622\u06af\u0633\u067d", "\u0633\u064a\u067e\u067d\u0645\u0628\u0631", "\u0622\u06aa\u067d\u0648\u0628\u0631", "\u0646\u0648\u0645\u0628\u0631", "\u068a\u0633\u0645\u0628\u0631"],
            o = ["\u0622\u0686\u0631", "\u0633\u0648\u0645\u0631", "\u0627\u06b1\u0627\u0631\u0648", "\u0627\u0631\u0628\u0639", "\u062e\u0645\u064a\u0633", "\u062c\u0645\u0639", "\u0687\u0646\u0687\u0631"];
        e("wd/R").defineLocale("sd", {
            months: t,
            monthsShort: t,
            weekdays: o,
            weekdaysShort: o,
            weekdaysMin: o,
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY HH:mm",
                LLLL: "dddd\u060c D MMMM YYYY HH:mm"
            },
            meridiemParse: /\u0635\u0628\u062d|\u0634\u0627\u0645/,
            isPM: function (n) {
                return "\u0634\u0627\u0645" === n
            },
            meridiem: function (n, t, e) {
                return n < 12 ? "\u0635\u0628\u062d" : "\u0634\u0627\u0645"
            },
            calendar: {
                sameDay: "[\u0627\u0684] LT",
                nextDay: "[\u0633\u0680\u0627\u06bb\u064a] LT",
                nextWeek: "dddd [\u0627\u06b3\u064a\u0646 \u0647\u0641\u062a\u064a \u062a\u064a] LT",
                lastDay: "[\u06aa\u0627\u0644\u0647\u0647] LT",
                lastWeek: "[\u06af\u0632\u0631\u064a\u0644 \u0647\u0641\u062a\u064a] dddd [\u062a\u064a] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "%s \u067e\u0648\u0621",
                past: "%s \u0627\u06b3",
                s: "\u0686\u0646\u062f \u0633\u064a\u06aa\u0646\u068a",
                ss: "%d \u0633\u064a\u06aa\u0646\u068a",
                m: "\u0647\u06aa \u0645\u0646\u067d",
                mm: "%d \u0645\u0646\u067d",
                h: "\u0647\u06aa \u06aa\u0644\u0627\u06aa",
                hh: "%d \u06aa\u0644\u0627\u06aa",
                d: "\u0647\u06aa \u068f\u064a\u0646\u0647\u0646",
                dd: "%d \u068f\u064a\u0646\u0647\u0646",
                M: "\u0647\u06aa \u0645\u0647\u064a\u0646\u0648",
                MM: "%d \u0645\u0647\u064a\u0646\u0627",
                y: "\u0647\u06aa \u0633\u0627\u0644",
                yy: "%d \u0633\u0627\u0644"
            },
            preparse: function (n) {
                return n.replace(/\u060c/g, ",")
            },
            postformat: function (n) {
                return n.replace(/,/g, "\u060c")
            },
            week: {dow: 1, doy: 4}
        })
    }()
},
ZAMP: function (n, t, e) {
    !function (n) {
        "use strict";
        e("wd/R").defineLocale("ms-my", {
            months: "Januari_Februari_Mac_April_Mei_Jun_Julai_Ogos_September_Oktober_November_Disember".split("_"),
            monthsShort: "Jan_Feb_Mac_Apr_Mei_Jun_Jul_Ogs_Sep_Okt_Nov_Dis".split("_"),
            weekdays: "Ahad_Isnin_Selasa_Rabu_Khamis_Jumaat_Sabtu".split("_"),
            weekdaysShort: "Ahd_Isn_Sel_Rab_Kha_Jum_Sab".split("_"),
            weekdaysMin: "Ah_Is_Sl_Rb_Km_Jm_Sb".split("_"),
            longDateFormat: {
                LT: "HH.mm",
                LTS: "HH.mm.ss",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY [pukul] HH.mm",
                LLLL: "dddd, D MMMM YYYY [pukul] HH.mm"
            },
            meridiemParse: /pagi|tengahari|petang|malam/,
            meridiemHour: function (n, t) {
                return 12 === n && (n = 0), "pagi" === t ? n : "tengahari" === t ? n >= 11 ? n : n + 12 : "petang" === t || "malam" === t ? n + 12 : void 0
            },
            meridiem: function (n, t, e) {
                return n < 11 ? "pagi" : n < 15 ? "tengahari" : n < 19 ? "petang" : "malam"
            },
            calendar: {
                sameDay: "[Hari ini pukul] LT",
                nextDay: "[Esok pukul] LT",
                nextWeek: "dddd [pukul] LT",
                lastDay: "[Kelmarin pukul] LT",
                lastWeek: "dddd [lepas pukul] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "dalam %s",
                past: "%s yang lepas",
                s: "beberapa saat",
                ss: "%d saat",
                m: "seminit",
                mm: "%d minit",
                h: "sejam",
                hh: "%d jam",
                d: "sehari",
                dd: "%d hari",
                M: "sebulan",
                MM: "%d bulan",
                y: "setahun",
                yy: "%d tahun"
            },
            week: {dow: 1, doy: 7}
        })
    }()
},
Zduo: function (n, t, e) {
    !function (n) {
        "use strict";
        e("wd/R").defineLocale("eo", {
            months: "januaro_februaro_marto_aprilo_majo_junio_julio_a\u016dgusto_septembro_oktobro_novembro_decembro".split("_"),
            monthsShort: "jan_feb_mar_apr_maj_jun_jul_a\u016dg_sep_okt_nov_dec".split("_"),
            weekdays: "diman\u0109o_lundo_mardo_merkredo_\u0135a\u016ddo_vendredo_sabato".split("_"),
            weekdaysShort: "dim_lun_mard_merk_\u0135a\u016d_ven_sab".split("_"),
            weekdaysMin: "di_lu_ma_me_\u0135a_ve_sa".split("_"),
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "YYYY-MM-DD",
                LL: "D[-a de] MMMM, YYYY",
                LLL: "D[-a de] MMMM, YYYY HH:mm",
                LLLL: "dddd, [la] D[-a de] MMMM, YYYY HH:mm"
            },
            meridiemParse: /[ap]\.t\.m/i,
            isPM: function (n) {
                return "p" === n.charAt(0).toLowerCase()
            },
            meridiem: function (n, t, e) {
                return n > 11 ? e ? "p.t.m." : "P.T.M." : e ? "a.t.m." : "A.T.M."
            },
            calendar: {
                sameDay: "[Hodia\u016d je] LT",
                nextDay: "[Morga\u016d je] LT",
                nextWeek: "dddd [je] LT",
                lastDay: "[Hiera\u016d je] LT",
                lastWeek: "[pasinta] dddd [je] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "post %s",
                past: "anta\u016d %s",
                s: "sekundoj",
                ss: "%d sekundoj",
                m: "minuto",
                mm: "%d minutoj",
                h: "horo",
                hh: "%d horoj",
                d: "tago",
                dd: "%d tagoj",
                M: "monato",
                MM: "%d monatoj",
                y: "jaro",
                yy: "%d jaroj"
            },
            dayOfMonthOrdinalParse: /\d{1,2}a/,
            ordinal: "%da",
            week: {dow: 1, doy: 7}
        })
    }()
},
aIdf: function (n, t, e) {
    !function (n) {
        "use strict";

        function t(n, t, e) {
            return n + " " + function (n, t) {
                return 2 === t ? function (n) {
                    var t = {m: "v", b: "v", d: "z"};
                    return void 0 === t[n.charAt(0)] ? n : t[n.charAt(0)] + n.substring(1)
                }(n) : n
            }({mm: "munutenn", MM: "miz", dd: "devezh"}[e], n)
        }

        e("wd/R").defineLocale("br", {
            months: "Genver_C'hwevrer_Meurzh_Ebrel_Mae_Mezheven_Gouere_Eost_Gwengolo_Here_Du_Kerzu".split("_"),
            monthsShort: "Gen_C'hwe_Meu_Ebr_Mae_Eve_Gou_Eos_Gwe_Her_Du_Ker".split("_"),
            weekdays: "Sul_Lun_Meurzh_Merc'her_Yaou_Gwener_Sadorn".split("_"),
            weekdaysShort: "Sul_Lun_Meu_Mer_Yao_Gwe_Sad".split("_"),
            weekdaysMin: "Su_Lu_Me_Mer_Ya_Gw_Sa".split("_"),
            weekdaysParseExact: !0,
            longDateFormat: {
                LT: "h[e]mm A",
                LTS: "h[e]mm:ss A",
                L: "DD/MM/YYYY",
                LL: "D [a viz] MMMM YYYY",
                LLL: "D [a viz] MMMM YYYY h[e]mm A",
                LLLL: "dddd, D [a viz] MMMM YYYY h[e]mm A"
            },
            calendar: {
                sameDay: "[Hiziv da] LT",
                nextDay: "[Warc'hoazh da] LT",
                nextWeek: "dddd [da] LT",
                lastDay: "[Dec'h da] LT",
                lastWeek: "dddd [paset da] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "a-benn %s",
                past: "%s 'zo",
                s: "un nebeud segondenno\xf9",
                ss: "%d eilenn",
                m: "ur vunutenn",
                mm: t,
                h: "un eur",
                hh: "%d eur",
                d: "un devezh",
                dd: t,
                M: "ur miz",
                MM: t,
                y: "ur bloaz",
                yy: function (n) {
                    switch (function n(t) {
                        return t > 9 ? n(t % 10) : t
                    }(n)) {
                        case 1:
                        case 3:
                        case 4:
                        case 5:
                        case 9:
                            return n + " bloaz";
                        default:
                            return n + " vloaz"
                    }
                }
            },
            dayOfMonthOrdinalParse: /\d{1,2}(a\xf1|vet)/,
            ordinal: function (n) {
                return n + (1 === n ? "a\xf1" : "vet")
            },
            week: {dow: 1, doy: 4}
        })
    }()
},
aIsn: function (n, t, e) {
    !function (n) {
        "use strict";
        e("wd/R").defineLocale("mi", {
            months: "Kohi-t\u0101te_Hui-tanguru_Pout\u016b-te-rangi_Paenga-wh\u0101wh\u0101_Haratua_Pipiri_H\u014dngoingoi_Here-turi-k\u014dk\u0101_Mahuru_Whiringa-\u0101-nuku_Whiringa-\u0101-rangi_Hakihea".split("_"),
            monthsShort: "Kohi_Hui_Pou_Pae_Hara_Pipi_H\u014dngoi_Here_Mahu_Whi-nu_Whi-ra_Haki".split("_"),
            monthsRegex: /(?:['a-z\u0101\u014D\u016B]+\-?){1,3}/i,
            monthsStrictRegex: /(?:['a-z\u0101\u014D\u016B]+\-?){1,3}/i,
            monthsShortRegex: /(?:['a-z\u0101\u014D\u016B]+\-?){1,3}/i,
            monthsShortStrictRegex: /(?:['a-z\u0101\u014D\u016B]+\-?){1,2}/i,
            weekdays: "R\u0101tapu_Mane_T\u016brei_Wenerei_T\u0101ite_Paraire_H\u0101tarei".split("_"),
            weekdaysShort: "Ta_Ma_T\u016b_We_T\u0101i_Pa_H\u0101".split("_"),
            weekdaysMin: "Ta_Ma_T\u016b_We_T\u0101i_Pa_H\u0101".split("_"),
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY [i] HH:mm",
                LLLL: "dddd, D MMMM YYYY [i] HH:mm"
            },
            calendar: {
                sameDay: "[i teie mahana, i] LT",
                nextDay: "[apopo i] LT",
                nextWeek: "dddd [i] LT",
                lastDay: "[inanahi i] LT",
                lastWeek: "dddd [whakamutunga i] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "i roto i %s",
                past: "%s i mua",
                s: "te h\u0113kona ruarua",
                ss: "%d h\u0113kona",
                m: "he meneti",
                mm: "%d meneti",
                h: "te haora",
                hh: "%d haora",
                d: "he ra",
                dd: "%d ra",
                M: "he marama",
                MM: "%d marama",
                y: "he tau",
                yy: "%d tau"
            },
            dayOfMonthOrdinalParse: /\d{1,2}\xba/,
            ordinal: "%d\xba",
            week: {dow: 1, doy: 4}
        })
    }()
},
aQkU: function (n, t, e) {
    !function (n) {
        "use strict";
        e("wd/R").defineLocale("mk", {
            months: "\u0458\u0430\u043d\u0443\u0430\u0440\u0438_\u0444\u0435\u0432\u0440\u0443\u0430\u0440\u0438_\u043c\u0430\u0440\u0442_\u0430\u043f\u0440\u0438\u043b_\u043c\u0430\u0458_\u0458\u0443\u043d\u0438_\u0458\u0443\u043b\u0438_\u0430\u0432\u0433\u0443\u0441\u0442_\u0441\u0435\u043f\u0442\u0435\u043c\u0432\u0440\u0438_\u043e\u043a\u0442\u043e\u043c\u0432\u0440\u0438_\u043d\u043e\u0435\u043c\u0432\u0440\u0438_\u0434\u0435\u043a\u0435\u043c\u0432\u0440\u0438".split("_"),
            monthsShort: "\u0458\u0430\u043d_\u0444\u0435\u0432_\u043c\u0430\u0440_\u0430\u043f\u0440_\u043c\u0430\u0458_\u0458\u0443\u043d_\u0458\u0443\u043b_\u0430\u0432\u0433_\u0441\u0435\u043f_\u043e\u043a\u0442_\u043d\u043e\u0435_\u0434\u0435\u043a".split("_"),
            weekdays: "\u043d\u0435\u0434\u0435\u043b\u0430_\u043f\u043e\u043d\u0435\u0434\u0435\u043b\u043d\u0438\u043a_\u0432\u0442\u043e\u0440\u043d\u0438\u043a_\u0441\u0440\u0435\u0434\u0430_\u0447\u0435\u0442\u0432\u0440\u0442\u043e\u043a_\u043f\u0435\u0442\u043e\u043a_\u0441\u0430\u0431\u043e\u0442\u0430".split("_"),
            weekdaysShort: "\u043d\u0435\u0434_\u043f\u043e\u043d_\u0432\u0442\u043e_\u0441\u0440\u0435_\u0447\u0435\u0442_\u043f\u0435\u0442_\u0441\u0430\u0431".split("_"),
            weekdaysMin: "\u043de_\u043fo_\u0432\u0442_\u0441\u0440_\u0447\u0435_\u043f\u0435_\u0441a".split("_"),
            longDateFormat: {
                LT: "H:mm",
                LTS: "H:mm:ss",
                L: "D.MM.YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY H:mm",
                LLLL: "dddd, D MMMM YYYY H:mm"
            },
            calendar: {
                sameDay: "[\u0414\u0435\u043d\u0435\u0441 \u0432\u043e] LT",
                nextDay: "[\u0423\u0442\u0440\u0435 \u0432\u043e] LT",
                nextWeek: "[\u0412\u043e] dddd [\u0432\u043e] LT",
                lastDay: "[\u0412\u0447\u0435\u0440\u0430 \u0432\u043e] LT",
                lastWeek: function () {
                    switch (this.day()) {
                        case 0:
                        case 3:
                        case 6:
                            return "[\u0418\u0437\u043c\u0438\u043d\u0430\u0442\u0430\u0442\u0430] dddd [\u0432\u043e] LT";
                        case 1:
                        case 2:
                        case 4:
                        case 5:
                            return "[\u0418\u0437\u043c\u0438\u043d\u0430\u0442\u0438\u043e\u0442] dddd [\u0432\u043e] LT"
                    }
                },
                sameElse: "L"
            },
            relativeTime: {
                future: "\u043f\u043e\u0441\u043b\u0435 %s",
                past: "\u043f\u0440\u0435\u0434 %s",
                s: "\u043d\u0435\u043a\u043e\u043b\u043a\u0443 \u0441\u0435\u043a\u0443\u043d\u0434\u0438",
                ss: "%d \u0441\u0435\u043a\u0443\u043d\u0434\u0438",
                m: "\u043c\u0438\u043d\u0443\u0442\u0430",
                mm: "%d \u043c\u0438\u043d\u0443\u0442\u0438",
                h: "\u0447\u0430\u0441",
                hh: "%d \u0447\u0430\u0441\u0430",
                d: "\u0434\u0435\u043d",
                dd: "%d \u0434\u0435\u043d\u0430",
                M: "\u043c\u0435\u0441\u0435\u0446",
                MM: "%d \u043c\u0435\u0441\u0435\u0446\u0438",
                y: "\u0433\u043e\u0434\u0438\u043d\u0430",
                yy: "%d \u0433\u043e\u0434\u0438\u043d\u0438"
            },
            dayOfMonthOrdinalParse: /\d{1,2}-(\u0435\u0432|\u0435\u043d|\u0442\u0438|\u0432\u0438|\u0440\u0438|\u043c\u0438)/,
            ordinal: function (n) {
                var t = n % 10, e = n % 100;
                return 0 === n ? n + "-\u0435\u0432" : 0 === e ? n + "-\u0435\u043d" : e > 10 && e < 20 ? n + "-\u0442\u0438" : 1 === t ? n + "-\u0432\u0438" : 2 === t ? n + "-\u0440\u0438" : 7 === t || 8 === t ? n + "-\u043c\u0438" : n + "-\u0442\u0438"
            },
            week: {dow: 1, doy: 7}
        })
    }()
},
b1Dy: function (n, t, e) {
    !function (n) {
        "use strict";
        e("wd/R").defineLocale("en-nz", {
            months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"),
            monthsShort: "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),
            weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),
            weekdaysShort: "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),
            weekdaysMin: "Su_Mo_Tu_We_Th_Fr_Sa".split("_"),
            longDateFormat: {
                LT: "h:mm A",
                LTS: "h:mm:ss A",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY h:mm A",
                LLLL: "dddd, D MMMM YYYY h:mm A"
            },
            calendar: {
                sameDay: "[Today at] LT",
                nextDay: "[Tomorrow at] LT",
                nextWeek: "dddd [at] LT",
                lastDay: "[Yesterday at] LT",
                lastWeek: "[Last] dddd [at] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "in %s",
                past: "%s ago",
                s: "a few seconds",
                ss: "%d seconds",
                m: "a minute",
                mm: "%d minutes",
                h: "an hour",
                hh: "%d hours",
                d: "a day",
                dd: "%d days",
                M: "a month",
                MM: "%d months",
                y: "a year",
                yy: "%d years"
            },
            dayOfMonthOrdinalParse: /\d{1,2}(st|nd|rd|th)/,
            ordinal: function (n) {
                var t = n % 10;
                return n + (1 == ~~(n % 100 / 10) ? "th" : 1 === t ? "st" : 2 === t ? "nd" : 3 === t ? "rd" : "th")
            },
            week: {dow: 1, doy: 4}
        })
    }()
},
bOMt: function (n, t, e) {
    !function (n) {
        "use strict";
        e("wd/R").defineLocale("nb", {
            months: "januar_februar_mars_april_mai_juni_juli_august_september_oktober_november_desember".split("_"),
            monthsShort: "jan._feb._mars_april_mai_juni_juli_aug._sep._okt._nov._des.".split("_"),
            monthsParseExact: !0,
            weekdays: "s\xf8ndag_mandag_tirsdag_onsdag_torsdag_fredag_l\xf8rdag".split("_"),
            weekdaysShort: "s\xf8._ma._ti._on._to._fr._l\xf8.".split("_"),
            weekdaysMin: "s\xf8_ma_ti_on_to_fr_l\xf8".split("_"),
            weekdaysParseExact: !0,
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD.MM.YYYY",
                LL: "D. MMMM YYYY",
                LLL: "D. MMMM YYYY [kl.] HH:mm",
                LLLL: "dddd D. MMMM YYYY [kl.] HH:mm"
            },
            calendar: {
                sameDay: "[i dag kl.] LT",
                nextDay: "[i morgen kl.] LT",
                nextWeek: "dddd [kl.] LT",
                lastDay: "[i g\xe5r kl.] LT",
                lastWeek: "[forrige] dddd [kl.] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "om %s",
                past: "%s siden",
                s: "noen sekunder",
                ss: "%d sekunder",
                m: "ett minutt",
                mm: "%d minutter",
                h: "en time",
                hh: "%d timer",
                d: "en dag",
                dd: "%d dager",
                M: "en m\xe5ned",
                MM: "%d m\xe5neder",
                y: "ett \xe5r",
                yy: "%d \xe5r"
            },
            dayOfMonthOrdinalParse: /\d{1,2}\./,
            ordinal: "%d.",
            week: {dow: 1, doy: 4}
        })
    }()
},
bXm7: function (n, t, e) {
    !function (n) {
        "use strict";
        var t = {
            0: "-\u0448\u0456",
            1: "-\u0448\u0456",
            2: "-\u0448\u0456",
            3: "-\u0448\u0456",
            4: "-\u0448\u0456",
            5: "-\u0448\u0456",
            6: "-\u0448\u044b",
            7: "-\u0448\u0456",
            8: "-\u0448\u0456",
            9: "-\u0448\u044b",
            10: "-\u0448\u044b",
            20: "-\u0448\u044b",
            30: "-\u0448\u044b",
            40: "-\u0448\u044b",
            50: "-\u0448\u0456",
            60: "-\u0448\u044b",
            70: "-\u0448\u0456",
            80: "-\u0448\u0456",
            90: "-\u0448\u044b",
            100: "-\u0448\u0456"
        };
        n.defineLocale("kk", {
            months: "\u049b\u0430\u04a3\u0442\u0430\u0440_\u0430\u049b\u043f\u0430\u043d_\u043d\u0430\u0443\u0440\u044b\u0437_\u0441\u04d9\u0443\u0456\u0440_\u043c\u0430\u043c\u044b\u0440_\u043c\u0430\u0443\u0441\u044b\u043c_\u0448\u0456\u043b\u0434\u0435_\u0442\u0430\u043c\u044b\u0437_\u049b\u044b\u0440\u043a\u04af\u0439\u0435\u043a_\u049b\u0430\u0437\u0430\u043d_\u049b\u0430\u0440\u0430\u0448\u0430_\u0436\u0435\u043b\u0442\u043e\u049b\u0441\u0430\u043d".split("_"),
            monthsShort: "\u049b\u0430\u04a3_\u0430\u049b\u043f_\u043d\u0430\u0443_\u0441\u04d9\u0443_\u043c\u0430\u043c_\u043c\u0430\u0443_\u0448\u0456\u043b_\u0442\u0430\u043c_\u049b\u044b\u0440_\u049b\u0430\u0437_\u049b\u0430\u0440_\u0436\u0435\u043b".split("_"),
            weekdays: "\u0436\u0435\u043a\u0441\u0435\u043d\u0431\u0456_\u0434\u04af\u0439\u0441\u0435\u043d\u0431\u0456_\u0441\u0435\u0439\u0441\u0435\u043d\u0431\u0456_\u0441\u04d9\u0440\u0441\u0435\u043d\u0431\u0456_\u0431\u0435\u0439\u0441\u0435\u043d\u0431\u0456_\u0436\u04b1\u043c\u0430_\u0441\u0435\u043d\u0431\u0456".split("_"),
            weekdaysShort: "\u0436\u0435\u043a_\u0434\u04af\u0439_\u0441\u0435\u0439_\u0441\u04d9\u0440_\u0431\u0435\u0439_\u0436\u04b1\u043c_\u0441\u0435\u043d".split("_"),
            weekdaysMin: "\u0436\u043a_\u0434\u0439_\u0441\u0439_\u0441\u0440_\u0431\u0439_\u0436\u043c_\u0441\u043d".split("_"),
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD.MM.YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY HH:mm",
                LLLL: "dddd, D MMMM YYYY HH:mm"
            },
            calendar: {
                sameDay: "[\u0411\u04af\u0433\u0456\u043d \u0441\u0430\u0493\u0430\u0442] LT",
                nextDay: "[\u0415\u0440\u0442\u0435\u04a3 \u0441\u0430\u0493\u0430\u0442] LT",
                nextWeek: "dddd [\u0441\u0430\u0493\u0430\u0442] LT",
                lastDay: "[\u041a\u0435\u0448\u0435 \u0441\u0430\u0493\u0430\u0442] LT",
                lastWeek: "[\u04e8\u0442\u043a\u0435\u043d \u0430\u043f\u0442\u0430\u043d\u044b\u04a3] dddd [\u0441\u0430\u0493\u0430\u0442] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "%s \u0456\u0448\u0456\u043d\u0434\u0435",
                past: "%s \u0431\u04b1\u0440\u044b\u043d",
                s: "\u0431\u0456\u0440\u043d\u0435\u0448\u0435 \u0441\u0435\u043a\u0443\u043d\u0434",
                ss: "%d \u0441\u0435\u043a\u0443\u043d\u0434",
                m: "\u0431\u0456\u0440 \u043c\u0438\u043d\u0443\u0442",
                mm: "%d \u043c\u0438\u043d\u0443\u0442",
                h: "\u0431\u0456\u0440 \u0441\u0430\u0493\u0430\u0442",
                hh: "%d \u0441\u0430\u0493\u0430\u0442",
                d: "\u0431\u0456\u0440 \u043a\u04af\u043d",
                dd: "%d \u043a\u04af\u043d",
                M: "\u0431\u0456\u0440 \u0430\u0439",
                MM: "%d \u0430\u0439",
                y: "\u0431\u0456\u0440 \u0436\u044b\u043b",
                yy: "%d \u0436\u044b\u043b"
            },
            dayOfMonthOrdinalParse: /\d{1,2}-(\u0448\u0456|\u0448\u044b)/,
            ordinal: function (n) {
                return n + (t[n] || t[n % 10] || t[n >= 100 ? 100 : null])
            },
            week: {dow: 1, doy: 7}
        })
    }(e("wd/R"))
},
bYM6: function (n, t, e) {
    !function (n) {
        "use strict";
        e("wd/R").defineLocale("ar-tn", {
            months: "\u062c\u0627\u0646\u0641\u064a_\u0641\u064a\u0641\u0631\u064a_\u0645\u0627\u0631\u0633_\u0623\u0641\u0631\u064a\u0644_\u0645\u0627\u064a_\u062c\u0648\u0627\u0646_\u062c\u0648\u064a\u0644\u064a\u0629_\u0623\u0648\u062a_\u0633\u0628\u062a\u0645\u0628\u0631_\u0623\u0643\u062a\u0648\u0628\u0631_\u0646\u0648\u0641\u0645\u0628\u0631_\u062f\u064a\u0633\u0645\u0628\u0631".split("_"),
            monthsShort: "\u062c\u0627\u0646\u0641\u064a_\u0641\u064a\u0641\u0631\u064a_\u0645\u0627\u0631\u0633_\u0623\u0641\u0631\u064a\u0644_\u0645\u0627\u064a_\u062c\u0648\u0627\u0646_\u062c\u0648\u064a\u0644\u064a\u0629_\u0623\u0648\u062a_\u0633\u0628\u062a\u0645\u0628\u0631_\u0623\u0643\u062a\u0648\u0628\u0631_\u0646\u0648\u0641\u0645\u0628\u0631_\u062f\u064a\u0633\u0645\u0628\u0631".split("_"),
            weekdays: "\u0627\u0644\u0623\u062d\u062f_\u0627\u0644\u0625\u062b\u0646\u064a\u0646_\u0627\u0644\u062b\u0644\u0627\u062b\u0627\u0621_\u0627\u0644\u0623\u0631\u0628\u0639\u0627\u0621_\u0627\u0644\u062e\u0645\u064a\u0633_\u0627\u0644\u062c\u0645\u0639\u0629_\u0627\u0644\u0633\u0628\u062a".split("_"),
            weekdaysShort: "\u0623\u062d\u062f_\u0625\u062b\u0646\u064a\u0646_\u062b\u0644\u0627\u062b\u0627\u0621_\u0623\u0631\u0628\u0639\u0627\u0621_\u062e\u0645\u064a\u0633_\u062c\u0645\u0639\u0629_\u0633\u0628\u062a".split("_"),
            weekdaysMin: "\u062d_\u0646_\u062b_\u0631_\u062e_\u062c_\u0633".split("_"),
            weekdaysParseExact: !0,
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY HH:mm",
                LLLL: "dddd D MMMM YYYY HH:mm"
            },
            calendar: {
                sameDay: "[\u0627\u0644\u064a\u0648\u0645 \u0639\u0644\u0649 \u0627\u0644\u0633\u0627\u0639\u0629] LT",
                nextDay: "[\u063a\u062f\u0627 \u0639\u0644\u0649 \u0627\u0644\u0633\u0627\u0639\u0629] LT",
                nextWeek: "dddd [\u0639\u0644\u0649 \u0627\u0644\u0633\u0627\u0639\u0629] LT",
                lastDay: "[\u0623\u0645\u0633 \u0639\u0644\u0649 \u0627\u0644\u0633\u0627\u0639\u0629] LT",
                lastWeek: "dddd [\u0639\u0644\u0649 \u0627\u0644\u0633\u0627\u0639\u0629] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "\u0641\u064a %s",
                past: "\u0645\u0646\u0630 %s",
                s: "\u062b\u0648\u0627\u0646",
                ss: "%d \u062b\u0627\u0646\u064a\u0629",
                m: "\u062f\u0642\u064a\u0642\u0629",
                mm: "%d \u062f\u0642\u0627\u0626\u0642",
                h: "\u0633\u0627\u0639\u0629",
                hh: "%d \u0633\u0627\u0639\u0627\u062a",
                d: "\u064a\u0648\u0645",
                dd: "%d \u0623\u064a\u0627\u0645",
                M: "\u0634\u0647\u0631",
                MM: "%d \u0623\u0634\u0647\u0631",
                y: "\u0633\u0646\u0629",
                yy: "%d \u0633\u0646\u0648\u0627\u062a"
            },
            week: {dow: 1, doy: 4}
        })
    }()
},
bpih: function (n, t, e) {
    !function (n) {
        "use strict";
        e("wd/R").defineLocale("it", {
            months: "gennaio_febbraio_marzo_aprile_maggio_giugno_luglio_agosto_settembre_ottobre_novembre_dicembre".split("_"),
            monthsShort: "gen_feb_mar_apr_mag_giu_lug_ago_set_ott_nov_dic".split("_"),
            weekdays: "domenica_luned\xec_marted\xec_mercoled\xec_gioved\xec_venerd\xec_sabato".split("_"),
            weekdaysShort: "dom_lun_mar_mer_gio_ven_sab".split("_"),
            weekdaysMin: "do_lu_ma_me_gi_ve_sa".split("_"),
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY HH:mm",
                LLLL: "dddd D MMMM YYYY HH:mm"
            },
            calendar: {
                sameDay: "[Oggi alle] LT",
                nextDay: "[Domani alle] LT",
                nextWeek: "dddd [alle] LT",
                lastDay: "[Ieri alle] LT",
                lastWeek: function () {
                    switch (this.day()) {
                        case 0:
                            return "[la scorsa] dddd [alle] LT";
                        default:
                            return "[lo scorso] dddd [alle] LT"
                    }
                },
                sameElse: "L"
            },
            relativeTime: {
                future: function (n) {
                    return (/^[0-9].+$/.test(n) ? "tra" : "in") + " " + n
                },
                past: "%s fa",
                s: "alcuni secondi",
                ss: "%d secondi",
                m: "un minuto",
                mm: "%d minuti",
                h: "un'ora",
                hh: "%d ore",
                d: "un giorno",
                dd: "%d giorni",
                M: "un mese",
                MM: "%d mesi",
                y: "un anno",
                yy: "%d anni"
            },
            dayOfMonthOrdinalParse: /\d{1,2}\xba/,
            ordinal: "%d\xba",
            week: {dow: 1, doy: 4}
        })
    }()
},
bxKX: function (n, t, e) {
    !function (n) {
        "use strict";
        e("wd/R").defineLocale("it-ch", {
            months: "gennaio_febbraio_marzo_aprile_maggio_giugno_luglio_agosto_settembre_ottobre_novembre_dicembre".split("_"),
            monthsShort: "gen_feb_mar_apr_mag_giu_lug_ago_set_ott_nov_dic".split("_"),
            weekdays: "domenica_luned\xec_marted\xec_mercoled\xec_gioved\xec_venerd\xec_sabato".split("_"),
            weekdaysShort: "dom_lun_mar_mer_gio_ven_sab".split("_"),
            weekdaysMin: "do_lu_ma_me_gi_ve_sa".split("_"),
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD.MM.YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY HH:mm",
                LLLL: "dddd D MMMM YYYY HH:mm"
            },
            calendar: {
                sameDay: "[Oggi alle] LT",
                nextDay: "[Domani alle] LT",
                nextWeek: "dddd [alle] LT",
                lastDay: "[Ieri alle] LT",
                lastWeek: function () {
                    switch (this.day()) {
                        case 0:
                            return "[la scorsa] dddd [alle] LT";
                        default:
                            return "[lo scorso] dddd [alle] LT"
                    }
                },
                sameElse: "L"
            },
            relativeTime: {
                future: function (n) {
                    return (/^[0-9].+$/.test(n) ? "tra" : "in") + " " + n
                },
                past: "%s fa",
                s: "alcuni secondi",
                ss: "%d secondi",
                m: "un minuto",
                mm: "%d minuti",
                h: "un'ora",
                hh: "%d ore",
                d: "un giorno",
                dd: "%d giorni",
                M: "un mese",
                MM: "%d mesi",
                y: "un anno",
                yy: "%d anni"
            },
            dayOfMonthOrdinalParse: /\d{1,2}\xba/,
            ordinal: "%d\xba",
            week: {dow: 1, doy: 4}
        })
    }()
},
cRix: function (n, t, e) {
    !function (n) {
        "use strict";
        var t = "jan._feb._mrt._apr._mai_jun._jul._aug._sep._okt._nov._des.".split("_"),
            e = "jan_feb_mrt_apr_mai_jun_jul_aug_sep_okt_nov_des".split("_");
        n.defineLocale("fy", {
            months: "jannewaris_febrewaris_maart_april_maaie_juny_july_augustus_septimber_oktober_novimber_desimber".split("_"),
            monthsShort: function (n, o) {
                return n ? /-MMM-/.test(o) ? e[n.month()] : t[n.month()] : t
            },
            monthsParseExact: !0,
            weekdays: "snein_moandei_tiisdei_woansdei_tongersdei_freed_sneon".split("_"),
            weekdaysShort: "si._mo._ti._wo._to._fr._so.".split("_"),
            weekdaysMin: "Si_Mo_Ti_Wo_To_Fr_So".split("_"),
            weekdaysParseExact: !0,
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD-MM-YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY HH:mm",
                LLLL: "dddd D MMMM YYYY HH:mm"
            },
            calendar: {
                sameDay: "[hjoed om] LT",
                nextDay: "[moarn om] LT",
                nextWeek: "dddd [om] LT",
                lastDay: "[juster om] LT",
                lastWeek: "[\xf4fr\xfbne] dddd [om] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "oer %s",
                past: "%s lyn",
                s: "in pear sekonden",
                ss: "%d sekonden",
                m: "ien min\xfat",
                mm: "%d minuten",
                h: "ien oere",
                hh: "%d oeren",
                d: "ien dei",
                dd: "%d dagen",
                M: "ien moanne",
                MM: "%d moannen",
                y: "ien jier",
                yy: "%d jierren"
            },
            dayOfMonthOrdinalParse: /\d{1,2}(ste|de)/,
            ordinal: function (n) {
                return n + (1 === n || 8 === n || n >= 20 ? "ste" : "de")
            },
            week: {dow: 1, doy: 4}
        })
    }(e("wd/R"))
},
czMo: function (n, t, e) {
    !function (n) {
        "use strict";
        e("wd/R").defineLocale("en-il", {
            months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"),
            monthsShort: "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),
            weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),
            weekdaysShort: "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),
            weekdaysMin: "Su_Mo_Tu_We_Th_Fr_Sa".split("_"),
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY HH:mm",
                LLLL: "dddd, D MMMM YYYY HH:mm"
            },
            calendar: {
                sameDay: "[Today at] LT",
                nextDay: "[Tomorrow at] LT",
                nextWeek: "dddd [at] LT",
                lastDay: "[Yesterday at] LT",
                lastWeek: "[Last] dddd [at] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "in %s",
                past: "%s ago",
                s: "a few seconds",
                m: "a minute",
                mm: "%d minutes",
                h: "an hour",
                hh: "%d hours",
                d: "a day",
                dd: "%d days",
                M: "a month",
                MM: "%d months",
                y: "a year",
                yy: "%d years"
            },
            dayOfMonthOrdinalParse: /\d{1,2}(st|nd|rd|th)/,
            ordinal: function (n) {
                var t = n % 10;
                return n + (1 == ~~(n % 100 / 10) ? "th" : 1 === t ? "st" : 2 === t ? "nd" : 3 === t ? "rd" : "th")
            }
        })
    }()
},
dNwA: function (n, t, e) {
    !function (n) {
        "use strict";
        e("wd/R").defineLocale("sw", {
            months: "Januari_Februari_Machi_Aprili_Mei_Juni_Julai_Agosti_Septemba_Oktoba_Novemba_Desemba".split("_"),
            monthsShort: "Jan_Feb_Mac_Apr_Mei_Jun_Jul_Ago_Sep_Okt_Nov_Des".split("_"),
            weekdays: "Jumapili_Jumatatu_Jumanne_Jumatano_Alhamisi_Ijumaa_Jumamosi".split("_"),
            weekdaysShort: "Jpl_Jtat_Jnne_Jtan_Alh_Ijm_Jmos".split("_"),
            weekdaysMin: "J2_J3_J4_J5_Al_Ij_J1".split("_"),
            weekdaysParseExact: !0,
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD.MM.YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY HH:mm",
                LLLL: "dddd, D MMMM YYYY HH:mm"
            },
            calendar: {
                sameDay: "[leo saa] LT",
                nextDay: "[kesho saa] LT",
                nextWeek: "[wiki ijayo] dddd [saat] LT",
                lastDay: "[jana] LT",
                lastWeek: "[wiki iliyopita] dddd [saat] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "%s baadaye",
                past: "tokea %s",
                s: "hivi punde",
                ss: "sekunde %d",
                m: "dakika moja",
                mm: "dakika %d",
                h: "saa limoja",
                hh: "masaa %d",
                d: "siku moja",
                dd: "masiku %d",
                M: "mwezi mmoja",
                MM: "miezi %d",
                y: "mwaka mmoja",
                yy: "miaka %d"
            },
            week: {dow: 1, doy: 7}
        })
    }()
},
"e+ae": function (n, t, e) {
    !function (n) {
        "use strict";
        var t = "janu\xe1r_febru\xe1r_marec_apr\xedl_m\xe1j_j\xfan_j\xfal_august_september_okt\xf3ber_november_december".split("_"),
            e = "jan_feb_mar_apr_m\xe1j_j\xfan_j\xfal_aug_sep_okt_nov_dec".split("_");

        function o(n) {
            return n > 1 && n < 5
        }

        function l(n, t, e, l) {
            var r = n + " ";
            switch (e) {
                case"s":
                    return t || l ? "p\xe1r sek\xfand" : "p\xe1r sekundami";
                case"ss":
                    return t || l ? r + (o(n) ? "sekundy" : "sek\xfand") : r + "sekundami";
                case"m":
                    return t ? "min\xfata" : l ? "min\xfatu" : "min\xfatou";
                case"mm":
                    return t || l ? r + (o(n) ? "min\xfaty" : "min\xfat") : r + "min\xfatami";
                case"h":
                    return t ? "hodina" : l ? "hodinu" : "hodinou";
                case"hh":
                    return t || l ? r + (o(n) ? "hodiny" : "hod\xedn") : r + "hodinami";
                case"d":
                    return t || l ? "de\u0148" : "d\u0148om";
                case"dd":
                    return t || l ? r + (o(n) ? "dni" : "dn\xed") : r + "d\u0148ami";
                case"M":
                    return t || l ? "mesiac" : "mesiacom";
                case"MM":
                    return t || l ? r + (o(n) ? "mesiace" : "mesiacov") : r + "mesiacmi";
                case"y":
                    return t || l ? "rok" : "rokom";
                case"yy":
                    return t || l ? r + (o(n) ? "roky" : "rokov") : r + "rokmi"
            }
        }

        n.defineLocale("sk", {
            months: t,
            monthsShort: e,
            weekdays: "nede\u013ea_pondelok_utorok_streda_\u0161tvrtok_piatok_sobota".split("_"),
            weekdaysShort: "ne_po_ut_st_\u0161t_pi_so".split("_"),
            weekdaysMin: "ne_po_ut_st_\u0161t_pi_so".split("_"),
            longDateFormat: {
                LT: "H:mm",
                LTS: "H:mm:ss",
                L: "DD.MM.YYYY",
                LL: "D. MMMM YYYY",
                LLL: "D. MMMM YYYY H:mm",
                LLLL: "dddd D. MMMM YYYY H:mm"
            },
            calendar: {
                sameDay: "[dnes o] LT", nextDay: "[zajtra o] LT", nextWeek: function () {
                    switch (this.day()) {
                        case 0:
                            return "[v nede\u013eu o] LT";
                        case 1:
                        case 2:
                            return "[v] dddd [o] LT";
                        case 3:
                            return "[v stredu o] LT";
                        case 4:
                            return "[vo \u0161tvrtok o] LT";
                        case 5:
                            return "[v piatok o] LT";
                        case 6:
                            return "[v sobotu o] LT"
                    }
                }, lastDay: "[v\u010dera o] LT", lastWeek: function () {
                    switch (this.day()) {
                        case 0:
                            return "[minul\xfa nede\u013eu o] LT";
                        case 1:
                        case 2:
                            return "[minul\xfd] dddd [o] LT";
                        case 3:
                            return "[minul\xfa stredu o] LT";
                        case 4:
                        case 5:
                            return "[minul\xfd] dddd [o] LT";
                        case 6:
                            return "[minul\xfa sobotu o] LT"
                    }
                }, sameElse: "L"
            },
            relativeTime: {
                future: "za %s",
                past: "pred %s",
                s: l,
                ss: l,
                m: l,
                mm: l,
                h: l,
                hh: l,
                d: l,
                dd: l,
                M: l,
                MM: l,
                y: l,
                yy: l
            },
            dayOfMonthOrdinalParse: /\d{1,2}\./,
            ordinal: "%d.",
            week: {dow: 1, doy: 4}
        })
    }(e("wd/R"))
},
fzPg: function (n, t, e) {
    !function (n) {
        "use strict";
        e("wd/R").defineLocale("yo", {
            months: "S\u1eb9\u0301r\u1eb9\u0301_E\u0300re\u0300le\u0300_\u1eb8r\u1eb9\u0300na\u0300_I\u0300gbe\u0301_E\u0300bibi_O\u0300ku\u0300du_Ag\u1eb9mo_O\u0300gu\u0301n_Owewe_\u1ecc\u0300wa\u0300ra\u0300_Be\u0301lu\u0301_\u1ecc\u0300p\u1eb9\u0300\u0300".split("_"),
            monthsShort: "S\u1eb9\u0301r_E\u0300rl_\u1eb8rn_I\u0300gb_E\u0300bi_O\u0300ku\u0300_Ag\u1eb9_O\u0300gu\u0301_Owe_\u1ecc\u0300wa\u0300_Be\u0301l_\u1ecc\u0300p\u1eb9\u0300\u0300".split("_"),
            weekdays: "A\u0300i\u0300ku\u0301_Aje\u0301_I\u0300s\u1eb9\u0301gun_\u1eccj\u1ecd\u0301ru\u0301_\u1eccj\u1ecd\u0301b\u1ecd_\u1eb8ti\u0300_A\u0300ba\u0301m\u1eb9\u0301ta".split("_"),
            weekdaysShort: "A\u0300i\u0300k_Aje\u0301_I\u0300s\u1eb9\u0301_\u1eccjr_\u1eccjb_\u1eb8ti\u0300_A\u0300ba\u0301".split("_"),
            weekdaysMin: "A\u0300i\u0300_Aj_I\u0300s_\u1eccr_\u1eccb_\u1eb8t_A\u0300b".split("_"),
            longDateFormat: {
                LT: "h:mm A",
                LTS: "h:mm:ss A",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY h:mm A",
                LLLL: "dddd, D MMMM YYYY h:mm A"
            },
            calendar: {
                sameDay: "[O\u0300ni\u0300 ni] LT",
                nextDay: "[\u1ecc\u0300la ni] LT",
                nextWeek: "dddd [\u1eccs\u1eb9\u0300 to\u0301n'b\u1ecd] [ni] LT",
                lastDay: "[A\u0300na ni] LT",
                lastWeek: "dddd [\u1eccs\u1eb9\u0300 to\u0301l\u1ecd\u0301] [ni] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "ni\u0301 %s",
                past: "%s k\u1ecdja\u0301",
                s: "i\u0300s\u1eb9ju\u0301 aaya\u0301 die",
                ss: "aaya\u0301 %d",
                m: "i\u0300s\u1eb9ju\u0301 kan",
                mm: "i\u0300s\u1eb9ju\u0301 %d",
                h: "wa\u0301kati kan",
                hh: "wa\u0301kati %d",
                d: "\u1ecdj\u1ecd\u0301 kan",
                dd: "\u1ecdj\u1ecd\u0301 %d",
                M: "osu\u0300 kan",
                MM: "osu\u0300 %d",
                y: "\u1ecddu\u0301n kan",
                yy: "\u1ecddu\u0301n %d"
            },
            dayOfMonthOrdinalParse: /\u1ecdj\u1ecd\u0301\s\d{1,2}/,
            ordinal: "\u1ecdj\u1ecd\u0301 %d",
            week: {dow: 1, doy: 4}
        })
    }()
},
gVVK: function (n, t, e) {
    !function (n) {
        "use strict";

        function t(n, t, e, o) {
            var l = n + " ";
            switch (e) {
                case"s":
                    return t || o ? "nekaj sekund" : "nekaj sekundami";
                case"ss":
                    return l + (1 === n ? t ? "sekundo" : "sekundi" : 2 === n ? t || o ? "sekundi" : "sekundah" : n < 5 ? t || o ? "sekunde" : "sekundah" : "sekund");
                case"m":
                    return t ? "ena minuta" : "eno minuto";
                case"mm":
                    return l + (1 === n ? t ? "minuta" : "minuto" : 2 === n ? t || o ? "minuti" : "minutama" : n < 5 ? t || o ? "minute" : "minutami" : t || o ? "minut" : "minutami");
                case"h":
                    return t ? "ena ura" : "eno uro";
                case"hh":
                    return l + (1 === n ? t ? "ura" : "uro" : 2 === n ? t || o ? "uri" : "urama" : n < 5 ? t || o ? "ure" : "urami" : t || o ? "ur" : "urami");
                case"d":
                    return t || o ? "en dan" : "enim dnem";
                case"dd":
                    return l + (1 === n ? t || o ? "dan" : "dnem" : 2 === n ? t || o ? "dni" : "dnevoma" : t || o ? "dni" : "dnevi");
                case"M":
                    return t || o ? "en mesec" : "enim mesecem";
                case"MM":
                    return l + (1 === n ? t || o ? "mesec" : "mesecem" : 2 === n ? t || o ? "meseca" : "mesecema" : n < 5 ? t || o ? "mesece" : "meseci" : t || o ? "mesecev" : "meseci");
                case"y":
                    return t || o ? "eno leto" : "enim letom";
                case"yy":
                    return l + (1 === n ? t || o ? "leto" : "letom" : 2 === n ? t || o ? "leti" : "letoma" : n < 5 ? t || o ? "leta" : "leti" : t || o ? "let" : "leti")
            }
        }

        e("wd/R").defineLocale("sl", {
            months: "januar_februar_marec_april_maj_junij_julij_avgust_september_oktober_november_december".split("_"),
            monthsShort: "jan._feb._mar._apr._maj._jun._jul._avg._sep._okt._nov._dec.".split("_"),
            monthsParseExact: !0,
            weekdays: "nedelja_ponedeljek_torek_sreda_\u010detrtek_petek_sobota".split("_"),
            weekdaysShort: "ned._pon._tor._sre._\u010det._pet._sob.".split("_"),
            weekdaysMin: "ne_po_to_sr_\u010de_pe_so".split("_"),
            weekdaysParseExact: !0,
            longDateFormat: {
                LT: "H:mm",
                LTS: "H:mm:ss",
                L: "DD.MM.YYYY",
                LL: "D. MMMM YYYY",
                LLL: "D. MMMM YYYY H:mm",
                LLLL: "dddd, D. MMMM YYYY H:mm"
            },
            calendar: {
                sameDay: "[danes ob] LT", nextDay: "[jutri ob] LT", nextWeek: function () {
                    switch (this.day()) {
                        case 0:
                            return "[v] [nedeljo] [ob] LT";
                        case 3:
                            return "[v] [sredo] [ob] LT";
                        case 6:
                            return "[v] [soboto] [ob] LT";
                        case 1:
                        case 2:
                        case 4:
                        case 5:
                            return "[v] dddd [ob] LT"
                    }
                }, lastDay: "[v\u010deraj ob] LT", lastWeek: function () {
                    switch (this.day()) {
                        case 0:
                            return "[prej\u0161njo] [nedeljo] [ob] LT";
                        case 3:
                            return "[prej\u0161njo] [sredo] [ob] LT";
                        case 6:
                            return "[prej\u0161njo] [soboto] [ob] LT";
                        case 1:
                        case 2:
                        case 4:
                        case 5:
                            return "[prej\u0161nji] dddd [ob] LT"
                    }
                }, sameElse: "L"
            },
            relativeTime: {
                future: "\u010dez %s",
                past: "pred %s",
                s: t,
                ss: t,
                m: t,
                mm: t,
                h: t,
                hh: t,
                d: t,
                dd: t,
                M: t,
                MM: t,
                y: t,
                yy: t
            },
            dayOfMonthOrdinalParse: /\d{1,2}\./,
            ordinal: "%d.",
            week: {dow: 1, doy: 7}
        })
    }()
},
gekB: function (n, t, e) {
    !function (n) {
        "use strict";
        var t = "nolla yksi kaksi kolme nelj\xe4 viisi kuusi seitsem\xe4n kahdeksan yhdeks\xe4n".split(" "),
            e = ["nolla", "yhden", "kahden", "kolmen", "nelj\xe4n", "viiden", "kuuden", t[7], t[8], t[9]];

        function o(n, o, l, r) {
            var i = "";
            switch (l) {
                case"s":
                    return r ? "muutaman sekunnin" : "muutama sekunti";
                case"ss":
                    return r ? "sekunnin" : "sekuntia";
                case"m":
                    return r ? "minuutin" : "minuutti";
                case"mm":
                    i = r ? "minuutin" : "minuuttia";
                    break;
                case"h":
                    return r ? "tunnin" : "tunti";
                case"hh":
                    i = r ? "tunnin" : "tuntia";
                    break;
                case"d":
                    return r ? "p\xe4iv\xe4n" : "p\xe4iv\xe4";
                case"dd":
                    i = r ? "p\xe4iv\xe4n" : "p\xe4iv\xe4\xe4";
                    break;
                case"M":
                    return r ? "kuukauden" : "kuukausi";
                case"MM":
                    i = r ? "kuukauden" : "kuukautta";
                    break;
                case"y":
                    return r ? "vuoden" : "vuosi";
                case"yy":
                    i = r ? "vuoden" : "vuotta"
            }
            return function (n, o) {
                return n < 10 ? o ? e[n] : t[n] : n
            }(n, r) + " " + i
        }

        n.defineLocale("fi", {
            months: "tammikuu_helmikuu_maaliskuu_huhtikuu_toukokuu_kes\xe4kuu_hein\xe4kuu_elokuu_syyskuu_lokakuu_marraskuu_joulukuu".split("_"),
            monthsShort: "tammi_helmi_maalis_huhti_touko_kes\xe4_hein\xe4_elo_syys_loka_marras_joulu".split("_"),
            weekdays: "sunnuntai_maanantai_tiistai_keskiviikko_torstai_perjantai_lauantai".split("_"),
            weekdaysShort: "su_ma_ti_ke_to_pe_la".split("_"),
            weekdaysMin: "su_ma_ti_ke_to_pe_la".split("_"),
            longDateFormat: {
                LT: "HH.mm",
                LTS: "HH.mm.ss",
                L: "DD.MM.YYYY",
                LL: "Do MMMM[ta] YYYY",
                LLL: "Do MMMM[ta] YYYY, [klo] HH.mm",
                LLLL: "dddd, Do MMMM[ta] YYYY, [klo] HH.mm",
                l: "D.M.YYYY",
                ll: "Do MMM YYYY",
                lll: "Do MMM YYYY, [klo] HH.mm",
                llll: "ddd, Do MMM YYYY, [klo] HH.mm"
            },
            calendar: {
                sameDay: "[t\xe4n\xe4\xe4n] [klo] LT",
                nextDay: "[huomenna] [klo] LT",
                nextWeek: "dddd [klo] LT",
                lastDay: "[eilen] [klo] LT",
                lastWeek: "[viime] dddd[na] [klo] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "%s p\xe4\xe4st\xe4",
                past: "%s sitten",
                s: o,
                ss: o,
                m: o,
                mm: o,
                h: o,
                hh: o,
                d: o,
                dd: o,
                M: o,
                MM: o,
                y: o,
                yy: o
            },
            dayOfMonthOrdinalParse: /\d{1,2}\./,
            ordinal: "%d.",
            week: {dow: 1, doy: 4}
        })
    }(e("wd/R"))
},
gjCT: function (n, t, e) {
    !function (n) {
        "use strict";
        var t = {
            1: "\u0661",
            2: "\u0662",
            3: "\u0663",
            4: "\u0664",
            5: "\u0665",
            6: "\u0666",
            7: "\u0667",
            8: "\u0668",
            9: "\u0669",
            0: "\u0660"
        }, e = {
            "\u0661": "1",
            "\u0662": "2",
            "\u0663": "3",
            "\u0664": "4",
            "\u0665": "5",
            "\u0666": "6",
            "\u0667": "7",
            "\u0668": "8",
            "\u0669": "9",
            "\u0660": "0"
        };
        n.defineLocale("ar-sa", {
            months: "\u064a\u0646\u0627\u064a\u0631_\u0641\u0628\u0631\u0627\u064a\u0631_\u0645\u0627\u0631\u0633_\u0623\u0628\u0631\u064a\u0644_\u0645\u0627\u064a\u0648_\u064a\u0648\u0646\u064a\u0648_\u064a\u0648\u0644\u064a\u0648_\u0623\u063a\u0633\u0637\u0633_\u0633\u0628\u062a\u0645\u0628\u0631_\u0623\u0643\u062a\u0648\u0628\u0631_\u0646\u0648\u0641\u0645\u0628\u0631_\u062f\u064a\u0633\u0645\u0628\u0631".split("_"),
            monthsShort: "\u064a\u0646\u0627\u064a\u0631_\u0641\u0628\u0631\u0627\u064a\u0631_\u0645\u0627\u0631\u0633_\u0623\u0628\u0631\u064a\u0644_\u0645\u0627\u064a\u0648_\u064a\u0648\u0646\u064a\u0648_\u064a\u0648\u0644\u064a\u0648_\u0623\u063a\u0633\u0637\u0633_\u0633\u0628\u062a\u0645\u0628\u0631_\u0623\u0643\u062a\u0648\u0628\u0631_\u0646\u0648\u0641\u0645\u0628\u0631_\u062f\u064a\u0633\u0645\u0628\u0631".split("_"),
            weekdays: "\u0627\u0644\u0623\u062d\u062f_\u0627\u0644\u0625\u062b\u0646\u064a\u0646_\u0627\u0644\u062b\u0644\u0627\u062b\u0627\u0621_\u0627\u0644\u0623\u0631\u0628\u0639\u0627\u0621_\u0627\u0644\u062e\u0645\u064a\u0633_\u0627\u0644\u062c\u0645\u0639\u0629_\u0627\u0644\u0633\u0628\u062a".split("_"),
            weekdaysShort: "\u0623\u062d\u062f_\u0625\u062b\u0646\u064a\u0646_\u062b\u0644\u0627\u062b\u0627\u0621_\u0623\u0631\u0628\u0639\u0627\u0621_\u062e\u0645\u064a\u0633_\u062c\u0645\u0639\u0629_\u0633\u0628\u062a".split("_"),
            weekdaysMin: "\u062d_\u0646_\u062b_\u0631_\u062e_\u062c_\u0633".split("_"),
            weekdaysParseExact: !0,
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY HH:mm",
                LLLL: "dddd D MMMM YYYY HH:mm"
            },
            meridiemParse: /\u0635|\u0645/,
            isPM: function (n) {
                return "\u0645" === n
            },
            meridiem: function (n, t, e) {
                return n < 12 ? "\u0635" : "\u0645"
            },
            calendar: {
                sameDay: "[\u0627\u0644\u064a\u0648\u0645 \u0639\u0644\u0649 \u0627\u0644\u0633\u0627\u0639\u0629] LT",
                nextDay: "[\u063a\u062f\u0627 \u0639\u0644\u0649 \u0627\u0644\u0633\u0627\u0639\u0629] LT",
                nextWeek: "dddd [\u0639\u0644\u0649 \u0627\u0644\u0633\u0627\u0639\u0629] LT",
                lastDay: "[\u0623\u0645\u0633 \u0639\u0644\u0649 \u0627\u0644\u0633\u0627\u0639\u0629] LT",
                lastWeek: "dddd [\u0639\u0644\u0649 \u0627\u0644\u0633\u0627\u0639\u0629] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "\u0641\u064a %s",
                past: "\u0645\u0646\u0630 %s",
                s: "\u062b\u0648\u0627\u0646",
                ss: "%d \u062b\u0627\u0646\u064a\u0629",
                m: "\u062f\u0642\u064a\u0642\u0629",
                mm: "%d \u062f\u0642\u0627\u0626\u0642",
                h: "\u0633\u0627\u0639\u0629",
                hh: "%d \u0633\u0627\u0639\u0627\u062a",
                d: "\u064a\u0648\u0645",
                dd: "%d \u0623\u064a\u0627\u0645",
                M: "\u0634\u0647\u0631",
                MM: "%d \u0623\u0634\u0647\u0631",
                y: "\u0633\u0646\u0629",
                yy: "%d \u0633\u0646\u0648\u0627\u062a"
            },
            preparse: function (n) {
                return n.replace(/[\u0661\u0662\u0663\u0664\u0665\u0666\u0667\u0668\u0669\u0660]/g, function (n) {
                    return e[n]
                }).replace(/\u060c/g, ",")
            },
            postformat: function (n) {
                return n.replace(/\d/g, function (n) {
                    return t[n]
                }).replace(/,/g, "\u060c")
            },
            week: {dow: 0, doy: 6}
        })
    }(e("wd/R"))
},
hKrs: function (n, t, e) {
    !function (n) {
        "use strict";
        e("wd/R").defineLocale("bg", {
            months: "\u044f\u043d\u0443\u0430\u0440\u0438_\u0444\u0435\u0432\u0440\u0443\u0430\u0440\u0438_\u043c\u0430\u0440\u0442_\u0430\u043f\u0440\u0438\u043b_\u043c\u0430\u0439_\u044e\u043d\u0438_\u044e\u043b\u0438_\u0430\u0432\u0433\u0443\u0441\u0442_\u0441\u0435\u043f\u0442\u0435\u043c\u0432\u0440\u0438_\u043e\u043a\u0442\u043e\u043c\u0432\u0440\u0438_\u043d\u043e\u0435\u043c\u0432\u0440\u0438_\u0434\u0435\u043a\u0435\u043c\u0432\u0440\u0438".split("_"),
            monthsShort: "\u044f\u043d\u0440_\u0444\u0435\u0432_\u043c\u0430\u0440_\u0430\u043f\u0440_\u043c\u0430\u0439_\u044e\u043d\u0438_\u044e\u043b\u0438_\u0430\u0432\u0433_\u0441\u0435\u043f_\u043e\u043a\u0442_\u043d\u043e\u0435_\u0434\u0435\u043a".split("_"),
            weekdays: "\u043d\u0435\u0434\u0435\u043b\u044f_\u043f\u043e\u043d\u0435\u0434\u0435\u043b\u043d\u0438\u043a_\u0432\u0442\u043e\u0440\u043d\u0438\u043a_\u0441\u0440\u044f\u0434\u0430_\u0447\u0435\u0442\u0432\u044a\u0440\u0442\u044a\u043a_\u043f\u0435\u0442\u044a\u043a_\u0441\u044a\u0431\u043e\u0442\u0430".split("_"),
            weekdaysShort: "\u043d\u0435\u0434_\u043f\u043e\u043d_\u0432\u0442\u043e_\u0441\u0440\u044f_\u0447\u0435\u0442_\u043f\u0435\u0442_\u0441\u044a\u0431".split("_"),
            weekdaysMin: "\u043d\u0434_\u043f\u043d_\u0432\u0442_\u0441\u0440_\u0447\u0442_\u043f\u0442_\u0441\u0431".split("_"),
            longDateFormat: {
                LT: "H:mm",
                LTS: "H:mm:ss",
                L: "D.MM.YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY H:mm",
                LLLL: "dddd, D MMMM YYYY H:mm"
            },
            calendar: {
                sameDay: "[\u0414\u043d\u0435\u0441 \u0432] LT",
                nextDay: "[\u0423\u0442\u0440\u0435 \u0432] LT",
                nextWeek: "dddd [\u0432] LT",
                lastDay: "[\u0412\u0447\u0435\u0440\u0430 \u0432] LT",
                lastWeek: function () {
                    switch (this.day()) {
                        case 0:
                        case 3:
                        case 6:
                            return "[\u0412 \u0438\u0437\u043c\u0438\u043d\u0430\u043b\u0430\u0442\u0430] dddd [\u0432] LT";
                        case 1:
                        case 2:
                        case 4:
                        case 5:
                            return "[\u0412 \u0438\u0437\u043c\u0438\u043d\u0430\u043b\u0438\u044f] dddd [\u0432] LT"
                    }
                },
                sameElse: "L"
            },
            relativeTime: {
                future: "\u0441\u043b\u0435\u0434 %s",
                past: "\u043f\u0440\u0435\u0434\u0438 %s",
                s: "\u043d\u044f\u043a\u043e\u043b\u043a\u043e \u0441\u0435\u043a\u0443\u043d\u0434\u0438",
                ss: "%d \u0441\u0435\u043a\u0443\u043d\u0434\u0438",
                m: "\u043c\u0438\u043d\u0443\u0442\u0430",
                mm: "%d \u043c\u0438\u043d\u0443\u0442\u0438",
                h: "\u0447\u0430\u0441",
                hh: "%d \u0447\u0430\u0441\u0430",
                d: "\u0434\u0435\u043d",
                dd: "%d \u0434\u043d\u0438",
                M: "\u043c\u0435\u0441\u0435\u0446",
                MM: "%d \u043c\u0435\u0441\u0435\u0446\u0430",
                y: "\u0433\u043e\u0434\u0438\u043d\u0430",
                yy: "%d \u0433\u043e\u0434\u0438\u043d\u0438"
            },
            dayOfMonthOrdinalParse: /\d{1,2}-(\u0435\u0432|\u0435\u043d|\u0442\u0438|\u0432\u0438|\u0440\u0438|\u043c\u0438)/,
            ordinal: function (n) {
                var t = n % 10, e = n % 100;
                return 0 === n ? n + "-\u0435\u0432" : 0 === e ? n + "-\u0435\u043d" : e > 10 && e < 20 ? n + "-\u0442\u0438" : 1 === t ? n + "-\u0432\u0438" : 2 === t ? n + "-\u0440\u0438" : 7 === t || 8 === t ? n + "-\u043c\u0438" : n + "-\u0442\u0438"
            },
            week: {dow: 1, doy: 7}
        })
    }()
},
honF: function (n, t, e) {
    !function (n) {
        "use strict";
        var t = {
            1: "\u1041",
            2: "\u1042",
            3: "\u1043",
            4: "\u1044",
            5: "\u1045",
            6: "\u1046",
            7: "\u1047",
            8: "\u1048",
            9: "\u1049",
            0: "\u1040"
        }, e = {
            "\u1041": "1",
            "\u1042": "2",
            "\u1043": "3",
            "\u1044": "4",
            "\u1045": "5",
            "\u1046": "6",
            "\u1047": "7",
            "\u1048": "8",
            "\u1049": "9",
            "\u1040": "0"
        };
        n.defineLocale("my", {
            months: "\u1007\u1014\u103a\u1014\u101d\u102b\u101b\u102e_\u1016\u1031\u1016\u1031\u102c\u103a\u101d\u102b\u101b\u102e_\u1019\u1010\u103a_\u1027\u1015\u103c\u102e_\u1019\u1031_\u1007\u103d\u1014\u103a_\u1007\u1030\u101c\u102d\u102f\u1004\u103a_\u101e\u103c\u1002\u102f\u1010\u103a_\u1005\u1000\u103a\u1010\u1004\u103a\u1018\u102c_\u1021\u1031\u102c\u1000\u103a\u1010\u102d\u102f\u1018\u102c_\u1014\u102d\u102f\u101d\u1004\u103a\u1018\u102c_\u1012\u102e\u1007\u1004\u103a\u1018\u102c".split("_"),
            monthsShort: "\u1007\u1014\u103a_\u1016\u1031_\u1019\u1010\u103a_\u1015\u103c\u102e_\u1019\u1031_\u1007\u103d\u1014\u103a_\u101c\u102d\u102f\u1004\u103a_\u101e\u103c_\u1005\u1000\u103a_\u1021\u1031\u102c\u1000\u103a_\u1014\u102d\u102f_\u1012\u102e".split("_"),
            weekdays: "\u1010\u1014\u1004\u103a\u1039\u1002\u1014\u103d\u1031_\u1010\u1014\u1004\u103a\u1039\u101c\u102c_\u1021\u1004\u103a\u1039\u1002\u102b_\u1017\u102f\u1012\u1039\u1013\u101f\u1030\u1038_\u1000\u103c\u102c\u101e\u1015\u1010\u1031\u1038_\u101e\u1031\u102c\u1000\u103c\u102c_\u1005\u1014\u1031".split("_"),
            weekdaysShort: "\u1014\u103d\u1031_\u101c\u102c_\u1002\u102b_\u101f\u1030\u1038_\u1000\u103c\u102c_\u101e\u1031\u102c_\u1014\u1031".split("_"),
            weekdaysMin: "\u1014\u103d\u1031_\u101c\u102c_\u1002\u102b_\u101f\u1030\u1038_\u1000\u103c\u102c_\u101e\u1031\u102c_\u1014\u1031".split("_"),
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY HH:mm",
                LLLL: "dddd D MMMM YYYY HH:mm"
            },
            calendar: {
                sameDay: "[\u101a\u1014\u1031.] LT [\u1019\u103e\u102c]",
                nextDay: "[\u1019\u1014\u1000\u103a\u1016\u103c\u1014\u103a] LT [\u1019\u103e\u102c]",
                nextWeek: "dddd LT [\u1019\u103e\u102c]",
                lastDay: "[\u1019\u1014\u1031.\u1000] LT [\u1019\u103e\u102c]",
                lastWeek: "[\u1015\u103c\u102e\u1038\u1001\u1032\u1037\u101e\u1031\u102c] dddd LT [\u1019\u103e\u102c]",
                sameElse: "L"
            },
            relativeTime: {
                future: "\u101c\u102c\u1019\u100a\u103a\u1037 %s \u1019\u103e\u102c",
                past: "\u101c\u103d\u1014\u103a\u1001\u1032\u1037\u101e\u1031\u102c %s \u1000",
                s: "\u1005\u1000\u1039\u1000\u1014\u103a.\u1021\u1014\u100a\u103a\u1038\u1004\u101a\u103a",
                ss: "%d \u1005\u1000\u1039\u1000\u1014\u1037\u103a",
                m: "\u1010\u1005\u103a\u1019\u102d\u1014\u1005\u103a",
                mm: "%d \u1019\u102d\u1014\u1005\u103a",
                h: "\u1010\u1005\u103a\u1014\u102c\u101b\u102e",
                hh: "%d \u1014\u102c\u101b\u102e",
                d: "\u1010\u1005\u103a\u101b\u1000\u103a",
                dd: "%d \u101b\u1000\u103a",
                M: "\u1010\u1005\u103a\u101c",
                MM: "%d \u101c",
                y: "\u1010\u1005\u103a\u1014\u103e\u1005\u103a",
                yy: "%d \u1014\u103e\u1005\u103a"
            },
            preparse: function (n) {
                return n.replace(/[\u1041\u1042\u1043\u1044\u1045\u1046\u1047\u1048\u1049\u1040]/g, function (n) {
                    return e[n]
                })
            },
            postformat: function (n) {
                return n.replace(/\d/g, function (n) {
                    return t[n]
                })
            },
            week: {dow: 1, doy: 4}
        })
    }(e("wd/R"))
},
iEDd: function (n, t, e) {
    !function (n) {
        "use strict";
        e("wd/R").defineLocale("gl", {
            months: "xaneiro_febreiro_marzo_abril_maio_xu\xf1o_xullo_agosto_setembro_outubro_novembro_decembro".split("_"),
            monthsShort: "xan._feb._mar._abr._mai._xu\xf1._xul._ago._set._out._nov._dec.".split("_"),
            monthsParseExact: !0,
            weekdays: "domingo_luns_martes_m\xe9rcores_xoves_venres_s\xe1bado".split("_"),
            weekdaysShort: "dom._lun._mar._m\xe9r._xov._ven._s\xe1b.".split("_"),
            weekdaysMin: "do_lu_ma_m\xe9_xo_ve_s\xe1".split("_"),
            weekdaysParseExact: !0,
            longDateFormat: {
                LT: "H:mm",
                LTS: "H:mm:ss",
                L: "DD/MM/YYYY",
                LL: "D [de] MMMM [de] YYYY",
                LLL: "D [de] MMMM [de] YYYY H:mm",
                LLLL: "dddd, D [de] MMMM [de] YYYY H:mm"
            },
            calendar: {
                sameDay: function () {
                    return "[hoxe " + (1 !== this.hours() ? "\xe1s" : "\xe1") + "] LT"
                }, nextDay: function () {
                    return "[ma\xf1\xe1 " + (1 !== this.hours() ? "\xe1s" : "\xe1") + "] LT"
                }, nextWeek: function () {
                    return "dddd [" + (1 !== this.hours() ? "\xe1s" : "a") + "] LT"
                }, lastDay: function () {
                    return "[onte " + (1 !== this.hours() ? "\xe1" : "a") + "] LT"
                }, lastWeek: function () {
                    return "[o] dddd [pasado " + (1 !== this.hours() ? "\xe1s" : "a") + "] LT"
                }, sameElse: "L"
            },
            relativeTime: {
                future: function (n) {
                    return 0 === n.indexOf("un") ? "n" + n : "en " + n
                },
                past: "hai %s",
                s: "uns segundos",
                ss: "%d segundos",
                m: "un minuto",
                mm: "%d minutos",
                h: "unha hora",
                hh: "%d horas",
                d: "un d\xeda",
                dd: "%d d\xedas",
                M: "un mes",
                MM: "%d meses",
                y: "un ano",
                yy: "%d anos"
            },
            dayOfMonthOrdinalParse: /\d{1,2}\xba/,
            ordinal: "%d\xba",
            week: {dow: 1, doy: 4}
        })
    }()
},
iYuL: function (n, t, e) {
    !function (n) {
        "use strict";
        var t = "ene._feb._mar._abr._may._jun._jul._ago._sep._oct._nov._dic.".split("_"),
            e = "ene_feb_mar_abr_may_jun_jul_ago_sep_oct_nov_dic".split("_"),
            o = [/^ene/i, /^feb/i, /^mar/i, /^abr/i, /^may/i, /^jun/i, /^jul/i, /^ago/i, /^sep/i, /^oct/i, /^nov/i, /^dic/i],
            l = /^(enero|febrero|marzo|abril|mayo|junio|julio|agosto|septiembre|octubre|noviembre|diciembre|ene\.?|feb\.?|mar\.?|abr\.?|may\.?|jun\.?|jul\.?|ago\.?|sep\.?|oct\.?|nov\.?|dic\.?)/i;
        n.defineLocale("es", {
            months: "enero_febrero_marzo_abril_mayo_junio_julio_agosto_septiembre_octubre_noviembre_diciembre".split("_"),
            monthsShort: function (n, o) {
                return n ? /-MMM-/.test(o) ? e[n.month()] : t[n.month()] : t
            },
            monthsRegex: l,
            monthsShortRegex: l,
            monthsStrictRegex: /^(enero|febrero|marzo|abril|mayo|junio|julio|agosto|septiembre|octubre|noviembre|diciembre)/i,
            monthsShortStrictRegex: /^(ene\.?|feb\.?|mar\.?|abr\.?|may\.?|jun\.?|jul\.?|ago\.?|sep\.?|oct\.?|nov\.?|dic\.?)/i,
            monthsParse: o,
            longMonthsParse: o,
            shortMonthsParse: o,
            weekdays: "domingo_lunes_martes_mi\xe9rcoles_jueves_viernes_s\xe1bado".split("_"),
            weekdaysShort: "dom._lun._mar._mi\xe9._jue._vie._s\xe1b.".split("_"),
            weekdaysMin: "do_lu_ma_mi_ju_vi_s\xe1".split("_"),
            weekdaysParseExact: !0,
            longDateFormat: {
                LT: "H:mm",
                LTS: "H:mm:ss",
                L: "DD/MM/YYYY",
                LL: "D [de] MMMM [de] YYYY",
                LLL: "D [de] MMMM [de] YYYY H:mm",
                LLLL: "dddd, D [de] MMMM [de] YYYY H:mm"
            },
            calendar: {
                sameDay: function () {
                    return "[hoy a la" + (1 !== this.hours() ? "s" : "") + "] LT"
                }, nextDay: function () {
                    return "[ma\xf1ana a la" + (1 !== this.hours() ? "s" : "") + "] LT"
                }, nextWeek: function () {
                    return "dddd [a la" + (1 !== this.hours() ? "s" : "") + "] LT"
                }, lastDay: function () {
                    return "[ayer a la" + (1 !== this.hours() ? "s" : "") + "] LT"
                }, lastWeek: function () {
                    return "[el] dddd [pasado a la" + (1 !== this.hours() ? "s" : "") + "] LT"
                }, sameElse: "L"
            },
            relativeTime: {
                future: "en %s",
                past: "hace %s",
                s: "unos segundos",
                ss: "%d segundos",
                m: "un minuto",
                mm: "%d minutos",
                h: "una hora",
                hh: "%d horas",
                d: "un d\xeda",
                dd: "%d d\xedas",
                M: "un mes",
                MM: "%d meses",
                y: "un a\xf1o",
                yy: "%d a\xf1os"
            },
            dayOfMonthOrdinalParse: /\d{1,2}\xba/,
            ordinal: "%d\xba",
            week: {dow: 1, doy: 4}
        })
    }(e("wd/R"))
},
jUeY: function (n, t, e) {
    !function (n) {
        "use strict";
        e("wd/R").defineLocale("el", {
            monthsNominativeEl: "\u0399\u03b1\u03bd\u03bf\u03c5\u03ac\u03c1\u03b9\u03bf\u03c2_\u03a6\u03b5\u03b2\u03c1\u03bf\u03c5\u03ac\u03c1\u03b9\u03bf\u03c2_\u039c\u03ac\u03c1\u03c4\u03b9\u03bf\u03c2_\u0391\u03c0\u03c1\u03af\u03bb\u03b9\u03bf\u03c2_\u039c\u03ac\u03b9\u03bf\u03c2_\u0399\u03bf\u03cd\u03bd\u03b9\u03bf\u03c2_\u0399\u03bf\u03cd\u03bb\u03b9\u03bf\u03c2_\u0391\u03cd\u03b3\u03bf\u03c5\u03c3\u03c4\u03bf\u03c2_\u03a3\u03b5\u03c0\u03c4\u03ad\u03bc\u03b2\u03c1\u03b9\u03bf\u03c2_\u039f\u03ba\u03c4\u03ce\u03b2\u03c1\u03b9\u03bf\u03c2_\u039d\u03bf\u03ad\u03bc\u03b2\u03c1\u03b9\u03bf\u03c2_\u0394\u03b5\u03ba\u03ad\u03bc\u03b2\u03c1\u03b9\u03bf\u03c2".split("_"),
            monthsGenitiveEl: "\u0399\u03b1\u03bd\u03bf\u03c5\u03b1\u03c1\u03af\u03bf\u03c5_\u03a6\u03b5\u03b2\u03c1\u03bf\u03c5\u03b1\u03c1\u03af\u03bf\u03c5_\u039c\u03b1\u03c1\u03c4\u03af\u03bf\u03c5_\u0391\u03c0\u03c1\u03b9\u03bb\u03af\u03bf\u03c5_\u039c\u03b1\u0390\u03bf\u03c5_\u0399\u03bf\u03c5\u03bd\u03af\u03bf\u03c5_\u0399\u03bf\u03c5\u03bb\u03af\u03bf\u03c5_\u0391\u03c5\u03b3\u03bf\u03cd\u03c3\u03c4\u03bf\u03c5_\u03a3\u03b5\u03c0\u03c4\u03b5\u03bc\u03b2\u03c1\u03af\u03bf\u03c5_\u039f\u03ba\u03c4\u03c9\u03b2\u03c1\u03af\u03bf\u03c5_\u039d\u03bf\u03b5\u03bc\u03b2\u03c1\u03af\u03bf\u03c5_\u0394\u03b5\u03ba\u03b5\u03bc\u03b2\u03c1\u03af\u03bf\u03c5".split("_"),
            months: function (n, t) {
                return n ? "string" == typeof t && /D/.test(t.substring(0, t.indexOf("MMMM"))) ? this._monthsGenitiveEl[n.month()] : this._monthsNominativeEl[n.month()] : this._monthsNominativeEl
            },
            monthsShort: "\u0399\u03b1\u03bd_\u03a6\u03b5\u03b2_\u039c\u03b1\u03c1_\u0391\u03c0\u03c1_\u039c\u03b1\u03ca_\u0399\u03bf\u03c5\u03bd_\u0399\u03bf\u03c5\u03bb_\u0391\u03c5\u03b3_\u03a3\u03b5\u03c0_\u039f\u03ba\u03c4_\u039d\u03bf\u03b5_\u0394\u03b5\u03ba".split("_"),
            weekdays: "\u039a\u03c5\u03c1\u03b9\u03b1\u03ba\u03ae_\u0394\u03b5\u03c5\u03c4\u03ad\u03c1\u03b1_\u03a4\u03c1\u03af\u03c4\u03b7_\u03a4\u03b5\u03c4\u03ac\u03c1\u03c4\u03b7_\u03a0\u03ad\u03bc\u03c0\u03c4\u03b7_\u03a0\u03b1\u03c1\u03b1\u03c3\u03ba\u03b5\u03c5\u03ae_\u03a3\u03ac\u03b2\u03b2\u03b1\u03c4\u03bf".split("_"),
            weekdaysShort: "\u039a\u03c5\u03c1_\u0394\u03b5\u03c5_\u03a4\u03c1\u03b9_\u03a4\u03b5\u03c4_\u03a0\u03b5\u03bc_\u03a0\u03b1\u03c1_\u03a3\u03b1\u03b2".split("_"),
            weekdaysMin: "\u039a\u03c5_\u0394\u03b5_\u03a4\u03c1_\u03a4\u03b5_\u03a0\u03b5_\u03a0\u03b1_\u03a3\u03b1".split("_"),
            meridiem: function (n, t, e) {
                return n > 11 ? e ? "\u03bc\u03bc" : "\u039c\u039c" : e ? "\u03c0\u03bc" : "\u03a0\u039c"
            },
            isPM: function (n) {
                return "\u03bc" === (n + "").toLowerCase()[0]
            },
            meridiemParse: /[\u03a0\u039c]\.?\u039c?\.?/i,
            longDateFormat: {
                LT: "h:mm A",
                LTS: "h:mm:ss A",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY h:mm A",
                LLLL: "dddd, D MMMM YYYY h:mm A"
            },
            calendarEl: {
                sameDay: "[\u03a3\u03ae\u03bc\u03b5\u03c1\u03b1 {}] LT",
                nextDay: "[\u0391\u03cd\u03c1\u03b9\u03bf {}] LT",
                nextWeek: "dddd [{}] LT",
                lastDay: "[\u03a7\u03b8\u03b5\u03c2 {}] LT",
                lastWeek: function () {
                    switch (this.day()) {
                        case 6:
                            return "[\u03c4\u03bf \u03c0\u03c1\u03bf\u03b7\u03b3\u03bf\u03cd\u03bc\u03b5\u03bd\u03bf] dddd [{}] LT";
                        default:
                            return "[\u03c4\u03b7\u03bd \u03c0\u03c1\u03bf\u03b7\u03b3\u03bf\u03cd\u03bc\u03b5\u03bd\u03b7] dddd [{}] LT"
                    }
                },
                sameElse: "L"
            },
            calendar: function (n, t) {
                var e, o = this._calendarEl[n], l = t && t.hours();
                return ((e = o) instanceof Function || "[object Function]" === Object.prototype.toString.call(e)) && (o = o.apply(t)), o.replace("{}", l % 12 == 1 ? "\u03c3\u03c4\u03b7" : "\u03c3\u03c4\u03b9\u03c2")
            },
            relativeTime: {
                future: "\u03c3\u03b5 %s",
                past: "%s \u03c0\u03c1\u03b9\u03bd",
                s: "\u03bb\u03af\u03b3\u03b1 \u03b4\u03b5\u03c5\u03c4\u03b5\u03c1\u03cc\u03bb\u03b5\u03c0\u03c4\u03b1",
                ss: "%d \u03b4\u03b5\u03c5\u03c4\u03b5\u03c1\u03cc\u03bb\u03b5\u03c0\u03c4\u03b1",
                m: "\u03ad\u03bd\u03b1 \u03bb\u03b5\u03c0\u03c4\u03cc",
                mm: "%d \u03bb\u03b5\u03c0\u03c4\u03ac",
                h: "\u03bc\u03af\u03b1 \u03ce\u03c1\u03b1",
                hh: "%d \u03ce\u03c1\u03b5\u03c2",
                d: "\u03bc\u03af\u03b1 \u03bc\u03ad\u03c1\u03b1",
                dd: "%d \u03bc\u03ad\u03c1\u03b5\u03c2",
                M: "\u03ad\u03bd\u03b1\u03c2 \u03bc\u03ae\u03bd\u03b1\u03c2",
                MM: "%d \u03bc\u03ae\u03bd\u03b5\u03c2",
                y: "\u03ad\u03bd\u03b1\u03c2 \u03c7\u03c1\u03cc\u03bd\u03bf\u03c2",
                yy: "%d \u03c7\u03c1\u03cc\u03bd\u03b9\u03b1"
            },
            dayOfMonthOrdinalParse: /\d{1,2}\u03b7/,
            ordinal: "%d\u03b7",
            week: {dow: 1, doy: 4}
        })
    }()
},
jVdC: function (n, t, e) {
    !function (n) {
        "use strict";
        var t = "stycze\u0144_luty_marzec_kwiecie\u0144_maj_czerwiec_lipiec_sierpie\u0144_wrzesie\u0144_pa\u017adziernik_listopad_grudzie\u0144".split("_"),
            e = "stycznia_lutego_marca_kwietnia_maja_czerwca_lipca_sierpnia_wrze\u015bnia_pa\u017adziernika_listopada_grudnia".split("_");

        function o(n) {
            return n % 10 < 5 && n % 10 > 1 && ~~(n / 10) % 10 != 1
        }

        function l(n, t, e) {
            var l = n + " ";
            switch (e) {
                case"ss":
                    return l + (o(n) ? "sekundy" : "sekund");
                case"m":
                    return t ? "minuta" : "minut\u0119";
                case"mm":
                    return l + (o(n) ? "minuty" : "minut");
                case"h":
                    return t ? "godzina" : "godzin\u0119";
                case"hh":
                    return l + (o(n) ? "godziny" : "godzin");
                case"MM":
                    return l + (o(n) ? "miesi\u0105ce" : "miesi\u0119cy");
                case"yy":
                    return l + (o(n) ? "lata" : "lat")
            }
        }

        n.defineLocale("pl", {
            months: function (n, o) {
                return n ? "" === o ? "(" + e[n.month()] + "|" + t[n.month()] + ")" : /D MMMM/.test(o) ? e[n.month()] : t[n.month()] : t
            },
            monthsShort: "sty_lut_mar_kwi_maj_cze_lip_sie_wrz_pa\u017a_lis_gru".split("_"),
            weekdays: "niedziela_poniedzia\u0142ek_wtorek_\u015broda_czwartek_pi\u0105tek_sobota".split("_"),
            weekdaysShort: "ndz_pon_wt_\u015br_czw_pt_sob".split("_"),
            weekdaysMin: "Nd_Pn_Wt_\u015ar_Cz_Pt_So".split("_"),
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD.MM.YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY HH:mm",
                LLLL: "dddd, D MMMM YYYY HH:mm"
            },
            calendar: {
                sameDay: "[Dzi\u015b o] LT", nextDay: "[Jutro o] LT", nextWeek: function () {
                    switch (this.day()) {
                        case 0:
                            return "[W niedziel\u0119 o] LT";
                        case 2:
                            return "[We wtorek o] LT";
                        case 3:
                            return "[W \u015brod\u0119 o] LT";
                        case 6:
                            return "[W sobot\u0119 o] LT";
                        default:
                            return "[W] dddd [o] LT"
                    }
                }, lastDay: "[Wczoraj o] LT", lastWeek: function () {
                    switch (this.day()) {
                        case 0:
                            return "[W zesz\u0142\u0105 niedziel\u0119 o] LT";
                        case 3:
                            return "[W zesz\u0142\u0105 \u015brod\u0119 o] LT";
                        case 6:
                            return "[W zesz\u0142\u0105 sobot\u0119 o] LT";
                        default:
                            return "[W zesz\u0142y] dddd [o] LT"
                    }
                }, sameElse: "L"
            },
            relativeTime: {
                future: "za %s",
                past: "%s temu",
                s: "kilka sekund",
                ss: l,
                m: l,
                mm: l,
                h: l,
                hh: l,
                d: "1 dzie\u0144",
                dd: "%d dni",
                M: "miesi\u0105c",
                MM: l,
                y: "rok",
                yy: l
            },
            dayOfMonthOrdinalParse: /\d{1,2}\./,
            ordinal: "%d.",
            week: {dow: 1, doy: 4}
        })
    }(e("wd/R"))
},
jfSC: function (n, t, e) {
    !function (n) {
        "use strict";
        var t = {
            1: "\u06f1",
            2: "\u06f2",
            3: "\u06f3",
            4: "\u06f4",
            5: "\u06f5",
            6: "\u06f6",
            7: "\u06f7",
            8: "\u06f8",
            9: "\u06f9",
            0: "\u06f0"
        }, e = {
            "\u06f1": "1",
            "\u06f2": "2",
            "\u06f3": "3",
            "\u06f4": "4",
            "\u06f5": "5",
            "\u06f6": "6",
            "\u06f7": "7",
            "\u06f8": "8",
            "\u06f9": "9",
            "\u06f0": "0"
        };
        n.defineLocale("fa", {
            months: "\u0698\u0627\u0646\u0648\u06cc\u0647_\u0641\u0648\u0631\u06cc\u0647_\u0645\u0627\u0631\u0633_\u0622\u0648\u0631\u06cc\u0644_\u0645\u0647_\u0698\u0648\u0626\u0646_\u0698\u0648\u0626\u06cc\u0647_\u0627\u0648\u062a_\u0633\u067e\u062a\u0627\u0645\u0628\u0631_\u0627\u06a9\u062a\u0628\u0631_\u0646\u0648\u0627\u0645\u0628\u0631_\u062f\u0633\u0627\u0645\u0628\u0631".split("_"),
            monthsShort: "\u0698\u0627\u0646\u0648\u06cc\u0647_\u0641\u0648\u0631\u06cc\u0647_\u0645\u0627\u0631\u0633_\u0622\u0648\u0631\u06cc\u0644_\u0645\u0647_\u0698\u0648\u0626\u0646_\u0698\u0648\u0626\u06cc\u0647_\u0627\u0648\u062a_\u0633\u067e\u062a\u0627\u0645\u0628\u0631_\u0627\u06a9\u062a\u0628\u0631_\u0646\u0648\u0627\u0645\u0628\u0631_\u062f\u0633\u0627\u0645\u0628\u0631".split("_"),
            weekdays: "\u06cc\u06a9\u200c\u0634\u0646\u0628\u0647_\u062f\u0648\u0634\u0646\u0628\u0647_\u0633\u0647\u200c\u0634\u0646\u0628\u0647_\u0686\u0647\u0627\u0631\u0634\u0646\u0628\u0647_\u067e\u0646\u062c\u200c\u0634\u0646\u0628\u0647_\u062c\u0645\u0639\u0647_\u0634\u0646\u0628\u0647".split("_"),
            weekdaysShort: "\u06cc\u06a9\u200c\u0634\u0646\u0628\u0647_\u062f\u0648\u0634\u0646\u0628\u0647_\u0633\u0647\u200c\u0634\u0646\u0628\u0647_\u0686\u0647\u0627\u0631\u0634\u0646\u0628\u0647_\u067e\u0646\u062c\u200c\u0634\u0646\u0628\u0647_\u062c\u0645\u0639\u0647_\u0634\u0646\u0628\u0647".split("_"),
            weekdaysMin: "\u06cc_\u062f_\u0633_\u0686_\u067e_\u062c_\u0634".split("_"),
            weekdaysParseExact: !0,
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY HH:mm",
                LLLL: "dddd, D MMMM YYYY HH:mm"
            },
            meridiemParse: /\u0642\u0628\u0644 \u0627\u0632 \u0638\u0647\u0631|\u0628\u0639\u062f \u0627\u0632 \u0638\u0647\u0631/,
            isPM: function (n) {
                return /\u0628\u0639\u062f \u0627\u0632 \u0638\u0647\u0631/.test(n)
            },
            meridiem: function (n, t, e) {
                return n < 12 ? "\u0642\u0628\u0644 \u0627\u0632 \u0638\u0647\u0631" : "\u0628\u0639\u062f \u0627\u0632 \u0638\u0647\u0631"
            },
            calendar: {
                sameDay: "[\u0627\u0645\u0631\u0648\u0632 \u0633\u0627\u0639\u062a] LT",
                nextDay: "[\u0641\u0631\u062f\u0627 \u0633\u0627\u0639\u062a] LT",
                nextWeek: "dddd [\u0633\u0627\u0639\u062a] LT",
                lastDay: "[\u062f\u06cc\u0631\u0648\u0632 \u0633\u0627\u0639\u062a] LT",
                lastWeek: "dddd [\u067e\u06cc\u0634] [\u0633\u0627\u0639\u062a] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "\u062f\u0631 %s",
                past: "%s \u067e\u06cc\u0634",
                s: "\u0686\u0646\u062f \u062b\u0627\u0646\u06cc\u0647",
                ss: "\u062b\u0627\u0646\u06cc\u0647 d%",
                m: "\u06cc\u06a9 \u062f\u0642\u06cc\u0642\u0647",
                mm: "%d \u062f\u0642\u06cc\u0642\u0647",
                h: "\u06cc\u06a9 \u0633\u0627\u0639\u062a",
                hh: "%d \u0633\u0627\u0639\u062a",
                d: "\u06cc\u06a9 \u0631\u0648\u0632",
                dd: "%d \u0631\u0648\u0632",
                M: "\u06cc\u06a9 \u0645\u0627\u0647",
                MM: "%d \u0645\u0627\u0647",
                y: "\u06cc\u06a9 \u0633\u0627\u0644",
                yy: "%d \u0633\u0627\u0644"
            },
            preparse: function (n) {
                return n.replace(/[\u06f0-\u06f9]/g, function (n) {
                    return e[n]
                }).replace(/\u060c/g, ",")
            },
            postformat: function (n) {
                return n.replace(/\d/g, function (n) {
                    return t[n]
                }).replace(/,/g, "\u060c")
            },
            dayOfMonthOrdinalParse: /\d{1,2}\u0645/,
            ordinal: "%d\u0645",
            week: {dow: 6, doy: 12}
        })
    }(e("wd/R"))
},
jnO4: function (n, t, e) {
    !function (n) {
        "use strict";
        var t = {
                1: "\u0661",
                2: "\u0662",
                3: "\u0663",
                4: "\u0664",
                5: "\u0665",
                6: "\u0666",
                7: "\u0667",
                8: "\u0668",
                9: "\u0669",
                0: "\u0660"
            }, e = {
                "\u0661": "1",
                "\u0662": "2",
                "\u0663": "3",
                "\u0664": "4",
                "\u0665": "5",
                "\u0666": "6",
                "\u0667": "7",
                "\u0668": "8",
                "\u0669": "9",
                "\u0660": "0"
            }, o = function (n) {
                return 0 === n ? 0 : 1 === n ? 1 : 2 === n ? 2 : n % 100 >= 3 && n % 100 <= 10 ? 3 : n % 100 >= 11 ? 4 : 5
            }, l = {
                s: ["\u0623\u0642\u0644 \u0645\u0646 \u062b\u0627\u0646\u064a\u0629", "\u062b\u0627\u0646\u064a\u0629 \u0648\u0627\u062d\u062f\u0629", ["\u062b\u0627\u0646\u064a\u062a\u0627\u0646", "\u062b\u0627\u0646\u064a\u062a\u064a\u0646"], "%d \u062b\u0648\u0627\u0646", "%d \u062b\u0627\u0646\u064a\u0629", "%d \u062b\u0627\u0646\u064a\u0629"],
                m: ["\u0623\u0642\u0644 \u0645\u0646 \u062f\u0642\u064a\u0642\u0629", "\u062f\u0642\u064a\u0642\u0629 \u0648\u0627\u062d\u062f\u0629", ["\u062f\u0642\u064a\u0642\u062a\u0627\u0646", "\u062f\u0642\u064a\u0642\u062a\u064a\u0646"], "%d \u062f\u0642\u0627\u0626\u0642", "%d \u062f\u0642\u064a\u0642\u0629", "%d \u062f\u0642\u064a\u0642\u0629"],
                h: ["\u0623\u0642\u0644 \u0645\u0646 \u0633\u0627\u0639\u0629", "\u0633\u0627\u0639\u0629 \u0648\u0627\u062d\u062f\u0629", ["\u0633\u0627\u0639\u062a\u0627\u0646", "\u0633\u0627\u0639\u062a\u064a\u0646"], "%d \u0633\u0627\u0639\u0627\u062a", "%d \u0633\u0627\u0639\u0629", "%d \u0633\u0627\u0639\u0629"],
                d: ["\u0623\u0642\u0644 \u0645\u0646 \u064a\u0648\u0645", "\u064a\u0648\u0645 \u0648\u0627\u062d\u062f", ["\u064a\u0648\u0645\u0627\u0646", "\u064a\u0648\u0645\u064a\u0646"], "%d \u0623\u064a\u0627\u0645", "%d \u064a\u0648\u0645\u064b\u0627", "%d \u064a\u0648\u0645"],
                M: ["\u0623\u0642\u0644 \u0645\u0646 \u0634\u0647\u0631", "\u0634\u0647\u0631 \u0648\u0627\u062d\u062f", ["\u0634\u0647\u0631\u0627\u0646", "\u0634\u0647\u0631\u064a\u0646"], "%d \u0623\u0634\u0647\u0631", "%d \u0634\u0647\u0631\u0627", "%d \u0634\u0647\u0631"],
                y: ["\u0623\u0642\u0644 \u0645\u0646 \u0639\u0627\u0645", "\u0639\u0627\u0645 \u0648\u0627\u062d\u062f", ["\u0639\u0627\u0645\u0627\u0646", "\u0639\u0627\u0645\u064a\u0646"], "%d \u0623\u0639\u0648\u0627\u0645", "%d \u0639\u0627\u0645\u064b\u0627", "%d \u0639\u0627\u0645"]
            }, r = function (n) {
                return function (t, e, r, i) {
                    var a = o(t), s = l[n][o(t)];
                    return 2 === a && (s = s[e ? 0 : 1]), s.replace(/%d/i, t)
                }
            },
            i = ["\u064a\u0646\u0627\u064a\u0631", "\u0641\u0628\u0631\u0627\u064a\u0631", "\u0645\u0627\u0631\u0633", "\u0623\u0628\u0631\u064a\u0644", "\u0645\u0627\u064a\u0648", "\u064a\u0648\u0646\u064a\u0648", "\u064a\u0648\u0644\u064a\u0648", "\u0623\u063a\u0633\u0637\u0633", "\u0633\u0628\u062a\u0645\u0628\u0631", "\u0623\u0643\u062a\u0648\u0628\u0631", "\u0646\u0648\u0641\u0645\u0628\u0631", "\u062f\u064a\u0633\u0645\u0628\u0631"];
        n.defineLocale("ar", {
            months: i,
            monthsShort: i,
            weekdays: "\u0627\u0644\u0623\u062d\u062f_\u0627\u0644\u0625\u062b\u0646\u064a\u0646_\u0627\u0644\u062b\u0644\u0627\u062b\u0627\u0621_\u0627\u0644\u0623\u0631\u0628\u0639\u0627\u0621_\u0627\u0644\u062e\u0645\u064a\u0633_\u0627\u0644\u062c\u0645\u0639\u0629_\u0627\u0644\u0633\u0628\u062a".split("_"),
            weekdaysShort: "\u0623\u062d\u062f_\u0625\u062b\u0646\u064a\u0646_\u062b\u0644\u0627\u062b\u0627\u0621_\u0623\u0631\u0628\u0639\u0627\u0621_\u062e\u0645\u064a\u0633_\u062c\u0645\u0639\u0629_\u0633\u0628\u062a".split("_"),
            weekdaysMin: "\u062d_\u0646_\u062b_\u0631_\u062e_\u062c_\u0633".split("_"),
            weekdaysParseExact: !0,
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "D/\u200fM/\u200fYYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY HH:mm",
                LLLL: "dddd D MMMM YYYY HH:mm"
            },
            meridiemParse: /\u0635|\u0645/,
            isPM: function (n) {
                return "\u0645" === n
            },
            meridiem: function (n, t, e) {
                return n < 12 ? "\u0635" : "\u0645"
            },
            calendar: {
                sameDay: "[\u0627\u0644\u064a\u0648\u0645 \u0639\u0646\u062f \u0627\u0644\u0633\u0627\u0639\u0629] LT",
                nextDay: "[\u063a\u062f\u064b\u0627 \u0639\u0646\u062f \u0627\u0644\u0633\u0627\u0639\u0629] LT",
                nextWeek: "dddd [\u0639\u0646\u062f \u0627\u0644\u0633\u0627\u0639\u0629] LT",
                lastDay: "[\u0623\u0645\u0633 \u0639\u0646\u062f \u0627\u0644\u0633\u0627\u0639\u0629] LT",
                lastWeek: "dddd [\u0639\u0646\u062f \u0627\u0644\u0633\u0627\u0639\u0629] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "\u0628\u0639\u062f %s",
                past: "\u0645\u0646\u0630 %s",
                s: r("s"),
                ss: r("s"),
                m: r("m"),
                mm: r("m"),
                h: r("h"),
                hh: r("h"),
                d: r("d"),
                dd: r("d"),
                M: r("M"),
                MM: r("M"),
                y: r("y"),
                yy: r("y")
            },
            preparse: function (n) {
                return n.replace(/[\u0661\u0662\u0663\u0664\u0665\u0666\u0667\u0668\u0669\u0660]/g, function (n) {
                    return e[n]
                }).replace(/\u060c/g, ",")
            },
            postformat: function (n) {
                return n.replace(/\d/g, function (n) {
                    return t[n]
                }).replace(/,/g, "\u060c")
            },
            week: {dow: 6, doy: 12}
        })
    }(e("wd/R"))
},
kEOa: function (n, t, e) {
    !function (n) {
        "use strict";
        var t = {
            1: "\u09e7",
            2: "\u09e8",
            3: "\u09e9",
            4: "\u09ea",
            5: "\u09eb",
            6: "\u09ec",
            7: "\u09ed",
            8: "\u09ee",
            9: "\u09ef",
            0: "\u09e6"
        }, e = {
            "\u09e7": "1",
            "\u09e8": "2",
            "\u09e9": "3",
            "\u09ea": "4",
            "\u09eb": "5",
            "\u09ec": "6",
            "\u09ed": "7",
            "\u09ee": "8",
            "\u09ef": "9",
            "\u09e6": "0"
        };
        n.defineLocale("bn", {
            months: "\u099c\u09be\u09a8\u09c1\u09df\u09be\u09b0\u09c0_\u09ab\u09c7\u09ac\u09cd\u09b0\u09c1\u09df\u09be\u09b0\u09bf_\u09ae\u09be\u09b0\u09cd\u099a_\u098f\u09aa\u09cd\u09b0\u09bf\u09b2_\u09ae\u09c7_\u099c\u09c1\u09a8_\u099c\u09c1\u09b2\u09be\u0987_\u0986\u0997\u09b8\u09cd\u099f_\u09b8\u09c7\u09aa\u09cd\u099f\u09c7\u09ae\u09cd\u09ac\u09b0_\u0985\u0995\u09cd\u099f\u09cb\u09ac\u09b0_\u09a8\u09ad\u09c7\u09ae\u09cd\u09ac\u09b0_\u09a1\u09bf\u09b8\u09c7\u09ae\u09cd\u09ac\u09b0".split("_"),
            monthsShort: "\u099c\u09be\u09a8\u09c1_\u09ab\u09c7\u09ac_\u09ae\u09be\u09b0\u09cd\u099a_\u098f\u09aa\u09cd\u09b0_\u09ae\u09c7_\u099c\u09c1\u09a8_\u099c\u09c1\u09b2_\u0986\u0997_\u09b8\u09c7\u09aa\u09cd\u099f_\u0985\u0995\u09cd\u099f\u09cb_\u09a8\u09ad\u09c7_\u09a1\u09bf\u09b8\u09c7".split("_"),
            weekdays: "\u09b0\u09ac\u09bf\u09ac\u09be\u09b0_\u09b8\u09cb\u09ae\u09ac\u09be\u09b0_\u09ae\u0999\u09cd\u0997\u09b2\u09ac\u09be\u09b0_\u09ac\u09c1\u09a7\u09ac\u09be\u09b0_\u09ac\u09c3\u09b9\u09b8\u09cd\u09aa\u09a4\u09bf\u09ac\u09be\u09b0_\u09b6\u09c1\u0995\u09cd\u09b0\u09ac\u09be\u09b0_\u09b6\u09a8\u09bf\u09ac\u09be\u09b0".split("_"),
            weekdaysShort: "\u09b0\u09ac\u09bf_\u09b8\u09cb\u09ae_\u09ae\u0999\u09cd\u0997\u09b2_\u09ac\u09c1\u09a7_\u09ac\u09c3\u09b9\u09b8\u09cd\u09aa\u09a4\u09bf_\u09b6\u09c1\u0995\u09cd\u09b0_\u09b6\u09a8\u09bf".split("_"),
            weekdaysMin: "\u09b0\u09ac\u09bf_\u09b8\u09cb\u09ae_\u09ae\u0999\u09cd\u0997_\u09ac\u09c1\u09a7_\u09ac\u09c3\u09b9\u0983_\u09b6\u09c1\u0995\u09cd\u09b0_\u09b6\u09a8\u09bf".split("_"),
            longDateFormat: {
                LT: "A h:mm \u09b8\u09ae\u09df",
                LTS: "A h:mm:ss \u09b8\u09ae\u09df",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY, A h:mm \u09b8\u09ae\u09df",
                LLLL: "dddd, D MMMM YYYY, A h:mm \u09b8\u09ae\u09df"
            },
            calendar: {
                sameDay: "[\u0986\u099c] LT",
                nextDay: "[\u0986\u0997\u09be\u09ae\u09c0\u0995\u09be\u09b2] LT",
                nextWeek: "dddd, LT",
                lastDay: "[\u0997\u09a4\u0995\u09be\u09b2] LT",
                lastWeek: "[\u0997\u09a4] dddd, LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "%s \u09aa\u09b0\u09c7",
                past: "%s \u0986\u0997\u09c7",
                s: "\u0995\u09df\u09c7\u0995 \u09b8\u09c7\u0995\u09c7\u09a8\u09cd\u09a1",
                ss: "%d \u09b8\u09c7\u0995\u09c7\u09a8\u09cd\u09a1",
                m: "\u098f\u0995 \u09ae\u09bf\u09a8\u09bf\u099f",
                mm: "%d \u09ae\u09bf\u09a8\u09bf\u099f",
                h: "\u098f\u0995 \u0998\u09a8\u09cd\u099f\u09be",
                hh: "%d \u0998\u09a8\u09cd\u099f\u09be",
                d: "\u098f\u0995 \u09a6\u09bf\u09a8",
                dd: "%d \u09a6\u09bf\u09a8",
                M: "\u098f\u0995 \u09ae\u09be\u09b8",
                MM: "%d \u09ae\u09be\u09b8",
                y: "\u098f\u0995 \u09ac\u099b\u09b0",
                yy: "%d \u09ac\u099b\u09b0"
            },
            preparse: function (n) {
                return n.replace(/[\u09e7\u09e8\u09e9\u09ea\u09eb\u09ec\u09ed\u09ee\u09ef\u09e6]/g, function (n) {
                    return e[n]
                })
            },
            postformat: function (n) {
                return n.replace(/\d/g, function (n) {
                    return t[n]
                })
            },
            meridiemParse: /\u09b0\u09be\u09a4|\u09b8\u0995\u09be\u09b2|\u09a6\u09c1\u09aa\u09c1\u09b0|\u09ac\u09bf\u0995\u09be\u09b2|\u09b0\u09be\u09a4/,
            meridiemHour: function (n, t) {
                return 12 === n && (n = 0), "\u09b0\u09be\u09a4" === t && n >= 4 || "\u09a6\u09c1\u09aa\u09c1\u09b0" === t && n < 5 || "\u09ac\u09bf\u0995\u09be\u09b2" === t ? n + 12 : n
            },
            meridiem: function (n, t, e) {
                return n < 4 ? "\u09b0\u09be\u09a4" : n < 10 ? "\u09b8\u0995\u09be\u09b2" : n < 17 ? "\u09a6\u09c1\u09aa\u09c1\u09b0" : n < 20 ? "\u09ac\u09bf\u0995\u09be\u09b2" : "\u09b0\u09be\u09a4"
            },
            week: {dow: 0, doy: 6}
        })
    }(e("wd/R"))
},
kOpN: function (n, t, e) {
    !function (n) {
        "use strict";
        e("wd/R").defineLocale("zh-tw", {
            months: "\u4e00\u6708_\u4e8c\u6708_\u4e09\u6708_\u56db\u6708_\u4e94\u6708_\u516d\u6708_\u4e03\u6708_\u516b\u6708_\u4e5d\u6708_\u5341\u6708_\u5341\u4e00\u6708_\u5341\u4e8c\u6708".split("_"),
            monthsShort: "1\u6708_2\u6708_3\u6708_4\u6708_5\u6708_6\u6708_7\u6708_8\u6708_9\u6708_10\u6708_11\u6708_12\u6708".split("_"),
            weekdays: "\u661f\u671f\u65e5_\u661f\u671f\u4e00_\u661f\u671f\u4e8c_\u661f\u671f\u4e09_\u661f\u671f\u56db_\u661f\u671f\u4e94_\u661f\u671f\u516d".split("_"),
            weekdaysShort: "\u9031\u65e5_\u9031\u4e00_\u9031\u4e8c_\u9031\u4e09_\u9031\u56db_\u9031\u4e94_\u9031\u516d".split("_"),
            weekdaysMin: "\u65e5_\u4e00_\u4e8c_\u4e09_\u56db_\u4e94_\u516d".split("_"),
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "YYYY/MM/DD",
                LL: "YYYY\u5e74M\u6708D\u65e5",
                LLL: "YYYY\u5e74M\u6708D\u65e5 HH:mm",
                LLLL: "YYYY\u5e74M\u6708D\u65e5dddd HH:mm",
                l: "YYYY/M/D",
                ll: "YYYY\u5e74M\u6708D\u65e5",
                lll: "YYYY\u5e74M\u6708D\u65e5 HH:mm",
                llll: "YYYY\u5e74M\u6708D\u65e5dddd HH:mm"
            },
            meridiemParse: /\u51cc\u6668|\u65e9\u4e0a|\u4e0a\u5348|\u4e2d\u5348|\u4e0b\u5348|\u665a\u4e0a/,
            meridiemHour: function (n, t) {
                return 12 === n && (n = 0), "\u51cc\u6668" === t || "\u65e9\u4e0a" === t || "\u4e0a\u5348" === t ? n : "\u4e2d\u5348" === t ? n >= 11 ? n : n + 12 : "\u4e0b\u5348" === t || "\u665a\u4e0a" === t ? n + 12 : void 0
            },
            meridiem: function (n, t, e) {
                var o = 100 * n + t;
                return o < 600 ? "\u51cc\u6668" : o < 900 ? "\u65e9\u4e0a" : o < 1130 ? "\u4e0a\u5348" : o < 1230 ? "\u4e2d\u5348" : o < 1800 ? "\u4e0b\u5348" : "\u665a\u4e0a"
            },
            calendar: {
                sameDay: "[\u4eca\u5929] LT",
                nextDay: "[\u660e\u5929] LT",
                nextWeek: "[\u4e0b]dddd LT",
                lastDay: "[\u6628\u5929] LT",
                lastWeek: "[\u4e0a]dddd LT",
                sameElse: "L"
            },
            dayOfMonthOrdinalParse: /\d{1,2}(\u65e5|\u6708|\u9031)/,
            ordinal: function (n, t) {
                switch (t) {
                    case"d":
                    case"D":
                    case"DDD":
                        return n + "\u65e5";
                    case"M":
                        return n + "\u6708";
                    case"w":
                    case"W":
                        return n + "\u9031";
                    default:
                        return n
                }
            },
            relativeTime: {
                future: "%s\u5167",
                past: "%s\u524d",
                s: "\u5e7e\u79d2",
                ss: "%d \u79d2",
                m: "1 \u5206\u9418",
                mm: "%d \u5206\u9418",
                h: "1 \u5c0f\u6642",
                hh: "%d \u5c0f\u6642",
                d: "1 \u5929",
                dd: "%d \u5929",
                M: "1 \u500b\u6708",
                MM: "%d \u500b\u6708",
                y: "1 \u5e74",
                yy: "%d \u5e74"
            }
        })
    }()
},
l5ep: function (n, t, e) {
    !function (n) {
        "use strict";
        e("wd/R").defineLocale("cy", {
            months: "Ionawr_Chwefror_Mawrth_Ebrill_Mai_Mehefin_Gorffennaf_Awst_Medi_Hydref_Tachwedd_Rhagfyr".split("_"),
            monthsShort: "Ion_Chwe_Maw_Ebr_Mai_Meh_Gor_Aws_Med_Hyd_Tach_Rhag".split("_"),
            weekdays: "Dydd Sul_Dydd Llun_Dydd Mawrth_Dydd Mercher_Dydd Iau_Dydd Gwener_Dydd Sadwrn".split("_"),
            weekdaysShort: "Sul_Llun_Maw_Mer_Iau_Gwe_Sad".split("_"),
            weekdaysMin: "Su_Ll_Ma_Me_Ia_Gw_Sa".split("_"),
            weekdaysParseExact: !0,
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY HH:mm",
                LLLL: "dddd, D MMMM YYYY HH:mm"
            },
            calendar: {
                sameDay: "[Heddiw am] LT",
                nextDay: "[Yfory am] LT",
                nextWeek: "dddd [am] LT",
                lastDay: "[Ddoe am] LT",
                lastWeek: "dddd [diwethaf am] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "mewn %s",
                past: "%s yn \xf4l",
                s: "ychydig eiliadau",
                ss: "%d eiliad",
                m: "munud",
                mm: "%d munud",
                h: "awr",
                hh: "%d awr",
                d: "diwrnod",
                dd: "%d diwrnod",
                M: "mis",
                MM: "%d mis",
                y: "blwyddyn",
                yy: "%d flynedd"
            },
            dayOfMonthOrdinalParse: /\d{1,2}(fed|ain|af|il|ydd|ed|eg)/,
            ordinal: function (n) {
                var t = "";
                return n > 20 ? t = 40 === n || 50 === n || 60 === n || 80 === n || 100 === n ? "fed" : "ain" : n > 0 && (t = ["", "af", "il", "ydd", "ydd", "ed", "ed", "ed", "fed", "fed", "fed", "eg", "fed", "eg", "eg", "fed", "eg", "eg", "fed", "eg", "fed"][n]), n + t
            },
            week: {dow: 1, doy: 4}
        })
    }()
},
lXzo: function (n, t, e) {
    !function (n) {
        "use strict";

        function t(n, t, e) {
            var o, l;
            return "m" === e ? t ? "\u043c\u0438\u043d\u0443\u0442\u0430" : "\u043c\u0438\u043d\u0443\u0442\u0443" : n + " " + (o = +n, l = {
                ss: t ? "\u0441\u0435\u043a\u0443\u043d\u0434\u0430_\u0441\u0435\u043a\u0443\u043d\u0434\u044b_\u0441\u0435\u043a\u0443\u043d\u0434" : "\u0441\u0435\u043a\u0443\u043d\u0434\u0443_\u0441\u0435\u043a\u0443\u043d\u0434\u044b_\u0441\u0435\u043a\u0443\u043d\u0434",
                mm: t ? "\u043c\u0438\u043d\u0443\u0442\u0430_\u043c\u0438\u043d\u0443\u0442\u044b_\u043c\u0438\u043d\u0443\u0442" : "\u043c\u0438\u043d\u0443\u0442\u0443_\u043c\u0438\u043d\u0443\u0442\u044b_\u043c\u0438\u043d\u0443\u0442",
                hh: "\u0447\u0430\u0441_\u0447\u0430\u0441\u0430_\u0447\u0430\u0441\u043e\u0432",
                dd: "\u0434\u0435\u043d\u044c_\u0434\u043d\u044f_\u0434\u043d\u0435\u0439",
                MM: "\u043c\u0435\u0441\u044f\u0446_\u043c\u0435\u0441\u044f\u0446\u0430_\u043c\u0435\u0441\u044f\u0446\u0435\u0432",
                yy: "\u0433\u043e\u0434_\u0433\u043e\u0434\u0430_\u043b\u0435\u0442"
            }[e].split("_"), o % 10 == 1 && o % 100 != 11 ? l[0] : o % 10 >= 2 && o % 10 <= 4 && (o % 100 < 10 || o % 100 >= 20) ? l[1] : l[2])
        }

        var o = [/^\u044f\u043d\u0432/i, /^\u0444\u0435\u0432/i, /^\u043c\u0430\u0440/i, /^\u0430\u043f\u0440/i, /^\u043c\u0430[\u0439\u044f]/i, /^\u0438\u044e\u043d/i, /^\u0438\u044e\u043b/i, /^\u0430\u0432\u0433/i, /^\u0441\u0435\u043d/i, /^\u043e\u043a\u0442/i, /^\u043d\u043e\u044f/i, /^\u0434\u0435\u043a/i];
        e("wd/R").defineLocale("ru", {
            months: {
                format: "\u044f\u043d\u0432\u0430\u0440\u044f_\u0444\u0435\u0432\u0440\u0430\u043b\u044f_\u043c\u0430\u0440\u0442\u0430_\u0430\u043f\u0440\u0435\u043b\u044f_\u043c\u0430\u044f_\u0438\u044e\u043d\u044f_\u0438\u044e\u043b\u044f_\u0430\u0432\u0433\u0443\u0441\u0442\u0430_\u0441\u0435\u043d\u0442\u044f\u0431\u0440\u044f_\u043e\u043a\u0442\u044f\u0431\u0440\u044f_\u043d\u043e\u044f\u0431\u0440\u044f_\u0434\u0435\u043a\u0430\u0431\u0440\u044f".split("_"),
                standalone: "\u044f\u043d\u0432\u0430\u0440\u044c_\u0444\u0435\u0432\u0440\u0430\u043b\u044c_\u043c\u0430\u0440\u0442_\u0430\u043f\u0440\u0435\u043b\u044c_\u043c\u0430\u0439_\u0438\u044e\u043d\u044c_\u0438\u044e\u043b\u044c_\u0430\u0432\u0433\u0443\u0441\u0442_\u0441\u0435\u043d\u0442\u044f\u0431\u0440\u044c_\u043e\u043a\u0442\u044f\u0431\u0440\u044c_\u043d\u043e\u044f\u0431\u0440\u044c_\u0434\u0435\u043a\u0430\u0431\u0440\u044c".split("_")
            },
            monthsShort: {
                format: "\u044f\u043d\u0432._\u0444\u0435\u0432\u0440._\u043c\u0430\u0440._\u0430\u043f\u0440._\u043c\u0430\u044f_\u0438\u044e\u043d\u044f_\u0438\u044e\u043b\u044f_\u0430\u0432\u0433._\u0441\u0435\u043d\u0442._\u043e\u043a\u0442._\u043d\u043e\u044f\u0431._\u0434\u0435\u043a.".split("_"),
                standalone: "\u044f\u043d\u0432._\u0444\u0435\u0432\u0440._\u043c\u0430\u0440\u0442_\u0430\u043f\u0440._\u043c\u0430\u0439_\u0438\u044e\u043d\u044c_\u0438\u044e\u043b\u044c_\u0430\u0432\u0433._\u0441\u0435\u043d\u0442._\u043e\u043a\u0442._\u043d\u043e\u044f\u0431._\u0434\u0435\u043a.".split("_")
            },
            weekdays: {
                standalone: "\u0432\u043e\u0441\u043a\u0440\u0435\u0441\u0435\u043d\u044c\u0435_\u043f\u043e\u043d\u0435\u0434\u0435\u043b\u044c\u043d\u0438\u043a_\u0432\u0442\u043e\u0440\u043d\u0438\u043a_\u0441\u0440\u0435\u0434\u0430_\u0447\u0435\u0442\u0432\u0435\u0440\u0433_\u043f\u044f\u0442\u043d\u0438\u0446\u0430_\u0441\u0443\u0431\u0431\u043e\u0442\u0430".split("_"),
                format: "\u0432\u043e\u0441\u043a\u0440\u0435\u0441\u0435\u043d\u044c\u0435_\u043f\u043e\u043d\u0435\u0434\u0435\u043b\u044c\u043d\u0438\u043a_\u0432\u0442\u043e\u0440\u043d\u0438\u043a_\u0441\u0440\u0435\u0434\u0443_\u0447\u0435\u0442\u0432\u0435\u0440\u0433_\u043f\u044f\u0442\u043d\u0438\u0446\u0443_\u0441\u0443\u0431\u0431\u043e\u0442\u0443".split("_"),
                isFormat: /\[ ?[\u0412\u0432] ?(?:\u043f\u0440\u043e\u0448\u043b\u0443\u044e|\u0441\u043b\u0435\u0434\u0443\u044e\u0449\u0443\u044e|\u044d\u0442\u0443)? ?\] ?dddd/
            },
            weekdaysShort: "\u0432\u0441_\u043f\u043d_\u0432\u0442_\u0441\u0440_\u0447\u0442_\u043f\u0442_\u0441\u0431".split("_"),
            weekdaysMin: "\u0432\u0441_\u043f\u043d_\u0432\u0442_\u0441\u0440_\u0447\u0442_\u043f\u0442_\u0441\u0431".split("_"),
            monthsParse: o,
            longMonthsParse: o,
            shortMonthsParse: o,
            monthsRegex: /^(\u044f\u043d\u0432\u0430\u0440[\u044c\u044f]|\u044f\u043d\u0432\.?|\u0444\u0435\u0432\u0440\u0430\u043b[\u044c\u044f]|\u0444\u0435\u0432\u0440?\.?|\u043c\u0430\u0440\u0442\u0430?|\u043c\u0430\u0440\.?|\u0430\u043f\u0440\u0435\u043b[\u044c\u044f]|\u0430\u043f\u0440\.?|\u043c\u0430[\u0439\u044f]|\u0438\u044e\u043d[\u044c\u044f]|\u0438\u044e\u043d\.?|\u0438\u044e\u043b[\u044c\u044f]|\u0438\u044e\u043b\.?|\u0430\u0432\u0433\u0443\u0441\u0442\u0430?|\u0430\u0432\u0433\.?|\u0441\u0435\u043d\u0442\u044f\u0431\u0440[\u044c\u044f]|\u0441\u0435\u043d\u0442?\.?|\u043e\u043a\u0442\u044f\u0431\u0440[\u044c\u044f]|\u043e\u043a\u0442\.?|\u043d\u043e\u044f\u0431\u0440[\u044c\u044f]|\u043d\u043e\u044f\u0431?\.?|\u0434\u0435\u043a\u0430\u0431\u0440[\u044c\u044f]|\u0434\u0435\u043a\.?)/i,
            monthsShortRegex: /^(\u044f\u043d\u0432\u0430\u0440[\u044c\u044f]|\u044f\u043d\u0432\.?|\u0444\u0435\u0432\u0440\u0430\u043b[\u044c\u044f]|\u0444\u0435\u0432\u0440?\.?|\u043c\u0430\u0440\u0442\u0430?|\u043c\u0430\u0440\.?|\u0430\u043f\u0440\u0435\u043b[\u044c\u044f]|\u0430\u043f\u0440\.?|\u043c\u0430[\u0439\u044f]|\u0438\u044e\u043d[\u044c\u044f]|\u0438\u044e\u043d\.?|\u0438\u044e\u043b[\u044c\u044f]|\u0438\u044e\u043b\.?|\u0430\u0432\u0433\u0443\u0441\u0442\u0430?|\u0430\u0432\u0433\.?|\u0441\u0435\u043d\u0442\u044f\u0431\u0440[\u044c\u044f]|\u0441\u0435\u043d\u0442?\.?|\u043e\u043a\u0442\u044f\u0431\u0440[\u044c\u044f]|\u043e\u043a\u0442\.?|\u043d\u043e\u044f\u0431\u0440[\u044c\u044f]|\u043d\u043e\u044f\u0431?\.?|\u0434\u0435\u043a\u0430\u0431\u0440[\u044c\u044f]|\u0434\u0435\u043a\.?)/i,
            monthsStrictRegex: /^(\u044f\u043d\u0432\u0430\u0440[\u044f\u044c]|\u0444\u0435\u0432\u0440\u0430\u043b[\u044f\u044c]|\u043c\u0430\u0440\u0442\u0430?|\u0430\u043f\u0440\u0435\u043b[\u044f\u044c]|\u043c\u0430[\u044f\u0439]|\u0438\u044e\u043d[\u044f\u044c]|\u0438\u044e\u043b[\u044f\u044c]|\u0430\u0432\u0433\u0443\u0441\u0442\u0430?|\u0441\u0435\u043d\u0442\u044f\u0431\u0440[\u044f\u044c]|\u043e\u043a\u0442\u044f\u0431\u0440[\u044f\u044c]|\u043d\u043e\u044f\u0431\u0440[\u044f\u044c]|\u0434\u0435\u043a\u0430\u0431\u0440[\u044f\u044c])/i,
            monthsShortStrictRegex: /^(\u044f\u043d\u0432\.|\u0444\u0435\u0432\u0440?\.|\u043c\u0430\u0440[\u0442.]|\u0430\u043f\u0440\.|\u043c\u0430[\u044f\u0439]|\u0438\u044e\u043d[\u044c\u044f.]|\u0438\u044e\u043b[\u044c\u044f.]|\u0430\u0432\u0433\.|\u0441\u0435\u043d\u0442?\.|\u043e\u043a\u0442\.|\u043d\u043e\u044f\u0431?\.|\u0434\u0435\u043a\.)/i,
            longDateFormat: {
                LT: "H:mm",
                LTS: "H:mm:ss",
                L: "DD.MM.YYYY",
                LL: "D MMMM YYYY \u0433.",
                LLL: "D MMMM YYYY \u0433., H:mm",
                LLLL: "dddd, D MMMM YYYY \u0433., H:mm"
            },
            calendar: {
                sameDay: "[\u0421\u0435\u0433\u043e\u0434\u043d\u044f, \u0432] LT",
                nextDay: "[\u0417\u0430\u0432\u0442\u0440\u0430, \u0432] LT",
                lastDay: "[\u0412\u0447\u0435\u0440\u0430, \u0432] LT",
                nextWeek: function (n) {
                    if (n.week() === this.week()) return 2 === this.day() ? "[\u0412\u043e] dddd, [\u0432] LT" : "[\u0412] dddd, [\u0432] LT";
                    switch (this.day()) {
                        case 0:
                            return "[\u0412 \u0441\u043b\u0435\u0434\u0443\u044e\u0449\u0435\u0435] dddd, [\u0432] LT";
                        case 1:
                        case 2:
                        case 4:
                            return "[\u0412 \u0441\u043b\u0435\u0434\u0443\u044e\u0449\u0438\u0439] dddd, [\u0432] LT";
                        case 3:
                        case 5:
                        case 6:
                            return "[\u0412 \u0441\u043b\u0435\u0434\u0443\u044e\u0449\u0443\u044e] dddd, [\u0432] LT"
                    }
                },
                lastWeek: function (n) {
                    if (n.week() === this.week()) return 2 === this.day() ? "[\u0412\u043e] dddd, [\u0432] LT" : "[\u0412] dddd, [\u0432] LT";
                    switch (this.day()) {
                        case 0:
                            return "[\u0412 \u043f\u0440\u043e\u0448\u043b\u043e\u0435] dddd, [\u0432] LT";
                        case 1:
                        case 2:
                        case 4:
                            return "[\u0412 \u043f\u0440\u043e\u0448\u043b\u044b\u0439] dddd, [\u0432] LT";
                        case 3:
                        case 5:
                        case 6:
                            return "[\u0412 \u043f\u0440\u043e\u0448\u043b\u0443\u044e] dddd, [\u0432] LT"
                    }
                },
                sameElse: "L"
            },
            relativeTime: {
                future: "\u0447\u0435\u0440\u0435\u0437 %s",
                past: "%s \u043d\u0430\u0437\u0430\u0434",
                s: "\u043d\u0435\u0441\u043a\u043e\u043b\u044c\u043a\u043e \u0441\u0435\u043a\u0443\u043d\u0434",
                ss: t,
                m: t,
                mm: t,
                h: "\u0447\u0430\u0441",
                hh: t,
                d: "\u0434\u0435\u043d\u044c",
                dd: t,
                M: "\u043c\u0435\u0441\u044f\u0446",
                MM: t,
                y: "\u0433\u043e\u0434",
                yy: t
            },
            meridiemParse: /\u043d\u043e\u0447\u0438|\u0443\u0442\u0440\u0430|\u0434\u043d\u044f|\u0432\u0435\u0447\u0435\u0440\u0430/i,
            isPM: function (n) {
                return /^(\u0434\u043d\u044f|\u0432\u0435\u0447\u0435\u0440\u0430)$/.test(n)
            },
            meridiem: function (n, t, e) {
                return n < 4 ? "\u043d\u043e\u0447\u0438" : n < 12 ? "\u0443\u0442\u0440\u0430" : n < 17 ? "\u0434\u043d\u044f" : "\u0432\u0435\u0447\u0435\u0440\u0430"
            },
            dayOfMonthOrdinalParse: /\d{1,2}-(\u0439|\u0433\u043e|\u044f)/,
            ordinal: function (n, t) {
                switch (t) {
                    case"M":
                    case"d":
                    case"DDD":
                        return n + "-\u0439";
                    case"D":
                        return n + "-\u0433\u043e";
                    case"w":
                    case"W":
                        return n + "-\u044f";
                    default:
                        return n
                }
            },
            week: {dow: 1, doy: 4}
        })
    }()
},
lYtQ: function (n, t, e) {
    !function (n) {
        "use strict";

        function t(n, t, e, o) {
            switch (e) {
                case"s":
                    return t ? "\u0445\u044d\u0434\u0445\u044d\u043d \u0441\u0435\u043a\u0443\u043d\u0434" : "\u0445\u044d\u0434\u0445\u044d\u043d \u0441\u0435\u043a\u0443\u043d\u0434\u044b\u043d";
                case"ss":
                    return n + (t ? " \u0441\u0435\u043a\u0443\u043d\u0434" : " \u0441\u0435\u043a\u0443\u043d\u0434\u044b\u043d");
                case"m":
                case"mm":
                    return n + (t ? " \u043c\u0438\u043d\u0443\u0442" : " \u043c\u0438\u043d\u0443\u0442\u044b\u043d");
                case"h":
                case"hh":
                    return n + (t ? " \u0446\u0430\u0433" : " \u0446\u0430\u0433\u0438\u0439\u043d");
                case"d":
                case"dd":
                    return n + (t ? " \u04e9\u0434\u04e9\u0440" : " \u04e9\u0434\u0440\u0438\u0439\u043d");
                case"M":
                case"MM":
                    return n + (t ? " \u0441\u0430\u0440" : " \u0441\u0430\u0440\u044b\u043d");
                case"y":
                case"yy":
                    return n + (t ? " \u0436\u0438\u043b" : " \u0436\u0438\u043b\u0438\u0439\u043d");
                default:
                    return n
            }
        }

        e("wd/R").defineLocale("mn", {
            months: "\u041d\u044d\u0433\u0434\u04af\u0433\u044d\u044d\u0440 \u0441\u0430\u0440_\u0425\u043e\u0451\u0440\u0434\u0443\u0433\u0430\u0430\u0440 \u0441\u0430\u0440_\u0413\u0443\u0440\u0430\u0432\u0434\u0443\u0433\u0430\u0430\u0440 \u0441\u0430\u0440_\u0414\u04e9\u0440\u04e9\u0432\u0434\u04af\u0433\u044d\u044d\u0440 \u0441\u0430\u0440_\u0422\u0430\u0432\u0434\u0443\u0433\u0430\u0430\u0440 \u0441\u0430\u0440_\u0417\u0443\u0440\u0433\u0430\u0434\u0443\u0433\u0430\u0430\u0440 \u0441\u0430\u0440_\u0414\u043e\u043b\u0434\u0443\u0433\u0430\u0430\u0440 \u0441\u0430\u0440_\u041d\u0430\u0439\u043c\u0434\u0443\u0433\u0430\u0430\u0440 \u0441\u0430\u0440_\u0415\u0441\u0434\u04af\u0433\u044d\u044d\u0440 \u0441\u0430\u0440_\u0410\u0440\u0430\u0432\u0434\u0443\u0433\u0430\u0430\u0440 \u0441\u0430\u0440_\u0410\u0440\u0432\u0430\u043d \u043d\u044d\u0433\u0434\u04af\u0433\u044d\u044d\u0440 \u0441\u0430\u0440_\u0410\u0440\u0432\u0430\u043d \u0445\u043e\u0451\u0440\u0434\u0443\u0433\u0430\u0430\u0440 \u0441\u0430\u0440".split("_"),
            monthsShort: "1 \u0441\u0430\u0440_2 \u0441\u0430\u0440_3 \u0441\u0430\u0440_4 \u0441\u0430\u0440_5 \u0441\u0430\u0440_6 \u0441\u0430\u0440_7 \u0441\u0430\u0440_8 \u0441\u0430\u0440_9 \u0441\u0430\u0440_10 \u0441\u0430\u0440_11 \u0441\u0430\u0440_12 \u0441\u0430\u0440".split("_"),
            monthsParseExact: !0,
            weekdays: "\u041d\u044f\u043c_\u0414\u0430\u0432\u0430\u0430_\u041c\u044f\u0433\u043c\u0430\u0440_\u041b\u0445\u0430\u0433\u0432\u0430_\u041f\u04af\u0440\u044d\u0432_\u0411\u0430\u0430\u0441\u0430\u043d_\u0411\u044f\u043c\u0431\u0430".split("_"),
            weekdaysShort: "\u041d\u044f\u043c_\u0414\u0430\u0432_\u041c\u044f\u0433_\u041b\u0445\u0430_\u041f\u04af\u0440_\u0411\u0430\u0430_\u0411\u044f\u043c".split("_"),
            weekdaysMin: "\u041d\u044f_\u0414\u0430_\u041c\u044f_\u041b\u0445_\u041f\u04af_\u0411\u0430_\u0411\u044f".split("_"),
            weekdaysParseExact: !0,
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "YYYY-MM-DD",
                LL: "YYYY \u043e\u043d\u044b MMMM\u044b\u043d D",
                LLL: "YYYY \u043e\u043d\u044b MMMM\u044b\u043d D HH:mm",
                LLLL: "dddd, YYYY \u043e\u043d\u044b MMMM\u044b\u043d D HH:mm"
            },
            meridiemParse: /\u04ae\u04e8|\u04ae\u0425/i,
            isPM: function (n) {
                return "\u04ae\u0425" === n
            },
            meridiem: function (n, t, e) {
                return n < 12 ? "\u04ae\u04e8" : "\u04ae\u0425"
            },
            calendar: {
                sameDay: "[\u04e8\u043d\u04e9\u04e9\u0434\u04e9\u0440] LT",
                nextDay: "[\u041c\u0430\u0440\u0433\u0430\u0430\u0448] LT",
                nextWeek: "[\u0418\u0440\u044d\u0445] dddd LT",
                lastDay: "[\u04e8\u0447\u0438\u0433\u0434\u04e9\u0440] LT",
                lastWeek: "[\u04e8\u043d\u0433\u04e9\u0440\u0441\u04e9\u043d] dddd LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "%s \u0434\u0430\u0440\u0430\u0430",
                past: "%s \u04e9\u043c\u043d\u04e9",
                s: t,
                ss: t,
                m: t,
                mm: t,
                h: t,
                hh: t,
                d: t,
                dd: t,
                M: t,
                MM: t,
                y: t,
                yy: t
            },
            dayOfMonthOrdinalParse: /\d{1,2} \u04e9\u0434\u04e9\u0440/,
            ordinal: function (n, t) {
                switch (t) {
                    case"d":
                    case"D":
                    case"DDD":
                        return n + " \u04e9\u0434\u04e9\u0440";
                    default:
                        return n
                }
            }
        })
    }()
},
lgnt: function (n, t, e) {
    !function (n) {
        "use strict";
        var t = {
            0: "-\u0447\u04af",
            1: "-\u0447\u0438",
            2: "-\u0447\u0438",
            3: "-\u0447\u04af",
            4: "-\u0447\u04af",
            5: "-\u0447\u0438",
            6: "-\u0447\u044b",
            7: "-\u0447\u0438",
            8: "-\u0447\u0438",
            9: "-\u0447\u0443",
            10: "-\u0447\u0443",
            20: "-\u0447\u044b",
            30: "-\u0447\u0443",
            40: "-\u0447\u044b",
            50: "-\u0447\u04af",
            60: "-\u0447\u044b",
            70: "-\u0447\u0438",
            80: "-\u0447\u0438",
            90: "-\u0447\u0443",
            100: "-\u0447\u04af"
        };
        n.defineLocale("ky", {
            months: "\u044f\u043d\u0432\u0430\u0440\u044c_\u0444\u0435\u0432\u0440\u0430\u043b\u044c_\u043c\u0430\u0440\u0442_\u0430\u043f\u0440\u0435\u043b\u044c_\u043c\u0430\u0439_\u0438\u044e\u043d\u044c_\u0438\u044e\u043b\u044c_\u0430\u0432\u0433\u0443\u0441\u0442_\u0441\u0435\u043d\u0442\u044f\u0431\u0440\u044c_\u043e\u043a\u0442\u044f\u0431\u0440\u044c_\u043d\u043e\u044f\u0431\u0440\u044c_\u0434\u0435\u043a\u0430\u0431\u0440\u044c".split("_"),
            monthsShort: "\u044f\u043d\u0432_\u0444\u0435\u0432_\u043c\u0430\u0440\u0442_\u0430\u043f\u0440_\u043c\u0430\u0439_\u0438\u044e\u043d\u044c_\u0438\u044e\u043b\u044c_\u0430\u0432\u0433_\u0441\u0435\u043d_\u043e\u043a\u0442_\u043d\u043e\u044f_\u0434\u0435\u043a".split("_"),
            weekdays: "\u0416\u0435\u043a\u0448\u0435\u043c\u0431\u0438_\u0414\u04af\u0439\u0448\u04e9\u043c\u0431\u04af_\u0428\u0435\u0439\u0448\u0435\u043c\u0431\u0438_\u0428\u0430\u0440\u0448\u0435\u043c\u0431\u0438_\u0411\u0435\u0439\u0448\u0435\u043c\u0431\u0438_\u0416\u0443\u043c\u0430_\u0418\u0448\u0435\u043c\u0431\u0438".split("_"),
            weekdaysShort: "\u0416\u0435\u043a_\u0414\u04af\u0439_\u0428\u0435\u0439_\u0428\u0430\u0440_\u0411\u0435\u0439_\u0416\u0443\u043c_\u0418\u0448\u0435".split("_"),
            weekdaysMin: "\u0416\u043a_\u0414\u0439_\u0428\u0439_\u0428\u0440_\u0411\u0439_\u0416\u043c_\u0418\u0448".split("_"),
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD.MM.YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY HH:mm",
                LLLL: "dddd, D MMMM YYYY HH:mm"
            },
            calendar: {
                sameDay: "[\u0411\u04af\u0433\u04af\u043d \u0441\u0430\u0430\u0442] LT",
                nextDay: "[\u042d\u0440\u0442\u0435\u04a3 \u0441\u0430\u0430\u0442] LT",
                nextWeek: "dddd [\u0441\u0430\u0430\u0442] LT",
                lastDay: "[\u041a\u0435\u0447\u044d\u044d \u0441\u0430\u0430\u0442] LT",
                lastWeek: "[\u04e8\u0442\u043a\u04e9\u043d \u0430\u043f\u0442\u0430\u043d\u044b\u043d] dddd [\u043a\u04af\u043d\u04af] [\u0441\u0430\u0430\u0442] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "%s \u0438\u0447\u0438\u043d\u0434\u0435",
                past: "%s \u043c\u0443\u0440\u0443\u043d",
                s: "\u0431\u0438\u0440\u043d\u0435\u0447\u0435 \u0441\u0435\u043a\u0443\u043d\u0434",
                ss: "%d \u0441\u0435\u043a\u0443\u043d\u0434",
                m: "\u0431\u0438\u0440 \u043c\u04af\u043d\u04e9\u0442",
                mm: "%d \u043c\u04af\u043d\u04e9\u0442",
                h: "\u0431\u0438\u0440 \u0441\u0430\u0430\u0442",
                hh: "%d \u0441\u0430\u0430\u0442",
                d: "\u0431\u0438\u0440 \u043a\u04af\u043d",
                dd: "%d \u043a\u04af\u043d",
                M: "\u0431\u0438\u0440 \u0430\u0439",
                MM: "%d \u0430\u0439",
                y: "\u0431\u0438\u0440 \u0436\u044b\u043b",
                yy: "%d \u0436\u044b\u043b"
            },
            dayOfMonthOrdinalParse: /\d{1,2}-(\u0447\u0438|\u0447\u044b|\u0447\u04af|\u0447\u0443)/,
            ordinal: function (n) {
                return n + (t[n] || t[n % 10] || t[n >= 100 ? 100 : null])
            },
            week: {dow: 1, doy: 7}
        })
    }(e("wd/R"))
},
lyxo: function (n, t, e) {
    !function (n) {
        "use strict";

        function t(n, t, e) {
            var o = " ";
            return (n % 100 >= 20 || n >= 100 && n % 100 == 0) && (o = " de "), n + o + {
                ss: "secunde",
                mm: "minute",
                hh: "ore",
                dd: "zile",
                MM: "luni",
                yy: "ani"
            }[e]
        }

        e("wd/R").defineLocale("ro", {
            months: "ianuarie_februarie_martie_aprilie_mai_iunie_iulie_august_septembrie_octombrie_noiembrie_decembrie".split("_"),
            monthsShort: "ian._febr._mart._apr._mai_iun._iul._aug._sept._oct._nov._dec.".split("_"),
            monthsParseExact: !0,
            weekdays: "duminic\u0103_luni_mar\u021bi_miercuri_joi_vineri_s\xe2mb\u0103t\u0103".split("_"),
            weekdaysShort: "Dum_Lun_Mar_Mie_Joi_Vin_S\xe2m".split("_"),
            weekdaysMin: "Du_Lu_Ma_Mi_Jo_Vi_S\xe2".split("_"),
            longDateFormat: {
                LT: "H:mm",
                LTS: "H:mm:ss",
                L: "DD.MM.YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY H:mm",
                LLLL: "dddd, D MMMM YYYY H:mm"
            },
            calendar: {
                sameDay: "[azi la] LT",
                nextDay: "[m\xe2ine la] LT",
                nextWeek: "dddd [la] LT",
                lastDay: "[ieri la] LT",
                lastWeek: "[fosta] dddd [la] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "peste %s",
                past: "%s \xeen urm\u0103",
                s: "c\xe2teva secunde",
                ss: t,
                m: "un minut",
                mm: t,
                h: "o or\u0103",
                hh: t,
                d: "o zi",
                dd: t,
                M: "o lun\u0103",
                MM: t,
                y: "un an",
                yy: t
            },
            week: {dow: 1, doy: 7}
        })
    }()
},
nyYc: function (n, t, e) {
    !function (n) {
        "use strict";
        e("wd/R").defineLocale("fr", {
            months: "janvier_f\xe9vrier_mars_avril_mai_juin_juillet_ao\xfbt_septembre_octobre_novembre_d\xe9cembre".split("_"),
            monthsShort: "janv._f\xe9vr._mars_avr._mai_juin_juil._ao\xfbt_sept._oct._nov._d\xe9c.".split("_"),
            monthsParseExact: !0,
            weekdays: "dimanche_lundi_mardi_mercredi_jeudi_vendredi_samedi".split("_"),
            weekdaysShort: "dim._lun._mar._mer._jeu._ven._sam.".split("_"),
            weekdaysMin: "di_lu_ma_me_je_ve_sa".split("_"),
            weekdaysParseExact: !0,
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY HH:mm",
                LLLL: "dddd D MMMM YYYY HH:mm"
            },
            calendar: {
                sameDay: "[Aujourd\u2019hui \xe0] LT",
                nextDay: "[Demain \xe0] LT",
                nextWeek: "dddd [\xe0] LT",
                lastDay: "[Hier \xe0] LT",
                lastWeek: "dddd [dernier \xe0] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "dans %s",
                past: "il y a %s",
                s: "quelques secondes",
                ss: "%d secondes",
                m: "une minute",
                mm: "%d minutes",
                h: "une heure",
                hh: "%d heures",
                d: "un jour",
                dd: "%d jours",
                M: "un mois",
                MM: "%d mois",
                y: "un an",
                yy: "%d ans"
            },
            dayOfMonthOrdinalParse: /\d{1,2}(er|)/,
            ordinal: function (n, t) {
                switch (t) {
                    case"D":
                        return n + (1 === n ? "er" : "");
                    default:
                    case"M":
                    case"Q":
                    case"DDD":
                    case"d":
                        return n + (1 === n ? "er" : "e");
                    case"w":
                    case"W":
                        return n + (1 === n ? "re" : "e")
                }
            },
            week: {dow: 1, doy: 4}
        })
    }()
},
o1bE: function (n, t, e) {
    !function (n) {
        "use strict";
        e("wd/R").defineLocale("ar-dz", {
            months: "\u062c\u0627\u0646\u0641\u064a_\u0641\u064a\u0641\u0631\u064a_\u0645\u0627\u0631\u0633_\u0623\u0641\u0631\u064a\u0644_\u0645\u0627\u064a_\u062c\u0648\u0627\u0646_\u062c\u0648\u064a\u0644\u064a\u0629_\u0623\u0648\u062a_\u0633\u0628\u062a\u0645\u0628\u0631_\u0623\u0643\u062a\u0648\u0628\u0631_\u0646\u0648\u0641\u0645\u0628\u0631_\u062f\u064a\u0633\u0645\u0628\u0631".split("_"),
            monthsShort: "\u062c\u0627\u0646\u0641\u064a_\u0641\u064a\u0641\u0631\u064a_\u0645\u0627\u0631\u0633_\u0623\u0641\u0631\u064a\u0644_\u0645\u0627\u064a_\u062c\u0648\u0627\u0646_\u062c\u0648\u064a\u0644\u064a\u0629_\u0623\u0648\u062a_\u0633\u0628\u062a\u0645\u0628\u0631_\u0623\u0643\u062a\u0648\u0628\u0631_\u0646\u0648\u0641\u0645\u0628\u0631_\u062f\u064a\u0633\u0645\u0628\u0631".split("_"),
            weekdays: "\u0627\u0644\u0623\u062d\u062f_\u0627\u0644\u0625\u062b\u0646\u064a\u0646_\u0627\u0644\u062b\u0644\u0627\u062b\u0627\u0621_\u0627\u0644\u0623\u0631\u0628\u0639\u0627\u0621_\u0627\u0644\u062e\u0645\u064a\u0633_\u0627\u0644\u062c\u0645\u0639\u0629_\u0627\u0644\u0633\u0628\u062a".split("_"),
            weekdaysShort: "\u0627\u062d\u062f_\u0627\u062b\u0646\u064a\u0646_\u062b\u0644\u0627\u062b\u0627\u0621_\u0627\u0631\u0628\u0639\u0627\u0621_\u062e\u0645\u064a\u0633_\u062c\u0645\u0639\u0629_\u0633\u0628\u062a".split("_"),
            weekdaysMin: "\u0623\u062d_\u0625\u062b_\u062b\u0644\u0627_\u0623\u0631_\u062e\u0645_\u062c\u0645_\u0633\u0628".split("_"),
            weekdaysParseExact: !0,
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY HH:mm",
                LLLL: "dddd D MMMM YYYY HH:mm"
            },
            calendar: {
                sameDay: "[\u0627\u0644\u064a\u0648\u0645 \u0639\u0644\u0649 \u0627\u0644\u0633\u0627\u0639\u0629] LT",
                nextDay: "[\u063a\u062f\u0627 \u0639\u0644\u0649 \u0627\u0644\u0633\u0627\u0639\u0629] LT",
                nextWeek: "dddd [\u0639\u0644\u0649 \u0627\u0644\u0633\u0627\u0639\u0629] LT",
                lastDay: "[\u0623\u0645\u0633 \u0639\u0644\u0649 \u0627\u0644\u0633\u0627\u0639\u0629] LT",
                lastWeek: "dddd [\u0639\u0644\u0649 \u0627\u0644\u0633\u0627\u0639\u0629] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "\u0641\u064a %s",
                past: "\u0645\u0646\u0630 %s",
                s: "\u062b\u0648\u0627\u0646",
                ss: "%d \u062b\u0627\u0646\u064a\u0629",
                m: "\u062f\u0642\u064a\u0642\u0629",
                mm: "%d \u062f\u0642\u0627\u0626\u0642",
                h: "\u0633\u0627\u0639\u0629",
                hh: "%d \u0633\u0627\u0639\u0627\u062a",
                d: "\u064a\u0648\u0645",
                dd: "%d \u0623\u064a\u0627\u0645",
                M: "\u0634\u0647\u0631",
                MM: "%d \u0623\u0634\u0647\u0631",
                y: "\u0633\u0646\u0629",
                yy: "%d \u0633\u0646\u0648\u0627\u062a"
            },
            week: {dow: 0, doy: 4}
        })
    }()
},
"p/rL": function (n, t, e) {
    !function (n) {
        "use strict";
        e("wd/R").defineLocale("bm", {
            months: "Zanwuyekalo_Fewuruyekalo_Marisikalo_Awirilikalo_M\u025bkalo_Zuw\u025bnkalo_Zuluyekalo_Utikalo_S\u025btanburukalo_\u0254kut\u0254burukalo_Nowanburukalo_Desanburukalo".split("_"),
            monthsShort: "Zan_Few_Mar_Awi_M\u025b_Zuw_Zul_Uti_S\u025bt_\u0254ku_Now_Des".split("_"),
            weekdays: "Kari_Nt\u025bn\u025bn_Tarata_Araba_Alamisa_Juma_Sibiri".split("_"),
            weekdaysShort: "Kar_Nt\u025b_Tar_Ara_Ala_Jum_Sib".split("_"),
            weekdaysMin: "Ka_Nt_Ta_Ar_Al_Ju_Si".split("_"),
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD/MM/YYYY",
                LL: "MMMM [tile] D [san] YYYY",
                LLL: "MMMM [tile] D [san] YYYY [l\u025br\u025b] HH:mm",
                LLLL: "dddd MMMM [tile] D [san] YYYY [l\u025br\u025b] HH:mm"
            },
            calendar: {
                sameDay: "[Bi l\u025br\u025b] LT",
                nextDay: "[Sini l\u025br\u025b] LT",
                nextWeek: "dddd [don l\u025br\u025b] LT",
                lastDay: "[Kunu l\u025br\u025b] LT",
                lastWeek: "dddd [t\u025bm\u025bnen l\u025br\u025b] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "%s k\u0254n\u0254",
                past: "a b\u025b %s b\u0254",
                s: "sanga dama dama",
                ss: "sekondi %d",
                m: "miniti kelen",
                mm: "miniti %d",
                h: "l\u025br\u025b kelen",
                hh: "l\u025br\u025b %d",
                d: "tile kelen",
                dd: "tile %d",
                M: "kalo kelen",
                MM: "kalo %d",
                y: "san kelen",
                yy: "san %d"
            },
            week: {dow: 1, doy: 4}
        })
    }()
},
raLr: function (n, t, e) {
    !function (n) {
        "use strict";

        function t(n, t, e) {
            var o, l;
            return "m" === e ? t ? "\u0445\u0432\u0438\u043b\u0438\u043d\u0430" : "\u0445\u0432\u0438\u043b\u0438\u043d\u0443" : "h" === e ? t ? "\u0433\u043e\u0434\u0438\u043d\u0430" : "\u0433\u043e\u0434\u0438\u043d\u0443" : n + " " + (o = +n, l = {
                ss: t ? "\u0441\u0435\u043a\u0443\u043d\u0434\u0430_\u0441\u0435\u043a\u0443\u043d\u0434\u0438_\u0441\u0435\u043a\u0443\u043d\u0434" : "\u0441\u0435\u043a\u0443\u043d\u0434\u0443_\u0441\u0435\u043a\u0443\u043d\u0434\u0438_\u0441\u0435\u043a\u0443\u043d\u0434",
                mm: t ? "\u0445\u0432\u0438\u043b\u0438\u043d\u0430_\u0445\u0432\u0438\u043b\u0438\u043d\u0438_\u0445\u0432\u0438\u043b\u0438\u043d" : "\u0445\u0432\u0438\u043b\u0438\u043d\u0443_\u0445\u0432\u0438\u043b\u0438\u043d\u0438_\u0445\u0432\u0438\u043b\u0438\u043d",
                hh: t ? "\u0433\u043e\u0434\u0438\u043d\u0430_\u0433\u043e\u0434\u0438\u043d\u0438_\u0433\u043e\u0434\u0438\u043d" : "\u0433\u043e\u0434\u0438\u043d\u0443_\u0433\u043e\u0434\u0438\u043d\u0438_\u0433\u043e\u0434\u0438\u043d",
                dd: "\u0434\u0435\u043d\u044c_\u0434\u043d\u0456_\u0434\u043d\u0456\u0432",
                MM: "\u043c\u0456\u0441\u044f\u0446\u044c_\u043c\u0456\u0441\u044f\u0446\u0456_\u043c\u0456\u0441\u044f\u0446\u0456\u0432",
                yy: "\u0440\u0456\u043a_\u0440\u043e\u043a\u0438_\u0440\u043e\u043a\u0456\u0432"
            }[e].split("_"), o % 10 == 1 && o % 100 != 11 ? l[0] : o % 10 >= 2 && o % 10 <= 4 && (o % 100 < 10 || o % 100 >= 20) ? l[1] : l[2])
        }

        function o(n) {
            return function () {
                return n + "\u043e" + (11 === this.hours() ? "\u0431" : "") + "] LT"
            }
        }

        e("wd/R").defineLocale("uk", {
            months: {
                format: "\u0441\u0456\u0447\u043d\u044f_\u043b\u044e\u0442\u043e\u0433\u043e_\u0431\u0435\u0440\u0435\u0437\u043d\u044f_\u043a\u0432\u0456\u0442\u043d\u044f_\u0442\u0440\u0430\u0432\u043d\u044f_\u0447\u0435\u0440\u0432\u043d\u044f_\u043b\u0438\u043f\u043d\u044f_\u0441\u0435\u0440\u043f\u043d\u044f_\u0432\u0435\u0440\u0435\u0441\u043d\u044f_\u0436\u043e\u0432\u0442\u043d\u044f_\u043b\u0438\u0441\u0442\u043e\u043f\u0430\u0434\u0430_\u0433\u0440\u0443\u0434\u043d\u044f".split("_"),
                standalone: "\u0441\u0456\u0447\u0435\u043d\u044c_\u043b\u044e\u0442\u0438\u0439_\u0431\u0435\u0440\u0435\u0437\u0435\u043d\u044c_\u043a\u0432\u0456\u0442\u0435\u043d\u044c_\u0442\u0440\u0430\u0432\u0435\u043d\u044c_\u0447\u0435\u0440\u0432\u0435\u043d\u044c_\u043b\u0438\u043f\u0435\u043d\u044c_\u0441\u0435\u0440\u043f\u0435\u043d\u044c_\u0432\u0435\u0440\u0435\u0441\u0435\u043d\u044c_\u0436\u043e\u0432\u0442\u0435\u043d\u044c_\u043b\u0438\u0441\u0442\u043e\u043f\u0430\u0434_\u0433\u0440\u0443\u0434\u0435\u043d\u044c".split("_")
            },
            monthsShort: "\u0441\u0456\u0447_\u043b\u044e\u0442_\u0431\u0435\u0440_\u043a\u0432\u0456\u0442_\u0442\u0440\u0430\u0432_\u0447\u0435\u0440\u0432_\u043b\u0438\u043f_\u0441\u0435\u0440\u043f_\u0432\u0435\u0440_\u0436\u043e\u0432\u0442_\u043b\u0438\u0441\u0442_\u0433\u0440\u0443\u0434".split("_"),
            weekdays: function (n, t) {
                var e = {
                    nominative: "\u043d\u0435\u0434\u0456\u043b\u044f_\u043f\u043e\u043d\u0435\u0434\u0456\u043b\u043e\u043a_\u0432\u0456\u0432\u0442\u043e\u0440\u043e\u043a_\u0441\u0435\u0440\u0435\u0434\u0430_\u0447\u0435\u0442\u0432\u0435\u0440_\u043f\u2019\u044f\u0442\u043d\u0438\u0446\u044f_\u0441\u0443\u0431\u043e\u0442\u0430".split("_"),
                    accusative: "\u043d\u0435\u0434\u0456\u043b\u044e_\u043f\u043e\u043d\u0435\u0434\u0456\u043b\u043e\u043a_\u0432\u0456\u0432\u0442\u043e\u0440\u043e\u043a_\u0441\u0435\u0440\u0435\u0434\u0443_\u0447\u0435\u0442\u0432\u0435\u0440_\u043f\u2019\u044f\u0442\u043d\u0438\u0446\u044e_\u0441\u0443\u0431\u043e\u0442\u0443".split("_"),
                    genitive: "\u043d\u0435\u0434\u0456\u043b\u0456_\u043f\u043e\u043d\u0435\u0434\u0456\u043b\u043a\u0430_\u0432\u0456\u0432\u0442\u043e\u0440\u043a\u0430_\u0441\u0435\u0440\u0435\u0434\u0438_\u0447\u0435\u0442\u0432\u0435\u0440\u0433\u0430_\u043f\u2019\u044f\u0442\u043d\u0438\u0446\u0456_\u0441\u0443\u0431\u043e\u0442\u0438".split("_")
                };
                return !0 === n ? e.nominative.slice(1, 7).concat(e.nominative.slice(0, 1)) : n ? e[/(\[[\u0412\u0432\u0423\u0443]\]) ?dddd/.test(t) ? "accusative" : /\[?(?:\u043c\u0438\u043d\u0443\u043b\u043e\u0457|\u043d\u0430\u0441\u0442\u0443\u043f\u043d\u043e\u0457)? ?\] ?dddd/.test(t) ? "genitive" : "nominative"][n.day()] : e.nominative
            },
            weekdaysShort: "\u043d\u0434_\u043f\u043d_\u0432\u0442_\u0441\u0440_\u0447\u0442_\u043f\u0442_\u0441\u0431".split("_"),
            weekdaysMin: "\u043d\u0434_\u043f\u043d_\u0432\u0442_\u0441\u0440_\u0447\u0442_\u043f\u0442_\u0441\u0431".split("_"),
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD.MM.YYYY",
                LL: "D MMMM YYYY \u0440.",
                LLL: "D MMMM YYYY \u0440., HH:mm",
                LLLL: "dddd, D MMMM YYYY \u0440., HH:mm"
            },
            calendar: {
                sameDay: o("[\u0421\u044c\u043e\u0433\u043e\u0434\u043d\u0456 "),
                nextDay: o("[\u0417\u0430\u0432\u0442\u0440\u0430 "),
                lastDay: o("[\u0412\u0447\u043e\u0440\u0430 "),
                nextWeek: o("[\u0423] dddd ["),
                lastWeek: function () {
                    switch (this.day()) {
                        case 0:
                        case 3:
                        case 5:
                        case 6:
                            return o("[\u041c\u0438\u043d\u0443\u043b\u043e\u0457] dddd [").call(this);
                        case 1:
                        case 2:
                        case 4:
                            return o("[\u041c\u0438\u043d\u0443\u043b\u043e\u0433\u043e] dddd [").call(this)
                    }
                },
                sameElse: "L"
            },
            relativeTime: {
                future: "\u0437\u0430 %s",
                past: "%s \u0442\u043e\u043c\u0443",
                s: "\u0434\u0435\u043a\u0456\u043b\u044c\u043a\u0430 \u0441\u0435\u043a\u0443\u043d\u0434",
                ss: t,
                m: t,
                mm: t,
                h: "\u0433\u043e\u0434\u0438\u043d\u0443",
                hh: t,
                d: "\u0434\u0435\u043d\u044c",
                dd: t,
                M: "\u043c\u0456\u0441\u044f\u0446\u044c",
                MM: t,
                y: "\u0440\u0456\u043a",
                yy: t
            },
            meridiemParse: /\u043d\u043e\u0447\u0456|\u0440\u0430\u043d\u043a\u0443|\u0434\u043d\u044f|\u0432\u0435\u0447\u043e\u0440\u0430/,
            isPM: function (n) {
                return /^(\u0434\u043d\u044f|\u0432\u0435\u0447\u043e\u0440\u0430)$/.test(n)
            },
            meridiem: function (n, t, e) {
                return n < 4 ? "\u043d\u043e\u0447\u0456" : n < 12 ? "\u0440\u0430\u043d\u043a\u0443" : n < 17 ? "\u0434\u043d\u044f" : "\u0432\u0435\u0447\u043e\u0440\u0430"
            },
            dayOfMonthOrdinalParse: /\d{1,2}-(\u0439|\u0433\u043e)/,
            ordinal: function (n, t) {
                switch (t) {
                    case"M":
                    case"d":
                    case"DDD":
                    case"w":
                    case"W":
                        return n + "-\u0439";
                    case"D":
                        return n + "-\u0433\u043e";
                    default:
                        return n
                }
            },
            week: {dow: 1, doy: 7}
        })
    }()
},
"s+uk": function (n, t, e) {
    !function (n) {
        "use strict";

        function t(n, t, e, o) {
            var l = {
                m: ["eine Minute", "einer Minute"],
                h: ["eine Stunde", "einer Stunde"],
                d: ["ein Tag", "einem Tag"],
                dd: [n + " Tage", n + " Tagen"],
                M: ["ein Monat", "einem Monat"],
                MM: [n + " Monate", n + " Monaten"],
                y: ["ein Jahr", "einem Jahr"],
                yy: [n + " Jahre", n + " Jahren"]
            };
            return t ? l[e][0] : l[e][1]
        }

        e("wd/R").defineLocale("de-at", {
            months: "J\xe4nner_Februar_M\xe4rz_April_Mai_Juni_Juli_August_September_Oktober_November_Dezember".split("_"),
            monthsShort: "J\xe4n._Feb._M\xe4rz_Apr._Mai_Juni_Juli_Aug._Sep._Okt._Nov._Dez.".split("_"),
            monthsParseExact: !0,
            weekdays: "Sonntag_Montag_Dienstag_Mittwoch_Donnerstag_Freitag_Samstag".split("_"),
            weekdaysShort: "So._Mo._Di._Mi._Do._Fr._Sa.".split("_"),
            weekdaysMin: "So_Mo_Di_Mi_Do_Fr_Sa".split("_"),
            weekdaysParseExact: !0,
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD.MM.YYYY",
                LL: "D. MMMM YYYY",
                LLL: "D. MMMM YYYY HH:mm",
                LLLL: "dddd, D. MMMM YYYY HH:mm"
            },
            calendar: {
                sameDay: "[heute um] LT [Uhr]",
                sameElse: "L",
                nextDay: "[morgen um] LT [Uhr]",
                nextWeek: "dddd [um] LT [Uhr]",
                lastDay: "[gestern um] LT [Uhr]",
                lastWeek: "[letzten] dddd [um] LT [Uhr]"
            },
            relativeTime: {
                future: "in %s",
                past: "vor %s",
                s: "ein paar Sekunden",
                ss: "%d Sekunden",
                m: t,
                mm: "%d Minuten",
                h: t,
                hh: "%d Stunden",
                d: t,
                dd: t,
                M: t,
                MM: t,
                y: t,
                yy: t
            },
            dayOfMonthOrdinalParse: /\d{1,2}\./,
            ordinal: "%d.",
            week: {dow: 1, doy: 4}
        })
    }()
},
sp3z: function (n, t, e) {
    !function (n) {
        "use strict";
        e("wd/R").defineLocale("lo", {
            months: "\u0ea1\u0eb1\u0e87\u0e81\u0ead\u0e99_\u0e81\u0eb8\u0ea1\u0e9e\u0eb2_\u0ea1\u0eb5\u0e99\u0eb2_\u0ec0\u0ea1\u0eaa\u0eb2_\u0e9e\u0eb6\u0e94\u0eaa\u0eb0\u0e9e\u0eb2_\u0ea1\u0eb4\u0e96\u0eb8\u0e99\u0eb2_\u0e81\u0ecd\u0ea5\u0eb0\u0e81\u0ebb\u0e94_\u0eaa\u0eb4\u0e87\u0eab\u0eb2_\u0e81\u0eb1\u0e99\u0e8d\u0eb2_\u0e95\u0eb8\u0ea5\u0eb2_\u0e9e\u0eb0\u0e88\u0eb4\u0e81_\u0e97\u0eb1\u0e99\u0ea7\u0eb2".split("_"),
            monthsShort: "\u0ea1\u0eb1\u0e87\u0e81\u0ead\u0e99_\u0e81\u0eb8\u0ea1\u0e9e\u0eb2_\u0ea1\u0eb5\u0e99\u0eb2_\u0ec0\u0ea1\u0eaa\u0eb2_\u0e9e\u0eb6\u0e94\u0eaa\u0eb0\u0e9e\u0eb2_\u0ea1\u0eb4\u0e96\u0eb8\u0e99\u0eb2_\u0e81\u0ecd\u0ea5\u0eb0\u0e81\u0ebb\u0e94_\u0eaa\u0eb4\u0e87\u0eab\u0eb2_\u0e81\u0eb1\u0e99\u0e8d\u0eb2_\u0e95\u0eb8\u0ea5\u0eb2_\u0e9e\u0eb0\u0e88\u0eb4\u0e81_\u0e97\u0eb1\u0e99\u0ea7\u0eb2".split("_"),
            weekdays: "\u0ead\u0eb2\u0e97\u0eb4\u0e94_\u0e88\u0eb1\u0e99_\u0ead\u0eb1\u0e87\u0e84\u0eb2\u0e99_\u0e9e\u0eb8\u0e94_\u0e9e\u0eb0\u0eab\u0eb1\u0e94_\u0eaa\u0eb8\u0e81_\u0ec0\u0eaa\u0ebb\u0eb2".split("_"),
            weekdaysShort: "\u0e97\u0eb4\u0e94_\u0e88\u0eb1\u0e99_\u0ead\u0eb1\u0e87\u0e84\u0eb2\u0e99_\u0e9e\u0eb8\u0e94_\u0e9e\u0eb0\u0eab\u0eb1\u0e94_\u0eaa\u0eb8\u0e81_\u0ec0\u0eaa\u0ebb\u0eb2".split("_"),
            weekdaysMin: "\u0e97_\u0e88_\u0ead\u0e84_\u0e9e_\u0e9e\u0eab_\u0eaa\u0e81_\u0eaa".split("_"),
            weekdaysParseExact: !0,
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY HH:mm",
                LLLL: "\u0ea7\u0eb1\u0e99dddd D MMMM YYYY HH:mm"
            },
            meridiemParse: /\u0e95\u0ead\u0e99\u0ec0\u0e8a\u0ebb\u0ec9\u0eb2|\u0e95\u0ead\u0e99\u0ec1\u0ea5\u0e87/,
            isPM: function (n) {
                return "\u0e95\u0ead\u0e99\u0ec1\u0ea5\u0e87" === n
            },
            meridiem: function (n, t, e) {
                return n < 12 ? "\u0e95\u0ead\u0e99\u0ec0\u0e8a\u0ebb\u0ec9\u0eb2" : "\u0e95\u0ead\u0e99\u0ec1\u0ea5\u0e87"
            },
            calendar: {
                sameDay: "[\u0ea1\u0eb7\u0ec9\u0e99\u0eb5\u0ec9\u0ec0\u0ea7\u0ea5\u0eb2] LT",
                nextDay: "[\u0ea1\u0eb7\u0ec9\u0ead\u0eb7\u0ec8\u0e99\u0ec0\u0ea7\u0ea5\u0eb2] LT",
                nextWeek: "[\u0ea7\u0eb1\u0e99]dddd[\u0edc\u0ec9\u0eb2\u0ec0\u0ea7\u0ea5\u0eb2] LT",
                lastDay: "[\u0ea1\u0eb7\u0ec9\u0ea7\u0eb2\u0e99\u0e99\u0eb5\u0ec9\u0ec0\u0ea7\u0ea5\u0eb2] LT",
                lastWeek: "[\u0ea7\u0eb1\u0e99]dddd[\u0ec1\u0ea5\u0ec9\u0ea7\u0e99\u0eb5\u0ec9\u0ec0\u0ea7\u0ea5\u0eb2] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "\u0ead\u0eb5\u0e81 %s",
                past: "%s\u0e9c\u0ec8\u0eb2\u0e99\u0ea1\u0eb2",
                s: "\u0e9a\u0ecd\u0ec8\u0ec0\u0e97\u0ebb\u0ec8\u0eb2\u0ec3\u0e94\u0ea7\u0eb4\u0e99\u0eb2\u0e97\u0eb5",
                ss: "%d \u0ea7\u0eb4\u0e99\u0eb2\u0e97\u0eb5",
                m: "1 \u0e99\u0eb2\u0e97\u0eb5",
                mm: "%d \u0e99\u0eb2\u0e97\u0eb5",
                h: "1 \u0e8a\u0ebb\u0ec8\u0ea7\u0ec2\u0ea1\u0e87",
                hh: "%d \u0e8a\u0ebb\u0ec8\u0ea7\u0ec2\u0ea1\u0e87",
                d: "1 \u0ea1\u0eb7\u0ec9",
                dd: "%d \u0ea1\u0eb7\u0ec9",
                M: "1 \u0ec0\u0e94\u0eb7\u0ead\u0e99",
                MM: "%d \u0ec0\u0e94\u0eb7\u0ead\u0e99",
                y: "1 \u0e9b\u0eb5",
                yy: "%d \u0e9b\u0eb5"
            },
            dayOfMonthOrdinalParse: /(\u0e97\u0eb5\u0ec8)\d{1,2}/,
            ordinal: function (n) {
                return "\u0e97\u0eb5\u0ec8" + n
            }
        })
    }()
},
tGlX: function (n, t, e) {
    !function (n) {
        "use strict";

        function t(n, t, e, o) {
            var l = {
                m: ["eine Minute", "einer Minute"],
                h: ["eine Stunde", "einer Stunde"],
                d: ["ein Tag", "einem Tag"],
                dd: [n + " Tage", n + " Tagen"],
                M: ["ein Monat", "einem Monat"],
                MM: [n + " Monate", n + " Monaten"],
                y: ["ein Jahr", "einem Jahr"],
                yy: [n + " Jahre", n + " Jahren"]
            };
            return t ? l[e][0] : l[e][1]
        }

        e("wd/R").defineLocale("de", {
            months: "Januar_Februar_M\xe4rz_April_Mai_Juni_Juli_August_September_Oktober_November_Dezember".split("_"),
            monthsShort: "Jan._Feb._M\xe4rz_Apr._Mai_Juni_Juli_Aug._Sep._Okt._Nov._Dez.".split("_"),
            monthsParseExact: !0,
            weekdays: "Sonntag_Montag_Dienstag_Mittwoch_Donnerstag_Freitag_Samstag".split("_"),
            weekdaysShort: "So._Mo._Di._Mi._Do._Fr._Sa.".split("_"),
            weekdaysMin: "So_Mo_Di_Mi_Do_Fr_Sa".split("_"),
            weekdaysParseExact: !0,
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD.MM.YYYY",
                LL: "D. MMMM YYYY",
                LLL: "D. MMMM YYYY HH:mm",
                LLLL: "dddd, D. MMMM YYYY HH:mm"
            },
            calendar: {
                sameDay: "[heute um] LT [Uhr]",
                sameElse: "L",
                nextDay: "[morgen um] LT [Uhr]",
                nextWeek: "dddd [um] LT [Uhr]",
                lastDay: "[gestern um] LT [Uhr]",
                lastWeek: "[letzten] dddd [um] LT [Uhr]"
            },
            relativeTime: {
                future: "in %s",
                past: "vor %s",
                s: "ein paar Sekunden",
                ss: "%d Sekunden",
                m: t,
                mm: "%d Minuten",
                h: t,
                hh: "%d Stunden",
                d: t,
                dd: t,
                M: t,
                MM: t,
                y: t,
                yy: t
            },
            dayOfMonthOrdinalParse: /\d{1,2}\./,
            ordinal: "%d.",
            week: {dow: 1, doy: 4}
        })
    }()
},
tT3J: function (n, t, e) {
    !function (n) {
        "use strict";
        e("wd/R").defineLocale("tzm-latn", {
            months: "innayr_br\u02e4ayr\u02e4_mar\u02e4s\u02e4_ibrir_mayyw_ywnyw_ywlywz_\u0263w\u0161t_\u0161wtanbir_kt\u02e4wbr\u02e4_nwwanbir_dwjnbir".split("_"),
            monthsShort: "innayr_br\u02e4ayr\u02e4_mar\u02e4s\u02e4_ibrir_mayyw_ywnyw_ywlywz_\u0263w\u0161t_\u0161wtanbir_kt\u02e4wbr\u02e4_nwwanbir_dwjnbir".split("_"),
            weekdays: "asamas_aynas_asinas_akras_akwas_asimwas_asi\u1e0dyas".split("_"),
            weekdaysShort: "asamas_aynas_asinas_akras_akwas_asimwas_asi\u1e0dyas".split("_"),
            weekdaysMin: "asamas_aynas_asinas_akras_akwas_asimwas_asi\u1e0dyas".split("_"),
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY HH:mm",
                LLLL: "dddd D MMMM YYYY HH:mm"
            },
            calendar: {
                sameDay: "[asdkh g] LT",
                nextDay: "[aska g] LT",
                nextWeek: "dddd [g] LT",
                lastDay: "[assant g] LT",
                lastWeek: "dddd [g] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "dadkh s yan %s",
                past: "yan %s",
                s: "imik",
                ss: "%d imik",
                m: "minu\u1e0d",
                mm: "%d minu\u1e0d",
                h: "sa\u025ba",
                hh: "%d tassa\u025bin",
                d: "ass",
                dd: "%d ossan",
                M: "ayowr",
                MM: "%d iyyirn",
                y: "asgas",
                yy: "%d isgasn"
            },
            week: {dow: 6, doy: 12}
        })
    }()
},
tUCv: function (n, t, e) {
    !function (n) {
        "use strict";
        e("wd/R").defineLocale("jv", {
            months: "Januari_Februari_Maret_April_Mei_Juni_Juli_Agustus_September_Oktober_Nopember_Desember".split("_"),
            monthsShort: "Jan_Feb_Mar_Apr_Mei_Jun_Jul_Ags_Sep_Okt_Nop_Des".split("_"),
            weekdays: "Minggu_Senen_Seloso_Rebu_Kemis_Jemuwah_Septu".split("_"),
            weekdaysShort: "Min_Sen_Sel_Reb_Kem_Jem_Sep".split("_"),
            weekdaysMin: "Mg_Sn_Sl_Rb_Km_Jm_Sp".split("_"),
            longDateFormat: {
                LT: "HH.mm",
                LTS: "HH.mm.ss",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY [pukul] HH.mm",
                LLLL: "dddd, D MMMM YYYY [pukul] HH.mm"
            },
            meridiemParse: /enjing|siyang|sonten|ndalu/,
            meridiemHour: function (n, t) {
                return 12 === n && (n = 0), "enjing" === t ? n : "siyang" === t ? n >= 11 ? n : n + 12 : "sonten" === t || "ndalu" === t ? n + 12 : void 0
            },
            meridiem: function (n, t, e) {
                return n < 11 ? "enjing" : n < 15 ? "siyang" : n < 19 ? "sonten" : "ndalu"
            },
            calendar: {
                sameDay: "[Dinten puniko pukul] LT",
                nextDay: "[Mbenjang pukul] LT",
                nextWeek: "dddd [pukul] LT",
                lastDay: "[Kala wingi pukul] LT",
                lastWeek: "dddd [kepengker pukul] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "wonten ing %s",
                past: "%s ingkang kepengker",
                s: "sawetawis detik",
                ss: "%d detik",
                m: "setunggal menit",
                mm: "%d menit",
                h: "setunggal jam",
                hh: "%d jam",
                d: "sedinten",
                dd: "%d dinten",
                M: "sewulan",
                MM: "%d wulan",
                y: "setaun",
                yy: "%d taun"
            },
            week: {dow: 1, doy: 7}
        })
    }()
},
u3GI: function (n, t, e) {
    !function (n) {
        "use strict";

        function t(n, t, e, o) {
            var l = {
                m: ["eine Minute", "einer Minute"],
                h: ["eine Stunde", "einer Stunde"],
                d: ["ein Tag", "einem Tag"],
                dd: [n + " Tage", n + " Tagen"],
                M: ["ein Monat", "einem Monat"],
                MM: [n + " Monate", n + " Monaten"],
                y: ["ein Jahr", "einem Jahr"],
                yy: [n + " Jahre", n + " Jahren"]
            };
            return t ? l[e][0] : l[e][1]
        }

        e("wd/R").defineLocale("de-ch", {
            months: "Januar_Februar_M\xe4rz_April_Mai_Juni_Juli_August_September_Oktober_November_Dezember".split("_"),
            monthsShort: "Jan._Feb._M\xe4rz_Apr._Mai_Juni_Juli_Aug._Sep._Okt._Nov._Dez.".split("_"),
            monthsParseExact: !0,
            weekdays: "Sonntag_Montag_Dienstag_Mittwoch_Donnerstag_Freitag_Samstag".split("_"),
            weekdaysShort: "So_Mo_Di_Mi_Do_Fr_Sa".split("_"),
            weekdaysMin: "So_Mo_Di_Mi_Do_Fr_Sa".split("_"),
            weekdaysParseExact: !0,
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD.MM.YYYY",
                LL: "D. MMMM YYYY",
                LLL: "D. MMMM YYYY HH:mm",
                LLLL: "dddd, D. MMMM YYYY HH:mm"
            },
            calendar: {
                sameDay: "[heute um] LT [Uhr]",
                sameElse: "L",
                nextDay: "[morgen um] LT [Uhr]",
                nextWeek: "dddd [um] LT [Uhr]",
                lastDay: "[gestern um] LT [Uhr]",
                lastWeek: "[letzten] dddd [um] LT [Uhr]"
            },
            relativeTime: {
                future: "in %s",
                past: "vor %s",
                s: "ein paar Sekunden",
                ss: "%d Sekunden",
                m: t,
                mm: "%d Minuten",
                h: t,
                hh: "%d Stunden",
                d: t,
                dd: t,
                M: t,
                MM: t,
                y: t,
                yy: t
            },
            dayOfMonthOrdinalParse: /\d{1,2}\./,
            ordinal: "%d.",
            week: {dow: 1, doy: 4}
        })
    }()
},
uEye: function (n, t, e) {
    !function (n) {
        "use strict";
        e("wd/R").defineLocale("nn", {
            months: "januar_februar_mars_april_mai_juni_juli_august_september_oktober_november_desember".split("_"),
            monthsShort: "jan_feb_mar_apr_mai_jun_jul_aug_sep_okt_nov_des".split("_"),
            weekdays: "sundag_m\xe5ndag_tysdag_onsdag_torsdag_fredag_laurdag".split("_"),
            weekdaysShort: "sun_m\xe5n_tys_ons_tor_fre_lau".split("_"),
            weekdaysMin: "su_m\xe5_ty_on_to_fr_l\xf8".split("_"),
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD.MM.YYYY",
                LL: "D. MMMM YYYY",
                LLL: "D. MMMM YYYY [kl.] H:mm",
                LLLL: "dddd D. MMMM YYYY [kl.] HH:mm"
            },
            calendar: {
                sameDay: "[I dag klokka] LT",
                nextDay: "[I morgon klokka] LT",
                nextWeek: "dddd [klokka] LT",
                lastDay: "[I g\xe5r klokka] LT",
                lastWeek: "[F\xf8reg\xe5ande] dddd [klokka] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "om %s",
                past: "%s sidan",
                s: "nokre sekund",
                ss: "%d sekund",
                m: "eit minutt",
                mm: "%d minutt",
                h: "ein time",
                hh: "%d timar",
                d: "ein dag",
                dd: "%d dagar",
                M: "ein m\xe5nad",
                MM: "%d m\xe5nader",
                y: "eit \xe5r",
                yy: "%d \xe5r"
            },
            dayOfMonthOrdinalParse: /\d{1,2}\./,
            ordinal: "%d.",
            week: {dow: 1, doy: 4}
        })
    }()
},
uXwI: function (n, t, e) {
    !function (n) {
        "use strict";
        var t = {
            ss: "sekundes_sekund\u0113m_sekunde_sekundes".split("_"),
            m: "min\u016btes_min\u016bt\u0113m_min\u016bte_min\u016btes".split("_"),
            mm: "min\u016btes_min\u016bt\u0113m_min\u016bte_min\u016btes".split("_"),
            h: "stundas_stund\u0101m_stunda_stundas".split("_"),
            hh: "stundas_stund\u0101m_stunda_stundas".split("_"),
            d: "dienas_dien\u0101m_diena_dienas".split("_"),
            dd: "dienas_dien\u0101m_diena_dienas".split("_"),
            M: "m\u0113ne\u0161a_m\u0113ne\u0161iem_m\u0113nesis_m\u0113ne\u0161i".split("_"),
            MM: "m\u0113ne\u0161a_m\u0113ne\u0161iem_m\u0113nesis_m\u0113ne\u0161i".split("_"),
            y: "gada_gadiem_gads_gadi".split("_"),
            yy: "gada_gadiem_gads_gadi".split("_")
        };

        function e(n, t, e) {
            return e ? t % 10 == 1 && t % 100 != 11 ? n[2] : n[3] : t % 10 == 1 && t % 100 != 11 ? n[0] : n[1]
        }

        function o(n, o, l) {
            return n + " " + e(t[l], n, o)
        }

        function l(n, o, l) {
            return e(t[l], n, o)
        }

        n.defineLocale("lv", {
            months: "janv\u0101ris_febru\u0101ris_marts_apr\u012blis_maijs_j\u016bnijs_j\u016blijs_augusts_septembris_oktobris_novembris_decembris".split("_"),
            monthsShort: "jan_feb_mar_apr_mai_j\u016bn_j\u016bl_aug_sep_okt_nov_dec".split("_"),
            weekdays: "sv\u0113tdiena_pirmdiena_otrdiena_tre\u0161diena_ceturtdiena_piektdiena_sestdiena".split("_"),
            weekdaysShort: "Sv_P_O_T_C_Pk_S".split("_"),
            weekdaysMin: "Sv_P_O_T_C_Pk_S".split("_"),
            weekdaysParseExact: !0,
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD.MM.YYYY.",
                LL: "YYYY. [gada] D. MMMM",
                LLL: "YYYY. [gada] D. MMMM, HH:mm",
                LLLL: "YYYY. [gada] D. MMMM, dddd, HH:mm"
            },
            calendar: {
                sameDay: "[\u0160odien pulksten] LT",
                nextDay: "[R\u012bt pulksten] LT",
                nextWeek: "dddd [pulksten] LT",
                lastDay: "[Vakar pulksten] LT",
                lastWeek: "[Pag\u0101ju\u0161\u0101] dddd [pulksten] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "p\u0113c %s", past: "pirms %s", s: function (n, t) {
                    return t ? "da\u017eas sekundes" : "da\u017e\u0101m sekund\u0113m"
                }, ss: o, m: l, mm: o, h: l, hh: o, d: l, dd: o, M: l, MM: o, y: l, yy: o
            },
            dayOfMonthOrdinalParse: /\d{1,2}\./,
            ordinal: "%d.",
            week: {dow: 1, doy: 4}
        })
    }(e("wd/R"))
},
wQk9: function (n, t, e) {
    !function (n) {
        "use strict";
        e("wd/R").defineLocale("tzm", {
            months: "\u2d49\u2d4f\u2d4f\u2d30\u2d62\u2d54_\u2d31\u2d55\u2d30\u2d62\u2d55_\u2d4e\u2d30\u2d55\u2d5a_\u2d49\u2d31\u2d54\u2d49\u2d54_\u2d4e\u2d30\u2d62\u2d62\u2d53_\u2d62\u2d53\u2d4f\u2d62\u2d53_\u2d62\u2d53\u2d4d\u2d62\u2d53\u2d63_\u2d56\u2d53\u2d5b\u2d5c_\u2d5b\u2d53\u2d5c\u2d30\u2d4f\u2d31\u2d49\u2d54_\u2d3d\u2d5f\u2d53\u2d31\u2d55_\u2d4f\u2d53\u2d61\u2d30\u2d4f\u2d31\u2d49\u2d54_\u2d37\u2d53\u2d4a\u2d4f\u2d31\u2d49\u2d54".split("_"),
            monthsShort: "\u2d49\u2d4f\u2d4f\u2d30\u2d62\u2d54_\u2d31\u2d55\u2d30\u2d62\u2d55_\u2d4e\u2d30\u2d55\u2d5a_\u2d49\u2d31\u2d54\u2d49\u2d54_\u2d4e\u2d30\u2d62\u2d62\u2d53_\u2d62\u2d53\u2d4f\u2d62\u2d53_\u2d62\u2d53\u2d4d\u2d62\u2d53\u2d63_\u2d56\u2d53\u2d5b\u2d5c_\u2d5b\u2d53\u2d5c\u2d30\u2d4f\u2d31\u2d49\u2d54_\u2d3d\u2d5f\u2d53\u2d31\u2d55_\u2d4f\u2d53\u2d61\u2d30\u2d4f\u2d31\u2d49\u2d54_\u2d37\u2d53\u2d4a\u2d4f\u2d31\u2d49\u2d54".split("_"),
            weekdays: "\u2d30\u2d59\u2d30\u2d4e\u2d30\u2d59_\u2d30\u2d62\u2d4f\u2d30\u2d59_\u2d30\u2d59\u2d49\u2d4f\u2d30\u2d59_\u2d30\u2d3d\u2d54\u2d30\u2d59_\u2d30\u2d3d\u2d61\u2d30\u2d59_\u2d30\u2d59\u2d49\u2d4e\u2d61\u2d30\u2d59_\u2d30\u2d59\u2d49\u2d39\u2d62\u2d30\u2d59".split("_"),
            weekdaysShort: "\u2d30\u2d59\u2d30\u2d4e\u2d30\u2d59_\u2d30\u2d62\u2d4f\u2d30\u2d59_\u2d30\u2d59\u2d49\u2d4f\u2d30\u2d59_\u2d30\u2d3d\u2d54\u2d30\u2d59_\u2d30\u2d3d\u2d61\u2d30\u2d59_\u2d30\u2d59\u2d49\u2d4e\u2d61\u2d30\u2d59_\u2d30\u2d59\u2d49\u2d39\u2d62\u2d30\u2d59".split("_"),
            weekdaysMin: "\u2d30\u2d59\u2d30\u2d4e\u2d30\u2d59_\u2d30\u2d62\u2d4f\u2d30\u2d59_\u2d30\u2d59\u2d49\u2d4f\u2d30\u2d59_\u2d30\u2d3d\u2d54\u2d30\u2d59_\u2d30\u2d3d\u2d61\u2d30\u2d59_\u2d30\u2d59\u2d49\u2d4e\u2d61\u2d30\u2d59_\u2d30\u2d59\u2d49\u2d39\u2d62\u2d30\u2d59".split("_"),
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY HH:mm",
                LLLL: "dddd D MMMM YYYY HH:mm"
            },
            calendar: {
                sameDay: "[\u2d30\u2d59\u2d37\u2d45 \u2d34] LT",
                nextDay: "[\u2d30\u2d59\u2d3d\u2d30 \u2d34] LT",
                nextWeek: "dddd [\u2d34] LT",
                lastDay: "[\u2d30\u2d5a\u2d30\u2d4f\u2d5c \u2d34] LT",
                lastWeek: "dddd [\u2d34] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "\u2d37\u2d30\u2d37\u2d45 \u2d59 \u2d62\u2d30\u2d4f %s",
                past: "\u2d62\u2d30\u2d4f %s",
                s: "\u2d49\u2d4e\u2d49\u2d3d",
                ss: "%d \u2d49\u2d4e\u2d49\u2d3d",
                m: "\u2d4e\u2d49\u2d4f\u2d53\u2d3a",
                mm: "%d \u2d4e\u2d49\u2d4f\u2d53\u2d3a",
                h: "\u2d59\u2d30\u2d44\u2d30",
                hh: "%d \u2d5c\u2d30\u2d59\u2d59\u2d30\u2d44\u2d49\u2d4f",
                d: "\u2d30\u2d59\u2d59",
                dd: "%d o\u2d59\u2d59\u2d30\u2d4f",
                M: "\u2d30\u2d62o\u2d53\u2d54",
                MM: "%d \u2d49\u2d62\u2d62\u2d49\u2d54\u2d4f",
                y: "\u2d30\u2d59\u2d33\u2d30\u2d59",
                yy: "%d \u2d49\u2d59\u2d33\u2d30\u2d59\u2d4f"
            },
            week: {dow: 6, doy: 12}
        })
    }()
},
"wd/R": function (n, t, e) {
    (function (n) {
        n.exports = function () {
            "use strict";
            var t, o;

            function l() {
                return t.apply(null, arguments)
            }

            function r(n) {
                return n instanceof Array || "[object Array]" === Object.prototype.toString.call(n)
            }

            function i(n) {
                return null != n && "[object Object]" === Object.prototype.toString.call(n)
            }

            function a(n) {
                return void 0 === n
            }

            function s(n) {
                return "number" == typeof n || "[object Number]" === Object.prototype.toString.call(n)
            }

            function c(n) {
                return n instanceof Date || "[object Date]" === Object.prototype.toString.call(n)
            }

            function u(n, t) {
                var e, o = [];
                for (e = 0; e < n.length; ++e) o.push(t(n[e], e));
                return o
            }

            function d(n, t) {
                return Object.prototype.hasOwnProperty.call(n, t)
            }

            function g(n, t) {
                for (var e in t) d(t, e) && (n[e] = t[e]);
                return d(t, "toString") && (n.toString = t.toString), d(t, "valueOf") && (n.valueOf = t.valueOf), n
            }

            function p(n, t, e, o) {
                return Tt(n, t, e, o, !0).utc()
            }

            function f(n) {
                return null == n._pf && (n._pf = {
                    empty: !1,
                    unusedTokens: [],
                    unusedInput: [],
                    overflow: -2,
                    charsLeftOver: 0,
                    nullInput: !1,
                    invalidMonth: null,
                    invalidFormat: !1,
                    userInvalidated: !1,
                    iso: !1,
                    parsedDateParts: [],
                    meridiem: null,
                    rfc2822: !1,
                    weekdayMismatch: !1
                }), n._pf
            }

            function m(n) {
                if (null == n._isValid) {
                    var t = f(n), e = o.call(t.parsedDateParts, function (n) {
                            return null != n
                        }),
                        l = !isNaN(n._d.getTime()) && t.overflow < 0 && !t.empty && !t.invalidMonth && !t.invalidWeekday && !t.weekdayMismatch && !t.nullInput && !t.invalidFormat && !t.userInvalidated && (!t.meridiem || t.meridiem && e);
                    if (n._strict && (l = l && 0 === t.charsLeftOver && 0 === t.unusedTokens.length && void 0 === t.bigHour), null != Object.isFrozen && Object.isFrozen(n)) return l;
                    n._isValid = l
                }
                return n._isValid
            }

            function h(n) {
                var t = p(NaN);
                return null != n ? g(f(t), n) : f(t).userInvalidated = !0, t
            }

            o = Array.prototype.some ? Array.prototype.some : function (n) {
                for (var t = Object(this), e = t.length >>> 0, o = 0; o < e; o++) if (o in t && n.call(this, t[o], o, t)) return !0;
                return !1
            };
            var _ = l.momentProperties = [];

            function C(n, t) {
                var e, o, l;
                if (a(t._isAMomentObject) || (n._isAMomentObject = t._isAMomentObject), a(t._i) || (n._i = t._i), a(t._f) || (n._f = t._f), a(t._l) || (n._l = t._l), a(t._strict) || (n._strict = t._strict), a(t._tzm) || (n._tzm = t._tzm), a(t._isUTC) || (n._isUTC = t._isUTC), a(t._offset) || (n._offset = t._offset), a(t._pf) || (n._pf = f(t)), a(t._locale) || (n._locale = t._locale), _.length > 0) for (e = 0; e < _.length; e++) a(l = t[o = _[e]]) || (n[o] = l);
                return n
            }

            var b = !1;

            function O(n) {
                C(this, n), this._d = new Date(null != n._d ? n._d.getTime() : NaN), this.isValid() || (this._d = new Date(NaN)), !1 === b && (b = !0, l.updateOffset(this), b = !1)
            }

            function M(n) {
                return n instanceof O || null != n && null != n._isAMomentObject
            }

            function v(n) {
                return n < 0 ? Math.ceil(n) || 0 : Math.floor(n)
            }

            function P(n) {
                var t = +n, e = 0;
                return 0 !== t && isFinite(t) && (e = v(t)), e
            }

            function y(n, t, e) {
                var o, l = Math.min(n.length, t.length), r = Math.abs(n.length - t.length), i = 0;
                for (o = 0; o < l; o++) (e && n[o] !== t[o] || !e && P(n[o]) !== P(t[o])) && i++;
                return i + r
            }

            function w(n) {
                !1 === l.suppressDeprecationWarnings && "undefined" != typeof console && console.warn && console.warn("Deprecation warning: " + n)
            }

            function x(n, t) {
                var e = !0;
                return g(function () {
                    if (null != l.deprecationHandler && l.deprecationHandler(null, n), e) {
                        for (var o, r = [], i = 0; i < arguments.length; i++) {
                            if (o = "", "object" == typeof arguments[i]) {
                                for (var a in o += "\n[" + i + "] ", arguments[0]) o += a + ": " + arguments[0][a] + ", ";
                                o = o.slice(0, -2)
                            } else o = arguments[i];
                            r.push(o)
                        }
                        w(n + "\nArguments: " + Array.prototype.slice.call(r).join("") + "\n" + (new Error).stack), e = !1
                    }
                    return t.apply(this, arguments)
                }, t)
            }

            var E, S = {};

            function k(n, t) {
                null != l.deprecationHandler && l.deprecationHandler(n, t), S[n] || (w(t), S[n] = !0)
            }

            function L(n) {
                return n instanceof Function || "[object Function]" === Object.prototype.toString.call(n)
            }

            function T(n, t) {
                var e, o = g({}, n);
                for (e in t) d(t, e) && (i(n[e]) && i(t[e]) ? (o[e] = {}, g(o[e], n[e]), g(o[e], t[e])) : null != t[e] ? o[e] = t[e] : delete o[e]);
                for (e in n) d(n, e) && !d(t, e) && i(n[e]) && (o[e] = g({}, o[e]));
                return o
            }

            function D(n) {
                null != n && this.set(n)
            }

            l.suppressDeprecationWarnings = !1, l.deprecationHandler = null, E = Object.keys ? Object.keys : function (n) {
                var t, e = [];
                for (t in n) d(n, t) && e.push(t);
                return e
            };
            var Y = {};

            function I(n, t) {
                var e = n.toLowerCase();
                Y[e] = Y[e + "s"] = Y[t] = n
            }

            function A(n) {
                return "string" == typeof n ? Y[n] || Y[n.toLowerCase()] : void 0
            }

            function z(n) {
                var t, e, o = {};
                for (e in n) d(n, e) && (t = A(e)) && (o[t] = n[e]);
                return o
            }

            var R = {};

            function N(n, t) {
                R[n] = t
            }

            function H(n, t, e) {
                var o = "" + Math.abs(n);
                return (n >= 0 ? e ? "+" : "" : "-") + Math.pow(10, Math.max(0, t - o.length)).toString().substr(1) + o
            }

            var F = /(\[[^\[]*\])|(\\)?([Hh]mm(ss)?|Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Qo?|YYYYYY|YYYYY|YYYY|YY|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|kk?|mm?|ss?|S{1,9}|x|X|zz?|ZZ?|.)/g,
                U = /(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g, K = {}, j = {};

            function X(n, t, e, o) {
                var l = o;
                "string" == typeof o && (l = function () {
                    return this[o]()
                }), n && (j[n] = l), t && (j[t[0]] = function () {
                    return H(l.apply(this, arguments), t[1], t[2])
                }), e && (j[e] = function () {
                    return this.localeData().ordinal(l.apply(this, arguments), n)
                })
            }

            function V(n, t) {
                return n.isValid() ? (t = B(t, n.localeData()), K[t] = K[t] || function (n) {
                    var t, e, o, l = n.match(F);
                    for (t = 0, e = l.length; t < e; t++) l[t] = j[l[t]] ? j[l[t]] : (o = l[t]).match(/\[[\s\S]/) ? o.replace(/^\[|\]$/g, "") : o.replace(/\\/g, "");
                    return function (t) {
                        var o, r = "";
                        for (o = 0; o < e; o++) r += L(l[o]) ? l[o].call(t, n) : l[o];
                        return r
                    }
                }(t), K[t](n)) : n.localeData().invalidDate()
            }

            function B(n, t) {
                var e = 5;

                function o(n) {
                    return t.longDateFormat(n) || n
                }

                for (U.lastIndex = 0; e >= 0 && U.test(n);) n = n.replace(U, o), U.lastIndex = 0, e -= 1;
                return n
            }

            var $ = /\d/, W = /\d\d/, G = /\d{3}/, q = /\d{4}/, Z = /[+-]?\d{6}/, Q = /\d\d?/, J = /\d\d\d\d?/,
                nn = /\d\d\d\d\d\d?/, tn = /\d{1,3}/, en = /\d{1,4}/, on = /[+-]?\d{1,6}/, ln = /\d+/,
                rn = /[+-]?\d+/, an = /Z|[+-]\d\d:?\d\d/gi, sn = /Z|[+-]\d\d(?::?\d\d)?/gi,
                cn = /[0-9]{0,256}['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFF07\uFF10-\uFFEF]{1,256}|[\u0600-\u06FF\/]{1,256}(\s*?[\u0600-\u06FF]{1,256}){1,2}/i,
                un = {};

            function dn(n, t, e) {
                un[n] = L(t) ? t : function (n, o) {
                    return n && e ? e : t
                }
            }

            function gn(n, t) {
                return d(un, n) ? un[n](t._strict, t._locale) : new RegExp(pn(n.replace("\\", "").replace(/\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g, function (n, t, e, o, l) {
                    return t || e || o || l
                })))
            }

            function pn(n) {
                return n.replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&")
            }

            var fn = {};

            function mn(n, t) {
                var e, o = t;
                for ("string" == typeof n && (n = [n]), s(t) && (o = function (n, e) {
                    e[t] = P(n)
                }), e = 0; e < n.length; e++) fn[n[e]] = o
            }

            function hn(n, t) {
                mn(n, function (n, e, o, l) {
                    o._w = o._w || {}, t(n, o._w, o, l)
                })
            }

            function _n(n, t, e) {
                null != t && d(fn, n) && fn[n](t, e._a, e, n)
            }

            var Cn = 0, bn = 1, On = 2, Mn = 3, vn = 4, Pn = 5, yn = 6, wn = 7, xn = 8;

            function En(n) {
                return Sn(n) ? 366 : 365
            }

            function Sn(n) {
                return n % 4 == 0 && n % 100 != 0 || n % 400 == 0
            }

            X("Y", 0, 0, function () {
                var n = this.year();
                return n <= 9999 ? "" + n : "+" + n
            }), X(0, ["YY", 2], 0, function () {
                return this.year() % 100
            }), X(0, ["YYYY", 4], 0, "year"), X(0, ["YYYYY", 5], 0, "year"), X(0, ["YYYYYY", 6, !0], 0, "year"), I("year", "y"), N("year", 1), dn("Y", rn), dn("YY", Q, W), dn("YYYY", en, q), dn("YYYYY", on, Z), dn("YYYYYY", on, Z), mn(["YYYYY", "YYYYYY"], Cn), mn("YYYY", function (n, t) {
                t[Cn] = 2 === n.length ? l.parseTwoDigitYear(n) : P(n)
            }), mn("YY", function (n, t) {
                t[Cn] = l.parseTwoDigitYear(n)
            }), mn("Y", function (n, t) {
                t[Cn] = parseInt(n, 10)
            }), l.parseTwoDigitYear = function (n) {
                return P(n) + (P(n) > 68 ? 1900 : 2e3)
            };
            var kn, Ln = Tn("FullYear", !0);

            function Tn(n, t) {
                return function (e) {
                    return null != e ? (Yn(this, n, e), l.updateOffset(this, t), this) : Dn(this, n)
                }
            }

            function Dn(n, t) {
                return n.isValid() ? n._d["get" + (n._isUTC ? "UTC" : "") + t]() : NaN
            }

            function Yn(n, t, e) {
                n.isValid() && !isNaN(e) && ("FullYear" === t && Sn(n.year()) && 1 === n.month() && 29 === n.date() ? n._d["set" + (n._isUTC ? "UTC" : "") + t](e, n.month(), In(e, n.month())) : n._d["set" + (n._isUTC ? "UTC" : "") + t](e))
            }

            function In(n, t) {
                if (isNaN(n) || isNaN(t)) return NaN;
                var e = (t % 12 + 12) % 12;
                return n += (t - e) / 12, 1 === e ? Sn(n) ? 29 : 28 : 31 - e % 7 % 2
            }

            kn = Array.prototype.indexOf ? Array.prototype.indexOf : function (n) {
                var t;
                for (t = 0; t < this.length; ++t) if (this[t] === n) return t;
                return -1
            }, X("M", ["MM", 2], "Mo", function () {
                return this.month() + 1
            }), X("MMM", 0, 0, function (n) {
                return this.localeData().monthsShort(this, n)
            }), X("MMMM", 0, 0, function (n) {
                return this.localeData().months(this, n)
            }), I("month", "M"), N("month", 8), dn("M", Q), dn("MM", Q, W), dn("MMM", function (n, t) {
                return t.monthsShortRegex(n)
            }), dn("MMMM", function (n, t) {
                return t.monthsRegex(n)
            }), mn(["M", "MM"], function (n, t) {
                t[bn] = P(n) - 1
            }), mn(["MMM", "MMMM"], function (n, t, e, o) {
                var l = e._locale.monthsParse(n, o, e._strict);
                null != l ? t[bn] = l : f(e).invalidMonth = n
            });
            var An = /D[oD]?(\[[^\[\]]*\]|\s)+MMMM?/,
                zn = "January_February_March_April_May_June_July_August_September_October_November_December".split("_"),
                Rn = "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_");

            function Nn(n, t) {
                var e;
                if (!n.isValid()) return n;
                if ("string" == typeof t) if (/^\d+$/.test(t)) t = P(t); else if (!s(t = n.localeData().monthsParse(t))) return n;
                return e = Math.min(n.date(), In(n.year(), t)), n._d["set" + (n._isUTC ? "UTC" : "") + "Month"](t, e), n
            }

            function Hn(n) {
                return null != n ? (Nn(this, n), l.updateOffset(this, !0), this) : Dn(this, "Month")
            }

            var Fn = cn, Un = cn;

            function Kn() {
                function n(n, t) {
                    return t.length - n.length
                }

                var t, e, o = [], l = [], r = [];
                for (t = 0; t < 12; t++) e = p([2e3, t]), o.push(this.monthsShort(e, "")), l.push(this.months(e, "")), r.push(this.months(e, "")), r.push(this.monthsShort(e, ""));
                for (o.sort(n), l.sort(n), r.sort(n), t = 0; t < 12; t++) o[t] = pn(o[t]), l[t] = pn(l[t]);
                for (t = 0; t < 24; t++) r[t] = pn(r[t]);
                this._monthsRegex = new RegExp("^(" + r.join("|") + ")", "i"), this._monthsShortRegex = this._monthsRegex, this._monthsStrictRegex = new RegExp("^(" + l.join("|") + ")", "i"), this._monthsShortStrictRegex = new RegExp("^(" + o.join("|") + ")", "i")
            }

            function jn(n) {
                var t;
                if (n < 100 && n >= 0) {
                    var e = Array.prototype.slice.call(arguments);
                    e[0] = n + 400, t = new Date(Date.UTC.apply(null, e)), isFinite(t.getUTCFullYear()) && t.setUTCFullYear(n)
                } else t = new Date(Date.UTC.apply(null, arguments));
                return t
            }

            function Xn(n, t, e) {
                var o = 7 + t - e;
                return -(7 + jn(n, 0, o).getUTCDay() - t) % 7 + o - 1
            }

            function Vn(n, t, e, o, l) {
                var r, i, a = 1 + 7 * (t - 1) + (7 + e - o) % 7 + Xn(n, o, l);
                return a <= 0 ? i = En(r = n - 1) + a : a > En(n) ? (r = n + 1, i = a - En(n)) : (r = n, i = a), {
                    year: r,
                    dayOfYear: i
                }
            }

            function Bn(n, t, e) {
                var o, l, r = Xn(n.year(), t, e), i = Math.floor((n.dayOfYear() - r - 1) / 7) + 1;
                return i < 1 ? o = i + $n(l = n.year() - 1, t, e) : i > $n(n.year(), t, e) ? (o = i - $n(n.year(), t, e), l = n.year() + 1) : (l = n.year(), o = i), {
                    week: o,
                    year: l
                }
            }

            function $n(n, t, e) {
                var o = Xn(n, t, e), l = Xn(n + 1, t, e);
                return (En(n) - o + l) / 7
            }

            function Wn(n, t) {
                return n.slice(t, 7).concat(n.slice(0, t))
            }

            X("w", ["ww", 2], "wo", "week"), X("W", ["WW", 2], "Wo", "isoWeek"), I("week", "w"), I("isoWeek", "W"), N("week", 5), N("isoWeek", 5), dn("w", Q), dn("ww", Q, W), dn("W", Q), dn("WW", Q, W), hn(["w", "ww", "W", "WW"], function (n, t, e, o) {
                t[o.substr(0, 1)] = P(n)
            }), X("d", 0, "do", "day"), X("dd", 0, 0, function (n) {
                return this.localeData().weekdaysMin(this, n)
            }), X("ddd", 0, 0, function (n) {
                return this.localeData().weekdaysShort(this, n)
            }), X("dddd", 0, 0, function (n) {
                return this.localeData().weekdays(this, n)
            }), X("e", 0, 0, "weekday"), X("E", 0, 0, "isoWeekday"), I("day", "d"), I("weekday", "e"), I("isoWeekday", "E"), N("day", 11), N("weekday", 11), N("isoWeekday", 11), dn("d", Q), dn("e", Q), dn("E", Q), dn("dd", function (n, t) {
                return t.weekdaysMinRegex(n)
            }), dn("ddd", function (n, t) {
                return t.weekdaysShortRegex(n)
            }), dn("dddd", function (n, t) {
                return t.weekdaysRegex(n)
            }), hn(["dd", "ddd", "dddd"], function (n, t, e, o) {
                var l = e._locale.weekdaysParse(n, o, e._strict);
                null != l ? t.d = l : f(e).invalidWeekday = n
            }), hn(["d", "e", "E"], function (n, t, e, o) {
                t[o] = P(n)
            });
            var Gn = "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),
                qn = "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"), Zn = "Su_Mo_Tu_We_Th_Fr_Sa".split("_"), Qn = cn,
                Jn = cn, nt = cn;

            function tt() {
                function n(n, t) {
                    return t.length - n.length
                }

                var t, e, o, l, r, i = [], a = [], s = [], c = [];
                for (t = 0; t < 7; t++) e = p([2e3, 1]).day(t), o = this.weekdaysMin(e, ""), l = this.weekdaysShort(e, ""), r = this.weekdays(e, ""), i.push(o), a.push(l), s.push(r), c.push(o), c.push(l), c.push(r);
                for (i.sort(n), a.sort(n), s.sort(n), c.sort(n), t = 0; t < 7; t++) a[t] = pn(a[t]), s[t] = pn(s[t]), c[t] = pn(c[t]);
                this._weekdaysRegex = new RegExp("^(" + c.join("|") + ")", "i"), this._weekdaysShortRegex = this._weekdaysRegex, this._weekdaysMinRegex = this._weekdaysRegex, this._weekdaysStrictRegex = new RegExp("^(" + s.join("|") + ")", "i"), this._weekdaysShortStrictRegex = new RegExp("^(" + a.join("|") + ")", "i"), this._weekdaysMinStrictRegex = new RegExp("^(" + i.join("|") + ")", "i")
            }

            function et() {
                return this.hours() % 12 || 12
            }

            function ot(n, t) {
                X(n, 0, 0, function () {
                    return this.localeData().meridiem(this.hours(), this.minutes(), t)
                })
            }

            function lt(n, t) {
                return t._meridiemParse
            }

            X("H", ["HH", 2], 0, "hour"), X("h", ["hh", 2], 0, et), X("k", ["kk", 2], 0, function () {
                return this.hours() || 24
            }), X("hmm", 0, 0, function () {
                return "" + et.apply(this) + H(this.minutes(), 2)
            }), X("hmmss", 0, 0, function () {
                return "" + et.apply(this) + H(this.minutes(), 2) + H(this.seconds(), 2)
            }), X("Hmm", 0, 0, function () {
                return "" + this.hours() + H(this.minutes(), 2)
            }), X("Hmmss", 0, 0, function () {
                return "" + this.hours() + H(this.minutes(), 2) + H(this.seconds(), 2)
            }), ot("a", !0), ot("A", !1), I("hour", "h"), N("hour", 13), dn("a", lt), dn("A", lt), dn("H", Q), dn("h", Q), dn("k", Q), dn("HH", Q, W), dn("hh", Q, W), dn("kk", Q, W), dn("hmm", J), dn("hmmss", nn), dn("Hmm", J), dn("Hmmss", nn), mn(["H", "HH"], Mn), mn(["k", "kk"], function (n, t, e) {
                var o = P(n);
                t[Mn] = 24 === o ? 0 : o
            }), mn(["a", "A"], function (n, t, e) {
                e._isPm = e._locale.isPM(n), e._meridiem = n
            }), mn(["h", "hh"], function (n, t, e) {
                t[Mn] = P(n), f(e).bigHour = !0
            }), mn("hmm", function (n, t, e) {
                var o = n.length - 2;
                t[Mn] = P(n.substr(0, o)), t[vn] = P(n.substr(o)), f(e).bigHour = !0
            }), mn("hmmss", function (n, t, e) {
                var o = n.length - 4, l = n.length - 2;
                t[Mn] = P(n.substr(0, o)), t[vn] = P(n.substr(o, 2)), t[Pn] = P(n.substr(l)), f(e).bigHour = !0
            }), mn("Hmm", function (n, t, e) {
                var o = n.length - 2;
                t[Mn] = P(n.substr(0, o)), t[vn] = P(n.substr(o))
            }), mn("Hmmss", function (n, t, e) {
                var o = n.length - 4, l = n.length - 2;
                t[Mn] = P(n.substr(0, o)), t[vn] = P(n.substr(o, 2)), t[Pn] = P(n.substr(l))
            });
            var rt, it = Tn("Hours", !0), at = {
                calendar: {
                    sameDay: "[Today at] LT",
                    nextDay: "[Tomorrow at] LT",
                    nextWeek: "dddd [at] LT",
                    lastDay: "[Yesterday at] LT",
                    lastWeek: "[Last] dddd [at] LT",
                    sameElse: "L"
                },
                longDateFormat: {
                    LTS: "h:mm:ss A",
                    LT: "h:mm A",
                    L: "MM/DD/YYYY",
                    LL: "MMMM D, YYYY",
                    LLL: "MMMM D, YYYY h:mm A",
                    LLLL: "dddd, MMMM D, YYYY h:mm A"
                },
                invalidDate: "Invalid date",
                ordinal: "%d",
                dayOfMonthOrdinalParse: /\d{1,2}/,
                relativeTime: {
                    future: "in %s",
                    past: "%s ago",
                    s: "a few seconds",
                    ss: "%d seconds",
                    m: "a minute",
                    mm: "%d minutes",
                    h: "an hour",
                    hh: "%d hours",
                    d: "a day",
                    dd: "%d days",
                    M: "a month",
                    MM: "%d months",
                    y: "a year",
                    yy: "%d years"
                },
                months: zn,
                monthsShort: Rn,
                week: {dow: 0, doy: 6},
                weekdays: Gn,
                weekdaysMin: Zn,
                weekdaysShort: qn,
                meridiemParse: /[ap]\.?m?\.?/i
            }, st = {}, ct = {};

            function ut(n) {
                return n ? n.toLowerCase().replace("_", "-") : n
            }

            function dt(t) {
                var o = null;
                if (!st[t] && void 0 !== n && n && n.exports) try {
                    o = rt._abbr, e("RnhZ")("./" + t), gt(o)
                } catch (l) {
                }
                return st[t]
            }

            function gt(n, t) {
                var e;
                return n && ((e = a(t) ? ft(n) : pt(n, t)) ? rt = e : "undefined" != typeof console && console.warn && console.warn("Locale " + n + " not found. Did you forget to load it?")), rt._abbr
            }

            function pt(n, t) {
                if (null !== t) {
                    var e, o = at;
                    if (t.abbr = n, null != st[n]) k("defineLocaleOverride", "use moment.updateLocale(localeName, config) to change an existing locale. moment.defineLocale(localeName, config) should only be used for creating a new locale See http://momentjs.com/guides/#/warnings/define-locale/ for more info."), o = st[n]._config; else if (null != t.parentLocale) if (null != st[t.parentLocale]) o = st[t.parentLocale]._config; else {
                        if (null == (e = dt(t.parentLocale))) return ct[t.parentLocale] || (ct[t.parentLocale] = []), ct[t.parentLocale].push({
                            name: n,
                            config: t
                        }), null;
                        o = e._config
                    }
                    return st[n] = new D(T(o, t)), ct[n] && ct[n].forEach(function (n) {
                        pt(n.name, n.config)
                    }), gt(n), st[n]
                }
                return delete st[n], null
            }

            function ft(n) {
                var t;
                if (n && n._locale && n._locale._abbr && (n = n._locale._abbr), !n) return rt;
                if (!r(n)) {
                    if (t = dt(n)) return t;
                    n = [n]
                }
                return function (n) {
                    for (var t, e, o, l, r = 0; r < n.length;) {
                        for (t = (l = ut(n[r]).split("-")).length, e = (e = ut(n[r + 1])) ? e.split("-") : null; t > 0;) {
                            if (o = dt(l.slice(0, t).join("-"))) return o;
                            if (e && e.length >= t && y(l, e, !0) >= t - 1) break;
                            t--
                        }
                        r++
                    }
                    return rt
                }(n)
            }

            function mt(n) {
                var t, e = n._a;
                return e && -2 === f(n).overflow && (t = e[bn] < 0 || e[bn] > 11 ? bn : e[On] < 1 || e[On] > In(e[Cn], e[bn]) ? On : e[Mn] < 0 || e[Mn] > 24 || 24 === e[Mn] && (0 !== e[vn] || 0 !== e[Pn] || 0 !== e[yn]) ? Mn : e[vn] < 0 || e[vn] > 59 ? vn : e[Pn] < 0 || e[Pn] > 59 ? Pn : e[yn] < 0 || e[yn] > 999 ? yn : -1, f(n)._overflowDayOfYear && (t < Cn || t > On) && (t = On), f(n)._overflowWeeks && -1 === t && (t = wn), f(n)._overflowWeekday && -1 === t && (t = xn), f(n).overflow = t), n
            }

            function ht(n, t, e) {
                return null != n ? n : null != t ? t : e
            }

            function _t(n) {
                var t, e, o, r, i, a = [];
                if (!n._d) {
                    for (o = function (n) {
                        var t = new Date(l.now());
                        return n._useUTC ? [t.getUTCFullYear(), t.getUTCMonth(), t.getUTCDate()] : [t.getFullYear(), t.getMonth(), t.getDate()]
                    }(n), n._w && null == n._a[On] && null == n._a[bn] && function (n) {
                        var t, e, o, l, r, i, a, s;
                        if (null != (t = n._w).GG || null != t.W || null != t.E) r = 1, i = 4, e = ht(t.GG, n._a[Cn], Bn(Dt(), 1, 4).year), o = ht(t.W, 1), ((l = ht(t.E, 1)) < 1 || l > 7) && (s = !0); else {
                            r = n._locale._week.dow, i = n._locale._week.doy;
                            var c = Bn(Dt(), r, i);
                            e = ht(t.gg, n._a[Cn], c.year), o = ht(t.w, c.week), null != t.d ? ((l = t.d) < 0 || l > 6) && (s = !0) : null != t.e ? (l = t.e + r, (t.e < 0 || t.e > 6) && (s = !0)) : l = r
                        }
                        o < 1 || o > $n(e, r, i) ? f(n)._overflowWeeks = !0 : null != s ? f(n)._overflowWeekday = !0 : (a = Vn(e, o, l, r, i), n._a[Cn] = a.year, n._dayOfYear = a.dayOfYear)
                    }(n), null != n._dayOfYear && (i = ht(n._a[Cn], o[Cn]), (n._dayOfYear > En(i) || 0 === n._dayOfYear) && (f(n)._overflowDayOfYear = !0), e = jn(i, 0, n._dayOfYear), n._a[bn] = e.getUTCMonth(), n._a[On] = e.getUTCDate()), t = 0; t < 3 && null == n._a[t]; ++t) n._a[t] = a[t] = o[t];
                    for (; t < 7; t++) n._a[t] = a[t] = null == n._a[t] ? 2 === t ? 1 : 0 : n._a[t];
                    24 === n._a[Mn] && 0 === n._a[vn] && 0 === n._a[Pn] && 0 === n._a[yn] && (n._nextDay = !0, n._a[Mn] = 0), n._d = (n._useUTC ? jn : function (n, t, e, o, l, r, i) {
                        var a;
                        return n < 100 && n >= 0 ? (a = new Date(n + 400, t, e, o, l, r, i), isFinite(a.getFullYear()) && a.setFullYear(n)) : a = new Date(n, t, e, o, l, r, i), a
                    }).apply(null, a), r = n._useUTC ? n._d.getUTCDay() : n._d.getDay(), null != n._tzm && n._d.setUTCMinutes(n._d.getUTCMinutes() - n._tzm), n._nextDay && (n._a[Mn] = 24), n._w && void 0 !== n._w.d && n._w.d !== r && (f(n).weekdayMismatch = !0)
                }
            }

            var Ct = /^\s*((?:[+-]\d{6}|\d{4})-(?:\d\d-\d\d|W\d\d-\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?::\d\d(?::\d\d(?:[.,]\d+)?)?)?)([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?$/,
                bt = /^\s*((?:[+-]\d{6}|\d{4})(?:\d\d\d\d|W\d\d\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?:\d\d(?:\d\d(?:[.,]\d+)?)?)?)([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?$/,
                Ot = /Z|[+-]\d\d(?::?\d\d)?/,
                Mt = [["YYYYYY-MM-DD", /[+-]\d{6}-\d\d-\d\d/], ["YYYY-MM-DD", /\d{4}-\d\d-\d\d/], ["GGGG-[W]WW-E", /\d{4}-W\d\d-\d/], ["GGGG-[W]WW", /\d{4}-W\d\d/, !1], ["YYYY-DDD", /\d{4}-\d{3}/], ["YYYY-MM", /\d{4}-\d\d/, !1], ["YYYYYYMMDD", /[+-]\d{10}/], ["YYYYMMDD", /\d{8}/], ["GGGG[W]WWE", /\d{4}W\d{3}/], ["GGGG[W]WW", /\d{4}W\d{2}/, !1], ["YYYYDDD", /\d{7}/]],
                vt = [["HH:mm:ss.SSSS", /\d\d:\d\d:\d\d\.\d+/], ["HH:mm:ss,SSSS", /\d\d:\d\d:\d\d,\d+/], ["HH:mm:ss", /\d\d:\d\d:\d\d/], ["HH:mm", /\d\d:\d\d/], ["HHmmss.SSSS", /\d\d\d\d\d\d\.\d+/], ["HHmmss,SSSS", /\d\d\d\d\d\d,\d+/], ["HHmmss", /\d\d\d\d\d\d/], ["HHmm", /\d\d\d\d/], ["HH", /\d\d/]],
                Pt = /^\/?Date\((\-?\d+)/i;

            function yt(n) {
                var t, e, o, l, r, i, a = n._i, s = Ct.exec(a) || bt.exec(a);
                if (s) {
                    for (f(n).iso = !0, t = 0, e = Mt.length; t < e; t++) if (Mt[t][1].exec(s[1])) {
                        l = Mt[t][0], o = !1 !== Mt[t][2];
                        break
                    }
                    if (null == l) return void (n._isValid = !1);
                    if (s[3]) {
                        for (t = 0, e = vt.length; t < e; t++) if (vt[t][1].exec(s[3])) {
                            r = (s[2] || " ") + vt[t][0];
                            break
                        }
                        if (null == r) return void (n._isValid = !1)
                    }
                    if (!o && null != r) return void (n._isValid = !1);
                    if (s[4]) {
                        if (!Ot.exec(s[4])) return void (n._isValid = !1);
                        i = "Z"
                    }
                    n._f = l + (r || "") + (i || ""), kt(n)
                } else n._isValid = !1
            }

            var wt = /^(?:(Mon|Tue|Wed|Thu|Fri|Sat|Sun),?\s)?(\d{1,2})\s(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s(\d{2,4})\s(\d\d):(\d\d)(?::(\d\d))?\s(?:(UT|GMT|[ECMP][SD]T)|([Zz])|([+-]\d{4}))$/;

            function xt(n) {
                var t = parseInt(n, 10);
                return t <= 49 ? 2e3 + t : t <= 999 ? 1900 + t : t
            }

            var Et = {
                UT: 0,
                GMT: 0,
                EDT: -240,
                EST: -300,
                CDT: -300,
                CST: -360,
                MDT: -360,
                MST: -420,
                PDT: -420,
                PST: -480
            };

            function St(n) {
                var t, e, o, l, r, i,
                    a = wt.exec(n._i.replace(/\([^)]*\)|[\n\t]/g, " ").replace(/(\s\s+)/g, " ").replace(/^\s\s*/, "").replace(/\s\s*$/, ""));
                if (a) {
                    var s = (t = a[3], e = a[2], o = a[5], l = a[6], r = a[7], i = [xt(a[4]), Rn.indexOf(t), parseInt(e, 10), parseInt(o, 10), parseInt(l, 10)], r && i.push(parseInt(r, 10)), i);
                    if (!function (n, t, e) {
                        return !n || qn.indexOf(n) === new Date(t[0], t[1], t[2]).getDay() || (f(e).weekdayMismatch = !0, e._isValid = !1, !1)
                    }(a[1], s, n)) return;
                    n._a = s, n._tzm = function (n, t, e) {
                        if (n) return Et[n];
                        if (a[9]) return 0;
                        var o = parseInt(a[10], 10), l = o % 100;
                        return (o - l) / 100 * 60 + l
                    }(a[8]), n._d = jn.apply(null, n._a), n._d.setUTCMinutes(n._d.getUTCMinutes() - n._tzm), f(n).rfc2822 = !0
                } else n._isValid = !1
            }

            function kt(n) {
                if (n._f !== l.ISO_8601) if (n._f !== l.RFC_2822) {
                    n._a = [], f(n).empty = !0;
                    var t, e, o, r, i, a = "" + n._i, s = a.length, c = 0;
                    for (o = B(n._f, n._locale).match(F) || [], t = 0; t < o.length; t++) (e = (a.match(gn(r = o[t], n)) || [])[0]) && ((i = a.substr(0, a.indexOf(e))).length > 0 && f(n).unusedInput.push(i), a = a.slice(a.indexOf(e) + e.length), c += e.length), j[r] ? (e ? f(n).empty = !1 : f(n).unusedTokens.push(r), _n(r, e, n)) : n._strict && !e && f(n).unusedTokens.push(r);
                    f(n).charsLeftOver = s - c, a.length > 0 && f(n).unusedInput.push(a), n._a[Mn] <= 12 && !0 === f(n).bigHour && n._a[Mn] > 0 && (f(n).bigHour = void 0), f(n).parsedDateParts = n._a.slice(0), f(n).meridiem = n._meridiem, n._a[Mn] = (u = n._locale, d = n._a[Mn], null == (g = n._meridiem) ? d : null != u.meridiemHour ? u.meridiemHour(d, g) : null != u.isPM ? ((p = u.isPM(g)) && d < 12 && (d += 12), p || 12 !== d || (d = 0), d) : d), _t(n), mt(n)
                } else St(n); else yt(n);
                var u, d, g, p
            }

            function Lt(n) {
                var t = n._i, e = n._f;
                return n._locale = n._locale || ft(n._l), null === t || void 0 === e && "" === t ? h({nullInput: !0}) : ("string" == typeof t && (n._i = t = n._locale.preparse(t)), M(t) ? new O(mt(t)) : (c(t) ? n._d = t : r(e) ? function (n) {
                    var t, e, o, l, r;
                    if (0 === n._f.length) return f(n).invalidFormat = !0, void (n._d = new Date(NaN));
                    for (l = 0; l < n._f.length; l++) r = 0, t = C({}, n), null != n._useUTC && (t._useUTC = n._useUTC), t._f = n._f[l], kt(t), m(t) && (r += f(t).charsLeftOver, r += 10 * f(t).unusedTokens.length, f(t).score = r, (null == o || r < o) && (o = r, e = t));
                    g(n, e || t)
                }(n) : e ? kt(n) : function (n) {
                    var t = n._i;
                    a(t) ? n._d = new Date(l.now()) : c(t) ? n._d = new Date(t.valueOf()) : "string" == typeof t ? function (n) {
                        var t = Pt.exec(n._i);
                        null === t ? (yt(n), !1 === n._isValid && (delete n._isValid, St(n), !1 === n._isValid && (delete n._isValid, l.createFromInputFallback(n)))) : n._d = new Date(+t[1])
                    }(n) : r(t) ? (n._a = u(t.slice(0), function (n) {
                        return parseInt(n, 10)
                    }), _t(n)) : i(t) ? function (n) {
                        if (!n._d) {
                            var t = z(n._i);
                            n._a = u([t.year, t.month, t.day || t.date, t.hour, t.minute, t.second, t.millisecond], function (n) {
                                return n && parseInt(n, 10)
                            }), _t(n)
                        }
                    }(n) : s(t) ? n._d = new Date(t) : l.createFromInputFallback(n)
                }(n), m(n) || (n._d = null), n))
            }

            function Tt(n, t, e, o, l) {
                var a, s = {};
                return !0 !== e && !1 !== e || (o = e, e = void 0), (i(n) && function (n) {
                    if (Object.getOwnPropertyNames) return 0 === Object.getOwnPropertyNames(n).length;
                    var t;
                    for (t in n) if (n.hasOwnProperty(t)) return !1;
                    return !0
                }(n) || r(n) && 0 === n.length) && (n = void 0), s._isAMomentObject = !0, s._useUTC = s._isUTC = l, s._l = e, s._i = n, s._f = t, s._strict = o, (a = new O(mt(Lt(s))))._nextDay && (a.add(1, "d"), a._nextDay = void 0), a
            }

            function Dt(n, t, e, o) {
                return Tt(n, t, e, o, !1)
            }

            l.createFromInputFallback = x("value provided is not in a recognized RFC2822 or ISO format. moment construction falls back to js Date(), which is not reliable across all browsers and versions. Non RFC2822/ISO date formats are discouraged and will be removed in an upcoming major release. Please refer to http://momentjs.com/guides/#/warnings/js-date/ for more info.", function (n) {
                n._d = new Date(n._i + (n._useUTC ? " UTC" : ""))
            }), l.ISO_8601 = function () {
            }, l.RFC_2822 = function () {
            };
            var Yt = x("moment().min is deprecated, use moment.max instead. http://momentjs.com/guides/#/warnings/min-max/", function () {
                    var n = Dt.apply(null, arguments);
                    return this.isValid() && n.isValid() ? n < this ? this : n : h()
                }),
                It = x("moment().max is deprecated, use moment.min instead. http://momentjs.com/guides/#/warnings/min-max/", function () {
                    var n = Dt.apply(null, arguments);
                    return this.isValid() && n.isValid() ? n > this ? this : n : h()
                });

            function At(n, t) {
                var e, o;
                if (1 === t.length && r(t[0]) && (t = t[0]), !t.length) return Dt();
                for (e = t[0], o = 1; o < t.length; ++o) t[o].isValid() && !t[o][n](e) || (e = t[o]);
                return e
            }

            var zt = ["year", "quarter", "month", "week", "day", "hour", "minute", "second", "millisecond"];

            function Rt(n) {
                var t = z(n), e = t.year || 0, o = t.quarter || 0, l = t.month || 0, r = t.week || t.isoWeek || 0,
                    i = t.day || 0, a = t.hour || 0, s = t.minute || 0, c = t.second || 0, u = t.millisecond || 0;
                this._isValid = function (n) {
                    for (var t in n) if (-1 === kn.call(zt, t) || null != n[t] && isNaN(n[t])) return !1;
                    for (var e = !1, o = 0; o < zt.length; ++o) if (n[zt[o]]) {
                        if (e) return !1;
                        parseFloat(n[zt[o]]) !== P(n[zt[o]]) && (e = !0)
                    }
                    return !0
                }(t), this._milliseconds = +u + 1e3 * c + 6e4 * s + 1e3 * a * 60 * 60, this._days = +i + 7 * r, this._months = +l + 3 * o + 12 * e, this._data = {}, this._locale = ft(), this._bubble()
            }

            function Nt(n) {
                return n instanceof Rt
            }

            function Ht(n) {
                return n < 0 ? -1 * Math.round(-1 * n) : Math.round(n)
            }

            function Ft(n, t) {
                X(n, 0, 0, function () {
                    var n = this.utcOffset(), e = "+";
                    return n < 0 && (n = -n, e = "-"), e + H(~~(n / 60), 2) + t + H(~~n % 60, 2)
                })
            }

            Ft("Z", ":"), Ft("ZZ", ""), dn("Z", sn), dn("ZZ", sn), mn(["Z", "ZZ"], function (n, t, e) {
                e._useUTC = !0, e._tzm = Kt(sn, n)
            });
            var Ut = /([\+\-]|\d\d)/gi;

            function Kt(n, t) {
                var e = (t || "").match(n);
                if (null === e) return null;
                var o = ((e[e.length - 1] || []) + "").match(Ut) || ["-", 0, 0], l = 60 * o[1] + P(o[2]);
                return 0 === l ? 0 : "+" === o[0] ? l : -l
            }

            function jt(n, t) {
                var e, o;
                return t._isUTC ? (e = t.clone(), o = (M(n) || c(n) ? n.valueOf() : Dt(n).valueOf()) - e.valueOf(), e._d.setTime(e._d.valueOf() + o), l.updateOffset(e, !1), e) : Dt(n).local()
            }

            function Xt(n) {
                return 15 * -Math.round(n._d.getTimezoneOffset() / 15)
            }

            function Vt() {
                return !!this.isValid() && this._isUTC && 0 === this._offset
            }

            l.updateOffset = function () {
            };
            var Bt = /^(\-|\+)?(?:(\d*)[. ])?(\d+)\:(\d+)(?:\:(\d+)(\.\d*)?)?$/,
                $t = /^(-|\+)?P(?:([-+]?[0-9,.]*)Y)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)W)?(?:([-+]?[0-9,.]*)D)?(?:T(?:([-+]?[0-9,.]*)H)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)S)?)?$/;

            function Wt(n, t) {
                var e, o, l, r, i, a, c = n, u = null;
                return Nt(n) ? c = {
                    ms: n._milliseconds,
                    d: n._days,
                    M: n._months
                } : s(n) ? (c = {}, t ? c[t] = n : c.milliseconds = n) : (u = Bt.exec(n)) ? (e = "-" === u[1] ? -1 : 1, c = {
                    y: 0,
                    d: P(u[On]) * e,
                    h: P(u[Mn]) * e,
                    m: P(u[vn]) * e,
                    s: P(u[Pn]) * e,
                    ms: P(Ht(1e3 * u[yn])) * e
                }) : (u = $t.exec(n)) ? c = {
                    y: Gt(u[2], e = "-" === u[1] ? -1 : 1),
                    M: Gt(u[3], e),
                    w: Gt(u[4], e),
                    d: Gt(u[5], e),
                    h: Gt(u[6], e),
                    m: Gt(u[7], e),
                    s: Gt(u[8], e)
                } : null == c ? c = {} : "object" == typeof c && ("from" in c || "to" in c) && (r = Dt(c.from), i = Dt(c.to), l = r.isValid() && i.isValid() ? (i = jt(i, r), r.isBefore(i) ? a = qt(r, i) : ((a = qt(i, r)).milliseconds = -a.milliseconds, a.months = -a.months), a) : {
                    milliseconds: 0,
                    months: 0
                }, (c = {}).ms = l.milliseconds, c.M = l.months), o = new Rt(c), Nt(n) && d(n, "_locale") && (o._locale = n._locale), o
            }

            function Gt(n, t) {
                var e = n && parseFloat(n.replace(",", "."));
                return (isNaN(e) ? 0 : e) * t
            }

            function qt(n, t) {
                var e = {};
                return e.months = t.month() - n.month() + 12 * (t.year() - n.year()), n.clone().add(e.months, "M").isAfter(t) && --e.months, e.milliseconds = +t - +n.clone().add(e.months, "M"), e
            }

            function Zt(n, t) {
                return function (e, o) {
                    var l;
                    return null === o || isNaN(+o) || (k(t, "moment()." + t + "(period, number) is deprecated. Please use moment()." + t + "(number, period). See http://momentjs.com/guides/#/warnings/add-inverted-param/ for more info."), l = e, e = o, o = l), Qt(this, Wt(e = "string" == typeof e ? +e : e, o), n), this
                }
            }

            function Qt(n, t, e, o) {
                var r = t._milliseconds, i = Ht(t._days), a = Ht(t._months);
                n.isValid() && (o = null == o || o, a && Nn(n, Dn(n, "Month") + a * e), i && Yn(n, "Date", Dn(n, "Date") + i * e), r && n._d.setTime(n._d.valueOf() + r * e), o && l.updateOffset(n, i || a))
            }

            Wt.fn = Rt.prototype, Wt.invalid = function () {
                return Wt(NaN)
            };
            var Jt = Zt(1, "add"), ne = Zt(-1, "subtract");

            function te(n, t) {
                var e = 12 * (t.year() - n.year()) + (t.month() - n.month()), o = n.clone().add(e, "months");
                return -(e + (t - o < 0 ? (t - o) / (o - n.clone().add(e - 1, "months")) : (t - o) / (n.clone().add(e + 1, "months") - o))) || 0
            }

            function ee(n) {
                var t;
                return void 0 === n ? this._locale._abbr : (null != (t = ft(n)) && (this._locale = t), this)
            }

            l.defaultFormat = "YYYY-MM-DDTHH:mm:ssZ", l.defaultFormatUtc = "YYYY-MM-DDTHH:mm:ss[Z]";
            var oe = x("moment().lang() is deprecated. Instead, use moment().localeData() to get the language configuration. Use moment().locale() to change languages.", function (n) {
                return void 0 === n ? this.localeData() : this.locale(n)
            });

            function le() {
                return this._locale
            }

            var re = 126227808e5;

            function ie(n, t) {
                return (n % t + t) % t
            }

            function ae(n, t, e) {
                return n < 100 && n >= 0 ? new Date(n + 400, t, e) - re : new Date(n, t, e).valueOf()
            }

            function se(n, t, e) {
                return n < 100 && n >= 0 ? Date.UTC(n + 400, t, e) - re : Date.UTC(n, t, e)
            }

            function ce(n, t) {
                X(0, [n, n.length], 0, t)
            }

            function ue(n, t, e, o, l) {
                var r;
                return null == n ? Bn(this, o, l).year : (t > (r = $n(n, o, l)) && (t = r), (function (n, t, e, o, l) {
                    var r = Vn(n, t, e, o, l), i = jn(r.year, 0, r.dayOfYear);
                    return this.year(i.getUTCFullYear()), this.month(i.getUTCMonth()), this.date(i.getUTCDate()), this
                }).call(this, n, t, e, o, l))
            }

            X(0, ["gg", 2], 0, function () {
                return this.weekYear() % 100
            }), X(0, ["GG", 2], 0, function () {
                return this.isoWeekYear() % 100
            }), ce("gggg", "weekYear"), ce("ggggg", "weekYear"), ce("GGGG", "isoWeekYear"), ce("GGGGG", "isoWeekYear"), I("weekYear", "gg"), I("isoWeekYear", "GG"), N("weekYear", 1), N("isoWeekYear", 1), dn("G", rn), dn("g", rn), dn("GG", Q, W), dn("gg", Q, W), dn("GGGG", en, q), dn("gggg", en, q), dn("GGGGG", on, Z), dn("ggggg", on, Z), hn(["gggg", "ggggg", "GGGG", "GGGGG"], function (n, t, e, o) {
                t[o.substr(0, 2)] = P(n)
            }), hn(["gg", "GG"], function (n, t, e, o) {
                t[o] = l.parseTwoDigitYear(n)
            }), X("Q", 0, "Qo", "quarter"), I("quarter", "Q"), N("quarter", 7), dn("Q", $), mn("Q", function (n, t) {
                t[bn] = 3 * (P(n) - 1)
            }), X("D", ["DD", 2], "Do", "date"), I("date", "D"), N("date", 9), dn("D", Q), dn("DD", Q, W), dn("Do", function (n, t) {
                return n ? t._dayOfMonthOrdinalParse || t._ordinalParse : t._dayOfMonthOrdinalParseLenient
            }), mn(["D", "DD"], On), mn("Do", function (n, t) {
                t[On] = P(n.match(Q)[0])
            });
            var de = Tn("Date", !0);
            X("DDD", ["DDDD", 3], "DDDo", "dayOfYear"), I("dayOfYear", "DDD"), N("dayOfYear", 4), dn("DDD", tn), dn("DDDD", G), mn(["DDD", "DDDD"], function (n, t, e) {
                e._dayOfYear = P(n)
            }), X("m", ["mm", 2], 0, "minute"), I("minute", "m"), N("minute", 14), dn("m", Q), dn("mm", Q, W), mn(["m", "mm"], vn);
            var ge = Tn("Minutes", !1);
            X("s", ["ss", 2], 0, "second"), I("second", "s"), N("second", 15), dn("s", Q), dn("ss", Q, W), mn(["s", "ss"], Pn);
            var pe, fe = Tn("Seconds", !1);
            for (X("S", 0, 0, function () {
                return ~~(this.millisecond() / 100)
            }), X(0, ["SS", 2], 0, function () {
                return ~~(this.millisecond() / 10)
            }), X(0, ["SSS", 3], 0, "millisecond"), X(0, ["SSSS", 4], 0, function () {
                return 10 * this.millisecond()
            }), X(0, ["SSSSS", 5], 0, function () {
                return 100 * this.millisecond()
            }), X(0, ["SSSSSS", 6], 0, function () {
                return 1e3 * this.millisecond()
            }), X(0, ["SSSSSSS", 7], 0, function () {
                return 1e4 * this.millisecond()
            }), X(0, ["SSSSSSSS", 8], 0, function () {
                return 1e5 * this.millisecond()
            }), X(0, ["SSSSSSSSS", 9], 0, function () {
                return 1e6 * this.millisecond()
            }), I("millisecond", "ms"), N("millisecond", 16), dn("S", tn, $), dn("SS", tn, W), dn("SSS", tn, G), pe = "SSSS"; pe.length <= 9; pe += "S") dn(pe, ln);

            function me(n, t) {
                t[yn] = P(1e3 * ("0." + n))
            }

            for (pe = "S"; pe.length <= 9; pe += "S") mn(pe, me);
            var he = Tn("Milliseconds", !1);
            X("z", 0, 0, "zoneAbbr"), X("zz", 0, 0, "zoneName");
            var _e = O.prototype;

            function Ce(n) {
                return n
            }

            _e.add = Jt, _e.calendar = function (n, t) {
                var e = n || Dt(), o = jt(e, this).startOf("day"), r = l.calendarFormat(this, o) || "sameElse",
                    i = t && (L(t[r]) ? t[r].call(this, e) : t[r]);
                return this.format(i || this.localeData().calendar(r, this, Dt(e)))
            }, _e.clone = function () {
                return new O(this)
            }, _e.diff = function (n, t, e) {
                var o, l, r;
                if (!this.isValid()) return NaN;
                if (!(o = jt(n, this)).isValid()) return NaN;
                switch (l = 6e4 * (o.utcOffset() - this.utcOffset()), t = A(t)) {
                    case"year":
                        r = te(this, o) / 12;
                        break;
                    case"month":
                        r = te(this, o);
                        break;
                    case"quarter":
                        r = te(this, o) / 3;
                        break;
                    case"second":
                        r = (this - o) / 1e3;
                        break;
                    case"minute":
                        r = (this - o) / 6e4;
                        break;
                    case"hour":
                        r = (this - o) / 36e5;
                        break;
                    case"day":
                        r = (this - o - l) / 864e5;
                        break;
                    case"week":
                        r = (this - o - l) / 6048e5;
                        break;
                    default:
                        r = this - o
                }
                return e ? r : v(r)
            }, _e.endOf = function (n) {
                var t;
                if (void 0 === (n = A(n)) || "millisecond" === n || !this.isValid()) return this;
                var e = this._isUTC ? se : ae;
                switch (n) {
                    case"year":
                        t = e(this.year() + 1, 0, 1) - 1;
                        break;
                    case"quarter":
                        t = e(this.year(), this.month() - this.month() % 3 + 3, 1) - 1;
                        break;
                    case"month":
                        t = e(this.year(), this.month() + 1, 1) - 1;
                        break;
                    case"week":
                        t = e(this.year(), this.month(), this.date() - this.weekday() + 7) - 1;
                        break;
                    case"isoWeek":
                        t = e(this.year(), this.month(), this.date() - (this.isoWeekday() - 1) + 7) - 1;
                        break;
                    case"day":
                    case"date":
                        t = e(this.year(), this.month(), this.date() + 1) - 1;
                        break;
                    case"hour":
                        t = this._d.valueOf(), t += 36e5 - ie(t + (this._isUTC ? 0 : 6e4 * this.utcOffset()), 36e5) - 1;
                        break;
                    case"minute":
                        t = this._d.valueOf(), t += 6e4 - ie(t, 6e4) - 1;
                        break;
                    case"second":
                        t = this._d.valueOf(), t += 1e3 - ie(t, 1e3) - 1
                }
                return this._d.setTime(t), l.updateOffset(this, !0), this
            }, _e.format = function (n) {
                n || (n = this.isUtc() ? l.defaultFormatUtc : l.defaultFormat);
                var t = V(this, n);
                return this.localeData().postformat(t)
            }, _e.from = function (n, t) {
                return this.isValid() && (M(n) && n.isValid() || Dt(n).isValid()) ? Wt({
                    to: this,
                    from: n
                }).locale(this.locale()).humanize(!t) : this.localeData().invalidDate()
            }, _e.fromNow = function (n) {
                return this.from(Dt(), n)
            }, _e.to = function (n, t) {
                return this.isValid() && (M(n) && n.isValid() || Dt(n).isValid()) ? Wt({
                    from: this,
                    to: n
                }).locale(this.locale()).humanize(!t) : this.localeData().invalidDate()
            }, _e.toNow = function (n) {
                return this.to(Dt(), n)
            }, _e.get = function (n) {
                return L(this[n = A(n)]) ? this[n]() : this
            }, _e.invalidAt = function () {
                return f(this).overflow
            }, _e.isAfter = function (n, t) {
                var e = M(n) ? n : Dt(n);
                return !(!this.isValid() || !e.isValid()) && ("millisecond" === (t = A(t) || "millisecond") ? this.valueOf() > e.valueOf() : e.valueOf() < this.clone().startOf(t).valueOf())
            }, _e.isBefore = function (n, t) {
                var e = M(n) ? n : Dt(n);
                return !(!this.isValid() || !e.isValid()) && ("millisecond" === (t = A(t) || "millisecond") ? this.valueOf() < e.valueOf() : this.clone().endOf(t).valueOf() < e.valueOf())
            }, _e.isBetween = function (n, t, e, o) {
                var l = M(n) ? n : Dt(n), r = M(t) ? t : Dt(t);
                return !!(this.isValid() && l.isValid() && r.isValid()) && ("(" === (o = o || "()")[0] ? this.isAfter(l, e) : !this.isBefore(l, e)) && (")" === o[1] ? this.isBefore(r, e) : !this.isAfter(r, e))
            }, _e.isSame = function (n, t) {
                var e, o = M(n) ? n : Dt(n);
                return !(!this.isValid() || !o.isValid()) && ("millisecond" === (t = A(t) || "millisecond") ? this.valueOf() === o.valueOf() : (e = o.valueOf(), this.clone().startOf(t).valueOf() <= e && e <= this.clone().endOf(t).valueOf()))
            }, _e.isSameOrAfter = function (n, t) {
                return this.isSame(n, t) || this.isAfter(n, t)
            }, _e.isSameOrBefore = function (n, t) {
                return this.isSame(n, t) || this.isBefore(n, t)
            }, _e.isValid = function () {
                return m(this)
            }, _e.lang = oe, _e.locale = ee, _e.localeData = le, _e.max = It, _e.min = Yt, _e.parsingFlags = function () {
                return g({}, f(this))
            }, _e.set = function (n, t) {
                if ("object" == typeof n) for (var e = function (n) {
                    var t = [];
                    for (var e in n) t.push({unit: e, priority: R[e]});
                    return t.sort(function (n, t) {
                        return n.priority - t.priority
                    }), t
                }(n = z(n)), o = 0; o < e.length; o++) this[e[o].unit](n[e[o].unit]); else if (L(this[n = A(n)])) return this[n](t);
                return this
            }, _e.startOf = function (n) {
                var t;
                if (void 0 === (n = A(n)) || "millisecond" === n || !this.isValid()) return this;
                var e = this._isUTC ? se : ae;
                switch (n) {
                    case"year":
                        t = e(this.year(), 0, 1);
                        break;
                    case"quarter":
                        t = e(this.year(), this.month() - this.month() % 3, 1);
                        break;
                    case"month":
                        t = e(this.year(), this.month(), 1);
                        break;
                    case"week":
                        t = e(this.year(), this.month(), this.date() - this.weekday());
                        break;
                    case"isoWeek":
                        t = e(this.year(), this.month(), this.date() - (this.isoWeekday() - 1));
                        break;
                    case"day":
                    case"date":
                        t = e(this.year(), this.month(), this.date());
                        break;
                    case"hour":
                        t = this._d.valueOf(), t -= ie(t + (this._isUTC ? 0 : 6e4 * this.utcOffset()), 36e5);
                        break;
                    case"minute":
                        t = this._d.valueOf(), t -= ie(t, 6e4);
                        break;
                    case"second":
                        t = this._d.valueOf(), t -= ie(t, 1e3)
                }
                return this._d.setTime(t), l.updateOffset(this, !0), this
            }, _e.subtract = ne, _e.toArray = function () {
                var n = this;
                return [n.year(), n.month(), n.date(), n.hour(), n.minute(), n.second(), n.millisecond()]
            }, _e.toObject = function () {
                var n = this;
                return {
                    years: n.year(),
                    months: n.month(),
                    date: n.date(),
                    hours: n.hours(),
                    minutes: n.minutes(),
                    seconds: n.seconds(),
                    milliseconds: n.milliseconds()
                }
            }, _e.toDate = function () {
                return new Date(this.valueOf())
            }, _e.toISOString = function (n) {
                if (!this.isValid()) return null;
                var t = !0 !== n, e = t ? this.clone().utc() : this;
                return e.year() < 0 || e.year() > 9999 ? V(e, t ? "YYYYYY-MM-DD[T]HH:mm:ss.SSS[Z]" : "YYYYYY-MM-DD[T]HH:mm:ss.SSSZ") : L(Date.prototype.toISOString) ? t ? this.toDate().toISOString() : new Date(this.valueOf() + 60 * this.utcOffset() * 1e3).toISOString().replace("Z", V(e, "Z")) : V(e, t ? "YYYY-MM-DD[T]HH:mm:ss.SSS[Z]" : "YYYY-MM-DD[T]HH:mm:ss.SSSZ")
            }, _e.inspect = function () {
                if (!this.isValid()) return "moment.invalid(/* " + this._i + " */)";
                var n = "moment", t = "";
                this.isLocal() || (n = 0 === this.utcOffset() ? "moment.utc" : "moment.parseZone", t = "Z");
                var e = "[" + n + '("]', o = 0 <= this.year() && this.year() <= 9999 ? "YYYY" : "YYYYYY";
                return this.format(e + o + "-MM-DD[T]HH:mm:ss.SSS" + t + '[")]')
            }, _e.toJSON = function () {
                return this.isValid() ? this.toISOString() : null
            }, _e.toString = function () {
                return this.clone().locale("en").format("ddd MMM DD YYYY HH:mm:ss [GMT]ZZ")
            }, _e.unix = function () {
                return Math.floor(this.valueOf() / 1e3)
            }, _e.valueOf = function () {
                return this._d.valueOf() - 6e4 * (this._offset || 0)
            }, _e.creationData = function () {
                return {
                    input: this._i,
                    format: this._f,
                    locale: this._locale,
                    isUTC: this._isUTC,
                    strict: this._strict
                }
            }, _e.year = Ln, _e.isLeapYear = function () {
                return Sn(this.year())
            }, _e.weekYear = function (n) {
                return ue.call(this, n, this.week(), this.weekday(), this.localeData()._week.dow, this.localeData()._week.doy)
            }, _e.isoWeekYear = function (n) {
                return ue.call(this, n, this.isoWeek(), this.isoWeekday(), 1, 4)
            }, _e.quarter = _e.quarters = function (n) {
                return null == n ? Math.ceil((this.month() + 1) / 3) : this.month(3 * (n - 1) + this.month() % 3)
            }, _e.month = Hn, _e.daysInMonth = function () {
                return In(this.year(), this.month())
            }, _e.week = _e.weeks = function (n) {
                var t = this.localeData().week(this);
                return null == n ? t : this.add(7 * (n - t), "d")
            }, _e.isoWeek = _e.isoWeeks = function (n) {
                var t = Bn(this, 1, 4).week;
                return null == n ? t : this.add(7 * (n - t), "d")
            }, _e.weeksInYear = function () {
                var n = this.localeData()._week;
                return $n(this.year(), n.dow, n.doy)
            }, _e.isoWeeksInYear = function () {
                return $n(this.year(), 1, 4)
            }, _e.date = de, _e.day = _e.days = function (n) {
                if (!this.isValid()) return null != n ? this : NaN;
                var t = this._isUTC ? this._d.getUTCDay() : this._d.getDay();
                return null != n ? (n = function (n, t) {
                    return "string" != typeof n ? n : isNaN(n) ? "number" == typeof (n = t.weekdaysParse(n)) ? n : null : parseInt(n, 10)
                }(n, this.localeData()), this.add(n - t, "d")) : t
            }, _e.weekday = function (n) {
                if (!this.isValid()) return null != n ? this : NaN;
                var t = (this.day() + 7 - this.localeData()._week.dow) % 7;
                return null == n ? t : this.add(n - t, "d")
            }, _e.isoWeekday = function (n) {
                if (!this.isValid()) return null != n ? this : NaN;
                if (null != n) {
                    var t = function (n, t) {
                        return "string" == typeof n ? t.weekdaysParse(n) % 7 || 7 : isNaN(n) ? null : n
                    }(n, this.localeData());
                    return this.day(this.day() % 7 ? t : t - 7)
                }
                return this.day() || 7
            }, _e.dayOfYear = function (n) {
                var t = Math.round((this.clone().startOf("day") - this.clone().startOf("year")) / 864e5) + 1;
                return null == n ? t : this.add(n - t, "d")
            }, _e.hour = _e.hours = it, _e.minute = _e.minutes = ge, _e.second = _e.seconds = fe, _e.millisecond = _e.milliseconds = he, _e.utcOffset = function (n, t, e) {
                var o, r = this._offset || 0;
                if (!this.isValid()) return null != n ? this : NaN;
                if (null != n) {
                    if ("string" == typeof n) {
                        if (null === (n = Kt(sn, n))) return this
                    } else Math.abs(n) < 16 && !e && (n *= 60);
                    return !this._isUTC && t && (o = Xt(this)), this._offset = n, this._isUTC = !0, null != o && this.add(o, "m"), r !== n && (!t || this._changeInProgress ? Qt(this, Wt(n - r, "m"), 1, !1) : this._changeInProgress || (this._changeInProgress = !0, l.updateOffset(this, !0), this._changeInProgress = null)), this
                }
                return this._isUTC ? r : Xt(this)
            }, _e.utc = function (n) {
                return this.utcOffset(0, n)
            }, _e.local = function (n) {
                return this._isUTC && (this.utcOffset(0, n), this._isUTC = !1, n && this.subtract(Xt(this), "m")), this
            }, _e.parseZone = function () {
                if (null != this._tzm) this.utcOffset(this._tzm, !1, !0); else if ("string" == typeof this._i) {
                    var n = Kt(an, this._i);
                    null != n ? this.utcOffset(n) : this.utcOffset(0, !0)
                }
                return this
            }, _e.hasAlignedHourOffset = function (n) {
                return !!this.isValid() && (n = n ? Dt(n).utcOffset() : 0, (this.utcOffset() - n) % 60 == 0)
            }, _e.isDST = function () {
                return this.utcOffset() > this.clone().month(0).utcOffset() || this.utcOffset() > this.clone().month(5).utcOffset()
            }, _e.isLocal = function () {
                return !!this.isValid() && !this._isUTC
            }, _e.isUtcOffset = function () {
                return !!this.isValid() && this._isUTC
            }, _e.isUtc = Vt, _e.isUTC = Vt, _e.zoneAbbr = function () {
                return this._isUTC ? "UTC" : ""
            }, _e.zoneName = function () {
                return this._isUTC ? "Coordinated Universal Time" : ""
            }, _e.dates = x("dates accessor is deprecated. Use date instead.", de), _e.months = x("months accessor is deprecated. Use month instead", Hn), _e.years = x("years accessor is deprecated. Use year instead", Ln), _e.zone = x("moment().zone is deprecated, use moment().utcOffset instead. http://momentjs.com/guides/#/warnings/zone/", function (n, t) {
                return null != n ? ("string" != typeof n && (n = -n), this.utcOffset(n, t), this) : -this.utcOffset()
            }), _e.isDSTShifted = x("isDSTShifted is deprecated. See http://momentjs.com/guides/#/warnings/dst-shifted/ for more information", function () {
                if (!a(this._isDSTShifted)) return this._isDSTShifted;
                var n = {};
                if (C(n, this), (n = Lt(n))._a) {
                    var t = n._isUTC ? p(n._a) : Dt(n._a);
                    this._isDSTShifted = this.isValid() && y(n._a, t.toArray()) > 0
                } else this._isDSTShifted = !1;
                return this._isDSTShifted
            });
            var be = D.prototype;

            function Oe(n, t, e, o) {
                var l = ft(), r = p().set(o, t);
                return l[e](r, n)
            }

            function Me(n, t, e) {
                if (s(n) && (t = n, n = void 0), n = n || "", null != t) return Oe(n, t, e, "month");
                var o, l = [];
                for (o = 0; o < 12; o++) l[o] = Oe(n, o, e, "month");
                return l
            }

            function ve(n, t, e, o) {
                "boolean" == typeof n ? (s(t) && (e = t, t = void 0), t = t || "") : (e = t = n, n = !1, s(t) && (e = t, t = void 0), t = t || "");
                var l, r = ft(), i = n ? r._week.dow : 0;
                if (null != e) return Oe(t, (e + i) % 7, o, "day");
                var a = [];
                for (l = 0; l < 7; l++) a[l] = Oe(t, (l + i) % 7, o, "day");
                return a
            }

            be.calendar = function (n, t, e) {
                var o = this._calendar[n] || this._calendar.sameElse;
                return L(o) ? o.call(t, e) : o
            }, be.longDateFormat = function (n) {
                var t = this._longDateFormat[n], e = this._longDateFormat[n.toUpperCase()];
                return t || !e ? t : (this._longDateFormat[n] = e.replace(/MMMM|MM|DD|dddd/g, function (n) {
                    return n.slice(1)
                }), this._longDateFormat[n])
            }, be.invalidDate = function () {
                return this._invalidDate
            }, be.ordinal = function (n) {
                return this._ordinal.replace("%d", n)
            }, be.preparse = Ce, be.postformat = Ce, be.relativeTime = function (n, t, e, o) {
                var l = this._relativeTime[e];
                return L(l) ? l(n, t, e, o) : l.replace(/%d/i, n)
            }, be.pastFuture = function (n, t) {
                var e = this._relativeTime[n > 0 ? "future" : "past"];
                return L(e) ? e(t) : e.replace(/%s/i, t)
            }, be.set = function (n) {
                var t, e;
                for (e in n) L(t = n[e]) ? this[e] = t : this["_" + e] = t;
                this._config = n, this._dayOfMonthOrdinalParseLenient = new RegExp((this._dayOfMonthOrdinalParse.source || this._ordinalParse.source) + "|" + /\d{1,2}/.source)
            }, be.months = function (n, t) {
                return n ? r(this._months) ? this._months[n.month()] : this._months[(this._months.isFormat || An).test(t) ? "format" : "standalone"][n.month()] : r(this._months) ? this._months : this._months.standalone
            }, be.monthsShort = function (n, t) {
                return n ? r(this._monthsShort) ? this._monthsShort[n.month()] : this._monthsShort[An.test(t) ? "format" : "standalone"][n.month()] : r(this._monthsShort) ? this._monthsShort : this._monthsShort.standalone
            }, be.monthsParse = function (n, t, e) {
                var o, l, r;
                if (this._monthsParseExact) return (function (n, t, e) {
                    var o, l, r, i = n.toLocaleLowerCase();
                    if (!this._monthsParse) for (this._monthsParse = [], this._longMonthsParse = [], this._shortMonthsParse = [], o = 0; o < 12; ++o) r = p([2e3, o]), this._shortMonthsParse[o] = this.monthsShort(r, "").toLocaleLowerCase(), this._longMonthsParse[o] = this.months(r, "").toLocaleLowerCase();
                    return e ? "MMM" === t ? -1 !== (l = kn.call(this._shortMonthsParse, i)) ? l : null : -1 !== (l = kn.call(this._longMonthsParse, i)) ? l : null : "MMM" === t ? -1 !== (l = kn.call(this._shortMonthsParse, i)) ? l : -1 !== (l = kn.call(this._longMonthsParse, i)) ? l : null : -1 !== (l = kn.call(this._longMonthsParse, i)) ? l : -1 !== (l = kn.call(this._shortMonthsParse, i)) ? l : null
                }).call(this, n, t, e);
                for (this._monthsParse || (this._monthsParse = [], this._longMonthsParse = [], this._shortMonthsParse = []), o = 0; o < 12; o++) {
                    if (l = p([2e3, o]), e && !this._longMonthsParse[o] && (this._longMonthsParse[o] = new RegExp("^" + this.months(l, "").replace(".", "") + "$", "i"), this._shortMonthsParse[o] = new RegExp("^" + this.monthsShort(l, "").replace(".", "") + "$", "i")), e || this._monthsParse[o] || (r = "^" + this.months(l, "") + "|^" + this.monthsShort(l, ""), this._monthsParse[o] = new RegExp(r.replace(".", ""), "i")), e && "MMMM" === t && this._longMonthsParse[o].test(n)) return o;
                    if (e && "MMM" === t && this._shortMonthsParse[o].test(n)) return o;
                    if (!e && this._monthsParse[o].test(n)) return o
                }
            }, be.monthsRegex = function (n) {
                return this._monthsParseExact ? (d(this, "_monthsRegex") || Kn.call(this), n ? this._monthsStrictRegex : this._monthsRegex) : (d(this, "_monthsRegex") || (this._monthsRegex = Un), this._monthsStrictRegex && n ? this._monthsStrictRegex : this._monthsRegex)
            }, be.monthsShortRegex = function (n) {
                return this._monthsParseExact ? (d(this, "_monthsRegex") || Kn.call(this), n ? this._monthsShortStrictRegex : this._monthsShortRegex) : (d(this, "_monthsShortRegex") || (this._monthsShortRegex = Fn), this._monthsShortStrictRegex && n ? this._monthsShortStrictRegex : this._monthsShortRegex)
            }, be.week = function (n) {
                return Bn(n, this._week.dow, this._week.doy).week
            }, be.firstDayOfYear = function () {
                return this._week.doy
            }, be.firstDayOfWeek = function () {
                return this._week.dow
            }, be.weekdays = function (n, t) {
                var e = r(this._weekdays) ? this._weekdays : this._weekdays[n && !0 !== n && this._weekdays.isFormat.test(t) ? "format" : "standalone"];
                return !0 === n ? Wn(e, this._week.dow) : n ? e[n.day()] : e
            }, be.weekdaysMin = function (n) {
                return !0 === n ? Wn(this._weekdaysMin, this._week.dow) : n ? this._weekdaysMin[n.day()] : this._weekdaysMin
            }, be.weekdaysShort = function (n) {
                return !0 === n ? Wn(this._weekdaysShort, this._week.dow) : n ? this._weekdaysShort[n.day()] : this._weekdaysShort
            }, be.weekdaysParse = function (n, t, e) {
                var o, l, r;
                if (this._weekdaysParseExact) return (function (n, t, e) {
                    var o, l, r, i = n.toLocaleLowerCase();
                    if (!this._weekdaysParse) for (this._weekdaysParse = [], this._shortWeekdaysParse = [], this._minWeekdaysParse = [], o = 0; o < 7; ++o) r = p([2e3, 1]).day(o), this._minWeekdaysParse[o] = this.weekdaysMin(r, "").toLocaleLowerCase(), this._shortWeekdaysParse[o] = this.weekdaysShort(r, "").toLocaleLowerCase(), this._weekdaysParse[o] = this.weekdays(r, "").toLocaleLowerCase();
                    return e ? "dddd" === t ? -1 !== (l = kn.call(this._weekdaysParse, i)) ? l : null : "ddd" === t ? -1 !== (l = kn.call(this._shortWeekdaysParse, i)) ? l : null : -1 !== (l = kn.call(this._minWeekdaysParse, i)) ? l : null : "dddd" === t ? -1 !== (l = kn.call(this._weekdaysParse, i)) ? l : -1 !== (l = kn.call(this._shortWeekdaysParse, i)) ? l : -1 !== (l = kn.call(this._minWeekdaysParse, i)) ? l : null : "ddd" === t ? -1 !== (l = kn.call(this._shortWeekdaysParse, i)) ? l : -1 !== (l = kn.call(this._weekdaysParse, i)) ? l : -1 !== (l = kn.call(this._minWeekdaysParse, i)) ? l : null : -1 !== (l = kn.call(this._minWeekdaysParse, i)) ? l : -1 !== (l = kn.call(this._weekdaysParse, i)) ? l : -1 !== (l = kn.call(this._shortWeekdaysParse, i)) ? l : null
                }).call(this, n, t, e);
                for (this._weekdaysParse || (this._weekdaysParse = [], this._minWeekdaysParse = [], this._shortWeekdaysParse = [], this._fullWeekdaysParse = []), o = 0; o < 7; o++) {
                    if (l = p([2e3, 1]).day(o), e && !this._fullWeekdaysParse[o] && (this._fullWeekdaysParse[o] = new RegExp("^" + this.weekdays(l, "").replace(".", "\\.?") + "$", "i"), this._shortWeekdaysParse[o] = new RegExp("^" + this.weekdaysShort(l, "").replace(".", "\\.?") + "$", "i"), this._minWeekdaysParse[o] = new RegExp("^" + this.weekdaysMin(l, "").replace(".", "\\.?") + "$", "i")), this._weekdaysParse[o] || (r = "^" + this.weekdays(l, "") + "|^" + this.weekdaysShort(l, "") + "|^" + this.weekdaysMin(l, ""), this._weekdaysParse[o] = new RegExp(r.replace(".", ""), "i")), e && "dddd" === t && this._fullWeekdaysParse[o].test(n)) return o;
                    if (e && "ddd" === t && this._shortWeekdaysParse[o].test(n)) return o;
                    if (e && "dd" === t && this._minWeekdaysParse[o].test(n)) return o;
                    if (!e && this._weekdaysParse[o].test(n)) return o
                }
            }, be.weekdaysRegex = function (n) {
                return this._weekdaysParseExact ? (d(this, "_weekdaysRegex") || tt.call(this), n ? this._weekdaysStrictRegex : this._weekdaysRegex) : (d(this, "_weekdaysRegex") || (this._weekdaysRegex = Qn), this._weekdaysStrictRegex && n ? this._weekdaysStrictRegex : this._weekdaysRegex)
            }, be.weekdaysShortRegex = function (n) {
                return this._weekdaysParseExact ? (d(this, "_weekdaysRegex") || tt.call(this), n ? this._weekdaysShortStrictRegex : this._weekdaysShortRegex) : (d(this, "_weekdaysShortRegex") || (this._weekdaysShortRegex = Jn), this._weekdaysShortStrictRegex && n ? this._weekdaysShortStrictRegex : this._weekdaysShortRegex)
            }, be.weekdaysMinRegex = function (n) {
                return this._weekdaysParseExact ? (d(this, "_weekdaysRegex") || tt.call(this), n ? this._weekdaysMinStrictRegex : this._weekdaysMinRegex) : (d(this, "_weekdaysMinRegex") || (this._weekdaysMinRegex = nt), this._weekdaysMinStrictRegex && n ? this._weekdaysMinStrictRegex : this._weekdaysMinRegex)
            }, be.isPM = function (n) {
                return "p" === (n + "").toLowerCase().charAt(0)
            }, be.meridiem = function (n, t, e) {
                return n > 11 ? e ? "pm" : "PM" : e ? "am" : "AM"
            }, gt("en", {
                dayOfMonthOrdinalParse: /\d{1,2}(th|st|nd|rd)/, ordinal: function (n) {
                    var t = n % 10;
                    return n + (1 === P(n % 100 / 10) ? "th" : 1 === t ? "st" : 2 === t ? "nd" : 3 === t ? "rd" : "th")
                }
            }), l.lang = x("moment.lang is deprecated. Use moment.locale instead.", gt), l.langData = x("moment.langData is deprecated. Use moment.localeData instead.", ft);
            var Pe = Math.abs;

            function ye(n, t, e, o) {
                var l = Wt(t, e);
                return n._milliseconds += o * l._milliseconds, n._days += o * l._days, n._months += o * l._months, n._bubble()
            }

            function we(n) {
                return n < 0 ? Math.floor(n) : Math.ceil(n)
            }

            function xe(n) {
                return 4800 * n / 146097
            }

            function Ee(n) {
                return 146097 * n / 4800
            }

            function Se(n) {
                return function () {
                    return this.as(n)
                }
            }

            var ke = Se("ms"), Le = Se("s"), Te = Se("m"), De = Se("h"), Ye = Se("d"), Ie = Se("w"), Ae = Se("M"),
                ze = Se("Q"), Re = Se("y");

            function Ne(n) {
                return function () {
                    return this.isValid() ? this._data[n] : NaN
                }
            }

            var He = Ne("milliseconds"), Fe = Ne("seconds"), Ue = Ne("minutes"), Ke = Ne("hours"), je = Ne("days"),
                Xe = Ne("months"), Ve = Ne("years"), Be = Math.round,
                $e = {ss: 44, s: 45, m: 45, h: 22, d: 26, M: 11}, We = Math.abs;

            function Ge(n) {
                return (n > 0) - (n < 0) || +n
            }

            function qe() {
                if (!this.isValid()) return this.localeData().invalidDate();
                var n, t, e = We(this._milliseconds) / 1e3, o = We(this._days), l = We(this._months);
                n = v(e / 60), t = v(n / 60), e %= 60, n %= 60;
                var r = v(l / 12), i = l %= 12, a = o, s = t, c = n,
                    u = e ? e.toFixed(3).replace(/\.?0+$/, "") : "", d = this.asSeconds();
                if (!d) return "P0D";
                var g = d < 0 ? "-" : "", p = Ge(this._months) !== Ge(d) ? "-" : "",
                    f = Ge(this._days) !== Ge(d) ? "-" : "", m = Ge(this._milliseconds) !== Ge(d) ? "-" : "";
                return g + "P" + (r ? p + r + "Y" : "") + (i ? p + i + "M" : "") + (a ? f + a + "D" : "") + (s || c || u ? "T" : "") + (s ? m + s + "H" : "") + (c ? m + c + "M" : "") + (u ? m + u + "S" : "")
            }

            var Ze = Rt.prototype;
            return Ze.isValid = function () {
                return this._isValid
            }, Ze.abs = function () {
                var n = this._data;
                return this._milliseconds = Pe(this._milliseconds), this._days = Pe(this._days), this._months = Pe(this._months), n.milliseconds = Pe(n.milliseconds), n.seconds = Pe(n.seconds), n.minutes = Pe(n.minutes), n.hours = Pe(n.hours), n.months = Pe(n.months), n.years = Pe(n.years), this
            }, Ze.add = function (n, t) {
                return ye(this, n, t, 1)
            }, Ze.subtract = function (n, t) {
                return ye(this, n, t, -1)
            }, Ze.as = function (n) {
                if (!this.isValid()) return NaN;
                var t, e, o = this._milliseconds;
                if ("month" === (n = A(n)) || "quarter" === n || "year" === n) switch (e = this._months + xe(t = this._days + o / 864e5), n) {
                    case"month":
                        return e;
                    case"quarter":
                        return e / 3;
                    case"year":
                        return e / 12
                } else switch (t = this._days + Math.round(Ee(this._months)), n) {
                    case"week":
                        return t / 7 + o / 6048e5;
                    case"day":
                        return t + o / 864e5;
                    case"hour":
                        return 24 * t + o / 36e5;
                    case"minute":
                        return 1440 * t + o / 6e4;
                    case"second":
                        return 86400 * t + o / 1e3;
                    case"millisecond":
                        return Math.floor(864e5 * t) + o;
                    default:
                        throw new Error("Unknown unit " + n)
                }
            }, Ze.asMilliseconds = ke, Ze.asSeconds = Le, Ze.asMinutes = Te, Ze.asHours = De, Ze.asDays = Ye, Ze.asWeeks = Ie, Ze.asMonths = Ae, Ze.asQuarters = ze, Ze.asYears = Re, Ze.valueOf = function () {
                return this.isValid() ? this._milliseconds + 864e5 * this._days + this._months % 12 * 2592e6 + 31536e6 * P(this._months / 12) : NaN
            }, Ze._bubble = function () {
                var n, t, e, o, l, r = this._milliseconds, i = this._days, a = this._months, s = this._data;
                return r >= 0 && i >= 0 && a >= 0 || r <= 0 && i <= 0 && a <= 0 || (r += 864e5 * we(Ee(a) + i), i = 0, a = 0), s.milliseconds = r % 1e3, n = v(r / 1e3), s.seconds = n % 60, t = v(n / 60), s.minutes = t % 60, e = v(t / 60), s.hours = e % 24, i += v(e / 24), a += l = v(xe(i)), i -= we(Ee(l)), o = v(a / 12), a %= 12, s.days = i, s.months = a, s.years = o, this
            }, Ze.clone = function () {
                return Wt(this)
            }, Ze.get = function (n) {
                return n = A(n), this.isValid() ? this[n + "s"]() : NaN
            }, Ze.milliseconds = He, Ze.seconds = Fe, Ze.minutes = Ue, Ze.hours = Ke, Ze.days = je, Ze.weeks = function () {
                return v(this.days() / 7)
            }, Ze.months = Xe, Ze.years = Ve, Ze.humanize = function (n) {
                if (!this.isValid()) return this.localeData().invalidDate();
                var t = this.localeData(), e = function (n, t, e) {
                    var o = Wt(n).abs(), l = Be(o.as("s")), r = Be(o.as("m")), i = Be(o.as("h")), a = Be(o.as("d")),
                        s = Be(o.as("M")), c = Be(o.as("y")),
                        u = l <= $e.ss && ["s", l] || l < $e.s && ["ss", l] || r <= 1 && ["m"] || r < $e.m && ["mm", r] || i <= 1 && ["h"] || i < $e.h && ["hh", i] || a <= 1 && ["d"] || a < $e.d && ["dd", a] || s <= 1 && ["M"] || s < $e.M && ["MM", s] || c <= 1 && ["y"] || ["yy", c];
                    return u[2] = t, u[3] = +n > 0, u[4] = e, (function (n, t, e, o, l) {
                        return l.relativeTime(t || 1, !!e, n, o)
                    }).apply(null, u)
                }(this, !n, t);
                return n && (e = t.pastFuture(+this, e)), t.postformat(e)
            }, Ze.toISOString = qe, Ze.toString = qe, Ze.toJSON = qe, Ze.locale = ee, Ze.localeData = le, Ze.toIsoString = x("toIsoString() is deprecated. Please use toISOString() instead (notice the capitals)", qe), Ze.lang = oe, X("X", 0, 0, "unix"), X("x", 0, 0, "valueOf"), dn("x", rn), dn("X", /[+-]?\d+(\.\d{1,3})?/), mn("X", function (n, t, e) {
                e._d = new Date(1e3 * parseFloat(n, 10))
            }), mn("x", function (n, t, e) {
                e._d = new Date(P(n))
            }), l.version = "2.24.0", t = Dt, l.fn = _e, l.min = function () {
                return At("isBefore", [].slice.call(arguments, 0))
            }, l.max = function () {
                return At("isAfter", [].slice.call(arguments, 0))
            }, l.now = function () {
                return Date.now ? Date.now() : +new Date
            }, l.utc = p, l.unix = function (n) {
                return Dt(1e3 * n)
            }, l.months = function (n, t) {
                return Me(n, t, "months")
            }, l.isDate = c, l.locale = gt, l.invalid = h, l.duration = Wt, l.isMoment = M, l.weekdays = function (n, t, e) {
                return ve(n, t, e, "weekdays")
            }, l.parseZone = function () {
                return Dt.apply(null, arguments).parseZone()
            }, l.localeData = ft, l.isDuration = Nt, l.monthsShort = function (n, t) {
                return Me(n, t, "monthsShort")
            }, l.weekdaysMin = function (n, t, e) {
                return ve(n, t, e, "weekdaysMin")
            }, l.defineLocale = pt, l.updateLocale = function (n, t) {
                if (null != t) {
                    var e, o, l = at;
                    null != (o = dt(n)) && (l = o._config), (e = new D(t = T(l, t))).parentLocale = st[n], st[n] = e, gt(n)
                } else null != st[n] && (null != st[n].parentLocale ? st[n] = st[n].parentLocale : null != st[n] && delete st[n]);
                return st[n]
            }, l.locales = function () {
                return E(st)
            }, l.weekdaysShort = function (n, t, e) {
                return ve(n, t, e, "weekdaysShort")
            }, l.normalizeUnits = A, l.relativeTimeRounding = function (n) {
                return void 0 === n ? Be : "function" == typeof n && (Be = n, !0)
            }, l.relativeTimeThreshold = function (n, t) {
                return void 0 !== $e[n] && (void 0 === t ? $e[n] : ($e[n] = t, "s" === n && ($e.ss = t - 1), !0))
            }, l.calendarFormat = function (n, t) {
                var e = n.diff(t, "days", !0);
                return e < -6 ? "sameElse" : e < -1 ? "lastWeek" : e < 0 ? "lastDay" : e < 1 ? "sameDay" : e < 2 ? "nextDay" : e < 7 ? "nextWeek" : "sameElse"
            }, l.prototype = _e, l.HTML5_FMT = {
                DATETIME_LOCAL: "YYYY-MM-DDTHH:mm",
                DATETIME_LOCAL_SECONDS: "YYYY-MM-DDTHH:mm:ss",
                DATETIME_LOCAL_MS: "YYYY-MM-DDTHH:mm:ss.SSS",
                DATE: "YYYY-MM-DD",
                TIME: "HH:mm",
                TIME_SECONDS: "HH:mm:ss",
                TIME_MS: "HH:mm:ss.SSS",
                WEEK: "GGGG-[W]WW",
                MONTH: "YYYY-MM"
            }, l
        }()
    }).call(this, e("YuTi")(n))
},
x6pH: function (n, t, e) {
    !function (n) {
        "use strict";
        e("wd/R").defineLocale("he", {
            months: "\u05d9\u05e0\u05d5\u05d0\u05e8_\u05e4\u05d1\u05e8\u05d5\u05d0\u05e8_\u05de\u05e8\u05e5_\u05d0\u05e4\u05e8\u05d9\u05dc_\u05de\u05d0\u05d9_\u05d9\u05d5\u05e0\u05d9_\u05d9\u05d5\u05dc\u05d9_\u05d0\u05d5\u05d2\u05d5\u05e1\u05d8_\u05e1\u05e4\u05d8\u05de\u05d1\u05e8_\u05d0\u05d5\u05e7\u05d8\u05d5\u05d1\u05e8_\u05e0\u05d5\u05d1\u05de\u05d1\u05e8_\u05d3\u05e6\u05de\u05d1\u05e8".split("_"),
            monthsShort: "\u05d9\u05e0\u05d5\u05f3_\u05e4\u05d1\u05e8\u05f3_\u05de\u05e8\u05e5_\u05d0\u05e4\u05e8\u05f3_\u05de\u05d0\u05d9_\u05d9\u05d5\u05e0\u05d9_\u05d9\u05d5\u05dc\u05d9_\u05d0\u05d5\u05d2\u05f3_\u05e1\u05e4\u05d8\u05f3_\u05d0\u05d5\u05e7\u05f3_\u05e0\u05d5\u05d1\u05f3_\u05d3\u05e6\u05de\u05f3".split("_"),
            weekdays: "\u05e8\u05d0\u05e9\u05d5\u05df_\u05e9\u05e0\u05d9_\u05e9\u05dc\u05d9\u05e9\u05d9_\u05e8\u05d1\u05d9\u05e2\u05d9_\u05d7\u05de\u05d9\u05e9\u05d9_\u05e9\u05d9\u05e9\u05d9_\u05e9\u05d1\u05ea".split("_"),
            weekdaysShort: "\u05d0\u05f3_\u05d1\u05f3_\u05d2\u05f3_\u05d3\u05f3_\u05d4\u05f3_\u05d5\u05f3_\u05e9\u05f3".split("_"),
            weekdaysMin: "\u05d0_\u05d1_\u05d2_\u05d3_\u05d4_\u05d5_\u05e9".split("_"),
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD/MM/YYYY",
                LL: "D [\u05d1]MMMM YYYY",
                LLL: "D [\u05d1]MMMM YYYY HH:mm",
                LLLL: "dddd, D [\u05d1]MMMM YYYY HH:mm",
                l: "D/M/YYYY",
                ll: "D MMM YYYY",
                lll: "D MMM YYYY HH:mm",
                llll: "ddd, D MMM YYYY HH:mm"
            },
            calendar: {
                sameDay: "[\u05d4\u05d9\u05d5\u05dd \u05d1\u05be]LT",
                nextDay: "[\u05de\u05d7\u05e8 \u05d1\u05be]LT",
                nextWeek: "dddd [\u05d1\u05e9\u05e2\u05d4] LT",
                lastDay: "[\u05d0\u05ea\u05de\u05d5\u05dc \u05d1\u05be]LT",
                lastWeek: "[\u05d1\u05d9\u05d5\u05dd] dddd [\u05d4\u05d0\u05d7\u05e8\u05d5\u05df \u05d1\u05e9\u05e2\u05d4] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "\u05d1\u05e2\u05d5\u05d3 %s",
                past: "\u05dc\u05e4\u05e0\u05d9 %s",
                s: "\u05de\u05e1\u05e4\u05e8 \u05e9\u05e0\u05d9\u05d5\u05ea",
                ss: "%d \u05e9\u05e0\u05d9\u05d5\u05ea",
                m: "\u05d3\u05e7\u05d4",
                mm: "%d \u05d3\u05e7\u05d5\u05ea",
                h: "\u05e9\u05e2\u05d4",
                hh: function (n) {
                    return 2 === n ? "\u05e9\u05e2\u05ea\u05d9\u05d9\u05dd" : n + " \u05e9\u05e2\u05d5\u05ea"
                },
                d: "\u05d9\u05d5\u05dd",
                dd: function (n) {
                    return 2 === n ? "\u05d9\u05d5\u05de\u05d9\u05d9\u05dd" : n + " \u05d9\u05de\u05d9\u05dd"
                },
                M: "\u05d7\u05d5\u05d3\u05e9",
                MM: function (n) {
                    return 2 === n ? "\u05d7\u05d5\u05d3\u05e9\u05d9\u05d9\u05dd" : n + " \u05d7\u05d5\u05d3\u05e9\u05d9\u05dd"
                },
                y: "\u05e9\u05e0\u05d4",
                yy: function (n) {
                    return 2 === n ? "\u05e9\u05e0\u05ea\u05d9\u05d9\u05dd" : n % 10 == 0 && 10 !== n ? n + " \u05e9\u05e0\u05d4" : n + " \u05e9\u05e0\u05d9\u05dd"
                }
            },
            meridiemParse: /\u05d0\u05d7\u05d4"\u05e6|\u05dc\u05e4\u05e0\u05d4"\u05e6|\u05d0\u05d7\u05e8\u05d9 \u05d4\u05e6\u05d4\u05e8\u05d9\u05d9\u05dd|\u05dc\u05e4\u05e0\u05d9 \u05d4\u05e6\u05d4\u05e8\u05d9\u05d9\u05dd|\u05dc\u05e4\u05e0\u05d5\u05ea \u05d1\u05d5\u05e7\u05e8|\u05d1\u05d1\u05d5\u05e7\u05e8|\u05d1\u05e2\u05e8\u05d1/i,
            isPM: function (n) {
                return /^(\u05d0\u05d7\u05d4"\u05e6|\u05d0\u05d7\u05e8\u05d9 \u05d4\u05e6\u05d4\u05e8\u05d9\u05d9\u05dd|\u05d1\u05e2\u05e8\u05d1)$/.test(n)
            },
            meridiem: function (n, t, e) {
                return n < 5 ? "\u05dc\u05e4\u05e0\u05d5\u05ea \u05d1\u05d5\u05e7\u05e8" : n < 10 ? "\u05d1\u05d1\u05d5\u05e7\u05e8" : n < 12 ? e ? '\u05dc\u05e4\u05e0\u05d4"\u05e6' : "\u05dc\u05e4\u05e0\u05d9 \u05d4\u05e6\u05d4\u05e8\u05d9\u05d9\u05dd" : n < 18 ? e ? '\u05d0\u05d7\u05d4"\u05e6' : "\u05d0\u05d7\u05e8\u05d9 \u05d4\u05e6\u05d4\u05e8\u05d9\u05d9\u05dd" : "\u05d1\u05e2\u05e8\u05d1"
            }
        })
    }()
},
yPMs: function (n, t, e) {
    !function (n) {
        "use strict";
        e("wd/R").defineLocale("sq", {
            months: "Janar_Shkurt_Mars_Prill_Maj_Qershor_Korrik_Gusht_Shtator_Tetor_N\xebntor_Dhjetor".split("_"),
            monthsShort: "Jan_Shk_Mar_Pri_Maj_Qer_Kor_Gus_Sht_Tet_N\xebn_Dhj".split("_"),
            weekdays: "E Diel_E H\xebn\xeb_E Mart\xeb_E M\xebrkur\xeb_E Enjte_E Premte_E Shtun\xeb".split("_"),
            weekdaysShort: "Die_H\xebn_Mar_M\xebr_Enj_Pre_Sht".split("_"),
            weekdaysMin: "D_H_Ma_M\xeb_E_P_Sh".split("_"),
            weekdaysParseExact: !0,
            meridiemParse: /PD|MD/,
            isPM: function (n) {
                return "M" === n.charAt(0)
            },
            meridiem: function (n, t, e) {
                return n < 12 ? "PD" : "MD"
            },
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY HH:mm",
                LLLL: "dddd, D MMMM YYYY HH:mm"
            },
            calendar: {
                sameDay: "[Sot n\xeb] LT",
                nextDay: "[Nes\xebr n\xeb] LT",
                nextWeek: "dddd [n\xeb] LT",
                lastDay: "[Dje n\xeb] LT",
                lastWeek: "dddd [e kaluar n\xeb] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "n\xeb %s",
                past: "%s m\xeb par\xeb",
                s: "disa sekonda",
                ss: "%d sekonda",
                m: "nj\xeb minut\xeb",
                mm: "%d minuta",
                h: "nj\xeb or\xeb",
                hh: "%d or\xeb",
                d: "nj\xeb dit\xeb",
                dd: "%d dit\xeb",
                M: "nj\xeb muaj",
                MM: "%d muaj",
                y: "nj\xeb vit",
                yy: "%d vite"
            },
            dayOfMonthOrdinalParse: /\d{1,2}\./,
            ordinal: "%d.",
            week: {dow: 1, doy: 4}
        })
    }()
},
z1FC: function (n, t, e) {
    !function (n) {
        "use strict";

        function t(n, t, e, o) {
            var l = {
                s: ["viensas secunds", "'iensas secunds"],
                ss: [n + " secunds", n + " secunds"],
                m: ["'n m\xedut", "'iens m\xedut"],
                mm: [n + " m\xeduts", n + " m\xeduts"],
                h: ["'n \xfeora", "'iensa \xfeora"],
                hh: [n + " \xfeoras", n + " \xfeoras"],
                d: ["'n ziua", "'iensa ziua"],
                dd: [n + " ziuas", n + " ziuas"],
                M: ["'n mes", "'iens mes"],
                MM: [n + " mesen", n + " mesen"],
                y: ["'n ar", "'iens ar"],
                yy: [n + " ars", n + " ars"]
            };
            return o ? l[e][0] : t ? l[e][0] : l[e][1]
        }

        e("wd/R").defineLocale("tzl", {
            months: "Januar_Fevraglh_Mar\xe7_Avr\xefu_Mai_G\xfcn_Julia_Guscht_Setemvar_Listop\xe4ts_Noemvar_Zecemvar".split("_"),
            monthsShort: "Jan_Fev_Mar_Avr_Mai_G\xfcn_Jul_Gus_Set_Lis_Noe_Zec".split("_"),
            weekdays: "S\xfaladi_L\xfane\xe7i_Maitzi_M\xe1rcuri_Xh\xfaadi_Vi\xe9ner\xe7i_S\xe1turi".split("_"),
            weekdaysShort: "S\xfal_L\xfan_Mai_M\xe1r_Xh\xfa_Vi\xe9_S\xe1t".split("_"),
            weekdaysMin: "S\xfa_L\xfa_Ma_M\xe1_Xh_Vi_S\xe1".split("_"),
            longDateFormat: {
                LT: "HH.mm",
                LTS: "HH.mm.ss",
                L: "DD.MM.YYYY",
                LL: "D. MMMM [dallas] YYYY",
                LLL: "D. MMMM [dallas] YYYY HH.mm",
                LLLL: "dddd, [li] D. MMMM [dallas] YYYY HH.mm"
            },
            meridiemParse: /d\'o|d\'a/i,
            isPM: function (n) {
                return "d'o" === n.toLowerCase()
            },
            meridiem: function (n, t, e) {
                return n > 11 ? e ? "d'o" : "D'O" : e ? "d'a" : "D'A"
            },
            calendar: {
                sameDay: "[oxhi \xe0] LT",
                nextDay: "[dem\xe0 \xe0] LT",
                nextWeek: "dddd [\xe0] LT",
                lastDay: "[ieiri \xe0] LT",
                lastWeek: "[s\xfcr el] dddd [lasteu \xe0] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "osprei %s",
                past: "ja%s",
                s: t,
                ss: t,
                m: t,
                mm: t,
                h: t,
                hh: t,
                d: t,
                dd: t,
                M: t,
                MM: t,
                y: t,
                yy: t
            },
            dayOfMonthOrdinalParse: /\d{1,2}\./,
            ordinal: "%d.",
            week: {dow: 1, doy: 4}
        })
    }()
},
z3Vd: function (n, t, e) {
    !function (n) {
        "use strict";
        var t = "pagh_wa\u2019_cha\u2019_wej_loS_vagh_jav_Soch_chorgh_Hut".split("_");

        function e(n, e, o, l) {
            var r = function (n) {
                var e = Math.floor(n % 1e3 / 100), o = Math.floor(n % 100 / 10), l = n % 10, r = "";
                return e > 0 && (r += t[e] + "vatlh"), o > 0 && (r += ("" !== r ? " " : "") + t[o] + "maH"), l > 0 && (r += ("" !== r ? " " : "") + t[l]), "" === r ? "pagh" : r
            }(n);
            switch (o) {
                case"ss":
                    return r + " lup";
                case"mm":
                    return r + " tup";
                case"hh":
                    return r + " rep";
                case"dd":
                    return r + " jaj";
                case"MM":
                    return r + " jar";
                case"yy":
                    return r + " DIS"
            }
        }

        n.defineLocale("tlh", {
            months: "tera\u2019 jar wa\u2019_tera\u2019 jar cha\u2019_tera\u2019 jar wej_tera\u2019 jar loS_tera\u2019 jar vagh_tera\u2019 jar jav_tera\u2019 jar Soch_tera\u2019 jar chorgh_tera\u2019 jar Hut_tera\u2019 jar wa\u2019maH_tera\u2019 jar wa\u2019maH wa\u2019_tera\u2019 jar wa\u2019maH cha\u2019".split("_"),
            monthsShort: "jar wa\u2019_jar cha\u2019_jar wej_jar loS_jar vagh_jar jav_jar Soch_jar chorgh_jar Hut_jar wa\u2019maH_jar wa\u2019maH wa\u2019_jar wa\u2019maH cha\u2019".split("_"),
            monthsParseExact: !0,
            weekdays: "lojmItjaj_DaSjaj_povjaj_ghItlhjaj_loghjaj_buqjaj_ghInjaj".split("_"),
            weekdaysShort: "lojmItjaj_DaSjaj_povjaj_ghItlhjaj_loghjaj_buqjaj_ghInjaj".split("_"),
            weekdaysMin: "lojmItjaj_DaSjaj_povjaj_ghItlhjaj_loghjaj_buqjaj_ghInjaj".split("_"),
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD.MM.YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY HH:mm",
                LLLL: "dddd, D MMMM YYYY HH:mm"
            },
            calendar: {
                sameDay: "[DaHjaj] LT",
                nextDay: "[wa\u2019leS] LT",
                nextWeek: "LLL",
                lastDay: "[wa\u2019Hu\u2019] LT",
                lastWeek: "LLL",
                sameElse: "L"
            },
            relativeTime: {
                future: function (n) {
                    var t = n;
                    return -1 !== n.indexOf("jaj") ? t.slice(0, -3) + "leS" : -1 !== n.indexOf("jar") ? t.slice(0, -3) + "waQ" : -1 !== n.indexOf("DIS") ? t.slice(0, -3) + "nem" : t + " pIq"
                },
                past: function (n) {
                    var t = n;
                    return -1 !== n.indexOf("jaj") ? t.slice(0, -3) + "Hu\u2019" : -1 !== n.indexOf("jar") ? t.slice(0, -3) + "wen" : -1 !== n.indexOf("DIS") ? t.slice(0, -3) + "ben" : t + " ret"
                },
                s: "puS lup",
                ss: e,
                m: "wa\u2019 tup",
                mm: e,
                h: "wa\u2019 rep",
                hh: e,
                d: "wa\u2019 jaj",
                dd: e,
                M: "wa\u2019 jar",
                MM: e,
                y: "wa\u2019 DIS",
                yy: e
            },
            dayOfMonthOrdinalParse: /\d{1,2}\./,
            ordinal: "%d.",
            week: {dow: 1, doy: 4}
        })
    }(e("wd/R"))
},
zavE: function (n, t, e) {
    !function (n) {
        "use strict";
        e("wd/R").defineLocale("en-SG", {
            months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"),
            monthsShort: "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),
            weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),
            weekdaysShort: "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),
            weekdaysMin: "Su_Mo_Tu_We_Th_Fr_Sa".split("_"),
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY HH:mm",
                LLLL: "dddd, D MMMM YYYY HH:mm"
            },
            calendar: {
                sameDay: "[Today at] LT",
                nextDay: "[Tomorrow at] LT",
                nextWeek: "dddd [at] LT",
                lastDay: "[Yesterday at] LT",
                lastWeek: "[Last] dddd [at] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "in %s",
                past: "%s ago",
                s: "a few seconds",
                ss: "%d seconds",
                m: "a minute",
                mm: "%d minutes",
                h: "an hour",
                hh: "%d hours",
                d: "a day",
                dd: "%d days",
                M: "a month",
                MM: "%d months",
                y: "a year",
                yy: "%d years"
            },
            dayOfMonthOrdinalParse: /\d{1,2}(st|nd|rd|th)/,
            ordinal: function (n) {
                var t = n % 10;
                return n + (1 == ~~(n % 100 / 10) ? "th" : 1 === t ? "st" : 2 === t ? "nd" : 3 === t ? "rd" : "th")
            },
            week: {dow: 1, doy: 4}
        })
    }()
},
zx6S: function (n, t, e) {
    !function (n) {
        "use strict";
        var t = {
            words: {
                ss: ["sekunda", "sekunde", "sekundi"],
                m: ["jedan minut", "jedne minute"],
                mm: ["minut", "minute", "minuta"],
                h: ["jedan sat", "jednog sata"],
                hh: ["sat", "sata", "sati"],
                dd: ["dan", "dana", "dana"],
                MM: ["mesec", "meseca", "meseci"],
                yy: ["godina", "godine", "godina"]
            }, correctGrammaticalCase: function (n, t) {
                return 1 === n ? t[0] : n >= 2 && n <= 4 ? t[1] : t[2]
            }, translate: function (n, e, o) {
                var l = t.words[o];
                return 1 === o.length ? e ? l[0] : l[1] : n + " " + t.correctGrammaticalCase(n, l)
            }
        };
        n.defineLocale("sr", {
            months: "januar_februar_mart_april_maj_jun_jul_avgust_septembar_oktobar_novembar_decembar".split("_"),
            monthsShort: "jan._feb._mar._apr._maj_jun_jul_avg._sep._okt._nov._dec.".split("_"),
            monthsParseExact: !0,
            weekdays: "nedelja_ponedeljak_utorak_sreda_\u010detvrtak_petak_subota".split("_"),
            weekdaysShort: "ned._pon._uto._sre._\u010det._pet._sub.".split("_"),
            weekdaysMin: "ne_po_ut_sr_\u010de_pe_su".split("_"),
            weekdaysParseExact: !0,
            longDateFormat: {
                LT: "H:mm",
                LTS: "H:mm:ss",
                L: "DD.MM.YYYY",
                LL: "D. MMMM YYYY",
                LLL: "D. MMMM YYYY H:mm",
                LLLL: "dddd, D. MMMM YYYY H:mm"
            },
            calendar: {
                sameDay: "[danas u] LT", nextDay: "[sutra u] LT", nextWeek: function () {
                    switch (this.day()) {
                        case 0:
                            return "[u] [nedelju] [u] LT";
                        case 3:
                            return "[u] [sredu] [u] LT";
                        case 6:
                            return "[u] [subotu] [u] LT";
                        case 1:
                        case 2:
                        case 4:
                        case 5:
                            return "[u] dddd [u] LT"
                    }
                }, lastDay: "[ju\u010de u] LT", lastWeek: function () {
                    return ["[pro\u0161le] [nedelje] [u] LT", "[pro\u0161log] [ponedeljka] [u] LT", "[pro\u0161log] [utorka] [u] LT", "[pro\u0161le] [srede] [u] LT", "[pro\u0161log] [\u010detvrtka] [u] LT", "[pro\u0161log] [petka] [u] LT", "[pro\u0161le] [subote] [u] LT"][this.day()]
                }, sameElse: "L"
            },
            relativeTime: {
                future: "za %s",
                past: "pre %s",
                s: "nekoliko sekundi",
                ss: t.translate,
                m: t.translate,
                mm: t.translate,
                h: t.translate,
                hh: t.translate,
                d: "dan",
                dd: t.translate,
                M: "mesec",
                MM: t.translate,
                y: "godinu",
                yy: t.translate
            },
            dayOfMonthOrdinalParse: /\d{1,2}\./,
            ordinal: "%d.",
            week: {dow: 1, doy: 7}
        })
    }(e("wd/R"))
}


























