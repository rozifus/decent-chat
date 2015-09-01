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
re_frame.core.register_handler.call(null,new cljs.core.Keyword(null,"send-message","send-message",185030731),(function (app_state,p__24418){
var vec__24419 = p__24418;
var _ = cljs.core.nth.call(null,vec__24419,(0),null);
var text = cljs.core.nth.call(null,vec__24419,(1),null);
var id = decent_chat.handlers.allocate_next_id.call(null,new cljs.core.Keyword(null,"messages","messages",345434482).cljs$core$IFn$_invoke$arity$1(app_state));
return cljs.core.assoc_in.call(null,app_state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"messages","messages",345434482),id], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"content","content",15833224),text], null));
}));

//# sourceMappingURL=handlers.js.map?rel=1441122545730