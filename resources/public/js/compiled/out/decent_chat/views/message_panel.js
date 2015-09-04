// Compiled by ClojureScript 0.0-3211 {}
goog.provide('decent_chat.views.message_panel');
goog.require('cljs.core');
goog.require('re_com.core');
goog.require('re_frame.core');
goog.require('reagent.core');
decent_chat.views.message_panel.message_item = (function decent_chat$views$message_panel$message_item(message){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.v_box,new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4","h4",2004862993),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(message)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"content","content",15833224).cljs$core$IFn$_invoke$arity$1(message)], null)], null)], null);
});
decent_chat.views.message_panel.scroll_messages_to_bottom = (function decent_chat$views$message_panel$scroll_messages_to_bottom(element,detect_scroll_QMARK_){
cljs.core.reset_BANG_.call(null,detect_scroll_QMARK_,false);

return element.scrollTop = element.scrollHeight;
});
decent_chat.views.message_panel.handle_messages_scroll_event = (function decent_chat$views$message_panel$handle_messages_scroll_event(detect_scroll_QMARK_){
re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("ui","set-latch","ui/set-latch",-1130435194),false,cljs.core.deref.call(null,detect_scroll_QMARK_)], null));

return cljs.core.reset_BANG_.call(null,detect_scroll_QMARK_,true);
});
decent_chat.views.message_panel.message_panel = (function decent_chat$views$message_panel$message_panel(){
var messages = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"messages","messages",345434482)], null));
var latch_QMARK_ = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("ui","latch","ui/latch",728820946)], null));
var detect_scroll_QMARK_ = reagent.core.atom.call(null,true);
return reagent.core.create_class.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"display-name","display-name",694513143),"message-panel",new cljs.core.Keyword(null,"component-did-mount","component-did-mount",-1126910518),((function (messages,latch_QMARK_,detect_scroll_QMARK_){
return (function (p1__23174_SHARP_){
if(cljs.core.truth_(cljs.core.deref.call(null,latch_QMARK_))){
return decent_chat.views.message_panel.scroll_messages_to_bottom.call(null,reagent.core.dom_node.call(null,p1__23174_SHARP_),detect_scroll_QMARK_);
} else {
return null;
}
});})(messages,latch_QMARK_,detect_scroll_QMARK_))
,new cljs.core.Keyword(null,"component-did-update","component-did-update",-1468549173),((function (messages,latch_QMARK_,detect_scroll_QMARK_){
return (function (p1__23175_SHARP_){
if(cljs.core.truth_(cljs.core.deref.call(null,latch_QMARK_))){
cljs.core.println.call(null,cljs.core.deref.call(null,reagent.ratom.make_reaction.call(null,((function (messages,latch_QMARK_,detect_scroll_QMARK_){
return (function (){
return latch_QMARK_;
});})(messages,latch_QMARK_,detect_scroll_QMARK_))
)),cljs.core.deref.call(null,latch_QMARK_));

return decent_chat.views.message_panel.scroll_messages_to_bottom.call(null,reagent.core.dom_node.call(null,p1__23175_SHARP_),detect_scroll_QMARK_);
} else {
return null;
}
});})(messages,latch_QMARK_,detect_scroll_QMARK_))
,new cljs.core.Keyword(null,"reagent-render","reagent-render",-985383853),((function (messages,latch_QMARK_,detect_scroll_QMARK_){
return (function (){
return new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.scroller,new cljs.core.Keyword(null,"v-scroll","v-scroll",-1842185668),new cljs.core.Keyword(null,"auto","auto",-566279492),new cljs.core.Keyword(null,"size","size",1098693007),"auto",new cljs.core.Keyword(null,"attr","attr",-604132353),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-scroll","on-scroll",1590848677),((function (messages,latch_QMARK_,detect_scroll_QMARK_){
return (function (event){
decent_chat.views.message_panel.handle_messages_scroll_event.call(null,detect_scroll_QMARK_);

return null;
});})(messages,latch_QMARK_,detect_scroll_QMARK_))
], null),new cljs.core.Keyword(null,"child","child",623967545),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.v_box,new cljs.core.Keyword(null,"children","children",-940561982),(function (){var iter__18914__auto__ = ((function (messages,latch_QMARK_,detect_scroll_QMARK_){
return (function decent_chat$views$message_panel$message_panel_$_iter__23184(s__23185){
return (new cljs.core.LazySeq(null,((function (messages,latch_QMARK_,detect_scroll_QMARK_){
return (function (){
var s__23185__$1 = s__23185;
while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__23185__$1);
if(temp__4126__auto__){
var s__23185__$2 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__23185__$2)){
var c__18912__auto__ = cljs.core.chunk_first.call(null,s__23185__$2);
var size__18913__auto__ = cljs.core.count.call(null,c__18912__auto__);
var b__23187 = cljs.core.chunk_buffer.call(null,size__18913__auto__);
if((function (){var i__23186 = (0);
while(true){
if((i__23186 < size__18913__auto__)){
var vec__23190 = cljs.core._nth.call(null,c__18912__auto__,i__23186);
var id = cljs.core.nth.call(null,vec__23190,(0),null);
var message = cljs.core.nth.call(null,vec__23190,(1),null);
cljs.core.chunk_append.call(null,b__23187,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [decent_chat.views.message_panel.message_item,message], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),id], null)));

var G__23192 = (i__23186 + (1));
i__23186 = G__23192;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__23187),decent_chat$views$message_panel$message_panel_$_iter__23184.call(null,cljs.core.chunk_rest.call(null,s__23185__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__23187),null);
}
} else {
var vec__23191 = cljs.core.first.call(null,s__23185__$2);
var id = cljs.core.nth.call(null,vec__23191,(0),null);
var message = cljs.core.nth.call(null,vec__23191,(1),null);
return cljs.core.cons.call(null,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [decent_chat.views.message_panel.message_item,message], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),id], null)),decent_chat$views$message_panel$message_panel_$_iter__23184.call(null,cljs.core.rest.call(null,s__23185__$2)));
}
} else {
return null;
}
break;
}
});})(messages,latch_QMARK_,detect_scroll_QMARK_))
,null,null));
});})(messages,latch_QMARK_,detect_scroll_QMARK_))
;
return iter__18914__auto__.call(null,cljs.core.deref.call(null,messages));
})()], null)], null);
});})(messages,latch_QMARK_,detect_scroll_QMARK_))
], null));
});
decent_chat.views.message_panel.chat_panel = (function decent_chat$views$message_panel$chat_panel(){
return (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.v_box,new cljs.core.Keyword(null,"size","size",1098693007),"auto",new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [decent_chat.views.message_panel.message_panel], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [decent_chat.views.message_panel.input_panel], null)], null)], null);
});
});

//# sourceMappingURL=message_panel.js.map?rel=1441372804120