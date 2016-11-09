// Compiled by ClojureScript 1.9.293 {}
goog.provide('clojure.test.check.rose_tree');
goog.require('cljs.core');
goog.require('cljs.core');

/**
* @constructor
 * @implements {cljs.core.IIndexed}
*/
clojure.test.check.rose_tree.RoseTree = (function (root,children){
this.root = root;
this.children = children;
this.cljs$lang$protocol_mask$partition0$ = 16;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
clojure.test.check.rose_tree.RoseTree.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (this$,i){
var self__ = this;
var this$__$1 = this;
if(cljs.core._EQ_.call(null,i,(0))){
return self__.root;
} else {
if(cljs.core._EQ_.call(null,i,(1))){
return self__.children;
} else {
throw (new Error("Index out of bounds in rose tree"));

}
}
});

clojure.test.check.rose_tree.RoseTree.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (this$,i,not_found){
var self__ = this;
var this$__$1 = this;
if(cljs.core._EQ_.call(null,i,(0))){
return self__.root;
} else {
if(cljs.core._EQ_.call(null,i,(1))){
return self__.children;
} else {
return not_found;

}
}
});

clojure.test.check.rose_tree.RoseTree.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"root","root",1191874074,null),new cljs.core.Symbol(null,"children","children",699969545,null)], null);
});

clojure.test.check.rose_tree.RoseTree.cljs$lang$type = true;

clojure.test.check.rose_tree.RoseTree.cljs$lang$ctorStr = "clojure.test.check.rose-tree/RoseTree";

clojure.test.check.rose_tree.RoseTree.cljs$lang$ctorPrWriter = (function (this__21801__auto__,writer__21802__auto__,opt__21803__auto__){
return cljs.core._write.call(null,writer__21802__auto__,"clojure.test.check.rose-tree/RoseTree");
});

clojure.test.check.rose_tree.__GT_RoseTree = (function clojure$test$check$rose_tree$__GT_RoseTree(root,children){
return (new clojure.test.check.rose_tree.RoseTree(root,children));
});

/**
 * Returns the root of a Rose tree.
 */
clojure.test.check.rose_tree.root = (function clojure$test$check$rose_tree$root(rose){
return rose.root;
});
/**
 * Returns the children of the root of the Rose tree.
 */
clojure.test.check.rose_tree.children = (function clojure$test$check$rose_tree$children(rose){
return rose.children;
});
clojure.test.check.rose_tree.make_rose = (function clojure$test$check$rose_tree$make_rose(root,children){
return (new clojure.test.check.rose_tree.RoseTree(root,children));
});
/**
 * Exclude the nth value in a collection.
 */
clojure.test.check.rose_tree.exclude_nth = (function clojure$test$check$rose_tree$exclude_nth(n,coll){
return (new cljs.core.LazySeq(null,(function (){
var temp__6747__auto__ = cljs.core.seq.call(null,coll);
if(temp__6747__auto__){
var s = temp__6747__auto__;
if((n === (0))){
return cljs.core.rest.call(null,coll);
} else {
return cljs.core.cons.call(null,cljs.core.first.call(null,s),clojure.test.check.rose_tree.exclude_nth.call(null,(n - (1)),cljs.core.rest.call(null,s)));
}
} else {
return null;
}
}),null,null));
});
/**
 * Turn a tree of trees into a single tree. Does this by concatenating
 *   children of the inner and outer trees.
 */
clojure.test.check.rose_tree.join = (function clojure$test$check$rose_tree$join(rose){
var outer_root = clojure.test.check.rose_tree.root.call(null,rose);
var outer_children = clojure.test.check.rose_tree.children.call(null,rose);
var inner_root = clojure.test.check.rose_tree.root.call(null,outer_root);
var inner_children = clojure.test.check.rose_tree.children.call(null,outer_root);
return clojure.test.check.rose_tree.make_rose.call(null,inner_root,cljs.core.concat.call(null,cljs.core.map.call(null,clojure.test.check.rose_tree.join,outer_children),inner_children));
});
/**
 * Puts a value `x` into a Rose tree, with no children.
 */
clojure.test.check.rose_tree.pure = (function clojure$test$check$rose_tree$pure(x){
return clojure.test.check.rose_tree.make_rose.call(null,x,cljs.core.PersistentVector.EMPTY);
});
/**
 * Applies functions `f` to all values in the tree.
 */
clojure.test.check.rose_tree.fmap = (function clojure$test$check$rose_tree$fmap(f,rose){
return clojure.test.check.rose_tree.make_rose.call(null,f.call(null,clojure.test.check.rose_tree.root.call(null,rose)),cljs.core.map.call(null,(function (p1__25762_SHARP_){
return clojure.test.check.rose_tree.fmap.call(null,f,p1__25762_SHARP_);
}),clojure.test.check.rose_tree.children.call(null,rose)));
});
/**
 * Takes a Rose tree (m) and a function (k) from
 *   values to Rose tree and returns a new Rose tree.
 *   This is the monadic bind (>>=) for Rose trees.
 */
