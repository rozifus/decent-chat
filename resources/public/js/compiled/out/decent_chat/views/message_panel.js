// Compiled by ClojureScript 0.0-3211 {}
goog.provide('decent_chat.views.message_panel');
goog.require('cljs.core');
goog.require('re_com.core');
goog.require('re_frame.core');
goog.require('reagent.core');
decent_chat.views.message_panel.message_item = (function decent_chat$views$message_panel$message_item(message){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.v_box,new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4","h4",2004862993),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(message)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"content","content",15833224).cljs$core$IFn$_invoke$arity$1(message)], null)], null)], null);
});
decent_chat.views.message_panel.message_panel = (function decent_chat$views$message_panel$message_panel(){
var messages = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"messages","messages",345434482)], null));
return ((function (messages){
return (function (){
return new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.scroller,new cljs.core.Keyword(null,"v-scroll","v-scroll",-1842185668),new cljs.core.Keyword(null,"auto","auto",-566279492),new cljs.core.Keyword(null,"size","size",1098693007),"auto",new cljs.core.Keyword(null,"attr","attr",-604132353),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-scroll","on-scroll",1590848677),((function (messages){
return (function (){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("ui","set-latch","ui/set-latch",-1130435194),false], null));
});})(messages))
], null),new cljs.core.Keyword(null,"child","child",623967545),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.v_box,new cljs.core.Keyword(null,"children","children",-940561982),(function (){var iter__18914__auto__ = ((function (messages){
return (function decent_chat$views$message_panel$message_panel_$_iter__31832(s__31833){
return (new cljs.core.LazySeq(null,((function (messages){
return (function (){
var s__31833__$1 = s__31833;
while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__31833__$1);
if(temp__4126__auto__){
var s__31833__$2 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__31833__$2)){
var c__18912__auto__ = cljs.core.chunk_first.call(null,s__31833__$2);
var size__18913__auto__ = cljs.core.count.call(null,c__18912__auto__);
var b__31835 = cljs.core.chunk_buffer.call(null,size__18913__auto__);
if((function (){var i__31834 = (0);
while(true){
if((i__31834 < size__18913__auto__)){
var vec__31838 = cljs.core._nth.call(null,c__18912__auto__,i__31834);
var id = cljs.core.nth.call(null,vec__31838,(0),null);
var message = cljs.core.nth.call(null,vec__31838,(1),null);
cljs.core.chunk_append.call(null,b__31835,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [decent_chat.views.message_panel.message_item,message], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),id], null)));

var G__31840 = (i__31834 + (1));
i__31834 = G__31840;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__31835),decent_chat$views$message_panel$message_panel_$_iter__31832.call(null,cljs.core.chunk_rest.call(null,s__31833__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__31835),null);
}
} else {
var vec__31839 = cljs.core.first.call(null,s__31833__$2);
var id = cljs.core.nth.call(null,vec__31839,(0),null);
var message = cljs.core.nth.call(null,vec__31839,(1),null);
return cljs.core.cons.call(null,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [decent_chat.views.message_panel.message_item,message], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),id], null)),decent_chat$views$message_panel$message_panel_$_iter__31832.call(null,cljs.core.rest.call(null,s__31833__$2)));
}
} else {
return null;
}
break;
}
});})(messages))
,null,null));
});})(messages))
;
return iter__18914__auto__.call(null,cljs.core.deref.call(null,messages));
})()], null)], null);
});
;})(messages))
});

//# sourceMappingURL=message_panel.js.map?rel=1441340523445