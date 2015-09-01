// Compiled by ClojureScript 0.0-3211 {}
goog.provide('figwheel.client.heads_up');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('figwheel.client.socket');
goog.require('clojure.string');

figwheel.client.heads_up.node = (function figwheel$client$heads_up$node(){
var argseq__19200__auto__ = ((((2) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(2)),(0))):null);
return figwheel.client.heads_up.node.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__19200__auto__);
});

figwheel.client.heads_up.node.cljs$core$IFn$_invoke$arity$variadic = (function (t,attrs,children){
var e = document.createElement(cljs.core.name.call(null,t));
var seq__30638_30646 = cljs.core.seq.call(null,cljs.core.keys.call(null,attrs));
var chunk__30639_30647 = null;
var count__30640_30648 = (0);
var i__30641_30649 = (0);
while(true){
if((i__30641_30649 < count__30640_30648)){
var k_30650 = cljs.core._nth.call(null,chunk__30639_30647,i__30641_30649);
e.setAttribute(cljs.core.name.call(null,k_30650),cljs.core.get.call(null,attrs,k_30650));

var G__30651 = seq__30638_30646;
var G__30652 = chunk__30639_30647;
var G__30653 = count__30640_30648;
var G__30654 = (i__30641_30649 + (1));
seq__30638_30646 = G__30651;
chunk__30639_30647 = G__30652;
count__30640_30648 = G__30653;
i__30641_30649 = G__30654;
continue;
} else {
var temp__4126__auto___30655 = cljs.core.seq.call(null,seq__30638_30646);
if(temp__4126__auto___30655){
var seq__30638_30656__$1 = temp__4126__auto___30655;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30638_30656__$1)){
var c__18945__auto___30657 = cljs.core.chunk_first.call(null,seq__30638_30656__$1);
var G__30658 = cljs.core.chunk_rest.call(null,seq__30638_30656__$1);
var G__30659 = c__18945__auto___30657;
var G__30660 = cljs.core.count.call(null,c__18945__auto___30657);
var G__30661 = (0);
seq__30638_30646 = G__30658;
chunk__30639_30647 = G__30659;
count__30640_30648 = G__30660;
i__30641_30649 = G__30661;
continue;
} else {
var k_30662 = cljs.core.first.call(null,seq__30638_30656__$1);
e.setAttribute(cljs.core.name.call(null,k_30662),cljs.core.get.call(null,attrs,k_30662));

var G__30663 = cljs.core.next.call(null,seq__30638_30656__$1);
var G__30664 = null;
var G__30665 = (0);
var G__30666 = (0);
seq__30638_30646 = G__30663;
chunk__30639_30647 = G__30664;
count__30640_30648 = G__30665;
i__30641_30649 = G__30666;
continue;
}
} else {
}
}
break;
}

var seq__30642_30667 = cljs.core.seq.call(null,children);
var chunk__30643_30668 = null;
var count__30644_30669 = (0);
var i__30645_30670 = (0);
while(true){
if((i__30645_30670 < count__30644_30669)){
var ch_30671 = cljs.core._nth.call(null,chunk__30643_30668,i__30645_30670);
e.appendChild(ch_30671);

var G__30672 = seq__30642_30667;
var G__30673 = chunk__30643_30668;
var G__30674 = count__30644_30669;
var G__30675 = (i__30645_30670 + (1));
seq__30642_30667 = G__30672;
chunk__30643_30668 = G__30673;
count__30644_30669 = G__30674;
i__30645_30670 = G__30675;
continue;
} else {
var temp__4126__auto___30676 = cljs.core.seq.call(null,seq__30642_30667);
if(temp__4126__auto___30676){
var seq__30642_30677__$1 = temp__4126__auto___30676;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30642_30677__$1)){
var c__18945__auto___30678 = cljs.core.chunk_first.call(null,seq__30642_30677__$1);
var G__30679 = cljs.core.chunk_rest.call(null,seq__30642_30677__$1);
var G__30680 = c__18945__auto___30678;
var G__30681 = cljs.core.count.call(null,c__18945__auto___30678);
var G__30682 = (0);
seq__30642_30667 = G__30679;
chunk__30643_30668 = G__30680;
count__30644_30669 = G__30681;
i__30645_30670 = G__30682;
continue;
} else {
var ch_30683 = cljs.core.first.call(null,seq__30642_30677__$1);
e.appendChild(ch_30683);

var G__30684 = cljs.core.next.call(null,seq__30642_30677__$1);
var G__30685 = null;
var G__30686 = (0);
var G__30687 = (0);
seq__30642_30667 = G__30684;
chunk__30643_30668 = G__30685;
count__30644_30669 = G__30686;
i__30645_30670 = G__30687;
continue;
}
} else {
}
}
break;
}

