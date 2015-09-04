// Compiled by ClojureScript 0.0-3211 {}
goog.provide('figwheel.client');
goog.require('cljs.core');
goog.require('goog.Uri');
goog.require('cljs.core.async');
goog.require('figwheel.client.socket');
goog.require('figwheel.client.file_reloading');
goog.require('clojure.string');
goog.require('figwheel.client.utils');
goog.require('cljs.repl');
goog.require('figwheel.client.heads_up');
figwheel.client.figwheel_repl_print = (function figwheel$client$figwheel_repl_print(args){
figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),"figwheel-repl-print",new cljs.core.Keyword(null,"content","content",15833224),args], null));

return args;
});
figwheel.client.console_print = (function figwheel$client$console_print(args){
console.log.apply(console,cljs.core.into_array.call(null,args));

return args;
});
figwheel.client.enable_repl_print_BANG_ = (function figwheel$client$enable_repl_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

return cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__29881__delegate = function (args){
return figwheel.client.figwheel_repl_print.call(null,figwheel.client.console_print.call(null,args));
};
var G__29881 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__29882__i = 0, G__29882__a = new Array(arguments.length -  0);
while (G__29882__i < G__29882__a.length) {G__29882__a[G__29882__i] = arguments[G__29882__i + 0]; ++G__29882__i;}
  args = new cljs.core.IndexedSeq(G__29882__a,0);
} 
return G__29881__delegate.call(this,args);};
G__29881.cljs$lang$maxFixedArity = 0;
G__29881.cljs$lang$applyTo = (function (arglist__29883){
var args = cljs.core.seq(arglist__29883);
return G__29881__delegate(args);
});
G__29881.cljs$core$IFn$_invoke$arity$variadic = G__29881__delegate;
return G__29881;
})()
;
});
figwheel.client.get_essential_messages = (function figwheel$client$get_essential_messages(ed){
if(cljs.core.truth_(ed)){
return cljs.core.cons.call(null,cljs.core.select_keys.call(null,ed,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"message","message",-406056002),new cljs.core.Keyword(null,"class","class",-2030961996)], null)),figwheel$client$get_essential_messages.call(null,new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(ed)));
} else {
return null;
}
});
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__29884){
var map__29886 = p__29884;
var map__29886__$1 = ((cljs.core.seq_QMARK_.call(null,map__29886))?cljs.core.apply.call(null,cljs.core.hash_map,map__29886):map__29886);
var class$ = cljs.core.get.call(null,map__29886__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var message = cljs.core.get.call(null,map__29886__$1,new cljs.core.Keyword(null,"message","message",-406056002));
return [cljs.core.str(class$),cljs.core.str(" : "),cljs.core.str(message)].join('');
});
figwheel.client.format_messages = cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.map,figwheel.client.error_msg_format),figwheel.client.get_essential_messages);
figwheel.client.focus_msgs = (function figwheel$client$focus_msgs(name_set,msg_hist){
return cljs.core.cons.call(null,cljs.core.first.call(null,msg_hist),cljs.core.filter.call(null,cljs.core.comp.call(null,name_set,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863)),cljs.core.rest.call(null,msg_hist)));
});
figwheel.client.reload_file_QMARK__STAR_ = (function figwheel$client$reload_file_QMARK__STAR_(msg_name,opts){
var or__18160__auto__ = new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__18160__auto__)){
return or__18160__auto__;
} else {
return cljs.core.not_EQ_.call(null,msg_name,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356));
}
});
figwheel.client.reload_file_state_QMARK_ = (function figwheel$client$reload_file_state_QMARK_(msg_names,opts){
var and__18148__auto__ = cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563));
if(and__18148__auto__){
return figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts);
} else {
return and__18148__auto__;
}
});
figwheel.client.block_reload_file_state_QMARK_ = (function figwheel$client$block_reload_file_state_QMARK_(msg_names,opts){
return (cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))) && (cljs.core.not.call(null,figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts)));
});
figwheel.client.warning_append_state_QMARK_ = (function figwheel$client$warning_append_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.warning_state_QMARK_ = (function figwheel$client$warning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),cljs.core.first.call(null,msg_names));
});
figwheel.client.rewarning_state_QMARK_ = (function figwheel$client$rewarning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(3),msg_names));
});
figwheel.client.compile_fail_state_QMARK_ = (function figwheel$client$compile_fail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),cljs.core.first.call(null,msg_names));
});
figwheel.client.compile_refail_state_QMARK_ = (function figwheel$client$compile_refail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.css_loaded_state_QMARK_ = (function figwheel$client$css_loaded_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874),cljs.core.first.call(null,msg_names));
});
figwheel.client.file_reloader_plugin = (function figwheel$client$file_reloader_plugin(opts){
var ch = cljs.core.async.chan.call(null);
var c__21387__auto___30015 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21387__auto___30015,ch){
return (function (){
var f__21388__auto__ = (function (){var switch__21325__auto__ = ((function (c__21387__auto___30015,ch){
return (function (state_29989){
var state_val_29990 = (state_29989[(1)]);
if((state_val_29990 === (7))){
var inst_29985 = (state_29989[(2)]);
var state_29989__$1 = state_29989;
var statearr_29991_30016 = state_29989__$1;
(statearr_29991_30016[(2)] = inst_29985);

(statearr_29991_30016[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29990 === (1))){
var state_29989__$1 = state_29989;
var statearr_29992_30017 = state_29989__$1;
(statearr_29992_30017[(2)] = null);

(statearr_29992_30017[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29990 === (4))){
var inst_29953 = (state_29989[(7)]);
var inst_29953__$1 = (state_29989[(2)]);
var state_29989__$1 = (function (){var statearr_29993 = state_29989;
(statearr_29993[(7)] = inst_29953__$1);

return statearr_29993;
})();
if(cljs.core.truth_(inst_29953__$1)){
var statearr_29994_30018 = state_29989__$1;
(statearr_29994_30018[(1)] = (5));

} else {
var statearr_29995_30019 = state_29989__$1;
(statearr_29995_30019[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29990 === (13))){
var state_29989__$1 = state_29989;
var statearr_29996_30020 = state_29989__$1;
(statearr_29996_30020[(2)] = null);

(statearr_29996_30020[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29990 === (6))){
var state_29989__$1 = state_29989;
var statearr_29997_30021 = state_29989__$1;
(statearr_29997_30021[(2)] = null);

(statearr_29997_30021[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29990 === (3))){
var inst_29987 = (state_29989[(2)]);
var state_29989__$1 = state_29989;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29989__$1,inst_29987);
} else {
if((state_val_29990 === (12))){
var inst_29960 = (state_29989[(8)]);
var inst_29973 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_29960);
var inst_29974 = cljs.core.first.call(null,inst_29973);
var inst_29975 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_29974);
var inst_29976 = console.warn("Figwheel: Not loading code with warnings - ",inst_29975);
var state_29989__$1 = state_29989;
var statearr_29998_30022 = state_29989__$1;
(statearr_29998_30022[(2)] = inst_29976);

(statearr_29998_30022[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29990 === (2))){
var state_29989__$1 = state_29989;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29989__$1,(4),ch);
} else {
if((state_val_29990 === (11))){
var inst_29969 = (state_29989[(2)]);
var state_29989__$1 = state_29989;
var statearr_29999_30023 = state_29989__$1;
(statearr_29999_30023[(2)] = inst_29969);

(statearr_29999_30023[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29990 === (9))){
var inst_29959 = (state_29989[(9)]);
var inst_29971 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_29959,opts);
var state_29989__$1 = state_29989;
if(cljs.core.truth_(inst_29971)){
var statearr_30000_30024 = state_29989__$1;
(statearr_30000_30024[(1)] = (12));

} else {
var statearr_30001_30025 = state_29989__$1;
(statearr_30001_30025[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29990 === (5))){
var inst_29953 = (state_29989[(7)]);
var inst_29959 = (state_29989[(9)]);
var inst_29955 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_29956 = (new cljs.core.PersistentArrayMap(null,2,inst_29955,null));
var inst_29957 = (new cljs.core.PersistentHashSet(null,inst_29956,null));
var inst_29958 = figwheel.client.focus_msgs.call(null,inst_29957,inst_29953);
var inst_29959__$1 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_29958);
var inst_29960 = cljs.core.first.call(null,inst_29958);
var inst_29961 = figwheel.client.reload_file_state_QMARK_.call(null,inst_29959__$1,opts);
var state_29989__$1 = (function (){var statearr_30002 = state_29989;
(statearr_30002[(8)] = inst_29960);

(statearr_30002[(9)] = inst_29959__$1);

return statearr_30002;
})();
if(cljs.core.truth_(inst_29961)){
var statearr_30003_30026 = state_29989__$1;
(statearr_30003_30026[(1)] = (8));

} else {
var statearr_30004_30027 = state_29989__$1;
(statearr_30004_30027[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29990 === (14))){
var inst_29979 = (state_29989[(2)]);
var state_29989__$1 = state_29989;
var statearr_30005_30028 = state_29989__$1;
(statearr_30005_30028[(2)] = inst_29979);

(statearr_30005_30028[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29990 === (10))){
var inst_29981 = (state_29989[(2)]);
var state_29989__$1 = (function (){var statearr_30006 = state_29989;
(statearr_30006[(10)] = inst_29981);

return statearr_30006;
})();
var statearr_30007_30029 = state_29989__$1;
(statearr_30007_30029[(2)] = null);

(statearr_30007_30029[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29990 === (8))){
var inst_29960 = (state_29989[(8)]);
var inst_29963 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_29964 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_29960);
var inst_29965 = cljs.core.async.timeout.call(null,(1000));
var inst_29966 = [inst_29964,inst_29965];
var inst_29967 = (new cljs.core.PersistentVector(null,2,(5),inst_29963,inst_29966,null));
var state_29989__$1 = state_29989;
return cljs.core.async.ioc_alts_BANG_.call(null,state_29989__$1,(11),inst_29967);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__21387__auto___30015,ch))
;
return ((function (switch__21325__auto__,c__21387__auto___30015,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__21326__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__21326__auto____0 = (function (){
var statearr_30011 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_30011[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__21326__auto__);

(statearr_30011[(1)] = (1));

return statearr_30011;
});
var figwheel$client$file_reloader_plugin_$_state_machine__21326__auto____1 = (function (state_29989){
while(true){
var ret_value__21327__auto__ = (function (){try{while(true){
var result__21328__auto__ = switch__21325__auto__.call(null,state_29989);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21328__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21328__auto__;
}
break;
}
}catch (e30012){if((e30012 instanceof Object)){
var ex__21329__auto__ = e30012;
var statearr_30013_30030 = state_29989;
(statearr_30013_30030[(5)] = ex__21329__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29989);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30012;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21327__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30031 = state_29989;
state_29989 = G__30031;
continue;
} else {
return ret_value__21327__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__21326__auto__ = function(state_29989){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__21326__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__21326__auto____1.call(this,state_29989);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloader_plugin_$_state_machine__21326__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__21326__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__21326__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__21326__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__21326__auto__;
})()
;})(switch__21325__auto__,c__21387__auto___30015,ch))
})();
var state__21389__auto__ = (function (){var statearr_30014 = f__21388__auto__.call(null);
(statearr_30014[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21387__auto___30015);

return statearr_30014;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21389__auto__);
});})(c__21387__auto___30015,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__30032_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__30032_SHARP_));
}),clojure.string.split_lines.call(null,stack_str));
});
var base_path_30039 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_30039){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,result_handler){
try{var _STAR_print_fn_STAR_30037 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR_30038 = cljs.core._STAR_print_newline_STAR_;
cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_fn_STAR_30037,_STAR_print_newline_STAR_30038,base_path_30039){
return (function() { 
var G__30040__delegate = function (args){
return figwheel.client.figwheel_repl_print.call(null,figwheel.client.console_print.call(null,args));
};
var G__30040 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__30041__i = 0, G__30041__a = new Array(arguments.length -  0);
while (G__30041__i < G__30041__a.length) {G__30041__a[G__30041__i] = arguments[G__30041__i + 0]; ++G__30041__i;}
  args = new cljs.core.IndexedSeq(G__30041__a,0);
} 
return G__30040__delegate.call(this,args);};
G__30040.cljs$lang$maxFixedArity = 0;
G__30040.cljs$lang$applyTo = (function (arglist__30042){
var args = cljs.core.seq(arglist__30042);
return G__30040__delegate(args);
});
G__30040.cljs$core$IFn$_invoke$arity$variadic = G__30040__delegate;
return G__30040;
})()
;})(_STAR_print_fn_STAR_30037,_STAR_print_newline_STAR_30038,base_path_30039))
;

cljs.core._STAR_print_newline_STAR_ = false;

try{return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"value","value",305978217),[cljs.core.str(eval(code))].join('')], null));
}finally {cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_30038;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_30037;
}}catch (e30036){if((e30036 instanceof Error)){
var e = e30036;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_30039], null));
} else {
var e = e30036;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}});})(base_path_30039))
;
/**
 * The REPL can disconnect and reconnect lets ensure cljs.user exists at least.
 */
