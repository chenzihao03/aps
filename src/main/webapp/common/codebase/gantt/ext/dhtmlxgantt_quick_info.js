/*
@license

dhtmlxGantt v.6.3.4 Professional Evaluation
This software is covered by DHTMLX Evaluation License. Contact sales@dhtmlx.com to get Commercial or Enterprise license. Usage without proper license is prohibited.

(c) XB Software Ltd.

*/
Gantt.plugin(function(t){!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define("ext/dhtmlxgantt_quick_info",[],e):"object"==typeof exports?exports["ext/dhtmlxgantt_quick_info"]=e():t["ext/dhtmlxgantt_quick_info"]=e()}(window,function(){return function(t){var e={};function i(n){if(e[n])return e[n].exports;var o=e[n]={i:n,l:!1,exports:{}};return t[n].call(o.exports,o,o.exports,i),o.l=!0,o.exports}return i.m=t,i.c=e,i.d=function(t,e,n){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},i.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)i.d(n,o,function(e){return t[e]}.bind(null,o));return n},i.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/codebase/",i(i.s=243)}({243:function(e,i){function n(){var e=t.$task_data;return e&&e.offsetHeight&&e.offsetWidth?{parent:e,viewport:t.$task}:(e=t.$grid_data)&&e.offsetHeight&&e.offsetWidth?{parent:e,viewport:t.$grid}:{parent:t.$layout,viewport:t.$layout}}com.emis.config.quickinfo_buttons=["icon_delete","icon_edit"],com.emis.config.quick_info_detached=!0,com.emis.config.show_quick_info=!0,t.attachEvent("onTaskClick",function(e){return setTimeout(function(){t.showQuickInfo(e)},0),!0}),function(){for(var e=["onEmptyClick","onViewChange","onLightbox","onBeforeTaskDelete","onBeforeDrag"],i=function(){return t._hideQuickInfo(),!0},n=0; n<e.length; n++)t.attachEvent(e[n],i)}(),function(){function e(){return t.hideQuickInfo(!0),t._quick_info_box=null,!0}t.attachEvent("onGanttReady",e),t.attachEvent("onDestroy",e)}(),t.templates.quick_info_title=function(t, e, i){return i.text.substr(0,50)},t.templates.quick_info_content=function(t, e, i){return i.details||i.text},t.templates.quick_info_date=function(e, i, n){return t.templates.task_time(e,i,n)},t.templates.quick_info_class=function(t, e, i){return""},t.showQuickInfo=function(e){if((e!=this._quick_info_box_id||!t.utils.dom.isChildOf(this._quick_info_box,document.body))&&com.emis.config.show_quick_info){this.hideQuickInfo(!0);var i=n(),o=this._get_event_counter_part(e,6,i.viewport);o&&(this._quick_info_box=this._init_quick_info(o,e),this._quick_info_task=e,this._quick_info_box.className=t._prepare_quick_info_classname(e),this._fill_quick_data(e),this._show_quick_info(o,6),this.callEvent("onQuickInfo",[e]))}},t._hideQuickInfo=function(){t.hideQuickInfo()},t.hideQuickInfo=function(e){var i=this._quick_info_box;this._quick_info_box_id=0;var n=this._quick_info_task;if(this._quick_info_task=null,i&&i.parentNode){if(com.emis.config.quick_info_detached)return this.callEvent("onAfterQuickInfo",[n]),i.parentNode.removeChild(i);i.className+=" gantt_qi_hidden","auto"==i.style.right?i.style.left="-350px":i.style.right="-350px",e&&(i.style.left=i.style.right="",i.parentNode.removeChild(i)),this.callEvent("onAfterQuickInfo",[n])}},t.event(window,"keydown",function(e){27==e.keyCode&&t.hideQuickInfo()}),t._show_quick_info=function(e, i){var o=t._quick_info_box;if(com.emis.config.quick_info_detached){var c=n();o.parentNode&&"#document-fragment"!=o.parentNode.nodeName.toLowerCase()||c.parent.appendChild(o);var a=o.offsetWidth,f=o.offsetHeight,_=t.getScrollState(),r=c.viewport.offsetWidth+_.x-a;o.style.left=Math.min(Math.max(_.x,e.left-e.dx*(a-e.width)),r)+"px",o.style.top=e.top-(e.dy?f+e.height+2*i:0)+"px"}else o.style.top="20px",1==e.dx?(o.style.right="auto",o.style.left="-300px",setTimeout(function(){o.style.left="10px"},1)):(o.style.left="auto",o.style.right="-300px",setTimeout(function(){o.style.right="10px"},1)),o.className+=" gantt_qi_"+(1==e.dx?"left":"right"),t.$root.appendChild(o)},t._prepare_quick_info_classname=function(e){var i=t.getTask(e),n="gantt_cal_quick_info",o=this.templates.quick_info_class(i.start_date,i.end_date,i);return o&&(n+=" "+o),n},t._init_quick_info=function(e,i){var o=t.getTask(i);if("boolean"==typeof this._quick_info_readonly&&this.isReadonly(o)!==this._quick_info_readonly&&(t.hideQuickInfo(!0),this._quick_info_box=null),this._quick_info_readonly=this.isReadonly(o),!this._quick_info_box){var c=this._quick_info_box=document.createElement("div");this._waiAria.quickInfoAttr(c);var a='<div class="gantt_cal_qi_title" '+(u=t._waiAria.quickInfoHeaderAttrString())+'><div class="gantt_cal_qi_tcontent"></div><div  class="gantt_cal_qi_tdate"></div></div><div class="gantt_cal_qi_content"></div>';a+='<div class="gantt_cal_qi_controls">';for(var f=com.emis.config.quickinfo_buttons,_={icon_delete:!0,icon_edit:!0},r=0; r<f.length; r++)if(!this._quick_info_readonly||!_[f[r]]){var u=t._waiAria.quickInfoButtonAttrString(t.locale.labels[f[r]]);a+='<div class="gantt_qi_big_icon '+f[r]+'" title="'+t.locale.labels[f[r]]+'" '+u+"><div class='gantt_menu_icon "+f[r]+"'></div><div>"+t.locale.labels[f[r]]+"</div></div>"}a+="</div>",c.innerHTML=a;if(t.event(c,"click",function(e){e=e||event,t._qi_button_click(e.target||e.srcElement)}),t.event(c,"keypress",function(e){var i=(e=e||event).which||event.keyCode;13!=i&&32!=i||setTimeout(function(){t._qi_button_click(e.target||e.srcElement)},1)}),com.emis.config.quick_info_detached){var s=n();t.event(s,"scroll",function(){t.hideQuickInfo()})}}return this._quick_info_box},t._qi_button_click=function(e){var i=t._quick_info_box;if(e&&e!=i){var n=e.className;if(-1!=n.indexOf("_icon")){var o=t._quick_info_box_id;t.$click.buttons[n.split(" ")[1].replace("icon_","")](o)}else t._qi_button_click(e.parentNode)}},t._get_event_counter_part=function(e, i, n){var o=t.getTaskNode(e);if(!o&&!(o=t.getTaskRowNode(e)))return null;var c=0,a=i+o.offsetTop+o.offsetHeight,f=o;if(this.utils.dom.isChildOf(f,n))for(;f&&f!==n;)c+=f.offsetLeft,f=f.offsetParent;var _=this.getScrollState();return f?{left:c,top:a,dx:c+o.offsetWidth/2-_.x>t.$container.offsetWidth/2?1:0,dy:a+o.offsetHeight/2-_.y>t.$container.offsetHeight/2?1:0,width:o.offsetWidth,height:o.offsetHeight}:null},t._fill_quick_data=function(e){var i=t.getTask(e),n=t._quick_info_box;t._quick_info_box_id=e;var o={content:t.templates.quick_info_title(i.start_date,i.end_date,i),date:t.templates.quick_info_date(i.start_date,i.end_date,i)},c=n.firstChild.firstChild;c.innerHTML=o.content,c.nextSibling.innerHTML=o.date,t._waiAria.quickInfoHeader(n,[o.content,o.date].join(" ")),n.firstChild.nextSibling.innerHTML=t.templates.quick_info_content(i.start_date,i.end_date,i)}}})})});
