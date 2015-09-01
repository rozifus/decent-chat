// Compiled by ClojureScript 0.0-3211 {}
goog.provide('figwheel.connect');
goog.require('cljs.core');
goog.require('figwheel.client.utils');
goog.require('decent_chat.core');
goog.require('figwheel.client');
figwheel.client.start.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),"ws://localhost:3449/figwheel-ws",new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),(function() { 
var G__31593__delegate = function (x){
if(cljs.core.truth_(decent_chat.core.mount_root)){
return cljs.core.apply.call(null,decent_chat.core.mount_root,x);
} else {
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: :on-jsload hook 'decent-chat.core/mount-root' is missing");
}
};
var G__31593 = function (var_args){
var x = null;
if (arguments.length > 0) {
var G__31594__i = 0, G__31594__a = new Array(arguments.length -  0);
while (G__31594__i < G__31594__a.length) {G__31594__a[G__31594__i] = arguments[G__31594__i + 0]; ++G__31594__i;}
  x = new cljs.core.IndexedSeq(G__31594__a,0);
} 
return G__31593__delegate.call(this,x);};
G__31593.cljs$lang$maxFixedArity = 0;
G__31593.cljs$lang$applyTo = (function (arglist__31595){
var x = cljs.core.seq(arglist__31595);
return G__31593__delegate(x);
});
G__31593.cljs$core$IFn$_invoke$arity$variadic = G__31593__delegate;
return G__31593;
})()
,new cljs.core.Keyword(null,"build-id","build-id",1642831089),"dev"], null));

//# sourceMappingURL=connect.js.map?rel=1441122553449