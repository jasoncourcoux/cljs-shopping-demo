// Compiled by ClojureScript 1.9.293 {}
goog.provide('cljs.spec');
goog.require('cljs.core');
goog.require('cljs.core');
goog.require('goog.object');
goog.require('clojure.walk');
goog.require('cljs.spec.impl.gen');
goog.require('clojure.string');
cljs.spec.MAX_INT = (9007199254740991);
/**
 * A soft limit on how many times a branching spec (or/alt/* /opt-keys/multi-spec)
 *   can be recursed through during generation. After this a
 *   non-recursive branch will be chosen.
 */
cljs.spec._STAR_recursion_limit_STAR_ = (4);
/**
 * The number of times an anonymous fn specified by fspec will be (generatively) tested during conform
 */
cljs.spec._STAR_fspec_iterations_STAR_ = (21);
/**
 * The number of items validated in a collection spec'ed with 'every'
 */
cljs.spec._STAR_coll_check_limit_STAR_ = (101);
/**
 * The number of errors reported by explain in a collection spec'ed with 'every'
 */
cljs.spec._STAR_coll_error_limit_STAR_ = (20);

/**
 * @interface
 */
cljs.spec.Spec = function(){};

cljs.spec.conform_STAR_ = (function cljs$spec$conform_STAR_(spec,x){
if((!((spec == null))) && (!((spec.cljs$spec$Spec$conform_STAR_$arity$2 == null)))){
return spec.cljs$spec$Spec$conform_STAR_$arity$2(spec,x);
} else {
var x__21862__auto__ = (((spec == null))?null:spec);
var m__21863__auto__ = (cljs.spec.conform_STAR_[goog.typeOf(x__21862__auto__)]);
if(!((m__21863__auto__ == null))){
return m__21863__auto__.call(null,spec,x);
} else {
var m__21863__auto____$1 = (cljs.spec.conform_STAR_["_"]);
if(!((m__21863__auto____$1 == null))){
return m__21863__auto____$1.call(null,spec,x);
} else {
throw cljs.core.missing_protocol.call(null,"Spec.conform*",spec);
}
}
}
});

cljs.spec.unform_STAR_ = (function cljs$spec$unform_STAR_(spec,y){
if((!((spec == null))) && (!((spec.cljs$spec$Spec$unform_STAR_$arity$2 == null)))){
return spec.cljs$spec$Spec$unform_STAR_$arity$2(spec,y);
} else {
var x__21862__auto__ = (((spec == null))?null:spec);
var m__21863__auto__ = (cljs.spec.unform_STAR_[goog.typeOf(x__21862__auto__)]);
if(!((m__21863__auto__ == null))){
return m__21863__auto__.call(null,spec,y);
} else {
var m__21863__auto____$1 = (cljs.spec.unform_STAR_["_"]);
if(!((m__21863__auto____$1 == null))){
return m__21863__auto____$1.call(null,spec,y);
} else {
throw cljs.core.missing_protocol.call(null,"Spec.unform*",spec);
}
}
}
});

cljs.spec.explain_STAR_ = (function cljs$spec$explain_STAR_(spec,path,via,in$,x){
if((!((spec == null))) && (!((spec.cljs$spec$Spec$explain_STAR_$arity$5 == null)))){
return spec.cljs$spec$Spec$explain_STAR_$arity$5(spec,path,via,in$,x);
} else {
var x__21862__auto__ = (((spec == null))?null:spec);
var m__21863__auto__ = (cljs.spec.explain_STAR_[goog.typeOf(x__21862__auto__)]);
if(!((m__21863__auto__ == null))){
return m__21863__auto__.call(null,spec,path,via,in$,x);
} else {
var m__21863__auto____$1 = (cljs.spec.explain_STAR_["_"]);
if(!((m__21863__auto____$1 == null))){
return m__21863__auto____$1.call(null,spec,path,via,in$,x);
} else {
throw cljs.core.missing_protocol.call(null,"Spec.explain*",spec);
}
}
}
});

cljs.spec.gen_STAR_ = (function cljs$spec$gen_STAR_(spec,overrides,path,rmap){
if((!((spec == null))) && (!((spec.cljs$spec$Spec$gen_STAR_$arity$4 == null)))){
return spec.cljs$spec$Spec$gen_STAR_$arity$4(spec,overrides,path,rmap);
} else {
var x__21862__auto__ = (((spec == null))?null:spec);
var m__21863__auto__ = (cljs.spec.gen_STAR_[goog.typeOf(x__21862__auto__)]);
if(!((m__21863__auto__ == null))){
return m__21863__auto__.call(null,spec,overrides,path,rmap);
} else {
var m__21863__auto____$1 = (cljs.spec.gen_STAR_["_"]);
if(!((m__21863__auto____$1 == null))){
return m__21863__auto____$1.call(null,spec,overrides,path,rmap);
} else {
throw cljs.core.missing_protocol.call(null,"Spec.gen*",spec);
}
}
}
});

cljs.spec.with_gen_STAR_ = (function cljs$spec$with_gen_STAR_(spec,gfn){
if((!((spec == null))) && (!((spec.cljs$spec$Spec$with_gen_STAR_$arity$2 == null)))){
return spec.cljs$spec$Spec$with_gen_STAR_$arity$2(spec,gfn);
} else {
var x__21862__auto__ = (((spec == null))?null:spec);
var m__21863__auto__ = (cljs.spec.with_gen_STAR_[goog.typeOf(x__21862__auto__)]);
if(!((m__21863__auto__ == null))){
return m__21863__auto__.call(null,spec,gfn);
} else {
var m__21863__auto____$1 = (cljs.spec.with_gen_STAR_["_"]);
if(!((m__21863__auto____$1 == null))){
return m__21863__auto____$1.call(null,spec,gfn);
} else {
throw cljs.core.missing_protocol.call(null,"Spec.with-gen*",spec);
}
}
}
});

cljs.spec.describe_STAR_ = (function cljs$spec$describe_STAR_(spec){
if((!((spec == null))) && (!((spec.cljs$spec$Spec$describe_STAR_$arity$1 == null)))){
return spec.cljs$spec$Spec$describe_STAR_$arity$1(spec);
} else {
var x__21862__auto__ = (((spec == null))?null:spec);
var m__21863__auto__ = (cljs.spec.describe_STAR_[goog.typeOf(x__21862__auto__)]);
if(!((m__21863__auto__ == null))){
return m__21863__auto__.call(null,spec);
} else {
var m__21863__auto____$1 = (cljs.spec.describe_STAR_["_"]);
if(!((m__21863__auto____$1 == null))){
return m__21863__auto____$1.call(null,spec);
} else {
throw cljs.core.missing_protocol.call(null,"Spec.describe*",spec);
}
}
}
});

if(typeof cljs.spec.registry_ref !== 'undefined'){
} else {
cljs.spec.registry_ref = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
cljs.spec.named_QMARK_ = (function cljs$spec$named_QMARK_(x){
if(!((x == null))){
if(((x.cljs$lang$protocol_mask$partition1$ & (4096))) || ((cljs.core.PROTOCOL_SENTINEL === x.cljs$core$INamed$))){
return true;
} else {
return false;
}
} else {
return false;
}
});
cljs.spec.with_name = (function cljs$spec$with_name(spec,name){
return cljs.core.with_meta.call(null,spec,cljs.core.assoc.call(null,cljs.core.meta.call(null,spec),new cljs.core.Keyword("cljs.spec","name","cljs.spec/name",-1902005006),name));
});
cljs.spec.spec_name = (function cljs$spec$spec_name(spec){
if((spec instanceof cljs.core.Keyword)){
return spec;
} else {
if(((!((spec == null)))?((((spec.cljs$lang$protocol_mask$partition0$ & (131072))) || ((cljs.core.PROTOCOL_SENTINEL === spec.cljs$core$IMeta$)))?true:false):false)){
return new cljs.core.Keyword("cljs.spec","name","cljs.spec/name",-1902005006).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,spec));
} else {
return null;
}
}
});
/**
 * returns the spec/regex at end of alias chain starting with k, nil if not found, k if k not Named
 */
cljs.spec.reg_resolve = (function cljs$spec$reg_resolve(k){
if(cljs.core.truth_(cljs.spec.named_QMARK_.call(null,k))){
var reg = cljs.core.deref.call(null,cljs.spec.registry_ref);
var spec = k;
while(true){
if(cljs.core.truth_(cljs.spec.named_QMARK_.call(null,spec))){
var G__26430 = cljs.core.get.call(null,reg,spec);
spec = G__26430;
continue;
} else {
if(cljs.core.truth_(spec)){
return cljs.spec.with_name.call(null,spec,k);
} else {
return null;
}
}
break;
}
} else {
return k;
}
});
/**
 * returns the spec/regex at end of alias chain starting with k, throws if not found, k if k not ident
 */
cljs.spec.reg_resolve_BANG_ = (function cljs$spec$reg_resolve_BANG_(k){
if(cljs.core.ident_QMARK_.call(null,k)){
var or__21149__auto__ = cljs.spec.reg_resolve.call(null,k);
if(cljs.core.truth_(or__21149__auto__)){
return or__21149__auto__;
} else {
throw (new Error([cljs.core.str("Unable to resolve spec: "),cljs.core.str(k)].join('')));
}
} else {
return k;
}
});
/**
 * returns x if x is a spec object, else logical false
 */
cljs.spec.spec_QMARK_ = (function cljs$spec$spec_QMARK_(x){
var and__21137__auto__ = ((!((x == null)))?(((false) || ((cljs.core.PROTOCOL_SENTINEL === x.cljs$spec$Spec$)))?true:false):false);
if(and__21137__auto__){
return x;
} else {
return and__21137__auto__;
}
});
/**
 * returns x if x is a (clojure.spec) regex op, else logical false
 */
cljs.spec.regex_QMARK_ = (function cljs$spec$regex_QMARK_(x){
var and__21137__auto__ = new cljs.core.Keyword("cljs.spec","op","cljs.spec/op",939378204).cljs$core$IFn$_invoke$arity$1(x);
if(cljs.core.truth_(and__21137__auto__)){
return x;
} else {
return and__21137__auto__;
}
});
/**
 * spec-or-k must be a spec, regex or resolvable kw/sym, else returns nil.
 */
cljs.spec.maybe_spec = (function cljs$spec$maybe_spec(spec_or_k){
var s = (function (){var or__21149__auto__ = cljs.spec.spec_QMARK_.call(null,spec_or_k);
if(cljs.core.truth_(or__21149__auto__)){
return or__21149__auto__;
} else {
var or__21149__auto____$1 = cljs.spec.regex_QMARK_.call(null,spec_or_k);
if(cljs.core.truth_(or__21149__auto____$1)){
return or__21149__auto____$1;
} else {
var or__21149__auto____$2 = (function (){var and__21137__auto__ = cljs.spec.named_QMARK_.call(null,spec_or_k);
if(cljs.core.truth_(and__21137__auto__)){
return cljs.spec.reg_resolve.call(null,spec_or_k);
} else {
return and__21137__auto__;
}
})();
if(cljs.core.truth_(or__21149__auto____$2)){
return or__21149__auto____$2;
} else {
return null;
}
}
}
})();
if(cljs.core.truth_(cljs.spec.regex_QMARK_.call(null,s))){
return cljs.spec.with_name.call(null,cljs.spec.regex_spec_impl.call(null,s,null),cljs.spec.spec_name.call(null,s));
} else {
return s;
}
});
/**
 * spec-or-k must be a spec, regex or kw/sym, else returns nil. Throws if unresolvable kw/sym
 */
cljs.spec.the_spec = (function cljs$spec$the_spec(spec_or_k){
var or__21149__auto__ = cljs.spec.maybe_spec.call(null,spec_or_k);
if(cljs.core.truth_(or__21149__auto__)){
return or__21149__auto__;
} else {
if(cljs.core.truth_(cljs.spec.named_QMARK_.call(null,spec_or_k))){
throw (new Error([cljs.core.str("Unable to resolve spec: "),cljs.core.str(spec_or_k)].join('')));
} else {
return null;
}
}
});
cljs.spec.specize = (function cljs$spec$specize(s){
var or__21149__auto__ = cljs.spec.the_spec.call(null,s);
if(cljs.core.truth_(or__21149__auto__)){
return or__21149__auto__;
} else {
return cljs.spec.spec_impl.call(null,new cljs.core.Keyword("cljs.spec","unknown","cljs.spec/unknown",-1620309582),s,null,null);
}
});
/**
 * Given a spec and a value, returns :clojure.spec/invalid if value does not match spec,
 *   else the (possibly destructured) value.
 */
cljs.spec.conform = (function cljs$spec$conform(spec,x){
return cljs.spec.conform_STAR_.call(null,cljs.spec.specize.call(null,spec),x);
});
/**
 * Given a spec and a value created by or compliant with a call to
 *   'conform' with the same spec, returns a value with all conform
 * destructuring undone.
 */
cljs.spec.unform = (function cljs$spec$unform(spec,x){
return cljs.spec.unform_STAR_.call(null,cljs.spec.specize.call(null,spec),x);
});
/**
 * returns the spec as data
 */
cljs.spec.form = (function cljs$spec$form(spec){
return cljs.spec.describe_STAR_.call(null,cljs.spec.specize.call(null,spec));
});
cljs.spec.abbrev = (function cljs$spec$abbrev(form){
if(cljs.core.seq_QMARK_.call(null,form)){
return clojure.walk.postwalk.call(null,(function (form__$1){
if(cljs.core.truth_((function (){var and__21137__auto__ = (form__$1 instanceof cljs.core.Symbol);
if(and__21137__auto__){
return cljs.core.namespace.call(null,form__$1);
} else {
return and__21137__auto__;
}
})())){
return cljs.core.symbol.call(null,cljs.core.name.call(null,form__$1));
} else {
if((cljs.core.seq_QMARK_.call(null,form__$1)) && (cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"fn","fn",465265323,null),cljs.core.first.call(null,form__$1))) && (cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.second.call(null,form__$1)))){
return cljs.core.last.call(null,form__$1);
} else {
return form__$1;

}
}
}),form);
} else {
if(cljs.core.truth_((function (){var and__21137__auto__ = (form instanceof cljs.core.Symbol);
if(and__21137__auto__){
return cljs.core.namespace.call(null,form);
} else {
return and__21137__auto__;
}
})())){
return cljs.core.symbol.call(null,cljs.core.name.call(null,form));
} else {
return form;

}
}
});
/**
 * returns an abbreviated description of the spec as data
 */
cljs.spec.describe = (function cljs$spec$describe(spec){
return cljs.spec.abbrev.call(null,cljs.spec.form.call(null,spec));
});
/**
 * Takes a spec and a no-arg, generator-returning fn and returns a version of that spec that uses that generator
 */
cljs.spec.with_gen = (function cljs$spec$with_gen(spec,gen_fn){
var spec__$1 = cljs.spec.reg_resolve.call(null,spec);
if(cljs.core.truth_(cljs.spec.regex_QMARK_.call(null,spec__$1))){
return cljs.core.assoc.call(null,spec__$1,new cljs.core.Keyword("cljs.spec","gfn","cljs.spec/gfn",-432034727),gen_fn);
} else {
return cljs.spec.with_gen_STAR_.call(null,cljs.spec.specize.call(null,spec__$1),gen_fn);
}
});
cljs.spec.explain_data_STAR_ = (function cljs$spec$explain_data_STAR_(spec,path,via,in$,x){
var temp__6747__auto__ = cljs.spec.explain_STAR_.call(null,cljs.spec.specize.call(null,spec),path,via,in$,x);
if(cljs.core.truth_(temp__6747__auto__)){
var probs = temp__6747__auto__;
if(cljs.core.empty_QMARK_.call(null,probs)){
return null;
} else {
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("cljs.spec","problems","cljs.spec/problems",608491678),probs], null);
}
} else {
return null;
}
});
/**
 * Given a spec and a value x which ought to conform, returns nil if x
 *   conforms, else a map with at least the key ::problems whose value is
 *   a collection of problem-maps, where problem-map has at least :path :pred and :val
 *   keys describing the predicate and the value that failed at that
 *   path.
 */
cljs.spec.explain_data = (function cljs$spec$explain_data(spec,x){
return cljs.spec.explain_data_STAR_.call(null,spec,cljs.core.PersistentVector.EMPTY,(function (){var temp__6745__auto__ = cljs.spec.spec_name.call(null,spec);
if(cljs.core.truth_(temp__6745__auto__)){
var name = temp__6745__auto__;
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [name], null);
} else {
return cljs.core.PersistentVector.EMPTY;
}
})(),cljs.core.PersistentVector.EMPTY,x);
});
/**
 * Default printer for explain-data. nil indicates a successful validation.
 */
cljs.spec.explain_printer = (function cljs$spec$explain_printer(ed){
if(cljs.core.truth_(ed)){
return cljs.core.print.call(null,(function (){var sb__22236__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR_26475_26515 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR_26476_26516 = cljs.core._STAR_print_fn_STAR_;
cljs.core._STAR_print_newline_STAR_ = true;

cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_newline_STAR_26475_26515,_STAR_print_fn_STAR_26476_26516,sb__22236__auto__){
return (function (x__22237__auto__){
return sb__22236__auto__.append(x__22237__auto__);
});})(_STAR_print_newline_STAR_26475_26515,_STAR_print_fn_STAR_26476_26516,sb__22236__auto__))
;

try{var seq__26477_26517 = cljs.core.seq.call(null,new cljs.core.Keyword("cljs.spec","problems","cljs.spec/problems",608491678).cljs$core$IFn$_invoke$arity$1(ed));
var chunk__26478_26518 = null;
var count__26479_26519 = (0);
var i__26480_26520 = (0);
while(true){
if((i__26480_26520 < count__26479_26519)){
var map__26481_26521 = cljs.core._nth.call(null,chunk__26478_26518,i__26480_26520);
var map__26481_26522__$1 = ((((!((map__26481_26521 == null)))?((((map__26481_26521.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26481_26521.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26481_26521):map__26481_26521);
var prob_26523 = map__26481_26522__$1;
var path_26524 = cljs.core.get.call(null,map__26481_26522__$1,new cljs.core.Keyword(null,"path","path",-188191168));
var pred_26525 = cljs.core.get.call(null,map__26481_26522__$1,new cljs.core.Keyword(null,"pred","pred",1927423397));
var val_26526 = cljs.core.get.call(null,map__26481_26522__$1,new cljs.core.Keyword(null,"val","val",128701612));
var reason_26527 = cljs.core.get.call(null,map__26481_26522__$1,new cljs.core.Keyword(null,"reason","reason",-2070751759));
var via_26528 = cljs.core.get.call(null,map__26481_26522__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var in_26529 = cljs.core.get.call(null,map__26481_26522__$1,new cljs.core.Keyword(null,"in","in",-1531184865));
if(cljs.core.empty_QMARK_.call(null,in_26529)){
} else {
cljs.core.print.call(null,"In:",cljs.core.pr_str.call(null,in_26529),"");
}

cljs.core.print.call(null,"val: ");

cljs.core.pr.call(null,val_26526);

cljs.core.print.call(null," fails");

if(cljs.core.empty_QMARK_.call(null,via_26528)){
} else {
cljs.core.print.call(null," spec:",cljs.core.pr_str.call(null,cljs.core.last.call(null,via_26528)));
}

if(cljs.core.empty_QMARK_.call(null,path_26524)){
} else {
cljs.core.print.call(null," at:",cljs.core.pr_str.call(null,path_26524));
}

cljs.core.print.call(null," predicate: ");

cljs.core.pr.call(null,cljs.spec.abbrev.call(null,pred_26525));

if(cljs.core.truth_(reason_26527)){
cljs.core.print.call(null,", ",reason_26527);
} else {
}

var seq__26483_26530 = cljs.core.seq.call(null,prob_26523);
var chunk__26484_26531 = null;
var count__26485_26532 = (0);
var i__26486_26533 = (0);
while(true){
if((i__26486_26533 < count__26485_26532)){
var vec__26487_26534 = cljs.core._nth.call(null,chunk__26484_26531,i__26486_26533);
var k_26535 = cljs.core.nth.call(null,vec__26487_26534,(0),null);
var v_26536 = cljs.core.nth.call(null,vec__26487_26534,(1),null);
if(cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"path","path",-188191168),null,new cljs.core.Keyword(null,"pred","pred",1927423397),null,new cljs.core.Keyword(null,"via","via",-1904457336),null,new cljs.core.Keyword(null,"val","val",128701612),null,new cljs.core.Keyword(null,"reason","reason",-2070751759),null,new cljs.core.Keyword(null,"in","in",-1531184865),null], null), null).call(null,k_26535))){
} else {
cljs.core.print.call(null,"\n\t",cljs.core.pr_str.call(null,k_26535)," ");

cljs.core.pr.call(null,v_26536);
}

var G__26537 = seq__26483_26530;
var G__26538 = chunk__26484_26531;
var G__26539 = count__26485_26532;
var G__26540 = (i__26486_26533 + (1));
seq__26483_26530 = G__26537;
chunk__26484_26531 = G__26538;
count__26485_26532 = G__26539;
i__26486_26533 = G__26540;
continue;
} else {
var temp__6747__auto___26541 = cljs.core.seq.call(null,seq__26483_26530);
if(temp__6747__auto___26541){
var seq__26483_26542__$1 = temp__6747__auto___26541;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26483_26542__$1)){
var c__22055__auto___26543 = cljs.core.chunk_first.call(null,seq__26483_26542__$1);
var G__26544 = cljs.core.chunk_rest.call(null,seq__26483_26542__$1);
var G__26545 = c__22055__auto___26543;
var G__26546 = cljs.core.count.call(null,c__22055__auto___26543);
var G__26547 = (0);
seq__26483_26530 = G__26544;
chunk__26484_26531 = G__26545;
count__26485_26532 = G__26546;
i__26486_26533 = G__26547;
continue;
} else {
var vec__26490_26548 = cljs.core.first.call(null,seq__26483_26542__$1);
var k_26549 = cljs.core.nth.call(null,vec__26490_26548,(0),null);
var v_26550 = cljs.core.nth.call(null,vec__26490_26548,(1),null);
if(cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"path","path",-188191168),null,new cljs.core.Keyword(null,"pred","pred",1927423397),null,new cljs.core.Keyword(null,"via","via",-1904457336),null,new cljs.core.Keyword(null,"val","val",128701612),null,new cljs.core.Keyword(null,"reason","reason",-2070751759),null,new cljs.core.Keyword(null,"in","in",-1531184865),null], null), null).call(null,k_26549))){
} else {
cljs.core.print.call(null,"\n\t",cljs.core.pr_str.call(null,k_26549)," ");

cljs.core.pr.call(null,v_26550);
}

var G__26551 = cljs.core.next.call(null,seq__26483_26542__$1);
var G__26552 = null;
var G__26553 = (0);
var G__26554 = (0);
seq__26483_26530 = G__26551;
chunk__26484_26531 = G__26552;
count__26485_26532 = G__26553;
i__26486_26533 = G__26554;
continue;
}
} else {
}
}
break;
}

cljs.core.newline.call(null);

var G__26555 = seq__26477_26517;
var G__26556 = chunk__26478_26518;
var G__26557 = count__26479_26519;
var G__26558 = (i__26480_26520 + (1));
seq__26477_26517 = G__26555;
chunk__26478_26518 = G__26556;
count__26479_26519 = G__26557;
i__26480_26520 = G__26558;
continue;
} else {
var temp__6747__auto___26559 = cljs.core.seq.call(null,seq__26477_26517);
if(temp__6747__auto___26559){
var seq__26477_26560__$1 = temp__6747__auto___26559;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26477_26560__$1)){
var c__22055__auto___26561 = cljs.core.chunk_first.call(null,seq__26477_26560__$1);
var G__26562 = cljs.core.chunk_rest.call(null,seq__26477_26560__$1);
var G__26563 = c__22055__auto___26561;
var G__26564 = cljs.core.count.call(null,c__22055__auto___26561);
var G__26565 = (0);
seq__26477_26517 = G__26562;
chunk__26478_26518 = G__26563;
count__26479_26519 = G__26564;
i__26480_26520 = G__26565;
continue;
} else {
var map__26493_26566 = cljs.core.first.call(null,seq__26477_26560__$1);
var map__26493_26567__$1 = ((((!((map__26493_26566 == null)))?((((map__26493_26566.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26493_26566.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26493_26566):map__26493_26566);
var prob_26568 = map__26493_26567__$1;
var path_26569 = cljs.core.get.call(null,map__26493_26567__$1,new cljs.core.Keyword(null,"path","path",-188191168));
var pred_26570 = cljs.core.get.call(null,map__26493_26567__$1,new cljs.core.Keyword(null,"pred","pred",1927423397));
var val_26571 = cljs.core.get.call(null,map__26493_26567__$1,new cljs.core.Keyword(null,"val","val",128701612));
var reason_26572 = cljs.core.get.call(null,map__26493_26567__$1,new cljs.core.Keyword(null,"reason","reason",-2070751759));
var via_26573 = cljs.core.get.call(null,map__26493_26567__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var in_26574 = cljs.core.get.call(null,map__26493_26567__$1,new cljs.core.Keyword(null,"in","in",-1531184865));
if(cljs.core.empty_QMARK_.call(null,in_26574)){
} else {
cljs.core.print.call(null,"In:",cljs.core.pr_str.call(null,in_26574),"");
}

cljs.core.print.call(null,"val: ");

cljs.core.pr.call(null,val_26571);

cljs.core.print.call(null," fails");

if(cljs.core.empty_QMARK_.call(null,via_26573)){
} else {
cljs.core.print.call(null," spec:",cljs.core.pr_str.call(null,cljs.core.last.call(null,via_26573)));
}

if(cljs.core.empty_QMARK_.call(null,path_26569)){
} else {
cljs.core.print.call(null," at:",cljs.core.pr_str.call(null,path_26569));
}

cljs.core.print.call(null," predicate: ");

cljs.core.pr.call(null,cljs.spec.abbrev.call(null,pred_26570));

if(cljs.core.truth_(reason_26572)){
cljs.core.print.call(null,", ",reason_26572);
} else {
}

var seq__26495_26575 = cljs.core.seq.call(null,prob_26568);
var chunk__26496_26576 = null;
var count__26497_26577 = (0);
var i__26498_26578 = (0);
while(true){
if((i__26498_26578 < count__26497_26577)){
var vec__26499_26579 = cljs.core._nth.call(null,chunk__26496_26576,i__26498_26578);
var k_26580 = cljs.core.nth.call(null,vec__26499_26579,(0),null);
var v_26581 = cljs.core.nth.call(null,vec__26499_26579,(1),null);
if(cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"path","path",-188191168),null,new cljs.core.Keyword(null,"pred","pred",1927423397),null,new cljs.core.Keyword(null,"via","via",-1904457336),null,new cljs.core.Keyword(null,"val","val",128701612),null,new cljs.core.Keyword(null,"reason","reason",-2070751759),null,new cljs.core.Keyword(null,"in","in",-1531184865),null], null), null).call(null,k_26580))){
} else {
cljs.core.print.call(null,"\n\t",cljs.core.pr_str.call(null,k_26580)," ");

cljs.core.pr.call(null,v_26581);
}

var G__26582 = seq__26495_26575;
var G__26583 = chunk__26496_26576;
var G__26584 = count__26497_26577;
var G__26585 = (i__26498_26578 + (1));
seq__26495_26575 = G__26582;
chunk__26496_26576 = G__26583;
count__26497_26577 = G__26584;
i__26498_26578 = G__26585;
continue;
} else {
var temp__6747__auto___26586__$1 = cljs.core.seq.call(null,seq__26495_26575);
if(temp__6747__auto___26586__$1){
var seq__26495_26587__$1 = temp__6747__auto___26586__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26495_26587__$1)){
var c__22055__auto___26588 = cljs.core.chunk_first.call(null,seq__26495_26587__$1);
var G__26589 = cljs.core.chunk_rest.call(null,seq__26495_26587__$1);
var G__26590 = c__22055__auto___26588;
var G__26591 = cljs.core.count.call(null,c__22055__auto___26588);
var G__26592 = (0);
seq__26495_26575 = G__26589;
chunk__26496_26576 = G__26590;
count__26497_26577 = G__26591;
i__26498_26578 = G__26592;
continue;
} else {
var vec__26502_26593 = cljs.core.first.call(null,seq__26495_26587__$1);
var k_26594 = cljs.core.nth.call(null,vec__26502_26593,(0),null);
var v_26595 = cljs.core.nth.call(null,vec__26502_26593,(1),null);
if(cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"path","path",-188191168),null,new cljs.core.Keyword(null,"pred","pred",1927423397),null,new cljs.core.Keyword(null,"via","via",-1904457336),null,new cljs.core.Keyword(null,"val","val",128701612),null,new cljs.core.Keyword(null,"reason","reason",-2070751759),null,new cljs.core.Keyword(null,"in","in",-1531184865),null], null), null).call(null,k_26594))){
} else {
cljs.core.print.call(null,"\n\t",cljs.core.pr_str.call(null,k_26594)," ");

cljs.core.pr.call(null,v_26595);
}

var G__26596 = cljs.core.next.call(null,seq__26495_26587__$1);
var G__26597 = null;
var G__26598 = (0);
var G__26599 = (0);
seq__26495_26575 = G__26596;
chunk__26496_26576 = G__26597;
count__26497_26577 = G__26598;
i__26498_26578 = G__26599;
continue;
}
} else {
}
}
break;
}

cljs.core.newline.call(null);

var G__26600 = cljs.core.next.call(null,seq__26477_26560__$1);
var G__26601 = null;
var G__26602 = (0);
var G__26603 = (0);
seq__26477_26517 = G__26600;
chunk__26478_26518 = G__26601;
count__26479_26519 = G__26602;
i__26480_26520 = G__26603;
continue;
}
} else {
}
}
break;
}

var seq__26505_26604 = cljs.core.seq.call(null,ed);
var chunk__26506_26605 = null;
var count__26507_26606 = (0);
var i__26508_26607 = (0);
while(true){
if((i__26508_26607 < count__26507_26606)){
var vec__26509_26608 = cljs.core._nth.call(null,chunk__26506_26605,i__26508_26607);
var k_26609 = cljs.core.nth.call(null,vec__26509_26608,(0),null);
var v_26610 = cljs.core.nth.call(null,vec__26509_26608,(1),null);
if(cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("cljs.spec","problems","cljs.spec/problems",608491678),null], null), null).call(null,k_26609))){
} else {
cljs.core.print.call(null,cljs.core.pr_str.call(null,k_26609)," ");

cljs.core.pr.call(null,v_26610);

cljs.core.newline.call(null);
}

