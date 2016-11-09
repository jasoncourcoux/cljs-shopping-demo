// Compiled by ClojureScript 1.9.293 {}
goog.provide('figwheel.client');
goog.require('cljs.core');
goog.require('goog.userAgent.product');
goog.require('goog.Uri');
goog.require('cljs.core.async');
goog.require('figwheel.client.socket');
goog.require('figwheel.client.file_reloading');
goog.require('clojure.string');
goog.require('figwheel.client.utils');
goog.require('cljs.repl');
goog.require('figwheel.client.heads_up');
figwheel.client.figwheel_repl_print = (function figwheel$client$figwheel_repl_print(args){
figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),"figwheel-repl-print",new cljs.core.Keyword(null,"content","content",15833224),args], null));

return args;
});
figwheel.client.autoload_QMARK_ = (cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))?(function (){
var pred__31744 = cljs.core._EQ_;
var expr__31745 = (function (){var or__21149__auto__ = (function (){try{if(cljs.core.truth_(typeof localstorage !== 'undefined')){
return localStorage.getItem("figwheel_autoload");
} else {
return null;
}
}catch (e31748){if((e31748 instanceof Error)){
var e = e31748;
return false;
} else {
throw e31748;

}
}})();
if(cljs.core.truth_(or__21149__auto__)){
return or__21149__auto__;
} else {
return "true";
}
})();
if(cljs.core.truth_(pred__31744.call(null,"true",expr__31745))){
return true;
} else {
if(cljs.core.truth_(pred__31744.call(null,"false",expr__31745))){
return false;
} else {
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(expr__31745)].join('')));
}
}
}):(function (){
return true;
}));
figwheel.client.toggle_autoload = (function figwheel$client$toggle_autoload(){
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
try{if(cljs.core.truth_(typeof localstorage !== 'undefined')){
localStorage.setItem("figwheel_autoload",cljs.core.not.call(null,figwheel.client.autoload_QMARK_.call(null)));
} else {
}

return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str("Figwheel autoloading "),cljs.core.str((cljs.core.truth_(figwheel.client.autoload_QMARK_.call(null))?"ON":"OFF"))].join(''));
}catch (e31750){if((e31750 instanceof Error)){
var e = e31750;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str("Unable to access localStorage")].join(''));
} else {
throw e31750;

}
}} else {
return null;
}
});
goog.exportSymbol('figwheel.client.toggle_autoload', figwheel.client.toggle_autoload);
figwheel.client.console_print = (function figwheel$client$console_print(args){
console.log.apply(console,cljs.core.into_array.call(null,args));

return args;
});
figwheel.client.repl_print_fn = (function figwheel$client$repl_print_fn(var_args){
var args__22372__auto__ = [];
var len__22365__auto___31752 = arguments.length;
var i__22366__auto___31753 = (0);
while(true){
if((i__22366__auto___31753 < len__22365__auto___31752)){
args__22372__auto__.push((arguments[i__22366__auto___31753]));

var G__31754 = (i__22366__auto___31753 + (1));
i__22366__auto___31753 = G__31754;
continue;
} else {
}
break;
}

var argseq__22373__auto__ = ((((0) < args__22372__auto__.length))?(new cljs.core.IndexedSeq(args__22372__auto__.slice((0)),(0),null)):null);
return figwheel.client.repl_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__22373__auto__);
});

figwheel.client.repl_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.figwheel_repl_print.call(null,figwheel.client.console_print.call(null,args));

return null;
});

figwheel.client.repl_print_fn.cljs$lang$maxFixedArity = (0);

figwheel.client.repl_print_fn.cljs$lang$applyTo = (function (seq31751){
return figwheel.client.repl_print_fn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq31751));
});

