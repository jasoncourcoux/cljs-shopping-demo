// Compiled by ClojureScript 1.9.293 {}
goog.provide('cljs.spec.impl.gen');
goog.require('cljs.core');
goog.require('cljs.core');

/**
* @constructor
 * @implements {cljs.core.IDeref}
*/
cljs.spec.impl.gen.LazyVar = (function (f,cached){
this.f = f;
this.cached = cached;
this.cljs$lang$protocol_mask$partition0$ = 32768;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.spec.impl.gen.LazyVar.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
if(!((self__.cached == null))){
return self__.cached;
} else {
var x = self__.f.call(null);
if((x == null)){
} else {
self__.cached = x;
}

return x;
}
});

cljs.spec.impl.gen.LazyVar.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),cljs.core.with_meta(new cljs.core.Symbol(null,"cached","cached",-1216707864,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null))], null);
});

cljs.spec.impl.gen.LazyVar.cljs$lang$type = true;

cljs.spec.impl.gen.LazyVar.cljs$lang$ctorStr = "cljs.spec.impl.gen/LazyVar";

cljs.spec.impl.gen.LazyVar.cljs$lang$ctorPrWriter = (function (this__21801__auto__,writer__21802__auto__,opt__21803__auto__){
return cljs.core._write.call(null,writer__21802__auto__,"cljs.spec.impl.gen/LazyVar");
});

cljs.spec.impl.gen.__GT_LazyVar = (function cljs$spec$impl$gen$__GT_LazyVar(f,cached){
return (new cljs.spec.impl.gen.LazyVar(f,cached));
});

cljs.spec.impl.gen.quick_check_ref = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check.quick_check !== 'undefined')){
return clojure.test.check.quick_check;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check","quick-check","clojure.test.check/quick-check",-810344251,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check","quick-check","clojure.test.check/quick-check",-810344251,null))),cljs.core.str(" never required")].join('')));
}
}),null));
cljs.spec.impl.gen.quick_check = (function cljs$spec$impl$gen$quick_check(var_args){
var args__22372__auto__ = [];
var len__22365__auto___26211 = arguments.length;
var i__22366__auto___26212 = (0);
while(true){
if((i__22366__auto___26212 < len__22365__auto___26211)){
args__22372__auto__.push((arguments[i__22366__auto___26212]));

var G__26213 = (i__22366__auto___26212 + (1));
i__22366__auto___26212 = G__26213;
continue;
} else {
}
break;
}

var argseq__22373__auto__ = ((((0) < args__22372__auto__.length))?(new cljs.core.IndexedSeq(args__22372__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.quick_check.cljs$core$IFn$_invoke$arity$variadic(argseq__22373__auto__);
});

cljs.spec.impl.gen.quick_check.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,cljs.spec.impl.gen.quick_check_ref),args);
});

cljs.spec.impl.gen.quick_check.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.quick_check.cljs$lang$applyTo = (function (seq26210){
return cljs.spec.impl.gen.quick_check.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq26210));
});

cljs.spec.impl.gen.for_all_STAR__ref = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.properties.for_all_STAR_ !== 'undefined')){
return clojure.test.check.properties.for_all_STAR_;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.properties","for-all*","clojure.test.check.properties/for-all*",67088845,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.properties","for-all*","clojure.test.check.properties/for-all*",67088845,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Dynamically loaded clojure.test.check.properties/for-all*.
 */
cljs.spec.impl.gen.for_all_STAR_ = (function cljs$spec$impl$gen$for_all_STAR_(var_args){
var args__22372__auto__ = [];
var len__22365__auto___26215 = arguments.length;
var i__22366__auto___26216 = (0);
while(true){
if((i__22366__auto___26216 < len__22365__auto___26215)){
args__22372__auto__.push((arguments[i__22366__auto___26216]));

var G__26217 = (i__22366__auto___26216 + (1));
i__22366__auto___26216 = G__26217;
continue;
} else {
}
break;
}

var argseq__22373__auto__ = ((((0) < args__22372__auto__.length))?(new cljs.core.IndexedSeq(args__22372__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__22373__auto__);
});

cljs.spec.impl.gen.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,cljs.spec.impl.gen.for_all_STAR__ref),args);
});

cljs.spec.impl.gen.for_all_STAR_.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.for_all_STAR_.cljs$lang$applyTo = (function (seq26214){
return cljs.spec.impl.gen.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq26214));
});

var g_QMARK__26218 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.generator_QMARK_ !== 'undefined')){
return clojure.test.check.generators.generator_QMARK_;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","generator?","clojure.test.check.generators/generator?",-1378210460,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","generator?","clojure.test.check.generators/generator?",-1378210460,null))),cljs.core.str(" never required")].join('')));
}
}),null));
var g_26219 = (new cljs.spec.impl.gen.LazyVar(((function (g_QMARK__26218){
return (function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.generate !== 'undefined')){
return clojure.test.check.generators.generate;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","generate","clojure.test.check.generators/generate",-690390711,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","generate","clojure.test.check.generators/generate",-690390711,null))),cljs.core.str(" never required")].join('')));
}
});})(g_QMARK__26218))
,null));
var mkg_26220 = (new cljs.spec.impl.gen.LazyVar(((function (g_QMARK__26218,g_26219){
return (function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.__GT_Generator !== 'undefined')){
return clojure.test.check.generators.__GT_Generator;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","->Generator","clojure.test.check.generators/->Generator",-1179475051,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","->Generator","clojure.test.check.generators/->Generator",-1179475051,null))),cljs.core.str(" never required")].join('')));
}
});})(g_QMARK__26218,g_26219))
,null));
cljs.spec.impl.gen.generator_QMARK_ = ((function (g_QMARK__26218,g_26219,mkg_26220){
return (function cljs$spec$impl$gen$generator_QMARK_(x){
return cljs.core.deref.call(null,g_QMARK__26218).call(null,x);
});})(g_QMARK__26218,g_26219,mkg_26220))
;

cljs.spec.impl.gen.generator = ((function (g_QMARK__26218,g_26219,mkg_26220){
return (function cljs$spec$impl$gen$generator(gfn){
return cljs.core.deref.call(null,mkg_26220).call(null,gfn);
});})(g_QMARK__26218,g_26219,mkg_26220))
;

/**
 * Generate a single value using generator.
 */
cljs.spec.impl.gen.generate = ((function (g_QMARK__26218,g_26219,mkg_26220){
return (function cljs$spec$impl$gen$generate(generator){
return cljs.core.deref.call(null,g_26219).call(null,generator);
});})(g_QMARK__26218,g_26219,mkg_26220))
;
cljs.spec.impl.gen.delay_impl = (function cljs$spec$impl$gen$delay_impl(gfnd){
return cljs.spec.impl.gen.generator.call(null,(function (rnd,size){
return new cljs.core.Keyword(null,"gen","gen",142575302).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,gfnd)).call(null,rnd,size);
}));
});
var g__22602__auto___26239 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.hash_map !== 'undefined')){
return clojure.test.check.generators.hash_map;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","hash-map","clojure.test.check.generators/hash-map",1961346626,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","hash-map","clojure.test.check.generators/hash-map",1961346626,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/hash-map
 */
cljs.spec.impl.gen.hash_map = ((function (g__22602__auto___26239){
return (function cljs$spec$impl$gen$hash_map(var_args){
var args__22372__auto__ = [];
var len__22365__auto___26240 = arguments.length;
var i__22366__auto___26241 = (0);
while(true){
if((i__22366__auto___26241 < len__22365__auto___26240)){
args__22372__auto__.push((arguments[i__22366__auto___26241]));

var G__26242 = (i__22366__auto___26241 + (1));
i__22366__auto___26241 = G__26242;
continue;
} else {
}
break;
}

var argseq__22373__auto__ = ((((0) < args__22372__auto__.length))?(new cljs.core.IndexedSeq(args__22372__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.hash_map.cljs$core$IFn$_invoke$arity$variadic(argseq__22373__auto__);
});})(g__22602__auto___26239))
;

cljs.spec.impl.gen.hash_map.cljs$core$IFn$_invoke$arity$variadic = ((function (g__22602__auto___26239){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__22602__auto___26239),args);
});})(g__22602__auto___26239))
;

cljs.spec.impl.gen.hash_map.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.hash_map.cljs$lang$applyTo = ((function (g__22602__auto___26239){
return (function (seq26221){
return cljs.spec.impl.gen.hash_map.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq26221));
});})(g__22602__auto___26239))
;


var g__22602__auto___26243 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.list !== 'undefined')){
return clojure.test.check.generators.list;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","list","clojure.test.check.generators/list",506971058,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","list","clojure.test.check.generators/list",506971058,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/list
 */
cljs.spec.impl.gen.list = ((function (g__22602__auto___26243){
return (function cljs$spec$impl$gen$list(var_args){
var args__22372__auto__ = [];
var len__22365__auto___26244 = arguments.length;
var i__22366__auto___26245 = (0);
while(true){
if((i__22366__auto___26245 < len__22365__auto___26244)){
args__22372__auto__.push((arguments[i__22366__auto___26245]));

var G__26246 = (i__22366__auto___26245 + (1));
i__22366__auto___26245 = G__26246;
continue;
} else {
}
break;
}

var argseq__22373__auto__ = ((((0) < args__22372__auto__.length))?(new cljs.core.IndexedSeq(args__22372__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.list.cljs$core$IFn$_invoke$arity$variadic(argseq__22373__auto__);
});})(g__22602__auto___26243))
;

cljs.spec.impl.gen.list.cljs$core$IFn$_invoke$arity$variadic = ((function (g__22602__auto___26243){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__22602__auto___26243),args);
});})(g__22602__auto___26243))
;

