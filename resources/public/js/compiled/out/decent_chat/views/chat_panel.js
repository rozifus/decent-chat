// Compiled by ClojureScript 0.0-3211 {}
goog.provide('decent_chat.views.chat_panel');
goog.require('cljs.core');
goog.require('re_com.core');
goog.require('re_frame.core');
goog.require('reagent.core');
decent_chat.views.chat_panel.scroll_messages_to_bottom = (function decent_chat$views$chat_panel$scroll_messages_to_bottom(element,detect_scroll_QMARK_){
cljs.core.reset_BANG_.call(null,detect_scroll_QMARK_,false);

return element.scrollTop = element.scrollHeight;
});
decent_chat.views.chat_panel.handle_messages_scroll_event = (function decent_chat$views$chat_panel$handle_messages_scroll_event(detect_scroll_QMARK_){
re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("ui","set-latch","ui/set-latch",-1130435194),false,cljs.core.deref.call(null,detect_scroll_QMARK_)], null));

return cljs.core.reset_BANG_.call(null,detect_scroll_QMARK_,true);
});
decent_chat.views.chat_panel.send_button = (function decent_chat$views$chat_panel$send_button(input_value){
var hover_QMARK_ = reagent.core.atom.call(null,false);
var disabled_QMARK_ = reagent.ratom.make_reaction.call(null,((function (hover_QMARK_){
return (function (){
return cljs.core._EQ_.call(null,"",clojure.string.trim.call(null,cljs.core.deref.call(null,input_value)));
});})(hover_QMARK_))
);
return ((function (hover_QMARK_,disabled_QMARK_){
return (function (input_value__$1){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.border,new cljs.core.Keyword(null,"border","border",1444987323),"1em solid white",new cljs.core.Keyword(null,"child","child",623967545),new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.button,new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (hover_QMARK_,disabled_QMARK_){
return (function (){
re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("op","send-message","op/send-message",185033322),cljs.core.deref.call(null,input_value__$1),null], null));

return cljs.core.reset_BANG_.call(null,input_value__$1,"");
});})(hover_QMARK_,disabled_QMARK_))
,new cljs.core.Keyword(null,"disabled?","disabled?",-1523234181),cljs.core.deref.call(null,disabled_QMARK_),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"color","color",1011675173),"white",new cljs.core.Keyword(null,"background-color","background-color",570434026),(cljs.core.truth_(cljs.core.deref.call(null,hover_QMARK_))?"#0072bb":"#4d90fe")], null),new cljs.core.Keyword(null,"attr","attr",-604132353),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"on-mouse-over","on-mouse-over",-858472552),((function (hover_QMARK_,disabled_QMARK_){
return (function (event){
cljs.core.reset_BANG_.call(null,hover_QMARK_,true);

return null;
});})(hover_QMARK_,disabled_QMARK_))
,new cljs.core.Keyword(null,"on-mouse-out","on-mouse-out",643448647),((function (hover_QMARK_,disabled_QMARK_){
return (function (event){
cljs.core.reset_BANG_.call(null,hover_QMARK_,false);

return null;
});})(hover_QMARK_,disabled_QMARK_))
], null),new cljs.core.Keyword(null,"label","label",1718410804),"Send"], null)], null);
});
;})(hover_QMARK_,disabled_QMARK_))
});
decent_chat.views.chat_panel.latch_button = (function decent_chat$views$chat_panel$latch_button(){
var disabled_QMARK_ = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("ui","latch","ui/latch",728820946)], null));
return ((function (disabled_QMARK_){
return (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.border,new cljs.core.Keyword(null,"border","border",1444987323),"1em solid white",new cljs.core.Keyword(null,"child","child",623967545),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.button,new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (disabled_QMARK_){
return (function (){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("ui","set-latch","ui/set-latch",-1130435194),true,true], null));
});})(disabled_QMARK_))
,new cljs.core.Keyword(null,"disabled?","disabled?",-1523234181),reagent.ratom.make_reaction.call(null,((function (disabled_QMARK_){
return (function (){
return cljs.core.deref.call(null,disabled_QMARK_);
});})(disabled_QMARK_))
),new cljs.core.Keyword(null,"label","label",1718410804),"Latch"], null)], null);
});
;})(disabled_QMARK_))
});
decent_chat.views.chat_panel.input_buttons = (function decent_chat$views$chat_panel$input_buttons(input_value){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.v_box,new cljs.core.Keyword(null,"justify","justify",-722524056),new cljs.core.Keyword(null,"end","end",-268185958),new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [decent_chat.views.chat_panel.latch_button], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [decent_chat.views.chat_panel.send_button,input_value], null)], null)], null);
});
decent_chat.views.chat_panel.input_box = (function decent_chat$views$chat_panel$input_box(value){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.box,new cljs.core.Keyword(null,"size","size",1098693007),"auto",new cljs.core.Keyword(null,"child","child",623967545),new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.input_textarea,new cljs.core.Keyword(null,"model","model",331153215),value,new cljs.core.Keyword(null,"width","width",-384071477),"100%",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"resize","resize",297367086),"none"], null),new cljs.core.Keyword(null,"change-on-blur?","change-on-blur?",854283925),false,new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__23538_SHARP_){
return cljs.core.reset_BANG_.call(null,value,p1__23538_SHARP_);
})], null)], null);
});
decent_chat.views.chat_panel.input_panel = (function decent_chat$views$chat_panel$input_panel(){
var input_value = reagent.core.atom.call(null,"");
return ((function (input_value){
return (function (){
return new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.h_box,new cljs.core.Keyword(null,"size","size",1098693007),"0 0 6em",new cljs.core.Keyword(null,"align","align",1964212802),new cljs.core.Keyword(null,"end","end",-268185958),new cljs.core.Keyword(null,"justify","justify",-722524056),new cljs.core.Keyword(null,"end","end",-268185958),new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [decent_chat.views.chat_panel.input_box,input_value], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [decent_chat.views.chat_panel.input_buttons,input_value], null)], null)], null);
});
;})(input_value))
});
decent_chat.views.chat_panel.message_item = (function decent_chat$views$chat_panel$message_item(message){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.v_box,new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4","h4",2004862993),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(message)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"content","content",15833224).cljs$core$IFn$_invoke$arity$1(message)], null)], null)], null);
});
decent_chat.views.chat_panel.message_panel = (function decent_chat$views$chat_panel$message_panel(){
var messages = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"messages","messages",345434482)], null));
var latch_QMARK_ = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("ui","latch","ui/latch",728820946)], null));
var detect_scroll_QMARK_ = reagent.core.atom.call(null,true);
return reagent.core.create_class.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"display-name","display-name",694513143),"message-panel",new cljs.core.Keyword(null,"component-did-mount","component-did-mount",-1126910518),((function (messages,latch_QMARK_,detect_scroll_QMARK_){
return (function (p1__23539_SHARP_){
if(cljs.core.truth_(cljs.core.deref.call(null,latch_QMARK_))){
return decent_chat.views.chat_panel.scroll_messages_to_bottom.call(null,reagent.core.dom_node.call(null,p1__23539_SHARP_),detect_scroll_QMARK_);
} else {
return null;
}
});})(messages,latch_QMARK_,detect_scroll_QMARK_))
,new cljs.core.Keyword(null,"component-did-update","component-did-update",-1468549173),((function (messages,latch_QMARK_,detect_scroll_QMARK_){
return (function (p1__23540_SHARP_){
if(cljs.core.truth_(cljs.core.deref.call(null,latch_QMARK_))){
return decent_chat.views.chat_panel.scroll_messages_to_bottom.call(null,reagent.core.dom_node.call(null,p1__23540_SHARP_),detect_scroll_QMARK_);
} else {
return null;
}
});})(messages,latch_QMARK_,detect_scroll_QMARK_))
,new cljs.core.Keyword(null,"reagent-render","reagent-render",-985383853),((function (messages,latch_QMARK_,detect_scroll_QMARK_){
return (function (){
return new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.scroller,new cljs.core.Keyword(null,"v-scroll","v-scroll",-1842185668),new cljs.core.Keyword(null,"auto","auto",-566279492),new cljs.core.Keyword(null,"size","size",1098693007),"auto",new cljs.core.Keyword(null,"attr","attr",-604132353),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-scroll","on-scroll",1590848677),((function (messages,latch_QMARK_,detect_scroll_QMARK_){
return (function (event){
decent_chat.views.chat_panel.handle_messages_scroll_event.call(null,detect_scroll_QMARK_);

return null;
});})(messages,latch_QMARK_,detect_scroll_QMARK_))
], null),new cljs.core.Keyword(null,"child","child",623967545),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.v_box,new cljs.core.Keyword(null,"children","children",-940561982),(function (){var iter__18914__auto__ = ((function (messages,latch_QMARK_,detect_scroll_QMARK_){
return (function decent_chat$views$chat_panel$message_panel_$_iter__23549(s__23550){
return (new cljs.core.LazySeq(null,((function (messages,latch_QMARK_,detect_scroll_QMARK_){
return (function (){
var s__23550__$1 = s__23550;
while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__23550__$1);
if(temp__4126__auto__){
var s__23550__$2 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__23550__$2)){
var c__18912__auto__ = cljs.core.chunk_first.call(null,s__23550__$2);
var size__18913__auto__ = cljs.core.count.call(null,c__18912__auto__);
var b__23552 = cljs.core.chunk_buffer.call(null,size__18913__auto__);
if((function (){var i__23551 = (0);
while(true){
if((i__23551 < size__18913__auto__)){
var vec__23555 = cljs.core._nth.call(null,c__18912__auto__,i__23551);
var id = cljs.core.nth.call(null,vec__23555,(0),null);
var message = cljs.core.nth.call(null,vec__23555,(1),null);
cljs.core.chunk_append.call(null,b__23552,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [decent_chat.views.chat_panel.message_item,message], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),id], null)));

var G__23557 = (i__23551 + (1));
i__23551 = G__23557;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__23552),decent_chat$views$chat_panel$message_panel_$_iter__23549.call(null,cljs.core.chunk_rest.call(null,s__23550__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__23552),null);
}
} else {
var vec__23556 = cljs.core.first.call(null,s__23550__$2);
var id = cljs.core.nth.call(null,vec__23556,(0),null);
var message = cljs.core.nth.call(null,vec__23556,(1),null);
return cljs.core.cons.call(null,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [decent_chat.views.chat_panel.message_item,message], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),id], null)),decent_chat$views$chat_panel$message_panel_$_iter__23549.call(null,cljs.core.rest.call(null,s__23550__$2)));
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
decent_chat.views.chat_panel.chat_panel = (function decent_chat$views$chat_panel$chat_panel(){
return (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.v_box,new cljs.core.Keyword(null,"size","size",1098693007),"auto",new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [decent_chat.views.chat_panel.message_panel], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [decent_chat.views.chat_panel.input_panel], null)], null)], null);
});
});

//# sourceMappingURL=chat_panel.js.map?rel=1441374260251