var G__26611 = seq__26505_26604;
var G__26612 = chunk__26506_26605;
var G__26613 = count__26507_26606;
var G__26614 = (i__26508_26607 + (1));
seq__26505_26604 = G__26611;
chunk__26506_26605 = G__26612;
count__26507_26606 = G__26613;
i__26508_26607 = G__26614;
continue;
} else {
var temp__6747__auto___26615 = cljs.core.seq.call(null,seq__26505_26604);
if(temp__6747__auto___26615){
var seq__26505_26616__$1 = temp__6747__auto___26615;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26505_26616__$1)){
var c__22055__auto___26617 = cljs.core.chunk_first.call(null,seq__26505_26616__$1);
var G__26618 = cljs.core.chunk_rest.call(null,seq__26505_26616__$1);
var G__26619 = c__22055__auto___26617;
var G__26620 = cljs.core.count.call(null,c__22055__auto___26617);
var G__26621 = (0);
seq__26505_26604 = G__26618;
chunk__26506_26605 = G__26619;
count__26507_26606 = G__26620;
i__26508_26607 = G__26621;
continue;
} else {
var vec__26512_26622 = cljs.core.first.call(null,seq__26505_26616__$1);
var k_26623 = cljs.core.nth.call(null,vec__26512_26622,(0),null);
var v_26624 = cljs.core.nth.call(null,vec__26512_26622,(1),null);
if(cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("cljs.spec","problems","cljs.spec/problems",608491678),null], null), null).call(null,k_26623))){
} else {
cljs.core.print.call(null,cljs.core.pr_str.call(null,k_26623)," ");

cljs.core.pr.call(null,v_26624);

cljs.core.newline.call(null);
}

var G__26625 = cljs.core.next.call(null,seq__26505_26616__$1);
var G__26626 = null;
var G__26627 = (0);
var G__26628 = (0);
seq__26505_26604 = G__26625;
chunk__26506_26605 = G__26626;
count__26507_26606 = G__26627;
i__26508_26607 = G__26628;
continue;
}
} else {
}
}
break;
}
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_26476_26516;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_26475_26515;
}
return [cljs.core.str(sb__22236__auto__)].join('');
})());
} else {
return cljs.core.println.call(null,"Success!");
}
});
cljs.spec._STAR_explain_out_STAR_ = cljs.spec.explain_printer;
/**
 * Prints explanation data (per 'explain-data') to *out* using the printer in *explain-out*,
 *  by default explain-printer.
 */
cljs.spec.explain_out = (function cljs$spec$explain_out(ed){
return cljs.spec._STAR_explain_out_STAR_.call(null,ed);
});
/**
 * Given a spec and a value that fails to conform, prints an explanation to *out*.
 */
cljs.spec.explain = (function cljs$spec$explain(spec,x){
return cljs.spec.explain_out.call(null,cljs.spec.explain_data.call(null,spec,x));
});
/**
 * Given a spec and a value that fails to conform, returns an explanation as a string.
 */
cljs.spec.explain_str = (function cljs$spec$explain_str(spec,x){
var sb__22236__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR_26631_26633 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR_26632_26634 = cljs.core._STAR_print_fn_STAR_;
cljs.core._STAR_print_newline_STAR_ = true;

cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_newline_STAR_26631_26633,_STAR_print_fn_STAR_26632_26634,sb__22236__auto__){
return (function (x__22237__auto__){
return sb__22236__auto__.append(x__22237__auto__);
});})(_STAR_print_newline_STAR_26631_26633,_STAR_print_fn_STAR_26632_26634,sb__22236__auto__))
;

try{cljs.spec.explain.call(null,spec,x);
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_26632_26634;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_26631_26633;
}
return [cljs.core.str(sb__22236__auto__)].join('');
});
cljs.spec.gensub = (function cljs$spec$gensub(spec,overrides,path,rmap,form){
var spec__$1 = cljs.spec.specize.call(null,spec);
var temp__6745__auto__ = (function (){var or__21149__auto__ = (function (){var temp__6747__auto__ = (function (){var or__21149__auto__ = cljs.core.get.call(null,overrides,(function (){var or__21149__auto__ = cljs.spec.spec_name.call(null,spec__$1);
if(cljs.core.truth_(or__21149__auto__)){
return or__21149__auto__;
} else {
return spec__$1;
}
})());
if(cljs.core.truth_(or__21149__auto__)){
return or__21149__auto__;
} else {
return cljs.core.get.call(null,overrides,path);
}
})();
if(cljs.core.truth_(temp__6747__auto__)){
var gfn = temp__6747__auto__;
return gfn.call(null);
} else {
return null;
}
})();
if(cljs.core.truth_(or__21149__auto__)){
return or__21149__auto__;
} else {
return cljs.spec.gen_STAR_.call(null,spec__$1,overrides,path,rmap);
}
})();
if(cljs.core.truth_(temp__6745__auto__)){
var g = temp__6745__auto__;
return cljs.spec.impl.gen.such_that.call(null,((function (g,temp__6745__auto__,spec__$1){
return (function (p1__26635_SHARP_){
return cljs.spec.valid_QMARK_.call(null,spec__$1,p1__26635_SHARP_);
});})(g,temp__6745__auto__,spec__$1))
,g,(100));
} else {
throw (new Error([cljs.core.str("Unable to construct gen at: "),cljs.core.str(path),cljs.core.str(" for: "),cljs.core.str(cljs.spec.abbrev.call(null,form))].join('')));
}
});
/**
 * Given a spec, returns the generator for it, or throws if none can
 *   be constructed. Optionally an overrides map can be provided which
 *   should map spec names or paths (vectors of keywords) to no-arg
 *   generator-creating fns. These will be used instead of the generators at those
 *   names/paths. Note that parent generator (in the spec or overrides
 *   map) will supersede those of any subtrees. A generator for a regex
 *   op must always return a sequential collection (i.e. a generator for
 *   s/? should return either an empty sequence/vector or a
 *   sequence/vector with one item in it)
 */
cljs.spec.gen = (function cljs$spec$gen(var_args){
var args26636 = [];
var len__22365__auto___26639 = arguments.length;
var i__22366__auto___26640 = (0);
while(true){
if((i__22366__auto___26640 < len__22365__auto___26639)){
args26636.push((arguments[i__22366__auto___26640]));

var G__26641 = (i__22366__auto___26640 + (1));
i__22366__auto___26640 = G__26641;
continue;
} else {
}
break;
}

var G__26638 = args26636.length;
switch (G__26638) {
case 1:
return cljs.spec.gen.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.spec.gen.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26636.length)].join('')));

}
});

cljs.spec.gen.cljs$core$IFn$_invoke$arity$1 = (function (spec){
return cljs.spec.gen.call(null,spec,null);
});

cljs.spec.gen.cljs$core$IFn$_invoke$arity$2 = (function (spec,overrides){
return cljs.spec.gensub.call(null,spec,overrides,cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("cljs.spec","recursion-limit","cljs.spec/recursion-limit",-630131086),cljs.spec._STAR_recursion_limit_STAR_], null),spec);
});

cljs.spec.gen.cljs$lang$maxFixedArity = 2;

/**
 * Do not call this directly, use 'def'
 */
cljs.spec.def_impl = (function cljs$spec$def_impl(k,form,spec){
if(cljs.core.truth_((function (){var and__21137__auto__ = cljs.spec.named_QMARK_.call(null,k);
if(cljs.core.truth_(and__21137__auto__)){
return cljs.core.namespace.call(null,k);
} else {
return and__21137__auto__;
}
})())){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("k must be namespaced keyword or resolveable symbol"),cljs.core.str("\n"),cljs.core.str("(c/and (named? k) (namespace k))")].join('')));
}

var spec__$1 = (cljs.core.truth_((function (){var or__21149__auto__ = cljs.spec.spec_QMARK_.call(null,spec);
if(cljs.core.truth_(or__21149__auto__)){
return or__21149__auto__;
} else {
var or__21149__auto____$1 = cljs.spec.regex_QMARK_.call(null,spec);
if(cljs.core.truth_(or__21149__auto____$1)){
return or__21149__auto____$1;
} else {
return cljs.core.get.call(null,cljs.core.deref.call(null,cljs.spec.registry_ref),spec);
}
}
})())?spec:cljs.spec.spec_impl.call(null,form,spec,null,null));
cljs.core.swap_BANG_.call(null,cljs.spec.registry_ref,cljs.core.assoc,k,spec__$1);

return k;
});
/**
 * returns the registry map, prefer 'get-spec' to lookup a spec by name
 */
cljs.spec.registry = (function cljs$spec$registry(){
return cljs.core.deref.call(null,cljs.spec.registry_ref);
});
/**
 * Returns a symbol from a symbol or var
 */
cljs.spec.__GT_sym = (function cljs$spec$__GT_sym(x){
if(cljs.core.var_QMARK_.call(null,x)){
return x.sym;
} else {
return x;
}
});
/**
 * Returns spec registered for keyword/symbol/var k, or nil.
 */
cljs.spec.get_spec = (function cljs$spec$get_spec(k){
return cljs.core.get.call(null,cljs.spec.registry.call(null),(((k instanceof cljs.core.Keyword))?k:cljs.spec.__GT_sym.call(null,k)));
});
cljs.spec.macroexpand_check = (function cljs$spec$macroexpand_check(v,args){
var specs = cljs.spec.get_spec.call(null,v);
var temp__6747__auto__ = new cljs.core.Keyword(null,"args","args",1315556576).cljs$core$IFn$_invoke$arity$1(specs);
if(cljs.core.truth_(temp__6747__auto__)){
var arg_spec = temp__6747__auto__;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec","invalid","cljs.spec/invalid",551677537),cljs.spec.conform.call(null,arg_spec,args))){
var ed = cljs.core.assoc.call(null,cljs.spec.explain_data_STAR_.call(null,arg_spec,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576)], null),(function (){var temp__6745__auto__ = cljs.spec.spec_name.call(null,arg_spec);
if(cljs.core.truth_(temp__6745__auto__)){
var name = temp__6745__auto__;
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [name], null);
} else {
return cljs.core.PersistentVector.EMPTY;
}
})(),cljs.core.PersistentVector.EMPTY,args),new cljs.core.Keyword("cljs.spec","args","cljs.spec/args",-367019609),args);
throw (new Error([cljs.core.str("Call to "),cljs.core.str(cljs.spec.__GT_sym.call(null,v)),cljs.core.str(" did not conform to spec:\n"),cljs.core.str((function (){var sb__22236__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR_26645_26647 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR_26646_26648 = cljs.core._STAR_print_fn_STAR_;
cljs.core._STAR_print_newline_STAR_ = true;

cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_newline_STAR_26645_26647,_STAR_print_fn_STAR_26646_26648,sb__22236__auto__,ed,arg_spec,temp__6747__auto__,specs){
return (function (x__22237__auto__){
return sb__22236__auto__.append(x__22237__auto__);
});})(_STAR_print_newline_STAR_26645_26647,_STAR_print_fn_STAR_26646_26648,sb__22236__auto__,ed,arg_spec,temp__6747__auto__,specs))
;

try{cljs.spec.explain_out.call(null,ed);
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_26646_26648;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_26645_26647;
}
return [cljs.core.str(sb__22236__auto__)].join('');
})())].join('')));
} else {
return null;
}
} else {
return null;
}
});
cljs.spec.recur_limit_QMARK_ = (function cljs$spec$recur_limit_QMARK_(rmap,id,path,k){
return ((cljs.core.get.call(null,rmap,id) > new cljs.core.Keyword("cljs.spec","recursion-limit","cljs.spec/recursion-limit",-630131086).cljs$core$IFn$_invoke$arity$1(rmap))) && (cljs.core.contains_QMARK_.call(null,cljs.core.set.call(null,path),k));
});
cljs.spec.inck = (function cljs$spec$inck(m,k){
return cljs.core.assoc.call(null,m,k,((function (){var or__21149__auto__ = cljs.core.get.call(null,m,k);
if(cljs.core.truth_(or__21149__auto__)){
return or__21149__auto__;
} else {
return (0);
}
})() + (1)));
});
cljs.spec.dt = (function cljs$spec$dt(var_args){
var args26649 = [];
var len__22365__auto___26652 = arguments.length;
var i__22366__auto___26653 = (0);
while(true){
if((i__22366__auto___26653 < len__22365__auto___26652)){
args26649.push((arguments[i__22366__auto___26653]));

var G__26654 = (i__22366__auto___26653 + (1));
i__22366__auto___26653 = G__26654;
continue;
} else {
}
break;
}

var G__26651 = args26649.length;
switch (G__26651) {
case 3:
return cljs.spec.dt.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.spec.dt.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26649.length)].join('')));

}
});

cljs.spec.dt.cljs$core$IFn$_invoke$arity$3 = (function (pred,x,form){
return cljs.spec.dt.call(null,pred,x,form,null);
});

cljs.spec.dt.cljs$core$IFn$_invoke$arity$4 = (function (pred,x,form,cpred_QMARK_){
if(cljs.core.truth_(pred)){
var temp__6745__auto__ = cljs.spec.the_spec.call(null,pred);
if(cljs.core.truth_(temp__6745__auto__)){
var spec = temp__6745__auto__;
return cljs.spec.conform.call(null,spec,x);
} else {
if(cljs.core.ifn_QMARK_.call(null,pred)){
if(cljs.core.truth_(cpred_QMARK_)){
return pred.call(null,x);
} else {
if(cljs.core.truth_(pred.call(null,x))){
return x;
} else {
return new cljs.core.Keyword("cljs.spec","invalid","cljs.spec/invalid",551677537);
}
}
} else {
throw (new Error([cljs.core.str(cljs.core.pr_str.call(null,form)),cljs.core.str(" is not a fn, expected predicate fn")].join('')));
}
}
} else {
return x;
}
});

cljs.spec.dt.cljs$lang$maxFixedArity = 4;

/**
 * Helper function that returns true when x is valid for spec.
 */
cljs.spec.valid_QMARK_ = (function cljs$spec$valid_QMARK_(var_args){
var args26656 = [];
var len__22365__auto___26659 = arguments.length;
var i__22366__auto___26660 = (0);
while(true){
if((i__22366__auto___26660 < len__22365__auto___26659)){
args26656.push((arguments[i__22366__auto___26660]));

var G__26661 = (i__22366__auto___26660 + (1));
i__22366__auto___26660 = G__26661;
continue;
} else {
}
break;
}

var G__26658 = args26656.length;
switch (G__26658) {
case 2:
return cljs.spec.valid_QMARK_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.spec.valid_QMARK_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26656.length)].join('')));

}
});

cljs.spec.valid_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (spec,x){
return cljs.core.not_EQ_.call(null,new cljs.core.Keyword("cljs.spec","invalid","cljs.spec/invalid",551677537),cljs.spec.dt.call(null,spec,x,new cljs.core.Keyword("cljs.spec","unknown","cljs.spec/unknown",-1620309582)));
});

cljs.spec.valid_QMARK_.cljs$core$IFn$_invoke$arity$3 = (function (spec,x,form){
return cljs.core.not_EQ_.call(null,new cljs.core.Keyword("cljs.spec","invalid","cljs.spec/invalid",551677537),cljs.spec.dt.call(null,spec,x,form));
});

cljs.spec.valid_QMARK_.cljs$lang$maxFixedArity = 3;

cljs.spec.explain_1 = (function cljs$spec$explain_1(form,pred,path,via,in$,v){
var pred__$1 = cljs.spec.maybe_spec.call(null,pred);
if(cljs.core.truth_(cljs.spec.spec_QMARK_.call(null,pred__$1))){
return cljs.spec.explain_STAR_.call(null,pred__$1,path,(function (){var temp__6745__auto__ = cljs.spec.spec_name.call(null,pred__$1);
if(cljs.core.truth_(temp__6745__auto__)){
var name = temp__6745__auto__;
return cljs.core.conj.call(null,via,name);
} else {
return via;
}
})(),in$,v);
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"path","path",-188191168),path,new cljs.core.Keyword(null,"pred","pred",1927423397),cljs.spec.abbrev.call(null,form),new cljs.core.Keyword(null,"val","val",128701612),v,new cljs.core.Keyword(null,"via","via",-1904457336),via,new cljs.core.Keyword(null,"in","in",-1531184865),in$], null)], null);
}
});
/**
 * Do not call this directly, use 'spec' with a map argument
 */
cljs.spec.map_spec_impl = (function cljs$spec$map_spec_impl(p__26666){
var map__26697 = p__26666;
var map__26697__$1 = ((((!((map__26697 == null)))?((((map__26697.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26697.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26697):map__26697);
var argm = map__26697__$1;
var opt = cljs.core.get.call(null,map__26697__$1,new cljs.core.Keyword(null,"opt","opt",-794706369));
var req_un = cljs.core.get.call(null,map__26697__$1,new cljs.core.Keyword(null,"req-un","req-un",1074571008));
var opt_un = cljs.core.get.call(null,map__26697__$1,new cljs.core.Keyword(null,"opt-un","opt-un",883442496));
var gfn = cljs.core.get.call(null,map__26697__$1,new cljs.core.Keyword(null,"gfn","gfn",791517474));
var pred_exprs = cljs.core.get.call(null,map__26697__$1,new cljs.core.Keyword(null,"pred-exprs","pred-exprs",1792271395));
var opt_keys = cljs.core.get.call(null,map__26697__$1,new cljs.core.Keyword(null,"opt-keys","opt-keys",1262688261));
var req_specs = cljs.core.get.call(null,map__26697__$1,new cljs.core.Keyword(null,"req-specs","req-specs",553962313));
var req = cljs.core.get.call(null,map__26697__$1,new cljs.core.Keyword(null,"req","req",-326448303));
var req_keys = cljs.core.get.call(null,map__26697__$1,new cljs.core.Keyword(null,"req-keys","req-keys",514319221));
var opt_specs = cljs.core.get.call(null,map__26697__$1,new cljs.core.Keyword(null,"opt-specs","opt-specs",-384905450));
var pred_forms = cljs.core.get.call(null,map__26697__$1,new cljs.core.Keyword(null,"pred-forms","pred-forms",172611832));
var keys_pred = cljs.core.apply.call(null,cljs.core.every_pred,pred_exprs);
var k__GT_s = cljs.core.zipmap.call(null,cljs.core.concat.call(null,req_keys,opt_keys),cljs.core.concat.call(null,req_specs,opt_specs));
var keys__GT_specs = ((function (keys_pred,k__GT_s,map__26697,map__26697__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms){
return (function (p1__26663_SHARP_){
var or__21149__auto__ = k__GT_s.call(null,p1__26663_SHARP_);
if(cljs.core.truth_(or__21149__auto__)){
return or__21149__auto__;
} else {
return p1__26663_SHARP_;
}
});})(keys_pred,k__GT_s,map__26697,map__26697__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms))
;
var id = cljs.core.random_uuid.call(null);
if(typeof cljs.spec.t_cljs$spec26699 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.spec.Spec}
 * @implements {cljs.core.IWithMeta}
*/
cljs.spec.t_cljs$spec26699 = (function (opt,req_un,opt_un,p__26666,gfn,pred_exprs,keys_pred,argm,opt_keys,req_specs,map__26697,keys__GT_specs,req,id,req_keys,opt_specs,k__GT_s,pred_forms,meta26700){
this.opt = opt;
this.req_un = req_un;
this.opt_un = opt_un;
this.p__26666 = p__26666;
this.gfn = gfn;
this.pred_exprs = pred_exprs;
this.keys_pred = keys_pred;
this.argm = argm;
this.opt_keys = opt_keys;
this.req_specs = req_specs;
this.map__26697 = map__26697;
this.keys__GT_specs = keys__GT_specs;
this.req = req;
this.id = id;
this.req_keys = req_keys;
this.opt_specs = opt_specs;
this.k__GT_s = k__GT_s;
this.pred_forms = pred_forms;
this.meta26700 = meta26700;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.spec.t_cljs$spec26699.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (keys_pred,k__GT_s,keys__GT_specs,id,map__26697,map__26697__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms){
return (function (_26701,meta26700__$1){
var self__ = this;
var _26701__$1 = this;
return (new cljs.spec.t_cljs$spec26699(self__.opt,self__.req_un,self__.opt_un,self__.p__26666,self__.gfn,self__.pred_exprs,self__.keys_pred,self__.argm,self__.opt_keys,self__.req_specs,self__.map__26697,self__.keys__GT_specs,self__.req,self__.id,self__.req_keys,self__.opt_specs,self__.k__GT_s,self__.pred_forms,meta26700__$1));
});})(keys_pred,k__GT_s,keys__GT_specs,id,map__26697,map__26697__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms))
;

cljs.spec.t_cljs$spec26699.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (keys_pred,k__GT_s,keys__GT_specs,id,map__26697,map__26697__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms){
return (function (_26701){
var self__ = this;
var _26701__$1 = this;
return self__.meta26700;
});})(keys_pred,k__GT_s,keys__GT_specs,id,map__26697,map__26697__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms))
;

cljs.spec.t_cljs$spec26699.prototype.cljs$spec$Spec$ = cljs.core.PROTOCOL_SENTINEL;

cljs.spec.t_cljs$spec26699.prototype.cljs$spec$Spec$conform_STAR_$arity$2 = ((function (keys_pred,k__GT_s,keys__GT_specs,id,map__26697,map__26697__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms){
return (function (_,m){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.keys_pred.call(null,m))){
var reg = cljs.spec.registry.call(null);
var ret = m;
var G__26705 = cljs.core.keys.call(null,m);
var vec__26706 = G__26705;
var seq__26707 = cljs.core.seq.call(null,vec__26706);
var first__26708 = cljs.core.first.call(null,seq__26707);
var seq__26707__$1 = cljs.core.next.call(null,seq__26707);
var k = first__26708;
var ks = seq__26707__$1;
var keys = vec__26706;
var ret__$1 = ret;
var G__26705__$1 = G__26705;
while(true){
var ret__$2 = ret__$1;
var vec__26709 = G__26705__$1;
var seq__26710 = cljs.core.seq.call(null,vec__26709);
var first__26711 = cljs.core.first.call(null,seq__26710);
var seq__26710__$1 = cljs.core.next.call(null,seq__26710);
var k__$1 = first__26711;
var ks__$1 = seq__26710__$1;
var keys__$1 = vec__26709;
if(cljs.core.truth_(keys__$1)){
if(cljs.core.contains_QMARK_.call(null,reg,self__.keys__GT_specs.call(null,k__$1))){
var v = cljs.core.get.call(null,m,k__$1);
var cv = cljs.spec.conform.call(null,self__.keys__GT_specs.call(null,k__$1),v);
if(cljs.core._EQ_.call(null,cv,new cljs.core.Keyword("cljs.spec","invalid","cljs.spec/invalid",551677537))){
return new cljs.core.Keyword("cljs.spec","invalid","cljs.spec/invalid",551677537);
} else {
var G__26727 = (((cv === v))?ret__$2:cljs.core.assoc.call(null,ret__$2,k__$1,cv));
var G__26728 = ks__$1;
ret__$1 = G__26727;
G__26705__$1 = G__26728;
continue;
}
} else {
var G__26729 = ret__$2;
var G__26730 = ks__$1;
ret__$1 = G__26729;
G__26705__$1 = G__26730;
continue;
}
} else {
return ret__$2;
}
break;
}
} else {
return new cljs.core.Keyword("cljs.spec","invalid","cljs.spec/invalid",551677537);
}
});})(keys_pred,k__GT_s,keys__GT_specs,id,map__26697,map__26697__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms))
;

cljs.spec.t_cljs$spec26699.prototype.cljs$spec$Spec$unform_STAR_$arity$2 = ((function (keys_pred,k__GT_s,keys__GT_specs,id,map__26697,map__26697__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms){
return (function (_,m){
var self__ = this;
var ___$1 = this;
var reg = cljs.spec.registry.call(null);
var ret = m;
var G__26715 = cljs.core.keys.call(null,m);
var vec__26716 = G__26715;
var seq__26717 = cljs.core.seq.call(null,vec__26716);
var first__26718 = cljs.core.first.call(null,seq__26717);
var seq__26717__$1 = cljs.core.next.call(null,seq__26717);
var k = first__26718;
var ks = seq__26717__$1;
var keys = vec__26716;
var ret__$1 = ret;
var G__26715__$1 = G__26715;
while(true){
var ret__$2 = ret__$1;
var vec__26719 = G__26715__$1;
var seq__26720 = cljs.core.seq.call(null,vec__26719);
var first__26721 = cljs.core.first.call(null,seq__26720);
var seq__26720__$1 = cljs.core.next.call(null,seq__26720);
var k__$1 = first__26721;
var ks__$1 = seq__26720__$1;
var keys__$1 = vec__26719;
if(cljs.core.truth_(keys__$1)){
if(cljs.core.contains_QMARK_.call(null,reg,self__.keys__GT_specs.call(null,k__$1))){
var cv = cljs.core.get.call(null,m,k__$1);
var v = cljs.spec.unform.call(null,self__.keys__GT_specs.call(null,k__$1),cv);
var G__26731 = (((cv === v))?ret__$2:cljs.core.assoc.call(null,ret__$2,k__$1,v));
var G__26732 = ks__$1;
ret__$1 = G__26731;
G__26715__$1 = G__26732;
continue;
} else {
var G__26733 = ret__$2;
var G__26734 = ks__$1;
ret__$1 = G__26733;
G__26715__$1 = G__26734;
continue;
}
} else {
return ret__$2;
}
break;
}
});})(keys_pred,k__GT_s,keys__GT_specs,id,map__26697,map__26697__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms))
;

cljs.spec.t_cljs$spec26699.prototype.cljs$spec$Spec$explain_STAR_$arity$5 = ((function (keys_pred,k__GT_s,keys__GT_specs,id,map__26697,map__26697__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms){
return (function (_,path,via,in$,x){
var self__ = this;
var ___$1 = this;
if(!(cljs.core.map_QMARK_.call(null,x))){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"path","path",-188191168),path,new cljs.core.Keyword(null,"pred","pred",1927423397),new cljs.core.Symbol(null,"map?","map?",-1780568534,null),new cljs.core.Keyword(null,"val","val",128701612),x,new cljs.core.Keyword(null,"via","via",-1904457336),via,new cljs.core.Keyword(null,"in","in",-1531184865),in$], null)], null);
} else {
var reg = cljs.spec.registry.call(null);
return cljs.core.apply.call(null,cljs.core.concat,(function (){var temp__6747__auto__ = cljs.core.seq.call(null,cljs.core.keep.call(null,cljs.core.identity,cljs.core.map.call(null,((function (reg,___$1,keys_pred,k__GT_s,keys__GT_specs,id,map__26697,map__26697__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms){
return (function (pred,form){
if(cljs.core.truth_(pred.call(null,x))){
return null;
} else {
return cljs.spec.abbrev.call(null,form);
}
});})(reg,___$1,keys_pred,k__GT_s,keys__GT_specs,id,map__26697,map__26697__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms))
,self__.pred_exprs,self__.pred_forms)));
if(temp__6747__auto__){
var probs = temp__6747__auto__;
return cljs.core.map.call(null,((function (probs,temp__6747__auto__,reg,___$1,keys_pred,k__GT_s,keys__GT_specs,id,map__26697,map__26697__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms){
return (function (p1__26664_SHARP_){
return cljs.core.identity.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"path","path",-188191168),path,new cljs.core.Keyword(null,"pred","pred",1927423397),p1__26664_SHARP_,new cljs.core.Keyword(null,"val","val",128701612),x,new cljs.core.Keyword(null,"via","via",-1904457336),via,new cljs.core.Keyword(null,"in","in",-1531184865),in$], null));
});})(probs,temp__6747__auto__,reg,___$1,keys_pred,k__GT_s,keys__GT_specs,id,map__26697,map__26697__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms))
,probs);
} else {
return null;
}
})(),cljs.core.map.call(null,((function (reg,___$1,keys_pred,k__GT_s,keys__GT_specs,id,map__26697,map__26697__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms){
return (function (p__26722){
var vec__26723 = p__26722;
var k = cljs.core.nth.call(null,vec__26723,(0),null);
var v = cljs.core.nth.call(null,vec__26723,(1),null);
if(cljs.core.truth_((function (){var or__21149__auto__ = !(cljs.core.contains_QMARK_.call(null,reg,self__.keys__GT_specs.call(null,k)));
if(or__21149__auto__){
return or__21149__auto__;
} else {
return cljs.spec.valid_QMARK_.call(null,self__.keys__GT_specs.call(null,k),v,k);
}
})())){
return null;
} else {
return cljs.spec.explain_1.call(null,self__.keys__GT_specs.call(null,k),self__.keys__GT_specs.call(null,k),cljs.core.conj.call(null,path,k),via,cljs.core.conj.call(null,in$,k),v);
}
});})(reg,___$1,keys_pred,k__GT_s,keys__GT_specs,id,map__26697,map__26697__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms))
,cljs.core.seq.call(null,x)));
}
});})(keys_pred,k__GT_s,keys__GT_specs,id,map__26697,map__26697__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms))
;

