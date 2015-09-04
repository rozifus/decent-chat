// Compiled by ClojureScript 0.0-3211 {}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(f){
if(typeof cljs.core.async.t26413 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t26413 = (function (f,fn_handler,meta26414){
this.f = f;
this.fn_handler = fn_handler;
this.meta26414 = meta26414;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t26413.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t26413.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t26413.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t26413.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_26415){
var self__ = this;
var _26415__$1 = this;
return self__.meta26414;
});

cljs.core.async.t26413.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_26415,meta26414__$1){
var self__ = this;
var _26415__$1 = this;
return (new cljs.core.async.t26413(self__.f,self__.fn_handler,meta26414__$1));
});

cljs.core.async.t26413.cljs$lang$type = true;

cljs.core.async.t26413.cljs$lang$ctorStr = "cljs.core.async/t26413";

cljs.core.async.t26413.cljs$lang$ctorPrWriter = (function (this__18739__auto__,writer__18740__auto__,opt__18741__auto__){
return cljs.core._write.call(null,writer__18740__auto__,"cljs.core.async/t26413");
});

cljs.core.async.__GT_t26413 = (function cljs$core$async$fn_handler_$___GT_t26413(f__$1,fn_handler__$1,meta26414){
return (new cljs.core.async.t26413(f__$1,fn_handler__$1,meta26414));
});

}

return (new cljs.core.async.t26413(f,cljs$core$async$fn_handler,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 * val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 * buffered, but oldest elements in buffer will be dropped (not
 * transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full.
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
var G__26417 = buff;
if(G__26417){
var bit__18834__auto__ = null;
if(cljs.core.truth_((function (){var or__18160__auto__ = bit__18834__auto__;
if(cljs.core.truth_(or__18160__auto__)){
return or__18160__auto__;
} else {
return G__26417.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})())){
return true;
} else {
if((!G__26417.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__26417);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__26417);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 * (filter p) etc or a composition thereof), and an optional exception handler.
 * If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 * transducer is supplied a buffer must be specified. ex-handler must be a
 * fn of one argument - if an exception occurs during transformation it will be called
 * with the thrown value as an argument, and any non-nil return value will be placed
 * in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(){
var G__26419 = arguments.length;
switch (G__26419) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.call(null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.call(null,buf_or_n,null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.call(null,buf_or_n,xform,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("buffer must be supplied when transducer is"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,new cljs.core.Symbol(null,"buf-or-n","buf-or-n",-1646815050,null)))].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
});

cljs.core.async.chan.cljs$lang$maxFixedArity = 3;
/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout.call(null,msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 * return nil if closed. Will park if nothing is available.
 * Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(){
var G__26422 = arguments.length;
switch (G__26422) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_26424 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_26424);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_26424,ret){
return (function (){
return fn1.call(null,val_26424);
});})(val_26424,ret))
);
}
} else {
}

return null;
});

cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3;
cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.call(null,cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 * inside a (go ...) block. Will park if no buffer space is available.
 * Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn0 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn0 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(){
var G__26426 = arguments.length;
switch (G__26426) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__4124__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__4124__auto__)){
var ret = temp__4124__auto__;
return cljs.core.deref.call(null,ret);
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.call(null,port,val,fn1,true);
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__4124__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(temp__4124__auto__)){
var retb = temp__4124__auto__;
var ret = cljs.core.deref.call(null,retb);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,ret);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (ret,retb,temp__4124__auto__){
return (function (){
return fn1.call(null,ret);
});})(ret,retb,temp__4124__auto__))
);
}

return ret;
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4;
cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__19045__auto___26428 = n;
var x_26429 = (0);
while(true){
if((x_26429 < n__19045__auto___26428)){
(a[x_26429] = (0));

var G__26430 = (x_26429 + (1));
x_26429 = G__26430;
continue;
} else {
}
break;
}

var i = (1);
while(true){
if(cljs.core._EQ_.call(null,i,n)){
return a;
} else {
var j = cljs.core.rand_int.call(null,i);
(a[i] = (a[j]));

(a[j] = i);

var G__26431 = (i + (1));
i = G__26431;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t26435 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t26435 = (function (flag,alt_flag,meta26436){
this.flag = flag;
this.alt_flag = alt_flag;
this.meta26436 = meta26436;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t26435.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t26435.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t26435.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t26435.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_26437){
var self__ = this;
var _26437__$1 = this;
return self__.meta26436;
});})(flag))
;

cljs.core.async.t26435.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_26437,meta26436__$1){
var self__ = this;
var _26437__$1 = this;
return (new cljs.core.async.t26435(self__.flag,self__.alt_flag,meta26436__$1));
});})(flag))
;

cljs.core.async.t26435.cljs$lang$type = true;

cljs.core.async.t26435.cljs$lang$ctorStr = "cljs.core.async/t26435";

cljs.core.async.t26435.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__18739__auto__,writer__18740__auto__,opt__18741__auto__){
return cljs.core._write.call(null,writer__18740__auto__,"cljs.core.async/t26435");
});})(flag))
;

cljs.core.async.__GT_t26435 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t26435(flag__$1,alt_flag__$1,meta26436){
return (new cljs.core.async.t26435(flag__$1,alt_flag__$1,meta26436));
});})(flag))
;

}

return (new cljs.core.async.t26435(flag,cljs$core$async$alt_flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t26441 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t26441 = (function (cb,flag,alt_handler,meta26442){
this.cb = cb;
this.flag = flag;
this.alt_handler = alt_handler;
this.meta26442 = meta26442;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t26441.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t26441.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t26441.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t26441.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_26443){
var self__ = this;
var _26443__$1 = this;
return self__.meta26442;
});

cljs.core.async.t26441.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_26443,meta26442__$1){
var self__ = this;
var _26443__$1 = this;
return (new cljs.core.async.t26441(self__.cb,self__.flag,self__.alt_handler,meta26442__$1));
});

cljs.core.async.t26441.cljs$lang$type = true;

cljs.core.async.t26441.cljs$lang$ctorStr = "cljs.core.async/t26441";

cljs.core.async.t26441.cljs$lang$ctorPrWriter = (function (this__18739__auto__,writer__18740__auto__,opt__18741__auto__){
return cljs.core._write.call(null,writer__18740__auto__,"cljs.core.async/t26441");
});

cljs.core.async.__GT_t26441 = (function cljs$core$async$alt_handler_$___GT_t26441(cb__$1,flag__$1,alt_handler__$1,meta26442){
return (new cljs.core.async.t26441(cb__$1,flag__$1,alt_handler__$1,meta26442));
});

}