cljs.spec.impl.gen.list.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.list.cljs$lang$applyTo = ((function (g__22602__auto___26243){
return (function (seq26222){
return cljs.spec.impl.gen.list.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq26222));
});})(g__22602__auto___26243))
;


var g__22602__auto___26247 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.map !== 'undefined')){
return clojure.test.check.generators.map;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","map","clojure.test.check.generators/map",45738796,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","map","clojure.test.check.generators/map",45738796,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/map
 */
cljs.spec.impl.gen.map = ((function (g__22602__auto___26247){
return (function cljs$spec$impl$gen$map(var_args){
var args__22372__auto__ = [];
var len__22365__auto___26248 = arguments.length;
var i__22366__auto___26249 = (0);
while(true){
if((i__22366__auto___26249 < len__22365__auto___26248)){
args__22372__auto__.push((arguments[i__22366__auto___26249]));

var G__26250 = (i__22366__auto___26249 + (1));
i__22366__auto___26249 = G__26250;
continue;
} else {
}
break;
}

var argseq__22373__auto__ = ((((0) < args__22372__auto__.length))?(new cljs.core.IndexedSeq(args__22372__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.map.cljs$core$IFn$_invoke$arity$variadic(argseq__22373__auto__);
});})(g__22602__auto___26247))
;

cljs.spec.impl.gen.map.cljs$core$IFn$_invoke$arity$variadic = ((function (g__22602__auto___26247){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__22602__auto___26247),args);
});})(g__22602__auto___26247))
;

cljs.spec.impl.gen.map.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.map.cljs$lang$applyTo = ((function (g__22602__auto___26247){
return (function (seq26223){
return cljs.spec.impl.gen.map.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq26223));
});})(g__22602__auto___26247))
;


var g__22602__auto___26251 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.not_empty !== 'undefined')){
return clojure.test.check.generators.not_empty;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","not-empty","clojure.test.check.generators/not-empty",-876211682,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","not-empty","clojure.test.check.generators/not-empty",-876211682,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/not-empty
 */
cljs.spec.impl.gen.not_empty = ((function (g__22602__auto___26251){
return (function cljs$spec$impl$gen$not_empty(var_args){
var args__22372__auto__ = [];
var len__22365__auto___26252 = arguments.length;
var i__22366__auto___26253 = (0);
while(true){
if((i__22366__auto___26253 < len__22365__auto___26252)){
args__22372__auto__.push((arguments[i__22366__auto___26253]));

var G__26254 = (i__22366__auto___26253 + (1));
i__22366__auto___26253 = G__26254;
continue;
} else {
}
break;
}

var argseq__22373__auto__ = ((((0) < args__22372__auto__.length))?(new cljs.core.IndexedSeq(args__22372__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.not_empty.cljs$core$IFn$_invoke$arity$variadic(argseq__22373__auto__);
});})(g__22602__auto___26251))
;

cljs.spec.impl.gen.not_empty.cljs$core$IFn$_invoke$arity$variadic = ((function (g__22602__auto___26251){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__22602__auto___26251),args);
});})(g__22602__auto___26251))
;

cljs.spec.impl.gen.not_empty.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.not_empty.cljs$lang$applyTo = ((function (g__22602__auto___26251){
return (function (seq26224){
return cljs.spec.impl.gen.not_empty.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq26224));
});})(g__22602__auto___26251))
;


var g__22602__auto___26255 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.set !== 'undefined')){
return clojure.test.check.generators.set;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","set","clojure.test.check.generators/set",-1027639543,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","set","clojure.test.check.generators/set",-1027639543,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/set
 */
cljs.spec.impl.gen.set = ((function (g__22602__auto___26255){
return (function cljs$spec$impl$gen$set(var_args){
var args__22372__auto__ = [];
var len__22365__auto___26256 = arguments.length;
var i__22366__auto___26257 = (0);
while(true){
if((i__22366__auto___26257 < len__22365__auto___26256)){
args__22372__auto__.push((arguments[i__22366__auto___26257]));

var G__26258 = (i__22366__auto___26257 + (1));
i__22366__auto___26257 = G__26258;
continue;
} else {
}
break;
}

var argseq__22373__auto__ = ((((0) < args__22372__auto__.length))?(new cljs.core.IndexedSeq(args__22372__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.set.cljs$core$IFn$_invoke$arity$variadic(argseq__22373__auto__);
});})(g__22602__auto___26255))
;

cljs.spec.impl.gen.set.cljs$core$IFn$_invoke$arity$variadic = ((function (g__22602__auto___26255){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__22602__auto___26255),args);
});})(g__22602__auto___26255))
;

cljs.spec.impl.gen.set.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.set.cljs$lang$applyTo = ((function (g__22602__auto___26255){
return (function (seq26225){
return cljs.spec.impl.gen.set.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq26225));
});})(g__22602__auto___26255))
;


var g__22602__auto___26259 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.vector !== 'undefined')){
return clojure.test.check.generators.vector;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","vector","clojure.test.check.generators/vector",1081775325,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","vector","clojure.test.check.generators/vector",1081775325,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/vector
 */
cljs.spec.impl.gen.vector = ((function (g__22602__auto___26259){
return (function cljs$spec$impl$gen$vector(var_args){
var args__22372__auto__ = [];
var len__22365__auto___26260 = arguments.length;
var i__22366__auto___26261 = (0);
while(true){
if((i__22366__auto___26261 < len__22365__auto___26260)){
args__22372__auto__.push((arguments[i__22366__auto___26261]));

var G__26262 = (i__22366__auto___26261 + (1));
i__22366__auto___26261 = G__26262;
continue;
} else {
}
break;
}

var argseq__22373__auto__ = ((((0) < args__22372__auto__.length))?(new cljs.core.IndexedSeq(args__22372__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.vector.cljs$core$IFn$_invoke$arity$variadic(argseq__22373__auto__);
});})(g__22602__auto___26259))
;

cljs.spec.impl.gen.vector.cljs$core$IFn$_invoke$arity$variadic = ((function (g__22602__auto___26259){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__22602__auto___26259),args);
});})(g__22602__auto___26259))
;

cljs.spec.impl.gen.vector.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.vector.cljs$lang$applyTo = ((function (g__22602__auto___26259){
return (function (seq26226){
return cljs.spec.impl.gen.vector.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq26226));
});})(g__22602__auto___26259))
;


var g__22602__auto___26263 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.vector_distinct !== 'undefined')){
return clojure.test.check.generators.vector_distinct;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","vector-distinct","clojure.test.check.generators/vector-distinct",1656877834,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","vector-distinct","clojure.test.check.generators/vector-distinct",1656877834,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/vector-distinct
 */
cljs.spec.impl.gen.vector_distinct = ((function (g__22602__auto___26263){
return (function cljs$spec$impl$gen$vector_distinct(var_args){
var args__22372__auto__ = [];
var len__22365__auto___26264 = arguments.length;
var i__22366__auto___26265 = (0);
while(true){
if((i__22366__auto___26265 < len__22365__auto___26264)){
args__22372__auto__.push((arguments[i__22366__auto___26265]));

var G__26266 = (i__22366__auto___26265 + (1));
i__22366__auto___26265 = G__26266;
continue;
} else {
}
break;
}

var argseq__22373__auto__ = ((((0) < args__22372__auto__.length))?(new cljs.core.IndexedSeq(args__22372__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.vector_distinct.cljs$core$IFn$_invoke$arity$variadic(argseq__22373__auto__);
});})(g__22602__auto___26263))
;

cljs.spec.impl.gen.vector_distinct.cljs$core$IFn$_invoke$arity$variadic = ((function (g__22602__auto___26263){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__22602__auto___26263),args);
});})(g__22602__auto___26263))
;

cljs.spec.impl.gen.vector_distinct.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.vector_distinct.cljs$lang$applyTo = ((function (g__22602__auto___26263){
return (function (seq26227){
return cljs.spec.impl.gen.vector_distinct.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq26227));
});})(g__22602__auto___26263))
;


var g__22602__auto___26267 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.fmap !== 'undefined')){
return clojure.test.check.generators.fmap;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","fmap","clojure.test.check.generators/fmap",1957997092,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","fmap","clojure.test.check.generators/fmap",1957997092,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/fmap
 */
cljs.spec.impl.gen.fmap = ((function (g__22602__auto___26267){
return (function cljs$spec$impl$gen$fmap(var_args){
var args__22372__auto__ = [];
var len__22365__auto___26268 = arguments.length;
var i__22366__auto___26269 = (0);
while(true){
if((i__22366__auto___26269 < len__22365__auto___26268)){
args__22372__auto__.push((arguments[i__22366__auto___26269]));

var G__26270 = (i__22366__auto___26269 + (1));
i__22366__auto___26269 = G__26270;
continue;
} else {
}
break;
}

var argseq__22373__auto__ = ((((0) < args__22372__auto__.length))?(new cljs.core.IndexedSeq(args__22372__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.fmap.cljs$core$IFn$_invoke$arity$variadic(argseq__22373__auto__);
});})(g__22602__auto___26267))
;

cljs.spec.impl.gen.fmap.cljs$core$IFn$_invoke$arity$variadic = ((function (g__22602__auto___26267){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__22602__auto___26267),args);
});})(g__22602__auto___26267))
;