cljs.spec.t_cljs$spec26699.prototype.cljs$spec$Spec$gen_STAR_$arity$4 = ((function (keys_pred,k__GT_s,keys__GT_specs,id,map__26697,map__26697__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms){
return (function (_,overrides,path,rmap){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.gfn)){
return self__.gfn.call(null);
} else {
var rmap__$1 = cljs.spec.inck.call(null,rmap,self__.id);
var gen = ((function (rmap__$1,___$1,keys_pred,k__GT_s,keys__GT_specs,id,map__26697,map__26697__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms){
return (function (k,s){
return cljs.spec.gensub.call(null,s,overrides,cljs.core.conj.call(null,path,k),rmap__$1,k);
});})(rmap__$1,___$1,keys_pred,k__GT_s,keys__GT_specs,id,map__26697,map__26697__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms))
;
var ogen = ((function (rmap__$1,gen,___$1,keys_pred,k__GT_s,keys__GT_specs,id,map__26697,map__26697__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms){
return (function (k,s){
if(cljs.core.truth_(cljs.spec.recur_limit_QMARK_.call(null,rmap__$1,self__.id,path,k))){
return null;
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,cljs.spec.impl.gen.delay_impl.call(null,(new cljs.core.Delay(((function (rmap__$1,gen,___$1,keys_pred,k__GT_s,keys__GT_specs,id,map__26697,map__26697__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms){
return (function (){
return cljs.spec.gensub.call(null,s,overrides,cljs.core.conj.call(null,path,k),rmap__$1,k);
});})(rmap__$1,gen,___$1,keys_pred,k__GT_s,keys__GT_specs,id,map__26697,map__26697__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms))
,null)))], null);
}
});})(rmap__$1,gen,___$1,keys_pred,k__GT_s,keys__GT_specs,id,map__26697,map__26697__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms))
;
var req_gens = cljs.core.map.call(null,gen,self__.req_keys,self__.req_specs);
var opt_gens = cljs.core.remove.call(null,cljs.core.nil_QMARK_,cljs.core.map.call(null,ogen,self__.opt_keys,self__.opt_specs));
if(cljs.core.every_QMARK_.call(null,cljs.core.identity,cljs.core.concat.call(null,req_gens,opt_gens))){
var reqs = cljs.core.zipmap.call(null,self__.req_keys,req_gens);
var opts = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,opt_gens);
return cljs.spec.impl.gen.bind.call(null,cljs.spec.impl.gen.choose.call(null,(0),cljs.core.count.call(null,opts)),((function (reqs,opts,rmap__$1,gen,ogen,req_gens,opt_gens,___$1,keys_pred,k__GT_s,keys__GT_specs,id,map__26697,map__26697__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms){
return (function (p1__26665_SHARP_){
var args = cljs.core.concat.call(null,cljs.core.seq.call(null,reqs),((cljs.core.seq.call(null,opts))?cljs.core.shuffle.call(null,cljs.core.seq.call(null,opts)):null));
return cljs.core.apply.call(null,cljs.spec.impl.gen.hash_map,cljs.core.apply.call(null,cljs.core.concat,cljs.core.take.call(null,(p1__26665_SHARP_ + cljs.core.count.call(null,reqs)),args)));
});})(reqs,opts,rmap__$1,gen,ogen,req_gens,opt_gens,___$1,keys_pred,k__GT_s,keys__GT_specs,id,map__26697,map__26697__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms))
);
} else {
return null;
}
}
});})(keys_pred,k__GT_s,keys__GT_specs,id,map__26697,map__26697__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms))
;

cljs.spec.t_cljs$spec26699.prototype.cljs$spec$Spec$with_gen_STAR_$arity$2 = ((function (keys_pred,k__GT_s,keys__GT_specs,id,map__26697,map__26697__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms){
return (function (_,gfn__$1){
var self__ = this;
var ___$1 = this;
return cljs.spec.map_spec_impl.call(null,cljs.core.assoc.call(null,self__.argm,new cljs.core.Keyword(null,"gfn","gfn",791517474),gfn__$1));
});})(keys_pred,k__GT_s,keys__GT_specs,id,map__26697,map__26697__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms))
;

cljs.spec.t_cljs$spec26699.prototype.cljs$spec$Spec$describe_STAR_$arity$1 = ((function (keys_pred,k__GT_s,keys__GT_specs,id,map__26697,map__26697__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.cons.call(null,new cljs.core.Symbol("cljs.spec","keys","cljs.spec/keys",-927379584,null),(function (){var G__26726 = cljs.core.PersistentVector.EMPTY;
var G__26726__$1 = (cljs.core.truth_(self__.req)?cljs.core.conj.call(null,G__26726,new cljs.core.Keyword(null,"req","req",-326448303),self__.req):G__26726);
var G__26726__$2 = (cljs.core.truth_(self__.opt)?cljs.core.conj.call(null,G__26726__$1,new cljs.core.Keyword(null,"opt","opt",-794706369),self__.opt):G__26726__$1);
var G__26726__$3 = (cljs.core.truth_(self__.req_un)?cljs.core.conj.call(null,G__26726__$2,new cljs.core.Keyword(null,"req-un","req-un",1074571008),self__.req_un):G__26726__$2);
if(cljs.core.truth_(self__.opt_un)){
return cljs.core.conj.call(null,G__26726__$3,new cljs.core.Keyword(null,"opt-un","opt-un",883442496),self__.opt_un);
} else {
return G__26726__$3;
}
})());
});})(keys_pred,k__GT_s,keys__GT_specs,id,map__26697,map__26697__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms))
;

cljs.spec.t_cljs$spec26699.getBasis = ((function (keys_pred,k__GT_s,keys__GT_specs,id,map__26697,map__26697__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms){
return (function (){
return new cljs.core.PersistentVector(null, 19, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"opt","opt",845825158,null),new cljs.core.Symbol(null,"req-un","req-un",-1579864761,null),new cljs.core.Symbol(null,"opt-un","opt-un",-1770993273,null),new cljs.core.Symbol(null,"p__26666","p__26666",1211289127,null),new cljs.core.Symbol(null,"gfn","gfn",-1862918295,null),new cljs.core.Symbol(null,"pred-exprs","pred-exprs",-862164374,null),new cljs.core.Symbol(null,"keys-pred","keys-pred",-1795451030,null),new cljs.core.Symbol(null,"argm","argm",-181546357,null),new cljs.core.Symbol(null,"opt-keys","opt-keys",-1391747508,null),new cljs.core.Symbol(null,"req-specs","req-specs",-2100473456,null),new cljs.core.Symbol(null,"map__26697","map__26697",1898017683,null),new cljs.core.Symbol(null,"keys->specs","keys->specs",-97897643,null),new cljs.core.Symbol(null,"req","req",1314083224,null),new cljs.core.Symbol(null,"id","id",252129435,null),new cljs.core.Symbol(null,"req-keys","req-keys",-2140116548,null),new cljs.core.Symbol(null,"opt-specs","opt-specs",1255626077,null),new cljs.core.Symbol(null,"k->s","k->s",-1685112801,null),new cljs.core.Symbol(null,"pred-forms","pred-forms",1813143359,null),new cljs.core.Symbol(null,"meta26700","meta26700",-2048905442,null)], null);
});})(keys_pred,k__GT_s,keys__GT_specs,id,map__26697,map__26697__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms))
;

cljs.spec.t_cljs$spec26699.cljs$lang$type = true;

cljs.spec.t_cljs$spec26699.cljs$lang$ctorStr = "cljs.spec/t_cljs$spec26699";

cljs.spec.t_cljs$spec26699.cljs$lang$ctorPrWriter = ((function (keys_pred,k__GT_s,keys__GT_specs,id,map__26697,map__26697__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms){
return (function (this__21801__auto__,writer__21802__auto__,opt__21803__auto__){
return cljs.core._write.call(null,writer__21802__auto__,"cljs.spec/t_cljs$spec26699");
});})(keys_pred,k__GT_s,keys__GT_specs,id,map__26697,map__26697__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms))
;

cljs.spec.__GT_t_cljs$spec26699 = ((function (keys_pred,k__GT_s,keys__GT_specs,id,map__26697,map__26697__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms){
return (function cljs$spec$map_spec_impl_$___GT_t_cljs$spec26699(opt__$1,req_un__$1,opt_un__$1,p__26666__$1,gfn__$1,pred_exprs__$1,keys_pred__$1,argm__$1,opt_keys__$1,req_specs__$1,map__26697__$2,keys__GT_specs__$1,req__$1,id__$1,req_keys__$1,opt_specs__$1,k__GT_s__$1,pred_forms__$1,meta26700){
return (new cljs.spec.t_cljs$spec26699(opt__$1,req_un__$1,opt_un__$1,p__26666__$1,gfn__$1,pred_exprs__$1,keys_pred__$1,argm__$1,opt_keys__$1,req_specs__$1,map__26697__$2,keys__GT_specs__$1,req__$1,id__$1,req_keys__$1,opt_specs__$1,k__GT_s__$1,pred_forms__$1,meta26700));
});})(keys_pred,k__GT_s,keys__GT_specs,id,map__26697,map__26697__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms))
;

}

return (new cljs.spec.t_cljs$spec26699(opt,req_un,opt_un,p__26666,gfn,pred_exprs,keys_pred,argm,opt_keys,req_specs,map__26697__$1,keys__GT_specs,req,id,req_keys,opt_specs,k__GT_s,pred_forms,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Do not call this directly, use 'spec'
 */
cljs.spec.spec_impl = (function cljs$spec$spec_impl(var_args){
var args26735 = [];
var len__22365__auto___26743 = arguments.length;
var i__22366__auto___26744 = (0);
while(true){
if((i__22366__auto___26744 < len__22365__auto___26743)){
args26735.push((arguments[i__22366__auto___26744]));

var G__26745 = (i__22366__auto___26744 + (1));
i__22366__auto___26744 = G__26745;
continue;
} else {
}
break;
}

var G__26737 = args26735.length;
switch (G__26737) {
case 4:
return cljs.spec.spec_impl.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.spec.spec_impl.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26735.length)].join('')));

}
});

cljs.spec.spec_impl.cljs$core$IFn$_invoke$arity$4 = (function (form,pred,gfn,cpred_QMARK_){
return cljs.spec.spec_impl.call(null,form,pred,gfn,cpred_QMARK_,null);
});

cljs.spec.spec_impl.cljs$core$IFn$_invoke$arity$5 = (function (form,pred,gfn,cpred_QMARK_,unc){
if(cljs.core.truth_(cljs.spec.spec_QMARK_.call(null,pred))){
var G__26738 = pred;
if(cljs.core.truth_(gfn)){
return cljs.spec.with_gen.call(null,G__26738,gfn);
} else {
return G__26738;
}
} else {
if(cljs.core.truth_(cljs.spec.regex_QMARK_.call(null,pred))){
return cljs.spec.regex_spec_impl.call(null,pred,gfn);
} else {
if(cljs.core.truth_(cljs.spec.named_QMARK_.call(null,pred))){
var G__26739 = cljs.spec.the_spec.call(null,pred);
if(cljs.core.truth_(gfn)){
return cljs.spec.with_gen.call(null,G__26739,gfn);
} else {
return G__26739;
}
} else {
if(typeof cljs.spec.t_cljs$spec26740 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.spec.Spec}
 * @implements {cljs.core.IWithMeta}
*/
cljs.spec.t_cljs$spec26740 = (function (form,pred,gfn,cpred_QMARK_,unc,meta26741){
this.form = form;
this.pred = pred;
this.gfn = gfn;
this.cpred_QMARK_ = cpred_QMARK_;
this.unc = unc;
this.meta26741 = meta26741;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.spec.t_cljs$spec26740.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_26742,meta26741__$1){
var self__ = this;
var _26742__$1 = this;
return (new cljs.spec.t_cljs$spec26740(self__.form,self__.pred,self__.gfn,self__.cpred_QMARK_,self__.unc,meta26741__$1));
});

cljs.spec.t_cljs$spec26740.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_26742){
var self__ = this;
var _26742__$1 = this;
return self__.meta26741;
});

cljs.spec.t_cljs$spec26740.prototype.cljs$spec$Spec$ = cljs.core.PROTOCOL_SENTINEL;

cljs.spec.t_cljs$spec26740.prototype.cljs$spec$Spec$conform_STAR_$arity$2 = (function (_,x){
var self__ = this;
var ___$1 = this;
return cljs.spec.dt.call(null,self__.pred,x,self__.form,self__.cpred_QMARK_);
});

cljs.spec.t_cljs$spec26740.prototype.cljs$spec$Spec$unform_STAR_$arity$2 = (function (_,x){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.cpred_QMARK_)){
if(cljs.core.truth_(self__.unc)){
return self__.unc.call(null,x);
} else {
throw (new Error("no unform fn for conformer"));
}
} else {
return x;
}
});

cljs.spec.t_cljs$spec26740.prototype.cljs$spec$Spec$explain_STAR_$arity$5 = (function (_,path,via,in$,x){
var self__ = this;
var ___$1 = this;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec","invalid","cljs.spec/invalid",551677537),cljs.spec.dt.call(null,self__.pred,x,self__.form,self__.cpred_QMARK_))){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"path","path",-188191168),path,new cljs.core.Keyword(null,"pred","pred",1927423397),cljs.spec.abbrev.call(null,self__.form),new cljs.core.Keyword(null,"val","val",128701612),x,new cljs.core.Keyword(null,"via","via",-1904457336),via,new cljs.core.Keyword(null,"in","in",-1531184865),in$], null)], null);
} else {
return null;
}
});

cljs.spec.t_cljs$spec26740.prototype.cljs$spec$Spec$gen_STAR_$arity$4 = (function (_,___$1,___$2,___$3){
var self__ = this;
var ___$4 = this;
if(cljs.core.truth_(self__.gfn)){
return self__.gfn.call(null);
} else {
return cljs.spec.impl.gen.gen_for_pred.call(null,self__.pred);
}
});

cljs.spec.t_cljs$spec26740.prototype.cljs$spec$Spec$with_gen_STAR_$arity$2 = (function (_,gfn__$1){
var self__ = this;
var ___$1 = this;
return cljs.spec.spec_impl.call(null,self__.form,self__.pred,gfn__$1,self__.cpred_QMARK_,self__.unc);
});

cljs.spec.t_cljs$spec26740.prototype.cljs$spec$Spec$describe_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.form;
});

cljs.spec.t_cljs$spec26740.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"form","form",16469056,null),new cljs.core.Symbol(null,"pred","pred",-727012372,null),new cljs.core.Symbol(null,"gfn","gfn",-1862918295,null),new cljs.core.Symbol(null,"cpred?","cpred?",35589515,null),new cljs.core.Symbol(null,"unc","unc",-465250751,null),new cljs.core.Symbol(null,"meta26741","meta26741",1851487228,null)], null);
});

cljs.spec.t_cljs$spec26740.cljs$lang$type = true;

cljs.spec.t_cljs$spec26740.cljs$lang$ctorStr = "cljs.spec/t_cljs$spec26740";

cljs.spec.t_cljs$spec26740.cljs$lang$ctorPrWriter = (function (this__21801__auto__,writer__21802__auto__,opt__21803__auto__){
return cljs.core._write.call(null,writer__21802__auto__,"cljs.spec/t_cljs$spec26740");
});

cljs.spec.__GT_t_cljs$spec26740 = (function cljs$spec$__GT_t_cljs$spec26740(form__$1,pred__$1,gfn__$1,cpred_QMARK___$1,unc__$1,meta26741){
return (new cljs.spec.t_cljs$spec26740(form__$1,pred__$1,gfn__$1,cpred_QMARK___$1,unc__$1,meta26741));
});

}

return (new cljs.spec.t_cljs$spec26740(form,pred,gfn,cpred_QMARK_,unc,cljs.core.PersistentArrayMap.EMPTY));

}
}
}
});

cljs.spec.spec_impl.cljs$lang$maxFixedArity = 5;

/**
 * Do not call this directly, use 'multi-spec'
 */
cljs.spec.multi_spec_impl = (function cljs$spec$multi_spec_impl(var_args){
var args26752 = [];
var len__22365__auto___26766 = arguments.length;
var i__22366__auto___26767 = (0);
while(true){
if((i__22366__auto___26767 < len__22365__auto___26766)){
args26752.push((arguments[i__22366__auto___26767]));

var G__26768 = (i__22366__auto___26767 + (1));
i__22366__auto___26767 = G__26768;
continue;
} else {
}
break;
}

var G__26754 = args26752.length;
switch (G__26754) {
case 3:
return cljs.spec.multi_spec_impl.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.spec.multi_spec_impl.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26752.length)].join('')));

}
});

cljs.spec.multi_spec_impl.cljs$core$IFn$_invoke$arity$3 = (function (form,mmvar,retag){
return cljs.spec.multi_spec_impl.call(null,form,mmvar,retag,null);
});

cljs.spec.multi_spec_impl.cljs$core$IFn$_invoke$arity$4 = (function (form,mmvar,retag,gfn){
var id = cljs.core.random_uuid.call(null);
var predx = ((function (id){
return (function (p1__26747_SHARP_){
var mm = cljs.core.deref.call(null,mmvar);
var and__21137__auto__ = cljs.core._get_method.call(null,mm,cljs.core._dispatch_fn.call(null,mm).call(null,p1__26747_SHARP_));
if(cljs.core.truth_(and__21137__auto__)){
return mm.call(null,p1__26747_SHARP_);
} else {
return and__21137__auto__;
}
});})(id))
;
var dval = ((function (id,predx){
return (function (p1__26748_SHARP_){
return cljs.core._dispatch_fn.call(null,cljs.core.deref.call(null,mmvar)).call(null,p1__26748_SHARP_);
});})(id,predx))
;
var tag = (((retag instanceof cljs.core.Keyword))?((function (id,predx,dval){
return (function (p1__26749_SHARP_,p2__26750_SHARP_){
return cljs.core.assoc.call(null,p1__26749_SHARP_,retag,p2__26750_SHARP_);
});})(id,predx,dval))
:retag);
if(typeof cljs.spec.t_cljs$spec26755 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.spec.Spec}
 * @implements {cljs.core.IWithMeta}
*/
cljs.spec.t_cljs$spec26755 = (function (form,mmvar,retag,gfn,id,predx,dval,tag,meta26756){
this.form = form;
this.mmvar = mmvar;
this.retag = retag;
this.gfn = gfn;
this.id = id;
this.predx = predx;
this.dval = dval;
this.tag = tag;
this.meta26756 = meta26756;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.spec.t_cljs$spec26755.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (id,predx,dval,tag){
return (function (_26757,meta26756__$1){
var self__ = this;
var _26757__$1 = this;
return (new cljs.spec.t_cljs$spec26755(self__.form,self__.mmvar,self__.retag,self__.gfn,self__.id,self__.predx,self__.dval,self__.tag,meta26756__$1));
});})(id,predx,dval,tag))
;

cljs.spec.t_cljs$spec26755.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (id,predx,dval,tag){
return (function (_26757){
var self__ = this;
var _26757__$1 = this;
return self__.meta26756;
});})(id,predx,dval,tag))
;

cljs.spec.t_cljs$spec26755.prototype.cljs$spec$Spec$ = cljs.core.PROTOCOL_SENTINEL;

cljs.spec.t_cljs$spec26755.prototype.cljs$spec$Spec$conform_STAR_$arity$2 = ((function (id,predx,dval,tag){
return (function (_,x){
var self__ = this;
var ___$1 = this;
var temp__6745__auto__ = self__.predx.call(null,x);
if(cljs.core.truth_(temp__6745__auto__)){
var pred = temp__6745__auto__;
return cljs.spec.dt.call(null,pred,x,self__.form);
} else {
return new cljs.core.Keyword("cljs.spec","invalid","cljs.spec/invalid",551677537);
}
});})(id,predx,dval,tag))
;

cljs.spec.t_cljs$spec26755.prototype.cljs$spec$Spec$unform_STAR_$arity$2 = ((function (id,predx,dval,tag){
return (function (_,x){
var self__ = this;
var ___$1 = this;
var temp__6745__auto__ = self__.predx.call(null,x);
if(cljs.core.truth_(temp__6745__auto__)){
var pred = temp__6745__auto__;
return cljs.spec.unform.call(null,pred,x);
} else {
throw (new Error([cljs.core.str("No method of: "),cljs.core.str(self__.form),cljs.core.str(" for dispatch value: "),cljs.core.str(self__.dval.call(null,x))].join('')));
}
});})(id,predx,dval,tag))
;

cljs.spec.t_cljs$spec26755.prototype.cljs$spec$Spec$explain_STAR_$arity$5 = ((function (id,predx,dval,tag){
return (function (_,path,via,in$,x){
var self__ = this;
var ___$1 = this;
var dv = self__.dval.call(null,x);
var path__$1 = cljs.core.conj.call(null,path,dv);
var temp__6745__auto__ = self__.predx.call(null,x);
if(cljs.core.truth_(temp__6745__auto__)){
var pred = temp__6745__auto__;
return cljs.spec.explain_1.call(null,self__.form,pred,path__$1,via,in$,x);
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"path","path",-188191168),path__$1,new cljs.core.Keyword(null,"pred","pred",1927423397),cljs.spec.abbrev.call(null,self__.form),new cljs.core.Keyword(null,"val","val",128701612),x,new cljs.core.Keyword(null,"reason","reason",-2070751759),"no method",new cljs.core.Keyword(null,"via","via",-1904457336),via,new cljs.core.Keyword(null,"in","in",-1531184865),in$], null)], null);
}
});})(id,predx,dval,tag))
;

cljs.spec.t_cljs$spec26755.prototype.cljs$spec$Spec$gen_STAR_$arity$4 = ((function (id,predx,dval,tag){
return (function (_,overrides,path,rmap){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.gfn)){
return self__.gfn.call(null);
} else {
var gen = ((function (___$1,id,predx,dval,tag){
return (function (p__26758){
var vec__26759 = p__26758;
var k = cljs.core.nth.call(null,vec__26759,(0),null);
var f = cljs.core.nth.call(null,vec__26759,(1),null);
var p = f.call(null,null);
var rmap__$1 = cljs.spec.inck.call(null,rmap,self__.id);
if(cljs.core.truth_(cljs.spec.recur_limit_QMARK_.call(null,rmap__$1,self__.id,path,k))){
return null;
} else {
return cljs.spec.impl.gen.delay_impl.call(null,(new cljs.core.Delay(((function (rmap__$1,p,vec__26759,k,f,___$1,id,predx,dval,tag){
return (function (){
return cljs.spec.impl.gen.fmap.call(null,((function (rmap__$1,p,vec__26759,k,f,___$1,id,predx,dval,tag){
return (function (p1__26751_SHARP_){
return self__.tag.call(null,p1__26751_SHARP_,k);
});})(rmap__$1,p,vec__26759,k,f,___$1,id,predx,dval,tag))
,cljs.spec.gensub.call(null,p,overrides,cljs.core.conj.call(null,path,k),rmap__$1,cljs.core._conj.call(null,(function (){var x__22078__auto__ = self__.form;
return cljs.core._conj.call(null,(function (){var x__22078__auto____$1 = k;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__22078__auto____$1);
})(),x__22078__auto__);
})(),new cljs.core.Symbol(null,"method","method",1696235119,null))));
});})(rmap__$1,p,vec__26759,k,f,___$1,id,predx,dval,tag))
,null)));
}
});})(___$1,id,predx,dval,tag))
;
var gs = cljs.core.remove.call(null,cljs.core.nil_QMARK_,cljs.core.map.call(null,gen,cljs.core.remove.call(null,((function (gen,___$1,id,predx,dval,tag){
return (function (p__26762){
var vec__26763 = p__26762;
var k = cljs.core.nth.call(null,vec__26763,(0),null);
return cljs.core._EQ_.call(null,k,new cljs.core.Keyword("cljs.spec","invalid","cljs.spec/invalid",551677537));
});})(gen,___$1,id,predx,dval,tag))
,cljs.core.methods$.call(null,cljs.core.deref.call(null,self__.mmvar)))));
if(cljs.core.every_QMARK_.call(null,cljs.core.identity,gs)){
return cljs.spec.impl.gen.one_of.call(null,gs);
} else {
return null;
}
}
});})(id,predx,dval,tag))
;

cljs.spec.t_cljs$spec26755.prototype.cljs$spec$Spec$with_gen_STAR_$arity$2 = ((function (id,predx,dval,tag){
return (function (_,gfn__$1){
var self__ = this;
var ___$1 = this;
return cljs.spec.multi_spec_impl.call(null,self__.form,self__.mmvar,self__.retag,gfn__$1);
});})(id,predx,dval,tag))
;

cljs.spec.t_cljs$spec26755.prototype.cljs$spec$Spec$describe_STAR_$arity$1 = ((function (id,predx,dval,tag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.spec","multi-spec","cljs.spec/multi-spec",-2053297814,null)),(function (){var x__22078__auto__ = self__.form;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__22078__auto__);
})(),(function (){var x__22078__auto__ = self__.retag;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__22078__auto__);
})())));
});})(id,predx,dval,tag))
;

cljs.spec.t_cljs$spec26755.getBasis = ((function (id,predx,dval,tag){
return (function (){
return new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"form","form",16469056,null),new cljs.core.Symbol(null,"mmvar","mmvar",-1714325675,null),new cljs.core.Symbol(null,"retag","retag",528972725,null),new cljs.core.Symbol(null,"gfn","gfn",-1862918295,null),new cljs.core.Symbol(null,"id","id",252129435,null),new cljs.core.Symbol(null,"predx","predx",2063470948,null),new cljs.core.Symbol(null,"dval","dval",835211877,null),new cljs.core.Symbol(null,"tag","tag",350170304,null),new cljs.core.Symbol(null,"meta26756","meta26756",-1451506383,null)], null);
});})(id,predx,dval,tag))
;

cljs.spec.t_cljs$spec26755.cljs$lang$type = true;

cljs.spec.t_cljs$spec26755.cljs$lang$ctorStr = "cljs.spec/t_cljs$spec26755";

cljs.spec.t_cljs$spec26755.cljs$lang$ctorPrWriter = ((function (id,predx,dval,tag){
return (function (this__21801__auto__,writer__21802__auto__,opt__21803__auto__){
return cljs.core._write.call(null,writer__21802__auto__,"cljs.spec/t_cljs$spec26755");
});})(id,predx,dval,tag))
;

cljs.spec.__GT_t_cljs$spec26755 = ((function (id,predx,dval,tag){
return (function cljs$spec$__GT_t_cljs$spec26755(form__$1,mmvar__$1,retag__$1,gfn__$1,id__$1,predx__$1,dval__$1,tag__$1,meta26756){
return (new cljs.spec.t_cljs$spec26755(form__$1,mmvar__$1,retag__$1,gfn__$1,id__$1,predx__$1,dval__$1,tag__$1,meta26756));
});})(id,predx,dval,tag))
;

}

return (new cljs.spec.t_cljs$spec26755(form,mmvar,retag,gfn,id,predx,dval,tag,cljs.core.PersistentArrayMap.EMPTY));
});

cljs.spec.multi_spec_impl.cljs$lang$maxFixedArity = 4;

/**
 * Do not call this directly, use 'tuple'
 */
cljs.spec.tuple_impl = (function cljs$spec$tuple_impl(var_args){
var args26770 = [];
var len__22365__auto___26776 = arguments.length;
var i__22366__auto___26777 = (0);
while(true){
if((i__22366__auto___26777 < len__22365__auto___26776)){
args26770.push((arguments[i__22366__auto___26777]));

var G__26778 = (i__22366__auto___26777 + (1));
i__22366__auto___26777 = G__26778;
continue;
} else {
}
break;
}

var G__26772 = args26770.length;
switch (G__26772) {
case 2:
return cljs.spec.tuple_impl.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.spec.tuple_impl.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26770.length)].join('')));

}
});

cljs.spec.tuple_impl.cljs$core$IFn$_invoke$arity$2 = (function (forms,preds){
return cljs.spec.tuple_impl.call(null,forms,preds,null);
});

cljs.spec.tuple_impl.cljs$core$IFn$_invoke$arity$3 = (function (forms,preds,gfn){
if(typeof cljs.spec.t_cljs$spec26773 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.spec.Spec}
 * @implements {cljs.core.IWithMeta}
*/
cljs.spec.t_cljs$spec26773 = (function (forms,preds,gfn,meta26774){
this.forms = forms;
this.preds = preds;
this.gfn = gfn;
this.meta26774 = meta26774;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.spec.t_cljs$spec26773.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_26775,meta26774__$1){
var self__ = this;
var _26775__$1 = this;
return (new cljs.spec.t_cljs$spec26773(self__.forms,self__.preds,self__.gfn,meta26774__$1));
});

cljs.spec.t_cljs$spec26773.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_26775){
var self__ = this;
var _26775__$1 = this;
return self__.meta26774;
});

cljs.spec.t_cljs$spec26773.prototype.cljs$spec$Spec$ = cljs.core.PROTOCOL_SENTINEL;

cljs.spec.t_cljs$spec26773.prototype.cljs$spec$Spec$conform_STAR_$arity$2 = (function (_,x){
var self__ = this;
var ___$1 = this;
if(!((cljs.core.vector_QMARK_.call(null,x)) && (cljs.core._EQ_.call(null,cljs.core.count.call(null,x),cljs.core.count.call(null,self__.preds))))){
return new cljs.core.Keyword("cljs.spec","invalid","cljs.spec/invalid",551677537);
} else {
var ret = x;
var i = (0);
while(true){
if(cljs.core._EQ_.call(null,i,cljs.core.count.call(null,x))){
return ret;
} else {
var v = x.call(null,i);
var cv = cljs.spec.dt.call(null,self__.preds.call(null,i),v,self__.forms.call(null,i));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec","invalid","cljs.spec/invalid",551677537),cv)){
return new cljs.core.Keyword("cljs.spec","invalid","cljs.spec/invalid",551677537);
} else {
var G__26780 = (((cv === v))?ret:cljs.core.assoc.call(null,ret,i,cv));
var G__26781 = (i + (1));
ret = G__26780;
i = G__26781;
continue;
}
}
break;
}
}
});

cljs.spec.t_cljs$spec26773.prototype.cljs$spec$Spec$unform_STAR_$arity$2 = (function (_,x){
var self__ = this;
var ___$1 = this;
if((cljs.core.vector_QMARK_.call(null,x)) && (cljs.core._EQ_.call(null,cljs.core.count.call(null,x),cljs.core.count.call(null,self__.preds)))){
} else {
throw (new Error("Assert failed: (c/and (vector? x) (= (count x) (count preds)))"));
}

var ret = x;
var i = (0);
while(true){
if(cljs.core._EQ_.call(null,i,cljs.core.count.call(null,x))){
return ret;
} else {
var cv = x.call(null,i);
var v = cljs.spec.unform.call(null,self__.preds.call(null,i),cv);
var G__26782 = (((cv === v))?ret:cljs.core.assoc.call(null,ret,i,v));
var G__26783 = (i + (1));
ret = G__26782;
i = G__26783;
continue;
}
break;
}
});