clojure.test.check.rose_tree.bind = (function clojure$test$check$rose_tree$bind(m,k){
return clojure.test.check.rose_tree.join.call(null,clojure.test.check.rose_tree.fmap.call(null,k,m));
});
/**
 * Returns a new Rose tree whose values pass `pred`. Values who
 *   do not pass `pred` have their children cut out as well.
 *   Takes a list of roses, not a rose
 */
clojure.test.check.rose_tree.filter = (function clojure$test$check$rose_tree$filter(pred,rose){
return clojure.test.check.rose_tree.make_rose.call(null,clojure.test.check.rose_tree.root.call(null,rose),cljs.core.map.call(null,(function (p1__25763_SHARP_){
return clojure.test.check.rose_tree.filter.call(null,pred,p1__25763_SHARP_);
}),cljs.core.filter.call(null,(function (p1__25764_SHARP_){
return pred.call(null,clojure.test.check.rose_tree.root.call(null,p1__25764_SHARP_));
}),clojure.test.check.rose_tree.children.call(null,rose))));
});
/**
 * Create a seq of vectors, where each rose in turn, has been replaced
 *   by its children.
 */
clojure.test.check.rose_tree.permutations = (function clojure$test$check$rose_tree$permutations(roses){
var iter__22006__auto__ = (function clojure$test$check$rose_tree$permutations_$_iter__25777(s__25778){
return (new cljs.core.LazySeq(null,(function (){
var s__25778__$1 = s__25778;
while(true){
var temp__6747__auto__ = cljs.core.seq.call(null,s__25778__$1);
if(temp__6747__auto__){
var xs__7303__auto__ = temp__6747__auto__;
var vec__25786 = cljs.core.first.call(null,xs__7303__auto__);
var rose = cljs.core.nth.call(null,vec__25786,(0),null);
var index = cljs.core.nth.call(null,vec__25786,(1),null);
var iterys__22002__auto__ = ((function (s__25778__$1,vec__25786,rose,index,xs__7303__auto__,temp__6747__auto__){
return (function clojure$test$check$rose_tree$permutations_$_iter__25777_$_iter__25779(s__25780){
return (new cljs.core.LazySeq(null,((function (s__25778__$1,vec__25786,rose,index,xs__7303__auto__,temp__6747__auto__){
return (function (){
var s__25780__$1 = s__25780;
while(true){
var temp__6747__auto____$1 = cljs.core.seq.call(null,s__25780__$1);
if(temp__6747__auto____$1){
var s__25780__$2 = temp__6747__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__25780__$2)){
var c__22004__auto__ = cljs.core.chunk_first.call(null,s__25780__$2);
var size__22005__auto__ = cljs.core.count.call(null,c__22004__auto__);
var b__25782 = cljs.core.chunk_buffer.call(null,size__22005__auto__);
if((function (){var i__25781 = (0);
while(true){
if((i__25781 < size__22005__auto__)){
var child = cljs.core._nth.call(null,c__22004__auto__,i__25781);
cljs.core.chunk_append.call(null,b__25782,cljs.core.assoc.call(null,roses,index,child));

var G__25789 = (i__25781 + (1));
i__25781 = G__25789;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__25782),clojure$test$check$rose_tree$permutations_$_iter__25777_$_iter__25779.call(null,cljs.core.chunk_rest.call(null,s__25780__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__25782),null);
}
} else {
var child = cljs.core.first.call(null,s__25780__$2);
return cljs.core.cons.call(null,cljs.core.assoc.call(null,roses,index,child),clojure$test$check$rose_tree$permutations_$_iter__25777_$_iter__25779.call(null,cljs.core.rest.call(null,s__25780__$2)));
}
} else {
return null;
}
break;
}
});})(s__25778__$1,vec__25786,rose,index,xs__7303__auto__,temp__6747__auto__))
,null,null));
});})(s__25778__$1,vec__25786,rose,index,xs__7303__auto__,temp__6747__auto__))
;
var fs__22003__auto__ = cljs.core.seq.call(null,iterys__22002__auto__.call(null,clojure.test.check.rose_tree.children.call(null,rose)));
if(fs__22003__auto__){
return cljs.core.concat.call(null,fs__22003__auto__,clojure$test$check$rose_tree$permutations_$_iter__25777.call(null,cljs.core.rest.call(null,s__25778__$1)));
} else {
var G__25790 = cljs.core.rest.call(null,s__25778__$1);
s__25778__$1 = G__25790;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__22006__auto__.call(null,cljs.core.map.call(null,cljs.core.vector,roses,cljs.core.range.call(null)));
});
/**
 * Apply `f` to the sequence of Rose trees `roses`.
 */
clojure.test.check.rose_tree.zip = (function clojure$test$check$rose_tree$zip(f,roses){
return clojure.test.check.rose_tree.make_rose.call(null,cljs.core.apply.call(null,f,cljs.core.map.call(null,clojure.test.check.rose_tree.root,roses)),cljs.core.map.call(null,(function (p1__25791_SHARP_){
return clojure.test.check.rose_tree.zip.call(null,f,p1__25791_SHARP_);
}),clojure.test.check.rose_tree.permutations.call(null,roses)));
});
clojure.test.check.rose_tree.remove = (function clojure$test$check$rose_tree$remove(roses){
return cljs.core.concat.call(null,cljs.core.map_indexed.call(null,(function (index,_){
return clojure.test.check.rose_tree.exclude_nth.call(null,index,roses);
}),roses),clojure.test.check.rose_tree.permutations.call(null,cljs.core.vec.call(null,roses)));
});
clojure.test.check.rose_tree.shrink = (function clojure$test$check$rose_tree$shrink(f,roses){
if(cljs.core.seq.call(null,roses)){
return clojure.test.check.rose_tree.make_rose.call(null,cljs.core.apply.call(null,f,cljs.core.map.call(null,clojure.test.check.rose_tree.root,roses)),cljs.core.map.call(null,(function (p1__25792_SHARP_){
return clojure.test.check.rose_tree.shrink.call(null,f,p1__25792_SHARP_);
}),clojure.test.check.rose_tree.remove.call(null,roses)));
} else {
return clojure.test.check.rose_tree.make_rose.call(null,f.call(null),cljs.core.PersistentVector.EMPTY);
}
});
/**
 * Return a new rose-tree whose depth-one children
 *   are the children from depth one _and_ two of the input
 *   tree.
 */
clojure.test.check.rose_tree.collapse = (function clojure$test$check$rose_tree$collapse(rose){
return clojure.test.check.rose_tree.make_rose.call(null,clojure.test.check.rose_tree.root.call(null,rose),(function (){var the_children = clojure.test.check.rose_tree.children.call(null,rose);
return cljs.core.concat.call(null,cljs.core.map.call(null,clojure.test.check.rose_tree.collapse,the_children),cljs.core.map.call(null,clojure.test.check.rose_tree.collapse,cljs.core.mapcat.call(null,clojure.test.check.rose_tree.children,the_children)));
})());
});
clojure.test.check.rose_tree.make_stack = (function clojure$test$check$rose_tree$make_stack(children,stack){
var temp__6745__auto__ = cljs.core.seq.call(null,children);
if(temp__6745__auto__){
var s = temp__6745__auto__;
return cljs.core.cons.call(null,children,stack);
} else {
return stack;
}
});
/**
 * Create a lazy-seq of all of the (unique) nodes in a shrink-tree.
 *   This assumes that two nodes with the same value have the same children.
 *   While it's not common, it's possible to create trees that don't
 *   fit that description. This function is significantly faster than
 *   brute-force enumerating all of the nodes in a tree, as there will
 *   be many duplicates.
 */
clojure.test.check.rose_tree.seq = (function clojure$test$check$rose_tree$seq(rose){
var helper = (function clojure$test$check$rose_tree$seq_$_helper(rose__$1,seen,stack){
var node = clojure.test.check.rose_tree.root.call(null,rose__$1);
var the_children = clojure.test.check.rose_tree.children.call(null,rose__$1);
return (new cljs.core.LazySeq(null,((function (node,the_children){
return (function (){
if(cljs.core.not.call(null,seen.call(null,node))){
return cljs.core.cons.call(null,node,((cljs.core.seq.call(null,the_children))?clojure$test$check$rose_tree$seq_$_helper.call(null,cljs.core.first.call(null,the_children),cljs.core.conj.call(null,seen,node),clojure.test.check.rose_tree.make_stack.call(null,cljs.core.rest.call(null,the_children),stack)):(function (){var temp__6747__auto__ = cljs.core.seq.call(null,stack);
if(temp__6747__auto__){
var s = temp__6747__auto__;
var f = cljs.core.ffirst.call(null,s);
var r = cljs.core.rest.call(null,cljs.core.first.call(null,s));
return clojure$test$check$rose_tree$seq_$_helper.call(null,f,cljs.core.conj.call(null,seen,node),clojure.test.check.rose_tree.make_stack.call(null,r,cljs.core.rest.call(null,s)));
} else {
return null;
}
})()));
} else {
var temp__6747__auto__ = cljs.core.seq.call(null,stack);
if(temp__6747__auto__){
var s = temp__6747__auto__;
var f = cljs.core.ffirst.call(null,s);
var r = cljs.core.rest.call(null,cljs.core.first.call(null,s));
return clojure$test$check$rose_tree$seq_$_helper.call(null,f,seen,clojure.test.check.rose_tree.make_stack.call(null,r,cljs.core.rest.call(null,s)));
} else {
return null;
}
}
});})(node,the_children))
,null,null));
});
return helper.call(null,rose,cljs.core.PersistentHashSet.EMPTY,cljs.core.List.EMPTY);
});

//# sourceMappingURL=rose_tree.js.map