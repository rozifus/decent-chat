// Compiled by ClojureScript 0.0-3211 {}
goog.provide('decent_chat.handlers');
goog.require('cljs.core');
goog.require('decent_chat.db');
goog.require('re_frame.core');
cljs.core.enable_console_print_BANG_.call(null);
/**
 * Returns the next daypart id.
 * Assumes dayaprts are sorted.
 * Returns one more than the current largest id.
 */
decent_chat.handlers.allocate_next_id = (function decent_chat$handlers$allocate_next_id(todos){
return cljs.core.fnil.call(null,cljs.core.inc,(0)).call(null,cljs.core.last.call(null,cljs.core.keys.call(null,todos)));
});
re_frame.core.register_handler.call(null,new cljs.core.Keyword(null,"initialize-db","initialize-db",230998432),(function (_,___$1){
return decent_chat.db.default_db;
}));
re_frame.core.register_handler.call(null,new cljs.core.Keyword("op","send-message","op/send-message",185033322),(function (app_state,p__31816){
var vec__31817 = p__31816;
var _ = cljs.core.nth.call(null,vec__31817,(0),null);
var content = cljs.core.nth.call(null,vec__31817,(1),null);
var media = cljs.core.nth.call(null,vec__31817,(2),null);
cljs.core.println.call(null,app_state);

var id = decent_chat.handlers.allocate_next_id.call(null,new cljs.core.Keyword(null,"messages","messages",345434482).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(app_state)));
return cljs.core.assoc_in.call(null,app_state,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"messages","messages",345434482),id], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"content","content",15833224),content,new cljs.core.Keyword(null,"media","media",-1066138403),media], null));
}));
re_frame.core.register_handler.call(null,new cljs.core.Keyword("ui","set-latch","ui/set-latch",-1130435194),(function (app_state,p__31818){
var vec__31819 = p__31818;
var _ = cljs.core.nth.call(null,vec__31819,(0),null);
var tf = cljs.core.nth.call(null,vec__31819,(1),null);
return cljs.core.assoc_in.call(null,app_state,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.Keyword(null,"latch","latch",728809382)], null),tf);
}));

//# sourceMappingURL=handlers.js.map?rel=1441340444655