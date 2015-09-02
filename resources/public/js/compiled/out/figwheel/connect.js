// Compiled by ClojureScript 0.0-3211 {}
goog.provide('figwheel.connect');
goog.require('cljs.core');
goog.require('figwheel.client.utils');
goog.require('decent_chat.core');
goog.require('figwheel.client');
figwheel.client.start.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),"ws://localhost:3449/figwheel-ws",new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),(function() { 
var G__21302__delegate = function (x){
if(cljs.core.truth_(decent_chat.core.mount_root)){
return cljs.core.apply.call(null,decent_chat.core.mount_root,x);
} else {
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: :on-jsload hook 'decent-chat.core/mount-root' is missing");
}
};
var G__21302 = function (var_args){
var x = null;
if (arguments.length > 0) {
var G__21303__i = 0, G__21303__a = new Array(arguments.length -  0);
while (G__21303__i < G__21303__a.length) {G__21303__a[G__21303__i] = arguments[G__21303__i + 0]; ++G__21303__i;}
  x = new cljs.core.IndexedSeq(G__21303__a,0);
} 
return G__21302__delegate.call(this,x);};
G__21302.cljs$lang$maxFixedArity = 0;
G__21302.cljs$lang$applyTo = (function (arglist__21304){
var x = cljs.core.seq(arglist__21304);
return G__21302__delegate(x);
});
G__21302.cljs$core$IFn$_invoke$arity$variadic = G__21302__delegate;
return G__21302;
})()
,new cljs.core.Keyword(null,"build-id","build-id",1642831089),"dev"], null));

//# sourceMappingURL=connect.js.map?rel=1441171853586