figwheel.client.enable_repl_print_BANG_ = (function figwheel$client$enable_repl_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

return cljs.core._STAR_print_fn_STAR_ = figwheel.client.repl_print_fn;
});
figwheel.client.get_essential_messages = (function figwheel$client$get_essential_messages(ed){
if(cljs.core.truth_(ed)){
return cljs.core.cons.call(null,cljs.core.select_keys.call(null,ed,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"message","message",-406056002),new cljs.core.Keyword(null,"class","class",-2030961996)], null)),figwheel.client.get_essential_messages.call(null,new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(ed)));
} else {
return null;
}
});
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__31755){
var map__31758 = p__31755;
var map__31758__$1 = ((((!((map__31758 == null)))?((((map__31758.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31758.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31758):map__31758);
var message = cljs.core.get.call(null,map__31758__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__31758__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
return [cljs.core.str(class$),cljs.core.str(" : "),cljs.core.str(message)].join('');
});
figwheel.client.format_messages = cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.map,figwheel.client.error_msg_format),figwheel.client.get_essential_messages);
figwheel.client.focus_msgs = (function figwheel$client$focus_msgs(name_set,msg_hist){
return cljs.core.cons.call(null,cljs.core.first.call(null,msg_hist),cljs.core.filter.call(null,cljs.core.comp.call(null,name_set,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863)),cljs.core.rest.call(null,msg_hist)));
});
figwheel.client.reload_file_QMARK__STAR_ = (function figwheel$client$reload_file_QMARK__STAR_(msg_name,opts){
var or__21149__auto__ = new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__21149__auto__)){
return or__21149__auto__;
} else {
return cljs.core.not_EQ_.call(null,msg_name,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356));
}
});
figwheel.client.reload_file_state_QMARK_ = (function figwheel$client$reload_file_state_QMARK_(msg_names,opts){
var and__21137__auto__ = cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563));
if(and__21137__auto__){
return figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts);
} else {
return and__21137__auto__;
}
});
figwheel.client.block_reload_file_state_QMARK_ = (function figwheel$client$block_reload_file_state_QMARK_(msg_names,opts){
return (cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))) && (cljs.core.not.call(null,figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts)));
});
figwheel.client.warning_append_state_QMARK_ = (function figwheel$client$warning_append_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.warning_state_QMARK_ = (function figwheel$client$warning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),cljs.core.first.call(null,msg_names));
});
figwheel.client.rewarning_state_QMARK_ = (function figwheel$client$rewarning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(3),msg_names));
});
figwheel.client.compile_fail_state_QMARK_ = (function figwheel$client$compile_fail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),cljs.core.first.call(null,msg_names));
});
figwheel.client.compile_refail_state_QMARK_ = (function figwheel$client$compile_refail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.css_loaded_state_QMARK_ = (function figwheel$client$css_loaded_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874),cljs.core.first.call(null,msg_names));
});
figwheel.client.file_reloader_plugin = (function figwheel$client$file_reloader_plugin(opts){
var ch = cljs.core.async.chan.call(null);
var c__24143__auto___31920 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24143__auto___31920,ch){
return (function (){
var f__24144__auto__ = (function (){var switch__24120__auto__ = ((function (c__24143__auto___31920,ch){
return (function (state_31889){
var state_val_31890 = (state_31889[(1)]);
if((state_val_31890 === (7))){
var inst_31885 = (state_31889[(2)]);
var state_31889__$1 = state_31889;
var statearr_31891_31921 = state_31889__$1;
(statearr_31891_31921[(2)] = inst_31885);

(statearr_31891_31921[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31890 === (1))){
var state_31889__$1 = state_31889;
var statearr_31892_31922 = state_31889__$1;
(statearr_31892_31922[(2)] = null);

(statearr_31892_31922[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31890 === (4))){
var inst_31842 = (state_31889[(7)]);
var inst_31842__$1 = (state_31889[(2)]);
var state_31889__$1 = (function (){var statearr_31893 = state_31889;
(statearr_31893[(7)] = inst_31842__$1);

return statearr_31893;
})();
if(cljs.core.truth_(inst_31842__$1)){
var statearr_31894_31923 = state_31889__$1;
(statearr_31894_31923[(1)] = (5));

} else {
var statearr_31895_31924 = state_31889__$1;
(statearr_31895_31924[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31890 === (15))){
var inst_31849 = (state_31889[(8)]);
var inst_31864 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_31849);
var inst_31865 = cljs.core.first.call(null,inst_31864);
var inst_31866 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_31865);
var inst_31867 = [cljs.core.str("Figwheel: Not loading code with warnings - "),cljs.core.str(inst_31866)].join('');
var inst_31868 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),inst_31867);
var state_31889__$1 = state_31889;
var statearr_31896_31925 = state_31889__$1;
(statearr_31896_31925[(2)] = inst_31868);

(statearr_31896_31925[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31890 === (13))){
var inst_31873 = (state_31889[(2)]);
var state_31889__$1 = state_31889;
var statearr_31897_31926 = state_31889__$1;
(statearr_31897_31926[(2)] = inst_31873);

(statearr_31897_31926[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31890 === (6))){
var state_31889__$1 = state_31889;
var statearr_31898_31927 = state_31889__$1;
(statearr_31898_31927[(2)] = null);

(statearr_31898_31927[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31890 === (17))){
var inst_31871 = (state_31889[(2)]);
var state_31889__$1 = state_31889;
var statearr_31899_31928 = state_31889__$1;
(statearr_31899_31928[(2)] = inst_31871);

(statearr_31899_31928[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31890 === (3))){
var inst_31887 = (state_31889[(2)]);
var state_31889__$1 = state_31889;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31889__$1,inst_31887);
} else {
if((state_val_31890 === (12))){
var inst_31848 = (state_31889[(9)]);
var inst_31862 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_31848,opts);
var state_31889__$1 = state_31889;
if(cljs.core.truth_(inst_31862)){
var statearr_31900_31929 = state_31889__$1;
(statearr_31900_31929[(1)] = (15));

} else {
var statearr_31901_31930 = state_31889__$1;
(statearr_31901_31930[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31890 === (2))){
var state_31889__$1 = state_31889;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31889__$1,(4),ch);
} else {
if((state_val_31890 === (11))){
var inst_31849 = (state_31889[(8)]);
var inst_31854 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_31855 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_31849);
var inst_31856 = cljs.core.async.timeout.call(null,(1000));
var inst_31857 = [inst_31855,inst_31856];
var inst_31858 = (new cljs.core.PersistentVector(null,2,(5),inst_31854,inst_31857,null));
var state_31889__$1 = state_31889;
return cljs.core.async.ioc_alts_BANG_.call(null,state_31889__$1,(14),inst_31858);
} else {
if((state_val_31890 === (9))){
var inst_31849 = (state_31889[(8)]);
var inst_31875 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Figwheel: code autoloading is OFF");
var inst_31876 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_31849);
var inst_31877 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_31876);
var inst_31878 = [cljs.core.str("Not loading: "),cljs.core.str(inst_31877)].join('');
var inst_31879 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),inst_31878);
var state_31889__$1 = (function (){var statearr_31902 = state_31889;
(statearr_31902[(10)] = inst_31875);

return statearr_31902;
})();
var statearr_31903_31931 = state_31889__$1;
(statearr_31903_31931[(2)] = inst_31879);

(statearr_31903_31931[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31890 === (5))){
var inst_31842 = (state_31889[(7)]);
var inst_31844 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_31845 = (new cljs.core.PersistentArrayMap(null,2,inst_31844,null));
var inst_31846 = (new cljs.core.PersistentHashSet(null,inst_31845,null));
var inst_31847 = figwheel.client.focus_msgs.call(null,inst_31846,inst_31842);
var inst_31848 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_31847);
var inst_31849 = cljs.core.first.call(null,inst_31847);
var inst_31850 = figwheel.client.autoload_QMARK_.call(null);
var state_31889__$1 = (function (){var statearr_31904 = state_31889;
(statearr_31904[(8)] = inst_31849);

(statearr_31904[(9)] = inst_31848);

return statearr_31904;
})();
if(cljs.core.truth_(inst_31850)){
var statearr_31905_31932 = state_31889__$1;
(statearr_31905_31932[(1)] = (8));

} else {
var statearr_31906_31933 = state_31889__$1;
(statearr_31906_31933[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31890 === (14))){
var inst_31860 = (state_31889[(2)]);
var state_31889__$1 = state_31889;
var statearr_31907_31934 = state_31889__$1;
(statearr_31907_31934[(2)] = inst_31860);

(statearr_31907_31934[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31890 === (16))){
var state_31889__$1 = state_31889;
var statearr_31908_31935 = state_31889__$1;
(statearr_31908_31935[(2)] = null);

(statearr_31908_31935[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31890 === (10))){
var inst_31881 = (state_31889[(2)]);
var state_31889__$1 = (function (){var statearr_31909 = state_31889;
(statearr_31909[(11)] = inst_31881);

return statearr_31909;
})();
var statearr_31910_31936 = state_31889__$1;
(statearr_31910_31936[(2)] = null);

(statearr_31910_31936[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31890 === (8))){
var inst_31848 = (state_31889[(9)]);
var inst_31852 = figwheel.client.reload_file_state_QMARK_.call(null,inst_31848,opts);
var state_31889__$1 = state_31889;
if(cljs.core.truth_(inst_31852)){
var statearr_31911_31937 = state_31889__$1;
(statearr_31911_31937[(1)] = (11));

} else {
var statearr_31912_31938 = state_31889__$1;
(statearr_31912_31938[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__24143__auto___31920,ch))
;
return ((function (switch__24120__auto__,c__24143__auto___31920,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__24121__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__24121__auto____0 = (function (){
var statearr_31916 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31916[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__24121__auto__);

(statearr_31916[(1)] = (1));

return statearr_31916;
});
var figwheel$client$file_reloader_plugin_$_state_machine__24121__auto____1 = (function (state_31889){
while(true){
var ret_value__24122__auto__ = (function (){try{while(true){
var result__24123__auto__ = switch__24120__auto__.call(null,state_31889);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24123__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24123__auto__;
}
break;
}
}catch (e31917){if((e31917 instanceof Object)){
var ex__24124__auto__ = e31917;
var statearr_31918_31939 = state_31889;
(statearr_31918_31939[(5)] = ex__24124__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31889);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31917;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24122__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31940 = state_31889;
state_31889 = G__31940;
continue;
} else {
return ret_value__24122__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__24121__auto__ = function(state_31889){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__24121__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__24121__auto____1.call(this,state_31889);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloader_plugin_$_state_machine__24121__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__24121__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__24121__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__24121__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__24121__auto__;
})()
;})(switch__24120__auto__,c__24143__auto___31920,ch))
})();
var state__24145__auto__ = (function (){var statearr_31919 = f__24144__auto__.call(null);
(statearr_31919[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24143__auto___31920);

return statearr_31919;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24145__auto__);
});})(c__24143__auto___31920,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__31941_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__31941_SHARP_));
}),clojure.string.split_lines.call(null,stack_str));
});
figwheel.client.get_ua_product = (function figwheel$client$get_ua_product(){
if(cljs.core.truth_(figwheel.client.utils.node_env_QMARK_.call(null))){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.SAFARI)){
return new cljs.core.Keyword(null,"safari","safari",497115653);
} else {
if(cljs.core.truth_(goog.userAgent.product.CHROME)){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.FIREFOX)){
return new cljs.core.Keyword(null,"firefox","firefox",1283768880);
} else {
if(cljs.core.truth_(goog.userAgent.product.IE)){
return new cljs.core.Keyword(null,"ie","ie",2038473780);
} else {
return null;
}
}
}
}
}
});
var base_path_31948 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_31948){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,opts,result_handler){
try{var _STAR_print_fn_STAR_31946 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR_31947 = cljs.core._STAR_print_newline_STAR_;
cljs.core._STAR_print_fn_STAR_ = figwheel.client.repl_print_fn;

cljs.core._STAR_print_newline_STAR_ = false;

try{return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),figwheel.client.utils.eval_helper.call(null,code,opts)], null));
}finally {cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_31947;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_31946;
}}catch (e31945){if((e31945 instanceof Error)){
var e = e31945;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_31948], null));
} else {
var e = e31945;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}});})(base_path_31948))
;
/**
 * The REPL can disconnect and reconnect lets ensure cljs.user exists at least.
 */
