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
var seq__30645_30653 = cljs.core.seq.call(null,cljs.core.keys.call(null,attrs));
var chunk__30646_30654 = null;
var count__30647_30655 = (0);
var i__30648_30656 = (0);
while(true){
if((i__30648_30656 < count__30647_30655)){
var k_30657 = cljs.core._nth.call(null,chunk__30646_30654,i__30648_30656);
e.setAttribute(cljs.core.name.call(null,k_30657),cljs.core.get.call(null,attrs,k_30657));

var G__30658 = seq__30645_30653;
var G__30659 = chunk__30646_30654;
var G__30660 = count__30647_30655;
var G__30661 = (i__30648_30656 + (1));
seq__30645_30653 = G__30658;
chunk__30646_30654 = G__30659;
count__30647_30655 = G__30660;
i__30648_30656 = G__30661;
continue;
} else {
var temp__4126__auto___30662 = cljs.core.seq.call(null,seq__30645_30653);
if(temp__4126__auto___30662){
var seq__30645_30663__$1 = temp__4126__auto___30662;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30645_30663__$1)){
var c__18945__auto___30664 = cljs.core.chunk_first.call(null,seq__30645_30663__$1);
var G__30665 = cljs.core.chunk_rest.call(null,seq__30645_30663__$1);
var G__30666 = c__18945__auto___30664;
var G__30667 = cljs.core.count.call(null,c__18945__auto___30664);
var G__30668 = (0);
seq__30645_30653 = G__30665;
chunk__30646_30654 = G__30666;
count__30647_30655 = G__30667;
i__30648_30656 = G__30668;
continue;
} else {
var k_30669 = cljs.core.first.call(null,seq__30645_30663__$1);
e.setAttribute(cljs.core.name.call(null,k_30669),cljs.core.get.call(null,attrs,k_30669));

var G__30670 = cljs.core.next.call(null,seq__30645_30663__$1);
var G__30671 = null;
var G__30672 = (0);
var G__30673 = (0);
seq__30645_30653 = G__30670;
chunk__30646_30654 = G__30671;
count__30647_30655 = G__30672;
i__30648_30656 = G__30673;
continue;
}
} else {
}
}
break;
}

