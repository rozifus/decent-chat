// Compiled by ClojureScript 0.0-3211 {}
goog.provide('figwheel.client.file_reloading');
goog.require('cljs.core');
goog.require('goog.Uri');
goog.require('goog.string');
goog.require('goog.net.jsloader');
goog.require('cljs.core.async');
goog.require('clojure.set');
goog.require('clojure.string');
goog.require('figwheel.client.utils');

figwheel.client.file_reloading.on_jsload_custom_event = (function figwheel$client$file_reloading$on_jsload_custom_event(url){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.js-reload",url);
});
figwheel.client.file_reloading.before_jsload_custom_event = (function figwheel$client$file_reloading$before_jsload_custom_event(files){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.before-js-reload",files);
});
figwheel.client.file_reloading.all_QMARK_ = (function figwheel$client$file_reloading$all_QMARK_(pred,coll){
return cljs.core.reduce.call(null,(function (p1__30928_SHARP_,p2__30929_SHARP_){
var and__18148__auto__ = p1__30928_SHARP_;
if(cljs.core.truth_(and__18148__auto__)){
return p2__30929_SHARP_;
} else {
return and__18148__auto__;
}
}),true,cljs.core.map.call(null,pred,coll));
});
figwheel.client.file_reloading.namespace_file_map_QMARK_ = (function figwheel$client$file_reloading$namespace_file_map_QMARK_(m){
var or__18160__auto__ = (cljs.core.map_QMARK_.call(null,m)) && (typeof new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(m) === 'string') && (typeof new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) === 'string') && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"namespace","namespace",-377510372)));
if(or__18160__auto__){
return or__18160__auto__;
} else {
cljs.core.println.call(null,"Error not namespace-file-map",cljs.core.pr_str.call(null,m));

return false;
}
});
figwheel.client.file_reloading.add_cache_buster = (function figwheel$client$file_reloading$add_cache_buster(url){

return goog.Uri.parse(url).makeUnique();
});
figwheel.client.file_reloading.ns_to_js_file = (function figwheel$client$file_reloading$ns_to_js_file(ns){

return [cljs.core.str(clojure.string.replace.call(null,ns,".","/")),cljs.core.str(".js")].join('');
});
figwheel.client.file_reloading.resolve_ns = (function figwheel$client$file_reloading$resolve_ns(ns){

return [cljs.core.str(figwheel.client.utils.base_url_path.call(null)),cljs.core.str(figwheel.client.file_reloading.ns_to_js_file.call(null,ns))].join('');
});
figwheel.client.file_reloading.patch_goog_base = (function figwheel$client$file_reloading$patch_goog_base(){
goog.isProvided = (function (x){
return false;
});

if(((cljs.core._STAR_loaded_libs_STAR_ == null)) || (cljs.core.empty_QMARK_.call(null,cljs.core._STAR_loaded_libs_STAR_))){
cljs.core._STAR_loaded_libs_STAR_ = (function (){var gntp = goog.dependencies_.nameToPath;
return cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,cljs.core.filter.call(null,((function (gntp){
return (function (name){
return (goog.dependencies_.visited[(gntp[name])]);
});})(gntp))
,cljs.core.js_keys.call(null,gntp)));
})();
} else {
}

goog.require = (function (name,reload){
if(cljs.core.truth_((function (){var or__18160__auto__ = !(cljs.core.contains_QMARK_.call(null,cljs.core._STAR_loaded_libs_STAR_,name));
if(or__18160__auto__){
return or__18160__auto__;
} else {
return reload;
}
})())){
cljs.core._STAR_loaded_libs_STAR_ = cljs.core.conj.call(null,(function (){var or__18160__auto__ = cljs.core._STAR_loaded_libs_STAR_;
if(cljs.core.truth_(or__18160__auto__)){
return or__18160__auto__;
} else {
return cljs.core.PersistentHashSet.EMPTY;
}
})(),name);

return figwheel.client.file_reloading.reload_file_STAR_.call(null,figwheel.client.file_reloading.resolve_ns.call(null,name));
} else {
return null;
}
});

goog.provide = goog.exportPath_;

return goog.global.CLOSURE_IMPORT_SCRIPT = figwheel.client.file_reloading.reload_file_STAR_;
});
if(typeof figwheel.client.file_reloading.resolve_url !== 'undefined'){
} else {
figwheel.client.file_reloading.resolve_url = (function (){var method_table__19055__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__19056__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__19057__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__19058__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__19059__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"figwheel.client.file-reloading","resolve-url"),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__19059__auto__,method_table__19055__auto__,prefer_table__19056__auto__,method_cache__19057__auto__,cached_hierarchy__19058__auto__));
})();
}
cljs.core._add_method.call(null,figwheel.client.file_reloading.resolve_url,new cljs.core.Keyword(null,"default","default",-1987822328),(function (p__30930){
var map__30931 = p__30930;
var map__30931__$1 = ((cljs.core.seq_QMARK_.call(null,map__30931))?cljs.core.apply.call(null,cljs.core.hash_map,map__30931):map__30931);
var file = cljs.core.get.call(null,map__30931__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
return file;
}));
cljs.core._add_method.call(null,figwheel.client.file_reloading.resolve_url,new cljs.core.Keyword(null,"namespace","namespace",-377510372),(function (p__30932){
var map__30933 = p__30932;
var map__30933__$1 = ((cljs.core.seq_QMARK_.call(null,map__30933))?cljs.core.apply.call(null,cljs.core.hash_map,map__30933):map__30933);
var namespace = cljs.core.get.call(null,map__30933__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

return figwheel.client.file_reloading.resolve_ns.call(null,namespace);
}));
if(typeof figwheel.client.file_reloading.reload_base !== 'undefined'){
} else {
figwheel.client.file_reloading.reload_base = (function (){var method_table__19055__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__19056__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__19057__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__19058__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__19059__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"figwheel.client.file-reloading","reload-base"),figwheel.client.utils.host_env_QMARK_,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__19059__auto__,method_table__19055__auto__,prefer_table__19056__auto__,method_cache__19057__auto__,cached_hierarchy__19058__auto__));
})();
}
cljs.core._add_method.call(null,figwheel.client.file_reloading.reload_base,new cljs.core.Keyword(null,"node","node",581201198),(function (request_url,callback){

var root = clojure.string.join.call(null,"/",cljs.core.reverse.call(null,cljs.core.drop.call(null,(2),cljs.core.reverse.call(null,clojure.string.split.call(null,__dirname,"/")))));
var path = [cljs.core.str(root),cljs.core.str("/"),cljs.core.str(request_url)].join('');
(require.cache[path] = null);

return callback.call(null,(function (){try{return require(path);
}catch (e30934){if((e30934 instanceof Error)){
var e = e30934;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e30934;

}
}})());
}));
cljs.core._add_method.call(null,figwheel.client.file_reloading.reload_base,new cljs.core.Keyword(null,"html","html",-998796897),(function (request_url,callback){

var deferred = goog.net.jsloader.load(figwheel.client.file_reloading.add_cache_buster.call(null,request_url),{"cleanupWhenDone": true});
deferred.addCallback(((function (deferred){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
});})(deferred))
);

return deferred.addErrback(((function (deferred){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
});})(deferred))
);
}));
figwheel.client.file_reloading.reload_file_STAR_ = (function figwheel$client$file_reloading$reload_file_STAR_(){
var G__30936 = arguments.length;
switch (G__30936) {
case 2:
return figwheel.client.file_reloading.reload_file_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return figwheel.client.file_reloading.reload_file_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

figwheel.client.file_reloading.reload_file_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (request_url,callback){
return figwheel.client.file_reloading.reload_base.call(null,request_url,callback);
});

figwheel.client.file_reloading.reload_file_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (request_url){
return figwheel.client.file_reloading.reload_file_STAR_.call(null,request_url,cljs.core.identity);
});

figwheel.client.file_reloading.reload_file_STAR_.cljs$lang$maxFixedArity = 2;
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__30938,callback){
var map__30940 = p__30938;
var map__30940__$1 = ((cljs.core.seq_QMARK_.call(null,map__30940))?cljs.core.apply.call(null,cljs.core.hash_map,map__30940):map__30940);
var file_msg = map__30940__$1;
var request_url = cljs.core.get.call(null,map__30940__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Attempting to load "),cljs.core.str(request_url)].join(''));

return figwheel.client.file_reloading.reload_file_STAR_.call(null,request_url,((function (map__30940,map__30940__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Successfullly loaded "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__30940,map__30940__$1,file_msg,request_url))
);
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__30941){
var map__30943 = p__30941;
var map__30943__$1 = ((cljs.core.seq_QMARK_.call(null,map__30943))?cljs.core.apply.call(null,cljs.core.hash_map,map__30943):map__30943);
var file_msg = map__30943__$1;
var meta_data = cljs.core.get.call(null,map__30943__$1,new cljs.core.Keyword(null,"meta-data","meta-data",-1613399157));
var namespace = cljs.core.get.call(null,map__30943__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

var meta_data__$1 = (function (){var or__18160__auto__ = meta_data;
if(cljs.core.truth_(or__18160__auto__)){
return or__18160__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
var and__18148__auto__ = cljs.core.not.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_data__$1));
if(and__18148__auto__){
var or__18160__auto__ = new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(meta_data__$1);
if(cljs.core.truth_(or__18160__auto__)){
return or__18160__auto__;
} else {
var or__18160__auto____$1 = new cljs.core.Keyword(null,"figwheel-load","figwheel-load",1316089175).cljs$core$IFn$_invoke$arity$1(meta_data__$1);
if(cljs.core.truth_(or__18160__auto____$1)){
return or__18160__auto____$1;
} else {
var and__18148__auto____$1 = cljs.core.contains_QMARK_.call(null,cljs.core._STAR_loaded_libs_STAR_,namespace);
if(and__18148__auto____$1){
var or__18160__auto____$2 = !(cljs.core.contains_QMARK_.call(null,meta_data__$1,new cljs.core.Keyword(null,"file-changed-on-disk","file-changed-on-disk",1086171932)));
if(or__18160__auto____$2){
return or__18160__auto____$2;
} else {
return new cljs.core.Keyword(null,"file-changed-on-disk","file-changed-on-disk",1086171932).cljs$core$IFn$_invoke$arity$1(meta_data__$1);
}
} else {
return and__18148__auto____$1;
}
}
}
} else {
return and__18148__auto__;
}
});
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__30944,callback){
var map__30946 = p__30944;
var map__30946__$1 = ((cljs.core.seq_QMARK_.call(null,map__30946))?cljs.core.apply.call(null,cljs.core.hash_map,map__30946):map__30946);
var file_msg = map__30946__$1;
var namespace = cljs.core.get.call(null,map__30946__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = cljs.core.get.call(null,map__30946__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

if(cljs.core.truth_(figwheel.client.file_reloading.reload_file_QMARK_.call(null,file_msg))){
return figwheel.client.file_reloading.reload_file.call(null,file_msg,callback);
} else {
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("Figwheel: Not trying to load file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});
figwheel.client.file_reloading.reload_js_file = (function figwheel$client$file_reloading$reload_js_file(file_msg){
var out = cljs.core.async.chan.call(null);
setTimeout(((function (out){
return (function (){
return figwheel.client.file_reloading.js_reload.call(null,file_msg,((function (out){
return (function (url){
figwheel.client.file_reloading.patch_goog_base.call(null);

cljs.core.async.put_BANG_.call(null,out,url);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);
});})(out))
,(0));

return out;
});
/**
 * Returns a chanel with one collection of loaded filenames on it.
 */
figwheel.client.file_reloading.load_all_js_files = (function figwheel$client$file_reloading$load_all_js_files(files){
var out = cljs.core.async.chan.call(null);
var c__22071__auto___31033 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22071__auto___31033,out){
return (function (){
var f__22072__auto__ = (function (){var switch__22009__auto__ = ((function (c__22071__auto___31033,out){
return (function (state_31015){
var state_val_31016 = (state_31015[(1)]);
if((state_val_31016 === (7))){
var inst_30999 = (state_31015[(7)]);
var inst_31005 = (state_31015[(2)]);
var inst_31006 = cljs.core.async.put_BANG_.call(null,out,inst_31005);
var inst_30995 = inst_30999;
var state_31015__$1 = (function (){var statearr_31017 = state_31015;
(statearr_31017[(8)] = inst_31006);

(statearr_31017[(9)] = inst_30995);

return statearr_31017;
})();
var statearr_31018_31034 = state_31015__$1;
(statearr_31018_31034[(2)] = null);

(statearr_31018_31034[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31016 === (6))){
var inst_31011 = (state_31015[(2)]);
var state_31015__$1 = state_31015;
var statearr_31019_31035 = state_31015__$1;
(statearr_31019_31035[(2)] = inst_31011);

(statearr_31019_31035[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31016 === (5))){
var inst_31009 = cljs.core.async.close_BANG_.call(null,out);
var state_31015__$1 = state_31015;
var statearr_31020_31036 = state_31015__$1;
(statearr_31020_31036[(2)] = inst_31009);

(statearr_31020_31036[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31016 === (4))){
var inst_30998 = (state_31015[(10)]);
var inst_31003 = figwheel.client.file_reloading.reload_js_file.call(null,inst_30998);
var state_31015__$1 = state_31015;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31015__$1,(7),inst_31003);
} else {
if((state_val_31016 === (3))){
var inst_31013 = (state_31015[(2)]);
var state_31015__$1 = state_31015;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31015__$1,inst_31013);
} else {
if((state_val_31016 === (2))){
var inst_30998 = (state_31015[(10)]);
var inst_30995 = (state_31015[(9)]);
var inst_30998__$1 = cljs.core.nth.call(null,inst_30995,(0),null);
var inst_30999 = cljs.core.nthnext.call(null,inst_30995,(1));
var inst_31000 = (inst_30998__$1 == null);
var inst_31001 = cljs.core.not.call(null,inst_31000);
var state_31015__$1 = (function (){var statearr_31021 = state_31015;
(statearr_31021[(10)] = inst_30998__$1);

(statearr_31021[(7)] = inst_30999);

return statearr_31021;
})();
if(inst_31001){
var statearr_31022_31037 = state_31015__$1;
(statearr_31022_31037[(1)] = (4));

} else {
var statearr_31023_31038 = state_31015__$1;
(statearr_31023_31038[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31016 === (1))){
var inst_30993 = cljs.core.nth.call(null,files,(0),null);
var inst_30994 = cljs.core.nthnext.call(null,files,(1));
var inst_30995 = files;
var state_31015__$1 = (function (){var statearr_31024 = state_31015;
(statearr_31024[(11)] = inst_30994);

(statearr_31024[(9)] = inst_30995);

(statearr_31024[(12)] = inst_30993);

return statearr_31024;
})();
var statearr_31025_31039 = state_31015__$1;
(statearr_31025_31039[(2)] = null);

(statearr_31025_31039[(1)] = (2));


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
});})(c__22071__auto___31033,out))
;
return ((function (switch__22009__auto__,c__22071__auto___31033,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__22010__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__22010__auto____0 = (function (){
var statearr_31029 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31029[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__22010__auto__);

(statearr_31029[(1)] = (1));

return statearr_31029;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__22010__auto____1 = (function (state_31015){
while(true){
var ret_value__22011__auto__ = (function (){try{while(true){
var result__22012__auto__ = switch__22009__auto__.call(null,state_31015);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22012__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22012__auto__;
}
break;
}
}catch (e31030){if((e31030 instanceof Object)){
var ex__22013__auto__ = e31030;
var statearr_31031_31040 = state_31015;
(statearr_31031_31040[(5)] = ex__22013__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31015);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31030;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22011__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31041 = state_31015;
state_31015 = G__31041;
continue;
} else {
return ret_value__22011__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__22010__auto__ = function(state_31015){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__22010__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__22010__auto____1.call(this,state_31015);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__22010__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__22010__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__22010__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__22010__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__22010__auto__;
})()
;})(switch__22009__auto__,c__22071__auto___31033,out))
})();
var state__22073__auto__ = (function (){var statearr_31032 = f__22072__auto__.call(null);
(statearr_31032[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22071__auto___31033);

return statearr_31032;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22073__auto__);
});})(c__22071__auto___31033,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.add_request_url = (function figwheel$client$file_reloading$add_request_url(p__31042,p__31043){
var map__31046 = p__31042;
var map__31046__$1 = ((cljs.core.seq_QMARK_.call(null,map__31046))?cljs.core.apply.call(null,cljs.core.hash_map,map__31046):map__31046);
var opts = map__31046__$1;
var url_rewriter = cljs.core.get.call(null,map__31046__$1,new cljs.core.Keyword(null,"url-rewriter","url-rewriter",200543838));
var map__31047 = p__31043;
var map__31047__$1 = ((cljs.core.seq_QMARK_.call(null,map__31047))?cljs.core.apply.call(null,cljs.core.hash_map,map__31047):map__31047);
var file_msg = map__31047__$1;
var file = cljs.core.get.call(null,map__31047__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var resolved_path = figwheel.client.file_reloading.resolve_url.call(null,file_msg);
return cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"request-url","request-url",2100346596),(cljs.core.truth_(url_rewriter)?url_rewriter.call(null,resolved_path):resolved_path));
});
figwheel.client.file_reloading.add_request_urls = (function figwheel$client$file_reloading$add_request_urls(opts,files){
return cljs.core.map.call(null,cljs.core.partial.call(null,figwheel.client.file_reloading.add_request_url,opts),files);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__31048){
var map__31051 = p__31048;
var map__31051__$1 = ((cljs.core.seq_QMARK_.call(null,map__31051))?cljs.core.apply.call(null,cljs.core.hash_map,map__31051):map__31051);
var file = cljs.core.get.call(null,map__31051__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var eval_body__$1 = cljs.core.get.call(null,map__31051__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
if(cljs.core.truth_((function (){var and__18148__auto__ = eval_body__$1;
if(cljs.core.truth_(and__18148__auto__)){
return typeof eval_body__$1 === 'string';
} else {
return and__18148__auto__;
}
})())){
var code = eval_body__$1;
try{figwheel.client.utils.debug_prn.call(null,[cljs.core.str("Evaling file "),cljs.core.str(file)].join(''));

return eval(code);
}catch (e31052){var e = e31052;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Unable to evaluate "),cljs.core.str(file)].join(''));
}} else {
return null;
}
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__31057,p__31058){
var map__31260 = p__31057;
var map__31260__$1 = ((cljs.core.seq_QMARK_.call(null,map__31260))?cljs.core.apply.call(null,cljs.core.hash_map,map__31260):map__31260);
var opts = map__31260__$1;
var load_unchanged_files = cljs.core.get.call(null,map__31260__$1,new cljs.core.Keyword(null,"load-unchanged-files","load-unchanged-files",-1561468704));
var on_jsload = cljs.core.get.call(null,map__31260__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var before_jsload = cljs.core.get.call(null,map__31260__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var map__31261 = p__31058;
var map__31261__$1 = ((cljs.core.seq_QMARK_.call(null,map__31261))?cljs.core.apply.call(null,cljs.core.hash_map,map__31261):map__31261);
var msg = map__31261__$1;
var files = cljs.core.get.call(null,map__31261__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var c__22071__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22071__auto__,map__31260,map__31260__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__31261,map__31261__$1,msg,files){
return (function (){
var f__22072__auto__ = (function (){var switch__22009__auto__ = ((function (c__22071__auto__,map__31260,map__31260__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__31261,map__31261__$1,msg,files){
return (function (state_31386){
var state_val_31387 = (state_31386[(1)]);
if((state_val_31387 === (7))){
var inst_31274 = (state_31386[(7)]);
var inst_31276 = (state_31386[(8)]);
var inst_31273 = (state_31386[(9)]);
var inst_31275 = (state_31386[(10)]);
var inst_31281 = cljs.core._nth.call(null,inst_31274,inst_31276);
var inst_31282 = figwheel.client.file_reloading.eval_body.call(null,inst_31281);
var inst_31283 = (inst_31276 + (1));
var tmp31388 = inst_31274;
var tmp31389 = inst_31273;
var tmp31390 = inst_31275;
var inst_31273__$1 = tmp31389;
var inst_31274__$1 = tmp31388;
var inst_31275__$1 = tmp31390;
var inst_31276__$1 = inst_31283;
var state_31386__$1 = (function (){var statearr_31391 = state_31386;
(statearr_31391[(7)] = inst_31274__$1);

(statearr_31391[(8)] = inst_31276__$1);

(statearr_31391[(11)] = inst_31282);

(statearr_31391[(9)] = inst_31273__$1);

(statearr_31391[(10)] = inst_31275__$1);

return statearr_31391;
})();
var statearr_31392_31461 = state_31386__$1;
(statearr_31392_31461[(2)] = null);

(statearr_31392_31461[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31387 === (20))){
var inst_31322 = (state_31386[(12)]);
var inst_31323 = (state_31386[(13)]);
var inst_31318 = (state_31386[(14)]);
var inst_31319 = (state_31386[(15)]);
var inst_31325 = (state_31386[(16)]);
var inst_31328 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_31330 = (function (){var files_not_loaded = inst_31325;
var res = inst_31323;
var res_SINGLEQUOTE_ = inst_31322;
var files_SINGLEQUOTE_ = inst_31319;
var all_files = inst_31318;
return ((function (files_not_loaded,res,res_SINGLEQUOTE_,files_SINGLEQUOTE_,all_files,inst_31322,inst_31323,inst_31318,inst_31319,inst_31325,inst_31328,state_val_31387,c__22071__auto__,map__31260,map__31260__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__31261,map__31261__$1,msg,files){
return (function (p__31329){
var map__31393 = p__31329;
var map__31393__$1 = ((cljs.core.seq_QMARK_.call(null,map__31393))?cljs.core.apply.call(null,cljs.core.hash_map,map__31393):map__31393);
var file = cljs.core.get.call(null,map__31393__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var namespace = cljs.core.get.call(null,map__31393__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.ns_to_js_file.call(null,namespace);
} else {
return file;
}
});
;})(files_not_loaded,res,res_SINGLEQUOTE_,files_SINGLEQUOTE_,all_files,inst_31322,inst_31323,inst_31318,inst_31319,inst_31325,inst_31328,state_val_31387,c__22071__auto__,map__31260,map__31260__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__31261,map__31261__$1,msg,files))
})();
var inst_31331 = cljs.core.map.call(null,inst_31330,inst_31323);
var inst_31332 = cljs.core.pr_str.call(null,inst_31331);
var inst_31333 = figwheel.client.utils.log.call(null,inst_31332);
var inst_31334 = (function (){var files_not_loaded = inst_31325;
var res = inst_31323;
var res_SINGLEQUOTE_ = inst_31322;
var files_SINGLEQUOTE_ = inst_31319;
var all_files = inst_31318;
return ((function (files_not_loaded,res,res_SINGLEQUOTE_,files_SINGLEQUOTE_,all_files,inst_31322,inst_31323,inst_31318,inst_31319,inst_31325,inst_31328,inst_31330,inst_31331,inst_31332,inst_31333,state_val_31387,c__22071__auto__,map__31260,map__31260__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__31261,map__31261__$1,msg,files){
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(files_not_loaded,res,res_SINGLEQUOTE_,files_SINGLEQUOTE_,all_files,inst_31322,inst_31323,inst_31318,inst_31319,inst_31325,inst_31328,inst_31330,inst_31331,inst_31332,inst_31333,state_val_31387,c__22071__auto__,map__31260,map__31260__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__31261,map__31261__$1,msg,files))
})();
var inst_31335 = setTimeout(inst_31334,(10));
var state_31386__$1 = (function (){var statearr_31394 = state_31386;
(statearr_31394[(17)] = inst_31328);

(statearr_31394[(18)] = inst_31333);

return statearr_31394;
})();
var statearr_31395_31462 = state_31386__$1;
(statearr_31395_31462[(2)] = inst_31335);

(statearr_31395_31462[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31387 === (27))){
var inst_31345 = (state_31386[(19)]);
var state_31386__$1 = state_31386;
var statearr_31396_31463 = state_31386__$1;
(statearr_31396_31463[(2)] = inst_31345);

(statearr_31396_31463[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31387 === (1))){
var inst_31265 = (state_31386[(20)]);
var inst_31262 = before_jsload.call(null,files);
var inst_31263 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_31264 = (function (){return ((function (inst_31265,inst_31262,inst_31263,state_val_31387,c__22071__auto__,map__31260,map__31260__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__31261,map__31261__$1,msg,files){
return (function (p1__31053_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__31053_SHARP_);
});
;})(inst_31265,inst_31262,inst_31263,state_val_31387,c__22071__auto__,map__31260,map__31260__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__31261,map__31261__$1,msg,files))
})();
var inst_31265__$1 = cljs.core.filter.call(null,inst_31264,files);
var inst_31266 = cljs.core.not_empty.call(null,inst_31265__$1);
var state_31386__$1 = (function (){var statearr_31397 = state_31386;
(statearr_31397[(20)] = inst_31265__$1);

(statearr_31397[(21)] = inst_31263);

(statearr_31397[(22)] = inst_31262);

return statearr_31397;
})();
if(cljs.core.truth_(inst_31266)){
var statearr_31398_31464 = state_31386__$1;
(statearr_31398_31464[(1)] = (2));

} else {
var statearr_31399_31465 = state_31386__$1;
(statearr_31399_31465[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31387 === (24))){
var state_31386__$1 = state_31386;
var statearr_31400_31466 = state_31386__$1;
(statearr_31400_31466[(2)] = null);

(statearr_31400_31466[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31387 === (4))){
var inst_31310 = (state_31386[(2)]);
var inst_31311 = (function (){return ((function (inst_31310,state_val_31387,c__22071__auto__,map__31260,map__31260__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__31261,map__31261__$1,msg,files){
return (function (p1__31054_SHARP_){
var and__18148__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__31054_SHARP_);
if(cljs.core.truth_(and__18148__auto__)){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__31054_SHARP_));
} else {
return and__18148__auto__;
}
});
;})(inst_31310,state_val_31387,c__22071__auto__,map__31260,map__31260__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__31261,map__31261__$1,msg,files))
})();
var inst_31312 = cljs.core.filter.call(null,inst_31311,files);
var state_31386__$1 = (function (){var statearr_31401 = state_31386;
(statearr_31401[(23)] = inst_31310);

(statearr_31401[(24)] = inst_31312);

return statearr_31401;
})();
if(cljs.core.truth_(load_unchanged_files)){
var statearr_31402_31467 = state_31386__$1;
(statearr_31402_31467[(1)] = (16));

} else {
var statearr_31403_31468 = state_31386__$1;
(statearr_31403_31468[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31387 === (15))){
var inst_31300 = (state_31386[(2)]);
var state_31386__$1 = state_31386;
var statearr_31404_31469 = state_31386__$1;
(statearr_31404_31469[(2)] = inst_31300);

(statearr_31404_31469[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31387 === (21))){
var state_31386__$1 = state_31386;
var statearr_31405_31470 = state_31386__$1;
(statearr_31405_31470[(2)] = null);

(statearr_31405_31470[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31387 === (31))){
var inst_31353 = (state_31386[(25)]);
var inst_31363 = (state_31386[(2)]);
var inst_31364 = cljs.core.not_empty.call(null,inst_31353);
var state_31386__$1 = (function (){var statearr_31406 = state_31386;
(statearr_31406[(26)] = inst_31363);

return statearr_31406;
})();
if(cljs.core.truth_(inst_31364)){
var statearr_31407_31471 = state_31386__$1;
(statearr_31407_31471[(1)] = (32));

} else {
var statearr_31408_31472 = state_31386__$1;
(statearr_31408_31472[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31387 === (32))){
var inst_31353 = (state_31386[(25)]);
var inst_31366 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_31353);
var inst_31367 = cljs.core.pr_str.call(null,inst_31366);
var inst_31368 = [cljs.core.str("file didn't change: "),cljs.core.str(inst_31367)].join('');
var inst_31369 = figwheel.client.utils.log.call(null,inst_31368);
var state_31386__$1 = state_31386;
var statearr_31409_31473 = state_31386__$1;
(statearr_31409_31473[(2)] = inst_31369);

(statearr_31409_31473[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31387 === (33))){
var state_31386__$1 = state_31386;
var statearr_31410_31474 = state_31386__$1;
(statearr_31410_31474[(2)] = null);

(statearr_31410_31474[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31387 === (13))){
var inst_31286 = (state_31386[(27)]);
var inst_31290 = cljs.core.chunk_first.call(null,inst_31286);
var inst_31291 = cljs.core.chunk_rest.call(null,inst_31286);
var inst_31292 = cljs.core.count.call(null,inst_31290);
var inst_31273 = inst_31291;
var inst_31274 = inst_31290;
var inst_31275 = inst_31292;
var inst_31276 = (0);
var state_31386__$1 = (function (){var statearr_31411 = state_31386;
(statearr_31411[(7)] = inst_31274);

(statearr_31411[(8)] = inst_31276);

(statearr_31411[(9)] = inst_31273);

(statearr_31411[(10)] = inst_31275);

return statearr_31411;
})();
var statearr_31412_31475 = state_31386__$1;
(statearr_31412_31475[(2)] = null);

(statearr_31412_31475[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31387 === (22))){
var inst_31325 = (state_31386[(16)]);
var inst_31338 = (state_31386[(2)]);
var inst_31339 = cljs.core.not_empty.call(null,inst_31325);
var state_31386__$1 = (function (){var statearr_31413 = state_31386;
(statearr_31413[(28)] = inst_31338);

return statearr_31413;
})();
if(cljs.core.truth_(inst_31339)){
var statearr_31414_31476 = state_31386__$1;
(statearr_31414_31476[(1)] = (23));

} else {
var statearr_31415_31477 = state_31386__$1;
(statearr_31415_31477[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31387 === (36))){
var state_31386__$1 = state_31386;
var statearr_31416_31478 = state_31386__$1;
(statearr_31416_31478[(2)] = null);

(statearr_31416_31478[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31387 === (29))){
var inst_31354 = (state_31386[(29)]);
var inst_31357 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_31354);
var inst_31358 = cljs.core.pr_str.call(null,inst_31357);
var inst_31359 = [cljs.core.str("figwheel-no-load meta-data: "),cljs.core.str(inst_31358)].join('');
var inst_31360 = figwheel.client.utils.log.call(null,inst_31359);
var state_31386__$1 = state_31386;
var statearr_31417_31479 = state_31386__$1;
(statearr_31417_31479[(2)] = inst_31360);

(statearr_31417_31479[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31387 === (6))){
var inst_31307 = (state_31386[(2)]);
var state_31386__$1 = state_31386;
var statearr_31418_31480 = state_31386__$1;
(statearr_31418_31480[(2)] = inst_31307);

(statearr_31418_31480[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31387 === (28))){
var inst_31354 = (state_31386[(29)]);
var inst_31351 = (state_31386[(2)]);
var inst_31352 = cljs.core.get.call(null,inst_31351,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_31353 = cljs.core.get.call(null,inst_31351,new cljs.core.Keyword(null,"file-changed-on-disk","file-changed-on-disk",1086171932));
var inst_31354__$1 = cljs.core.get.call(null,inst_31351,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_31355 = cljs.core.not_empty.call(null,inst_31354__$1);
var state_31386__$1 = (function (){var statearr_31419 = state_31386;
(statearr_31419[(30)] = inst_31352);

(statearr_31419[(25)] = inst_31353);

(statearr_31419[(29)] = inst_31354__$1);

return statearr_31419;
})();
if(cljs.core.truth_(inst_31355)){
var statearr_31420_31481 = state_31386__$1;
(statearr_31420_31481[(1)] = (29));

} else {
var statearr_31421_31482 = state_31386__$1;
(statearr_31421_31482[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31387 === (25))){
var inst_31384 = (state_31386[(2)]);
var state_31386__$1 = state_31386;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31386__$1,inst_31384);
} else {
if((state_val_31387 === (34))){
var inst_31352 = (state_31386[(30)]);
var inst_31372 = (state_31386[(2)]);
var inst_31373 = cljs.core.not_empty.call(null,inst_31352);
var state_31386__$1 = (function (){var statearr_31422 = state_31386;
(statearr_31422[(31)] = inst_31372);

return statearr_31422;
})();
if(cljs.core.truth_(inst_31373)){
var statearr_31423_31483 = state_31386__$1;
(statearr_31423_31483[(1)] = (35));

} else {
var statearr_31424_31484 = state_31386__$1;
(statearr_31424_31484[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31387 === (17))){
var inst_31312 = (state_31386[(24)]);
var state_31386__$1 = state_31386;
var statearr_31425_31485 = state_31386__$1;
(statearr_31425_31485[(2)] = inst_31312);

(statearr_31425_31485[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31387 === (3))){
var state_31386__$1 = state_31386;
var statearr_31426_31486 = state_31386__$1;
(statearr_31426_31486[(2)] = null);

(statearr_31426_31486[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31387 === (12))){
var inst_31303 = (state_31386[(2)]);
var state_31386__$1 = state_31386;
var statearr_31427_31487 = state_31386__$1;
(statearr_31427_31487[(2)] = inst_31303);

(statearr_31427_31487[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31387 === (2))){
var inst_31265 = (state_31386[(20)]);
var inst_31272 = cljs.core.seq.call(null,inst_31265);
var inst_31273 = inst_31272;
var inst_31274 = null;
var inst_31275 = (0);
var inst_31276 = (0);
var state_31386__$1 = (function (){var statearr_31428 = state_31386;
(statearr_31428[(7)] = inst_31274);

(statearr_31428[(8)] = inst_31276);

(statearr_31428[(9)] = inst_31273);

(statearr_31428[(10)] = inst_31275);

return statearr_31428;
})();
var statearr_31429_31488 = state_31386__$1;
(statearr_31429_31488[(2)] = null);

(statearr_31429_31488[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31387 === (23))){
var inst_31345 = (state_31386[(19)]);
var inst_31322 = (state_31386[(12)]);
var inst_31323 = (state_31386[(13)]);
var inst_31318 = (state_31386[(14)]);
var inst_31319 = (state_31386[(15)]);
var inst_31325 = (state_31386[(16)]);
var inst_31341 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_31344 = (function (){var files_not_loaded = inst_31325;
var res = inst_31323;
var res_SINGLEQUOTE_ = inst_31322;
var files_SINGLEQUOTE_ = inst_31319;
var all_files = inst_31318;
return ((function (files_not_loaded,res,res_SINGLEQUOTE_,files_SINGLEQUOTE_,all_files,inst_31345,inst_31322,inst_31323,inst_31318,inst_31319,inst_31325,inst_31341,state_val_31387,c__22071__auto__,map__31260,map__31260__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__31261,map__31261__$1,msg,files){
return (function (p__31343){
var map__31430 = p__31343;
var map__31430__$1 = ((cljs.core.seq_QMARK_.call(null,map__31430))?cljs.core.apply.call(null,cljs.core.hash_map,map__31430):map__31430);
var meta_data = cljs.core.get.call(null,map__31430__$1,new cljs.core.Keyword(null,"meta-data","meta-data",-1613399157));
if((meta_data == null)){
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);
} else {
if(cljs.core.contains_QMARK_.call(null,meta_data,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179))){
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179);
} else {
if((cljs.core.contains_QMARK_.call(null,meta_data,new cljs.core.Keyword(null,"file-changed-on-disk","file-changed-on-disk",1086171932))) && (cljs.core.not.call(null,new cljs.core.Keyword(null,"file-changed-on-disk","file-changed-on-disk",1086171932).cljs$core$IFn$_invoke$arity$1(meta_data)))){
return new cljs.core.Keyword(null,"file-changed-on-disk","file-changed-on-disk",1086171932);
} else {
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);

}
}
}
});
;})(files_not_loaded,res,res_SINGLEQUOTE_,files_SINGLEQUOTE_,all_files,inst_31345,inst_31322,inst_31323,inst_31318,inst_31319,inst_31325,inst_31341,state_val_31387,c__22071__auto__,map__31260,map__31260__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__31261,map__31261__$1,msg,files))
})();
var inst_31345__$1 = cljs.core.group_by.call(null,inst_31344,inst_31325);
var inst_31346 = cljs.core.seq_QMARK_.call(null,inst_31345__$1);
var state_31386__$1 = (function (){var statearr_31431 = state_31386;
(statearr_31431[(19)] = inst_31345__$1);

(statearr_31431[(32)] = inst_31341);

return statearr_31431;
})();
if(inst_31346){
var statearr_31432_31489 = state_31386__$1;
(statearr_31432_31489[(1)] = (26));

} else {
var statearr_31433_31490 = state_31386__$1;
(statearr_31433_31490[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31387 === (35))){
var inst_31352 = (state_31386[(30)]);
var inst_31375 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_31352);
var inst_31376 = cljs.core.pr_str.call(null,inst_31375);
var inst_31377 = [cljs.core.str("not required: "),cljs.core.str(inst_31376)].join('');
var inst_31378 = figwheel.client.utils.log.call(null,inst_31377);
var state_31386__$1 = state_31386;
var statearr_31434_31491 = state_31386__$1;
(statearr_31434_31491[(2)] = inst_31378);

(statearr_31434_31491[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31387 === (19))){
var inst_31322 = (state_31386[(12)]);
var inst_31323 = (state_31386[(13)]);
var inst_31318 = (state_31386[(14)]);
var inst_31319 = (state_31386[(15)]);
var inst_31322__$1 = (state_31386[(2)]);
var inst_31323__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_31322__$1);
var inst_31324 = (function (){var res = inst_31323__$1;
var res_SINGLEQUOTE_ = inst_31322__$1;
var files_SINGLEQUOTE_ = inst_31319;
var all_files = inst_31318;
return ((function (res,res_SINGLEQUOTE_,files_SINGLEQUOTE_,all_files,inst_31322,inst_31323,inst_31318,inst_31319,inst_31322__$1,inst_31323__$1,state_val_31387,c__22071__auto__,map__31260,map__31260__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__31261,map__31261__$1,msg,files){
return (function (p1__31056_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__31056_SHARP_));
});
;})(res,res_SINGLEQUOTE_,files_SINGLEQUOTE_,all_files,inst_31322,inst_31323,inst_31318,inst_31319,inst_31322__$1,inst_31323__$1,state_val_31387,c__22071__auto__,map__31260,map__31260__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__31261,map__31261__$1,msg,files))
})();
var inst_31325 = cljs.core.filter.call(null,inst_31324,inst_31322__$1);
var inst_31326 = cljs.core.not_empty.call(null,inst_31323__$1);
var state_31386__$1 = (function (){var statearr_31435 = state_31386;
(statearr_31435[(12)] = inst_31322__$1);

(statearr_31435[(13)] = inst_31323__$1);

(statearr_31435[(16)] = inst_31325);

return statearr_31435;
})();
if(cljs.core.truth_(inst_31326)){
var statearr_31436_31492 = state_31386__$1;
(statearr_31436_31492[(1)] = (20));

} else {
var statearr_31437_31493 = state_31386__$1;
(statearr_31437_31493[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31387 === (11))){
var state_31386__$1 = state_31386;
var statearr_31438_31494 = state_31386__$1;
(statearr_31438_31494[(2)] = null);

(statearr_31438_31494[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31387 === (9))){
var inst_31305 = (state_31386[(2)]);
var state_31386__$1 = state_31386;
var statearr_31439_31495 = state_31386__$1;
(statearr_31439_31495[(2)] = inst_31305);

(statearr_31439_31495[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31387 === (5))){
var inst_31276 = (state_31386[(8)]);
var inst_31275 = (state_31386[(10)]);
var inst_31278 = (inst_31276 < inst_31275);
var inst_31279 = inst_31278;
var state_31386__$1 = state_31386;
if(cljs.core.truth_(inst_31279)){
var statearr_31440_31496 = state_31386__$1;
(statearr_31440_31496[(1)] = (7));

} else {
var statearr_31441_31497 = state_31386__$1;
(statearr_31441_31497[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31387 === (14))){
var inst_31286 = (state_31386[(27)]);
var inst_31295 = cljs.core.first.call(null,inst_31286);
var inst_31296 = figwheel.client.file_reloading.eval_body.call(null,inst_31295);
var inst_31297 = cljs.core.next.call(null,inst_31286);
var inst_31273 = inst_31297;
var inst_31274 = null;
var inst_31275 = (0);
var inst_31276 = (0);
var state_31386__$1 = (function (){var statearr_31442 = state_31386;
(statearr_31442[(33)] = inst_31296);

(statearr_31442[(7)] = inst_31274);

(statearr_31442[(8)] = inst_31276);

(statearr_31442[(9)] = inst_31273);

(statearr_31442[(10)] = inst_31275);

return statearr_31442;
})();
var statearr_31443_31498 = state_31386__$1;
(statearr_31443_31498[(2)] = null);

(statearr_31443_31498[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31387 === (26))){
var inst_31345 = (state_31386[(19)]);
var inst_31348 = cljs.core.apply.call(null,cljs.core.hash_map,inst_31345);
var state_31386__$1 = state_31386;
var statearr_31444_31499 = state_31386__$1;
(statearr_31444_31499[(2)] = inst_31348);

(statearr_31444_31499[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31387 === (16))){
var inst_31312 = (state_31386[(24)]);
var inst_31314 = (function (){var all_files = inst_31312;
return ((function (all_files,inst_31312,state_val_31387,c__22071__auto__,map__31260,map__31260__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__31261,map__31261__$1,msg,files){
return (function (p1__31055_SHARP_){
return cljs.core.update_in.call(null,p1__31055_SHARP_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"meta-data","meta-data",-1613399157)], null),cljs.core.dissoc,new cljs.core.Keyword(null,"file-changed-on-disk","file-changed-on-disk",1086171932));
});
;})(all_files,inst_31312,state_val_31387,c__22071__auto__,map__31260,map__31260__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__31261,map__31261__$1,msg,files))
})();
var inst_31315 = cljs.core.map.call(null,inst_31314,inst_31312);
var state_31386__$1 = state_31386;
var statearr_31445_31500 = state_31386__$1;
(statearr_31445_31500[(2)] = inst_31315);

(statearr_31445_31500[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31387 === (30))){
var state_31386__$1 = state_31386;
var statearr_31446_31501 = state_31386__$1;
(statearr_31446_31501[(2)] = null);

(statearr_31446_31501[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31387 === (10))){
var inst_31286 = (state_31386[(27)]);
var inst_31288 = cljs.core.chunked_seq_QMARK_.call(null,inst_31286);
var state_31386__$1 = state_31386;
if(inst_31288){
var statearr_31447_31502 = state_31386__$1;
(statearr_31447_31502[(1)] = (13));

} else {
var statearr_31448_31503 = state_31386__$1;
(statearr_31448_31503[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31387 === (18))){
var inst_31318 = (state_31386[(14)]);
var inst_31319 = (state_31386[(15)]);
var inst_31318__$1 = (state_31386[(2)]);
var inst_31319__$1 = figwheel.client.file_reloading.add_request_urls.call(null,opts,inst_31318__$1);
var inst_31320 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_31319__$1);
var state_31386__$1 = (function (){var statearr_31449 = state_31386;
(statearr_31449[(14)] = inst_31318__$1);

(statearr_31449[(15)] = inst_31319__$1);

return statearr_31449;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31386__$1,(19),inst_31320);
} else {
if((state_val_31387 === (37))){
var inst_31381 = (state_31386[(2)]);
var state_31386__$1 = state_31386;
var statearr_31450_31504 = state_31386__$1;
(statearr_31450_31504[(2)] = inst_31381);

(statearr_31450_31504[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31387 === (8))){
var inst_31286 = (state_31386[(27)]);
var inst_31273 = (state_31386[(9)]);
var inst_31286__$1 = cljs.core.seq.call(null,inst_31273);
var state_31386__$1 = (function (){var statearr_31451 = state_31386;
(statearr_31451[(27)] = inst_31286__$1);

return statearr_31451;
})();
if(inst_31286__$1){
var statearr_31452_31505 = state_31386__$1;
(statearr_31452_31505[(1)] = (10));

} else {
var statearr_31453_31506 = state_31386__$1;
(statearr_31453_31506[(1)] = (11));

}

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
}
}
}
});})(c__22071__auto__,map__31260,map__31260__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__31261,map__31261__$1,msg,files))
;
return ((function (switch__22009__auto__,c__22071__auto__,map__31260,map__31260__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__31261,map__31261__$1,msg,files){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__22010__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__22010__auto____0 = (function (){
var statearr_31457 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31457[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__22010__auto__);

(statearr_31457[(1)] = (1));

return statearr_31457;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__22010__auto____1 = (function (state_31386){
while(true){
var ret_value__22011__auto__ = (function (){try{while(true){
var result__22012__auto__ = switch__22009__auto__.call(null,state_31386);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22012__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22012__auto__;
}
break;
}
}catch (e31458){if((e31458 instanceof Object)){
var ex__22013__auto__ = e31458;
var statearr_31459_31507 = state_31386;
(statearr_31459_31507[(5)] = ex__22013__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31386);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31458;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22011__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31508 = state_31386;
state_31386 = G__31508;
continue;
} else {
return ret_value__22011__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__22010__auto__ = function(state_31386){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__22010__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__22010__auto____1.call(this,state_31386);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__22010__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__22010__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__22010__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__22010__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__22010__auto__;
})()
;})(switch__22009__auto__,c__22071__auto__,map__31260,map__31260__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__31261,map__31261__$1,msg,files))
})();
var state__22073__auto__ = (function (){var statearr_31460 = f__22072__auto__.call(null);
(statearr_31460[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22071__auto__);

return statearr_31460;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22073__auto__);
});})(c__22071__auto__,map__31260,map__31260__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__31261,map__31261__$1,msg,files))
);

return c__22071__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str(location.protocol),cljs.core.str("//")].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__31511,link){
var map__31513 = p__31511;
var map__31513__$1 = ((cljs.core.seq_QMARK_.call(null,map__31513))?cljs.core.apply.call(null,cljs.core.hash_map,map__31513):map__31513);
var file = cljs.core.get.call(null,map__31513__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4126__auto__ = link.href;
if(cljs.core.truth_(temp__4126__auto__)){
var link_href = temp__4126__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__4126__auto__,map__31513,map__31513__$1,file){
return (function (p1__31509_SHARP_,p2__31510_SHARP_){
if(cljs.core._EQ_.call(null,p1__31509_SHARP_,p2__31510_SHARP_)){
return p1__31509_SHARP_;
} else {
return false;
}
});})(link_href,temp__4126__auto__,map__31513,map__31513__$1,file))
,cljs.core.reverse.call(null,clojure.string.split.call(null,file,"/")),cljs.core.reverse.call(null,clojure.string.split.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href),"/")))));
var match_length = cljs.core.count.call(null,match);
var file_name_length = cljs.core.count.call(null,cljs.core.last.call(null,clojure.string.split.call(null,file,"/")));
if((match_length >= file_name_length)){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"link","link",-1769163468),link,new cljs.core.Keyword(null,"link-href","link-href",-250644450),link_href,new cljs.core.Keyword(null,"match-length","match-length",1101537310),match_length,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083),cljs.core.count.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href))], null);
} else {
return null;
}
} else {
return null;
}
});
figwheel.client.file_reloading.get_correct_link = (function figwheel$client$file_reloading$get_correct_link(f_data){
var temp__4126__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__31517){
var map__31518 = p__31517;
var map__31518__$1 = ((cljs.core.seq_QMARK_.call(null,map__31518))?cljs.core.apply.call(null,cljs.core.hash_map,map__31518):map__31518);
var current_url_length = cljs.core.get.call(null,map__31518__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
var match_length = cljs.core.get.call(null,map__31518__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__31514_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__31514_SHARP_);
}),figwheel.client.file_reloading.current_links.call(null))));
if(cljs.core.truth_(temp__4126__auto__)){
var res = temp__4126__auto__;
return new cljs.core.Keyword(null,"link","link",-1769163468).cljs$core$IFn$_invoke$arity$1(res);
} else {
return null;
}
});
figwheel.client.file_reloading.clone_link = (function figwheel$client$file_reloading$clone_link(link,url){
var clone = document.createElement("link");
clone.rel = "stylesheet";

clone.media = link.media;

clone.disabled = link.disabled;

clone.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return clone;
});
figwheel.client.file_reloading.create_link = (function figwheel$client$file_reloading$create_link(url){
var link = document.createElement("link");
link.rel = "stylesheet";

link.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return link;
});
figwheel.client.file_reloading.add_link_to_doc = (function figwheel$client$file_reloading$add_link_to_doc(){
var G__31520 = arguments.length;
switch (G__31520) {
case 1:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$1 = (function (new_link){
return (document.getElementsByTagName("head")[(0)]).appendChild(new_link);
});

figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$2 = (function (orig_link,klone){
var parent = orig_link.parentNode;
if(cljs.core._EQ_.call(null,orig_link,parent.lastChild)){
parent.appendChild(klone);
} else {
parent.insertBefore(klone,orig_link.nextSibling);
}

return setTimeout(((function (parent){
return (function (){
return parent.removeChild(orig_link);
});})(parent))
,(300));
});

figwheel.client.file_reloading.add_link_to_doc.cljs$lang$maxFixedArity = 2;
figwheel.client.file_reloading.reload_css_file = (function figwheel$client$file_reloading$reload_css_file(p__31522){
var map__31524 = p__31522;
var map__31524__$1 = ((cljs.core.seq_QMARK_.call(null,map__31524))?cljs.core.apply.call(null,cljs.core.hash_map,map__31524):map__31524);
var f_data = map__31524__$1;
var request_url = cljs.core.get.call(null,map__31524__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var file = cljs.core.get.call(null,map__31524__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4124__auto__ = figwheel.client.file_reloading.get_correct_link.call(null,f_data);
if(cljs.core.truth_(temp__4124__auto__)){
var link = temp__4124__auto__;
return figwheel.client.file_reloading.add_link_to_doc.call(null,link,figwheel.client.file_reloading.clone_link.call(null,link,link.href));
} else {
return figwheel.client.file_reloading.add_link_to_doc.call(null,figwheel.client.file_reloading.create_link.call(null,(function (){var or__18160__auto__ = request_url;
if(cljs.core.truth_(or__18160__auto__)){
return or__18160__auto__;
} else {
return file;
}
})()));
}
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__31525,files_msg){
var map__31547 = p__31525;
var map__31547__$1 = ((cljs.core.seq_QMARK_.call(null,map__31547))?cljs.core.apply.call(null,cljs.core.hash_map,map__31547):map__31547);
var opts = map__31547__$1;
var on_cssload = cljs.core.get.call(null,map__31547__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
var seq__31548_31568 = cljs.core.seq.call(null,figwheel.client.file_reloading.add_request_urls.call(null,opts,new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg)));
var chunk__31549_31569 = null;
var count__31550_31570 = (0);
var i__31551_31571 = (0);
while(true){
if((i__31551_31571 < count__31550_31570)){
var f_31572 = cljs.core._nth.call(null,chunk__31549_31569,i__31551_31571);
figwheel.client.file_reloading.reload_css_file.call(null,f_31572);

var G__31573 = seq__31548_31568;
var G__31574 = chunk__31549_31569;
var G__31575 = count__31550_31570;
var G__31576 = (i__31551_31571 + (1));
seq__31548_31568 = G__31573;
chunk__31549_31569 = G__31574;
count__31550_31570 = G__31575;
i__31551_31571 = G__31576;
continue;
} else {
var temp__4126__auto___31577 = cljs.core.seq.call(null,seq__31548_31568);
if(temp__4126__auto___31577){
var seq__31548_31578__$1 = temp__4126__auto___31577;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__31548_31578__$1)){
var c__18945__auto___31579 = cljs.core.chunk_first.call(null,seq__31548_31578__$1);
var G__31580 = cljs.core.chunk_rest.call(null,seq__31548_31578__$1);
var G__31581 = c__18945__auto___31579;
var G__31582 = cljs.core.count.call(null,c__18945__auto___31579);
var G__31583 = (0);
seq__31548_31568 = G__31580;
chunk__31549_31569 = G__31581;
count__31550_31570 = G__31582;
i__31551_31571 = G__31583;
continue;
} else {
var f_31584 = cljs.core.first.call(null,seq__31548_31578__$1);
figwheel.client.file_reloading.reload_css_file.call(null,f_31584);

var G__31585 = cljs.core.next.call(null,seq__31548_31578__$1);
var G__31586 = null;
var G__31587 = (0);
var G__31588 = (0);
seq__31548_31568 = G__31585;
chunk__31549_31569 = G__31586;
count__31550_31570 = G__31587;
i__31551_31571 = G__31588;
continue;
}
} else {
}
}
break;
}

var c__22071__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22071__auto__,map__31547,map__31547__$1,opts,on_cssload){
return (function (){
var f__22072__auto__ = (function (){var switch__22009__auto__ = ((function (c__22071__auto__,map__31547,map__31547__$1,opts,on_cssload){
return (function (state_31558){
var state_val_31559 = (state_31558[(1)]);
if((state_val_31559 === (2))){
var inst_31554 = (state_31558[(2)]);
var inst_31555 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg);
var inst_31556 = on_cssload.call(null,inst_31555);
var state_31558__$1 = (function (){var statearr_31560 = state_31558;
(statearr_31560[(7)] = inst_31554);

return statearr_31560;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31558__$1,inst_31556);
} else {
if((state_val_31559 === (1))){
var inst_31552 = cljs.core.async.timeout.call(null,(100));
var state_31558__$1 = state_31558;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31558__$1,(2),inst_31552);
} else {
return null;
}
}
});})(c__22071__auto__,map__31547,map__31547__$1,opts,on_cssload))
;
return ((function (switch__22009__auto__,c__22071__auto__,map__31547,map__31547__$1,opts,on_cssload){
return (function() {
var figwheel$client$file_reloading$reload_css_files_$_state_machine__22010__auto__ = null;
var figwheel$client$file_reloading$reload_css_files_$_state_machine__22010__auto____0 = (function (){
var statearr_31564 = [null,null,null,null,null,null,null,null];
(statearr_31564[(0)] = figwheel$client$file_reloading$reload_css_files_$_state_machine__22010__auto__);

(statearr_31564[(1)] = (1));

return statearr_31564;
});
var figwheel$client$file_reloading$reload_css_files_$_state_machine__22010__auto____1 = (function (state_31558){
while(true){
var ret_value__22011__auto__ = (function (){try{while(true){
var result__22012__auto__ = switch__22009__auto__.call(null,state_31558);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22012__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22012__auto__;
}
break;
}
}catch (e31565){if((e31565 instanceof Object)){
var ex__22013__auto__ = e31565;
var statearr_31566_31589 = state_31558;
(statearr_31566_31589[(5)] = ex__22013__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31558);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31565;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22011__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31590 = state_31558;
state_31558 = G__31590;
continue;
} else {
return ret_value__22011__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_css_files_$_state_machine__22010__auto__ = function(state_31558){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_css_files_$_state_machine__22010__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_css_files_$_state_machine__22010__auto____1.call(this,state_31558);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$reload_css_files_$_state_machine__22010__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_css_files_$_state_machine__22010__auto____0;
figwheel$client$file_reloading$reload_css_files_$_state_machine__22010__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_css_files_$_state_machine__22010__auto____1;
return figwheel$client$file_reloading$reload_css_files_$_state_machine__22010__auto__;
})()
;})(switch__22009__auto__,c__22071__auto__,map__31547,map__31547__$1,opts,on_cssload))
})();
var state__22073__auto__ = (function (){var statearr_31567 = f__22072__auto__.call(null);
(statearr_31567[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22071__auto__);

return statearr_31567;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22073__auto__);
});})(c__22071__auto__,map__31547,map__31547__$1,opts,on_cssload))
);

return c__22071__auto__;
} else {
return null;
}
});

//# sourceMappingURL=file_reloading.js.map?rel=1441122552920