figwheel.client.ensure_cljs_user = (function figwheel$client$ensure_cljs_user(){
if(cljs.core.truth_(cljs.user)){
return null;
} else {
return cljs.user = {};
}
});
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__30043){
var map__30048 = p__30043;
var map__30048__$1 = ((cljs.core.seq_QMARK_.call(null,map__30048))?cljs.core.apply.call(null,cljs.core.hash_map,map__30048):map__30048);
var opts = map__30048__$1;
var build_id = cljs.core.get.call(null,map__30048__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__30048,map__30048__$1,opts,build_id){
return (function (p__30049){
var vec__30050 = p__30049;
var map__30051 = cljs.core.nth.call(null,vec__30050,(0),null);
var map__30051__$1 = ((cljs.core.seq_QMARK_.call(null,map__30051))?cljs.core.apply.call(null,cljs.core.hash_map,map__30051):map__30051);
var msg = map__30051__$1;
var msg_name = cljs.core.get.call(null,map__30051__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__30050,(1));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),((function (vec__30050,map__30051,map__30051__$1,msg,msg_name,_,map__30048,map__30048__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__30050,map__30051,map__30051__$1,msg,msg_name,_,map__30048,map__30048__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__30048,map__30048__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__30055){
var vec__30056 = p__30055;
var map__30057 = cljs.core.nth.call(null,vec__30056,(0),null);
var map__30057__$1 = ((cljs.core.seq_QMARK_.call(null,map__30057))?cljs.core.apply.call(null,cljs.core.hash_map,map__30057):map__30057);
var msg = map__30057__$1;
var msg_name = cljs.core.get.call(null,map__30057__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__30056,(1));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__30058){
var map__30066 = p__30058;
var map__30066__$1 = ((cljs.core.seq_QMARK_.call(null,map__30066))?cljs.core.apply.call(null,cljs.core.hash_map,map__30066):map__30066);
var on_compile_fail = cljs.core.get.call(null,map__30066__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
var on_compile_warning = cljs.core.get.call(null,map__30066__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
return ((function (map__30066,map__30066__$1,on_compile_fail,on_compile_warning){
return (function (p__30067){
var vec__30068 = p__30067;
var map__30069 = cljs.core.nth.call(null,vec__30068,(0),null);
var map__30069__$1 = ((cljs.core.seq_QMARK_.call(null,map__30069))?cljs.core.apply.call(null,cljs.core.hash_map,map__30069):map__30069);
var msg = map__30069__$1;
var msg_name = cljs.core.get.call(null,map__30069__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__30068,(1));
var pred__30070 = cljs.core._EQ_;
var expr__30071 = msg_name;
if(cljs.core.truth_(pred__30070.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__30071))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__30070.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__30071))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__30066,map__30066__$1,on_compile_fail,on_compile_warning))
});
figwheel.client.heads_up_plugin_msg_handler = (function figwheel$client$heads_up_plugin_msg_handler(opts,msg_hist_SINGLEQUOTE_){
var msg_hist = figwheel.client.focus_msgs.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null], null), null),msg_hist_SINGLEQUOTE_);
var msg_names = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),msg_hist);
var msg = cljs.core.first.call(null,msg_hist);
var c__21387__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21387__auto__,msg_hist,msg_names,msg){
return (function (){
var f__21388__auto__ = (function (){var switch__21325__auto__ = ((function (c__21387__auto__,msg_hist,msg_names,msg){
return (function (state_30272){
var state_val_30273 = (state_30272[(1)]);
if((state_val_30273 === (7))){
var inst_30206 = (state_30272[(2)]);
var state_30272__$1 = state_30272;
var statearr_30274_30315 = state_30272__$1;
(statearr_30274_30315[(2)] = inst_30206);

(statearr_30274_30315[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30273 === (20))){
var inst_30234 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_30272__$1 = state_30272;
if(cljs.core.truth_(inst_30234)){
var statearr_30275_30316 = state_30272__$1;
(statearr_30275_30316[(1)] = (22));

} else {
var statearr_30276_30317 = state_30272__$1;
(statearr_30276_30317[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30273 === (27))){
var inst_30246 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_30247 = figwheel.client.heads_up.display_warning.call(null,inst_30246);
var state_30272__$1 = state_30272;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30272__$1,(30),inst_30247);
} else {
if((state_val_30273 === (1))){
var inst_30194 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_30272__$1 = state_30272;
if(cljs.core.truth_(inst_30194)){
var statearr_30277_30318 = state_30272__$1;
(statearr_30277_30318[(1)] = (2));

} else {
var statearr_30278_30319 = state_30272__$1;
(statearr_30278_30319[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30273 === (24))){
var inst_30262 = (state_30272[(2)]);
var state_30272__$1 = state_30272;
var statearr_30279_30320 = state_30272__$1;
(statearr_30279_30320[(2)] = inst_30262);

(statearr_30279_30320[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30273 === (4))){
var inst_30270 = (state_30272[(2)]);
var state_30272__$1 = state_30272;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30272__$1,inst_30270);
} else {
if((state_val_30273 === (15))){
var inst_30222 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_30223 = figwheel.client.format_messages.call(null,inst_30222);
var inst_30224 = new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(msg);
var inst_30225 = figwheel.client.heads_up.display_error.call(null,inst_30223,inst_30224);
var state_30272__$1 = state_30272;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30272__$1,(18),inst_30225);
} else {
if((state_val_30273 === (21))){
var inst_30264 = (state_30272[(2)]);
var state_30272__$1 = state_30272;
var statearr_30280_30321 = state_30272__$1;
(statearr_30280_30321[(2)] = inst_30264);

(statearr_30280_30321[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30273 === (31))){
var inst_30253 = figwheel.client.heads_up.flash_loaded.call(null);
var state_30272__$1 = state_30272;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30272__$1,(34),inst_30253);
} else {
if((state_val_30273 === (32))){
var state_30272__$1 = state_30272;
var statearr_30281_30322 = state_30272__$1;
(statearr_30281_30322[(2)] = null);

(statearr_30281_30322[(1)] = (33));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30273 === (33))){
var inst_30258 = (state_30272[(2)]);
var state_30272__$1 = state_30272;
var statearr_30282_30323 = state_30272__$1;
(statearr_30282_30323[(2)] = inst_30258);

(statearr_30282_30323[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30273 === (13))){
var inst_30212 = (state_30272[(2)]);
var inst_30213 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_30214 = figwheel.client.format_messages.call(null,inst_30213);
var inst_30215 = new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(msg);
var inst_30216 = figwheel.client.heads_up.display_error.call(null,inst_30214,inst_30215);
var state_30272__$1 = (function (){var statearr_30283 = state_30272;
(statearr_30283[(7)] = inst_30212);

return statearr_30283;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30272__$1,(14),inst_30216);
} else {
if((state_val_30273 === (22))){
var inst_30236 = figwheel.client.heads_up.clear.call(null);
var state_30272__$1 = state_30272;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30272__$1,(25),inst_30236);
} else {
if((state_val_30273 === (29))){
var inst_30260 = (state_30272[(2)]);
var state_30272__$1 = state_30272;
var statearr_30284_30324 = state_30272__$1;
(statearr_30284_30324[(2)] = inst_30260);

(statearr_30284_30324[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30273 === (6))){
var inst_30202 = figwheel.client.heads_up.clear.call(null);
var state_30272__$1 = state_30272;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30272__$1,(9),inst_30202);
} else {
if((state_val_30273 === (28))){
var inst_30251 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_30272__$1 = state_30272;
if(cljs.core.truth_(inst_30251)){
var statearr_30285_30325 = state_30272__$1;
(statearr_30285_30325[(1)] = (31));

} else {
var statearr_30286_30326 = state_30272__$1;
(statearr_30286_30326[(1)] = (32));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30273 === (25))){
var inst_30238 = (state_30272[(2)]);
var inst_30239 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_30240 = figwheel.client.heads_up.display_warning.call(null,inst_30239);
var state_30272__$1 = (function (){var statearr_30287 = state_30272;
(statearr_30287[(8)] = inst_30238);

return statearr_30287;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30272__$1,(26),inst_30240);
} else {
if((state_val_30273 === (34))){
var inst_30255 = (state_30272[(2)]);
var state_30272__$1 = state_30272;
var statearr_30288_30327 = state_30272__$1;
(statearr_30288_30327[(2)] = inst_30255);

(statearr_30288_30327[(1)] = (33));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30273 === (17))){
var inst_30266 = (state_30272[(2)]);
var state_30272__$1 = state_30272;
var statearr_30289_30328 = state_30272__$1;
(statearr_30289_30328[(2)] = inst_30266);

(statearr_30289_30328[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30273 === (3))){
var inst_30208 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_30272__$1 = state_30272;
if(cljs.core.truth_(inst_30208)){
var statearr_30290_30329 = state_30272__$1;
(statearr_30290_30329[(1)] = (10));

} else {
var statearr_30291_30330 = state_30272__$1;
(statearr_30291_30330[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30273 === (12))){
var inst_30268 = (state_30272[(2)]);
var state_30272__$1 = state_30272;
var statearr_30292_30331 = state_30272__$1;
(statearr_30292_30331[(2)] = inst_30268);

(statearr_30292_30331[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30273 === (2))){
var inst_30196 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_30272__$1 = state_30272;
if(cljs.core.truth_(inst_30196)){
var statearr_30293_30332 = state_30272__$1;
(statearr_30293_30332[(1)] = (5));

} else {
var statearr_30294_30333 = state_30272__$1;
(statearr_30294_30333[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30273 === (23))){
var inst_30244 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_30272__$1 = state_30272;
if(cljs.core.truth_(inst_30244)){
var statearr_30295_30334 = state_30272__$1;
(statearr_30295_30334[(1)] = (27));

} else {
var statearr_30296_30335 = state_30272__$1;
(statearr_30296_30335[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30273 === (19))){
var inst_30231 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_30232 = figwheel.client.heads_up.append_message.call(null,inst_30231);
var state_30272__$1 = state_30272;
var statearr_30297_30336 = state_30272__$1;
(statearr_30297_30336[(2)] = inst_30232);

(statearr_30297_30336[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30273 === (11))){
var inst_30220 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_30272__$1 = state_30272;
if(cljs.core.truth_(inst_30220)){
var statearr_30298_30337 = state_30272__$1;
(statearr_30298_30337[(1)] = (15));

} else {
var statearr_30299_30338 = state_30272__$1;
(statearr_30299_30338[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30273 === (9))){
var inst_30204 = (state_30272[(2)]);
var state_30272__$1 = state_30272;
var statearr_30300_30339 = state_30272__$1;
(statearr_30300_30339[(2)] = inst_30204);

(statearr_30300_30339[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30273 === (5))){
var inst_30198 = figwheel.client.heads_up.flash_loaded.call(null);
var state_30272__$1 = state_30272;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30272__$1,(8),inst_30198);
} else {
if((state_val_30273 === (14))){
var inst_30218 = (state_30272[(2)]);
var state_30272__$1 = state_30272;
var statearr_30301_30340 = state_30272__$1;
(statearr_30301_30340[(2)] = inst_30218);

(statearr_30301_30340[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30273 === (26))){
var inst_30242 = (state_30272[(2)]);
var state_30272__$1 = state_30272;
var statearr_30302_30341 = state_30272__$1;
(statearr_30302_30341[(2)] = inst_30242);

(statearr_30302_30341[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30273 === (16))){
var inst_30229 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_30272__$1 = state_30272;
if(cljs.core.truth_(inst_30229)){
var statearr_30303_30342 = state_30272__$1;
(statearr_30303_30342[(1)] = (19));

} else {
var statearr_30304_30343 = state_30272__$1;
(statearr_30304_30343[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30273 === (30))){
var inst_30249 = (state_30272[(2)]);
var state_30272__$1 = state_30272;
var statearr_30305_30344 = state_30272__$1;
(statearr_30305_30344[(2)] = inst_30249);

(statearr_30305_30344[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30273 === (10))){
var inst_30210 = figwheel.client.heads_up.clear.call(null);
var state_30272__$1 = state_30272;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30272__$1,(13),inst_30210);
} else {
if((state_val_30273 === (18))){
var inst_30227 = (state_30272[(2)]);
var state_30272__$1 = state_30272;
var statearr_30306_30345 = state_30272__$1;
(statearr_30306_30345[(2)] = inst_30227);

(statearr_30306_30345[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30273 === (8))){
var inst_30200 = (state_30272[(2)]);
var state_30272__$1 = state_30272;
var statearr_30307_30346 = state_30272__$1;
(statearr_30307_30346[(2)] = inst_30200);

(statearr_30307_30346[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__21387__auto__,msg_hist,msg_names,msg))
;
return ((function (switch__21325__auto__,c__21387__auto__,msg_hist,msg_names,msg){
return (function() {
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__21326__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__21326__auto____0 = (function (){
var statearr_30311 = [null,null,null,null,null,null,null,null,null];
(statearr_30311[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__21326__auto__);

(statearr_30311[(1)] = (1));

return statearr_30311;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__21326__auto____1 = (function (state_30272){
while(true){
var ret_value__21327__auto__ = (function (){try{while(true){
var result__21328__auto__ = switch__21325__auto__.call(null,state_30272);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21328__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21328__auto__;
}
break;
}
}catch (e30312){if((e30312 instanceof Object)){
var ex__21329__auto__ = e30312;
var statearr_30313_30347 = state_30272;
(statearr_30313_30347[(5)] = ex__21329__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30272);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30312;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21327__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30348 = state_30272;
state_30272 = G__30348;
continue;
} else {
return ret_value__21327__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__21326__auto__ = function(state_30272){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__21326__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__21326__auto____1.call(this,state_30272);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__21326__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__21326__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__21326__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__21326__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__21326__auto__;
})()
;})(switch__21325__auto__,c__21387__auto__,msg_hist,msg_names,msg))
})();
var state__21389__auto__ = (function (){var statearr_30314 = f__21388__auto__.call(null);
(statearr_30314[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21387__auto__);

return statearr_30314;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21389__auto__);
});})(c__21387__auto__,msg_hist,msg_names,msg))
);

return c__21387__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__21387__auto___30411 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21387__auto___30411,ch){
return (function (){
var f__21388__auto__ = (function (){var switch__21325__auto__ = ((function (c__21387__auto___30411,ch){
return (function (state_30394){
var state_val_30395 = (state_30394[(1)]);
if((state_val_30395 === (8))){
var inst_30386 = (state_30394[(2)]);
var state_30394__$1 = (function (){var statearr_30396 = state_30394;
(statearr_30396[(7)] = inst_30386);

return statearr_30396;
})();
var statearr_30397_30412 = state_30394__$1;
(statearr_30397_30412[(2)] = null);

(statearr_30397_30412[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30395 === (7))){
var inst_30390 = (state_30394[(2)]);
var state_30394__$1 = state_30394;
var statearr_30398_30413 = state_30394__$1;
(statearr_30398_30413[(2)] = inst_30390);

(statearr_30398_30413[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30395 === (6))){
var state_30394__$1 = state_30394;
var statearr_30399_30414 = state_30394__$1;
(statearr_30399_30414[(2)] = null);

(statearr_30399_30414[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30395 === (5))){
var inst_30382 = (state_30394[(8)]);
var inst_30384 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_30382);
var state_30394__$1 = state_30394;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30394__$1,(8),inst_30384);
} else {
if((state_val_30395 === (4))){
var inst_30382 = (state_30394[(8)]);
var inst_30382__$1 = (state_30394[(2)]);
var state_30394__$1 = (function (){var statearr_30400 = state_30394;
(statearr_30400[(8)] = inst_30382__$1);

return statearr_30400;
})();
if(cljs.core.truth_(inst_30382__$1)){
var statearr_30401_30415 = state_30394__$1;
(statearr_30401_30415[(1)] = (5));

} else {
var statearr_30402_30416 = state_30394__$1;
(statearr_30402_30416[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30395 === (3))){
var inst_30392 = (state_30394[(2)]);
var state_30394__$1 = state_30394;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30394__$1,inst_30392);
} else {
if((state_val_30395 === (2))){
var state_30394__$1 = state_30394;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30394__$1,(4),ch);
} else {
if((state_val_30395 === (1))){
var state_30394__$1 = state_30394;
var statearr_30403_30417 = state_30394__$1;
(statearr_30403_30417[(2)] = null);

(statearr_30403_30417[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
});})(c__21387__auto___30411,ch))
;
return ((function (switch__21325__auto__,c__21387__auto___30411,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__21326__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__21326__auto____0 = (function (){
var statearr_30407 = [null,null,null,null,null,null,null,null,null];
(statearr_30407[(0)] = figwheel$client$heads_up_plugin_$_state_machine__21326__auto__);

(statearr_30407[(1)] = (1));

return statearr_30407;
});
var figwheel$client$heads_up_plugin_$_state_machine__21326__auto____1 = (function (state_30394){
while(true){
var ret_value__21327__auto__ = (function (){try{while(true){
var result__21328__auto__ = switch__21325__auto__.call(null,state_30394);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21328__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21328__auto__;
}
break;
}
}catch (e30408){if((e30408 instanceof Object)){
var ex__21329__auto__ = e30408;
var statearr_30409_30418 = state_30394;
(statearr_30409_30418[(5)] = ex__21329__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30394);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30408;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21327__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30419 = state_30394;
state_30394 = G__30419;
continue;
} else {
return ret_value__21327__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__21326__auto__ = function(state_30394){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__21326__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__21326__auto____1.call(this,state_30394);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_$_state_machine__21326__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__21326__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__21326__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__21326__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__21326__auto__;
})()
;})(switch__21325__auto__,c__21387__auto___30411,ch))
})();
var state__21389__auto__ = (function (){var statearr_30410 = f__21388__auto__.call(null);
(statearr_30410[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21387__auto___30411);

return statearr_30410;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21389__auto__);
});})(c__21387__auto___30411,ch))
);


figwheel.client.heads_up.ensure_container.call(null);

return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.enforce_project_plugin = (function figwheel$client$enforce_project_plugin(opts){
return (function (msg_hist){
if(((1) < cljs.core.count.call(null,cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"project-id","project-id",206449307),cljs.core.take.call(null,(5),msg_hist)))))){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different project. Shutting socket down.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__21387__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21387__auto__){
return (function (){
var f__21388__auto__ = (function (){var switch__21325__auto__ = ((function (c__21387__auto__){
return (function (state_30440){
var state_val_30441 = (state_30440[(1)]);
if((state_val_30441 === (2))){
var inst_30437 = (state_30440[(2)]);
var inst_30438 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_30440__$1 = (function (){var statearr_30442 = state_30440;
(statearr_30442[(7)] = inst_30437);

return statearr_30442;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30440__$1,inst_30438);
} else {
if((state_val_30441 === (1))){
var inst_30435 = cljs.core.async.timeout.call(null,(3000));
var state_30440__$1 = state_30440;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30440__$1,(2),inst_30435);
} else {
return null;
}
}
});})(c__21387__auto__))
;
return ((function (switch__21325__auto__,c__21387__auto__){
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__21326__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__21326__auto____0 = (function (){
var statearr_30446 = [null,null,null,null,null,null,null,null];
(statearr_30446[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__21326__auto__);

(statearr_30446[(1)] = (1));

return statearr_30446;
});
var figwheel$client$enforce_project_plugin_$_state_machine__21326__auto____1 = (function (state_30440){
while(true){
var ret_value__21327__auto__ = (function (){try{while(true){
var result__21328__auto__ = switch__21325__auto__.call(null,state_30440);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21328__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21328__auto__;
}
break;
}
}catch (e30447){if((e30447 instanceof Object)){
var ex__21329__auto__ = e30447;
var statearr_30448_30450 = state_30440;
(statearr_30448_30450[(5)] = ex__21329__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30440);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30447;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21327__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30451 = state_30440;
state_30440 = G__30451;
continue;
} else {
return ret_value__21327__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__21326__auto__ = function(state_30440){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__21326__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__21326__auto____1.call(this,state_30440);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_project_plugin_$_state_machine__21326__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__21326__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__21326__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__21326__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__21326__auto__;
})()
;})(switch__21325__auto__,c__21387__auto__))
})();
var state__21389__auto__ = (function (){var statearr_30449 = f__21388__auto__.call(null);
(statearr_30449[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21387__auto__);

return statearr_30449;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21389__auto__);
});})(c__21387__auto__))
);

return c__21387__auto__;
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.default_on_jsload = cljs.core.identity;
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__30452){
var map__30458 = p__30452;
var map__30458__$1 = ((cljs.core.seq_QMARK_.call(null,map__30458))?cljs.core.apply.call(null,cljs.core.hash_map,map__30458):map__30458);
var ed = map__30458__$1;
var cause = cljs.core.get.call(null,map__30458__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
var exception_data = cljs.core.get.call(null,map__30458__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var formatted_exception = cljs.core.get.call(null,map__30458__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: Compile Exception");

var seq__30459_30463 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));
var chunk__30460_30464 = null;
var count__30461_30465 = (0);
var i__30462_30466 = (0);
while(true){
if((i__30462_30466 < count__30461_30465)){
var msg_30467 = cljs.core._nth.call(null,chunk__30460_30464,i__30462_30466);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_30467);

var G__30468 = seq__30459_30463;
var G__30469 = chunk__30460_30464;
var G__30470 = count__30461_30465;
var G__30471 = (i__30462_30466 + (1));
seq__30459_30463 = G__30468;
chunk__30460_30464 = G__30469;
count__30461_30465 = G__30470;
i__30462_30466 = G__30471;
continue;
} else {
var temp__4126__auto___30472 = cljs.core.seq.call(null,seq__30459_30463);
if(temp__4126__auto___30472){
var seq__30459_30473__$1 = temp__4126__auto___30472;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30459_30473__$1)){
var c__18945__auto___30474 = cljs.core.chunk_first.call(null,seq__30459_30473__$1);
var G__30475 = cljs.core.chunk_rest.call(null,seq__30459_30473__$1);
var G__30476 = c__18945__auto___30474;
var G__30477 = cljs.core.count.call(null,c__18945__auto___30474);
var G__30478 = (0);
seq__30459_30463 = G__30475;
chunk__30460_30464 = G__30476;
count__30461_30465 = G__30477;
i__30462_30466 = G__30478;
continue;
} else {
var msg_30479 = cljs.core.first.call(null,seq__30459_30473__$1);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_30479);

var G__30480 = cljs.core.next.call(null,seq__30459_30473__$1);
var G__30481 = null;
var G__30482 = (0);
var G__30483 = (0);
seq__30459_30463 = G__30480;
chunk__30460_30464 = G__30481;
count__30461_30465 = G__30482;
i__30462_30466 = G__30483;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_(cause)){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str("Error on file "),cljs.core.str(new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(cause)),cljs.core.str(", line "),cljs.core.str(new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(cause)),cljs.core.str(", column "),cljs.core.str(new cljs.core.Keyword(null,"column","column",2078222095).cljs$core$IFn$_invoke$arity$1(cause))].join(''));
} else {
}

return ed;
});
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__30484){
var map__30486 = p__30484;
var map__30486__$1 = ((cljs.core.seq_QMARK_.call(null,map__30486))?cljs.core.apply.call(null,cljs.core.hash_map,map__30486):map__30486);
var w = map__30486__$1;
var message = cljs.core.get.call(null,map__30486__$1,new cljs.core.Keyword(null,"message","message",-406056002));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),[cljs.core.str("Figwheel: Compile Warning - "),cljs.core.str(message)].join(''));

return w;
});
figwheel.client.default_before_load = (function figwheel$client$default_before_load(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: notified of file changes");

return files;
});
figwheel.client.default_on_cssload = (function figwheel$client$default_on_cssload(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded CSS files");

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),cljs.core.pr_str.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files)));

return files;
});
if(typeof figwheel.client.config_defaults !== 'undefined'){
} else {
figwheel.client.config_defaults = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"load-unchanged-files","load-unchanged-files",-1561468704),new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947),new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036),new cljs.core.Keyword(null,"debug","debug",-1608172596),new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202),new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128),new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223),new cljs.core.Keyword(null,"retry-count","retry-count",1936122875),new cljs.core.Keyword(null,"autoload","autoload",-354122500),new cljs.core.Keyword(null,"url-rewriter","url-rewriter",200543838),new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318)],[true,figwheel.client.default_on_compile_warning,figwheel.client.default_on_jsload,figwheel.client.default_on_compile_fail,false,true,[cljs.core.str("ws://"),cljs.core.str((cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))?location.host:"localhost:3449")),cljs.core.str("/figwheel-ws")].join(''),figwheel.client.default_before_load,false,(100),true,false,figwheel.client.default_on_cssload]);
}
figwheel.client.handle_deprecated_jsload_callback = (function figwheel$client$handle_deprecated_jsload_callback(config){
if(cljs.core.truth_(new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config))){
return cljs.core.dissoc.call(null,cljs.core.assoc.call(null,config,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config)),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369));
} else {
return config;
}
});
figwheel.client.base_plugins = (function figwheel$client$base_plugins(system_options){
var base = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"enforce-project-plugin","enforce-project-plugin",959402899),figwheel.client.enforce_project_plugin,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),figwheel.client.file_reloader_plugin,new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),figwheel.client.compile_fail_warning_plugin,new cljs.core.Keyword(null,"css-reloader-plugin","css-reloader-plugin",2002032904),figwheel.client.css_reloader_plugin,new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371),figwheel.client.repl_plugin], null);
var base__$1 = ((cljs.core.not.call(null,figwheel.client.utils.html_env_QMARK_.call(null)))?cljs.core.select_keys.call(null,base,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371)], null)):base);
var base__$2 = ((new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(system_options) === false)?cljs.core.dissoc.call(null,base__$1,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733)):base__$1);
if(cljs.core.truth_((function (){var and__18148__auto__ = new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(system_options);
if(cljs.core.truth_(and__18148__auto__)){
return figwheel.client.utils.html_env_QMARK_.call(null);
} else {
return and__18148__auto__;
}
})())){
return cljs.core.assoc.call(null,base__$2,new cljs.core.Keyword(null,"heads-up-display-plugin","heads-up-display-plugin",1745207501),figwheel.client.heads_up_plugin);
} else {
return base__$2;
}
});
figwheel.client.add_plugins = (function figwheel$client$add_plugins(plugins,system_options){
var seq__30493 = cljs.core.seq.call(null,plugins);
var chunk__30494 = null;
var count__30495 = (0);
var i__30496 = (0);
while(true){
if((i__30496 < count__30495)){
var vec__30497 = cljs.core._nth.call(null,chunk__30494,i__30496);
var k = cljs.core.nth.call(null,vec__30497,(0),null);
var plugin = cljs.core.nth.call(null,vec__30497,(1),null);
if(cljs.core.truth_(plugin)){
var pl_30499 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__30493,chunk__30494,count__30495,i__30496,pl_30499,vec__30497,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_30499.call(null,msg_hist);
});})(seq__30493,chunk__30494,count__30495,i__30496,pl_30499,vec__30497,k,plugin))
);
} else {
}

var G__30500 = seq__30493;
var G__30501 = chunk__30494;
var G__30502 = count__30495;
var G__30503 = (i__30496 + (1));
seq__30493 = G__30500;
chunk__30494 = G__30501;
count__30495 = G__30502;
i__30496 = G__30503;
continue;
} else {
var temp__4126__auto__ = cljs.core.seq.call(null,seq__30493);
if(temp__4126__auto__){
var seq__30493__$1 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30493__$1)){
var c__18945__auto__ = cljs.core.chunk_first.call(null,seq__30493__$1);
var G__30504 = cljs.core.chunk_rest.call(null,seq__30493__$1);
var G__30505 = c__18945__auto__;
var G__30506 = cljs.core.count.call(null,c__18945__auto__);
var G__30507 = (0);
seq__30493 = G__30504;
chunk__30494 = G__30505;
count__30495 = G__30506;
i__30496 = G__30507;
continue;
} else {
var vec__30498 = cljs.core.first.call(null,seq__30493__$1);
var k = cljs.core.nth.call(null,vec__30498,(0),null);
var plugin = cljs.core.nth.call(null,vec__30498,(1),null);
if(cljs.core.truth_(plugin)){
var pl_30508 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__30493,chunk__30494,count__30495,i__30496,pl_30508,vec__30498,k,plugin,seq__30493__$1,temp__4126__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_30508.call(null,msg_hist);
});})(seq__30493,chunk__30494,count__30495,i__30496,pl_30508,vec__30498,k,plugin,seq__30493__$1,temp__4126__auto__))
);
} else {
}

var G__30509 = cljs.core.next.call(null,seq__30493__$1);
var G__30510 = null;
var G__30511 = (0);
var G__30512 = (0);
seq__30493 = G__30509;
chunk__30494 = G__30510;
count__30495 = G__30511;
i__30496 = G__30512;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.start = (function figwheel$client$start(){
var G__30514 = arguments.length;
switch (G__30514) {
case 1:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 0:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$1 = (function (opts){
if((goog.dependencies_ == null)){
return null;
} else {
if(typeof figwheel.client.__figwheel_start_once__ !== 'undefined'){
return null;
} else {
figwheel.client.__figwheel_start_once__ = setTimeout((function (){
var plugins_SINGLEQUOTE_ = new cljs.core.Keyword(null,"plugins","plugins",1900073717).cljs$core$IFn$_invoke$arity$1(opts);
var merge_plugins = new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370).cljs$core$IFn$_invoke$arity$1(opts);
var system_options = figwheel.client.handle_deprecated_jsload_callback.call(null,cljs.core.merge.call(null,figwheel.client.config_defaults,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"plugins","plugins",1900073717),new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370))));
var plugins = (cljs.core.truth_(plugins_SINGLEQUOTE_)?plugins_SINGLEQUOTE_:cljs.core.merge.call(null,figwheel.client.base_plugins.call(null,system_options),merge_plugins));
figwheel.client.utils._STAR_print_debug_STAR_ = new cljs.core.Keyword(null,"debug","debug",-1608172596).cljs$core$IFn$_invoke$arity$1(opts);

figwheel.client.add_plugins.call(null,plugins,system_options);

figwheel.client.file_reloading.patch_goog_base.call(null);

return figwheel.client.socket.open.call(null,system_options);
}));
}
}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$0 = (function (){
return figwheel.client.start.call(null,cljs.core.PersistentArrayMap.EMPTY);
});

figwheel.client.start.cljs$lang$maxFixedArity = 1;
figwheel.client.watch_and_reload_with_opts = figwheel.client.start;
figwheel.client.watch_and_reload = (function figwheel$client$watch_and_reload(){
var argseq__19200__auto__ = ((((0) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(0)),(0))):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__19200__auto__);
});

figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__30517){
var map__30518 = p__30517;
var map__30518__$1 = ((cljs.core.seq_QMARK_.call(null,map__30518))?cljs.core.apply.call(null,cljs.core.hash_map,map__30518):map__30518);
var opts = map__30518__$1;
return figwheel.client.start.call(null,opts);
});

figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0);

figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq30516){
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq30516));
});

//# sourceMappingURL=client.js.map?rel=1441291725917