cljs.spec.impl.gen.fmap.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.fmap.cljs$lang$applyTo = ((function (g__22602__auto___26267){
return (function (seq26228){
return cljs.spec.impl.gen.fmap.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq26228));
});})(g__22602__auto___26267))
;


var g__22602__auto___26271 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.elements !== 'undefined')){
return clojure.test.check.generators.elements;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","elements","clojure.test.check.generators/elements",438991326,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","elements","clojure.test.check.generators/elements",438991326,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/elements
 */
cljs.spec.impl.gen.elements = ((function (g__22602__auto___26271){
return (function cljs$spec$impl$gen$elements(var_args){
var args__22372__auto__ = [];
var len__22365__auto___26272 = arguments.length;
var i__22366__auto___26273 = (0);
while(true){
if((i__22366__auto___26273 < len__22365__auto___26272)){
args__22372__auto__.push((arguments[i__22366__auto___26273]));

var G__26274 = (i__22366__auto___26273 + (1));
i__22366__auto___26273 = G__26274;
continue;
} else {
}
break;
}

var argseq__22373__auto__ = ((((0) < args__22372__auto__.length))?(new cljs.core.IndexedSeq(args__22372__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.elements.cljs$core$IFn$_invoke$arity$variadic(argseq__22373__auto__);
});})(g__22602__auto___26271))
;

cljs.spec.impl.gen.elements.cljs$core$IFn$_invoke$arity$variadic = ((function (g__22602__auto___26271){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__22602__auto___26271),args);
});})(g__22602__auto___26271))
;

cljs.spec.impl.gen.elements.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.elements.cljs$lang$applyTo = ((function (g__22602__auto___26271){
return (function (seq26229){
return cljs.spec.impl.gen.elements.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq26229));
});})(g__22602__auto___26271))
;


var g__22602__auto___26275 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.bind !== 'undefined')){
return clojure.test.check.generators.bind;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","bind","clojure.test.check.generators/bind",-361313906,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","bind","clojure.test.check.generators/bind",-361313906,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/bind
 */
cljs.spec.impl.gen.bind = ((function (g__22602__auto___26275){
return (function cljs$spec$impl$gen$bind(var_args){
var args__22372__auto__ = [];
var len__22365__auto___26276 = arguments.length;
var i__22366__auto___26277 = (0);
while(true){
if((i__22366__auto___26277 < len__22365__auto___26276)){
args__22372__auto__.push((arguments[i__22366__auto___26277]));

var G__26278 = (i__22366__auto___26277 + (1));
i__22366__auto___26277 = G__26278;
continue;
} else {
}
break;
}

var argseq__22373__auto__ = ((((0) < args__22372__auto__.length))?(new cljs.core.IndexedSeq(args__22372__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.bind.cljs$core$IFn$_invoke$arity$variadic(argseq__22373__auto__);
});})(g__22602__auto___26275))
;

cljs.spec.impl.gen.bind.cljs$core$IFn$_invoke$arity$variadic = ((function (g__22602__auto___26275){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__22602__auto___26275),args);
});})(g__22602__auto___26275))
;

cljs.spec.impl.gen.bind.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.bind.cljs$lang$applyTo = ((function (g__22602__auto___26275){
return (function (seq26230){
return cljs.spec.impl.gen.bind.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq26230));
});})(g__22602__auto___26275))
;


var g__22602__auto___26279 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.choose !== 'undefined')){
return clojure.test.check.generators.choose;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","choose","clojure.test.check.generators/choose",909997832,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","choose","clojure.test.check.generators/choose",909997832,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/choose
 */
cljs.spec.impl.gen.choose = ((function (g__22602__auto___26279){
return (function cljs$spec$impl$gen$choose(var_args){
var args__22372__auto__ = [];
var len__22365__auto___26280 = arguments.length;
var i__22366__auto___26281 = (0);
while(true){
if((i__22366__auto___26281 < len__22365__auto___26280)){
args__22372__auto__.push((arguments[i__22366__auto___26281]));

var G__26282 = (i__22366__auto___26281 + (1));
i__22366__auto___26281 = G__26282;
continue;
} else {
}
break;
}

var argseq__22373__auto__ = ((((0) < args__22372__auto__.length))?(new cljs.core.IndexedSeq(args__22372__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.choose.cljs$core$IFn$_invoke$arity$variadic(argseq__22373__auto__);
});})(g__22602__auto___26279))
;

cljs.spec.impl.gen.choose.cljs$core$IFn$_invoke$arity$variadic = ((function (g__22602__auto___26279){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__22602__auto___26279),args);
});})(g__22602__auto___26279))
;

cljs.spec.impl.gen.choose.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.choose.cljs$lang$applyTo = ((function (g__22602__auto___26279){
return (function (seq26231){
return cljs.spec.impl.gen.choose.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq26231));
});})(g__22602__auto___26279))
;


var g__22602__auto___26283 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.one_of !== 'undefined')){
return clojure.test.check.generators.one_of;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","one-of","clojure.test.check.generators/one-of",-183339191,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","one-of","clojure.test.check.generators/one-of",-183339191,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/one-of
 */
cljs.spec.impl.gen.one_of = ((function (g__22602__auto___26283){
return (function cljs$spec$impl$gen$one_of(var_args){
var args__22372__auto__ = [];
var len__22365__auto___26284 = arguments.length;
var i__22366__auto___26285 = (0);
while(true){
if((i__22366__auto___26285 < len__22365__auto___26284)){
args__22372__auto__.push((arguments[i__22366__auto___26285]));

var G__26286 = (i__22366__auto___26285 + (1));
i__22366__auto___26285 = G__26286;
continue;
} else {
}
break;
}

var argseq__22373__auto__ = ((((0) < args__22372__auto__.length))?(new cljs.core.IndexedSeq(args__22372__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.one_of.cljs$core$IFn$_invoke$arity$variadic(argseq__22373__auto__);
});})(g__22602__auto___26283))
;

cljs.spec.impl.gen.one_of.cljs$core$IFn$_invoke$arity$variadic = ((function (g__22602__auto___26283){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__22602__auto___26283),args);
});})(g__22602__auto___26283))
;

cljs.spec.impl.gen.one_of.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.one_of.cljs$lang$applyTo = ((function (g__22602__auto___26283){
return (function (seq26232){
return cljs.spec.impl.gen.one_of.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq26232));
});})(g__22602__auto___26283))
;


var g__22602__auto___26287 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.such_that !== 'undefined')){
return clojure.test.check.generators.such_that;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","such-that","clojure.test.check.generators/such-that",-1754178732,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","such-that","clojure.test.check.generators/such-that",-1754178732,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/such-that
 */
cljs.spec.impl.gen.such_that = ((function (g__22602__auto___26287){
return (function cljs$spec$impl$gen$such_that(var_args){
var args__22372__auto__ = [];
var len__22365__auto___26288 = arguments.length;
var i__22366__auto___26289 = (0);
while(true){
if((i__22366__auto___26289 < len__22365__auto___26288)){
args__22372__auto__.push((arguments[i__22366__auto___26289]));

var G__26290 = (i__22366__auto___26289 + (1));
i__22366__auto___26289 = G__26290;
continue;
} else {
}
break;
}

var argseq__22373__auto__ = ((((0) < args__22372__auto__.length))?(new cljs.core.IndexedSeq(args__22372__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.such_that.cljs$core$IFn$_invoke$arity$variadic(argseq__22373__auto__);
});})(g__22602__auto___26287))
;

cljs.spec.impl.gen.such_that.cljs$core$IFn$_invoke$arity$variadic = ((function (g__22602__auto___26287){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__22602__auto___26287),args);
});})(g__22602__auto___26287))
;

cljs.spec.impl.gen.such_that.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.such_that.cljs$lang$applyTo = ((function (g__22602__auto___26287){
return (function (seq26233){
return cljs.spec.impl.gen.such_that.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq26233));
});})(g__22602__auto___26287))
;


var g__22602__auto___26291 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.tuple !== 'undefined')){
return clojure.test.check.generators.tuple;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","tuple","clojure.test.check.generators/tuple",-143711557,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","tuple","clojure.test.check.generators/tuple",-143711557,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/tuple
 */
cljs.spec.impl.gen.tuple = ((function (g__22602__auto___26291){
return (function cljs$spec$impl$gen$tuple(var_args){
var args__22372__auto__ = [];
var len__22365__auto___26292 = arguments.length;
var i__22366__auto___26293 = (0);
while(true){
if((i__22366__auto___26293 < len__22365__auto___26292)){
args__22372__auto__.push((arguments[i__22366__auto___26293]));

var G__26294 = (i__22366__auto___26293 + (1));
i__22366__auto___26293 = G__26294;
continue;
} else {
}
break;
}

var argseq__22373__auto__ = ((((0) < args__22372__auto__.length))?(new cljs.core.IndexedSeq(args__22372__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.tuple.cljs$core$IFn$_invoke$arity$variadic(argseq__22373__auto__);
});})(g__22602__auto___26291))
;

cljs.spec.impl.gen.tuple.cljs$core$IFn$_invoke$arity$variadic = ((function (g__22602__auto___26291){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__22602__auto___26291),args);
});})(g__22602__auto___26291))
;

