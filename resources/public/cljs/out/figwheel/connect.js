// Compiled by ClojureScript 1.9.293 {}
goog.provide('figwheel.connect');
goog.require('cljs.core');
goog.require('shopping_demo.app');
goog.require('figwheel.client');
goog.require('figwheel.client.utils');
figwheel.client.start.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),(function() { 
var G__25040__delegate = function (x){
if(cljs.core.truth_(shopping_demo.app.load)){
return cljs.core.apply.call(null,shopping_demo.app.load,x);
} else {
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: :on-jsload hook 'shopping-demo.app/load' is missing");
}
};
var G__25040 = function (var_args){
var x = null;
if (arguments.length > 0) {
var G__25041__i = 0, G__25041__a = new Array(arguments.length -  0);
while (G__25041__i < G__25041__a.length) {G__25041__a[G__25041__i] = arguments[G__25041__i + 0]; ++G__25041__i;}
  x = new cljs.core.IndexedSeq(G__25041__a,0);
} 
return G__25040__delegate.call(this,x);};
G__25040.cljs$lang$maxFixedArity = 0;
G__25040.cljs$lang$applyTo = (function (arglist__25042){
var x = cljs.core.seq(arglist__25042);
return G__25040__delegate(x);
});
G__25040.cljs$core$IFn$_invoke$arity$variadic = G__25040__delegate;
return G__25040;
})()
,new cljs.core.Keyword(null,"build-id","build-id",1642831089),"dev",new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),"ws://localhost:3448/figwheel-ws"], null));

//# sourceMappingURL=connect.js.map