cljs.spec.t_cljs$spec26773.prototype.cljs$spec$Spec$explain_STAR_$arity$5 = (function (_,path,via,in$,x){
var self__ = this;
var ___$1 = this;
if(!(cljs.core.vector_QMARK_.call(null,x))){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"path","path",-188191168),path,new cljs.core.Keyword(null,"pred","pred",1927423397),new cljs.core.Symbol(null,"vector?","vector?",-61367869,null),new cljs.core.Keyword(null,"val","val",128701612),x,new cljs.core.Keyword(null,"via","via",-1904457336),via,new cljs.core.Keyword(null,"in","in",-1531184865),in$], null)], null);
} else {
if(cljs.core.not_EQ_.call(null,cljs.core.count.call(null,x),cljs.core.count.call(null,self__.preds))){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"path","path",-188191168),path,new cljs.core.Keyword(null,"pred","pred",1927423397),cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","=","cljs.core/=",-1891498332,null)),(function (){var x__22078__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","count","cljs.core/count",-921270233,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"%","%",-950237169,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__22078__auto__);
})(),(function (){var x__22078__auto__ = cljs.core.count.call(null,self__.preds);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__22078__auto__);
})()))),new cljs.core.Keyword(null,"val","val",128701612),x,new cljs.core.Keyword(null,"via","via",-1904457336),via,new cljs.core.Keyword(null,"in","in",-1531184865),in$], null)], null);
} else {
return cljs.core.apply.call(null,cljs.core.concat,cljs.core.map.call(null,((function (___$1){
return (function (i,form,pred){
var v = x.call(null,i);
if(cljs.core.truth_(cljs.spec.valid_QMARK_.call(null,pred,v))){
return null;
} else {
return cljs.spec.explain_1.call(null,form,pred,cljs.core.conj.call(null,path,i),via,cljs.core.conj.call(null,in$,i),v);
}
});})(___$1))
,cljs.core.range.call(null,cljs.core.count.call(null,self__.preds)),self__.forms,self__.preds));

}
}
});

cljs.spec.t_cljs$spec26773.prototype.cljs$spec$Spec$gen_STAR_$arity$4 = (function (_,overrides,path,rmap){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.gfn)){
return self__.gfn.call(null);
} else {
var gen = ((function (___$1){
return (function (i,p,f){
return cljs.spec.gensub.call(null,p,overrides,cljs.core.conj.call(null,path,i),rmap,f);
});})(___$1))
;
var gs = cljs.core.map.call(null,gen,cljs.core.range.call(null,cljs.core.count.call(null,self__.preds)),self__.preds,self__.forms);
if(cljs.core.every_QMARK_.call(null,cljs.core.identity,gs)){
return cljs.core.apply.call(null,cljs.spec.impl.gen.tuple,gs);
} else {
return null;
}
}
});

cljs.spec.t_cljs$spec26773.prototype.cljs$spec$Spec$with_gen_STAR_$arity$2 = (function (_,gfn__$1){
var self__ = this;
var ___$1 = this;
return cljs.spec.tuple_impl.call(null,self__.forms,self__.preds,gfn__$1);
});

cljs.spec.t_cljs$spec26773.prototype.cljs$spec$Spec$describe_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.spec","tuple","cljs.spec/tuple",500419708,null)),self__.forms)));
});

cljs.spec.t_cljs$spec26773.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"forms","forms",-608443419,null),new cljs.core.Symbol(null,"preds","preds",150921777,null),new cljs.core.Symbol(null,"gfn","gfn",-1862918295,null),new cljs.core.Symbol(null,"meta26774","meta26774",-1344337980,null)], null);
});

cljs.spec.t_cljs$spec26773.cljs$lang$type = true;

cljs.spec.t_cljs$spec26773.cljs$lang$ctorStr = "cljs.spec/t_cljs$spec26773";

cljs.spec.t_cljs$spec26773.cljs$lang$ctorPrWriter = (function (this__21801__auto__,writer__21802__auto__,opt__21803__auto__){
return cljs.core._write.call(null,writer__21802__auto__,"cljs.spec/t_cljs$spec26773");
});

cljs.spec.__GT_t_cljs$spec26773 = (function cljs$spec$__GT_t_cljs$spec26773(forms__$1,preds__$1,gfn__$1,meta26774){
return (new cljs.spec.t_cljs$spec26773(forms__$1,preds__$1,gfn__$1,meta26774));
});

}

return (new cljs.spec.t_cljs$spec26773(forms,preds,gfn,cljs.core.PersistentArrayMap.EMPTY));
});

cljs.spec.tuple_impl.cljs$lang$maxFixedArity = 3;

cljs.spec.tagged_ret = (function cljs$spec$tagged_ret(v){
var x26785 = v;
x26785.cljs$core$IMapEntry$ = cljs.core.PROTOCOL_SENTINEL;

x26785.cljs$core$IMapEntry$_key$arity$1 = ((function (x26785){
return (function (_){
var ___$1 = this;
return cljs.core._nth.call(null,v,(0));
});})(x26785))
;

x26785.cljs$core$IMapEntry$_val$arity$1 = ((function (x26785){
return (function (_){
var ___$1 = this;
return cljs.core._nth.call(null,v,(1));
});})(x26785))
;

return x26785;
});
/**
 * Do not call this directly, use 'or'
 */
cljs.spec.or_spec_impl = (function cljs$spec$or_spec_impl(keys,forms,preds,gfn){
var id = cljs.core.random_uuid.call(null);
var kps = cljs.core.zipmap.call(null,keys,preds);
var cform = ((function (id,kps){
return (function (x){
var i = (0);
while(true){
if((i < cljs.core.count.call(null,preds))){
var pred = preds.call(null,i);
var ret = cljs.spec.dt.call(null,pred,x,cljs.core.nth.call(null,forms,i));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec","invalid","cljs.spec/invalid",551677537),ret)){
var G__26800 = (i + (1));
i = G__26800;
continue;
} else {
return cljs.spec.tagged_ret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [keys.call(null,i),ret], null));
}
} else {
return new cljs.core.Keyword("cljs.spec","invalid","cljs.spec/invalid",551677537);
}
break;
}
});})(id,kps))
;
if(typeof cljs.spec.t_cljs$spec26793 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.spec.Spec}
 * @implements {cljs.core.IWithMeta}
*/
cljs.spec.t_cljs$spec26793 = (function (keys,forms,preds,gfn,id,kps,cform,meta26794){
this.keys = keys;
this.forms = forms;
this.preds = preds;
this.gfn = gfn;
this.id = id;
this.kps = kps;
this.cform = cform;
this.meta26794 = meta26794;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.spec.t_cljs$spec26793.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (id,kps,cform){
return (function (_26795,meta26794__$1){
var self__ = this;
var _26795__$1 = this;
return (new cljs.spec.t_cljs$spec26793(self__.keys,self__.forms,self__.preds,self__.gfn,self__.id,self__.kps,self__.cform,meta26794__$1));
});})(id,kps,cform))
;

cljs.spec.t_cljs$spec26793.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (id,kps,cform){
return (function (_26795){
var self__ = this;
var _26795__$1 = this;
return self__.meta26794;
});})(id,kps,cform))
;

cljs.spec.t_cljs$spec26793.prototype.cljs$spec$Spec$ = cljs.core.PROTOCOL_SENTINEL;

cljs.spec.t_cljs$spec26793.prototype.cljs$spec$Spec$conform_STAR_$arity$2 = ((function (id,kps,cform){
return (function (_,x){
var self__ = this;
var ___$1 = this;
return self__.cform.call(null,x);
});})(id,kps,cform))
;

cljs.spec.t_cljs$spec26793.prototype.cljs$spec$Spec$unform_STAR_$arity$2 = ((function (id,kps,cform){
return (function (_,p__26796){
var self__ = this;
var vec__26797 = p__26796;
var k = cljs.core.nth.call(null,vec__26797,(0),null);
var x = cljs.core.nth.call(null,vec__26797,(1),null);
var ___$1 = this;
return cljs.spec.unform.call(null,self__.kps.call(null,k),x);
});})(id,kps,cform))
;

cljs.spec.t_cljs$spec26793.prototype.cljs$spec$Spec$explain_STAR_$arity$5 = ((function (id,kps,cform){
return (function (this$,path,via,in$,x){
var self__ = this;
var this$__$1 = this;
if(cljs.core.truth_(cljs.spec.valid_QMARK_.call(null,this$__$1,x))){
return null;
} else {
return cljs.core.apply.call(null,cljs.core.concat,cljs.core.map.call(null,((function (this$__$1,id,kps,cform){
return (function (k,form,pred){
if(cljs.core.truth_(cljs.spec.valid_QMARK_.call(null,pred,x))){
return null;
} else {
return cljs.spec.explain_1.call(null,form,pred,cljs.core.conj.call(null,path,k),via,in$,x);
}
});})(this$__$1,id,kps,cform))
,self__.keys,self__.forms,self__.preds));
}
});})(id,kps,cform))
;

cljs.spec.t_cljs$spec26793.prototype.cljs$spec$Spec$gen_STAR_$arity$4 = ((function (id,kps,cform){
return (function (_,overrides,path,rmap){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.gfn)){
return self__.gfn.call(null);
} else {
var gen = ((function (___$1,id,kps,cform){
return (function (k,p,f){
var rmap__$1 = cljs.spec.inck.call(null,rmap,self__.id);
if(cljs.core.truth_(cljs.spec.recur_limit_QMARK_.call(null,rmap__$1,self__.id,path,k))){
return null;
} else {
return cljs.spec.impl.gen.delay_impl.call(null,(new cljs.core.Delay(((function (rmap__$1,___$1,id,kps,cform){
return (function (){
return cljs.spec.gensub.call(null,p,overrides,cljs.core.conj.call(null,path,k),rmap__$1,f);
});})(rmap__$1,___$1,id,kps,cform))
,null)));
}
});})(___$1,id,kps,cform))
;
var gs = cljs.core.remove.call(null,cljs.core.nil_QMARK_,cljs.core.map.call(null,gen,self__.keys,self__.preds,self__.forms));
if(cljs.core.empty_QMARK_.call(null,gs)){
return null;
} else {
return cljs.spec.impl.gen.one_of.call(null,gs);
}
}
});})(id,kps,cform))
;

cljs.spec.t_cljs$spec26793.prototype.cljs$spec$Spec$with_gen_STAR_$arity$2 = ((function (id,kps,cform){
return (function (_,gfn__$1){
var self__ = this;
var ___$1 = this;
return cljs.spec.or_spec_impl.call(null,self__.keys,self__.forms,self__.preds,gfn__$1);
});})(id,kps,cform))
;

cljs.spec.t_cljs$spec26793.prototype.cljs$spec$Spec$describe_STAR_$arity$1 = ((function (id,kps,cform){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.spec","or","cljs.spec/or",1200597689,null)),cljs.core.mapcat.call(null,cljs.core.vector,self__.keys,self__.forms))));
});})(id,kps,cform))
;

cljs.spec.t_cljs$spec26793.getBasis = ((function (id,kps,cform){
return (function (){
return new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"keys","keys",-1586012071,null),new cljs.core.Symbol(null,"forms","forms",-608443419,null),new cljs.core.Symbol(null,"preds","preds",150921777,null),new cljs.core.Symbol(null,"gfn","gfn",-1862918295,null),new cljs.core.Symbol(null,"id","id",252129435,null),new cljs.core.Symbol(null,"kps","kps",-1157342767,null),new cljs.core.Symbol(null,"cform","cform",1319506748,null),new cljs.core.Symbol(null,"meta26794","meta26794",-1050717068,null)], null);
});})(id,kps,cform))
;

cljs.spec.t_cljs$spec26793.cljs$lang$type = true;

cljs.spec.t_cljs$spec26793.cljs$lang$ctorStr = "cljs.spec/t_cljs$spec26793";

cljs.spec.t_cljs$spec26793.cljs$lang$ctorPrWriter = ((function (id,kps,cform){
return (function (this__21801__auto__,writer__21802__auto__,opt__21803__auto__){
return cljs.core._write.call(null,writer__21802__auto__,"cljs.spec/t_cljs$spec26793");
});})(id,kps,cform))
;

cljs.spec.__GT_t_cljs$spec26793 = ((function (id,kps,cform){
return (function cljs$spec$or_spec_impl_$___GT_t_cljs$spec26793(keys__$1,forms__$1,preds__$1,gfn__$1,id__$1,kps__$1,cform__$1,meta26794){
return (new cljs.spec.t_cljs$spec26793(keys__$1,forms__$1,preds__$1,gfn__$1,id__$1,kps__$1,cform__$1,meta26794));
});})(id,kps,cform))
;

}

return (new cljs.spec.t_cljs$spec26793(keys,forms,preds,gfn,id,kps,cform,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.spec.and_preds = (function cljs$spec$and_preds(x,preds,forms){
var ret = x;
var G__26827 = preds;
var vec__26829 = G__26827;
var seq__26830 = cljs.core.seq.call(null,vec__26829);
var first__26831 = cljs.core.first.call(null,seq__26830);
var seq__26830__$1 = cljs.core.next.call(null,seq__26830);
var pred = first__26831;
var preds__$1 = seq__26830__$1;
var G__26828 = forms;
var vec__26832 = G__26828;
var seq__26833 = cljs.core.seq.call(null,vec__26832);
var first__26834 = cljs.core.first.call(null,seq__26833);
var seq__26833__$1 = cljs.core.next.call(null,seq__26833);
var form = first__26834;
var forms__$1 = seq__26833__$1;
var ret__$1 = ret;
var G__26827__$1 = G__26827;
var G__26828__$1 = G__26828;
while(true){
var ret__$2 = ret__$1;
var vec__26835 = G__26827__$1;
var seq__26836 = cljs.core.seq.call(null,vec__26835);
var first__26837 = cljs.core.first.call(null,seq__26836);
var seq__26836__$1 = cljs.core.next.call(null,seq__26836);
var pred__$1 = first__26837;
var preds__$2 = seq__26836__$1;
var vec__26838 = G__26828__$1;
var seq__26839 = cljs.core.seq.call(null,vec__26838);
var first__26840 = cljs.core.first.call(null,seq__26839);
var seq__26839__$1 = cljs.core.next.call(null,seq__26839);
var form__$1 = first__26840;
var forms__$2 = seq__26839__$1;
if(cljs.core.truth_(pred__$1)){
var nret = cljs.spec.dt.call(null,pred__$1,ret__$2,form__$1);
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec","invalid","cljs.spec/invalid",551677537),nret)){
return new cljs.core.Keyword("cljs.spec","invalid","cljs.spec/invalid",551677537);
} else {
var G__26841 = nret;
var G__26842 = preds__$2;
var G__26843 = forms__$2;
ret__$1 = G__26841;
G__26827__$1 = G__26842;
G__26828__$1 = G__26843;
continue;
}
} else {
return ret__$2;
}
break;
}
});
cljs.spec.explain_pred_list = (function cljs$spec$explain_pred_list(forms,preds,path,via,in$,x){
var ret = x;
var G__26870 = forms;
var vec__26872 = G__26870;
var seq__26873 = cljs.core.seq.call(null,vec__26872);
var first__26874 = cljs.core.first.call(null,seq__26873);
var seq__26873__$1 = cljs.core.next.call(null,seq__26873);
var form = first__26874;
var forms__$1 = seq__26873__$1;
var G__26871 = preds;
var vec__26875 = G__26871;
var seq__26876 = cljs.core.seq.call(null,vec__26875);
var first__26877 = cljs.core.first.call(null,seq__26876);
var seq__26876__$1 = cljs.core.next.call(null,seq__26876);
var pred = first__26877;
var preds__$1 = seq__26876__$1;
var ret__$1 = ret;
var G__26870__$1 = G__26870;
var G__26871__$1 = G__26871;
while(true){
var ret__$2 = ret__$1;
var vec__26878 = G__26870__$1;
var seq__26879 = cljs.core.seq.call(null,vec__26878);
var first__26880 = cljs.core.first.call(null,seq__26879);
var seq__26879__$1 = cljs.core.next.call(null,seq__26879);
var form__$1 = first__26880;
var forms__$2 = seq__26879__$1;
var vec__26881 = G__26871__$1;
var seq__26882 = cljs.core.seq.call(null,vec__26881);
var first__26883 = cljs.core.first.call(null,seq__26882);
var seq__26882__$1 = cljs.core.next.call(null,seq__26882);
var pred__$1 = first__26883;
var preds__$2 = seq__26882__$1;
if(cljs.core.truth_(pred__$1)){
var nret = cljs.spec.dt.call(null,pred__$1,ret__$2,form__$1);
if(cljs.core.not_EQ_.call(null,new cljs.core.Keyword("cljs.spec","invalid","cljs.spec/invalid",551677537),nret)){
var G__26884 = nret;
var G__26885 = forms__$2;
var G__26886 = preds__$2;
ret__$1 = G__26884;
G__26870__$1 = G__26885;
G__26871__$1 = G__26886;
continue;
} else {
return cljs.spec.explain_1.call(null,form__$1,pred__$1,path,via,in$,ret__$2);
}
} else {
return null;
}
break;
}
});
/**
 * Do not call this directly, use 'and'
 */
cljs.spec.and_spec_impl = (function cljs$spec$and_spec_impl(forms,preds,gfn){
if(typeof cljs.spec.t_cljs$spec26892 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.spec.Spec}
 * @implements {cljs.core.IWithMeta}
*/
cljs.spec.t_cljs$spec26892 = (function (forms,preds,gfn,meta26893){
this.forms = forms;
this.preds = preds;
this.gfn = gfn;
this.meta26893 = meta26893;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.spec.t_cljs$spec26892.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_26894,meta26893__$1){
var self__ = this;
var _26894__$1 = this;
return (new cljs.spec.t_cljs$spec26892(self__.forms,self__.preds,self__.gfn,meta26893__$1));
});

cljs.spec.t_cljs$spec26892.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_26894){
var self__ = this;
var _26894__$1 = this;
return self__.meta26893;
});

cljs.spec.t_cljs$spec26892.prototype.cljs$spec$Spec$ = cljs.core.PROTOCOL_SENTINEL;

cljs.spec.t_cljs$spec26892.prototype.cljs$spec$Spec$conform_STAR_$arity$2 = (function (_,x){
var self__ = this;
var ___$1 = this;
return cljs.spec.and_preds.call(null,x,self__.preds,self__.forms);
});

cljs.spec.t_cljs$spec26892.prototype.cljs$spec$Spec$unform_STAR_$arity$2 = (function (_,x){
var self__ = this;
var ___$1 = this;
return cljs.core.reduce.call(null,((function (___$1){
return (function (p1__26888_SHARP_,p2__26887_SHARP_){
return cljs.spec.unform.call(null,p2__26887_SHARP_,p1__26888_SHARP_);
});})(___$1))
,x,cljs.core.reverse.call(null,self__.preds));
});

cljs.spec.t_cljs$spec26892.prototype.cljs$spec$Spec$explain_STAR_$arity$5 = (function (_,path,via,in$,x){
var self__ = this;
var ___$1 = this;
return cljs.spec.explain_pred_list.call(null,self__.forms,self__.preds,path,via,in$,x);
});

cljs.spec.t_cljs$spec26892.prototype.cljs$spec$Spec$gen_STAR_$arity$4 = (function (_,overrides,path,rmap){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.gfn)){
return self__.gfn.call(null);
} else {
return cljs.spec.gensub.call(null,cljs.core.first.call(null,self__.preds),overrides,path,rmap,cljs.core.first.call(null,self__.forms));
}
});

cljs.spec.t_cljs$spec26892.prototype.cljs$spec$Spec$with_gen_STAR_$arity$2 = (function (_,gfn__$1){
var self__ = this;
var ___$1 = this;
return cljs.spec.and_spec_impl.call(null,self__.forms,self__.preds,gfn__$1);
});

cljs.spec.t_cljs$spec26892.prototype.cljs$spec$Spec$describe_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.spec","and","cljs.spec/and",-7296553,null)),self__.forms)));
});

cljs.spec.t_cljs$spec26892.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"forms","forms",-608443419,null),new cljs.core.Symbol(null,"preds","preds",150921777,null),new cljs.core.Symbol(null,"gfn","gfn",-1862918295,null),new cljs.core.Symbol(null,"meta26893","meta26893",-1078742124,null)], null);
});

cljs.spec.t_cljs$spec26892.cljs$lang$type = true;

cljs.spec.t_cljs$spec26892.cljs$lang$ctorStr = "cljs.spec/t_cljs$spec26892";

cljs.spec.t_cljs$spec26892.cljs$lang$ctorPrWriter = (function (this__21801__auto__,writer__21802__auto__,opt__21803__auto__){
return cljs.core._write.call(null,writer__21802__auto__,"cljs.spec/t_cljs$spec26892");
});

cljs.spec.__GT_t_cljs$spec26892 = (function cljs$spec$and_spec_impl_$___GT_t_cljs$spec26892(forms__$1,preds__$1,gfn__$1,meta26893){
return (new cljs.spec.t_cljs$spec26892(forms__$1,preds__$1,gfn__$1,meta26893));
});

}

return (new cljs.spec.t_cljs$spec26892(forms,preds,gfn,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.spec.coll_prob = (function cljs$spec$coll_prob(x,kfn,kform,distinct,count,min_count,max_count,path,via,in$){
var pred = (function (){var or__21149__auto__ = kfn;
if(cljs.core.truth_(or__21149__auto__)){
return or__21149__auto__;
} else {
return cljs.core.coll_QMARK_;
}
})();
var kform__$1 = (function (){var or__21149__auto__ = kform;
if(cljs.core.truth_(or__21149__auto__)){
return or__21149__auto__;
} else {
return new cljs.core.Symbol("cljs.core","coll?","cljs.core/coll?",1208130522,null);
}
})();
if(cljs.core.not.call(null,cljs.spec.valid_QMARK_.call(null,pred,x))){
return cljs.spec.explain_1.call(null,kform__$1,pred,path,via,in$,x);
} else {
if(cljs.core.truth_((function (){var and__21137__auto__ = distinct;
if(cljs.core.truth_(and__21137__auto__)){
return (!(cljs.core.empty_QMARK_.call(null,x))) && (cljs.core.not.call(null,cljs.core.apply.call(null,cljs.core.distinct_QMARK_,x)));
} else {
return and__21137__auto__;
}
})())){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"path","path",-188191168),path,new cljs.core.Keyword(null,"pred","pred",1927423397),new cljs.core.Symbol(null,"distinct?","distinct?",-1684357959,null),new cljs.core.Keyword(null,"val","val",128701612),x,new cljs.core.Keyword(null,"via","via",-1904457336),via,new cljs.core.Keyword(null,"in","in",-1531184865),in$], null)], null);
} else {
if(cljs.core.truth_((function (){var and__21137__auto__ = count;
if(cljs.core.truth_(and__21137__auto__)){
return cljs.core.not_EQ_.call(null,count,cljs.core.bounded_count.call(null,count,x));
} else {
return and__21137__auto__;
}
})())){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"path","path",-188191168),path,new cljs.core.Keyword(null,"pred","pred",1927423397),cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","=","cljs.core/=",-1891498332,null)),(function (){var x__22078__auto__ = count;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__22078__auto__);
})(),(function (){var x__22078__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","count","cljs.core/count",-921270233,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"%","%",-950237169,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__22078__auto__);
})()))),new cljs.core.Keyword(null,"val","val",128701612),x,new cljs.core.Keyword(null,"via","via",-1904457336),via,new cljs.core.Keyword(null,"in","in",-1531184865),in$], null)], null);
} else {
if(cljs.core.truth_((function (){var and__21137__auto__ = (function (){var or__21149__auto__ = min_count;
if(cljs.core.truth_(or__21149__auto__)){
return or__21149__auto__;
} else {
return max_count;
}
})();
if(cljs.core.truth_(and__21137__auto__)){
return !((((function (){var or__21149__auto__ = min_count;
if(cljs.core.truth_(or__21149__auto__)){
return or__21149__auto__;
} else {
return (0);
}
})() <= cljs.core.bounded_count.call(null,(cljs.core.truth_(max_count)?(max_count + (1)):min_count),x))) && ((cljs.core.bounded_count.call(null,(cljs.core.truth_(max_count)?(max_count + (1)):min_count),x) <= (function (){var or__21149__auto__ = max_count;
if(cljs.core.truth_(or__21149__auto__)){
return or__21149__auto__;
} else {
return cljs.spec.MAX_INT;
}
})())));
} else {
return and__21137__auto__;
}
})())){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"path","path",-188191168),path,new cljs.core.Keyword(null,"pred","pred",1927423397),cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","<=","cljs.core/<=",1677001748,null)),(function (){var x__22078__auto__ = (function (){var or__21149__auto__ = min_count;
if(cljs.core.truth_(or__21149__auto__)){
return or__21149__auto__;
} else {
return (0);
}
})();
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__22078__auto__);
})(),(function (){var x__22078__auto__ = cljs.core.count.call(null,cljs.core.unquote.call(null,new cljs.core.Symbol(null,"%","%",-950237169,null)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__22078__auto__);
})(),(function (){var x__22078__auto__ = (function (){var or__21149__auto__ = max_count;
if(cljs.core.truth_(or__21149__auto__)){
return or__21149__auto__;
} else {
return new cljs.core.Symbol("js","Number.MAX_SAFE_INTEGER","js/Number.MAX_SAFE_INTEGER",-1535627560,null);
}
})();
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__22078__auto__);
})()))),new cljs.core.Keyword(null,"val","val",128701612),x,new cljs.core.Keyword(null,"via","via",-1904457336),via,new cljs.core.Keyword(null,"in","in",-1531184865),in$], null)], null);
} else {
return null;
}
}
}
}
});
/**
 * Do not call this directly, use 'merge'
 */
cljs.spec.merge_spec_impl = (function cljs$spec$merge_spec_impl(forms,preds,gfn){
if(typeof cljs.spec.t_cljs$spec26906 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.spec.Spec}
 * @implements {cljs.core.IWithMeta}
*/
cljs.spec.t_cljs$spec26906 = (function (forms,preds,gfn,meta26907){
this.forms = forms;
this.preds = preds;
this.gfn = gfn;
this.meta26907 = meta26907;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.spec.t_cljs$spec26906.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_26908,meta26907__$1){
var self__ = this;
var _26908__$1 = this;
return (new cljs.spec.t_cljs$spec26906(self__.forms,self__.preds,self__.gfn,meta26907__$1));
});

cljs.spec.t_cljs$spec26906.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_26908){
var self__ = this;
var _26908__$1 = this;
return self__.meta26907;
});

cljs.spec.t_cljs$spec26906.prototype.cljs$spec$Spec$ = cljs.core.PROTOCOL_SENTINEL;

cljs.spec.t_cljs$spec26906.prototype.cljs$spec$Spec$conform_STAR_$arity$2 = (function (_,x){
var self__ = this;
var ___$1 = this;
var ms = cljs.core.map.call(null,((function (___$1){
return (function (p1__26895_SHARP_,p2__26896_SHARP_){
return cljs.spec.dt.call(null,p1__26895_SHARP_,x,p2__26896_SHARP_);
});})(___$1))
,self__.preds,self__.forms);
if(cljs.core.truth_(cljs.core.some.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("cljs.spec","invalid","cljs.spec/invalid",551677537),null], null), null),ms))){
return new cljs.core.Keyword("cljs.spec","invalid","cljs.spec/invalid",551677537);
} else {
return cljs.core.apply.call(null,cljs.core.merge,ms);
}
});

cljs.spec.t_cljs$spec26906.prototype.cljs$spec$Spec$unform_STAR_$arity$2 = (function (_,x){
var self__ = this;
var ___$1 = this;
return cljs.core.apply.call(null,cljs.core.merge,cljs.core.map.call(null,((function (___$1){
return (function (p1__26897_SHARP_){
return cljs.spec.unform.call(null,p1__26897_SHARP_,x);
});})(___$1))
,cljs.core.reverse.call(null,self__.preds)));
});

cljs.spec.t_cljs$spec26906.prototype.cljs$spec$Spec$explain_STAR_$arity$5 = (function (_,path,via,in$,x){
var self__ = this;
var ___$1 = this;
return cljs.core.apply.call(null,cljs.core.concat,cljs.core.map.call(null,((function (___$1){
return (function (p1__26898_SHARP_,p2__26899_SHARP_){
return cljs.spec.explain_1.call(null,p1__26898_SHARP_,p2__26899_SHARP_,path,via,in$,x);
});})(___$1))
,self__.forms,self__.preds));
});

cljs.spec.t_cljs$spec26906.prototype.cljs$spec$Spec$gen_STAR_$arity$4 = (function (_,overrides,path,rmap){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.gfn)){
return self__.gfn.call(null);
} else {
return cljs.spec.impl.gen.fmap.call(null,((function (___$1){
return (function (p1__26900_SHARP_){
return cljs.core.apply.call(null,cljs.core.merge,p1__26900_SHARP_);
});})(___$1))
,cljs.core.apply.call(null,cljs.spec.impl.gen.tuple,cljs.core.map.call(null,((function (___$1){
return (function (p1__26901_SHARP_,p2__26902_SHARP_){
return cljs.spec.gensub.call(null,p1__26901_SHARP_,overrides,path,rmap,p2__26902_SHARP_);
});})(___$1))
,self__.preds,self__.forms)));
}
});

cljs.spec.t_cljs$spec26906.prototype.cljs$spec$Spec$with_gen_STAR_$arity$2 = (function (_,gfn__$1){
var self__ = this;
var ___$1 = this;
return cljs.spec.merge_spec_impl.call(null,self__.forms,self__.preds,gfn__$1);
});

cljs.spec.t_cljs$spec26906.prototype.cljs$spec$Spec$describe_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.spec","merge","cljs.spec/merge",-838422687,null)),self__.forms)));
});

cljs.spec.t_cljs$spec26906.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"forms","forms",-608443419,null),new cljs.core.Symbol(null,"preds","preds",150921777,null),new cljs.core.Symbol(null,"gfn","gfn",-1862918295,null),new cljs.core.Symbol(null,"meta26907","meta26907",-846203774,null)], null);
});

cljs.spec.t_cljs$spec26906.cljs$lang$type = true;

