// Compiled by ClojureScript 1.9.293 {}
goog.provide('figwheel.client.heads_up');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('figwheel.client.socket');
goog.require('cljs.core.async');
goog.require('goog.string');

figwheel.client.heads_up.node = (function figwheel$client$heads_up$node(var_args){
var args__22372__auto__ = [];
var len__22365__auto___31425 = arguments.length;
var i__22366__auto___31426 = (0);
while(true){
if((i__22366__auto___31426 < len__22365__auto___31425)){
args__22372__auto__.push((arguments[i__22366__auto___31426]));

var G__31427 = (i__22366__auto___31426 + (1));
i__22366__auto___31426 = G__31427;
continue;
} else {
}
break;
}

var argseq__22373__auto__ = ((((2) < args__22372__auto__.length))?(new cljs.core.IndexedSeq(args__22372__auto__.slice((2)),(0),null)):null);
return figwheel.client.heads_up.node.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__22373__auto__);
});

figwheel.client.heads_up.node.cljs$core$IFn$_invoke$arity$variadic = (function (t,attrs,children){
var e = document.createElement(cljs.core.name.call(null,t));
var seq__31417_31428 = cljs.core.seq.call(null,cljs.core.keys.call(null,attrs));
var chunk__31418_31429 = null;
var count__31419_31430 = (0);
var i__31420_31431 = (0);
while(true){
if((i__31420_31431 < count__31419_31430)){
var k_31432 = cljs.core._nth.call(null,chunk__31418_31429,i__31420_31431);
e.setAttribute(cljs.core.name.call(null,k_31432),cljs.core.get.call(null,attrs,k_31432));

var G__31433 = seq__31417_31428;
var G__31434 = chunk__31418_31429;
var G__31435 = count__31419_31430;
var G__31436 = (i__31420_31431 + (1));
seq__31417_31428 = G__31433;
chunk__31418_31429 = G__31434;
count__31419_31430 = G__31435;
i__31420_31431 = G__31436;
continue;
} else {
var temp__6747__auto___31437 = cljs.core.seq.call(null,seq__31417_31428);
if(temp__6747__auto___31437){
var seq__31417_31438__$1 = temp__6747__auto___31437;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__31417_31438__$1)){
var c__22055__auto___31439 = cljs.core.chunk_first.call(null,seq__31417_31438__$1);
var G__31440 = cljs.core.chunk_rest.call(null,seq__31417_31438__$1);
var G__31441 = c__22055__auto___31439;
var G__31442 = cljs.core.count.call(null,c__22055__auto___31439);
var G__31443 = (0);
seq__31417_31428 = G__31440;
chunk__31418_31429 = G__31441;
count__31419_31430 = G__31442;
i__31420_31431 = G__31443;
continue;
} else {
var k_31444 = cljs.core.first.call(null,seq__31417_31438__$1);
e.setAttribute(cljs.core.name.call(null,k_31444),cljs.core.get.call(null,attrs,k_31444));

var G__31445 = cljs.core.next.call(null,seq__31417_31438__$1);
var G__31446 = null;
var G__31447 = (0);
var G__31448 = (0);
seq__31417_31428 = G__31445;
chunk__31418_31429 = G__31446;
count__31419_31430 = G__31447;
i__31420_31431 = G__31448;
continue;
}
} else {
}
}
break;
}

var seq__31421_31449 = cljs.core.seq.call(null,children);
var chunk__31422_31450 = null;
var count__31423_31451 = (0);
var i__31424_31452 = (0);
while(true){
if((i__31424_31452 < count__31423_31451)){
var ch_31453 = cljs.core._nth.call(null,chunk__31422_31450,i__31424_31452);
e.appendChild(ch_31453);

var G__31454 = seq__31421_31449;
var G__31455 = chunk__31422_31450;
var G__31456 = count__31423_31451;
var G__31457 = (i__31424_31452 + (1));
seq__31421_31449 = G__31454;
chunk__31422_31450 = G__31455;
count__31423_31451 = G__31456;
i__31424_31452 = G__31457;
continue;
} else {
var temp__6747__auto___31458 = cljs.core.seq.call(null,seq__31421_31449);
if(temp__6747__auto___31458){
var seq__31421_31459__$1 = temp__6747__auto___31458;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__31421_31459__$1)){
var c__22055__auto___31460 = cljs.core.chunk_first.call(null,seq__31421_31459__$1);
var G__31461 = cljs.core.chunk_rest.call(null,seq__31421_31459__$1);
var G__31462 = c__22055__auto___31460;
var G__31463 = cljs.core.count.call(null,c__22055__auto___31460);
var G__31464 = (0);
seq__31421_31449 = G__31461;
chunk__31422_31450 = G__31462;
count__31423_31451 = G__31463;
i__31424_31452 = G__31464;
continue;
} else {
var ch_31465 = cljs.core.first.call(null,seq__31421_31459__$1);
e.appendChild(ch_31465);

var G__31466 = cljs.core.next.call(null,seq__31421_31459__$1);
var G__31467 = null;
var G__31468 = (0);
var G__31469 = (0);
seq__31421_31449 = G__31466;
chunk__31422_31450 = G__31467;
count__31423_31451 = G__31468;
i__31424_31452 = G__31469;
continue;
}
} else {
}
}
break;
}

return e;
});

figwheel.client.heads_up.node.cljs$lang$maxFixedArity = (2);

figwheel.client.heads_up.node.cljs$lang$applyTo = (function (seq31414){
var G__31415 = cljs.core.first.call(null,seq31414);
var seq31414__$1 = cljs.core.next.call(null,seq31414);
var G__31416 = cljs.core.first.call(null,seq31414__$1);
var seq31414__$2 = cljs.core.next.call(null,seq31414__$1);
return figwheel.client.heads_up.node.cljs$core$IFn$_invoke$arity$variadic(G__31415,G__31416,seq31414__$2);
});