return e;
});

figwheel.client.heads_up.node.cljs$lang$maxFixedArity = (2);

figwheel.client.heads_up.node.cljs$lang$applyTo = (function (seq30635){
var G__30636 = cljs.core.first.call(null,seq30635);
var seq30635__$1 = cljs.core.next.call(null,seq30635);
var G__30637 = cljs.core.first.call(null,seq30635__$1);
var seq30635__$2 = cljs.core.next.call(null,seq30635__$1);
return figwheel.client.heads_up.node.cljs$core$IFn$_invoke$arity$variadic(G__30636,G__30637,seq30635__$2);
});
if(typeof figwheel.client.heads_up.heads_up_event_dispatch !== 'undefined'){
} else {
figwheel.client.heads_up.heads_up_event_dispatch = (function (){var method_table__19055__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__19056__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__19057__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__19058__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__19059__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"figwheel.client.heads-up","heads-up-event-dispatch"),((function (method_table__19055__auto__,prefer_table__19056__auto__,method_cache__19057__auto__,cached_hierarchy__19058__auto__,hierarchy__19059__auto__){
return (function (dataset){
return dataset.figwheelEvent;
});})(method_table__19055__auto__,prefer_table__19056__auto__,method_cache__19057__auto__,cached_hierarchy__19058__auto__,hierarchy__19059__auto__))
,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__19059__auto__,method_table__19055__auto__,prefer_table__19056__auto__,method_cache__19057__auto__,cached_hierarchy__19058__auto__));
})();
}
cljs.core._add_method.call(null,figwheel.client.heads_up.heads_up_event_dispatch,new cljs.core.Keyword(null,"default","default",-1987822328),(function (_){
return cljs.core.PersistentArrayMap.EMPTY;
}));
cljs.core._add_method.call(null,figwheel.client.heads_up.heads_up_event_dispatch,"file-selected",(function (dataset){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"file-selected",new cljs.core.Keyword(null,"file-name","file-name",-1654217259),dataset.fileName,new cljs.core.Keyword(null,"file-line","file-line",-1228823138),dataset.fileLine], null));
}));
cljs.core._add_method.call(null,figwheel.client.heads_up.heads_up_event_dispatch,"close-heads-up",(function (dataset){
return figwheel.client.heads_up.clear.call(null);
}));
figwheel.client.heads_up.ancestor_nodes = (function figwheel$client$heads_up$ancestor_nodes(el){
return cljs.core.iterate.call(null,(function (e){
return e.parentNode;
}),el);
});
figwheel.client.heads_up.get_dataset = (function figwheel$client$heads_up$get_dataset(el){
return cljs.core.first.call(null,cljs.core.keep.call(null,(function (x){
if(cljs.core.truth_(x.dataset.figwheelEvent)){
return x.dataset;
} else {
return null;
}
}),cljs.core.take.call(null,(4),figwheel.client.heads_up.ancestor_nodes.call(null,el))));
});
figwheel.client.heads_up.heads_up_onclick_handler = (function figwheel$client$heads_up$heads_up_onclick_handler(event){
var dataset = figwheel.client.heads_up.get_dataset.call(null,event.target);
event.preventDefault();

if(cljs.core.truth_(dataset)){
return figwheel.client.heads_up.heads_up_event_dispatch.call(null,dataset);
} else {
return null;
}
});
figwheel.client.heads_up.ensure_container = (function figwheel$client$heads_up$ensure_container(){
var cont_id = "figwheel-heads-up-container";
var content_id = "figwheel-heads-up-content-area";
if(cljs.core.not.call(null,document.querySelector([cljs.core.str("#"),cljs.core.str(cont_id)].join('')))){
var el_30688 = figwheel.client.heads_up.node.call(null,new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),cont_id,new cljs.core.Keyword(null,"style","style",-496642736),[cljs.core.str("-webkit-transition: all 0.2s ease-in-out;"),cljs.core.str("-moz-transition: all 0.2s ease-in-out;"),cljs.core.str("-o-transition: all 0.2s ease-in-out;"),cljs.core.str("transition: all 0.2s ease-in-out;"),cljs.core.str("font-size: 13px;"),cljs.core.str("border-top: 1px solid #f5f5f5;"),cljs.core.str("box-shadow: 0px 0px 1px #aaaaaa;"),cljs.core.str("line-height: 18px;"),cljs.core.str("color: #333;"),cljs.core.str("font-family: monospace;"),cljs.core.str("padding: 0px 10px 0px 70px;"),cljs.core.str("position: fixed;"),cljs.core.str("bottom: 0px;"),cljs.core.str("left: 0px;"),cljs.core.str("height: 0px;"),cljs.core.str("opacity: 0.0;"),cljs.core.str("box-sizing: border-box;"),cljs.core.str("z-index: 10000;")].join('')], null));
el_30688.onclick = figwheel.client.heads_up.heads_up_onclick_handler;