cljs.spec.t_cljs$spec26906.cljs$lang$ctorStr = "cljs.spec/t_cljs$spec26906";

cljs.spec.t_cljs$spec26906.cljs$lang$ctorPrWriter = (function (this__21801__auto__,writer__21802__auto__,opt__21803__auto__){
return cljs.core._write.call(null,writer__21802__auto__,"cljs.spec/t_cljs$spec26906");
});

cljs.spec.__GT_t_cljs$spec26906 = (function cljs$spec$merge_spec_impl_$___GT_t_cljs$spec26906(forms__$1,preds__$1,gfn__$1,meta26907){
return (new cljs.spec.t_cljs$spec26906(forms__$1,preds__$1,gfn__$1,meta26907));
});

}

return (new cljs.spec.t_cljs$spec26906(forms,preds,gfn,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Do not call this directly, use 'every', 'every-kv', 'coll-of' or 'map-of'
 */
cljs.spec.every_impl = (function cljs$spec$every_impl(var_args){
var args26913 = [];
var len__22365__auto___26938 = arguments.length;
var i__22366__auto___26939 = (0);
while(true){
if((i__22366__auto___26939 < len__22365__auto___26938)){
args26913.push((arguments[i__22366__auto___26939]));

var G__26940 = (i__22366__auto___26939 + (1));
i__22366__auto___26939 = G__26940;
continue;
} else {
}
break;
}

var G__26915 = args26913.length;
switch (G__26915) {
case 3:
return cljs.spec.every_impl.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.spec.every_impl.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26913.length)].join('')));

}
});

cljs.spec.every_impl.cljs$core$IFn$_invoke$arity$3 = (function (form,pred,opts){
return cljs.spec.every_impl.call(null,form,pred,opts,null);
});

cljs.spec.every_impl.cljs$core$IFn$_invoke$arity$4 = (function (form,pred,p__26916,gfn){
var map__26917 = p__26916;
var map__26917__$1 = ((((!((map__26917 == null)))?((((map__26917.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26917.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26917):map__26917);
var opts = map__26917__$1;
var max_count = cljs.core.get.call(null,map__26917__$1,new cljs.core.Keyword(null,"max-count","max-count",1539185305));
var kfn = cljs.core.get.call(null,map__26917__$1,new cljs.core.Keyword("cljs.spec","kfn","cljs.spec/kfn",293196937));
var gen_max = cljs.core.get.call(null,map__26917__$1,new cljs.core.Keyword(null,"gen-max","gen-max",-793680445),(20));
var conform_all = cljs.core.get.call(null,map__26917__$1,new cljs.core.Keyword("cljs.spec","conform-all","cljs.spec/conform-all",-1945029907));
var conform_keys = cljs.core.get.call(null,map__26917__$1,new cljs.core.Keyword(null,"conform-keys","conform-keys",-1800041814));
var distinct = cljs.core.get.call(null,map__26917__$1,new cljs.core.Keyword(null,"distinct","distinct",-1788879121));
var kind_form = cljs.core.get.call(null,map__26917__$1,new cljs.core.Keyword("cljs.spec","kind-form","cljs.spec/kind-form",997489303));
var gen_into = cljs.core.get.call(null,map__26917__$1,new cljs.core.Keyword(null,"into","into",-150836029),cljs.core.PersistentVector.EMPTY);
var count = cljs.core.get.call(null,map__26917__$1,new cljs.core.Keyword(null,"count","count",2139924085));
var min_count = cljs.core.get.call(null,map__26917__$1,new cljs.core.Keyword(null,"min-count","min-count",1594709013));
var kind = cljs.core.get.call(null,map__26917__$1,new cljs.core.Keyword(null,"kind","kind",-717265803));
var conform_into = gen_into;
var check_QMARK_ = ((function (conform_into,map__26917,map__26917__$1,opts,max_count,kfn,gen_max,conform_all,conform_keys,distinct,kind_form,gen_into,count,min_count,kind){
return (function (p1__26909_SHARP_){
return cljs.spec.valid_QMARK_.call(null,pred,p1__26909_SHARP_);
});})(conform_into,map__26917,map__26917__$1,opts,max_count,kfn,gen_max,conform_all,conform_keys,distinct,kind_form,gen_into,count,min_count,kind))
;
var kfn__$1 = (function (){var or__21149__auto__ = kfn;
if(cljs.core.truth_(or__21149__auto__)){
return or__21149__auto__;
} else {
return ((function (or__21149__auto__,conform_into,check_QMARK_,map__26917,map__26917__$1,opts,max_count,kfn,gen_max,conform_all,conform_keys,distinct,kind_form,gen_into,count,min_count,kind){
return (function (i,v){
return i;
});
;})(or__21149__auto__,conform_into,check_QMARK_,map__26917,map__26917__$1,opts,max_count,kfn,gen_max,conform_all,conform_keys,distinct,kind_form,gen_into,count,min_count,kind))
}
})();
var addcv = ((function (conform_into,check_QMARK_,kfn__$1,map__26917,map__26917__$1,opts,max_count,kfn,gen_max,conform_all,conform_keys,distinct,kind_form,gen_into,count,min_count,kind){
return (function (ret,i,v,cv){
return cljs.core.conj.call(null,ret,cv);
});})(conform_into,check_QMARK_,kfn__$1,map__26917,map__26917__$1,opts,max_count,kfn,gen_max,conform_all,conform_keys,distinct,kind_form,gen_into,count,min_count,kind))
;
var vec__26919 = ((cljs.core.map_QMARK_.call(null,kind))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.map_QMARK_,new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null)], null):((cljs.core.vector_QMARK_.call(null,kind))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.vector_QMARK_,new cljs.core.Symbol("cljs.core","vector?","cljs.core/vector?",-1550392028,null)], null):((cljs.core.list_QMARK_.call(null,kind))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list_QMARK_,new cljs.core.Symbol("cljs.core","list?","cljs.core/list?",-684796618,null)], null):((cljs.core.set_QMARK_.call(null,kind))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.set_QMARK_,new cljs.core.Symbol("cljs.core","set?","cljs.core/set?",-1176684971,null)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.seqable_QMARK_,new cljs.core.Symbol("cljs.core","seqable?","cljs.core/seqable?",-745394886,null)], null)
))));
var kindfn = cljs.core.nth.call(null,vec__26919,(0),null);
var kindform = cljs.core.nth.call(null,vec__26919,(1),null);
var cfns = ((function (conform_into,check_QMARK_,kfn__$1,addcv,vec__26919,kindfn,kindform,map__26917,map__26917__$1,opts,max_count,kfn,gen_max,conform_all,conform_keys,distinct,kind_form,gen_into,count,min_count,kind){
return (function (x){
if((cljs.core.vector_QMARK_.call(null,x)) && ((cljs.core.not.call(null,conform_into)) || (cljs.core.vector_QMARK_.call(null,conform_into)))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.identity,((function (conform_into,check_QMARK_,kfn__$1,addcv,vec__26919,kindfn,kindform,map__26917,map__26917__$1,opts,max_count,kfn,gen_max,conform_all,conform_keys,distinct,kind_form,gen_into,count,min_count,kind){
return (function (ret,i,v,cv){
if((v === cv)){
return ret;
} else {
return cljs.core.assoc.call(null,ret,i,cv);
}
});})(conform_into,check_QMARK_,kfn__$1,addcv,vec__26919,kindfn,kindform,map__26917,map__26917__$1,opts,max_count,kfn,gen_max,conform_all,conform_keys,distinct,kind_form,gen_into,count,min_count,kind))
,cljs.core.identity], null);
} else {
if(cljs.core.truth_((function (){var and__21137__auto__ = cljs.core.map_QMARK_.call(null,x);
if(and__21137__auto__){
var or__21149__auto__ = (function (){var and__21137__auto____$1 = kind;
if(cljs.core.truth_(and__21137__auto____$1)){
return cljs.core.not.call(null,conform_into);
} else {
return and__21137__auto____$1;
}
})();
if(cljs.core.truth_(or__21149__auto__)){
return or__21149__auto__;
} else {
return cljs.core.map_QMARK_.call(null,conform_into);
}
} else {
return and__21137__auto__;
}
})())){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.truth_(conform_keys)?cljs.core.empty:cljs.core.identity),((function (conform_into,check_QMARK_,kfn__$1,addcv,vec__26919,kindfn,kindform,map__26917,map__26917__$1,opts,max_count,kfn,gen_max,conform_all,conform_keys,distinct,kind_form,gen_into,count,min_count,kind){
return (function (ret,i,v,cv){
if(((v === cv)) && (cljs.core.not.call(null,conform_keys))){
return ret;
} else {
return cljs.core.assoc.call(null,ret,cljs.core.nth.call(null,(cljs.core.truth_(conform_keys)?cv:v),(0)),cljs.core.nth.call(null,cv,(1)));
}
});})(conform_into,check_QMARK_,kfn__$1,addcv,vec__26919,kindfn,kindform,map__26917,map__26917__$1,opts,max_count,kfn,gen_max,conform_all,conform_keys,distinct,kind_form,gen_into,count,min_count,kind))
,cljs.core.identity], null);
} else {
if((cljs.core.list_QMARK_.call(null,conform_into)) || (cljs.core.seq_QMARK_.call(null,conform_into)) || ((cljs.core.not.call(null,conform_into)) && ((cljs.core.list_QMARK_.call(null,x)) || (cljs.core.seq_QMARK_.call(null,x))))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.empty,addcv,cljs.core.reverse], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [((function (conform_into,check_QMARK_,kfn__$1,addcv,vec__26919,kindfn,kindform,map__26917,map__26917__$1,opts,max_count,kfn,gen_max,conform_all,conform_keys,distinct,kind_form,gen_into,count,min_count,kind){
return (function (p1__26910_SHARP_){
return cljs.core.empty.call(null,(function (){var or__21149__auto__ = conform_into;
if(cljs.core.truth_(or__21149__auto__)){
return or__21149__auto__;
} else {
return p1__26910_SHARP_;
}
})());
});})(conform_into,check_QMARK_,kfn__$1,addcv,vec__26919,kindfn,kindform,map__26917,map__26917__$1,opts,max_count,kfn,gen_max,conform_all,conform_keys,distinct,kind_form,gen_into,count,min_count,kind))
,addcv,cljs.core.identity], null);

}
}
}
});})(conform_into,check_QMARK_,kfn__$1,addcv,vec__26919,kindfn,kindform,map__26917,map__26917__$1,opts,max_count,kfn,gen_max,conform_all,conform_keys,distinct,kind_form,gen_into,count,min_count,kind))
;
if(typeof cljs.spec.t_cljs$spec26922 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.spec.Spec}
 * @implements {cljs.core.IWithMeta}
*/
cljs.spec.t_cljs$spec26922 = (function (form,max_count,check_QMARK_,gfn,gen_max,pred,vec__26919,kindform,conform_keys,kind_form,addcv,cfns,distinct,kindfn,p__26916,kfn,gen_into,count,min_count,opts,kind,conform_all,map__26917,conform_into,meta26923){
this.form = form;
this.max_count = max_count;
this.check_QMARK_ = check_QMARK_;
this.gfn = gfn;
this.gen_max = gen_max;
this.pred = pred;
this.vec__26919 = vec__26919;
this.kindform = kindform;
this.conform_keys = conform_keys;
this.kind_form = kind_form;
this.addcv = addcv;
this.cfns = cfns;
this.distinct = distinct;
this.kindfn = kindfn;
this.p__26916 = p__26916;
this.kfn = kfn;
this.gen_into = gen_into;
this.count = count;
this.min_count = min_count;
this.opts = opts;
this.kind = kind;
this.conform_all = conform_all;
this.map__26917 = map__26917;
this.conform_into = conform_into;
this.meta26923 = meta26923;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.spec.t_cljs$spec26922.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (conform_into,check_QMARK_,kfn__$1,addcv,vec__26919,kindfn,kindform,cfns,map__26917,map__26917__$1,opts,max_count,kfn,gen_max,conform_all,conform_keys,distinct,kind_form,gen_into,count,min_count,kind){
return (function (_26924,meta26923__$1){
var self__ = this;
var _26924__$1 = this;
return (new cljs.spec.t_cljs$spec26922(self__.form,self__.max_count,self__.check_QMARK_,self__.gfn,self__.gen_max,self__.pred,self__.vec__26919,self__.kindform,self__.conform_keys,self__.kind_form,self__.addcv,self__.cfns,self__.distinct,self__.kindfn,self__.p__26916,self__.kfn,self__.gen_into,self__.count,self__.min_count,self__.opts,self__.kind,self__.conform_all,self__.map__26917,self__.conform_into,meta26923__$1));
});})(conform_into,check_QMARK_,kfn__$1,addcv,vec__26919,kindfn,kindform,cfns,map__26917,map__26917__$1,opts,max_count,kfn,gen_max,conform_all,conform_keys,distinct,kind_form,gen_into,count,min_count,kind))
;

cljs.spec.t_cljs$spec26922.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (conform_into,check_QMARK_,kfn__$1,addcv,vec__26919,kindfn,kindform,cfns,map__26917,map__26917__$1,opts,max_count,kfn,gen_max,conform_all,conform_keys,distinct,kind_form,gen_into,count,min_count,kind){
return (function (_26924){
var self__ = this;
var _26924__$1 = this;
return self__.meta26923;
});})(conform_into,check_QMARK_,kfn__$1,addcv,vec__26919,kindfn,kindform,cfns,map__26917,map__26917__$1,opts,max_count,kfn,gen_max,conform_all,conform_keys,distinct,kind_form,gen_into,count,min_count,kind))
;

cljs.spec.t_cljs$spec26922.prototype.cljs$spec$Spec$ = cljs.core.PROTOCOL_SENTINEL;

cljs.spec.t_cljs$spec26922.prototype.cljs$spec$Spec$conform_STAR_$arity$2 = ((function (conform_into,check_QMARK_,kfn__$1,addcv,vec__26919,kindfn,kindform,cfns,map__26917,map__26917__$1,opts,max_count,kfn,gen_max,conform_all,conform_keys,distinct,kind_form,gen_into,count,min_count,kind){
return (function (_,x){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(cljs.spec.coll_prob.call(null,x,self__.kind,self__.kind_form,self__.distinct,self__.count,self__.min_count,self__.max_count,null,null,null))){
return new cljs.core.Keyword("cljs.spec","invalid","cljs.spec/invalid",551677537);
} else {
if(cljs.core.truth_(self__.conform_all)){
var vec__26925 = self__.cfns.call(null,x);
var init = cljs.core.nth.call(null,vec__26925,(0),null);
var add = cljs.core.nth.call(null,vec__26925,(1),null);
var complete = cljs.core.nth.call(null,vec__26925,(2),null);
var ret = init.call(null,x);
var i = (0);
var G__26931 = cljs.core.seq.call(null,x);
var vec__26932 = G__26931;
var seq__26933 = cljs.core.seq.call(null,vec__26932);
var first__26934 = cljs.core.first.call(null,seq__26933);
var seq__26933__$1 = cljs.core.next.call(null,seq__26933);
var v = first__26934;
var vs = seq__26933__$1;
var vseq = vec__26932;
var ret__$1 = ret;
var i__$1 = i;
var G__26931__$1 = G__26931;
while(true){
var ret__$2 = ret__$1;
var i__$2 = i__$1;
var vec__26935 = G__26931__$1;
var seq__26936 = cljs.core.seq.call(null,vec__26935);
var first__26937 = cljs.core.first.call(null,seq__26936);
var seq__26936__$1 = cljs.core.next.call(null,seq__26936);
var v__$1 = first__26937;
var vs__$1 = seq__26936__$1;
var vseq__$1 = vec__26935;
if(vseq__$1){
var cv = cljs.spec.dt.call(null,self__.pred,v__$1,null);
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec","invalid","cljs.spec/invalid",551677537),cv)){
return new cljs.core.Keyword("cljs.spec","invalid","cljs.spec/invalid",551677537);
} else {
var G__26942 = add.call(null,ret__$2,i__$2,v__$1,cv);
var G__26943 = (i__$2 + (1));
var G__26944 = vs__$1;
ret__$1 = G__26942;
i__$1 = G__26943;
G__26931__$1 = G__26944;
continue;
}
} else {
return complete.call(null,ret__$2);
}
break;
}
} else {
if(cljs.core.indexed_QMARK_.call(null,x)){
var step = (function (){var x__21482__auto__ = (1);
var y__21483__auto__ = cljs.core.long$.call(null,(cljs.core.count.call(null,x) / cljs.spec._STAR_coll_check_limit_STAR_));
return ((x__21482__auto__ > y__21483__auto__) ? x__21482__auto__ : y__21483__auto__);
})();
var i = (0);
while(true){
if((i >= cljs.core.count.call(null,x))){
return x;
} else {
if(cljs.core.truth_(self__.check_QMARK_.call(null,cljs.core.nth.call(null,x,i)))){
var G__26945 = (i + step);
i = G__26945;
continue;
} else {
return new cljs.core.Keyword("cljs.spec","invalid","cljs.spec/invalid",551677537);
}
}
break;
}
} else {
var or__21149__auto__ = (function (){var and__21137__auto__ = cljs.core.every_QMARK_.call(null,self__.check_QMARK_,cljs.core.take.call(null,cljs.spec._STAR_coll_check_limit_STAR_,x));
if(and__21137__auto__){
return x;
} else {
return and__21137__auto__;
}
})();
if(cljs.core.truth_(or__21149__auto__)){
return or__21149__auto__;
} else {
return new cljs.core.Keyword("cljs.spec","invalid","cljs.spec/invalid",551677537);
}
}

}
}
});})(conform_into,check_QMARK_,kfn__$1,addcv,vec__26919,kindfn,kindform,cfns,map__26917,map__26917__$1,opts,max_count,kfn,gen_max,conform_all,conform_keys,distinct,kind_form,gen_into,count,min_count,kind))
;

cljs.spec.t_cljs$spec26922.prototype.cljs$spec$Spec$unform_STAR_$arity$2 = ((function (conform_into,check_QMARK_,kfn__$1,addcv,vec__26919,kindfn,kindform,cfns,map__26917,map__26917__$1,opts,max_count,kfn,gen_max,conform_all,conform_keys,distinct,kind_form,gen_into,count,min_count,kind){
return (function (_,x){
var self__ = this;
var ___$1 = this;
return x;
});})(conform_into,check_QMARK_,kfn__$1,addcv,vec__26919,kindfn,kindform,cfns,map__26917,map__26917__$1,opts,max_count,kfn,gen_max,conform_all,conform_keys,distinct,kind_form,gen_into,count,min_count,kind))
;

cljs.spec.t_cljs$spec26922.prototype.cljs$spec$Spec$explain_STAR_$arity$5 = ((function (conform_into,check_QMARK_,kfn__$1,addcv,vec__26919,kindfn,kindform,cfns,map__26917,map__26917__$1,opts,max_count,kfn,gen_max,conform_all,conform_keys,distinct,kind_form,gen_into,count,min_count,kind){
return (function (_,path,via,in$,x){
var self__ = this;
var ___$1 = this;
var or__21149__auto__ = cljs.spec.coll_prob.call(null,x,self__.kind,self__.kind_form,self__.distinct,self__.count,self__.min_count,self__.max_count,path,via,in$);
if(cljs.core.truth_(or__21149__auto__)){
return or__21149__auto__;
} else {
return cljs.core.apply.call(null,cljs.core.concat,(cljs.core.truth_(self__.conform_all)?cljs.core.identity:cljs.core.partial.call(null,cljs.core.take,cljs.spec._STAR_coll_error_limit_STAR_)).call(null,cljs.core.keep.call(null,cljs.core.identity,cljs.core.map.call(null,((function (or__21149__auto__,___$1,conform_into,check_QMARK_,kfn__$1,addcv,vec__26919,kindfn,kindform,cfns,map__26917,map__26917__$1,opts,max_count,kfn,gen_max,conform_all,conform_keys,distinct,kind_form,gen_into,count,min_count,kind){
return (function (i,v){
var k = self__.kfn.call(null,i,v);
if(cljs.core.truth_(self__.check_QMARK_.call(null,v))){
return null;
} else {
var prob = cljs.spec.explain_1.call(null,self__.form,self__.pred,path,via,cljs.core.conj.call(null,in$,k),v);
return prob;
}
});})(or__21149__auto__,___$1,conform_into,check_QMARK_,kfn__$1,addcv,vec__26919,kindfn,kindform,cfns,map__26917,map__26917__$1,opts,max_count,kfn,gen_max,conform_all,conform_keys,distinct,kind_form,gen_into,count,min_count,kind))
,cljs.core.range.call(null),x))));
}
});})(conform_into,check_QMARK_,kfn__$1,addcv,vec__26919,kindfn,kindform,cfns,map__26917,map__26917__$1,opts,max_count,kfn,gen_max,conform_all,conform_keys,distinct,kind_form,gen_into,count,min_count,kind))
;

cljs.spec.t_cljs$spec26922.prototype.cljs$spec$Spec$gen_STAR_$arity$4 = ((function (conform_into,check_QMARK_,kfn__$1,addcv,vec__26919,kindfn,kindform,cfns,map__26917,map__26917__$1,opts,max_count,kfn,gen_max,conform_all,conform_keys,distinct,kind_form,gen_into,count,min_count,kind){
return (function (_,overrides,path,rmap){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.gfn)){
return self__.gfn.call(null);
} else {
var pgen = cljs.spec.gensub.call(null,self__.pred,overrides,path,rmap,self__.form);
return cljs.spec.impl.gen.bind.call(null,(cljs.core.truth_(self__.gen_into)?cljs.spec.impl.gen.return$.call(null,cljs.core.empty.call(null,self__.gen_into)):(cljs.core.truth_(self__.kind)?cljs.spec.impl.gen.fmap.call(null,((function (pgen,___$1,conform_into,check_QMARK_,kfn__$1,addcv,vec__26919,kindfn,kindform,cfns,map__26917,map__26917__$1,opts,max_count,kfn,gen_max,conform_all,conform_keys,distinct,kind_form,gen_into,count,min_count,kind){
return (function (p1__26911_SHARP_){
if(cljs.core.empty_QMARK_.call(null,p1__26911_SHARP_)){
return p1__26911_SHARP_;
} else {
return cljs.core.empty.call(null,p1__26911_SHARP_);
}
});})(pgen,___$1,conform_into,check_QMARK_,kfn__$1,addcv,vec__26919,kindfn,kindform,cfns,map__26917,map__26917__$1,opts,max_count,kfn,gen_max,conform_all,conform_keys,distinct,kind_form,gen_into,count,min_count,kind))
,cljs.spec.gensub.call(null,self__.kind,overrides,path,rmap,self__.form)):cljs.spec.impl.gen.return$.call(null,cljs.core.PersistentVector.EMPTY)
)),((function (pgen,___$1,conform_into,check_QMARK_,kfn__$1,addcv,vec__26919,kindfn,kindform,cfns,map__26917,map__26917__$1,opts,max_count,kfn,gen_max,conform_all,conform_keys,distinct,kind_form,gen_into,count,min_count,kind){
return (function (init){
return cljs.spec.impl.gen.fmap.call(null,((function (pgen,___$1,conform_into,check_QMARK_,kfn__$1,addcv,vec__26919,kindfn,kindform,cfns,map__26917,map__26917__$1,opts,max_count,kfn,gen_max,conform_all,conform_keys,distinct,kind_form,gen_into,count,min_count,kind){
return (function (p1__26912_SHARP_){
if(cljs.core.vector_QMARK_.call(null,init)){
return p1__26912_SHARP_;
} else {
return cljs.core.into.call(null,init,p1__26912_SHARP_);
}
});})(pgen,___$1,conform_into,check_QMARK_,kfn__$1,addcv,vec__26919,kindfn,kindform,cfns,map__26917,map__26917__$1,opts,max_count,kfn,gen_max,conform_all,conform_keys,distinct,kind_form,gen_into,count,min_count,kind))
,(cljs.core.truth_(self__.distinct)?(cljs.core.truth_(self__.count)?cljs.spec.impl.gen.vector_distinct.call(null,pgen,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"num-elements","num-elements",1960422107),self__.count,new cljs.core.Keyword(null,"max-tries","max-tries",-1824441792),(100)], null)):cljs.spec.impl.gen.vector_distinct.call(null,pgen,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"min-elements","min-elements",949370780),(function (){var or__21149__auto__ = self__.min_count;
if(cljs.core.truth_(or__21149__auto__)){
return or__21149__auto__;
} else {
return (0);
}
})(),new cljs.core.Keyword(null,"max-elements","max-elements",433034073),(function (){var or__21149__auto__ = self__.max_count;
if(cljs.core.truth_(or__21149__auto__)){
return or__21149__auto__;
} else {
var x__21482__auto__ = self__.gen_max;
var y__21483__auto__ = ((2) * (function (){var or__21149__auto____$1 = self__.min_count;
if(cljs.core.truth_(or__21149__auto____$1)){
return or__21149__auto____$1;
} else {
return (0);
}
})());
return ((x__21482__auto__ > y__21483__auto__) ? x__21482__auto__ : y__21483__auto__);
}
})(),new cljs.core.Keyword(null,"max-tries","max-tries",-1824441792),(100)], null))):(cljs.core.truth_(self__.count)?cljs.spec.impl.gen.vector.call(null,pgen,self__.count):(cljs.core.truth_((function (){var or__21149__auto__ = self__.min_count;
if(cljs.core.truth_(or__21149__auto__)){
return or__21149__auto__;
} else {
return self__.max_count;
}
})())?cljs.spec.impl.gen.vector.call(null,pgen,(function (){var or__21149__auto__ = self__.min_count;
if(cljs.core.truth_(or__21149__auto__)){
return or__21149__auto__;
} else {
return (0);
}
})(),(function (){var or__21149__auto__ = self__.max_count;
if(cljs.core.truth_(or__21149__auto__)){
return or__21149__auto__;
} else {
var x__21482__auto__ = self__.gen_max;
var y__21483__auto__ = ((2) * (function (){var or__21149__auto____$1 = self__.min_count;
if(cljs.core.truth_(or__21149__auto____$1)){
return or__21149__auto____$1;
} else {
return (0);
}
})());
return ((x__21482__auto__ > y__21483__auto__) ? x__21482__auto__ : y__21483__auto__);
}
})()):cljs.spec.impl.gen.vector.call(null,pgen,(0),self__.gen_max)
))));
});})(pgen,___$1,conform_into,check_QMARK_,kfn__$1,addcv,vec__26919,kindfn,kindform,cfns,map__26917,map__26917__$1,opts,max_count,kfn,gen_max,conform_all,conform_keys,distinct,kind_form,gen_into,count,min_count,kind))
);
}
});})(conform_into,check_QMARK_,kfn__$1,addcv,vec__26919,kindfn,kindform,cfns,map__26917,map__26917__$1,opts,max_count,kfn,gen_max,conform_all,conform_keys,distinct,kind_form,gen_into,count,min_count,kind))
;

cljs.spec.t_cljs$spec26922.prototype.cljs$spec$Spec$with_gen_STAR_$arity$2 = ((function (conform_into,check_QMARK_,kfn__$1,addcv,vec__26919,kindfn,kindform,cfns,map__26917,map__26917__$1,opts,max_count,kfn,gen_max,conform_all,conform_keys,distinct,kind_form,gen_into,count,min_count,kind){
return (function (_,gfn__$1){
var self__ = this;
var ___$1 = this;
return cljs.spec.every_impl.call(null,self__.form,self__.pred,self__.opts,gfn__$1);
});})(conform_into,check_QMARK_,kfn__$1,addcv,vec__26919,kindfn,kindform,cfns,map__26917,map__26917__$1,opts,max_count,kfn,gen_max,conform_all,conform_keys,distinct,kind_form,gen_into,count,min_count,kind))
;

cljs.spec.t_cljs$spec26922.prototype.cljs$spec$Spec$describe_STAR_$arity$1 = ((function (conform_into,check_QMARK_,kfn__$1,addcv,vec__26919,kindfn,kindform,cfns,map__26917,map__26917__$1,opts,max_count,kfn,gen_max,conform_all,conform_keys,distinct,kind_form,gen_into,count,min_count,kind){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.spec","every","cljs.spec/every",-1899705480,null)),(function (){var x__22078__auto__ = self__.form;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__22078__auto__);
})(),cljs.core.mapcat.call(null,cljs.core.identity,self__.opts))));
});})(conform_into,check_QMARK_,kfn__$1,addcv,vec__26919,kindfn,kindform,cfns,map__26917,map__26917__$1,opts,max_count,kfn,gen_max,conform_all,conform_keys,distinct,kind_form,gen_into,count,min_count,kind))
;

cljs.spec.t_cljs$spec26922.getBasis = ((function (conform_into,check_QMARK_,kfn__$1,addcv,vec__26919,kindfn,kindform,cfns,map__26917,map__26917__$1,opts,max_count,kfn,gen_max,conform_all,conform_keys,distinct,kind_form,gen_into,count,min_count,kind){
return (function (){
return new cljs.core.PersistentVector(null, 25, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"form","form",16469056,null),new cljs.core.Symbol(null,"max-count","max-count",-1115250464,null),new cljs.core.Symbol(null,"check?","check?",409539557,null),new cljs.core.Symbol(null,"gfn","gfn",-1862918295,null),new cljs.core.Symbol(null,"gen-max","gen-max",846851082,null),new cljs.core.Symbol(null,"pred","pred",-727012372,null),new cljs.core.Symbol(null,"vec__26919","vec__26919",724670029,null),new cljs.core.Symbol(null,"kindform","kindform",839835536,null),new cljs.core.Symbol(null,"conform-keys","conform-keys",-159510287,null),new cljs.core.Symbol(null,"kind-form","kind-form",1155997457,null),new cljs.core.Symbol(null,"addcv","addcv",-1552991247,null),new cljs.core.Symbol(null,"cfns","cfns",1335482066,null),new cljs.core.Symbol(null,"distinct","distinct",-148347594,null),new cljs.core.Symbol(null,"kindfn","kindfn",1062796440,null),new cljs.core.Symbol(null,"p__26916","p__26916",920155832,null),new cljs.core.Symbol(null,"kfn","kfn",729311001,null),new cljs.core.Symbol(null,"gen-into","gen-into",592640985,null),new cljs.core.Symbol(null,"count","count",-514511684,null),new cljs.core.Symbol(null,"min-count","min-count",-1059726756,null),new cljs.core.Symbol(null,"opts","opts",1795607228,null),new cljs.core.Symbol(null,"kind","kind",923265724,null),new cljs.core.Symbol(null,"conform-all","conform-all",-980179459,null),new cljs.core.Symbol(null,"map__26917","map__26917",-1334384578,null),new cljs.core.Symbol(null,"conform-into","conform-into",-1039113729,null),new cljs.core.Symbol(null,"meta26923","meta26923",-1992763042,null)], null);
});})(conform_into,check_QMARK_,kfn__$1,addcv,vec__26919,kindfn,kindform,cfns,map__26917,map__26917__$1,opts,max_count,kfn,gen_max,conform_all,conform_keys,distinct,kind_form,gen_into,count,min_count,kind))
;

