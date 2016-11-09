// Compiled by ClojureScript 1.9.293 {}
goog.provide('figwheel.client.file_reloading');
goog.require('cljs.core');
goog.require('goog.string');
goog.require('goog.Uri');
goog.require('goog.net.jsloader');
goog.require('cljs.core.async');
goog.require('goog.object');
goog.require('clojure.set');
goog.require('clojure.string');
goog.require('figwheel.client.utils');
if(typeof figwheel.client.file_reloading.figwheel_meta_pragmas !== 'undefined'){
} else {
figwheel.client.file_reloading.figwheel_meta_pragmas = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
figwheel.client.file_reloading.on_jsload_custom_event = (function figwheel$client$file_reloading$on_jsload_custom_event(url){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.js-reload",url);
});
figwheel.client.file_reloading.before_jsload_custom_event = (function figwheel$client$file_reloading$before_jsload_custom_event(files){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.before-js-reload",files);
});
figwheel.client.file_reloading.namespace_file_map_QMARK_ = (function figwheel$client$file_reloading$namespace_file_map_QMARK_(m){
var or__21149__auto__ = (cljs.core.map_QMARK_.call(null,m)) && (typeof new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(m) === 'string') && (((new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) == null)) || (typeof new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) === 'string')) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"namespace","namespace",-377510372)));
if(or__21149__auto__){
return or__21149__auto__;
} else {
cljs.core.println.call(null,"Error not namespace-file-map",cljs.core.pr_str.call(null,m));

return false;
}
});
figwheel.client.file_reloading.add_cache_buster = (function figwheel$client$file_reloading$add_cache_buster(url){

return goog.Uri.parse(url).makeUnique();
});
figwheel.client.file_reloading.name__GT_path = (function figwheel$client$file_reloading$name__GT_path(ns){

return (goog.dependencies_.nameToPath[ns]);
});
figwheel.client.file_reloading.provided_QMARK_ = (function figwheel$client$file_reloading$provided_QMARK_(ns){
return (goog.dependencies_.written[figwheel.client.file_reloading.name__GT_path.call(null,ns)]);
});
figwheel.client.file_reloading.fix_node_request_url = (function figwheel$client$file_reloading$fix_node_request_url(url){

if(cljs.core.truth_(goog.string.startsWith(url,"../"))){
return clojure.string.replace.call(null,url,"../","");
} else {
return [cljs.core.str("goog/"),cljs.core.str(url)].join('');
}
});
figwheel.client.file_reloading.immutable_ns_QMARK_ = (function figwheel$client$file_reloading$immutable_ns_QMARK_(name){
var or__21149__auto__ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 9, ["svgpan.SvgPan",null,"far.out",null,"testDep.bar",null,"someprotopackage.TestPackageTypes",null,"goog",null,"an.existing.path",null,"cljs.core",null,"ns",null,"dup.base",null], null), null).call(null,name);
if(cljs.core.truth_(or__21149__auto__)){
return or__21149__auto__;
} else {
return cljs.core.some.call(null,cljs.core.partial.call(null,goog.string.startsWith,name),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, ["goog.","cljs.","clojure.","fake.","proto2."], null));
}
});
figwheel.client.file_reloading.get_requires = (function figwheel$client$file_reloading$get_requires(ns){
return cljs.core.set.call(null,cljs.core.filter.call(null,(function (p1__30100_SHARP_){
return cljs.core.not.call(null,figwheel.client.file_reloading.immutable_ns_QMARK_.call(null,p1__30100_SHARP_));
}),goog.object.getKeys((goog.dependencies_.requires[figwheel.client.file_reloading.name__GT_path.call(null,ns)]))));
});
if(typeof figwheel.client.file_reloading.dependency_data !== 'undefined'){
} else {
figwheel.client.file_reloading.dependency_data = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"dependents","dependents",136812837),cljs.core.PersistentArrayMap.EMPTY], null));
}
figwheel.client.file_reloading.path_to_name_BANG_ = (function figwheel$client$file_reloading$path_to_name_BANG_(path,name){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.fromArray([name], true));
});
/**
 * Setup a path to name dependencies map.
 * That goes from path -> #{ ns-names }
 */
figwheel.client.file_reloading.setup_path__GT_name_BANG_ = (function figwheel$client$file_reloading$setup_path__GT_name_BANG_(){
var nameToPath = goog.object.filter(goog.dependencies_.nameToPath,(function (v,k,o){
return goog.string.startsWith(v,"../");
}));
return goog.object.forEach(nameToPath,((function (nameToPath){
return (function (v,k,o){
return figwheel.client.file_reloading.path_to_name_BANG_.call(null,v,k);
});})(nameToPath))
);
});
/**
 * returns a set of namespaces defined by a path
 */
figwheel.client.file_reloading.path__GT_name = (function figwheel$client$file_reloading$path__GT_name(path){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null));
});
figwheel.client.file_reloading.name_to_parent_BANG_ = (function figwheel$client$file_reloading$name_to_parent_BANG_(ns,parent_ns){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.fromArray([parent_ns], true));
});
/**
 * This reverses the goog.dependencies_.requires for looking up ns-dependents.
 */
figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_ = (function figwheel$client$file_reloading$setup_ns__GT_dependents_BANG_(){
var requires = goog.object.filter(goog.dependencies_.requires,(function (v,k,o){
return goog.string.startsWith(k,"../");
}));
return goog.object.forEach(requires,((function (requires){
return (function (v,k,_){
return goog.object.forEach(v,((function (requires){
return (function (v_SINGLEQUOTE_,k_SINGLEQUOTE_,___$1){
var seq__30105 = cljs.core.seq.call(null,figwheel.client.file_reloading.path__GT_name.call(null,k));
var chunk__30106 = null;
var count__30107 = (0);
var i__30108 = (0);
while(true){
if((i__30108 < count__30107)){
var n = cljs.core._nth.call(null,chunk__30106,i__30108);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__30109 = seq__30105;
var G__30110 = chunk__30106;
var G__30111 = count__30107;
var G__30112 = (i__30108 + (1));
seq__30105 = G__30109;
chunk__30106 = G__30110;
count__30107 = G__30111;
i__30108 = G__30112;
continue;
} else {
var temp__6747__auto__ = cljs.core.seq.call(null,seq__30105);
if(temp__6747__auto__){
var seq__30105__$1 = temp__6747__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30105__$1)){
var c__22055__auto__ = cljs.core.chunk_first.call(null,seq__30105__$1);
var G__30113 = cljs.core.chunk_rest.call(null,seq__30105__$1);
var G__30114 = c__22055__auto__;
var G__30115 = cljs.core.count.call(null,c__22055__auto__);
var G__30116 = (0);
seq__30105 = G__30113;
chunk__30106 = G__30114;
count__30107 = G__30115;
i__30108 = G__30116;
continue;
} else {
var n = cljs.core.first.call(null,seq__30105__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__30117 = cljs.core.next.call(null,seq__30105__$1);
var G__30118 = null;
var G__30119 = (0);
var G__30120 = (0);
seq__30105 = G__30117;
chunk__30106 = G__30118;
count__30107 = G__30119;
i__30108 = G__30120;
continue;
}
} else {
return null;
}
}
break;
}
});})(requires))
);
});})(requires))
);
});
figwheel.client.file_reloading.ns__GT_dependents = (function figwheel$client$file_reloading$ns__GT_dependents(ns){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null));
});
figwheel.client.file_reloading.build_topo_sort = (function figwheel$client$file_reloading$build_topo_sort(get_deps){
var get_deps__$1 = cljs.core.memoize.call(null,get_deps);
var topo_sort_helper_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_topo_sort_helper_STAR_(x,depth,state){
var deps = get_deps__$1.call(null,x);
if(cljs.core.empty_QMARK_.call(null,deps)){
return null;
} else {
return topo_sort_STAR_.call(null,deps,depth,state);
}
});})(get_deps__$1))
;
var topo_sort_STAR_ = ((function (get_deps__$1){
return (function() {
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = null;
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1 = (function (deps){
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.call(null,deps,(0),cljs.core.atom.call(null,cljs.core.sorted_map.call(null)));
});
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3 = (function (deps,depth,state){
cljs.core.swap_BANG_.call(null,state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [depth], null),cljs.core.fnil.call(null,cljs.core.into,cljs.core.PersistentHashSet.EMPTY),deps);

var seq__30171_30182 = cljs.core.seq.call(null,deps);
var chunk__30172_30183 = null;
var count__30173_30184 = (0);
var i__30174_30185 = (0);
while(true){
if((i__30174_30185 < count__30173_30184)){
var dep_30186 = cljs.core._nth.call(null,chunk__30172_30183,i__30174_30185);
topo_sort_helper_STAR_.call(null,dep_30186,(depth + (1)),state);

var G__30187 = seq__30171_30182;
var G__30188 = chunk__30172_30183;
var G__30189 = count__30173_30184;
var G__30190 = (i__30174_30185 + (1));
seq__30171_30182 = G__30187;
chunk__30172_30183 = G__30188;
count__30173_30184 = G__30189;
i__30174_30185 = G__30190;
continue;
} else {
var temp__6747__auto___30191 = cljs.core.seq.call(null,seq__30171_30182);
if(temp__6747__auto___30191){
var seq__30171_30192__$1 = temp__6747__auto___30191;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30171_30192__$1)){
var c__22055__auto___30193 = cljs.core.chunk_first.call(null,seq__30171_30192__$1);
var G__30194 = cljs.core.chunk_rest.call(null,seq__30171_30192__$1);
var G__30195 = c__22055__auto___30193;
var G__30196 = cljs.core.count.call(null,c__22055__auto___30193);
var G__30197 = (0);
seq__30171_30182 = G__30194;
chunk__30172_30183 = G__30195;
count__30173_30184 = G__30196;
i__30174_30185 = G__30197;
continue;
} else {
var dep_30198 = cljs.core.first.call(null,seq__30171_30192__$1);
topo_sort_helper_STAR_.call(null,dep_30198,(depth + (1)),state);

var G__30199 = cljs.core.next.call(null,seq__30171_30192__$1);
var G__30200 = null;
var G__30201 = (0);
var G__30202 = (0);
seq__30171_30182 = G__30199;
chunk__30172_30183 = G__30200;
count__30173_30184 = G__30201;
i__30174_30185 = G__30202;
continue;
}
} else {
}
}
break;
}

if(cljs.core._EQ_.call(null,depth,(0))){
return elim_dups_STAR_.call(null,cljs.core.reverse.call(null,cljs.core.vals.call(null,cljs.core.deref.call(null,state))));
} else {
return null;
}
});
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = function(deps,depth,state){
switch(arguments.length){
case 1:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1.call(this,deps);
case 3:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3.call(this,deps,depth,state);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1;
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$3 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3;
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_;
})()
;})(get_deps__$1))
;
var elim_dups_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_(p__30175){
var vec__30179 = p__30175;
var seq__30180 = cljs.core.seq.call(null,vec__30179);
var first__30181 = cljs.core.first.call(null,seq__30180);
var seq__30180__$1 = cljs.core.next.call(null,seq__30180);
var x = first__30181;
var xs = seq__30180__$1;
if((x == null)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.cons.call(null,x,figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_.call(null,cljs.core.map.call(null,((function (vec__30179,seq__30180,first__30181,seq__30180__$1,x,xs,get_deps__$1){
return (function (p1__30121_SHARP_){
return clojure.set.difference.call(null,p1__30121_SHARP_,x);
});})(vec__30179,seq__30180,first__30181,seq__30180__$1,x,xs,get_deps__$1))
,xs)));
}
});})(get_deps__$1))
;
return topo_sort_STAR_;
});
figwheel.client.file_reloading.get_all_dependencies = (function figwheel$client$file_reloading$get_all_dependencies(ns){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.get_requires);
return cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ns], null))));
});
figwheel.client.file_reloading.get_all_dependents = (function figwheel$client$file_reloading$get_all_dependents(nss){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.ns__GT_dependents);
return cljs.core.reverse.call(null,cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,nss))));
});
figwheel.client.file_reloading.unprovide_BANG_ = (function figwheel$client$file_reloading$unprovide_BANG_(ns){
var path = figwheel.client.file_reloading.name__GT_path.call(null,ns);
goog.object.remove(goog.dependencies_.visited,path);

goog.object.remove(goog.dependencies_.written,path);

return goog.object.remove(goog.dependencies_.written,[cljs.core.str(goog.basePath),cljs.core.str(path)].join(''));
});
figwheel.client.file_reloading.resolve_ns = (function figwheel$client$file_reloading$resolve_ns(ns){
return [cljs.core.str(goog.basePath),cljs.core.str(figwheel.client.file_reloading.name__GT_path.call(null,ns))].join('');
});
figwheel.client.file_reloading.addDependency = (function figwheel$client$file_reloading$addDependency(path,provides,requires){
var seq__30215 = cljs.core.seq.call(null,provides);
var chunk__30216 = null;
var count__30217 = (0);
var i__30218 = (0);
while(true){
if((i__30218 < count__30217)){
var prov = cljs.core._nth.call(null,chunk__30216,i__30218);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__30219_30227 = cljs.core.seq.call(null,requires);
var chunk__30220_30228 = null;
var count__30221_30229 = (0);
var i__30222_30230 = (0);
while(true){
if((i__30222_30230 < count__30221_30229)){
var req_30231 = cljs.core._nth.call(null,chunk__30220_30228,i__30222_30230);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_30231,prov);

var G__30232 = seq__30219_30227;
var G__30233 = chunk__30220_30228;
var G__30234 = count__30221_30229;
var G__30235 = (i__30222_30230 + (1));
seq__30219_30227 = G__30232;
chunk__30220_30228 = G__30233;
count__30221_30229 = G__30234;
i__30222_30230 = G__30235;
continue;
} else {
var temp__6747__auto___30236 = cljs.core.seq.call(null,seq__30219_30227);
if(temp__6747__auto___30236){
var seq__30219_30237__$1 = temp__6747__auto___30236;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30219_30237__$1)){
var c__22055__auto___30238 = cljs.core.chunk_first.call(null,seq__30219_30237__$1);
var G__30239 = cljs.core.chunk_rest.call(null,seq__30219_30237__$1);
var G__30240 = c__22055__auto___30238;
var G__30241 = cljs.core.count.call(null,c__22055__auto___30238);
var G__30242 = (0);
seq__30219_30227 = G__30239;
chunk__30220_30228 = G__30240;
count__30221_30229 = G__30241;
i__30222_30230 = G__30242;
continue;
} else {
var req_30243 = cljs.core.first.call(null,seq__30219_30237__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_30243,prov);

var G__30244 = cljs.core.next.call(null,seq__30219_30237__$1);
var G__30245 = null;
var G__30246 = (0);
var G__30247 = (0);
seq__30219_30227 = G__30244;
chunk__30220_30228 = G__30245;
count__30221_30229 = G__30246;
i__30222_30230 = G__30247;
continue;
}
} else {
}
}
break;
}

var G__30248 = seq__30215;
var G__30249 = chunk__30216;
var G__30250 = count__30217;
var G__30251 = (i__30218 + (1));
seq__30215 = G__30248;
chunk__30216 = G__30249;
count__30217 = G__30250;
i__30218 = G__30251;
continue;
} else {
var temp__6747__auto__ = cljs.core.seq.call(null,seq__30215);
if(temp__6747__auto__){
var seq__30215__$1 = temp__6747__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30215__$1)){
var c__22055__auto__ = cljs.core.chunk_first.call(null,seq__30215__$1);
var G__30252 = cljs.core.chunk_rest.call(null,seq__30215__$1);
var G__30253 = c__22055__auto__;
var G__30254 = cljs.core.count.call(null,c__22055__auto__);
var G__30255 = (0);
seq__30215 = G__30252;
chunk__30216 = G__30253;
count__30217 = G__30254;
i__30218 = G__30255;
continue;
} else {
var prov = cljs.core.first.call(null,seq__30215__$1);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__30223_30256 = cljs.core.seq.call(null,requires);
var chunk__30224_30257 = null;
var count__30225_30258 = (0);
var i__30226_30259 = (0);
while(true){
if((i__30226_30259 < count__30225_30258)){
var req_30260 = cljs.core._nth.call(null,chunk__30224_30257,i__30226_30259);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_30260,prov);

var G__30261 = seq__30223_30256;
var G__30262 = chunk__30224_30257;
var G__30263 = count__30225_30258;
var G__30264 = (i__30226_30259 + (1));
seq__30223_30256 = G__30261;
chunk__30224_30257 = G__30262;
count__30225_30258 = G__30263;
i__30226_30259 = G__30264;
continue;
} else {
var temp__6747__auto___30265__$1 = cljs.core.seq.call(null,seq__30223_30256);
if(temp__6747__auto___30265__$1){
var seq__30223_30266__$1 = temp__6747__auto___30265__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30223_30266__$1)){
var c__22055__auto___30267 = cljs.core.chunk_first.call(null,seq__30223_30266__$1);
var G__30268 = cljs.core.chunk_rest.call(null,seq__30223_30266__$1);
var G__30269 = c__22055__auto___30267;
var G__30270 = cljs.core.count.call(null,c__22055__auto___30267);
var G__30271 = (0);
seq__30223_30256 = G__30268;
chunk__30224_30257 = G__30269;
count__30225_30258 = G__30270;
i__30226_30259 = G__30271;
continue;
} else {
var req_30272 = cljs.core.first.call(null,seq__30223_30266__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_30272,prov);

var G__30273 = cljs.core.next.call(null,seq__30223_30266__$1);
var G__30274 = null;
var G__30275 = (0);
var G__30276 = (0);
seq__30223_30256 = G__30273;
chunk__30224_30257 = G__30274;
count__30225_30258 = G__30275;
i__30226_30259 = G__30276;
continue;
}
} else {
}
}
break;
}

var G__30277 = cljs.core.next.call(null,seq__30215__$1);
var G__30278 = null;
var G__30279 = (0);
var G__30280 = (0);
seq__30215 = G__30277;
chunk__30216 = G__30278;
count__30217 = G__30279;
i__30218 = G__30280;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.file_reloading.figwheel_require = (function figwheel$client$file_reloading$figwheel_require(src,reload){
goog.require = figwheel.client.file_reloading.figwheel_require;

if(cljs.core._EQ_.call(null,reload,"reload-all")){
var seq__30285_30289 = cljs.core.seq.call(null,figwheel.client.file_reloading.get_all_dependencies.call(null,src));
var chunk__30286_30290 = null;
var count__30287_30291 = (0);
var i__30288_30292 = (0);
while(true){
if((i__30288_30292 < count__30287_30291)){
var ns_30293 = cljs.core._nth.call(null,chunk__30286_30290,i__30288_30292);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_30293);

var G__30294 = seq__30285_30289;
var G__30295 = chunk__30286_30290;
var G__30296 = count__30287_30291;
var G__30297 = (i__30288_30292 + (1));
seq__30285_30289 = G__30294;
chunk__30286_30290 = G__30295;
count__30287_30291 = G__30296;
i__30288_30292 = G__30297;
continue;
} else {
var temp__6747__auto___30298 = cljs.core.seq.call(null,seq__30285_30289);
if(temp__6747__auto___30298){
var seq__30285_30299__$1 = temp__6747__auto___30298;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30285_30299__$1)){
var c__22055__auto___30300 = cljs.core.chunk_first.call(null,seq__30285_30299__$1);
var G__30301 = cljs.core.chunk_rest.call(null,seq__30285_30299__$1);
var G__30302 = c__22055__auto___30300;
var G__30303 = cljs.core.count.call(null,c__22055__auto___30300);
var G__30304 = (0);
seq__30285_30289 = G__30301;
chunk__30286_30290 = G__30302;
count__30287_30291 = G__30303;
i__30288_30292 = G__30304;
continue;
} else {
var ns_30305 = cljs.core.first.call(null,seq__30285_30299__$1);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_30305);

var G__30306 = cljs.core.next.call(null,seq__30285_30299__$1);
var G__30307 = null;
var G__30308 = (0);
var G__30309 = (0);
seq__30285_30289 = G__30306;
chunk__30286_30290 = G__30307;
count__30287_30291 = G__30308;
i__30288_30292 = G__30309;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(reload)){
figwheel.client.file_reloading.unprovide_BANG_.call(null,src);
} else {
}

return goog.require_figwheel_backup_(src);
});
/**
 * Reusable browser REPL bootstrapping. Patches the essential functions
 *   in goog.base to support re-loading of namespaces after page load.
 */
