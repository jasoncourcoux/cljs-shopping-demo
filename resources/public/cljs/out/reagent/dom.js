// Compiled by ClojureScript 1.9.293 {}
goog.provide('reagent.dom');
goog.require('cljs.core');
goog.require('reagent.impl.util');
goog.require('reagent.interop');
goog.require('reagent.ratom');
goog.require('reagent.impl.template');
goog.require('reagent.impl.batching');
goog.require('cljsjs.react.dom');
goog.require('reagent.debug');
if(typeof reagent.dom.imported !== 'undefined'){
} else {
reagent.dom.imported = null;
}
reagent.dom.module = (function reagent$dom$module(){
if(cljs.core.some_QMARK_.call(null,reagent.dom.imported)){
return reagent.dom.imported;
} else {
if(typeof ReactDOM !== 'undefined'){
return reagent.dom.imported = ReactDOM;
} else {
if(typeof require !== 'undefined'){
var or__21149__auto__ = reagent.dom.imported = require("react-dom");
if(cljs.core.truth_(or__21149__auto__)){
return or__21149__auto__;
} else {
throw (new Error("require('react-dom') failed"));
}
} else {
throw (new Error("js/ReactDOM is missing"));

}
}
}
});
if(typeof reagent.dom.roots !== 'undefined'){
} else {
reagent.dom.roots = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
reagent.dom.unmount_comp = (function reagent$dom$unmount_comp(container){
cljs.core.swap_BANG_.call(null,reagent.dom.roots,cljs.core.dissoc,container);

return (reagent.dom.module.call(null)["unmountComponentAtNode"])(container);
});
reagent.dom.render_comp = (function reagent$dom$render_comp(comp,container,callback){
var _STAR_always_update_STAR_25655 = reagent.impl.util._STAR_always_update_STAR_;
reagent.impl.util._STAR_always_update_STAR_ = true;

try{return (reagent.dom.module.call(null)["render"])(comp.call(null),container,((function (_STAR_always_update_STAR_25655){
return (function (){
var _STAR_always_update_STAR_25656 = reagent.impl.util._STAR_always_update_STAR_;
reagent.impl.util._STAR_always_update_STAR_ = false;

try{cljs.core.swap_BANG_.call(null,reagent.dom.roots,cljs.core.assoc,container,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [comp,container], null));

reagent.impl.batching.flush_after_render.call(null);

if(cljs.core.some_QMARK_.call(null,callback)){
return callback.call(null);
} else {
return null;
}
}finally {reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR_25656;
}});})(_STAR_always_update_STAR_25655))
);
}finally {reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR_25655;
}});
reagent.dom.re_render_component = (function reagent$dom$re_render_component(comp,container){
return reagent.dom.render_comp.call(null,comp,container,null);
});
/**
 * Render a Reagent component into the DOM. The first argument may be
 *   either a vector (using Reagent's Hiccup syntax), or a React element. The second argument should be a DOM node.
 * 
 *   Optionally takes a callback that is called when the component is in place.
 * 
 *   Returns the mounted component instance.
 */
reagent.dom.render = (function reagent$dom$render(var_args){
var args25657 = [];
var len__22365__auto___25660 = arguments.length;
var i__22366__auto___25661 = (0);
while(true){
if((i__22366__auto___25661 < len__22365__auto___25660)){
args25657.push((arguments[i__22366__auto___25661]));

var G__25662 = (i__22366__auto___25661 + (1));
i__22366__auto___25661 = G__25662;
continue;
} else {
}
break;
}

var G__25659 = args25657.length;
switch (G__25659) {
case 2:
return reagent.dom.render.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return reagent.dom.render.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25657.length)].join('')));

}
});

reagent.dom.render.cljs$core$IFn$_invoke$arity$2 = (function (comp,container){
return reagent.dom.render.call(null,comp,container,null);
});

reagent.dom.render.cljs$core$IFn$_invoke$arity$3 = (function (comp,container,callback){
reagent.ratom.flush_BANG_.call(null);

var f = (function (){
return reagent.impl.template.as_element.call(null,((cljs.core.fn_QMARK_.call(null,comp))?comp.call(null):comp));
});
return reagent.dom.render_comp.call(null,f,container,callback);
});

reagent.dom.render.cljs$lang$maxFixedArity = 3;

reagent.dom.unmount_component_at_node = (function reagent$dom$unmount_component_at_node(container){
return reagent.dom.unmount_comp.call(null,container);
});
/**
 * Returns the root DOM node of a mounted component.
 */
reagent.dom.dom_node = (function reagent$dom$dom_node(this$){
return (reagent.dom.module.call(null)["findDOMNode"])(this$);
});
/**
 * Force re-rendering of all mounted Reagent components. This is
 *   probably only useful in a development environment, when you want to
 *   update components in response to some dynamic changes to code.
 * 
 *   Note that force-update-all may not update root components. This
 *   happens if a component 'foo' is mounted with `(render [foo])` (since
 *   functions are passed by value, and not by reference, in
 *   ClojureScript). To get around this you'll have to introduce a layer
 *   of indirection, for example by using `(render [#'foo])` instead.
 */
reagent.dom.force_update_all = (function reagent$dom$force_update_all(){
reagent.ratom.flush_BANG_.call(null);

var seq__25668_25672 = cljs.core.seq.call(null,cljs.core.vals.call(null,cljs.core.deref.call(null,reagent.dom.roots)));
var chunk__25669_25673 = null;
var count__25670_25674 = (0);
var i__25671_25675 = (0);
while(true){
if((i__25671_25675 < count__25670_25674)){
var v_25676 = cljs.core._nth.call(null,chunk__25669_25673,i__25671_25675);
cljs.core.apply.call(null,reagent.dom.re_render_component,v_25676);

var G__25677 = seq__25668_25672;
var G__25678 = chunk__25669_25673;
var G__25679 = count__25670_25674;
var G__25680 = (i__25671_25675 + (1));
seq__25668_25672 = G__25677;
chunk__25669_25673 = G__25678;
count__25670_25674 = G__25679;
i__25671_25675 = G__25680;
continue;
} else {
var temp__6747__auto___25681 = cljs.core.seq.call(null,seq__25668_25672);
if(temp__6747__auto___25681){
var seq__25668_25682__$1 = temp__6747__auto___25681;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__25668_25682__$1)){
var c__22055__auto___25683 = cljs.core.chunk_first.call(null,seq__25668_25682__$1);
var G__25684 = cljs.core.chunk_rest.call(null,seq__25668_25682__$1);
var G__25685 = c__22055__auto___25683;
var G__25686 = cljs.core.count.call(null,c__22055__auto___25683);
var G__25687 = (0);
seq__25668_25672 = G__25684;
chunk__25669_25673 = G__25685;
count__25670_25674 = G__25686;
i__25671_25675 = G__25687;
continue;
} else {
var v_25688 = cljs.core.first.call(null,seq__25668_25682__$1);
cljs.core.apply.call(null,reagent.dom.re_render_component,v_25688);

var G__25689 = cljs.core.next.call(null,seq__25668_25682__$1);
var G__25690 = null;
var G__25691 = (0);
var G__25692 = (0);
seq__25668_25672 = G__25689;
chunk__25669_25673 = G__25690;
count__25670_25674 = G__25691;
i__25671_25675 = G__25692;
continue;
}
} else {
}
}
break;
}

return "Updated";
});

//# sourceMappingURL=dom.js.map