webpackJsonp([73],{B0j4:function(l,n,u){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var e=u("LMZF"),t=(u("6Xbx"),u("Un6q")),_=function(){function l(){this.msgs=[]}return l.prototype.showResponse=function(l){this.msgs=[],this.msgs.push({severity:"info",summary:"Success",detail:"User Responsed"})},l}(),a=u("UHIZ"),s=function(){},i=function(){function l(l,n){this.el=l,this._zone=n,this.siteKey=null,this.theme="light",this.type="image",this.size="normal",this.tabindex=0,this.language=null,this.initCallback="initRecaptcha",this.onResponse=new e.m,this.onExpire=new e.m,this._instance=null}return l.prototype.ngAfterViewInit=function(){var l=this;window.grecaptcha?this.init():window[this.initCallback]=function(){l.init()}},l.prototype.init=function(){var l=this;this._instance=window.grecaptcha.render(this.el.nativeElement.children[0],{sitekey:this.siteKey,theme:this.theme,type:this.type,size:this.size,tabindex:this.tabindex,hl:this.language,callback:function(n){l._zone.run(function(){return l.recaptchaCallback(n)})},"expired-callback":function(){l._zone.run(function(){return l.recaptchaExpiredCallback()})}})},l.prototype.reset=function(){null!==this._instance&&window.grecaptcha.reset(this._instance)},l.prototype.getResponse=function(){return null===this._instance?null:window.grecaptcha.getResponse(this._instance)},l.prototype.recaptchaCallback=function(l){this.onResponse.emit({response:l})},l.prototype.recaptchaExpiredCallback=function(){this.onExpire.emit()},l.prototype.ngOnDestroy=function(){null!=this._instance&&window.grecaptcha.reset(this._instance)},l}(),o=function(){},c=u("dctg"),r=u("5UlM"),p=u("ttb0"),d=function(){},h=u("2FJK"),g=u("hhSD"),m=u("ey0k"),b=e._1({encapsulation:2,styles:[],data:{}});function f(l){return e._27(0,[(l()(),e._3(0,0,null,null,0,"div",[],null,null,null,null,null))],null,null)}var y=u("Oncm"),k=e._1({encapsulation:2,styles:[],data:{}});function w(l){return e._27(0,[(l()(),e._3(0,0,null,null,10,"div",[["class","content-section introduction"]],null,null,null,null,null)),(l()(),e._25(-1,null,["\n    "])),(l()(),e._3(2,0,null,null,7,"div",[],null,null,null,null,null)),(l()(),e._25(-1,null,["\n        "])),(l()(),e._3(4,0,null,null,1,"span",[["class","feature-title"]],null,null,null,null,null)),(l()(),e._25(-1,null,["Captcha"])),(l()(),e._25(-1,null,["\n        "])),(l()(),e._3(7,0,null,null,1,"span",[],null,null,null,null,null)),(l()(),e._25(-1,null,["Captcha is a form validation component based on Recaptcha."])),(l()(),e._25(-1,null,["\n    "])),(l()(),e._25(-1,null,["\n"])),(l()(),e._25(-1,null,["\n\n"])),(l()(),e._3(12,0,null,null,8,"div",[["class","content-section implementation"]],null,null,null,null,null)),(l()(),e._25(-1,null,["\n    "])),(l()(),e._3(14,0,null,null,2,"p-growl",[["sticky","sticky"]],null,null,null,h.b,h.a)),e._22(512,null,g.a,g.a,[]),e._2(16,4636672,null,0,c.a,[e.k,g.a,e.q,[2,m.a]],{sticky:[0,"sticky"],value:[1,"value"]},null),(l()(),e._25(-1,null,["\n    \n    "])),(l()(),e._3(18,0,null,null,1,"p-captcha",[["siteKey","6Lf2XQkTAAAAANcvOwYqPxWL4iZDksFqHpS39GDA"]],null,[[null,"onResponse"]],function(l,n,u){var e=!0;return"onResponse"===n&&(e=!1!==l.component.showResponse(u)&&e),e},f,b)),e._2(19,4374528,null,0,i,[e.k,e.x],{siteKey:[0,"siteKey"]},{onResponse:"onResponse"}),(l()(),e._25(-1,null,["\n"])),(l()(),e._25(-1,null,["\n\n"])),(l()(),e._3(22,0,null,null,345,"div",[["class","content-section documentation"]],null,null,null,null,null)),(l()(),e._25(-1,null,["\n    "])),(l()(),e._3(24,0,null,null,342,"p-tabView",[["effect","fade"]],null,null,null,y.d,y.b)),e._2(25,1097728,null,1,r.b,[e.k],null,null),e._23(603979776,1,{tabPanels:1}),(l()(),e._25(-1,0,["\n        "])),(l()(),e._3(28,16777216,null,0,312,"p-tabPanel",[["header","Documentation"]],null,null,null,y.c,y.a)),e._2(29,1228800,[[1,4]],1,r.a,[e.M],{header:[0,"header"]},null),e._23(603979776,2,{templates:1}),(l()(),e._25(-1,0,["\n            "])),(l()(),e._3(32,0,null,0,1,"h3",[],null,null,null,null,null)),(l()(),e._25(-1,null,["Import"])),(l()(),e._25(-1,0,["\n"])),(l()(),e._3(35,0,null,0,4,"pre",[],null,null,null,null,null)),(l()(),e._3(36,0,null,null,2,"code",[["class","language-typescript"],["ngNonBindable",""],["pCode",""]],null,null,null,null,null)),e._2(37,81920,null,0,p.a,[e.k],null,null),(l()(),e._25(-1,null,["\nimport {CaptchaModule} from 'primeng/primeng';\n"])),(l()(),e._25(-1,null,["\n"])),(l()(),e._25(-1,0,["\n\n            "])),(l()(),e._3(41,0,null,0,1,"h3",[],null,null,null,null,null)),(l()(),e._25(-1,null,["Getting Started"])),(l()(),e._25(-1,0,["\n            "])),(l()(),e._3(44,0,null,0,1,"p",[],null,null,null,null,null)),(l()(),e._25(-1,null,["Captcha is used with a siteKey and a callback to verify the response."])),(l()(),e._25(-1,0,["\n            \n"])),(l()(),e._3(47,0,null,0,4,"pre",[],null,null,null,null,null)),(l()(),e._3(48,0,null,null,2,"code",[["class","language-markup"],["ngNonBindable",""],["pCode",""]],null,null,null,null,null)),e._2(49,81920,null,0,p.a,[e.k],null,null),(l()(),e._25(-1,null,['\n<p-captcha siteKey="YOUR_SITE_KEY" (onResponse)="showResponse($event)"></p-captcha>\n'])),(l()(),e._25(-1,null,["\n"])),(l()(),e._25(-1,0,["\n\n            "])),(l()(),e._3(53,0,null,0,1,"p",[],null,null,null,null,null)),(l()(),e._25(-1,null,["In addition include the captcha widget resource to your page."])),(l()(),e._25(-1,0,["\n"])),(l()(),e._3(56,0,null,0,4,"pre",[],null,null,null,null,null)),(l()(),e._3(57,0,null,null,2,"code",[["class","language-markup"],["ngNonBindable",""],["pCode",""]],null,null,null,null,null)),e._2(58,81920,null,0,p.a,[e.k],null,null),(l()(),e._25(-1,null,['\n<script src="https://www.google.com/recaptcha/api.js?render=explicit&onload=initRecaptcha" async defer><\/script>\n'])),(l()(),e._25(-1,null,["\n"])),(l()(),e._25(-1,0,["\n\n            "])),(l()(),e._3(62,0,null,0,1,"p",[],null,null,null,null,null)),(l()(),e._25(-1,null,["Global callback name is initRecaptcha by default and it can be changed using initCallback property ."])),(l()(),e._25(-1,0,["\n"])),(l()(),e._3(65,0,null,0,4,"pre",[],null,null,null,null,null)),(l()(),e._3(66,0,null,null,2,"code",[["class","language-markup"],["ngNonBindable",""],["pCode",""]],null,null,null,null,null)),e._2(67,81920,null,0,p.a,[e.k],null,null),(l()(),e._25(-1,null,['\n<script src="https://www.google.com/recaptcha/api.js?render=explicit&onload=loadCaptcha" async defer><\/script>\n'])),(l()(),e._25(-1,null,["\n"])),(l()(),e._25(-1,0,["\n\n"])),(l()(),e._3(71,0,null,0,4,"pre",[],null,null,null,null,null)),(l()(),e._3(72,0,null,null,2,"code",[["class","language-markup"],["ngNonBindable",""],["pCode",""]],null,null,null,null,null)),e._2(73,81920,null,0,p.a,[e.k],null,null),(l()(),e._25(-1,null,['\n<p-captcha siteKey="YOUR_SITE_KEY" (onResponse)="showResponse($event)" initCallback="loadCaptcha"></p-captcha>\n'])),(l()(),e._25(-1,null,["\n"])),(l()(),e._25(-1,0,["\n\n\n            "])),(l()(),e._3(77,0,null,0,1,"h3",[],null,null,null,null,null)),(l()(),e._25(-1,null,["Verification"])),(l()(),e._25(-1,0,["\n            "])),(l()(),e._3(80,0,null,0,4,"p",[],null,null,null,null,null)),(l()(),e._25(-1,null,["In order to ensure if a response token is valid, verification against recaptcha api needs to be done at backend. "])),(l()(),e._3(82,0,null,null,1,"a",[["href","https://developers.google.com/recaptcha/docs/verify"]],null,null,null,null,null)),(l()(),e._25(-1,null,["Read more"])),(l()(),e._25(-1,null,[" at \n            official documentation."])),(l()(),e._25(-1,0,["\n"])),(l()(),e._3(86,0,null,0,4,"pre",[],null,null,null,null,null)),(l()(),e._3(87,0,null,null,2,"code",[["class","language-typescript"],["ngNonBindable",""],["pCode",""]],null,null,null,null,null)),e._2(88,81920,null,0,p.a,[e.k],null,null),(l()(),e._25(-1,null,["\nshowResponse(response) {\n    //call to a backend to verify against recaptcha with private key\n}\n"])),(l()(),e._25(-1,null,["\n"])),(l()(),e._25(-1,0,["\n\n            "])),(l()(),e._3(92,0,null,0,1,"h3",[],null,null,null,null,null)),(l()(),e._25(-1,null,["Properties"])),(l()(),e._25(-1,0,["\n            "])),(l()(),e._3(95,0,null,0,130,"div",[["class","doc-tablewrapper"]],null,null,null,null,null)),(l()(),e._25(-1,null,["\n                "])),(l()(),e._3(97,0,null,null,127,"table",[["class","doc-table"]],null,null,null,null,null)),(l()(),e._25(-1,null,["\n                    "])),(l()(),e._3(99,0,null,null,16,"thead",[],null,null,null,null,null)),(l()(),e._25(-1,null,["\n                        "])),(l()(),e._3(101,0,null,null,13,"tr",[],null,null,null,null,null)),(l()(),e._25(-1,null,["\n                            "])),(l()(),e._3(103,0,null,null,1,"th",[],null,null,null,null,null)),(l()(),e._25(-1,null,["Name"])),(l()(),e._25(-1,null,["\n                            "])),(l()(),e._3(106,0,null,null,1,"th",[],null,null,null,null,null)),(l()(),e._25(-1,null,["Type"])),(l()(),e._25(-1,null,["\n                            "])),(l()(),e._3(109,0,null,null,1,"th",[],null,null,null,null,null)),(l()(),e._25(-1,null,["Default"])),(l()(),e._25(-1,null,["\n                            "])),(l()(),e._3(112,0,null,null,1,"th",[],null,null,null,null,null)),(l()(),e._25(-1,null,["Description"])),(l()(),e._25(-1,null,["\n                        "])),(l()(),e._25(-1,null,["\n                    "])),(l()(),e._25(-1,null,["\n                    "])),(l()(),e._3(117,0,null,null,106,"tbody",[],null,null,null,null,null)),(l()(),e._25(-1,null,["\n                        "])),(l()(),e._3(119,0,null,null,13,"tr",[],null,null,null,null,null)),(l()(),e._25(-1,null,["\n                            "])),(l()(),e._3(121,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),e._25(-1,null,["sitekey"])),(l()(),e._25(-1,null,["\n                            "])),(l()(),e._3(124,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),e._25(-1,null,["string"])),(l()(),e._25(-1,null,["\n                            "])),(l()(),e._3(127,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),e._25(-1,null,["null"])),(l()(),e._25(-1,null,["\n                            "])),(l()(),e._3(130,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),e._25(-1,null,["Public sitekey."])),(l()(),e._25(-1,null,["\n                        "])),(l()(),e._25(-1,null,["\n                        "])),(l()(),e._3(134,0,null,null,13,"tr",[],null,null,null,null,null)),(l()(),e._25(-1,null,["\n                            "])),(l()(),e._3(136,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),e._25(-1,null,["theme"])),(l()(),e._25(-1,null,["\n                            "])),(l()(),e._3(139,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),e._25(-1,null,["string"])),(l()(),e._25(-1,null,["\n                            "])),(l()(),e._3(142,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),e._25(-1,null,["light"])),(l()(),e._25(-1,null,["\n                            "])),(l()(),e._3(145,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),e._25(-1,null,["The color scheme of the widget."])),(l()(),e._25(-1,null,["\n                        "])),(l()(),e._25(-1,null,["\n                        "])),(l()(),e._3(149,0,null,null,13,"tr",[],null,null,null,null,null)),(l()(),e._25(-1,null,["\n                            "])),(l()(),e._3(151,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),e._25(-1,null,["type"])),(l()(),e._25(-1,null,["\n                            "])),(l()(),e._3(154,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),e._25(-1,null,["string"])),(l()(),e._25(-1,null,["\n                            "])),(l()(),e._3(157,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),e._25(-1,null,["image"])),(l()(),e._25(-1,null,["\n                            "])),(l()(),e._3(160,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),e._25(-1,null,["The type of CAPTCHA to serve."])),(l()(),e._25(-1,null,["\n                        "])),(l()(),e._25(-1,null,["\n                        "])),(l()(),e._3(164,0,null,null,13,"tr",[],null,null,null,null,null)),(l()(),e._25(-1,null,["\n                            "])),(l()(),e._3(166,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),e._25(-1,null,["size"])),(l()(),e._25(-1,null,["\n                            "])),(l()(),e._3(169,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),e._25(-1,null,["string"])),(l()(),e._25(-1,null,["\n                            "])),(l()(),e._3(172,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),e._25(-1,null,["normal"])),(l()(),e._25(-1,null,["\n                            "])),(l()(),e._3(175,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),e._25(-1,null,["The size of the widget."])),(l()(),e._25(-1,null,["\n                        "])),(l()(),e._25(-1,null,["\n                        "])),(l()(),e._3(179,0,null,null,13,"tr",[],null,null,null,null,null)),(l()(),e._25(-1,null,["\n                            "])),(l()(),e._3(181,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),e._25(-1,null,["tabindex"])),(l()(),e._25(-1,null,["\n                            "])),(l()(),e._3(184,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),e._25(-1,null,["number"])),(l()(),e._25(-1,null,["\n                            "])),(l()(),e._3(187,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),e._25(-1,null,["0"])),(l()(),e._25(-1,null,["\n                            "])),(l()(),e._3(190,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),e._25(-1,null,["The tabindex of the widget and challenge.\n                                If other elements in your page use tabindex, \n                                it should be set to make user navigation easier.\n                            "])),(l()(),e._25(-1,null,["\n                        "])),(l()(),e._25(-1,null,["\n                        "])),(l()(),e._3(194,0,null,null,13,"tr",[],null,null,null,null,null)),(l()(),e._25(-1,null,["\n                            "])),(l()(),e._3(196,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),e._25(-1,null,["language"])),(l()(),e._25(-1,null,["\n                            "])),(l()(),e._3(199,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),e._25(-1,null,["string"])),(l()(),e._25(-1,null,["\n                            "])),(l()(),e._3(202,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),e._25(-1,null,["en"])),(l()(),e._25(-1,null,["\n                            "])),(l()(),e._3(205,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),e._25(-1,null,["Language of the widget."])),(l()(),e._25(-1,null,["\n                        "])),(l()(),e._25(-1,null,["\n                        "])),(l()(),e._3(209,0,null,null,13,"tr",[],null,null,null,null,null)),(l()(),e._25(-1,null,["\n                            "])),(l()(),e._3(211,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),e._25(-1,null,["initCallback"])),(l()(),e._25(-1,null,["\n                            "])),(l()(),e._3(214,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),e._25(-1,null,["string"])),(l()(),e._25(-1,null,["\n                            "])),(l()(),e._3(217,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),e._25(-1,null,["initRecaptcha"])),(l()(),e._25(-1,null,["\n                            "])),(l()(),e._3(220,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),e._25(-1,null,["Name of global callback to initialize recaptcha."])),(l()(),e._25(-1,null,["\n                        "])),(l()(),e._25(-1,null,["\n                    "])),(l()(),e._25(-1,null,["\n                "])),(l()(),e._25(-1,null,["\n            "])),(l()(),e._25(-1,0,["\n            \n            "])),(l()(),e._3(227,0,null,0,1,"h3",[],null,null,null,null,null)),(l()(),e._25(-1,null,["Events"])),(l()(),e._25(-1,0,["\n            "])),(l()(),e._3(230,0,null,0,46,"div",[["class","doc-tablewrapper"]],null,null,null,null,null)),(l()(),e._25(-1,null,["\n                "])),(l()(),e._3(232,0,null,null,43,"table",[["class","doc-table"]],null,null,null,null,null)),(l()(),e._25(-1,null,["\n                    "])),(l()(),e._3(234,0,null,null,13,"thead",[],null,null,null,null,null)),(l()(),e._25(-1,null,["\n                    "])),(l()(),e._3(236,0,null,null,10,"tr",[],null,null,null,null,null)),(l()(),e._25(-1,null,["\n                        "])),(l()(),e._3(238,0,null,null,1,"th",[],null,null,null,null,null)),(l()(),e._25(-1,null,["Name"])),(l()(),e._25(-1,null,["\n                        "])),(l()(),e._3(241,0,null,null,1,"th",[],null,null,null,null,null)),(l()(),e._25(-1,null,["Parameters"])),(l()(),e._25(-1,null,["\n                        "])),(l()(),e._3(244,0,null,null,1,"th",[],null,null,null,null,null)),(l()(),e._25(-1,null,["Description"])),(l()(),e._25(-1,null,["\n                    "])),(l()(),e._25(-1,null,["\n                    "])),(l()(),e._25(-1,null,["\n                    "])),(l()(),e._3(249,0,null,null,25,"tbody",[],null,null,null,null,null)),(l()(),e._25(-1,null,["\n                        "])),(l()(),e._3(251,0,null,null,10,"tr",[],null,null,null,null,null)),(l()(),e._25(-1,null,["\n                            "])),(l()(),e._3(253,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),e._25(-1,null,["onResponse"])),(l()(),e._25(-1,null,["\n                            "])),(l()(),e._3(256,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),e._25(-1,null,["event.response: The user response token."])),(l()(),e._25(-1,null,["\n                            "])),(l()(),e._3(259,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),e._25(-1,null,["The callback function to be executed when the user submits a successful CAPTCHA response."])),(l()(),e._25(-1,null,["\n                        "])),(l()(),e._25(-1,null,["\n                        "])),(l()(),e._3(263,0,null,null,10,"tr",[],null,null,null,null,null)),(l()(),e._25(-1,null,["\n                            "])),(l()(),e._3(265,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),e._25(-1,null,["onExpire"])),(l()(),e._25(-1,null,["\n                            "])),(l()(),e._3(268,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),e._25(-1,null,["-"])),(l()(),e._25(-1,null,["\n                            "])),(l()(),e._3(271,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),e._25(-1,null,["The callback function to be executed when the recaptcha response expires and the user needs to solve a new CAPTCHA."])),(l()(),e._25(-1,null,["\n                        "])),(l()(),e._25(-1,null,["\n                    "])),(l()(),e._25(-1,null,["\n                "])),(l()(),e._25(-1,null,["\n            "])),(l()(),e._25(-1,0,["\n            \n            "])),(l()(),e._3(278,0,null,0,1,"h3",[],null,null,null,null,null)),(l()(),e._25(-1,null,["Methods"])),(l()(),e._25(-1,0,["\n            "])),(l()(),e._3(281,0,null,0,46,"div",[["class","doc-tablewrapper"]],null,null,null,null,null)),(l()(),e._25(-1,null,["\n                "])),(l()(),e._3(283,0,null,null,43,"table",[["class","doc-table"]],null,null,null,null,null)),(l()(),e._25(-1,null,["\n                    "])),(l()(),e._3(285,0,null,null,13,"thead",[],null,null,null,null,null)),(l()(),e._25(-1,null,["\n                        "])),(l()(),e._3(287,0,null,null,10,"tr",[],null,null,null,null,null)),(l()(),e._25(-1,null,["\n                            "])),(l()(),e._3(289,0,null,null,1,"th",[],null,null,null,null,null)),(l()(),e._25(-1,null,["Name"])),(l()(),e._25(-1,null,["\n                            "])),(l()(),e._3(292,0,null,null,1,"th",[],null,null,null,null,null)),(l()(),e._25(-1,null,["Parameters"])),(l()(),e._25(-1,null,["\n                            "])),(l()(),e._3(295,0,null,null,1,"th",[],null,null,null,null,null)),(l()(),e._25(-1,null,["Description"])),(l()(),e._25(-1,null,["\n                        "])),(l()(),e._25(-1,null,["\n                    "])),(l()(),e._25(-1,null,["\n                    "])),(l()(),e._3(300,0,null,null,25,"tbody",[],null,null,null,null,null)),(l()(),e._25(-1,null,["\n                        "])),(l()(),e._3(302,0,null,null,10,"tr",[],null,null,null,null,null)),(l()(),e._25(-1,null,["\n                            "])),(l()(),e._3(304,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),e._25(-1,null,["reset"])),(l()(),e._25(-1,null,["\n                            "])),(l()(),e._3(307,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),e._25(-1,null,["-"])),(l()(),e._25(-1,null,["\n                            "])),(l()(),e._3(310,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),e._25(-1,null,["Resets the reCAPTCHA widget."])),(l()(),e._25(-1,null,["\n                        "])),(l()(),e._25(-1,null,["\n                        "])),(l()(),e._3(314,0,null,null,10,"tr",[],null,null,null,null,null)),(l()(),e._25(-1,null,["\n                            "])),(l()(),e._3(316,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),e._25(-1,null,["getResponse"])),(l()(),e._25(-1,null,["\n                            "])),(l()(),e._3(319,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),e._25(-1,null,["-"])),(l()(),e._25(-1,null,["\n                            "])),(l()(),e._3(322,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),e._25(-1,null,["Gets the response for the reCAPTCHA widget."])),(l()(),e._25(-1,null,["\n                        "])),(l()(),e._25(-1,null,["\n                    "])),(l()(),e._25(-1,null,["\n                "])),(l()(),e._25(-1,null,["\n            "])),(l()(),e._25(-1,0,["\n            \n            "])),(l()(),e._3(329,0,null,0,1,"h3",[],null,null,null,null,null)),(l()(),e._25(-1,null,["Official Documentation"])),(l()(),e._25(-1,0,["\n            "])),(l()(),e._3(332,0,null,0,1,"a",[["href","https://developers.google.com/recaptcha/docs/display"]],null,null,null,null,null)),(l()(),e._25(-1,null,["Here"])),(l()(),e._25(-1,0,["\n\n            "])),(l()(),e._3(335,0,null,0,1,"h3",[],null,null,null,null,null)),(l()(),e._25(-1,null,["Dependencies"])),(l()(),e._25(-1,0,["\n            "])),(l()(),e._3(338,0,null,0,1,"p",[],null,null,null,null,null)),(l()(),e._25(-1,null,["Google Recaptcha V2"])),(l()(),e._25(-1,0,["\n        "])),(l()(),e._25(-1,0,["\n\n        "])),(l()(),e._3(342,16777216,null,0,23,"p-tabPanel",[["header","Source"]],null,null,null,y.c,y.a)),e._2(343,1228800,[[1,4]],1,r.a,[e.M],{header:[0,"header"]},null),e._23(603979776,3,{templates:1}),(l()(),e._25(-1,0,["\n            "])),(l()(),e._3(346,0,null,0,6,"a",[["class","btn-viewsource"],["href","https://github.com/primefaces/primeng/tree/master/src/app/showcase/components/captcha"],["target","_blank"]],null,null,null,null,null)),(l()(),e._25(-1,null,["\n                "])),(l()(),e._3(348,0,null,null,0,"i",[["class","fa fa-github"]],null,null,null,null,null)),(l()(),e._25(-1,null,["\n                "])),(l()(),e._3(350,0,null,null,1,"span",[],null,null,null,null,null)),(l()(),e._25(-1,null,["View on GitHub"])),(l()(),e._25(-1,null,["\n            "])),(l()(),e._25(-1,0,["\n"])),(l()(),e._3(354,0,null,0,4,"pre",[],null,null,null,null,null)),(l()(),e._3(355,0,null,null,2,"code",[["class","language-markup"],["ngNonBindable",""],["pCode",""]],null,null,null,null,null)),e._2(356,81920,null,0,p.a,[e.k],null,null),(l()(),e._25(-1,null,['\n<p-growl [value]="msgs" sticky="sticky"></p-growl>\n\n<p-captcha siteKey="6Lf2XQkTAAAAANcvOwYqPxWL4iZDksFqHpS39GDA" (onResponse)="showResponse($event)"></p-captcha>\n'])),(l()(),e._25(-1,null,["\n"])),(l()(),e._25(-1,0,["\n\n"])),(l()(),e._3(360,0,null,0,4,"pre",[],null,null,null,null,null)),(l()(),e._3(361,0,null,null,2,"code",[["class","language-typescript"],["ngNonBindable",""],["pCode",""]],null,null,null,null,null)),e._2(362,81920,null,0,p.a,[e.k],null,null),(l()(),e._25(-1,null,["\nexport class CaptchaDemo {\n    \n    msgs: Message[] = [];\n    \n    showResponse(event) {\n        this.msgs = [];\n        this.msgs.push({severity:'info', summary:'Succees', detail: 'User Responded'});\n    }\n}\n"])),(l()(),e._25(-1,null,["\n"])),(l()(),e._25(-1,0,["\n        "])),(l()(),e._25(-1,0,["\n    "])),(l()(),e._25(-1,null,["\n"]))],function(l,n){l(n,16,0,"sticky",n.component.msgs),l(n,19,0,"6Lf2XQkTAAAAANcvOwYqPxWL4iZDksFqHpS39GDA"),l(n,29,0,"Documentation"),l(n,37,0),l(n,49,0),l(n,58,0),l(n,67,0),l(n,73,0),l(n,88,0),l(n,343,0,"Source"),l(n,356,0),l(n,362,0)},null)}var v=e.Z("ng-component",_,function(l){return e._27(0,[(l()(),e._3(0,0,null,null,1,"ng-component",[],null,null,null,w,k)),e._2(1,49152,null,0,_,[],null,null)],null,null)},{},{},[]),C=u("lnn4");u.d(n,"CaptchaDemoModuleNgFactory",function(){return R});var R=e._0(d,[],function(l){return e._14([e._15(512,e.j,e.W,[[8,[v]],[3,e.j],e.v]),e._15(4608,t.n,t.m,[e.s,[2,t.s]]),e._15(512,t.b,t.b,[]),e._15(512,a.o,a.o,[[2,a.t],[2,a.k]]),e._15(512,s,s,[]),e._15(512,o,o,[]),e._15(512,C.m,C.m,[]),e._15(512,r.c,r.c,[]),e._15(512,c.b,c.b,[]),e._15(512,p.b,p.b,[]),e._15(512,d,d,[]),e._15(1024,a.i,function(){return[[{path:"",component:_}]]},[])])})}});