cljs.spec.t_cljs$spec26922.cljs$lang$type = true;

cljs.spec.t_cljs$spec26922.cljs$lang$ctorStr = "cljs.spec/t_cljs$spec26922";

cljs.spec.t_cljs$spec26922.cljs$lang$ctorPrWriter = ((function (conform_into,check_QMARK_,kfn__$1,addcv,vec__26919,kindfn,kindform,cfns,map__26917,map__26917__$1,opts,max_count,kfn,gen_max,conform_all,conform_keys,distinct,kind_form,gen_into,count,min_count,kind){
return (function (this__21801__auto__,writer__21802__auto__,opt__21803__auto__){
return cljs.core._write.call(null,writer__21802__auto__,"cljs.spec/t_cljs$spec26922");
});})(conform_into,check_QMARK_,kfn__$1,addcv,vec__26919,kindfn,kindform,cfns,map__26917,map__26917__$1,opts,max_count,kfn,gen_max,conform_all,conform_keys,distinct,kind_form,gen_into,count,min_count,kind))
;

cljs.spec.__GT_t_cljs$spec26922 = ((function (conform_into,check_QMARK_,kfn__$1,addcv,vec__26919,kindfn,kindform,cfns,map__26917,map__26917__$1,opts,max_count,kfn,gen_max,conform_all,conform_keys,distinct,kind_form,gen_into,count,min_count,kind){
return (function cljs$spec$__GT_t_cljs$spec26922(form__$1,max_count__$1,check_QMARK___$1,gfn__$1,gen_max__$1,pred__$1,vec__26919__$1,kindform__$1,conform_keys__$1,kind_form__$1,addcv__$1,cfns__$1,distinct__$1,kindfn__$1,p__26916__$1,kfn__$2,gen_into__$1,count__$1,min_count__$1,opts__$1,kind__$1,conform_all__$1,map__26917__$2,conform_into__$1,meta26923){
return (new cljs.spec.t_cljs$spec26922(form__$1,max_count__$1,check_QMARK___$1,gfn__$1,gen_max__$1,pred__$1,vec__26919__$1,kindform__$1,conform_keys__$1,kind_form__$1,addcv__$1,cfns__$1,distinct__$1,kindfn__$1,p__26916__$1,kfn__$2,gen_into__$1,count__$1,min_count__$1,opts__$1,kind__$1,conform_all__$1,map__26917__$2,conform_into__$1,meta26923));
});})(conform_into,check_QMARK_,kfn__$1,addcv,vec__26919,kindfn,kindform,cfns,map__26917,map__26917__$1,opts,max_count,kfn,gen_max,conform_all,conform_keys,distinct,kind_form,gen_into,count,min_count,kind))
;

}

return (new cljs.spec.t_cljs$spec26922(form,max_count,check_QMARK_,gfn,gen_max,pred,vec__26919,kindform,conform_keys,kind_form,addcv,cfns,distinct,kindfn,p__26916,kfn__$1,gen_into,count,min_count,opts,kind,conform_all,map__26917__$1,conform_into,cljs.core.PersistentArrayMap.EMPTY));
});

cljs.spec.every_impl.cljs$lang$maxFixedArity = 4;

cljs.spec.accept = (function cljs$spec$accept(x){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("cljs.spec","op","cljs.spec/op",939378204),new cljs.core.Keyword("cljs.spec","accept","cljs.spec/accept",-1753298186),new cljs.core.Keyword(null,"ret","ret",-468222814),x], null);
});
cljs.spec.accept_QMARK_ = (function cljs$spec$accept_QMARK_(p__26946){
var map__26949 = p__26946;
var map__26949__$1 = ((((!((map__26949 == null)))?((((map__26949.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26949.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26949):map__26949);
var op = cljs.core.get.call(null,map__26949__$1,new cljs.core.Keyword("cljs.spec","op","cljs.spec/op",939378204));
return cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec","accept","cljs.spec/accept",-1753298186),op);
});
cljs.spec.pcat_STAR_ = (function cljs$spec$pcat_STAR_(p__26951){
var map__26963 = p__26951;
var map__26963__$1 = ((((!((map__26963 == null)))?((((map__26963.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26963.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26963):map__26963);
var vec__26964 = cljs.core.get.call(null,map__26963__$1,new cljs.core.Keyword(null,"ps","ps",292358046));
var seq__26965 = cljs.core.seq.call(null,vec__26964);
var first__26966 = cljs.core.first.call(null,seq__26965);
var seq__26965__$1 = cljs.core.next.call(null,seq__26965);
var p1 = first__26966;
var pr = seq__26965__$1;
var ps = vec__26964;
var vec__26967 = cljs.core.get.call(null,map__26963__$1,new cljs.core.Keyword(null,"ks","ks",1900203942));
var seq__26968 = cljs.core.seq.call(null,vec__26967);
var first__26969 = cljs.core.first.call(null,seq__26968);
var seq__26968__$1 = cljs.core.next.call(null,seq__26968);
var k1 = first__26969;
var kr = seq__26968__$1;
var ks = vec__26967;
var vec__26970 = cljs.core.get.call(null,map__26963__$1,new cljs.core.Keyword(null,"forms","forms",2045992350));
var seq__26971 = cljs.core.seq.call(null,vec__26970);
var first__26972 = cljs.core.first.call(null,seq__26971);
var seq__26971__$1 = cljs.core.next.call(null,seq__26971);
var f1 = first__26972;
var fr = seq__26971__$1;
var forms = vec__26970;
var ret = cljs.core.get.call(null,map__26963__$1,new cljs.core.Keyword(null,"ret","ret",-468222814));
var rep_PLUS_ = cljs.core.get.call(null,map__26963__$1,new cljs.core.Keyword(null,"rep+","rep+",-281382396));
if(cljs.core.every_QMARK_.call(null,cljs.core.identity,ps)){
if(cljs.core.truth_(cljs.spec.accept_QMARK_.call(null,p1))){
var rp = new cljs.core.Keyword(null,"ret","ret",-468222814).cljs$core$IFn$_invoke$arity$1(p1);
var ret__$1 = cljs.core.conj.call(null,ret,(cljs.core.truth_(ks)?cljs.core.PersistentArrayMap.fromArray([k1,rp], true, false):rp));
if(pr){
return cljs.spec.pcat_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"ps","ps",292358046),pr,new cljs.core.Keyword(null,"ks","ks",1900203942),kr,new cljs.core.Keyword(null,"forms","forms",2045992350),fr,new cljs.core.Keyword(null,"ret","ret",-468222814),ret__$1], null));
} else {
return cljs.spec.accept.call(null,ret__$1);
}
} else {
return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword("cljs.spec","op","cljs.spec/op",939378204),new cljs.core.Keyword("cljs.spec","pcat","cljs.spec/pcat",-1959753649),new cljs.core.Keyword(null,"ps","ps",292358046),ps,new cljs.core.Keyword(null,"ret","ret",-468222814),ret,new cljs.core.Keyword(null,"ks","ks",1900203942),ks,new cljs.core.Keyword(null,"forms","forms",2045992350),forms,new cljs.core.Keyword(null,"rep+","rep+",-281382396),rep_PLUS_], null);
}
} else {
return null;
}
});
cljs.spec.pcat = (function cljs$spec$pcat(var_args){
var args__22372__auto__ = [];
var len__22365__auto___26975 = arguments.length;
var i__22366__auto___26976 = (0);
while(true){
if((i__22366__auto___26976 < len__22365__auto___26975)){
args__22372__auto__.push((arguments[i__22366__auto___26976]));

var G__26977 = (i__22366__auto___26976 + (1));
i__22366__auto___26976 = G__26977;
continue;
} else {
}
break;
}

var argseq__22373__auto__ = ((((0) < args__22372__auto__.length))?(new cljs.core.IndexedSeq(args__22372__auto__.slice((0)),(0),null)):null);
return cljs.spec.pcat.cljs$core$IFn$_invoke$arity$variadic(argseq__22373__auto__);
});

cljs.spec.pcat.cljs$core$IFn$_invoke$arity$variadic = (function (ps){
return cljs.spec.pcat_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ps","ps",292358046),ps,new cljs.core.Keyword(null,"ret","ret",-468222814),cljs.core.PersistentVector.EMPTY], null));
});

cljs.spec.pcat.cljs$lang$maxFixedArity = (0);

cljs.spec.pcat.cljs$lang$applyTo = (function (seq26974){
return cljs.spec.pcat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq26974));
});

/**
 * Do not call this directly, use 'cat'
 */
cljs.spec.cat_impl = (function cljs$spec$cat_impl(ks,ps,forms){
return cljs.spec.pcat_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"ks","ks",1900203942),ks,new cljs.core.Keyword(null,"ps","ps",292358046),ps,new cljs.core.Keyword(null,"forms","forms",2045992350),forms,new cljs.core.Keyword(null,"ret","ret",-468222814),cljs.core.PersistentArrayMap.EMPTY], null));
});
cljs.spec.rep_STAR_ = (function cljs$spec$rep_STAR_(p1,p2,ret,splice,form){
if(cljs.core.truth_(p1)){
var r = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword("cljs.spec","op","cljs.spec/op",939378204),new cljs.core.Keyword("cljs.spec","rep","cljs.spec/rep",-556916491),new cljs.core.Keyword(null,"p2","p2",905500641),p2,new cljs.core.Keyword(null,"splice","splice",449588165),splice,new cljs.core.Keyword(null,"forms","forms",2045992350),form,new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.random_uuid.call(null)], null);
if(cljs.core.truth_(cljs.spec.accept_QMARK_.call(null,p1))){
return cljs.core.assoc.call(null,r,new cljs.core.Keyword(null,"p1","p1",-936759954),p2,new cljs.core.Keyword(null,"ret","ret",-468222814),cljs.core.conj.call(null,ret,new cljs.core.Keyword(null,"ret","ret",-468222814).cljs$core$IFn$_invoke$arity$1(p1)));
} else {
return cljs.core.assoc.call(null,r,new cljs.core.Keyword(null,"p1","p1",-936759954),p1,new cljs.core.Keyword(null,"ret","ret",-468222814),ret);
}
} else {
return null;
}
});
/**
 * Do not call this directly, use '*'
 */
cljs.spec.rep_impl = (function cljs$spec$rep_impl(form,p){
return cljs.spec.rep_STAR_.call(null,p,p,cljs.core.PersistentVector.EMPTY,false,form);
});
/**
 * Do not call this directly, use '+'
 */
cljs.spec.rep_PLUS_impl = (function cljs$spec$rep_PLUS_impl(form,p){
return cljs.spec.pcat_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"ps","ps",292358046),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p,cljs.spec.rep_STAR_.call(null,p,p,cljs.core.PersistentVector.EMPTY,true,form)], null),new cljs.core.Keyword(null,"forms","forms",2045992350),cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__22078__auto__ = form;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__22078__auto__);
})(),(function (){var x__22078__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.spec","*","cljs.spec/*",-858366320,null)),(function (){var x__22078__auto__ = form;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__22078__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__22078__auto__);
})())))),new cljs.core.Keyword(null,"ret","ret",-468222814),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"rep+","rep+",-281382396),form], null));
});
/**
 * Do not call this directly, use '&'
 */
cljs.spec.amp_impl = (function cljs$spec$amp_impl(re,preds,pred_forms){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("cljs.spec","op","cljs.spec/op",939378204),new cljs.core.Keyword("cljs.spec","amp","cljs.spec/amp",-1217943932),new cljs.core.Keyword(null,"p1","p1",-936759954),re,new cljs.core.Keyword(null,"ps","ps",292358046),preds,new cljs.core.Keyword(null,"forms","forms",2045992350),pred_forms], null);
});
cljs.spec.filter_alt = (function cljs$spec$filter_alt(ps,ks,forms,f){
if(cljs.core.truth_((function (){var or__21149__auto__ = ks;
if(cljs.core.truth_(or__21149__auto__)){
return or__21149__auto__;
} else {
return forms;
}
})())){
var pks = cljs.core.filter.call(null,(function (p1__26978_SHARP_){
return f.call(null,cljs.core.first.call(null,p1__26978_SHARP_));
}),cljs.core.map.call(null,cljs.core.vector,ps,(function (){var or__21149__auto__ = cljs.core.seq.call(null,ks);
if(or__21149__auto__){
return or__21149__auto__;
} else {
return cljs.core.repeat.call(null,null);
}
})(),(function (){var or__21149__auto__ = cljs.core.seq.call(null,forms);
if(or__21149__auto__){
return or__21149__auto__;
} else {
return cljs.core.repeat.call(null,null);
}
})()));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.seq.call(null,cljs.core.map.call(null,cljs.core.first,pks)),(cljs.core.truth_(ks)?cljs.core.seq.call(null,cljs.core.map.call(null,cljs.core.second,pks)):null),(cljs.core.truth_(forms)?cljs.core.seq.call(null,cljs.core.map.call(null,((function (pks){
return (function (p1__26979_SHARP_){
return cljs.core.nth.call(null,p1__26979_SHARP_,(2));
});})(pks))
,pks)):null)], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.seq.call(null,cljs.core.filter.call(null,f,ps)),ks,forms], null);
}
});
cljs.spec.alt_STAR_ = (function cljs$spec$alt_STAR_(ps,ks,forms){
var vec__26989 = cljs.spec.filter_alt.call(null,ps,ks,forms,cljs.core.identity);
var vec__26992 = cljs.core.nth.call(null,vec__26989,(0),null);
var seq__26993 = cljs.core.seq.call(null,vec__26992);
var first__26994 = cljs.core.first.call(null,seq__26993);
var seq__26993__$1 = cljs.core.next.call(null,seq__26993);
var p1 = first__26994;
var pr = seq__26993__$1;
var ps__$1 = vec__26992;
var vec__26995 = cljs.core.nth.call(null,vec__26989,(1),null);
var k1 = cljs.core.nth.call(null,vec__26995,(0),null);
var ks__$1 = vec__26995;
var forms__$1 = cljs.core.nth.call(null,vec__26989,(2),null);
if(cljs.core.truth_(ps__$1)){
var ret = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("cljs.spec","op","cljs.spec/op",939378204),new cljs.core.Keyword("cljs.spec","alt","cljs.spec/alt",-1483418131),new cljs.core.Keyword(null,"ps","ps",292358046),ps__$1,new cljs.core.Keyword(null,"ks","ks",1900203942),ks__$1,new cljs.core.Keyword(null,"forms","forms",2045992350),forms__$1], null);
if((pr == null)){
if(cljs.core.truth_(k1)){
if(cljs.core.truth_(cljs.spec.accept_QMARK_.call(null,p1))){
return cljs.spec.accept.call(null,cljs.spec.tagged_ret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k1,new cljs.core.Keyword(null,"ret","ret",-468222814).cljs$core$IFn$_invoke$arity$1(p1)], null)));
} else {
return ret;
}
} else {
return p1;
}
} else {
return ret;
}
} else {
return null;
}
});
cljs.spec.alts = (function cljs$spec$alts(var_args){
var args__22372__auto__ = [];
var len__22365__auto___26999 = arguments.length;
var i__22366__auto___27000 = (0);
while(true){
if((i__22366__auto___27000 < len__22365__auto___26999)){
args__22372__auto__.push((arguments[i__22366__auto___27000]));

var G__27001 = (i__22366__auto___27000 + (1));
i__22366__auto___27000 = G__27001;
continue;
} else {
}
break;
}

var argseq__22373__auto__ = ((((0) < args__22372__auto__.length))?(new cljs.core.IndexedSeq(args__22372__auto__.slice((0)),(0),null)):null);
return cljs.spec.alts.cljs$core$IFn$_invoke$arity$variadic(argseq__22373__auto__);
});

cljs.spec.alts.cljs$core$IFn$_invoke$arity$variadic = (function (ps){
return cljs.spec.alt_STAR_.call(null,ps,null,null);
});

cljs.spec.alts.cljs$lang$maxFixedArity = (0);

cljs.spec.alts.cljs$lang$applyTo = (function (seq26998){
return cljs.spec.alts.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq26998));
});

cljs.spec.alt2 = (function cljs$spec$alt2(p1,p2){
if(cljs.core.truth_((function (){var and__21137__auto__ = p1;
if(cljs.core.truth_(and__21137__auto__)){
return p2;
} else {
return and__21137__auto__;
}
})())){
return cljs.spec.alts.call(null,p1,p2);
} else {
var or__21149__auto__ = p1;
if(cljs.core.truth_(or__21149__auto__)){
return or__21149__auto__;
} else {
return p2;
}
}
});
/**
 * Do not call this directly, use 'alt'
 */
cljs.spec.alt_impl = (function cljs$spec$alt_impl(ks,ps,forms){
return cljs.core.assoc.call(null,cljs.spec.alt_STAR_.call(null,ps,ks,forms),new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.random_uuid.call(null));
});
/**
 * Do not call this directly, use '?'
 */