cljs.spec.impl.gen.tuple.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.tuple.cljs$lang$applyTo = ((function (g__22602__auto___26291){
return (function (seq26234){
return cljs.spec.impl.gen.tuple.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq26234));
});})(g__22602__auto___26291))
;


var g__22602__auto___26295 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.sample !== 'undefined')){
return clojure.test.check.generators.sample;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","sample","clojure.test.check.generators/sample",-382944992,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","sample","clojure.test.check.generators/sample",-382944992,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/sample
 */
cljs.spec.impl.gen.sample = ((function (g__22602__auto___26295){
return (function cljs$spec$impl$gen$sample(var_args){
var args__22372__auto__ = [];
var len__22365__auto___26296 = arguments.length;
var i__22366__auto___26297 = (0);
while(true){
if((i__22366__auto___26297 < len__22365__auto___26296)){
args__22372__auto__.push((arguments[i__22366__auto___26297]));

var G__26298 = (i__22366__auto___26297 + (1));
i__22366__auto___26297 = G__26298;
continue;
} else {
}
break;
}

var argseq__22373__auto__ = ((((0) < args__22372__auto__.length))?(new cljs.core.IndexedSeq(args__22372__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.sample.cljs$core$IFn$_invoke$arity$variadic(argseq__22373__auto__);
});})(g__22602__auto___26295))
;

cljs.spec.impl.gen.sample.cljs$core$IFn$_invoke$arity$variadic = ((function (g__22602__auto___26295){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__22602__auto___26295),args);
});})(g__22602__auto___26295))
;

cljs.spec.impl.gen.sample.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.sample.cljs$lang$applyTo = ((function (g__22602__auto___26295){
return (function (seq26235){
return cljs.spec.impl.gen.sample.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq26235));
});})(g__22602__auto___26295))
;


var g__22602__auto___26299 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.return$ !== 'undefined')){
return clojure.test.check.generators.return$;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","return","clojure.test.check.generators/return",1744522038,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","return","clojure.test.check.generators/return",1744522038,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/return
 */
cljs.spec.impl.gen.return$ = ((function (g__22602__auto___26299){
return (function cljs$spec$impl$gen$return(var_args){
var args__22372__auto__ = [];
var len__22365__auto___26300 = arguments.length;
var i__22366__auto___26301 = (0);
while(true){
if((i__22366__auto___26301 < len__22365__auto___26300)){
args__22372__auto__.push((arguments[i__22366__auto___26301]));

var G__26302 = (i__22366__auto___26301 + (1));
i__22366__auto___26301 = G__26302;
continue;
} else {
}
break;
}

var argseq__22373__auto__ = ((((0) < args__22372__auto__.length))?(new cljs.core.IndexedSeq(args__22372__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.return$.cljs$core$IFn$_invoke$arity$variadic(argseq__22373__auto__);
});})(g__22602__auto___26299))
;

cljs.spec.impl.gen.return$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__22602__auto___26299){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__22602__auto___26299),args);
});})(g__22602__auto___26299))
;

cljs.spec.impl.gen.return$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.return$.cljs$lang$applyTo = ((function (g__22602__auto___26299){
return (function (seq26236){
return cljs.spec.impl.gen.return$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq26236));
});})(g__22602__auto___26299))
;


var g__22602__auto___26303 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.large_integer_STAR_ !== 'undefined')){
return clojure.test.check.generators.large_integer_STAR_;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","large-integer*","clojure.test.check.generators/large-integer*",-437830670,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","large-integer*","clojure.test.check.generators/large-integer*",-437830670,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/large-integer*
 */
cljs.spec.impl.gen.large_integer_STAR_ = ((function (g__22602__auto___26303){
return (function cljs$spec$impl$gen$large_integer_STAR_(var_args){
var args__22372__auto__ = [];
var len__22365__auto___26304 = arguments.length;
var i__22366__auto___26305 = (0);
while(true){
if((i__22366__auto___26305 < len__22365__auto___26304)){
args__22372__auto__.push((arguments[i__22366__auto___26305]));

var G__26306 = (i__22366__auto___26305 + (1));
i__22366__auto___26305 = G__26306;
continue;
} else {
}
break;
}

var argseq__22373__auto__ = ((((0) < args__22372__auto__.length))?(new cljs.core.IndexedSeq(args__22372__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__22373__auto__);
});})(g__22602__auto___26303))
;

cljs.spec.impl.gen.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic = ((function (g__22602__auto___26303){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__22602__auto___26303),args);
});})(g__22602__auto___26303))
;

cljs.spec.impl.gen.large_integer_STAR_.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.large_integer_STAR_.cljs$lang$applyTo = ((function (g__22602__auto___26303){
return (function (seq26237){
return cljs.spec.impl.gen.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq26237));
});})(g__22602__auto___26303))
;


var g__22602__auto___26307 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.double_STAR_ !== 'undefined')){
return clojure.test.check.generators.double_STAR_;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","double*","clojure.test.check.generators/double*",841542265,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","double*","clojure.test.check.generators/double*",841542265,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/double*
 */
cljs.spec.impl.gen.double_STAR_ = ((function (g__22602__auto___26307){
return (function cljs$spec$impl$gen$double_STAR_(var_args){
var args__22372__auto__ = [];
var len__22365__auto___26308 = arguments.length;
var i__22366__auto___26309 = (0);
while(true){
if((i__22366__auto___26309 < len__22365__auto___26308)){
args__22372__auto__.push((arguments[i__22366__auto___26309]));

var G__26310 = (i__22366__auto___26309 + (1));
i__22366__auto___26309 = G__26310;
continue;
} else {
}
break;
}

var argseq__22373__auto__ = ((((0) < args__22372__auto__.length))?(new cljs.core.IndexedSeq(args__22372__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.double_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__22373__auto__);
});})(g__22602__auto___26307))
;

cljs.spec.impl.gen.double_STAR_.cljs$core$IFn$_invoke$arity$variadic = ((function (g__22602__auto___26307){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__22602__auto___26307),args);
});})(g__22602__auto___26307))
;

cljs.spec.impl.gen.double_STAR_.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.double_STAR_.cljs$lang$applyTo = ((function (g__22602__auto___26307){
return (function (seq26238){
return cljs.spec.impl.gen.double_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq26238));
});})(g__22602__auto___26307))
;

var g__22615__auto___26332 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.any !== 'undefined')){
return clojure.test.check.generators.any;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","any","clojure.test.check.generators/any",1883743710,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","any","clojure.test.check.generators/any",1883743710,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/any
 */
cljs.spec.impl.gen.any = ((function (g__22615__auto___26332){
return (function cljs$spec$impl$gen$any(var_args){
var args__22372__auto__ = [];
var len__22365__auto___26333 = arguments.length;
var i__22366__auto___26334 = (0);
while(true){
if((i__22366__auto___26334 < len__22365__auto___26333)){
args__22372__auto__.push((arguments[i__22366__auto___26334]));

var G__26335 = (i__22366__auto___26334 + (1));
i__22366__auto___26334 = G__26335;
continue;
} else {
}
break;
}

var argseq__22373__auto__ = ((((0) < args__22372__auto__.length))?(new cljs.core.IndexedSeq(args__22372__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.any.cljs$core$IFn$_invoke$arity$variadic(argseq__22373__auto__);
});})(g__22615__auto___26332))
;

cljs.spec.impl.gen.any.cljs$core$IFn$_invoke$arity$variadic = ((function (g__22615__auto___26332){
return (function (args){
return cljs.core.deref.call(null,g__22615__auto___26332);
});})(g__22615__auto___26332))
;

cljs.spec.impl.gen.any.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.any.cljs$lang$applyTo = ((function (g__22615__auto___26332){
return (function (seq26311){
return cljs.spec.impl.gen.any.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq26311));
});})(g__22615__auto___26332))
;


var g__22615__auto___26336 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.any_printable !== 'undefined')){
return clojure.test.check.generators.any_printable;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","any-printable","clojure.test.check.generators/any-printable",-1570493991,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","any-printable","clojure.test.check.generators/any-printable",-1570493991,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/any-printable
 */
cljs.spec.impl.gen.any_printable = ((function (g__22615__auto___26336){
return (function cljs$spec$impl$gen$any_printable(var_args){
var args__22372__auto__ = [];
var len__22365__auto___26337 = arguments.length;
var i__22366__auto___26338 = (0);
while(true){
if((i__22366__auto___26338 < len__22365__auto___26337)){
args__22372__auto__.push((arguments[i__22366__auto___26338]));

var G__26339 = (i__22366__auto___26338 + (1));
i__22366__auto___26338 = G__26339;
continue;
} else {
}
break;
}

var argseq__22373__auto__ = ((((0) < args__22372__auto__.length))?(new cljs.core.IndexedSeq(args__22372__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.any_printable.cljs$core$IFn$_invoke$arity$variadic(argseq__22373__auto__);
});})(g__22615__auto___26336))
;

cljs.spec.impl.gen.any_printable.cljs$core$IFn$_invoke$arity$variadic = ((function (g__22615__auto___26336){
return (function (args){
return cljs.core.deref.call(null,g__22615__auto___26336);
});})(g__22615__auto___26336))
;

cljs.spec.impl.gen.any_printable.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.any_printable.cljs$lang$applyTo = ((function (g__22615__auto___26336){
return (function (seq26312){
return cljs.spec.impl.gen.any_printable.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq26312));
});})(g__22615__auto___26336))
;


var g__22615__auto___26340 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.boolean$ !== 'undefined')){
return clojure.test.check.generators.boolean$;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","boolean","clojure.test.check.generators/boolean",1586992347,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","boolean","clojure.test.check.generators/boolean",1586992347,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/boolean
 */
cljs.spec.impl.gen.boolean$ = ((function (g__22615__auto___26340){
return (function cljs$spec$impl$gen$boolean(var_args){
var args__22372__auto__ = [];
var len__22365__auto___26341 = arguments.length;
var i__22366__auto___26342 = (0);
while(true){
if((i__22366__auto___26342 < len__22365__auto___26341)){
args__22372__auto__.push((arguments[i__22366__auto___26342]));

var G__26343 = (i__22366__auto___26342 + (1));
i__22366__auto___26342 = G__26343;
continue;
} else {
}
break;
}

var argseq__22373__auto__ = ((((0) < args__22372__auto__.length))?(new cljs.core.IndexedSeq(args__22372__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.boolean$.cljs$core$IFn$_invoke$arity$variadic(argseq__22373__auto__);
});})(g__22615__auto___26340))
;

cljs.spec.impl.gen.boolean$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__22615__auto___26340){
return (function (args){
return cljs.core.deref.call(null,g__22615__auto___26340);
});})(g__22615__auto___26340))
;

cljs.spec.impl.gen.boolean$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.boolean$.cljs$lang$applyTo = ((function (g__22615__auto___26340){
return (function (seq26313){
return cljs.spec.impl.gen.boolean$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq26313));
});})(g__22615__auto___26340))
;


