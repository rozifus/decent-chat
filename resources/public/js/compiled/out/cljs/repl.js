// Compiled by ClojureScript 0.0-3211 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
cljs.repl.print_doc = (function cljs$repl$print_doc(m){
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,[cljs.core.str((function (){var temp__4126__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__4126__auto__)){
var ns = temp__4126__auto__;
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
var seq__30881_30893 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__30882_30894 = null;
var count__30883_30895 = (0);
var i__30884_30896 = (0);
while(true){
if((i__30884_30896 < count__30883_30895)){
var f_30897 = cljs.core._nth.call(null,chunk__30882_30894,i__30884_30896);
cljs.core.println.call(null,"  ",f_30897);

var G__30898 = seq__30881_30893;
var G__30899 = chunk__30882_30894;
var G__30900 = count__30883_30895;
var G__30901 = (i__30884_30896 + (1));
seq__30881_30893 = G__30898;
chunk__30882_30894 = G__30899;
count__30883_30895 = G__30900;
i__30884_30896 = G__30901;
continue;
} else {
var temp__4126__auto___30902 = cljs.core.seq.call(null,seq__30881_30893);
if(temp__4126__auto___30902){
var seq__30881_30903__$1 = temp__4126__auto___30902;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30881_30903__$1)){
var c__18945__auto___30904 = cljs.core.chunk_first.call(null,seq__30881_30903__$1);
var G__30905 = cljs.core.chunk_rest.call(null,seq__30881_30903__$1);
var G__30906 = c__18945__auto___30904;
var G__30907 = cljs.core.count.call(null,c__18945__auto___30904);
var G__30908 = (0);
seq__30881_30893 = G__30905;
chunk__30882_30894 = G__30906;
count__30883_30895 = G__30907;
i__30884_30896 = G__30908;
continue;
} else {
var f_30909 = cljs.core.first.call(null,seq__30881_30903__$1);
cljs.core.println.call(null,"  ",f_30909);

var G__30910 = cljs.core.next.call(null,seq__30881_30903__$1);
var G__30911 = null;
var G__30912 = (0);
var G__30913 = (0);
seq__30881_30893 = G__30910;
chunk__30882_30894 = G__30911;
count__30883_30895 = G__30912;
i__30884_30896 = G__30913;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
if(cljs.core.truth_((function (){var or__18160__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__18160__auto__)){
return or__18160__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m));
} else {
cljs.core.prn.call(null,cljs.core.second.call(null,new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m)));
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
var seq__30885 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__30886 = null;
var count__30887 = (0);
var i__30888 = (0);
while(true){
if((i__30888 < count__30887)){
var vec__30889 = cljs.core._nth.call(null,chunk__30886,i__30888);
var name = cljs.core.nth.call(null,vec__30889,(0),null);
var map__30890 = cljs.core.nth.call(null,vec__30889,(1),null);
var map__30890__$1 = ((cljs.core.seq_QMARK_.call(null,map__30890))?cljs.core.apply.call(null,cljs.core.hash_map,map__30890):map__30890);
var arglists = cljs.core.get.call(null,map__30890__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
var doc = cljs.core.get.call(null,map__30890__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__30914 = seq__30885;
var G__30915 = chunk__30886;
var G__30916 = count__30887;
var G__30917 = (i__30888 + (1));
seq__30885 = G__30914;
chunk__30886 = G__30915;
count__30887 = G__30916;
i__30888 = G__30917;
continue;
} else {
var temp__4126__auto__ = cljs.core.seq.call(null,seq__30885);
if(temp__4126__auto__){
var seq__30885__$1 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30885__$1)){
var c__18945__auto__ = cljs.core.chunk_first.call(null,seq__30885__$1);
var G__30918 = cljs.core.chunk_rest.call(null,seq__30885__$1);
var G__30919 = c__18945__auto__;
var G__30920 = cljs.core.count.call(null,c__18945__auto__);
var G__30921 = (0);
seq__30885 = G__30918;
chunk__30886 = G__30919;
count__30887 = G__30920;
i__30888 = G__30921;
continue;
} else {
var vec__30891 = cljs.core.first.call(null,seq__30885__$1);
var name = cljs.core.nth.call(null,vec__30891,(0),null);
var map__30892 = cljs.core.nth.call(null,vec__30891,(1),null);
var map__30892__$1 = ((cljs.core.seq_QMARK_.call(null,map__30892))?cljs.core.apply.call(null,cljs.core.hash_map,map__30892):map__30892);
var arglists = cljs.core.get.call(null,map__30892__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
var doc = cljs.core.get.call(null,map__30892__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__30922 = cljs.core.next.call(null,seq__30885__$1);
var G__30923 = null;
var G__30924 = (0);
var G__30925 = (0);
seq__30885 = G__30922;
chunk__30886 = G__30923;
count__30887 = G__30924;
i__30888 = G__30925;
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
}
});

//# sourceMappingURL=repl.js.map?rel=1441122552590