el_30688.innerHTML = [cljs.core.str(figwheel.client.heads_up.clojure_symbol_svg)].join('');

el_30688.appendChild(figwheel.client.heads_up.node.call(null,new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),content_id], null)));

document.body.appendChild(el_30688);
} else {
}

return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"container-el","container-el",109664205),document.getElementById(cont_id),new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187),document.getElementById(content_id)], null);
});
figwheel.client.heads_up.set_style_BANG_ = (function figwheel$client$heads_up$set_style_BANG_(p__30689,st_map){
var map__30693 = p__30689;
var map__30693__$1 = ((cljs.core.seq_QMARK_.call(null,map__30693))?cljs.core.apply.call(null,cljs.core.hash_map,map__30693):map__30693);
var container_el = cljs.core.get.call(null,map__30693__$1,new cljs.core.Keyword(null,"container-el","container-el",109664205));
return cljs.core.mapv.call(null,((function (map__30693,map__30693__$1,container_el){
return (function (p__30694){
var vec__30695 = p__30694;
var k = cljs.core.nth.call(null,vec__30695,(0),null);
var v = cljs.core.nth.call(null,vec__30695,(1),null);
return (container_el.style[cljs.core.name.call(null,k)] = v);
});})(map__30693,map__30693__$1,container_el))
,st_map);
});
figwheel.client.heads_up.set_content_BANG_ = (function figwheel$client$heads_up$set_content_BANG_(p__30696,dom_str){
var map__30698 = p__30696;
var map__30698__$1 = ((cljs.core.seq_QMARK_.call(null,map__30698))?cljs.core.apply.call(null,cljs.core.hash_map,map__30698):map__30698);
var c = map__30698__$1;
var content_area_el = cljs.core.get.call(null,map__30698__$1,new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187));
return content_area_el.innerHTML = dom_str;
});
figwheel.client.heads_up.get_content = (function figwheel$client$heads_up$get_content(p__30699){
var map__30701 = p__30699;
var map__30701__$1 = ((cljs.core.seq_QMARK_.call(null,map__30701))?cljs.core.apply.call(null,cljs.core.hash_map,map__30701):map__30701);
var content_area_el = cljs.core.get.call(null,map__30701__$1,new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187));
return content_area_el.innerHTML;
});
figwheel.client.heads_up.close_link = (function figwheel$client$heads_up$close_link(){
return [cljs.core.str("<a style=\""),cljs.core.str("float: right;"),cljs.core.str("font-size: 18px;"),cljs.core.str("text-decoration: none;"),cljs.core.str("text-align: right;"),cljs.core.str("width: 30px;"),cljs.core.str("height: 30px;"),cljs.core.str("color: rgba(84,84,84, 0.5);"),cljs.core.str("\" href=\"#\"  data-figwheel-event=\"close-heads-up\">"),cljs.core.str("x"),cljs.core.str("</a>")].join('');
});
figwheel.client.heads_up.display_heads_up = (function figwheel$client$heads_up$display_heads_up(style,msg){
var c__22071__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22071__auto__){
return (function (){
var f__22072__auto__ = (function (){var switch__22009__auto__ = ((function (c__22071__auto__){
return (function (state_30743){
var state_val_30744 = (state_30743[(1)]);
if((state_val_30744 === (2))){
var inst_30728 = (state_30743[(7)]);
var inst_30737 = (state_30743[(2)]);
var inst_30738 = [new cljs.core.Keyword(null,"height","height",1025178622)];
var inst_30739 = ["auto"];
var inst_30740 = cljs.core.PersistentHashMap.fromArrays(inst_30738,inst_30739);
var inst_30741 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_30728,inst_30740);
var state_30743__$1 = (function (){var statearr_30745 = state_30743;
(statearr_30745[(8)] = inst_30737);

return statearr_30745;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30743__$1,inst_30741);
} else {
if((state_val_30744 === (1))){
var inst_30728 = (state_30743[(7)]);
var inst_30728__$1 = figwheel.client.heads_up.ensure_container.call(null);
var inst_30729 = [new cljs.core.Keyword(null,"paddingTop","paddingTop",-1088692345),new cljs.core.Keyword(null,"paddingBottom","paddingBottom",-916694489),new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"minHeight","minHeight",-1635998980),new cljs.core.Keyword(null,"opacity","opacity",397153780)];
var inst_30730 = ["10px","10px","100%","68px","1.0"];
var inst_30731 = cljs.core.PersistentHashMap.fromArrays(inst_30729,inst_30730);
var inst_30732 = cljs.core.merge.call(null,inst_30731,style);
var inst_30733 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_30728__$1,inst_30732);
var inst_30734 = figwheel.client.heads_up.set_content_BANG_.call(null,inst_30728__$1,msg);
var inst_30735 = cljs.core.async.timeout.call(null,(300));
var state_30743__$1 = (function (){var statearr_30746 = state_30743;
(statearr_30746[(7)] = inst_30728__$1);

(statearr_30746[(9)] = inst_30734);

(statearr_30746[(10)] = inst_30733);

return statearr_30746;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30743__$1,(2),inst_30735);
} else {
return null;
}
}
});})(c__22071__auto__))
;
return ((function (switch__22009__auto__,c__22071__auto__){
return (function() {
var figwheel$client$heads_up$display_heads_up_$_state_machine__22010__auto__ = null;
var figwheel$client$heads_up$display_heads_up_$_state_machine__22010__auto____0 = (function (){
var statearr_30750 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_30750[(0)] = figwheel$client$heads_up$display_heads_up_$_state_machine__22010__auto__);

(statearr_30750[(1)] = (1));

return statearr_30750;
});
var figwheel$client$heads_up$display_heads_up_$_state_machine__22010__auto____1 = (function (state_30743){
while(true){
var ret_value__22011__auto__ = (function (){try{while(true){
var result__22012__auto__ = switch__22009__auto__.call(null,state_30743);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22012__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22012__auto__;
}
break;
}
}catch (e30751){if((e30751 instanceof Object)){
var ex__22013__auto__ = e30751;
var statearr_30752_30754 = state_30743;
(statearr_30752_30754[(5)] = ex__22013__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30743);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30751;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22011__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30755 = state_30743;
state_30743 = G__30755;
continue;
} else {
return ret_value__22011__auto__;
}
break;
}
});
figwheel$client$heads_up$display_heads_up_$_state_machine__22010__auto__ = function(state_30743){
switch(arguments.length){
case 0:
return figwheel$client$heads_up$display_heads_up_$_state_machine__22010__auto____0.call(this);
case 1:
return figwheel$client$heads_up$display_heads_up_$_state_machine__22010__auto____1.call(this,state_30743);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up$display_heads_up_$_state_machine__22010__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up$display_heads_up_$_state_machine__22010__auto____0;
figwheel$client$heads_up$display_heads_up_$_state_machine__22010__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up$display_heads_up_$_state_machine__22010__auto____1;
return figwheel$client$heads_up$display_heads_up_$_state_machine__22010__auto__;
})()
;})(switch__22009__auto__,c__22071__auto__))
})();
var state__22073__auto__ = (function (){var statearr_30753 = f__22072__auto__.call(null);
(statearr_30753[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22071__auto__);

return statearr_30753;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22073__auto__);
});})(c__22071__auto__))
);

return c__22071__auto__;
});
figwheel.client.heads_up.heading = (function figwheel$client$heads_up$heading(s){
return [cljs.core.str("<div style=\""),cljs.core.str("font-size: 26px;"),cljs.core.str("line-height: 26px;"),cljs.core.str("margin-bottom: 2px;"),cljs.core.str("padding-top: 1px;"),cljs.core.str("\">"),cljs.core.str(s),cljs.core.str("</div>")].join('');
});
figwheel.client.heads_up.file_and_line_number = (function figwheel$client$heads_up$file_and_line_number(msg){
if(cljs.core.truth_(cljs.core.re_matches.call(null,/.*at\sline.*/,msg))){
return cljs.core.take.call(null,(2),cljs.core.reverse.call(null,clojure.string.split.call(null,msg," ")));
} else {
return null;
}
});
figwheel.client.heads_up.file_selector_div = (function figwheel$client$heads_up$file_selector_div(file_name,line_number,msg){
return [cljs.core.str("<div data-figwheel-event=\"file-selected\" data-file-name=\""),cljs.core.str(file_name),cljs.core.str("\" data-file-line=\""),cljs.core.str(line_number),cljs.core.str("\">"),cljs.core.str(msg),cljs.core.str("</div>")].join('');
});
figwheel.client.heads_up.format_line = (function figwheel$client$heads_up$format_line(msg){
var temp__4124__auto__ = figwheel.client.heads_up.file_and_line_number.call(null,msg);
if(cljs.core.truth_(temp__4124__auto__)){
var vec__30757 = temp__4124__auto__;
var f = cljs.core.nth.call(null,vec__30757,(0),null);
var ln = cljs.core.nth.call(null,vec__30757,(1),null);
return figwheel.client.heads_up.file_selector_div.call(null,f,ln,msg);
} else {
return [cljs.core.str("<div>"),cljs.core.str(msg),cljs.core.str("</div>")].join('');
}
});
figwheel.client.heads_up.display_error = (function figwheel$client$heads_up$display_error(formatted_messages,cause){
var vec__30760 = (cljs.core.truth_(cause)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(cause),new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(cause),new cljs.core.Keyword(null,"column","column",2078222095).cljs$core$IFn$_invoke$arity$1(cause)], null):cljs.core.first.call(null,cljs.core.keep.call(null,figwheel.client.heads_up.file_and_line_number,formatted_messages)));
var file_name = cljs.core.nth.call(null,vec__30760,(0),null);
var file_line = cljs.core.nth.call(null,vec__30760,(1),null);
var file_column = cljs.core.nth.call(null,vec__30760,(2),null);
var msg = cljs.core.apply.call(null,cljs.core.str,cljs.core.map.call(null,((function (vec__30760,file_name,file_line,file_column){
return (function (p1__30758_SHARP_){
return [cljs.core.str("<div>"),cljs.core.str(p1__30758_SHARP_),cljs.core.str("</div>")].join('');
});})(vec__30760,file_name,file_line,file_column))
,formatted_messages));
return figwheel.client.heads_up.display_heads_up.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),"rgba(255, 161, 161, 0.95)"], null),[cljs.core.str(figwheel.client.heads_up.close_link.call(null)),cljs.core.str(figwheel.client.heads_up.heading.call(null,"Compile Error")),cljs.core.str(figwheel.client.heads_up.file_selector_div.call(null,file_name,(function (){var or__18160__auto__ = file_line;
if(cljs.core.truth_(or__18160__auto__)){
return or__18160__auto__;
} else {
var and__18148__auto__ = cause;
if(cljs.core.truth_(and__18148__auto__)){
return new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(cause);
} else {
return and__18148__auto__;
}
}
})(),[cljs.core.str(msg),cljs.core.str((cljs.core.truth_(cause)?[cljs.core.str("Error on file "),cljs.core.str(new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(cause)),cljs.core.str(", line "),cljs.core.str(new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(cause)),cljs.core.str(", column "),cljs.core.str(new cljs.core.Keyword(null,"column","column",2078222095).cljs$core$IFn$_invoke$arity$1(cause))].join(''):""))].join('')))].join(''));
});
figwheel.client.heads_up.display_system_warning = (function figwheel$client$heads_up$display_system_warning(header,msg){
return figwheel.client.heads_up.display_heads_up.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),"rgba(255, 220, 110, 0.95)"], null),[cljs.core.str(figwheel.client.heads_up.close_link.call(null)),cljs.core.str(figwheel.client.heads_up.heading.call(null,header)),cljs.core.str(figwheel.client.heads_up.format_line.call(null,msg))].join(''));
});
figwheel.client.heads_up.display_warning = (function figwheel$client$heads_up$display_warning(msg){
return figwheel.client.heads_up.display_system_warning.call(null,"Compile Warning",msg);
});
figwheel.client.heads_up.append_message = (function figwheel$client$heads_up$append_message(message){
var map__30762 = figwheel.client.heads_up.ensure_container.call(null);
var map__30762__$1 = ((cljs.core.seq_QMARK_.call(null,map__30762))?cljs.core.apply.call(null,cljs.core.hash_map,map__30762):map__30762);
var content_area_el = cljs.core.get.call(null,map__30762__$1,new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187));
var el = document.createElement("div");
el.innerHTML = figwheel.client.heads_up.format_line.call(null,message);

return content_area_el.appendChild(el);
});
figwheel.client.heads_up.clear = (function figwheel$client$heads_up$clear(){
var c__22071__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22071__auto__){
return (function (){
var f__22072__auto__ = (function (){var switch__22009__auto__ = ((function (c__22071__auto__){
return (function (state_30809){
var state_val_30810 = (state_30809[(1)]);
if((state_val_30810 === (3))){
var inst_30792 = (state_30809[(7)]);
var inst_30806 = (state_30809[(2)]);
var inst_30807 = figwheel.client.heads_up.set_content_BANG_.call(null,inst_30792,"");
var state_30809__$1 = (function (){var statearr_30811 = state_30809;
(statearr_30811[(8)] = inst_30806);

return statearr_30811;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30809__$1,inst_30807);
} else {
if((state_val_30810 === (2))){
var inst_30792 = (state_30809[(7)]);
var inst_30799 = (state_30809[(2)]);
var inst_30800 = [new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"height","height",1025178622),new cljs.core.Keyword(null,"minHeight","minHeight",-1635998980),new cljs.core.Keyword(null,"padding","padding",1660304693),new cljs.core.Keyword(null,"borderRadius","borderRadius",-1505621083),new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491)];
var inst_30801 = ["auto","0px","0px","0px 10px 0px 70px","0px","transparent"];
var inst_30802 = cljs.core.PersistentHashMap.fromArrays(inst_30800,inst_30801);
var inst_30803 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_30792,inst_30802);
var inst_30804 = cljs.core.async.timeout.call(null,(200));
var state_30809__$1 = (function (){var statearr_30812 = state_30809;
(statearr_30812[(9)] = inst_30803);

(statearr_30812[(10)] = inst_30799);

return statearr_30812;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30809__$1,(3),inst_30804);
} else {
if((state_val_30810 === (1))){
var inst_30792 = (state_30809[(7)]);
var inst_30792__$1 = figwheel.client.heads_up.ensure_container.call(null);
var inst_30793 = [new cljs.core.Keyword(null,"opacity","opacity",397153780)];
var inst_30794 = ["0.0"];
var inst_30795 = cljs.core.PersistentHashMap.fromArrays(inst_30793,inst_30794);
var inst_30796 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_30792__$1,inst_30795);
var inst_30797 = cljs.core.async.timeout.call(null,(300));
var state_30809__$1 = (function (){var statearr_30813 = state_30809;
(statearr_30813[(11)] = inst_30796);

(statearr_30813[(7)] = inst_30792__$1);

return statearr_30813;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30809__$1,(2),inst_30797);
} else {
return null;
}
}
}
});})(c__22071__auto__))
;
return ((function (switch__22009__auto__,c__22071__auto__){
return (function() {
var figwheel$client$heads_up$clear_$_state_machine__22010__auto__ = null;
var figwheel$client$heads_up$clear_$_state_machine__22010__auto____0 = (function (){
var statearr_30817 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30817[(0)] = figwheel$client$heads_up$clear_$_state_machine__22010__auto__);

(statearr_30817[(1)] = (1));

return statearr_30817;
});
var figwheel$client$heads_up$clear_$_state_machine__22010__auto____1 = (function (state_30809){
while(true){
var ret_value__22011__auto__ = (function (){try{while(true){
var result__22012__auto__ = switch__22009__auto__.call(null,state_30809);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22012__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22012__auto__;
}
break;
}
}catch (e30818){if((e30818 instanceof Object)){
var ex__22013__auto__ = e30818;
var statearr_30819_30821 = state_30809;
(statearr_30819_30821[(5)] = ex__22013__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30809);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30818;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22011__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30822 = state_30809;
state_30809 = G__30822;
continue;
} else {
return ret_value__22011__auto__;
}
break;
}
});
figwheel$client$heads_up$clear_$_state_machine__22010__auto__ = function(state_30809){
switch(arguments.length){
case 0:
return figwheel$client$heads_up$clear_$_state_machine__22010__auto____0.call(this);
case 1:
return figwheel$client$heads_up$clear_$_state_machine__22010__auto____1.call(this,state_30809);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up$clear_$_state_machine__22010__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up$clear_$_state_machine__22010__auto____0;
figwheel$client$heads_up$clear_$_state_machine__22010__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up$clear_$_state_machine__22010__auto____1;
return figwheel$client$heads_up$clear_$_state_machine__22010__auto__;
})()
;})(switch__22009__auto__,c__22071__auto__))
})();
var state__22073__auto__ = (function (){var statearr_30820 = f__22072__auto__.call(null);
(statearr_30820[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22071__auto__);

return statearr_30820;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22073__auto__);
});})(c__22071__auto__))
);

return c__22071__auto__;
});
figwheel.client.heads_up.display_loaded_start = (function figwheel$client$heads_up$display_loaded_start(){
return figwheel.client.heads_up.display_heads_up.call(null,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),"rgba(211,234,172,1.0)",new cljs.core.Keyword(null,"width","width",-384071477),"68px",new cljs.core.Keyword(null,"height","height",1025178622),"68px",new cljs.core.Keyword(null,"paddingLeft","paddingLeft",262720813),"0px",new cljs.core.Keyword(null,"paddingRight","paddingRight",-1642313463),"0px",new cljs.core.Keyword(null,"borderRadius","borderRadius",-1505621083),"35px"], null),"");
});
figwheel.client.heads_up.flash_loaded = (function figwheel$client$heads_up$flash_loaded(){
var c__22071__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22071__auto__){
return (function (){
var f__22072__auto__ = (function (){var switch__22009__auto__ = ((function (c__22071__auto__){
return (function (state_30854){
var state_val_30855 = (state_30854[(1)]);
if((state_val_30855 === (4))){
var inst_30852 = (state_30854[(2)]);
var state_30854__$1 = state_30854;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30854__$1,inst_30852);
} else {
if((state_val_30855 === (3))){
var inst_30849 = (state_30854[(2)]);
var inst_30850 = figwheel.client.heads_up.clear.call(null);
var state_30854__$1 = (function (){var statearr_30856 = state_30854;
(statearr_30856[(7)] = inst_30849);

return statearr_30856;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30854__$1,(4),inst_30850);
} else {
if((state_val_30855 === (2))){
var inst_30846 = (state_30854[(2)]);
var inst_30847 = cljs.core.async.timeout.call(null,(400));
var state_30854__$1 = (function (){var statearr_30857 = state_30854;
(statearr_30857[(8)] = inst_30846);

return statearr_30857;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30854__$1,(3),inst_30847);
} else {
if((state_val_30855 === (1))){
var inst_30844 = figwheel.client.heads_up.display_loaded_start.call(null);
var state_30854__$1 = state_30854;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30854__$1,(2),inst_30844);
} else {
return null;
}
}
}
}
});})(c__22071__auto__))
;
return ((function (switch__22009__auto__,c__22071__auto__){
return (function() {
var figwheel$client$heads_up$flash_loaded_$_state_machine__22010__auto__ = null;
var figwheel$client$heads_up$flash_loaded_$_state_machine__22010__auto____0 = (function (){
var statearr_30861 = [null,null,null,null,null,null,null,null,null];
(statearr_30861[(0)] = figwheel$client$heads_up$flash_loaded_$_state_machine__22010__auto__);

(statearr_30861[(1)] = (1));

return statearr_30861;
});
var figwheel$client$heads_up$flash_loaded_$_state_machine__22010__auto____1 = (function (state_30854){
while(true){
var ret_value__22011__auto__ = (function (){try{while(true){
var result__22012__auto__ = switch__22009__auto__.call(null,state_30854);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22012__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22012__auto__;
}
break;
}
}catch (e30862){if((e30862 instanceof Object)){
var ex__22013__auto__ = e30862;
var statearr_30863_30865 = state_30854;
(statearr_30863_30865[(5)] = ex__22013__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30854);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30862;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22011__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30866 = state_30854;
state_30854 = G__30866;
continue;
} else {
return ret_value__22011__auto__;
}
break;
}
});
figwheel$client$heads_up$flash_loaded_$_state_machine__22010__auto__ = function(state_30854){
switch(arguments.length){
case 0:
return figwheel$client$heads_up$flash_loaded_$_state_machine__22010__auto____0.call(this);
case 1:
return figwheel$client$heads_up$flash_loaded_$_state_machine__22010__auto____1.call(this,state_30854);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up$flash_loaded_$_state_machine__22010__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up$flash_loaded_$_state_machine__22010__auto____0;
figwheel$client$heads_up$flash_loaded_$_state_machine__22010__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up$flash_loaded_$_state_machine__22010__auto____1;
return figwheel$client$heads_up$flash_loaded_$_state_machine__22010__auto__;
})()
;})(switch__22009__auto__,c__22071__auto__))
})();
var state__22073__auto__ = (function (){var statearr_30864 = f__22072__auto__.call(null);
(statearr_30864[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22071__auto__);

return statearr_30864;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22073__auto__);
});})(c__22071__auto__))
);

return c__22071__auto__;
});
figwheel.client.heads_up.clojure_symbol_svg = "<?xml version='1.0' encoding='UTF-8' ?>\n<!DOCTYPE svg PUBLIC '-//W3C//DTD SVG 1.1//EN' 'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd'>\n<svg width='49px' height='49px' viewBox='0 0 100 99' version='1.1' xmlns='http://www.w3.org/2000/svg' style='position:absolute; top:9px; left: 10px;'>\n<circle fill='rgba(255,255,255,0.5)' cx='49.75' cy='49.5' r='48.5'/>\n<path fill='#5881d8' d=' M 39.30 6.22 C 51.71 3.11 65.45 5.64 75.83 13.16 C 88.68 22.10 96.12 38.22 94.43 53.80 C 93.66 60.11 89.40 66.01 83.37 68.24 C 79.21 69.97 74.64 69.78 70.23 69.80 C 80.77 59.67 81.41 41.33 71.45 30.60 C 63.60 21.32 49.75 18.52 38.65 23.16 C 31.27 18.80 21.83 18.68 14.27 22.69 C 20.65 14.79 29.32 8.56 39.30 6.22 Z' />\n<path fill='#90b4fe' d=' M 42.93 26.99 C 48.49 25.50 54.55 25.62 59.79 28.14 C 68.71 32.19 74.61 42.14 73.41 51.94 C 72.85 58.64 68.92 64.53 63.81 68.69 C 59.57 66.71 57.53 62.30 55.66 58.30 C 50.76 48.12 50.23 36.02 42.93 26.99 Z' />\n<path fill='#63b132' d=' M 12.30 33.30 C 17.11 28.49 24.33 26.90 30.91 28.06 C 25.22 33.49 21.44 41.03 21.46 48.99 C 21.11 58.97 26.58 68.76 35.08 73.92 C 43.28 79.06 53.95 79.28 62.66 75.29 C 70.37 77.57 78.52 77.36 86.31 75.57 C 80.05 84.00 70.94 90.35 60.69 92.84 C 48.02 96.03 34.00 93.24 23.56 85.37 C 12.16 77.09 5.12 63.11 5.44 49.00 C 5.15 43.06 8.22 37.42 12.30 33.30 Z' />\n<path fill='#91dc47' d=' M 26.94 54.00 C 24.97 45.06 29.20 35.59 36.45 30.24 C 41.99 33.71 44.23 40.14 46.55 45.91 C 43.00 53.40 38.44 60.46 35.94 68.42 C 31.50 64.74 27.96 59.77 26.94 54.00 Z' />\n<path fill='#91dc47' d=' M 41.97 71.80 C 41.46 64.27 45.31 57.52 48.11 50.80 C 50.40 58.13 51.84 66.19 57.18 72.06 C 52.17 73.37 46.93 73.26 41.97 71.80 Z' />\n</svg>";

//# sourceMappingURL=heads_up.js.map?rel=1441122552548