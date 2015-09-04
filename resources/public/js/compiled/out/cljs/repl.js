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
var seq__30888_30900 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__30889_30901 = null;
var count__30890_30902 = (0);
var i__30891_30903 = (0);
while(true){
if((i__30891_30903 < count__30890_30902)){
var f_30904 = cljs.core._nth.call(null,chunk__30889_30901,i__30891_30903);
cljs.core.println.call(null,"  ",f_30904);

var G__30905 = seq__30888_30900;
var G__30906 = chunk__30889_30901;
var G__30907 = count__30890_30902;
var G__30908 = (i__30891_30903 + (1));
seq__30888_30900 = G__30905;
chunk__30889_30901 = G__30906;
count__30890_30902 = G__30907;
i__30891_30903 = G__30908;
continue;
} else {
var temp__4126__auto___30909 = cljs.core.seq.call(null,seq__30888_30900);
if(temp__4126__auto___30909){
var seq__30888_30910__$1 = temp__4126__auto___30909;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30888_30910__$1)){
var c__18945__auto___30911 = cljs.core.chunk_first.call(null,seq__30888_30910__$1);
var G__30912 = cljs.core.chunk_rest.call(null,seq__30888_30910__$1);
var G__30913 = c__18945__auto___30911;
var G__30914 = cljs.core.count.call(null,c__18945__auto___30911);
var G__30915 = (0);
seq__30888_30900 = G__30912;
chunk__30889_30901 = G__30913;
count__30890_30902 = G__30914;
i__30891_30903 = G__30915;
continue;
} else {
var f_30916 = cljs.core.first.call(null,seq__30888_30910__$1);
cljs.core.println.call(null,"  ",f_30916);

var G__30917 = cljs.core.next.call(null,seq__30888_30910__$1);
var G__30918 = null;
var G__30919 = (0);
var G__30920 = (0);
seq__30888_30900 = G__30917;
chunk__30889_30901 = G__30918;
count__30890_30902 = G__30919;
i__30891_30903 = G__30920;
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
var seq__30892 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__30893 = null;
var count__30894 = (0);
var i__30895 = (0);
while(true){
if((i__30895 < count__30894)){
var vec__30896 = cljs.core._nth.call(null,chunk__30893,i__30895);
var name = cljs.core.nth.call(null,vec__30896,(0),null);
var map__30897 = cljs.core.nth.call(null,vec__30896,(1),null);
var map__30897__$1 = ((cljs.core.seq_QMARK_.call(null,map__30897))?cljs.core.apply.call(null,cljs.core.hash_map,map__30897):map__30897);
var arglists = cljs.core.get.call(null,map__30897__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
var doc = cljs.core.get.call(null,map__30897__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__30921 = seq__30892;
var G__30922 = chunk__30893;
var G__30923 = count__30894;
var G__30924 = (i__30895 + (1));
seq__30892 = G__30921;
chunk__30893 = G__30922;
count__30894 = G__30923;
i__30895 = G__30924;
continue;
} else {
var temp__4126__auto__ = cljs.core.seq.call(null,seq__30892);
if(temp__4126__auto__){
var seq__30892__$1 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30892__$1)){
var c__18945__auto__ = cljs.core.chunk_first.call(null,seq__30892__$1);
var G__30925 = cljs.core.chunk_rest.call(null,seq__30892__$1);
var G__30926 = c__18945__auto__;
var G__30927 = cljs.core.count.call(null,c__18945__auto__);
var G__30928 = (0);
seq__30892 = G__30925;
chunk__30893 = G__30926;
count__30894 = G__30927;
i__30895 = G__30928;
continue;
} else {
var vec__30898 = cljs.core.first.call(null,seq__30892__$1);
var name = cljs.core.nth.call(null,vec__30898,(0),null);
var map__30899 = cljs.core.nth.call(null,vec__30898,(1),null);
var map__30899__$1 = ((cljs.core.seq_QMARK_.call(null,map__30899))?cljs.core.apply.call(null,cljs.core.hash_map,map__30899):map__30899);
var arglists = cljs.core.get.call(null,map__30899__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
var doc = cljs.core.get.call(null,map__30899__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__30929 = cljs.core.next.call(null,seq__30892__$1);
var G__30930 = null;
var G__30931 = (0);
var G__30932 = (0);
seq__30892 = G__30929;
chunk__30893 = G__30930;
count__30894 = G__30931;
i__30895 = G__30932;
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

//# sourceMappingURL=repl.js.map?rel=1441291726380