if(typeof figwheel.client.heads_up.heads_up_event_dispatch !== 'undefined'){
} else {
figwheel.client.heads_up.heads_up_event_dispatch = (function (){var method_table__22175__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__22176__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__22177__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__22178__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__22179__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"figwheel.client.heads-up","heads-up-event-dispatch"),((function (method_table__22175__auto__,prefer_table__22176__auto__,method_cache__22177__auto__,cached_hierarchy__22178__auto__,hierarchy__22179__auto__){
return (function (dataset){
return dataset.figwheelEvent;
});})(method_table__22175__auto__,prefer_table__22176__auto__,method_cache__22177__auto__,cached_hierarchy__22178__auto__,hierarchy__22179__auto__))
,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__22179__auto__,method_table__22175__auto__,prefer_table__22176__auto__,method_cache__22177__auto__,cached_hierarchy__22178__auto__));
})();
}
cljs.core._add_method.call(null,figwheel.client.heads_up.heads_up_event_dispatch,new cljs.core.Keyword(null,"default","default",-1987822328),(function (_){
return cljs.core.PersistentArrayMap.EMPTY;
}));
cljs.core._add_method.call(null,figwheel.client.heads_up.heads_up_event_dispatch,"file-selected",(function (dataset){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"file-selected",new cljs.core.Keyword(null,"file-name","file-name",-1654217259),dataset.fileName,new cljs.core.Keyword(null,"file-line","file-line",-1228823138),dataset.fileLine], null));
}));
cljs.core._add_method.call(null,figwheel.client.heads_up.heads_up_event_dispatch,"close-heads-up",(function (dataset){
return figwheel.client.heads_up.clear.call(null);
}));
figwheel.client.heads_up.ancestor_nodes = (function figwheel$client$heads_up$ancestor_nodes(el){
return cljs.core.iterate.call(null,(function (e){
return e.parentNode;
}),el);
});
figwheel.client.heads_up.get_dataset = (function figwheel$client$heads_up$get_dataset(el){
return cljs.core.first.call(null,cljs.core.keep.call(null,(function (x){
if(cljs.core.truth_(x.dataset.figwheelEvent)){
return x.dataset;
} else {
return null;
}
}),cljs.core.take.call(null,(4),figwheel.client.heads_up.ancestor_nodes.call(null,el))));
});
figwheel.client.heads_up.heads_up_onclick_handler = (function figwheel$client$heads_up$heads_up_onclick_handler(event){
var dataset = figwheel.client.heads_up.get_dataset.call(null,event.target);
event.preventDefault();

if(cljs.core.truth_(dataset)){
return figwheel.client.heads_up.heads_up_event_dispatch.call(null,dataset);
} else {
return null;
}
});
figwheel.client.heads_up.ensure_container = (function figwheel$client$heads_up$ensure_container(){
var cont_id = "figwheel-heads-up-container";
var content_id = "figwheel-heads-up-content-area";
if(cljs.core.not.call(null,document.querySelector([cljs.core.str("#"),cljs.core.str(cont_id)].join('')))){
var el_31470 = figwheel.client.heads_up.node.call(null,new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),cont_id,new cljs.core.Keyword(null,"style","style",-496642736),[cljs.core.str("-webkit-transition: all 0.2s ease-in-out;"),cljs.core.str("-moz-transition: all 0.2s ease-in-out;"),cljs.core.str("-o-transition: all 0.2s ease-in-out;"),cljs.core.str("transition: all 0.2s ease-in-out;"),cljs.core.str("font-size: 13px;"),cljs.core.str("border-top: 1px solid #f5f5f5;"),cljs.core.str("box-shadow: 0px 0px 1px #aaaaaa;"),cljs.core.str("line-height: 18px;"),cljs.core.str("color: #333;"),cljs.core.str("font-family: monospace;"),cljs.core.str("padding: 0px 10px 0px 70px;"),cljs.core.str("position: fixed;"),cljs.core.str("bottom: 0px;"),cljs.core.str("left: 0px;"),cljs.core.str("height: 0px;"),cljs.core.str("opacity: 0.0;"),cljs.core.str("box-sizing: border-box;"),cljs.core.str("z-index: 10000;")].join('')], null));
el_31470.onclick = figwheel.client.heads_up.heads_up_onclick_handler;

el_31470.innerHTML = figwheel.client.heads_up.cljs_logo_svg;

el_31470.appendChild(figwheel.client.heads_up.node.call(null,new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),content_id], null)));

document.body.appendChild(el_31470);
} else {
}

