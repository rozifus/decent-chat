// Compiled by ClojureScript 0.0-3211 {}
goog.provide('re_frame.router');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('re_frame.utils');
goog.require('re_frame.handlers');
goog.require('reagent.core');
re_frame.router.event_chan = cljs.core.async.chan.call(null);
/**
 * read all pending events from the channel and drop them on the floor
 */
re_frame.router.purge_chan = (function re_frame$router$purge_chan(){
return null;
});
re_frame.router.router_loop = (function re_frame$router$router_loop(){
var c__22071__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22071__auto__){
return (function (){
var f__22072__auto__ = (function (){var switch__22009__auto__ = ((function (c__22071__auto__){
return (function (state_26367){
var state_val_26368 = (state_26367[(1)]);
if((state_val_26368 === (7))){
var inst_26352 = (state_26367[(2)]);
var state_26367__$1 = (function (){var statearr_26369 = state_26367;
(statearr_26369[(7)] = inst_26352);

return statearr_26369;
})();
var statearr_26370_26390 = state_26367__$1;
(statearr_26370_26390[(2)] = null);

(statearr_26370_26390[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26368 === (1))){
var state_26367__$1 = state_26367;
var statearr_26371_26391 = state_26367__$1;
(statearr_26371_26391[(2)] = null);

(statearr_26371_26391[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26368 === (4))){
var inst_26339 = (state_26367[(8)]);
var inst_26339__$1 = (state_26367[(2)]);
var inst_26340 = cljs.core.meta.call(null,inst_26339__$1);
var inst_26341 = new cljs.core.Keyword(null,"flush-dom","flush-dom",-933676816).cljs$core$IFn$_invoke$arity$1(inst_26340);
var state_26367__$1 = (function (){var statearr_26372 = state_26367;
(statearr_26372[(8)] = inst_26339__$1);

return statearr_26372;
})();
if(cljs.core.truth_(inst_26341)){
var statearr_26373_26392 = state_26367__$1;
(statearr_26373_26392[(1)] = (5));

} else {
var statearr_26374_26393 = state_26367__$1;
(statearr_26374_26393[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26368 === (6))){
var inst_26348 = cljs.core.async.timeout.call(null,(0));
var state_26367__$1 = state_26367;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26367__$1,(9),inst_26348);
} else {
if((state_val_26368 === (3))){
var inst_26365 = (state_26367[(2)]);
var state_26367__$1 = state_26367;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26367__$1,inst_26365);
} else {
if((state_val_26368 === (12))){
var inst_26339 = (state_26367[(8)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_26367,(11),Object,null,(10));
var inst_26360 = re_frame.handlers.handle.call(null,inst_26339);
var state_26367__$1 = state_26367;
var statearr_26375_26394 = state_26367__$1;
(statearr_26375_26394[(2)] = inst_26360);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26367__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26368 === (2))){
var state_26367__$1 = state_26367;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26367__$1,(4),re_frame.router.event_chan);
} else {
if((state_val_26368 === (11))){
var inst_26353 = (state_26367[(2)]);
var inst_26354 = re_frame.router.purge_chan.call(null);
var inst_26355 = re_frame$router$router_loop.call(null);
var inst_26356 = (function(){throw inst_26353})();
var state_26367__$1 = (function (){var statearr_26376 = state_26367;
(statearr_26376[(9)] = inst_26354);

(statearr_26376[(10)] = inst_26355);

return statearr_26376;
})();
var statearr_26377_26395 = state_26367__$1;
(statearr_26377_26395[(2)] = inst_26356);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26367__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26368 === (9))){
var inst_26350 = (state_26367[(2)]);
var state_26367__$1 = state_26367;
var statearr_26378_26396 = state_26367__$1;
(statearr_26378_26396[(2)] = inst_26350);

(statearr_26378_26396[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26368 === (5))){
var inst_26343 = reagent.core.flush.call(null);
var inst_26344 = cljs.core.async.timeout.call(null,(20));
var state_26367__$1 = (function (){var statearr_26379 = state_26367;
(statearr_26379[(11)] = inst_26343);

return statearr_26379;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26367__$1,(8),inst_26344);
} else {
if((state_val_26368 === (10))){
var inst_26362 = (state_26367[(2)]);
var state_26367__$1 = (function (){var statearr_26380 = state_26367;
(statearr_26380[(12)] = inst_26362);

return statearr_26380;
})();
var statearr_26381_26397 = state_26367__$1;
(statearr_26381_26397[(2)] = null);

(statearr_26381_26397[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26368 === (8))){
var inst_26346 = (state_26367[(2)]);
var state_26367__$1 = state_26367;
var statearr_26382_26398 = state_26367__$1;
(statearr_26382_26398[(2)] = inst_26346);

(statearr_26382_26398[(1)] = (7));


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
});})(c__22071__auto__))
;
return ((function (switch__22009__auto__,c__22071__auto__){
return (function() {
var re_frame$router$router_loop_$_state_machine__22010__auto__ = null;
var re_frame$router$router_loop_$_state_machine__22010__auto____0 = (function (){
var statearr_26386 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_26386[(0)] = re_frame$router$router_loop_$_state_machine__22010__auto__);

(statearr_26386[(1)] = (1));

return statearr_26386;
});
var re_frame$router$router_loop_$_state_machine__22010__auto____1 = (function (state_26367){
while(true){
var ret_value__22011__auto__ = (function (){try{while(true){
var result__22012__auto__ = switch__22009__auto__.call(null,state_26367);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22012__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22012__auto__;
}
break;
}
}catch (e26387){if((e26387 instanceof Object)){
var ex__22013__auto__ = e26387;
var statearr_26388_26399 = state_26367;
(statearr_26388_26399[(5)] = ex__22013__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26367);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26387;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22011__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26400 = state_26367;
state_26367 = G__26400;
continue;
} else {
return ret_value__22011__auto__;
}
break;
}
});
re_frame$router$router_loop_$_state_machine__22010__auto__ = function(state_26367){
switch(arguments.length){
case 0:
return re_frame$router$router_loop_$_state_machine__22010__auto____0.call(this);
case 1:
return re_frame$router$router_loop_$_state_machine__22010__auto____1.call(this,state_26367);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
re_frame$router$router_loop_$_state_machine__22010__auto__.cljs$core$IFn$_invoke$arity$0 = re_frame$router$router_loop_$_state_machine__22010__auto____0;
re_frame$router$router_loop_$_state_machine__22010__auto__.cljs$core$IFn$_invoke$arity$1 = re_frame$router$router_loop_$_state_machine__22010__auto____1;
return re_frame$router$router_loop_$_state_machine__22010__auto__;
})()
;})(switch__22009__auto__,c__22071__auto__))
})();
var state__22073__auto__ = (function (){var statearr_26389 = f__22072__auto__.call(null);
(statearr_26389[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22071__auto__);

return statearr_26389;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22073__auto__);
});})(c__22071__auto__))
);

return c__22071__auto__;
});
re_frame.router.router_loop.call(null);
/**
 * Send an event to be processed by the registered handler.
 * 
 * Usage example:
 * (dispatch [:delete-item 42])
 * 
 */
re_frame.router.dispatch = (function re_frame$router$dispatch(event_v){
if((event_v == null)){
re_frame.utils.error.call(null,"re-frame: \"dispatch\" is ignoring a nil event.");
} else {
cljs.core.async.put_BANG_.call(null,re_frame.router.event_chan,event_v);
}

return null;
});
/**
 * Send an event to be processed by the registered handler, but avoid the async-inducing
 * use of core.async/chan.
 * 
 * Usage example:
 * (dispatch-sync [:delete-item 42])
 */
re_frame.router.dispatch_sync = (function re_frame$router$dispatch_sync(event_v){
re_frame.handlers.handle.call(null,event_v);

return null;
});

//# sourceMappingURL=router.js.map?rel=1441122547179