var seq__30649_30674 = cljs.core.seq.call(null,children);
var chunk__30650_30675 = null;
var count__30651_30676 = (0);
var i__30652_30677 = (0);
while(true){
if((i__30652_30677 < count__30651_30676)){
var ch_30678 = cljs.core._nth.call(null,chunk__30650_30675,i__30652_30677);
e.appendChild(ch_30678);

var G__30679 = seq__30649_30674;
var G__30680 = chunk__30650_30675;
var G__30681 = count__30651_30676;
var G__30682 = (i__30652_30677 + (1));
seq__30649_30674 = G__30679;
chunk__30650_30675 = G__30680;
count__30651_30676 = G__30681;
i__30652_30677 = G__30682;
continue;
} else {
var temp__4126__auto___30683 = cljs.core.seq.call(null,seq__30649_30674);
if(temp__4126__auto___30683){
var seq__30649_30684__$1 = temp__4126__auto___30683;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30649_30684__$1)){
var c__18945__auto___30685 = cljs.core.chunk_first.call(null,seq__30649_30684__$1);
var G__30686 = cljs.core.chunk_rest.call(null,seq__30649_30684__$1);
var G__30687 = c__18945__auto___30685;
var G__30688 = cljs.core.count.call(null,c__18945__auto___30685);
var G__30689 = (0);
seq__30649_30674 = G__30686;
chunk__30650_30675 = G__30687;
count__30651_30676 = G__30688;
i__30652_30677 = G__30689;
continue;
} else {
var ch_30690 = cljs.core.first.call(null,seq__30649_30684__$1);
e.appendChild(ch_30690);

var G__30691 = cljs.core.next.call(null,seq__30649_30684__$1);
var G__30692 = null;
var G__30693 = (0);
var G__30694 = (0);
seq__30649_30674 = G__30691;
chunk__30650_30675 = G__30692;
count__30651_30676 = G__30693;
i__30652_30677 = G__30694;
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

figwheel.client.heads_up.node.cljs$lang$applyTo = (function (seq30642){
var G__30643 = cljs.core.first.call(null,seq30642);
var seq30642__$1 = cljs.core.next.call(null,seq30642);
var G__30644 = cljs.core.first.call(null,seq30642__$1);
var seq30642__$2 = cljs.core.next.call(null,seq30642__$1);
return figwheel.client.heads_up.node.cljs$core$IFn$_invoke$arity$variadic(G__30643,G__30644,seq30642__$2);
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
var el_30695 = figwheel.client.heads_up.node.call(null,new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),cont_id,new cljs.core.Keyword(null,"style","style",-496642736),[cljs.core.str("-webkit-transition: all 0.2s ease-in-out;"),cljs.core.str("-moz-transition: all 0.2s ease-in-out;"),cljs.core.str("-o-transition: all 0.2s ease-in-out;"),cljs.core.str("transition: all 0.2s ease-in-out;"),cljs.core.str("font-size: 13px;"),cljs.core.str("border-top: 1px solid #f5f5f5;"),cljs.core.str("box-shadow: 0px 0px 1px #aaaaaa;"),cljs.core.str("line-height: 18px;"),cljs.core.str("color: #333;"),cljs.core.str("font-family: monospace;"),cljs.core.str("padding: 0px 10px 0px 70px;"),cljs.core.str("position: fixed;"),cljs.core.str("bottom: 0px;"),cljs.core.str("left: 0px;"),cljs.core.str("height: 0px;"),cljs.core.str("opacity: 0.0;"),cljs.core.str("box-sizing: border-box;"),cljs.core.str("z-index: 10000;")].join('')], null));
el_30695.onclick = figwheel.client.heads_up.heads_up_onclick_handler;

el_30695.innerHTML = [cljs.core.str(figwheel.client.heads_up.clojure_symbol_svg)].join('');

el_30695.appendChild(figwheel.client.heads_up.node.call(null,new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),content_id], null)));

document.body.appendChild(el_30695);
} else {
}

