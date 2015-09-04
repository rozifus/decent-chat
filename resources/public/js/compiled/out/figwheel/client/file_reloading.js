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
return cljs.core.reduce.call(null,(function (p1__30935_SHARP_,p2__30936_SHARP_){
var and__18148__auto__ = p1__30935_SHARP_;
if(cljs.core.truth_(and__18148__auto__)){
return p2__30936_SHARP_;
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
cljs.core._add_method.call(null,figwheel.client.file_reloading.resolve_url,new cljs.core.Keyword(null,"default","default",-1987822328),(function (p__30937){
var map__30938 = p__30937;
var map__30938__$1 = ((cljs.core.seq_QMARK_.call(null,map__30938))?cljs.core.apply.call(null,cljs.core.hash_map,map__30938):map__30938);
var file = cljs.core.get.call(null,map__30938__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
return file;
}));
cljs.core._add_method.call(null,figwheel.client.file_reloading.resolve_url,new cljs.core.Keyword(null,"namespace","namespace",-377510372),(function (p__30939){
var map__30940 = p__30939;
var map__30940__$1 = ((cljs.core.seq_QMARK_.call(null,map__30940))?cljs.core.apply.call(null,cljs.core.hash_map,map__30940):map__30940);
var namespace = cljs.core.get.call(null,map__30940__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

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
}catch (e30941){if((e30941 instanceof Error)){
var e = e30941;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e30941;

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
var G__30943 = arguments.length;
switch (G__30943) {
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
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__30945,callback){
var map__30947 = p__30945;
var map__30947__$1 = ((cljs.core.seq_QMARK_.call(null,map__30947))?cljs.core.apply.call(null,cljs.core.hash_map,map__30947):map__30947);
var file_msg = map__30947__$1;
var request_url = cljs.core.get.call(null,map__30947__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Attempting to load "),cljs.core.str(request_url)].join(''));

return figwheel.client.file_reloading.reload_file_STAR_.call(null,request_url,((function (map__30947,map__30947__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Successfullly loaded "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__30947,map__30947__$1,file_msg,request_url))
);
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__30948){
var map__30950 = p__30948;
var map__30950__$1 = ((cljs.core.seq_QMARK_.call(null,map__30950))?cljs.core.apply.call(null,cljs.core.hash_map,map__30950):map__30950);
var file_msg = map__30950__$1;
var meta_data = cljs.core.get.call(null,map__30950__$1,new cljs.core.Keyword(null,"meta-data","meta-data",-1613399157));
var namespace = cljs.core.get.call(null,map__30950__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

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
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__30951,callback){
var map__30953 = p__30951;
var map__30953__$1 = ((cljs.core.seq_QMARK_.call(null,map__30953))?cljs.core.apply.call(null,cljs.core.hash_map,map__30953):map__30953);
var file_msg = map__30953__$1;
var namespace = cljs.core.get.call(null,map__30953__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = cljs.core.get.call(null,map__30953__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

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
var c__21387__auto___31040 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21387__auto___31040,out){
return (function (){
var f__21388__auto__ = (function (){var switch__21325__auto__ = ((function (c__21387__auto___31040,out){
return (function (state_31022){
var state_val_31023 = (state_31022[(1)]);
if((state_val_31023 === (7))){
var inst_31006 = (state_31022[(7)]);
var inst_31012 = (state_31022[(2)]);
var inst_31013 = cljs.core.async.put_BANG_.call(null,out,inst_31012);
var inst_31002 = inst_31006;
var state_31022__$1 = (function (){var statearr_31024 = state_31022;
(statearr_31024[(8)] = inst_31002);

(statearr_31024[(9)] = inst_31013);

return statearr_31024;
})();
var statearr_31025_31041 = state_31022__$1;
(statearr_31025_31041[(2)] = null);

(statearr_31025_31041[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31023 === (6))){
var inst_31018 = (state_31022[(2)]);
var state_31022__$1 = state_31022;
var statearr_31026_31042 = state_31022__$1;
(statearr_31026_31042[(2)] = inst_31018);

(statearr_31026_31042[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31023 === (5))){
var inst_31016 = cljs.core.async.close_BANG_.call(null,out);
var state_31022__$1 = state_31022;
var statearr_31027_31043 = state_31022__$1;
(statearr_31027_31043[(2)] = inst_31016);

(statearr_31027_31043[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31023 === (4))){
var inst_31005 = (state_31022[(10)]);
var inst_31010 = figwheel.client.file_reloading.reload_js_file.call(null,inst_31005);
var state_31022__$1 = state_31022;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31022__$1,(7),inst_31010);
} else {
if((state_val_31023 === (3))){
var inst_31020 = (state_31022[(2)]);
var state_31022__$1 = state_31022;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31022__$1,inst_31020);
} else {
if((state_val_31023 === (2))){
var inst_31002 = (state_31022[(8)]);
var inst_31005 = (state_31022[(10)]);
var inst_31005__$1 = cljs.core.nth.call(null,inst_31002,(0),null);
var inst_31006 = cljs.core.nthnext.call(null,inst_31002,(1));
var inst_31007 = (inst_31005__$1 == null);
var inst_31008 = cljs.core.not.call(null,inst_31007);
var state_31022__$1 = (function (){var statearr_31028 = state_31022;
(statearr_31028[(10)] = inst_31005__$1);

(statearr_31028[(7)] = inst_31006);

return statearr_31028;
})();
if(inst_31008){
var statearr_31029_31044 = state_31022__$1;
(statearr_31029_31044[(1)] = (4));

} else {
var statearr_31030_31045 = state_31022__$1;
(statearr_31030_31045[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31023 === (1))){
var inst_31000 = cljs.core.nth.call(null,files,(0),null);
var inst_31001 = cljs.core.nthnext.call(null,files,(1));
var inst_31002 = files;
var state_31022__$1 = (function (){var statearr_31031 = state_31022;
(statearr_31031[(8)] = inst_31002);

(statearr_31031[(11)] = inst_31000);

(statearr_31031[(12)] = inst_31001);

return statearr_31031;
})();
var statearr_31032_31046 = state_31022__$1;
(statearr_31032_31046[(2)] = null);

(statearr_31032_31046[(1)] = (2));


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
});})(c__21387__auto___31040,out))
;
return ((function (switch__21325__auto__,c__21387__auto___31040,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__21326__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__21326__auto____0 = (function (){
var statearr_31036 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31036[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__21326__auto__);

(statearr_31036[(1)] = (1));

return statearr_31036;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__21326__auto____1 = (function (state_31022){
while(true){
var ret_value__21327__auto__ = (function (){try{while(true){
var result__21328__auto__ = switch__21325__auto__.call(null,state_31022);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21328__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21328__auto__;
}
break;
}
}catch (e31037){if((e31037 instanceof Object)){
var ex__21329__auto__ = e31037;
var statearr_31038_31047 = state_31022;
(statearr_31038_31047[(5)] = ex__21329__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31022);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31037;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21327__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31048 = state_31022;
state_31022 = G__31048;
continue;
} else {
return ret_value__21327__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__21326__auto__ = function(state_31022){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__21326__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__21326__auto____1.call(this,state_31022);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__21326__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__21326__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__21326__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__21326__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__21326__auto__;
})()
;})(switch__21325__auto__,c__21387__auto___31040,out))
})();
var state__21389__auto__ = (function (){var statearr_31039 = f__21388__auto__.call(null);
(statearr_31039[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21387__auto___31040);

return statearr_31039;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21389__auto__);
});})(c__21387__auto___31040,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.add_request_url = (function figwheel$client$file_reloading$add_request_url(p__31049,p__31050){
var map__31053 = p__31049;
var map__31053__$1 = ((cljs.core.seq_QMARK_.call(null,map__31053))?cljs.core.apply.call(null,cljs.core.hash_map,map__31053):map__31053);
var opts = map__31053__$1;
var url_rewriter = cljs.core.get.call(null,map__31053__$1,new cljs.core.Keyword(null,"url-rewriter","url-rewriter",200543838));
var map__31054 = p__31050;
var map__31054__$1 = ((cljs.core.seq_QMARK_.call(null,map__31054))?cljs.core.apply.call(null,cljs.core.hash_map,map__31054):map__31054);
var file_msg = map__31054__$1;
var file = cljs.core.get.call(null,map__31054__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var resolved_path = figwheel.client.file_reloading.resolve_url.call(null,file_msg);
return cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"request-url","request-url",2100346596),(cljs.core.truth_(url_rewriter)?url_rewriter.call(null,resolved_path):resolved_path));
});
figwheel.client.file_reloading.add_request_urls = (function figwheel$client$file_reloading$add_request_urls(opts,files){
return cljs.core.map.call(null,cljs.core.partial.call(null,figwheel.client.file_reloading.add_request_url,opts),files);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__31055){
var map__31058 = p__31055;
var map__31058__$1 = ((cljs.core.seq_QMARK_.call(null,map__31058))?cljs.core.apply.call(null,cljs.core.hash_map,map__31058):map__31058);
var file = cljs.core.get.call(null,map__31058__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var eval_body__$1 = cljs.core.get.call(null,map__31058__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
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
}catch (e31059){var e = e31059;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Unable to evaluate "),cljs.core.str(file)].join(''));
}} else {
return null;
}
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__31064,p__31065){
var map__31267 = p__31064;
var map__31267__$1 = ((cljs.core.seq_QMARK_.call(null,map__31267))?cljs.core.apply.call(null,cljs.core.hash_map,map__31267):map__31267);
var opts = map__31267__$1;
var load_unchanged_files = cljs.core.get.call(null,map__31267__$1,new cljs.core.Keyword(null,"load-unchanged-files","load-unchanged-files",-1561468704));
var on_jsload = cljs.core.get.call(null,map__31267__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var before_jsload = cljs.core.get.call(null,map__31267__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var map__31268 = p__31065;
var map__31268__$1 = ((cljs.core.seq_QMARK_.call(null,map__31268))?cljs.core.apply.call(null,cljs.core.hash_map,map__31268):map__31268);
var msg = map__31268__$1;
var files = cljs.core.get.call(null,map__31268__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var c__21387__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21387__auto__,map__31267,map__31267__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__31268,map__31268__$1,msg,files){
return (function (){
var f__21388__auto__ = (function (){var switch__21325__auto__ = ((function (c__21387__auto__,map__31267,map__31267__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__31268,map__31268__$1,msg,files){
return (function (state_31393){
var state_val_31394 = (state_31393[(1)]);
if((state_val_31394 === (7))){
var inst_31281 = (state_31393[(7)]);
var inst_31280 = (state_31393[(8)]);
var inst_31282 = (state_31393[(9)]);
var inst_31283 = (state_31393[(10)]);
var inst_31288 = cljs.core._nth.call(null,inst_31281,inst_31283);
var inst_31289 = figwheel.client.file_reloading.eval_body.call(null,inst_31288);
var inst_31290 = (inst_31283 + (1));
var tmp31395 = inst_31281;
var tmp31396 = inst_31280;
var tmp31397 = inst_31282;
var inst_31280__$1 = tmp31396;
var inst_31281__$1 = tmp31395;
var inst_31282__$1 = tmp31397;
var inst_31283__$1 = inst_31290;
var state_31393__$1 = (function (){var statearr_31398 = state_31393;
(statearr_31398[(7)] = inst_31281__$1);

(statearr_31398[(8)] = inst_31280__$1);

(statearr_31398[(11)] = inst_31289);

(statearr_31398[(9)] = inst_31282__$1);

(statearr_31398[(10)] = inst_31283__$1);

return statearr_31398;
})();
var statearr_31399_31468 = state_31393__$1;
(statearr_31399_31468[(2)] = null);

(statearr_31399_31468[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31394 === (20))){
var inst_31330 = (state_31393[(12)]);
var inst_31326 = (state_31393[(13)]);
var inst_31325 = (state_31393[(14)]);
var inst_31332 = (state_31393[(15)]);
var inst_31329 = (state_31393[(16)]);
var inst_31335 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_31337 = (function (){var files_not_loaded = inst_31332;
var res = inst_31330;
var res_SINGLEQUOTE_ = inst_31329;
var files_SINGLEQUOTE_ = inst_31326;
var all_files = inst_31325;
return ((function (files_not_loaded,res,res_SINGLEQUOTE_,files_SINGLEQUOTE_,all_files,inst_31330,inst_31326,inst_31325,inst_31332,inst_31329,inst_31335,state_val_31394,c__21387__auto__,map__31267,map__31267__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__31268,map__31268__$1,msg,files){
return (function (p__31336){
var map__31400 = p__31336;
var map__31400__$1 = ((cljs.core.seq_QMARK_.call(null,map__31400))?cljs.core.apply.call(null,cljs.core.hash_map,map__31400):map__31400);
var file = cljs.core.get.call(null,map__31400__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var namespace = cljs.core.get.call(null,map__31400__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.ns_to_js_file.call(null,namespace);
} else {
return file;
}
});
;})(files_not_loaded,res,res_SINGLEQUOTE_,files_SINGLEQUOTE_,all_files,inst_31330,inst_31326,inst_31325,inst_31332,inst_31329,inst_31335,state_val_31394,c__21387__auto__,map__31267,map__31267__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__31268,map__31268__$1,msg,files))
})();
var inst_31338 = cljs.core.map.call(null,inst_31337,inst_31330);
var inst_31339 = cljs.core.pr_str.call(null,inst_31338);
var inst_31340 = figwheel.client.utils.log.call(null,inst_31339);
var inst_31341 = (function (){var files_not_loaded = inst_31332;
var res = inst_31330;
var res_SINGLEQUOTE_ = inst_31329;
var files_SINGLEQUOTE_ = inst_31326;
var all_files = inst_31325;
return ((function (files_not_loaded,res,res_SINGLEQUOTE_,files_SINGLEQUOTE_,all_files,inst_31330,inst_31326,inst_31325,inst_31332,inst_31329,inst_31335,inst_31337,inst_31338,inst_31339,inst_31340,state_val_31394,c__21387__auto__,map__31267,map__31267__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__31268,map__31268__$1,msg,files){
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(files_not_loaded,res,res_SINGLEQUOTE_,files_SINGLEQUOTE_,all_files,inst_31330,inst_31326,inst_31325,inst_31332,inst_31329,inst_31335,inst_31337,inst_31338,inst_31339,inst_31340,state_val_31394,c__21387__auto__,map__31267,map__31267__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__31268,map__31268__$1,msg,files))
})();
var inst_31342 = setTimeout(inst_31341,(10));
var state_31393__$1 = (function (){var statearr_31401 = state_31393;
(statearr_31401[(17)] = inst_31340);

(statearr_31401[(18)] = inst_31335);

return statearr_31401;
})();
var statearr_31402_31469 = state_31393__$1;
(statearr_31402_31469[(2)] = inst_31342);

(statearr_31402_31469[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31394 === (27))){
var inst_31352 = (state_31393[(19)]);
var state_31393__$1 = state_31393;
var statearr_31403_31470 = state_31393__$1;
(statearr_31403_31470[(2)] = inst_31352);

(statearr_31403_31470[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31394 === (1))){
var inst_31272 = (state_31393[(20)]);
var inst_31269 = before_jsload.call(null,files);
var inst_31270 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_31271 = (function (){return ((function (inst_31272,inst_31269,inst_31270,state_val_31394,c__21387__auto__,map__31267,map__31267__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__31268,map__31268__$1,msg,files){
return (function (p1__31060_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__31060_SHARP_);
});
;})(inst_31272,inst_31269,inst_31270,state_val_31394,c__21387__auto__,map__31267,map__31267__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__31268,map__31268__$1,msg,files))
})();
var inst_31272__$1 = cljs.core.filter.call(null,inst_31271,files);
var inst_31273 = cljs.core.not_empty.call(null,inst_31272__$1);
var state_31393__$1 = (function (){var statearr_31404 = state_31393;
(statearr_31404[(21)] = inst_31269);

(statearr_31404[(22)] = inst_31270);

(statearr_31404[(20)] = inst_31272__$1);

return statearr_31404;
})();
if(cljs.core.truth_(inst_31273)){
var statearr_31405_31471 = state_31393__$1;
(statearr_31405_31471[(1)] = (2));

} else {
var statearr_31406_31472 = state_31393__$1;
(statearr_31406_31472[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31394 === (24))){
var state_31393__$1 = state_31393;
var statearr_31407_31473 = state_31393__$1;
(statearr_31407_31473[(2)] = null);

(statearr_31407_31473[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31394 === (4))){
var inst_31317 = (state_31393[(2)]);
var inst_31318 = (function (){return ((function (inst_31317,state_val_31394,c__21387__auto__,map__31267,map__31267__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__31268,map__31268__$1,msg,files){
return (function (p1__31061_SHARP_){
var and__18148__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__31061_SHARP_);
if(cljs.core.truth_(and__18148__auto__)){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__31061_SHARP_));
} else {
return and__18148__auto__;
}
});
;})(inst_31317,state_val_31394,c__21387__auto__,map__31267,map__31267__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__31268,map__31268__$1,msg,files))
})();
var inst_31319 = cljs.core.filter.call(null,inst_31318,files);
var state_31393__$1 = (function (){var statearr_31408 = state_31393;
(statearr_31408[(23)] = inst_31319);

(statearr_31408[(24)] = inst_31317);

return statearr_31408;
})();
if(cljs.core.truth_(load_unchanged_files)){
var statearr_31409_31474 = state_31393__$1;
(statearr_31409_31474[(1)] = (16));

} else {
var statearr_31410_31475 = state_31393__$1;
(statearr_31410_31475[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31394 === (15))){
var inst_31307 = (state_31393[(2)]);
var state_31393__$1 = state_31393;
var statearr_31411_31476 = state_31393__$1;
(statearr_31411_31476[(2)] = inst_31307);

(statearr_31411_31476[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31394 === (21))){
var state_31393__$1 = state_31393;
var statearr_31412_31477 = state_31393__$1;
(statearr_31412_31477[(2)] = null);

(statearr_31412_31477[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31394 === (31))){
var inst_31360 = (state_31393[(25)]);
var inst_31370 = (state_31393[(2)]);
var inst_31371 = cljs.core.not_empty.call(null,inst_31360);
var state_31393__$1 = (function (){var statearr_31413 = state_31393;
(statearr_31413[(26)] = inst_31370);

return statearr_31413;
})();
if(cljs.core.truth_(inst_31371)){
var statearr_31414_31478 = state_31393__$1;
(statearr_31414_31478[(1)] = (32));

} else {
var statearr_31415_31479 = state_31393__$1;
(statearr_31415_31479[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31394 === (32))){
var inst_31360 = (state_31393[(25)]);
var inst_31373 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_31360);
var inst_31374 = cljs.core.pr_str.call(null,inst_31373);
var inst_31375 = [cljs.core.str("file didn't change: "),cljs.core.str(inst_31374)].join('');
var inst_31376 = figwheel.client.utils.log.call(null,inst_31375);
var state_31393__$1 = state_31393;
var statearr_31416_31480 = state_31393__$1;
(statearr_31416_31480[(2)] = inst_31376);

(statearr_31416_31480[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31394 === (33))){
var state_31393__$1 = state_31393;
var statearr_31417_31481 = state_31393__$1;
(statearr_31417_31481[(2)] = null);

(statearr_31417_31481[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31394 === (13))){
var inst_31293 = (state_31393[(27)]);
var inst_31297 = cljs.core.chunk_first.call(null,inst_31293);
var inst_31298 = cljs.core.chunk_rest.call(null,inst_31293);
var inst_31299 = cljs.core.count.call(null,inst_31297);
var inst_31280 = inst_31298;
var inst_31281 = inst_31297;
var inst_31282 = inst_31299;
var inst_31283 = (0);
var state_31393__$1 = (function (){var statearr_31418 = state_31393;
(statearr_31418[(7)] = inst_31281);

(statearr_31418[(8)] = inst_31280);

(statearr_31418[(9)] = inst_31282);

(statearr_31418[(10)] = inst_31283);

return statearr_31418;
})();
var statearr_31419_31482 = state_31393__$1;
(statearr_31419_31482[(2)] = null);

(statearr_31419_31482[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31394 === (22))){
var inst_31332 = (state_31393[(15)]);
var inst_31345 = (state_31393[(2)]);
var inst_31346 = cljs.core.not_empty.call(null,inst_31332);
var state_31393__$1 = (function (){var statearr_31420 = state_31393;
(statearr_31420[(28)] = inst_31345);

return statearr_31420;
})();
if(cljs.core.truth_(inst_31346)){
var statearr_31421_31483 = state_31393__$1;
(statearr_31421_31483[(1)] = (23));

} else {
var statearr_31422_31484 = state_31393__$1;
(statearr_31422_31484[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31394 === (36))){
var state_31393__$1 = state_31393;
var statearr_31423_31485 = state_31393__$1;
(statearr_31423_31485[(2)] = null);

(statearr_31423_31485[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31394 === (29))){
var inst_31361 = (state_31393[(29)]);
var inst_31364 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_31361);
var inst_31365 = cljs.core.pr_str.call(null,inst_31364);
var inst_31366 = [cljs.core.str("figwheel-no-load meta-data: "),cljs.core.str(inst_31365)].join('');
var inst_31367 = figwheel.client.utils.log.call(null,inst_31366);
var state_31393__$1 = state_31393;
var statearr_31424_31486 = state_31393__$1;
(statearr_31424_31486[(2)] = inst_31367);

(statearr_31424_31486[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31394 === (6))){
var inst_31314 = (state_31393[(2)]);
var state_31393__$1 = state_31393;
var statearr_31425_31487 = state_31393__$1;
(statearr_31425_31487[(2)] = inst_31314);

(statearr_31425_31487[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31394 === (28))){
var inst_31361 = (state_31393[(29)]);
var inst_31358 = (state_31393[(2)]);
var inst_31359 = cljs.core.get.call(null,inst_31358,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_31360 = cljs.core.get.call(null,inst_31358,new cljs.core.Keyword(null,"file-changed-on-disk","file-changed-on-disk",1086171932));
var inst_31361__$1 = cljs.core.get.call(null,inst_31358,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_31362 = cljs.core.not_empty.call(null,inst_31361__$1);
var state_31393__$1 = (function (){var statearr_31426 = state_31393;
(statearr_31426[(25)] = inst_31360);

(statearr_31426[(29)] = inst_31361__$1);

(statearr_31426[(30)] = inst_31359);

return statearr_31426;
})();
if(cljs.core.truth_(inst_31362)){
var statearr_31427_31488 = state_31393__$1;
(statearr_31427_31488[(1)] = (29));

} else {
var statearr_31428_31489 = state_31393__$1;
(statearr_31428_31489[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31394 === (25))){
var inst_31391 = (state_31393[(2)]);
var state_31393__$1 = state_31393;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31393__$1,inst_31391);
} else {
if((state_val_31394 === (34))){
var inst_31359 = (state_31393[(30)]);
var inst_31379 = (state_31393[(2)]);
var inst_31380 = cljs.core.not_empty.call(null,inst_31359);
var state_31393__$1 = (function (){var statearr_31429 = state_31393;
(statearr_31429[(31)] = inst_31379);

return statearr_31429;
})();
if(cljs.core.truth_(inst_31380)){
var statearr_31430_31490 = state_31393__$1;
(statearr_31430_31490[(1)] = (35));

} else {
var statearr_31431_31491 = state_31393__$1;
(statearr_31431_31491[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31394 === (17))){
var inst_31319 = (state_31393[(23)]);
var state_31393__$1 = state_31393;
var statearr_31432_31492 = state_31393__$1;
(statearr_31432_31492[(2)] = inst_31319);

(statearr_31432_31492[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31394 === (3))){
var state_31393__$1 = state_31393;
var statearr_31433_31493 = state_31393__$1;
(statearr_31433_31493[(2)] = null);

(statearr_31433_31493[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31394 === (12))){
var inst_31310 = (state_31393[(2)]);
var state_31393__$1 = state_31393;
var statearr_31434_31494 = state_31393__$1;
(statearr_31434_31494[(2)] = inst_31310);

(statearr_31434_31494[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31394 === (2))){
var inst_31272 = (state_31393[(20)]);
var inst_31279 = cljs.core.seq.call(null,inst_31272);
var inst_31280 = inst_31279;
var inst_31281 = null;
var inst_31282 = (0);
var inst_31283 = (0);
var state_31393__$1 = (function (){var statearr_31435 = state_31393;
(statearr_31435[(7)] = inst_31281);

(statearr_31435[(8)] = inst_31280);

(statearr_31435[(9)] = inst_31282);

(statearr_31435[(10)] = inst_31283);

return statearr_31435;
})();
var statearr_31436_31495 = state_31393__$1;
(statearr_31436_31495[(2)] = null);

(statearr_31436_31495[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31394 === (23))){
var inst_31352 = (state_31393[(19)]);
var inst_31330 = (state_31393[(12)]);
var inst_31326 = (state_31393[(13)]);
var inst_31325 = (state_31393[(14)]);
var inst_31332 = (state_31393[(15)]);
var inst_31329 = (state_31393[(16)]);
var inst_31348 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_31351 = (function (){var files_not_loaded = inst_31332;
var res = inst_31330;
var res_SINGLEQUOTE_ = inst_31329;
var files_SINGLEQUOTE_ = inst_31326;
var all_files = inst_31325;
return ((function (files_not_loaded,res,res_SINGLEQUOTE_,files_SINGLEQUOTE_,all_files,inst_31352,inst_31330,inst_31326,inst_31325,inst_31332,inst_31329,inst_31348,state_val_31394,c__21387__auto__,map__31267,map__31267__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__31268,map__31268__$1,msg,files){
return (function (p__31350){
var map__31437 = p__31350;
var map__31437__$1 = ((cljs.core.seq_QMARK_.call(null,map__31437))?cljs.core.apply.call(null,cljs.core.hash_map,map__31437):map__31437);
var meta_data = cljs.core.get.call(null,map__31437__$1,new cljs.core.Keyword(null,"meta-data","meta-data",-1613399157));
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
;})(files_not_loaded,res,res_SINGLEQUOTE_,files_SINGLEQUOTE_,all_files,inst_31352,inst_31330,inst_31326,inst_31325,inst_31332,inst_31329,inst_31348,state_val_31394,c__21387__auto__,map__31267,map__31267__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__31268,map__31268__$1,msg,files))
})();
var inst_31352__$1 = cljs.core.group_by.call(null,inst_31351,inst_31332);
var inst_31353 = cljs.core.seq_QMARK_.call(null,inst_31352__$1);
var state_31393__$1 = (function (){var statearr_31438 = state_31393;
(statearr_31438[(19)] = inst_31352__$1);

(statearr_31438[(32)] = inst_31348);

return statearr_31438;
})();
if(inst_31353){
var statearr_31439_31496 = state_31393__$1;
(statearr_31439_31496[(1)] = (26));

} else {
var statearr_31440_31497 = state_31393__$1;
(statearr_31440_31497[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31394 === (35))){
var inst_31359 = (state_31393[(30)]);
var inst_31382 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_31359);
var inst_31383 = cljs.core.pr_str.call(null,inst_31382);
var inst_31384 = [cljs.core.str("not required: "),cljs.core.str(inst_31383)].join('');
var inst_31385 = figwheel.client.utils.log.call(null,inst_31384);
var state_31393__$1 = state_31393;
var statearr_31441_31498 = state_31393__$1;
(statearr_31441_31498[(2)] = inst_31385);

(statearr_31441_31498[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31394 === (19))){
var inst_31330 = (state_31393[(12)]);
var inst_31326 = (state_31393[(13)]);
var inst_31325 = (state_31393[(14)]);
var inst_31329 = (state_31393[(16)]);
var inst_31329__$1 = (state_31393[(2)]);
var inst_31330__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_31329__$1);
var inst_31331 = (function (){var res = inst_31330__$1;
var res_SINGLEQUOTE_ = inst_31329__$1;
var files_SINGLEQUOTE_ = inst_31326;
var all_files = inst_31325;
return ((function (res,res_SINGLEQUOTE_,files_SINGLEQUOTE_,all_files,inst_31330,inst_31326,inst_31325,inst_31329,inst_31329__$1,inst_31330__$1,state_val_31394,c__21387__auto__,map__31267,map__31267__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__31268,map__31268__$1,msg,files){
return (function (p1__31063_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__31063_SHARP_));
});
;})(res,res_SINGLEQUOTE_,files_SINGLEQUOTE_,all_files,inst_31330,inst_31326,inst_31325,inst_31329,inst_31329__$1,inst_31330__$1,state_val_31394,c__21387__auto__,map__31267,map__31267__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__31268,map__31268__$1,msg,files))
})();
var inst_31332 = cljs.core.filter.call(null,inst_31331,inst_31329__$1);
var inst_31333 = cljs.core.not_empty.call(null,inst_31330__$1);
var state_31393__$1 = (function (){var statearr_31442 = state_31393;
(statearr_31442[(12)] = inst_31330__$1);

(statearr_31442[(15)] = inst_31332);

(statearr_31442[(16)] = inst_31329__$1);

return statearr_31442;
})();
if(cljs.core.truth_(inst_31333)){
var statearr_31443_31499 = state_31393__$1;
(statearr_31443_31499[(1)] = (20));

} else {
var statearr_31444_31500 = state_31393__$1;
(statearr_31444_31500[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31394 === (11))){
var state_31393__$1 = state_31393;
var statearr_31445_31501 = state_31393__$1;
(statearr_31445_31501[(2)] = null);

(statearr_31445_31501[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31394 === (9))){
var inst_31312 = (state_31393[(2)]);
var state_31393__$1 = state_31393;
var statearr_31446_31502 = state_31393__$1;
(statearr_31446_31502[(2)] = inst_31312);

(statearr_31446_31502[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31394 === (5))){
var inst_31282 = (state_31393[(9)]);
var inst_31283 = (state_31393[(10)]);
var inst_31285 = (inst_31283 < inst_31282);
var inst_31286 = inst_31285;
var state_31393__$1 = state_31393;
if(cljs.core.truth_(inst_31286)){
var statearr_31447_31503 = state_31393__$1;
(statearr_31447_31503[(1)] = (7));

} else {
var statearr_31448_31504 = state_31393__$1;
(statearr_31448_31504[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31394 === (14))){
var inst_31293 = (state_31393[(27)]);
var inst_31302 = cljs.core.first.call(null,inst_31293);
var inst_31303 = figwheel.client.file_reloading.eval_body.call(null,inst_31302);
var inst_31304 = cljs.core.next.call(null,inst_31293);
var inst_31280 = inst_31304;
var inst_31281 = null;
var inst_31282 = (0);
var inst_31283 = (0);
var state_31393__$1 = (function (){var statearr_31449 = state_31393;
(statearr_31449[(7)] = inst_31281);

(statearr_31449[(33)] = inst_31303);

(statearr_31449[(8)] = inst_31280);

(statearr_31449[(9)] = inst_31282);

(statearr_31449[(10)] = inst_31283);

return statearr_31449;
})();
var statearr_31450_31505 = state_31393__$1;
(statearr_31450_31505[(2)] = null);

(statearr_31450_31505[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31394 === (26))){
var inst_31352 = (state_31393[(19)]);
var inst_31355 = cljs.core.apply.call(null,cljs.core.hash_map,inst_31352);
var state_31393__$1 = state_31393;
var statearr_31451_31506 = state_31393__$1;
(statearr_31451_31506[(2)] = inst_31355);

(statearr_31451_31506[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31394 === (16))){
var inst_31319 = (state_31393[(23)]);
var inst_31321 = (function (){var all_files = inst_31319;
return ((function (all_files,inst_31319,state_val_31394,c__21387__auto__,map__31267,map__31267__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__31268,map__31268__$1,msg,files){
return (function (p1__31062_SHARP_){
return cljs.core.update_in.call(null,p1__31062_SHARP_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"meta-data","meta-data",-1613399157)], null),cljs.core.dissoc,new cljs.core.Keyword(null,"file-changed-on-disk","file-changed-on-disk",1086171932));
});
;})(all_files,inst_31319,state_val_31394,c__21387__auto__,map__31267,map__31267__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__31268,map__31268__$1,msg,files))
})();
var inst_31322 = cljs.core.map.call(null,inst_31321,inst_31319);
var state_31393__$1 = state_31393;
var statearr_31452_31507 = state_31393__$1;
(statearr_31452_31507[(2)] = inst_31322);

(statearr_31452_31507[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31394 === (30))){
var state_31393__$1 = state_31393;
var statearr_31453_31508 = state_31393__$1;
(statearr_31453_31508[(2)] = null);

(statearr_31453_31508[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31394 === (10))){
var inst_31293 = (state_31393[(27)]);
var inst_31295 = cljs.core.chunked_seq_QMARK_.call(null,inst_31293);
var state_31393__$1 = state_31393;
if(inst_31295){
var statearr_31454_31509 = state_31393__$1;
(statearr_31454_31509[(1)] = (13));

} else {
var statearr_31455_31510 = state_31393__$1;
(statearr_31455_31510[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31394 === (18))){
var inst_31326 = (state_31393[(13)]);
var inst_31325 = (state_31393[(14)]);
var inst_31325__$1 = (state_31393[(2)]);
var inst_31326__$1 = figwheel.client.file_reloading.add_request_urls.call(null,opts,inst_31325__$1);
var inst_31327 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_31326__$1);
var state_31393__$1 = (function (){var statearr_31456 = state_31393;
(statearr_31456[(13)] = inst_31326__$1);

(statearr_31456[(14)] = inst_31325__$1);

return statearr_31456;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31393__$1,(19),inst_31327);
} else {
if((state_val_31394 === (37))){
var inst_31388 = (state_31393[(2)]);
var state_31393__$1 = state_31393;
var statearr_31457_31511 = state_31393__$1;
(statearr_31457_31511[(2)] = inst_31388);

(statearr_31457_31511[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31394 === (8))){
var inst_31280 = (state_31393[(8)]);
var inst_31293 = (state_31393[(27)]);
var inst_31293__$1 = cljs.core.seq.call(null,inst_31280);
var state_31393__$1 = (function (){var statearr_31458 = state_31393;
(statearr_31458[(27)] = inst_31293__$1);

return statearr_31458;
})();
if(inst_31293__$1){
var statearr_31459_31512 = state_31393__$1;
(statearr_31459_31512[(1)] = (10));

} else {
var statearr_31460_31513 = state_31393__$1;
(statearr_31460_31513[(1)] = (11));

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
});})(c__21387__auto__,map__31267,map__31267__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__31268,map__31268__$1,msg,files))
;
return ((function (switch__21325__auto__,c__21387__auto__,map__31267,map__31267__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__31268,map__31268__$1,msg,files){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__21326__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__21326__auto____0 = (function (){
var statearr_31464 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31464[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__21326__auto__);

(statearr_31464[(1)] = (1));

return statearr_31464;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__21326__auto____1 = (function (state_31393){
while(true){
var ret_value__21327__auto__ = (function (){try{while(true){
var result__21328__auto__ = switch__21325__auto__.call(null,state_31393);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21328__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21328__auto__;
}
break;
}
}catch (e31465){if((e31465 instanceof Object)){
var ex__21329__auto__ = e31465;
var statearr_31466_31514 = state_31393;
(statearr_31466_31514[(5)] = ex__21329__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31393);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31465;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21327__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31515 = state_31393;
state_31393 = G__31515;
continue;
} else {
return ret_value__21327__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__21326__auto__ = function(state_31393){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__21326__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__21326__auto____1.call(this,state_31393);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__21326__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__21326__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__21326__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__21326__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__21326__auto__;
})()
;})(switch__21325__auto__,c__21387__auto__,map__31267,map__31267__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__31268,map__31268__$1,msg,files))
})();
var state__21389__auto__ = (function (){var statearr_31467 = f__21388__auto__.call(null);
(statearr_31467[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21387__auto__);

return statearr_31467;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21389__auto__);
});})(c__21387__auto__,map__31267,map__31267__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__31268,map__31268__$1,msg,files))
);

return c__21387__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str(location.protocol),cljs.core.str("//")].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__31518,link){
var map__31520 = p__31518;
var map__31520__$1 = ((cljs.core.seq_QMARK_.call(null,map__31520))?cljs.core.apply.call(null,cljs.core.hash_map,map__31520):map__31520);
var file = cljs.core.get.call(null,map__31520__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4126__auto__ = link.href;
if(cljs.core.truth_(temp__4126__auto__)){
var link_href = temp__4126__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__4126__auto__,map__31520,map__31520__$1,file){
return (function (p1__31516_SHARP_,p2__31517_SHARP_){
if(cljs.core._EQ_.call(null,p1__31516_SHARP_,p2__31517_SHARP_)){
return p1__31516_SHARP_;
} else {
return false;
}
});})(link_href,temp__4126__auto__,map__31520,map__31520__$1,file))
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
var temp__4126__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__31524){
var map__31525 = p__31524;
var map__31525__$1 = ((cljs.core.seq_QMARK_.call(null,map__31525))?cljs.core.apply.call(null,cljs.core.hash_map,map__31525):map__31525);
var current_url_length = cljs.core.get.call(null,map__31525__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
var match_length = cljs.core.get.call(null,map__31525__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__31521_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__31521_SHARP_);
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
var G__31527 = arguments.length;
switch (G__31527) {
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
figwheel.client.file_reloading.reload_css_file = (function figwheel$client$file_reloading$reload_css_file(p__31529){
var map__31531 = p__31529;
var map__31531__$1 = ((cljs.core.seq_QMARK_.call(null,map__31531))?cljs.core.apply.call(null,cljs.core.hash_map,map__31531):map__31531);
var f_data = map__31531__$1;
var request_url = cljs.core.get.call(null,map__31531__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var file = cljs.core.get.call(null,map__31531__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
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
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__31532,files_msg){
var map__31554 = p__31532;
var map__31554__$1 = ((cljs.core.seq_QMARK_.call(null,map__31554))?cljs.core.apply.call(null,cljs.core.hash_map,map__31554):map__31554);
var opts = map__31554__$1;
var on_cssload = cljs.core.get.call(null,map__31554__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
var seq__31555_31575 = cljs.core.seq.call(null,figwheel.client.file_reloading.add_request_urls.call(null,opts,new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg)));
var chunk__31556_31576 = null;
var count__31557_31577 = (0);
var i__31558_31578 = (0);
while(true){
if((i__31558_31578 < count__31557_31577)){
var f_31579 = cljs.core._nth.call(null,chunk__31556_31576,i__31558_31578);
figwheel.client.file_reloading.reload_css_file.call(null,f_31579);

var G__31580 = seq__31555_31575;
var G__31581 = chunk__31556_31576;
var G__31582 = count__31557_31577;
var G__31583 = (i__31558_31578 + (1));
seq__31555_31575 = G__31580;
chunk__31556_31576 = G__31581;
count__31557_31577 = G__31582;
i__31558_31578 = G__31583;
continue;
} else {
var temp__4126__auto___31584 = cljs.core.seq.call(null,seq__31555_31575);
if(temp__4126__auto___31584){
var seq__31555_31585__$1 = temp__4126__auto___31584;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__31555_31585__$1)){
var c__18945__auto___31586 = cljs.core.chunk_first.call(null,seq__31555_31585__$1);
var G__31587 = cljs.core.chunk_rest.call(null,seq__31555_31585__$1);
var G__31588 = c__18945__auto___31586;
var G__31589 = cljs.core.count.call(null,c__18945__auto___31586);
var G__31590 = (0);
seq__31555_31575 = G__31587;
chunk__31556_31576 = G__31588;
count__31557_31577 = G__31589;
i__31558_31578 = G__31590;
continue;
} else {
var f_31591 = cljs.core.first.call(null,seq__31555_31585__$1);
figwheel.client.file_reloading.reload_css_file.call(null,f_31591);

var G__31592 = cljs.core.next.call(null,seq__31555_31585__$1);
var G__31593 = null;
var G__31594 = (0);
var G__31595 = (0);
seq__31555_31575 = G__31592;
chunk__31556_31576 = G__31593;
count__31557_31577 = G__31594;
i__31558_31578 = G__31595;
continue;
}
} else {
}
}
break;
}

var c__21387__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21387__auto__,map__31554,map__31554__$1,opts,on_cssload){
return (function (){
var f__21388__auto__ = (function (){var switch__21325__auto__ = ((function (c__21387__auto__,map__31554,map__31554__$1,opts,on_cssload){
return (function (state_31565){
var state_val_31566 = (state_31565[(1)]);
if((state_val_31566 === (2))){
var inst_31561 = (state_31565[(2)]);
var inst_31562 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg);
var inst_31563 = on_cssload.call(null,inst_31562);
var state_31565__$1 = (function (){var statearr_31567 = state_31565;
(statearr_31567[(7)] = inst_31561);

return statearr_31567;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31565__$1,inst_31563);
} else {
if((state_val_31566 === (1))){
var inst_31559 = cljs.core.async.timeout.call(null,(100));
var state_31565__$1 = state_31565;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31565__$1,(2),inst_31559);
} else {
return null;
}
}
});})(c__21387__auto__,map__31554,map__31554__$1,opts,on_cssload))
;
return ((function (switch__21325__auto__,c__21387__auto__,map__31554,map__31554__$1,opts,on_cssload){
return (function() {
var figwheel$client$file_reloading$reload_css_files_$_state_machine__21326__auto__ = null;
var figwheel$client$file_reloading$reload_css_files_$_state_machine__21326__auto____0 = (function (){
var statearr_31571 = [null,null,null,null,null,null,null,null];
(statearr_31571[(0)] = figwheel$client$file_reloading$reload_css_files_$_state_machine__21326__auto__);

(statearr_31571[(1)] = (1));

return statearr_31571;
});
var figwheel$client$file_reloading$reload_css_files_$_state_machine__21326__auto____1 = (function (state_31565){
while(true){
var ret_value__21327__auto__ = (function (){try{while(true){
var result__21328__auto__ = switch__21325__auto__.call(null,state_31565);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21328__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21328__auto__;
}
break;
}
}catch (e31572){if((e31572 instanceof Object)){
var ex__21329__auto__ = e31572;
var statearr_31573_31596 = state_31565;
(statearr_31573_31596[(5)] = ex__21329__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31565);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31572;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21327__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31597 = state_31565;
state_31565 = G__31597;
continue;
} else {
return ret_value__21327__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_css_files_$_state_machine__21326__auto__ = function(state_31565){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_css_files_$_state_machine__21326__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_css_files_$_state_machine__21326__auto____1.call(this,state_31565);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$reload_css_files_$_state_machine__21326__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_css_files_$_state_machine__21326__auto____0;
figwheel$client$file_reloading$reload_css_files_$_state_machine__21326__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_css_files_$_state_machine__21326__auto____1;
return figwheel$client$file_reloading$reload_css_files_$_state_machine__21326__auto__;
})()
;})(switch__21325__auto__,c__21387__auto__,map__31554,map__31554__$1,opts,on_cssload))
})();
var state__21389__auto__ = (function (){var statearr_31574 = f__21388__auto__.call(null);
(statearr_31574[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21387__auto__);

return statearr_31574;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21389__auto__);
});})(c__21387__auto__,map__31554,map__31554__$1,opts,on_cssload))
);

return c__21387__auto__;
} else {
return null;
}
});

//# sourceMappingURL=file_reloading.js.map?rel=1441291726694