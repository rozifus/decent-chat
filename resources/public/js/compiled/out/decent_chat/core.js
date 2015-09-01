// Compiled by ClojureScript 0.0-3211 {}
goog.provide('decent_chat.core');
goog.require('cljs.core');
goog.require('decent_chat.views');
goog.require('decent_chat.subs');
goog.require('decent_chat.handlers');
goog.require('re_frame.core');
goog.require('reagent.core');
decent_chat.core.mount_root = (function decent_chat$core$mount_root(){
return reagent.core.render.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [decent_chat.views.app_panel], null),document.getElementById("app"));
});
decent_chat.core.init = (function decent_chat$core$init(){
re_frame.core.dispatch_sync.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"initialize-db","initialize-db",230998432)], null));

return decent_chat.core.mount_root.call(null);
});
goog.exportSymbol('decent_chat.core.init', decent_chat.core.init);

//# sourceMappingURL=core.js.map?rel=1441122545751