return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"container-el","container-el",109664205),document.getElementById(cont_id),new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187),document.getElementById(content_id)], null);
});
figwheel.client.heads_up.set_style_BANG_ = (function figwheel$client$heads_up$set_style_BANG_(p__30696,st_map){
var map__30700 = p__30696;
var map__30700__$1 = ((cljs.core.seq_QMARK_.call(null,map__30700))?cljs.core.apply.call(null,cljs.core.hash_map,map__30700):map__30700);
var container_el = cljs.core.get.call(null,map__30700__$1,new cljs.core.Keyword(null,"container-el","container-el",109664205));
return cljs.core.mapv.call(null,((function (map__30700,map__30700__$1,container_el){
return (function (p__30701){
var vec__30702 = p__30701;
var k = cljs.core.nth.call(null,vec__30702,(0),null);
var v = cljs.core.nth.call(null,vec__30702,(1),null);
return (container_el.style[cljs.core.name.call(null,k)] = v);
});})(map__30700,map__30700__$1,container_el))
,st_map);
});
figwheel.client.heads_up.set_content_BANG_ = (function figwheel$client$heads_up$set_content_BANG_(p__30703,dom_str){
var map__30705 = p__30703;
var map__30705__$1 = ((cljs.core.seq_QMARK_.call(null,map__30705))?cljs.core.apply.call(null,cljs.core.hash_map,map__30705):map__30705);
var c = map__30705__$1;
var content_area_el = cljs.core.get.call(null,map__30705__$1,new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187));
return content_area_el.innerHTML = dom_str;
});
figwheel.client.heads_up.get_content = (function figwheel$client$heads_up$get_content(p__30706){
var map__30708 = p__30706;
var map__30708__$1 = ((cljs.core.seq_QMARK_.call(null,map__30708))?cljs.core.apply.call(null,cljs.core.hash_map,map__30708):map__30708);
var content_area_el = cljs.core.get.call(null,map__30708__$1,new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187));
return content_area_el.innerHTML;
});
figwheel.client.heads_up.close_link = (function figwheel$client$heads_up$close_link(){
return [cljs.core.str("<a style=\""),cljs.core.str("float: right;"),cljs.core.str("font-size: 18px;"),cljs.core.str("text-decoration: none;"),cljs.core.str("text-align: right;"),cljs.core.str("width: 30px;"),cljs.core.str("height: 30px;"),cljs.core.str("color: rgba(84,84,84, 0.5);"),cljs.core.str("\" href=\"#\"  data-figwheel-event=\"close-heads-up\">"),cljs.core.str("x"),cljs.core.str("</a>")].join('');
});
figwheel.client.heads_up.display_heads_up = (function figwheel$client$heads_up$display_heads_up(style,msg){
var c__21387__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21387__auto__){
return (function (){
var f__21388__auto__ = (function (){var switch__21325__auto__ = ((function (c__21387__auto__){
return (function (state_30750){
var state_val_30751 = (state_30750[(1)]);
if((state_val_30751 === (2))){
var inst_30735 = (state_30750[(7)]);
var inst_30744 = (state_30750[(2)]);
var inst_30745 = [new cljs.core.Keyword(null,"height","height",1025178622)];
var inst_30746 = ["auto"];
var inst_30747 = cljs.core.PersistentHashMap.fromArrays(inst_30745,inst_30746);
var inst_30748 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_30735,inst_30747);
var state_30750__$1 = (function (){var statearr_30752 = state_30750;
(statearr_30752[(8)] = inst_30744);

return statearr_30752;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30750__$1,inst_30748);
} else {
if((state_val_30751 === (1))){
var inst_30735 = (state_30750[(7)]);
var inst_30735__$1 = figwheel.client.heads_up.ensure_container.call(null);
var inst_30736 = [new cljs.core.Keyword(null,"paddingTop","paddingTop",-1088692345),new cljs.core.Keyword(null,"paddingBottom","paddingBottom",-916694489),new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"minHeight","minHeight",-1635998980),new cljs.core.Keyword(null,"opacity","opacity",397153780)];
var inst_30737 = ["10px","10px","100%","68px","1.0"];
var inst_30738 = cljs.core.PersistentHashMap.fromArrays(inst_30736,inst_30737);
var inst_30739 = cljs.core.merge.call(null,inst_30738,style);
var inst_30740 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_30735__$1,inst_30739);
var inst_30741 = figwheel.client.heads_up.set_content_BANG_.call(null,inst_30735__$1,msg);
var inst_30742 = cljs.core.async.timeout.call(null,(300));
var state_30750__$1 = (function (){var statearr_30753 = state_30750;
(statearr_30753[(7)] = inst_30735__$1);

(statearr_30753[(9)] = inst_30740);

(statearr_30753[(10)] = inst_30741);

return statearr_30753;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30750__$1,(2),inst_30742);
} else {
return null;
}
}
});})(c__21387__auto__))
;
return ((function (switch__21325__auto__,c__21387__auto__){
return (function() {
var figwheel$client$heads_up$display_heads_up_$_state_machine__21326__auto__ = null;
var figwheel$client$heads_up$display_heads_up_$_state_machine__21326__auto____0 = (function (){
var statearr_30757 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_30757[(0)] = figwheel$client$heads_up$display_heads_up_$_state_machine__21326__auto__);

(statearr_30757[(1)] = (1));

return statearr_30757;
});
var figwheel$client$heads_up$display_heads_up_$_state_machine__21326__auto____1 = (function (state_30750){
while(true){
var ret_value__21327__auto__ = (function (){try{while(true){
var result__21328__auto__ = switch__21325__auto__.call(null,state_30750);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21328__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21328__auto__;
}
break;
}
}catch (e30758){if((e30758 instanceof Object)){
var ex__21329__auto__ = e30758;
var statearr_30759_30761 = state_30750;
(statearr_30759_30761[(5)] = ex__21329__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30750);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30758;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21327__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30762 = state_30750;
state_30750 = G__30762;
continue;
} else {
return ret_value__21327__auto__;
}
break;
}
});
figwheel$client$heads_up$display_heads_up_$_state_machine__21326__auto__ = function(state_30750){
switch(arguments.length){
case 0:
return figwheel$client$heads_up$display_heads_up_$_state_machine__21326__auto____0.call(this);
case 1:
return figwheel$client$heads_up$display_heads_up_$_state_machine__21326__auto____1.call(this,state_30750);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up$display_heads_up_$_state_machine__21326__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up$display_heads_up_$_state_machine__21326__auto____0;
figwheel$client$heads_up$display_heads_up_$_state_machine__21326__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up$display_heads_up_$_state_machine__21326__auto____1;
return figwheel$client$heads_up$display_heads_up_$_state_machine__21326__auto__;
})()
;})(switch__21325__auto__,c__21387__auto__))
})();
var state__21389__auto__ = (function (){var statearr_30760 = f__21388__auto__.call(null);
(statearr_30760[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21387__auto__);

return statearr_30760;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21389__auto__);
});})(c__21387__auto__))
);

return c__21387__auto__;
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
var vec__30764 = temp__4124__auto__;
var f = cljs.core.nth.call(null,vec__30764,(0),null);
var ln = cljs.core.nth.call(null,vec__30764,(1),null);
return figwheel.client.heads_up.file_selector_div.call(null,f,ln,msg);
} else {
return [cljs.core.str("<div>"),cljs.core.str(msg),cljs.core.str("</div>")].join('');
}
});
figwheel.client.heads_up.display_error = (function figwheel$client$heads_up$display_error(formatted_messages,cause){
var vec__30767 = (cljs.core.truth_(cause)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(cause),new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(cause),new cljs.core.Keyword(null,"column","column",2078222095).cljs$core$IFn$_invoke$arity$1(cause)], null):cljs.core.first.call(null,cljs.core.keep.call(null,figwheel.client.heads_up.file_and_line_number,formatted_messages)));
var file_name = cljs.core.nth.call(null,vec__30767,(0),null);
var file_line = cljs.core.nth.call(null,vec__30767,(1),null);
var file_column = cljs.core.nth.call(null,vec__30767,(2),null);
var msg = cljs.core.apply.call(null,cljs.core.str,cljs.core.map.call(null,((function (vec__30767,file_name,file_line,file_column){
return (function (p1__30765_SHARP_){
return [cljs.core.str("<div>"),cljs.core.str(p1__30765_SHARP_),cljs.core.str("</div>")].join('');
});})(vec__30767,file_name,file_line,file_column))
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
var map__30769 = figwheel.client.heads_up.ensure_container.call(null);
var map__30769__$1 = ((cljs.core.seq_QMARK_.call(null,map__30769))?cljs.core.apply.call(null,cljs.core.hash_map,map__30769):map__30769);
var content_area_el = cljs.core.get.call(null,map__30769__$1,new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187));
var el = document.createElement("div");
el.innerHTML = figwheel.client.heads_up.format_line.call(null,message);

return content_area_el.appendChild(el);
});
figwheel.client.heads_up.clear = (function figwheel$client$heads_up$clear(){
var c__21387__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21387__auto__){
return (function (){
var f__21388__auto__ = (function (){var switch__21325__auto__ = ((function (c__21387__auto__){
return (function (state_30816){
var state_val_30817 = (state_30816[(1)]);
if((state_val_30817 === (3))){
var inst_30799 = (state_30816[(7)]);
var inst_30813 = (state_30816[(2)]);
var inst_30814 = figwheel.client.heads_up.set_content_BANG_.call(null,inst_30799,"");
var state_30816__$1 = (function (){var statearr_30818 = state_30816;
(statearr_30818[(8)] = inst_30813);

return statearr_30818;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30816__$1,inst_30814);
} else {
if((state_val_30817 === (2))){
var inst_30799 = (state_30816[(7)]);
var inst_30806 = (state_30816[(2)]);
var inst_30807 = [new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"height","height",1025178622),new cljs.core.Keyword(null,"minHeight","minHeight",-1635998980),new cljs.core.Keyword(null,"padding","padding",1660304693),new cljs.core.Keyword(null,"borderRadius","borderRadius",-1505621083),new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491)];
var inst_30808 = ["auto","0px","0px","0px 10px 0px 70px","0px","transparent"];
var inst_30809 = cljs.core.PersistentHashMap.fromArrays(inst_30807,inst_30808);
var inst_30810 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_30799,inst_30809);
var inst_30811 = cljs.core.async.timeout.call(null,(200));
var state_30816__$1 = (function (){var statearr_30819 = state_30816;
(statearr_30819[(9)] = inst_30810);

(statearr_30819[(10)] = inst_30806);

return statearr_30819;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30816__$1,(3),inst_30811);
} else {
if((state_val_30817 === (1))){
var inst_30799 = (state_30816[(7)]);
var inst_30799__$1 = figwheel.client.heads_up.ensure_container.call(null);
var inst_30800 = [new cljs.core.Keyword(null,"opacity","opacity",397153780)];
var inst_30801 = ["0.0"];
var inst_30802 = cljs.core.PersistentHashMap.fromArrays(inst_30800,inst_30801);
var inst_30803 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_30799__$1,inst_30802);
var inst_30804 = cljs.core.async.timeout.call(null,(300));
var state_30816__$1 = (function (){var statearr_30820 = state_30816;
(statearr_30820[(11)] = inst_30803);

(statearr_30820[(7)] = inst_30799__$1);

return statearr_30820;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30816__$1,(2),inst_30804);
} else {
return null;
}
}
}
});})(c__21387__auto__))
;
return ((function (switch__21325__auto__,c__21387__auto__){
return (function() {
var figwheel$client$heads_up$clear_$_state_machine__21326__auto__ = null;
var figwheel$client$heads_up$clear_$_state_machine__21326__auto____0 = (function (){
var statearr_30824 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30824[(0)] = figwheel$client$heads_up$clear_$_state_machine__21326__auto__);

(statearr_30824[(1)] = (1));

return statearr_30824;
});
var figwheel$client$heads_up$clear_$_state_machine__21326__auto____1 = (function (state_30816){
while(true){
var ret_value__21327__auto__ = (function (){try{while(true){
var result__21328__auto__ = switch__21325__auto__.call(null,state_30816);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21328__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21328__auto__;
}
break;
}
}catch (e30825){if((e30825 instanceof Object)){
var ex__21329__auto__ = e30825;
var statearr_30826_30828 = state_30816;
(statearr_30826_30828[(5)] = ex__21329__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30816);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30825;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21327__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30829 = state_30816;
state_30816 = G__30829;
continue;
} else {
return ret_value__21327__auto__;
}
break;
}
});
figwheel$client$heads_up$clear_$_state_machine__21326__auto__ = function(state_30816){
switch(arguments.length){
case 0:
return figwheel$client$heads_up$clear_$_state_machine__21326__auto____0.call(this);
case 1:
return figwheel$client$heads_up$clear_$_state_machine__21326__auto____1.call(this,state_30816);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up$clear_$_state_machine__21326__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up$clear_$_state_machine__21326__auto____0;
figwheel$client$heads_up$clear_$_state_machine__21326__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up$clear_$_state_machine__21326__auto____1;
return figwheel$client$heads_up$clear_$_state_machine__21326__auto__;
})()
;})(switch__21325__auto__,c__21387__auto__))
})();
var state__21389__auto__ = (function (){var statearr_30827 = f__21388__auto__.call(null);
(statearr_30827[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21387__auto__);

return statearr_30827;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21389__auto__);
});})(c__21387__auto__))
);

return c__21387__auto__;
});
figwheel.client.heads_up.display_loaded_start = (function figwheel$client$heads_up$display_loaded_start(){
return figwheel.client.heads_up.display_heads_up.call(null,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),"rgba(211,234,172,1.0)",new cljs.core.Keyword(null,"width","width",-384071477),"68px",new cljs.core.Keyword(null,"height","height",1025178622),"68px",new cljs.core.Keyword(null,"paddingLeft","paddingLeft",262720813),"0px",new cljs.core.Keyword(null,"paddingRight","paddingRight",-1642313463),"0px",new cljs.core.Keyword(null,"borderRadius","borderRadius",-1505621083),"35px"], null),"");
});
figwheel.client.heads_up.flash_loaded = (function figwheel$client$heads_up$flash_loaded(){
var c__21387__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21387__auto__){
return (function (){
var f__21388__auto__ = (function (){var switch__21325__auto__ = ((function (c__21387__auto__){
return (function (state_30861){
var state_val_30862 = (state_30861[(1)]);
if((state_val_30862 === (4))){
var inst_30859 = (state_30861[(2)]);
var state_30861__$1 = state_30861;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30861__$1,inst_30859);
} else {
if((state_val_30862 === (3))){
var inst_30856 = (state_30861[(2)]);
var inst_30857 = figwheel.client.heads_up.clear.call(null);
var state_30861__$1 = (function (){var statearr_30863 = state_30861;
(statearr_30863[(7)] = inst_30856);

return statearr_30863;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30861__$1,(4),inst_30857);
} else {
if((state_val_30862 === (2))){
var inst_30853 = (state_30861[(2)]);
var inst_30854 = cljs.core.async.timeout.call(null,(400));
var state_30861__$1 = (function (){var statearr_30864 = state_30861;
(statearr_30864[(8)] = inst_30853);

return statearr_30864;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30861__$1,(3),inst_30854);
} else {
if((state_val_30862 === (1))){
var inst_30851 = figwheel.client.heads_up.display_loaded_start.call(null);
var state_30861__$1 = state_30861;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30861__$1,(2),inst_30851);
} else {
return null;
}
}
}
}
});})(c__21387__auto__))
;
return ((function (switch__21325__auto__,c__21387__auto__){
return (function() {
var figwheel$client$heads_up$flash_loaded_$_state_machine__21326__auto__ = null;
var figwheel$client$heads_up$flash_loaded_$_state_machine__21326__auto____0 = (function (){
var statearr_30868 = [null,null,null,null,null,null,null,null,null];
(statearr_30868[(0)] = figwheel$client$heads_up$flash_loaded_$_state_machine__21326__auto__);

(statearr_30868[(1)] = (1));

return statearr_30868;
});
var figwheel$client$heads_up$flash_loaded_$_state_machine__21326__auto____1 = (function (state_30861){
while(true){
var ret_value__21327__auto__ = (function (){try{while(true){
var result__21328__auto__ = switch__21325__auto__.call(null,state_30861);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21328__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21328__auto__;
}
break;
}
}catch (e30869){if((e30869 instanceof Object)){
var ex__21329__auto__ = e30869;
var statearr_30870_30872 = state_30861;
(statearr_30870_30872[(5)] = ex__21329__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30861);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30869;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21327__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30873 = state_30861;
state_30861 = G__30873;
continue;
} else {
return ret_value__21327__auto__;
}
break;
}
});
figwheel$client$heads_up$flash_loaded_$_state_machine__21326__auto__ = function(state_30861){
switch(arguments.length){
case 0:
return figwheel$client$heads_up$flash_loaded_$_state_machine__21326__auto____0.call(this);
case 1:
return figwheel$client$heads_up$flash_loaded_$_state_machine__21326__auto____1.call(this,state_30861);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up$flash_loaded_$_state_machine__21326__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up$flash_loaded_$_state_machine__21326__auto____0;
figwheel$client$heads_up$flash_loaded_$_state_machine__21326__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up$flash_loaded_$_state_machine__21326__auto____1;
return figwheel$client$heads_up$flash_loaded_$_state_machine__21326__auto__;
})()
;})(switch__21325__auto__,c__21387__auto__))
})();
var state__21389__auto__ = (function (){var statearr_30871 = f__21388__auto__.call(null);
(statearr_30871[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21387__auto__);

return statearr_30871;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21389__auto__);
});})(c__21387__auto__))
);

return c__21387__auto__;
});
figwheel.client.heads_up.clojure_symbol_svg = "<?xml version='1.0' encoding='UTF-8' ?>\n<!DOCTYPE svg PUBLIC '-//W3C//DTD SVG 1.1//EN' 'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd'>\n<svg width='49px' height='49px' viewBox='0 0 100 99' version='1.1' xmlns='http://www.w3.org/2000/svg' style='position:absolute; top:9px; left: 10px;'>\n<circle fill='rgba(255,255,255,0.5)' cx='49.75' cy='49.5' r='48.5'/>\n<path fill='#5881d8' d=' M 39.30 6.22 C 51.71 3.11 65.45 5.64 75.83 13.16 C 88.68 22.10 96.12 38.22 94.43 53.80 C 93.66 60.11 89.40 66.01 83.37 68.24 C 79.21 69.97 74.64 69.78 70.23 69.80 C 80.77 59.67 81.41 41.33 71.45 30.60 C 63.60 21.32 49.75 18.52 38.65 23.16 C 31.27 18.80 21.83 18.68 14.27 22.69 C 20.65 14.79 29.32 8.56 39.30 6.22 Z' />\n<path fill='#90b4fe' d=' M 42.93 26.99 C 48.49 25.50 54.55 25.62 59.79 28.14 C 68.71 32.19 74.61 42.14 73.41 51.94 C 72.85 58.64 68.92 64.53 63.81 68.69 C 59.57 66.71 57.53 62.30 55.66 58.30 C 50.76 48.12 50.23 36.02 42.93 26.99 Z' />\n<path fill='#63b132' d=' M 12.30 33.30 C 17.11 28.49 24.33 26.90 30.91 28.06 C 25.22 33.49 21.44 41.03 21.46 48.99 C 21.11 58.97 26.58 68.76 35.08 73.92 C 43.28 79.06 53.95 79.28 62.66 75.29 C 70.37 77.57 78.52 77.36 86.31 75.57 C 80.05 84.00 70.94 90.35 60.69 92.84 C 48.02 96.03 34.00 93.24 23.56 85.37 C 12.16 77.09 5.12 63.11 5.44 49.00 C 5.15 43.06 8.22 37.42 12.30 33.30 Z' />\n<path fill='#91dc47' d=' M 26.94 54.00 C 24.97 45.06 29.20 35.59 36.45 30.24 C 41.99 33.71 44.23 40.14 46.55 45.91 C 43.00 53.40 38.44 60.46 35.94 68.42 C 31.50 64.74 27.96 59.77 26.94 54.00 Z' />\n<path fill='#91dc47' d=' M 41.97 71.80 C 41.46 64.27 45.31 57.52 48.11 50.80 C 50.40 58.13 51.84 66.19 57.18 72.06 C 52.17 73.37 46.93 73.26 41.97 71.80 Z' />\n</svg>";

//# sourceMappingURL=heads_up.js.map?rel=1441291726337