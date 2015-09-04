// Compiled by ClojureScript 0.0-3211 {}
goog.provide('figwheel.connect');
goog.require('cljs.core');
goog.require('figwheel.client.utils');
goog.require('decent_chat.core');
goog.require('figwheel.client');
figwheel.client.start.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),"ws://localhost:3449/figwheel-ws",new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),(function() { 
var G__31600__delegate = function (x){
if(cljs.core.truth_(decent_chat.core.mount_root)){
return cljs.core.apply.call(null,decent_chat.core.mount_root,x);
} else {
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: :on-jsload hook 'decent-chat.core/mount-root' is missing");
}
};
var G__31600 = function (var_args){
var x = null;
if (arguments.length > 0) {
var G__31601__i = 0, G__31601__a = new Array(arguments.length -  0);
while (G__31601__i < G__31601__a.length) {G__31601__a[G__31601__i] = arguments[G__31601__i + 0]; ++G__31601__i;}
  x = new cljs.core.IndexedSeq(G__31601__a,0);
} 
return G__31600__delegate.call(this,x);};
G__31600.cljs$lang$maxFixedArity = 0;
G__31600.cljs$lang$applyTo = (function (arglist__31602){
var x = cljs.core.seq(arglist__31602);
return G__31600__delegate(x);
});
G__31600.cljs$core$IFn$_invoke$arity$variadic = G__31600__delegate;
return G__31600;
})()
,new cljs.core.Keyword(null,"build-id","build-id",1642831089),"dev"], null));

//# sourceMappingURL=connect.js.map?rel=1441291727215