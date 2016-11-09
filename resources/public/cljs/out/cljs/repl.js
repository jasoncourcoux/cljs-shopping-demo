// Compiled by ClojureScript 1.9.293 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__31152){
var map__31177 = p__31152;
var map__31177__$1 = ((((!((map__31177 == null)))?((((map__31177.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31177.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31177):map__31177);
var m = map__31177__$1;
var n = cljs.core.get.call(null,map__31177__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__31177__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,[cljs.core.str((function (){var temp__6747__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__6747__auto__)){
var ns = temp__6747__auto__;
return [cljs.core.str(ns),cljs.core.str("/")].join('');
} else {
return null;
}
})()),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Protocol");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__31179_31201 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__31180_31202 = null;
var count__31181_31203 = (0);
var i__31182_31204 = (0);
while(true){
if((i__31182_31204 < count__31181_31203)){
var f_31205 = cljs.core._nth.call(null,chunk__31180_31202,i__31182_31204);
cljs.core.println.call(null,"  ",f_31205);

var G__31206 = seq__31179_31201;
var G__31207 = chunk__31180_31202;
var G__31208 = count__31181_31203;
var G__31209 = (i__31182_31204 + (1));
seq__31179_31201 = G__31206;
chunk__31180_31202 = G__31207;
count__31181_31203 = G__31208;
i__31182_31204 = G__31209;
continue;
} else {
var temp__6747__auto___31210 = cljs.core.seq.call(null,seq__31179_31201);
if(temp__6747__auto___31210){
var seq__31179_31211__$1 = temp__6747__auto___31210;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__31179_31211__$1)){
var c__22055__auto___31212 = cljs.core.chunk_first.call(null,seq__31179_31211__$1);
var G__31213 = cljs.core.chunk_rest.call(null,seq__31179_31211__$1);
var G__31214 = c__22055__auto___31212;
var G__31215 = cljs.core.count.call(null,c__22055__auto___31212);
var G__31216 = (0);
seq__31179_31201 = G__31213;
chunk__31180_31202 = G__31214;
count__31181_31203 = G__31215;
i__31182_31204 = G__31216;
continue;
} else {
var f_31217 = cljs.core.first.call(null,seq__31179_31211__$1);
cljs.core.println.call(null,"  ",f_31217);

var G__31218 = cljs.core.next.call(null,seq__31179_31211__$1);
var G__31219 = null;
var G__31220 = (0);
var G__31221 = (0);
seq__31179_31201 = G__31218;
chunk__31180_31202 = G__31219;
count__31181_31203 = G__31220;
i__31182_31204 = G__31221;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_31222 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__21149__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__21149__auto__)){
return or__21149__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_31222);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_31222)))?cljs.core.second.call(null,arglists_31222):arglists_31222));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Special Form");

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.contains_QMARK_.call(null,m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.call(null,[cljs.core.str("\n  Please see http://clojure.org/"),cljs.core.str(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join(''));
} else {
return null;
}
} else {
return cljs.core.println.call(null,[cljs.core.str("\n  Please see http://clojure.org/special_forms#"),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Macro");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"REPL Special Function");
} else {
}

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__31183_31223 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__31184_31224 = null;
var count__31185_31225 = (0);
var i__31186_31226 = (0);
while(true){
if((i__31186_31226 < count__31185_31225)){
var vec__31187_31227 = cljs.core._nth.call(null,chunk__31184_31224,i__31186_31226);
var name_31228 = cljs.core.nth.call(null,vec__31187_31227,(0),null);
var map__31190_31229 = cljs.core.nth.call(null,vec__31187_31227,(1),null);
var map__31190_31230__$1 = ((((!((map__31190_31229 == null)))?((((map__31190_31229.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31190_31229.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31190_31229):map__31190_31229);
var doc_31231 = cljs.core.get.call(null,map__31190_31230__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_31232 = cljs.core.get.call(null,map__31190_31230__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_31228);

cljs.core.println.call(null," ",arglists_31232);

if(cljs.core.truth_(doc_31231)){
cljs.core.println.call(null," ",doc_31231);
} else {
}

var G__31233 = seq__31183_31223;
var G__31234 = chunk__31184_31224;
var G__31235 = count__31185_31225;
var G__31236 = (i__31186_31226 + (1));
seq__31183_31223 = G__31233;
chunk__31184_31224 = G__31234;
count__31185_31225 = G__31235;
i__31186_31226 = G__31236;
continue;
} else {
var temp__6747__auto___31237 = cljs.core.seq.call(null,seq__31183_31223);
if(temp__6747__auto___31237){
var seq__31183_31238__$1 = temp__6747__auto___31237;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__31183_31238__$1)){
var c__22055__auto___31239 = cljs.core.chunk_first.call(null,seq__31183_31238__$1);
var G__31240 = cljs.core.chunk_rest.call(null,seq__31183_31238__$1);
var G__31241 = c__22055__auto___31239;
var G__31242 = cljs.core.count.call(null,c__22055__auto___31239);
var G__31243 = (0);
seq__31183_31223 = G__31240;
chunk__31184_31224 = G__31241;
count__31185_31225 = G__31242;
i__31186_31226 = G__31243;
continue;
} else {
var vec__31192_31244 = cljs.core.first.call(null,seq__31183_31238__$1);
var name_31245 = cljs.core.nth.call(null,vec__31192_31244,(0),null);
var map__31195_31246 = cljs.core.nth.call(null,vec__31192_31244,(1),null);
var map__31195_31247__$1 = ((((!((map__31195_31246 == null)))?((((map__31195_31246.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31195_31246.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31195_31246):map__31195_31246);
var doc_31248 = cljs.core.get.call(null,map__31195_31247__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_31249 = cljs.core.get.call(null,map__31195_31247__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_31245);

cljs.core.println.call(null," ",arglists_31249);

if(cljs.core.truth_(doc_31248)){
cljs.core.println.call(null," ",doc_31248);
} else {
}

var G__31250 = cljs.core.next.call(null,seq__31183_31238__$1);
var G__31251 = null;
var G__31252 = (0);
var G__31253 = (0);
seq__31183_31223 = G__31250;
chunk__31184_31224 = G__31251;
count__31185_31225 = G__31252;
i__31186_31226 = G__31253;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__6747__auto__ = cljs.spec.get_spec.call(null,cljs.core.symbol.call(null,[cljs.core.str(cljs.core.ns_name.call(null,n))].join(''),cljs.core.name.call(null,nm)));
if(cljs.core.truth_(temp__6747__auto__)){
var fnspec = temp__6747__auto__;
cljs.core.print.call(null,"Spec");

var seq__31197 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__31198 = null;
var count__31199 = (0);
var i__31200 = (0);
while(true){
if((i__31200 < count__31199)){
var role = cljs.core._nth.call(null,chunk__31198,i__31200);
var temp__6747__auto___31254__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__6747__auto___31254__$1)){
var spec_31255 = temp__6747__auto___31254__$1;
cljs.core.print.call(null,[cljs.core.str("\n "),cljs.core.str(cljs.core.name.call(null,role)),cljs.core.str(":")].join(''),cljs.spec.describe.call(null,spec_31255));
} else {
}

var G__31256 = seq__31197;
var G__31257 = chunk__31198;
var G__31258 = count__31199;
var G__31259 = (i__31200 + (1));
seq__31197 = G__31256;
chunk__31198 = G__31257;
count__31199 = G__31258;
i__31200 = G__31259;
continue;
} else {
var temp__6747__auto____$1 = cljs.core.seq.call(null,seq__31197);
if(temp__6747__auto____$1){
var seq__31197__$1 = temp__6747__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__31197__$1)){
var c__22055__auto__ = cljs.core.chunk_first.call(null,seq__31197__$1);
var G__31260 = cljs.core.chunk_rest.call(null,seq__31197__$1);
var G__31261 = c__22055__auto__;
var G__31262 = cljs.core.count.call(null,c__22055__auto__);
var G__31263 = (0);
seq__31197 = G__31260;
chunk__31198 = G__31261;
count__31199 = G__31262;
i__31200 = G__31263;
continue;
} else {
var role = cljs.core.first.call(null,seq__31197__$1);
var temp__6747__auto___31264__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__6747__auto___31264__$2)){
var spec_31265 = temp__6747__auto___31264__$2;
cljs.core.print.call(null,[cljs.core.str("\n "),cljs.core.str(cljs.core.name.call(null,role)),cljs.core.str(":")].join(''),cljs.spec.describe.call(null,spec_31265));
} else {
}

var G__31266 = cljs.core.next.call(null,seq__31197__$1);
var G__31267 = null;
var G__31268 = (0);
var G__31269 = (0);
seq__31197 = G__31266;
chunk__31198 = G__31267;
count__31199 = G__31268;
i__31200 = G__31269;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
} else {
return null;
}
}
});

//# sourceMappingURL=repl.js.map