cljs.spec.maybe_impl = (function cljs$spec$maybe_impl(p,form){
return cljs.core.assoc.call(null,cljs.spec.alt_STAR_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p,cljs.spec.accept.call(null,new cljs.core.Keyword("cljs.spec","nil","cljs.spec/nil",1576652718))], null),null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [form,new cljs.core.Keyword("cljs.spec","nil","cljs.spec/nil",1576652718)], null)),new cljs.core.Keyword(null,"maybe","maybe",-314397560),form);
});
cljs.spec.noret_QMARK_ = (function cljs$spec$noret_QMARK_(p1,pret){
var or__21149__auto__ = cljs.core._EQ_.call(null,pret,new cljs.core.Keyword("cljs.spec","nil","cljs.spec/nil",1576652718));
if(or__21149__auto__){
return or__21149__auto__;
} else {
var or__21149__auto____$1 = (function (){var and__21137__auto__ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("cljs.spec","pcat","cljs.spec/pcat",-1959753649),null,new cljs.core.Keyword("cljs.spec","rep","cljs.spec/rep",-556916491),null], null), null).call(null,new cljs.core.Keyword("cljs.spec","op","cljs.spec/op",939378204).cljs$core$IFn$_invoke$arity$1(cljs.spec.reg_resolve_BANG_.call(null,p1)));
if(cljs.core.truth_(and__21137__auto__)){
return cljs.core.empty_QMARK_.call(null,pret);
} else {
return and__21137__auto__;
}
})();
if(cljs.core.truth_(or__21149__auto____$1)){
return or__21149__auto____$1;
} else {
return null;
}
}
});
cljs.spec.accept_nil_QMARK_ = (function cljs$spec$accept_nil_QMARK_(p){
var map__27005 = cljs.spec.reg_resolve_BANG_.call(null,p);
var map__27005__$1 = ((((!((map__27005 == null)))?((((map__27005.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27005.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27005):map__27005);
var p__$1 = map__27005__$1;
var op = cljs.core.get.call(null,map__27005__$1,new cljs.core.Keyword("cljs.spec","op","cljs.spec/op",939378204));
var ps = cljs.core.get.call(null,map__27005__$1,new cljs.core.Keyword(null,"ps","ps",292358046));
var p1 = cljs.core.get.call(null,map__27005__$1,new cljs.core.Keyword(null,"p1","p1",-936759954));
var p2 = cljs.core.get.call(null,map__27005__$1,new cljs.core.Keyword(null,"p2","p2",905500641));
var forms = cljs.core.get.call(null,map__27005__$1,new cljs.core.Keyword(null,"forms","forms",2045992350));
var G__27007 = op;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec","accept","cljs.spec/accept",-1753298186),G__27007)){
return true;
} else {
if(cljs.core._EQ_.call(null,null,G__27007)){
return null;
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec","amp","cljs.spec/amp",-1217943932),G__27007)){
var and__21137__auto__ = cljs.spec.accept_nil_QMARK_.call(null,p1);
if(cljs.core.truth_(and__21137__auto__)){
var or__21149__auto__ = cljs.spec.noret_QMARK_.call(null,p1,cljs.spec.preturn.call(null,p1));
if(cljs.core.truth_(or__21149__auto__)){
return or__21149__auto__;
} else {
var ret = cljs.spec.and_preds.call(null,cljs.spec.preturn.call(null,p1),ps,cljs.core.next.call(null,forms));
return cljs.core.not_EQ_.call(null,ret,new cljs.core.Keyword("cljs.spec","invalid","cljs.spec/invalid",551677537));
}
} else {
return and__21137__auto__;
}
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec","rep","cljs.spec/rep",-556916491),G__27007)){
var or__21149__auto__ = (p1 === p2);
if(or__21149__auto__){
return or__21149__auto__;
} else {
return cljs.spec.accept_nil_QMARK_.call(null,p1);
}
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec","pcat","cljs.spec/pcat",-1959753649),G__27007)){
return cljs.core.every_QMARK_.call(null,cljs.spec.accept_nil_QMARK_,ps);
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec","alt","cljs.spec/alt",-1483418131),G__27007)){
return cljs.core.some.call(null,cljs.spec.accept_nil_QMARK_,ps);
} else {
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(op)].join('')));

}
}
}
}
}
}
});
cljs.spec.preturn = (function cljs$spec$preturn(p){
var map__27026 = cljs.spec.reg_resolve_BANG_.call(null,p);
var map__27026__$1 = ((((!((map__27026 == null)))?((((map__27026.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27026.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27026):map__27026);
var p__$1 = map__27026__$1;
var vec__27027 = cljs.core.get.call(null,map__27026__$1,new cljs.core.Keyword(null,"ps","ps",292358046));
var seq__27028 = cljs.core.seq.call(null,vec__27027);
var first__27029 = cljs.core.first.call(null,seq__27028);
var seq__27028__$1 = cljs.core.next.call(null,seq__27028);
var p0 = first__27029;
var pr = seq__27028__$1;
var ps = vec__27027;
var vec__27030 = cljs.core.get.call(null,map__27026__$1,new cljs.core.Keyword(null,"ks","ks",1900203942));
var k = cljs.core.nth.call(null,vec__27030,(0),null);
var ks = vec__27030;
var op = cljs.core.get.call(null,map__27026__$1,new cljs.core.Keyword("cljs.spec","op","cljs.spec/op",939378204));
var p1 = cljs.core.get.call(null,map__27026__$1,new cljs.core.Keyword(null,"p1","p1",-936759954));
var ret = cljs.core.get.call(null,map__27026__$1,new cljs.core.Keyword(null,"ret","ret",-468222814));
var forms = cljs.core.get.call(null,map__27026__$1,new cljs.core.Keyword(null,"forms","forms",2045992350));
var G__27034 = op;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec","accept","cljs.spec/accept",-1753298186),G__27034)){
return ret;
} else {
if(cljs.core._EQ_.call(null,null,G__27034)){
return null;
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec","amp","cljs.spec/amp",-1217943932),G__27034)){
var pret = cljs.spec.preturn.call(null,p1);
if(cljs.core.truth_(cljs.spec.noret_QMARK_.call(null,p1,pret))){
return new cljs.core.Keyword("cljs.spec","nil","cljs.spec/nil",1576652718);
} else {
return cljs.spec.and_preds.call(null,pret,ps,forms);
}
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec","rep","cljs.spec/rep",-556916491),G__27034)){
return cljs.spec.add_ret.call(null,p1,ret,k);
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec","pcat","cljs.spec/pcat",-1959753649),G__27034)){
return cljs.spec.add_ret.call(null,p0,ret,k);
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec","alt","cljs.spec/alt",-1483418131),G__27034)){
var vec__27035 = cljs.spec.filter_alt.call(null,ps,ks,forms,cljs.spec.accept_nil_QMARK_);
var vec__27038 = cljs.core.nth.call(null,vec__27035,(0),null);
var p0__$1 = cljs.core.nth.call(null,vec__27038,(0),null);
var vec__27041 = cljs.core.nth.call(null,vec__27035,(1),null);
var k0 = cljs.core.nth.call(null,vec__27041,(0),null);
var r = (((p0__$1 == null))?new cljs.core.Keyword("cljs.spec","nil","cljs.spec/nil",1576652718):cljs.spec.preturn.call(null,p0__$1));
if(cljs.core.truth_(k0)){
return cljs.spec.tagged_ret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k0,r], null));
} else {
return r;
}
} else {
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(op)].join('')));

}
}
}
}
}
}
});
cljs.spec.op_unform = (function cljs$spec$op_unform(p,x){
var map__27060 = cljs.spec.reg_resolve_BANG_.call(null,p);
var map__27060__$1 = ((((!((map__27060 == null)))?((((map__27060.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27060.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27060):map__27060);
var p__$1 = map__27060__$1;
var vec__27061 = cljs.core.get.call(null,map__27060__$1,new cljs.core.Keyword(null,"ps","ps",292358046));
var seq__27062 = cljs.core.seq.call(null,vec__27061);
var first__27063 = cljs.core.first.call(null,seq__27062);
var seq__27062__$1 = cljs.core.next.call(null,seq__27062);
var p0 = first__27063;
var pr = seq__27062__$1;
var ps = vec__27061;
var vec__27064 = cljs.core.get.call(null,map__27060__$1,new cljs.core.Keyword(null,"ks","ks",1900203942));
var k = cljs.core.nth.call(null,vec__27064,(0),null);
var ks = vec__27064;
var op = cljs.core.get.call(null,map__27060__$1,new cljs.core.Keyword("cljs.spec","op","cljs.spec/op",939378204));
var p1 = cljs.core.get.call(null,map__27060__$1,new cljs.core.Keyword(null,"p1","p1",-936759954));
var ret = cljs.core.get.call(null,map__27060__$1,new cljs.core.Keyword(null,"ret","ret",-468222814));
var forms = cljs.core.get.call(null,map__27060__$1,new cljs.core.Keyword(null,"forms","forms",2045992350));
var rep_PLUS_ = cljs.core.get.call(null,map__27060__$1,new cljs.core.Keyword(null,"rep+","rep+",-281382396));
var maybe = cljs.core.get.call(null,map__27060__$1,new cljs.core.Keyword(null,"maybe","maybe",-314397560));
var kps = cljs.core.zipmap.call(null,ks,ps);
var G__27068 = op;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec","accept","cljs.spec/accept",-1753298186),G__27068)){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ret], null);
} else {
if(cljs.core._EQ_.call(null,null,G__27068)){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.unform.call(null,p__$1,x)], null);
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec","amp","cljs.spec/amp",-1217943932),G__27068)){
var px = cljs.core.reduce.call(null,((function (G__27068,map__27060,map__27060__$1,p__$1,vec__27061,seq__27062,first__27063,seq__27062__$1,p0,pr,ps,vec__27064,k,ks,op,p1,ret,forms,rep_PLUS_,maybe,kps){
return (function (p1__27045_SHARP_,p2__27044_SHARP_){
return cljs.spec.unform.call(null,p2__27044_SHARP_,p1__27045_SHARP_);
});})(G__27068,map__27060,map__27060__$1,p__$1,vec__27061,seq__27062,first__27063,seq__27062__$1,p0,pr,ps,vec__27064,k,ks,op,p1,ret,forms,rep_PLUS_,maybe,kps))
,x,cljs.core.reverse.call(null,ps));
return cljs.spec.op_unform.call(null,p1,px);
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec","rep","cljs.spec/rep",-556916491),G__27068)){
return cljs.core.mapcat.call(null,((function (G__27068,map__27060,map__27060__$1,p__$1,vec__27061,seq__27062,first__27063,seq__27062__$1,p0,pr,ps,vec__27064,k,ks,op,p1,ret,forms,rep_PLUS_,maybe,kps){
return (function (p1__27046_SHARP_){
return cljs.spec.op_unform.call(null,p1,p1__27046_SHARP_);
});})(G__27068,map__27060,map__27060__$1,p__$1,vec__27061,seq__27062,first__27063,seq__27062__$1,p0,pr,ps,vec__27064,k,ks,op,p1,ret,forms,rep_PLUS_,maybe,kps))
,x);
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec","pcat","cljs.spec/pcat",-1959753649),G__27068)){
if(cljs.core.truth_(rep_PLUS_)){
return cljs.core.mapcat.call(null,((function (G__27068,map__27060,map__27060__$1,p__$1,vec__27061,seq__27062,first__27063,seq__27062__$1,p0,pr,ps,vec__27064,k,ks,op,p1,ret,forms,rep_PLUS_,maybe,kps){
return (function (p1__27047_SHARP_){
return cljs.spec.op_unform.call(null,p0,p1__27047_SHARP_);
});})(G__27068,map__27060,map__27060__$1,p__$1,vec__27061,seq__27062,first__27063,seq__27062__$1,p0,pr,ps,vec__27064,k,ks,op,p1,ret,forms,rep_PLUS_,maybe,kps))
,x);
} else {
return cljs.core.mapcat.call(null,((function (G__27068,map__27060,map__27060__$1,p__$1,vec__27061,seq__27062,first__27063,seq__27062__$1,p0,pr,ps,vec__27064,k,ks,op,p1,ret,forms,rep_PLUS_,maybe,kps){
return (function (k__$1){
if(cljs.core.contains_QMARK_.call(null,x,k__$1)){
return cljs.spec.op_unform.call(null,kps.call(null,k__$1),cljs.core.get.call(null,x,k__$1));
} else {
return null;
}
});})(G__27068,map__27060,map__27060__$1,p__$1,vec__27061,seq__27062,first__27063,seq__27062__$1,p0,pr,ps,vec__27064,k,ks,op,p1,ret,forms,rep_PLUS_,maybe,kps))
,ks);
}
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec","alt","cljs.spec/alt",-1483418131),G__27068)){
if(cljs.core.truth_(maybe)){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.unform.call(null,p0,x)], null);
} else {
var vec__27069 = x;
var k__$1 = cljs.core.nth.call(null,vec__27069,(0),null);
var v = cljs.core.nth.call(null,vec__27069,(1),null);
return cljs.spec.op_unform.call(null,kps.call(null,k__$1),v);
}
} else {
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(op)].join('')));

}
}
}
}
}
}
});
cljs.spec.add_ret = (function cljs$spec$add_ret(p,r,k){
var map__27075 = cljs.spec.reg_resolve_BANG_.call(null,p);
var map__27075__$1 = ((((!((map__27075 == null)))?((((map__27075.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27075.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27075):map__27075);
var p__$1 = map__27075__$1;
var op = cljs.core.get.call(null,map__27075__$1,new cljs.core.Keyword("cljs.spec","op","cljs.spec/op",939378204));
var ps = cljs.core.get.call(null,map__27075__$1,new cljs.core.Keyword(null,"ps","ps",292358046));
var splice = cljs.core.get.call(null,map__27075__$1,new cljs.core.Keyword(null,"splice","splice",449588165));
var prop = ((function (map__27075,map__27075__$1,p__$1,op,ps,splice){
return (function (){
var ret = cljs.spec.preturn.call(null,p__$1);
if(cljs.core.empty_QMARK_.call(null,ret)){
return r;
} else {
return (cljs.core.truth_(splice)?cljs.core.into:cljs.core.conj).call(null,r,(cljs.core.truth_(k)?cljs.core.PersistentArrayMap.fromArray([k,ret], true, false):ret));
}
});})(map__27075,map__27075__$1,p__$1,op,ps,splice))
;
var G__27077 = op;
if(cljs.core._EQ_.call(null,null,G__27077)){
return r;
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec","alt","cljs.spec/alt",-1483418131),G__27077)){
var ret = cljs.spec.preturn.call(null,p__$1);
if(cljs.core._EQ_.call(null,ret,new cljs.core.Keyword("cljs.spec","nil","cljs.spec/nil",1576652718))){
return r;
} else {
return cljs.core.conj.call(null,r,(cljs.core.truth_(k)?cljs.core.PersistentArrayMap.fromArray([k,ret], true, false):ret));
}
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec","accept","cljs.spec/accept",-1753298186),G__27077)){
var ret = cljs.spec.preturn.call(null,p__$1);
if(cljs.core._EQ_.call(null,ret,new cljs.core.Keyword("cljs.spec","nil","cljs.spec/nil",1576652718))){
return r;
} else {
return cljs.core.conj.call(null,r,(cljs.core.truth_(k)?cljs.core.PersistentArrayMap.fromArray([k,ret], true, false):ret));
}
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec","amp","cljs.spec/amp",-1217943932),G__27077)){
var ret = cljs.spec.preturn.call(null,p__$1);
if(cljs.core._EQ_.call(null,ret,new cljs.core.Keyword("cljs.spec","nil","cljs.spec/nil",1576652718))){
return r;
} else {
return cljs.core.conj.call(null,r,(cljs.core.truth_(k)?cljs.core.PersistentArrayMap.fromArray([k,ret], true, false):ret));
}
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec","rep","cljs.spec/rep",-556916491),G__27077)){
return prop.call(null);
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec","pcat","cljs.spec/pcat",-1959753649),G__27077)){
return prop.call(null);
} else {
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(op)].join('')));

}
}
}
}
}
}
});
cljs.spec.deriv = (function cljs$spec$deriv(p,x){
var map__27088 = cljs.spec.reg_resolve_BANG_.call(null,p);
var map__27088__$1 = ((((!((map__27088 == null)))?((((map__27088.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27088.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27088):map__27088);
var p__$1 = map__27088__$1;
var vec__27089 = cljs.core.get.call(null,map__27088__$1,new cljs.core.Keyword(null,"ps","ps",292358046));
var seq__27090 = cljs.core.seq.call(null,vec__27089);
var first__27091 = cljs.core.first.call(null,seq__27090);
var seq__27090__$1 = cljs.core.next.call(null,seq__27090);
var p0 = first__27091;
var pr = seq__27090__$1;
var ps = vec__27089;
var vec__27092 = cljs.core.get.call(null,map__27088__$1,new cljs.core.Keyword(null,"ks","ks",1900203942));
var seq__27093 = cljs.core.seq.call(null,vec__27092);
var first__27094 = cljs.core.first.call(null,seq__27093);
var seq__27093__$1 = cljs.core.next.call(null,seq__27093);
var k0 = first__27094;
var kr = seq__27093__$1;
var ks = vec__27092;
var op = cljs.core.get.call(null,map__27088__$1,new cljs.core.Keyword("cljs.spec","op","cljs.spec/op",939378204));
var p1 = cljs.core.get.call(null,map__27088__$1,new cljs.core.Keyword(null,"p1","p1",-936759954));
var p2 = cljs.core.get.call(null,map__27088__$1,new cljs.core.Keyword(null,"p2","p2",905500641));
var ret = cljs.core.get.call(null,map__27088__$1,new cljs.core.Keyword(null,"ret","ret",-468222814));
var splice = cljs.core.get.call(null,map__27088__$1,new cljs.core.Keyword(null,"splice","splice",449588165));
var forms = cljs.core.get.call(null,map__27088__$1,new cljs.core.Keyword(null,"forms","forms",2045992350));
if(cljs.core.truth_(p__$1)){
var G__27096 = op;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec","accept","cljs.spec/accept",-1753298186),G__27096)){
return null;
} else {
if(cljs.core._EQ_.call(null,null,G__27096)){
var ret__$1 = cljs.spec.dt.call(null,p__$1,x,p__$1);
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec","invalid","cljs.spec/invalid",551677537),ret__$1)){
return null;
} else {
return cljs.spec.accept.call(null,ret__$1);
}
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec","amp","cljs.spec/amp",-1217943932),G__27096)){
var temp__6747__auto__ = cljs.spec.deriv.call(null,p1,x);
if(cljs.core.truth_(temp__6747__auto__)){
var p1__$1 = temp__6747__auto__;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec","accept","cljs.spec/accept",-1753298186),new cljs.core.Keyword("cljs.spec","op","cljs.spec/op",939378204).cljs$core$IFn$_invoke$arity$1(p1__$1))){
var ret__$1 = cljs.spec.and_preds.call(null,cljs.spec.preturn.call(null,p1__$1),ps,cljs.core.next.call(null,forms));
if(cljs.core._EQ_.call(null,ret__$1,new cljs.core.Keyword("cljs.spec","invalid","cljs.spec/invalid",551677537))){
return null;
} else {
return cljs.spec.accept.call(null,ret__$1);
}
} else {
return cljs.spec.amp_impl.call(null,p1__$1,ps,forms);
}
} else {
return null;
}
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec","pcat","cljs.spec/pcat",-1959753649),G__27096)){
return cljs.spec.alt2.call(null,cljs.spec.pcat_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"ps","ps",292358046),cljs.core.cons.call(null,cljs.spec.deriv.call(null,p0,x),pr),new cljs.core.Keyword(null,"ks","ks",1900203942),ks,new cljs.core.Keyword(null,"forms","forms",2045992350),forms,new cljs.core.Keyword(null,"ret","ret",-468222814),ret], null)),(cljs.core.truth_(cljs.spec.accept_nil_QMARK_.call(null,p0))?cljs.spec.deriv.call(null,cljs.spec.pcat_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"ps","ps",292358046),pr,new cljs.core.Keyword(null,"ks","ks",1900203942),kr,new cljs.core.Keyword(null,"forms","forms",2045992350),cljs.core.next.call(null,forms),new cljs.core.Keyword(null,"ret","ret",-468222814),cljs.spec.add_ret.call(null,p0,ret,k0)], null)),x):null));
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec","alt","cljs.spec/alt",-1483418131),G__27096)){
return cljs.spec.alt_STAR_.call(null,cljs.core.map.call(null,((function (G__27096,map__27088,map__27088__$1,p__$1,vec__27089,seq__27090,first__27091,seq__27090__$1,p0,pr,ps,vec__27092,seq__27093,first__27094,seq__27093__$1,k0,kr,ks,op,p1,p2,ret,splice,forms){
return (function (p1__27078_SHARP_){
return cljs.spec.deriv.call(null,p1__27078_SHARP_,x);
});})(G__27096,map__27088,map__27088__$1,p__$1,vec__27089,seq__27090,first__27091,seq__27090__$1,p0,pr,ps,vec__27092,seq__27093,first__27094,seq__27093__$1,k0,kr,ks,op,p1,p2,ret,splice,forms))
,ps),ks,forms);
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec","rep","cljs.spec/rep",-556916491),G__27096)){
return cljs.spec.alt2.call(null,cljs.spec.rep_STAR_.call(null,cljs.spec.deriv.call(null,p1,x),p2,ret,splice,forms),(cljs.core.truth_(cljs.spec.accept_nil_QMARK_.call(null,p1))?cljs.spec.deriv.call(null,cljs.spec.rep_STAR_.call(null,p2,p2,cljs.spec.add_ret.call(null,p1,ret,null),splice,forms),x):null));
} else {
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(op)].join('')));

}
}
}
}
}
}
} else {
return null;
}
});
cljs.spec.op_describe = (function cljs$spec$op_describe(p){
var map__27100 = cljs.spec.reg_resolve_BANG_.call(null,p);
var map__27100__$1 = ((((!((map__27100 == null)))?((((map__27100.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27100.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27100):map__27100);
var p__$1 = map__27100__$1;
var op = cljs.core.get.call(null,map__27100__$1,new cljs.core.Keyword("cljs.spec","op","cljs.spec/op",939378204));
var ps = cljs.core.get.call(null,map__27100__$1,new cljs.core.Keyword(null,"ps","ps",292358046));
var ks = cljs.core.get.call(null,map__27100__$1,new cljs.core.Keyword(null,"ks","ks",1900203942));
var forms = cljs.core.get.call(null,map__27100__$1,new cljs.core.Keyword(null,"forms","forms",2045992350));
var splice = cljs.core.get.call(null,map__27100__$1,new cljs.core.Keyword(null,"splice","splice",449588165));
var p1 = cljs.core.get.call(null,map__27100__$1,new cljs.core.Keyword(null,"p1","p1",-936759954));
var rep_PLUS_ = cljs.core.get.call(null,map__27100__$1,new cljs.core.Keyword(null,"rep+","rep+",-281382396));
var maybe = cljs.core.get.call(null,map__27100__$1,new cljs.core.Keyword(null,"maybe","maybe",-314397560));
if(cljs.core.truth_(p__$1)){
var G__27102 = op;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec","accept","cljs.spec/accept",-1753298186),G__27102)){
return null;
} else {
if(cljs.core._EQ_.call(null,null,G__27102)){
return p__$1;
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec","amp","cljs.spec/amp",-1217943932),G__27102)){
return cljs.core.list_STAR_.call(null,new cljs.core.Symbol("clojure.spec","&","clojure.spec/&",-770935491,null),cljs.spec.op_describe.call(null,p1),forms);
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec","pcat","cljs.spec/pcat",-1959753649),G__27102)){
if(cljs.core.truth_(rep_PLUS_)){
return cljs.core._conj.call(null,(function (){var x__22078__auto__ = rep_PLUS_;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__22078__auto__);
})(),new cljs.core.Symbol("cljs.spec","+","cljs.spec/+",-342318319,null));
} else {
return cljs.core.cons.call(null,new cljs.core.Symbol("cljs.spec","cat","cljs.spec/cat",850003863,null),cljs.core.mapcat.call(null,cljs.core.vector,(function (){var or__21149__auto__ = cljs.core.seq.call(null,ks);
if(or__21149__auto__){
return or__21149__auto__;
} else {
return cljs.core.repeat.call(null,new cljs.core.Keyword(null,"_","_",1453416199));
}
})(),forms));
}
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec","alt","cljs.spec/alt",-1483418131),G__27102)){
if(cljs.core.truth_(maybe)){
return cljs.core._conj.call(null,(function (){var x__22078__auto__ = maybe;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__22078__auto__);
})(),new cljs.core.Symbol("cljs.spec","?","cljs.spec/?",-1542560017,null));
} else {
return cljs.core.cons.call(null,new cljs.core.Symbol("cljs.spec","alt","cljs.spec/alt",157113396,null),cljs.core.mapcat.call(null,cljs.core.vector,ks,forms));
}
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec","rep","cljs.spec/rep",-556916491),G__27102)){
var x__22078__auto__ = (cljs.core.truth_(splice)?new cljs.core.Symbol("cljs.spec","+","cljs.spec/+",-342318319,null):new cljs.core.Symbol("cljs.spec","*","cljs.spec/*",-858366320,null));
return cljs.core._conj.call(null,(function (){var x__22078__auto____$1 = forms;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__22078__auto____$1);
})(),x__22078__auto__);
} else {
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(op)].join('')));

}
}
}
}
}
}
} else {
return null;
}
});
cljs.spec.op_explain = (function cljs$spec$op_explain(form,p,path,via,in$,input){
var vec__27116 = input;
var x = cljs.core.nth.call(null,vec__27116,(0),null);
var input__$1 = vec__27116;
var map__27119 = cljs.spec.reg_resolve_BANG_.call(null,p);
var map__27119__$1 = ((((!((map__27119 == null)))?((((map__27119.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27119.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27119):map__27119);
var p__$1 = map__27119__$1;
var op = cljs.core.get.call(null,map__27119__$1,new cljs.core.Keyword("cljs.spec","op","cljs.spec/op",939378204));
var ps = cljs.core.get.call(null,map__27119__$1,new cljs.core.Keyword(null,"ps","ps",292358046));
var ks = cljs.core.get.call(null,map__27119__$1,new cljs.core.Keyword(null,"ks","ks",1900203942));
var forms = cljs.core.get.call(null,map__27119__$1,new cljs.core.Keyword(null,"forms","forms",2045992350));
var splice = cljs.core.get.call(null,map__27119__$1,new cljs.core.Keyword(null,"splice","splice",449588165));
var p1 = cljs.core.get.call(null,map__27119__$1,new cljs.core.Keyword(null,"p1","p1",-936759954));
var p2 = cljs.core.get.call(null,map__27119__$1,new cljs.core.Keyword(null,"p2","p2",905500641));
var via__$1 = (function (){var temp__6745__auto__ = cljs.spec.spec_name.call(null,p__$1);
if(cljs.core.truth_(temp__6745__auto__)){
var name = temp__6745__auto__;
return cljs.core.conj.call(null,via,name);
} else {
return via;
}
})();
var insufficient = ((function (vec__27116,x,input__$1,map__27119,map__27119__$1,p__$1,op,ps,ks,forms,splice,p1,p2,via__$1){
return (function (path__$1,form__$1){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"path","path",-188191168),path__$1,new cljs.core.Keyword(null,"reason","reason",-2070751759),"Insufficient input",new cljs.core.Keyword(null,"pred","pred",1927423397),cljs.spec.abbrev.call(null,form__$1),new cljs.core.Keyword(null,"val","val",128701612),cljs.core.List.EMPTY,new cljs.core.Keyword(null,"via","via",-1904457336),via__$1,new cljs.core.Keyword(null,"in","in",-1531184865),in$], null)], null);
});})(vec__27116,x,input__$1,map__27119,map__27119__$1,p__$1,op,ps,ks,forms,splice,p1,p2,via__$1))
;
if(cljs.core.truth_(p__$1)){
var G__27121 = op;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec","accept","cljs.spec/accept",-1753298186),G__27121)){
return null;
} else {
if(cljs.core._EQ_.call(null,null,G__27121)){
if(cljs.core.empty_QMARK_.call(null,input__$1)){
return insufficient.call(null,path,form);
} else {
return cljs.spec.explain_1.call(null,form,p__$1,path,via__$1,in$,x);
}
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec","amp","cljs.spec/amp",-1217943932),G__27121)){
if(cljs.core.empty_QMARK_.call(null,input__$1)){
if(cljs.core.truth_(cljs.spec.accept_nil_QMARK_.call(null,p1))){
return cljs.spec.explain_pred_list.call(null,forms,ps,path,via__$1,in$,cljs.spec.preturn.call(null,p1));
} else {
return insufficient.call(null,path,cljs.spec.op_describe.call(null,p1));
}
} else {
var temp__6745__auto__ = cljs.spec.deriv.call(null,p1,x);
if(cljs.core.truth_(temp__6745__auto__)){
var p1__$1 = temp__6745__auto__;
return cljs.spec.explain_pred_list.call(null,forms,ps,path,via__$1,in$,cljs.spec.preturn.call(null,p1__$1));
} else {
return cljs.spec.op_explain.call(null,cljs.spec.op_describe.call(null,p1),p1,path,via__$1,in$,input__$1);
}
}
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec","pcat","cljs.spec/pcat",-1959753649),G__27121)){
var pkfs = cljs.core.map.call(null,cljs.core.vector,ps,(function (){var or__21149__auto__ = cljs.core.seq.call(null,ks);
if(or__21149__auto__){
return or__21149__auto__;
} else {
return cljs.core.repeat.call(null,null);
}
})(),(function (){var or__21149__auto__ = cljs.core.seq.call(null,forms);
if(or__21149__auto__){
return or__21149__auto__;
} else {
return cljs.core.repeat.call(null,null);
}
})());
var vec__27122 = ((cljs.core._EQ_.call(null,(1),cljs.core.count.call(null,pkfs)))?cljs.core.first.call(null,pkfs):cljs.core.first.call(null,cljs.core.remove.call(null,((function (pkfs,G__27121,vec__27116,x,input__$1,map__27119,map__27119__$1,p__$1,op,ps,ks,forms,splice,p1,p2,via__$1,insufficient){
return (function (p__27125){
var vec__27126 = p__27125;
var p__$2 = cljs.core.nth.call(null,vec__27126,(0),null);
return cljs.spec.accept_nil_QMARK_.call(null,p__$2);
});})(pkfs,G__27121,vec__27116,x,input__$1,map__27119,map__27119__$1,p__$1,op,ps,ks,forms,splice,p1,p2,via__$1,insufficient))
,pkfs)));
var pred = cljs.core.nth.call(null,vec__27122,(0),null);
var k = cljs.core.nth.call(null,vec__27122,(1),null);
var form__$1 = cljs.core.nth.call(null,vec__27122,(2),null);
var path__$1 = (cljs.core.truth_(k)?cljs.core.conj.call(null,path,k):path);
var form__$2 = (function (){var or__21149__auto__ = form__$1;
if(cljs.core.truth_(or__21149__auto__)){
return or__21149__auto__;
} else {
return cljs.spec.op_describe.call(null,pred);
}
})();
if((cljs.core.empty_QMARK_.call(null,input__$1)) && (cljs.core.not.call(null,pred))){
return insufficient.call(null,path__$1,form__$2);
} else {
return cljs.spec.op_explain.call(null,form__$2,pred,path__$1,via__$1,in$,input__$1);
}
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec","alt","cljs.spec/alt",-1483418131),G__27121)){
if(cljs.core.empty_QMARK_.call(null,input__$1)){
return insufficient.call(null,path,cljs.spec.op_describe.call(null,p__$1));
} else {
return cljs.core.apply.call(null,cljs.core.concat,cljs.core.map.call(null,((function (G__27121,vec__27116,x,input__$1,map__27119,map__27119__$1,p__$1,op,ps,ks,forms,splice,p1,p2,via__$1,insufficient){
return (function (k,form__$1,pred){
return cljs.spec.op_explain.call(null,(function (){var or__21149__auto__ = form__$1;
if(cljs.core.truth_(or__21149__auto__)){
return or__21149__auto__;
} else {
return cljs.spec.op_describe.call(null,pred);
}
})(),pred,(cljs.core.truth_(k)?cljs.core.conj.call(null,path,k):path),via__$1,in$,input__$1);
});})(G__27121,vec__27116,x,input__$1,map__27119,map__27119__$1,p__$1,op,ps,ks,forms,splice,p1,p2,via__$1,insufficient))
,(function (){var or__21149__auto__ = cljs.core.seq.call(null,ks);
if(or__21149__auto__){
return or__21149__auto__;
} else {
return cljs.core.repeat.call(null,null);
}
})(),(function (){var or__21149__auto__ = cljs.core.seq.call(null,forms);
if(or__21149__auto__){
return or__21149__auto__;
} else {
return cljs.core.repeat.call(null,null);
}
})(),ps));
}
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec","rep","cljs.spec/rep",-556916491),G__27121)){
return cljs.spec.op_explain.call(null,(((p1 === p2))?forms:cljs.spec.op_describe.call(null,p1)),p1,path,via__$1,in$,input__$1);
} else {
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(op)].join('')));

}
}
}
}
}
}
} else {
return null;
}
});
cljs.spec.re_gen = (function cljs$spec$re_gen(p,overrides,path,rmap,f){
var map__27135 = cljs.spec.reg_resolve_BANG_.call(null,p);
var map__27135__$1 = ((((!((map__27135 == null)))?((((map__27135.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27135.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27135):map__27135);
var p__$1 = map__27135__$1;
var ps = cljs.core.get.call(null,map__27135__$1,new cljs.core.Keyword(null,"ps","ps",292358046));
var forms = cljs.core.get.call(null,map__27135__$1,new cljs.core.Keyword(null,"forms","forms",2045992350));
var p2 = cljs.core.get.call(null,map__27135__$1,new cljs.core.Keyword(null,"p2","p2",905500641));
var ret = cljs.core.get.call(null,map__27135__$1,new cljs.core.Keyword(null,"ret","ret",-468222814));
var splice = cljs.core.get.call(null,map__27135__$1,new cljs.core.Keyword(null,"splice","splice",449588165));
var ks = cljs.core.get.call(null,map__27135__$1,new cljs.core.Keyword(null,"ks","ks",1900203942));
var p1 = cljs.core.get.call(null,map__27135__$1,new cljs.core.Keyword(null,"p1","p1",-936759954));
var gfn = cljs.core.get.call(null,map__27135__$1,new cljs.core.Keyword("cljs.spec","gfn","cljs.spec/gfn",-432034727));
var id = cljs.core.get.call(null,map__27135__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var op = cljs.core.get.call(null,map__27135__$1,new cljs.core.Keyword("cljs.spec","op","cljs.spec/op",939378204));
var rmap__$1 = (cljs.core.truth_(id)?cljs.spec.inck.call(null,rmap,id):rmap);
var ggens = ((function (map__27135,map__27135__$1,p__$1,ps,forms,p2,ret,splice,ks,p1,gfn,id,op,rmap__$1){
return (function (ps__$1,ks__$1,forms__$1){
var gen = ((function (map__27135,map__27135__$1,p__$1,ps,forms,p2,ret,splice,ks,p1,gfn,id,op,rmap__$1){
return (function (p__$2,k,f__$1){
if(cljs.core.truth_((function (){var and__21137__auto__ = rmap__$1;
if(cljs.core.truth_(and__21137__auto__)){
var and__21137__auto____$1 = id;
if(cljs.core.truth_(and__21137__auto____$1)){
var and__21137__auto____$2 = k;
if(cljs.core.truth_(and__21137__auto____$2)){
return cljs.spec.recur_limit_QMARK_.call(null,rmap__$1,id,path,k);
} else {
return and__21137__auto____$2;
}
} else {
return and__21137__auto____$1;
}
} else {
return and__21137__auto__;
}
})())){
return null;
} else {
if(cljs.core.truth_(id)){
return cljs.spec.impl.gen.delay_impl.call(null,(new cljs.core.Delay(((function (map__27135,map__27135__$1,p__$1,ps,forms,p2,ret,splice,ks,p1,gfn,id,op,rmap__$1){
return (function (){
return cljs.spec.re_gen.call(null,p__$2,overrides,(cljs.core.truth_(k)?cljs.core.conj.call(null,path,k):path),rmap__$1,(function (){var or__21149__auto__ = f__$1;
if(cljs.core.truth_(or__21149__auto__)){
return or__21149__auto__;
} else {
return p__$2;
}
})());
});})(map__27135,map__27135__$1,p__$1,ps,forms,p2,ret,splice,ks,p1,gfn,id,op,rmap__$1))
,null)));
} else {
return cljs.spec.re_gen.call(null,p__$2,overrides,(cljs.core.truth_(k)?cljs.core.conj.call(null,path,k):path),rmap__$1,(function (){var or__21149__auto__ = f__$1;
if(cljs.core.truth_(or__21149__auto__)){
return or__21149__auto__;
} else {
return p__$2;
}
})());
}
}
});})(map__27135,map__27135__$1,p__$1,ps,forms,p2,ret,splice,ks,p1,gfn,id,op,rmap__$1))
;
return cljs.core.map.call(null,gen,ps__$1,(function (){var or__21149__auto__ = cljs.core.seq.call(null,ks__$1);
if(or__21149__auto__){
return or__21149__auto__;
} else {
return cljs.core.repeat.call(null,null);
}
})(),(function (){var or__21149__auto__ = cljs.core.seq.call(null,forms__$1);
if(or__21149__auto__){
return or__21149__auto__;
} else {
return cljs.core.repeat.call(null,null);
}
})());
});})(map__27135,map__27135__$1,p__$1,ps,forms,p2,ret,splice,ks,p1,gfn,id,op,rmap__$1))
;
var or__21149__auto__ = (function (){var temp__6747__auto__ = cljs.core.get.call(null,overrides,path);
if(cljs.core.truth_(temp__6747__auto__)){
var g = temp__6747__auto__;
var G__27138 = op;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"accept","accept",1874130431),G__27138)){
return cljs.spec.impl.gen.fmap.call(null,cljs.core.vector,g);
} else {
if(cljs.core._EQ_.call(null,null,G__27138)){
return cljs.spec.impl.gen.fmap.call(null,cljs.core.vector,g);
} else {
return g;

}
}
} else {
return null;
}
})();
if(cljs.core.truth_(or__21149__auto__)){
return or__21149__auto__;
} else {
var or__21149__auto____$1 = (cljs.core.truth_(gfn)?gfn.call(null):null);
if(cljs.core.truth_(or__21149__auto____$1)){
return or__21149__auto____$1;
} else {
if(cljs.core.truth_(p__$1)){
var G__27139 = op;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec","accept","cljs.spec/accept",-1753298186),G__27139)){
if(cljs.core._EQ_.call(null,ret,new cljs.core.Keyword("cljs.spec","nil","cljs.spec/nil",1576652718))){
return cljs.spec.impl.gen.return$.call(null,cljs.core.PersistentVector.EMPTY);
} else {
return cljs.spec.impl.gen.return$.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ret], null));
}
} else {
if(cljs.core._EQ_.call(null,null,G__27139)){
var temp__6747__auto__ = cljs.spec.gensub.call(null,p__$1,overrides,path,rmap__$1,f);
if(cljs.core.truth_(temp__6747__auto__)){
var g = temp__6747__auto__;
return cljs.spec.impl.gen.fmap.call(null,cljs.core.vector,g);
} else {
return null;
}
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec","amp","cljs.spec/amp",-1217943932),G__27139)){
return cljs.spec.re_gen.call(null,p1,overrides,path,rmap__$1,cljs.spec.op_describe.call(null,p1));
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec","pcat","cljs.spec/pcat",-1959753649),G__27139)){
var gens = ggens.call(null,ps,ks,forms);
if(cljs.core.every_QMARK_.call(null,cljs.core.identity,gens)){
return cljs.core.apply.call(null,cljs.spec.impl.gen.cat,gens);
} else {
return null;
}
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec","alt","cljs.spec/alt",-1483418131),G__27139)){
var gens = cljs.core.remove.call(null,cljs.core.nil_QMARK_,ggens.call(null,ps,ks,forms));
if(cljs.core.empty_QMARK_.call(null,gens)){
return null;
} else {
return cljs.spec.impl.gen.one_of.call(null,gens);
}
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec","rep","cljs.spec/rep",-556916491),G__27139)){
if(cljs.core.truth_(cljs.spec.recur_limit_QMARK_.call(null,rmap__$1,id,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [id], null),id))){
return cljs.spec.impl.gen.return$.call(null,cljs.core.PersistentVector.EMPTY);
} else {
var temp__6747__auto__ = cljs.spec.re_gen.call(null,p2,overrides,path,rmap__$1,forms);
if(cljs.core.truth_(temp__6747__auto__)){
var g = temp__6747__auto__;
return cljs.spec.impl.gen.fmap.call(null,((function (g,temp__6747__auto__,G__27139,or__21149__auto____$1,or__21149__auto__,map__27135,map__27135__$1,p__$1,ps,forms,p2,ret,splice,ks,p1,gfn,id,op,rmap__$1,ggens){
return (function (p1__27129_SHARP_){
return cljs.core.apply.call(null,cljs.core.concat,p1__27129_SHARP_);
});})(g,temp__6747__auto__,G__27139,or__21149__auto____$1,or__21149__auto__,map__27135,map__27135__$1,p__$1,ps,forms,p2,ret,splice,ks,p1,gfn,id,op,rmap__$1,ggens))
,cljs.spec.impl.gen.vector.call(null,g));
} else {
return null;
}
}
} else {
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(op)].join('')));

}
}
}
}
}
}
} else {
return null;
}
}
}
});
cljs.spec.re_conform = (function cljs$spec$re_conform(p,p__27140){
while(true){
var vec__27144 = p__27140;
var seq__27145 = cljs.core.seq.call(null,vec__27144);
var first__27146 = cljs.core.first.call(null,seq__27145);
var seq__27145__$1 = cljs.core.next.call(null,seq__27145);
var x = first__27146;
var xs = seq__27145__$1;
var data = vec__27144;
if(cljs.core.empty_QMARK_.call(null,data)){
if(cljs.core.truth_(cljs.spec.accept_nil_QMARK_.call(null,p))){
var ret = cljs.spec.preturn.call(null,p);
if(cljs.core._EQ_.call(null,ret,new cljs.core.Keyword("cljs.spec","nil","cljs.spec/nil",1576652718))){
return null;
} else {
return ret;
}
} else {
return new cljs.core.Keyword("cljs.spec","invalid","cljs.spec/invalid",551677537);
}
} else {
var temp__6745__auto__ = cljs.spec.deriv.call(null,p,x);
if(cljs.core.truth_(temp__6745__auto__)){
var dp = temp__6745__auto__;
var G__27147 = dp;
var G__27148 = xs;
p = G__27147;
p__27140 = G__27148;
continue;
} else {
return new cljs.core.Keyword("cljs.spec","invalid","cljs.spec/invalid",551677537);
}
}
break;
}
});
cljs.spec.re_explain = (function cljs$spec$re_explain(path,via,in$,re,input){
var p = re;
var G__27162 = input;
var vec__27163 = G__27162;
var seq__27164 = cljs.core.seq.call(null,vec__27163);
var first__27165 = cljs.core.first.call(null,seq__27164);
var seq__27164__$1 = cljs.core.next.call(null,seq__27164);
var x = first__27165;
var xs = seq__27164__$1;
var data = vec__27163;
var i = (0);
var p__$1 = p;
var G__27162__$1 = G__27162;
var i__$1 = i;
while(true){
var p__$2 = p__$1;
var vec__27166 = G__27162__$1;
var seq__27167 = cljs.core.seq.call(null,vec__27166);
var first__27168 = cljs.core.first.call(null,seq__27167);
var seq__27167__$1 = cljs.core.next.call(null,seq__27167);
var x__$1 = first__27168;
var xs__$1 = seq__27167__$1;
var data__$1 = vec__27166;
var i__$2 = i__$1;
if(cljs.core.empty_QMARK_.call(null,data__$1)){
if(cljs.core.truth_(cljs.spec.accept_nil_QMARK_.call(null,p__$2))){
return null;
} else {
return cljs.spec.op_explain.call(null,cljs.spec.op_describe.call(null,p__$2),p__$2,path,via,in$,null);
}
} else {
var temp__6745__auto__ = cljs.spec.deriv.call(null,p__$2,x__$1);
if(cljs.core.truth_(temp__6745__auto__)){
var dp = temp__6745__auto__;
var G__27169 = dp;
var G__27170 = xs__$1;
var G__27171 = (i__$2 + (1));
p__$1 = G__27169;
G__27162__$1 = G__27170;
i__$1 = G__27171;
continue;
} else {
if(cljs.core.truth_(cljs.spec.accept_QMARK_.call(null,p__$2))){
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec","op","cljs.spec/op",939378204).cljs$core$IFn$_invoke$arity$1(p__$2),new cljs.core.Keyword("cljs.spec","pcat","cljs.spec/pcat",-1959753649))){
return cljs.spec.op_explain.call(null,cljs.spec.op_describe.call(null,p__$2),p__$2,path,via,cljs.core.conj.call(null,in$,i__$2),cljs.core.seq.call(null,data__$1));
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"path","path",-188191168),path,new cljs.core.Keyword(null,"reason","reason",-2070751759),"Extra input",new cljs.core.Keyword(null,"pred","pred",1927423397),cljs.spec.abbrev.call(null,cljs.spec.op_describe.call(null,re)),new cljs.core.Keyword(null,"val","val",128701612),data__$1,new cljs.core.Keyword(null,"via","via",-1904457336),via,new cljs.core.Keyword(null,"in","in",-1531184865),cljs.core.conj.call(null,in$,i__$2)], null)], null);
}
} else {
var or__21149__auto__ = cljs.spec.op_explain.call(null,cljs.spec.op_describe.call(null,p__$2),p__$2,path,via,cljs.core.conj.call(null,in$,i__$2),cljs.core.seq.call(null,data__$1));
if(cljs.core.truth_(or__21149__auto__)){
return or__21149__auto__;
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"path","path",-188191168),path,new cljs.core.Keyword(null,"reason","reason",-2070751759),"Extra input",new cljs.core.Keyword(null,"pred","pred",1927423397),cljs.spec.abbrev.call(null,cljs.spec.op_describe.call(null,p__$2)),new cljs.core.Keyword(null,"val","val",128701612),data__$1,new cljs.core.Keyword(null,"via","via",-1904457336),via,new cljs.core.Keyword(null,"in","in",-1531184865),cljs.core.conj.call(null,in$,i__$2)], null)], null);
}
}
}
}
break;
}
});
/**
 * Do not call this directly, use 'spec' with a regex op argument
 */
