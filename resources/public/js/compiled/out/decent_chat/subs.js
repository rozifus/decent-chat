// Compiled by ClojureScript 0.0-3211 {}
goog.provide('decent_chat.subs');
goog.require('cljs.core');
goog.require('re_frame.core');
re_frame.core.register_sub.call(null,new cljs.core.Keyword(null,"messages","messages",345434482),(function (db){
return reagent.ratom.make_reaction.call(null,(function (){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,db),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"messages","messages",345434482)], null));
}));
}));
re_frame.core.register_sub.call(null,new cljs.core.Keyword("ui","latch","ui/latch",728820946),(function (db){
return reagent.ratom.make_reaction.call(null,(function (){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,db),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.Keyword(null,"latch","latch",728809382)], null));
}));
}));

//# sourceMappingURL=subs.js.map?rel=1441340362528