return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"container-el","container-el",109664205),document.getElementById(cont_id),new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187),document.getElementById(content_id)], null);
});
figwheel.client.heads_up.set_style_BANG_ = (function figwheel$client$heads_up$set_style_BANG_(p__31471,st_map){
var map__31478 = p__31471;
var map__31478__$1 = ((((!((map__31478 == null)))?((((map__31478.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31478.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31478):map__31478);
var container_el = cljs.core.get.call(null,map__31478__$1,new cljs.core.Keyword(null,"container-el","container-el",109664205));
return cljs.core.mapv.call(null,((function (map__31478,map__31478__$1,container_el){
return (function (p__31480){
var vec__31481 = p__31480;
var k = cljs.core.nth.call(null,vec__31481,(0),null);
var v = cljs.core.nth.call(null,vec__31481,(1),null);
return (container_el.style[cljs.core.name.call(null,k)] = v);
});})(map__31478,map__31478__$1,container_el))
,st_map);
});
figwheel.client.heads_up.set_content_BANG_ = (function figwheel$client$heads_up$set_content_BANG_(p__31484,dom_str){
var map__31487 = p__31484;
var map__31487__$1 = ((((!((map__31487 == null)))?((((map__31487.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31487.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31487):map__31487);
var c = map__31487__$1;
var content_area_el = cljs.core.get.call(null,map__31487__$1,new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187));
return content_area_el.innerHTML = dom_str;
});
figwheel.client.heads_up.get_content = (function figwheel$client$heads_up$get_content(p__31489){
var map__31492 = p__31489;
var map__31492__$1 = ((((!((map__31492 == null)))?((((map__31492.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31492.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31492):map__31492);
var content_area_el = cljs.core.get.call(null,map__31492__$1,new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187));
return content_area_el.innerHTML;
});
figwheel.client.heads_up.close_link = (function figwheel$client$heads_up$close_link(){
return [cljs.core.str("<a style=\""),cljs.core.str("float: right;"),cljs.core.str("font-size: 18px;"),cljs.core.str("text-decoration: none;"),cljs.core.str("text-align: right;"),cljs.core.str("width: 30px;"),cljs.core.str("height: 30px;"),cljs.core.str("color: rgba(84,84,84, 0.5);"),cljs.core.str("\" href=\"#\"  data-figwheel-event=\"close-heads-up\">"),cljs.core.str("x"),cljs.core.str("</a>")].join('');
});
figwheel.client.heads_up.display_heads_up = (function figwheel$client$heads_up$display_heads_up(style,msg){
var c__24143__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24143__auto__){
return (function (){
var f__24144__auto__ = (function (){var switch__24120__auto__ = ((function (c__24143__auto__){
return (function (state_31535){
var state_val_31536 = (state_31535[(1)]);
if((state_val_31536 === (1))){
var inst_31520 = (state_31535[(7)]);
var inst_31520__$1 = figwheel.client.heads_up.ensure_container.call(null);
var inst_31521 = [new cljs.core.Keyword(null,"paddingTop","paddingTop",-1088692345),new cljs.core.Keyword(null,"paddingBottom","paddingBottom",-916694489),new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"minHeight","minHeight",-1635998980),new cljs.core.Keyword(null,"opacity","opacity",397153780)];
var inst_31522 = ["10px","10px","100%","68px","1.0"];
var inst_31523 = cljs.core.PersistentHashMap.fromArrays(inst_31521,inst_31522);
var inst_31524 = cljs.core.merge.call(null,inst_31523,style);
var inst_31525 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_31520__$1,inst_31524);
var inst_31526 = figwheel.client.heads_up.set_content_BANG_.call(null,inst_31520__$1,msg);
var inst_31527 = cljs.core.async.timeout.call(null,(300));
var state_31535__$1 = (function (){var statearr_31537 = state_31535;
(statearr_31537[(8)] = inst_31525);

(statearr_31537[(7)] = inst_31520__$1);

(statearr_31537[(9)] = inst_31526);

return statearr_31537;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31535__$1,(2),inst_31527);
} else {
if((state_val_31536 === (2))){
var inst_31520 = (state_31535[(7)]);
var inst_31529 = (state_31535[(2)]);
var inst_31530 = [new cljs.core.Keyword(null,"height","height",1025178622)];
var inst_31531 = ["auto"];
var inst_31532 = cljs.core.PersistentHashMap.fromArrays(inst_31530,inst_31531);
var inst_31533 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_31520,inst_31532);
var state_31535__$1 = (function (){var statearr_31538 = state_31535;
(statearr_31538[(10)] = inst_31529);

return statearr_31538;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31535__$1,inst_31533);
} else {
return null;
}
}
});})(c__24143__auto__))
;
return ((function (switch__24120__auto__,c__24143__auto__){
return (function() {
var figwheel$client$heads_up$display_heads_up_$_state_machine__24121__auto__ = null;
var figwheel$client$heads_up$display_heads_up_$_state_machine__24121__auto____0 = (function (){
var statearr_31542 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_31542[(0)] = figwheel$client$heads_up$display_heads_up_$_state_machine__24121__auto__);

(statearr_31542[(1)] = (1));

return statearr_31542;
});
var figwheel$client$heads_up$display_heads_up_$_state_machine__24121__auto____1 = (function (state_31535){
while(true){
var ret_value__24122__auto__ = (function (){try{while(true){
var result__24123__auto__ = switch__24120__auto__.call(null,state_31535);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24123__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24123__auto__;
}
break;
}
}catch (e31543){if((e31543 instanceof Object)){
var ex__24124__auto__ = e31543;
var statearr_31544_31546 = state_31535;
(statearr_31544_31546[(5)] = ex__24124__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31535);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31543;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24122__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31547 = state_31535;
state_31535 = G__31547;
continue;
} else {
return ret_value__24122__auto__;
}
break;
}
});
figwheel$client$heads_up$display_heads_up_$_state_machine__24121__auto__ = function(state_31535){
switch(arguments.length){
case 0:
return figwheel$client$heads_up$display_heads_up_$_state_machine__24121__auto____0.call(this);
case 1:
return figwheel$client$heads_up$display_heads_up_$_state_machine__24121__auto____1.call(this,state_31535);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up$display_heads_up_$_state_machine__24121__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up$display_heads_up_$_state_machine__24121__auto____0;
figwheel$client$heads_up$display_heads_up_$_state_machine__24121__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up$display_heads_up_$_state_machine__24121__auto____1;
return figwheel$client$heads_up$display_heads_up_$_state_machine__24121__auto__;
})()
;})(switch__24120__auto__,c__24143__auto__))
})();
var state__24145__auto__ = (function (){var statearr_31545 = f__24144__auto__.call(null);
(statearr_31545[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24143__auto__);

return statearr_31545;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24145__auto__);
});})(c__24143__auto__))
);

return c__24143__auto__;
});
figwheel.client.heads_up.heading = (function figwheel$client$heads_up$heading(var_args){
var args31548 = [];
var len__22365__auto___31551 = arguments.length;
var i__22366__auto___31552 = (0);
while(true){
if((i__22366__auto___31552 < len__22365__auto___31551)){
args31548.push((arguments[i__22366__auto___31552]));

var G__31553 = (i__22366__auto___31552 + (1));
i__22366__auto___31552 = G__31553;
continue;
} else {
}
break;
}

var G__31550 = args31548.length;
switch (G__31550) {
case 1:
return figwheel.client.heads_up.heading.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return figwheel.client.heads_up.heading.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args31548.length)].join('')));

}
});

figwheel.client.heads_up.heading.cljs$core$IFn$_invoke$arity$1 = (function (s){
return figwheel.client.heads_up.heading.call(null,s,"");
});

figwheel.client.heads_up.heading.cljs$core$IFn$_invoke$arity$2 = (function (s,sub_head){
return [cljs.core.str("<div style=\""),cljs.core.str("font-size: 26px;"),cljs.core.str("line-height: 26px;"),cljs.core.str("margin-bottom: 2px;"),cljs.core.str("padding-top: 1px;"),cljs.core.str("\">"),cljs.core.str(s),cljs.core.str(" <span style=\""),cljs.core.str("display: inline-block;"),cljs.core.str("font-size: 13px;"),cljs.core.str("\">"),cljs.core.str(sub_head),cljs.core.str("</span></div>")].join('');
});

figwheel.client.heads_up.heading.cljs$lang$maxFixedArity = 2;

figwheel.client.heads_up.file_and_line_number = (function figwheel$client$heads_up$file_and_line_number(msg){
if(cljs.core.truth_(cljs.core.re_matches.call(null,/.*at\sline.*/,msg))){
return cljs.core.take.call(null,(2),cljs.core.reverse.call(null,clojure.string.split.call(null,msg," ")));
} else {
return null;
}
});
figwheel.client.heads_up.file_selector_div = (function figwheel$client$heads_up$file_selector_div(file_name,line_number,msg){
return [cljs.core.str("<div data-figwheel-event=\"file-selected\" data-file-name=\""),cljs.core.str(file_name),cljs.core.str("\" data-file-line=\""),cljs.core.str(line_number),cljs.core.str("\">"),cljs.core.str(msg),cljs.core.str("</div>")].join('');
});
figwheel.client.heads_up.format_line = (function figwheel$client$heads_up$format_line(msg){
var msg__$1 = goog.string.htmlEscape(msg);
var temp__6745__auto__ = figwheel.client.heads_up.file_and_line_number.call(null,msg__$1);
if(cljs.core.truth_(temp__6745__auto__)){
var vec__31558 = temp__6745__auto__;
var f = cljs.core.nth.call(null,vec__31558,(0),null);
var ln = cljs.core.nth.call(null,vec__31558,(1),null);
return figwheel.client.heads_up.file_selector_div.call(null,f,ln,msg__$1);
} else {
return [cljs.core.str("<div>"),cljs.core.str(msg__$1),cljs.core.str("</div>")].join('');
}
});
figwheel.client.heads_up.display_error = (function figwheel$client$heads_up$display_error(formatted_messages,cause){
var vec__31565 = (cljs.core.truth_(cause)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(cause),new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(cause),new cljs.core.Keyword(null,"column","column",2078222095).cljs$core$IFn$_invoke$arity$1(cause)], null):cljs.core.first.call(null,cljs.core.keep.call(null,figwheel.client.heads_up.file_and_line_number,formatted_messages)));
var file_name = cljs.core.nth.call(null,vec__31565,(0),null);
var file_line = cljs.core.nth.call(null,vec__31565,(1),null);
var file_column = cljs.core.nth.call(null,vec__31565,(2),null);
var msg = cljs.core.apply.call(null,cljs.core.str,cljs.core.map.call(null,((function (vec__31565,file_name,file_line,file_column){
return (function (p1__31561_SHARP_){
return [cljs.core.str("<div>"),cljs.core.str(goog.string.htmlEscape(p1__31561_SHARP_)),cljs.core.str("</div>")].join('');
});})(vec__31565,file_name,file_line,file_column))
,formatted_messages));
return figwheel.client.heads_up.display_heads_up.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),"rgba(255, 161, 161, 0.95)"], null),[cljs.core.str(figwheel.client.heads_up.close_link.call(null)),cljs.core.str(figwheel.client.heads_up.heading.call(null,"Compile Error")),cljs.core.str(figwheel.client.heads_up.file_selector_div.call(null,file_name,(function (){var or__21149__auto__ = file_line;
if(cljs.core.truth_(or__21149__auto__)){
return or__21149__auto__;
} else {
var and__21137__auto__ = cause;
if(cljs.core.truth_(and__21137__auto__)){
return new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(cause);
} else {
return and__21137__auto__;
}
}
})(),[cljs.core.str(msg),cljs.core.str((cljs.core.truth_(cause)?[cljs.core.str("Error on file "),cljs.core.str(goog.string.htmlEscape(new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(cause))),cljs.core.str(", line "),cljs.core.str(new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(cause)),cljs.core.str(", column "),cljs.core.str(new cljs.core.Keyword(null,"column","column",2078222095).cljs$core$IFn$_invoke$arity$1(cause))].join(''):""))].join('')))].join(''));
});
figwheel.client.heads_up.flatten_exception = (function figwheel$client$heads_up$flatten_exception(ex){
return cljs.core.take_while.call(null,cljs.core.comp.call(null,cljs.core.not,cljs.core.nil_QMARK_),cljs.core.iterate.call(null,new cljs.core.Keyword(null,"cause","cause",231901252),ex));
});
figwheel.client.heads_up.exception_info_QMARK_ = (function figwheel$client$heads_up$exception_info_QMARK_(ex){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(ex),new cljs.core.Symbol(null,"clojure.lang.ExceptionInfo","clojure.lang.ExceptionInfo",-550564927,null));
});
figwheel.client.heads_up.parse_failed_compile = (function figwheel$client$heads_up$parse_failed_compile(p__31568){
var map__31571 = p__31568;
var map__31571__$1 = ((((!((map__31571 == null)))?((((map__31571.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31571.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31571):map__31571);
var ex = map__31571__$1;
var exception_data = cljs.core.get.call(null,map__31571__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var exception = cljs.core.first.call(null,exception_data);
if(cljs.core.truth_((function (){var and__21137__auto__ = figwheel.client.heads_up.exception_info_QMARK_.call(null,exception);
if(cljs.core.truth_(and__21137__auto__)){
return cljs.core.re_matches.call(null,/failed compiling.*/,new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(exception));
} else {
return and__21137__auto__;
}
})())){
return cljs.core.assoc.call(null,ex,new cljs.core.Keyword(null,"failed-compiling","failed-compiling",1768639503),true,new cljs.core.Keyword(null,"message","message",-406056002),new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(exception),new cljs.core.Keyword(null,"file","file",-1269645878),cljs.core.get_in.call(null,exception,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"file","file",-1269645878)], null)));
} else {
return ex;
}
});
figwheel.client.heads_up.parse_analysis_error = (function figwheel$client$heads_up$parse_analysis_error(p__31573){
var map__31579 = p__31573;
var map__31579__$1 = ((((!((map__31579 == null)))?((((map__31579.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31579.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31579):map__31579);
var ex = map__31579__$1;
var exception_data = cljs.core.get.call(null,map__31579__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var temp__6745__auto__ = cljs.core.first.call(null,cljs.core.filter.call(null,((function (map__31579,map__31579__$1,ex,exception_data){
return (function (p__31581){
var map__31582 = p__31581;
var map__31582__$1 = ((((!((map__31582 == null)))?((((map__31582.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31582.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31582):map__31582);
var exc = map__31582__$1;
var data = cljs.core.get.call(null,map__31582__$1,new cljs.core.Keyword(null,"data","data",-232669377));
if(cljs.core.truth_((function (){var and__21137__auto__ = figwheel.client.heads_up.exception_info_QMARK_.call(null,exc);
if(cljs.core.truth_(and__21137__auto__)){
return data;
} else {
return and__21137__auto__;
}
})())){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"tag","tag",-1290361223).cljs$core$IFn$_invoke$arity$1(data),new cljs.core.Keyword("cljs","analysis-error","cljs/analysis-error",-420526349));
} else {
return null;
}
});})(map__31579,map__31579__$1,ex,exception_data))
,exception_data));
if(cljs.core.truth_(temp__6745__auto__)){
var analysis_exception = temp__6745__auto__;
return cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"analysis-exception","analysis-exception",591623285),analysis_exception,new cljs.core.Keyword(null,"class","class",-2030961996),cljs.core.get_in.call(null,analysis_exception,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cause","cause",231901252),new cljs.core.Keyword(null,"class","class",-2030961996)], null))], null),cljs.core.select_keys.call(null,new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(analysis_exception),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"column","column",2078222095)], null)),ex,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"message","message",-406056002),(function (){var or__21149__auto__ = cljs.core.get_in.call(null,analysis_exception,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cause","cause",231901252),new cljs.core.Keyword(null,"message","message",-406056002)], null));
if(cljs.core.truth_(or__21149__auto__)){
return or__21149__auto__;
} else {
return new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(analysis_exception);
}
})()], null));
} else {
return ex;
}
});
figwheel.client.heads_up.parse_reader_error = (function figwheel$client$heads_up$parse_reader_error(p__31584){
var map__31590 = p__31584;
var map__31590__$1 = ((((!((map__31590 == null)))?((((map__31590.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31590.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31590):map__31590);
var ex = map__31590__$1;
var exception_data = cljs.core.get.call(null,map__31590__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var temp__6745__auto__ = cljs.core.first.call(null,cljs.core.filter.call(null,((function (map__31590,map__31590__$1,ex,exception_data){
return (function (p__31592){
var map__31593 = p__31592;
var map__31593__$1 = ((((!((map__31593 == null)))?((((map__31593.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31593.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31593):map__31593);
var exc = map__31593__$1;
var data = cljs.core.get.call(null,map__31593__$1,new cljs.core.Keyword(null,"data","data",-232669377));
if(cljs.core.truth_((function (){var and__21137__auto__ = figwheel.client.heads_up.exception_info_QMARK_.call(null,exc);
if(cljs.core.truth_(and__21137__auto__)){
return data;
} else {
return and__21137__auto__;
}
})())){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(data),new cljs.core.Keyword(null,"reader-exception","reader-exception",-1938323098));
} else {
return null;
}
});})(map__31590,map__31590__$1,ex,exception_data))
,exception_data));
if(cljs.core.truth_(temp__6745__auto__)){
var reader_exception = temp__6745__auto__;
return cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"reader-exception","reader-exception",-1938323098),reader_exception], null),cljs.core.select_keys.call(null,new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(reader_exception),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"column","column",2078222095)], null)),ex,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"message","message",-406056002),new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(reader_exception)], null));
} else {
return ex;
}
});
figwheel.client.heads_up.patch_eof_reader_exception = (function figwheel$client$heads_up$patch_eof_reader_exception(p__31595){
var map__31601 = p__31595;
var map__31601__$1 = ((((!((map__31601 == null)))?((((map__31601.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31601.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31601):map__31601);
var ex = map__31601__$1;
var reader_exception = cljs.core.get.call(null,map__31601__$1,new cljs.core.Keyword(null,"reader-exception","reader-exception",-1938323098));
var message = cljs.core.get.call(null,map__31601__$1,new cljs.core.Keyword(null,"message","message",-406056002));
if(cljs.core.truth_((function (){var and__21137__auto__ = reader_exception;
if(cljs.core.truth_(and__21137__auto__)){
return cljs.core.re_matches.call(null,/EOF while reading, starting.*/,message);
} else {
return and__21137__auto__;
}
})())){
var temp__6747__auto__ = cljs.core.re_matches.call(null,/.*line\s(\d*)\sand\scolumn\s(\d*).*/,message);
if(cljs.core.truth_(temp__6747__auto__)){
var vec__31603 = temp__6747__auto__;
var _ = cljs.core.nth.call(null,vec__31603,(0),null);
var line = cljs.core.nth.call(null,vec__31603,(1),null);
var column = cljs.core.nth.call(null,vec__31603,(2),null);
return cljs.core.assoc.call(null,ex,new cljs.core.Keyword(null,"line","line",212345235),(line | (0)),new cljs.core.Keyword(null,"column","column",2078222095),(column | (0)));
} else {
return null;
}
} else {
return ex;
}
});
figwheel.client.heads_up.ensure_file_line = (function figwheel$client$heads_up$ensure_file_line(p__31606){
var map__31612 = p__31606;
var map__31612__$1 = ((((!((map__31612 == null)))?((((map__31612.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31612.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31612):map__31612);
var ex = map__31612__$1;
var exception_data = cljs.core.get.call(null,map__31612__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var map__31614 = cljs.core.apply.call(null,cljs.core.merge,cljs.core.keep.call(null,new cljs.core.Keyword(null,"data","data",-232669377),exception_data));
var map__31614__$1 = ((((!((map__31614 == null)))?((((map__31614.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31614.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31614):map__31614);
var file = cljs.core.get.call(null,map__31614__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__31614__$1,new cljs.core.Keyword(null,"line","line",212345235));
var G__31616 = ex;
var G__31616__$1 = (((new cljs.core.Keyword(null,"file","file",-1269645878) == null))?cljs.core.assoc.call(null,ex,new cljs.core.Keyword(null,"file","file",-1269645878),file,G__31616):G__31616);
var G__31616__$2 = (((new cljs.core.Keyword(null,"line","line",212345235) == null))?cljs.core.assoc.call(null,ex,new cljs.core.Keyword(null,"line","line",212345235),line,G__31616__$1):G__31616__$1);
if((new cljs.core.Keyword(null,"message","message",-406056002) == null)){
return cljs.core.assoc.call(null,ex,new cljs.core.Keyword(null,"message","message",-406056002),cljs.core.last.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"message","message",-406056002),exception_data)),G__31616__$2);
} else {
return G__31616__$2;
}
});
figwheel.client.heads_up.remove_file_from_message = (function figwheel$client$heads_up$remove_file_from_message(p__31617){
var map__31620 = p__31617;
var map__31620__$1 = ((((!((map__31620 == null)))?((((map__31620.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31620.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31620):map__31620);
var ex = map__31620__$1;
var message = cljs.core.get.call(null,map__31620__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var file = cljs.core.get.call(null,map__31620__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_((function (){var and__21137__auto__ = file;
if(cljs.core.truth_(and__21137__auto__)){
return cljs.core.re_matches.call(null,/.*in file.*/,message);
} else {
return and__21137__auto__;
}
})())){
return cljs.core.assoc.call(null,ex,new cljs.core.Keyword(null,"message","message",-406056002),cljs.core.first.call(null,clojure.string.split.call(null,message,"in file")));
} else {
return ex;
}
});
figwheel.client.heads_up.parse_exception = (function figwheel$client$heads_up$parse_exception(exception_data){
return figwheel.client.heads_up.remove_file_from_message.call(null,figwheel.client.heads_up.patch_eof_reader_exception.call(null,figwheel.client.heads_up.parse_reader_error.call(null,figwheel.client.heads_up.parse_analysis_error.call(null,figwheel.client.heads_up.parse_failed_compile.call(null,cljs.core.update_in.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"exception-data","exception-data",-512474886),exception_data], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"exception-data","exception-data",-512474886)], null),figwheel.client.heads_up.flatten_exception))))));
});
figwheel.client.heads_up.escape = (function figwheel$client$heads_up$escape(x){
return goog.string.htmlEscape(x);
});
figwheel.client.heads_up.exception__GT_display_data = (function figwheel$client$heads_up$exception__GT_display_data(p__31624){
var map__31627 = p__31624;
var map__31627__$1 = ((((!((map__31627 == null)))?((((map__31627.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31627.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31627):map__31627);
var exception = map__31627__$1;
var failed_compiling = cljs.core.get.call(null,map__31627__$1,new cljs.core.Keyword(null,"failed-compiling","failed-compiling",1768639503));
var reader_exception = cljs.core.get.call(null,map__31627__$1,new cljs.core.Keyword(null,"reader-exception","reader-exception",-1938323098));
var analysis_exception = cljs.core.get.call(null,map__31627__$1,new cljs.core.Keyword(null,"analysis-exception","analysis-exception",591623285));
var class$ = cljs.core.get.call(null,map__31627__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var file = cljs.core.get.call(null,map__31627__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__31627__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__31627__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var message = cljs.core.get.call(null,map__31627__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var last_message = (cljs.core.truth_((function (){var and__21137__auto__ = file;
if(cljs.core.truth_(and__21137__auto__)){
return line;
} else {
return and__21137__auto__;
}
})())?[cljs.core.str("Please see line "),cljs.core.str(line),cljs.core.str(" of file "),cljs.core.str(file)].join(''):(cljs.core.truth_(file)?[cljs.core.str("Please see "),cljs.core.str(file)].join(''):null
));
return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"head","head",-771383919),(cljs.core.truth_(analysis_exception)?"Could not Analyze":(cljs.core.truth_(reader_exception)?"Could not Read":(cljs.core.truth_(failed_compiling)?"Could not Compile":"Compile Exception"
))),new cljs.core.Keyword(null,"sub-head","sub-head",1930649117),file,new cljs.core.Keyword(null,"messages","messages",345434482),cljs.core.concat.call(null,cljs.core.map.call(null,((function (last_message,map__31627,map__31627__$1,exception,failed_compiling,reader_exception,analysis_exception,class$,file,line,column,message){
return (function (p1__31622_SHARP_){
return [cljs.core.str("<div>"),cljs.core.str(p1__31622_SHARP_),cljs.core.str("</div>")].join('');
});})(last_message,map__31627,map__31627__$1,exception,failed_compiling,reader_exception,analysis_exception,class$,file,line,column,message))
,(cljs.core.truth_(message)?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str((cljs.core.truth_(class$)?[cljs.core.str(figwheel.client.heads_up.escape.call(null,class$)),cljs.core.str(": ")].join(''):"")),cljs.core.str("<span style=\"font-weight:bold;\">"),cljs.core.str(figwheel.client.heads_up.escape.call(null,message)),cljs.core.str("</span>")].join('')], null):cljs.core.map.call(null,((function (last_message,map__31627,map__31627__$1,exception,failed_compiling,reader_exception,analysis_exception,class$,file,line,column,message){
return (function (p1__31623_SHARP_){
return [cljs.core.str(figwheel.client.heads_up.escape.call(null,new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(p1__31623_SHARP_))),cljs.core.str(": "),cljs.core.str(figwheel.client.heads_up.escape.call(null,new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(p1__31623_SHARP_)))].join('');
});})(last_message,map__31627,map__31627__$1,exception,failed_compiling,reader_exception,analysis_exception,class$,file,line,column,message))
,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(exception)))),(cljs.core.truth_(last_message)?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str("<div style=\"color: #AD4F4F; padding-top: 3px;\">"),cljs.core.str(figwheel.client.heads_up.escape.call(null,last_message)),cljs.core.str("</div>")].join('')], null):null)),new cljs.core.Keyword(null,"file","file",-1269645878),file,new cljs.core.Keyword(null,"line","line",212345235),line,new cljs.core.Keyword(null,"column","column",2078222095),column], null);
});
figwheel.client.heads_up.display_exception = (function figwheel$client$heads_up$display_exception(exception_data){
var map__31632 = figwheel.client.heads_up.exception__GT_display_data.call(null,figwheel.client.heads_up.parse_exception.call(null,exception_data));
var map__31632__$1 = ((((!((map__31632 == null)))?((((map__31632.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31632.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31632):map__31632);
var head = cljs.core.get.call(null,map__31632__$1,new cljs.core.Keyword(null,"head","head",-771383919));
var sub_head = cljs.core.get.call(null,map__31632__$1,new cljs.core.Keyword(null,"sub-head","sub-head",1930649117));
var messages = cljs.core.get.call(null,map__31632__$1,new cljs.core.Keyword(null,"messages","messages",345434482));
var last_message = cljs.core.get.call(null,map__31632__$1,new cljs.core.Keyword(null,"last-message","last-message",-2087778135));
var file = cljs.core.get.call(null,map__31632__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__31632__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__31632__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var msg = cljs.core.apply.call(null,cljs.core.str,messages);
return figwheel.client.heads_up.display_heads_up.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),"rgba(255, 161, 161, 0.95)"], null),[cljs.core.str(figwheel.client.heads_up.close_link.call(null)),cljs.core.str(figwheel.client.heads_up.heading.call(null,head,sub_head)),cljs.core.str(figwheel.client.heads_up.file_selector_div.call(null,file,line,msg))].join(''));
});
figwheel.client.heads_up.display_system_warning = (function figwheel$client$heads_up$display_system_warning(header,msg){
return figwheel.client.heads_up.display_heads_up.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),"rgba(255, 220, 110, 0.95)"], null),[cljs.core.str(figwheel.client.heads_up.close_link.call(null)),cljs.core.str(figwheel.client.heads_up.heading.call(null,header)),cljs.core.str(figwheel.client.heads_up.format_line.call(null,msg))].join(''));
});
figwheel.client.heads_up.display_warning = (function figwheel$client$heads_up$display_warning(msg){
return figwheel.client.heads_up.display_system_warning.call(null,"Compile Warning",msg);
});
figwheel.client.heads_up.append_message = (function figwheel$client$heads_up$append_message(message){
var map__31636 = figwheel.client.heads_up.ensure_container.call(null);
var map__31636__$1 = ((((!((map__31636 == null)))?((((map__31636.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31636.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31636):map__31636);
var content_area_el = cljs.core.get.call(null,map__31636__$1,new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187));
var el = document.createElement("div");
el.innerHTML = figwheel.client.heads_up.format_line.call(null,message);

return content_area_el.appendChild(el);
});
figwheel.client.heads_up.clear = (function figwheel$client$heads_up$clear(){
var c__24143__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24143__auto__){
return (function (){
var f__24144__auto__ = (function (){var switch__24120__auto__ = ((function (c__24143__auto__){
return (function (state_31684){
var state_val_31685 = (state_31684[(1)]);
if((state_val_31685 === (1))){
var inst_31667 = (state_31684[(7)]);
var inst_31667__$1 = figwheel.client.heads_up.ensure_container.call(null);
var inst_31668 = [new cljs.core.Keyword(null,"opacity","opacity",397153780)];
var inst_31669 = ["0.0"];
var inst_31670 = cljs.core.PersistentHashMap.fromArrays(inst_31668,inst_31669);
var inst_31671 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_31667__$1,inst_31670);
var inst_31672 = cljs.core.async.timeout.call(null,(300));
var state_31684__$1 = (function (){var statearr_31686 = state_31684;
(statearr_31686[(7)] = inst_31667__$1);

(statearr_31686[(8)] = inst_31671);

return statearr_31686;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31684__$1,(2),inst_31672);
} else {
if((state_val_31685 === (2))){
var inst_31667 = (state_31684[(7)]);
var inst_31674 = (state_31684[(2)]);
var inst_31675 = [new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"height","height",1025178622),new cljs.core.Keyword(null,"minHeight","minHeight",-1635998980),new cljs.core.Keyword(null,"padding","padding",1660304693),new cljs.core.Keyword(null,"borderRadius","borderRadius",-1505621083),new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491)];
var inst_31676 = ["auto","0px","0px","0px 10px 0px 70px","0px","transparent"];
var inst_31677 = cljs.core.PersistentHashMap.fromArrays(inst_31675,inst_31676);
var inst_31678 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_31667,inst_31677);
var inst_31679 = cljs.core.async.timeout.call(null,(200));
var state_31684__$1 = (function (){var statearr_31687 = state_31684;
(statearr_31687[(9)] = inst_31674);

(statearr_31687[(10)] = inst_31678);

return statearr_31687;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31684__$1,(3),inst_31679);
} else {
if((state_val_31685 === (3))){
var inst_31667 = (state_31684[(7)]);
var inst_31681 = (state_31684[(2)]);
var inst_31682 = figwheel.client.heads_up.set_content_BANG_.call(null,inst_31667,"");
var state_31684__$1 = (function (){var statearr_31688 = state_31684;
(statearr_31688[(11)] = inst_31681);

return statearr_31688;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31684__$1,inst_31682);
} else {
return null;
}
}
}
});})(c__24143__auto__))
;
return ((function (switch__24120__auto__,c__24143__auto__){
return (function() {
var figwheel$client$heads_up$clear_$_state_machine__24121__auto__ = null;
var figwheel$client$heads_up$clear_$_state_machine__24121__auto____0 = (function (){
var statearr_31692 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31692[(0)] = figwheel$client$heads_up$clear_$_state_machine__24121__auto__);

(statearr_31692[(1)] = (1));

return statearr_31692;
});
var figwheel$client$heads_up$clear_$_state_machine__24121__auto____1 = (function (state_31684){
while(true){
var ret_value__24122__auto__ = (function (){try{while(true){
var result__24123__auto__ = switch__24120__auto__.call(null,state_31684);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24123__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24123__auto__;
}
break;
}
}catch (e31693){if((e31693 instanceof Object)){
var ex__24124__auto__ = e31693;
var statearr_31694_31696 = state_31684;
(statearr_31694_31696[(5)] = ex__24124__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31684);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31693;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24122__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31697 = state_31684;
state_31684 = G__31697;
continue;
} else {
return ret_value__24122__auto__;
}
break;
}
});
figwheel$client$heads_up$clear_$_state_machine__24121__auto__ = function(state_31684){
switch(arguments.length){
case 0:
return figwheel$client$heads_up$clear_$_state_machine__24121__auto____0.call(this);
case 1:
return figwheel$client$heads_up$clear_$_state_machine__24121__auto____1.call(this,state_31684);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up$clear_$_state_machine__24121__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up$clear_$_state_machine__24121__auto____0;
figwheel$client$heads_up$clear_$_state_machine__24121__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up$clear_$_state_machine__24121__auto____1;
return figwheel$client$heads_up$clear_$_state_machine__24121__auto__;
})()
;})(switch__24120__auto__,c__24143__auto__))
})();
var state__24145__auto__ = (function (){var statearr_31695 = f__24144__auto__.call(null);
(statearr_31695[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24143__auto__);

return statearr_31695;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24145__auto__);
});})(c__24143__auto__))
);

return c__24143__auto__;
});
figwheel.client.heads_up.display_loaded_start = (function figwheel$client$heads_up$display_loaded_start(){
return figwheel.client.heads_up.display_heads_up.call(null,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),"rgba(211,234,172,1.0)",new cljs.core.Keyword(null,"width","width",-384071477),"68px",new cljs.core.Keyword(null,"height","height",1025178622),"68px",new cljs.core.Keyword(null,"paddingLeft","paddingLeft",262720813),"0px",new cljs.core.Keyword(null,"paddingRight","paddingRight",-1642313463),"0px",new cljs.core.Keyword(null,"borderRadius","borderRadius",-1505621083),"35px"], null),"");
});
figwheel.client.heads_up.flash_loaded = (function figwheel$client$heads_up$flash_loaded(){
var c__24143__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24143__auto__){
return (function (){
var f__24144__auto__ = (function (){var switch__24120__auto__ = ((function (c__24143__auto__){
return (function (state_31729){
var state_val_31730 = (state_31729[(1)]);
if((state_val_31730 === (1))){
var inst_31719 = figwheel.client.heads_up.display_loaded_start.call(null);
var state_31729__$1 = state_31729;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31729__$1,(2),inst_31719);
} else {
if((state_val_31730 === (2))){
var inst_31721 = (state_31729[(2)]);
var inst_31722 = cljs.core.async.timeout.call(null,(400));
var state_31729__$1 = (function (){var statearr_31731 = state_31729;
(statearr_31731[(7)] = inst_31721);

return statearr_31731;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31729__$1,(3),inst_31722);
} else {
if((state_val_31730 === (3))){
var inst_31724 = (state_31729[(2)]);
var inst_31725 = figwheel.client.heads_up.clear.call(null);
var state_31729__$1 = (function (){var statearr_31732 = state_31729;
(statearr_31732[(8)] = inst_31724);

return statearr_31732;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31729__$1,(4),inst_31725);
} else {
if((state_val_31730 === (4))){
var inst_31727 = (state_31729[(2)]);
var state_31729__$1 = state_31729;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31729__$1,inst_31727);
} else {
return null;
}
}
}
}
});})(c__24143__auto__))
;
return ((function (switch__24120__auto__,c__24143__auto__){
return (function() {
var figwheel$client$heads_up$flash_loaded_$_state_machine__24121__auto__ = null;
var figwheel$client$heads_up$flash_loaded_$_state_machine__24121__auto____0 = (function (){
var statearr_31736 = [null,null,null,null,null,null,null,null,null];
(statearr_31736[(0)] = figwheel$client$heads_up$flash_loaded_$_state_machine__24121__auto__);

(statearr_31736[(1)] = (1));

return statearr_31736;
});
var figwheel$client$heads_up$flash_loaded_$_state_machine__24121__auto____1 = (function (state_31729){
while(true){
var ret_value__24122__auto__ = (function (){try{while(true){
var result__24123__auto__ = switch__24120__auto__.call(null,state_31729);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24123__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24123__auto__;
}
break;
}
}catch (e31737){if((e31737 instanceof Object)){
var ex__24124__auto__ = e31737;
var statearr_31738_31740 = state_31729;
(statearr_31738_31740[(5)] = ex__24124__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31729);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31737;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24122__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31741 = state_31729;
state_31729 = G__31741;
continue;
} else {
return ret_value__24122__auto__;
}
break;
}
});
figwheel$client$heads_up$flash_loaded_$_state_machine__24121__auto__ = function(state_31729){
switch(arguments.length){
case 0:
return figwheel$client$heads_up$flash_loaded_$_state_machine__24121__auto____0.call(this);
case 1:
return figwheel$client$heads_up$flash_loaded_$_state_machine__24121__auto____1.call(this,state_31729);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up$flash_loaded_$_state_machine__24121__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up$flash_loaded_$_state_machine__24121__auto____0;
figwheel$client$heads_up$flash_loaded_$_state_machine__24121__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up$flash_loaded_$_state_machine__24121__auto____1;
return figwheel$client$heads_up$flash_loaded_$_state_machine__24121__auto__;
})()
;})(switch__24120__auto__,c__24143__auto__))
})();
var state__24145__auto__ = (function (){var statearr_31739 = f__24144__auto__.call(null);
(statearr_31739[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24143__auto__);

return statearr_31739;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24145__auto__);
});})(c__24143__auto__))
);

return c__24143__auto__;
});
figwheel.client.heads_up.cljs_logo_svg = "<?xml version='1.0' encoding='utf-8'?>\n<!DOCTYPE svg PUBLIC '-//W3C//DTD SVG 1.1//EN' 'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd'>\n<svg width='49px' height='49px' style='position:absolute; top:9px; left: 10px;' version='1.1'\n  xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px'\n  viewBox='0 0 428 428' enable-background='new 0 0 428 428' xml:space='preserve'>\n<circle fill='#fff' cx='213' cy='214' r='213' />\n<g>\n<path fill='#96CA4B' d='M122,266.6c-12.7,0-22.3-3.7-28.9-11.1c-6.6-7.4-9.9-18-9.9-31.8c0-14.1,3.4-24.9,10.3-32.5\n  s16.8-11.4,29.9-11.4c8.8,0,16.8,1.6,23.8,4.9l-5.4,14.3c-7.5-2.9-13.7-4.4-18.6-4.4c-14.5,0-21.7,9.6-21.7,28.8\n  c0,9.4,1.8,16.4,5.4,21.2c3.6,4.7,8.9,7.1,15.9,7.1c7.9,0,15.4-2,22.5-5.9v15.5c-3.2,1.9-6.6,3.2-10.2,4\n  C131.5,266.2,127.1,266.6,122,266.6z'/>\n<path fill='#96CA4B' d='M194.4,265.1h-17.8V147.3h17.8V265.1z'/>\n<path fill='#5F7FBF' d='M222.9,302.3c-5.3,0-9.8-0.6-13.3-1.9v-14.1c3.4,0.9,6.9,1.4,10.5,1.4c7.6,0,11.4-4.3,11.4-12.9v-93.5h17.8\n  v94.7c0,8.6-2.3,15.2-6.8,19.6C237.9,300.1,231.4,302.3,222.9,302.3z M230.4,159.2c0-3.2,0.9-5.6,2.6-7.3c1.7-1.7,4.2-2.6,7.5-2.6\n  c3.1,0,5.6,0.9,7.3,2.6c1.7,1.7,2.6,4.2,2.6,7.3c0,3-0.9,5.4-2.6,7.2c-1.7,1.7-4.2,2.6-7.3,2.6c-3.2,0-5.7-0.9-7.5-2.6\n  C231.2,164.6,230.4,162.2,230.4,159.2z'/>\n<path fill='#5F7FBF' d='M342.5,241.3c0,8.2-3,14.4-8.9,18.8c-6,4.4-14.5,6.5-25.6,6.5c-11.2,0-20.1-1.7-26.9-5.1v-15.4\n  c9.8,4.5,19,6.8,27.5,6.8c10.9,0,16.4-3.3,16.4-9.9c0-2.1-0.6-3.9-1.8-5.3c-1.2-1.4-3.2-2.9-6-4.4c-2.8-1.5-6.6-3.2-11.6-5.1\n  c-9.6-3.7-16.2-7.5-19.6-11.2c-3.4-3.7-5.1-8.6-5.1-14.5c0-7.2,2.9-12.7,8.7-16.7c5.8-4,13.6-5.9,23.6-5.9c9.8,0,19.1,2,27.9,6\n  l-5.8,13.4c-9-3.7-16.6-5.6-22.8-5.6c-9.4,0-14.1,2.7-14.1,8c0,2.6,1.2,4.8,3.7,6.7c2.4,1.8,7.8,4.3,16,7.5\n  c6.9,2.7,11.9,5.1,15.1,7.3c3.1,2.2,5.4,4.8,7,7.7C341.7,233.7,342.5,237.2,342.5,241.3z'/>\n</g>\n<path fill='#96CA4B' stroke='#96CA4B' stroke-width='6' stroke-miterlimit='10' d='M197,392.7c-91.2-8.1-163-85-163-178.3\n  S105.8,44.3,197,36.2V16.1c-102.3,8.2-183,94-183,198.4s80.7,190.2,183,198.4V392.7z'/>\n<path fill='#5F7FBF' stroke='#5F7FBF' stroke-width='6' stroke-miterlimit='10' d='M229,16.1v20.1c91.2,8.1,163,85,163,178.3\n  s-71.8,170.2-163,178.3v20.1c102.3-8.2,183-94,183-198.4S331.3,24.3,229,16.1z'/>\n</svg>";

//# sourceMappingURL=heads_up.js.map