cljs.spec.regex_spec_impl = (function cljs$spec$regex_spec_impl(re,gfn){
if(typeof cljs.spec.t_cljs$spec27175 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.spec.Spec}
 * @implements {cljs.core.IWithMeta}
*/
cljs.spec.t_cljs$spec27175 = (function (re,gfn,meta27176){
this.re = re;
this.gfn = gfn;
this.meta27176 = meta27176;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.spec.t_cljs$spec27175.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_27177,meta27176__$1){
var self__ = this;
var _27177__$1 = this;
return (new cljs.spec.t_cljs$spec27175(self__.re,self__.gfn,meta27176__$1));
});

cljs.spec.t_cljs$spec27175.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_27177){
var self__ = this;
var _27177__$1 = this;
return self__.meta27176;
});

cljs.spec.t_cljs$spec27175.prototype.cljs$spec$Spec$ = cljs.core.PROTOCOL_SENTINEL;

cljs.spec.t_cljs$spec27175.prototype.cljs$spec$Spec$conform_STAR_$arity$2 = (function (_,x){
var self__ = this;
var ___$1 = this;
if(((x == null)) || (cljs.core.coll_QMARK_.call(null,x))){
return cljs.spec.re_conform.call(null,self__.re,cljs.core.seq.call(null,x));
} else {
return new cljs.core.Keyword("cljs.spec","invalid","cljs.spec/invalid",551677537);
}
});

cljs.spec.t_cljs$spec27175.prototype.cljs$spec$Spec$unform_STAR_$arity$2 = (function (_,x){
var self__ = this;
var ___$1 = this;
return cljs.spec.op_unform.call(null,self__.re,x);
});

cljs.spec.t_cljs$spec27175.prototype.cljs$spec$Spec$explain_STAR_$arity$5 = (function (_,path,via,in$,x){
var self__ = this;
var ___$1 = this;
if(((x == null)) || (cljs.core.coll_QMARK_.call(null,x))){
return cljs.spec.re_explain.call(null,path,via,in$,self__.re,cljs.core.seq.call(null,x));
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"path","path",-188191168),path,new cljs.core.Keyword(null,"pred","pred",1927423397),cljs.spec.abbrev.call(null,cljs.spec.op_describe.call(null,self__.re)),new cljs.core.Keyword(null,"val","val",128701612),x,new cljs.core.Keyword(null,"via","via",-1904457336),via,new cljs.core.Keyword(null,"in","in",-1531184865),in$], null)], null);
}
});

cljs.spec.t_cljs$spec27175.prototype.cljs$spec$Spec$gen_STAR_$arity$4 = (function (_,overrides,path,rmap){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.gfn)){
return self__.gfn.call(null);
} else {
return cljs.spec.re_gen.call(null,self__.re,overrides,path,rmap,cljs.spec.op_describe.call(null,self__.re));
}
});

cljs.spec.t_cljs$spec27175.prototype.cljs$spec$Spec$with_gen_STAR_$arity$2 = (function (_,gfn__$1){
var self__ = this;
var ___$1 = this;
return cljs.spec.regex_spec_impl.call(null,self__.re,gfn__$1);
});

cljs.spec.t_cljs$spec27175.prototype.cljs$spec$Spec$describe_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.spec.op_describe.call(null,self__.re);
});

cljs.spec.t_cljs$spec27175.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"re","re",1869207729,null),new cljs.core.Symbol(null,"gfn","gfn",-1862918295,null),new cljs.core.Symbol(null,"meta27176","meta27176",-1725826133,null)], null);
});

cljs.spec.t_cljs$spec27175.cljs$lang$type = true;

cljs.spec.t_cljs$spec27175.cljs$lang$ctorStr = "cljs.spec/t_cljs$spec27175";

cljs.spec.t_cljs$spec27175.cljs$lang$ctorPrWriter = (function (this__21801__auto__,writer__21802__auto__,opt__21803__auto__){
return cljs.core._write.call(null,writer__21802__auto__,"cljs.spec/t_cljs$spec27175");
});

cljs.spec.__GT_t_cljs$spec27175 = (function cljs$spec$regex_spec_impl_$___GT_t_cljs$spec27175(re__$1,gfn__$1,meta27176){
return (new cljs.spec.t_cljs$spec27175(re__$1,gfn__$1,meta27176));
});

}

return (new cljs.spec.t_cljs$spec27175(re,gfn,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.spec.call_valid_QMARK_ = (function cljs$spec$call_valid_QMARK_(f,specs,args){
var cargs = cljs.spec.conform.call(null,new cljs.core.Keyword(null,"args","args",1315556576).cljs$core$IFn$_invoke$arity$1(specs),args);
if(cljs.core._EQ_.call(null,cargs,new cljs.core.Keyword("cljs.spec","invalid","cljs.spec/invalid",551677537))){
return null;
} else {
var ret = cljs.core.apply.call(null,f,args);
var cret = cljs.spec.conform.call(null,new cljs.core.Keyword(null,"ret","ret",-468222814).cljs$core$IFn$_invoke$arity$1(specs),ret);
var and__21137__auto__ = cljs.core.not_EQ_.call(null,cret,new cljs.core.Keyword("cljs.spec","invalid","cljs.spec/invalid",551677537));
if(and__21137__auto__){
if(cljs.core.truth_(new cljs.core.Keyword(null,"fn","fn",-1175266204).cljs$core$IFn$_invoke$arity$1(specs))){
return cljs.spec.valid_QMARK_.call(null,new cljs.core.Keyword(null,"fn","fn",-1175266204).cljs$core$IFn$_invoke$arity$1(specs),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"args","args",1315556576),cargs,new cljs.core.Keyword(null,"ret","ret",-468222814),cret], null));
} else {
return true;
}
} else {
return and__21137__auto__;
}
}
});
/**
 * returns f if valid, else smallest
 */
cljs.spec.validate_fn = (function cljs$spec$validate_fn(f,specs,iters){
var g = cljs.spec.gen.call(null,new cljs.core.Keyword(null,"args","args",1315556576).cljs$core$IFn$_invoke$arity$1(specs));
var prop = cljs.spec.impl.gen.for_all_STAR_.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [g], null),((function (g){
return (function (p1__27178_SHARP_){
return cljs.spec.call_valid_QMARK_.call(null,f,specs,p1__27178_SHARP_);
});})(g))
);
var ret = cljs.spec.impl.gen.quick_check.call(null,iters,prop);
var temp__6745__auto__ = new cljs.core.Keyword(null,"smallest","smallest",-152623883).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"shrunk","shrunk",-2041664412).cljs$core$IFn$_invoke$arity$1(ret));
if(cljs.core.truth_(temp__6745__auto__)){
var vec__27182 = temp__6745__auto__;
var smallest = cljs.core.nth.call(null,vec__27182,(0),null);
return smallest;
} else {
return f;
}
});
/**
 * Do not call this directly, use 'fspec'
 */
cljs.spec.fspec_impl = (function cljs$spec$fspec_impl(argspec,aform,retspec,rform,fnspec,fform,gfn){
var specs = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"args","args",1315556576),argspec,new cljs.core.Keyword(null,"ret","ret",-468222814),retspec,new cljs.core.Keyword(null,"fn","fn",-1175266204),fnspec], null);
if(typeof cljs.spec.t_cljs$spec27191 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.spec.Spec}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.ILookup}
*/
cljs.spec.t_cljs$spec27191 = (function (argspec,aform,retspec,rform,fnspec,fform,gfn,specs,meta27192){
this.argspec = argspec;
this.aform = aform;
this.retspec = retspec;
this.rform = rform;
this.fnspec = fnspec;
this.fform = fform;
this.gfn = gfn;
this.specs = specs;
this.meta27192 = meta27192;
this.cljs$lang$protocol_mask$partition0$ = 393472;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.spec.t_cljs$spec27191.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (specs){
return (function (_27193,meta27192__$1){
var self__ = this;
var _27193__$1 = this;
return (new cljs.spec.t_cljs$spec27191(self__.argspec,self__.aform,self__.retspec,self__.rform,self__.fnspec,self__.fform,self__.gfn,self__.specs,meta27192__$1));
});})(specs))
;

cljs.spec.t_cljs$spec27191.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (specs){
return (function (_27193){
var self__ = this;
var _27193__$1 = this;
return self__.meta27192;
});})(specs))
;

cljs.spec.t_cljs$spec27191.prototype.cljs$core$ILookup$_lookup$arity$2 = ((function (specs){
return (function (this$,k){
var self__ = this;
var this$__$1 = this;
return cljs.core.get.call(null,self__.specs,k);
});})(specs))
;

cljs.spec.t_cljs$spec27191.prototype.cljs$core$ILookup$_lookup$arity$3 = ((function (specs){
return (function (_,k,not_found){
var self__ = this;
var ___$1 = this;
return cljs.core.get.call(null,self__.specs,k,not_found);
});})(specs))
;

cljs.spec.t_cljs$spec27191.prototype.cljs$spec$Spec$ = cljs.core.PROTOCOL_SENTINEL;

cljs.spec.t_cljs$spec27191.prototype.cljs$spec$Spec$conform_STAR_$arity$2 = ((function (specs){
return (function (_,f){
var self__ = this;
var ___$1 = this;
if(cljs.core.ifn_QMARK_.call(null,f)){
if((f === cljs.spec.validate_fn.call(null,f,self__.specs,cljs.spec._STAR_fspec_iterations_STAR_))){
return f;
} else {
return new cljs.core.Keyword("cljs.spec","invalid","cljs.spec/invalid",551677537);
}
} else {
return new cljs.core.Keyword("cljs.spec","invalid","cljs.spec/invalid",551677537);
}
});})(specs))
;

cljs.spec.t_cljs$spec27191.prototype.cljs$spec$Spec$unform_STAR_$arity$2 = ((function (specs){
return (function (_,f){
var self__ = this;
var ___$1 = this;
return f;
});})(specs))
;

cljs.spec.t_cljs$spec27191.prototype.cljs$spec$Spec$explain_STAR_$arity$5 = ((function (specs){
return (function (_,path,via,in$,f){
var self__ = this;
var ___$1 = this;
if(cljs.core.ifn_QMARK_.call(null,f)){
var args = cljs.spec.validate_fn.call(null,f,self__.specs,(100));
if((f === args)){
return null;
} else {
var ret = (function (){try{return cljs.core.apply.call(null,f,args);
}catch (e27194){if((e27194 instanceof Error)){
var t = e27194;
return t;
} else {
throw e27194;

}
}})();
if((ret instanceof Error)){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"path","path",-188191168),path,new cljs.core.Keyword(null,"pred","pred",1927423397),cljs.core.list(new cljs.core.Symbol(null,"apply","apply",-1334050276,null),new cljs.core.Symbol(null,"fn","fn",465265323,null)),new cljs.core.Keyword(null,"val","val",128701612),args,new cljs.core.Keyword(null,"reason","reason",-2070751759),ret.message,new cljs.core.Keyword(null,"via","via",-1904457336),via,new cljs.core.Keyword(null,"in","in",-1531184865),in$], null)], null);
} else {
var cret = cljs.spec.dt.call(null,self__.retspec,ret,self__.rform);
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec","invalid","cljs.spec/invalid",551677537),cret)){
return cljs.spec.explain_1.call(null,self__.rform,self__.retspec,cljs.core.conj.call(null,path,new cljs.core.Keyword(null,"ret","ret",-468222814)),via,in$,ret);
} else {
if(cljs.core.truth_(self__.fnspec)){
var cargs = cljs.spec.conform.call(null,self__.argspec,args);
return cljs.spec.explain_1.call(null,self__.fform,self__.fnspec,cljs.core.conj.call(null,path,new cljs.core.Keyword(null,"fn","fn",-1175266204)),via,in$,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"args","args",1315556576),cargs,new cljs.core.Keyword(null,"ret","ret",-468222814),cret], null));
} else {
return null;
}
}
}
}
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"path","path",-188191168),path,new cljs.core.Keyword(null,"pred","pred",1927423397),new cljs.core.Symbol(null,"ifn?","ifn?",-2106461064,null),new cljs.core.Keyword(null,"val","val",128701612),f,new cljs.core.Keyword(null,"via","via",-1904457336),via,new cljs.core.Keyword(null,"in","in",-1531184865),in$], null)], null);
}
});})(specs))
;

cljs.spec.t_cljs$spec27191.prototype.cljs$spec$Spec$gen_STAR_$arity$4 = ((function (specs){
return (function (_,overrides,___$1,___$2){
var self__ = this;
var ___$3 = this;
if(cljs.core.truth_(self__.gfn)){
return self__.gfn.call(null);
} else {
return cljs.spec.impl.gen.return$.call(null,((function (___$3,specs){
return (function() { 
var G__27197__delegate = function (args){
if(cljs.core.truth_(cljs.spec.valid_QMARK_.call(null,self__.argspec,args))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str((function (){var sb__22236__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR_27195_27198 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR_27196_27199 = cljs.core._STAR_print_fn_STAR_;
cljs.core._STAR_print_newline_STAR_ = true;

cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_newline_STAR_27195_27198,_STAR_print_fn_STAR_27196_27199,sb__22236__auto__,___$3,specs){
return (function (x__22237__auto__){
return sb__22236__auto__.append(x__22237__auto__);
});})(_STAR_print_newline_STAR_27195_27198,_STAR_print_fn_STAR_27196_27199,sb__22236__auto__,___$3,specs))
;

try{cljs.spec.explain.call(null,self__.argspec,args);
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_27196_27199;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_27195_27198;
}
return [cljs.core.str(sb__22236__auto__)].join('');
})()),cljs.core.str("\n"),cljs.core.str("(valid? argspec args)")].join('')));
}

return cljs.spec.impl.gen.generate.call(null,cljs.spec.gen.call(null,self__.retspec,overrides));
};
var G__27197 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__27200__i = 0, G__27200__a = new Array(arguments.length -  0);
while (G__27200__i < G__27200__a.length) {G__27200__a[G__27200__i] = arguments[G__27200__i + 0]; ++G__27200__i;}
  args = new cljs.core.IndexedSeq(G__27200__a,0);
} 
return G__27197__delegate.call(this,args);};
G__27197.cljs$lang$maxFixedArity = 0;
G__27197.cljs$lang$applyTo = (function (arglist__27201){
var args = cljs.core.seq(arglist__27201);
return G__27197__delegate(args);
});
G__27197.cljs$core$IFn$_invoke$arity$variadic = G__27197__delegate;
return G__27197;
})()
;})(___$3,specs))
);
}
});})(specs))
;

cljs.spec.t_cljs$spec27191.prototype.cljs$spec$Spec$with_gen_STAR_$arity$2 = ((function (specs){
return (function (_,gfn__$1){
var self__ = this;
var ___$1 = this;
return cljs.spec.fspec_impl.call(null,self__.argspec,self__.aform,self__.retspec,self__.rform,self__.fnspec,self__.fform,gfn__$1);
});})(specs))
;

cljs.spec.t_cljs$spec27191.prototype.cljs$spec$Spec$describe_STAR_$arity$1 = ((function (specs){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.spec","fspec","cljs.spec/fspec",982220571,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"args","args",1315556576)),(function (){var x__22078__auto__ = self__.aform;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__22078__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"ret","ret",-468222814)),(function (){var x__22078__auto__ = self__.rform;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__22078__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"fn","fn",-1175266204)),(function (){var x__22078__auto__ = self__.fform;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__22078__auto__);
})())));
});})(specs))
;

cljs.spec.t_cljs$spec27191.getBasis = ((function (specs){
return (function (){
return new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"argspec","argspec",-1207762746,null),new cljs.core.Symbol(null,"aform","aform",531303525,null),new cljs.core.Symbol(null,"retspec","retspec",-920025354,null),new cljs.core.Symbol(null,"rform","rform",-1420499912,null),new cljs.core.Symbol(null,"fnspec","fnspec",-1865712406,null),new cljs.core.Symbol(null,"fform","fform",-176049972,null),new cljs.core.Symbol(null,"gfn","gfn",-1862918295,null),new cljs.core.Symbol(null,"specs","specs",-1227865028,null),new cljs.core.Symbol(null,"meta27192","meta27192",-523791390,null)], null);
});})(specs))
;

cljs.spec.t_cljs$spec27191.cljs$lang$type = true;

cljs.spec.t_cljs$spec27191.cljs$lang$ctorStr = "cljs.spec/t_cljs$spec27191";

cljs.spec.t_cljs$spec27191.cljs$lang$ctorPrWriter = ((function (specs){
return (function (this__21801__auto__,writer__21802__auto__,opt__21803__auto__){
return cljs.core._write.call(null,writer__21802__auto__,"cljs.spec/t_cljs$spec27191");
});})(specs))
;

cljs.spec.__GT_t_cljs$spec27191 = ((function (specs){
return (function cljs$spec$fspec_impl_$___GT_t_cljs$spec27191(argspec__$1,aform__$1,retspec__$1,rform__$1,fnspec__$1,fform__$1,gfn__$1,specs__$1,meta27192){
return (new cljs.spec.t_cljs$spec27191(argspec__$1,aform__$1,retspec__$1,rform__$1,fnspec__$1,fform__$1,gfn__$1,specs__$1,meta27192));
});})(specs))
;

}

return (new cljs.spec.t_cljs$spec27191(argspec,aform,retspec,rform,fnspec,fform,gfn,specs,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.spec.def_impl.call(null,new cljs.core.Keyword("cljs.spec","kvs->map","cljs.spec/kvs->map",-1189105441),cljs.core.list(new cljs.core.Symbol("cljs.spec","conformer","cljs.spec/conformer",-236330417,null),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__27202#","p1__27202#",-40316965,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","zipmap","cljs.core/zipmap",-1902130674,null),cljs.core.list(new cljs.core.Symbol("cljs.core","map","cljs.core/map",-338988913,null),new cljs.core.Keyword("cljs.spec","k","cljs.spec/k",668466950),new cljs.core.Symbol(null,"p1__27202#","p1__27202#",-40316965,null)),cljs.core.list(new cljs.core.Symbol("cljs.core","map","cljs.core/map",-338988913,null),new cljs.core.Keyword("cljs.spec","v","cljs.spec/v",-1491964132),new cljs.core.Symbol(null,"p1__27202#","p1__27202#",-40316965,null)))),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__27203#","p1__27203#",-917263944,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","map","cljs.core/map",-338988913,null),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"k","k",-505765866,null),new cljs.core.Symbol(null,"v","v",1661996586,null)], null)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("cljs.spec","k","cljs.spec/k",668466950),new cljs.core.Symbol(null,"k","k",-505765866,null),new cljs.core.Keyword("cljs.spec","v","cljs.spec/v",-1491964132),new cljs.core.Symbol(null,"v","v",1661996586,null)], null)),new cljs.core.Symbol(null,"p1__27203#","p1__27203#",-917263944,null)))),cljs.spec.spec_impl.call(null,cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__27202#","p1__27202#",-40316965,null)], null),cljs.core.list(new cljs.core.Symbol(null,"zipmap","zipmap",-690049687,null),cljs.core.list(new cljs.core.Symbol(null,"map","map",-1282745308,null),new cljs.core.Keyword("cljs.spec","k","cljs.spec/k",668466950),new cljs.core.Symbol(null,"p1__27202#","p1__27202#",-40316965,null)),cljs.core.list(new cljs.core.Symbol(null,"map","map",-1282745308,null),new cljs.core.Keyword("cljs.spec","v","cljs.spec/v",-1491964132),new cljs.core.Symbol(null,"p1__27202#","p1__27202#",-40316965,null)))),(function (p1__27202_SHARP_){
return cljs.core.zipmap.call(null,cljs.core.map.call(null,new cljs.core.Keyword("cljs.spec","k","cljs.spec/k",668466950),p1__27202_SHARP_),cljs.core.map.call(null,new cljs.core.Keyword("cljs.spec","v","cljs.spec/v",-1491964132),p1__27202_SHARP_));
}),null,true,(function (p1__27203_SHARP_){
return cljs.core.map.call(null,(function (p__27204){
var vec__27205 = p__27204;
var k = cljs.core.nth.call(null,vec__27205,(0),null);
var v = cljs.core.nth.call(null,vec__27205,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("cljs.spec","k","cljs.spec/k",668466950),k,new cljs.core.Keyword("cljs.spec","v","cljs.spec/v",-1491964132),v], null);
}),p1__27203_SHARP_);
})));
/**
 * generates a number (default 10) of values compatible with spec and maps conform over them,
 *   returning a sequence of [val conformed-val] tuples. Optionally takes
 *   a generator overrides map as per gen
 */
cljs.spec.exercise = (function cljs$spec$exercise(var_args){
var args27209 = [];
var len__22365__auto___27212 = arguments.length;
var i__22366__auto___27213 = (0);
while(true){
if((i__22366__auto___27213 < len__22365__auto___27212)){
args27209.push((arguments[i__22366__auto___27213]));

var G__27214 = (i__22366__auto___27213 + (1));
i__22366__auto___27213 = G__27214;
continue;
} else {
}
break;
}

var G__27211 = args27209.length;
switch (G__27211) {
case 1:
return cljs.spec.exercise.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.spec.exercise.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.spec.exercise.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27209.length)].join('')));

}
});

cljs.spec.exercise.cljs$core$IFn$_invoke$arity$1 = (function (spec){
return cljs.spec.exercise.call(null,spec,(10));
});

cljs.spec.exercise.cljs$core$IFn$_invoke$arity$2 = (function (spec,n){
return cljs.spec.exercise.call(null,spec,n,null);
});

cljs.spec.exercise.cljs$core$IFn$_invoke$arity$3 = (function (spec,n,overrides){
return cljs.core.map.call(null,(function (p1__27208_SHARP_){
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[p1__27208_SHARP_,cljs.spec.conform.call(null,spec,p1__27208_SHARP_)],null));
}),cljs.spec.impl.gen.sample.call(null,cljs.spec.gen.call(null,spec,overrides),n));
});

cljs.spec.exercise.cljs$lang$maxFixedArity = 3;

/**
 * Return true if inst at or after start and before end
 */
cljs.spec.inst_in_range_QMARK_ = (function cljs$spec$inst_in_range_QMARK_(start,end,inst){
var and__21137__auto__ = cljs.core.inst_QMARK_.call(null,inst);
if(and__21137__auto__){
var t = cljs.core.inst_ms.call(null,inst);
return ((cljs.core.inst_ms.call(null,start) <= t)) && ((t < cljs.core.inst_ms.call(null,end)));
} else {
return and__21137__auto__;
}
});
/**
 * Return true if start <= val and val < end
 */
cljs.spec.int_in_range_QMARK_ = (function cljs$spec$int_in_range_QMARK_(start,end,val){
if(cljs.core.integer_QMARK_.call(null,val)){
return ((start <= val)) && ((val < end));
} else {
if((val instanceof goog.math.Long)){
var and__21137__auto__ = start.lessThanOrEqual(val);
if(cljs.core.truth_(and__21137__auto__)){
return val.lessThan(end);
} else {
return and__21137__auto__;
}
} else {
if((val instanceof goog.math.Integer)){
var and__21137__auto__ = start.lessThanOrEqual(val);
if(cljs.core.truth_(and__21137__auto__)){
return val.lessThan(end);
} else {
return and__21137__auto__;
}
} else {
return false;

}
}
}
});
if(typeof cljs.spec._STAR_compile_asserts_STAR_ !== 'undefined'){
} else {
/**
 * If true, compiler will enable spec asserts, which are then
 * subject to runtime control via check-asserts? If false, compiler
 * will eliminate all spec assert overhead. See 'assert'.
 * Initially set to the negation of the ':elide-asserts' compiler option.
 * Defaults to true.
 */
cljs.spec._STAR_compile_asserts_STAR_ = true;
}
if(typeof cljs.spec._STAR_runtime_asserts_STAR_ !== 'undefined'){
} else {
cljs.spec._STAR_runtime_asserts_STAR_ = false;
}
/**
 * Returns the value set by check-asserts.
 */
cljs.spec.check_asserts_QMARK_ = (function cljs$spec$check_asserts_QMARK_(){
return cljs.spec._STAR_runtime_asserts_STAR_;
});
/**
 * Enable or disable spec asserts that have been compiled
 * with '*compile-asserts*' true.  See 'assert'.
 * Initially set to boolean value of cljs.spec/*runtime-asserts*.
 * Defaults to false.
 */
cljs.spec.check_asserts = (function cljs$spec$check_asserts(flag){
return cljs.spec._STAR_runtime_asserts_STAR_ = flag;
});
/**
 * Do not call this directly, use 'assert'.
 */
cljs.spec.assert_STAR_ = (function cljs$spec$assert_STAR_(spec,x){
if(cljs.core.truth_(cljs.spec.valid_QMARK_.call(null,spec,x))){
return x;
} else {
var ed = cljs.core.merge.call(null,cljs.core.assoc.call(null,cljs.spec.explain_data_STAR_.call(null,spec,cljs.core.PersistentVector.EMPTY,cljs.core.PersistentVector.EMPTY,cljs.core.PersistentVector.EMPTY,x),new cljs.core.Keyword("cljs.spec","failure","cljs.spec/failure",1931120592),new cljs.core.Keyword(null,"assertion-failed","assertion-failed",-970534477)));
throw (new Error([cljs.core.str("Spec assertion failed\n"),cljs.core.str((function (){var sb__22236__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR_27218_27220 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR_27219_27221 = cljs.core._STAR_print_fn_STAR_;
cljs.core._STAR_print_newline_STAR_ = true;

cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_newline_STAR_27218_27220,_STAR_print_fn_STAR_27219_27221,sb__22236__auto__,ed){
return (function (x__22237__auto__){
return sb__22236__auto__.append(x__22237__auto__);
});})(_STAR_print_newline_STAR_27218_27220,_STAR_print_fn_STAR_27219_27221,sb__22236__auto__,ed))
;

try{cljs.spec.explain_out.call(null,ed);
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_27219_27221;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_27218_27220;
}
return [cljs.core.str(sb__22236__auto__)].join('');
})())].join('')));
}
});

//# sourceMappingURL=spec.js.map