figwheel.client.ensure_cljs_user = (function figwheel$client$ensure_cljs_user(){
if(cljs.core.truth_(cljs.user)){
return null;
} else {
return cljs.user = ({});
}
});
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__31949){
var map__31958 = p__31949;
var map__31958__$1 = ((((!((map__31958 == null)))?((((map__31958.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31958.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31958):map__31958);
var opts = map__31958__$1;
var build_id = cljs.core.get.call(null,map__31958__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__31958,map__31958__$1,opts,build_id){
return (function (p__31960){
var vec__31961 = p__31960;
var seq__31962 = cljs.core.seq.call(null,vec__31961);
var first__31963 = cljs.core.first.call(null,seq__31962);
var seq__31962__$1 = cljs.core.next.call(null,seq__31962);
var map__31964 = first__31963;
var map__31964__$1 = ((((!((map__31964 == null)))?((((map__31964.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31964.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31964):map__31964);
var msg = map__31964__$1;
var msg_name = cljs.core.get.call(null,map__31964__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__31962__$1;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),opts,((function (vec__31961,seq__31962,first__31963,seq__31962__$1,map__31964,map__31964__$1,msg,msg_name,_,map__31958,map__31958__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__31961,seq__31962,first__31963,seq__31962__$1,map__31964,map__31964__$1,msg,msg_name,_,map__31958,map__31958__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__31958,map__31958__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__31972){
var vec__31973 = p__31972;
var seq__31974 = cljs.core.seq.call(null,vec__31973);
var first__31975 = cljs.core.first.call(null,seq__31974);
var seq__31974__$1 = cljs.core.next.call(null,seq__31974);
var map__31976 = first__31975;
var map__31976__$1 = ((((!((map__31976 == null)))?((((map__31976.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31976.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31976):map__31976);
var msg = map__31976__$1;
var msg_name = cljs.core.get.call(null,map__31976__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__31974__$1;
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__31978){
var map__31990 = p__31978;
var map__31990__$1 = ((((!((map__31990 == null)))?((((map__31990.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31990.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31990):map__31990);
var on_compile_warning = cljs.core.get.call(null,map__31990__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__31990__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return ((function (map__31990,map__31990__$1,on_compile_warning,on_compile_fail){
return (function (p__31992){
var vec__31993 = p__31992;
var seq__31994 = cljs.core.seq.call(null,vec__31993);
var first__31995 = cljs.core.first.call(null,seq__31994);
var seq__31994__$1 = cljs.core.next.call(null,seq__31994);
var map__31996 = first__31995;
var map__31996__$1 = ((((!((map__31996 == null)))?((((map__31996.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31996.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31996):map__31996);
var msg = map__31996__$1;
var msg_name = cljs.core.get.call(null,map__31996__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__31994__$1;
var pred__31998 = cljs.core._EQ_;
var expr__31999 = msg_name;
if(cljs.core.truth_(pred__31998.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__31999))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__31998.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__31999))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__31990,map__31990__$1,on_compile_warning,on_compile_fail))
});
figwheel.client.heads_up_plugin_msg_handler = (function figwheel$client$heads_up_plugin_msg_handler(opts,msg_hist_SINGLEQUOTE_){
var msg_hist = figwheel.client.focus_msgs.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null], null), null),msg_hist_SINGLEQUOTE_);
var msg_names = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),msg_hist);
var msg = cljs.core.first.call(null,msg_hist);
var c__24143__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24143__auto__,msg_hist,msg_names,msg){
return (function (){
var f__24144__auto__ = (function (){var switch__24120__auto__ = ((function (c__24143__auto__,msg_hist,msg_names,msg){
return (function (state_32207){
var state_val_32208 = (state_32207[(1)]);
if((state_val_32208 === (7))){
var inst_32135 = (state_32207[(2)]);
var state_32207__$1 = state_32207;
if(cljs.core.truth_(inst_32135)){
var statearr_32209_32255 = state_32207__$1;
(statearr_32209_32255[(1)] = (8));

} else {
var statearr_32210_32256 = state_32207__$1;
(statearr_32210_32256[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32208 === (20))){
var inst_32201 = (state_32207[(2)]);
var state_32207__$1 = state_32207;
var statearr_32211_32257 = state_32207__$1;
(statearr_32211_32257[(2)] = inst_32201);

(statearr_32211_32257[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32208 === (27))){
var inst_32197 = (state_32207[(2)]);
var state_32207__$1 = state_32207;
var statearr_32212_32258 = state_32207__$1;
(statearr_32212_32258[(2)] = inst_32197);

(statearr_32212_32258[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32208 === (1))){
var inst_32128 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_32207__$1 = state_32207;
if(cljs.core.truth_(inst_32128)){
var statearr_32213_32259 = state_32207__$1;
(statearr_32213_32259[(1)] = (2));

} else {
var statearr_32214_32260 = state_32207__$1;
(statearr_32214_32260[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32208 === (24))){
var inst_32199 = (state_32207[(2)]);
var state_32207__$1 = state_32207;
var statearr_32215_32261 = state_32207__$1;
(statearr_32215_32261[(2)] = inst_32199);

(statearr_32215_32261[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32208 === (4))){
var inst_32205 = (state_32207[(2)]);
var state_32207__$1 = state_32207;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32207__$1,inst_32205);
} else {
if((state_val_32208 === (15))){
var inst_32203 = (state_32207[(2)]);
var state_32207__$1 = state_32207;
var statearr_32216_32262 = state_32207__$1;
(statearr_32216_32262[(2)] = inst_32203);

(statearr_32216_32262[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32208 === (21))){
var inst_32162 = (state_32207[(2)]);
var state_32207__$1 = state_32207;
var statearr_32217_32263 = state_32207__$1;
(statearr_32217_32263[(2)] = inst_32162);

(statearr_32217_32263[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32208 === (31))){
var inst_32186 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_32207__$1 = state_32207;
if(cljs.core.truth_(inst_32186)){
var statearr_32218_32264 = state_32207__$1;
(statearr_32218_32264[(1)] = (34));

} else {
var statearr_32219_32265 = state_32207__$1;
(statearr_32219_32265[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32208 === (32))){
var inst_32195 = (state_32207[(2)]);
var state_32207__$1 = state_32207;
var statearr_32220_32266 = state_32207__$1;
(statearr_32220_32266[(2)] = inst_32195);

(statearr_32220_32266[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32208 === (33))){
var inst_32184 = (state_32207[(2)]);
var state_32207__$1 = state_32207;
var statearr_32221_32267 = state_32207__$1;
(statearr_32221_32267[(2)] = inst_32184);

(statearr_32221_32267[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32208 === (13))){
var inst_32149 = figwheel.client.heads_up.clear.call(null);
var state_32207__$1 = state_32207;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32207__$1,(16),inst_32149);
} else {
if((state_val_32208 === (22))){
var inst_32166 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_32167 = figwheel.client.heads_up.append_message.call(null,inst_32166);
var state_32207__$1 = state_32207;
var statearr_32222_32268 = state_32207__$1;
(statearr_32222_32268[(2)] = inst_32167);

(statearr_32222_32268[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32208 === (36))){
var inst_32193 = (state_32207[(2)]);
var state_32207__$1 = state_32207;
var statearr_32223_32269 = state_32207__$1;
(statearr_32223_32269[(2)] = inst_32193);

(statearr_32223_32269[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32208 === (29))){
var inst_32177 = (state_32207[(2)]);
var state_32207__$1 = state_32207;
var statearr_32224_32270 = state_32207__$1;
(statearr_32224_32270[(2)] = inst_32177);

(statearr_32224_32270[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32208 === (6))){
var inst_32130 = (state_32207[(7)]);
var state_32207__$1 = state_32207;
var statearr_32225_32271 = state_32207__$1;
(statearr_32225_32271[(2)] = inst_32130);

(statearr_32225_32271[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32208 === (28))){
var inst_32173 = (state_32207[(2)]);
var inst_32174 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_32175 = figwheel.client.heads_up.display_warning.call(null,inst_32174);
var state_32207__$1 = (function (){var statearr_32226 = state_32207;
(statearr_32226[(8)] = inst_32173);

return statearr_32226;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32207__$1,(29),inst_32175);
} else {
if((state_val_32208 === (25))){
var inst_32171 = figwheel.client.heads_up.clear.call(null);
var state_32207__$1 = state_32207;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32207__$1,(28),inst_32171);
} else {
if((state_val_32208 === (34))){
var inst_32188 = figwheel.client.heads_up.flash_loaded.call(null);
var state_32207__$1 = state_32207;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32207__$1,(37),inst_32188);
} else {
if((state_val_32208 === (17))){
var inst_32155 = (state_32207[(2)]);
var state_32207__$1 = state_32207;
var statearr_32227_32272 = state_32207__$1;
(statearr_32227_32272[(2)] = inst_32155);

(statearr_32227_32272[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32208 === (3))){
var inst_32147 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_32207__$1 = state_32207;
if(cljs.core.truth_(inst_32147)){
var statearr_32228_32273 = state_32207__$1;
(statearr_32228_32273[(1)] = (13));

} else {
var statearr_32229_32274 = state_32207__$1;
(statearr_32229_32274[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32208 === (12))){
var inst_32143 = (state_32207[(2)]);
var state_32207__$1 = state_32207;
var statearr_32230_32275 = state_32207__$1;
(statearr_32230_32275[(2)] = inst_32143);

(statearr_32230_32275[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32208 === (2))){
var inst_32130 = (state_32207[(7)]);
var inst_32130__$1 = figwheel.client.autoload_QMARK_.call(null);
var state_32207__$1 = (function (){var statearr_32231 = state_32207;
(statearr_32231[(7)] = inst_32130__$1);

return statearr_32231;
})();
if(cljs.core.truth_(inst_32130__$1)){
var statearr_32232_32276 = state_32207__$1;
(statearr_32232_32276[(1)] = (5));

} else {
var statearr_32233_32277 = state_32207__$1;
(statearr_32233_32277[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32208 === (23))){
var inst_32169 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_32207__$1 = state_32207;
if(cljs.core.truth_(inst_32169)){
var statearr_32234_32278 = state_32207__$1;
(statearr_32234_32278[(1)] = (25));

} else {
var statearr_32235_32279 = state_32207__$1;
(statearr_32235_32279[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32208 === (35))){
var state_32207__$1 = state_32207;
var statearr_32236_32280 = state_32207__$1;
(statearr_32236_32280[(2)] = null);

(statearr_32236_32280[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32208 === (19))){
var inst_32164 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_32207__$1 = state_32207;
if(cljs.core.truth_(inst_32164)){
var statearr_32237_32281 = state_32207__$1;
(statearr_32237_32281[(1)] = (22));

} else {
var statearr_32238_32282 = state_32207__$1;
(statearr_32238_32282[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32208 === (11))){
var inst_32139 = (state_32207[(2)]);
var state_32207__$1 = state_32207;
var statearr_32239_32283 = state_32207__$1;
(statearr_32239_32283[(2)] = inst_32139);

(statearr_32239_32283[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32208 === (9))){
var inst_32141 = figwheel.client.heads_up.clear.call(null);
var state_32207__$1 = state_32207;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32207__$1,(12),inst_32141);
} else {
if((state_val_32208 === (5))){
var inst_32132 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_32207__$1 = state_32207;
var statearr_32240_32284 = state_32207__$1;
(statearr_32240_32284[(2)] = inst_32132);

(statearr_32240_32284[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32208 === (14))){
var inst_32157 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_32207__$1 = state_32207;
if(cljs.core.truth_(inst_32157)){
var statearr_32241_32285 = state_32207__$1;
(statearr_32241_32285[(1)] = (18));

} else {
var statearr_32242_32286 = state_32207__$1;
(statearr_32242_32286[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32208 === (26))){
var inst_32179 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_32207__$1 = state_32207;
if(cljs.core.truth_(inst_32179)){
var statearr_32243_32287 = state_32207__$1;
(statearr_32243_32287[(1)] = (30));

} else {
var statearr_32244_32288 = state_32207__$1;
(statearr_32244_32288[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32208 === (16))){
var inst_32151 = (state_32207[(2)]);
var inst_32152 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_32153 = figwheel.client.heads_up.display_exception.call(null,inst_32152);
var state_32207__$1 = (function (){var statearr_32245 = state_32207;
(statearr_32245[(9)] = inst_32151);

return statearr_32245;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32207__$1,(17),inst_32153);
} else {
if((state_val_32208 === (30))){
var inst_32181 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_32182 = figwheel.client.heads_up.display_warning.call(null,inst_32181);
var state_32207__$1 = state_32207;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32207__$1,(33),inst_32182);
} else {
if((state_val_32208 === (10))){
var inst_32145 = (state_32207[(2)]);
var state_32207__$1 = state_32207;
var statearr_32246_32289 = state_32207__$1;
(statearr_32246_32289[(2)] = inst_32145);

(statearr_32246_32289[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32208 === (18))){
var inst_32159 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_32160 = figwheel.client.heads_up.display_exception.call(null,inst_32159);
var state_32207__$1 = state_32207;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32207__$1,(21),inst_32160);
} else {
if((state_val_32208 === (37))){
var inst_32190 = (state_32207[(2)]);
var state_32207__$1 = state_32207;
var statearr_32247_32290 = state_32207__$1;
(statearr_32247_32290[(2)] = inst_32190);

(statearr_32247_32290[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32208 === (8))){
var inst_32137 = figwheel.client.heads_up.flash_loaded.call(null);
var state_32207__$1 = state_32207;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32207__$1,(11),inst_32137);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__24143__auto__,msg_hist,msg_names,msg))
;
return ((function (switch__24120__auto__,c__24143__auto__,msg_hist,msg_names,msg){
return (function() {
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__24121__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__24121__auto____0 = (function (){
var statearr_32251 = [null,null,null,null,null,null,null,null,null,null];
(statearr_32251[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__24121__auto__);

(statearr_32251[(1)] = (1));

return statearr_32251;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__24121__auto____1 = (function (state_32207){
while(true){
var ret_value__24122__auto__ = (function (){try{while(true){
var result__24123__auto__ = switch__24120__auto__.call(null,state_32207);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24123__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24123__auto__;
}
break;
}
}catch (e32252){if((e32252 instanceof Object)){
var ex__24124__auto__ = e32252;
var statearr_32253_32291 = state_32207;
(statearr_32253_32291[(5)] = ex__24124__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32207);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32252;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24122__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32292 = state_32207;
state_32207 = G__32292;
continue;
} else {
return ret_value__24122__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__24121__auto__ = function(state_32207){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__24121__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__24121__auto____1.call(this,state_32207);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__24121__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__24121__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__24121__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__24121__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__24121__auto__;
})()
;})(switch__24120__auto__,c__24143__auto__,msg_hist,msg_names,msg))
})();
var state__24145__auto__ = (function (){var statearr_32254 = f__24144__auto__.call(null);
(statearr_32254[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24143__auto__);

return statearr_32254;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24145__auto__);
});})(c__24143__auto__,msg_hist,msg_names,msg))
);

return c__24143__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__24143__auto___32355 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24143__auto___32355,ch){
return (function (){
var f__24144__auto__ = (function (){var switch__24120__auto__ = ((function (c__24143__auto___32355,ch){
return (function (state_32338){
var state_val_32339 = (state_32338[(1)]);
if((state_val_32339 === (1))){
var state_32338__$1 = state_32338;
var statearr_32340_32356 = state_32338__$1;
(statearr_32340_32356[(2)] = null);

(statearr_32340_32356[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32339 === (2))){
var state_32338__$1 = state_32338;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32338__$1,(4),ch);
} else {
if((state_val_32339 === (3))){
var inst_32336 = (state_32338[(2)]);
var state_32338__$1 = state_32338;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32338__$1,inst_32336);
} else {
if((state_val_32339 === (4))){
var inst_32326 = (state_32338[(7)]);
var inst_32326__$1 = (state_32338[(2)]);
var state_32338__$1 = (function (){var statearr_32341 = state_32338;
(statearr_32341[(7)] = inst_32326__$1);

return statearr_32341;
})();
if(cljs.core.truth_(inst_32326__$1)){
var statearr_32342_32357 = state_32338__$1;
(statearr_32342_32357[(1)] = (5));

} else {
var statearr_32343_32358 = state_32338__$1;
(statearr_32343_32358[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32339 === (5))){
var inst_32326 = (state_32338[(7)]);
var inst_32328 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_32326);
var state_32338__$1 = state_32338;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32338__$1,(8),inst_32328);
} else {
if((state_val_32339 === (6))){
var state_32338__$1 = state_32338;
var statearr_32344_32359 = state_32338__$1;
(statearr_32344_32359[(2)] = null);

(statearr_32344_32359[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32339 === (7))){
var inst_32334 = (state_32338[(2)]);
var state_32338__$1 = state_32338;
var statearr_32345_32360 = state_32338__$1;
(statearr_32345_32360[(2)] = inst_32334);

(statearr_32345_32360[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32339 === (8))){
var inst_32330 = (state_32338[(2)]);
var state_32338__$1 = (function (){var statearr_32346 = state_32338;
(statearr_32346[(8)] = inst_32330);

return statearr_32346;
})();
var statearr_32347_32361 = state_32338__$1;
(statearr_32347_32361[(2)] = null);

(statearr_32347_32361[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
});})(c__24143__auto___32355,ch))
;
return ((function (switch__24120__auto__,c__24143__auto___32355,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__24121__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__24121__auto____0 = (function (){
var statearr_32351 = [null,null,null,null,null,null,null,null,null];
(statearr_32351[(0)] = figwheel$client$heads_up_plugin_$_state_machine__24121__auto__);

(statearr_32351[(1)] = (1));

return statearr_32351;
});
var figwheel$client$heads_up_plugin_$_state_machine__24121__auto____1 = (function (state_32338){
while(true){
var ret_value__24122__auto__ = (function (){try{while(true){
var result__24123__auto__ = switch__24120__auto__.call(null,state_32338);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24123__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24123__auto__;
}
break;
}
}catch (e32352){if((e32352 instanceof Object)){
var ex__24124__auto__ = e32352;
var statearr_32353_32362 = state_32338;
(statearr_32353_32362[(5)] = ex__24124__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32338);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32352;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24122__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32363 = state_32338;
state_32338 = G__32363;
continue;
} else {
return ret_value__24122__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__24121__auto__ = function(state_32338){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__24121__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__24121__auto____1.call(this,state_32338);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_$_state_machine__24121__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__24121__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__24121__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__24121__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__24121__auto__;
})()
;})(switch__24120__auto__,c__24143__auto___32355,ch))
})();
var state__24145__auto__ = (function (){var statearr_32354 = f__24144__auto__.call(null);
(statearr_32354[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24143__auto___32355);

return statearr_32354;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24145__auto__);
});})(c__24143__auto___32355,ch))
);


figwheel.client.heads_up.ensure_container.call(null);

return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.enforce_project_plugin = (function figwheel$client$enforce_project_plugin(opts){
return (function (msg_hist){
if(((1) < cljs.core.count.call(null,cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"project-id","project-id",206449307),cljs.core.take.call(null,(5),msg_hist)))))){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different project. Shutting socket down.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__24143__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24143__auto__){
return (function (){
var f__24144__auto__ = (function (){var switch__24120__auto__ = ((function (c__24143__auto__){
return (function (state_32384){
var state_val_32385 = (state_32384[(1)]);
if((state_val_32385 === (1))){
var inst_32379 = cljs.core.async.timeout.call(null,(3000));
var state_32384__$1 = state_32384;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32384__$1,(2),inst_32379);
} else {
if((state_val_32385 === (2))){
var inst_32381 = (state_32384[(2)]);
var inst_32382 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_32384__$1 = (function (){var statearr_32386 = state_32384;
(statearr_32386[(7)] = inst_32381);

return statearr_32386;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32384__$1,inst_32382);
} else {
return null;
}
}
});})(c__24143__auto__))
;
return ((function (switch__24120__auto__,c__24143__auto__){
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__24121__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__24121__auto____0 = (function (){
var statearr_32390 = [null,null,null,null,null,null,null,null];
(statearr_32390[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__24121__auto__);

(statearr_32390[(1)] = (1));

return statearr_32390;
});
var figwheel$client$enforce_project_plugin_$_state_machine__24121__auto____1 = (function (state_32384){
while(true){
var ret_value__24122__auto__ = (function (){try{while(true){
var result__24123__auto__ = switch__24120__auto__.call(null,state_32384);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24123__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24123__auto__;
}
break;
}
}catch (e32391){if((e32391 instanceof Object)){
var ex__24124__auto__ = e32391;
var statearr_32392_32394 = state_32384;
(statearr_32392_32394[(5)] = ex__24124__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32384);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32391;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24122__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32395 = state_32384;
state_32384 = G__32395;
continue;
} else {
return ret_value__24122__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__24121__auto__ = function(state_32384){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__24121__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__24121__auto____1.call(this,state_32384);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_project_plugin_$_state_machine__24121__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__24121__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__24121__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__24121__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__24121__auto__;
})()
;})(switch__24120__auto__,c__24143__auto__))
})();
var state__24145__auto__ = (function (){var statearr_32393 = f__24144__auto__.call(null);
(statearr_32393[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24143__auto__);

return statearr_32393;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24145__auto__);
});})(c__24143__auto__))
);

return c__24143__auto__;
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.default_on_jsload = cljs.core.identity;
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__32396){
var map__32403 = p__32396;
var map__32403__$1 = ((((!((map__32403 == null)))?((((map__32403.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32403.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32403):map__32403);
var ed = map__32403__$1;
var formatted_exception = cljs.core.get.call(null,map__32403__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));
var exception_data = cljs.core.get.call(null,map__32403__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__32403__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: Compile Exception");

var seq__32405_32409 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));
var chunk__32406_32410 = null;
var count__32407_32411 = (0);
var i__32408_32412 = (0);
while(true){
if((i__32408_32412 < count__32407_32411)){
var msg_32413 = cljs.core._nth.call(null,chunk__32406_32410,i__32408_32412);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_32413);

var G__32414 = seq__32405_32409;
var G__32415 = chunk__32406_32410;
var G__32416 = count__32407_32411;
var G__32417 = (i__32408_32412 + (1));
seq__32405_32409 = G__32414;
chunk__32406_32410 = G__32415;
count__32407_32411 = G__32416;
i__32408_32412 = G__32417;
continue;
} else {
var temp__6747__auto___32418 = cljs.core.seq.call(null,seq__32405_32409);
if(temp__6747__auto___32418){
var seq__32405_32419__$1 = temp__6747__auto___32418;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__32405_32419__$1)){
var c__22055__auto___32420 = cljs.core.chunk_first.call(null,seq__32405_32419__$1);
var G__32421 = cljs.core.chunk_rest.call(null,seq__32405_32419__$1);
var G__32422 = c__22055__auto___32420;
var G__32423 = cljs.core.count.call(null,c__22055__auto___32420);
var G__32424 = (0);
seq__32405_32409 = G__32421;
chunk__32406_32410 = G__32422;
count__32407_32411 = G__32423;
i__32408_32412 = G__32424;
continue;
} else {
var msg_32425 = cljs.core.first.call(null,seq__32405_32419__$1);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_32425);

var G__32426 = cljs.core.next.call(null,seq__32405_32419__$1);
var G__32427 = null;
var G__32428 = (0);
var G__32429 = (0);
seq__32405_32409 = G__32426;
chunk__32406_32410 = G__32427;
count__32407_32411 = G__32428;
i__32408_32412 = G__32429;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_(cause)){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str("Error on file "),cljs.core.str(new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(cause)),cljs.core.str(", line "),cljs.core.str(new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(cause)),cljs.core.str(", column "),cljs.core.str(new cljs.core.Keyword(null,"column","column",2078222095).cljs$core$IFn$_invoke$arity$1(cause))].join(''));
} else {
}

return ed;
});
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__32430){
var map__32433 = p__32430;
var map__32433__$1 = ((((!((map__32433 == null)))?((((map__32433.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32433.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32433):map__32433);
var w = map__32433__$1;
var message = cljs.core.get.call(null,map__32433__$1,new cljs.core.Keyword(null,"message","message",-406056002));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),[cljs.core.str("Figwheel: Compile Warning - "),cljs.core.str(message)].join(''));

return w;
});
figwheel.client.default_before_load = (function figwheel$client$default_before_load(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: notified of file changes");

return files;
});
figwheel.client.default_on_cssload = (function figwheel$client$default_on_cssload(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded CSS files");

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),cljs.core.pr_str.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files)));

return files;
});
if(typeof figwheel.client.config_defaults !== 'undefined'){
} else {
figwheel.client.config_defaults = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947),new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430),new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036),new cljs.core.Keyword(null,"debug","debug",-1608172596),new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202),new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128),new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223),new cljs.core.Keyword(null,"eval-fn","eval-fn",-1111644294),new cljs.core.Keyword(null,"retry-count","retry-count",1936122875),new cljs.core.Keyword(null,"autoload","autoload",-354122500),new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318)],[figwheel.client.default_on_compile_warning,figwheel.client.default_on_jsload,true,figwheel.client.default_on_compile_fail,false,true,[cljs.core.str("ws://"),cljs.core.str((cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))?location.host:"localhost:3449")),cljs.core.str("/figwheel-ws")].join(''),figwheel.client.default_before_load,false,false,(100),true,figwheel.client.default_on_cssload]);
}
figwheel.client.handle_deprecated_jsload_callback = (function figwheel$client$handle_deprecated_jsload_callback(config){
if(cljs.core.truth_(new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config))){
return cljs.core.dissoc.call(null,cljs.core.assoc.call(null,config,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config)),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369));
} else {
return config;
}
});
figwheel.client.fill_url_template = (function figwheel$client$fill_url_template(config){
return cljs.core.update_in.call(null,config,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938)], null),(function (x){
return clojure.string.replace.call(null,clojure.string.replace.call(null,x,"[[client-hostname]]",location.hostname),"[[client-port]]",location.port);
}));
});
figwheel.client.base_plugins = (function figwheel$client$base_plugins(system_options){
var base = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"enforce-project-plugin","enforce-project-plugin",959402899),figwheel.client.enforce_project_plugin,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),figwheel.client.file_reloader_plugin,new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),figwheel.client.compile_fail_warning_plugin,new cljs.core.Keyword(null,"css-reloader-plugin","css-reloader-plugin",2002032904),figwheel.client.css_reloader_plugin,new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371),figwheel.client.repl_plugin], null);
var base__$1 = ((cljs.core.not.call(null,figwheel.client.utils.html_env_QMARK_.call(null)))?cljs.core.select_keys.call(null,base,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371)], null)):base);
var base__$2 = ((new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(system_options) === false)?cljs.core.dissoc.call(null,base__$1,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733)):base__$1);
if(cljs.core.truth_((function (){var and__21137__auto__ = new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(system_options);
if(cljs.core.truth_(and__21137__auto__)){
return figwheel.client.utils.html_env_QMARK_.call(null);
} else {
return and__21137__auto__;
}
})())){
return cljs.core.assoc.call(null,base__$2,new cljs.core.Keyword(null,"heads-up-display-plugin","heads-up-display-plugin",1745207501),figwheel.client.heads_up_plugin);
} else {
return base__$2;
}
});
figwheel.client.add_message_watch = (function figwheel$client$add_message_watch(key,callback){
return cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,key,(function (_,___$1,___$2,msg_hist){
return callback.call(null,cljs.core.first.call(null,msg_hist));
}));
});
figwheel.client.add_plugins = (function figwheel$client$add_plugins(plugins,system_options){
var seq__32445 = cljs.core.seq.call(null,plugins);
var chunk__32446 = null;
var count__32447 = (0);
var i__32448 = (0);
while(true){
if((i__32448 < count__32447)){
var vec__32449 = cljs.core._nth.call(null,chunk__32446,i__32448);
var k = cljs.core.nth.call(null,vec__32449,(0),null);
var plugin = cljs.core.nth.call(null,vec__32449,(1),null);
if(cljs.core.truth_(plugin)){
var pl_32455 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__32445,chunk__32446,count__32447,i__32448,pl_32455,vec__32449,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_32455.call(null,msg_hist);
});})(seq__32445,chunk__32446,count__32447,i__32448,pl_32455,vec__32449,k,plugin))
);
} else {
}

var G__32456 = seq__32445;
var G__32457 = chunk__32446;
var G__32458 = count__32447;
var G__32459 = (i__32448 + (1));
seq__32445 = G__32456;
chunk__32446 = G__32457;
count__32447 = G__32458;
i__32448 = G__32459;
continue;
} else {
var temp__6747__auto__ = cljs.core.seq.call(null,seq__32445);
if(temp__6747__auto__){
var seq__32445__$1 = temp__6747__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__32445__$1)){
var c__22055__auto__ = cljs.core.chunk_first.call(null,seq__32445__$1);
var G__32460 = cljs.core.chunk_rest.call(null,seq__32445__$1);
var G__32461 = c__22055__auto__;
var G__32462 = cljs.core.count.call(null,c__22055__auto__);
var G__32463 = (0);
seq__32445 = G__32460;
chunk__32446 = G__32461;
count__32447 = G__32462;
i__32448 = G__32463;
continue;
} else {
var vec__32452 = cljs.core.first.call(null,seq__32445__$1);
var k = cljs.core.nth.call(null,vec__32452,(0),null);
var plugin = cljs.core.nth.call(null,vec__32452,(1),null);
if(cljs.core.truth_(plugin)){
var pl_32464 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__32445,chunk__32446,count__32447,i__32448,pl_32464,vec__32452,k,plugin,seq__32445__$1,temp__6747__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_32464.call(null,msg_hist);
});})(seq__32445,chunk__32446,count__32447,i__32448,pl_32464,vec__32452,k,plugin,seq__32445__$1,temp__6747__auto__))
);
} else {
}

var G__32465 = cljs.core.next.call(null,seq__32445__$1);
var G__32466 = null;
var G__32467 = (0);
var G__32468 = (0);
seq__32445 = G__32465;
chunk__32446 = G__32466;
count__32447 = G__32467;
i__32448 = G__32468;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.start = (function figwheel$client$start(var_args){
var args32469 = [];
var len__22365__auto___32472 = arguments.length;
var i__22366__auto___32473 = (0);
while(true){
if((i__22366__auto___32473 < len__22365__auto___32472)){
args32469.push((arguments[i__22366__auto___32473]));

var G__32474 = (i__22366__auto___32473 + (1));
i__22366__auto___32473 = G__32474;
continue;
} else {
}
break;
}

var G__32471 = args32469.length;
switch (G__32471) {
case 1:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 0:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args32469.length)].join('')));

}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$1 = (function (opts){
if((goog.dependencies_ == null)){
return null;
} else {
if(typeof figwheel.client.__figwheel_start_once__ !== 'undefined'){
return null;
} else {
return (
figwheel.client.__figwheel_start_once__ = setTimeout((function (){
var plugins_SINGLEQUOTE_ = new cljs.core.Keyword(null,"plugins","plugins",1900073717).cljs$core$IFn$_invoke$arity$1(opts);
var merge_plugins = new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370).cljs$core$IFn$_invoke$arity$1(opts);
var system_options = figwheel.client.fill_url_template.call(null,figwheel.client.handle_deprecated_jsload_callback.call(null,cljs.core.merge.call(null,figwheel.client.config_defaults,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"plugins","plugins",1900073717),new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370)))));
var plugins = (cljs.core.truth_(plugins_SINGLEQUOTE_)?plugins_SINGLEQUOTE_:cljs.core.merge.call(null,figwheel.client.base_plugins.call(null,system_options),merge_plugins));
figwheel.client.utils._STAR_print_debug_STAR_ = new cljs.core.Keyword(null,"debug","debug",-1608172596).cljs$core$IFn$_invoke$arity$1(opts);

figwheel.client.add_plugins.call(null,plugins,system_options);

figwheel.client.file_reloading.patch_goog_base.call(null);

return figwheel.client.socket.open.call(null,system_options);
})))
;
}
}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$0 = (function (){
return figwheel.client.start.call(null,cljs.core.PersistentArrayMap.EMPTY);
});

figwheel.client.start.cljs$lang$maxFixedArity = 1;

figwheel.client.watch_and_reload_with_opts = figwheel.client.start;
figwheel.client.watch_and_reload = (function figwheel$client$watch_and_reload(var_args){
var args__22372__auto__ = [];
var len__22365__auto___32480 = arguments.length;
var i__22366__auto___32481 = (0);
while(true){
if((i__22366__auto___32481 < len__22365__auto___32480)){
args__22372__auto__.push((arguments[i__22366__auto___32481]));

var G__32482 = (i__22366__auto___32481 + (1));
i__22366__auto___32481 = G__32482;
continue;
} else {
}
break;
}

var argseq__22373__auto__ = ((((0) < args__22372__auto__.length))?(new cljs.core.IndexedSeq(args__22372__auto__.slice((0)),(0),null)):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__22373__auto__);
});

figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__32477){
var map__32478 = p__32477;
var map__32478__$1 = ((((!((map__32478 == null)))?((((map__32478.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32478.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32478):map__32478);
var opts = map__32478__$1;
return figwheel.client.start.call(null,opts);
});

figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0);

figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq32476){
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq32476));
});


//# sourceMappingURL=client.js.map