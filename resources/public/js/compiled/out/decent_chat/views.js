// Compiled by ClojureScript 0.0-3211 {}
goog.provide('decent_chat.views');
goog.require('cljs.core');
goog.require('re_com.core');
goog.require('re_frame.core');
goog.require('reagent.core');
decent_chat.views.title = (function decent_chat$views$title(){
var name = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"name","name",1843675177)], null));
return ((function (name){
return (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.title,new cljs.core.Keyword(null,"label","label",1718410804),[cljs.core.str("Hello from "),cljs.core.str(cljs.core.deref.call(null,name))].join(''),new cljs.core.Keyword(null,"level","level",1290497552),new cljs.core.Keyword(null,"level1","level1",813811133)], null);
});
;})(name))
});
decent_chat.views.message_item = (function decent_chat$views$message_item(message){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.v_box,new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4","h4",2004862993),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(message)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"content","content",15833224).cljs$core$IFn$_invoke$arity$1(message)], null)], null)], null);
});
decent_chat.views.messages_panel = (function decent_chat$views$messages_panel(){
var messages = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"messages","messages",345434482)], null));
return ((function (messages){
return (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.scroller,new cljs.core.Keyword(null,"v-scroll","v-scroll",-1842185668),new cljs.core.Keyword(null,"auto","auto",-566279492),new cljs.core.Keyword(null,"size","size",1098693007),"auto",new cljs.core.Keyword(null,"child","child",623967545),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.v_box,new cljs.core.Keyword(null,"children","children",-940561982),(function (){var iter__18914__auto__ = ((function (messages){
return (function decent_chat$views$messages_panel_$_iter__22387(s__22388){
return (new cljs.core.LazySeq(null,((function (messages){
return (function (){
var s__22388__$1 = s__22388;
while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__22388__$1);
if(temp__4126__auto__){
var s__22388__$2 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__22388__$2)){
var c__18912__auto__ = cljs.core.chunk_first.call(null,s__22388__$2);
var size__18913__auto__ = cljs.core.count.call(null,c__18912__auto__);
var b__22390 = cljs.core.chunk_buffer.call(null,size__18913__auto__);
if((function (){var i__22389 = (0);
while(true){
if((i__22389 < size__18913__auto__)){
var vec__22393 = cljs.core._nth.call(null,c__18912__auto__,i__22389);
var id = cljs.core.nth.call(null,vec__22393,(0),null);
var message = cljs.core.nth.call(null,vec__22393,(1),null);
cljs.core.chunk_append.call(null,b__22390,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [decent_chat.views.message_item,message], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),id], null)));

var G__22395 = (i__22389 + (1));
i__22389 = G__22395;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__22390),decent_chat$views$messages_panel_$_iter__22387.call(null,cljs.core.chunk_rest.call(null,s__22388__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__22390),null);
}
} else {
var vec__22394 = cljs.core.first.call(null,s__22388__$2);
var id = cljs.core.nth.call(null,vec__22394,(0),null);
var message = cljs.core.nth.call(null,vec__22394,(1),null);
return cljs.core.cons.call(null,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [decent_chat.views.message_item,message], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),id], null)),decent_chat$views$messages_panel_$_iter__22387.call(null,cljs.core.rest.call(null,s__22388__$2)));
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
decent_chat.views.input_box = (function decent_chat$views$input_box(value){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.box,new cljs.core.Keyword(null,"size","size",1098693007),"auto",new cljs.core.Keyword(null,"child","child",623967545),new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.input_textarea,new cljs.core.Keyword(null,"model","model",331153215),value,new cljs.core.Keyword(null,"width","width",-384071477),"100%",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"resize","resize",297367086),"none"], null),new cljs.core.Keyword(null,"change-on-blur?","change-on-blur?",854283925),false,new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__22396_SHARP_){
return cljs.core.reset_BANG_.call(null,value,p1__22396_SHARP_);
})], null)], null);
});
decent_chat.views.send_button = (function decent_chat$views$send_button(input_value){
var hover_QMARK_ = reagent.core.atom.call(null,false);
var disabled_QMARK_ = reagent.ratom.make_reaction.call(null,((function (hover_QMARK_){
return (function (){
return cljs.core._EQ_.call(null,"",clojure.string.trim.call(null,cljs.core.deref.call(null,input_value)));
});})(hover_QMARK_))
);
return ((function (hover_QMARK_,disabled_QMARK_){
return (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.border,new cljs.core.Keyword(null,"border","border",1444987323),"1em solid white",new cljs.core.Keyword(null,"child","child",623967545),new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.button,new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (hover_QMARK_,disabled_QMARK_){
return (function (){
re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"send-message","send-message",185030731),cljs.core.deref.call(null,input_value)], null));

return cljs.core.reset_BANG_.call(null,input_value,"");
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
decent_chat.views.latch_button = (function decent_chat$views$latch_button(){
return (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.border,new cljs.core.Keyword(null,"border","border",1444987323),"1em solid white",new cljs.core.Keyword(null,"child","child",623967545),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.button,new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"toggle-latch","toggle-latch",1711946158)], null));
}),new cljs.core.Keyword(null,"label","label",1718410804),"Latch"], null)], null);
});
});
decent_chat.views.input_buttons = (function decent_chat$views$input_buttons(input_value){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.v_box,new cljs.core.Keyword(null,"justify","justify",-722524056),new cljs.core.Keyword(null,"end","end",-268185958),new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [decent_chat.views.latch_button], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [decent_chat.views.send_button,input_value], null)], null)], null);
});
decent_chat.views.input_panel = (function decent_chat$views$input_panel(){
var input_value = reagent.core.atom.call(null,"");
return ((function (input_value){
return (function (){
return new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.h_box,new cljs.core.Keyword(null,"size","size",1098693007),"0 0 6em",new cljs.core.Keyword(null,"align","align",1964212802),new cljs.core.Keyword(null,"end","end",-268185958),new cljs.core.Keyword(null,"justify","justify",-722524056),new cljs.core.Keyword(null,"end","end",-268185958),new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [decent_chat.views.input_box,input_value], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [decent_chat.views.input_buttons,input_value], null)], null)], null);
});
;})(input_value))
});
decent_chat.views.messaging_panel = (function decent_chat$views$messaging_panel(){
return (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.v_box,new cljs.core.Keyword(null,"size","size",1098693007),"auto",new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [decent_chat.views.messages_panel], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [decent_chat.views.input_panel], null)], null)], null);
});
});
decent_chat.views.options_panel = (function decent_chat$views$options_panel(){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.v_box,new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.p,"sidebar"], null)], null);
});
});
decent_chat.views.sidebar_panel = (function decent_chat$views$sidebar_panel(){
return (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.box,new cljs.core.Keyword(null,"size","size",1098693007),"0 0 16em",new cljs.core.Keyword(null,"child","child",623967545),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [decent_chat.views.options_panel], null)], null);
});
});
decent_chat.views.main_panel = (function decent_chat$views$main_panel(){
return (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.h_box,new cljs.core.Keyword(null,"size","size",1098693007),"1 1 auto",new cljs.core.Keyword(null,"justify","justify",-722524056),new cljs.core.Keyword(null,"end","end",-268185958),new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.gap,new cljs.core.Keyword(null,"size","size",1098693007),"1em"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [decent_chat.views.messaging_panel], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [decent_chat.views.sidebar_panel], null)], null)], null);
});
});
decent_chat.views.header_title = (function decent_chat$views$header_title(){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.box,new cljs.core.Keyword(null,"child","child",623967545),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",-1896887462),"decent-chat"], null)], null);
});
});
decent_chat.views.header_panel = (function decent_chat$views$header_panel(){
return (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.h_box,new cljs.core.Keyword(null,"justify","justify",-722524056),new cljs.core.Keyword(null,"center","center",-748944368),new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [decent_chat.views.header_title], null)], null)], null);
});
});
decent_chat.views.footer_text = (function decent_chat$views$footer_text(){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.box,new cljs.core.Keyword(null,"child","child",623967545),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"I like feet"], null)], null);
});
});
decent_chat.views.footer_panel = (function decent_chat$views$footer_panel(){
return (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.h_box,new cljs.core.Keyword(null,"justify","justify",-722524056),new cljs.core.Keyword(null,"center","center",-748944368),new cljs.core.Keyword(null,"align","align",1964212802),new cljs.core.Keyword(null,"end","end",-268185958),new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [decent_chat.views.footer_text], null)], null)], null);
});
});
decent_chat.views.app_panel = (function decent_chat$views$app_panel(){
return (function (){
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.v_box,new cljs.core.Keyword(null,"size","size",1098693007),"auto",new cljs.core.Keyword(null,"height","height",1025178622),"100%",new cljs.core.Keyword(null,"width","width",-384071477),"100%",new cljs.core.Keyword(null,"align-self","align-self",1475936794),new cljs.core.Keyword(null,"end","end",-268185958),new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [decent_chat.views.header_panel], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [decent_chat.views.main_panel], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [decent_chat.views.footer_panel], null)], null)], null);
});
});

//# sourceMappingURL=views.js.map?rel=1441189828456