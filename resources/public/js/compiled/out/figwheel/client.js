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
var G__29874__delegate = function (args){
return figwheel.client.figwheel_repl_print.call(null,figwheel.client.console_print.call(null,args));
};
var G__29874 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__29875__i = 0, G__29875__a = new Array(arguments.length -  0);
while (G__29875__i < G__29875__a.length) {G__29875__a[G__29875__i] = arguments[G__29875__i + 0]; ++G__29875__i;}
  args = new cljs.core.IndexedSeq(G__29875__a,0);
} 
return G__29874__delegate.call(this,args);};
G__29874.cljs$lang$maxFixedArity = 0;
G__29874.cljs$lang$applyTo = (function (arglist__29876){
var args = cljs.core.seq(arglist__29876);
return G__29874__delegate(args);
});
G__29874.cljs$core$IFn$_invoke$arity$variadic = G__29874__delegate;
return G__29874;
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
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__29877){
var map__29879 = p__29877;
var map__29879__$1 = ((cljs.core.seq_QMARK_.call(null,map__29879))?cljs.core.apply.call(null,cljs.core.hash_map,map__29879):map__29879);
var class$ = cljs.core.get.call(null,map__29879__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var message = cljs.core.get.call(null,map__29879__$1,new cljs.core.Keyword(null,"message","message",-406056002));
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
var c__22071__auto___30008 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22071__auto___30008,ch){
return (function (){
var f__22072__auto__ = (function (){var switch__22009__auto__ = ((function (c__22071__auto___30008,ch){
return (function (state_29982){
var state_val_29983 = (state_29982[(1)]);
if((state_val_29983 === (7))){
var inst_29978 = (state_29982[(2)]);
var state_29982__$1 = state_29982;
var statearr_29984_30009 = state_29982__$1;
(statearr_29984_30009[(2)] = inst_29978);

(statearr_29984_30009[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29983 === (1))){
var state_29982__$1 = state_29982;
var statearr_29985_30010 = state_29982__$1;
(statearr_29985_30010[(2)] = null);

(statearr_29985_30010[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29983 === (4))){
var inst_29946 = (state_29982[(7)]);
var inst_29946__$1 = (state_29982[(2)]);
var state_29982__$1 = (function (){var statearr_29986 = state_29982;
(statearr_29986[(7)] = inst_29946__$1);

return statearr_29986;
})();
if(cljs.core.truth_(inst_29946__$1)){
var statearr_29987_30011 = state_29982__$1;
(statearr_29987_30011[(1)] = (5));

} else {
var statearr_29988_30012 = state_29982__$1;
(statearr_29988_30012[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29983 === (13))){
var state_29982__$1 = state_29982;
var statearr_29989_30013 = state_29982__$1;
(statearr_29989_30013[(2)] = null);

(statearr_29989_30013[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29983 === (6))){
var state_29982__$1 = state_29982;
var statearr_29990_30014 = state_29982__$1;
(statearr_29990_30014[(2)] = null);

(statearr_29990_30014[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29983 === (3))){
var inst_29980 = (state_29982[(2)]);
var state_29982__$1 = state_29982;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29982__$1,inst_29980);
} else {
if((state_val_29983 === (12))){
var inst_29953 = (state_29982[(8)]);
var inst_29966 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_29953);
var inst_29967 = cljs.core.first.call(null,inst_29966);
var inst_29968 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_29967);
var inst_29969 = console.warn("Figwheel: Not loading code with warnings - ",inst_29968);
var state_29982__$1 = state_29982;
var statearr_29991_30015 = state_29982__$1;
(statearr_29991_30015[(2)] = inst_29969);

(statearr_29991_30015[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29983 === (2))){
var state_29982__$1 = state_29982;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29982__$1,(4),ch);
} else {
if((state_val_29983 === (11))){
var inst_29962 = (state_29982[(2)]);
var state_29982__$1 = state_29982;
var statearr_29992_30016 = state_29982__$1;
(statearr_29992_30016[(2)] = inst_29962);

(statearr_29992_30016[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29983 === (9))){
var inst_29952 = (state_29982[(9)]);
var inst_29964 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_29952,opts);
var state_29982__$1 = state_29982;
if(cljs.core.truth_(inst_29964)){
var statearr_29993_30017 = state_29982__$1;
(statearr_29993_30017[(1)] = (12));

} else {
var statearr_29994_30018 = state_29982__$1;
(statearr_29994_30018[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29983 === (5))){
var inst_29946 = (state_29982[(7)]);
var inst_29952 = (state_29982[(9)]);
var inst_29948 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_29949 = (new cljs.core.PersistentArrayMap(null,2,inst_29948,null));
var inst_29950 = (new cljs.core.PersistentHashSet(null,inst_29949,null));
var inst_29951 = figwheel.client.focus_msgs.call(null,inst_29950,inst_29946);
var inst_29952__$1 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_29951);
var inst_29953 = cljs.core.first.call(null,inst_29951);
var inst_29954 = figwheel.client.reload_file_state_QMARK_.call(null,inst_29952__$1,opts);
var state_29982__$1 = (function (){var statearr_29995 = state_29982;
(statearr_29995[(8)] = inst_29953);

(statearr_29995[(9)] = inst_29952__$1);

return statearr_29995;
})();
if(cljs.core.truth_(inst_29954)){
var statearr_29996_30019 = state_29982__$1;
(statearr_29996_30019[(1)] = (8));

} else {
var statearr_29997_30020 = state_29982__$1;
(statearr_29997_30020[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29983 === (14))){
var inst_29972 = (state_29982[(2)]);
var state_29982__$1 = state_29982;
var statearr_29998_30021 = state_29982__$1;
(statearr_29998_30021[(2)] = inst_29972);

(statearr_29998_30021[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29983 === (10))){
var inst_29974 = (state_29982[(2)]);
var state_29982__$1 = (function (){var statearr_29999 = state_29982;
(statearr_29999[(10)] = inst_29974);

return statearr_29999;
})();
var statearr_30000_30022 = state_29982__$1;
(statearr_30000_30022[(2)] = null);

(statearr_30000_30022[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29983 === (8))){
var inst_29953 = (state_29982[(8)]);
var inst_29956 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_29957 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_29953);
var inst_29958 = cljs.core.async.timeout.call(null,(1000));
var inst_29959 = [inst_29957,inst_29958];
var inst_29960 = (new cljs.core.PersistentVector(null,2,(5),inst_29956,inst_29959,null));
var state_29982__$1 = state_29982;
return cljs.core.async.ioc_alts_BANG_.call(null,state_29982__$1,(11),inst_29960);
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
});})(c__22071__auto___30008,ch))
;
return ((function (switch__22009__auto__,c__22071__auto___30008,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__22010__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__22010__auto____0 = (function (){
var statearr_30004 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_30004[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__22010__auto__);

(statearr_30004[(1)] = (1));

return statearr_30004;
});
var figwheel$client$file_reloader_plugin_$_state_machine__22010__auto____1 = (function (state_29982){
while(true){
var ret_value__22011__auto__ = (function (){try{while(true){
var result__22012__auto__ = switch__22009__auto__.call(null,state_29982);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22012__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22012__auto__;
}
break;
}
}catch (e30005){if((e30005 instanceof Object)){
var ex__22013__auto__ = e30005;
var statearr_30006_30023 = state_29982;
(statearr_30006_30023[(5)] = ex__22013__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29982);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30005;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22011__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30024 = state_29982;
state_29982 = G__30024;
continue;
} else {
return ret_value__22011__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__22010__auto__ = function(state_29982){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__22010__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__22010__auto____1.call(this,state_29982);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloader_plugin_$_state_machine__22010__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__22010__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__22010__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__22010__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__22010__auto__;
})()
;})(switch__22009__auto__,c__22071__auto___30008,ch))
})();
var state__22073__auto__ = (function (){var statearr_30007 = f__22072__auto__.call(null);
(statearr_30007[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22071__auto___30008);

return statearr_30007;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22073__auto__);
});})(c__22071__auto___30008,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__30025_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__30025_SHARP_));
}),clojure.string.split_lines.call(null,stack_str));
});
var base_path_30032 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_30032){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,result_handler){
try{var _STAR_print_fn_STAR_30030 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR_30031 = cljs.core._STAR_print_newline_STAR_;
cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_fn_STAR_30030,_STAR_print_newline_STAR_30031,base_path_30032){
return (function() { 
var G__30033__delegate = function (args){
return figwheel.client.figwheel_repl_print.call(null,figwheel.client.console_print.call(null,args));
};
var G__30033 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__30034__i = 0, G__30034__a = new Array(arguments.length -  0);
while (G__30034__i < G__30034__a.length) {G__30034__a[G__30034__i] = arguments[G__30034__i + 0]; ++G__30034__i;}
  args = new cljs.core.IndexedSeq(G__30034__a,0);
} 
return G__30033__delegate.call(this,args);};
G__30033.cljs$lang$maxFixedArity = 0;
G__30033.cljs$lang$applyTo = (function (arglist__30035){
var args = cljs.core.seq(arglist__30035);
return G__30033__delegate(args);
});
G__30033.cljs$core$IFn$_invoke$arity$variadic = G__30033__delegate;
return G__30033;
})()
;})(_STAR_print_fn_STAR_30030,_STAR_print_newline_STAR_30031,base_path_30032))
;

cljs.core._STAR_print_newline_STAR_ = false;

try{return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"value","value",305978217),[cljs.core.str(eval(code))].join('')], null));
}finally {cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_30031;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_30030;
}}catch (e30029){if((e30029 instanceof Error)){
var e = e30029;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_30032], null));
} else {
var e = e30029;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}});})(base_path_30032))
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
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__30036){
var map__30041 = p__30036;
var map__30041__$1 = ((cljs.core.seq_QMARK_.call(null,map__30041))?cljs.core.apply.call(null,cljs.core.hash_map,map__30041):map__30041);
var opts = map__30041__$1;
var build_id = cljs.core.get.call(null,map__30041__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__30041,map__30041__$1,opts,build_id){
return (function (p__30042){
var vec__30043 = p__30042;
var map__30044 = cljs.core.nth.call(null,vec__30043,(0),null);
var map__30044__$1 = ((cljs.core.seq_QMARK_.call(null,map__30044))?cljs.core.apply.call(null,cljs.core.hash_map,map__30044):map__30044);
var msg = map__30044__$1;
var msg_name = cljs.core.get.call(null,map__30044__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__30043,(1));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),((function (vec__30043,map__30044,map__30044__$1,msg,msg_name,_,map__30041,map__30041__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__30043,map__30044,map__30044__$1,msg,msg_name,_,map__30041,map__30041__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__30041,map__30041__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__30048){
var vec__30049 = p__30048;
var map__30050 = cljs.core.nth.call(null,vec__30049,(0),null);
var map__30050__$1 = ((cljs.core.seq_QMARK_.call(null,map__30050))?cljs.core.apply.call(null,cljs.core.hash_map,map__30050):map__30050);
var msg = map__30050__$1;
var msg_name = cljs.core.get.call(null,map__30050__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__30049,(1));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__30051){
var map__30059 = p__30051;
var map__30059__$1 = ((cljs.core.seq_QMARK_.call(null,map__30059))?cljs.core.apply.call(null,cljs.core.hash_map,map__30059):map__30059);
var on_compile_fail = cljs.core.get.call(null,map__30059__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
var on_compile_warning = cljs.core.get.call(null,map__30059__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
return ((function (map__30059,map__30059__$1,on_compile_fail,on_compile_warning){
return (function (p__30060){
var vec__30061 = p__30060;
var map__30062 = cljs.core.nth.call(null,vec__30061,(0),null);
var map__30062__$1 = ((cljs.core.seq_QMARK_.call(null,map__30062))?cljs.core.apply.call(null,cljs.core.hash_map,map__30062):map__30062);
var msg = map__30062__$1;
var msg_name = cljs.core.get.call(null,map__30062__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__30061,(1));
var pred__30063 = cljs.core._EQ_;
var expr__30064 = msg_name;
if(cljs.core.truth_(pred__30063.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__30064))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__30063.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__30064))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__30059,map__30059__$1,on_compile_fail,on_compile_warning))
});
figwheel.client.heads_up_plugin_msg_handler = (function figwheel$client$heads_up_plugin_msg_handler(opts,msg_hist_SINGLEQUOTE_){
var msg_hist = figwheel.client.focus_msgs.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null], null), null),msg_hist_SINGLEQUOTE_);
var msg_names = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),msg_hist);
var msg = cljs.core.first.call(null,msg_hist);
var c__22071__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22071__auto__,msg_hist,msg_names,msg){
return (function (){
var f__22072__auto__ = (function (){var switch__22009__auto__ = ((function (c__22071__auto__,msg_hist,msg_names,msg){
return (function (state_30265){
var state_val_30266 = (state_30265[(1)]);
if((state_val_30266 === (7))){
var inst_30199 = (state_30265[(2)]);
var state_30265__$1 = state_30265;
var statearr_30267_30308 = state_30265__$1;
(statearr_30267_30308[(2)] = inst_30199);

(statearr_30267_30308[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30266 === (20))){
var inst_30227 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_30265__$1 = state_30265;
if(cljs.core.truth_(inst_30227)){
var statearr_30268_30309 = state_30265__$1;
(statearr_30268_30309[(1)] = (22));

} else {
var statearr_30269_30310 = state_30265__$1;
(statearr_30269_30310[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30266 === (27))){
var inst_30239 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_30240 = figwheel.client.heads_up.display_warning.call(null,inst_30239);
var state_30265__$1 = state_30265;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30265__$1,(30),inst_30240);
} else {
if((state_val_30266 === (1))){
var inst_30187 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_30265__$1 = state_30265;
if(cljs.core.truth_(inst_30187)){
var statearr_30270_30311 = state_30265__$1;
(statearr_30270_30311[(1)] = (2));

} else {
var statearr_30271_30312 = state_30265__$1;
(statearr_30271_30312[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30266 === (24))){
var inst_30255 = (state_30265[(2)]);
var state_30265__$1 = state_30265;
var statearr_30272_30313 = state_30265__$1;
(statearr_30272_30313[(2)] = inst_30255);

(statearr_30272_30313[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30266 === (4))){
var inst_30263 = (state_30265[(2)]);
var state_30265__$1 = state_30265;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30265__$1,inst_30263);
} else {
if((state_val_30266 === (15))){
var inst_30215 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_30216 = figwheel.client.format_messages.call(null,inst_30215);
var inst_30217 = new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(msg);
var inst_30218 = figwheel.client.heads_up.display_error.call(null,inst_30216,inst_30217);
var state_30265__$1 = state_30265;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30265__$1,(18),inst_30218);
} else {
if((state_val_30266 === (21))){
var inst_30257 = (state_30265[(2)]);
var state_30265__$1 = state_30265;
var statearr_30273_30314 = state_30265__$1;
(statearr_30273_30314[(2)] = inst_30257);

(statearr_30273_30314[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30266 === (31))){
var inst_30246 = figwheel.client.heads_up.flash_loaded.call(null);
var state_30265__$1 = state_30265;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30265__$1,(34),inst_30246);
} else {
if((state_val_30266 === (32))){
var state_30265__$1 = state_30265;
var statearr_30274_30315 = state_30265__$1;
(statearr_30274_30315[(2)] = null);

(statearr_30274_30315[(1)] = (33));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30266 === (33))){
var inst_30251 = (state_30265[(2)]);
var state_30265__$1 = state_30265;
var statearr_30275_30316 = state_30265__$1;
(statearr_30275_30316[(2)] = inst_30251);

(statearr_30275_30316[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30266 === (13))){
var inst_30205 = (state_30265[(2)]);
var inst_30206 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_30207 = figwheel.client.format_messages.call(null,inst_30206);
var inst_30208 = new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(msg);
var inst_30209 = figwheel.client.heads_up.display_error.call(null,inst_30207,inst_30208);
var state_30265__$1 = (function (){var statearr_30276 = state_30265;
(statearr_30276[(7)] = inst_30205);

return statearr_30276;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30265__$1,(14),inst_30209);
} else {
if((state_val_30266 === (22))){
var inst_30229 = figwheel.client.heads_up.clear.call(null);
var state_30265__$1 = state_30265;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30265__$1,(25),inst_30229);
} else {
if((state_val_30266 === (29))){
var inst_30253 = (state_30265[(2)]);
var state_30265__$1 = state_30265;
var statearr_30277_30317 = state_30265__$1;
(statearr_30277_30317[(2)] = inst_30253);

(statearr_30277_30317[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30266 === (6))){
var inst_30195 = figwheel.client.heads_up.clear.call(null);
var state_30265__$1 = state_30265;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30265__$1,(9),inst_30195);
} else {
if((state_val_30266 === (28))){
var inst_30244 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_30265__$1 = state_30265;
if(cljs.core.truth_(inst_30244)){
var statearr_30278_30318 = state_30265__$1;
(statearr_30278_30318[(1)] = (31));

} else {
var statearr_30279_30319 = state_30265__$1;
(statearr_30279_30319[(1)] = (32));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30266 === (25))){
var inst_30231 = (state_30265[(2)]);
var inst_30232 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_30233 = figwheel.client.heads_up.display_warning.call(null,inst_30232);
var state_30265__$1 = (function (){var statearr_30280 = state_30265;
(statearr_30280[(8)] = inst_30231);

return statearr_30280;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30265__$1,(26),inst_30233);
} else {
if((state_val_30266 === (34))){
var inst_30248 = (state_30265[(2)]);
var state_30265__$1 = state_30265;
var statearr_30281_30320 = state_30265__$1;
(statearr_30281_30320[(2)] = inst_30248);

(statearr_30281_30320[(1)] = (33));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30266 === (17))){
var inst_30259 = (state_30265[(2)]);
var state_30265__$1 = state_30265;
var statearr_30282_30321 = state_30265__$1;
(statearr_30282_30321[(2)] = inst_30259);

(statearr_30282_30321[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30266 === (3))){
var inst_30201 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_30265__$1 = state_30265;
if(cljs.core.truth_(inst_30201)){
var statearr_30283_30322 = state_30265__$1;
(statearr_30283_30322[(1)] = (10));

} else {
var statearr_30284_30323 = state_30265__$1;
(statearr_30284_30323[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30266 === (12))){
var inst_30261 = (state_30265[(2)]);
var state_30265__$1 = state_30265;
var statearr_30285_30324 = state_30265__$1;
(statearr_30285_30324[(2)] = inst_30261);

(statearr_30285_30324[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30266 === (2))){
var inst_30189 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_30265__$1 = state_30265;
if(cljs.core.truth_(inst_30189)){
var statearr_30286_30325 = state_30265__$1;
(statearr_30286_30325[(1)] = (5));

} else {
var statearr_30287_30326 = state_30265__$1;
(statearr_30287_30326[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30266 === (23))){
var inst_30237 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_30265__$1 = state_30265;
if(cljs.core.truth_(inst_30237)){
var statearr_30288_30327 = state_30265__$1;
(statearr_30288_30327[(1)] = (27));

} else {
var statearr_30289_30328 = state_30265__$1;
(statearr_30289_30328[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30266 === (19))){
var inst_30224 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_30225 = figwheel.client.heads_up.append_message.call(null,inst_30224);
var state_30265__$1 = state_30265;
var statearr_30290_30329 = state_30265__$1;
(statearr_30290_30329[(2)] = inst_30225);

(statearr_30290_30329[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30266 === (11))){
var inst_30213 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_30265__$1 = state_30265;
if(cljs.core.truth_(inst_30213)){
var statearr_30291_30330 = state_30265__$1;
(statearr_30291_30330[(1)] = (15));

} else {
var statearr_30292_30331 = state_30265__$1;
(statearr_30292_30331[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30266 === (9))){
var inst_30197 = (state_30265[(2)]);
var state_30265__$1 = state_30265;
var statearr_30293_30332 = state_30265__$1;
(statearr_30293_30332[(2)] = inst_30197);

(statearr_30293_30332[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30266 === (5))){
var inst_30191 = figwheel.client.heads_up.flash_loaded.call(null);
var state_30265__$1 = state_30265;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30265__$1,(8),inst_30191);
} else {
if((state_val_30266 === (14))){
var inst_30211 = (state_30265[(2)]);
var state_30265__$1 = state_30265;
var statearr_30294_30333 = state_30265__$1;
(statearr_30294_30333[(2)] = inst_30211);

(statearr_30294_30333[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30266 === (26))){
var inst_30235 = (state_30265[(2)]);
var state_30265__$1 = state_30265;
var statearr_30295_30334 = state_30265__$1;
(statearr_30295_30334[(2)] = inst_30235);

(statearr_30295_30334[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30266 === (16))){
var inst_30222 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_30265__$1 = state_30265;
if(cljs.core.truth_(inst_30222)){
var statearr_30296_30335 = state_30265__$1;
(statearr_30296_30335[(1)] = (19));

} else {
var statearr_30297_30336 = state_30265__$1;
(statearr_30297_30336[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30266 === (30))){
var inst_30242 = (state_30265[(2)]);
var state_30265__$1 = state_30265;
var statearr_30298_30337 = state_30265__$1;
(statearr_30298_30337[(2)] = inst_30242);

(statearr_30298_30337[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30266 === (10))){
var inst_30203 = figwheel.client.heads_up.clear.call(null);
var state_30265__$1 = state_30265;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30265__$1,(13),inst_30203);
} else {
if((state_val_30266 === (18))){
var inst_30220 = (state_30265[(2)]);
var state_30265__$1 = state_30265;
var statearr_30299_30338 = state_30265__$1;
(statearr_30299_30338[(2)] = inst_30220);

(statearr_30299_30338[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30266 === (8))){
var inst_30193 = (state_30265[(2)]);
var state_30265__$1 = state_30265;
var statearr_30300_30339 = state_30265__$1;
(statearr_30300_30339[(2)] = inst_30193);

(statearr_30300_30339[(1)] = (7));


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
});})(c__22071__auto__,msg_hist,msg_names,msg))
;
return ((function (switch__22009__auto__,c__22071__auto__,msg_hist,msg_names,msg){
return (function() {
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__22010__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__22010__auto____0 = (function (){
var statearr_30304 = [null,null,null,null,null,null,null,null,null];
(statearr_30304[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__22010__auto__);

(statearr_30304[(1)] = (1));

return statearr_30304;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__22010__auto____1 = (function (state_30265){
while(true){
var ret_value__22011__auto__ = (function (){try{while(true){
var result__22012__auto__ = switch__22009__auto__.call(null,state_30265);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22012__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22012__auto__;
}
break;
}
}catch (e30305){if((e30305 instanceof Object)){
var ex__22013__auto__ = e30305;
var statearr_30306_30340 = state_30265;
(statearr_30306_30340[(5)] = ex__22013__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30265);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30305;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22011__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30341 = state_30265;
state_30265 = G__30341;
continue;
} else {
return ret_value__22011__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__22010__auto__ = function(state_30265){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__22010__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__22010__auto____1.call(this,state_30265);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__22010__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__22010__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__22010__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__22010__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__22010__auto__;
})()
;})(switch__22009__auto__,c__22071__auto__,msg_hist,msg_names,msg))
})();
var state__22073__auto__ = (function (){var statearr_30307 = f__22072__auto__.call(null);
(statearr_30307[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22071__auto__);

return statearr_30307;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22073__auto__);
});})(c__22071__auto__,msg_hist,msg_names,msg))
);

return c__22071__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__22071__auto___30404 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22071__auto___30404,ch){
return (function (){
var f__22072__auto__ = (function (){var switch__22009__auto__ = ((function (c__22071__auto___30404,ch){
return (function (state_30387){
var state_val_30388 = (state_30387[(1)]);
if((state_val_30388 === (8))){
var inst_30379 = (state_30387[(2)]);
var state_30387__$1 = (function (){var statearr_30389 = state_30387;
(statearr_30389[(7)] = inst_30379);

return statearr_30389;
})();
var statearr_30390_30405 = state_30387__$1;
(statearr_30390_30405[(2)] = null);

(statearr_30390_30405[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30388 === (7))){
var inst_30383 = (state_30387[(2)]);
var state_30387__$1 = state_30387;
var statearr_30391_30406 = state_30387__$1;
(statearr_30391_30406[(2)] = inst_30383);

(statearr_30391_30406[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30388 === (6))){
var state_30387__$1 = state_30387;
var statearr_30392_30407 = state_30387__$1;
(statearr_30392_30407[(2)] = null);

(statearr_30392_30407[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30388 === (5))){
var inst_30375 = (state_30387[(8)]);
var inst_30377 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_30375);
var state_30387__$1 = state_30387;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30387__$1,(8),inst_30377);
} else {
if((state_val_30388 === (4))){
var inst_30375 = (state_30387[(8)]);
var inst_30375__$1 = (state_30387[(2)]);
var state_30387__$1 = (function (){var statearr_30393 = state_30387;
(statearr_30393[(8)] = inst_30375__$1);

return statearr_30393;
})();
if(cljs.core.truth_(inst_30375__$1)){
var statearr_30394_30408 = state_30387__$1;
(statearr_30394_30408[(1)] = (5));

} else {
var statearr_30395_30409 = state_30387__$1;
(statearr_30395_30409[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30388 === (3))){
var inst_30385 = (state_30387[(2)]);
var state_30387__$1 = state_30387;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30387__$1,inst_30385);
} else {
if((state_val_30388 === (2))){
var state_30387__$1 = state_30387;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30387__$1,(4),ch);
} else {
if((state_val_30388 === (1))){
var state_30387__$1 = state_30387;
var statearr_30396_30410 = state_30387__$1;
(statearr_30396_30410[(2)] = null);

(statearr_30396_30410[(1)] = (2));


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
});})(c__22071__auto___30404,ch))
;
return ((function (switch__22009__auto__,c__22071__auto___30404,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__22010__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__22010__auto____0 = (function (){
var statearr_30400 = [null,null,null,null,null,null,null,null,null];
(statearr_30400[(0)] = figwheel$client$heads_up_plugin_$_state_machine__22010__auto__);

(statearr_30400[(1)] = (1));

return statearr_30400;
});
var figwheel$client$heads_up_plugin_$_state_machine__22010__auto____1 = (function (state_30387){
while(true){
var ret_value__22011__auto__ = (function (){try{while(true){
var result__22012__auto__ = switch__22009__auto__.call(null,state_30387);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22012__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22012__auto__;
}
break;
}
}catch (e30401){if((e30401 instanceof Object)){
var ex__22013__auto__ = e30401;
var statearr_30402_30411 = state_30387;
(statearr_30402_30411[(5)] = ex__22013__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30387);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30401;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22011__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30412 = state_30387;
state_30387 = G__30412;
continue;
} else {
return ret_value__22011__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__22010__auto__ = function(state_30387){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__22010__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__22010__auto____1.call(this,state_30387);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_$_state_machine__22010__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__22010__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__22010__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__22010__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__22010__auto__;
})()
;})(switch__22009__auto__,c__22071__auto___30404,ch))
})();
var state__22073__auto__ = (function (){var statearr_30403 = f__22072__auto__.call(null);
(statearr_30403[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22071__auto___30404);

return statearr_30403;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22073__auto__);
});})(c__22071__auto___30404,ch))
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
var c__22071__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22071__auto__){
return (function (){
var f__22072__auto__ = (function (){var switch__22009__auto__ = ((function (c__22071__auto__){
return (function (state_30433){
var state_val_30434 = (state_30433[(1)]);
if((state_val_30434 === (2))){
var inst_30430 = (state_30433[(2)]);
var inst_30431 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_30433__$1 = (function (){var statearr_30435 = state_30433;
(statearr_30435[(7)] = inst_30430);

return statearr_30435;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30433__$1,inst_30431);
} else {
if((state_val_30434 === (1))){
var inst_30428 = cljs.core.async.timeout.call(null,(3000));
var state_30433__$1 = state_30433;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30433__$1,(2),inst_30428);
} else {
return null;
}
}
});})(c__22071__auto__))
;
return ((function (switch__22009__auto__,c__22071__auto__){
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__22010__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__22010__auto____0 = (function (){
var statearr_30439 = [null,null,null,null,null,null,null,null];
(statearr_30439[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__22010__auto__);

(statearr_30439[(1)] = (1));

return statearr_30439;
});
var figwheel$client$enforce_project_plugin_$_state_machine__22010__auto____1 = (function (state_30433){
while(true){
var ret_value__22011__auto__ = (function (){try{while(true){
var result__22012__auto__ = switch__22009__auto__.call(null,state_30433);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22012__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22012__auto__;
}
break;
}
}catch (e30440){if((e30440 instanceof Object)){
var ex__22013__auto__ = e30440;
var statearr_30441_30443 = state_30433;
(statearr_30441_30443[(5)] = ex__22013__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30433);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30440;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22011__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30444 = state_30433;
state_30433 = G__30444;
continue;
} else {
return ret_value__22011__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__22010__auto__ = function(state_30433){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__22010__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__22010__auto____1.call(this,state_30433);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_project_plugin_$_state_machine__22010__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__22010__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__22010__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__22010__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__22010__auto__;
})()
;})(switch__22009__auto__,c__22071__auto__))
})();
var state__22073__auto__ = (function (){var statearr_30442 = f__22072__auto__.call(null);
(statearr_30442[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22071__auto__);

return statearr_30442;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22073__auto__);
});})(c__22071__auto__))
);

return c__22071__auto__;
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.default_on_jsload = cljs.core.identity;
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__30445){
var map__30451 = p__30445;
var map__30451__$1 = ((cljs.core.seq_QMARK_.call(null,map__30451))?cljs.core.apply.call(null,cljs.core.hash_map,map__30451):map__30451);
var ed = map__30451__$1;
var cause = cljs.core.get.call(null,map__30451__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
var exception_data = cljs.core.get.call(null,map__30451__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var formatted_exception = cljs.core.get.call(null,map__30451__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: Compile Exception");

var seq__30452_30456 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));
var chunk__30453_30457 = null;
var count__30454_30458 = (0);
var i__30455_30459 = (0);
while(true){
if((i__30455_30459 < count__30454_30458)){
var msg_30460 = cljs.core._nth.call(null,chunk__30453_30457,i__30455_30459);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_30460);

var G__30461 = seq__30452_30456;
var G__30462 = chunk__30453_30457;
var G__30463 = count__30454_30458;
var G__30464 = (i__30455_30459 + (1));
seq__30452_30456 = G__30461;
chunk__30453_30457 = G__30462;
count__30454_30458 = G__30463;
i__30455_30459 = G__30464;
continue;
} else {
var temp__4126__auto___30465 = cljs.core.seq.call(null,seq__30452_30456);
if(temp__4126__auto___30465){
var seq__30452_30466__$1 = temp__4126__auto___30465;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30452_30466__$1)){
var c__18945__auto___30467 = cljs.core.chunk_first.call(null,seq__30452_30466__$1);
var G__30468 = cljs.core.chunk_rest.call(null,seq__30452_30466__$1);
var G__30469 = c__18945__auto___30467;
var G__30470 = cljs.core.count.call(null,c__18945__auto___30467);
var G__30471 = (0);
seq__30452_30456 = G__30468;
chunk__30453_30457 = G__30469;
count__30454_30458 = G__30470;
i__30455_30459 = G__30471;
continue;
} else {
var msg_30472 = cljs.core.first.call(null,seq__30452_30466__$1);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_30472);

var G__30473 = cljs.core.next.call(null,seq__30452_30466__$1);
var G__30474 = null;
var G__30475 = (0);
var G__30476 = (0);
seq__30452_30456 = G__30473;
chunk__30453_30457 = G__30474;
count__30454_30458 = G__30475;
i__30455_30459 = G__30476;
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
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__30477){
var map__30479 = p__30477;
var map__30479__$1 = ((cljs.core.seq_QMARK_.call(null,map__30479))?cljs.core.apply.call(null,cljs.core.hash_map,map__30479):map__30479);
var w = map__30479__$1;
var message = cljs.core.get.call(null,map__30479__$1,new cljs.core.Keyword(null,"message","message",-406056002));
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
var seq__30486 = cljs.core.seq.call(null,plugins);
var chunk__30487 = null;
var count__30488 = (0);
var i__30489 = (0);
while(true){
if((i__30489 < count__30488)){
var vec__30490 = cljs.core._nth.call(null,chunk__30487,i__30489);
var k = cljs.core.nth.call(null,vec__30490,(0),null);
var plugin = cljs.core.nth.call(null,vec__30490,(1),null);
if(cljs.core.truth_(plugin)){
var pl_30492 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__30486,chunk__30487,count__30488,i__30489,pl_30492,vec__30490,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_30492.call(null,msg_hist);
});})(seq__30486,chunk__30487,count__30488,i__30489,pl_30492,vec__30490,k,plugin))
);
} else {
}

var G__30493 = seq__30486;
var G__30494 = chunk__30487;
var G__30495 = count__30488;
var G__30496 = (i__30489 + (1));
seq__30486 = G__30493;
chunk__30487 = G__30494;
count__30488 = G__30495;
i__30489 = G__30496;
continue;
} else {
var temp__4126__auto__ = cljs.core.seq.call(null,seq__30486);
if(temp__4126__auto__){
var seq__30486__$1 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30486__$1)){
var c__18945__auto__ = cljs.core.chunk_first.call(null,seq__30486__$1);
var G__30497 = cljs.core.chunk_rest.call(null,seq__30486__$1);
var G__30498 = c__18945__auto__;
var G__30499 = cljs.core.count.call(null,c__18945__auto__);
var G__30500 = (0);
seq__30486 = G__30497;
chunk__30487 = G__30498;
count__30488 = G__30499;
i__30489 = G__30500;
continue;
} else {
var vec__30491 = cljs.core.first.call(null,seq__30486__$1);
var k = cljs.core.nth.call(null,vec__30491,(0),null);
var plugin = cljs.core.nth.call(null,vec__30491,(1),null);
if(cljs.core.truth_(plugin)){
var pl_30501 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__30486,chunk__30487,count__30488,i__30489,pl_30501,vec__30491,k,plugin,seq__30486__$1,temp__4126__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_30501.call(null,msg_hist);
});})(seq__30486,chunk__30487,count__30488,i__30489,pl_30501,vec__30491,k,plugin,seq__30486__$1,temp__4126__auto__))
);
} else {
}

var G__30502 = cljs.core.next.call(null,seq__30486__$1);
var G__30503 = null;
var G__30504 = (0);
var G__30505 = (0);
seq__30486 = G__30502;
chunk__30487 = G__30503;
count__30488 = G__30504;
i__30489 = G__30505;
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
var G__30507 = arguments.length;
switch (G__30507) {
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

figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__30510){
var map__30511 = p__30510;
var map__30511__$1 = ((cljs.core.seq_QMARK_.call(null,map__30511))?cljs.core.apply.call(null,cljs.core.hash_map,map__30511):map__30511);
var opts = map__30511__$1;
return figwheel.client.start.call(null,opts);
});

figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0);

figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq30509){
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq30509));
});

//# sourceMappingURL=client.js.map?rel=1441122552132