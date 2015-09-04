// Compiled by ClojureScript 0.0-3211 {}
goog.provide('decent_chat.views.input_panel');
goog.require('cljs.core');
goog.require('re_com.core');
goog.require('re_frame.core');
goog.require('reagent.core');
decent_chat.views.input_panel.send_button = (function decent_chat$views$input_panel$send_button(input_value){
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
re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("op","send-message","op/send-message",185033322),cljs.core.deref.call(null,input_value),null], null));

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
decent_chat.views.input_panel.latch_button = (function decent_chat$views$input_panel$latch_button(){
var disabled_QMARK_ = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("ui","latch","ui/latch",728820946)], null));
return ((function (disabled_QMARK_){
return (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.border,new cljs.core.Keyword(null,"border","border",1444987323),"1em solid white",new cljs.core.Keyword(null,"child","child",623967545),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.button,new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (disabled_QMARK_){
return (function (){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("ui","set-latch","ui/set-latch",-1130435194),true], null));
});})(disabled_QMARK_))
,new cljs.core.Keyword(null,"disabled?","disabled?",-1523234181),reagent.ratom.make_reaction.call(null,((function (disabled_QMARK_){
return (function (){
return cljs.core.deref.call(null,disabled_QMARK_);
});})(disabled_QMARK_))
),new cljs.core.Keyword(null,"label","label",1718410804),"Latch"], null)], null);
});
;})(disabled_QMARK_))
});
decent_chat.views.input_panel.input_buttons = (function decent_chat$views$input_panel$input_buttons(input_value){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.v_box,new cljs.core.Keyword(null,"justify","justify",-722524056),new cljs.core.Keyword(null,"end","end",-268185958),new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [decent_chat.views.input_panel.latch_button], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [decent_chat.views.input_panel.send_button,input_value], null)], null)], null);
});
decent_chat.views.input_panel.input_box = (function decent_chat$views$input_panel$input_box(value){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.box,new cljs.core.Keyword(null,"size","size",1098693007),"auto",new cljs.core.Keyword(null,"child","child",623967545),new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.input_textarea,new cljs.core.Keyword(null,"model","model",331153215),value,new cljs.core.Keyword(null,"width","width",-384071477),"100%",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"resize","resize",297367086),"none"], null),new cljs.core.Keyword(null,"change-on-blur?","change-on-blur?",854283925),false,new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__31807_SHARP_){
return cljs.core.reset_BANG_.call(null,value,p1__31807_SHARP_);
})], null)], null);
});
decent_chat.views.input_panel.input_panel = (function decent_chat$views$input_panel$input_panel(){
var input_value = reagent.core.atom.call(null,"");
return ((function (input_value){
return (function (){
return new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.h_box,new cljs.core.Keyword(null,"size","size",1098693007),"0 0 6em",new cljs.core.Keyword(null,"align","align",1964212802),new cljs.core.Keyword(null,"end","end",-268185958),new cljs.core.Keyword(null,"justify","justify",-722524056),new cljs.core.Keyword(null,"end","end",-268185958),new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [decent_chat.views.input_panel.input_box,input_value], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [decent_chat.views.input_panel.input_buttons,input_value], null)], null)], null);
});
;})(input_value))
});

//# sourceMappingURL=input_panel.js.map?rel=1441340404317