figwheel.client.file_reloading.bootstrap_goog_base = (function figwheel$client$file_reloading$bootstrap_goog_base(){
if(cljs.core.truth_(COMPILED)){
return null;
} else {
goog.require_figwheel_backup_ = (function (){var or__21149__auto__ = goog.require__;
if(cljs.core.truth_(or__21149__auto__)){
return or__21149__auto__;
} else {
return goog.require;
}
})();

goog.isProvided_ = (function (name){
return false;
});

figwheel.client.file_reloading.setup_path__GT_name_BANG_.call(null);

figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_.call(null);

goog.addDependency_figwheel_backup_ = goog.addDependency;

goog.addDependency = (function() { 
var G__30310__delegate = function (args){
cljs.core.apply.call(null,figwheel.client.file_reloading.addDependency,args);

return cljs.core.apply.call(null,goog.addDependency_figwheel_backup_,args);
};
var G__30310 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__30311__i = 0, G__30311__a = new Array(arguments.length -  0);
while (G__30311__i < G__30311__a.length) {G__30311__a[G__30311__i] = arguments[G__30311__i + 0]; ++G__30311__i;}
  args = new cljs.core.IndexedSeq(G__30311__a,0);
} 
return G__30310__delegate.call(this,args);};
G__30310.cljs$lang$maxFixedArity = 0;
G__30310.cljs$lang$applyTo = (function (arglist__30312){
var args = cljs.core.seq(arglist__30312);
return G__30310__delegate(args);
});
G__30310.cljs$core$IFn$_invoke$arity$variadic = G__30310__delegate;
return G__30310;
})()
;

goog.constructNamespace_("cljs.user");

goog.global.CLOSURE_IMPORT_SCRIPT = figwheel.client.file_reloading.queued_file_reload;

return goog.require = figwheel.client.file_reloading.figwheel_require;
}
});
figwheel.client.file_reloading.patch_goog_base = (function figwheel$client$file_reloading$patch_goog_base(){
if(typeof figwheel.client.file_reloading.bootstrapped_cljs !== 'undefined'){
return null;
} else {
return (
figwheel.client.file_reloading.bootstrapped_cljs = (function (){
figwheel.client.file_reloading.bootstrap_goog_base.call(null);

return true;
})()
)
;
}
});
figwheel.client.file_reloading.reload_file_STAR_ = (function (){var pred__30314 = cljs.core._EQ_;
var expr__30315 = figwheel.client.utils.host_env_QMARK_.call(null);
if(cljs.core.truth_(pred__30314.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__30315))){
var path_parts = ((function (pred__30314,expr__30315){
return (function (p1__30313_SHARP_){
return clojure.string.split.call(null,p1__30313_SHARP_,/[\/\\]/);
});})(pred__30314,expr__30315))
;
var sep = (cljs.core.truth_(cljs.core.re_matches.call(null,/win.*/,process.platform))?"\\":"/");
var root = clojure.string.join.call(null,sep,cljs.core.pop.call(null,cljs.core.pop.call(null,path_parts.call(null,__dirname))));
return ((function (path_parts,sep,root,pred__30314,expr__30315){
return (function (request_url,callback){

var cache_path = clojure.string.join.call(null,sep,cljs.core.cons.call(null,root,path_parts.call(null,figwheel.client.file_reloading.fix_node_request_url.call(null,request_url))));
(require.cache[cache_path] = null);

return callback.call(null,(function (){try{return require(cache_path);
}catch (e30317){if((e30317 instanceof Error)){
var e = e30317;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(cache_path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e30317;

}
}})());
});
;})(path_parts,sep,root,pred__30314,expr__30315))
} else {
if(cljs.core.truth_(pred__30314.call(null,new cljs.core.Keyword(null,"html","html",-998796897),expr__30315))){
return ((function (pred__30314,expr__30315){
return (function (request_url,callback){

var deferred = goog.net.jsloader.load(figwheel.client.file_reloading.add_cache_buster.call(null,request_url),({"cleanupWhenDone": true}));
deferred.addCallback(((function (deferred,pred__30314,expr__30315){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
});})(deferred,pred__30314,expr__30315))
);

return deferred.addErrback(((function (deferred,pred__30314,expr__30315){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
});})(deferred,pred__30314,expr__30315))
);
});
;})(pred__30314,expr__30315))
} else {
return ((function (pred__30314,expr__30315){
return (function (a,b){
throw "Reload not defined for this platform";
});
;})(pred__30314,expr__30315))
}
}
})();
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__30318,callback){
var map__30321 = p__30318;
var map__30321__$1 = ((((!((map__30321 == null)))?((((map__30321.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30321.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30321):map__30321);
var file_msg = map__30321__$1;
var request_url = cljs.core.get.call(null,map__30321__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Attempting to load "),cljs.core.str(request_url)].join(''));

return figwheel.client.file_reloading.reload_file_STAR_.call(null,request_url,((function (map__30321,map__30321__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Successfully loaded "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__30321,map__30321__$1,file_msg,request_url))
);
});
if(typeof figwheel.client.file_reloading.reload_chan !== 'undefined'){
} else {
figwheel.client.file_reloading.reload_chan = cljs.core.async.chan.call(null);
}
if(typeof figwheel.client.file_reloading.on_load_callbacks !== 'undefined'){
} else {
figwheel.client.file_reloading.on_load_callbacks = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
if(typeof figwheel.client.file_reloading.dependencies_loaded !== 'undefined'){
} else {
figwheel.client.file_reloading.dependencies_loaded = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
}
figwheel.client.file_reloading.blocking_load = (function figwheel$client$file_reloading$blocking_load(url){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.reload_file.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"request-url","request-url",2100346596),url], null),((function (out){
return (function (file_msg){
cljs.core.async.put_BANG_.call(null,out,file_msg);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
if(typeof figwheel.client.file_reloading.reloader_loop !== 'undefined'){
} else {
figwheel.client.file_reloading.reloader_loop = (function (){var c__24143__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24143__auto__){
return (function (){
var f__24144__auto__ = (function (){var switch__24120__auto__ = ((function (c__24143__auto__){
return (function (state_30345){
var state_val_30346 = (state_30345[(1)]);
if((state_val_30346 === (7))){
var inst_30341 = (state_30345[(2)]);
var state_30345__$1 = state_30345;
var statearr_30347_30367 = state_30345__$1;
(statearr_30347_30367[(2)] = inst_30341);

(statearr_30347_30367[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30346 === (1))){
var state_30345__$1 = state_30345;
var statearr_30348_30368 = state_30345__$1;
(statearr_30348_30368[(2)] = null);

(statearr_30348_30368[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30346 === (4))){
var inst_30325 = (state_30345[(7)]);
var inst_30325__$1 = (state_30345[(2)]);
var state_30345__$1 = (function (){var statearr_30349 = state_30345;
(statearr_30349[(7)] = inst_30325__$1);

return statearr_30349;
})();
if(cljs.core.truth_(inst_30325__$1)){
var statearr_30350_30369 = state_30345__$1;
(statearr_30350_30369[(1)] = (5));

} else {
var statearr_30351_30370 = state_30345__$1;
(statearr_30351_30370[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30346 === (6))){
var state_30345__$1 = state_30345;
var statearr_30352_30371 = state_30345__$1;
(statearr_30352_30371[(2)] = null);

(statearr_30352_30371[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30346 === (3))){
var inst_30343 = (state_30345[(2)]);
var state_30345__$1 = state_30345;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30345__$1,inst_30343);
} else {
if((state_val_30346 === (2))){
var state_30345__$1 = state_30345;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30345__$1,(4),figwheel.client.file_reloading.reload_chan);
} else {
if((state_val_30346 === (11))){
var inst_30337 = (state_30345[(2)]);
var state_30345__$1 = (function (){var statearr_30353 = state_30345;
(statearr_30353[(8)] = inst_30337);

return statearr_30353;
})();
var statearr_30354_30372 = state_30345__$1;
(statearr_30354_30372[(2)] = null);

(statearr_30354_30372[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30346 === (9))){
var inst_30329 = (state_30345[(9)]);
var inst_30331 = (state_30345[(10)]);
var inst_30333 = inst_30331.call(null,inst_30329);
var state_30345__$1 = state_30345;
var statearr_30355_30373 = state_30345__$1;
(statearr_30355_30373[(2)] = inst_30333);

(statearr_30355_30373[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30346 === (5))){
var inst_30325 = (state_30345[(7)]);
var inst_30327 = figwheel.client.file_reloading.blocking_load.call(null,inst_30325);
var state_30345__$1 = state_30345;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30345__$1,(8),inst_30327);
} else {
if((state_val_30346 === (10))){
var inst_30329 = (state_30345[(9)]);
var inst_30335 = cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,cljs.core.conj,inst_30329);
var state_30345__$1 = state_30345;
var statearr_30356_30374 = state_30345__$1;
(statearr_30356_30374[(2)] = inst_30335);

(statearr_30356_30374[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30346 === (8))){
var inst_30325 = (state_30345[(7)]);
var inst_30331 = (state_30345[(10)]);
var inst_30329 = (state_30345[(2)]);
var inst_30330 = cljs.core.deref.call(null,figwheel.client.file_reloading.on_load_callbacks);
var inst_30331__$1 = cljs.core.get.call(null,inst_30330,inst_30325);
var state_30345__$1 = (function (){var statearr_30357 = state_30345;
(statearr_30357[(9)] = inst_30329);

(statearr_30357[(10)] = inst_30331__$1);

return statearr_30357;
})();
if(cljs.core.truth_(inst_30331__$1)){
var statearr_30358_30375 = state_30345__$1;
(statearr_30358_30375[(1)] = (9));

} else {
var statearr_30359_30376 = state_30345__$1;
(statearr_30359_30376[(1)] = (10));

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
});})(c__24143__auto__))
;
return ((function (switch__24120__auto__,c__24143__auto__){
return (function() {
var figwheel$client$file_reloading$state_machine__24121__auto__ = null;
var figwheel$client$file_reloading$state_machine__24121__auto____0 = (function (){
var statearr_30363 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_30363[(0)] = figwheel$client$file_reloading$state_machine__24121__auto__);

(statearr_30363[(1)] = (1));

return statearr_30363;
});
var figwheel$client$file_reloading$state_machine__24121__auto____1 = (function (state_30345){
while(true){
var ret_value__24122__auto__ = (function (){try{while(true){
var result__24123__auto__ = switch__24120__auto__.call(null,state_30345);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24123__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24123__auto__;
}
break;
}
}catch (e30364){if((e30364 instanceof Object)){
var ex__24124__auto__ = e30364;
var statearr_30365_30377 = state_30345;
(statearr_30365_30377[(5)] = ex__24124__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30345);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30364;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24122__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30378 = state_30345;
state_30345 = G__30378;
continue;
} else {
return ret_value__24122__auto__;
}
break;
}
});
figwheel$client$file_reloading$state_machine__24121__auto__ = function(state_30345){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$state_machine__24121__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$state_machine__24121__auto____1.call(this,state_30345);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$state_machine__24121__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$state_machine__24121__auto____0;
figwheel$client$file_reloading$state_machine__24121__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$state_machine__24121__auto____1;
return figwheel$client$file_reloading$state_machine__24121__auto__;
})()
;})(switch__24120__auto__,c__24143__auto__))
})();
var state__24145__auto__ = (function (){var statearr_30366 = f__24144__auto__.call(null);
(statearr_30366[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24143__auto__);

return statearr_30366;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24145__auto__);
});})(c__24143__auto__))
);

return c__24143__auto__;
})();
}
figwheel.client.file_reloading.queued_file_reload = (function figwheel$client$file_reloading$queued_file_reload(url){
return cljs.core.async.put_BANG_.call(null,figwheel.client.file_reloading.reload_chan,url);
});
figwheel.client.file_reloading.require_with_callback = (function figwheel$client$file_reloading$require_with_callback(p__30379,callback){
var map__30382 = p__30379;
var map__30382__$1 = ((((!((map__30382 == null)))?((((map__30382.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30382.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30382):map__30382);
var file_msg = map__30382__$1;
var namespace = cljs.core.get.call(null,map__30382__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = figwheel.client.file_reloading.resolve_ns.call(null,namespace);
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.assoc,request_url,((function (request_url,map__30382,map__30382__$1,file_msg,namespace){
return (function (file_msg_SINGLEQUOTE_){
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.dissoc,request_url);

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,file_msg,cljs.core.select_keys.call(null,file_msg_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375)], null)))], null));
});})(request_url,map__30382,map__30382__$1,file_msg,namespace))
);

return figwheel.client.file_reloading.figwheel_require.call(null,cljs.core.name.call(null,namespace),true);
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__30384){
var map__30387 = p__30384;
var map__30387__$1 = ((((!((map__30387 == null)))?((((map__30387.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30387.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30387):map__30387);
var file_msg = map__30387__$1;
var namespace = cljs.core.get.call(null,map__30387__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
var and__21137__auto__ = cljs.core.not.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_pragmas));
if(and__21137__auto__){
var or__21149__auto__ = new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__21149__auto__)){
return or__21149__auto__;
} else {
var or__21149__auto____$1 = new cljs.core.Keyword(null,"figwheel-load","figwheel-load",1316089175).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__21149__auto____$1)){
return or__21149__auto____$1;
} else {
return figwheel.client.file_reloading.provided_QMARK_.call(null,cljs.core.name.call(null,namespace));
}
}
} else {
return and__21137__auto__;
}
});
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__30389,callback){
var map__30392 = p__30389;
var map__30392__$1 = ((((!((map__30392 == null)))?((((map__30392.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30392.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30392):map__30392);
var file_msg = map__30392__$1;
var request_url = cljs.core.get.call(null,map__30392__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__30392__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

if(cljs.core.truth_(figwheel.client.file_reloading.reload_file_QMARK_.call(null,file_msg))){
return figwheel.client.file_reloading.require_with_callback.call(null,file_msg,callback);
} else {
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("Figwheel: Not trying to load file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});
figwheel.client.file_reloading.reload_js_file = (function figwheel$client$file_reloading$reload_js_file(file_msg){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.js_reload.call(null,file_msg,((function (out){
return (function (url){
cljs.core.async.put_BANG_.call(null,out,url);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
/**
 * Returns a chanel with one collection of loaded filenames on it.
 */
figwheel.client.file_reloading.load_all_js_files = (function figwheel$client$file_reloading$load_all_js_files(files){
var out = cljs.core.async.chan.call(null);
var c__24143__auto___30496 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24143__auto___30496,out){
return (function (){
var f__24144__auto__ = (function (){var switch__24120__auto__ = ((function (c__24143__auto___30496,out){
return (function (state_30478){
var state_val_30479 = (state_30478[(1)]);
if((state_val_30479 === (1))){
var inst_30452 = cljs.core.seq.call(null,files);
var inst_30453 = cljs.core.first.call(null,inst_30452);
var inst_30454 = cljs.core.next.call(null,inst_30452);
var inst_30455 = files;
var state_30478__$1 = (function (){var statearr_30480 = state_30478;
(statearr_30480[(7)] = inst_30453);

(statearr_30480[(8)] = inst_30455);

(statearr_30480[(9)] = inst_30454);

return statearr_30480;
})();
var statearr_30481_30497 = state_30478__$1;
(statearr_30481_30497[(2)] = null);

(statearr_30481_30497[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30479 === (2))){
var inst_30461 = (state_30478[(10)]);
var inst_30455 = (state_30478[(8)]);
var inst_30460 = cljs.core.seq.call(null,inst_30455);
var inst_30461__$1 = cljs.core.first.call(null,inst_30460);
var inst_30462 = cljs.core.next.call(null,inst_30460);
var inst_30463 = (inst_30461__$1 == null);
var inst_30464 = cljs.core.not.call(null,inst_30463);
var state_30478__$1 = (function (){var statearr_30482 = state_30478;
(statearr_30482[(10)] = inst_30461__$1);

(statearr_30482[(11)] = inst_30462);

return statearr_30482;
})();
if(inst_30464){
var statearr_30483_30498 = state_30478__$1;
(statearr_30483_30498[(1)] = (4));

} else {
var statearr_30484_30499 = state_30478__$1;
(statearr_30484_30499[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30479 === (3))){
var inst_30476 = (state_30478[(2)]);
var state_30478__$1 = state_30478;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30478__$1,inst_30476);
} else {
if((state_val_30479 === (4))){
var inst_30461 = (state_30478[(10)]);
var inst_30466 = figwheel.client.file_reloading.reload_js_file.call(null,inst_30461);
var state_30478__$1 = state_30478;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30478__$1,(7),inst_30466);
} else {
if((state_val_30479 === (5))){
var inst_30472 = cljs.core.async.close_BANG_.call(null,out);
var state_30478__$1 = state_30478;
var statearr_30485_30500 = state_30478__$1;
(statearr_30485_30500[(2)] = inst_30472);

(statearr_30485_30500[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30479 === (6))){
var inst_30474 = (state_30478[(2)]);
var state_30478__$1 = state_30478;
var statearr_30486_30501 = state_30478__$1;
(statearr_30486_30501[(2)] = inst_30474);

(statearr_30486_30501[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30479 === (7))){
var inst_30462 = (state_30478[(11)]);
var inst_30468 = (state_30478[(2)]);
var inst_30469 = cljs.core.async.put_BANG_.call(null,out,inst_30468);
var inst_30455 = inst_30462;
var state_30478__$1 = (function (){var statearr_30487 = state_30478;
(statearr_30487[(8)] = inst_30455);

(statearr_30487[(12)] = inst_30469);

return statearr_30487;
})();
var statearr_30488_30502 = state_30478__$1;
(statearr_30488_30502[(2)] = null);

(statearr_30488_30502[(1)] = (2));


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
});})(c__24143__auto___30496,out))
;
return ((function (switch__24120__auto__,c__24143__auto___30496,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__24121__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__24121__auto____0 = (function (){
var statearr_30492 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30492[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__24121__auto__);

(statearr_30492[(1)] = (1));

return statearr_30492;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__24121__auto____1 = (function (state_30478){
while(true){
var ret_value__24122__auto__ = (function (){try{while(true){
var result__24123__auto__ = switch__24120__auto__.call(null,state_30478);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24123__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24123__auto__;
}
break;
}
}catch (e30493){if((e30493 instanceof Object)){
var ex__24124__auto__ = e30493;
var statearr_30494_30503 = state_30478;
(statearr_30494_30503[(5)] = ex__24124__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30478);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30493;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24122__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30504 = state_30478;
state_30478 = G__30504;
continue;
} else {
return ret_value__24122__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__24121__auto__ = function(state_30478){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__24121__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__24121__auto____1.call(this,state_30478);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__24121__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__24121__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__24121__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__24121__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__24121__auto__;
})()
;})(switch__24120__auto__,c__24143__auto___30496,out))
})();
var state__24145__auto__ = (function (){var statearr_30495 = f__24144__auto__.call(null);
(statearr_30495[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24143__auto___30496);

return statearr_30495;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24145__auto__);
});})(c__24143__auto___30496,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__30505,opts){
var map__30509 = p__30505;
var map__30509__$1 = ((((!((map__30509 == null)))?((((map__30509.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30509.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30509):map__30509);
var eval_body = cljs.core.get.call(null,map__30509__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__30509__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_((function (){var and__21137__auto__ = eval_body;
if(cljs.core.truth_(and__21137__auto__)){
return typeof eval_body === 'string';
} else {
return and__21137__auto__;
}
})())){
var code = eval_body;
try{figwheel.client.utils.debug_prn.call(null,[cljs.core.str("Evaling file "),cljs.core.str(file)].join(''));

return figwheel.client.utils.eval_helper.call(null,code,opts);
}catch (e30511){var e = e30511;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Unable to evaluate "),cljs.core.str(file)].join(''));
}} else {
return null;
}
});
figwheel.client.file_reloading.expand_files = (function figwheel$client$file_reloading$expand_files(files){
var deps = figwheel.client.file_reloading.get_all_dependents.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.not,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["figwheel.connect",null], null), null),new cljs.core.Keyword(null,"namespace","namespace",-377510372)),cljs.core.map.call(null,((function (deps){
return (function (n){
var temp__6745__auto__ = cljs.core.first.call(null,cljs.core.filter.call(null,((function (deps){
return (function (p1__30512_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__30512_SHARP_),n);
});})(deps))
,files));
if(cljs.core.truth_(temp__6745__auto__)){
var file_msg = temp__6745__auto__;
return file_msg;
} else {
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372),new cljs.core.Keyword(null,"namespace","namespace",-377510372),n], null);
}
});})(deps))
,deps));
});
figwheel.client.file_reloading.sort_files = (function figwheel$client$file_reloading$sort_files(files){
if((cljs.core.count.call(null,files) <= (1))){
return files;
} else {
var keep_files = cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,keep_files,new cljs.core.Keyword(null,"namespace","namespace",-377510372)),figwheel.client.file_reloading.expand_files.call(null,files));
}
});
figwheel.client.file_reloading.get_figwheel_always = (function figwheel$client$file_reloading$get_figwheel_always(){
return cljs.core.map.call(null,(function (p__30521){
var vec__30522 = p__30521;
var k = cljs.core.nth.call(null,vec__30522,(0),null);
var v = cljs.core.nth.call(null,vec__30522,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),k,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372)], null);
}),cljs.core.filter.call(null,(function (p__30525){
var vec__30526 = p__30525;
var k = cljs.core.nth.call(null,vec__30526,(0),null);
var v = cljs.core.nth.call(null,vec__30526,(1),null);
return new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(v);
}),cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas)));
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__30532,p__30533){
var map__30781 = p__30532;
var map__30781__$1 = ((((!((map__30781 == null)))?((((map__30781.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30781.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30781):map__30781);
var opts = map__30781__$1;
var before_jsload = cljs.core.get.call(null,map__30781__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__30781__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var reload_dependents = cljs.core.get.call(null,map__30781__$1,new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430));
var map__30782 = p__30533;
var map__30782__$1 = ((((!((map__30782 == null)))?((((map__30782.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30782.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30782):map__30782);
var msg = map__30782__$1;
var files = cljs.core.get.call(null,map__30782__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var figwheel_meta = cljs.core.get.call(null,map__30782__$1,new cljs.core.Keyword(null,"figwheel-meta","figwheel-meta",-225970237));
var recompile_dependents = cljs.core.get.call(null,map__30782__$1,new cljs.core.Keyword(null,"recompile-dependents","recompile-dependents",523804171));
if(cljs.core.empty_QMARK_.call(null,figwheel_meta)){
} else {
cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas,figwheel_meta);
}

var c__24143__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24143__auto__,map__30781,map__30781__$1,opts,before_jsload,on_jsload,reload_dependents,map__30782,map__30782__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
var f__24144__auto__ = (function (){var switch__24120__auto__ = ((function (c__24143__auto__,map__30781,map__30781__$1,opts,before_jsload,on_jsload,reload_dependents,map__30782,map__30782__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (state_30936){
var state_val_30937 = (state_30936[(1)]);
if((state_val_30937 === (7))){
var inst_30799 = (state_30936[(7)]);
var inst_30797 = (state_30936[(8)]);
var inst_30796 = (state_30936[(9)]);
var inst_30798 = (state_30936[(10)]);
var inst_30804 = cljs.core._nth.call(null,inst_30797,inst_30799);
var inst_30805 = figwheel.client.file_reloading.eval_body.call(null,inst_30804,opts);
var inst_30806 = (inst_30799 + (1));
var tmp30938 = inst_30797;
var tmp30939 = inst_30796;
var tmp30940 = inst_30798;
var inst_30796__$1 = tmp30939;
var inst_30797__$1 = tmp30938;
var inst_30798__$1 = tmp30940;
var inst_30799__$1 = inst_30806;
var state_30936__$1 = (function (){var statearr_30941 = state_30936;
(statearr_30941[(7)] = inst_30799__$1);

(statearr_30941[(8)] = inst_30797__$1);

(statearr_30941[(9)] = inst_30796__$1);

(statearr_30941[(10)] = inst_30798__$1);

(statearr_30941[(11)] = inst_30805);

return statearr_30941;
})();
var statearr_30942_31028 = state_30936__$1;
(statearr_30942_31028[(2)] = null);

(statearr_30942_31028[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30937 === (20))){
var inst_30839 = (state_30936[(12)]);
var inst_30847 = figwheel.client.file_reloading.sort_files.call(null,inst_30839);
var state_30936__$1 = state_30936;
var statearr_30943_31029 = state_30936__$1;
(statearr_30943_31029[(2)] = inst_30847);

(statearr_30943_31029[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30937 === (27))){
var state_30936__$1 = state_30936;
var statearr_30944_31030 = state_30936__$1;
(statearr_30944_31030[(2)] = null);

(statearr_30944_31030[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30937 === (1))){
var inst_30788 = (state_30936[(13)]);
var inst_30785 = before_jsload.call(null,files);
var inst_30786 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_30787 = (function (){return ((function (inst_30788,inst_30785,inst_30786,state_val_30937,c__24143__auto__,map__30781,map__30781__$1,opts,before_jsload,on_jsload,reload_dependents,map__30782,map__30782__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__30529_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__30529_SHARP_);
});
;})(inst_30788,inst_30785,inst_30786,state_val_30937,c__24143__auto__,map__30781,map__30781__$1,opts,before_jsload,on_jsload,reload_dependents,map__30782,map__30782__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_30788__$1 = cljs.core.filter.call(null,inst_30787,files);
var inst_30789 = cljs.core.not_empty.call(null,inst_30788__$1);
var state_30936__$1 = (function (){var statearr_30945 = state_30936;
(statearr_30945[(14)] = inst_30786);

(statearr_30945[(13)] = inst_30788__$1);

(statearr_30945[(15)] = inst_30785);

return statearr_30945;
})();
if(cljs.core.truth_(inst_30789)){
var statearr_30946_31031 = state_30936__$1;
(statearr_30946_31031[(1)] = (2));

} else {
var statearr_30947_31032 = state_30936__$1;
(statearr_30947_31032[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30937 === (24))){
var state_30936__$1 = state_30936;
var statearr_30948_31033 = state_30936__$1;
(statearr_30948_31033[(2)] = null);

(statearr_30948_31033[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30937 === (39))){
var inst_30889 = (state_30936[(16)]);
var state_30936__$1 = state_30936;
var statearr_30949_31034 = state_30936__$1;
(statearr_30949_31034[(2)] = inst_30889);

(statearr_30949_31034[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30937 === (46))){
var inst_30931 = (state_30936[(2)]);
var state_30936__$1 = state_30936;
var statearr_30950_31035 = state_30936__$1;
(statearr_30950_31035[(2)] = inst_30931);

(statearr_30950_31035[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30937 === (4))){
var inst_30833 = (state_30936[(2)]);
var inst_30834 = cljs.core.List.EMPTY;
var inst_30835 = cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,inst_30834);
var inst_30836 = (function (){return ((function (inst_30833,inst_30834,inst_30835,state_val_30937,c__24143__auto__,map__30781,map__30781__$1,opts,before_jsload,on_jsload,reload_dependents,map__30782,map__30782__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__30530_SHARP_){
var and__21137__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__30530_SHARP_);
if(cljs.core.truth_(and__21137__auto__)){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__30530_SHARP_));
} else {
return and__21137__auto__;
}
});
;})(inst_30833,inst_30834,inst_30835,state_val_30937,c__24143__auto__,map__30781,map__30781__$1,opts,before_jsload,on_jsload,reload_dependents,map__30782,map__30782__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_30837 = cljs.core.filter.call(null,inst_30836,files);
var inst_30838 = figwheel.client.file_reloading.get_figwheel_always.call(null);
var inst_30839 = cljs.core.concat.call(null,inst_30837,inst_30838);
var state_30936__$1 = (function (){var statearr_30951 = state_30936;
(statearr_30951[(17)] = inst_30835);

(statearr_30951[(18)] = inst_30833);

(statearr_30951[(12)] = inst_30839);

return statearr_30951;
})();
if(cljs.core.truth_(reload_dependents)){
var statearr_30952_31036 = state_30936__$1;
(statearr_30952_31036[(1)] = (16));

} else {
var statearr_30953_31037 = state_30936__$1;
(statearr_30953_31037[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30937 === (15))){
var inst_30823 = (state_30936[(2)]);
var state_30936__$1 = state_30936;
var statearr_30954_31038 = state_30936__$1;
(statearr_30954_31038[(2)] = inst_30823);

(statearr_30954_31038[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30937 === (21))){
var inst_30849 = (state_30936[(19)]);
var inst_30849__$1 = (state_30936[(2)]);
var inst_30850 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_30849__$1);
var state_30936__$1 = (function (){var statearr_30955 = state_30936;
(statearr_30955[(19)] = inst_30849__$1);

return statearr_30955;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30936__$1,(22),inst_30850);
} else {
if((state_val_30937 === (31))){
var inst_30934 = (state_30936[(2)]);
var state_30936__$1 = state_30936;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30936__$1,inst_30934);
} else {
if((state_val_30937 === (32))){
var inst_30889 = (state_30936[(16)]);
var inst_30894 = inst_30889.cljs$lang$protocol_mask$partition0$;
var inst_30895 = (inst_30894 & (64));
var inst_30896 = inst_30889.cljs$core$ISeq$;
var inst_30897 = (cljs.core.PROTOCOL_SENTINEL === inst_30896);
var inst_30898 = (inst_30895) || (inst_30897);
var state_30936__$1 = state_30936;
if(cljs.core.truth_(inst_30898)){
var statearr_30956_31039 = state_30936__$1;
(statearr_30956_31039[(1)] = (35));

} else {
var statearr_30957_31040 = state_30936__$1;
(statearr_30957_31040[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30937 === (40))){
var inst_30911 = (state_30936[(20)]);
var inst_30910 = (state_30936[(2)]);
var inst_30911__$1 = cljs.core.get.call(null,inst_30910,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_30912 = cljs.core.get.call(null,inst_30910,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_30913 = cljs.core.not_empty.call(null,inst_30911__$1);
var state_30936__$1 = (function (){var statearr_30958 = state_30936;
(statearr_30958[(20)] = inst_30911__$1);

(statearr_30958[(21)] = inst_30912);

return statearr_30958;
})();
if(cljs.core.truth_(inst_30913)){
var statearr_30959_31041 = state_30936__$1;
(statearr_30959_31041[(1)] = (41));

} else {
var statearr_30960_31042 = state_30936__$1;
(statearr_30960_31042[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30937 === (33))){
var state_30936__$1 = state_30936;
var statearr_30961_31043 = state_30936__$1;
(statearr_30961_31043[(2)] = false);

(statearr_30961_31043[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30937 === (13))){
var inst_30809 = (state_30936[(22)]);
var inst_30813 = cljs.core.chunk_first.call(null,inst_30809);
var inst_30814 = cljs.core.chunk_rest.call(null,inst_30809);
var inst_30815 = cljs.core.count.call(null,inst_30813);
var inst_30796 = inst_30814;
var inst_30797 = inst_30813;
var inst_30798 = inst_30815;
var inst_30799 = (0);
var state_30936__$1 = (function (){var statearr_30962 = state_30936;
(statearr_30962[(7)] = inst_30799);

(statearr_30962[(8)] = inst_30797);

(statearr_30962[(9)] = inst_30796);

(statearr_30962[(10)] = inst_30798);

return statearr_30962;
})();
var statearr_30963_31044 = state_30936__$1;
(statearr_30963_31044[(2)] = null);

(statearr_30963_31044[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30937 === (22))){
var inst_30849 = (state_30936[(19)]);
var inst_30857 = (state_30936[(23)]);
var inst_30853 = (state_30936[(24)]);
var inst_30852 = (state_30936[(25)]);
var inst_30852__$1 = (state_30936[(2)]);
var inst_30853__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_30852__$1);
var inst_30854 = (function (){var all_files = inst_30849;
var res_SINGLEQUOTE_ = inst_30852__$1;
var res = inst_30853__$1;
return ((function (all_files,res_SINGLEQUOTE_,res,inst_30849,inst_30857,inst_30853,inst_30852,inst_30852__$1,inst_30853__$1,state_val_30937,c__24143__auto__,map__30781,map__30781__$1,opts,before_jsload,on_jsload,reload_dependents,map__30782,map__30782__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__30531_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__30531_SHARP_));
});
;})(all_files,res_SINGLEQUOTE_,res,inst_30849,inst_30857,inst_30853,inst_30852,inst_30852__$1,inst_30853__$1,state_val_30937,c__24143__auto__,map__30781,map__30781__$1,opts,before_jsload,on_jsload,reload_dependents,map__30782,map__30782__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_30855 = cljs.core.filter.call(null,inst_30854,inst_30852__$1);
var inst_30856 = cljs.core.deref.call(null,figwheel.client.file_reloading.dependencies_loaded);
var inst_30857__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_30856);
var inst_30858 = cljs.core.not_empty.call(null,inst_30857__$1);
var state_30936__$1 = (function (){var statearr_30964 = state_30936;
(statearr_30964[(26)] = inst_30855);

(statearr_30964[(23)] = inst_30857__$1);

(statearr_30964[(24)] = inst_30853__$1);

(statearr_30964[(25)] = inst_30852__$1);

return statearr_30964;
})();
if(cljs.core.truth_(inst_30858)){
var statearr_30965_31045 = state_30936__$1;
(statearr_30965_31045[(1)] = (23));

} else {
var statearr_30966_31046 = state_30936__$1;
(statearr_30966_31046[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30937 === (36))){
var state_30936__$1 = state_30936;
var statearr_30967_31047 = state_30936__$1;
(statearr_30967_31047[(2)] = false);

(statearr_30967_31047[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30937 === (41))){
var inst_30911 = (state_30936[(20)]);
var inst_30915 = cljs.core.comp.call(null,figwheel.client.file_reloading.name__GT_path,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var inst_30916 = cljs.core.map.call(null,inst_30915,inst_30911);
var inst_30917 = cljs.core.pr_str.call(null,inst_30916);
var inst_30918 = [cljs.core.str("figwheel-no-load meta-data: "),cljs.core.str(inst_30917)].join('');
var inst_30919 = figwheel.client.utils.log.call(null,inst_30918);
var state_30936__$1 = state_30936;
var statearr_30968_31048 = state_30936__$1;
(statearr_30968_31048[(2)] = inst_30919);

(statearr_30968_31048[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30937 === (43))){
var inst_30912 = (state_30936[(21)]);
var inst_30922 = (state_30936[(2)]);
var inst_30923 = cljs.core.not_empty.call(null,inst_30912);
var state_30936__$1 = (function (){var statearr_30969 = state_30936;
(statearr_30969[(27)] = inst_30922);

return statearr_30969;
})();
if(cljs.core.truth_(inst_30923)){
var statearr_30970_31049 = state_30936__$1;
(statearr_30970_31049[(1)] = (44));

} else {
var statearr_30971_31050 = state_30936__$1;
(statearr_30971_31050[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30937 === (29))){
var inst_30889 = (state_30936[(16)]);
var inst_30849 = (state_30936[(19)]);
var inst_30855 = (state_30936[(26)]);
var inst_30857 = (state_30936[(23)]);
var inst_30853 = (state_30936[(24)]);
var inst_30852 = (state_30936[(25)]);
var inst_30885 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_30888 = (function (){var all_files = inst_30849;
var res_SINGLEQUOTE_ = inst_30852;
var res = inst_30853;
var files_not_loaded = inst_30855;
var dependencies_that_loaded = inst_30857;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_30889,inst_30849,inst_30855,inst_30857,inst_30853,inst_30852,inst_30885,state_val_30937,c__24143__auto__,map__30781,map__30781__$1,opts,before_jsload,on_jsload,reload_dependents,map__30782,map__30782__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__30887){
var map__30972 = p__30887;
var map__30972__$1 = ((((!((map__30972 == null)))?((((map__30972.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30972.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30972):map__30972);
var namespace = cljs.core.get.call(null,map__30972__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_data = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
if((meta_data == null)){
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);
} else {
if(cljs.core.truth_(meta_data.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179)))){
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179);
} else {
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);

}
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_30889,inst_30849,inst_30855,inst_30857,inst_30853,inst_30852,inst_30885,state_val_30937,c__24143__auto__,map__30781,map__30781__$1,opts,before_jsload,on_jsload,reload_dependents,map__30782,map__30782__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_30889__$1 = cljs.core.group_by.call(null,inst_30888,inst_30855);
var inst_30891 = (inst_30889__$1 == null);
var inst_30892 = cljs.core.not.call(null,inst_30891);
var state_30936__$1 = (function (){var statearr_30974 = state_30936;
(statearr_30974[(16)] = inst_30889__$1);

(statearr_30974[(28)] = inst_30885);

return statearr_30974;
})();
if(inst_30892){
var statearr_30975_31051 = state_30936__$1;
(statearr_30975_31051[(1)] = (32));

} else {
var statearr_30976_31052 = state_30936__$1;
(statearr_30976_31052[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30937 === (44))){
var inst_30912 = (state_30936[(21)]);
var inst_30925 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_30912);
var inst_30926 = cljs.core.pr_str.call(null,inst_30925);
var inst_30927 = [cljs.core.str("not required: "),cljs.core.str(inst_30926)].join('');
var inst_30928 = figwheel.client.utils.log.call(null,inst_30927);
var state_30936__$1 = state_30936;
var statearr_30977_31053 = state_30936__$1;
(statearr_30977_31053[(2)] = inst_30928);

(statearr_30977_31053[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30937 === (6))){
var inst_30830 = (state_30936[(2)]);
var state_30936__$1 = state_30936;
var statearr_30978_31054 = state_30936__$1;
(statearr_30978_31054[(2)] = inst_30830);

(statearr_30978_31054[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30937 === (28))){
var inst_30855 = (state_30936[(26)]);
var inst_30882 = (state_30936[(2)]);
var inst_30883 = cljs.core.not_empty.call(null,inst_30855);
var state_30936__$1 = (function (){var statearr_30979 = state_30936;
(statearr_30979[(29)] = inst_30882);

return statearr_30979;
})();
if(cljs.core.truth_(inst_30883)){
var statearr_30980_31055 = state_30936__$1;
(statearr_30980_31055[(1)] = (29));

} else {
var statearr_30981_31056 = state_30936__$1;
(statearr_30981_31056[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30937 === (25))){
var inst_30853 = (state_30936[(24)]);
var inst_30869 = (state_30936[(2)]);
var inst_30870 = cljs.core.not_empty.call(null,inst_30853);
var state_30936__$1 = (function (){var statearr_30982 = state_30936;
(statearr_30982[(30)] = inst_30869);

return statearr_30982;
})();
if(cljs.core.truth_(inst_30870)){
var statearr_30983_31057 = state_30936__$1;
(statearr_30983_31057[(1)] = (26));

} else {
var statearr_30984_31058 = state_30936__$1;
(statearr_30984_31058[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30937 === (34))){
var inst_30905 = (state_30936[(2)]);
var state_30936__$1 = state_30936;
if(cljs.core.truth_(inst_30905)){
var statearr_30985_31059 = state_30936__$1;
(statearr_30985_31059[(1)] = (38));

} else {
var statearr_30986_31060 = state_30936__$1;
(statearr_30986_31060[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30937 === (17))){
var state_30936__$1 = state_30936;
var statearr_30987_31061 = state_30936__$1;
(statearr_30987_31061[(2)] = recompile_dependents);

(statearr_30987_31061[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30937 === (3))){
var state_30936__$1 = state_30936;
var statearr_30988_31062 = state_30936__$1;
(statearr_30988_31062[(2)] = null);

(statearr_30988_31062[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30937 === (12))){
var inst_30826 = (state_30936[(2)]);
var state_30936__$1 = state_30936;
var statearr_30989_31063 = state_30936__$1;
(statearr_30989_31063[(2)] = inst_30826);

(statearr_30989_31063[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30937 === (2))){
var inst_30788 = (state_30936[(13)]);
var inst_30795 = cljs.core.seq.call(null,inst_30788);
var inst_30796 = inst_30795;
var inst_30797 = null;
var inst_30798 = (0);
var inst_30799 = (0);
var state_30936__$1 = (function (){var statearr_30990 = state_30936;
(statearr_30990[(7)] = inst_30799);

(statearr_30990[(8)] = inst_30797);

(statearr_30990[(9)] = inst_30796);

(statearr_30990[(10)] = inst_30798);

return statearr_30990;
})();
var statearr_30991_31064 = state_30936__$1;
(statearr_30991_31064[(2)] = null);

(statearr_30991_31064[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30937 === (23))){
var inst_30849 = (state_30936[(19)]);
var inst_30855 = (state_30936[(26)]);
var inst_30857 = (state_30936[(23)]);
var inst_30853 = (state_30936[(24)]);
var inst_30852 = (state_30936[(25)]);
var inst_30860 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these dependencies");
var inst_30862 = (function (){var all_files = inst_30849;
var res_SINGLEQUOTE_ = inst_30852;
var res = inst_30853;
var files_not_loaded = inst_30855;
var dependencies_that_loaded = inst_30857;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_30849,inst_30855,inst_30857,inst_30853,inst_30852,inst_30860,state_val_30937,c__24143__auto__,map__30781,map__30781__$1,opts,before_jsload,on_jsload,reload_dependents,map__30782,map__30782__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__30861){
var map__30992 = p__30861;
var map__30992__$1 = ((((!((map__30992 == null)))?((((map__30992.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30992.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30992):map__30992);
var request_url = cljs.core.get.call(null,map__30992__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
return clojure.string.replace.call(null,request_url,goog.basePath,"");
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_30849,inst_30855,inst_30857,inst_30853,inst_30852,inst_30860,state_val_30937,c__24143__auto__,map__30781,map__30781__$1,opts,before_jsload,on_jsload,reload_dependents,map__30782,map__30782__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_30863 = cljs.core.reverse.call(null,inst_30857);
var inst_30864 = cljs.core.map.call(null,inst_30862,inst_30863);
var inst_30865 = cljs.core.pr_str.call(null,inst_30864);
var inst_30866 = figwheel.client.utils.log.call(null,inst_30865);
var state_30936__$1 = (function (){var statearr_30994 = state_30936;
(statearr_30994[(31)] = inst_30860);

return statearr_30994;
})();
var statearr_30995_31065 = state_30936__$1;
(statearr_30995_31065[(2)] = inst_30866);

(statearr_30995_31065[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30937 === (35))){
var state_30936__$1 = state_30936;
var statearr_30996_31066 = state_30936__$1;
(statearr_30996_31066[(2)] = true);

(statearr_30996_31066[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30937 === (19))){
var inst_30839 = (state_30936[(12)]);
var inst_30845 = figwheel.client.file_reloading.expand_files.call(null,inst_30839);
var state_30936__$1 = state_30936;
var statearr_30997_31067 = state_30936__$1;
(statearr_30997_31067[(2)] = inst_30845);

(statearr_30997_31067[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30937 === (11))){
var state_30936__$1 = state_30936;
var statearr_30998_31068 = state_30936__$1;
(statearr_30998_31068[(2)] = null);

(statearr_30998_31068[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30937 === (9))){
var inst_30828 = (state_30936[(2)]);
var state_30936__$1 = state_30936;
var statearr_30999_31069 = state_30936__$1;
(statearr_30999_31069[(2)] = inst_30828);

(statearr_30999_31069[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30937 === (5))){
var inst_30799 = (state_30936[(7)]);
var inst_30798 = (state_30936[(10)]);
var inst_30801 = (inst_30799 < inst_30798);
var inst_30802 = inst_30801;
var state_30936__$1 = state_30936;
if(cljs.core.truth_(inst_30802)){
var statearr_31000_31070 = state_30936__$1;
(statearr_31000_31070[(1)] = (7));

} else {
var statearr_31001_31071 = state_30936__$1;
(statearr_31001_31071[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30937 === (14))){
var inst_30809 = (state_30936[(22)]);
var inst_30818 = cljs.core.first.call(null,inst_30809);
var inst_30819 = figwheel.client.file_reloading.eval_body.call(null,inst_30818,opts);
var inst_30820 = cljs.core.next.call(null,inst_30809);
var inst_30796 = inst_30820;
var inst_30797 = null;
var inst_30798 = (0);
var inst_30799 = (0);
var state_30936__$1 = (function (){var statearr_31002 = state_30936;
(statearr_31002[(7)] = inst_30799);

(statearr_31002[(8)] = inst_30797);

(statearr_31002[(32)] = inst_30819);

(statearr_31002[(9)] = inst_30796);

(statearr_31002[(10)] = inst_30798);

return statearr_31002;
})();
var statearr_31003_31072 = state_30936__$1;
(statearr_31003_31072[(2)] = null);

(statearr_31003_31072[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30937 === (45))){
var state_30936__$1 = state_30936;
var statearr_31004_31073 = state_30936__$1;
(statearr_31004_31073[(2)] = null);

(statearr_31004_31073[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30937 === (26))){
var inst_30849 = (state_30936[(19)]);
var inst_30855 = (state_30936[(26)]);
var inst_30857 = (state_30936[(23)]);
var inst_30853 = (state_30936[(24)]);
var inst_30852 = (state_30936[(25)]);
var inst_30872 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_30874 = (function (){var all_files = inst_30849;
var res_SINGLEQUOTE_ = inst_30852;
var res = inst_30853;
var files_not_loaded = inst_30855;
var dependencies_that_loaded = inst_30857;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_30849,inst_30855,inst_30857,inst_30853,inst_30852,inst_30872,state_val_30937,c__24143__auto__,map__30781,map__30781__$1,opts,before_jsload,on_jsload,reload_dependents,map__30782,map__30782__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__30873){
var map__31005 = p__30873;
var map__31005__$1 = ((((!((map__31005 == null)))?((((map__31005.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31005.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31005):map__31005);
var namespace = cljs.core.get.call(null,map__31005__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__31005__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.name__GT_path.call(null,cljs.core.name.call(null,namespace));
} else {
return file;
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_30849,inst_30855,inst_30857,inst_30853,inst_30852,inst_30872,state_val_30937,c__24143__auto__,map__30781,map__30781__$1,opts,before_jsload,on_jsload,reload_dependents,map__30782,map__30782__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_30875 = cljs.core.map.call(null,inst_30874,inst_30853);
var inst_30876 = cljs.core.pr_str.call(null,inst_30875);
var inst_30877 = figwheel.client.utils.log.call(null,inst_30876);
var inst_30878 = (function (){var all_files = inst_30849;
var res_SINGLEQUOTE_ = inst_30852;
var res = inst_30853;
var files_not_loaded = inst_30855;
var dependencies_that_loaded = inst_30857;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_30849,inst_30855,inst_30857,inst_30853,inst_30852,inst_30872,inst_30874,inst_30875,inst_30876,inst_30877,state_val_30937,c__24143__auto__,map__30781,map__30781__$1,opts,before_jsload,on_jsload,reload_dependents,map__30782,map__30782__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_30849,inst_30855,inst_30857,inst_30853,inst_30852,inst_30872,inst_30874,inst_30875,inst_30876,inst_30877,state_val_30937,c__24143__auto__,map__30781,map__30781__$1,opts,before_jsload,on_jsload,reload_dependents,map__30782,map__30782__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_30879 = setTimeout(inst_30878,(10));
var state_30936__$1 = (function (){var statearr_31007 = state_30936;
(statearr_31007[(33)] = inst_30872);

(statearr_31007[(34)] = inst_30877);

return statearr_31007;
})();
var statearr_31008_31074 = state_30936__$1;
(statearr_31008_31074[(2)] = inst_30879);

(statearr_31008_31074[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30937 === (16))){
var state_30936__$1 = state_30936;
var statearr_31009_31075 = state_30936__$1;
(statearr_31009_31075[(2)] = reload_dependents);

(statearr_31009_31075[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30937 === (38))){
var inst_30889 = (state_30936[(16)]);
var inst_30907 = cljs.core.apply.call(null,cljs.core.hash_map,inst_30889);
var state_30936__$1 = state_30936;
var statearr_31010_31076 = state_30936__$1;
(statearr_31010_31076[(2)] = inst_30907);

(statearr_31010_31076[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30937 === (30))){
var state_30936__$1 = state_30936;
var statearr_31011_31077 = state_30936__$1;
(statearr_31011_31077[(2)] = null);

(statearr_31011_31077[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30937 === (10))){
var inst_30809 = (state_30936[(22)]);
var inst_30811 = cljs.core.chunked_seq_QMARK_.call(null,inst_30809);
var state_30936__$1 = state_30936;
if(inst_30811){
var statearr_31012_31078 = state_30936__$1;
(statearr_31012_31078[(1)] = (13));

} else {
var statearr_31013_31079 = state_30936__$1;
(statearr_31013_31079[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30937 === (18))){
var inst_30843 = (state_30936[(2)]);
var state_30936__$1 = state_30936;
if(cljs.core.truth_(inst_30843)){
var statearr_31014_31080 = state_30936__$1;
(statearr_31014_31080[(1)] = (19));

} else {
var statearr_31015_31081 = state_30936__$1;
(statearr_31015_31081[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30937 === (42))){
var state_30936__$1 = state_30936;
var statearr_31016_31082 = state_30936__$1;
(statearr_31016_31082[(2)] = null);

(statearr_31016_31082[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30937 === (37))){
var inst_30902 = (state_30936[(2)]);
var state_30936__$1 = state_30936;
var statearr_31017_31083 = state_30936__$1;
(statearr_31017_31083[(2)] = inst_30902);

(statearr_31017_31083[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30937 === (8))){
var inst_30809 = (state_30936[(22)]);
var inst_30796 = (state_30936[(9)]);
var inst_30809__$1 = cljs.core.seq.call(null,inst_30796);
var state_30936__$1 = (function (){var statearr_31018 = state_30936;
(statearr_31018[(22)] = inst_30809__$1);

return statearr_31018;
})();
if(inst_30809__$1){
var statearr_31019_31084 = state_30936__$1;
(statearr_31019_31084[(1)] = (10));

} else {
var statearr_31020_31085 = state_30936__$1;
(statearr_31020_31085[(1)] = (11));

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
});})(c__24143__auto__,map__30781,map__30781__$1,opts,before_jsload,on_jsload,reload_dependents,map__30782,map__30782__$1,msg,files,figwheel_meta,recompile_dependents))
;
return ((function (switch__24120__auto__,c__24143__auto__,map__30781,map__30781__$1,opts,before_jsload,on_jsload,reload_dependents,map__30782,map__30782__$1,msg,files,figwheel_meta,recompile_dependents){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__24121__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__24121__auto____0 = (function (){
var statearr_31024 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31024[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__24121__auto__);

(statearr_31024[(1)] = (1));

return statearr_31024;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__24121__auto____1 = (function (state_30936){
while(true){
var ret_value__24122__auto__ = (function (){try{while(true){
var result__24123__auto__ = switch__24120__auto__.call(null,state_30936);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24123__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24123__auto__;
}
break;
}
}catch (e31025){if((e31025 instanceof Object)){
var ex__24124__auto__ = e31025;
var statearr_31026_31086 = state_30936;
(statearr_31026_31086[(5)] = ex__24124__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30936);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31025;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24122__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31087 = state_30936;
state_30936 = G__31087;
continue;
} else {
return ret_value__24122__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__24121__auto__ = function(state_30936){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__24121__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__24121__auto____1.call(this,state_30936);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__24121__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__24121__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__24121__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__24121__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__24121__auto__;
})()
;})(switch__24120__auto__,c__24143__auto__,map__30781,map__30781__$1,opts,before_jsload,on_jsload,reload_dependents,map__30782,map__30782__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var state__24145__auto__ = (function (){var statearr_31027 = f__24144__auto__.call(null);
(statearr_31027[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24143__auto__);

return statearr_31027;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24145__auto__);
});})(c__24143__auto__,map__30781,map__30781__$1,opts,before_jsload,on_jsload,reload_dependents,map__30782,map__30782__$1,msg,files,figwheel_meta,recompile_dependents))
);

return c__24143__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str(location.protocol),cljs.core.str("//")].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__31090,link){
var map__31093 = p__31090;
var map__31093__$1 = ((((!((map__31093 == null)))?((((map__31093.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31093.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31093):map__31093);
var file = cljs.core.get.call(null,map__31093__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__6747__auto__ = link.href;
if(cljs.core.truth_(temp__6747__auto__)){
var link_href = temp__6747__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__6747__auto__,map__31093,map__31093__$1,file){
return (function (p1__31088_SHARP_,p2__31089_SHARP_){
if(cljs.core._EQ_.call(null,p1__31088_SHARP_,p2__31089_SHARP_)){
return p1__31088_SHARP_;
} else {
return false;
}
});})(link_href,temp__6747__auto__,map__31093,map__31093__$1,file))
,cljs.core.reverse.call(null,clojure.string.split.call(null,file,"/")),cljs.core.reverse.call(null,clojure.string.split.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href),"/")))));
var match_length = cljs.core.count.call(null,match);
var file_name_length = cljs.core.count.call(null,cljs.core.last.call(null,clojure.string.split.call(null,file,"/")));
if((match_length >= file_name_length)){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"link","link",-1769163468),link,new cljs.core.Keyword(null,"link-href","link-href",-250644450),link_href,new cljs.core.Keyword(null,"match-length","match-length",1101537310),match_length,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083),cljs.core.count.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href))], null);
} else {
return null;
}
} else {
return null;
}
});
figwheel.client.file_reloading.get_correct_link = (function figwheel$client$file_reloading$get_correct_link(f_data){
var temp__6747__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__31099){
var map__31100 = p__31099;
var map__31100__$1 = ((((!((map__31100 == null)))?((((map__31100.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31100.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31100):map__31100);
var match_length = cljs.core.get.call(null,map__31100__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__31100__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__31095_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__31095_SHARP_);
}),figwheel.client.file_reloading.current_links.call(null))));
if(cljs.core.truth_(temp__6747__auto__)){
var res = temp__6747__auto__;
return new cljs.core.Keyword(null,"link","link",-1769163468).cljs$core$IFn$_invoke$arity$1(res);
} else {
return null;
}
});
figwheel.client.file_reloading.clone_link = (function figwheel$client$file_reloading$clone_link(link,url){
var clone = document.createElement("link");
clone.rel = "stylesheet";

clone.media = link.media;

clone.disabled = link.disabled;

clone.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return clone;
});
figwheel.client.file_reloading.create_link = (function figwheel$client$file_reloading$create_link(url){
var link = document.createElement("link");
link.rel = "stylesheet";

link.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return link;
});
figwheel.client.file_reloading.add_link_to_doc = (function figwheel$client$file_reloading$add_link_to_doc(var_args){
var args31102 = [];
var len__22365__auto___31105 = arguments.length;
var i__22366__auto___31106 = (0);
while(true){
if((i__22366__auto___31106 < len__22365__auto___31105)){
args31102.push((arguments[i__22366__auto___31106]));

var G__31107 = (i__22366__auto___31106 + (1));
i__22366__auto___31106 = G__31107;
continue;
} else {
}
break;
}

var G__31104 = args31102.length;
switch (G__31104) {
case 1:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args31102.length)].join('')));

}
});

figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$1 = (function (new_link){
return (document.getElementsByTagName("head")[(0)]).appendChild(new_link);
});

figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$2 = (function (orig_link,klone){
var parent = orig_link.parentNode;
if(cljs.core._EQ_.call(null,orig_link,parent.lastChild)){
parent.appendChild(klone);
} else {
parent.insertBefore(klone,orig_link.nextSibling);
}

return setTimeout(((function (parent){
return (function (){
return parent.removeChild(orig_link);
});})(parent))
,(300));
});

figwheel.client.file_reloading.add_link_to_doc.cljs$lang$maxFixedArity = 2;

figwheel.client.file_reloading.distictify = (function figwheel$client$file_reloading$distictify(key,seqq){
return cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (p1__31109_SHARP_,p2__31110_SHARP_){
return cljs.core.assoc.call(null,p1__31109_SHARP_,cljs.core.get.call(null,p2__31110_SHARP_,key),p2__31110_SHARP_);
}),cljs.core.PersistentArrayMap.EMPTY,seqq));
});
figwheel.client.file_reloading.reload_css_file = (function figwheel$client$file_reloading$reload_css_file(p__31111){
var map__31114 = p__31111;
var map__31114__$1 = ((((!((map__31114 == null)))?((((map__31114.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31114.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31114):map__31114);
var f_data = map__31114__$1;
var file = cljs.core.get.call(null,map__31114__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__6747__auto__ = figwheel.client.file_reloading.get_correct_link.call(null,f_data);
if(cljs.core.truth_(temp__6747__auto__)){
var link = temp__6747__auto__;
return figwheel.client.file_reloading.add_link_to_doc.call(null,link,figwheel.client.file_reloading.clone_link.call(null,link,link.href));
} else {
return null;
}
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__31116,files_msg){
var map__31123 = p__31116;
var map__31123__$1 = ((((!((map__31123 == null)))?((((map__31123.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31123.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31123):map__31123);
var opts = map__31123__$1;
var on_cssload = cljs.core.get.call(null,map__31123__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
var seq__31125_31129 = cljs.core.seq.call(null,figwheel.client.file_reloading.distictify.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg)));
var chunk__31126_31130 = null;
var count__31127_31131 = (0);
var i__31128_31132 = (0);
while(true){
if((i__31128_31132 < count__31127_31131)){
var f_31133 = cljs.core._nth.call(null,chunk__31126_31130,i__31128_31132);
figwheel.client.file_reloading.reload_css_file.call(null,f_31133);

var G__31134 = seq__31125_31129;
var G__31135 = chunk__31126_31130;
var G__31136 = count__31127_31131;
var G__31137 = (i__31128_31132 + (1));
seq__31125_31129 = G__31134;
chunk__31126_31130 = G__31135;
count__31127_31131 = G__31136;
i__31128_31132 = G__31137;
continue;
} else {
var temp__6747__auto___31138 = cljs.core.seq.call(null,seq__31125_31129);
if(temp__6747__auto___31138){
var seq__31125_31139__$1 = temp__6747__auto___31138;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__31125_31139__$1)){
var c__22055__auto___31140 = cljs.core.chunk_first.call(null,seq__31125_31139__$1);
var G__31141 = cljs.core.chunk_rest.call(null,seq__31125_31139__$1);
var G__31142 = c__22055__auto___31140;
var G__31143 = cljs.core.count.call(null,c__22055__auto___31140);
var G__31144 = (0);
seq__31125_31129 = G__31141;
chunk__31126_31130 = G__31142;
count__31127_31131 = G__31143;
i__31128_31132 = G__31144;
continue;
} else {
var f_31145 = cljs.core.first.call(null,seq__31125_31139__$1);
figwheel.client.file_reloading.reload_css_file.call(null,f_31145);

var G__31146 = cljs.core.next.call(null,seq__31125_31139__$1);
var G__31147 = null;
var G__31148 = (0);
var G__31149 = (0);
seq__31125_31129 = G__31146;
chunk__31126_31130 = G__31147;
count__31127_31131 = G__31148;
i__31128_31132 = G__31149;
continue;
}
} else {
}
}
break;
}

return setTimeout(((function (map__31123,map__31123__$1,opts,on_cssload){
return (function (){
return on_cssload.call(null,new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg));
});})(map__31123,map__31123__$1,opts,on_cssload))
,(100));
} else {
return null;
}
});

//# sourceMappingURL=file_reloading.js.map