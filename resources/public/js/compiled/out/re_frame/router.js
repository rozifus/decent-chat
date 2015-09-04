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
var c__21387__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21387__auto__){
return (function (){
var f__21388__auto__ = (function (){var switch__21325__auto__ = ((function (c__21387__auto__){
return (function (state_26374){
var state_val_26375 = (state_26374[(1)]);
if((state_val_26375 === (7))){
var inst_26359 = (state_26374[(2)]);
var state_26374__$1 = (function (){var statearr_26376 = state_26374;
(statearr_26376[(7)] = inst_26359);

return statearr_26376;
})();
var statearr_26377_26397 = state_26374__$1;
(statearr_26377_26397[(2)] = null);

(statearr_26377_26397[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26375 === (1))){
var state_26374__$1 = state_26374;
var statearr_26378_26398 = state_26374__$1;
(statearr_26378_26398[(2)] = null);

(statearr_26378_26398[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26375 === (4))){
var inst_26346 = (state_26374[(8)]);
var inst_26346__$1 = (state_26374[(2)]);
var inst_26347 = cljs.core.meta.call(null,inst_26346__$1);
var inst_26348 = new cljs.core.Keyword(null,"flush-dom","flush-dom",-933676816).cljs$core$IFn$_invoke$arity$1(inst_26347);
var state_26374__$1 = (function (){var statearr_26379 = state_26374;
(statearr_26379[(8)] = inst_26346__$1);

return statearr_26379;
})();
if(cljs.core.truth_(inst_26348)){
var statearr_26380_26399 = state_26374__$1;
(statearr_26380_26399[(1)] = (5));

} else {
var statearr_26381_26400 = state_26374__$1;
(statearr_26381_26400[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26375 === (6))){
var inst_26355 = cljs.core.async.timeout.call(null,(0));
var state_26374__$1 = state_26374;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26374__$1,(9),inst_26355);
} else {
if((state_val_26375 === (3))){
var inst_26372 = (state_26374[(2)]);
var state_26374__$1 = state_26374;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26374__$1,inst_26372);
} else {
if((state_val_26375 === (12))){
var inst_26346 = (state_26374[(8)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_26374,(11),Object,null,(10));
var inst_26367 = re_frame.handlers.handle.call(null,inst_26346);
var state_26374__$1 = state_26374;
var statearr_26382_26401 = state_26374__$1;
(statearr_26382_26401[(2)] = inst_26367);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26374__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26375 === (2))){
var state_26374__$1 = state_26374;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26374__$1,(4),re_frame.router.event_chan);
} else {
if((state_val_26375 === (11))){
var inst_26360 = (state_26374[(2)]);
var inst_26361 = re_frame.router.purge_chan.call(null);
var inst_26362 = re_frame$router$router_loop.call(null);
var inst_26363 = (function(){throw inst_26360})();
var state_26374__$1 = (function (){var statearr_26383 = state_26374;
(statearr_26383[(9)] = inst_26362);

(statearr_26383[(10)] = inst_26361);

return statearr_26383;
})();
var statearr_26384_26402 = state_26374__$1;
(statearr_26384_26402[(2)] = inst_26363);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26374__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26375 === (9))){
var inst_26357 = (state_26374[(2)]);
var state_26374__$1 = state_26374;
var statearr_26385_26403 = state_26374__$1;
(statearr_26385_26403[(2)] = inst_26357);

(statearr_26385_26403[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26375 === (5))){
var inst_26350 = reagent.core.flush.call(null);
var inst_26351 = cljs.core.async.timeout.call(null,(20));
var state_26374__$1 = (function (){var statearr_26386 = state_26374;
(statearr_26386[(11)] = inst_26350);

return statearr_26386;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26374__$1,(8),inst_26351);
} else {
if((state_val_26375 === (10))){
var inst_26369 = (state_26374[(2)]);
var state_26374__$1 = (function (){var statearr_26387 = state_26374;
(statearr_26387[(12)] = inst_26369);

return statearr_26387;
})();
var statearr_26388_26404 = state_26374__$1;
(statearr_26388_26404[(2)] = null);

(statearr_26388_26404[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26375 === (8))){
var inst_26353 = (state_26374[(2)]);
var state_26374__$1 = state_26374;
var statearr_26389_26405 = state_26374__$1;
(statearr_26389_26405[(2)] = inst_26353);

(statearr_26389_26405[(1)] = (7));


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
});})(c__21387__auto__))
;
return ((function (switch__21325__auto__,c__21387__auto__){
return (function() {
var re_frame$router$router_loop_$_state_machine__21326__auto__ = null;
var re_frame$router$router_loop_$_state_machine__21326__auto____0 = (function (){
var statearr_26393 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_26393[(0)] = re_frame$router$router_loop_$_state_machine__21326__auto__);

(statearr_26393[(1)] = (1));

return statearr_26393;
});
var re_frame$router$router_loop_$_state_machine__21326__auto____1 = (function (state_26374){
while(true){
var ret_value__21327__auto__ = (function (){try{while(true){
var result__21328__auto__ = switch__21325__auto__.call(null,state_26374);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21328__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21328__auto__;
}
break;
}
}catch (e26394){if((e26394 instanceof Object)){
var ex__21329__auto__ = e26394;
var statearr_26395_26406 = state_26374;
(statearr_26395_26406[(5)] = ex__21329__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26374);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26394;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21327__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26407 = state_26374;
state_26374 = G__26407;
continue;
} else {
return ret_value__21327__auto__;
}
break;
}
});
re_frame$router$router_loop_$_state_machine__21326__auto__ = function(state_26374){
switch(arguments.length){
case 0:
return re_frame$router$router_loop_$_state_machine__21326__auto____0.call(this);
case 1:
return re_frame$router$router_loop_$_state_machine__21326__auto____1.call(this,state_26374);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
re_frame$router$router_loop_$_state_machine__21326__auto__.cljs$core$IFn$_invoke$arity$0 = re_frame$router$router_loop_$_state_machine__21326__auto____0;
re_frame$router$router_loop_$_state_machine__21326__auto__.cljs$core$IFn$_invoke$arity$1 = re_frame$router$router_loop_$_state_machine__21326__auto____1;
return re_frame$router$router_loop_$_state_machine__21326__auto__;
})()
;})(switch__21325__auto__,c__21387__auto__))
})();
var state__21389__auto__ = (function (){var statearr_26396 = f__21388__auto__.call(null);
(statearr_26396[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21387__auto__);

return statearr_26396;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21389__auto__);
});})(c__21387__auto__))
);

return c__21387__auto__;
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

//# sourceMappingURL=router.js.map?rel=1441291720925