var g__22615__auto___26344 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char$ !== 'undefined')){
return clojure.test.check.generators.char$;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","char","clojure.test.check.generators/char",-1426343459,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char","clojure.test.check.generators/char",-1426343459,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char
 */
cljs.spec.impl.gen.char$ = ((function (g__22615__auto___26344){
return (function cljs$spec$impl$gen$char(var_args){
var args__22372__auto__ = [];
var len__22365__auto___26345 = arguments.length;
var i__22366__auto___26346 = (0);
while(true){
if((i__22366__auto___26346 < len__22365__auto___26345)){
args__22372__auto__.push((arguments[i__22366__auto___26346]));

var G__26347 = (i__22366__auto___26346 + (1));
i__22366__auto___26346 = G__26347;
continue;
} else {
}
break;
}

var argseq__22373__auto__ = ((((0) < args__22372__auto__.length))?(new cljs.core.IndexedSeq(args__22372__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.char$.cljs$core$IFn$_invoke$arity$variadic(argseq__22373__auto__);
});})(g__22615__auto___26344))
;

cljs.spec.impl.gen.char$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__22615__auto___26344){
return (function (args){
return cljs.core.deref.call(null,g__22615__auto___26344);
});})(g__22615__auto___26344))
;

cljs.spec.impl.gen.char$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.char$.cljs$lang$applyTo = ((function (g__22615__auto___26344){
return (function (seq26314){
return cljs.spec.impl.gen.char$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq26314));
});})(g__22615__auto___26344))
;


var g__22615__auto___26348 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_alpha !== 'undefined')){
return clojure.test.check.generators.char_alpha;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","char-alpha","clojure.test.check.generators/char-alpha",615785796,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-alpha","clojure.test.check.generators/char-alpha",615785796,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-alpha
 */
cljs.spec.impl.gen.char_alpha = ((function (g__22615__auto___26348){
return (function cljs$spec$impl$gen$char_alpha(var_args){
var args__22372__auto__ = [];
var len__22365__auto___26349 = arguments.length;
var i__22366__auto___26350 = (0);
while(true){
if((i__22366__auto___26350 < len__22365__auto___26349)){
args__22372__auto__.push((arguments[i__22366__auto___26350]));

var G__26351 = (i__22366__auto___26350 + (1));
i__22366__auto___26350 = G__26351;
continue;
} else {
}
break;
}

var argseq__22373__auto__ = ((((0) < args__22372__auto__.length))?(new cljs.core.IndexedSeq(args__22372__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.char_alpha.cljs$core$IFn$_invoke$arity$variadic(argseq__22373__auto__);
});})(g__22615__auto___26348))
;

cljs.spec.impl.gen.char_alpha.cljs$core$IFn$_invoke$arity$variadic = ((function (g__22615__auto___26348){
return (function (args){
return cljs.core.deref.call(null,g__22615__auto___26348);
});})(g__22615__auto___26348))
;

cljs.spec.impl.gen.char_alpha.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.char_alpha.cljs$lang$applyTo = ((function (g__22615__auto___26348){
return (function (seq26315){
return cljs.spec.impl.gen.char_alpha.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq26315));
});})(g__22615__auto___26348))
;


var g__22615__auto___26352 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_alphanumeric !== 'undefined')){
return clojure.test.check.generators.char_alphanumeric;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","char-alphanumeric","clojure.test.check.generators/char-alphanumeric",1383091431,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-alphanumeric","clojure.test.check.generators/char-alphanumeric",1383091431,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-alphanumeric
 */
cljs.spec.impl.gen.char_alphanumeric = ((function (g__22615__auto___26352){
return (function cljs$spec$impl$gen$char_alphanumeric(var_args){
var args__22372__auto__ = [];
var len__22365__auto___26353 = arguments.length;
var i__22366__auto___26354 = (0);
while(true){
if((i__22366__auto___26354 < len__22365__auto___26353)){
args__22372__auto__.push((arguments[i__22366__auto___26354]));

var G__26355 = (i__22366__auto___26354 + (1));
i__22366__auto___26354 = G__26355;
continue;
} else {
}
break;
}

var argseq__22373__auto__ = ((((0) < args__22372__auto__.length))?(new cljs.core.IndexedSeq(args__22372__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(argseq__22373__auto__);
});})(g__22615__auto___26352))
;

cljs.spec.impl.gen.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic = ((function (g__22615__auto___26352){
return (function (args){
return cljs.core.deref.call(null,g__22615__auto___26352);
});})(g__22615__auto___26352))
;

cljs.spec.impl.gen.char_alphanumeric.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.char_alphanumeric.cljs$lang$applyTo = ((function (g__22615__auto___26352){
return (function (seq26316){
return cljs.spec.impl.gen.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq26316));
});})(g__22615__auto___26352))
;


var g__22615__auto___26356 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_ascii !== 'undefined')){
return clojure.test.check.generators.char_ascii;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","char-ascii","clojure.test.check.generators/char-ascii",-899908538,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-ascii","clojure.test.check.generators/char-ascii",-899908538,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-ascii
 */
cljs.spec.impl.gen.char_ascii = ((function (g__22615__auto___26356){
return (function cljs$spec$impl$gen$char_ascii(var_args){
var args__22372__auto__ = [];
var len__22365__auto___26357 = arguments.length;
var i__22366__auto___26358 = (0);
while(true){
if((i__22366__auto___26358 < len__22365__auto___26357)){
args__22372__auto__.push((arguments[i__22366__auto___26358]));

var G__26359 = (i__22366__auto___26358 + (1));
i__22366__auto___26358 = G__26359;
continue;
} else {
}
break;
}

var argseq__22373__auto__ = ((((0) < args__22372__auto__.length))?(new cljs.core.IndexedSeq(args__22372__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.char_ascii.cljs$core$IFn$_invoke$arity$variadic(argseq__22373__auto__);
});})(g__22615__auto___26356))
;

cljs.spec.impl.gen.char_ascii.cljs$core$IFn$_invoke$arity$variadic = ((function (g__22615__auto___26356){
return (function (args){
return cljs.core.deref.call(null,g__22615__auto___26356);
});})(g__22615__auto___26356))
;

cljs.spec.impl.gen.char_ascii.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.char_ascii.cljs$lang$applyTo = ((function (g__22615__auto___26356){
return (function (seq26317){
return cljs.spec.impl.gen.char_ascii.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq26317));
});})(g__22615__auto___26356))
;


var g__22615__auto___26360 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.double$ !== 'undefined')){
return clojure.test.check.generators.double$;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","double","clojure.test.check.generators/double",668331090,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","double","clojure.test.check.generators/double",668331090,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/double
 */
cljs.spec.impl.gen.double$ = ((function (g__22615__auto___26360){
return (function cljs$spec$impl$gen$double(var_args){
var args__22372__auto__ = [];
var len__22365__auto___26361 = arguments.length;
var i__22366__auto___26362 = (0);
while(true){
if((i__22366__auto___26362 < len__22365__auto___26361)){
args__22372__auto__.push((arguments[i__22366__auto___26362]));

var G__26363 = (i__22366__auto___26362 + (1));
i__22366__auto___26362 = G__26363;
continue;
} else {
}
break;
}

var argseq__22373__auto__ = ((((0) < args__22372__auto__.length))?(new cljs.core.IndexedSeq(args__22372__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.double$.cljs$core$IFn$_invoke$arity$variadic(argseq__22373__auto__);
});})(g__22615__auto___26360))
;

cljs.spec.impl.gen.double$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__22615__auto___26360){
return (function (args){
return cljs.core.deref.call(null,g__22615__auto___26360);
});})(g__22615__auto___26360))
;

cljs.spec.impl.gen.double$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.double$.cljs$lang$applyTo = ((function (g__22615__auto___26360){
return (function (seq26318){
return cljs.spec.impl.gen.double$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq26318));
});})(g__22615__auto___26360))
;


