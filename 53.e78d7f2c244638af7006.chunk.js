webpackJsonp([53],{"3aCT":function(l,n,u){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var e=u("LMZF"),t=(u("6Xbx"),u("Un6q")),i=function(){this.images=[],this.images.push({source:"assets/showcase/images/demo/galleria/galleria1.jpg",alt:"Description for Image 1",title:"Title 1"}),this.images.push({source:"assets/showcase/images/demo/galleria/galleria2.jpg",alt:"Description for Image 2",title:"Title 2"}),this.images.push({source:"assets/showcase/images/demo/galleria/galleria3.jpg",alt:"Description for Image 3",title:"Title 3"}),this.images.push({source:"assets/showcase/images/demo/galleria/galleria4.jpg",alt:"Description for Image 4",title:"Title 4"}),this.images.push({source:"assets/showcase/images/demo/galleria/galleria5.jpg",alt:"Description for Image 5",title:"Title 5"}),this.images.push({source:"assets/showcase/images/demo/galleria/galleria6.jpg",alt:"Description for Image 6",title:"Title 6"}),this.images.push({source:"assets/showcase/images/demo/galleria/galleria7.jpg",alt:"Description for Image 7",title:"Title 7"}),this.images.push({source:"assets/showcase/images/demo/galleria/galleria8.jpg",alt:"Description for Image 8",title:"Title 8"}),this.images.push({source:"assets/showcase/images/demo/galleria/galleria9.jpg",alt:"Description for Image 9",title:"Title 9"}),this.images.push({source:"assets/showcase/images/demo/galleria/galleria10.jpg",alt:"Description for Image 10",title:"Title 10"}),this.images.push({source:"assets/showcase/images/demo/galleria/galleria11.jpg",alt:"Description for Image 11",title:"Title 11"}),this.images.push({source:"assets/showcase/images/demo/galleria/galleria12.jpg",alt:"Description for Image 12",title:"Title 12"})},a=u("UHIZ"),s=function(){},r=u("hhSD"),o=function(){function l(l,n){this.el=l,this.domHandler=n,this.panelWidth=600,this.panelHeight=400,this.frameWidth=60,this.frameHeight=40,this.activeIndex=0,this.showFilmstrip=!0,this.autoPlay=!0,this.transitionInterval=4e3,this.showCaption=!0,this.onImageClicked=new e.m,this.stripLeft=0}return l.prototype.ngAfterViewChecked=function(){this.imagesChanged&&(this.stopSlideshow(),this.render(),this.imagesChanged=!1)},Object.defineProperty(l.prototype,"images",{get:function(){return this._images},set:function(l){this._images=l,this.activeIndex=0,this.imagesChanged=!0},enumerable:!0,configurable:!0}),l.prototype.ngAfterViewInit=function(){this.container=this.el.nativeElement.children[0],this.panelWrapper=this.domHandler.findSingle(this.el.nativeElement,"ul.ui-galleria-panel-wrapper"),this.initialized=!0,this.showFilmstrip&&(this.stripWrapper=this.domHandler.findSingle(this.container,"div.ui-galleria-filmstrip-wrapper"),this.strip=this.domHandler.findSingle(this.stripWrapper,"ul.ui-galleria-filmstrip")),this.images&&this.images.length&&this.render()},l.prototype.render=function(){this.panels=this.domHandler.find(this.panelWrapper,"li.ui-galleria-panel"),this.showFilmstrip&&(this.frames=this.domHandler.find(this.strip,"li.ui-galleria-frame"),this.stripWrapper.style.width=this.domHandler.width(this.panelWrapper)-50+"px",this.stripWrapper.style.height=this.frameHeight+"px"),this.showCaption&&(this.caption=this.domHandler.findSingle(this.container,"div.ui-galleria-caption"),this.caption.style.bottom=this.showFilmstrip?this.domHandler.getOuterHeight(this.stripWrapper,!0)+"px":"0px",this.caption.style.width=this.domHandler.width(this.panelWrapper)+"px"),this.autoPlay&&this.startSlideshow(),this.container.style.visibility="visible"},l.prototype.startSlideshow=function(){var l=this;this.interval=setInterval(function(){l.next()},this.transitionInterval),this.slideshowActive=!0},l.prototype.stopSlideshow=function(){this.interval&&clearInterval(this.interval),this.slideshowActive=!1},l.prototype.clickNavRight=function(){this.slideshowActive&&this.stopSlideshow(),this.next()},l.prototype.clickNavLeft=function(){this.slideshowActive&&this.stopSlideshow(),this.prev()},l.prototype.frameClick=function(l){this.slideshowActive&&this.stopSlideshow(),this.select(this.domHandler.index(l),!1)},l.prototype.prev=function(){0!==this.activeIndex&&this.select(this.activeIndex-1,!0)},l.prototype.next=function(){this.activeIndex!==this.panels.length-1?this.select(this.activeIndex+1,!0):(this.select(0,!1),this.stripLeft=0)},l.prototype.select=function(l,n){if(l!==this.activeIndex){if(this.domHandler.fadeIn(this.panels[l],500),this.showFilmstrip){var u=this.frames[l];if(void 0===n||!0===n){var e=u.offsetLeft,t=this.frameWidth+parseInt(getComputedStyle(u)["margin-right"],10),i=e+this.strip.offsetLeft;i+this.frameWidth>this.domHandler.width(this.stripWrapper)?this.stripLeft-=t:i<0&&(this.stripLeft+=t)}}this.activeIndex=l}},l.prototype.clickImage=function(l,n,u){this.onImageClicked.emit({originalEvent:l,image:n,index:u})},l.prototype.ngOnDestroy=function(){this.stopSlideshow()},l}(),_=function(){},g=u("5UlM"),c=u("ttb0"),p=function(){},h=e._1({encapsulation:2,styles:[],data:{}});function m(l){return e._27(0,[(l()(),e._3(0,0,null,null,5,"li",[["class","ui-galleria-panel"]],[[4,"width","px"],[4,"height","px"]],[[null,"click"]],function(l,n,u){var e=!0;return"click"===n&&(e=!1!==l.component.clickImage(u,l.context.$implicit,l.context.index)&&e),e},null,null)),e._2(1,278528,null,0,t.j,[e.q,e.r,e.k,e.B],{klass:[0,"klass"],ngClass:[1,"ngClass"]},null),e._20(2,{"ui-helper-hidden":0}),(l()(),e._25(-1,null,["\n                    "])),(l()(),e._3(4,0,null,null,0,"img",[["class","ui-panel-images"]],[[8,"src",4],[8,"alt",0],[8,"title",0]],null,null,null,null)),(l()(),e._25(-1,null,["\n                "]))],function(l,n){l(n,1,0,"ui-galleria-panel",l(n,2,0,n.context.index!=n.component.activeIndex))},function(l,n){var u=n.component;l(n,0,0,u.panelWidth,u.panelHeight),l(n,4,0,n.context.$implicit.source,n.context.$implicit.alt,n.context.$implicit.title)})}function d(l){return e._27(0,[(l()(),e._3(0,0,[["frame",1]],null,8,"li",[["class","ui-galleria-frame"]],[[4,"width","px"],[4,"height","px"],[4,"transition",null]],[[null,"click"]],function(l,n,u){var t=!0;return"click"===n&&(t=!1!==l.component.frameClick(e._17(l,0))&&t),t},null,null)),e._2(1,278528,null,0,t.j,[e.q,e.r,e.k,e.B],{klass:[0,"klass"],ngClass:[1,"ngClass"]},null),e._20(2,{"ui-galleria-frame-active":0}),(l()(),e._25(-1,null,["\n                        "])),(l()(),e._3(4,0,null,null,3,"div",[["class","ui-galleria-frame-content"]],null,null,null,null,null)),(l()(),e._25(-1,null,["\n                            "])),(l()(),e._3(6,0,null,null,0,"img",[["class","ui-galleria-frame-image"]],[[8,"src",4],[8,"alt",0],[8,"title",0],[4,"width","px"],[4,"height","px"]],null,null,null,null)),(l()(),e._25(-1,null,["\n                        "])),(l()(),e._25(-1,null,["\n                    "]))],function(l,n){l(n,1,0,"ui-galleria-frame",l(n,2,0,n.context.index==n.component.activeIndex))},function(l,n){var u=n.component;l(n,0,0,u.frameWidth,u.frameHeight,"opacity 0.75s ease"),l(n,6,0,n.context.$implicit.source,n.context.$implicit.alt,n.context.$implicit.title,u.frameWidth,u.frameHeight)})}function f(l){return e._27(0,[(l()(),e._3(0,0,null,null,9,"div",[],null,null,null,null,null)),e._2(1,278528,null,0,t.j,[e.q,e.r,e.k,e.B],{ngClass:[0,"ngClass"]},null),e._20(2,{"ui-galleria-filmstrip-wrapper":0}),(l()(),e._25(-1,null,["\n                "])),(l()(),e._3(4,0,null,null,4,"ul",[["class","ui-galleria-filmstrip"],["style","transition:left 1s"]],[[4,"left","px"]],null,null,null,null)),(l()(),e._25(-1,null,["\n                    "])),(l()(),e.Y(16777216,null,null,1,null,d)),e._2(7,802816,null,0,t.k,[e.M,e.J,e.q],{ngForOf:[0,"ngForOf"]},null),(l()(),e._25(-1,null,["\n                "])),(l()(),e._25(-1,null,["\n            "]))],function(l,n){var u=n.component;l(n,1,0,l(n,2,0,!0)),l(n,7,0,u.images)},function(l,n){l(n,4,0,n.component.stripLeft)})}function v(l){return e._27(0,[(l()(),e._3(0,0,null,null,0,"div",[["class","ui-galleria-nav-prev fa fa-fw fa-chevron-circle-left"]],[[4,"bottom","px"]],[[null,"click"]],function(l,n,u){var e=!0;return"click"===n&&(e=!1!==l.component.clickNavLeft()&&e),e},null,null))],null,function(l,n){l(n,0,0,n.component.frameHeight/2)})}function w(l){return e._27(0,[(l()(),e._3(0,0,null,null,6,"div",[["class","ui-galleria-caption"],["style","display:block"]],null,null,null,null,null)),(l()(),e._25(-1,null,["\n                "])),(l()(),e._3(2,0,null,null,1,"h4",[],null,null,null,null,null)),(l()(),e._25(3,null,["",""])),(l()(),e._3(4,0,null,null,1,"p",[],null,null,null,null,null)),(l()(),e._25(5,null,["",""])),(l()(),e._25(-1,null,["\n            "]))],null,function(l,n){var u=n.component;l(n,3,0,null==u.images[u.activeIndex]?null:u.images[u.activeIndex].title),l(n,5,0,null==u.images[u.activeIndex]?null:u.images[u.activeIndex].alt)})}function I(l){return e._27(0,[(l()(),e._25(-1,null,["\n        "])),(l()(),e._3(1,0,null,null,21,"div",[],[[4,"width","px"]],null,null,null,null)),e._2(2,278528,null,0,t.j,[e.q,e.r,e.k,e.B],{klass:[0,"klass"],ngClass:[1,"ngClass"]},null),e._20(3,{"ui-galleria ui-widget ui-widget-content ui-corner-all":0}),e._2(4,278528,null,0,t.o,[e.r,e.k,e.B],{ngStyle:[0,"ngStyle"]},null),(l()(),e._25(-1,null,["\n            "])),(l()(),e._3(6,0,null,null,4,"ul",[["class","ui-galleria-panel-wrapper"]],[[4,"width","px"],[4,"height","px"]],null,null,null,null)),(l()(),e._25(-1,null,["\n                "])),(l()(),e.Y(16777216,null,null,1,null,m)),e._2(9,802816,null,0,t.k,[e.M,e.J,e.q],{ngForOf:[0,"ngForOf"]},null),(l()(),e._25(-1,null,["\n            "])),(l()(),e._25(-1,null,["\n            "])),(l()(),e.Y(16777216,null,null,1,null,f)),e._2(13,16384,null,0,t.l,[e.M,e.J],{ngIf:[0,"ngIf"]},null),(l()(),e._25(-1,null,["\n            "])),(l()(),e.Y(16777216,null,null,1,null,v)),e._2(16,16384,null,0,t.l,[e.M,e.J],{ngIf:[0,"ngIf"]},null),(l()(),e._25(-1,null,["\n            "])),(l()(),e._3(18,0,null,null,0,"div",[["class","ui-galleria-nav-next fa fa-fw fa-chevron-circle-right"]],[[4,"bottom","px"]],[[null,"click"]],function(l,n,u){var e=!0;return"click"===n&&(e=!1!==l.component.clickNavRight()&&e),e},null,null)),(l()(),e._25(-1,null,["\n            "])),(l()(),e.Y(16777216,null,null,1,null,w)),e._2(21,16384,null,0,t.l,[e.M,e.J],{ngIf:[0,"ngIf"]},null),(l()(),e._25(-1,null,["\n        "])),(l()(),e._25(-1,null,["\n    "]))],function(l,n){var u=n.component;l(n,2,0,u.styleClass,l(n,3,0,!0)),l(n,4,0,u.style),l(n,9,0,u.images),l(n,13,0,u.showFilmstrip),l(n,16,0,0!==u.activeIndex),l(n,21,0,u.showCaption&&u.images)},function(l,n){var u=n.component;l(n,1,0,u.panelWidth),l(n,6,0,u.panelWidth,u.panelHeight),l(n,18,0,u.frameHeight/2)})}var b=u("Oncm"),y=e._1({encapsulation:2,styles:[],data:{}});function x(l){return e._27(0,[(l()(),e._3(0,0,null,null,10,"div",[["class","content-section introduction"]],null,null,null,null,null)),(l()(),e._25(-1,null,["\n    "])),(l()(),e._3(2,0,null,null,7,"div",[],null,null,null,null,null)),(l()(),e._25(-1,null,["\n        "])),(l()(),e._3(4,0,null,null,1,"span",[["class","feature-title"]],null,null,null,null,null)),(l()(),e._25(-1,null,["Galleria"])),(l()(),e._25(-1,null,["\n        "])),(l()(),e._3(7,0,null,null,1,"span",[],null,null,null,null,null)),(l()(),e._25(-1,null,["Galleria is a content gallery component."])),(l()(),e._25(-1,null,["\n    "])),(l()(),e._25(-1,null,["\n"])),(l()(),e._25(-1,null,["\n\n"])),(l()(),e._3(12,0,null,null,5,"div",[["class","content-section implementation"]],null,null,null,null,null)),(l()(),e._25(-1,null,["\n    "])),(l()(),e._3(14,0,null,null,2,"p-galleria",[["panelHeight","313"],["panelWidth","500"]],null,null,null,I,h)),e._22(512,null,r.a,r.a,[]),e._2(16,12763136,null,0,o,[e.k,r.a],{panelWidth:[0,"panelWidth"],panelHeight:[1,"panelHeight"],images:[2,"images"]},null),(l()(),e._25(-1,null,["\n"])),(l()(),e._25(-1,null,["\n\n"])),(l()(),e._3(19,0,null,null,411,"div",[["class","content-section documentation"]],null,null,null,null,null)),(l()(),e._25(-1,null,["\n    "])),(l()(),e._3(21,0,null,null,408,"p-tabView",[["effect","fade"]],null,null,null,b.d,b.b)),e._2(22,1097728,null,1,g.b,[e.k],null,null),e._23(603979776,1,{tabPanels:1}),(l()(),e._25(-1,0,["\n        "])),(l()(),e._3(25,16777216,null,0,378,"p-tabPanel",[["header","Documentation"]],null,null,null,b.c,b.a)),e._2(26,1228800,[[1,4]],1,g.a,[e.M],{header:[0,"header"]},null),e._23(603979776,2,{templates:1}),(l()(),e._25(-1,0,["\n            "])),(l()(),e._3(29,0,null,0,1,"h3",[],null,null,null,null,null)),(l()(),e._25(-1,null,["Import"])),(l()(),e._25(-1,0,["\n"])),(l()(),e._3(32,0,null,0,4,"pre",[],null,null,null,null,null)),(l()(),e._3(33,0,null,null,2,"code",[["class","language-typescript"],["ngNonBindable",""],["pCode",""]],null,null,null,null,null)),e._2(34,81920,null,0,c.a,[e.k],null,null),(l()(),e._25(-1,null,["\nimport {GalleriaModule} from 'primeng/primeng';\n"])),(l()(),e._25(-1,null,["\n"])),(l()(),e._25(-1,0,["\n\n            "])),(l()(),e._3(38,0,null,0,1,"h3",[],null,null,null,null,null)),(l()(),e._25(-1,null,["Getting Started"])),(l()(),e._25(-1,0,["\n            "])),(l()(),e._3(41,0,null,0,1,"p",[],null,null,null,null,null)),(l()(),e._25(-1,null,["Galleria requires a set of images to display. Source attribute defines the path of the image whereas title and alt attributes are used in the caption section\n                to display summary and description about an image."])),(l()(),e._25(-1,0,["\n"])),(l()(),e._3(44,0,null,0,4,"pre",[],null,null,null,null,null)),(l()(),e._3(45,0,null,null,2,"code",[["class","language-markup"],["ngNonBindable",""],["pCode",""]],null,null,null,null,null)),e._2(46,81920,null,0,c.a,[e.k],null,null),(l()(),e._25(-1,null,['\n<p-galleria [images]="images" panelWidth="500" panelHeight="313" [showCaption]="true"></p-galleria>\n'])),(l()(),e._25(-1,null,["\n"])),(l()(),e._25(-1,0,["\n\n"])),(l()(),e._3(50,0,null,0,4,"pre",[],null,null,null,null,null)),(l()(),e._3(51,0,null,null,2,"code",[["class","language-typescript"],["ngNonBindable",""],["pCode",""]],null,null,null,null,null)),e._2(52,81920,null,0,c.a,[e.k],null,null),(l()(),e._25(-1,null,["\nexport class GalleriaDemo implements OnInit {\n    \n    images: any[];\n    \n    ngOnInit() {\n        this.images = [];\n        this.images.push({source:'assets/showcase/images/demo/galleria/galleria1.jpg', alt:'Description for Image 1', title:'Title 1'});\n        this.images.push({source:'assets/showcase/images/demo/galleria/galleria2.jpg', alt:'Description for Image 2', title:'Title 2'});\n        this.images.push({source:'assets/showcase/images/demo/galleria/galleria3.jpg', alt:'Description for Image 3', title:'Title 3'});\n        this.images.push({source:'assets/showcase/images/demo/galleria/galleria4.jpg', alt:'Description for Image 4', title:'Title 4'});\n        this.images.push({source:'assets/showcase/images/demo/galleria/galleria5.jpg', alt:'Description for Image 5', title:'Title 5'});\n        this.images.push({source:'assets/showcase/images/demo/galleria/galleria6.jpg', alt:'Description for Image 6', title:'Title 6'});\n        this.images.push({source:'assets/showcase/images/demo/galleria/galleria7.jpg', alt:'Description for Image 7', title:'Title 7'});\n        this.images.push({source:'assets/showcase/images/demo/galleria/galleria8.jpg', alt:'Description for Image 8', title:'Title 8'});\n        this.images.push({source:'assets/showcase/images/demo/galleria/galleria9.jpg', alt:'Description for Image 9', title:'Title 9'});\n        this.images.push({source:'assets/showcase/images/demo/galleria/galleria10.jpg', alt:'Description for Image 10', title:'Title 10'});\n        this.images.push({source:'assets/showcase/images/demo/galleria/galleria11.jpg', alt:'Description for Image 11', title:'Title 11'});\n        this.images.push({source:'assets/showcase/images/demo/galleria/galleria12.jpg', alt:'Description for Image 12', title:'Title 12'});\n    }\n}\n"])),(l()(),e._25(-1,null,["\n"])),(l()(),e._25(-1,0,["\n\n            "])),(l()(),e._3(56,0,null,0,1,"h3",[],null,null,null,null,null)),(l()(),e._25(-1,null,["Properties"])),(l()(),e._25(-1,0,["\n            "])),(l()(),e._3(59,0,null,0,190,"div",[["class","doc-tablewrapper"]],null,null,null,null,null)),(l()(),e._25(-1,null,["\n                "])),(l()(),e._3(61,0,null,null,187,"table",[["class","doc-table"]],null,null,null,null,null)),(l()(),e._25(-1,null,["\n                    "])),(l()(),e._3(63,0,null,null,16,"thead",[],null,null,null,null,null)),(l()(),e._25(-1,null,["\n                        "])),(l()(),e._3(65,0,null,null,13,"tr",[],null,null,null,null,null)),(l()(),e._25(-1,null,["\n                            "])),(l()(),e._3(67,0,null,null,1,"th",[],null,null,null,null,null)),(l()(),e._25(-1,null,["Name"])),(l()(),e._25(-1,null,["\n                            "])),(l()(),e._3(70,0,null,null,1,"th",[],null,null,null,null,null)),(l()(),e._25(-1,null,["Type"])),(l()(),e._25(-1,null,["\n                            "])),(l()(),e._3(73,0,null,null,1,"th",[],null,null,null,null,null)),(l()(),e._25(-1,null,["Default"])),(l()(),e._25(-1,null,["\n                            "])),(l()(),e._3(76,0,null,null,1,"th",[],null,null,null,null,null)),(l()(),e._25(-1,null,["Description"])),(l()(),e._25(-1,null,["\n                        "])),(l()(),e._25(-1,null,["\n                    "])),(l()(),e._25(-1,null,["\n                    "])),(l()(),e._3(81,0,null,null,166,"tbody",[],null,null,null,null,null)),(l()(),e._25(-1,null,["\n                        "])),(l()(),e._3(83,0,null,null,13,"tr",[],null,null,null,null,null)),(l()(),e._25(-1,null,["\n                            "])),(l()(),e._3(85,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),e._25(-1,null,["panelWidth"])),(l()(),e._25(-1,null,["\n                            "])),(l()(),e._3(88,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),e._25(-1,null,["number"])),(l()(),e._25(-1,null,["\n                            "])),(l()(),e._3(91,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),e._25(-1,null,["600"])),(l()(),e._25(-1,null,["\n                            "])),(l()(),e._3(94,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),e._25(-1,null,["Width of the content panel."])),(l()(),e._25(-1,null,["\n                        "])),(l()(),e._25(-1,null,["\n                        "])),(l()(),e._3(98,0,null,null,13,"tr",[],null,null,null,null,null)),(l()(),e._25(-1,null,["\n                            "])),(l()(),e._3(100,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),e._25(-1,null,["panelHeight"])),(l()(),e._25(-1,null,["\n                            "])),(l()(),e._3(103,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),e._25(-1,null,["number"])),(l()(),e._25(-1,null,["\n                            "])),(l()(),e._3(106,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),e._25(-1,null,["400"])),(l()(),e._25(-1,null,["\n                            "])),(l()(),e._3(109,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),e._25(-1,null,["Height of the content panel."])),(l()(),e._25(-1,null,["\n                        "])),(l()(),e._25(-1,null,["\n                        "])),(l()(),e._3(113,0,null,null,13,"tr",[],null,null,null,null,null)),(l()(),e._25(-1,null,["\n                            "])),(l()(),e._3(115,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),e._25(-1,null,["frameWidth"])),(l()(),e._25(-1,null,["\n                            "])),(l()(),e._3(118,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),e._25(-1,null,["number"])),(l()(),e._25(-1,null,["\n                            "])),(l()(),e._3(121,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),e._25(-1,null,["60"])),(l()(),e._25(-1,null,["\n                            "])),(l()(),e._3(124,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),e._25(-1,null,["Width of the filmstrip frames."])),(l()(),e._25(-1,null,["\n                        "])),(l()(),e._25(-1,null,["\n                        "])),(l()(),e._3(128,0,null,null,13,"tr",[],null,null,null,null,null)),(l()(),e._25(-1,null,["\n                            "])),(l()(),e._3(130,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),e._25(-1,null,["frameHeight"])),(l()(),e._25(-1,null,["\n                            "])),(l()(),e._3(133,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),e._25(-1,null,["number"])),(l()(),e._25(-1,null,["\n                            "])),(l()(),e._3(136,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),e._25(-1,null,["40"])),(l()(),e._25(-1,null,["\n                            "])),(l()(),e._3(139,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),e._25(-1,null,["Height of the filmstrip frames."])),(l()(),e._25(-1,null,["\n                        "])),(l()(),e._25(-1,null,["\n                        "])),(l()(),e._3(143,0,null,null,13,"tr",[],null,null,null,null,null)),(l()(),e._25(-1,null,["\n                            "])),(l()(),e._3(145,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),e._25(-1,null,["showFilmstrip"])),(l()(),e._25(-1,null,["\n                            "])),(l()(),e._3(148,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),e._25(-1,null,["boolean"])),(l()(),e._25(-1,null,["\n                            "])),(l()(),e._3(151,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),e._25(-1,null,["true"])),(l()(),e._25(-1,null,["\n                            "])),(l()(),e._3(154,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),e._25(-1,null,["Defines visibility of filmstrip."])),(l()(),e._25(-1,null,["\n                        "])),(l()(),e._25(-1,null,["\n                        "])),(l()(),e._3(158,0,null,null,13,"tr",[],null,null,null,null,null)),(l()(),e._25(-1,null,["\n                            "])),(l()(),e._3(160,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),e._25(-1,null,["autoPlay"])),(l()(),e._25(-1,null,["\n                            "])),(l()(),e._3(163,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),e._25(-1,null,["boolean"])),(l()(),e._25(-1,null,["\n                            "])),(l()(),e._3(166,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),e._25(-1,null,["true"])),(l()(),e._25(-1,null,["\n                            "])),(l()(),e._3(169,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),e._25(-1,null,["Images are displayed with a slideshow in autoPlay mode."])),(l()(),e._25(-1,null,["\n                        "])),(l()(),e._25(-1,null,["\n                        "])),(l()(),e._3(173,0,null,null,13,"tr",[],null,null,null,null,null)),(l()(),e._25(-1,null,["\n                            "])),(l()(),e._3(175,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),e._25(-1,null,["transitionInterval"])),(l()(),e._25(-1,null,["\n                            "])),(l()(),e._3(178,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),e._25(-1,null,["number"])),(l()(),e._25(-1,null,["\n                            "])),(l()(),e._3(181,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),e._25(-1,null,["4000"])),(l()(),e._25(-1,null,["\n                            "])),(l()(),e._3(184,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),e._25(-1,null,["Time in milliseconds between each slide in autoPlay mode."])),(l()(),e._25(-1,null,["\n                        "])),(l()(),e._25(-1,null,["\n                        "])),(l()(),e._3(188,0,null,null,13,"tr",[],null,null,null,null,null)),(l()(),e._25(-1,null,["\n                            "])),(l()(),e._3(190,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),e._25(-1,null,["effect"])),(l()(),e._25(-1,null,["\n                            "])),(l()(),e._3(193,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),e._25(-1,null,["string"])),(l()(),e._25(-1,null,["\n                            "])),(l()(),e._3(196,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),e._25(-1,null,["fade"])),(l()(),e._25(-1,null,["\n                            "])),(l()(),e._3(199,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),e._25(-1,null,["Name of animation to use on transitions."])),(l()(),e._25(-1,null,["\n                        "])),(l()(),e._25(-1,null,["\n                        "])),(l()(),e._3(203,0,null,null,13,"tr",[],null,null,null,null,null)),(l()(),e._25(-1,null,["\n                            "])),(l()(),e._3(205,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),e._25(-1,null,["effectDuration"])),(l()(),e._25(-1,null,["\n                            "])),(l()(),e._3(208,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),e._25(-1,null,["number"])),(l()(),e._25(-1,null,["\n                            "])),(l()(),e._3(211,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),e._25(-1,null,["250"])),(l()(),e._25(-1,null,["\n                            "])),(l()(),e._3(214,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),e._25(-1,null,["Duration of animation in milliseconds."])),(l()(),e._25(-1,null,["\n                        "])),(l()(),e._25(-1,null,["\n                        "])),(l()(),e._3(218,0,null,null,13,"tr",[],null,null,null,null,null)),(l()(),e._25(-1,null,["\n                            "])),(l()(),e._3(220,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),e._25(-1,null,["showCaption"])),(l()(),e._25(-1,null,["\n                            "])),(l()(),e._3(223,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),e._25(-1,null,["boolean"])),(l()(),e._25(-1,null,["\n                            "])),(l()(),e._3(226,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),e._25(-1,null,["true"])),(l()(),e._25(-1,null,["\n                            "])),(l()(),e._3(229,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),e._25(-1,null,["Displays information retrieved from title and alt attributes of images in content caption."])),(l()(),e._25(-1,null,["\n                        "])),(l()(),e._25(-1,null,["\n                        "])),(l()(),e._3(233,0,null,null,13,"tr",[],null,null,null,null,null)),(l()(),e._25(-1,null,["\n                            "])),(l()(),e._3(235,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),e._25(-1,null,["activeIndex"])),(l()(),e._25(-1,null,["\n                            "])),(l()(),e._3(238,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),e._25(-1,null,["number"])),(l()(),e._25(-1,null,["\n                            "])),(l()(),e._3(241,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),e._25(-1,null,["0"])),(l()(),e._25(-1,null,["\n                            "])),(l()(),e._3(244,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),e._25(-1,null,["Index of the current active image of galleria images."])),(l()(),e._25(-1,null,["\n                        "])),(l()(),e._25(-1,null,["\n                    "])),(l()(),e._25(-1,null,["\n                "])),(l()(),e._25(-1,null,["\n            "])),(l()(),e._25(-1,0,["\n\n            "])),(l()(),e._3(251,0,null,0,1,"h4",[],null,null,null,null,null)),(l()(),e._25(-1,null,["Events"])),(l()(),e._25(-1,0,["\n            "])),(l()(),e._3(254,0,null,0,38,"div",[["class","doc-tablewrapper"]],null,null,null,null,null)),(l()(),e._25(-1,null,["\n                "])),(l()(),e._3(256,0,null,null,35,"table",[["class","doc-table"]],null,null,null,null,null)),(l()(),e._25(-1,null,["\n                    "])),(l()(),e._3(258,0,null,null,13,"thead",[],null,null,null,null,null)),(l()(),e._25(-1,null,["\n                    "])),(l()(),e._3(260,0,null,null,10,"tr",[],null,null,null,null,null)),(l()(),e._25(-1,null,["\n                        "])),(l()(),e._3(262,0,null,null,1,"th",[],null,null,null,null,null)),(l()(),e._25(-1,null,["Name"])),(l()(),e._25(-1,null,["\n                        "])),(l()(),e._3(265,0,null,null,1,"th",[],null,null,null,null,null)),(l()(),e._25(-1,null,["Parameters"])),(l()(),e._25(-1,null,["\n                        "])),(l()(),e._3(268,0,null,null,1,"th",[],null,null,null,null,null)),(l()(),e._25(-1,null,["Description"])),(l()(),e._25(-1,null,["\n                    "])),(l()(),e._25(-1,null,["\n                    "])),(l()(),e._25(-1,null,["\n                    "])),(l()(),e._3(273,0,null,null,17,"tbody",[],null,null,null,null,null)),(l()(),e._25(-1,null,["\n                    "])),(l()(),e._3(275,0,null,null,14,"tr",[],null,null,null,null,null)),(l()(),e._25(-1,null,["\n                        "])),(l()(),e._3(277,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),e._25(-1,null,["onImageClicked"])),(l()(),e._25(-1,null,["\n                        "])),(l()(),e._3(280,0,null,null,5,"td",[],null,null,null,null,null)),(l()(),e._25(-1,null,["\n                            event.image: Image Object"])),(l()(),e._3(282,0,null,null,0,"br",[],null,null,null,null,null)),(l()(),e._25(-1,null,["\n                            event.originalEvent: Click Object"])),(l()(),e._3(284,0,null,null,0,"br",[],null,null,null,null,null)),(l()(),e._25(-1,null,["\n                            event.index: Index of the image\n                        "])),(l()(),e._25(-1,null,["\n                        "])),(l()(),e._3(287,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),e._25(-1,null,["Callback to invoke when the displayed image is clicked."])),(l()(),e._25(-1,null,["\n                    "])),(l()(),e._25(-1,null,["\n                    "])),(l()(),e._25(-1,null,["\n                "])),(l()(),e._25(-1,null,["\n            "])),(l()(),e._25(-1,0,["\n\n            "])),(l()(),e._3(294,0,null,0,1,"h3",[],null,null,null,null,null)),(l()(),e._25(-1,null,["Styling"])),(l()(),e._25(-1,0,["\n            "])),(l()(),e._3(297,0,null,0,6,"p",[],null,null,null,null,null)),(l()(),e._25(-1,null,["Following is the list of structural style classes, for theming classes visit "])),(l()(),e._3(299,0,null,null,3,"a",[["href","#"]],[[1,"target",0],[8,"href",4]],[[null,"click"]],function(l,n,u){var t=!0;return"click"===n&&(t=!1!==e._17(l,300).onClick(u.button,u.ctrlKey,u.metaKey,u.shiftKey)&&t),t},null,null)),e._2(300,671744,null,0,a.n,[a.k,a.a,t.i],{routerLink:[0,"routerLink"]},null),e._18(301,1),(l()(),e._25(-1,null,["theming page"])),(l()(),e._25(-1,null,["."])),(l()(),e._25(-1,0,["\n            "])),(l()(),e._3(305,0,null,0,91,"div",[["class","doc-tablewrapper"]],null,null,null,null,null)),(l()(),e._25(-1,null,["\n                "])),(l()(),e._3(307,0,null,null,88,"table",[["class","doc-table"]],null,null,null,null,null)),(l()(),e._25(-1,null,["\n                    "])),(l()(),e._3(309,0,null,null,10,"thead",[],null,null,null,null,null)),(l()(),e._25(-1,null,["\n                        "])),(l()(),e._3(311,0,null,null,7,"tr",[],null,null,null,null,null)),(l()(),e._25(-1,null,["\n                            "])),(l()(),e._3(313,0,null,null,1,"th",[],null,null,null,null,null)),(l()(),e._25(-1,null,["Name"])),(l()(),e._25(-1,null,["\n                            "])),(l()(),e._3(316,0,null,null,1,"th",[],null,null,null,null,null)),(l()(),e._25(-1,null,["Element"])),(l()(),e._25(-1,null,["\n                        "])),(l()(),e._25(-1,null,["\n                    "])),(l()(),e._25(-1,null,["\n                    "])),(l()(),e._3(321,0,null,null,73,"tbody",[],null,null,null,null,null)),(l()(),e._25(-1,null,["\n                        "])),(l()(),e._3(323,0,null,null,7,"tr",[],null,null,null,null,null)),(l()(),e._25(-1,null,["\n                            "])),(l()(),e._3(325,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),e._25(-1,null,["ui-galleria"])),(l()(),e._25(-1,null,["\n                            "])),(l()(),e._3(328,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),e._25(-1,null,["Container element"])),(l()(),e._25(-1,null,["\n                        "])),(l()(),e._25(-1,null,["\n                        "])),(l()(),e._3(332,0,null,null,7,"tr",[],null,null,null,null,null)),(l()(),e._25(-1,null,["\n                            "])),(l()(),e._3(334,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),e._25(-1,null,["ui-galleria-panel-wrapper"])),(l()(),e._25(-1,null,["\n                            "])),(l()(),e._3(337,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),e._25(-1,null,["Parent of item containers."])),(l()(),e._25(-1,null,["\n                        "])),(l()(),e._25(-1,null,["\n                        "])),(l()(),e._3(341,0,null,null,7,"tr",[],null,null,null,null,null)),(l()(),e._25(-1,null,["\n                            "])),(l()(),e._3(343,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),e._25(-1,null,["ui-galleria-filmstrip-wrapper"])),(l()(),e._25(-1,null,["\n                            "])),(l()(),e._3(346,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),e._25(-1,null,["Container of filmstrip."])),(l()(),e._25(-1,null,["\n                        "])),(l()(),e._25(-1,null,["\n                        "])),(l()(),e._3(350,0,null,null,7,"tr",[],null,null,null,null,null)),(l()(),e._25(-1,null,["\n                            "])),(l()(),e._3(352,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),e._25(-1,null,["ui-galleria-filmstrip"])),(l()(),e._25(-1,null,["\n                            "])),(l()(),e._3(355,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),e._25(-1,null,["Filmstrip element"])),(l()(),e._25(-1,null,["\n                        "])),(l()(),e._25(-1,null,["\n                        "])),(l()(),e._3(359,0,null,null,7,"tr",[],null,null,null,null,null)),(l()(),e._25(-1,null,["\n                            "])),(l()(),e._3(361,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),e._25(-1,null,["ui-galleria-frame"])),(l()(),e._25(-1,null,["\n                            "])),(l()(),e._3(364,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),e._25(-1,null,["Frame element of thumbnail"])),(l()(),e._25(-1,null,["\n                        "])),(l()(),e._25(-1,null,["\n                        "])),(l()(),e._3(368,0,null,null,7,"tr",[],null,null,null,null,null)),(l()(),e._25(-1,null,["\n                            "])),(l()(),e._3(370,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),e._25(-1,null,["ui-galleria-nav-next"])),(l()(),e._25(-1,null,["\n                            "])),(l()(),e._3(373,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),e._25(-1,null,["Icon to navigate to next item"])),(l()(),e._25(-1,null,["\n                        "])),(l()(),e._25(-1,null,["\n                        "])),(l()(),e._3(377,0,null,null,7,"tr",[],null,null,null,null,null)),(l()(),e._25(-1,null,["\n                            "])),(l()(),e._3(379,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),e._25(-1,null,["ui-galleria-nav-prev"])),(l()(),e._25(-1,null,["\n                            "])),(l()(),e._3(382,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),e._25(-1,null,["Icon to navigate to previous item"])),(l()(),e._25(-1,null,["\n                        "])),(l()(),e._25(-1,null,["\n                        "])),(l()(),e._3(386,0,null,null,7,"tr",[],null,null,null,null,null)),(l()(),e._25(-1,null,["\n                            "])),(l()(),e._3(388,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),e._25(-1,null,["ui-galleria-caption"])),(l()(),e._25(-1,null,["\n                            "])),(l()(),e._3(391,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),e._25(-1,null,["Caption element that displays title and description of an item"])),(l()(),e._25(-1,null,["\n                        "])),(l()(),e._25(-1,null,["\n                    "])),(l()(),e._25(-1,null,["\n                "])),(l()(),e._25(-1,null,["\n            "])),(l()(),e._25(-1,0,["\n\n            "])),(l()(),e._3(398,0,null,0,1,"h3",[],null,null,null,null,null)),(l()(),e._25(-1,null,["Dependencies"])),(l()(),e._25(-1,0,["\n            "])),(l()(),e._3(401,0,null,0,1,"p",[],null,null,null,null,null)),(l()(),e._25(-1,null,["None."])),(l()(),e._25(-1,0,["\n        "])),(l()(),e._25(-1,0,["\n\n        "])),(l()(),e._3(405,16777216,null,0,23,"p-tabPanel",[["header","Source"]],null,null,null,b.c,b.a)),e._2(406,1228800,[[1,4]],1,g.a,[e.M],{header:[0,"header"]},null),e._23(603979776,3,{templates:1}),(l()(),e._25(-1,0,["\n            "])),(l()(),e._3(409,0,null,0,6,"a",[["class","btn-viewsource"],["href","https://github.com/primefaces/primeng/tree/master/src/app/showcase/components/galleria"],["target","_blank"]],null,null,null,null,null)),(l()(),e._25(-1,null,["\n                "])),(l()(),e._3(411,0,null,null,0,"i",[["class","fa fa-github"]],null,null,null,null,null)),(l()(),e._25(-1,null,["\n                "])),(l()(),e._3(413,0,null,null,1,"span",[],null,null,null,null,null)),(l()(),e._25(-1,null,["View on GitHub"])),(l()(),e._25(-1,null,["\n            "])),(l()(),e._25(-1,0,["\n"])),(l()(),e._3(417,0,null,0,4,"pre",[],null,null,null,null,null)),(l()(),e._3(418,0,null,null,2,"code",[["class","language-markup"],["ngNonBindable",""],["pCode",""]],null,null,null,null,null)),e._2(419,81920,null,0,c.a,[e.k],null,null),(l()(),e._25(-1,null,['\n<p-galleria [images]="images" panelWidth="500" panelHeight="313" showCaption="true"></p-galleria>\n'])),(l()(),e._25(-1,null,["\n"])),(l()(),e._25(-1,0,["\n\n"])),(l()(),e._3(423,0,null,0,4,"pre",[],null,null,null,null,null)),(l()(),e._3(424,0,null,null,2,"code",[["class","language-typescript"],["ngNonBindable",""],["pCode",""]],null,null,null,null,null)),e._2(425,81920,null,0,c.a,[e.k],null,null),(l()(),e._25(-1,null,["\nexport class GalleriaDemo implements OnInit {\n    \n    images: any[];\n    \n    ngOnInit() {\n        this.images = [];\n        this.images.push({source:'assets/showcase/images/demo/galleria/galleria1.jpg', alt:'Description for Image 1', title:'Title 1'});\n        this.images.push({source:'assets/showcase/images/demo/galleria/galleria2.jpg', alt:'Description for Image 2', title:'Title 2'});\n        this.images.push({source:'assets/showcase/images/demo/galleria/galleria3.jpg', alt:'Description for Image 3', title:'Title 3'});\n        this.images.push({source:'assets/showcase/images/demo/galleria/galleria4.jpg', alt:'Description for Image 4', title:'Title 4'});\n        this.images.push({source:'assets/showcase/images/demo/galleria/galleria5.jpg', alt:'Description for Image 5', title:'Title 5'});\n        this.images.push({source:'assets/showcase/images/demo/galleria/galleria6.jpg', alt:'Description for Image 6', title:'Title 6'});\n        this.images.push({source:'assets/showcase/images/demo/galleria/galleria7.jpg', alt:'Description for Image 7', title:'Title 7'});\n        this.images.push({source:'assets/showcase/images/demo/galleria/galleria8.jpg', alt:'Description for Image 8', title:'Title 8'});\n        this.images.push({source:'assets/showcase/images/demo/galleria/galleria9.jpg', alt:'Description for Image 9', title:'Title 9'});\n        this.images.push({source:'assets/showcase/images/demo/galleria/galleria10.jpg', alt:'Description for Image 10', title:'Title 10'});\n        this.images.push({source:'assets/showcase/images/demo/galleria/galleria11.jpg', alt:'Description for Image 11', title:'Title 11'});\n        this.images.push({source:'assets/showcase/images/demo/galleria/galleria12.jpg', alt:'Description for Image 12', title:'Title 12'});\n    }\n}\n"])),(l()(),e._25(-1,null,["\n"])),(l()(),e._25(-1,0,["\n        "])),(l()(),e._25(-1,0,["\n    "])),(l()(),e._25(-1,null,["\n"])),(l()(),e._25(-1,null,["\n\n"]))],function(l,n){l(n,16,0,"500","313",n.component.images),l(n,26,0,"Documentation"),l(n,34,0),l(n,46,0),l(n,52,0),l(n,300,0,l(n,301,0,"/theming")),l(n,406,0,"Source"),l(n,419,0),l(n,425,0)},function(l,n){l(n,299,0,e._17(n,300).target,e._17(n,300).href)})}var k=e.Z("ng-component",i,function(l){return e._27(0,[(l()(),e._3(0,0,null,null,1,"ng-component",[],null,null,null,x,y)),e._2(1,49152,null,0,i,[],null,null)],null,null)},{},{},[]),D=u("lnn4");u.d(n,"GalleriaDemoModuleNgFactory",function(){return j});var j=e._0(p,[],function(l){return e._14([e._15(512,e.j,e.W,[[8,[k]],[3,e.j],e.v]),e._15(4608,t.n,t.m,[e.s,[2,t.s]]),e._15(512,t.b,t.b,[]),e._15(512,a.o,a.o,[[2,a.t],[2,a.k]]),e._15(512,s,s,[]),e._15(512,_,_,[]),e._15(512,D.m,D.m,[]),e._15(512,g.c,g.c,[]),e._15(512,c.b,c.b,[]),e._15(512,p,p,[]),e._15(1024,a.i,function(){return[[{path:"",component:i}]]},[])])})}});