return (new cljs.core.async.t26441(cb,flag,cljs$core$async$alt_handler,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
var flag = cljs.core.async.alt_flag.call(null);
var n = cljs.core.count.call(null,ports);
var idxs = cljs.core.async.random_array.call(null,n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.call(null,ports,idx);
var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,(0)):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,(1));
return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__26444_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__26444_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__26445_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__26445_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__18160__auto__ = wport;
if(cljs.core.truth_(or__18160__auto__)){
return or__18160__auto__;
} else {
return port;
}
})()], null));
} else {
var G__26446 = (i + (1));
i = G__26446;
continue;
}
} else {
return null;
}
break;
}
})();
var or__18160__auto__ = ret;
if(cljs.core.truth_(or__18160__auto__)){
return or__18160__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__4126__auto__ = (function (){var and__18148__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__18148__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__18148__auto__;
}
})();
if(cljs.core.truth_(temp__4126__auto__)){
var got = temp__4126__auto__;
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 * [channel-to-put-to val-to-put], in any combination. Takes will be
 * made as if by <!, and puts will be made as if by >!. Unless
 * the :priority option is true, if more than one port operation is
 * ready a non-deterministic choice will be made. If no operation is
 * ready and a :default value is supplied, [default-val :default] will
 * be returned, otherwise alts! will park until the first operation to
 * become ready completes. Returns [val port] of the completed
 * operation, where val is the value taken for takes, and a
 * boolean (true unless already closed, as per put!) for puts.
 * 
 * opts are passed as :key val ... Supported options:
 * 
 * :default val - the value to use if none of the operations are immediately ready
 * :priority true - (default nil) when true, the operations will be tried in order.
 * 
 * Note: there is no guarantee that the port exps or val exprs will be
 * used, nor in what order should they be, so they should not be
 * depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(){
var argseq__19200__auto__ = ((((1) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0))):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__19200__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__26449){
var map__26450 = p__26449;
var map__26450__$1 = ((cljs.core.seq_QMARK_.call(null,map__26450))?cljs.core.apply.call(null,cljs.core.hash_map,map__26450):map__26450);
var opts = map__26450__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq26447){
var G__26448 = cljs.core.first.call(null,seq26447);
var seq26447__$1 = cljs.core.next.call(null,seq26447);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__26448,seq26447__$1);
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(){
var G__26452 = arguments.length;
switch (G__26452) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__21387__auto___26501 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21387__auto___26501){
return (function (){
var f__21388__auto__ = (function (){var switch__21325__auto__ = ((function (c__21387__auto___26501){
return (function (state_26476){
var state_val_26477 = (state_26476[(1)]);
if((state_val_26477 === (7))){
var inst_26472 = (state_26476[(2)]);
var state_26476__$1 = state_26476;
var statearr_26478_26502 = state_26476__$1;
(statearr_26478_26502[(2)] = inst_26472);

(statearr_26478_26502[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26477 === (1))){
var state_26476__$1 = state_26476;
var statearr_26479_26503 = state_26476__$1;
(statearr_26479_26503[(2)] = null);

(statearr_26479_26503[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26477 === (4))){
var inst_26455 = (state_26476[(7)]);
var inst_26455__$1 = (state_26476[(2)]);
var inst_26456 = (inst_26455__$1 == null);
var state_26476__$1 = (function (){var statearr_26480 = state_26476;
(statearr_26480[(7)] = inst_26455__$1);

return statearr_26480;
})();
if(cljs.core.truth_(inst_26456)){
var statearr_26481_26504 = state_26476__$1;
(statearr_26481_26504[(1)] = (5));

} else {
var statearr_26482_26505 = state_26476__$1;
(statearr_26482_26505[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26477 === (13))){
var state_26476__$1 = state_26476;
var statearr_26483_26506 = state_26476__$1;
(statearr_26483_26506[(2)] = null);

(statearr_26483_26506[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26477 === (6))){
var inst_26455 = (state_26476[(7)]);
var state_26476__$1 = state_26476;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26476__$1,(11),to,inst_26455);
} else {
if((state_val_26477 === (3))){
var inst_26474 = (state_26476[(2)]);
var state_26476__$1 = state_26476;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26476__$1,inst_26474);
} else {
if((state_val_26477 === (12))){
var state_26476__$1 = state_26476;
var statearr_26484_26507 = state_26476__$1;
(statearr_26484_26507[(2)] = null);

(statearr_26484_26507[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26477 === (2))){
var state_26476__$1 = state_26476;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26476__$1,(4),from);
} else {
if((state_val_26477 === (11))){
var inst_26465 = (state_26476[(2)]);
var state_26476__$1 = state_26476;
if(cljs.core.truth_(inst_26465)){
var statearr_26485_26508 = state_26476__$1;
(statearr_26485_26508[(1)] = (12));

} else {
var statearr_26486_26509 = state_26476__$1;
(statearr_26486_26509[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26477 === (9))){
var state_26476__$1 = state_26476;
var statearr_26487_26510 = state_26476__$1;
(statearr_26487_26510[(2)] = null);

(statearr_26487_26510[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26477 === (5))){
var state_26476__$1 = state_26476;
if(cljs.core.truth_(close_QMARK_)){
var statearr_26488_26511 = state_26476__$1;
(statearr_26488_26511[(1)] = (8));

} else {
var statearr_26489_26512 = state_26476__$1;
(statearr_26489_26512[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26477 === (14))){
var inst_26470 = (state_26476[(2)]);
var state_26476__$1 = state_26476;
var statearr_26490_26513 = state_26476__$1;
(statearr_26490_26513[(2)] = inst_26470);

(statearr_26490_26513[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26477 === (10))){
var inst_26462 = (state_26476[(2)]);
var state_26476__$1 = state_26476;
var statearr_26491_26514 = state_26476__$1;
(statearr_26491_26514[(2)] = inst_26462);

(statearr_26491_26514[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26477 === (8))){
var inst_26459 = cljs.core.async.close_BANG_.call(null,to);
var state_26476__$1 = state_26476;
var statearr_26492_26515 = state_26476__$1;
(statearr_26492_26515[(2)] = inst_26459);

(statearr_26492_26515[(1)] = (10));


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
});})(c__21387__auto___26501))
;
return ((function (switch__21325__auto__,c__21387__auto___26501){
return (function() {
var cljs$core$async$state_machine__21326__auto__ = null;
var cljs$core$async$state_machine__21326__auto____0 = (function (){
var statearr_26496 = [null,null,null,null,null,null,null,null];
(statearr_26496[(0)] = cljs$core$async$state_machine__21326__auto__);

(statearr_26496[(1)] = (1));

return statearr_26496;
});
var cljs$core$async$state_machine__21326__auto____1 = (function (state_26476){
while(true){
var ret_value__21327__auto__ = (function (){try{while(true){
var result__21328__auto__ = switch__21325__auto__.call(null,state_26476);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21328__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21328__auto__;
}
break;
}
}catch (e26497){if((e26497 instanceof Object)){
var ex__21329__auto__ = e26497;
var statearr_26498_26516 = state_26476;
(statearr_26498_26516[(5)] = ex__21329__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26476);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26497;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21327__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26517 = state_26476;
state_26476 = G__26517;
continue;
} else {
return ret_value__21327__auto__;
}
break;
}
});
cljs$core$async$state_machine__21326__auto__ = function(state_26476){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__21326__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__21326__auto____1.call(this,state_26476);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__21326__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__21326__auto____0;
cljs$core$async$state_machine__21326__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__21326__auto____1;
return cljs$core$async$state_machine__21326__auto__;
})()
;})(switch__21325__auto__,c__21387__auto___26501))
})();
var state__21389__auto__ = (function (){var statearr_26499 = f__21388__auto__.call(null);
(statearr_26499[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21387__auto___26501);

return statearr_26499;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21389__auto__);
});})(c__21387__auto___26501))
);


return to;
});

cljs.core.async.pipe.cljs$lang$maxFixedArity = 3;
cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"pos?","pos?",-244377722,null),new cljs.core.Symbol(null,"n","n",-2092305744,null))))].join('')));
}

var jobs = cljs.core.async.chan.call(null,n);
var results = cljs.core.async.chan.call(null,n);
var process = ((function (jobs,results){
return (function (p__26701){
var vec__26702 = p__26701;
var v = cljs.core.nth.call(null,vec__26702,(0),null);
var p = cljs.core.nth.call(null,vec__26702,(1),null);
var job = vec__26702;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__21387__auto___26884 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21387__auto___26884,res,vec__26702,v,p,job,jobs,results){
return (function (){
var f__21388__auto__ = (function (){var switch__21325__auto__ = ((function (c__21387__auto___26884,res,vec__26702,v,p,job,jobs,results){
return (function (state_26707){
var state_val_26708 = (state_26707[(1)]);
if((state_val_26708 === (2))){
var inst_26704 = (state_26707[(2)]);
var inst_26705 = cljs.core.async.close_BANG_.call(null,res);
var state_26707__$1 = (function (){var statearr_26709 = state_26707;
(statearr_26709[(7)] = inst_26704);

return statearr_26709;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26707__$1,inst_26705);
} else {
if((state_val_26708 === (1))){
var state_26707__$1 = state_26707;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26707__$1,(2),res,v);
} else {
return null;
}
}
});})(c__21387__auto___26884,res,vec__26702,v,p,job,jobs,results))
;
return ((function (switch__21325__auto__,c__21387__auto___26884,res,vec__26702,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__21326__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__21326__auto____0 = (function (){
var statearr_26713 = [null,null,null,null,null,null,null,null];
(statearr_26713[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__21326__auto__);

(statearr_26713[(1)] = (1));

return statearr_26713;
});
var cljs$core$async$pipeline_STAR__$_state_machine__21326__auto____1 = (function (state_26707){
while(true){
var ret_value__21327__auto__ = (function (){try{while(true){
var result__21328__auto__ = switch__21325__auto__.call(null,state_26707);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21328__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21328__auto__;
}
break;
}
}catch (e26714){if((e26714 instanceof Object)){
var ex__21329__auto__ = e26714;
var statearr_26715_26885 = state_26707;
(statearr_26715_26885[(5)] = ex__21329__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26707);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26714;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21327__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26886 = state_26707;
state_26707 = G__26886;
continue;
} else {
return ret_value__21327__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__21326__auto__ = function(state_26707){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__21326__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__21326__auto____1.call(this,state_26707);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__21326__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__21326__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__21326__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__21326__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__21326__auto__;
})()
;})(switch__21325__auto__,c__21387__auto___26884,res,vec__26702,v,p,job,jobs,results))
})();
var state__21389__auto__ = (function (){var statearr_26716 = f__21388__auto__.call(null);
(statearr_26716[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21387__auto___26884);

return statearr_26716;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21389__auto__);
});})(c__21387__auto___26884,res,vec__26702,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__26717){
var vec__26718 = p__26717;
var v = cljs.core.nth.call(null,vec__26718,(0),null);
var p = cljs.core.nth.call(null,vec__26718,(1),null);
var job = vec__26718;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1));
xf.call(null,v,res);

cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results,process))
;
var n__19045__auto___26887 = n;
var __26888 = (0);
while(true){
if((__26888 < n__19045__auto___26887)){
var G__26719_26889 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__26719_26889) {
case "async":
var c__21387__auto___26891 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__26888,c__21387__auto___26891,G__26719_26889,n__19045__auto___26887,jobs,results,process,async){
return (function (){
var f__21388__auto__ = (function (){var switch__21325__auto__ = ((function (__26888,c__21387__auto___26891,G__26719_26889,n__19045__auto___26887,jobs,results,process,async){
return (function (state_26732){
var state_val_26733 = (state_26732[(1)]);
if((state_val_26733 === (7))){
var inst_26728 = (state_26732[(2)]);
var state_26732__$1 = state_26732;
var statearr_26734_26892 = state_26732__$1;
(statearr_26734_26892[(2)] = inst_26728);

(statearr_26734_26892[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26733 === (6))){
var state_26732__$1 = state_26732;
var statearr_26735_26893 = state_26732__$1;
(statearr_26735_26893[(2)] = null);

(statearr_26735_26893[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26733 === (5))){
var state_26732__$1 = state_26732;
var statearr_26736_26894 = state_26732__$1;
(statearr_26736_26894[(2)] = null);

(statearr_26736_26894[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26733 === (4))){
var inst_26722 = (state_26732[(2)]);
var inst_26723 = async.call(null,inst_26722);
var state_26732__$1 = state_26732;
if(cljs.core.truth_(inst_26723)){
var statearr_26737_26895 = state_26732__$1;
(statearr_26737_26895[(1)] = (5));

} else {
var statearr_26738_26896 = state_26732__$1;
(statearr_26738_26896[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26733 === (3))){
var inst_26730 = (state_26732[(2)]);
var state_26732__$1 = state_26732;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26732__$1,inst_26730);
} else {
if((state_val_26733 === (2))){
var state_26732__$1 = state_26732;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26732__$1,(4),jobs);
} else {
if((state_val_26733 === (1))){
var state_26732__$1 = state_26732;
var statearr_26739_26897 = state_26732__$1;
(statearr_26739_26897[(2)] = null);

(statearr_26739_26897[(1)] = (2));


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
});})(__26888,c__21387__auto___26891,G__26719_26889,n__19045__auto___26887,jobs,results,process,async))
;
return ((function (__26888,switch__21325__auto__,c__21387__auto___26891,G__26719_26889,n__19045__auto___26887,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__21326__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__21326__auto____0 = (function (){
var statearr_26743 = [null,null,null,null,null,null,null];
(statearr_26743[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__21326__auto__);

(statearr_26743[(1)] = (1));

return statearr_26743;
});
var cljs$core$async$pipeline_STAR__$_state_machine__21326__auto____1 = (function (state_26732){
while(true){
var ret_value__21327__auto__ = (function (){try{while(true){
var result__21328__auto__ = switch__21325__auto__.call(null,state_26732);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21328__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21328__auto__;
}
break;
}
}catch (e26744){if((e26744 instanceof Object)){
var ex__21329__auto__ = e26744;
var statearr_26745_26898 = state_26732;
(statearr_26745_26898[(5)] = ex__21329__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26732);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26744;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21327__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26899 = state_26732;
state_26732 = G__26899;
continue;
} else {
return ret_value__21327__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__21326__auto__ = function(state_26732){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__21326__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__21326__auto____1.call(this,state_26732);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__21326__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__21326__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__21326__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__21326__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__21326__auto__;
})()
;})(__26888,switch__21325__auto__,c__21387__auto___26891,G__26719_26889,n__19045__auto___26887,jobs,results,process,async))
})();
var state__21389__auto__ = (function (){var statearr_26746 = f__21388__auto__.call(null);
(statearr_26746[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21387__auto___26891);

return statearr_26746;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21389__auto__);
});})(__26888,c__21387__auto___26891,G__26719_26889,n__19045__auto___26887,jobs,results,process,async))
);


break;
case "compute":
var c__21387__auto___26900 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__26888,c__21387__auto___26900,G__26719_26889,n__19045__auto___26887,jobs,results,process,async){
return (function (){
var f__21388__auto__ = (function (){var switch__21325__auto__ = ((function (__26888,c__21387__auto___26900,G__26719_26889,n__19045__auto___26887,jobs,results,process,async){
return (function (state_26759){
var state_val_26760 = (state_26759[(1)]);
if((state_val_26760 === (7))){
var inst_26755 = (state_26759[(2)]);
var state_26759__$1 = state_26759;
var statearr_26761_26901 = state_26759__$1;
(statearr_26761_26901[(2)] = inst_26755);

(statearr_26761_26901[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26760 === (6))){
var state_26759__$1 = state_26759;
var statearr_26762_26902 = state_26759__$1;
(statearr_26762_26902[(2)] = null);

(statearr_26762_26902[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26760 === (5))){
var state_26759__$1 = state_26759;
var statearr_26763_26903 = state_26759__$1;
(statearr_26763_26903[(2)] = null);

(statearr_26763_26903[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26760 === (4))){
var inst_26749 = (state_26759[(2)]);
var inst_26750 = process.call(null,inst_26749);
var state_26759__$1 = state_26759;
if(cljs.core.truth_(inst_26750)){
var statearr_26764_26904 = state_26759__$1;
(statearr_26764_26904[(1)] = (5));

} else {
var statearr_26765_26905 = state_26759__$1;
(statearr_26765_26905[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26760 === (3))){
var inst_26757 = (state_26759[(2)]);
var state_26759__$1 = state_26759;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26759__$1,inst_26757);
} else {
if((state_val_26760 === (2))){
var state_26759__$1 = state_26759;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26759__$1,(4),jobs);
} else {
if((state_val_26760 === (1))){
var state_26759__$1 = state_26759;
var statearr_26766_26906 = state_26759__$1;
(statearr_26766_26906[(2)] = null);

(statearr_26766_26906[(1)] = (2));


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
});})(__26888,c__21387__auto___26900,G__26719_26889,n__19045__auto___26887,jobs,results,process,async))
;
return ((function (__26888,switch__21325__auto__,c__21387__auto___26900,G__26719_26889,n__19045__auto___26887,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__21326__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__21326__auto____0 = (function (){
var statearr_26770 = [null,null,null,null,null,null,null];
(statearr_26770[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__21326__auto__);

(statearr_26770[(1)] = (1));

return statearr_26770;
});
var cljs$core$async$pipeline_STAR__$_state_machine__21326__auto____1 = (function (state_26759){
while(true){
var ret_value__21327__auto__ = (function (){try{while(true){
var result__21328__auto__ = switch__21325__auto__.call(null,state_26759);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21328__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21328__auto__;
}
break;
}
}catch (e26771){if((e26771 instanceof Object)){
var ex__21329__auto__ = e26771;
var statearr_26772_26907 = state_26759;
(statearr_26772_26907[(5)] = ex__21329__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26759);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26771;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21327__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26908 = state_26759;
state_26759 = G__26908;
continue;
} else {
return ret_value__21327__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__21326__auto__ = function(state_26759){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__21326__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__21326__auto____1.call(this,state_26759);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__21326__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__21326__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__21326__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__21326__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__21326__auto__;
})()
;})(__26888,switch__21325__auto__,c__21387__auto___26900,G__26719_26889,n__19045__auto___26887,jobs,results,process,async))
})();
var state__21389__auto__ = (function (){var statearr_26773 = f__21388__auto__.call(null);
(statearr_26773[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21387__auto___26900);

return statearr_26773;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21389__auto__);
});})(__26888,c__21387__auto___26900,G__26719_26889,n__19045__auto___26887,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__26909 = (__26888 + (1));
__26888 = G__26909;
continue;
} else {
}
break;
}

var c__21387__auto___26910 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21387__auto___26910,jobs,results,process,async){
return (function (){
var f__21388__auto__ = (function (){var switch__21325__auto__ = ((function (c__21387__auto___26910,jobs,results,process,async){
return (function (state_26795){
var state_val_26796 = (state_26795[(1)]);
if((state_val_26796 === (9))){
var inst_26788 = (state_26795[(2)]);
var state_26795__$1 = (function (){var statearr_26797 = state_26795;
(statearr_26797[(7)] = inst_26788);

return statearr_26797;
})();
var statearr_26798_26911 = state_26795__$1;
(statearr_26798_26911[(2)] = null);

(statearr_26798_26911[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26796 === (8))){
var inst_26781 = (state_26795[(8)]);
var inst_26786 = (state_26795[(2)]);
var state_26795__$1 = (function (){var statearr_26799 = state_26795;
(statearr_26799[(9)] = inst_26786);

return statearr_26799;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26795__$1,(9),results,inst_26781);
} else {
if((state_val_26796 === (7))){
var inst_26791 = (state_26795[(2)]);
var state_26795__$1 = state_26795;
var statearr_26800_26912 = state_26795__$1;
(statearr_26800_26912[(2)] = inst_26791);

(statearr_26800_26912[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26796 === (6))){
var inst_26776 = (state_26795[(10)]);
var inst_26781 = (state_26795[(8)]);
var inst_26781__$1 = cljs.core.async.chan.call(null,(1));
var inst_26782 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_26783 = [inst_26776,inst_26781__$1];
var inst_26784 = (new cljs.core.PersistentVector(null,2,(5),inst_26782,inst_26783,null));
var state_26795__$1 = (function (){var statearr_26801 = state_26795;
(statearr_26801[(8)] = inst_26781__$1);

return statearr_26801;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26795__$1,(8),jobs,inst_26784);
} else {
if((state_val_26796 === (5))){
var inst_26779 = cljs.core.async.close_BANG_.call(null,jobs);
var state_26795__$1 = state_26795;
var statearr_26802_26913 = state_26795__$1;
(statearr_26802_26913[(2)] = inst_26779);

(statearr_26802_26913[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26796 === (4))){
var inst_26776 = (state_26795[(10)]);
var inst_26776__$1 = (state_26795[(2)]);
var inst_26777 = (inst_26776__$1 == null);
var state_26795__$1 = (function (){var statearr_26803 = state_26795;
(statearr_26803[(10)] = inst_26776__$1);

return statearr_26803;
})();
if(cljs.core.truth_(inst_26777)){
var statearr_26804_26914 = state_26795__$1;
(statearr_26804_26914[(1)] = (5));

} else {
var statearr_26805_26915 = state_26795__$1;
(statearr_26805_26915[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26796 === (3))){
var inst_26793 = (state_26795[(2)]);
var state_26795__$1 = state_26795;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26795__$1,inst_26793);
} else {
if((state_val_26796 === (2))){
var state_26795__$1 = state_26795;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26795__$1,(4),from);
} else {
if((state_val_26796 === (1))){
var state_26795__$1 = state_26795;
var statearr_26806_26916 = state_26795__$1;
(statearr_26806_26916[(2)] = null);

(statearr_26806_26916[(1)] = (2));


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
});})(c__21387__auto___26910,jobs,results,process,async))
;
return ((function (switch__21325__auto__,c__21387__auto___26910,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__21326__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__21326__auto____0 = (function (){
var statearr_26810 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_26810[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__21326__auto__);

(statearr_26810[(1)] = (1));

return statearr_26810;
});
var cljs$core$async$pipeline_STAR__$_state_machine__21326__auto____1 = (function (state_26795){
while(true){
var ret_value__21327__auto__ = (function (){try{while(true){
var result__21328__auto__ = switch__21325__auto__.call(null,state_26795);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21328__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21328__auto__;
}
break;
}
}catch (e26811){if((e26811 instanceof Object)){
var ex__21329__auto__ = e26811;
var statearr_26812_26917 = state_26795;
(statearr_26812_26917[(5)] = ex__21329__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26795);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26811;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21327__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26918 = state_26795;
state_26795 = G__26918;
continue;
} else {
return ret_value__21327__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__21326__auto__ = function(state_26795){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__21326__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__21326__auto____1.call(this,state_26795);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__21326__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__21326__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__21326__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__21326__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__21326__auto__;
})()
;})(switch__21325__auto__,c__21387__auto___26910,jobs,results,process,async))
})();
var state__21389__auto__ = (function (){var statearr_26813 = f__21388__auto__.call(null);
(statearr_26813[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21387__auto___26910);

return statearr_26813;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21389__auto__);
});})(c__21387__auto___26910,jobs,results,process,async))
);


var c__21387__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21387__auto__,jobs,results,process,async){
return (function (){
var f__21388__auto__ = (function (){var switch__21325__auto__ = ((function (c__21387__auto__,jobs,results,process,async){
return (function (state_26851){
var state_val_26852 = (state_26851[(1)]);
if((state_val_26852 === (7))){
var inst_26847 = (state_26851[(2)]);
var state_26851__$1 = state_26851;
var statearr_26853_26919 = state_26851__$1;
(statearr_26853_26919[(2)] = inst_26847);

(statearr_26853_26919[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26852 === (20))){
var state_26851__$1 = state_26851;
var statearr_26854_26920 = state_26851__$1;
(statearr_26854_26920[(2)] = null);

(statearr_26854_26920[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26852 === (1))){
var state_26851__$1 = state_26851;
var statearr_26855_26921 = state_26851__$1;
(statearr_26855_26921[(2)] = null);

(statearr_26855_26921[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26852 === (4))){
var inst_26816 = (state_26851[(7)]);
var inst_26816__$1 = (state_26851[(2)]);
var inst_26817 = (inst_26816__$1 == null);
var state_26851__$1 = (function (){var statearr_26856 = state_26851;
(statearr_26856[(7)] = inst_26816__$1);

return statearr_26856;
})();
if(cljs.core.truth_(inst_26817)){
var statearr_26857_26922 = state_26851__$1;
(statearr_26857_26922[(1)] = (5));

} else {
var statearr_26858_26923 = state_26851__$1;
(statearr_26858_26923[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26852 === (15))){
var inst_26829 = (state_26851[(8)]);
var state_26851__$1 = state_26851;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26851__$1,(18),to,inst_26829);
} else {
if((state_val_26852 === (21))){
var inst_26842 = (state_26851[(2)]);
var state_26851__$1 = state_26851;
var statearr_26859_26924 = state_26851__$1;
(statearr_26859_26924[(2)] = inst_26842);

(statearr_26859_26924[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26852 === (13))){
var inst_26844 = (state_26851[(2)]);
var state_26851__$1 = (function (){var statearr_26860 = state_26851;
(statearr_26860[(9)] = inst_26844);

return statearr_26860;
})();
var statearr_26861_26925 = state_26851__$1;
(statearr_26861_26925[(2)] = null);

(statearr_26861_26925[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26852 === (6))){
var inst_26816 = (state_26851[(7)]);
var state_26851__$1 = state_26851;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26851__$1,(11),inst_26816);
} else {
if((state_val_26852 === (17))){
var inst_26837 = (state_26851[(2)]);
var state_26851__$1 = state_26851;
if(cljs.core.truth_(inst_26837)){
var statearr_26862_26926 = state_26851__$1;
(statearr_26862_26926[(1)] = (19));

} else {
var statearr_26863_26927 = state_26851__$1;
(statearr_26863_26927[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26852 === (3))){
var inst_26849 = (state_26851[(2)]);
var state_26851__$1 = state_26851;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26851__$1,inst_26849);
} else {
if((state_val_26852 === (12))){
var inst_26826 = (state_26851[(10)]);
var state_26851__$1 = state_26851;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26851__$1,(14),inst_26826);
} else {
if((state_val_26852 === (2))){
var state_26851__$1 = state_26851;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26851__$1,(4),results);
} else {
if((state_val_26852 === (19))){
var state_26851__$1 = state_26851;
var statearr_26864_26928 = state_26851__$1;
(statearr_26864_26928[(2)] = null);

(statearr_26864_26928[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26852 === (11))){
var inst_26826 = (state_26851[(2)]);
var state_26851__$1 = (function (){var statearr_26865 = state_26851;
(statearr_26865[(10)] = inst_26826);

return statearr_26865;
})();
var statearr_26866_26929 = state_26851__$1;
(statearr_26866_26929[(2)] = null);

(statearr_26866_26929[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26852 === (9))){
var state_26851__$1 = state_26851;
var statearr_26867_26930 = state_26851__$1;
(statearr_26867_26930[(2)] = null);

(statearr_26867_26930[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26852 === (5))){
var state_26851__$1 = state_26851;
if(cljs.core.truth_(close_QMARK_)){
var statearr_26868_26931 = state_26851__$1;
(statearr_26868_26931[(1)] = (8));

} else {
var statearr_26869_26932 = state_26851__$1;
(statearr_26869_26932[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26852 === (14))){
var inst_26829 = (state_26851[(8)]);
var inst_26831 = (state_26851[(11)]);
var inst_26829__$1 = (state_26851[(2)]);
var inst_26830 = (inst_26829__$1 == null);
var inst_26831__$1 = cljs.core.not.call(null,inst_26830);
var state_26851__$1 = (function (){var statearr_26870 = state_26851;
(statearr_26870[(8)] = inst_26829__$1);

(statearr_26870[(11)] = inst_26831__$1);

return statearr_26870;
})();
if(inst_26831__$1){
var statearr_26871_26933 = state_26851__$1;
(statearr_26871_26933[(1)] = (15));

} else {
var statearr_26872_26934 = state_26851__$1;
(statearr_26872_26934[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26852 === (16))){
var inst_26831 = (state_26851[(11)]);
var state_26851__$1 = state_26851;
var statearr_26873_26935 = state_26851__$1;
(statearr_26873_26935[(2)] = inst_26831);

(statearr_26873_26935[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26852 === (10))){
var inst_26823 = (state_26851[(2)]);
var state_26851__$1 = state_26851;
var statearr_26874_26936 = state_26851__$1;
(statearr_26874_26936[(2)] = inst_26823);

(statearr_26874_26936[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26852 === (18))){
var inst_26834 = (state_26851[(2)]);
var state_26851__$1 = state_26851;
var statearr_26875_26937 = state_26851__$1;
(statearr_26875_26937[(2)] = inst_26834);

(statearr_26875_26937[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26852 === (8))){
var inst_26820 = cljs.core.async.close_BANG_.call(null,to);
var state_26851__$1 = state_26851;
var statearr_26876_26938 = state_26851__$1;
(statearr_26876_26938[(2)] = inst_26820);

(statearr_26876_26938[(1)] = (10));


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
});})(c__21387__auto__,jobs,results,process,async))
;
return ((function (switch__21325__auto__,c__21387__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__21326__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__21326__auto____0 = (function (){
var statearr_26880 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_26880[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__21326__auto__);

(statearr_26880[(1)] = (1));

return statearr_26880;
});
var cljs$core$async$pipeline_STAR__$_state_machine__21326__auto____1 = (function (state_26851){
while(true){
var ret_value__21327__auto__ = (function (){try{while(true){
var result__21328__auto__ = switch__21325__auto__.call(null,state_26851);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21328__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21328__auto__;
}
break;
}
}catch (e26881){if((e26881 instanceof Object)){
var ex__21329__auto__ = e26881;
var statearr_26882_26939 = state_26851;
(statearr_26882_26939[(5)] = ex__21329__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26851);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26881;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21327__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26940 = state_26851;
state_26851 = G__26940;
continue;
} else {
return ret_value__21327__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__21326__auto__ = function(state_26851){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__21326__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__21326__auto____1.call(this,state_26851);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__21326__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__21326__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__21326__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__21326__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__21326__auto__;
})()
;})(switch__21325__auto__,c__21387__auto__,jobs,results,process,async))
})();
var state__21389__auto__ = (function (){var statearr_26883 = f__21388__auto__.call(null);
(statearr_26883[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21387__auto__);

return statearr_26883;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21389__auto__);
});})(c__21387__auto__,jobs,results,process,async))
);

return c__21387__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel, subject to the async function af, with parallelism n. af
 * must be a function of two arguments, the first an input value and
 * the second a channel on which to place the result(s). af must close!
 * the channel before returning.  The presumption is that af will
 * return immediately, having launched some asynchronous operation
 * whose completion/callback will manipulate the result channel. Outputs
 * will be returned in order relative to  the inputs. By default, the to
 * channel will be closed when the from channel closes, but can be
 * determined by the close?  parameter. Will stop consuming the from
 * channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(){
var G__26942 = arguments.length;
switch (G__26942) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.call(null,n,to,af,from,true);
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_.call(null,n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
});

cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5;
/**
 * Takes elements from the from channel and supplies them to the to
 * channel, subject to the transducer xf, with parallelism n. Because
 * it is parallel, the transducer will be applied independently to each
 * element, not across elements, and may produce zero or more outputs
 * per input.  Outputs will be returned in order relative to the
 * inputs. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes.
 * 
 * Note this is supplied for API compatibility with the Clojure version.
 * Values of N > 1 will not result in actual concurrency in a
 * single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(){
var G__26945 = arguments.length;
switch (G__26945) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.call(null,n,to,xf,from,true);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.call(null,n,to,xf,from,close_QMARK_,null);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_.call(null,n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
});

cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6;
/**
 * Takes a predicate and a source channel and returns a vector of two
 * channels, the first of which will contain the values for which the
 * predicate returned true, the second those for which it returned
 * false.
 * 
 * The out channels will be unbuffered by default, or two buf-or-ns can
 * be supplied. The channels will close after the source channel has
 * closed.
 */
cljs.core.async.split = (function cljs$core$async$split(){
var G__26948 = arguments.length;
switch (G__26948) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__21387__auto___27000 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21387__auto___27000,tc,fc){
return (function (){
var f__21388__auto__ = (function (){var switch__21325__auto__ = ((function (c__21387__auto___27000,tc,fc){
return (function (state_26974){
var state_val_26975 = (state_26974[(1)]);
if((state_val_26975 === (7))){
var inst_26970 = (state_26974[(2)]);
var state_26974__$1 = state_26974;
var statearr_26976_27001 = state_26974__$1;
(statearr_26976_27001[(2)] = inst_26970);

(statearr_26976_27001[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26975 === (1))){
var state_26974__$1 = state_26974;
var statearr_26977_27002 = state_26974__$1;
(statearr_26977_27002[(2)] = null);

(statearr_26977_27002[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26975 === (4))){
var inst_26951 = (state_26974[(7)]);
var inst_26951__$1 = (state_26974[(2)]);
var inst_26952 = (inst_26951__$1 == null);
var state_26974__$1 = (function (){var statearr_26978 = state_26974;
(statearr_26978[(7)] = inst_26951__$1);

return statearr_26978;
})();
if(cljs.core.truth_(inst_26952)){
var statearr_26979_27003 = state_26974__$1;
(statearr_26979_27003[(1)] = (5));

} else {
var statearr_26980_27004 = state_26974__$1;
(statearr_26980_27004[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26975 === (13))){
var state_26974__$1 = state_26974;
var statearr_26981_27005 = state_26974__$1;
(statearr_26981_27005[(2)] = null);

(statearr_26981_27005[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26975 === (6))){
var inst_26951 = (state_26974[(7)]);
var inst_26957 = p.call(null,inst_26951);
var state_26974__$1 = state_26974;
if(cljs.core.truth_(inst_26957)){
var statearr_26982_27006 = state_26974__$1;
(statearr_26982_27006[(1)] = (9));

} else {
var statearr_26983_27007 = state_26974__$1;
(statearr_26983_27007[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26975 === (3))){
var inst_26972 = (state_26974[(2)]);
var state_26974__$1 = state_26974;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26974__$1,inst_26972);
} else {
if((state_val_26975 === (12))){
var state_26974__$1 = state_26974;
var statearr_26984_27008 = state_26974__$1;
(statearr_26984_27008[(2)] = null);

(statearr_26984_27008[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26975 === (2))){
var state_26974__$1 = state_26974;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26974__$1,(4),ch);
} else {
if((state_val_26975 === (11))){
var inst_26951 = (state_26974[(7)]);
var inst_26961 = (state_26974[(2)]);
var state_26974__$1 = state_26974;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26974__$1,(8),inst_26961,inst_26951);
} else {
if((state_val_26975 === (9))){
var state_26974__$1 = state_26974;
var statearr_26985_27009 = state_26974__$1;
(statearr_26985_27009[(2)] = tc);

(statearr_26985_27009[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26975 === (5))){
var inst_26954 = cljs.core.async.close_BANG_.call(null,tc);
var inst_26955 = cljs.core.async.close_BANG_.call(null,fc);
var state_26974__$1 = (function (){var statearr_26986 = state_26974;
(statearr_26986[(8)] = inst_26954);

return statearr_26986;
})();
var statearr_26987_27010 = state_26974__$1;
(statearr_26987_27010[(2)] = inst_26955);

(statearr_26987_27010[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26975 === (14))){
var inst_26968 = (state_26974[(2)]);
var state_26974__$1 = state_26974;
var statearr_26988_27011 = state_26974__$1;
(statearr_26988_27011[(2)] = inst_26968);

(statearr_26988_27011[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26975 === (10))){
var state_26974__$1 = state_26974;
var statearr_26989_27012 = state_26974__$1;
(statearr_26989_27012[(2)] = fc);

(statearr_26989_27012[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26975 === (8))){
var inst_26963 = (state_26974[(2)]);
var state_26974__$1 = state_26974;
if(cljs.core.truth_(inst_26963)){
var statearr_26990_27013 = state_26974__$1;
(statearr_26990_27013[(1)] = (12));

} else {
var statearr_26991_27014 = state_26974__$1;
(statearr_26991_27014[(1)] = (13));

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
});})(c__21387__auto___27000,tc,fc))
;
return ((function (switch__21325__auto__,c__21387__auto___27000,tc,fc){
return (function() {
var cljs$core$async$state_machine__21326__auto__ = null;
var cljs$core$async$state_machine__21326__auto____0 = (function (){
var statearr_26995 = [null,null,null,null,null,null,null,null,null];
(statearr_26995[(0)] = cljs$core$async$state_machine__21326__auto__);

(statearr_26995[(1)] = (1));

return statearr_26995;
});
var cljs$core$async$state_machine__21326__auto____1 = (function (state_26974){
while(true){
var ret_value__21327__auto__ = (function (){try{while(true){
var result__21328__auto__ = switch__21325__auto__.call(null,state_26974);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21328__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21328__auto__;
}
break;
}
}catch (e26996){if((e26996 instanceof Object)){
var ex__21329__auto__ = e26996;
var statearr_26997_27015 = state_26974;
(statearr_26997_27015[(5)] = ex__21329__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26974);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26996;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21327__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27016 = state_26974;
state_26974 = G__27016;
continue;
} else {
return ret_value__21327__auto__;
}
break;
}
});
cljs$core$async$state_machine__21326__auto__ = function(state_26974){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__21326__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__21326__auto____1.call(this,state_26974);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__21326__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__21326__auto____0;
cljs$core$async$state_machine__21326__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__21326__auto____1;
return cljs$core$async$state_machine__21326__auto__;
})()
;})(switch__21325__auto__,c__21387__auto___27000,tc,fc))
})();
var state__21389__auto__ = (function (){var statearr_26998 = f__21388__auto__.call(null);
(statearr_26998[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21387__auto___27000);

return statearr_26998;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21389__auto__);
});})(c__21387__auto___27000,tc,fc))
);


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});

cljs.core.async.split.cljs$lang$maxFixedArity = 4;
/**
 * f should be a function of 2 arguments. Returns a channel containing
 * the single result of applying f to init and the first item from the
 * channel, then applying f to that result and the 2nd item, etc. If
 * the channel closes without yielding items, returns init and f is not
 * called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__21387__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21387__auto__){
return (function (){
var f__21388__auto__ = (function (){var switch__21325__auto__ = ((function (c__21387__auto__){
return (function (state_27063){
var state_val_27064 = (state_27063[(1)]);
if((state_val_27064 === (7))){
var inst_27059 = (state_27063[(2)]);
var state_27063__$1 = state_27063;
var statearr_27065_27081 = state_27063__$1;
(statearr_27065_27081[(2)] = inst_27059);

(statearr_27065_27081[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27064 === (6))){
var inst_27052 = (state_27063[(7)]);
var inst_27049 = (state_27063[(8)]);
var inst_27056 = f.call(null,inst_27049,inst_27052);
var inst_27049__$1 = inst_27056;
var state_27063__$1 = (function (){var statearr_27066 = state_27063;
(statearr_27066[(8)] = inst_27049__$1);

return statearr_27066;
})();
var statearr_27067_27082 = state_27063__$1;
(statearr_27067_27082[(2)] = null);

(statearr_27067_27082[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27064 === (5))){
var inst_27049 = (state_27063[(8)]);
var state_27063__$1 = state_27063;
var statearr_27068_27083 = state_27063__$1;
(statearr_27068_27083[(2)] = inst_27049);

(statearr_27068_27083[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27064 === (4))){
var inst_27052 = (state_27063[(7)]);
var inst_27052__$1 = (state_27063[(2)]);
var inst_27053 = (inst_27052__$1 == null);
var state_27063__$1 = (function (){var statearr_27069 = state_27063;
(statearr_27069[(7)] = inst_27052__$1);

return statearr_27069;
})();
if(cljs.core.truth_(inst_27053)){
var statearr_27070_27084 = state_27063__$1;
(statearr_27070_27084[(1)] = (5));

} else {
var statearr_27071_27085 = state_27063__$1;
(statearr_27071_27085[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27064 === (3))){
var inst_27061 = (state_27063[(2)]);
var state_27063__$1 = state_27063;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27063__$1,inst_27061);
} else {
if((state_val_27064 === (2))){
var state_27063__$1 = state_27063;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27063__$1,(4),ch);
} else {
if((state_val_27064 === (1))){
var inst_27049 = init;
var state_27063__$1 = (function (){var statearr_27072 = state_27063;
(statearr_27072[(8)] = inst_27049);

return statearr_27072;
})();
var statearr_27073_27086 = state_27063__$1;
(statearr_27073_27086[(2)] = null);

(statearr_27073_27086[(1)] = (2));


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
});})(c__21387__auto__))
;
return ((function (switch__21325__auto__,c__21387__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__21326__auto__ = null;
var cljs$core$async$reduce_$_state_machine__21326__auto____0 = (function (){
var statearr_27077 = [null,null,null,null,null,null,null,null,null];
(statearr_27077[(0)] = cljs$core$async$reduce_$_state_machine__21326__auto__);

(statearr_27077[(1)] = (1));

return statearr_27077;
});
var cljs$core$async$reduce_$_state_machine__21326__auto____1 = (function (state_27063){
while(true){
var ret_value__21327__auto__ = (function (){try{while(true){
var result__21328__auto__ = switch__21325__auto__.call(null,state_27063);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21328__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21328__auto__;
}
break;
}
}catch (e27078){if((e27078 instanceof Object)){
var ex__21329__auto__ = e27078;
var statearr_27079_27087 = state_27063;
(statearr_27079_27087[(5)] = ex__21329__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27063);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27078;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21327__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27088 = state_27063;
state_27063 = G__27088;
continue;
} else {
return ret_value__21327__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__21326__auto__ = function(state_27063){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__21326__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__21326__auto____1.call(this,state_27063);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__21326__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__21326__auto____0;
cljs$core$async$reduce_$_state_machine__21326__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__21326__auto____1;
return cljs$core$async$reduce_$_state_machine__21326__auto__;
})()
;})(switch__21325__auto__,c__21387__auto__))
})();
var state__21389__auto__ = (function (){var statearr_27080 = f__21388__auto__.call(null);
(statearr_27080[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21387__auto__);

return statearr_27080;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21389__auto__);
});})(c__21387__auto__))
);

return c__21387__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 * By default the channel will be closed after the items are copied,
 * but can be determined by the close? parameter.
 * 
 * Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(){
var G__27090 = arguments.length;
switch (G__27090) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__21387__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21387__auto__){
return (function (){
var f__21388__auto__ = (function (){var switch__21325__auto__ = ((function (c__21387__auto__){
return (function (state_27115){
var state_val_27116 = (state_27115[(1)]);
if((state_val_27116 === (7))){
var inst_27097 = (state_27115[(2)]);
var state_27115__$1 = state_27115;
var statearr_27117_27141 = state_27115__$1;
(statearr_27117_27141[(2)] = inst_27097);

(statearr_27117_27141[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27116 === (1))){
var inst_27091 = cljs.core.seq.call(null,coll);
var inst_27092 = inst_27091;
var state_27115__$1 = (function (){var statearr_27118 = state_27115;
(statearr_27118[(7)] = inst_27092);

return statearr_27118;
})();
var statearr_27119_27142 = state_27115__$1;
(statearr_27119_27142[(2)] = null);

(statearr_27119_27142[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27116 === (4))){
var inst_27092 = (state_27115[(7)]);
var inst_27095 = cljs.core.first.call(null,inst_27092);
var state_27115__$1 = state_27115;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27115__$1,(7),ch,inst_27095);
} else {
if((state_val_27116 === (13))){
var inst_27109 = (state_27115[(2)]);
var state_27115__$1 = state_27115;
var statearr_27120_27143 = state_27115__$1;
(statearr_27120_27143[(2)] = inst_27109);

(statearr_27120_27143[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27116 === (6))){
var inst_27100 = (state_27115[(2)]);
var state_27115__$1 = state_27115;
if(cljs.core.truth_(inst_27100)){
var statearr_27121_27144 = state_27115__$1;
(statearr_27121_27144[(1)] = (8));

} else {
var statearr_27122_27145 = state_27115__$1;
(statearr_27122_27145[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27116 === (3))){
var inst_27113 = (state_27115[(2)]);
var state_27115__$1 = state_27115;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27115__$1,inst_27113);
} else {
if((state_val_27116 === (12))){
var state_27115__$1 = state_27115;
var statearr_27123_27146 = state_27115__$1;
(statearr_27123_27146[(2)] = null);

(statearr_27123_27146[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27116 === (2))){
var inst_27092 = (state_27115[(7)]);
var state_27115__$1 = state_27115;
if(cljs.core.truth_(inst_27092)){
var statearr_27124_27147 = state_27115__$1;
(statearr_27124_27147[(1)] = (4));

} else {
var statearr_27125_27148 = state_27115__$1;
(statearr_27125_27148[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27116 === (11))){
var inst_27106 = cljs.core.async.close_BANG_.call(null,ch);
var state_27115__$1 = state_27115;
var statearr_27126_27149 = state_27115__$1;
(statearr_27126_27149[(2)] = inst_27106);

(statearr_27126_27149[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27116 === (9))){
var state_27115__$1 = state_27115;
if(cljs.core.truth_(close_QMARK_)){
var statearr_27127_27150 = state_27115__$1;
(statearr_27127_27150[(1)] = (11));

} else {
var statearr_27128_27151 = state_27115__$1;
(statearr_27128_27151[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27116 === (5))){
var inst_27092 = (state_27115[(7)]);
var state_27115__$1 = state_27115;
var statearr_27129_27152 = state_27115__$1;
(statearr_27129_27152[(2)] = inst_27092);

(statearr_27129_27152[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27116 === (10))){
var inst_27111 = (state_27115[(2)]);
var state_27115__$1 = state_27115;
var statearr_27130_27153 = state_27115__$1;
(statearr_27130_27153[(2)] = inst_27111);

(statearr_27130_27153[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27116 === (8))){
var inst_27092 = (state_27115[(7)]);
var inst_27102 = cljs.core.next.call(null,inst_27092);
var inst_27092__$1 = inst_27102;
var state_27115__$1 = (function (){var statearr_27131 = state_27115;
(statearr_27131[(7)] = inst_27092__$1);

return statearr_27131;
})();
var statearr_27132_27154 = state_27115__$1;
(statearr_27132_27154[(2)] = null);

(statearr_27132_27154[(1)] = (2));


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
});})(c__21387__auto__))
;
return ((function (switch__21325__auto__,c__21387__auto__){
return (function() {
var cljs$core$async$state_machine__21326__auto__ = null;
var cljs$core$async$state_machine__21326__auto____0 = (function (){
var statearr_27136 = [null,null,null,null,null,null,null,null];
(statearr_27136[(0)] = cljs$core$async$state_machine__21326__auto__);

(statearr_27136[(1)] = (1));

return statearr_27136;
});
var cljs$core$async$state_machine__21326__auto____1 = (function (state_27115){
while(true){
var ret_value__21327__auto__ = (function (){try{while(true){
var result__21328__auto__ = switch__21325__auto__.call(null,state_27115);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21328__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21328__auto__;
}
break;
}
}catch (e27137){if((e27137 instanceof Object)){
var ex__21329__auto__ = e27137;
var statearr_27138_27155 = state_27115;
(statearr_27138_27155[(5)] = ex__21329__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27115);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27137;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21327__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27156 = state_27115;
state_27115 = G__27156;
continue;
} else {
return ret_value__21327__auto__;
}
break;
}
});
cljs$core$async$state_machine__21326__auto__ = function(state_27115){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__21326__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__21326__auto____1.call(this,state_27115);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__21326__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__21326__auto____0;
cljs$core$async$state_machine__21326__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__21326__auto____1;
return cljs$core$async$state_machine__21326__auto__;
})()
;})(switch__21325__auto__,c__21387__auto__))
})();
var state__21389__auto__ = (function (){var statearr_27139 = f__21388__auto__.call(null);
(statearr_27139[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21387__auto__);

return statearr_27139;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21389__auto__);
});})(c__21387__auto__))
);

return c__21387__auto__;
});

cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3;
/**
 * Creates and returns a channel which contains the contents of coll,
 * closing when exhausted.
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,(100),coll));
cljs.core.async.onto_chan.call(null,ch,coll);

return ch;
});

cljs.core.async.Mux = (function (){var obj27158 = {};
return obj27158;
})();

cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((function (){var and__18148__auto__ = _;
if(and__18148__auto__){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1;
} else {
return and__18148__auto__;
}
})()){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__18796__auto__ = (((_ == null))?null:_);
return (function (){var or__18160__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__18796__auto__)]);
if(or__18160__auto__){
return or__18160__auto__;
} else {
var or__18160__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(or__18160__auto____$1){
return or__18160__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
})().call(null,_);
}
});


cljs.core.async.Mult = (function (){var obj27160 = {};
return obj27160;
})();

cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((function (){var and__18148__auto__ = m;
if(and__18148__auto__){
return m.cljs$core$async$Mult$tap_STAR_$arity$3;
} else {
return and__18148__auto__;
}
})()){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__18796__auto__ = (((m == null))?null:m);
return (function (){var or__18160__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__18796__auto__)]);
if(or__18160__auto__){
return or__18160__auto__;
} else {
var or__18160__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(or__18160__auto____$1){
return or__18160__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
})().call(null,m,ch,close_QMARK_);
}
});

cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((function (){var and__18148__auto__ = m;
if(and__18148__auto__){
return m.cljs$core$async$Mult$untap_STAR_$arity$2;
} else {
return and__18148__auto__;
}
})()){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__18796__auto__ = (((m == null))?null:m);
return (function (){var or__18160__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__18796__auto__)]);
if(or__18160__auto__){
return or__18160__auto__;
} else {
var or__18160__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(or__18160__auto____$1){
return or__18160__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
})().call(null,m,ch);
}
});

cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((function (){var and__18148__auto__ = m;
if(and__18148__auto__){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1;
} else {
return and__18148__auto__;
}
})()){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__18796__auto__ = (((m == null))?null:m);
return (function (){var or__18160__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__18796__auto__)]);
if(or__18160__auto__){
return or__18160__auto__;
} else {
var or__18160__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(or__18160__auto____$1){
return or__18160__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
}
}
})().call(null,m);
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 * containing copies of the channel can be created with 'tap', and
 * detached with 'untap'.
 * 
 * Each item is distributed to all taps in parallel and synchronously,
 * i.e. each tap must accept before the next item is distributed. Use
 * buffering/windowing to prevent slow taps from holding up the mult.
 * 
 * Items received when there are no taps get dropped.
 * 
 * If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if(typeof cljs.core.async.t27382 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t27382 = (function (cs,ch,mult,meta27383){
this.cs = cs;
this.ch = ch;
this.mult = mult;
this.meta27383 = meta27383;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t27382.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t27382.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t27382.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t27382.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t27382.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t27382.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t27382.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_27384){
var self__ = this;
var _27384__$1 = this;
return self__.meta27383;
});})(cs))
;

cljs.core.async.t27382.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_27384,meta27383__$1){
var self__ = this;
var _27384__$1 = this;
return (new cljs.core.async.t27382(self__.cs,self__.ch,self__.mult,meta27383__$1));
});})(cs))
;

cljs.core.async.t27382.cljs$lang$type = true;

cljs.core.async.t27382.cljs$lang$ctorStr = "cljs.core.async/t27382";

cljs.core.async.t27382.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__18739__auto__,writer__18740__auto__,opt__18741__auto__){
return cljs.core._write.call(null,writer__18740__auto__,"cljs.core.async/t27382");
});})(cs))
;

cljs.core.async.__GT_t27382 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t27382(cs__$1,ch__$1,mult__$1,meta27383){
return (new cljs.core.async.t27382(cs__$1,ch__$1,mult__$1,meta27383));
});})(cs))
;

}

return (new cljs.core.async.t27382(cs,ch,cljs$core$async$mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = ((function (cs,m,dchan,dctr){
return (function (_){
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,true);
} else {
return null;
}
});})(cs,m,dchan,dctr))
;
var c__21387__auto___27603 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21387__auto___27603,cs,m,dchan,dctr,done){
return (function (){
var f__21388__auto__ = (function (){var switch__21325__auto__ = ((function (c__21387__auto___27603,cs,m,dchan,dctr,done){
return (function (state_27515){
var state_val_27516 = (state_27515[(1)]);
if((state_val_27516 === (7))){
var inst_27511 = (state_27515[(2)]);
var state_27515__$1 = state_27515;
var statearr_27517_27604 = state_27515__$1;
(statearr_27517_27604[(2)] = inst_27511);

(statearr_27517_27604[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27516 === (20))){
var inst_27416 = (state_27515[(7)]);
var inst_27426 = cljs.core.first.call(null,inst_27416);
var inst_27427 = cljs.core.nth.call(null,inst_27426,(0),null);
var inst_27428 = cljs.core.nth.call(null,inst_27426,(1),null);
var state_27515__$1 = (function (){var statearr_27518 = state_27515;
(statearr_27518[(8)] = inst_27427);

return statearr_27518;
})();
if(cljs.core.truth_(inst_27428)){
var statearr_27519_27605 = state_27515__$1;
(statearr_27519_27605[(1)] = (22));

} else {
var statearr_27520_27606 = state_27515__$1;
(statearr_27520_27606[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27516 === (27))){
var inst_27387 = (state_27515[(9)]);
var inst_27456 = (state_27515[(10)]);
var inst_27458 = (state_27515[(11)]);
var inst_27463 = (state_27515[(12)]);
var inst_27463__$1 = cljs.core._nth.call(null,inst_27456,inst_27458);
var inst_27464 = cljs.core.async.put_BANG_.call(null,inst_27463__$1,inst_27387,done);
var state_27515__$1 = (function (){var statearr_27521 = state_27515;
(statearr_27521[(12)] = inst_27463__$1);

return statearr_27521;
})();
if(cljs.core.truth_(inst_27464)){
var statearr_27522_27607 = state_27515__$1;
(statearr_27522_27607[(1)] = (30));

} else {
var statearr_27523_27608 = state_27515__$1;
(statearr_27523_27608[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27516 === (1))){
var state_27515__$1 = state_27515;
var statearr_27524_27609 = state_27515__$1;
(statearr_27524_27609[(2)] = null);

(statearr_27524_27609[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27516 === (24))){
var inst_27416 = (state_27515[(7)]);
var inst_27433 = (state_27515[(2)]);
var inst_27434 = cljs.core.next.call(null,inst_27416);
var inst_27396 = inst_27434;
var inst_27397 = null;
var inst_27398 = (0);
var inst_27399 = (0);
var state_27515__$1 = (function (){var statearr_27525 = state_27515;
(statearr_27525[(13)] = inst_27397);

(statearr_27525[(14)] = inst_27398);

(statearr_27525[(15)] = inst_27396);

(statearr_27525[(16)] = inst_27433);

(statearr_27525[(17)] = inst_27399);

return statearr_27525;
})();
var statearr_27526_27610 = state_27515__$1;
(statearr_27526_27610[(2)] = null);

(statearr_27526_27610[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27516 === (39))){
var state_27515__$1 = state_27515;
var statearr_27530_27611 = state_27515__$1;
(statearr_27530_27611[(2)] = null);

(statearr_27530_27611[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27516 === (4))){
var inst_27387 = (state_27515[(9)]);
var inst_27387__$1 = (state_27515[(2)]);
var inst_27388 = (inst_27387__$1 == null);
var state_27515__$1 = (function (){var statearr_27531 = state_27515;
(statearr_27531[(9)] = inst_27387__$1);

return statearr_27531;
})();
if(cljs.core.truth_(inst_27388)){
var statearr_27532_27612 = state_27515__$1;
(statearr_27532_27612[(1)] = (5));

} else {
var statearr_27533_27613 = state_27515__$1;
(statearr_27533_27613[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27516 === (15))){
var inst_27397 = (state_27515[(13)]);
var inst_27398 = (state_27515[(14)]);
var inst_27396 = (state_27515[(15)]);
var inst_27399 = (state_27515[(17)]);
var inst_27412 = (state_27515[(2)]);
var inst_27413 = (inst_27399 + (1));
var tmp27527 = inst_27397;
var tmp27528 = inst_27398;
var tmp27529 = inst_27396;
var inst_27396__$1 = tmp27529;
var inst_27397__$1 = tmp27527;
var inst_27398__$1 = tmp27528;
var inst_27399__$1 = inst_27413;
var state_27515__$1 = (function (){var statearr_27534 = state_27515;
(statearr_27534[(13)] = inst_27397__$1);

(statearr_27534[(14)] = inst_27398__$1);

(statearr_27534[(15)] = inst_27396__$1);

(statearr_27534[(17)] = inst_27399__$1);

(statearr_27534[(18)] = inst_27412);

return statearr_27534;
})();
var statearr_27535_27614 = state_27515__$1;
(statearr_27535_27614[(2)] = null);

(statearr_27535_27614[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27516 === (21))){
var inst_27437 = (state_27515[(2)]);
var state_27515__$1 = state_27515;
var statearr_27539_27615 = state_27515__$1;
(statearr_27539_27615[(2)] = inst_27437);

(statearr_27539_27615[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27516 === (31))){
var inst_27463 = (state_27515[(12)]);
var inst_27467 = done.call(null,null);
var inst_27468 = cljs.core.async.untap_STAR_.call(null,m,inst_27463);
var state_27515__$1 = (function (){var statearr_27540 = state_27515;
(statearr_27540[(19)] = inst_27467);

return statearr_27540;
})();
var statearr_27541_27616 = state_27515__$1;
(statearr_27541_27616[(2)] = inst_27468);

(statearr_27541_27616[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27516 === (32))){
var inst_27457 = (state_27515[(20)]);
var inst_27455 = (state_27515[(21)]);
var inst_27456 = (state_27515[(10)]);
var inst_27458 = (state_27515[(11)]);
var inst_27470 = (state_27515[(2)]);
var inst_27471 = (inst_27458 + (1));
var tmp27536 = inst_27457;
var tmp27537 = inst_27455;
var tmp27538 = inst_27456;
var inst_27455__$1 = tmp27537;
var inst_27456__$1 = tmp27538;
var inst_27457__$1 = tmp27536;
var inst_27458__$1 = inst_27471;
var state_27515__$1 = (function (){var statearr_27542 = state_27515;
(statearr_27542[(20)] = inst_27457__$1);

(statearr_27542[(21)] = inst_27455__$1);

(statearr_27542[(10)] = inst_27456__$1);

(statearr_27542[(11)] = inst_27458__$1);

(statearr_27542[(22)] = inst_27470);

return statearr_27542;
})();
var statearr_27543_27617 = state_27515__$1;
(statearr_27543_27617[(2)] = null);

(statearr_27543_27617[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27516 === (40))){
var inst_27483 = (state_27515[(23)]);
var inst_27487 = done.call(null,null);
var inst_27488 = cljs.core.async.untap_STAR_.call(null,m,inst_27483);
var state_27515__$1 = (function (){var statearr_27544 = state_27515;
(statearr_27544[(24)] = inst_27487);

return statearr_27544;
})();
var statearr_27545_27618 = state_27515__$1;
(statearr_27545_27618[(2)] = inst_27488);

(statearr_27545_27618[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27516 === (33))){
var inst_27474 = (state_27515[(25)]);
var inst_27476 = cljs.core.chunked_seq_QMARK_.call(null,inst_27474);
var state_27515__$1 = state_27515;
if(inst_27476){
var statearr_27546_27619 = state_27515__$1;
(statearr_27546_27619[(1)] = (36));

} else {
var statearr_27547_27620 = state_27515__$1;
(statearr_27547_27620[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27516 === (13))){
var inst_27406 = (state_27515[(26)]);
var inst_27409 = cljs.core.async.close_BANG_.call(null,inst_27406);
var state_27515__$1 = state_27515;
var statearr_27548_27621 = state_27515__$1;
(statearr_27548_27621[(2)] = inst_27409);

(statearr_27548_27621[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27516 === (22))){
var inst_27427 = (state_27515[(8)]);
var inst_27430 = cljs.core.async.close_BANG_.call(null,inst_27427);
var state_27515__$1 = state_27515;
var statearr_27549_27622 = state_27515__$1;
(statearr_27549_27622[(2)] = inst_27430);

(statearr_27549_27622[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27516 === (36))){
var inst_27474 = (state_27515[(25)]);
var inst_27478 = cljs.core.chunk_first.call(null,inst_27474);
var inst_27479 = cljs.core.chunk_rest.call(null,inst_27474);
var inst_27480 = cljs.core.count.call(null,inst_27478);
var inst_27455 = inst_27479;
var inst_27456 = inst_27478;
var inst_27457 = inst_27480;
var inst_27458 = (0);
var state_27515__$1 = (function (){var statearr_27550 = state_27515;
(statearr_27550[(20)] = inst_27457);

(statearr_27550[(21)] = inst_27455);

(statearr_27550[(10)] = inst_27456);

(statearr_27550[(11)] = inst_27458);

return statearr_27550;
})();
var statearr_27551_27623 = state_27515__$1;
(statearr_27551_27623[(2)] = null);

(statearr_27551_27623[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27516 === (41))){
var inst_27474 = (state_27515[(25)]);
var inst_27490 = (state_27515[(2)]);
var inst_27491 = cljs.core.next.call(null,inst_27474);
var inst_27455 = inst_27491;
var inst_27456 = null;
var inst_27457 = (0);
var inst_27458 = (0);
var state_27515__$1 = (function (){var statearr_27552 = state_27515;
(statearr_27552[(20)] = inst_27457);

(statearr_27552[(21)] = inst_27455);

(statearr_27552[(10)] = inst_27456);

(statearr_27552[(11)] = inst_27458);

(statearr_27552[(27)] = inst_27490);

return statearr_27552;
})();
var statearr_27553_27624 = state_27515__$1;
(statearr_27553_27624[(2)] = null);

(statearr_27553_27624[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27516 === (43))){
var state_27515__$1 = state_27515;
var statearr_27554_27625 = state_27515__$1;
(statearr_27554_27625[(2)] = null);

(statearr_27554_27625[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27516 === (29))){
var inst_27499 = (state_27515[(2)]);
var state_27515__$1 = state_27515;
var statearr_27555_27626 = state_27515__$1;
(statearr_27555_27626[(2)] = inst_27499);

(statearr_27555_27626[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27516 === (44))){
var inst_27508 = (state_27515[(2)]);
var state_27515__$1 = (function (){var statearr_27556 = state_27515;
(statearr_27556[(28)] = inst_27508);

return statearr_27556;
})();
var statearr_27557_27627 = state_27515__$1;
(statearr_27557_27627[(2)] = null);

(statearr_27557_27627[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27516 === (6))){
var inst_27447 = (state_27515[(29)]);
var inst_27446 = cljs.core.deref.call(null,cs);
var inst_27447__$1 = cljs.core.keys.call(null,inst_27446);
var inst_27448 = cljs.core.count.call(null,inst_27447__$1);
var inst_27449 = cljs.core.reset_BANG_.call(null,dctr,inst_27448);
var inst_27454 = cljs.core.seq.call(null,inst_27447__$1);
var inst_27455 = inst_27454;
var inst_27456 = null;
var inst_27457 = (0);
var inst_27458 = (0);
var state_27515__$1 = (function (){var statearr_27558 = state_27515;
(statearr_27558[(30)] = inst_27449);

(statearr_27558[(20)] = inst_27457);

(statearr_27558[(21)] = inst_27455);

(statearr_27558[(10)] = inst_27456);

(statearr_27558[(11)] = inst_27458);

(statearr_27558[(29)] = inst_27447__$1);

return statearr_27558;
})();
var statearr_27559_27628 = state_27515__$1;
(statearr_27559_27628[(2)] = null);

(statearr_27559_27628[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27516 === (28))){
var inst_27455 = (state_27515[(21)]);
var inst_27474 = (state_27515[(25)]);
var inst_27474__$1 = cljs.core.seq.call(null,inst_27455);
var state_27515__$1 = (function (){var statearr_27560 = state_27515;
(statearr_27560[(25)] = inst_27474__$1);

return statearr_27560;
})();
if(inst_27474__$1){
var statearr_27561_27629 = state_27515__$1;
(statearr_27561_27629[(1)] = (33));

} else {
var statearr_27562_27630 = state_27515__$1;
(statearr_27562_27630[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27516 === (25))){
var inst_27457 = (state_27515[(20)]);
var inst_27458 = (state_27515[(11)]);
var inst_27460 = (inst_27458 < inst_27457);
var inst_27461 = inst_27460;
var state_27515__$1 = state_27515;
if(cljs.core.truth_(inst_27461)){
var statearr_27563_27631 = state_27515__$1;
(statearr_27563_27631[(1)] = (27));

} else {
var statearr_27564_27632 = state_27515__$1;
(statearr_27564_27632[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27516 === (34))){
var state_27515__$1 = state_27515;
var statearr_27565_27633 = state_27515__$1;
(statearr_27565_27633[(2)] = null);

(statearr_27565_27633[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27516 === (17))){
var state_27515__$1 = state_27515;
var statearr_27566_27634 = state_27515__$1;
(statearr_27566_27634[(2)] = null);

(statearr_27566_27634[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27516 === (3))){
var inst_27513 = (state_27515[(2)]);
var state_27515__$1 = state_27515;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27515__$1,inst_27513);
} else {
if((state_val_27516 === (12))){
var inst_27442 = (state_27515[(2)]);
var state_27515__$1 = state_27515;
var statearr_27567_27635 = state_27515__$1;
(statearr_27567_27635[(2)] = inst_27442);

(statearr_27567_27635[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27516 === (2))){
var state_27515__$1 = state_27515;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27515__$1,(4),ch);
} else {
if((state_val_27516 === (23))){
var state_27515__$1 = state_27515;
var statearr_27568_27636 = state_27515__$1;
(statearr_27568_27636[(2)] = null);

(statearr_27568_27636[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27516 === (35))){
var inst_27497 = (state_27515[(2)]);
var state_27515__$1 = state_27515;
var statearr_27569_27637 = state_27515__$1;
(statearr_27569_27637[(2)] = inst_27497);

(statearr_27569_27637[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27516 === (19))){
var inst_27416 = (state_27515[(7)]);
var inst_27420 = cljs.core.chunk_first.call(null,inst_27416);
var inst_27421 = cljs.core.chunk_rest.call(null,inst_27416);
var inst_27422 = cljs.core.count.call(null,inst_27420);
var inst_27396 = inst_27421;
var inst_27397 = inst_27420;
var inst_27398 = inst_27422;
var inst_27399 = (0);
var state_27515__$1 = (function (){var statearr_27570 = state_27515;
(statearr_27570[(13)] = inst_27397);

(statearr_27570[(14)] = inst_27398);

(statearr_27570[(15)] = inst_27396);

(statearr_27570[(17)] = inst_27399);

return statearr_27570;
})();
var statearr_27571_27638 = state_27515__$1;
(statearr_27571_27638[(2)] = null);

(statearr_27571_27638[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27516 === (11))){
var inst_27396 = (state_27515[(15)]);
var inst_27416 = (state_27515[(7)]);
var inst_27416__$1 = cljs.core.seq.call(null,inst_27396);
var state_27515__$1 = (function (){var statearr_27572 = state_27515;
(statearr_27572[(7)] = inst_27416__$1);

return statearr_27572;
})();
if(inst_27416__$1){
var statearr_27573_27639 = state_27515__$1;
(statearr_27573_27639[(1)] = (16));

} else {
var statearr_27574_27640 = state_27515__$1;
(statearr_27574_27640[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27516 === (9))){
var inst_27444 = (state_27515[(2)]);
var state_27515__$1 = state_27515;
var statearr_27575_27641 = state_27515__$1;
(statearr_27575_27641[(2)] = inst_27444);

(statearr_27575_27641[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27516 === (5))){
var inst_27394 = cljs.core.deref.call(null,cs);
var inst_27395 = cljs.core.seq.call(null,inst_27394);
var inst_27396 = inst_27395;
var inst_27397 = null;
var inst_27398 = (0);
var inst_27399 = (0);
var state_27515__$1 = (function (){var statearr_27576 = state_27515;
(statearr_27576[(13)] = inst_27397);

(statearr_27576[(14)] = inst_27398);

(statearr_27576[(15)] = inst_27396);

(statearr_27576[(17)] = inst_27399);

return statearr_27576;
})();
var statearr_27577_27642 = state_27515__$1;
(statearr_27577_27642[(2)] = null);

(statearr_27577_27642[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27516 === (14))){
var state_27515__$1 = state_27515;
var statearr_27578_27643 = state_27515__$1;
(statearr_27578_27643[(2)] = null);

(statearr_27578_27643[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27516 === (45))){
var inst_27505 = (state_27515[(2)]);
var state_27515__$1 = state_27515;
var statearr_27579_27644 = state_27515__$1;
(statearr_27579_27644[(2)] = inst_27505);

(statearr_27579_27644[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27516 === (26))){
var inst_27447 = (state_27515[(29)]);
var inst_27501 = (state_27515[(2)]);
var inst_27502 = cljs.core.seq.call(null,inst_27447);
var state_27515__$1 = (function (){var statearr_27580 = state_27515;
(statearr_27580[(31)] = inst_27501);

return statearr_27580;
})();
if(inst_27502){
var statearr_27581_27645 = state_27515__$1;
(statearr_27581_27645[(1)] = (42));

} else {
var statearr_27582_27646 = state_27515__$1;
(statearr_27582_27646[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27516 === (16))){
var inst_27416 = (state_27515[(7)]);
var inst_27418 = cljs.core.chunked_seq_QMARK_.call(null,inst_27416);
var state_27515__$1 = state_27515;
if(inst_27418){
var statearr_27583_27647 = state_27515__$1;
(statearr_27583_27647[(1)] = (19));

} else {
var statearr_27584_27648 = state_27515__$1;
(statearr_27584_27648[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27516 === (38))){
var inst_27494 = (state_27515[(2)]);
var state_27515__$1 = state_27515;
var statearr_27585_27649 = state_27515__$1;
(statearr_27585_27649[(2)] = inst_27494);

(statearr_27585_27649[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27516 === (30))){
var state_27515__$1 = state_27515;
var statearr_27586_27650 = state_27515__$1;
(statearr_27586_27650[(2)] = null);

(statearr_27586_27650[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27516 === (10))){
var inst_27397 = (state_27515[(13)]);
var inst_27399 = (state_27515[(17)]);
var inst_27405 = cljs.core._nth.call(null,inst_27397,inst_27399);
var inst_27406 = cljs.core.nth.call(null,inst_27405,(0),null);
var inst_27407 = cljs.core.nth.call(null,inst_27405,(1),null);
var state_27515__$1 = (function (){var statearr_27587 = state_27515;
(statearr_27587[(26)] = inst_27406);

return statearr_27587;
})();
if(cljs.core.truth_(inst_27407)){
var statearr_27588_27651 = state_27515__$1;
(statearr_27588_27651[(1)] = (13));

} else {
var statearr_27589_27652 = state_27515__$1;
(statearr_27589_27652[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27516 === (18))){
var inst_27440 = (state_27515[(2)]);
var state_27515__$1 = state_27515;
var statearr_27590_27653 = state_27515__$1;
(statearr_27590_27653[(2)] = inst_27440);

(statearr_27590_27653[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27516 === (42))){
var state_27515__$1 = state_27515;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27515__$1,(45),dchan);
} else {
if((state_val_27516 === (37))){
var inst_27474 = (state_27515[(25)]);
var inst_27387 = (state_27515[(9)]);
var inst_27483 = (state_27515[(23)]);
var inst_27483__$1 = cljs.core.first.call(null,inst_27474);
var inst_27484 = cljs.core.async.put_BANG_.call(null,inst_27483__$1,inst_27387,done);
var state_27515__$1 = (function (){var statearr_27591 = state_27515;
(statearr_27591[(23)] = inst_27483__$1);

return statearr_27591;
})();
if(cljs.core.truth_(inst_27484)){
var statearr_27592_27654 = state_27515__$1;
(statearr_27592_27654[(1)] = (39));

} else {
var statearr_27593_27655 = state_27515__$1;
(statearr_27593_27655[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27516 === (8))){
var inst_27398 = (state_27515[(14)]);
var inst_27399 = (state_27515[(17)]);
var inst_27401 = (inst_27399 < inst_27398);
var inst_27402 = inst_27401;
var state_27515__$1 = state_27515;
if(cljs.core.truth_(inst_27402)){
var statearr_27594_27656 = state_27515__$1;
(statearr_27594_27656[(1)] = (10));

} else {
var statearr_27595_27657 = state_27515__$1;
(statearr_27595_27657[(1)] = (11));

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
}
}
}
}
}
}
}
}
});})(c__21387__auto___27603,cs,m,dchan,dctr,done))
;
return ((function (switch__21325__auto__,c__21387__auto___27603,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__21326__auto__ = null;
var cljs$core$async$mult_$_state_machine__21326__auto____0 = (function (){
var statearr_27599 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27599[(0)] = cljs$core$async$mult_$_state_machine__21326__auto__);

(statearr_27599[(1)] = (1));

return statearr_27599;
});
var cljs$core$async$mult_$_state_machine__21326__auto____1 = (function (state_27515){
while(true){
var ret_value__21327__auto__ = (function (){try{while(true){
var result__21328__auto__ = switch__21325__auto__.call(null,state_27515);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21328__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21328__auto__;
}
break;
}
}catch (e27600){if((e27600 instanceof Object)){
var ex__21329__auto__ = e27600;
var statearr_27601_27658 = state_27515;
(statearr_27601_27658[(5)] = ex__21329__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27515);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27600;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21327__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27659 = state_27515;
state_27515 = G__27659;
continue;
} else {
return ret_value__21327__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__21326__auto__ = function(state_27515){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__21326__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__21326__auto____1.call(this,state_27515);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__21326__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__21326__auto____0;
cljs$core$async$mult_$_state_machine__21326__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__21326__auto____1;
return cljs$core$async$mult_$_state_machine__21326__auto__;
})()
;})(switch__21325__auto__,c__21387__auto___27603,cs,m,dchan,dctr,done))
})();
var state__21389__auto__ = (function (){var statearr_27602 = f__21388__auto__.call(null);
(statearr_27602[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21387__auto___27603);

return statearr_27602;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21389__auto__);
});})(c__21387__auto___27603,cs,m,dchan,dctr,done))
);


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 * By default the channel will be closed when the source closes,
 * but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(){
var G__27661 = arguments.length;
switch (G__27661) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.call(null,mult,ch,true);
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);

return ch;
});

cljs.core.async.tap.cljs$lang$maxFixedArity = 3;
/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_.call(null,mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_.call(null,mult);
});

cljs.core.async.Mix = (function (){var obj27664 = {};
return obj27664;
})();

cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((function (){var and__18148__auto__ = m;
if(and__18148__auto__){
return m.cljs$core$async$Mix$admix_STAR_$arity$2;
} else {
return and__18148__auto__;
}
})()){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__18796__auto__ = (((m == null))?null:m);
return (function (){var or__18160__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__18796__auto__)]);
if(or__18160__auto__){
return or__18160__auto__;
} else {
var or__18160__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(or__18160__auto____$1){
return or__18160__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
})().call(null,m,ch);
}
});

cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((function (){var and__18148__auto__ = m;
if(and__18148__auto__){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2;
} else {
return and__18148__auto__;
}
})()){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__18796__auto__ = (((m == null))?null:m);
return (function (){var or__18160__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__18796__auto__)]);
if(or__18160__auto__){
return or__18160__auto__;
} else {
var or__18160__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(or__18160__auto____$1){
return or__18160__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
})().call(null,m,ch);
}
});

cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((function (){var and__18148__auto__ = m;
if(and__18148__auto__){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1;
} else {
return and__18148__auto__;
}
})()){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__18796__auto__ = (((m == null))?null:m);
return (function (){var or__18160__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__18796__auto__)]);
if(or__18160__auto__){
return or__18160__auto__;
} else {
var or__18160__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(or__18160__auto____$1){
return or__18160__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
})().call(null,m);
}
});

cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((function (){var and__18148__auto__ = m;
if(and__18148__auto__){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2;
} else {
return and__18148__auto__;
}
})()){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__18796__auto__ = (((m == null))?null:m);
return (function (){var or__18160__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__18796__auto__)]);
if(or__18160__auto__){
return or__18160__auto__;
} else {
var or__18160__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(or__18160__auto____$1){
return or__18160__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
})().call(null,m,state_map);
}
});

cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((function (){var and__18148__auto__ = m;
if(and__18148__auto__){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2;
} else {
return and__18148__auto__;
}
})()){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__18796__auto__ = (((m == null))?null:m);
return (function (){var or__18160__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__18796__auto__)]);
if(or__18160__auto__){
return or__18160__auto__;
} else {
var or__18160__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(or__18160__auto____$1){
return or__18160__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
})().call(null,m,mode);
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(){
var argseq__19200__auto__ = ((((3) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(3)),(0))):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__19200__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__27669){
var map__27670 = p__27669;
var map__27670__$1 = ((cljs.core.seq_QMARK_.call(null,map__27670))?cljs.core.apply.call(null,cljs.core.hash_map,map__27670):map__27670);
var opts = map__27670__$1;
var statearr_27671_27674 = state;
(statearr_27671_27674[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4126__auto__ = cljs.core.async.do_alts.call(null,((function (map__27670,map__27670__$1,opts){
return (function (val){
var statearr_27672_27675 = state;
(statearr_27672_27675[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__27670,map__27670__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4126__auto__)){
var cb = temp__4126__auto__;
var statearr_27673_27676 = state;
(statearr_27673_27676[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq27665){
var G__27666 = cljs.core.first.call(null,seq27665);
var seq27665__$1 = cljs.core.next.call(null,seq27665);
var G__27667 = cljs.core.first.call(null,seq27665__$1);
var seq27665__$2 = cljs.core.next.call(null,seq27665__$1);
var G__27668 = cljs.core.first.call(null,seq27665__$2);
var seq27665__$3 = cljs.core.next.call(null,seq27665__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__27666,G__27667,G__27668,seq27665__$3);
});
/**
 * Creates and returns a mix of one or more input channels which will
 * be put on the supplied out channel. Input sources can be added to
 * the mix with 'admix', and removed with 'unmix'. A mix supports
 * soloing, muting and pausing multiple inputs atomically using
 * 'toggle', and can solo using either muting or pausing as determined
 * by 'solo-mode'.
 * 
 * Each channel can have zero or more boolean modes set via 'toggle':
 * 
 * :solo - when true, only this (ond other soloed) channel(s) will appear
 * in the mix output channel. :mute and :pause states of soloed
 * channels are ignored. If solo-mode is :mute, non-soloed
 * channels are muted, if :pause, non-soloed channels are
 * paused.
 * 
 * :mute - muted channels will have their contents consumed but not included in the mix
 * :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.call(null,solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.call(null);
var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){
return cljs.core.async.put_BANG_.call(null,change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;
var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){
return cljs.core.reduce_kv.call(null,((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){
if(cljs.core.truth_(attr.call(null,v))){
return cljs.core.conj.call(null,ret,c);
} else {
return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;
var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){
var chs = cljs.core.deref.call(null,cs);
var mode = cljs.core.deref.call(null,solo_mode);
var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.call(null,(((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && (!(cljs.core.empty_QMARK_.call(null,solos))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;
var m = (function (){
if(typeof cljs.core.async.t27796 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t27796 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta27797){
this.change = change;
this.mix = mix;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta27797 = meta27797;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t27796.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t27796.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t27796.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t27796.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t27796.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t27796.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.solo_modes.call(null,mode))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"mode","mode",-2000032078,null))))].join('')));
}

cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t27796.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t27796.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t27796.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_27798){
var self__ = this;
var _27798__$1 = this;
return self__.meta27797;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t27796.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_27798,meta27797__$1){
var self__ = this;
var _27798__$1 = this;
return (new cljs.core.async.t27796(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta27797__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t27796.cljs$lang$type = true;

cljs.core.async.t27796.cljs$lang$ctorStr = "cljs.core.async/t27796";

cljs.core.async.t27796.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__18739__auto__,writer__18740__auto__,opt__18741__auto__){
return cljs.core._write.call(null,writer__18740__auto__,"cljs.core.async/t27796");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t27796 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t27796(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta27797){
return (new cljs.core.async.t27796(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta27797));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t27796(change,cljs$core$async$mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__21387__auto___27915 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21387__auto___27915,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__21388__auto__ = (function (){var switch__21325__auto__ = ((function (c__21387__auto___27915,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_27868){
var state_val_27869 = (state_27868[(1)]);
if((state_val_27869 === (7))){
var inst_27812 = (state_27868[(7)]);
var inst_27817 = cljs.core.apply.call(null,cljs.core.hash_map,inst_27812);
var state_27868__$1 = state_27868;
var statearr_27870_27916 = state_27868__$1;
(statearr_27870_27916[(2)] = inst_27817);

(statearr_27870_27916[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27869 === (20))){
var inst_27827 = (state_27868[(8)]);
var state_27868__$1 = state_27868;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27868__$1,(23),out,inst_27827);
} else {
if((state_val_27869 === (1))){
var inst_27802 = (state_27868[(9)]);
var inst_27802__$1 = calc_state.call(null);
var inst_27803 = cljs.core.seq_QMARK_.call(null,inst_27802__$1);
var state_27868__$1 = (function (){var statearr_27871 = state_27868;
(statearr_27871[(9)] = inst_27802__$1);

return statearr_27871;
})();
if(inst_27803){
var statearr_27872_27917 = state_27868__$1;
(statearr_27872_27917[(1)] = (2));

} else {
var statearr_27873_27918 = state_27868__$1;
(statearr_27873_27918[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27869 === (24))){
var inst_27820 = (state_27868[(10)]);
var inst_27812 = inst_27820;
var state_27868__$1 = (function (){var statearr_27874 = state_27868;
(statearr_27874[(7)] = inst_27812);

return statearr_27874;
})();
var statearr_27875_27919 = state_27868__$1;
(statearr_27875_27919[(2)] = null);

(statearr_27875_27919[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27869 === (4))){
var inst_27802 = (state_27868[(9)]);
var inst_27808 = (state_27868[(2)]);
var inst_27809 = cljs.core.get.call(null,inst_27808,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_27810 = cljs.core.get.call(null,inst_27808,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_27811 = cljs.core.get.call(null,inst_27808,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_27812 = inst_27802;
var state_27868__$1 = (function (){var statearr_27876 = state_27868;
(statearr_27876[(11)] = inst_27811);

(statearr_27876[(12)] = inst_27810);

(statearr_27876[(13)] = inst_27809);

(statearr_27876[(7)] = inst_27812);

return statearr_27876;
})();
var statearr_27877_27920 = state_27868__$1;
(statearr_27877_27920[(2)] = null);

(statearr_27877_27920[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27869 === (15))){
var state_27868__$1 = state_27868;
var statearr_27878_27921 = state_27868__$1;
(statearr_27878_27921[(2)] = null);

(statearr_27878_27921[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27869 === (21))){
var inst_27820 = (state_27868[(10)]);
var inst_27812 = inst_27820;
var state_27868__$1 = (function (){var statearr_27879 = state_27868;
(statearr_27879[(7)] = inst_27812);

return statearr_27879;
})();
var statearr_27880_27922 = state_27868__$1;
(statearr_27880_27922[(2)] = null);

(statearr_27880_27922[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27869 === (13))){
var inst_27864 = (state_27868[(2)]);
var state_27868__$1 = state_27868;
var statearr_27881_27923 = state_27868__$1;
(statearr_27881_27923[(2)] = inst_27864);

(statearr_27881_27923[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27869 === (22))){
var inst_27862 = (state_27868[(2)]);
var state_27868__$1 = state_27868;
var statearr_27882_27924 = state_27868__$1;
(statearr_27882_27924[(2)] = inst_27862);

(statearr_27882_27924[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27869 === (6))){
var inst_27866 = (state_27868[(2)]);
var state_27868__$1 = state_27868;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27868__$1,inst_27866);
} else {
if((state_val_27869 === (25))){
var state_27868__$1 = state_27868;
var statearr_27883_27925 = state_27868__$1;
(statearr_27883_27925[(2)] = null);

(statearr_27883_27925[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27869 === (17))){
var inst_27842 = (state_27868[(14)]);
var state_27868__$1 = state_27868;
var statearr_27884_27926 = state_27868__$1;
(statearr_27884_27926[(2)] = inst_27842);

(statearr_27884_27926[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27869 === (3))){
var inst_27802 = (state_27868[(9)]);
var state_27868__$1 = state_27868;
var statearr_27885_27927 = state_27868__$1;
(statearr_27885_27927[(2)] = inst_27802);

(statearr_27885_27927[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27869 === (12))){
var inst_27828 = (state_27868[(15)]);
var inst_27823 = (state_27868[(16)]);
var inst_27842 = (state_27868[(14)]);
var inst_27842__$1 = inst_27823.call(null,inst_27828);
var state_27868__$1 = (function (){var statearr_27886 = state_27868;
(statearr_27886[(14)] = inst_27842__$1);

return statearr_27886;
})();
if(cljs.core.truth_(inst_27842__$1)){
var statearr_27887_27928 = state_27868__$1;
(statearr_27887_27928[(1)] = (17));

} else {
var statearr_27888_27929 = state_27868__$1;
(statearr_27888_27929[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27869 === (2))){
var inst_27802 = (state_27868[(9)]);
var inst_27805 = cljs.core.apply.call(null,cljs.core.hash_map,inst_27802);
var state_27868__$1 = state_27868;
var statearr_27889_27930 = state_27868__$1;
(statearr_27889_27930[(2)] = inst_27805);

(statearr_27889_27930[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27869 === (23))){
var inst_27853 = (state_27868[(2)]);
var state_27868__$1 = state_27868;
if(cljs.core.truth_(inst_27853)){
var statearr_27890_27931 = state_27868__$1;
(statearr_27890_27931[(1)] = (24));

} else {
var statearr_27891_27932 = state_27868__$1;
(statearr_27891_27932[(1)] = (25));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27869 === (19))){
var inst_27850 = (state_27868[(2)]);
var state_27868__$1 = state_27868;
if(cljs.core.truth_(inst_27850)){
var statearr_27892_27933 = state_27868__$1;
(statearr_27892_27933[(1)] = (20));

} else {
var statearr_27893_27934 = state_27868__$1;
(statearr_27893_27934[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27869 === (11))){
var inst_27827 = (state_27868[(8)]);
var inst_27833 = (inst_27827 == null);
var state_27868__$1 = state_27868;
if(cljs.core.truth_(inst_27833)){
var statearr_27894_27935 = state_27868__$1;
(statearr_27894_27935[(1)] = (14));

} else {
var statearr_27895_27936 = state_27868__$1;
(statearr_27895_27936[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27869 === (9))){
var inst_27820 = (state_27868[(10)]);
var inst_27820__$1 = (state_27868[(2)]);
var inst_27821 = cljs.core.get.call(null,inst_27820__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_27822 = cljs.core.get.call(null,inst_27820__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_27823 = cljs.core.get.call(null,inst_27820__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var state_27868__$1 = (function (){var statearr_27896 = state_27868;
(statearr_27896[(10)] = inst_27820__$1);

(statearr_27896[(16)] = inst_27823);

(statearr_27896[(17)] = inst_27822);

return statearr_27896;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_27868__$1,(10),inst_27821);
} else {
if((state_val_27869 === (5))){
var inst_27812 = (state_27868[(7)]);
var inst_27815 = cljs.core.seq_QMARK_.call(null,inst_27812);
var state_27868__$1 = state_27868;
if(inst_27815){
var statearr_27897_27937 = state_27868__$1;
(statearr_27897_27937[(1)] = (7));

} else {
var statearr_27898_27938 = state_27868__$1;
(statearr_27898_27938[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27869 === (14))){
var inst_27828 = (state_27868[(15)]);
var inst_27835 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_27828);
var state_27868__$1 = state_27868;
var statearr_27899_27939 = state_27868__$1;
(statearr_27899_27939[(2)] = inst_27835);

(statearr_27899_27939[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27869 === (26))){
var inst_27858 = (state_27868[(2)]);
var state_27868__$1 = state_27868;
var statearr_27900_27940 = state_27868__$1;
(statearr_27900_27940[(2)] = inst_27858);

(statearr_27900_27940[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27869 === (16))){
var inst_27838 = (state_27868[(2)]);
var inst_27839 = calc_state.call(null);
var inst_27812 = inst_27839;
var state_27868__$1 = (function (){var statearr_27901 = state_27868;
(statearr_27901[(18)] = inst_27838);

(statearr_27901[(7)] = inst_27812);

return statearr_27901;
})();
var statearr_27902_27941 = state_27868__$1;
(statearr_27902_27941[(2)] = null);

(statearr_27902_27941[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27869 === (10))){
var inst_27828 = (state_27868[(15)]);
var inst_27827 = (state_27868[(8)]);
var inst_27826 = (state_27868[(2)]);
var inst_27827__$1 = cljs.core.nth.call(null,inst_27826,(0),null);
var inst_27828__$1 = cljs.core.nth.call(null,inst_27826,(1),null);
var inst_27829 = (inst_27827__$1 == null);
var inst_27830 = cljs.core._EQ_.call(null,inst_27828__$1,change);
var inst_27831 = (inst_27829) || (inst_27830);
var state_27868__$1 = (function (){var statearr_27903 = state_27868;
(statearr_27903[(15)] = inst_27828__$1);

(statearr_27903[(8)] = inst_27827__$1);

return statearr_27903;
})();
if(cljs.core.truth_(inst_27831)){
var statearr_27904_27942 = state_27868__$1;
(statearr_27904_27942[(1)] = (11));

} else {
var statearr_27905_27943 = state_27868__$1;
(statearr_27905_27943[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27869 === (18))){
var inst_27828 = (state_27868[(15)]);
var inst_27823 = (state_27868[(16)]);
var inst_27822 = (state_27868[(17)]);
var inst_27845 = cljs.core.empty_QMARK_.call(null,inst_27823);
var inst_27846 = inst_27822.call(null,inst_27828);
var inst_27847 = cljs.core.not.call(null,inst_27846);
var inst_27848 = (inst_27845) && (inst_27847);
var state_27868__$1 = state_27868;
var statearr_27906_27944 = state_27868__$1;
(statearr_27906_27944[(2)] = inst_27848);

(statearr_27906_27944[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27869 === (8))){
var inst_27812 = (state_27868[(7)]);
var state_27868__$1 = state_27868;
var statearr_27907_27945 = state_27868__$1;
(statearr_27907_27945[(2)] = inst_27812);

(statearr_27907_27945[(1)] = (9));


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
});})(c__21387__auto___27915,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__21325__auto__,c__21387__auto___27915,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__21326__auto__ = null;
var cljs$core$async$mix_$_state_machine__21326__auto____0 = (function (){
var statearr_27911 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27911[(0)] = cljs$core$async$mix_$_state_machine__21326__auto__);

(statearr_27911[(1)] = (1));

return statearr_27911;
});
var cljs$core$async$mix_$_state_machine__21326__auto____1 = (function (state_27868){
while(true){
var ret_value__21327__auto__ = (function (){try{while(true){
var result__21328__auto__ = switch__21325__auto__.call(null,state_27868);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21328__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21328__auto__;
}
break;
}
}catch (e27912){if((e27912 instanceof Object)){
var ex__21329__auto__ = e27912;
var statearr_27913_27946 = state_27868;
(statearr_27913_27946[(5)] = ex__21329__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27868);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27912;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21327__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27947 = state_27868;
state_27868 = G__27947;
continue;
} else {
return ret_value__21327__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__21326__auto__ = function(state_27868){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__21326__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__21326__auto____1.call(this,state_27868);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__21326__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__21326__auto____0;
cljs$core$async$mix_$_state_machine__21326__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__21326__auto____1;
return cljs$core$async$mix_$_state_machine__21326__auto__;
})()
;})(switch__21325__auto__,c__21387__auto___27915,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__21389__auto__ = (function (){var statearr_27914 = f__21388__auto__.call(null);
(statearr_27914[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21387__auto___27915);

return statearr_27914;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21389__auto__);
});})(c__21387__auto___27915,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_.call(null,mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_.call(null,mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_.call(null,mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 * state map is a map of channels -> channel-state-map. A
 * channel-state-map is a map of attrs -> boolean, where attr is one or
 * more of :mute, :pause or :solo. Any states supplied are merged with
 * the current state.
 * 
 * Note that channels can be added to a mix via toggle, which can be
 * used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_.call(null,mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_.call(null,mix,mode);
});

cljs.core.async.Pub = (function (){var obj27949 = {};
return obj27949;
})();

cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((function (){var and__18148__auto__ = p;
if(and__18148__auto__){
return p.cljs$core$async$Pub$sub_STAR_$arity$4;
} else {
return and__18148__auto__;
}
})()){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__18796__auto__ = (((p == null))?null:p);
return (function (){var or__18160__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__18796__auto__)]);
if(or__18160__auto__){
return or__18160__auto__;
} else {
var or__18160__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(or__18160__auto____$1){
return or__18160__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
})().call(null,p,v,ch,close_QMARK_);
}
});

cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((function (){var and__18148__auto__ = p;
if(and__18148__auto__){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3;
} else {
return and__18148__auto__;
}
})()){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__18796__auto__ = (((p == null))?null:p);
return (function (){var or__18160__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__18796__auto__)]);
if(or__18160__auto__){
return or__18160__auto__;
} else {
var or__18160__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(or__18160__auto____$1){
return or__18160__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
})().call(null,p,v,ch);
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(){
var G__27951 = arguments.length;
switch (G__27951) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((function (){var and__18148__auto__ = p;
if(and__18148__auto__){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1;
} else {
return and__18148__auto__;
}
})()){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__18796__auto__ = (((p == null))?null:p);
return (function (){var or__18160__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__18796__auto__)]);
if(or__18160__auto__){
return or__18160__auto__;
} else {
var or__18160__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(or__18160__auto____$1){
return or__18160__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
})().call(null,p);
}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((function (){var and__18148__auto__ = p;
if(and__18148__auto__){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2;
} else {
return and__18148__auto__;
}
})()){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__18796__auto__ = (((p == null))?null:p);
return (function (){var or__18160__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__18796__auto__)]);
if(or__18160__auto__){
return or__18160__auto__;
} else {
var or__18160__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(or__18160__auto____$1){
return or__18160__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
})().call(null,p,v);
}
});

cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2;

/**
 * Creates and returns a pub(lication) of the supplied channel,
 * partitioned into topics by the topic-fn. topic-fn will be applied to
 * each value on the channel and the result will determine the 'topic'
 * on which that value will be put. Channels can be subscribed to
 * receive copies of topics using 'sub', and unsubscribed using
 * 'unsub'. Each topic will be handled by an internal mult on a
 * dedicated channel. By default these internal channels are
 * unbuffered, but a buf-fn can be supplied which, given a topic,
 * creates a buffer with desired properties.
 * 
 * Each item is distributed to all subs in parallel and synchronously,
 * i.e. each sub must accept before the next item is distributed. Use
 * buffering/windowing to prevent slow subs from holding up the pub.
 * 
 * Items received when there are no matching subs get dropped.
 * 
 * Note that if buf-fns are used then each topic is handled
 * asynchronously, i.e. if a channel is subscribed to more than one
 * topic it should not expect them to be interleaved identically with
 * the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(){
var G__27955 = arguments.length;
switch (G__27955) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__18160__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__18160__auto__)){
return or__18160__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__18160__auto__,mults){
return (function (p1__27953_SHARP_){
if(cljs.core.truth_(p1__27953_SHARP_.call(null,topic))){
return p1__27953_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__27953_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__18160__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t27956 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t27956 = (function (ensure_mult,mults,buf_fn,topic_fn,ch,meta27957){
this.ensure_mult = ensure_mult;
this.mults = mults;
this.buf_fn = buf_fn;
this.topic_fn = topic_fn;
this.ch = ch;
this.meta27957 = meta27957;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t27956.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t27956.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t27956.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__4126__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);
if(cljs.core.truth_(temp__4126__auto__)){
var m = temp__4126__auto__;
return cljs.core.async.untap.call(null,m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t27956.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t27956.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t27956.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t27956.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t27956.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_27958){
var self__ = this;
var _27958__$1 = this;
return self__.meta27957;
});})(mults,ensure_mult))
;

cljs.core.async.t27956.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_27958,meta27957__$1){
var self__ = this;
var _27958__$1 = this;
return (new cljs.core.async.t27956(self__.ensure_mult,self__.mults,self__.buf_fn,self__.topic_fn,self__.ch,meta27957__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t27956.cljs$lang$type = true;

cljs.core.async.t27956.cljs$lang$ctorStr = "cljs.core.async/t27956";

cljs.core.async.t27956.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__18739__auto__,writer__18740__auto__,opt__18741__auto__){
return cljs.core._write.call(null,writer__18740__auto__,"cljs.core.async/t27956");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t27956 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t27956(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,meta27957){
return (new cljs.core.async.t27956(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,meta27957));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t27956(ensure_mult,mults,buf_fn,topic_fn,ch,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__21387__auto___28079 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21387__auto___28079,mults,ensure_mult,p){
return (function (){
var f__21388__auto__ = (function (){var switch__21325__auto__ = ((function (c__21387__auto___28079,mults,ensure_mult,p){
return (function (state_28030){
var state_val_28031 = (state_28030[(1)]);
if((state_val_28031 === (7))){
var inst_28026 = (state_28030[(2)]);
var state_28030__$1 = state_28030;
var statearr_28032_28080 = state_28030__$1;
(statearr_28032_28080[(2)] = inst_28026);

(statearr_28032_28080[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28031 === (20))){
var state_28030__$1 = state_28030;
var statearr_28033_28081 = state_28030__$1;
(statearr_28033_28081[(2)] = null);

(statearr_28033_28081[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28031 === (1))){
var state_28030__$1 = state_28030;
var statearr_28034_28082 = state_28030__$1;
(statearr_28034_28082[(2)] = null);

(statearr_28034_28082[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28031 === (24))){
var inst_28009 = (state_28030[(7)]);
var inst_28018 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_28009);
var state_28030__$1 = state_28030;
var statearr_28035_28083 = state_28030__$1;
(statearr_28035_28083[(2)] = inst_28018);

(statearr_28035_28083[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28031 === (4))){
var inst_27961 = (state_28030[(8)]);
var inst_27961__$1 = (state_28030[(2)]);
var inst_27962 = (inst_27961__$1 == null);
var state_28030__$1 = (function (){var statearr_28036 = state_28030;
(statearr_28036[(8)] = inst_27961__$1);

return statearr_28036;
})();
if(cljs.core.truth_(inst_27962)){
var statearr_28037_28084 = state_28030__$1;
(statearr_28037_28084[(1)] = (5));

} else {
var statearr_28038_28085 = state_28030__$1;
(statearr_28038_28085[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28031 === (15))){
var inst_28003 = (state_28030[(2)]);
var state_28030__$1 = state_28030;
var statearr_28039_28086 = state_28030__$1;
(statearr_28039_28086[(2)] = inst_28003);

(statearr_28039_28086[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28031 === (21))){
var inst_28023 = (state_28030[(2)]);
var state_28030__$1 = (function (){var statearr_28040 = state_28030;
(statearr_28040[(9)] = inst_28023);

return statearr_28040;
})();
var statearr_28041_28087 = state_28030__$1;
(statearr_28041_28087[(2)] = null);

(statearr_28041_28087[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28031 === (13))){
var inst_27985 = (state_28030[(10)]);
var inst_27987 = cljs.core.chunked_seq_QMARK_.call(null,inst_27985);
var state_28030__$1 = state_28030;
if(inst_27987){
var statearr_28042_28088 = state_28030__$1;
(statearr_28042_28088[(1)] = (16));

} else {
var statearr_28043_28089 = state_28030__$1;
(statearr_28043_28089[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28031 === (22))){
var inst_28015 = (state_28030[(2)]);
var state_28030__$1 = state_28030;
if(cljs.core.truth_(inst_28015)){
var statearr_28044_28090 = state_28030__$1;
(statearr_28044_28090[(1)] = (23));

} else {
var statearr_28045_28091 = state_28030__$1;
(statearr_28045_28091[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28031 === (6))){
var inst_28011 = (state_28030[(11)]);
var inst_27961 = (state_28030[(8)]);
var inst_28009 = (state_28030[(7)]);
var inst_28009__$1 = topic_fn.call(null,inst_27961);
var inst_28010 = cljs.core.deref.call(null,mults);
var inst_28011__$1 = cljs.core.get.call(null,inst_28010,inst_28009__$1);
var state_28030__$1 = (function (){var statearr_28046 = state_28030;
(statearr_28046[(11)] = inst_28011__$1);

(statearr_28046[(7)] = inst_28009__$1);

return statearr_28046;
})();
if(cljs.core.truth_(inst_28011__$1)){
var statearr_28047_28092 = state_28030__$1;
(statearr_28047_28092[(1)] = (19));

} else {
var statearr_28048_28093 = state_28030__$1;
(statearr_28048_28093[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28031 === (25))){
var inst_28020 = (state_28030[(2)]);
var state_28030__$1 = state_28030;
var statearr_28049_28094 = state_28030__$1;
(statearr_28049_28094[(2)] = inst_28020);

(statearr_28049_28094[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28031 === (17))){
var inst_27985 = (state_28030[(10)]);
var inst_27994 = cljs.core.first.call(null,inst_27985);
var inst_27995 = cljs.core.async.muxch_STAR_.call(null,inst_27994);
var inst_27996 = cljs.core.async.close_BANG_.call(null,inst_27995);
var inst_27997 = cljs.core.next.call(null,inst_27985);
var inst_27971 = inst_27997;
var inst_27972 = null;
var inst_27973 = (0);
var inst_27974 = (0);
var state_28030__$1 = (function (){var statearr_28050 = state_28030;
(statearr_28050[(12)] = inst_27996);

(statearr_28050[(13)] = inst_27974);

(statearr_28050[(14)] = inst_27973);

(statearr_28050[(15)] = inst_27971);

(statearr_28050[(16)] = inst_27972);

return statearr_28050;
})();
var statearr_28051_28095 = state_28030__$1;
(statearr_28051_28095[(2)] = null);

(statearr_28051_28095[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28031 === (3))){
var inst_28028 = (state_28030[(2)]);
var state_28030__$1 = state_28030;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28030__$1,inst_28028);
} else {
if((state_val_28031 === (12))){
var inst_28005 = (state_28030[(2)]);
var state_28030__$1 = state_28030;
var statearr_28052_28096 = state_28030__$1;
(statearr_28052_28096[(2)] = inst_28005);

(statearr_28052_28096[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28031 === (2))){
var state_28030__$1 = state_28030;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28030__$1,(4),ch);
} else {
if((state_val_28031 === (23))){
var state_28030__$1 = state_28030;
var statearr_28053_28097 = state_28030__$1;
(statearr_28053_28097[(2)] = null);

(statearr_28053_28097[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28031 === (19))){
var inst_28011 = (state_28030[(11)]);
var inst_27961 = (state_28030[(8)]);
var inst_28013 = cljs.core.async.muxch_STAR_.call(null,inst_28011);
var state_28030__$1 = state_28030;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28030__$1,(22),inst_28013,inst_27961);
} else {
if((state_val_28031 === (11))){
var inst_27971 = (state_28030[(15)]);
var inst_27985 = (state_28030[(10)]);
var inst_27985__$1 = cljs.core.seq.call(null,inst_27971);
var state_28030__$1 = (function (){var statearr_28054 = state_28030;
(statearr_28054[(10)] = inst_27985__$1);

return statearr_28054;
})();
if(inst_27985__$1){
var statearr_28055_28098 = state_28030__$1;
(statearr_28055_28098[(1)] = (13));

} else {
var statearr_28056_28099 = state_28030__$1;
(statearr_28056_28099[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28031 === (9))){
var inst_28007 = (state_28030[(2)]);
var state_28030__$1 = state_28030;
var statearr_28057_28100 = state_28030__$1;
(statearr_28057_28100[(2)] = inst_28007);

(statearr_28057_28100[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28031 === (5))){
var inst_27968 = cljs.core.deref.call(null,mults);
var inst_27969 = cljs.core.vals.call(null,inst_27968);
var inst_27970 = cljs.core.seq.call(null,inst_27969);
var inst_27971 = inst_27970;
var inst_27972 = null;
var inst_27973 = (0);
var inst_27974 = (0);
var state_28030__$1 = (function (){var statearr_28058 = state_28030;
(statearr_28058[(13)] = inst_27974);

(statearr_28058[(14)] = inst_27973);

(statearr_28058[(15)] = inst_27971);

(statearr_28058[(16)] = inst_27972);

return statearr_28058;
})();
var statearr_28059_28101 = state_28030__$1;
(statearr_28059_28101[(2)] = null);

(statearr_28059_28101[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28031 === (14))){
var state_28030__$1 = state_28030;
var statearr_28063_28102 = state_28030__$1;
(statearr_28063_28102[(2)] = null);

(statearr_28063_28102[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28031 === (16))){
var inst_27985 = (state_28030[(10)]);
var inst_27989 = cljs.core.chunk_first.call(null,inst_27985);
var inst_27990 = cljs.core.chunk_rest.call(null,inst_27985);
var inst_27991 = cljs.core.count.call(null,inst_27989);
var inst_27971 = inst_27990;
var inst_27972 = inst_27989;
var inst_27973 = inst_27991;
var inst_27974 = (0);
var state_28030__$1 = (function (){var statearr_28064 = state_28030;
(statearr_28064[(13)] = inst_27974);

(statearr_28064[(14)] = inst_27973);

(statearr_28064[(15)] = inst_27971);

(statearr_28064[(16)] = inst_27972);

return statearr_28064;
})();
var statearr_28065_28103 = state_28030__$1;
(statearr_28065_28103[(2)] = null);

(statearr_28065_28103[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28031 === (10))){
var inst_27974 = (state_28030[(13)]);
var inst_27973 = (state_28030[(14)]);
var inst_27971 = (state_28030[(15)]);
var inst_27972 = (state_28030[(16)]);
var inst_27979 = cljs.core._nth.call(null,inst_27972,inst_27974);
var inst_27980 = cljs.core.async.muxch_STAR_.call(null,inst_27979);
var inst_27981 = cljs.core.async.close_BANG_.call(null,inst_27980);
var inst_27982 = (inst_27974 + (1));
var tmp28060 = inst_27973;
var tmp28061 = inst_27971;
var tmp28062 = inst_27972;
var inst_27971__$1 = tmp28061;
var inst_27972__$1 = tmp28062;
var inst_27973__$1 = tmp28060;
var inst_27974__$1 = inst_27982;
var state_28030__$1 = (function (){var statearr_28066 = state_28030;
(statearr_28066[(13)] = inst_27974__$1);

(statearr_28066[(14)] = inst_27973__$1);

(statearr_28066[(15)] = inst_27971__$1);

(statearr_28066[(16)] = inst_27972__$1);

(statearr_28066[(17)] = inst_27981);

return statearr_28066;
})();
var statearr_28067_28104 = state_28030__$1;
(statearr_28067_28104[(2)] = null);

(statearr_28067_28104[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28031 === (18))){
var inst_28000 = (state_28030[(2)]);
var state_28030__$1 = state_28030;
var statearr_28068_28105 = state_28030__$1;
(statearr_28068_28105[(2)] = inst_28000);

(statearr_28068_28105[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28031 === (8))){
var inst_27974 = (state_28030[(13)]);
var inst_27973 = (state_28030[(14)]);
var inst_27976 = (inst_27974 < inst_27973);
var inst_27977 = inst_27976;
var state_28030__$1 = state_28030;
if(cljs.core.truth_(inst_27977)){
var statearr_28069_28106 = state_28030__$1;
(statearr_28069_28106[(1)] = (10));

} else {
var statearr_28070_28107 = state_28030__$1;
(statearr_28070_28107[(1)] = (11));

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
});})(c__21387__auto___28079,mults,ensure_mult,p))
;
return ((function (switch__21325__auto__,c__21387__auto___28079,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__21326__auto__ = null;
var cljs$core$async$state_machine__21326__auto____0 = (function (){
var statearr_28074 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28074[(0)] = cljs$core$async$state_machine__21326__auto__);

(statearr_28074[(1)] = (1));

return statearr_28074;
});
var cljs$core$async$state_machine__21326__auto____1 = (function (state_28030){
while(true){
var ret_value__21327__auto__ = (function (){try{while(true){
var result__21328__auto__ = switch__21325__auto__.call(null,state_28030);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21328__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21328__auto__;
}
break;
}
}catch (e28075){if((e28075 instanceof Object)){
var ex__21329__auto__ = e28075;
var statearr_28076_28108 = state_28030;
(statearr_28076_28108[(5)] = ex__21329__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28030);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28075;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21327__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28109 = state_28030;
state_28030 = G__28109;
continue;
} else {
return ret_value__21327__auto__;
}
break;
}
});
cljs$core$async$state_machine__21326__auto__ = function(state_28030){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__21326__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__21326__auto____1.call(this,state_28030);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__21326__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__21326__auto____0;
cljs$core$async$state_machine__21326__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__21326__auto____1;
return cljs$core$async$state_machine__21326__auto__;
})()
;})(switch__21325__auto__,c__21387__auto___28079,mults,ensure_mult,p))
})();
var state__21389__auto__ = (function (){var statearr_28077 = f__21388__auto__.call(null);
(statearr_28077[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21387__auto___28079);

return statearr_28077;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21389__auto__);
});})(c__21387__auto___28079,mults,ensure_mult,p))
);


return p;
});

cljs.core.async.pub.cljs$lang$maxFixedArity = 3;
/**
 * Subscribes a channel to a topic of a pub.
 * 
 * By default the channel will be closed when the source closes,
 * but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(){
var G__28111 = arguments.length;
switch (G__28111) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.call(null,p,topic,ch,true);
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
});

cljs.core.async.sub.cljs$lang$maxFixedArity = 4;
/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_.call(null,p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(){
var G__28114 = arguments.length;
switch (G__28114) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_.call(null,p);
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
});

cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2;
/**
 * Takes a function and a collection of source channels, and returns a
 * channel which contains the values produced by applying f to the set
 * of first items taken from each source channel, followed by applying
 * f to the set of second items from each channel, until any one of the
 * channels is closed, at which point the output channel will be
 * closed. The returned channel will be unbuffered by default, or a
 * buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(){
var G__28117 = arguments.length;
switch (G__28117) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.call(null,f,chs,null);
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec.call(null,chs);
var out = cljs.core.async.chan.call(null,buf_or_n);
var cnt = cljs.core.count.call(null,chs__$1);
var rets = cljs.core.object_array.call(null,cnt);
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = cljs.core.mapv.call(null,((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){
return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,rets.slice((0)));
} else {
return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.call(null,cnt));
var c__21387__auto___28187 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21387__auto___28187,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__21388__auto__ = (function (){var switch__21325__auto__ = ((function (c__21387__auto___28187,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_28156){
var state_val_28157 = (state_28156[(1)]);
if((state_val_28157 === (7))){
var state_28156__$1 = state_28156;
var statearr_28158_28188 = state_28156__$1;
(statearr_28158_28188[(2)] = null);

(statearr_28158_28188[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28157 === (1))){
var state_28156__$1 = state_28156;
var statearr_28159_28189 = state_28156__$1;
(statearr_28159_28189[(2)] = null);

(statearr_28159_28189[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28157 === (4))){
var inst_28120 = (state_28156[(7)]);
var inst_28122 = (inst_28120 < cnt);
var state_28156__$1 = state_28156;
if(cljs.core.truth_(inst_28122)){
var statearr_28160_28190 = state_28156__$1;
(statearr_28160_28190[(1)] = (6));

} else {
var statearr_28161_28191 = state_28156__$1;
(statearr_28161_28191[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28157 === (15))){
var inst_28152 = (state_28156[(2)]);
var state_28156__$1 = state_28156;
var statearr_28162_28192 = state_28156__$1;
(statearr_28162_28192[(2)] = inst_28152);

(statearr_28162_28192[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28157 === (13))){
var inst_28145 = cljs.core.async.close_BANG_.call(null,out);
var state_28156__$1 = state_28156;
var statearr_28163_28193 = state_28156__$1;
(statearr_28163_28193[(2)] = inst_28145);

(statearr_28163_28193[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28157 === (6))){
var state_28156__$1 = state_28156;
var statearr_28164_28194 = state_28156__$1;
(statearr_28164_28194[(2)] = null);

(statearr_28164_28194[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28157 === (3))){
var inst_28154 = (state_28156[(2)]);
var state_28156__$1 = state_28156;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28156__$1,inst_28154);
} else {
if((state_val_28157 === (12))){
var inst_28142 = (state_28156[(8)]);
var inst_28142__$1 = (state_28156[(2)]);
var inst_28143 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_28142__$1);
var state_28156__$1 = (function (){var statearr_28165 = state_28156;
(statearr_28165[(8)] = inst_28142__$1);

return statearr_28165;
})();
if(cljs.core.truth_(inst_28143)){
var statearr_28166_28195 = state_28156__$1;
(statearr_28166_28195[(1)] = (13));

} else {
var statearr_28167_28196 = state_28156__$1;
(statearr_28167_28196[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28157 === (2))){
var inst_28119 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_28120 = (0);
var state_28156__$1 = (function (){var statearr_28168 = state_28156;
(statearr_28168[(7)] = inst_28120);

(statearr_28168[(9)] = inst_28119);

return statearr_28168;
})();
var statearr_28169_28197 = state_28156__$1;
(statearr_28169_28197[(2)] = null);

(statearr_28169_28197[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28157 === (11))){
var inst_28120 = (state_28156[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_28156,(10),Object,null,(9));
var inst_28129 = chs__$1.call(null,inst_28120);
var inst_28130 = done.call(null,inst_28120);
var inst_28131 = cljs.core.async.take_BANG_.call(null,inst_28129,inst_28130);
var state_28156__$1 = state_28156;
var statearr_28170_28198 = state_28156__$1;
(statearr_28170_28198[(2)] = inst_28131);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28156__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28157 === (9))){
var inst_28120 = (state_28156[(7)]);
var inst_28133 = (state_28156[(2)]);
var inst_28134 = (inst_28120 + (1));
var inst_28120__$1 = inst_28134;
var state_28156__$1 = (function (){var statearr_28171 = state_28156;
(statearr_28171[(7)] = inst_28120__$1);

(statearr_28171[(10)] = inst_28133);

return statearr_28171;
})();
var statearr_28172_28199 = state_28156__$1;
(statearr_28172_28199[(2)] = null);

(statearr_28172_28199[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28157 === (5))){
var inst_28140 = (state_28156[(2)]);
var state_28156__$1 = (function (){var statearr_28173 = state_28156;
(statearr_28173[(11)] = inst_28140);

return statearr_28173;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28156__$1,(12),dchan);
} else {
if((state_val_28157 === (14))){
var inst_28142 = (state_28156[(8)]);
var inst_28147 = cljs.core.apply.call(null,f,inst_28142);
var state_28156__$1 = state_28156;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28156__$1,(16),out,inst_28147);
} else {
if((state_val_28157 === (16))){
var inst_28149 = (state_28156[(2)]);
var state_28156__$1 = (function (){var statearr_28174 = state_28156;
(statearr_28174[(12)] = inst_28149);

return statearr_28174;
})();
var statearr_28175_28200 = state_28156__$1;
(statearr_28175_28200[(2)] = null);

(statearr_28175_28200[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28157 === (10))){
var inst_28124 = (state_28156[(2)]);
var inst_28125 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_28156__$1 = (function (){var statearr_28176 = state_28156;
(statearr_28176[(13)] = inst_28124);

return statearr_28176;
})();
var statearr_28177_28201 = state_28156__$1;
(statearr_28177_28201[(2)] = inst_28125);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28156__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28157 === (8))){
var inst_28138 = (state_28156[(2)]);
var state_28156__$1 = state_28156;
var statearr_28178_28202 = state_28156__$1;
(statearr_28178_28202[(2)] = inst_28138);

(statearr_28178_28202[(1)] = (5));


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
});})(c__21387__auto___28187,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__21325__auto__,c__21387__auto___28187,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__21326__auto__ = null;
var cljs$core$async$state_machine__21326__auto____0 = (function (){
var statearr_28182 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28182[(0)] = cljs$core$async$state_machine__21326__auto__);

(statearr_28182[(1)] = (1));

return statearr_28182;
});
var cljs$core$async$state_machine__21326__auto____1 = (function (state_28156){
while(true){
var ret_value__21327__auto__ = (function (){try{while(true){
var result__21328__auto__ = switch__21325__auto__.call(null,state_28156);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21328__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21328__auto__;
}
break;
}
}catch (e28183){if((e28183 instanceof Object)){
var ex__21329__auto__ = e28183;
var statearr_28184_28203 = state_28156;
(statearr_28184_28203[(5)] = ex__21329__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28156);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28183;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21327__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28204 = state_28156;
state_28156 = G__28204;
continue;
} else {
return ret_value__21327__auto__;
}
break;
}
});
cljs$core$async$state_machine__21326__auto__ = function(state_28156){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__21326__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__21326__auto____1.call(this,state_28156);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__21326__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__21326__auto____0;
cljs$core$async$state_machine__21326__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__21326__auto____1;
return cljs$core$async$state_machine__21326__auto__;
})()
;})(switch__21325__auto__,c__21387__auto___28187,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__21389__auto__ = (function (){var statearr_28185 = f__21388__auto__.call(null);
(statearr_28185[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21387__auto___28187);

return statearr_28185;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21389__auto__);
});})(c__21387__auto___28187,chs__$1,out,cnt,rets,dchan,dctr,done))
);


return out;
});

cljs.core.async.map.cljs$lang$maxFixedArity = 3;
/**
 * Takes a collection of source channels and returns a channel which
 * contains all values taken from them. The returned channel will be
 * unbuffered by default, or a buf-or-n can be supplied. The channel
 * will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(){
var G__28207 = arguments.length;
switch (G__28207) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__21387__auto___28262 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21387__auto___28262,out){
return (function (){
var f__21388__auto__ = (function (){var switch__21325__auto__ = ((function (c__21387__auto___28262,out){
return (function (state_28237){
var state_val_28238 = (state_28237[(1)]);
if((state_val_28238 === (7))){
var inst_28217 = (state_28237[(7)]);
var inst_28216 = (state_28237[(8)]);
var inst_28216__$1 = (state_28237[(2)]);
var inst_28217__$1 = cljs.core.nth.call(null,inst_28216__$1,(0),null);
var inst_28218 = cljs.core.nth.call(null,inst_28216__$1,(1),null);
var inst_28219 = (inst_28217__$1 == null);
var state_28237__$1 = (function (){var statearr_28239 = state_28237;
(statearr_28239[(9)] = inst_28218);

(statearr_28239[(7)] = inst_28217__$1);

(statearr_28239[(8)] = inst_28216__$1);

return statearr_28239;
})();
if(cljs.core.truth_(inst_28219)){
var statearr_28240_28263 = state_28237__$1;
(statearr_28240_28263[(1)] = (8));

} else {
var statearr_28241_28264 = state_28237__$1;
(statearr_28241_28264[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28238 === (1))){
var inst_28208 = cljs.core.vec.call(null,chs);
var inst_28209 = inst_28208;
var state_28237__$1 = (function (){var statearr_28242 = state_28237;
(statearr_28242[(10)] = inst_28209);

return statearr_28242;
})();
var statearr_28243_28265 = state_28237__$1;
(statearr_28243_28265[(2)] = null);

(statearr_28243_28265[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28238 === (4))){
var inst_28209 = (state_28237[(10)]);
var state_28237__$1 = state_28237;
return cljs.core.async.ioc_alts_BANG_.call(null,state_28237__$1,(7),inst_28209);
} else {
if((state_val_28238 === (6))){
var inst_28233 = (state_28237[(2)]);
var state_28237__$1 = state_28237;
var statearr_28244_28266 = state_28237__$1;
(statearr_28244_28266[(2)] = inst_28233);

(statearr_28244_28266[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28238 === (3))){
var inst_28235 = (state_28237[(2)]);
var state_28237__$1 = state_28237;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28237__$1,inst_28235);
} else {
if((state_val_28238 === (2))){
var inst_28209 = (state_28237[(10)]);
var inst_28211 = cljs.core.count.call(null,inst_28209);
var inst_28212 = (inst_28211 > (0));
var state_28237__$1 = state_28237;
if(cljs.core.truth_(inst_28212)){
var statearr_28246_28267 = state_28237__$1;
(statearr_28246_28267[(1)] = (4));

} else {
var statearr_28247_28268 = state_28237__$1;
(statearr_28247_28268[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28238 === (11))){
var inst_28209 = (state_28237[(10)]);
var inst_28226 = (state_28237[(2)]);
var tmp28245 = inst_28209;
var inst_28209__$1 = tmp28245;
var state_28237__$1 = (function (){var statearr_28248 = state_28237;
(statearr_28248[(10)] = inst_28209__$1);

(statearr_28248[(11)] = inst_28226);

return statearr_28248;
})();
var statearr_28249_28269 = state_28237__$1;
(statearr_28249_28269[(2)] = null);

(statearr_28249_28269[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28238 === (9))){
var inst_28217 = (state_28237[(7)]);
var state_28237__$1 = state_28237;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28237__$1,(11),out,inst_28217);
} else {
if((state_val_28238 === (5))){
var inst_28231 = cljs.core.async.close_BANG_.call(null,out);
var state_28237__$1 = state_28237;
var statearr_28250_28270 = state_28237__$1;
(statearr_28250_28270[(2)] = inst_28231);

(statearr_28250_28270[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28238 === (10))){
var inst_28229 = (state_28237[(2)]);
var state_28237__$1 = state_28237;
var statearr_28251_28271 = state_28237__$1;
(statearr_28251_28271[(2)] = inst_28229);

(statearr_28251_28271[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28238 === (8))){
var inst_28218 = (state_28237[(9)]);
var inst_28209 = (state_28237[(10)]);
var inst_28217 = (state_28237[(7)]);
var inst_28216 = (state_28237[(8)]);
var inst_28221 = (function (){var c = inst_28218;
var v = inst_28217;
var vec__28214 = inst_28216;
var cs = inst_28209;
return ((function (c,v,vec__28214,cs,inst_28218,inst_28209,inst_28217,inst_28216,state_val_28238,c__21387__auto___28262,out){
return (function (p1__28205_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__28205_SHARP_);
});
;})(c,v,vec__28214,cs,inst_28218,inst_28209,inst_28217,inst_28216,state_val_28238,c__21387__auto___28262,out))
})();
var inst_28222 = cljs.core.filterv.call(null,inst_28221,inst_28209);
var inst_28209__$1 = inst_28222;
var state_28237__$1 = (function (){var statearr_28252 = state_28237;
(statearr_28252[(10)] = inst_28209__$1);

return statearr_28252;
})();
var statearr_28253_28272 = state_28237__$1;
(statearr_28253_28272[(2)] = null);

(statearr_28253_28272[(1)] = (2));


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
});})(c__21387__auto___28262,out))
;
return ((function (switch__21325__auto__,c__21387__auto___28262,out){
return (function() {
var cljs$core$async$state_machine__21326__auto__ = null;
var cljs$core$async$state_machine__21326__auto____0 = (function (){
var statearr_28257 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28257[(0)] = cljs$core$async$state_machine__21326__auto__);

(statearr_28257[(1)] = (1));

return statearr_28257;
});
var cljs$core$async$state_machine__21326__auto____1 = (function (state_28237){
while(true){
var ret_value__21327__auto__ = (function (){try{while(true){
var result__21328__auto__ = switch__21325__auto__.call(null,state_28237);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21328__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21328__auto__;
}
break;
}
}catch (e28258){if((e28258 instanceof Object)){
var ex__21329__auto__ = e28258;
var statearr_28259_28273 = state_28237;
(statearr_28259_28273[(5)] = ex__21329__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28237);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28258;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21327__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28274 = state_28237;
state_28237 = G__28274;
continue;
} else {
return ret_value__21327__auto__;
}
break;
}
});
cljs$core$async$state_machine__21326__auto__ = function(state_28237){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__21326__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__21326__auto____1.call(this,state_28237);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__21326__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__21326__auto____0;
cljs$core$async$state_machine__21326__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__21326__auto____1;
return cljs$core$async$state_machine__21326__auto__;
})()
;})(switch__21325__auto__,c__21387__auto___28262,out))
})();
var state__21389__auto__ = (function (){var statearr_28260 = f__21388__auto__.call(null);
(statearr_28260[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21387__auto___28262);

return statearr_28260;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21389__auto__);
});})(c__21387__auto___28262,out))
);


return out;
});

cljs.core.async.merge.cljs$lang$maxFixedArity = 2;
/**
 * Returns a channel containing the single (collection) result of the
 * items taken from the channel conjoined to the supplied
 * collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 * The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(){
var G__28276 = arguments.length;
switch (G__28276) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__21387__auto___28324 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21387__auto___28324,out){
return (function (){
var f__21388__auto__ = (function (){var switch__21325__auto__ = ((function (c__21387__auto___28324,out){
return (function (state_28300){
var state_val_28301 = (state_28300[(1)]);
if((state_val_28301 === (7))){
var inst_28282 = (state_28300[(7)]);
var inst_28282__$1 = (state_28300[(2)]);
var inst_28283 = (inst_28282__$1 == null);
var inst_28284 = cljs.core.not.call(null,inst_28283);
var state_28300__$1 = (function (){var statearr_28302 = state_28300;
(statearr_28302[(7)] = inst_28282__$1);

return statearr_28302;
})();
if(inst_28284){
var statearr_28303_28325 = state_28300__$1;
(statearr_28303_28325[(1)] = (8));

} else {
var statearr_28304_28326 = state_28300__$1;
(statearr_28304_28326[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28301 === (1))){
var inst_28277 = (0);
var state_28300__$1 = (function (){var statearr_28305 = state_28300;
(statearr_28305[(8)] = inst_28277);

return statearr_28305;
})();
var statearr_28306_28327 = state_28300__$1;
(statearr_28306_28327[(2)] = null);

(statearr_28306_28327[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28301 === (4))){
var state_28300__$1 = state_28300;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28300__$1,(7),ch);
} else {
if((state_val_28301 === (6))){
var inst_28295 = (state_28300[(2)]);
var state_28300__$1 = state_28300;
var statearr_28307_28328 = state_28300__$1;
(statearr_28307_28328[(2)] = inst_28295);

(statearr_28307_28328[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28301 === (3))){
var inst_28297 = (state_28300[(2)]);
var inst_28298 = cljs.core.async.close_BANG_.call(null,out);
var state_28300__$1 = (function (){var statearr_28308 = state_28300;
(statearr_28308[(9)] = inst_28297);

return statearr_28308;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28300__$1,inst_28298);
} else {
if((state_val_28301 === (2))){
var inst_28277 = (state_28300[(8)]);
var inst_28279 = (inst_28277 < n);
var state_28300__$1 = state_28300;
if(cljs.core.truth_(inst_28279)){
var statearr_28309_28329 = state_28300__$1;
(statearr_28309_28329[(1)] = (4));

} else {
var statearr_28310_28330 = state_28300__$1;
(statearr_28310_28330[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28301 === (11))){
var inst_28277 = (state_28300[(8)]);
var inst_28287 = (state_28300[(2)]);
var inst_28288 = (inst_28277 + (1));
var inst_28277__$1 = inst_28288;
var state_28300__$1 = (function (){var statearr_28311 = state_28300;
(statearr_28311[(10)] = inst_28287);

(statearr_28311[(8)] = inst_28277__$1);

return statearr_28311;
})();
var statearr_28312_28331 = state_28300__$1;
(statearr_28312_28331[(2)] = null);

(statearr_28312_28331[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28301 === (9))){
var state_28300__$1 = state_28300;
var statearr_28313_28332 = state_28300__$1;
(statearr_28313_28332[(2)] = null);

(statearr_28313_28332[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28301 === (5))){
var state_28300__$1 = state_28300;
var statearr_28314_28333 = state_28300__$1;
(statearr_28314_28333[(2)] = null);

(statearr_28314_28333[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28301 === (10))){
var inst_28292 = (state_28300[(2)]);
var state_28300__$1 = state_28300;
var statearr_28315_28334 = state_28300__$1;
(statearr_28315_28334[(2)] = inst_28292);

(statearr_28315_28334[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28301 === (8))){
var inst_28282 = (state_28300[(7)]);
var state_28300__$1 = state_28300;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28300__$1,(11),out,inst_28282);
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
});})(c__21387__auto___28324,out))
;
return ((function (switch__21325__auto__,c__21387__auto___28324,out){
return (function() {
var cljs$core$async$state_machine__21326__auto__ = null;
var cljs$core$async$state_machine__21326__auto____0 = (function (){
var statearr_28319 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_28319[(0)] = cljs$core$async$state_machine__21326__auto__);

(statearr_28319[(1)] = (1));

return statearr_28319;
});
var cljs$core$async$state_machine__21326__auto____1 = (function (state_28300){
while(true){
var ret_value__21327__auto__ = (function (){try{while(true){
var result__21328__auto__ = switch__21325__auto__.call(null,state_28300);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21328__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21328__auto__;
}
break;
}
}catch (e28320){if((e28320 instanceof Object)){
var ex__21329__auto__ = e28320;
var statearr_28321_28335 = state_28300;
(statearr_28321_28335[(5)] = ex__21329__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28300);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28320;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21327__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28336 = state_28300;
state_28300 = G__28336;
continue;
} else {
return ret_value__21327__auto__;
}
break;
}
});
cljs$core$async$state_machine__21326__auto__ = function(state_28300){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__21326__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__21326__auto____1.call(this,state_28300);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__21326__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__21326__auto____0;
cljs$core$async$state_machine__21326__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__21326__auto____1;
return cljs$core$async$state_machine__21326__auto__;
})()
;})(switch__21325__auto__,c__21387__auto___28324,out))
})();
var state__21389__auto__ = (function (){var statearr_28322 = f__21388__auto__.call(null);
(statearr_28322[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21387__auto___28324);

return statearr_28322;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21389__auto__);
});})(c__21387__auto___28324,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t28344 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t28344 = (function (ch,f,map_LT_,meta28345){
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta28345 = meta28345;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t28344.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t28344.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t28344.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t28344.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t28347 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t28347 = (function (fn1,_,meta28345,map_LT_,f,ch,meta28348){
this.fn1 = fn1;
this._ = _;
this.meta28345 = meta28345;
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta28348 = meta28348;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t28347.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t28347.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t28347.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__28337_SHARP_){
return f1.call(null,(((p1__28337_SHARP_ == null))?null:self__.f.call(null,p1__28337_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t28347.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_28349){
var self__ = this;
var _28349__$1 = this;
return self__.meta28348;
});})(___$1))
;

cljs.core.async.t28347.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_28349,meta28348__$1){
var self__ = this;
var _28349__$1 = this;
return (new cljs.core.async.t28347(self__.fn1,self__._,self__.meta28345,self__.map_LT_,self__.f,self__.ch,meta28348__$1));
});})(___$1))
;

cljs.core.async.t28347.cljs$lang$type = true;

cljs.core.async.t28347.cljs$lang$ctorStr = "cljs.core.async/t28347";

cljs.core.async.t28347.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__18739__auto__,writer__18740__auto__,opt__18741__auto__){
return cljs.core._write.call(null,writer__18740__auto__,"cljs.core.async/t28347");
});})(___$1))
;

cljs.core.async.__GT_t28347 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t28347(fn1__$1,___$2,meta28345__$1,map_LT___$1,f__$1,ch__$1,meta28348){
return (new cljs.core.async.t28347(fn1__$1,___$2,meta28345__$1,map_LT___$1,f__$1,ch__$1,meta28348));
});})(___$1))
;

}

return (new cljs.core.async.t28347(fn1,___$1,self__.meta28345,self__.map_LT_,self__.f,self__.ch,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__18148__auto__ = ret;
if(cljs.core.truth_(and__18148__auto__)){
return !((cljs.core.deref.call(null,ret) == null));
} else {
return and__18148__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t28344.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t28344.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t28344.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t28344.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_28346){
var self__ = this;
var _28346__$1 = this;
return self__.meta28345;
});

cljs.core.async.t28344.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_28346,meta28345__$1){
var self__ = this;
var _28346__$1 = this;
return (new cljs.core.async.t28344(self__.ch,self__.f,self__.map_LT_,meta28345__$1));
});

cljs.core.async.t28344.cljs$lang$type = true;

cljs.core.async.t28344.cljs$lang$ctorStr = "cljs.core.async/t28344";

cljs.core.async.t28344.cljs$lang$ctorPrWriter = (function (this__18739__auto__,writer__18740__auto__,opt__18741__auto__){
return cljs.core._write.call(null,writer__18740__auto__,"cljs.core.async/t28344");
});

cljs.core.async.__GT_t28344 = (function cljs$core$async$map_LT__$___GT_t28344(ch__$1,f__$1,map_LT___$1,meta28345){
return (new cljs.core.async.t28344(ch__$1,f__$1,map_LT___$1,meta28345));
});

}

return (new cljs.core.async.t28344(ch,f,cljs$core$async$map_LT_,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t28353 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t28353 = (function (ch,f,map_GT_,meta28354){
this.ch = ch;
this.f = f;
this.map_GT_ = map_GT_;
this.meta28354 = meta28354;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t28353.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t28353.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t28353.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t28353.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t28353.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t28353.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t28353.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_28355){
var self__ = this;
var _28355__$1 = this;
return self__.meta28354;
});

cljs.core.async.t28353.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_28355,meta28354__$1){
var self__ = this;
var _28355__$1 = this;
return (new cljs.core.async.t28353(self__.ch,self__.f,self__.map_GT_,meta28354__$1));
});

cljs.core.async.t28353.cljs$lang$type = true;

cljs.core.async.t28353.cljs$lang$ctorStr = "cljs.core.async/t28353";

cljs.core.async.t28353.cljs$lang$ctorPrWriter = (function (this__18739__auto__,writer__18740__auto__,opt__18741__auto__){
return cljs.core._write.call(null,writer__18740__auto__,"cljs.core.async/t28353");
});

cljs.core.async.__GT_t28353 = (function cljs$core$async$map_GT__$___GT_t28353(ch__$1,f__$1,map_GT___$1,meta28354){
return (new cljs.core.async.t28353(ch__$1,f__$1,map_GT___$1,meta28354));
});

}

return (new cljs.core.async.t28353(ch,f,cljs$core$async$map_GT_,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t28359 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t28359 = (function (ch,p,filter_GT_,meta28360){
this.ch = ch;
this.p = p;
this.filter_GT_ = filter_GT_;
this.meta28360 = meta28360;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t28359.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t28359.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t28359.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t28359.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t28359.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t28359.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t28359.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t28359.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_28361){
var self__ = this;
var _28361__$1 = this;
return self__.meta28360;
});

cljs.core.async.t28359.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_28361,meta28360__$1){
var self__ = this;
var _28361__$1 = this;
return (new cljs.core.async.t28359(self__.ch,self__.p,self__.filter_GT_,meta28360__$1));
});

cljs.core.async.t28359.cljs$lang$type = true;

cljs.core.async.t28359.cljs$lang$ctorStr = "cljs.core.async/t28359";

cljs.core.async.t28359.cljs$lang$ctorPrWriter = (function (this__18739__auto__,writer__18740__auto__,opt__18741__auto__){
return cljs.core._write.call(null,writer__18740__auto__,"cljs.core.async/t28359");
});

cljs.core.async.__GT_t28359 = (function cljs$core$async$filter_GT__$___GT_t28359(ch__$1,p__$1,filter_GT___$1,meta28360){
return (new cljs.core.async.t28359(ch__$1,p__$1,filter_GT___$1,meta28360));
});

}

return (new cljs.core.async.t28359(ch,p,cljs$core$async$filter_GT_,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_.call(null,cljs.core.complement.call(null,p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(){
var G__28363 = arguments.length;
switch (G__28363) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__21387__auto___28406 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21387__auto___28406,out){
return (function (){
var f__21388__auto__ = (function (){var switch__21325__auto__ = ((function (c__21387__auto___28406,out){
return (function (state_28384){
var state_val_28385 = (state_28384[(1)]);
if((state_val_28385 === (7))){
var inst_28380 = (state_28384[(2)]);
var state_28384__$1 = state_28384;
var statearr_28386_28407 = state_28384__$1;
(statearr_28386_28407[(2)] = inst_28380);

(statearr_28386_28407[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28385 === (1))){
var state_28384__$1 = state_28384;
var statearr_28387_28408 = state_28384__$1;
(statearr_28387_28408[(2)] = null);

(statearr_28387_28408[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28385 === (4))){
var inst_28366 = (state_28384[(7)]);
var inst_28366__$1 = (state_28384[(2)]);
var inst_28367 = (inst_28366__$1 == null);
var state_28384__$1 = (function (){var statearr_28388 = state_28384;
(statearr_28388[(7)] = inst_28366__$1);

return statearr_28388;
})();
if(cljs.core.truth_(inst_28367)){
var statearr_28389_28409 = state_28384__$1;
(statearr_28389_28409[(1)] = (5));

} else {
var statearr_28390_28410 = state_28384__$1;
(statearr_28390_28410[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28385 === (6))){
var inst_28366 = (state_28384[(7)]);
var inst_28371 = p.call(null,inst_28366);
var state_28384__$1 = state_28384;
if(cljs.core.truth_(inst_28371)){
var statearr_28391_28411 = state_28384__$1;
(statearr_28391_28411[(1)] = (8));

} else {
var statearr_28392_28412 = state_28384__$1;
(statearr_28392_28412[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28385 === (3))){
var inst_28382 = (state_28384[(2)]);
var state_28384__$1 = state_28384;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28384__$1,inst_28382);
} else {
if((state_val_28385 === (2))){
var state_28384__$1 = state_28384;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28384__$1,(4),ch);
} else {
if((state_val_28385 === (11))){
var inst_28374 = (state_28384[(2)]);
var state_28384__$1 = state_28384;
var statearr_28393_28413 = state_28384__$1;
(statearr_28393_28413[(2)] = inst_28374);

(statearr_28393_28413[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28385 === (9))){
var state_28384__$1 = state_28384;
var statearr_28394_28414 = state_28384__$1;
(statearr_28394_28414[(2)] = null);

(statearr_28394_28414[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28385 === (5))){
var inst_28369 = cljs.core.async.close_BANG_.call(null,out);
var state_28384__$1 = state_28384;
var statearr_28395_28415 = state_28384__$1;
(statearr_28395_28415[(2)] = inst_28369);

(statearr_28395_28415[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28385 === (10))){
var inst_28377 = (state_28384[(2)]);
var state_28384__$1 = (function (){var statearr_28396 = state_28384;
(statearr_28396[(8)] = inst_28377);

return statearr_28396;
})();
var statearr_28397_28416 = state_28384__$1;
(statearr_28397_28416[(2)] = null);

(statearr_28397_28416[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28385 === (8))){
var inst_28366 = (state_28384[(7)]);
var state_28384__$1 = state_28384;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28384__$1,(11),out,inst_28366);
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
});})(c__21387__auto___28406,out))
;
return ((function (switch__21325__auto__,c__21387__auto___28406,out){
return (function() {
var cljs$core$async$state_machine__21326__auto__ = null;
var cljs$core$async$state_machine__21326__auto____0 = (function (){
var statearr_28401 = [null,null,null,null,null,null,null,null,null];
(statearr_28401[(0)] = cljs$core$async$state_machine__21326__auto__);

(statearr_28401[(1)] = (1));

return statearr_28401;
});
var cljs$core$async$state_machine__21326__auto____1 = (function (state_28384){
while(true){
var ret_value__21327__auto__ = (function (){try{while(true){
var result__21328__auto__ = switch__21325__auto__.call(null,state_28384);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21328__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21328__auto__;
}
break;
}
}catch (e28402){if((e28402 instanceof Object)){
var ex__21329__auto__ = e28402;
var statearr_28403_28417 = state_28384;
(statearr_28403_28417[(5)] = ex__21329__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28384);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28402;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21327__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28418 = state_28384;
state_28384 = G__28418;
continue;
} else {
return ret_value__21327__auto__;
}
break;
}
});
cljs$core$async$state_machine__21326__auto__ = function(state_28384){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__21326__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__21326__auto____1.call(this,state_28384);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__21326__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__21326__auto____0;
cljs$core$async$state_machine__21326__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__21326__auto____1;
return cljs$core$async$state_machine__21326__auto__;
})()
;})(switch__21325__auto__,c__21387__auto___28406,out))
})();
var state__21389__auto__ = (function (){var statearr_28404 = f__21388__auto__.call(null);
(statearr_28404[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21387__auto___28406);

return statearr_28404;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21389__auto__);
});})(c__21387__auto___28406,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(){
var G__28420 = arguments.length;
switch (G__28420) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.call(null,p,ch,null);
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
});

cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3;
cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__21387__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21387__auto__){
return (function (){
var f__21388__auto__ = (function (){var switch__21325__auto__ = ((function (c__21387__auto__){
return (function (state_28587){
var state_val_28588 = (state_28587[(1)]);
if((state_val_28588 === (7))){
var inst_28583 = (state_28587[(2)]);
var state_28587__$1 = state_28587;
var statearr_28589_28630 = state_28587__$1;
(statearr_28589_28630[(2)] = inst_28583);

(statearr_28589_28630[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28588 === (20))){
var inst_28553 = (state_28587[(7)]);
var inst_28564 = (state_28587[(2)]);
var inst_28565 = cljs.core.next.call(null,inst_28553);
var inst_28539 = inst_28565;
var inst_28540 = null;
var inst_28541 = (0);
var inst_28542 = (0);
var state_28587__$1 = (function (){var statearr_28590 = state_28587;
(statearr_28590[(8)] = inst_28542);

(statearr_28590[(9)] = inst_28564);

(statearr_28590[(10)] = inst_28539);

(statearr_28590[(11)] = inst_28540);

(statearr_28590[(12)] = inst_28541);

return statearr_28590;
})();
var statearr_28591_28631 = state_28587__$1;
(statearr_28591_28631[(2)] = null);

(statearr_28591_28631[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28588 === (1))){
var state_28587__$1 = state_28587;
var statearr_28592_28632 = state_28587__$1;
(statearr_28592_28632[(2)] = null);

(statearr_28592_28632[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28588 === (4))){
var inst_28528 = (state_28587[(13)]);
var inst_28528__$1 = (state_28587[(2)]);
var inst_28529 = (inst_28528__$1 == null);
var state_28587__$1 = (function (){var statearr_28593 = state_28587;
(statearr_28593[(13)] = inst_28528__$1);

return statearr_28593;
})();
if(cljs.core.truth_(inst_28529)){
var statearr_28594_28633 = state_28587__$1;
(statearr_28594_28633[(1)] = (5));

} else {
var statearr_28595_28634 = state_28587__$1;
(statearr_28595_28634[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28588 === (15))){
var state_28587__$1 = state_28587;
var statearr_28599_28635 = state_28587__$1;
(statearr_28599_28635[(2)] = null);

(statearr_28599_28635[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28588 === (21))){
var state_28587__$1 = state_28587;
var statearr_28600_28636 = state_28587__$1;
(statearr_28600_28636[(2)] = null);

(statearr_28600_28636[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28588 === (13))){
var inst_28542 = (state_28587[(8)]);
var inst_28539 = (state_28587[(10)]);
var inst_28540 = (state_28587[(11)]);
var inst_28541 = (state_28587[(12)]);
var inst_28549 = (state_28587[(2)]);
var inst_28550 = (inst_28542 + (1));
var tmp28596 = inst_28539;
var tmp28597 = inst_28540;
var tmp28598 = inst_28541;
var inst_28539__$1 = tmp28596;
var inst_28540__$1 = tmp28597;
var inst_28541__$1 = tmp28598;
var inst_28542__$1 = inst_28550;
var state_28587__$1 = (function (){var statearr_28601 = state_28587;
(statearr_28601[(8)] = inst_28542__$1);

(statearr_28601[(10)] = inst_28539__$1);

(statearr_28601[(11)] = inst_28540__$1);

(statearr_28601[(14)] = inst_28549);

(statearr_28601[(12)] = inst_28541__$1);

return statearr_28601;
})();
var statearr_28602_28637 = state_28587__$1;
(statearr_28602_28637[(2)] = null);

(statearr_28602_28637[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28588 === (22))){
var state_28587__$1 = state_28587;
var statearr_28603_28638 = state_28587__$1;
(statearr_28603_28638[(2)] = null);

(statearr_28603_28638[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28588 === (6))){
var inst_28528 = (state_28587[(13)]);
var inst_28537 = f.call(null,inst_28528);
var inst_28538 = cljs.core.seq.call(null,inst_28537);
var inst_28539 = inst_28538;
var inst_28540 = null;
var inst_28541 = (0);
var inst_28542 = (0);
var state_28587__$1 = (function (){var statearr_28604 = state_28587;
(statearr_28604[(8)] = inst_28542);

(statearr_28604[(10)] = inst_28539);

(statearr_28604[(11)] = inst_28540);

(statearr_28604[(12)] = inst_28541);

return statearr_28604;
})();
var statearr_28605_28639 = state_28587__$1;
(statearr_28605_28639[(2)] = null);

(statearr_28605_28639[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28588 === (17))){
var inst_28553 = (state_28587[(7)]);
var inst_28557 = cljs.core.chunk_first.call(null,inst_28553);
var inst_28558 = cljs.core.chunk_rest.call(null,inst_28553);
var inst_28559 = cljs.core.count.call(null,inst_28557);
var inst_28539 = inst_28558;
var inst_28540 = inst_28557;
var inst_28541 = inst_28559;
var inst_28542 = (0);
var state_28587__$1 = (function (){var statearr_28606 = state_28587;
(statearr_28606[(8)] = inst_28542);

(statearr_28606[(10)] = inst_28539);

(statearr_28606[(11)] = inst_28540);

(statearr_28606[(12)] = inst_28541);

return statearr_28606;
})();
var statearr_28607_28640 = state_28587__$1;
(statearr_28607_28640[(2)] = null);

(statearr_28607_28640[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28588 === (3))){
var inst_28585 = (state_28587[(2)]);
var state_28587__$1 = state_28587;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28587__$1,inst_28585);
} else {
if((state_val_28588 === (12))){
var inst_28573 = (state_28587[(2)]);
var state_28587__$1 = state_28587;
var statearr_28608_28641 = state_28587__$1;
(statearr_28608_28641[(2)] = inst_28573);

(statearr_28608_28641[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28588 === (2))){
var state_28587__$1 = state_28587;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28587__$1,(4),in$);
} else {
if((state_val_28588 === (23))){
var inst_28581 = (state_28587[(2)]);
var state_28587__$1 = state_28587;
var statearr_28609_28642 = state_28587__$1;
(statearr_28609_28642[(2)] = inst_28581);

(statearr_28609_28642[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28588 === (19))){
var inst_28568 = (state_28587[(2)]);
var state_28587__$1 = state_28587;
var statearr_28610_28643 = state_28587__$1;
(statearr_28610_28643[(2)] = inst_28568);

(statearr_28610_28643[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28588 === (11))){
var inst_28539 = (state_28587[(10)]);
var inst_28553 = (state_28587[(7)]);
var inst_28553__$1 = cljs.core.seq.call(null,inst_28539);
var state_28587__$1 = (function (){var statearr_28611 = state_28587;
(statearr_28611[(7)] = inst_28553__$1);

return statearr_28611;
})();
if(inst_28553__$1){
var statearr_28612_28644 = state_28587__$1;
(statearr_28612_28644[(1)] = (14));

} else {
var statearr_28613_28645 = state_28587__$1;
(statearr_28613_28645[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28588 === (9))){
var inst_28575 = (state_28587[(2)]);
var inst_28576 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_28587__$1 = (function (){var statearr_28614 = state_28587;
(statearr_28614[(15)] = inst_28575);

return statearr_28614;
})();
if(cljs.core.truth_(inst_28576)){
var statearr_28615_28646 = state_28587__$1;
(statearr_28615_28646[(1)] = (21));

} else {
var statearr_28616_28647 = state_28587__$1;
(statearr_28616_28647[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28588 === (5))){
var inst_28531 = cljs.core.async.close_BANG_.call(null,out);
var state_28587__$1 = state_28587;
var statearr_28617_28648 = state_28587__$1;
(statearr_28617_28648[(2)] = inst_28531);

(statearr_28617_28648[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28588 === (14))){
var inst_28553 = (state_28587[(7)]);
var inst_28555 = cljs.core.chunked_seq_QMARK_.call(null,inst_28553);
var state_28587__$1 = state_28587;
if(inst_28555){
var statearr_28618_28649 = state_28587__$1;
(statearr_28618_28649[(1)] = (17));

} else {
var statearr_28619_28650 = state_28587__$1;
(statearr_28619_28650[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28588 === (16))){
var inst_28571 = (state_28587[(2)]);
var state_28587__$1 = state_28587;
var statearr_28620_28651 = state_28587__$1;
(statearr_28620_28651[(2)] = inst_28571);

(statearr_28620_28651[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28588 === (10))){
var inst_28542 = (state_28587[(8)]);
var inst_28540 = (state_28587[(11)]);
var inst_28547 = cljs.core._nth.call(null,inst_28540,inst_28542);
var state_28587__$1 = state_28587;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28587__$1,(13),out,inst_28547);
} else {
if((state_val_28588 === (18))){
var inst_28553 = (state_28587[(7)]);
var inst_28562 = cljs.core.first.call(null,inst_28553);
var state_28587__$1 = state_28587;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28587__$1,(20),out,inst_28562);
} else {
if((state_val_28588 === (8))){
var inst_28542 = (state_28587[(8)]);
var inst_28541 = (state_28587[(12)]);
var inst_28544 = (inst_28542 < inst_28541);
var inst_28545 = inst_28544;
var state_28587__$1 = state_28587;
if(cljs.core.truth_(inst_28545)){
var statearr_28621_28652 = state_28587__$1;
(statearr_28621_28652[(1)] = (10));

} else {
var statearr_28622_28653 = state_28587__$1;
(statearr_28622_28653[(1)] = (11));

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
});})(c__21387__auto__))
;
return ((function (switch__21325__auto__,c__21387__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__21326__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__21326__auto____0 = (function (){
var statearr_28626 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28626[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__21326__auto__);

(statearr_28626[(1)] = (1));

return statearr_28626;
});
var cljs$core$async$mapcat_STAR__$_state_machine__21326__auto____1 = (function (state_28587){
while(true){
var ret_value__21327__auto__ = (function (){try{while(true){
var result__21328__auto__ = switch__21325__auto__.call(null,state_28587);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21328__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21328__auto__;
}
break;
}
}catch (e28627){if((e28627 instanceof Object)){
var ex__21329__auto__ = e28627;
var statearr_28628_28654 = state_28587;
(statearr_28628_28654[(5)] = ex__21329__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28587);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28627;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21327__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28655 = state_28587;
state_28587 = G__28655;
continue;
} else {
return ret_value__21327__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__21326__auto__ = function(state_28587){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__21326__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__21326__auto____1.call(this,state_28587);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__21326__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__21326__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__21326__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__21326__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__21326__auto__;
})()
;})(switch__21325__auto__,c__21387__auto__))
})();
var state__21389__auto__ = (function (){var statearr_28629 = f__21388__auto__.call(null);
(statearr_28629[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21387__auto__);

return statearr_28629;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21389__auto__);
});})(c__21387__auto__))
);

return c__21387__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(){
var G__28657 = arguments.length;
switch (G__28657) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.call(null,f,in$,null);
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return out;
});

cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(){
var G__28660 = arguments.length;
switch (G__28660) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.call(null,f,out,null);
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return in$;
});

cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(){
var G__28663 = arguments.length;
switch (G__28663) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__21387__auto___28713 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21387__auto___28713,out){
return (function (){
var f__21388__auto__ = (function (){var switch__21325__auto__ = ((function (c__21387__auto___28713,out){
return (function (state_28687){
var state_val_28688 = (state_28687[(1)]);
if((state_val_28688 === (7))){
var inst_28682 = (state_28687[(2)]);
var state_28687__$1 = state_28687;
var statearr_28689_28714 = state_28687__$1;
(statearr_28689_28714[(2)] = inst_28682);

(statearr_28689_28714[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28688 === (1))){
var inst_28664 = null;
var state_28687__$1 = (function (){var statearr_28690 = state_28687;
(statearr_28690[(7)] = inst_28664);

return statearr_28690;
})();
var statearr_28691_28715 = state_28687__$1;
(statearr_28691_28715[(2)] = null);

(statearr_28691_28715[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28688 === (4))){
var inst_28667 = (state_28687[(8)]);
var inst_28667__$1 = (state_28687[(2)]);
var inst_28668 = (inst_28667__$1 == null);
var inst_28669 = cljs.core.not.call(null,inst_28668);
var state_28687__$1 = (function (){var statearr_28692 = state_28687;
(statearr_28692[(8)] = inst_28667__$1);

return statearr_28692;
})();
if(inst_28669){
var statearr_28693_28716 = state_28687__$1;
(statearr_28693_28716[(1)] = (5));

} else {
var statearr_28694_28717 = state_28687__$1;
(statearr_28694_28717[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28688 === (6))){
var state_28687__$1 = state_28687;
var statearr_28695_28718 = state_28687__$1;
(statearr_28695_28718[(2)] = null);

(statearr_28695_28718[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28688 === (3))){
var inst_28684 = (state_28687[(2)]);
var inst_28685 = cljs.core.async.close_BANG_.call(null,out);
var state_28687__$1 = (function (){var statearr_28696 = state_28687;
(statearr_28696[(9)] = inst_28684);

return statearr_28696;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28687__$1,inst_28685);
} else {
if((state_val_28688 === (2))){
var state_28687__$1 = state_28687;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28687__$1,(4),ch);
} else {
if((state_val_28688 === (11))){
var inst_28667 = (state_28687[(8)]);
var inst_28676 = (state_28687[(2)]);
var inst_28664 = inst_28667;
var state_28687__$1 = (function (){var statearr_28697 = state_28687;
(statearr_28697[(7)] = inst_28664);

(statearr_28697[(10)] = inst_28676);

return statearr_28697;
})();
var statearr_28698_28719 = state_28687__$1;
(statearr_28698_28719[(2)] = null);

(statearr_28698_28719[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28688 === (9))){
var inst_28667 = (state_28687[(8)]);
var state_28687__$1 = state_28687;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28687__$1,(11),out,inst_28667);
} else {
if((state_val_28688 === (5))){
var inst_28667 = (state_28687[(8)]);
var inst_28664 = (state_28687[(7)]);
var inst_28671 = cljs.core._EQ_.call(null,inst_28667,inst_28664);
var state_28687__$1 = state_28687;
if(inst_28671){
var statearr_28700_28720 = state_28687__$1;
(statearr_28700_28720[(1)] = (8));

} else {
var statearr_28701_28721 = state_28687__$1;
(statearr_28701_28721[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28688 === (10))){
var inst_28679 = (state_28687[(2)]);
var state_28687__$1 = state_28687;
var statearr_28702_28722 = state_28687__$1;
(statearr_28702_28722[(2)] = inst_28679);

(statearr_28702_28722[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28688 === (8))){
var inst_28664 = (state_28687[(7)]);
var tmp28699 = inst_28664;
var inst_28664__$1 = tmp28699;
var state_28687__$1 = (function (){var statearr_28703 = state_28687;
(statearr_28703[(7)] = inst_28664__$1);

return statearr_28703;
})();
var statearr_28704_28723 = state_28687__$1;
(statearr_28704_28723[(2)] = null);

(statearr_28704_28723[(1)] = (2));


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
});})(c__21387__auto___28713,out))
;
return ((function (switch__21325__auto__,c__21387__auto___28713,out){
return (function() {
var cljs$core$async$state_machine__21326__auto__ = null;
var cljs$core$async$state_machine__21326__auto____0 = (function (){
var statearr_28708 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_28708[(0)] = cljs$core$async$state_machine__21326__auto__);

(statearr_28708[(1)] = (1));

return statearr_28708;
});
var cljs$core$async$state_machine__21326__auto____1 = (function (state_28687){
while(true){
var ret_value__21327__auto__ = (function (){try{while(true){
var result__21328__auto__ = switch__21325__auto__.call(null,state_28687);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21328__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21328__auto__;
}
break;
}
}catch (e28709){if((e28709 instanceof Object)){
var ex__21329__auto__ = e28709;
var statearr_28710_28724 = state_28687;
(statearr_28710_28724[(5)] = ex__21329__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28687);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28709;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21327__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28725 = state_28687;
state_28687 = G__28725;
continue;
} else {
return ret_value__21327__auto__;
}
break;
}
});
cljs$core$async$state_machine__21326__auto__ = function(state_28687){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__21326__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__21326__auto____1.call(this,state_28687);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__21326__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__21326__auto____0;
cljs$core$async$state_machine__21326__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__21326__auto____1;
return cljs$core$async$state_machine__21326__auto__;
})()
;})(switch__21325__auto__,c__21387__auto___28713,out))
})();
var state__21389__auto__ = (function (){var statearr_28711 = f__21388__auto__.call(null);
(statearr_28711[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21387__auto___28713);

return statearr_28711;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21389__auto__);
});})(c__21387__auto___28713,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(){
var G__28727 = arguments.length;
switch (G__28727) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__21387__auto___28796 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21387__auto___28796,out){
return (function (){
var f__21388__auto__ = (function (){var switch__21325__auto__ = ((function (c__21387__auto___28796,out){
return (function (state_28765){
var state_val_28766 = (state_28765[(1)]);
if((state_val_28766 === (7))){
var inst_28761 = (state_28765[(2)]);
var state_28765__$1 = state_28765;
var statearr_28767_28797 = state_28765__$1;
(statearr_28767_28797[(2)] = inst_28761);

(statearr_28767_28797[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28766 === (1))){
var inst_28728 = (new Array(n));
var inst_28729 = inst_28728;
var inst_28730 = (0);
var state_28765__$1 = (function (){var statearr_28768 = state_28765;
(statearr_28768[(7)] = inst_28729);

(statearr_28768[(8)] = inst_28730);

return statearr_28768;
})();
var statearr_28769_28798 = state_28765__$1;
(statearr_28769_28798[(2)] = null);

(statearr_28769_28798[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28766 === (4))){
var inst_28733 = (state_28765[(9)]);
var inst_28733__$1 = (state_28765[(2)]);
var inst_28734 = (inst_28733__$1 == null);
var inst_28735 = cljs.core.not.call(null,inst_28734);
var state_28765__$1 = (function (){var statearr_28770 = state_28765;
(statearr_28770[(9)] = inst_28733__$1);

return statearr_28770;
})();
if(inst_28735){
var statearr_28771_28799 = state_28765__$1;
(statearr_28771_28799[(1)] = (5));

} else {
var statearr_28772_28800 = state_28765__$1;
(statearr_28772_28800[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28766 === (15))){
var inst_28755 = (state_28765[(2)]);
var state_28765__$1 = state_28765;
var statearr_28773_28801 = state_28765__$1;
(statearr_28773_28801[(2)] = inst_28755);

(statearr_28773_28801[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28766 === (13))){
var state_28765__$1 = state_28765;
var statearr_28774_28802 = state_28765__$1;
(statearr_28774_28802[(2)] = null);

(statearr_28774_28802[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28766 === (6))){
var inst_28730 = (state_28765[(8)]);
var inst_28751 = (inst_28730 > (0));
var state_28765__$1 = state_28765;
if(cljs.core.truth_(inst_28751)){
var statearr_28775_28803 = state_28765__$1;
(statearr_28775_28803[(1)] = (12));

} else {
var statearr_28776_28804 = state_28765__$1;
(statearr_28776_28804[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28766 === (3))){
var inst_28763 = (state_28765[(2)]);
var state_28765__$1 = state_28765;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28765__$1,inst_28763);
} else {
if((state_val_28766 === (12))){
var inst_28729 = (state_28765[(7)]);
var inst_28753 = cljs.core.vec.call(null,inst_28729);
var state_28765__$1 = state_28765;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28765__$1,(15),out,inst_28753);
} else {
if((state_val_28766 === (2))){
var state_28765__$1 = state_28765;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28765__$1,(4),ch);
} else {
if((state_val_28766 === (11))){
var inst_28745 = (state_28765[(2)]);
var inst_28746 = (new Array(n));
var inst_28729 = inst_28746;
var inst_28730 = (0);
var state_28765__$1 = (function (){var statearr_28777 = state_28765;
(statearr_28777[(7)] = inst_28729);

(statearr_28777[(8)] = inst_28730);

(statearr_28777[(10)] = inst_28745);

return statearr_28777;
})();
var statearr_28778_28805 = state_28765__$1;
(statearr_28778_28805[(2)] = null);

(statearr_28778_28805[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28766 === (9))){
var inst_28729 = (state_28765[(7)]);
var inst_28743 = cljs.core.vec.call(null,inst_28729);
var state_28765__$1 = state_28765;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28765__$1,(11),out,inst_28743);
} else {
if((state_val_28766 === (5))){
var inst_28738 = (state_28765[(11)]);
var inst_28729 = (state_28765[(7)]);
var inst_28733 = (state_28765[(9)]);
var inst_28730 = (state_28765[(8)]);
var inst_28737 = (inst_28729[inst_28730] = inst_28733);
var inst_28738__$1 = (inst_28730 + (1));
var inst_28739 = (inst_28738__$1 < n);
var state_28765__$1 = (function (){var statearr_28779 = state_28765;
(statearr_28779[(11)] = inst_28738__$1);

(statearr_28779[(12)] = inst_28737);

return statearr_28779;
})();
if(cljs.core.truth_(inst_28739)){
var statearr_28780_28806 = state_28765__$1;
(statearr_28780_28806[(1)] = (8));

} else {
var statearr_28781_28807 = state_28765__$1;
(statearr_28781_28807[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28766 === (14))){
var inst_28758 = (state_28765[(2)]);
var inst_28759 = cljs.core.async.close_BANG_.call(null,out);
var state_28765__$1 = (function (){var statearr_28783 = state_28765;
(statearr_28783[(13)] = inst_28758);

return statearr_28783;
})();
var statearr_28784_28808 = state_28765__$1;
(statearr_28784_28808[(2)] = inst_28759);

(statearr_28784_28808[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28766 === (10))){
var inst_28749 = (state_28765[(2)]);
var state_28765__$1 = state_28765;
var statearr_28785_28809 = state_28765__$1;
(statearr_28785_28809[(2)] = inst_28749);

(statearr_28785_28809[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28766 === (8))){
var inst_28738 = (state_28765[(11)]);
var inst_28729 = (state_28765[(7)]);
var tmp28782 = inst_28729;
var inst_28729__$1 = tmp28782;
var inst_28730 = inst_28738;
var state_28765__$1 = (function (){var statearr_28786 = state_28765;
(statearr_28786[(7)] = inst_28729__$1);

(statearr_28786[(8)] = inst_28730);

return statearr_28786;
})();
var statearr_28787_28810 = state_28765__$1;
(statearr_28787_28810[(2)] = null);

(statearr_28787_28810[(1)] = (2));


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
});})(c__21387__auto___28796,out))
;
return ((function (switch__21325__auto__,c__21387__auto___28796,out){
return (function() {
var cljs$core$async$state_machine__21326__auto__ = null;
var cljs$core$async$state_machine__21326__auto____0 = (function (){
var statearr_28791 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28791[(0)] = cljs$core$async$state_machine__21326__auto__);

(statearr_28791[(1)] = (1));

return statearr_28791;
});
var cljs$core$async$state_machine__21326__auto____1 = (function (state_28765){
while(true){
var ret_value__21327__auto__ = (function (){try{while(true){
var result__21328__auto__ = switch__21325__auto__.call(null,state_28765);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21328__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21328__auto__;
}
break;
}
}catch (e28792){if((e28792 instanceof Object)){
var ex__21329__auto__ = e28792;
var statearr_28793_28811 = state_28765;
(statearr_28793_28811[(5)] = ex__21329__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28765);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28792;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21327__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28812 = state_28765;
state_28765 = G__28812;
continue;
} else {
return ret_value__21327__auto__;
}
break;
}
});
cljs$core$async$state_machine__21326__auto__ = function(state_28765){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__21326__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__21326__auto____1.call(this,state_28765);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__21326__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__21326__auto____0;
cljs$core$async$state_machine__21326__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__21326__auto____1;
return cljs$core$async$state_machine__21326__auto__;
})()
;})(switch__21325__auto__,c__21387__auto___28796,out))
})();
var state__21389__auto__ = (function (){var statearr_28794 = f__21388__auto__.call(null);
(statearr_28794[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21387__auto___28796);

return statearr_28794;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21389__auto__);
});})(c__21387__auto___28796,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(){
var G__28814 = arguments.length;
switch (G__28814) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__21387__auto___28887 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21387__auto___28887,out){
return (function (){
var f__21388__auto__ = (function (){var switch__21325__auto__ = ((function (c__21387__auto___28887,out){
return (function (state_28856){
var state_val_28857 = (state_28856[(1)]);
if((state_val_28857 === (7))){
var inst_28852 = (state_28856[(2)]);
var state_28856__$1 = state_28856;
var statearr_28858_28888 = state_28856__$1;
(statearr_28858_28888[(2)] = inst_28852);

(statearr_28858_28888[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28857 === (1))){
var inst_28815 = [];
var inst_28816 = inst_28815;
var inst_28817 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_28856__$1 = (function (){var statearr_28859 = state_28856;
(statearr_28859[(7)] = inst_28816);

(statearr_28859[(8)] = inst_28817);

return statearr_28859;
})();
var statearr_28860_28889 = state_28856__$1;
(statearr_28860_28889[(2)] = null);

(statearr_28860_28889[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28857 === (4))){
var inst_28820 = (state_28856[(9)]);
var inst_28820__$1 = (state_28856[(2)]);
var inst_28821 = (inst_28820__$1 == null);
var inst_28822 = cljs.core.not.call(null,inst_28821);
var state_28856__$1 = (function (){var statearr_28861 = state_28856;
(statearr_28861[(9)] = inst_28820__$1);

return statearr_28861;
})();
if(inst_28822){
var statearr_28862_28890 = state_28856__$1;
(statearr_28862_28890[(1)] = (5));

} else {
var statearr_28863_28891 = state_28856__$1;
(statearr_28863_28891[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28857 === (15))){
var inst_28846 = (state_28856[(2)]);
var state_28856__$1 = state_28856;
var statearr_28864_28892 = state_28856__$1;
(statearr_28864_28892[(2)] = inst_28846);

(statearr_28864_28892[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28857 === (13))){
var state_28856__$1 = state_28856;
var statearr_28865_28893 = state_28856__$1;
(statearr_28865_28893[(2)] = null);

(statearr_28865_28893[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28857 === (6))){
var inst_28816 = (state_28856[(7)]);
var inst_28841 = inst_28816.length;
var inst_28842 = (inst_28841 > (0));
var state_28856__$1 = state_28856;
if(cljs.core.truth_(inst_28842)){
var statearr_28866_28894 = state_28856__$1;
(statearr_28866_28894[(1)] = (12));

} else {
var statearr_28867_28895 = state_28856__$1;
(statearr_28867_28895[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28857 === (3))){
var inst_28854 = (state_28856[(2)]);
var state_28856__$1 = state_28856;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28856__$1,inst_28854);
} else {
if((state_val_28857 === (12))){
var inst_28816 = (state_28856[(7)]);
var inst_28844 = cljs.core.vec.call(null,inst_28816);
var state_28856__$1 = state_28856;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28856__$1,(15),out,inst_28844);
} else {
if((state_val_28857 === (2))){
var state_28856__$1 = state_28856;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28856__$1,(4),ch);
} else {
if((state_val_28857 === (11))){
var inst_28824 = (state_28856[(10)]);
var inst_28820 = (state_28856[(9)]);
var inst_28834 = (state_28856[(2)]);
var inst_28835 = [];
var inst_28836 = inst_28835.push(inst_28820);
var inst_28816 = inst_28835;
var inst_28817 = inst_28824;
var state_28856__$1 = (function (){var statearr_28868 = state_28856;
(statearr_28868[(7)] = inst_28816);

(statearr_28868[(8)] = inst_28817);

(statearr_28868[(11)] = inst_28836);

(statearr_28868[(12)] = inst_28834);

return statearr_28868;
})();
var statearr_28869_28896 = state_28856__$1;
(statearr_28869_28896[(2)] = null);

(statearr_28869_28896[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28857 === (9))){
var inst_28816 = (state_28856[(7)]);
var inst_28832 = cljs.core.vec.call(null,inst_28816);
var state_28856__$1 = state_28856;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28856__$1,(11),out,inst_28832);
} else {
if((state_val_28857 === (5))){
var inst_28824 = (state_28856[(10)]);
var inst_28817 = (state_28856[(8)]);
var inst_28820 = (state_28856[(9)]);
var inst_28824__$1 = f.call(null,inst_28820);
var inst_28825 = cljs.core._EQ_.call(null,inst_28824__$1,inst_28817);
var inst_28826 = cljs.core.keyword_identical_QMARK_.call(null,inst_28817,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_28827 = (inst_28825) || (inst_28826);
var state_28856__$1 = (function (){var statearr_28870 = state_28856;
(statearr_28870[(10)] = inst_28824__$1);

return statearr_28870;
})();
if(cljs.core.truth_(inst_28827)){
var statearr_28871_28897 = state_28856__$1;
(statearr_28871_28897[(1)] = (8));

} else {
var statearr_28872_28898 = state_28856__$1;
(statearr_28872_28898[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28857 === (14))){
var inst_28849 = (state_28856[(2)]);
var inst_28850 = cljs.core.async.close_BANG_.call(null,out);
var state_28856__$1 = (function (){var statearr_28874 = state_28856;
(statearr_28874[(13)] = inst_28849);

return statearr_28874;
})();
var statearr_28875_28899 = state_28856__$1;
(statearr_28875_28899[(2)] = inst_28850);

(statearr_28875_28899[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28857 === (10))){
var inst_28839 = (state_28856[(2)]);
var state_28856__$1 = state_28856;
var statearr_28876_28900 = state_28856__$1;
(statearr_28876_28900[(2)] = inst_28839);

(statearr_28876_28900[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28857 === (8))){
var inst_28816 = (state_28856[(7)]);
var inst_28824 = (state_28856[(10)]);
var inst_28820 = (state_28856[(9)]);
var inst_28829 = inst_28816.push(inst_28820);
var tmp28873 = inst_28816;
var inst_28816__$1 = tmp28873;
var inst_28817 = inst_28824;
var state_28856__$1 = (function (){var statearr_28877 = state_28856;
(statearr_28877[(7)] = inst_28816__$1);

(statearr_28877[(8)] = inst_28817);

(statearr_28877[(14)] = inst_28829);

return statearr_28877;
})();
var statearr_28878_28901 = state_28856__$1;
(statearr_28878_28901[(2)] = null);

(statearr_28878_28901[(1)] = (2));


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
});})(c__21387__auto___28887,out))
;
return ((function (switch__21325__auto__,c__21387__auto___28887,out){
return (function() {
var cljs$core$async$state_machine__21326__auto__ = null;
var cljs$core$async$state_machine__21326__auto____0 = (function (){
var statearr_28882 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28882[(0)] = cljs$core$async$state_machine__21326__auto__);

(statearr_28882[(1)] = (1));

return statearr_28882;
});
var cljs$core$async$state_machine__21326__auto____1 = (function (state_28856){
while(true){
var ret_value__21327__auto__ = (function (){try{while(true){
var result__21328__auto__ = switch__21325__auto__.call(null,state_28856);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21328__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21328__auto__;
}
break;
}
}catch (e28883){if((e28883 instanceof Object)){
var ex__21329__auto__ = e28883;
var statearr_28884_28902 = state_28856;
(statearr_28884_28902[(5)] = ex__21329__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28856);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28883;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21327__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28903 = state_28856;
state_28856 = G__28903;
continue;
} else {
return ret_value__21327__auto__;
}
break;
}
});
cljs$core$async$state_machine__21326__auto__ = function(state_28856){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__21326__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__21326__auto____1.call(this,state_28856);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__21326__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__21326__auto____0;
cljs$core$async$state_machine__21326__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__21326__auto____1;
return cljs$core$async$state_machine__21326__auto__;
})()
;})(switch__21325__auto__,c__21387__auto___28887,out))
})();
var state__21389__auto__ = (function (){var statearr_28885 = f__21388__auto__.call(null);
(statearr_28885[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21387__auto___28887);

return statearr_28885;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21389__auto__);
});})(c__21387__auto___28887,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;

//# sourceMappingURL=async.js.map?rel=1441291722188