var g__22615__auto___26364 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.int$ !== 'undefined')){
return clojure.test.check.generators.int$;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","int","clojure.test.check.generators/int",1756228469,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","int","clojure.test.check.generators/int",1756228469,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/int
 */
cljs.spec.impl.gen.int$ = ((function (g__22615__auto___26364){
return (function cljs$spec$impl$gen$int(var_args){
var args__22372__auto__ = [];
var len__22365__auto___26365 = arguments.length;
var i__22366__auto___26366 = (0);
while(true){
if((i__22366__auto___26366 < len__22365__auto___26365)){
args__22372__auto__.push((arguments[i__22366__auto___26366]));

var G__26367 = (i__22366__auto___26366 + (1));
i__22366__auto___26366 = G__26367;
continue;
} else {
}
break;
}

var argseq__22373__auto__ = ((((0) < args__22372__auto__.length))?(new cljs.core.IndexedSeq(args__22372__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.int$.cljs$core$IFn$_invoke$arity$variadic(argseq__22373__auto__);
});})(g__22615__auto___26364))
;

cljs.spec.impl.gen.int$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__22615__auto___26364){
return (function (args){
return cljs.core.deref.call(null,g__22615__auto___26364);
});})(g__22615__auto___26364))
;

cljs.spec.impl.gen.int$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.int$.cljs$lang$applyTo = ((function (g__22615__auto___26364){
return (function (seq26319){
return cljs.spec.impl.gen.int$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq26319));
});})(g__22615__auto___26364))
;


var g__22615__auto___26368 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.keyword !== 'undefined')){
return clojure.test.check.generators.keyword;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","keyword","clojure.test.check.generators/keyword",24530530,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","keyword","clojure.test.check.generators/keyword",24530530,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/keyword
 */
cljs.spec.impl.gen.keyword = ((function (g__22615__auto___26368){
return (function cljs$spec$impl$gen$keyword(var_args){
var args__22372__auto__ = [];
var len__22365__auto___26369 = arguments.length;
var i__22366__auto___26370 = (0);
while(true){
if((i__22366__auto___26370 < len__22365__auto___26369)){
args__22372__auto__.push((arguments[i__22366__auto___26370]));

var G__26371 = (i__22366__auto___26370 + (1));
i__22366__auto___26370 = G__26371;
continue;
} else {
}
break;
}

var argseq__22373__auto__ = ((((0) < args__22372__auto__.length))?(new cljs.core.IndexedSeq(args__22372__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.keyword.cljs$core$IFn$_invoke$arity$variadic(argseq__22373__auto__);
});})(g__22615__auto___26368))
;

cljs.spec.impl.gen.keyword.cljs$core$IFn$_invoke$arity$variadic = ((function (g__22615__auto___26368){
return (function (args){
return cljs.core.deref.call(null,g__22615__auto___26368);
});})(g__22615__auto___26368))
;

cljs.spec.impl.gen.keyword.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.keyword.cljs$lang$applyTo = ((function (g__22615__auto___26368){
return (function (seq26320){
return cljs.spec.impl.gen.keyword.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq26320));
});})(g__22615__auto___26368))
;


var g__22615__auto___26372 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.keyword_ns !== 'undefined')){
return clojure.test.check.generators.keyword_ns;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","keyword-ns","clojure.test.check.generators/keyword-ns",-1492628482,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","keyword-ns","clojure.test.check.generators/keyword-ns",-1492628482,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/keyword-ns
 */
cljs.spec.impl.gen.keyword_ns = ((function (g__22615__auto___26372){
return (function cljs$spec$impl$gen$keyword_ns(var_args){
var args__22372__auto__ = [];
var len__22365__auto___26373 = arguments.length;
var i__22366__auto___26374 = (0);
while(true){
if((i__22366__auto___26374 < len__22365__auto___26373)){
args__22372__auto__.push((arguments[i__22366__auto___26374]));

var G__26375 = (i__22366__auto___26374 + (1));
i__22366__auto___26374 = G__26375;
continue;
} else {
}
break;
}

var argseq__22373__auto__ = ((((0) < args__22372__auto__.length))?(new cljs.core.IndexedSeq(args__22372__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.keyword_ns.cljs$core$IFn$_invoke$arity$variadic(argseq__22373__auto__);
});})(g__22615__auto___26372))
;

cljs.spec.impl.gen.keyword_ns.cljs$core$IFn$_invoke$arity$variadic = ((function (g__22615__auto___26372){
return (function (args){
return cljs.core.deref.call(null,g__22615__auto___26372);
});})(g__22615__auto___26372))
;

cljs.spec.impl.gen.keyword_ns.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.keyword_ns.cljs$lang$applyTo = ((function (g__22615__auto___26372){
return (function (seq26321){
return cljs.spec.impl.gen.keyword_ns.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq26321));
});})(g__22615__auto___26372))
;


var g__22615__auto___26376 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.large_integer !== 'undefined')){
return clojure.test.check.generators.large_integer;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","large-integer","clojure.test.check.generators/large-integer",-865967138,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","large-integer","clojure.test.check.generators/large-integer",-865967138,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/large-integer
 */
cljs.spec.impl.gen.large_integer = ((function (g__22615__auto___26376){
return (function cljs$spec$impl$gen$large_integer(var_args){
var args__22372__auto__ = [];
var len__22365__auto___26377 = arguments.length;
var i__22366__auto___26378 = (0);
while(true){
if((i__22366__auto___26378 < len__22365__auto___26377)){
args__22372__auto__.push((arguments[i__22366__auto___26378]));

var G__26379 = (i__22366__auto___26378 + (1));
i__22366__auto___26378 = G__26379;
continue;
} else {
}
break;
}

var argseq__22373__auto__ = ((((0) < args__22372__auto__.length))?(new cljs.core.IndexedSeq(args__22372__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.large_integer.cljs$core$IFn$_invoke$arity$variadic(argseq__22373__auto__);
});})(g__22615__auto___26376))
;

cljs.spec.impl.gen.large_integer.cljs$core$IFn$_invoke$arity$variadic = ((function (g__22615__auto___26376){
return (function (args){
return cljs.core.deref.call(null,g__22615__auto___26376);
});})(g__22615__auto___26376))
;

cljs.spec.impl.gen.large_integer.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.large_integer.cljs$lang$applyTo = ((function (g__22615__auto___26376){
return (function (seq26322){
return cljs.spec.impl.gen.large_integer.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq26322));
});})(g__22615__auto___26376))
;


var g__22615__auto___26380 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.ratio !== 'undefined')){
return clojure.test.check.generators.ratio;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","ratio","clojure.test.check.generators/ratio",1540966915,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","ratio","clojure.test.check.generators/ratio",1540966915,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/ratio
 */
cljs.spec.impl.gen.ratio = ((function (g__22615__auto___26380){
return (function cljs$spec$impl$gen$ratio(var_args){
var args__22372__auto__ = [];
var len__22365__auto___26381 = arguments.length;
var i__22366__auto___26382 = (0);
while(true){
if((i__22366__auto___26382 < len__22365__auto___26381)){
args__22372__auto__.push((arguments[i__22366__auto___26382]));

var G__26383 = (i__22366__auto___26382 + (1));
i__22366__auto___26382 = G__26383;
continue;
} else {
}
break;
}

var argseq__22373__auto__ = ((((0) < args__22372__auto__.length))?(new cljs.core.IndexedSeq(args__22372__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.ratio.cljs$core$IFn$_invoke$arity$variadic(argseq__22373__auto__);
});})(g__22615__auto___26380))
;

cljs.spec.impl.gen.ratio.cljs$core$IFn$_invoke$arity$variadic = ((function (g__22615__auto___26380){
return (function (args){
return cljs.core.deref.call(null,g__22615__auto___26380);
});})(g__22615__auto___26380))
;

cljs.spec.impl.gen.ratio.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.ratio.cljs$lang$applyTo = ((function (g__22615__auto___26380){
return (function (seq26323){
return cljs.spec.impl.gen.ratio.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq26323));
});})(g__22615__auto___26380))
;


var g__22615__auto___26384 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.simple_type !== 'undefined')){
return clojure.test.check.generators.simple_type;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","simple-type","clojure.test.check.generators/simple-type",892572284,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","simple-type","clojure.test.check.generators/simple-type",892572284,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/simple-type
 */
cljs.spec.impl.gen.simple_type = ((function (g__22615__auto___26384){
return (function cljs$spec$impl$gen$simple_type(var_args){
var args__22372__auto__ = [];
var len__22365__auto___26385 = arguments.length;
var i__22366__auto___26386 = (0);
while(true){
if((i__22366__auto___26386 < len__22365__auto___26385)){
args__22372__auto__.push((arguments[i__22366__auto___26386]));

var G__26387 = (i__22366__auto___26386 + (1));
i__22366__auto___26386 = G__26387;
continue;
} else {
}
break;
}

var argseq__22373__auto__ = ((((0) < args__22372__auto__.length))?(new cljs.core.IndexedSeq(args__22372__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.simple_type.cljs$core$IFn$_invoke$arity$variadic(argseq__22373__auto__);
});})(g__22615__auto___26384))
;

cljs.spec.impl.gen.simple_type.cljs$core$IFn$_invoke$arity$variadic = ((function (g__22615__auto___26384){
return (function (args){
return cljs.core.deref.call(null,g__22615__auto___26384);
});})(g__22615__auto___26384))
;

cljs.spec.impl.gen.simple_type.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.simple_type.cljs$lang$applyTo = ((function (g__22615__auto___26384){
return (function (seq26324){
return cljs.spec.impl.gen.simple_type.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq26324));
});})(g__22615__auto___26384))
;


var g__22615__auto___26388 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.simple_type_printable !== 'undefined')){
return clojure.test.check.generators.simple_type_printable;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","simple-type-printable","clojure.test.check.generators/simple-type-printable",-58489962,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","simple-type-printable","clojure.test.check.generators/simple-type-printable",-58489962,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/simple-type-printable
 */
cljs.spec.impl.gen.simple_type_printable = ((function (g__22615__auto___26388){
return (function cljs$spec$impl$gen$simple_type_printable(var_args){
var args__22372__auto__ = [];
var len__22365__auto___26389 = arguments.length;
var i__22366__auto___26390 = (0);
while(true){
if((i__22366__auto___26390 < len__22365__auto___26389)){
args__22372__auto__.push((arguments[i__22366__auto___26390]));

var G__26391 = (i__22366__auto___26390 + (1));
i__22366__auto___26390 = G__26391;
continue;
} else {
}
break;
}

var argseq__22373__auto__ = ((((0) < args__22372__auto__.length))?(new cljs.core.IndexedSeq(args__22372__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic(argseq__22373__auto__);
});})(g__22615__auto___26388))
;

cljs.spec.impl.gen.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic = ((function (g__22615__auto___26388){
return (function (args){
return cljs.core.deref.call(null,g__22615__auto___26388);
});})(g__22615__auto___26388))
;

cljs.spec.impl.gen.simple_type_printable.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.simple_type_printable.cljs$lang$applyTo = ((function (g__22615__auto___26388){
return (function (seq26325){
return cljs.spec.impl.gen.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq26325));
});})(g__22615__auto___26388))
;


var g__22615__auto___26392 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string !== 'undefined')){
return clojure.test.check.generators.string;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","string","clojure.test.check.generators/string",-1704750979,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string","clojure.test.check.generators/string",-1704750979,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string
 */
cljs.spec.impl.gen.string = ((function (g__22615__auto___26392){
return (function cljs$spec$impl$gen$string(var_args){
var args__22372__auto__ = [];
var len__22365__auto___26393 = arguments.length;
var i__22366__auto___26394 = (0);
while(true){
if((i__22366__auto___26394 < len__22365__auto___26393)){
args__22372__auto__.push((arguments[i__22366__auto___26394]));

var G__26395 = (i__22366__auto___26394 + (1));
i__22366__auto___26394 = G__26395;
continue;
} else {
}
break;
}

var argseq__22373__auto__ = ((((0) < args__22372__auto__.length))?(new cljs.core.IndexedSeq(args__22372__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.string.cljs$core$IFn$_invoke$arity$variadic(argseq__22373__auto__);
});})(g__22615__auto___26392))
;

cljs.spec.impl.gen.string.cljs$core$IFn$_invoke$arity$variadic = ((function (g__22615__auto___26392){
return (function (args){
return cljs.core.deref.call(null,g__22615__auto___26392);
});})(g__22615__auto___26392))
;

cljs.spec.impl.gen.string.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.string.cljs$lang$applyTo = ((function (g__22615__auto___26392){
return (function (seq26326){
return cljs.spec.impl.gen.string.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq26326));
});})(g__22615__auto___26392))
;


var g__22615__auto___26396 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string_ascii !== 'undefined')){
return clojure.test.check.generators.string_ascii;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","string-ascii","clojure.test.check.generators/string-ascii",-2009877640,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string-ascii","clojure.test.check.generators/string-ascii",-2009877640,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string-ascii
 */
cljs.spec.impl.gen.string_ascii = ((function (g__22615__auto___26396){
return (function cljs$spec$impl$gen$string_ascii(var_args){
var args__22372__auto__ = [];
var len__22365__auto___26397 = arguments.length;
var i__22366__auto___26398 = (0);
while(true){
if((i__22366__auto___26398 < len__22365__auto___26397)){
args__22372__auto__.push((arguments[i__22366__auto___26398]));

var G__26399 = (i__22366__auto___26398 + (1));
i__22366__auto___26398 = G__26399;
continue;
} else {
}
break;
}

var argseq__22373__auto__ = ((((0) < args__22372__auto__.length))?(new cljs.core.IndexedSeq(args__22372__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.string_ascii.cljs$core$IFn$_invoke$arity$variadic(argseq__22373__auto__);
});})(g__22615__auto___26396))
;

cljs.spec.impl.gen.string_ascii.cljs$core$IFn$_invoke$arity$variadic = ((function (g__22615__auto___26396){
return (function (args){
return cljs.core.deref.call(null,g__22615__auto___26396);
});})(g__22615__auto___26396))
;

cljs.spec.impl.gen.string_ascii.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.string_ascii.cljs$lang$applyTo = ((function (g__22615__auto___26396){
return (function (seq26327){
return cljs.spec.impl.gen.string_ascii.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq26327));
});})(g__22615__auto___26396))
;


var g__22615__auto___26400 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string_alphanumeric !== 'undefined')){
return clojure.test.check.generators.string_alphanumeric;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","string-alphanumeric","clojure.test.check.generators/string-alphanumeric",836374939,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string-alphanumeric","clojure.test.check.generators/string-alphanumeric",836374939,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string-alphanumeric
 */
cljs.spec.impl.gen.string_alphanumeric = ((function (g__22615__auto___26400){
return (function cljs$spec$impl$gen$string_alphanumeric(var_args){
var args__22372__auto__ = [];
var len__22365__auto___26401 = arguments.length;
var i__22366__auto___26402 = (0);
while(true){
if((i__22366__auto___26402 < len__22365__auto___26401)){
args__22372__auto__.push((arguments[i__22366__auto___26402]));

var G__26403 = (i__22366__auto___26402 + (1));
i__22366__auto___26402 = G__26403;
continue;
} else {
}
break;
}

var argseq__22373__auto__ = ((((0) < args__22372__auto__.length))?(new cljs.core.IndexedSeq(args__22372__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(argseq__22373__auto__);
});})(g__22615__auto___26400))
;

cljs.spec.impl.gen.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic = ((function (g__22615__auto___26400){
return (function (args){
return cljs.core.deref.call(null,g__22615__auto___26400);
});})(g__22615__auto___26400))
;

cljs.spec.impl.gen.string_alphanumeric.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.string_alphanumeric.cljs$lang$applyTo = ((function (g__22615__auto___26400){
return (function (seq26328){
return cljs.spec.impl.gen.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq26328));
});})(g__22615__auto___26400))
;


var g__22615__auto___26404 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.symbol !== 'undefined')){
return clojure.test.check.generators.symbol;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","symbol","clojure.test.check.generators/symbol",-1305461065,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","symbol","clojure.test.check.generators/symbol",-1305461065,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/symbol
 */
cljs.spec.impl.gen.symbol = ((function (g__22615__auto___26404){
return (function cljs$spec$impl$gen$symbol(var_args){
var args__22372__auto__ = [];
var len__22365__auto___26405 = arguments.length;
var i__22366__auto___26406 = (0);
while(true){
if((i__22366__auto___26406 < len__22365__auto___26405)){
args__22372__auto__.push((arguments[i__22366__auto___26406]));

var G__26407 = (i__22366__auto___26406 + (1));
i__22366__auto___26406 = G__26407;
continue;
} else {
}
break;
}

var argseq__22373__auto__ = ((((0) < args__22372__auto__.length))?(new cljs.core.IndexedSeq(args__22372__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.symbol.cljs$core$IFn$_invoke$arity$variadic(argseq__22373__auto__);
});})(g__22615__auto___26404))
;

cljs.spec.impl.gen.symbol.cljs$core$IFn$_invoke$arity$variadic = ((function (g__22615__auto___26404){
return (function (args){
return cljs.core.deref.call(null,g__22615__auto___26404);
});})(g__22615__auto___26404))
;

cljs.spec.impl.gen.symbol.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.symbol.cljs$lang$applyTo = ((function (g__22615__auto___26404){
return (function (seq26329){
return cljs.spec.impl.gen.symbol.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq26329));
});})(g__22615__auto___26404))
;


var g__22615__auto___26408 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.symbol_ns !== 'undefined')){
return clojure.test.check.generators.symbol_ns;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","symbol-ns","clojure.test.check.generators/symbol-ns",-862629490,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","symbol-ns","clojure.test.check.generators/symbol-ns",-862629490,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/symbol-ns
 */
cljs.spec.impl.gen.symbol_ns = ((function (g__22615__auto___26408){
return (function cljs$spec$impl$gen$symbol_ns(var_args){
var args__22372__auto__ = [];
var len__22365__auto___26409 = arguments.length;
var i__22366__auto___26410 = (0);
while(true){
if((i__22366__auto___26410 < len__22365__auto___26409)){
args__22372__auto__.push((arguments[i__22366__auto___26410]));

var G__26411 = (i__22366__auto___26410 + (1));
i__22366__auto___26410 = G__26411;
continue;
} else {
}
break;
}

var argseq__22373__auto__ = ((((0) < args__22372__auto__.length))?(new cljs.core.IndexedSeq(args__22372__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.symbol_ns.cljs$core$IFn$_invoke$arity$variadic(argseq__22373__auto__);
});})(g__22615__auto___26408))
;

cljs.spec.impl.gen.symbol_ns.cljs$core$IFn$_invoke$arity$variadic = ((function (g__22615__auto___26408){
return (function (args){
return cljs.core.deref.call(null,g__22615__auto___26408);
});})(g__22615__auto___26408))
;

cljs.spec.impl.gen.symbol_ns.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.symbol_ns.cljs$lang$applyTo = ((function (g__22615__auto___26408){
return (function (seq26330){
return cljs.spec.impl.gen.symbol_ns.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq26330));
});})(g__22615__auto___26408))
;


var g__22615__auto___26412 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.uuid !== 'undefined')){
return clojure.test.check.generators.uuid;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","uuid","clojure.test.check.generators/uuid",1589373144,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","uuid","clojure.test.check.generators/uuid",1589373144,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/uuid
 */
cljs.spec.impl.gen.uuid = ((function (g__22615__auto___26412){
return (function cljs$spec$impl$gen$uuid(var_args){
var args__22372__auto__ = [];
var len__22365__auto___26413 = arguments.length;
var i__22366__auto___26414 = (0);
while(true){
if((i__22366__auto___26414 < len__22365__auto___26413)){
args__22372__auto__.push((arguments[i__22366__auto___26414]));

var G__26415 = (i__22366__auto___26414 + (1));
i__22366__auto___26414 = G__26415;
continue;
} else {
}
break;
}

var argseq__22373__auto__ = ((((0) < args__22372__auto__.length))?(new cljs.core.IndexedSeq(args__22372__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.uuid.cljs$core$IFn$_invoke$arity$variadic(argseq__22373__auto__);
});})(g__22615__auto___26412))
;

cljs.spec.impl.gen.uuid.cljs$core$IFn$_invoke$arity$variadic = ((function (g__22615__auto___26412){
return (function (args){
return cljs.core.deref.call(null,g__22615__auto___26412);
});})(g__22615__auto___26412))
;

cljs.spec.impl.gen.uuid.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.uuid.cljs$lang$applyTo = ((function (g__22615__auto___26412){
return (function (seq26331){
return cljs.spec.impl.gen.uuid.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq26331));
});})(g__22615__auto___26412))
;

/**
 * Returns a generator of a sequence catenated from results of
 * gens, each of which should generate something sequential.
 */
cljs.spec.impl.gen.cat = (function cljs$spec$impl$gen$cat(var_args){
var args__22372__auto__ = [];
var len__22365__auto___26418 = arguments.length;
var i__22366__auto___26419 = (0);
while(true){
if((i__22366__auto___26419 < len__22365__auto___26418)){
args__22372__auto__.push((arguments[i__22366__auto___26419]));

var G__26420 = (i__22366__auto___26419 + (1));
i__22366__auto___26419 = G__26420;
continue;
} else {
}
break;
}

var argseq__22373__auto__ = ((((0) < args__22372__auto__.length))?(new cljs.core.IndexedSeq(args__22372__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.cat.cljs$core$IFn$_invoke$arity$variadic(argseq__22373__auto__);
});

cljs.spec.impl.gen.cat.cljs$core$IFn$_invoke$arity$variadic = (function (gens){
return cljs.spec.impl.gen.fmap.call(null,(function (p1__26416_SHARP_){
return cljs.core.apply.call(null,cljs.core.concat,p1__26416_SHARP_);
}),cljs.core.apply.call(null,cljs.spec.impl.gen.tuple,gens));
});

cljs.spec.impl.gen.cat.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.cat.cljs$lang$applyTo = (function (seq26417){
return cljs.spec.impl.gen.cat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq26417));
});

cljs.spec.impl.gen.qualified_QMARK_ = (function cljs$spec$impl$gen$qualified_QMARK_(ident){
return !((cljs.core.namespace.call(null,ident) == null));
});
cljs.spec.impl.gen.gen_builtins = (new cljs.core.Delay((function (){
var simple = cljs.spec.impl.gen.simple_type_printable.call(null);
return cljs.core.PersistentHashMap.fromArrays([cljs.core.qualified_keyword_QMARK_,cljs.core.seq_QMARK_,cljs.core.vector_QMARK_,cljs.core.any_QMARK_,cljs.core.boolean_QMARK_,cljs.core.char_QMARK_,cljs.core.inst_QMARK_,cljs.core.simple_symbol_QMARK_,cljs.core.sequential_QMARK_,cljs.core.float_QMARK_,cljs.core.set_QMARK_,cljs.core.map_QMARK_,cljs.core.empty_QMARK_,cljs.core.string_QMARK_,cljs.core.double_QMARK_,cljs.core.int_QMARK_,cljs.core.associative_QMARK_,cljs.core.keyword_QMARK_,cljs.core.indexed_QMARK_,cljs.core.zero_QMARK_,cljs.core.simple_keyword_QMARK_,cljs.core.neg_int_QMARK_,cljs.core.nil_QMARK_,cljs.core.ident_QMARK_,cljs.core.qualified_ident_QMARK_,cljs.core.true_QMARK_,cljs.core.integer_QMARK_,cljs.core.nat_int_QMARK_,cljs.core.pos_int_QMARK_,cljs.core.uuid_QMARK_,cljs.core.false_QMARK_,cljs.core.list_QMARK_,cljs.core.simple_ident_QMARK_,cljs.core.number_QMARK_,cljs.core.qualified_symbol_QMARK_,cljs.core.seqable_QMARK_,cljs.core.symbol_QMARK_,cljs.core.coll_QMARK_],[cljs.spec.impl.gen.such_that.call(null,cljs.spec.impl.gen.qualified_QMARK_,cljs.spec.impl.gen.keyword_ns.call(null)),cljs.spec.impl.gen.list.call(null,simple),cljs.spec.impl.gen.vector.call(null,simple),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.return$.call(null,null),cljs.spec.impl.gen.any_printable.call(null)], null)),cljs.spec.impl.gen.boolean$.call(null),cljs.spec.impl.gen.char$.call(null),cljs.spec.impl.gen.fmap.call(null,((function (simple){
return (function (p1__26421_SHARP_){
return (new Date(p1__26421_SHARP_));
});})(simple))
,cljs.spec.impl.gen.large_integer.call(null)),cljs.spec.impl.gen.symbol.call(null),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.list.call(null,simple),cljs.spec.impl.gen.vector.call(null,simple)], null)),cljs.spec.impl.gen.double$.call(null),cljs.spec.impl.gen.set.call(null,simple),cljs.spec.impl.gen.map.call(null,simple,simple),cljs.spec.impl.gen.elements.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,cljs.core.List.EMPTY,cljs.core.PersistentVector.EMPTY,cljs.core.PersistentArrayMap.EMPTY,cljs.core.PersistentHashSet.EMPTY], null)),cljs.spec.impl.gen.string_alphanumeric.call(null),cljs.spec.impl.gen.double$.call(null),cljs.spec.impl.gen.large_integer.call(null),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.map.call(null,simple,simple),cljs.spec.impl.gen.vector.call(null,simple)], null)),cljs.spec.impl.gen.keyword_ns.call(null),cljs.spec.impl.gen.vector.call(null,simple),cljs.spec.impl.gen.return$.call(null,(0)),cljs.spec.impl.gen.keyword.call(null),cljs.spec.impl.gen.large_integer_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"max","max",61366548),(-1)], null)),cljs.spec.impl.gen.return$.call(null,null),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.keyword_ns.call(null),cljs.spec.impl.gen.symbol_ns.call(null)], null)),cljs.spec.impl.gen.such_that.call(null,cljs.spec.impl.gen.qualified_QMARK_,cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.keyword_ns.call(null),cljs.spec.impl.gen.symbol_ns.call(null)], null))),cljs.spec.impl.gen.return$.call(null,true),cljs.spec.impl.gen.large_integer.call(null),cljs.spec.impl.gen.large_integer_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"min","min",444991522),(0)], null)),cljs.spec.impl.gen.large_integer_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"min","min",444991522),(1)], null)),cljs.spec.impl.gen.uuid.call(null),cljs.spec.impl.gen.return$.call(null,false),cljs.spec.impl.gen.list.call(null,simple),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.keyword.call(null),cljs.spec.impl.gen.symbol.call(null)], null)),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.large_integer.call(null),cljs.spec.impl.gen.double$.call(null)], null)),cljs.spec.impl.gen.such_that.call(null,cljs.spec.impl.gen.qualified_QMARK_,cljs.spec.impl.gen.symbol_ns.call(null)),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.return$.call(null,null),cljs.spec.impl.gen.list.call(null,simple),cljs.spec.impl.gen.vector.call(null,simple),cljs.spec.impl.gen.map.call(null,simple,simple),cljs.spec.impl.gen.set.call(null,simple),cljs.spec.impl.gen.string_alphanumeric.call(null)], null)),cljs.spec.impl.gen.symbol_ns.call(null),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.map.call(null,simple,simple),cljs.spec.impl.gen.list.call(null,simple),cljs.spec.impl.gen.vector.call(null,simple),cljs.spec.impl.gen.set.call(null,simple)], null))]);
}),null));
/**
 * Given a predicate, returns a built-in generator if one exists.
 */
cljs.spec.impl.gen.gen_for_pred = (function cljs$spec$impl$gen$gen_for_pred(pred){
if(cljs.core.set_QMARK_.call(null,pred)){
return cljs.spec.impl.gen.elements.call(null,pred);
} else {
return cljs.core.get.call(null,cljs.core.deref.call(null,cljs.spec.impl.gen.gen_builtins),pred);
}
});

//# sourceMappingURL=gen.js.map