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
if(typeof cljs.core.async.t26406 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t26406 = (function (f,fn_handler,meta26407){
this.f = f;
this.fn_handler = fn_handler;
this.meta26407 = meta26407;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t26406.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t26406.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t26406.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t26406.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_26408){
var self__ = this;
var _26408__$1 = this;
return self__.meta26407;
});

cljs.core.async.t26406.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_26408,meta26407__$1){
var self__ = this;
var _26408__$1 = this;
return (new cljs.core.async.t26406(self__.f,self__.fn_handler,meta26407__$1));
});

cljs.core.async.t26406.cljs$lang$type = true;

cljs.core.async.t26406.cljs$lang$ctorStr = "cljs.core.async/t26406";

cljs.core.async.t26406.cljs$lang$ctorPrWriter = (function (this__18739__auto__,writer__18740__auto__,opt__18741__auto__){
return cljs.core._write.call(null,writer__18740__auto__,"cljs.core.async/t26406");
});

cljs.core.async.__GT_t26406 = (function cljs$core$async$fn_handler_$___GT_t26406(f__$1,fn_handler__$1,meta26407){
return (new cljs.core.async.t26406(f__$1,fn_handler__$1,meta26407));
});

}

return (new cljs.core.async.t26406(f,cljs$core$async$fn_handler,cljs.core.PersistentArrayMap.EMPTY));
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
var G__26410 = buff;
if(G__26410){
var bit__18834__auto__ = null;
if(cljs.core.truth_((function (){var or__18160__auto__ = bit__18834__auto__;
if(cljs.core.truth_(or__18160__auto__)){
return or__18160__auto__;
} else {
return G__26410.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})())){
return true;
} else {
if((!G__26410.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__26410);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__26410);
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
var G__26412 = arguments.length;
switch (G__26412) {
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
var G__26415 = arguments.length;
switch (G__26415) {
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
var val_26417 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_26417);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_26417,ret){
return (function (){
return fn1.call(null,val_26417);
});})(val_26417,ret))
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
var G__26419 = arguments.length;
switch (G__26419) {
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
var n__19045__auto___26421 = n;
var x_26422 = (0);
while(true){
if((x_26422 < n__19045__auto___26421)){
(a[x_26422] = (0));

var G__26423 = (x_26422 + (1));
x_26422 = G__26423;
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

var G__26424 = (i + (1));
i = G__26424;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t26428 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t26428 = (function (flag,alt_flag,meta26429){
this.flag = flag;
this.alt_flag = alt_flag;
this.meta26429 = meta26429;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t26428.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t26428.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t26428.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t26428.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_26430){
var self__ = this;
var _26430__$1 = this;
return self__.meta26429;
});})(flag))
;

cljs.core.async.t26428.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_26430,meta26429__$1){
var self__ = this;
var _26430__$1 = this;
return (new cljs.core.async.t26428(self__.flag,self__.alt_flag,meta26429__$1));
});})(flag))
;

cljs.core.async.t26428.cljs$lang$type = true;

cljs.core.async.t26428.cljs$lang$ctorStr = "cljs.core.async/t26428";

cljs.core.async.t26428.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__18739__auto__,writer__18740__auto__,opt__18741__auto__){
return cljs.core._write.call(null,writer__18740__auto__,"cljs.core.async/t26428");
});})(flag))
;

cljs.core.async.__GT_t26428 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t26428(flag__$1,alt_flag__$1,meta26429){
return (new cljs.core.async.t26428(flag__$1,alt_flag__$1,meta26429));
});})(flag))
;

}

return (new cljs.core.async.t26428(flag,cljs$core$async$alt_flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t26434 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t26434 = (function (cb,flag,alt_handler,meta26435){
this.cb = cb;
this.flag = flag;
this.alt_handler = alt_handler;
this.meta26435 = meta26435;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t26434.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t26434.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t26434.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t26434.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_26436){
var self__ = this;
var _26436__$1 = this;
return self__.meta26435;
});

cljs.core.async.t26434.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_26436,meta26435__$1){
var self__ = this;
var _26436__$1 = this;
return (new cljs.core.async.t26434(self__.cb,self__.flag,self__.alt_handler,meta26435__$1));
});

cljs.core.async.t26434.cljs$lang$type = true;

cljs.core.async.t26434.cljs$lang$ctorStr = "cljs.core.async/t26434";

cljs.core.async.t26434.cljs$lang$ctorPrWriter = (function (this__18739__auto__,writer__18740__auto__,opt__18741__auto__){
return cljs.core._write.call(null,writer__18740__auto__,"cljs.core.async/t26434");
});

cljs.core.async.__GT_t26434 = (function cljs$core$async$alt_handler_$___GT_t26434(cb__$1,flag__$1,alt_handler__$1,meta26435){
return (new cljs.core.async.t26434(cb__$1,flag__$1,alt_handler__$1,meta26435));
});

}

return (new cljs.core.async.t26434(cb,flag,cljs$core$async$alt_handler,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__26437_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__26437_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__26438_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__26438_SHARP_,port], null));
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
var G__26439 = (i + (1));
i = G__26439;
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

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__26442){
var map__26443 = p__26442;
var map__26443__$1 = ((cljs.core.seq_QMARK_.call(null,map__26443))?cljs.core.apply.call(null,cljs.core.hash_map,map__26443):map__26443);
var opts = map__26443__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq26440){
var G__26441 = cljs.core.first.call(null,seq26440);
var seq26440__$1 = cljs.core.next.call(null,seq26440);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__26441,seq26440__$1);
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(){
var G__26445 = arguments.length;
switch (G__26445) {
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
var c__22071__auto___26494 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22071__auto___26494){
return (function (){
var f__22072__auto__ = (function (){var switch__22009__auto__ = ((function (c__22071__auto___26494){
return (function (state_26469){
var state_val_26470 = (state_26469[(1)]);
if((state_val_26470 === (7))){
var inst_26465 = (state_26469[(2)]);
var state_26469__$1 = state_26469;
var statearr_26471_26495 = state_26469__$1;
(statearr_26471_26495[(2)] = inst_26465);

(statearr_26471_26495[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26470 === (1))){
var state_26469__$1 = state_26469;
var statearr_26472_26496 = state_26469__$1;
(statearr_26472_26496[(2)] = null);

(statearr_26472_26496[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26470 === (4))){
var inst_26448 = (state_26469[(7)]);
var inst_26448__$1 = (state_26469[(2)]);
var inst_26449 = (inst_26448__$1 == null);
var state_26469__$1 = (function (){var statearr_26473 = state_26469;
(statearr_26473[(7)] = inst_26448__$1);

return statearr_26473;
})();
if(cljs.core.truth_(inst_26449)){
var statearr_26474_26497 = state_26469__$1;
(statearr_26474_26497[(1)] = (5));

} else {
var statearr_26475_26498 = state_26469__$1;
(statearr_26475_26498[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26470 === (13))){
var state_26469__$1 = state_26469;
var statearr_26476_26499 = state_26469__$1;
(statearr_26476_26499[(2)] = null);

(statearr_26476_26499[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26470 === (6))){
var inst_26448 = (state_26469[(7)]);
var state_26469__$1 = state_26469;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26469__$1,(11),to,inst_26448);
} else {
if((state_val_26470 === (3))){
var inst_26467 = (state_26469[(2)]);
var state_26469__$1 = state_26469;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26469__$1,inst_26467);
} else {
if((state_val_26470 === (12))){
var state_26469__$1 = state_26469;
var statearr_26477_26500 = state_26469__$1;
(statearr_26477_26500[(2)] = null);

(statearr_26477_26500[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26470 === (2))){
var state_26469__$1 = state_26469;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26469__$1,(4),from);
} else {
if((state_val_26470 === (11))){
var inst_26458 = (state_26469[(2)]);
var state_26469__$1 = state_26469;
if(cljs.core.truth_(inst_26458)){
var statearr_26478_26501 = state_26469__$1;
(statearr_26478_26501[(1)] = (12));

} else {
var statearr_26479_26502 = state_26469__$1;
(statearr_26479_26502[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26470 === (9))){
var state_26469__$1 = state_26469;
var statearr_26480_26503 = state_26469__$1;
(statearr_26480_26503[(2)] = null);

(statearr_26480_26503[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26470 === (5))){
var state_26469__$1 = state_26469;
if(cljs.core.truth_(close_QMARK_)){
var statearr_26481_26504 = state_26469__$1;
(statearr_26481_26504[(1)] = (8));

} else {
var statearr_26482_26505 = state_26469__$1;
(statearr_26482_26505[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26470 === (14))){
var inst_26463 = (state_26469[(2)]);
var state_26469__$1 = state_26469;
var statearr_26483_26506 = state_26469__$1;
(statearr_26483_26506[(2)] = inst_26463);

(statearr_26483_26506[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26470 === (10))){
var inst_26455 = (state_26469[(2)]);
var state_26469__$1 = state_26469;
var statearr_26484_26507 = state_26469__$1;
(statearr_26484_26507[(2)] = inst_26455);

(statearr_26484_26507[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26470 === (8))){
var inst_26452 = cljs.core.async.close_BANG_.call(null,to);
var state_26469__$1 = state_26469;
var statearr_26485_26508 = state_26469__$1;
(statearr_26485_26508[(2)] = inst_26452);

(statearr_26485_26508[(1)] = (10));


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
});})(c__22071__auto___26494))
;
return ((function (switch__22009__auto__,c__22071__auto___26494){
return (function() {
var cljs$core$async$state_machine__22010__auto__ = null;
var cljs$core$async$state_machine__22010__auto____0 = (function (){
var statearr_26489 = [null,null,null,null,null,null,null,null];
(statearr_26489[(0)] = cljs$core$async$state_machine__22010__auto__);

(statearr_26489[(1)] = (1));

return statearr_26489;
});
var cljs$core$async$state_machine__22010__auto____1 = (function (state_26469){
while(true){
var ret_value__22011__auto__ = (function (){try{while(true){
var result__22012__auto__ = switch__22009__auto__.call(null,state_26469);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22012__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22012__auto__;
}
break;
}
}catch (e26490){if((e26490 instanceof Object)){
var ex__22013__auto__ = e26490;
var statearr_26491_26509 = state_26469;
(statearr_26491_26509[(5)] = ex__22013__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26469);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26490;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22011__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26510 = state_26469;
state_26469 = G__26510;
continue;
} else {
return ret_value__22011__auto__;
}
break;
}
});
cljs$core$async$state_machine__22010__auto__ = function(state_26469){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__22010__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__22010__auto____1.call(this,state_26469);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__22010__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__22010__auto____0;
cljs$core$async$state_machine__22010__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__22010__auto____1;
return cljs$core$async$state_machine__22010__auto__;
})()
;})(switch__22009__auto__,c__22071__auto___26494))
})();
var state__22073__auto__ = (function (){var statearr_26492 = f__22072__auto__.call(null);
(statearr_26492[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22071__auto___26494);

return statearr_26492;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22073__auto__);
});})(c__22071__auto___26494))
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
return (function (p__26694){
var vec__26695 = p__26694;
var v = cljs.core.nth.call(null,vec__26695,(0),null);
var p = cljs.core.nth.call(null,vec__26695,(1),null);
var job = vec__26695;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__22071__auto___26877 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22071__auto___26877,res,vec__26695,v,p,job,jobs,results){
return (function (){
var f__22072__auto__ = (function (){var switch__22009__auto__ = ((function (c__22071__auto___26877,res,vec__26695,v,p,job,jobs,results){
return (function (state_26700){
var state_val_26701 = (state_26700[(1)]);
if((state_val_26701 === (2))){
var inst_26697 = (state_26700[(2)]);
var inst_26698 = cljs.core.async.close_BANG_.call(null,res);
var state_26700__$1 = (function (){var statearr_26702 = state_26700;
(statearr_26702[(7)] = inst_26697);

return statearr_26702;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26700__$1,inst_26698);
} else {
if((state_val_26701 === (1))){
var state_26700__$1 = state_26700;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26700__$1,(2),res,v);
} else {
return null;
}
}
});})(c__22071__auto___26877,res,vec__26695,v,p,job,jobs,results))
;
return ((function (switch__22009__auto__,c__22071__auto___26877,res,vec__26695,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__22010__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__22010__auto____0 = (function (){
var statearr_26706 = [null,null,null,null,null,null,null,null];
(statearr_26706[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__22010__auto__);

(statearr_26706[(1)] = (1));

return statearr_26706;
});
var cljs$core$async$pipeline_STAR__$_state_machine__22010__auto____1 = (function (state_26700){
while(true){
var ret_value__22011__auto__ = (function (){try{while(true){
var result__22012__auto__ = switch__22009__auto__.call(null,state_26700);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22012__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22012__auto__;
}
break;
}
}catch (e26707){if((e26707 instanceof Object)){
var ex__22013__auto__ = e26707;
var statearr_26708_26878 = state_26700;
(statearr_26708_26878[(5)] = ex__22013__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26700);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26707;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22011__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26879 = state_26700;
state_26700 = G__26879;
continue;
} else {
return ret_value__22011__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__22010__auto__ = function(state_26700){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__22010__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__22010__auto____1.call(this,state_26700);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__22010__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__22010__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__22010__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__22010__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__22010__auto__;
})()
;})(switch__22009__auto__,c__22071__auto___26877,res,vec__26695,v,p,job,jobs,results))
})();
var state__22073__auto__ = (function (){var statearr_26709 = f__22072__auto__.call(null);
(statearr_26709[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22071__auto___26877);

return statearr_26709;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22073__auto__);
});})(c__22071__auto___26877,res,vec__26695,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__26710){
var vec__26711 = p__26710;
var v = cljs.core.nth.call(null,vec__26711,(0),null);
var p = cljs.core.nth.call(null,vec__26711,(1),null);
var job = vec__26711;
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
var n__19045__auto___26880 = n;
var __26881 = (0);
while(true){
if((__26881 < n__19045__auto___26880)){
var G__26712_26882 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__26712_26882) {
case "async":
var c__22071__auto___26884 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__26881,c__22071__auto___26884,G__26712_26882,n__19045__auto___26880,jobs,results,process,async){
return (function (){
var f__22072__auto__ = (function (){var switch__22009__auto__ = ((function (__26881,c__22071__auto___26884,G__26712_26882,n__19045__auto___26880,jobs,results,process,async){
return (function (state_26725){
var state_val_26726 = (state_26725[(1)]);
if((state_val_26726 === (7))){
var inst_26721 = (state_26725[(2)]);
var state_26725__$1 = state_26725;
var statearr_26727_26885 = state_26725__$1;
(statearr_26727_26885[(2)] = inst_26721);

(statearr_26727_26885[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26726 === (6))){
var state_26725__$1 = state_26725;
var statearr_26728_26886 = state_26725__$1;
(statearr_26728_26886[(2)] = null);

(statearr_26728_26886[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26726 === (5))){
var state_26725__$1 = state_26725;
var statearr_26729_26887 = state_26725__$1;
(statearr_26729_26887[(2)] = null);

(statearr_26729_26887[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26726 === (4))){
var inst_26715 = (state_26725[(2)]);
var inst_26716 = async.call(null,inst_26715);
var state_26725__$1 = state_26725;
if(cljs.core.truth_(inst_26716)){
var statearr_26730_26888 = state_26725__$1;
(statearr_26730_26888[(1)] = (5));

} else {
var statearr_26731_26889 = state_26725__$1;
(statearr_26731_26889[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26726 === (3))){
var inst_26723 = (state_26725[(2)]);
var state_26725__$1 = state_26725;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26725__$1,inst_26723);
} else {
if((state_val_26726 === (2))){
var state_26725__$1 = state_26725;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26725__$1,(4),jobs);
} else {
if((state_val_26726 === (1))){
var state_26725__$1 = state_26725;
var statearr_26732_26890 = state_26725__$1;
(statearr_26732_26890[(2)] = null);

(statearr_26732_26890[(1)] = (2));


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
});})(__26881,c__22071__auto___26884,G__26712_26882,n__19045__auto___26880,jobs,results,process,async))
;
return ((function (__26881,switch__22009__auto__,c__22071__auto___26884,G__26712_26882,n__19045__auto___26880,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__22010__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__22010__auto____0 = (function (){
var statearr_26736 = [null,null,null,null,null,null,null];
(statearr_26736[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__22010__auto__);

(statearr_26736[(1)] = (1));

return statearr_26736;
});
var cljs$core$async$pipeline_STAR__$_state_machine__22010__auto____1 = (function (state_26725){
while(true){
var ret_value__22011__auto__ = (function (){try{while(true){
var result__22012__auto__ = switch__22009__auto__.call(null,state_26725);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22012__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22012__auto__;
}
break;
}
}catch (e26737){if((e26737 instanceof Object)){
var ex__22013__auto__ = e26737;
var statearr_26738_26891 = state_26725;
(statearr_26738_26891[(5)] = ex__22013__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26725);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26737;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22011__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26892 = state_26725;
state_26725 = G__26892;
continue;
} else {
return ret_value__22011__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__22010__auto__ = function(state_26725){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__22010__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__22010__auto____1.call(this,state_26725);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__22010__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__22010__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__22010__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__22010__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__22010__auto__;
})()
;})(__26881,switch__22009__auto__,c__22071__auto___26884,G__26712_26882,n__19045__auto___26880,jobs,results,process,async))
})();
var state__22073__auto__ = (function (){var statearr_26739 = f__22072__auto__.call(null);
(statearr_26739[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22071__auto___26884);

return statearr_26739;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22073__auto__);
});})(__26881,c__22071__auto___26884,G__26712_26882,n__19045__auto___26880,jobs,results,process,async))
);


break;
case "compute":
var c__22071__auto___26893 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__26881,c__22071__auto___26893,G__26712_26882,n__19045__auto___26880,jobs,results,process,async){
return (function (){
var f__22072__auto__ = (function (){var switch__22009__auto__ = ((function (__26881,c__22071__auto___26893,G__26712_26882,n__19045__auto___26880,jobs,results,process,async){
return (function (state_26752){
var state_val_26753 = (state_26752[(1)]);
if((state_val_26753 === (7))){
var inst_26748 = (state_26752[(2)]);
var state_26752__$1 = state_26752;
var statearr_26754_26894 = state_26752__$1;
(statearr_26754_26894[(2)] = inst_26748);

(statearr_26754_26894[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26753 === (6))){
var state_26752__$1 = state_26752;
var statearr_26755_26895 = state_26752__$1;
(statearr_26755_26895[(2)] = null);

(statearr_26755_26895[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26753 === (5))){
var state_26752__$1 = state_26752;
var statearr_26756_26896 = state_26752__$1;
(statearr_26756_26896[(2)] = null);

(statearr_26756_26896[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26753 === (4))){
var inst_26742 = (state_26752[(2)]);
var inst_26743 = process.call(null,inst_26742);
var state_26752__$1 = state_26752;
if(cljs.core.truth_(inst_26743)){
var statearr_26757_26897 = state_26752__$1;
(statearr_26757_26897[(1)] = (5));

} else {
var statearr_26758_26898 = state_26752__$1;
(statearr_26758_26898[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26753 === (3))){
var inst_26750 = (state_26752[(2)]);
var state_26752__$1 = state_26752;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26752__$1,inst_26750);
} else {
if((state_val_26753 === (2))){
var state_26752__$1 = state_26752;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26752__$1,(4),jobs);
} else {
if((state_val_26753 === (1))){
var state_26752__$1 = state_26752;
var statearr_26759_26899 = state_26752__$1;
(statearr_26759_26899[(2)] = null);

(statearr_26759_26899[(1)] = (2));


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
});})(__26881,c__22071__auto___26893,G__26712_26882,n__19045__auto___26880,jobs,results,process,async))
;
return ((function (__26881,switch__22009__auto__,c__22071__auto___26893,G__26712_26882,n__19045__auto___26880,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__22010__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__22010__auto____0 = (function (){
var statearr_26763 = [null,null,null,null,null,null,null];
(statearr_26763[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__22010__auto__);

(statearr_26763[(1)] = (1));

return statearr_26763;
});
var cljs$core$async$pipeline_STAR__$_state_machine__22010__auto____1 = (function (state_26752){
while(true){
var ret_value__22011__auto__ = (function (){try{while(true){
var result__22012__auto__ = switch__22009__auto__.call(null,state_26752);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22012__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22012__auto__;
}
break;
}
}catch (e26764){if((e26764 instanceof Object)){
var ex__22013__auto__ = e26764;
var statearr_26765_26900 = state_26752;
(statearr_26765_26900[(5)] = ex__22013__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26752);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26764;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22011__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26901 = state_26752;
state_26752 = G__26901;
continue;
} else {
return ret_value__22011__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__22010__auto__ = function(state_26752){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__22010__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__22010__auto____1.call(this,state_26752);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__22010__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__22010__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__22010__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__22010__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__22010__auto__;
})()
;})(__26881,switch__22009__auto__,c__22071__auto___26893,G__26712_26882,n__19045__auto___26880,jobs,results,process,async))
})();
var state__22073__auto__ = (function (){var statearr_26766 = f__22072__auto__.call(null);
(statearr_26766[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22071__auto___26893);

return statearr_26766;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22073__auto__);
});})(__26881,c__22071__auto___26893,G__26712_26882,n__19045__auto___26880,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__26902 = (__26881 + (1));
__26881 = G__26902;
continue;
} else {
}
break;
}

var c__22071__auto___26903 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22071__auto___26903,jobs,results,process,async){
return (function (){
var f__22072__auto__ = (function (){var switch__22009__auto__ = ((function (c__22071__auto___26903,jobs,results,process,async){
return (function (state_26788){
var state_val_26789 = (state_26788[(1)]);
if((state_val_26789 === (9))){
var inst_26781 = (state_26788[(2)]);
var state_26788__$1 = (function (){var statearr_26790 = state_26788;
(statearr_26790[(7)] = inst_26781);

return statearr_26790;
})();
var statearr_26791_26904 = state_26788__$1;
(statearr_26791_26904[(2)] = null);

(statearr_26791_26904[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26789 === (8))){
var inst_26774 = (state_26788[(8)]);
var inst_26779 = (state_26788[(2)]);
var state_26788__$1 = (function (){var statearr_26792 = state_26788;
(statearr_26792[(9)] = inst_26779);

return statearr_26792;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26788__$1,(9),results,inst_26774);
} else {
if((state_val_26789 === (7))){
var inst_26784 = (state_26788[(2)]);
var state_26788__$1 = state_26788;
var statearr_26793_26905 = state_26788__$1;
(statearr_26793_26905[(2)] = inst_26784);

(statearr_26793_26905[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26789 === (6))){
var inst_26769 = (state_26788[(10)]);
var inst_26774 = (state_26788[(8)]);
var inst_26774__$1 = cljs.core.async.chan.call(null,(1));
var inst_26775 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_26776 = [inst_26769,inst_26774__$1];
var inst_26777 = (new cljs.core.PersistentVector(null,2,(5),inst_26775,inst_26776,null));
var state_26788__$1 = (function (){var statearr_26794 = state_26788;
(statearr_26794[(8)] = inst_26774__$1);

return statearr_26794;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26788__$1,(8),jobs,inst_26777);
} else {
if((state_val_26789 === (5))){
var inst_26772 = cljs.core.async.close_BANG_.call(null,jobs);
var state_26788__$1 = state_26788;
var statearr_26795_26906 = state_26788__$1;
(statearr_26795_26906[(2)] = inst_26772);

(statearr_26795_26906[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26789 === (4))){
var inst_26769 = (state_26788[(10)]);
var inst_26769__$1 = (state_26788[(2)]);
var inst_26770 = (inst_26769__$1 == null);
var state_26788__$1 = (function (){var statearr_26796 = state_26788;
(statearr_26796[(10)] = inst_26769__$1);

return statearr_26796;
})();
if(cljs.core.truth_(inst_26770)){
var statearr_26797_26907 = state_26788__$1;
(statearr_26797_26907[(1)] = (5));

} else {
var statearr_26798_26908 = state_26788__$1;
(statearr_26798_26908[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26789 === (3))){
var inst_26786 = (state_26788[(2)]);
var state_26788__$1 = state_26788;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26788__$1,inst_26786);
} else {
if((state_val_26789 === (2))){
var state_26788__$1 = state_26788;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26788__$1,(4),from);
} else {
if((state_val_26789 === (1))){
var state_26788__$1 = state_26788;
var statearr_26799_26909 = state_26788__$1;
(statearr_26799_26909[(2)] = null);

(statearr_26799_26909[(1)] = (2));


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
});})(c__22071__auto___26903,jobs,results,process,async))
;
return ((function (switch__22009__auto__,c__22071__auto___26903,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__22010__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__22010__auto____0 = (function (){
var statearr_26803 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_26803[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__22010__auto__);

(statearr_26803[(1)] = (1));

return statearr_26803;
});
var cljs$core$async$pipeline_STAR__$_state_machine__22010__auto____1 = (function (state_26788){
while(true){
var ret_value__22011__auto__ = (function (){try{while(true){
var result__22012__auto__ = switch__22009__auto__.call(null,state_26788);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22012__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22012__auto__;
}
break;
}
}catch (e26804){if((e26804 instanceof Object)){
var ex__22013__auto__ = e26804;
var statearr_26805_26910 = state_26788;
(statearr_26805_26910[(5)] = ex__22013__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26788);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26804;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22011__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26911 = state_26788;
state_26788 = G__26911;
continue;
} else {
return ret_value__22011__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__22010__auto__ = function(state_26788){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__22010__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__22010__auto____1.call(this,state_26788);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__22010__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__22010__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__22010__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__22010__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__22010__auto__;
})()
;})(switch__22009__auto__,c__22071__auto___26903,jobs,results,process,async))
})();
var state__22073__auto__ = (function (){var statearr_26806 = f__22072__auto__.call(null);
(statearr_26806[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22071__auto___26903);

return statearr_26806;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22073__auto__);
});})(c__22071__auto___26903,jobs,results,process,async))
);


var c__22071__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22071__auto__,jobs,results,process,async){
return (function (){
var f__22072__auto__ = (function (){var switch__22009__auto__ = ((function (c__22071__auto__,jobs,results,process,async){
return (function (state_26844){
var state_val_26845 = (state_26844[(1)]);
if((state_val_26845 === (7))){
var inst_26840 = (state_26844[(2)]);
var state_26844__$1 = state_26844;
var statearr_26846_26912 = state_26844__$1;
(statearr_26846_26912[(2)] = inst_26840);

(statearr_26846_26912[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26845 === (20))){
var state_26844__$1 = state_26844;
var statearr_26847_26913 = state_26844__$1;
(statearr_26847_26913[(2)] = null);

(statearr_26847_26913[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26845 === (1))){
var state_26844__$1 = state_26844;
var statearr_26848_26914 = state_26844__$1;
(statearr_26848_26914[(2)] = null);

(statearr_26848_26914[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26845 === (4))){
var inst_26809 = (state_26844[(7)]);
var inst_26809__$1 = (state_26844[(2)]);
var inst_26810 = (inst_26809__$1 == null);
var state_26844__$1 = (function (){var statearr_26849 = state_26844;
(statearr_26849[(7)] = inst_26809__$1);

return statearr_26849;
})();
if(cljs.core.truth_(inst_26810)){
var statearr_26850_26915 = state_26844__$1;
(statearr_26850_26915[(1)] = (5));

} else {
var statearr_26851_26916 = state_26844__$1;
(statearr_26851_26916[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26845 === (15))){
var inst_26822 = (state_26844[(8)]);
var state_26844__$1 = state_26844;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26844__$1,(18),to,inst_26822);
} else {
if((state_val_26845 === (21))){
var inst_26835 = (state_26844[(2)]);
var state_26844__$1 = state_26844;
var statearr_26852_26917 = state_26844__$1;
(statearr_26852_26917[(2)] = inst_26835);

(statearr_26852_26917[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26845 === (13))){
var inst_26837 = (state_26844[(2)]);
var state_26844__$1 = (function (){var statearr_26853 = state_26844;
(statearr_26853[(9)] = inst_26837);

return statearr_26853;
})();
var statearr_26854_26918 = state_26844__$1;
(statearr_26854_26918[(2)] = null);

(statearr_26854_26918[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26845 === (6))){
var inst_26809 = (state_26844[(7)]);
var state_26844__$1 = state_26844;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26844__$1,(11),inst_26809);
} else {
if((state_val_26845 === (17))){
var inst_26830 = (state_26844[(2)]);
var state_26844__$1 = state_26844;
if(cljs.core.truth_(inst_26830)){
var statearr_26855_26919 = state_26844__$1;
(statearr_26855_26919[(1)] = (19));

} else {
var statearr_26856_26920 = state_26844__$1;
(statearr_26856_26920[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26845 === (3))){
var inst_26842 = (state_26844[(2)]);
var state_26844__$1 = state_26844;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26844__$1,inst_26842);
} else {
if((state_val_26845 === (12))){
var inst_26819 = (state_26844[(10)]);
var state_26844__$1 = state_26844;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26844__$1,(14),inst_26819);
} else {
if((state_val_26845 === (2))){
var state_26844__$1 = state_26844;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26844__$1,(4),results);
} else {
if((state_val_26845 === (19))){
var state_26844__$1 = state_26844;
var statearr_26857_26921 = state_26844__$1;
(statearr_26857_26921[(2)] = null);

(statearr_26857_26921[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26845 === (11))){
var inst_26819 = (state_26844[(2)]);
var state_26844__$1 = (function (){var statearr_26858 = state_26844;
(statearr_26858[(10)] = inst_26819);

return statearr_26858;
})();
var statearr_26859_26922 = state_26844__$1;
(statearr_26859_26922[(2)] = null);

(statearr_26859_26922[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26845 === (9))){
var state_26844__$1 = state_26844;
var statearr_26860_26923 = state_26844__$1;
(statearr_26860_26923[(2)] = null);

(statearr_26860_26923[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26845 === (5))){
var state_26844__$1 = state_26844;
if(cljs.core.truth_(close_QMARK_)){
var statearr_26861_26924 = state_26844__$1;
(statearr_26861_26924[(1)] = (8));

} else {
var statearr_26862_26925 = state_26844__$1;
(statearr_26862_26925[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26845 === (14))){
var inst_26822 = (state_26844[(8)]);
var inst_26824 = (state_26844[(11)]);
var inst_26822__$1 = (state_26844[(2)]);
var inst_26823 = (inst_26822__$1 == null);
var inst_26824__$1 = cljs.core.not.call(null,inst_26823);
var state_26844__$1 = (function (){var statearr_26863 = state_26844;
(statearr_26863[(8)] = inst_26822__$1);

(statearr_26863[(11)] = inst_26824__$1);

return statearr_26863;
})();
if(inst_26824__$1){
var statearr_26864_26926 = state_26844__$1;
(statearr_26864_26926[(1)] = (15));

} else {
var statearr_26865_26927 = state_26844__$1;
(statearr_26865_26927[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26845 === (16))){
var inst_26824 = (state_26844[(11)]);
var state_26844__$1 = state_26844;
var statearr_26866_26928 = state_26844__$1;
(statearr_26866_26928[(2)] = inst_26824);

(statearr_26866_26928[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26845 === (10))){
var inst_26816 = (state_26844[(2)]);
var state_26844__$1 = state_26844;
var statearr_26867_26929 = state_26844__$1;
(statearr_26867_26929[(2)] = inst_26816);

(statearr_26867_26929[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26845 === (18))){
var inst_26827 = (state_26844[(2)]);
var state_26844__$1 = state_26844;
var statearr_26868_26930 = state_26844__$1;
(statearr_26868_26930[(2)] = inst_26827);

(statearr_26868_26930[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26845 === (8))){
var inst_26813 = cljs.core.async.close_BANG_.call(null,to);
var state_26844__$1 = state_26844;
var statearr_26869_26931 = state_26844__$1;
(statearr_26869_26931[(2)] = inst_26813);

(statearr_26869_26931[(1)] = (10));


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
});})(c__22071__auto__,jobs,results,process,async))
;
return ((function (switch__22009__auto__,c__22071__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__22010__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__22010__auto____0 = (function (){
var statearr_26873 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_26873[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__22010__auto__);

(statearr_26873[(1)] = (1));

return statearr_26873;
});
var cljs$core$async$pipeline_STAR__$_state_machine__22010__auto____1 = (function (state_26844){
while(true){
var ret_value__22011__auto__ = (function (){try{while(true){
var result__22012__auto__ = switch__22009__auto__.call(null,state_26844);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22012__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22012__auto__;
}
break;
}
}catch (e26874){if((e26874 instanceof Object)){
var ex__22013__auto__ = e26874;
var statearr_26875_26932 = state_26844;
(statearr_26875_26932[(5)] = ex__22013__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26844);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26874;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22011__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26933 = state_26844;
state_26844 = G__26933;
continue;
} else {
return ret_value__22011__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__22010__auto__ = function(state_26844){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__22010__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__22010__auto____1.call(this,state_26844);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__22010__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__22010__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__22010__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__22010__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__22010__auto__;
})()
;})(switch__22009__auto__,c__22071__auto__,jobs,results,process,async))
})();
var state__22073__auto__ = (function (){var statearr_26876 = f__22072__auto__.call(null);
(statearr_26876[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22071__auto__);

return statearr_26876;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22073__auto__);
});})(c__22071__auto__,jobs,results,process,async))
);

return c__22071__auto__;
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
var G__26935 = arguments.length;
switch (G__26935) {
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
var G__26938 = arguments.length;
switch (G__26938) {
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
var G__26941 = arguments.length;
switch (G__26941) {
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
var c__22071__auto___26993 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22071__auto___26993,tc,fc){
return (function (){
var f__22072__auto__ = (function (){var switch__22009__auto__ = ((function (c__22071__auto___26993,tc,fc){
return (function (state_26967){
var state_val_26968 = (state_26967[(1)]);
if((state_val_26968 === (7))){
var inst_26963 = (state_26967[(2)]);
var state_26967__$1 = state_26967;
var statearr_26969_26994 = state_26967__$1;
(statearr_26969_26994[(2)] = inst_26963);

(statearr_26969_26994[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26968 === (1))){
var state_26967__$1 = state_26967;
var statearr_26970_26995 = state_26967__$1;
(statearr_26970_26995[(2)] = null);

(statearr_26970_26995[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26968 === (4))){
var inst_26944 = (state_26967[(7)]);
var inst_26944__$1 = (state_26967[(2)]);
var inst_26945 = (inst_26944__$1 == null);
var state_26967__$1 = (function (){var statearr_26971 = state_26967;
(statearr_26971[(7)] = inst_26944__$1);

return statearr_26971;
})();
if(cljs.core.truth_(inst_26945)){
var statearr_26972_26996 = state_26967__$1;
(statearr_26972_26996[(1)] = (5));

} else {
var statearr_26973_26997 = state_26967__$1;
(statearr_26973_26997[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26968 === (13))){
var state_26967__$1 = state_26967;
var statearr_26974_26998 = state_26967__$1;
(statearr_26974_26998[(2)] = null);

(statearr_26974_26998[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26968 === (6))){
var inst_26944 = (state_26967[(7)]);
var inst_26950 = p.call(null,inst_26944);
var state_26967__$1 = state_26967;
if(cljs.core.truth_(inst_26950)){
var statearr_26975_26999 = state_26967__$1;
(statearr_26975_26999[(1)] = (9));

} else {
var statearr_26976_27000 = state_26967__$1;
(statearr_26976_27000[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26968 === (3))){
var inst_26965 = (state_26967[(2)]);
var state_26967__$1 = state_26967;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26967__$1,inst_26965);
} else {
if((state_val_26968 === (12))){
var state_26967__$1 = state_26967;
var statearr_26977_27001 = state_26967__$1;
(statearr_26977_27001[(2)] = null);

(statearr_26977_27001[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26968 === (2))){
var state_26967__$1 = state_26967;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26967__$1,(4),ch);
} else {
if((state_val_26968 === (11))){
var inst_26944 = (state_26967[(7)]);
var inst_26954 = (state_26967[(2)]);
var state_26967__$1 = state_26967;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26967__$1,(8),inst_26954,inst_26944);
} else {
if((state_val_26968 === (9))){
var state_26967__$1 = state_26967;
var statearr_26978_27002 = state_26967__$1;
(statearr_26978_27002[(2)] = tc);

(statearr_26978_27002[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26968 === (5))){
var inst_26947 = cljs.core.async.close_BANG_.call(null,tc);
var inst_26948 = cljs.core.async.close_BANG_.call(null,fc);
var state_26967__$1 = (function (){var statearr_26979 = state_26967;
(statearr_26979[(8)] = inst_26947);

return statearr_26979;
})();
var statearr_26980_27003 = state_26967__$1;
(statearr_26980_27003[(2)] = inst_26948);

(statearr_26980_27003[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26968 === (14))){
var inst_26961 = (state_26967[(2)]);
var state_26967__$1 = state_26967;
var statearr_26981_27004 = state_26967__$1;
(statearr_26981_27004[(2)] = inst_26961);

(statearr_26981_27004[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26968 === (10))){
var state_26967__$1 = state_26967;
var statearr_26982_27005 = state_26967__$1;
(statearr_26982_27005[(2)] = fc);

(statearr_26982_27005[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26968 === (8))){
var inst_26956 = (state_26967[(2)]);
var state_26967__$1 = state_26967;
if(cljs.core.truth_(inst_26956)){
var statearr_26983_27006 = state_26967__$1;
(statearr_26983_27006[(1)] = (12));

} else {
var statearr_26984_27007 = state_26967__$1;
(statearr_26984_27007[(1)] = (13));

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
});})(c__22071__auto___26993,tc,fc))
;
return ((function (switch__22009__auto__,c__22071__auto___26993,tc,fc){
return (function() {
var cljs$core$async$state_machine__22010__auto__ = null;
var cljs$core$async$state_machine__22010__auto____0 = (function (){
var statearr_26988 = [null,null,null,null,null,null,null,null,null];
(statearr_26988[(0)] = cljs$core$async$state_machine__22010__auto__);

(statearr_26988[(1)] = (1));

return statearr_26988;
});
var cljs$core$async$state_machine__22010__auto____1 = (function (state_26967){
while(true){
var ret_value__22011__auto__ = (function (){try{while(true){
var result__22012__auto__ = switch__22009__auto__.call(null,state_26967);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22012__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22012__auto__;
}
break;
}
}catch (e26989){if((e26989 instanceof Object)){
var ex__22013__auto__ = e26989;
var statearr_26990_27008 = state_26967;
(statearr_26990_27008[(5)] = ex__22013__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26967);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26989;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22011__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27009 = state_26967;
state_26967 = G__27009;
continue;
} else {
return ret_value__22011__auto__;
}
break;
}
});
cljs$core$async$state_machine__22010__auto__ = function(state_26967){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__22010__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__22010__auto____1.call(this,state_26967);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__22010__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__22010__auto____0;
cljs$core$async$state_machine__22010__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__22010__auto____1;
return cljs$core$async$state_machine__22010__auto__;
})()
;})(switch__22009__auto__,c__22071__auto___26993,tc,fc))
})();
var state__22073__auto__ = (function (){var statearr_26991 = f__22072__auto__.call(null);
(statearr_26991[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22071__auto___26993);

return statearr_26991;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22073__auto__);
});})(c__22071__auto___26993,tc,fc))
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
var c__22071__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22071__auto__){
return (function (){
var f__22072__auto__ = (function (){var switch__22009__auto__ = ((function (c__22071__auto__){
return (function (state_27056){
var state_val_27057 = (state_27056[(1)]);
if((state_val_27057 === (7))){
var inst_27052 = (state_27056[(2)]);
var state_27056__$1 = state_27056;
var statearr_27058_27074 = state_27056__$1;
(statearr_27058_27074[(2)] = inst_27052);

(statearr_27058_27074[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27057 === (6))){
var inst_27042 = (state_27056[(7)]);
var inst_27045 = (state_27056[(8)]);
var inst_27049 = f.call(null,inst_27042,inst_27045);
var inst_27042__$1 = inst_27049;
var state_27056__$1 = (function (){var statearr_27059 = state_27056;
(statearr_27059[(7)] = inst_27042__$1);

return statearr_27059;
})();
var statearr_27060_27075 = state_27056__$1;
(statearr_27060_27075[(2)] = null);

(statearr_27060_27075[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27057 === (5))){
var inst_27042 = (state_27056[(7)]);
var state_27056__$1 = state_27056;
var statearr_27061_27076 = state_27056__$1;
(statearr_27061_27076[(2)] = inst_27042);

(statearr_27061_27076[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27057 === (4))){
var inst_27045 = (state_27056[(8)]);
var inst_27045__$1 = (state_27056[(2)]);
var inst_27046 = (inst_27045__$1 == null);
var state_27056__$1 = (function (){var statearr_27062 = state_27056;
(statearr_27062[(8)] = inst_27045__$1);

return statearr_27062;
})();
if(cljs.core.truth_(inst_27046)){
var statearr_27063_27077 = state_27056__$1;
(statearr_27063_27077[(1)] = (5));

} else {
var statearr_27064_27078 = state_27056__$1;
(statearr_27064_27078[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27057 === (3))){
var inst_27054 = (state_27056[(2)]);
var state_27056__$1 = state_27056;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27056__$1,inst_27054);
} else {
if((state_val_27057 === (2))){
var state_27056__$1 = state_27056;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27056__$1,(4),ch);
} else {
if((state_val_27057 === (1))){
var inst_27042 = init;
var state_27056__$1 = (function (){var statearr_27065 = state_27056;
(statearr_27065[(7)] = inst_27042);

return statearr_27065;
})();
var statearr_27066_27079 = state_27056__$1;
(statearr_27066_27079[(2)] = null);

(statearr_27066_27079[(1)] = (2));


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
});})(c__22071__auto__))
;
return ((function (switch__22009__auto__,c__22071__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__22010__auto__ = null;
var cljs$core$async$reduce_$_state_machine__22010__auto____0 = (function (){
var statearr_27070 = [null,null,null,null,null,null,null,null,null];
(statearr_27070[(0)] = cljs$core$async$reduce_$_state_machine__22010__auto__);

(statearr_27070[(1)] = (1));

return statearr_27070;
});
var cljs$core$async$reduce_$_state_machine__22010__auto____1 = (function (state_27056){
while(true){
var ret_value__22011__auto__ = (function (){try{while(true){
var result__22012__auto__ = switch__22009__auto__.call(null,state_27056);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22012__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22012__auto__;
}
break;
}
}catch (e27071){if((e27071 instanceof Object)){
var ex__22013__auto__ = e27071;
var statearr_27072_27080 = state_27056;
(statearr_27072_27080[(5)] = ex__22013__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27056);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27071;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22011__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27081 = state_27056;
state_27056 = G__27081;
continue;
} else {
return ret_value__22011__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__22010__auto__ = function(state_27056){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__22010__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__22010__auto____1.call(this,state_27056);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__22010__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__22010__auto____0;
cljs$core$async$reduce_$_state_machine__22010__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__22010__auto____1;
return cljs$core$async$reduce_$_state_machine__22010__auto__;
})()
;})(switch__22009__auto__,c__22071__auto__))
})();
var state__22073__auto__ = (function (){var statearr_27073 = f__22072__auto__.call(null);
(statearr_27073[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22071__auto__);

return statearr_27073;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22073__auto__);
});})(c__22071__auto__))
);

return c__22071__auto__;
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
var G__27083 = arguments.length;
switch (G__27083) {
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
var c__22071__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22071__auto__){
return (function (){
var f__22072__auto__ = (function (){var switch__22009__auto__ = ((function (c__22071__auto__){
return (function (state_27108){
var state_val_27109 = (state_27108[(1)]);
if((state_val_27109 === (7))){
var inst_27090 = (state_27108[(2)]);
var state_27108__$1 = state_27108;
var statearr_27110_27134 = state_27108__$1;
(statearr_27110_27134[(2)] = inst_27090);

(statearr_27110_27134[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27109 === (1))){
var inst_27084 = cljs.core.seq.call(null,coll);
var inst_27085 = inst_27084;
var state_27108__$1 = (function (){var statearr_27111 = state_27108;
(statearr_27111[(7)] = inst_27085);

return statearr_27111;
})();
var statearr_27112_27135 = state_27108__$1;
(statearr_27112_27135[(2)] = null);

(statearr_27112_27135[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27109 === (4))){
var inst_27085 = (state_27108[(7)]);
var inst_27088 = cljs.core.first.call(null,inst_27085);
var state_27108__$1 = state_27108;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27108__$1,(7),ch,inst_27088);
} else {
if((state_val_27109 === (13))){
var inst_27102 = (state_27108[(2)]);
var state_27108__$1 = state_27108;
var statearr_27113_27136 = state_27108__$1;
(statearr_27113_27136[(2)] = inst_27102);

(statearr_27113_27136[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27109 === (6))){
var inst_27093 = (state_27108[(2)]);
var state_27108__$1 = state_27108;
if(cljs.core.truth_(inst_27093)){
var statearr_27114_27137 = state_27108__$1;
(statearr_27114_27137[(1)] = (8));

} else {
var statearr_27115_27138 = state_27108__$1;
(statearr_27115_27138[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27109 === (3))){
var inst_27106 = (state_27108[(2)]);
var state_27108__$1 = state_27108;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27108__$1,inst_27106);
} else {
if((state_val_27109 === (12))){
var state_27108__$1 = state_27108;
var statearr_27116_27139 = state_27108__$1;
(statearr_27116_27139[(2)] = null);

(statearr_27116_27139[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27109 === (2))){
var inst_27085 = (state_27108[(7)]);
var state_27108__$1 = state_27108;
if(cljs.core.truth_(inst_27085)){
var statearr_27117_27140 = state_27108__$1;
(statearr_27117_27140[(1)] = (4));

} else {
var statearr_27118_27141 = state_27108__$1;
(statearr_27118_27141[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27109 === (11))){
var inst_27099 = cljs.core.async.close_BANG_.call(null,ch);
var state_27108__$1 = state_27108;
var statearr_27119_27142 = state_27108__$1;
(statearr_27119_27142[(2)] = inst_27099);

(statearr_27119_27142[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27109 === (9))){
var state_27108__$1 = state_27108;
if(cljs.core.truth_(close_QMARK_)){
var statearr_27120_27143 = state_27108__$1;
(statearr_27120_27143[(1)] = (11));

} else {
var statearr_27121_27144 = state_27108__$1;
(statearr_27121_27144[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27109 === (5))){
var inst_27085 = (state_27108[(7)]);
var state_27108__$1 = state_27108;
var statearr_27122_27145 = state_27108__$1;
(statearr_27122_27145[(2)] = inst_27085);

(statearr_27122_27145[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27109 === (10))){
var inst_27104 = (state_27108[(2)]);
var state_27108__$1 = state_27108;
var statearr_27123_27146 = state_27108__$1;
(statearr_27123_27146[(2)] = inst_27104);

(statearr_27123_27146[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27109 === (8))){
var inst_27085 = (state_27108[(7)]);
var inst_27095 = cljs.core.next.call(null,inst_27085);
var inst_27085__$1 = inst_27095;
var state_27108__$1 = (function (){var statearr_27124 = state_27108;
(statearr_27124[(7)] = inst_27085__$1);

return statearr_27124;
})();
var statearr_27125_27147 = state_27108__$1;
(statearr_27125_27147[(2)] = null);

(statearr_27125_27147[(1)] = (2));


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
});})(c__22071__auto__))
;
return ((function (switch__22009__auto__,c__22071__auto__){
return (function() {
var cljs$core$async$state_machine__22010__auto__ = null;
var cljs$core$async$state_machine__22010__auto____0 = (function (){
var statearr_27129 = [null,null,null,null,null,null,null,null];
(statearr_27129[(0)] = cljs$core$async$state_machine__22010__auto__);

(statearr_27129[(1)] = (1));

return statearr_27129;
});
var cljs$core$async$state_machine__22010__auto____1 = (function (state_27108){
while(true){
var ret_value__22011__auto__ = (function (){try{while(true){
var result__22012__auto__ = switch__22009__auto__.call(null,state_27108);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22012__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22012__auto__;
}
break;
}
}catch (e27130){if((e27130 instanceof Object)){
var ex__22013__auto__ = e27130;
var statearr_27131_27148 = state_27108;
(statearr_27131_27148[(5)] = ex__22013__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27108);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27130;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22011__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27149 = state_27108;
state_27108 = G__27149;
continue;
} else {
return ret_value__22011__auto__;
}
break;
}
});
cljs$core$async$state_machine__22010__auto__ = function(state_27108){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__22010__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__22010__auto____1.call(this,state_27108);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__22010__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__22010__auto____0;
cljs$core$async$state_machine__22010__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__22010__auto____1;
return cljs$core$async$state_machine__22010__auto__;
})()
;})(switch__22009__auto__,c__22071__auto__))
})();
var state__22073__auto__ = (function (){var statearr_27132 = f__22072__auto__.call(null);
(statearr_27132[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22071__auto__);

return statearr_27132;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22073__auto__);
});})(c__22071__auto__))
);

return c__22071__auto__;
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

cljs.core.async.Mux = (function (){var obj27151 = {};
return obj27151;
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


cljs.core.async.Mult = (function (){var obj27153 = {};
return obj27153;
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
if(typeof cljs.core.async.t27375 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t27375 = (function (cs,ch,mult,meta27376){
this.cs = cs;
this.ch = ch;
this.mult = mult;
this.meta27376 = meta27376;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t27375.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t27375.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t27375.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t27375.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t27375.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t27375.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t27375.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_27377){
var self__ = this;
var _27377__$1 = this;
return self__.meta27376;
});})(cs))
;

cljs.core.async.t27375.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_27377,meta27376__$1){
var self__ = this;
var _27377__$1 = this;
return (new cljs.core.async.t27375(self__.cs,self__.ch,self__.mult,meta27376__$1));
});})(cs))
;

cljs.core.async.t27375.cljs$lang$type = true;

cljs.core.async.t27375.cljs$lang$ctorStr = "cljs.core.async/t27375";

cljs.core.async.t27375.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__18739__auto__,writer__18740__auto__,opt__18741__auto__){
return cljs.core._write.call(null,writer__18740__auto__,"cljs.core.async/t27375");
});})(cs))
;

cljs.core.async.__GT_t27375 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t27375(cs__$1,ch__$1,mult__$1,meta27376){
return (new cljs.core.async.t27375(cs__$1,ch__$1,mult__$1,meta27376));
});})(cs))
;

}

return (new cljs.core.async.t27375(cs,ch,cljs$core$async$mult,cljs.core.PersistentArrayMap.EMPTY));
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
var c__22071__auto___27596 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22071__auto___27596,cs,m,dchan,dctr,done){
return (function (){
var f__22072__auto__ = (function (){var switch__22009__auto__ = ((function (c__22071__auto___27596,cs,m,dchan,dctr,done){
return (function (state_27508){
var state_val_27509 = (state_27508[(1)]);
if((state_val_27509 === (7))){
var inst_27504 = (state_27508[(2)]);
var state_27508__$1 = state_27508;
var statearr_27510_27597 = state_27508__$1;
(statearr_27510_27597[(2)] = inst_27504);

(statearr_27510_27597[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27509 === (20))){
var inst_27409 = (state_27508[(7)]);
var inst_27419 = cljs.core.first.call(null,inst_27409);
var inst_27420 = cljs.core.nth.call(null,inst_27419,(0),null);
var inst_27421 = cljs.core.nth.call(null,inst_27419,(1),null);
var state_27508__$1 = (function (){var statearr_27511 = state_27508;
(statearr_27511[(8)] = inst_27420);

return statearr_27511;
})();
if(cljs.core.truth_(inst_27421)){
var statearr_27512_27598 = state_27508__$1;
(statearr_27512_27598[(1)] = (22));

} else {
var statearr_27513_27599 = state_27508__$1;
(statearr_27513_27599[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27509 === (27))){
var inst_27449 = (state_27508[(9)]);
var inst_27380 = (state_27508[(10)]);
var inst_27456 = (state_27508[(11)]);
var inst_27451 = (state_27508[(12)]);
var inst_27456__$1 = cljs.core._nth.call(null,inst_27449,inst_27451);
var inst_27457 = cljs.core.async.put_BANG_.call(null,inst_27456__$1,inst_27380,done);
var state_27508__$1 = (function (){var statearr_27514 = state_27508;
(statearr_27514[(11)] = inst_27456__$1);

return statearr_27514;
})();
if(cljs.core.truth_(inst_27457)){
var statearr_27515_27600 = state_27508__$1;
(statearr_27515_27600[(1)] = (30));

} else {
var statearr_27516_27601 = state_27508__$1;
(statearr_27516_27601[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27509 === (1))){
var state_27508__$1 = state_27508;
var statearr_27517_27602 = state_27508__$1;
(statearr_27517_27602[(2)] = null);

(statearr_27517_27602[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27509 === (24))){
var inst_27409 = (state_27508[(7)]);
var inst_27426 = (state_27508[(2)]);
var inst_27427 = cljs.core.next.call(null,inst_27409);
var inst_27389 = inst_27427;
var inst_27390 = null;
var inst_27391 = (0);
var inst_27392 = (0);
var state_27508__$1 = (function (){var statearr_27518 = state_27508;
(statearr_27518[(13)] = inst_27391);

(statearr_27518[(14)] = inst_27426);

(statearr_27518[(15)] = inst_27392);

(statearr_27518[(16)] = inst_27390);

(statearr_27518[(17)] = inst_27389);

return statearr_27518;
})();
var statearr_27519_27603 = state_27508__$1;
(statearr_27519_27603[(2)] = null);

(statearr_27519_27603[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27509 === (39))){
var state_27508__$1 = state_27508;
var statearr_27523_27604 = state_27508__$1;
(statearr_27523_27604[(2)] = null);

(statearr_27523_27604[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27509 === (4))){
var inst_27380 = (state_27508[(10)]);
var inst_27380__$1 = (state_27508[(2)]);
var inst_27381 = (inst_27380__$1 == null);
var state_27508__$1 = (function (){var statearr_27524 = state_27508;
(statearr_27524[(10)] = inst_27380__$1);

return statearr_27524;
})();
if(cljs.core.truth_(inst_27381)){
var statearr_27525_27605 = state_27508__$1;
(statearr_27525_27605[(1)] = (5));

} else {
var statearr_27526_27606 = state_27508__$1;
(statearr_27526_27606[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27509 === (15))){
var inst_27391 = (state_27508[(13)]);
var inst_27392 = (state_27508[(15)]);
var inst_27390 = (state_27508[(16)]);
var inst_27389 = (state_27508[(17)]);
var inst_27405 = (state_27508[(2)]);
var inst_27406 = (inst_27392 + (1));
var tmp27520 = inst_27391;
var tmp27521 = inst_27390;
var tmp27522 = inst_27389;
var inst_27389__$1 = tmp27522;
var inst_27390__$1 = tmp27521;
var inst_27391__$1 = tmp27520;
var inst_27392__$1 = inst_27406;
var state_27508__$1 = (function (){var statearr_27527 = state_27508;
(statearr_27527[(13)] = inst_27391__$1);

(statearr_27527[(15)] = inst_27392__$1);

(statearr_27527[(16)] = inst_27390__$1);

(statearr_27527[(17)] = inst_27389__$1);

(statearr_27527[(18)] = inst_27405);

return statearr_27527;
})();
var statearr_27528_27607 = state_27508__$1;
(statearr_27528_27607[(2)] = null);

(statearr_27528_27607[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27509 === (21))){
var inst_27430 = (state_27508[(2)]);
var state_27508__$1 = state_27508;
var statearr_27532_27608 = state_27508__$1;
(statearr_27532_27608[(2)] = inst_27430);

(statearr_27532_27608[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27509 === (31))){
var inst_27456 = (state_27508[(11)]);
var inst_27460 = done.call(null,null);
var inst_27461 = cljs.core.async.untap_STAR_.call(null,m,inst_27456);
var state_27508__$1 = (function (){var statearr_27533 = state_27508;
(statearr_27533[(19)] = inst_27460);

return statearr_27533;
})();
var statearr_27534_27609 = state_27508__$1;
(statearr_27534_27609[(2)] = inst_27461);

(statearr_27534_27609[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27509 === (32))){
var inst_27449 = (state_27508[(9)]);
var inst_27450 = (state_27508[(20)]);
var inst_27451 = (state_27508[(12)]);
var inst_27448 = (state_27508[(21)]);
var inst_27463 = (state_27508[(2)]);
var inst_27464 = (inst_27451 + (1));
var tmp27529 = inst_27449;
var tmp27530 = inst_27450;
var tmp27531 = inst_27448;
var inst_27448__$1 = tmp27531;
var inst_27449__$1 = tmp27529;
var inst_27450__$1 = tmp27530;
var inst_27451__$1 = inst_27464;
var state_27508__$1 = (function (){var statearr_27535 = state_27508;
(statearr_27535[(9)] = inst_27449__$1);

(statearr_27535[(20)] = inst_27450__$1);

(statearr_27535[(12)] = inst_27451__$1);

(statearr_27535[(22)] = inst_27463);

(statearr_27535[(21)] = inst_27448__$1);

return statearr_27535;
})();
var statearr_27536_27610 = state_27508__$1;
(statearr_27536_27610[(2)] = null);

(statearr_27536_27610[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27509 === (40))){
var inst_27476 = (state_27508[(23)]);
var inst_27480 = done.call(null,null);
var inst_27481 = cljs.core.async.untap_STAR_.call(null,m,inst_27476);
var state_27508__$1 = (function (){var statearr_27537 = state_27508;
(statearr_27537[(24)] = inst_27480);

return statearr_27537;
})();
var statearr_27538_27611 = state_27508__$1;
(statearr_27538_27611[(2)] = inst_27481);

(statearr_27538_27611[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27509 === (33))){
var inst_27467 = (state_27508[(25)]);
var inst_27469 = cljs.core.chunked_seq_QMARK_.call(null,inst_27467);
var state_27508__$1 = state_27508;
if(inst_27469){
var statearr_27539_27612 = state_27508__$1;
(statearr_27539_27612[(1)] = (36));

} else {
var statearr_27540_27613 = state_27508__$1;
(statearr_27540_27613[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27509 === (13))){
var inst_27399 = (state_27508[(26)]);
var inst_27402 = cljs.core.async.close_BANG_.call(null,inst_27399);
var state_27508__$1 = state_27508;
var statearr_27541_27614 = state_27508__$1;
(statearr_27541_27614[(2)] = inst_27402);

(statearr_27541_27614[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27509 === (22))){
var inst_27420 = (state_27508[(8)]);
var inst_27423 = cljs.core.async.close_BANG_.call(null,inst_27420);
var state_27508__$1 = state_27508;
var statearr_27542_27615 = state_27508__$1;
(statearr_27542_27615[(2)] = inst_27423);

(statearr_27542_27615[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27509 === (36))){
var inst_27467 = (state_27508[(25)]);
var inst_27471 = cljs.core.chunk_first.call(null,inst_27467);
var inst_27472 = cljs.core.chunk_rest.call(null,inst_27467);
var inst_27473 = cljs.core.count.call(null,inst_27471);
var inst_27448 = inst_27472;
var inst_27449 = inst_27471;
var inst_27450 = inst_27473;
var inst_27451 = (0);
var state_27508__$1 = (function (){var statearr_27543 = state_27508;
(statearr_27543[(9)] = inst_27449);

(statearr_27543[(20)] = inst_27450);

(statearr_27543[(12)] = inst_27451);

(statearr_27543[(21)] = inst_27448);

return statearr_27543;
})();
var statearr_27544_27616 = state_27508__$1;
(statearr_27544_27616[(2)] = null);

(statearr_27544_27616[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27509 === (41))){
var inst_27467 = (state_27508[(25)]);
var inst_27483 = (state_27508[(2)]);
var inst_27484 = cljs.core.next.call(null,inst_27467);
var inst_27448 = inst_27484;
var inst_27449 = null;
var inst_27450 = (0);
var inst_27451 = (0);
var state_27508__$1 = (function (){var statearr_27545 = state_27508;
(statearr_27545[(9)] = inst_27449);

(statearr_27545[(20)] = inst_27450);

(statearr_27545[(12)] = inst_27451);

(statearr_27545[(21)] = inst_27448);

(statearr_27545[(27)] = inst_27483);

return statearr_27545;
})();
var statearr_27546_27617 = state_27508__$1;
(statearr_27546_27617[(2)] = null);

(statearr_27546_27617[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27509 === (43))){
var state_27508__$1 = state_27508;
var statearr_27547_27618 = state_27508__$1;
(statearr_27547_27618[(2)] = null);

(statearr_27547_27618[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27509 === (29))){
var inst_27492 = (state_27508[(2)]);
var state_27508__$1 = state_27508;
var statearr_27548_27619 = state_27508__$1;
(statearr_27548_27619[(2)] = inst_27492);

(statearr_27548_27619[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27509 === (44))){
var inst_27501 = (state_27508[(2)]);
var state_27508__$1 = (function (){var statearr_27549 = state_27508;
(statearr_27549[(28)] = inst_27501);

return statearr_27549;
})();
var statearr_27550_27620 = state_27508__$1;
(statearr_27550_27620[(2)] = null);

(statearr_27550_27620[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27509 === (6))){
var inst_27440 = (state_27508[(29)]);
var inst_27439 = cljs.core.deref.call(null,cs);
var inst_27440__$1 = cljs.core.keys.call(null,inst_27439);
var inst_27441 = cljs.core.count.call(null,inst_27440__$1);
var inst_27442 = cljs.core.reset_BANG_.call(null,dctr,inst_27441);
var inst_27447 = cljs.core.seq.call(null,inst_27440__$1);
var inst_27448 = inst_27447;
var inst_27449 = null;
var inst_27450 = (0);
var inst_27451 = (0);
var state_27508__$1 = (function (){var statearr_27551 = state_27508;
(statearr_27551[(9)] = inst_27449);

(statearr_27551[(29)] = inst_27440__$1);

(statearr_27551[(20)] = inst_27450);

(statearr_27551[(12)] = inst_27451);

(statearr_27551[(21)] = inst_27448);

(statearr_27551[(30)] = inst_27442);

return statearr_27551;
})();
var statearr_27552_27621 = state_27508__$1;
(statearr_27552_27621[(2)] = null);

(statearr_27552_27621[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27509 === (28))){
var inst_27467 = (state_27508[(25)]);
var inst_27448 = (state_27508[(21)]);
var inst_27467__$1 = cljs.core.seq.call(null,inst_27448);
var state_27508__$1 = (function (){var statearr_27553 = state_27508;
(statearr_27553[(25)] = inst_27467__$1);

return statearr_27553;
})();
if(inst_27467__$1){
var statearr_27554_27622 = state_27508__$1;
(statearr_27554_27622[(1)] = (33));

} else {
var statearr_27555_27623 = state_27508__$1;
(statearr_27555_27623[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27509 === (25))){
var inst_27450 = (state_27508[(20)]);
var inst_27451 = (state_27508[(12)]);
var inst_27453 = (inst_27451 < inst_27450);
var inst_27454 = inst_27453;
var state_27508__$1 = state_27508;
if(cljs.core.truth_(inst_27454)){
var statearr_27556_27624 = state_27508__$1;
(statearr_27556_27624[(1)] = (27));

} else {
var statearr_27557_27625 = state_27508__$1;
(statearr_27557_27625[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27509 === (34))){
var state_27508__$1 = state_27508;
var statearr_27558_27626 = state_27508__$1;
(statearr_27558_27626[(2)] = null);

(statearr_27558_27626[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27509 === (17))){
var state_27508__$1 = state_27508;
var statearr_27559_27627 = state_27508__$1;
(statearr_27559_27627[(2)] = null);

(statearr_27559_27627[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27509 === (3))){
var inst_27506 = (state_27508[(2)]);
var state_27508__$1 = state_27508;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27508__$1,inst_27506);
} else {
if((state_val_27509 === (12))){
var inst_27435 = (state_27508[(2)]);
var state_27508__$1 = state_27508;
var statearr_27560_27628 = state_27508__$1;
(statearr_27560_27628[(2)] = inst_27435);

(statearr_27560_27628[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27509 === (2))){
var state_27508__$1 = state_27508;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27508__$1,(4),ch);
} else {
if((state_val_27509 === (23))){
var state_27508__$1 = state_27508;
var statearr_27561_27629 = state_27508__$1;
(statearr_27561_27629[(2)] = null);

(statearr_27561_27629[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27509 === (35))){
var inst_27490 = (state_27508[(2)]);
var state_27508__$1 = state_27508;
var statearr_27562_27630 = state_27508__$1;
(statearr_27562_27630[(2)] = inst_27490);

(statearr_27562_27630[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27509 === (19))){
var inst_27409 = (state_27508[(7)]);
var inst_27413 = cljs.core.chunk_first.call(null,inst_27409);
var inst_27414 = cljs.core.chunk_rest.call(null,inst_27409);
var inst_27415 = cljs.core.count.call(null,inst_27413);
var inst_27389 = inst_27414;
var inst_27390 = inst_27413;
var inst_27391 = inst_27415;
var inst_27392 = (0);
var state_27508__$1 = (function (){var statearr_27563 = state_27508;
(statearr_27563[(13)] = inst_27391);

(statearr_27563[(15)] = inst_27392);

(statearr_27563[(16)] = inst_27390);

(statearr_27563[(17)] = inst_27389);

return statearr_27563;
})();
var statearr_27564_27631 = state_27508__$1;
(statearr_27564_27631[(2)] = null);

(statearr_27564_27631[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27509 === (11))){
var inst_27389 = (state_27508[(17)]);
var inst_27409 = (state_27508[(7)]);
var inst_27409__$1 = cljs.core.seq.call(null,inst_27389);
var state_27508__$1 = (function (){var statearr_27565 = state_27508;
(statearr_27565[(7)] = inst_27409__$1);

return statearr_27565;
})();
if(inst_27409__$1){
var statearr_27566_27632 = state_27508__$1;
(statearr_27566_27632[(1)] = (16));

} else {
var statearr_27567_27633 = state_27508__$1;
(statearr_27567_27633[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27509 === (9))){
var inst_27437 = (state_27508[(2)]);
var state_27508__$1 = state_27508;
var statearr_27568_27634 = state_27508__$1;
(statearr_27568_27634[(2)] = inst_27437);

(statearr_27568_27634[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27509 === (5))){
var inst_27387 = cljs.core.deref.call(null,cs);
var inst_27388 = cljs.core.seq.call(null,inst_27387);
var inst_27389 = inst_27388;
var inst_27390 = null;
var inst_27391 = (0);
var inst_27392 = (0);
var state_27508__$1 = (function (){var statearr_27569 = state_27508;
(statearr_27569[(13)] = inst_27391);

(statearr_27569[(15)] = inst_27392);

(statearr_27569[(16)] = inst_27390);

(statearr_27569[(17)] = inst_27389);

return statearr_27569;
})();
var statearr_27570_27635 = state_27508__$1;
(statearr_27570_27635[(2)] = null);

(statearr_27570_27635[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27509 === (14))){
var state_27508__$1 = state_27508;
var statearr_27571_27636 = state_27508__$1;
(statearr_27571_27636[(2)] = null);

(statearr_27571_27636[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27509 === (45))){
var inst_27498 = (state_27508[(2)]);
var state_27508__$1 = state_27508;
var statearr_27572_27637 = state_27508__$1;
(statearr_27572_27637[(2)] = inst_27498);

(statearr_27572_27637[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27509 === (26))){
var inst_27440 = (state_27508[(29)]);
var inst_27494 = (state_27508[(2)]);
var inst_27495 = cljs.core.seq.call(null,inst_27440);
var state_27508__$1 = (function (){var statearr_27573 = state_27508;
(statearr_27573[(31)] = inst_27494);

return statearr_27573;
})();
if(inst_27495){
var statearr_27574_27638 = state_27508__$1;
(statearr_27574_27638[(1)] = (42));

} else {
var statearr_27575_27639 = state_27508__$1;
(statearr_27575_27639[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27509 === (16))){
var inst_27409 = (state_27508[(7)]);
var inst_27411 = cljs.core.chunked_seq_QMARK_.call(null,inst_27409);
var state_27508__$1 = state_27508;
if(inst_27411){
var statearr_27576_27640 = state_27508__$1;
(statearr_27576_27640[(1)] = (19));

} else {
var statearr_27577_27641 = state_27508__$1;
(statearr_27577_27641[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27509 === (38))){
var inst_27487 = (state_27508[(2)]);
var state_27508__$1 = state_27508;
var statearr_27578_27642 = state_27508__$1;
(statearr_27578_27642[(2)] = inst_27487);

(statearr_27578_27642[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27509 === (30))){
var state_27508__$1 = state_27508;
var statearr_27579_27643 = state_27508__$1;
(statearr_27579_27643[(2)] = null);

(statearr_27579_27643[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27509 === (10))){
var inst_27392 = (state_27508[(15)]);
var inst_27390 = (state_27508[(16)]);
var inst_27398 = cljs.core._nth.call(null,inst_27390,inst_27392);
var inst_27399 = cljs.core.nth.call(null,inst_27398,(0),null);
var inst_27400 = cljs.core.nth.call(null,inst_27398,(1),null);
var state_27508__$1 = (function (){var statearr_27580 = state_27508;
(statearr_27580[(26)] = inst_27399);

return statearr_27580;
})();
if(cljs.core.truth_(inst_27400)){
var statearr_27581_27644 = state_27508__$1;
(statearr_27581_27644[(1)] = (13));

} else {
var statearr_27582_27645 = state_27508__$1;
(statearr_27582_27645[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27509 === (18))){
var inst_27433 = (state_27508[(2)]);
var state_27508__$1 = state_27508;
var statearr_27583_27646 = state_27508__$1;
(statearr_27583_27646[(2)] = inst_27433);

(statearr_27583_27646[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27509 === (42))){
var state_27508__$1 = state_27508;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27508__$1,(45),dchan);
} else {
if((state_val_27509 === (37))){
var inst_27380 = (state_27508[(10)]);
var inst_27467 = (state_27508[(25)]);
var inst_27476 = (state_27508[(23)]);
var inst_27476__$1 = cljs.core.first.call(null,inst_27467);
var inst_27477 = cljs.core.async.put_BANG_.call(null,inst_27476__$1,inst_27380,done);
var state_27508__$1 = (function (){var statearr_27584 = state_27508;
(statearr_27584[(23)] = inst_27476__$1);

return statearr_27584;
})();
if(cljs.core.truth_(inst_27477)){
var statearr_27585_27647 = state_27508__$1;
(statearr_27585_27647[(1)] = (39));

} else {
var statearr_27586_27648 = state_27508__$1;
(statearr_27586_27648[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27509 === (8))){
var inst_27391 = (state_27508[(13)]);
var inst_27392 = (state_27508[(15)]);
var inst_27394 = (inst_27392 < inst_27391);
var inst_27395 = inst_27394;
var state_27508__$1 = state_27508;
if(cljs.core.truth_(inst_27395)){
var statearr_27587_27649 = state_27508__$1;
(statearr_27587_27649[(1)] = (10));

} else {
var statearr_27588_27650 = state_27508__$1;
(statearr_27588_27650[(1)] = (11));

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
});})(c__22071__auto___27596,cs,m,dchan,dctr,done))
;
return ((function (switch__22009__auto__,c__22071__auto___27596,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__22010__auto__ = null;
var cljs$core$async$mult_$_state_machine__22010__auto____0 = (function (){
var statearr_27592 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27592[(0)] = cljs$core$async$mult_$_state_machine__22010__auto__);

(statearr_27592[(1)] = (1));

return statearr_27592;
});
var cljs$core$async$mult_$_state_machine__22010__auto____1 = (function (state_27508){
while(true){
var ret_value__22011__auto__ = (function (){try{while(true){
var result__22012__auto__ = switch__22009__auto__.call(null,state_27508);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22012__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22012__auto__;
}
break;
}
}catch (e27593){if((e27593 instanceof Object)){
var ex__22013__auto__ = e27593;
var statearr_27594_27651 = state_27508;
(statearr_27594_27651[(5)] = ex__22013__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27508);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27593;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22011__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27652 = state_27508;
state_27508 = G__27652;
continue;
} else {
return ret_value__22011__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__22010__auto__ = function(state_27508){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__22010__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__22010__auto____1.call(this,state_27508);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__22010__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__22010__auto____0;
cljs$core$async$mult_$_state_machine__22010__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__22010__auto____1;
return cljs$core$async$mult_$_state_machine__22010__auto__;
})()
;})(switch__22009__auto__,c__22071__auto___27596,cs,m,dchan,dctr,done))
})();
var state__22073__auto__ = (function (){var statearr_27595 = f__22072__auto__.call(null);
(statearr_27595[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22071__auto___27596);

return statearr_27595;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22073__auto__);
});})(c__22071__auto___27596,cs,m,dchan,dctr,done))
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
var G__27654 = arguments.length;
switch (G__27654) {
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

cljs.core.async.Mix = (function (){var obj27657 = {};
return obj27657;
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

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__27662){
var map__27663 = p__27662;
var map__27663__$1 = ((cljs.core.seq_QMARK_.call(null,map__27663))?cljs.core.apply.call(null,cljs.core.hash_map,map__27663):map__27663);
var opts = map__27663__$1;
var statearr_27664_27667 = state;
(statearr_27664_27667[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4126__auto__ = cljs.core.async.do_alts.call(null,((function (map__27663,map__27663__$1,opts){
return (function (val){
var statearr_27665_27668 = state;
(statearr_27665_27668[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__27663,map__27663__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4126__auto__)){
var cb = temp__4126__auto__;
var statearr_27666_27669 = state;
(statearr_27666_27669[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq27658){
var G__27659 = cljs.core.first.call(null,seq27658);
var seq27658__$1 = cljs.core.next.call(null,seq27658);
var G__27660 = cljs.core.first.call(null,seq27658__$1);
var seq27658__$2 = cljs.core.next.call(null,seq27658__$1);
var G__27661 = cljs.core.first.call(null,seq27658__$2);
var seq27658__$3 = cljs.core.next.call(null,seq27658__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__27659,G__27660,G__27661,seq27658__$3);
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
if(typeof cljs.core.async.t27789 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t27789 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta27790){
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
this.meta27790 = meta27790;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t27789.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t27789.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t27789.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t27789.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t27789.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t27789.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
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

cljs.core.async.t27789.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t27789.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t27789.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_27791){
var self__ = this;
var _27791__$1 = this;
return self__.meta27790;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t27789.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_27791,meta27790__$1){
var self__ = this;
var _27791__$1 = this;
return (new cljs.core.async.t27789(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta27790__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t27789.cljs$lang$type = true;

cljs.core.async.t27789.cljs$lang$ctorStr = "cljs.core.async/t27789";

cljs.core.async.t27789.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__18739__auto__,writer__18740__auto__,opt__18741__auto__){
return cljs.core._write.call(null,writer__18740__auto__,"cljs.core.async/t27789");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t27789 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t27789(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta27790){
return (new cljs.core.async.t27789(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta27790));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t27789(change,cljs$core$async$mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__22071__auto___27908 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22071__auto___27908,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__22072__auto__ = (function (){var switch__22009__auto__ = ((function (c__22071__auto___27908,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_27861){
var state_val_27862 = (state_27861[(1)]);
if((state_val_27862 === (7))){
var inst_27805 = (state_27861[(7)]);
var inst_27810 = cljs.core.apply.call(null,cljs.core.hash_map,inst_27805);
var state_27861__$1 = state_27861;
var statearr_27863_27909 = state_27861__$1;
(statearr_27863_27909[(2)] = inst_27810);

(statearr_27863_27909[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27862 === (20))){
var inst_27820 = (state_27861[(8)]);
var state_27861__$1 = state_27861;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27861__$1,(23),out,inst_27820);
} else {
if((state_val_27862 === (1))){
var inst_27795 = (state_27861[(9)]);
var inst_27795__$1 = calc_state.call(null);
var inst_27796 = cljs.core.seq_QMARK_.call(null,inst_27795__$1);
var state_27861__$1 = (function (){var statearr_27864 = state_27861;
(statearr_27864[(9)] = inst_27795__$1);

return statearr_27864;
})();
if(inst_27796){
var statearr_27865_27910 = state_27861__$1;
(statearr_27865_27910[(1)] = (2));

} else {
var statearr_27866_27911 = state_27861__$1;
(statearr_27866_27911[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27862 === (24))){
var inst_27813 = (state_27861[(10)]);
var inst_27805 = inst_27813;
var state_27861__$1 = (function (){var statearr_27867 = state_27861;
(statearr_27867[(7)] = inst_27805);

return statearr_27867;
})();
var statearr_27868_27912 = state_27861__$1;
(statearr_27868_27912[(2)] = null);

(statearr_27868_27912[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27862 === (4))){
var inst_27795 = (state_27861[(9)]);
var inst_27801 = (state_27861[(2)]);
var inst_27802 = cljs.core.get.call(null,inst_27801,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_27803 = cljs.core.get.call(null,inst_27801,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_27804 = cljs.core.get.call(null,inst_27801,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_27805 = inst_27795;
var state_27861__$1 = (function (){var statearr_27869 = state_27861;
(statearr_27869[(11)] = inst_27804);

(statearr_27869[(12)] = inst_27802);

(statearr_27869[(7)] = inst_27805);

(statearr_27869[(13)] = inst_27803);

return statearr_27869;
})();
var statearr_27870_27913 = state_27861__$1;
(statearr_27870_27913[(2)] = null);

(statearr_27870_27913[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27862 === (15))){
var state_27861__$1 = state_27861;
var statearr_27871_27914 = state_27861__$1;
(statearr_27871_27914[(2)] = null);

(statearr_27871_27914[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27862 === (21))){
var inst_27813 = (state_27861[(10)]);
var inst_27805 = inst_27813;
var state_27861__$1 = (function (){var statearr_27872 = state_27861;
(statearr_27872[(7)] = inst_27805);

return statearr_27872;
})();
var statearr_27873_27915 = state_27861__$1;
(statearr_27873_27915[(2)] = null);

(statearr_27873_27915[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27862 === (13))){
var inst_27857 = (state_27861[(2)]);
var state_27861__$1 = state_27861;
var statearr_27874_27916 = state_27861__$1;
(statearr_27874_27916[(2)] = inst_27857);

(statearr_27874_27916[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27862 === (22))){
var inst_27855 = (state_27861[(2)]);
var state_27861__$1 = state_27861;
var statearr_27875_27917 = state_27861__$1;
(statearr_27875_27917[(2)] = inst_27855);

(statearr_27875_27917[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27862 === (6))){
var inst_27859 = (state_27861[(2)]);
var state_27861__$1 = state_27861;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27861__$1,inst_27859);
} else {
if((state_val_27862 === (25))){
var state_27861__$1 = state_27861;
var statearr_27876_27918 = state_27861__$1;
(statearr_27876_27918[(2)] = null);

(statearr_27876_27918[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27862 === (17))){
var inst_27835 = (state_27861[(14)]);
var state_27861__$1 = state_27861;
var statearr_27877_27919 = state_27861__$1;
(statearr_27877_27919[(2)] = inst_27835);

(statearr_27877_27919[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27862 === (3))){
var inst_27795 = (state_27861[(9)]);
var state_27861__$1 = state_27861;
var statearr_27878_27920 = state_27861__$1;
(statearr_27878_27920[(2)] = inst_27795);

(statearr_27878_27920[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27862 === (12))){
var inst_27821 = (state_27861[(15)]);
var inst_27816 = (state_27861[(16)]);
var inst_27835 = (state_27861[(14)]);
var inst_27835__$1 = inst_27816.call(null,inst_27821);
var state_27861__$1 = (function (){var statearr_27879 = state_27861;
(statearr_27879[(14)] = inst_27835__$1);

return statearr_27879;
})();
if(cljs.core.truth_(inst_27835__$1)){
var statearr_27880_27921 = state_27861__$1;
(statearr_27880_27921[(1)] = (17));

} else {
var statearr_27881_27922 = state_27861__$1;
(statearr_27881_27922[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27862 === (2))){
var inst_27795 = (state_27861[(9)]);
var inst_27798 = cljs.core.apply.call(null,cljs.core.hash_map,inst_27795);
var state_27861__$1 = state_27861;
var statearr_27882_27923 = state_27861__$1;
(statearr_27882_27923[(2)] = inst_27798);

(statearr_27882_27923[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27862 === (23))){
var inst_27846 = (state_27861[(2)]);
var state_27861__$1 = state_27861;
if(cljs.core.truth_(inst_27846)){
var statearr_27883_27924 = state_27861__$1;
(statearr_27883_27924[(1)] = (24));

} else {
var statearr_27884_27925 = state_27861__$1;
(statearr_27884_27925[(1)] = (25));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27862 === (19))){
var inst_27843 = (state_27861[(2)]);
var state_27861__$1 = state_27861;
if(cljs.core.truth_(inst_27843)){
var statearr_27885_27926 = state_27861__$1;
(statearr_27885_27926[(1)] = (20));

} else {
var statearr_27886_27927 = state_27861__$1;
(statearr_27886_27927[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27862 === (11))){
var inst_27820 = (state_27861[(8)]);
var inst_27826 = (inst_27820 == null);
var state_27861__$1 = state_27861;
if(cljs.core.truth_(inst_27826)){
var statearr_27887_27928 = state_27861__$1;
(statearr_27887_27928[(1)] = (14));

} else {
var statearr_27888_27929 = state_27861__$1;
(statearr_27888_27929[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27862 === (9))){
var inst_27813 = (state_27861[(10)]);
var inst_27813__$1 = (state_27861[(2)]);
var inst_27814 = cljs.core.get.call(null,inst_27813__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_27815 = cljs.core.get.call(null,inst_27813__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_27816 = cljs.core.get.call(null,inst_27813__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var state_27861__$1 = (function (){var statearr_27889 = state_27861;
(statearr_27889[(10)] = inst_27813__$1);

(statearr_27889[(17)] = inst_27815);

(statearr_27889[(16)] = inst_27816);

return statearr_27889;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_27861__$1,(10),inst_27814);
} else {
if((state_val_27862 === (5))){
var inst_27805 = (state_27861[(7)]);
var inst_27808 = cljs.core.seq_QMARK_.call(null,inst_27805);
var state_27861__$1 = state_27861;
if(inst_27808){
var statearr_27890_27930 = state_27861__$1;
(statearr_27890_27930[(1)] = (7));

} else {
var statearr_27891_27931 = state_27861__$1;
(statearr_27891_27931[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27862 === (14))){
var inst_27821 = (state_27861[(15)]);
var inst_27828 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_27821);
var state_27861__$1 = state_27861;
var statearr_27892_27932 = state_27861__$1;
(statearr_27892_27932[(2)] = inst_27828);

(statearr_27892_27932[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27862 === (26))){
var inst_27851 = (state_27861[(2)]);
var state_27861__$1 = state_27861;
var statearr_27893_27933 = state_27861__$1;
(statearr_27893_27933[(2)] = inst_27851);

(statearr_27893_27933[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27862 === (16))){
var inst_27831 = (state_27861[(2)]);
var inst_27832 = calc_state.call(null);
var inst_27805 = inst_27832;
var state_27861__$1 = (function (){var statearr_27894 = state_27861;
(statearr_27894[(7)] = inst_27805);

(statearr_27894[(18)] = inst_27831);

return statearr_27894;
})();
var statearr_27895_27934 = state_27861__$1;
(statearr_27895_27934[(2)] = null);

(statearr_27895_27934[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27862 === (10))){
var inst_27820 = (state_27861[(8)]);
var inst_27821 = (state_27861[(15)]);
var inst_27819 = (state_27861[(2)]);
var inst_27820__$1 = cljs.core.nth.call(null,inst_27819,(0),null);
var inst_27821__$1 = cljs.core.nth.call(null,inst_27819,(1),null);
var inst_27822 = (inst_27820__$1 == null);
var inst_27823 = cljs.core._EQ_.call(null,inst_27821__$1,change);
var inst_27824 = (inst_27822) || (inst_27823);
var state_27861__$1 = (function (){var statearr_27896 = state_27861;
(statearr_27896[(8)] = inst_27820__$1);

(statearr_27896[(15)] = inst_27821__$1);

return statearr_27896;
})();
if(cljs.core.truth_(inst_27824)){
var statearr_27897_27935 = state_27861__$1;
(statearr_27897_27935[(1)] = (11));

} else {
var statearr_27898_27936 = state_27861__$1;
(statearr_27898_27936[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27862 === (18))){
var inst_27821 = (state_27861[(15)]);
var inst_27815 = (state_27861[(17)]);
var inst_27816 = (state_27861[(16)]);
var inst_27838 = cljs.core.empty_QMARK_.call(null,inst_27816);
var inst_27839 = inst_27815.call(null,inst_27821);
var inst_27840 = cljs.core.not.call(null,inst_27839);
var inst_27841 = (inst_27838) && (inst_27840);
var state_27861__$1 = state_27861;
var statearr_27899_27937 = state_27861__$1;
(statearr_27899_27937[(2)] = inst_27841);

(statearr_27899_27937[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27862 === (8))){
var inst_27805 = (state_27861[(7)]);
var state_27861__$1 = state_27861;
var statearr_27900_27938 = state_27861__$1;
(statearr_27900_27938[(2)] = inst_27805);

(statearr_27900_27938[(1)] = (9));


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
});})(c__22071__auto___27908,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__22009__auto__,c__22071__auto___27908,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__22010__auto__ = null;
var cljs$core$async$mix_$_state_machine__22010__auto____0 = (function (){
var statearr_27904 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27904[(0)] = cljs$core$async$mix_$_state_machine__22010__auto__);

(statearr_27904[(1)] = (1));

return statearr_27904;
});
var cljs$core$async$mix_$_state_machine__22010__auto____1 = (function (state_27861){
while(true){
var ret_value__22011__auto__ = (function (){try{while(true){
var result__22012__auto__ = switch__22009__auto__.call(null,state_27861);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22012__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22012__auto__;
}
break;
}
}catch (e27905){if((e27905 instanceof Object)){
var ex__22013__auto__ = e27905;
var statearr_27906_27939 = state_27861;
(statearr_27906_27939[(5)] = ex__22013__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27861);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27905;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22011__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27940 = state_27861;
state_27861 = G__27940;
continue;
} else {
return ret_value__22011__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__22010__auto__ = function(state_27861){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__22010__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__22010__auto____1.call(this,state_27861);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__22010__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__22010__auto____0;
cljs$core$async$mix_$_state_machine__22010__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__22010__auto____1;
return cljs$core$async$mix_$_state_machine__22010__auto__;
})()
;})(switch__22009__auto__,c__22071__auto___27908,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__22073__auto__ = (function (){var statearr_27907 = f__22072__auto__.call(null);
(statearr_27907[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22071__auto___27908);

return statearr_27907;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22073__auto__);
});})(c__22071__auto___27908,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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

cljs.core.async.Pub = (function (){var obj27942 = {};
return obj27942;
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
var G__27944 = arguments.length;
switch (G__27944) {
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
var G__27948 = arguments.length;
switch (G__27948) {
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
return (function (p1__27946_SHARP_){
if(cljs.core.truth_(p1__27946_SHARP_.call(null,topic))){
return p1__27946_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__27946_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__18160__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t27949 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t27949 = (function (ensure_mult,mults,buf_fn,topic_fn,ch,meta27950){
this.ensure_mult = ensure_mult;
this.mults = mults;
this.buf_fn = buf_fn;
this.topic_fn = topic_fn;
this.ch = ch;
this.meta27950 = meta27950;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t27949.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t27949.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t27949.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
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

cljs.core.async.t27949.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t27949.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t27949.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t27949.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t27949.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_27951){
var self__ = this;
var _27951__$1 = this;
return self__.meta27950;
});})(mults,ensure_mult))
;

cljs.core.async.t27949.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_27951,meta27950__$1){
var self__ = this;
var _27951__$1 = this;
return (new cljs.core.async.t27949(self__.ensure_mult,self__.mults,self__.buf_fn,self__.topic_fn,self__.ch,meta27950__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t27949.cljs$lang$type = true;

cljs.core.async.t27949.cljs$lang$ctorStr = "cljs.core.async/t27949";

cljs.core.async.t27949.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__18739__auto__,writer__18740__auto__,opt__18741__auto__){
return cljs.core._write.call(null,writer__18740__auto__,"cljs.core.async/t27949");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t27949 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t27949(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,meta27950){
return (new cljs.core.async.t27949(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,meta27950));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t27949(ensure_mult,mults,buf_fn,topic_fn,ch,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__22071__auto___28072 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22071__auto___28072,mults,ensure_mult,p){
return (function (){
var f__22072__auto__ = (function (){var switch__22009__auto__ = ((function (c__22071__auto___28072,mults,ensure_mult,p){
return (function (state_28023){
var state_val_28024 = (state_28023[(1)]);
if((state_val_28024 === (7))){
var inst_28019 = (state_28023[(2)]);
var state_28023__$1 = state_28023;
var statearr_28025_28073 = state_28023__$1;
(statearr_28025_28073[(2)] = inst_28019);

(statearr_28025_28073[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28024 === (20))){
var state_28023__$1 = state_28023;
var statearr_28026_28074 = state_28023__$1;
(statearr_28026_28074[(2)] = null);

(statearr_28026_28074[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28024 === (1))){
var state_28023__$1 = state_28023;
var statearr_28027_28075 = state_28023__$1;
(statearr_28027_28075[(2)] = null);

(statearr_28027_28075[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28024 === (24))){
var inst_28002 = (state_28023[(7)]);
var inst_28011 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_28002);
var state_28023__$1 = state_28023;
var statearr_28028_28076 = state_28023__$1;
(statearr_28028_28076[(2)] = inst_28011);

(statearr_28028_28076[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28024 === (4))){
var inst_27954 = (state_28023[(8)]);
var inst_27954__$1 = (state_28023[(2)]);
var inst_27955 = (inst_27954__$1 == null);
var state_28023__$1 = (function (){var statearr_28029 = state_28023;
(statearr_28029[(8)] = inst_27954__$1);

return statearr_28029;
})();
if(cljs.core.truth_(inst_27955)){
var statearr_28030_28077 = state_28023__$1;
(statearr_28030_28077[(1)] = (5));

} else {
var statearr_28031_28078 = state_28023__$1;
(statearr_28031_28078[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28024 === (15))){
var inst_27996 = (state_28023[(2)]);
var state_28023__$1 = state_28023;
var statearr_28032_28079 = state_28023__$1;
(statearr_28032_28079[(2)] = inst_27996);

(statearr_28032_28079[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28024 === (21))){
var inst_28016 = (state_28023[(2)]);
var state_28023__$1 = (function (){var statearr_28033 = state_28023;
(statearr_28033[(9)] = inst_28016);

return statearr_28033;
})();
var statearr_28034_28080 = state_28023__$1;
(statearr_28034_28080[(2)] = null);

(statearr_28034_28080[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28024 === (13))){
var inst_27978 = (state_28023[(10)]);
var inst_27980 = cljs.core.chunked_seq_QMARK_.call(null,inst_27978);
var state_28023__$1 = state_28023;
if(inst_27980){
var statearr_28035_28081 = state_28023__$1;
(statearr_28035_28081[(1)] = (16));

} else {
var statearr_28036_28082 = state_28023__$1;
(statearr_28036_28082[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28024 === (22))){
var inst_28008 = (state_28023[(2)]);
var state_28023__$1 = state_28023;
if(cljs.core.truth_(inst_28008)){
var statearr_28037_28083 = state_28023__$1;
(statearr_28037_28083[(1)] = (23));

} else {
var statearr_28038_28084 = state_28023__$1;
(statearr_28038_28084[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28024 === (6))){
var inst_28002 = (state_28023[(7)]);
var inst_28004 = (state_28023[(11)]);
var inst_27954 = (state_28023[(8)]);
var inst_28002__$1 = topic_fn.call(null,inst_27954);
var inst_28003 = cljs.core.deref.call(null,mults);
var inst_28004__$1 = cljs.core.get.call(null,inst_28003,inst_28002__$1);
var state_28023__$1 = (function (){var statearr_28039 = state_28023;
(statearr_28039[(7)] = inst_28002__$1);

(statearr_28039[(11)] = inst_28004__$1);

return statearr_28039;
})();
if(cljs.core.truth_(inst_28004__$1)){
var statearr_28040_28085 = state_28023__$1;
(statearr_28040_28085[(1)] = (19));

} else {
var statearr_28041_28086 = state_28023__$1;
(statearr_28041_28086[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28024 === (25))){
var inst_28013 = (state_28023[(2)]);
var state_28023__$1 = state_28023;
var statearr_28042_28087 = state_28023__$1;
(statearr_28042_28087[(2)] = inst_28013);

(statearr_28042_28087[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28024 === (17))){
var inst_27978 = (state_28023[(10)]);
var inst_27987 = cljs.core.first.call(null,inst_27978);
var inst_27988 = cljs.core.async.muxch_STAR_.call(null,inst_27987);
var inst_27989 = cljs.core.async.close_BANG_.call(null,inst_27988);
var inst_27990 = cljs.core.next.call(null,inst_27978);
var inst_27964 = inst_27990;
var inst_27965 = null;
var inst_27966 = (0);
var inst_27967 = (0);
var state_28023__$1 = (function (){var statearr_28043 = state_28023;
(statearr_28043[(12)] = inst_27989);

(statearr_28043[(13)] = inst_27966);

(statearr_28043[(14)] = inst_27965);

(statearr_28043[(15)] = inst_27967);

(statearr_28043[(16)] = inst_27964);

return statearr_28043;
})();
var statearr_28044_28088 = state_28023__$1;
(statearr_28044_28088[(2)] = null);

(statearr_28044_28088[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28024 === (3))){
var inst_28021 = (state_28023[(2)]);
var state_28023__$1 = state_28023;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28023__$1,inst_28021);
} else {
if((state_val_28024 === (12))){
var inst_27998 = (state_28023[(2)]);
var state_28023__$1 = state_28023;
var statearr_28045_28089 = state_28023__$1;
(statearr_28045_28089[(2)] = inst_27998);

(statearr_28045_28089[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28024 === (2))){
var state_28023__$1 = state_28023;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28023__$1,(4),ch);
} else {
if((state_val_28024 === (23))){
var state_28023__$1 = state_28023;
var statearr_28046_28090 = state_28023__$1;
(statearr_28046_28090[(2)] = null);

(statearr_28046_28090[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28024 === (19))){
var inst_28004 = (state_28023[(11)]);
var inst_27954 = (state_28023[(8)]);
var inst_28006 = cljs.core.async.muxch_STAR_.call(null,inst_28004);
var state_28023__$1 = state_28023;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28023__$1,(22),inst_28006,inst_27954);
} else {
if((state_val_28024 === (11))){
var inst_27978 = (state_28023[(10)]);
var inst_27964 = (state_28023[(16)]);
var inst_27978__$1 = cljs.core.seq.call(null,inst_27964);
var state_28023__$1 = (function (){var statearr_28047 = state_28023;
(statearr_28047[(10)] = inst_27978__$1);

return statearr_28047;
})();
if(inst_27978__$1){
var statearr_28048_28091 = state_28023__$1;
(statearr_28048_28091[(1)] = (13));

} else {
var statearr_28049_28092 = state_28023__$1;
(statearr_28049_28092[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28024 === (9))){
var inst_28000 = (state_28023[(2)]);
var state_28023__$1 = state_28023;
var statearr_28050_28093 = state_28023__$1;
(statearr_28050_28093[(2)] = inst_28000);

(statearr_28050_28093[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28024 === (5))){
var inst_27961 = cljs.core.deref.call(null,mults);
var inst_27962 = cljs.core.vals.call(null,inst_27961);
var inst_27963 = cljs.core.seq.call(null,inst_27962);
var inst_27964 = inst_27963;
var inst_27965 = null;
var inst_27966 = (0);
var inst_27967 = (0);
var state_28023__$1 = (function (){var statearr_28051 = state_28023;
(statearr_28051[(13)] = inst_27966);

(statearr_28051[(14)] = inst_27965);

(statearr_28051[(15)] = inst_27967);

(statearr_28051[(16)] = inst_27964);

return statearr_28051;
})();
var statearr_28052_28094 = state_28023__$1;
(statearr_28052_28094[(2)] = null);

(statearr_28052_28094[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28024 === (14))){
var state_28023__$1 = state_28023;
var statearr_28056_28095 = state_28023__$1;
(statearr_28056_28095[(2)] = null);

(statearr_28056_28095[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28024 === (16))){
var inst_27978 = (state_28023[(10)]);
var inst_27982 = cljs.core.chunk_first.call(null,inst_27978);
var inst_27983 = cljs.core.chunk_rest.call(null,inst_27978);
var inst_27984 = cljs.core.count.call(null,inst_27982);
var inst_27964 = inst_27983;
var inst_27965 = inst_27982;
var inst_27966 = inst_27984;
var inst_27967 = (0);
var state_28023__$1 = (function (){var statearr_28057 = state_28023;
(statearr_28057[(13)] = inst_27966);

(statearr_28057[(14)] = inst_27965);

(statearr_28057[(15)] = inst_27967);

(statearr_28057[(16)] = inst_27964);

return statearr_28057;
})();
var statearr_28058_28096 = state_28023__$1;
(statearr_28058_28096[(2)] = null);

(statearr_28058_28096[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28024 === (10))){
var inst_27966 = (state_28023[(13)]);
var inst_27965 = (state_28023[(14)]);
var inst_27967 = (state_28023[(15)]);
var inst_27964 = (state_28023[(16)]);
var inst_27972 = cljs.core._nth.call(null,inst_27965,inst_27967);
var inst_27973 = cljs.core.async.muxch_STAR_.call(null,inst_27972);
var inst_27974 = cljs.core.async.close_BANG_.call(null,inst_27973);
var inst_27975 = (inst_27967 + (1));
var tmp28053 = inst_27966;
var tmp28054 = inst_27965;
var tmp28055 = inst_27964;
var inst_27964__$1 = tmp28055;
var inst_27965__$1 = tmp28054;
var inst_27966__$1 = tmp28053;
var inst_27967__$1 = inst_27975;
var state_28023__$1 = (function (){var statearr_28059 = state_28023;
(statearr_28059[(13)] = inst_27966__$1);

(statearr_28059[(17)] = inst_27974);

(statearr_28059[(14)] = inst_27965__$1);

(statearr_28059[(15)] = inst_27967__$1);

(statearr_28059[(16)] = inst_27964__$1);

return statearr_28059;
})();
var statearr_28060_28097 = state_28023__$1;
(statearr_28060_28097[(2)] = null);

(statearr_28060_28097[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28024 === (18))){
var inst_27993 = (state_28023[(2)]);
var state_28023__$1 = state_28023;
var statearr_28061_28098 = state_28023__$1;
(statearr_28061_28098[(2)] = inst_27993);

(statearr_28061_28098[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28024 === (8))){
var inst_27966 = (state_28023[(13)]);
var inst_27967 = (state_28023[(15)]);
var inst_27969 = (inst_27967 < inst_27966);
var inst_27970 = inst_27969;
var state_28023__$1 = state_28023;
if(cljs.core.truth_(inst_27970)){
var statearr_28062_28099 = state_28023__$1;
(statearr_28062_28099[(1)] = (10));

} else {
var statearr_28063_28100 = state_28023__$1;
(statearr_28063_28100[(1)] = (11));

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
});})(c__22071__auto___28072,mults,ensure_mult,p))
;
return ((function (switch__22009__auto__,c__22071__auto___28072,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__22010__auto__ = null;
var cljs$core$async$state_machine__22010__auto____0 = (function (){
var statearr_28067 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28067[(0)] = cljs$core$async$state_machine__22010__auto__);

(statearr_28067[(1)] = (1));

return statearr_28067;
});
var cljs$core$async$state_machine__22010__auto____1 = (function (state_28023){
while(true){
var ret_value__22011__auto__ = (function (){try{while(true){
var result__22012__auto__ = switch__22009__auto__.call(null,state_28023);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22012__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22012__auto__;
}
break;
}
}catch (e28068){if((e28068 instanceof Object)){
var ex__22013__auto__ = e28068;
var statearr_28069_28101 = state_28023;
(statearr_28069_28101[(5)] = ex__22013__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28023);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28068;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22011__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28102 = state_28023;
state_28023 = G__28102;
continue;
} else {
return ret_value__22011__auto__;
}
break;
}
});
cljs$core$async$state_machine__22010__auto__ = function(state_28023){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__22010__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__22010__auto____1.call(this,state_28023);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__22010__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__22010__auto____0;
cljs$core$async$state_machine__22010__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__22010__auto____1;
return cljs$core$async$state_machine__22010__auto__;
})()
;})(switch__22009__auto__,c__22071__auto___28072,mults,ensure_mult,p))
})();
var state__22073__auto__ = (function (){var statearr_28070 = f__22072__auto__.call(null);
(statearr_28070[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22071__auto___28072);

return statearr_28070;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22073__auto__);
});})(c__22071__auto___28072,mults,ensure_mult,p))
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
var G__28104 = arguments.length;
switch (G__28104) {
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
var G__28107 = arguments.length;
switch (G__28107) {
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
var G__28110 = arguments.length;
switch (G__28110) {
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
var c__22071__auto___28180 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22071__auto___28180,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__22072__auto__ = (function (){var switch__22009__auto__ = ((function (c__22071__auto___28180,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_28149){
var state_val_28150 = (state_28149[(1)]);
if((state_val_28150 === (7))){
var state_28149__$1 = state_28149;
var statearr_28151_28181 = state_28149__$1;
(statearr_28151_28181[(2)] = null);

(statearr_28151_28181[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28150 === (1))){
var state_28149__$1 = state_28149;
var statearr_28152_28182 = state_28149__$1;
(statearr_28152_28182[(2)] = null);

(statearr_28152_28182[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28150 === (4))){
var inst_28113 = (state_28149[(7)]);
var inst_28115 = (inst_28113 < cnt);
var state_28149__$1 = state_28149;
if(cljs.core.truth_(inst_28115)){
var statearr_28153_28183 = state_28149__$1;
(statearr_28153_28183[(1)] = (6));

} else {
var statearr_28154_28184 = state_28149__$1;
(statearr_28154_28184[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28150 === (15))){
var inst_28145 = (state_28149[(2)]);
var state_28149__$1 = state_28149;
var statearr_28155_28185 = state_28149__$1;
(statearr_28155_28185[(2)] = inst_28145);

(statearr_28155_28185[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28150 === (13))){
var inst_28138 = cljs.core.async.close_BANG_.call(null,out);
var state_28149__$1 = state_28149;
var statearr_28156_28186 = state_28149__$1;
(statearr_28156_28186[(2)] = inst_28138);

(statearr_28156_28186[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28150 === (6))){
var state_28149__$1 = state_28149;
var statearr_28157_28187 = state_28149__$1;
(statearr_28157_28187[(2)] = null);

(statearr_28157_28187[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28150 === (3))){
var inst_28147 = (state_28149[(2)]);
var state_28149__$1 = state_28149;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28149__$1,inst_28147);
} else {
if((state_val_28150 === (12))){
var inst_28135 = (state_28149[(8)]);
var inst_28135__$1 = (state_28149[(2)]);
var inst_28136 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_28135__$1);
var state_28149__$1 = (function (){var statearr_28158 = state_28149;
(statearr_28158[(8)] = inst_28135__$1);

return statearr_28158;
})();
if(cljs.core.truth_(inst_28136)){
var statearr_28159_28188 = state_28149__$1;
(statearr_28159_28188[(1)] = (13));

} else {
var statearr_28160_28189 = state_28149__$1;
(statearr_28160_28189[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28150 === (2))){
var inst_28112 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_28113 = (0);
var state_28149__$1 = (function (){var statearr_28161 = state_28149;
(statearr_28161[(9)] = inst_28112);

(statearr_28161[(7)] = inst_28113);

return statearr_28161;
})();
var statearr_28162_28190 = state_28149__$1;
(statearr_28162_28190[(2)] = null);

(statearr_28162_28190[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28150 === (11))){
var inst_28113 = (state_28149[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_28149,(10),Object,null,(9));
var inst_28122 = chs__$1.call(null,inst_28113);
var inst_28123 = done.call(null,inst_28113);
var inst_28124 = cljs.core.async.take_BANG_.call(null,inst_28122,inst_28123);
var state_28149__$1 = state_28149;
var statearr_28163_28191 = state_28149__$1;
(statearr_28163_28191[(2)] = inst_28124);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28149__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28150 === (9))){
var inst_28113 = (state_28149[(7)]);
var inst_28126 = (state_28149[(2)]);
var inst_28127 = (inst_28113 + (1));
var inst_28113__$1 = inst_28127;
var state_28149__$1 = (function (){var statearr_28164 = state_28149;
(statearr_28164[(10)] = inst_28126);

(statearr_28164[(7)] = inst_28113__$1);

return statearr_28164;
})();
var statearr_28165_28192 = state_28149__$1;
(statearr_28165_28192[(2)] = null);

(statearr_28165_28192[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28150 === (5))){
var inst_28133 = (state_28149[(2)]);
var state_28149__$1 = (function (){var statearr_28166 = state_28149;
(statearr_28166[(11)] = inst_28133);

return statearr_28166;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28149__$1,(12),dchan);
} else {
if((state_val_28150 === (14))){
var inst_28135 = (state_28149[(8)]);
var inst_28140 = cljs.core.apply.call(null,f,inst_28135);
var state_28149__$1 = state_28149;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28149__$1,(16),out,inst_28140);
} else {
if((state_val_28150 === (16))){
var inst_28142 = (state_28149[(2)]);
var state_28149__$1 = (function (){var statearr_28167 = state_28149;
(statearr_28167[(12)] = inst_28142);

return statearr_28167;
})();
var statearr_28168_28193 = state_28149__$1;
(statearr_28168_28193[(2)] = null);

(statearr_28168_28193[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28150 === (10))){
var inst_28117 = (state_28149[(2)]);
var inst_28118 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_28149__$1 = (function (){var statearr_28169 = state_28149;
(statearr_28169[(13)] = inst_28117);

return statearr_28169;
})();
var statearr_28170_28194 = state_28149__$1;
(statearr_28170_28194[(2)] = inst_28118);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28149__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28150 === (8))){
var inst_28131 = (state_28149[(2)]);
var state_28149__$1 = state_28149;
var statearr_28171_28195 = state_28149__$1;
(statearr_28171_28195[(2)] = inst_28131);

(statearr_28171_28195[(1)] = (5));


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
});})(c__22071__auto___28180,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__22009__auto__,c__22071__auto___28180,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__22010__auto__ = null;
var cljs$core$async$state_machine__22010__auto____0 = (function (){
var statearr_28175 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28175[(0)] = cljs$core$async$state_machine__22010__auto__);

(statearr_28175[(1)] = (1));

return statearr_28175;
});
var cljs$core$async$state_machine__22010__auto____1 = (function (state_28149){
while(true){
var ret_value__22011__auto__ = (function (){try{while(true){
var result__22012__auto__ = switch__22009__auto__.call(null,state_28149);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22012__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22012__auto__;
}
break;
}
}catch (e28176){if((e28176 instanceof Object)){
var ex__22013__auto__ = e28176;
var statearr_28177_28196 = state_28149;
(statearr_28177_28196[(5)] = ex__22013__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28149);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28176;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22011__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28197 = state_28149;
state_28149 = G__28197;
continue;
} else {
return ret_value__22011__auto__;
}
break;
}
});
cljs$core$async$state_machine__22010__auto__ = function(state_28149){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__22010__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__22010__auto____1.call(this,state_28149);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__22010__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__22010__auto____0;
cljs$core$async$state_machine__22010__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__22010__auto____1;
return cljs$core$async$state_machine__22010__auto__;
})()
;})(switch__22009__auto__,c__22071__auto___28180,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__22073__auto__ = (function (){var statearr_28178 = f__22072__auto__.call(null);
(statearr_28178[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22071__auto___28180);

return statearr_28178;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22073__auto__);
});})(c__22071__auto___28180,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var G__28200 = arguments.length;
switch (G__28200) {
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
var c__22071__auto___28255 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22071__auto___28255,out){
return (function (){
var f__22072__auto__ = (function (){var switch__22009__auto__ = ((function (c__22071__auto___28255,out){
return (function (state_28230){
var state_val_28231 = (state_28230[(1)]);
if((state_val_28231 === (7))){
var inst_28209 = (state_28230[(7)]);
var inst_28210 = (state_28230[(8)]);
var inst_28209__$1 = (state_28230[(2)]);
var inst_28210__$1 = cljs.core.nth.call(null,inst_28209__$1,(0),null);
var inst_28211 = cljs.core.nth.call(null,inst_28209__$1,(1),null);
var inst_28212 = (inst_28210__$1 == null);
var state_28230__$1 = (function (){var statearr_28232 = state_28230;
(statearr_28232[(7)] = inst_28209__$1);

(statearr_28232[(9)] = inst_28211);

(statearr_28232[(8)] = inst_28210__$1);

return statearr_28232;
})();
if(cljs.core.truth_(inst_28212)){
var statearr_28233_28256 = state_28230__$1;
(statearr_28233_28256[(1)] = (8));

} else {
var statearr_28234_28257 = state_28230__$1;
(statearr_28234_28257[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28231 === (1))){
var inst_28201 = cljs.core.vec.call(null,chs);
var inst_28202 = inst_28201;
var state_28230__$1 = (function (){var statearr_28235 = state_28230;
(statearr_28235[(10)] = inst_28202);

return statearr_28235;
})();
var statearr_28236_28258 = state_28230__$1;
(statearr_28236_28258[(2)] = null);

(statearr_28236_28258[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28231 === (4))){
var inst_28202 = (state_28230[(10)]);
var state_28230__$1 = state_28230;
return cljs.core.async.ioc_alts_BANG_.call(null,state_28230__$1,(7),inst_28202);
} else {
if((state_val_28231 === (6))){
var inst_28226 = (state_28230[(2)]);
var state_28230__$1 = state_28230;
var statearr_28237_28259 = state_28230__$1;
(statearr_28237_28259[(2)] = inst_28226);

(statearr_28237_28259[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28231 === (3))){
var inst_28228 = (state_28230[(2)]);
var state_28230__$1 = state_28230;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28230__$1,inst_28228);
} else {
if((state_val_28231 === (2))){
var inst_28202 = (state_28230[(10)]);
var inst_28204 = cljs.core.count.call(null,inst_28202);
var inst_28205 = (inst_28204 > (0));
var state_28230__$1 = state_28230;
if(cljs.core.truth_(inst_28205)){
var statearr_28239_28260 = state_28230__$1;
(statearr_28239_28260[(1)] = (4));

} else {
var statearr_28240_28261 = state_28230__$1;
(statearr_28240_28261[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28231 === (11))){
var inst_28202 = (state_28230[(10)]);
var inst_28219 = (state_28230[(2)]);
var tmp28238 = inst_28202;
var inst_28202__$1 = tmp28238;
var state_28230__$1 = (function (){var statearr_28241 = state_28230;
(statearr_28241[(11)] = inst_28219);

(statearr_28241[(10)] = inst_28202__$1);

return statearr_28241;
})();
var statearr_28242_28262 = state_28230__$1;
(statearr_28242_28262[(2)] = null);

(statearr_28242_28262[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28231 === (9))){
var inst_28210 = (state_28230[(8)]);
var state_28230__$1 = state_28230;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28230__$1,(11),out,inst_28210);
} else {
if((state_val_28231 === (5))){
var inst_28224 = cljs.core.async.close_BANG_.call(null,out);
var state_28230__$1 = state_28230;
var statearr_28243_28263 = state_28230__$1;
(statearr_28243_28263[(2)] = inst_28224);

(statearr_28243_28263[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28231 === (10))){
var inst_28222 = (state_28230[(2)]);
var state_28230__$1 = state_28230;
var statearr_28244_28264 = state_28230__$1;
(statearr_28244_28264[(2)] = inst_28222);

(statearr_28244_28264[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28231 === (8))){
var inst_28209 = (state_28230[(7)]);
var inst_28202 = (state_28230[(10)]);
var inst_28211 = (state_28230[(9)]);
var inst_28210 = (state_28230[(8)]);
var inst_28214 = (function (){var c = inst_28211;
var v = inst_28210;
var vec__28207 = inst_28209;
var cs = inst_28202;
return ((function (c,v,vec__28207,cs,inst_28209,inst_28202,inst_28211,inst_28210,state_val_28231,c__22071__auto___28255,out){
return (function (p1__28198_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__28198_SHARP_);
});
;})(c,v,vec__28207,cs,inst_28209,inst_28202,inst_28211,inst_28210,state_val_28231,c__22071__auto___28255,out))
})();
var inst_28215 = cljs.core.filterv.call(null,inst_28214,inst_28202);
var inst_28202__$1 = inst_28215;
var state_28230__$1 = (function (){var statearr_28245 = state_28230;
(statearr_28245[(10)] = inst_28202__$1);

return statearr_28245;
})();
var statearr_28246_28265 = state_28230__$1;
(statearr_28246_28265[(2)] = null);

(statearr_28246_28265[(1)] = (2));


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
});})(c__22071__auto___28255,out))
;
return ((function (switch__22009__auto__,c__22071__auto___28255,out){
return (function() {
var cljs$core$async$state_machine__22010__auto__ = null;
var cljs$core$async$state_machine__22010__auto____0 = (function (){
var statearr_28250 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28250[(0)] = cljs$core$async$state_machine__22010__auto__);

(statearr_28250[(1)] = (1));

return statearr_28250;
});
var cljs$core$async$state_machine__22010__auto____1 = (function (state_28230){
while(true){
var ret_value__22011__auto__ = (function (){try{while(true){
var result__22012__auto__ = switch__22009__auto__.call(null,state_28230);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22012__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22012__auto__;
}
break;
}
}catch (e28251){if((e28251 instanceof Object)){
var ex__22013__auto__ = e28251;
var statearr_28252_28266 = state_28230;
(statearr_28252_28266[(5)] = ex__22013__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28230);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28251;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22011__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28267 = state_28230;
state_28230 = G__28267;
continue;
} else {
return ret_value__22011__auto__;
}
break;
}
});
cljs$core$async$state_machine__22010__auto__ = function(state_28230){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__22010__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__22010__auto____1.call(this,state_28230);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__22010__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__22010__auto____0;
cljs$core$async$state_machine__22010__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__22010__auto____1;
return cljs$core$async$state_machine__22010__auto__;
})()
;})(switch__22009__auto__,c__22071__auto___28255,out))
})();
var state__22073__auto__ = (function (){var statearr_28253 = f__22072__auto__.call(null);
(statearr_28253[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22071__auto___28255);

return statearr_28253;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22073__auto__);
});})(c__22071__auto___28255,out))
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
var G__28269 = arguments.length;
switch (G__28269) {
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
var c__22071__auto___28317 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22071__auto___28317,out){
return (function (){
var f__22072__auto__ = (function (){var switch__22009__auto__ = ((function (c__22071__auto___28317,out){
return (function (state_28293){
var state_val_28294 = (state_28293[(1)]);
if((state_val_28294 === (7))){
var inst_28275 = (state_28293[(7)]);
var inst_28275__$1 = (state_28293[(2)]);
var inst_28276 = (inst_28275__$1 == null);
var inst_28277 = cljs.core.not.call(null,inst_28276);
var state_28293__$1 = (function (){var statearr_28295 = state_28293;
(statearr_28295[(7)] = inst_28275__$1);

return statearr_28295;
})();
if(inst_28277){
var statearr_28296_28318 = state_28293__$1;
(statearr_28296_28318[(1)] = (8));

} else {
var statearr_28297_28319 = state_28293__$1;
(statearr_28297_28319[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28294 === (1))){
var inst_28270 = (0);
var state_28293__$1 = (function (){var statearr_28298 = state_28293;
(statearr_28298[(8)] = inst_28270);

return statearr_28298;
})();
var statearr_28299_28320 = state_28293__$1;
(statearr_28299_28320[(2)] = null);

(statearr_28299_28320[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28294 === (4))){
var state_28293__$1 = state_28293;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28293__$1,(7),ch);
} else {
if((state_val_28294 === (6))){
var inst_28288 = (state_28293[(2)]);
var state_28293__$1 = state_28293;
var statearr_28300_28321 = state_28293__$1;
(statearr_28300_28321[(2)] = inst_28288);

(statearr_28300_28321[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28294 === (3))){
var inst_28290 = (state_28293[(2)]);
var inst_28291 = cljs.core.async.close_BANG_.call(null,out);
var state_28293__$1 = (function (){var statearr_28301 = state_28293;
(statearr_28301[(9)] = inst_28290);

return statearr_28301;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28293__$1,inst_28291);
} else {
if((state_val_28294 === (2))){
var inst_28270 = (state_28293[(8)]);
var inst_28272 = (inst_28270 < n);
var state_28293__$1 = state_28293;
if(cljs.core.truth_(inst_28272)){
var statearr_28302_28322 = state_28293__$1;
(statearr_28302_28322[(1)] = (4));

} else {
var statearr_28303_28323 = state_28293__$1;
(statearr_28303_28323[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28294 === (11))){
var inst_28270 = (state_28293[(8)]);
var inst_28280 = (state_28293[(2)]);
var inst_28281 = (inst_28270 + (1));
var inst_28270__$1 = inst_28281;
var state_28293__$1 = (function (){var statearr_28304 = state_28293;
(statearr_28304[(10)] = inst_28280);

(statearr_28304[(8)] = inst_28270__$1);

return statearr_28304;
})();
var statearr_28305_28324 = state_28293__$1;
(statearr_28305_28324[(2)] = null);

(statearr_28305_28324[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28294 === (9))){
var state_28293__$1 = state_28293;
var statearr_28306_28325 = state_28293__$1;
(statearr_28306_28325[(2)] = null);

(statearr_28306_28325[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28294 === (5))){
var state_28293__$1 = state_28293;
var statearr_28307_28326 = state_28293__$1;
(statearr_28307_28326[(2)] = null);

(statearr_28307_28326[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28294 === (10))){
var inst_28285 = (state_28293[(2)]);
var state_28293__$1 = state_28293;
var statearr_28308_28327 = state_28293__$1;
(statearr_28308_28327[(2)] = inst_28285);

(statearr_28308_28327[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28294 === (8))){
var inst_28275 = (state_28293[(7)]);
var state_28293__$1 = state_28293;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28293__$1,(11),out,inst_28275);
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
});})(c__22071__auto___28317,out))
;
return ((function (switch__22009__auto__,c__22071__auto___28317,out){
return (function() {
var cljs$core$async$state_machine__22010__auto__ = null;
var cljs$core$async$state_machine__22010__auto____0 = (function (){
var statearr_28312 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_28312[(0)] = cljs$core$async$state_machine__22010__auto__);

(statearr_28312[(1)] = (1));

return statearr_28312;
});
var cljs$core$async$state_machine__22010__auto____1 = (function (state_28293){
while(true){
var ret_value__22011__auto__ = (function (){try{while(true){
var result__22012__auto__ = switch__22009__auto__.call(null,state_28293);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22012__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22012__auto__;
}
break;
}
}catch (e28313){if((e28313 instanceof Object)){
var ex__22013__auto__ = e28313;
var statearr_28314_28328 = state_28293;
(statearr_28314_28328[(5)] = ex__22013__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28293);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28313;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22011__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28329 = state_28293;
state_28293 = G__28329;
continue;
} else {
return ret_value__22011__auto__;
}
break;
}
});
cljs$core$async$state_machine__22010__auto__ = function(state_28293){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__22010__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__22010__auto____1.call(this,state_28293);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__22010__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__22010__auto____0;
cljs$core$async$state_machine__22010__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__22010__auto____1;
return cljs$core$async$state_machine__22010__auto__;
})()
;})(switch__22009__auto__,c__22071__auto___28317,out))
})();
var state__22073__auto__ = (function (){var statearr_28315 = f__22072__auto__.call(null);
(statearr_28315[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22071__auto___28317);

return statearr_28315;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22073__auto__);
});})(c__22071__auto___28317,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t28337 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t28337 = (function (ch,f,map_LT_,meta28338){
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta28338 = meta28338;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t28337.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t28337.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t28337.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t28337.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t28340 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t28340 = (function (fn1,_,meta28338,map_LT_,f,ch,meta28341){
this.fn1 = fn1;
this._ = _;
this.meta28338 = meta28338;
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta28341 = meta28341;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t28340.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t28340.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t28340.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__28330_SHARP_){
return f1.call(null,(((p1__28330_SHARP_ == null))?null:self__.f.call(null,p1__28330_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t28340.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_28342){
var self__ = this;
var _28342__$1 = this;
return self__.meta28341;
});})(___$1))
;

cljs.core.async.t28340.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_28342,meta28341__$1){
var self__ = this;
var _28342__$1 = this;
return (new cljs.core.async.t28340(self__.fn1,self__._,self__.meta28338,self__.map_LT_,self__.f,self__.ch,meta28341__$1));
});})(___$1))
;

cljs.core.async.t28340.cljs$lang$type = true;

cljs.core.async.t28340.cljs$lang$ctorStr = "cljs.core.async/t28340";

cljs.core.async.t28340.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__18739__auto__,writer__18740__auto__,opt__18741__auto__){
return cljs.core._write.call(null,writer__18740__auto__,"cljs.core.async/t28340");
});})(___$1))
;

cljs.core.async.__GT_t28340 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t28340(fn1__$1,___$2,meta28338__$1,map_LT___$1,f__$1,ch__$1,meta28341){
return (new cljs.core.async.t28340(fn1__$1,___$2,meta28338__$1,map_LT___$1,f__$1,ch__$1,meta28341));
});})(___$1))
;

}

return (new cljs.core.async.t28340(fn1,___$1,self__.meta28338,self__.map_LT_,self__.f,self__.ch,cljs.core.PersistentArrayMap.EMPTY));
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

cljs.core.async.t28337.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t28337.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t28337.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t28337.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_28339){
var self__ = this;
var _28339__$1 = this;
return self__.meta28338;
});

cljs.core.async.t28337.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_28339,meta28338__$1){
var self__ = this;
var _28339__$1 = this;
return (new cljs.core.async.t28337(self__.ch,self__.f,self__.map_LT_,meta28338__$1));
});

cljs.core.async.t28337.cljs$lang$type = true;

cljs.core.async.t28337.cljs$lang$ctorStr = "cljs.core.async/t28337";

cljs.core.async.t28337.cljs$lang$ctorPrWriter = (function (this__18739__auto__,writer__18740__auto__,opt__18741__auto__){
return cljs.core._write.call(null,writer__18740__auto__,"cljs.core.async/t28337");
});

cljs.core.async.__GT_t28337 = (function cljs$core$async$map_LT__$___GT_t28337(ch__$1,f__$1,map_LT___$1,meta28338){
return (new cljs.core.async.t28337(ch__$1,f__$1,map_LT___$1,meta28338));
});

}

return (new cljs.core.async.t28337(ch,f,cljs$core$async$map_LT_,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t28346 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t28346 = (function (ch,f,map_GT_,meta28347){
this.ch = ch;
this.f = f;
this.map_GT_ = map_GT_;
this.meta28347 = meta28347;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t28346.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t28346.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t28346.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t28346.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t28346.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t28346.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t28346.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_28348){
var self__ = this;
var _28348__$1 = this;
return self__.meta28347;
});

cljs.core.async.t28346.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_28348,meta28347__$1){
var self__ = this;
var _28348__$1 = this;
return (new cljs.core.async.t28346(self__.ch,self__.f,self__.map_GT_,meta28347__$1));
});

cljs.core.async.t28346.cljs$lang$type = true;

cljs.core.async.t28346.cljs$lang$ctorStr = "cljs.core.async/t28346";

cljs.core.async.t28346.cljs$lang$ctorPrWriter = (function (this__18739__auto__,writer__18740__auto__,opt__18741__auto__){
return cljs.core._write.call(null,writer__18740__auto__,"cljs.core.async/t28346");
});

cljs.core.async.__GT_t28346 = (function cljs$core$async$map_GT__$___GT_t28346(ch__$1,f__$1,map_GT___$1,meta28347){
return (new cljs.core.async.t28346(ch__$1,f__$1,map_GT___$1,meta28347));
});

}

return (new cljs.core.async.t28346(ch,f,cljs$core$async$map_GT_,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t28352 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t28352 = (function (ch,p,filter_GT_,meta28353){
this.ch = ch;
this.p = p;
this.filter_GT_ = filter_GT_;
this.meta28353 = meta28353;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t28352.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t28352.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t28352.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t28352.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t28352.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t28352.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t28352.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t28352.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_28354){
var self__ = this;
var _28354__$1 = this;
return self__.meta28353;
});

cljs.core.async.t28352.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_28354,meta28353__$1){
var self__ = this;
var _28354__$1 = this;
return (new cljs.core.async.t28352(self__.ch,self__.p,self__.filter_GT_,meta28353__$1));
});

cljs.core.async.t28352.cljs$lang$type = true;

cljs.core.async.t28352.cljs$lang$ctorStr = "cljs.core.async/t28352";

cljs.core.async.t28352.cljs$lang$ctorPrWriter = (function (this__18739__auto__,writer__18740__auto__,opt__18741__auto__){
return cljs.core._write.call(null,writer__18740__auto__,"cljs.core.async/t28352");
});

cljs.core.async.__GT_t28352 = (function cljs$core$async$filter_GT__$___GT_t28352(ch__$1,p__$1,filter_GT___$1,meta28353){
return (new cljs.core.async.t28352(ch__$1,p__$1,filter_GT___$1,meta28353));
});

}

return (new cljs.core.async.t28352(ch,p,cljs$core$async$filter_GT_,cljs.core.PersistentArrayMap.EMPTY));
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
var G__28356 = arguments.length;
switch (G__28356) {
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
var c__22071__auto___28399 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22071__auto___28399,out){
return (function (){
var f__22072__auto__ = (function (){var switch__22009__auto__ = ((function (c__22071__auto___28399,out){
return (function (state_28377){
var state_val_28378 = (state_28377[(1)]);
if((state_val_28378 === (7))){
var inst_28373 = (state_28377[(2)]);
var state_28377__$1 = state_28377;
var statearr_28379_28400 = state_28377__$1;
(statearr_28379_28400[(2)] = inst_28373);

(statearr_28379_28400[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28378 === (1))){
var state_28377__$1 = state_28377;
var statearr_28380_28401 = state_28377__$1;
(statearr_28380_28401[(2)] = null);

(statearr_28380_28401[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28378 === (4))){
var inst_28359 = (state_28377[(7)]);
var inst_28359__$1 = (state_28377[(2)]);
var inst_28360 = (inst_28359__$1 == null);
var state_28377__$1 = (function (){var statearr_28381 = state_28377;
(statearr_28381[(7)] = inst_28359__$1);

return statearr_28381;
})();
if(cljs.core.truth_(inst_28360)){
var statearr_28382_28402 = state_28377__$1;
(statearr_28382_28402[(1)] = (5));

} else {
var statearr_28383_28403 = state_28377__$1;
(statearr_28383_28403[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28378 === (6))){
var inst_28359 = (state_28377[(7)]);
var inst_28364 = p.call(null,inst_28359);
var state_28377__$1 = state_28377;
if(cljs.core.truth_(inst_28364)){
var statearr_28384_28404 = state_28377__$1;
(statearr_28384_28404[(1)] = (8));

} else {
var statearr_28385_28405 = state_28377__$1;
(statearr_28385_28405[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28378 === (3))){
var inst_28375 = (state_28377[(2)]);
var state_28377__$1 = state_28377;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28377__$1,inst_28375);
} else {
if((state_val_28378 === (2))){
var state_28377__$1 = state_28377;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28377__$1,(4),ch);
} else {
if((state_val_28378 === (11))){
var inst_28367 = (state_28377[(2)]);
var state_28377__$1 = state_28377;
var statearr_28386_28406 = state_28377__$1;
(statearr_28386_28406[(2)] = inst_28367);

(statearr_28386_28406[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28378 === (9))){
var state_28377__$1 = state_28377;
var statearr_28387_28407 = state_28377__$1;
(statearr_28387_28407[(2)] = null);

(statearr_28387_28407[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28378 === (5))){
var inst_28362 = cljs.core.async.close_BANG_.call(null,out);
var state_28377__$1 = state_28377;
var statearr_28388_28408 = state_28377__$1;
(statearr_28388_28408[(2)] = inst_28362);

(statearr_28388_28408[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28378 === (10))){
var inst_28370 = (state_28377[(2)]);
var state_28377__$1 = (function (){var statearr_28389 = state_28377;
(statearr_28389[(8)] = inst_28370);

return statearr_28389;
})();
var statearr_28390_28409 = state_28377__$1;
(statearr_28390_28409[(2)] = null);

(statearr_28390_28409[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28378 === (8))){
var inst_28359 = (state_28377[(7)]);
var state_28377__$1 = state_28377;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28377__$1,(11),out,inst_28359);
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
});})(c__22071__auto___28399,out))
;
return ((function (switch__22009__auto__,c__22071__auto___28399,out){
return (function() {
var cljs$core$async$state_machine__22010__auto__ = null;
var cljs$core$async$state_machine__22010__auto____0 = (function (){
var statearr_28394 = [null,null,null,null,null,null,null,null,null];
(statearr_28394[(0)] = cljs$core$async$state_machine__22010__auto__);

(statearr_28394[(1)] = (1));

return statearr_28394;
});
var cljs$core$async$state_machine__22010__auto____1 = (function (state_28377){
while(true){
var ret_value__22011__auto__ = (function (){try{while(true){
var result__22012__auto__ = switch__22009__auto__.call(null,state_28377);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22012__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22012__auto__;
}
break;
}
}catch (e28395){if((e28395 instanceof Object)){
var ex__22013__auto__ = e28395;
var statearr_28396_28410 = state_28377;
(statearr_28396_28410[(5)] = ex__22013__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28377);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28395;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22011__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28411 = state_28377;
state_28377 = G__28411;
continue;
} else {
return ret_value__22011__auto__;
}
break;
}
});
cljs$core$async$state_machine__22010__auto__ = function(state_28377){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__22010__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__22010__auto____1.call(this,state_28377);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__22010__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__22010__auto____0;
cljs$core$async$state_machine__22010__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__22010__auto____1;
return cljs$core$async$state_machine__22010__auto__;
})()
;})(switch__22009__auto__,c__22071__auto___28399,out))
})();
var state__22073__auto__ = (function (){var statearr_28397 = f__22072__auto__.call(null);
(statearr_28397[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22071__auto___28399);

return statearr_28397;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22073__auto__);
});})(c__22071__auto___28399,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(){
var G__28413 = arguments.length;
switch (G__28413) {
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
var c__22071__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22071__auto__){
return (function (){
var f__22072__auto__ = (function (){var switch__22009__auto__ = ((function (c__22071__auto__){
return (function (state_28580){
var state_val_28581 = (state_28580[(1)]);
if((state_val_28581 === (7))){
var inst_28576 = (state_28580[(2)]);
var state_28580__$1 = state_28580;
var statearr_28582_28623 = state_28580__$1;
(statearr_28582_28623[(2)] = inst_28576);

(statearr_28582_28623[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28581 === (20))){
var inst_28546 = (state_28580[(7)]);
var inst_28557 = (state_28580[(2)]);
var inst_28558 = cljs.core.next.call(null,inst_28546);
var inst_28532 = inst_28558;
var inst_28533 = null;
var inst_28534 = (0);
var inst_28535 = (0);
var state_28580__$1 = (function (){var statearr_28583 = state_28580;
(statearr_28583[(8)] = inst_28532);

(statearr_28583[(9)] = inst_28535);

(statearr_28583[(10)] = inst_28534);

(statearr_28583[(11)] = inst_28557);

(statearr_28583[(12)] = inst_28533);

return statearr_28583;
})();
var statearr_28584_28624 = state_28580__$1;
(statearr_28584_28624[(2)] = null);

(statearr_28584_28624[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28581 === (1))){
var state_28580__$1 = state_28580;
var statearr_28585_28625 = state_28580__$1;
(statearr_28585_28625[(2)] = null);

(statearr_28585_28625[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28581 === (4))){
var inst_28521 = (state_28580[(13)]);
var inst_28521__$1 = (state_28580[(2)]);
var inst_28522 = (inst_28521__$1 == null);
var state_28580__$1 = (function (){var statearr_28586 = state_28580;
(statearr_28586[(13)] = inst_28521__$1);

return statearr_28586;
})();
if(cljs.core.truth_(inst_28522)){
var statearr_28587_28626 = state_28580__$1;
(statearr_28587_28626[(1)] = (5));

} else {
var statearr_28588_28627 = state_28580__$1;
(statearr_28588_28627[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28581 === (15))){
var state_28580__$1 = state_28580;
var statearr_28592_28628 = state_28580__$1;
(statearr_28592_28628[(2)] = null);

(statearr_28592_28628[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28581 === (21))){
var state_28580__$1 = state_28580;
var statearr_28593_28629 = state_28580__$1;
(statearr_28593_28629[(2)] = null);

(statearr_28593_28629[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28581 === (13))){
var inst_28532 = (state_28580[(8)]);
var inst_28535 = (state_28580[(9)]);
var inst_28534 = (state_28580[(10)]);
var inst_28533 = (state_28580[(12)]);
var inst_28542 = (state_28580[(2)]);
var inst_28543 = (inst_28535 + (1));
var tmp28589 = inst_28532;
var tmp28590 = inst_28534;
var tmp28591 = inst_28533;
var inst_28532__$1 = tmp28589;
var inst_28533__$1 = tmp28591;
var inst_28534__$1 = tmp28590;
var inst_28535__$1 = inst_28543;
var state_28580__$1 = (function (){var statearr_28594 = state_28580;
(statearr_28594[(14)] = inst_28542);

(statearr_28594[(8)] = inst_28532__$1);

(statearr_28594[(9)] = inst_28535__$1);

(statearr_28594[(10)] = inst_28534__$1);

(statearr_28594[(12)] = inst_28533__$1);

return statearr_28594;
})();
var statearr_28595_28630 = state_28580__$1;
(statearr_28595_28630[(2)] = null);

(statearr_28595_28630[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28581 === (22))){
var state_28580__$1 = state_28580;
var statearr_28596_28631 = state_28580__$1;
(statearr_28596_28631[(2)] = null);

(statearr_28596_28631[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28581 === (6))){
var inst_28521 = (state_28580[(13)]);
var inst_28530 = f.call(null,inst_28521);
var inst_28531 = cljs.core.seq.call(null,inst_28530);
var inst_28532 = inst_28531;
var inst_28533 = null;
var inst_28534 = (0);
var inst_28535 = (0);
var state_28580__$1 = (function (){var statearr_28597 = state_28580;
(statearr_28597[(8)] = inst_28532);

(statearr_28597[(9)] = inst_28535);

(statearr_28597[(10)] = inst_28534);

(statearr_28597[(12)] = inst_28533);

return statearr_28597;
})();
var statearr_28598_28632 = state_28580__$1;
(statearr_28598_28632[(2)] = null);

(statearr_28598_28632[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28581 === (17))){
var inst_28546 = (state_28580[(7)]);
var inst_28550 = cljs.core.chunk_first.call(null,inst_28546);
var inst_28551 = cljs.core.chunk_rest.call(null,inst_28546);
var inst_28552 = cljs.core.count.call(null,inst_28550);
var inst_28532 = inst_28551;
var inst_28533 = inst_28550;
var inst_28534 = inst_28552;
var inst_28535 = (0);
var state_28580__$1 = (function (){var statearr_28599 = state_28580;
(statearr_28599[(8)] = inst_28532);

(statearr_28599[(9)] = inst_28535);

(statearr_28599[(10)] = inst_28534);

(statearr_28599[(12)] = inst_28533);

return statearr_28599;
})();
var statearr_28600_28633 = state_28580__$1;
(statearr_28600_28633[(2)] = null);

(statearr_28600_28633[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28581 === (3))){
var inst_28578 = (state_28580[(2)]);
var state_28580__$1 = state_28580;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28580__$1,inst_28578);
} else {
if((state_val_28581 === (12))){
var inst_28566 = (state_28580[(2)]);
var state_28580__$1 = state_28580;
var statearr_28601_28634 = state_28580__$1;
(statearr_28601_28634[(2)] = inst_28566);

(statearr_28601_28634[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28581 === (2))){
var state_28580__$1 = state_28580;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28580__$1,(4),in$);
} else {
if((state_val_28581 === (23))){
var inst_28574 = (state_28580[(2)]);
var state_28580__$1 = state_28580;
var statearr_28602_28635 = state_28580__$1;
(statearr_28602_28635[(2)] = inst_28574);

(statearr_28602_28635[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28581 === (19))){
var inst_28561 = (state_28580[(2)]);
var state_28580__$1 = state_28580;
var statearr_28603_28636 = state_28580__$1;
(statearr_28603_28636[(2)] = inst_28561);

(statearr_28603_28636[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28581 === (11))){
var inst_28532 = (state_28580[(8)]);
var inst_28546 = (state_28580[(7)]);
var inst_28546__$1 = cljs.core.seq.call(null,inst_28532);
var state_28580__$1 = (function (){var statearr_28604 = state_28580;
(statearr_28604[(7)] = inst_28546__$1);

return statearr_28604;
})();
if(inst_28546__$1){
var statearr_28605_28637 = state_28580__$1;
(statearr_28605_28637[(1)] = (14));

} else {
var statearr_28606_28638 = state_28580__$1;
(statearr_28606_28638[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28581 === (9))){
var inst_28568 = (state_28580[(2)]);
var inst_28569 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_28580__$1 = (function (){var statearr_28607 = state_28580;
(statearr_28607[(15)] = inst_28568);

return statearr_28607;
})();
if(cljs.core.truth_(inst_28569)){
var statearr_28608_28639 = state_28580__$1;
(statearr_28608_28639[(1)] = (21));

} else {
var statearr_28609_28640 = state_28580__$1;
(statearr_28609_28640[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28581 === (5))){
var inst_28524 = cljs.core.async.close_BANG_.call(null,out);
var state_28580__$1 = state_28580;
var statearr_28610_28641 = state_28580__$1;
(statearr_28610_28641[(2)] = inst_28524);

(statearr_28610_28641[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28581 === (14))){
var inst_28546 = (state_28580[(7)]);
var inst_28548 = cljs.core.chunked_seq_QMARK_.call(null,inst_28546);
var state_28580__$1 = state_28580;
if(inst_28548){
var statearr_28611_28642 = state_28580__$1;
(statearr_28611_28642[(1)] = (17));

} else {
var statearr_28612_28643 = state_28580__$1;
(statearr_28612_28643[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28581 === (16))){
var inst_28564 = (state_28580[(2)]);
var state_28580__$1 = state_28580;
var statearr_28613_28644 = state_28580__$1;
(statearr_28613_28644[(2)] = inst_28564);

(statearr_28613_28644[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28581 === (10))){
var inst_28535 = (state_28580[(9)]);
var inst_28533 = (state_28580[(12)]);
var inst_28540 = cljs.core._nth.call(null,inst_28533,inst_28535);
var state_28580__$1 = state_28580;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28580__$1,(13),out,inst_28540);
} else {
if((state_val_28581 === (18))){
var inst_28546 = (state_28580[(7)]);
var inst_28555 = cljs.core.first.call(null,inst_28546);
var state_28580__$1 = state_28580;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28580__$1,(20),out,inst_28555);
} else {
if((state_val_28581 === (8))){
var inst_28535 = (state_28580[(9)]);
var inst_28534 = (state_28580[(10)]);
var inst_28537 = (inst_28535 < inst_28534);
var inst_28538 = inst_28537;
var state_28580__$1 = state_28580;
if(cljs.core.truth_(inst_28538)){
var statearr_28614_28645 = state_28580__$1;
(statearr_28614_28645[(1)] = (10));

} else {
var statearr_28615_28646 = state_28580__$1;
(statearr_28615_28646[(1)] = (11));

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
});})(c__22071__auto__))
;
return ((function (switch__22009__auto__,c__22071__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__22010__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__22010__auto____0 = (function (){
var statearr_28619 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28619[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__22010__auto__);

(statearr_28619[(1)] = (1));

return statearr_28619;
});
var cljs$core$async$mapcat_STAR__$_state_machine__22010__auto____1 = (function (state_28580){
while(true){
var ret_value__22011__auto__ = (function (){try{while(true){
var result__22012__auto__ = switch__22009__auto__.call(null,state_28580);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22012__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22012__auto__;
}
break;
}
}catch (e28620){if((e28620 instanceof Object)){
var ex__22013__auto__ = e28620;
var statearr_28621_28647 = state_28580;
(statearr_28621_28647[(5)] = ex__22013__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28580);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28620;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22011__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28648 = state_28580;
state_28580 = G__28648;
continue;
} else {
return ret_value__22011__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__22010__auto__ = function(state_28580){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__22010__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__22010__auto____1.call(this,state_28580);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__22010__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__22010__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__22010__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__22010__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__22010__auto__;
})()
;})(switch__22009__auto__,c__22071__auto__))
})();
var state__22073__auto__ = (function (){var statearr_28622 = f__22072__auto__.call(null);
(statearr_28622[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22071__auto__);

return statearr_28622;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22073__auto__);
});})(c__22071__auto__))
);

return c__22071__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(){
var G__28650 = arguments.length;
switch (G__28650) {
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
var G__28653 = arguments.length;
switch (G__28653) {
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
var G__28656 = arguments.length;
switch (G__28656) {
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
var c__22071__auto___28706 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22071__auto___28706,out){
return (function (){
var f__22072__auto__ = (function (){var switch__22009__auto__ = ((function (c__22071__auto___28706,out){
return (function (state_28680){
var state_val_28681 = (state_28680[(1)]);
if((state_val_28681 === (7))){
var inst_28675 = (state_28680[(2)]);
var state_28680__$1 = state_28680;
var statearr_28682_28707 = state_28680__$1;
(statearr_28682_28707[(2)] = inst_28675);

(statearr_28682_28707[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28681 === (1))){
var inst_28657 = null;
var state_28680__$1 = (function (){var statearr_28683 = state_28680;
(statearr_28683[(7)] = inst_28657);

return statearr_28683;
})();
var statearr_28684_28708 = state_28680__$1;
(statearr_28684_28708[(2)] = null);

(statearr_28684_28708[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28681 === (4))){
var inst_28660 = (state_28680[(8)]);
var inst_28660__$1 = (state_28680[(2)]);
var inst_28661 = (inst_28660__$1 == null);
var inst_28662 = cljs.core.not.call(null,inst_28661);
var state_28680__$1 = (function (){var statearr_28685 = state_28680;
(statearr_28685[(8)] = inst_28660__$1);

return statearr_28685;
})();
if(inst_28662){
var statearr_28686_28709 = state_28680__$1;
(statearr_28686_28709[(1)] = (5));

} else {
var statearr_28687_28710 = state_28680__$1;
(statearr_28687_28710[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28681 === (6))){
var state_28680__$1 = state_28680;
var statearr_28688_28711 = state_28680__$1;
(statearr_28688_28711[(2)] = null);

(statearr_28688_28711[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28681 === (3))){
var inst_28677 = (state_28680[(2)]);
var inst_28678 = cljs.core.async.close_BANG_.call(null,out);
var state_28680__$1 = (function (){var statearr_28689 = state_28680;
(statearr_28689[(9)] = inst_28677);

return statearr_28689;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28680__$1,inst_28678);
} else {
if((state_val_28681 === (2))){
var state_28680__$1 = state_28680;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28680__$1,(4),ch);
} else {
if((state_val_28681 === (11))){
var inst_28660 = (state_28680[(8)]);
var inst_28669 = (state_28680[(2)]);
var inst_28657 = inst_28660;
var state_28680__$1 = (function (){var statearr_28690 = state_28680;
(statearr_28690[(7)] = inst_28657);

(statearr_28690[(10)] = inst_28669);

return statearr_28690;
})();
var statearr_28691_28712 = state_28680__$1;
(statearr_28691_28712[(2)] = null);

(statearr_28691_28712[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28681 === (9))){
var inst_28660 = (state_28680[(8)]);
var state_28680__$1 = state_28680;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28680__$1,(11),out,inst_28660);
} else {
if((state_val_28681 === (5))){
var inst_28657 = (state_28680[(7)]);
var inst_28660 = (state_28680[(8)]);
var inst_28664 = cljs.core._EQ_.call(null,inst_28660,inst_28657);
var state_28680__$1 = state_28680;
if(inst_28664){
var statearr_28693_28713 = state_28680__$1;
(statearr_28693_28713[(1)] = (8));

} else {
var statearr_28694_28714 = state_28680__$1;
(statearr_28694_28714[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28681 === (10))){
var inst_28672 = (state_28680[(2)]);
var state_28680__$1 = state_28680;
var statearr_28695_28715 = state_28680__$1;
(statearr_28695_28715[(2)] = inst_28672);

(statearr_28695_28715[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28681 === (8))){
var inst_28657 = (state_28680[(7)]);
var tmp28692 = inst_28657;
var inst_28657__$1 = tmp28692;
var state_28680__$1 = (function (){var statearr_28696 = state_28680;
(statearr_28696[(7)] = inst_28657__$1);

return statearr_28696;
})();
var statearr_28697_28716 = state_28680__$1;
(statearr_28697_28716[(2)] = null);

(statearr_28697_28716[(1)] = (2));


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
});})(c__22071__auto___28706,out))
;
return ((function (switch__22009__auto__,c__22071__auto___28706,out){
return (function() {
var cljs$core$async$state_machine__22010__auto__ = null;
var cljs$core$async$state_machine__22010__auto____0 = (function (){
var statearr_28701 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_28701[(0)] = cljs$core$async$state_machine__22010__auto__);

(statearr_28701[(1)] = (1));

return statearr_28701;
});
var cljs$core$async$state_machine__22010__auto____1 = (function (state_28680){
while(true){
var ret_value__22011__auto__ = (function (){try{while(true){
var result__22012__auto__ = switch__22009__auto__.call(null,state_28680);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22012__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22012__auto__;
}
break;
}
}catch (e28702){if((e28702 instanceof Object)){
var ex__22013__auto__ = e28702;
var statearr_28703_28717 = state_28680;
(statearr_28703_28717[(5)] = ex__22013__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28680);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28702;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22011__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28718 = state_28680;
state_28680 = G__28718;
continue;
} else {
return ret_value__22011__auto__;
}
break;
}
});
cljs$core$async$state_machine__22010__auto__ = function(state_28680){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__22010__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__22010__auto____1.call(this,state_28680);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__22010__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__22010__auto____0;
cljs$core$async$state_machine__22010__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__22010__auto____1;
return cljs$core$async$state_machine__22010__auto__;
})()
;})(switch__22009__auto__,c__22071__auto___28706,out))
})();
var state__22073__auto__ = (function (){var statearr_28704 = f__22072__auto__.call(null);
(statearr_28704[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22071__auto___28706);

return statearr_28704;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22073__auto__);
});})(c__22071__auto___28706,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(){
var G__28720 = arguments.length;
switch (G__28720) {
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
var c__22071__auto___28789 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22071__auto___28789,out){
return (function (){
var f__22072__auto__ = (function (){var switch__22009__auto__ = ((function (c__22071__auto___28789,out){
return (function (state_28758){
var state_val_28759 = (state_28758[(1)]);
if((state_val_28759 === (7))){
var inst_28754 = (state_28758[(2)]);
var state_28758__$1 = state_28758;
var statearr_28760_28790 = state_28758__$1;
(statearr_28760_28790[(2)] = inst_28754);

(statearr_28760_28790[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28759 === (1))){
var inst_28721 = (new Array(n));
var inst_28722 = inst_28721;
var inst_28723 = (0);
var state_28758__$1 = (function (){var statearr_28761 = state_28758;
(statearr_28761[(7)] = inst_28723);

(statearr_28761[(8)] = inst_28722);

return statearr_28761;
})();
var statearr_28762_28791 = state_28758__$1;
(statearr_28762_28791[(2)] = null);

(statearr_28762_28791[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28759 === (4))){
var inst_28726 = (state_28758[(9)]);
var inst_28726__$1 = (state_28758[(2)]);
var inst_28727 = (inst_28726__$1 == null);
var inst_28728 = cljs.core.not.call(null,inst_28727);
var state_28758__$1 = (function (){var statearr_28763 = state_28758;
(statearr_28763[(9)] = inst_28726__$1);

return statearr_28763;
})();
if(inst_28728){
var statearr_28764_28792 = state_28758__$1;
(statearr_28764_28792[(1)] = (5));

} else {
var statearr_28765_28793 = state_28758__$1;
(statearr_28765_28793[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28759 === (15))){
var inst_28748 = (state_28758[(2)]);
var state_28758__$1 = state_28758;
var statearr_28766_28794 = state_28758__$1;
(statearr_28766_28794[(2)] = inst_28748);

(statearr_28766_28794[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28759 === (13))){
var state_28758__$1 = state_28758;
var statearr_28767_28795 = state_28758__$1;
(statearr_28767_28795[(2)] = null);

(statearr_28767_28795[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28759 === (6))){
var inst_28723 = (state_28758[(7)]);
var inst_28744 = (inst_28723 > (0));
var state_28758__$1 = state_28758;
if(cljs.core.truth_(inst_28744)){
var statearr_28768_28796 = state_28758__$1;
(statearr_28768_28796[(1)] = (12));

} else {
var statearr_28769_28797 = state_28758__$1;
(statearr_28769_28797[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28759 === (3))){
var inst_28756 = (state_28758[(2)]);
var state_28758__$1 = state_28758;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28758__$1,inst_28756);
} else {
if((state_val_28759 === (12))){
var inst_28722 = (state_28758[(8)]);
var inst_28746 = cljs.core.vec.call(null,inst_28722);
var state_28758__$1 = state_28758;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28758__$1,(15),out,inst_28746);
} else {
if((state_val_28759 === (2))){
var state_28758__$1 = state_28758;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28758__$1,(4),ch);
} else {
if((state_val_28759 === (11))){
var inst_28738 = (state_28758[(2)]);
var inst_28739 = (new Array(n));
var inst_28722 = inst_28739;
var inst_28723 = (0);
var state_28758__$1 = (function (){var statearr_28770 = state_28758;
(statearr_28770[(7)] = inst_28723);

(statearr_28770[(10)] = inst_28738);

(statearr_28770[(8)] = inst_28722);

return statearr_28770;
})();
var statearr_28771_28798 = state_28758__$1;
(statearr_28771_28798[(2)] = null);

(statearr_28771_28798[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28759 === (9))){
var inst_28722 = (state_28758[(8)]);
var inst_28736 = cljs.core.vec.call(null,inst_28722);
var state_28758__$1 = state_28758;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28758__$1,(11),out,inst_28736);
} else {
if((state_val_28759 === (5))){
var inst_28723 = (state_28758[(7)]);
var inst_28731 = (state_28758[(11)]);
var inst_28722 = (state_28758[(8)]);
var inst_28726 = (state_28758[(9)]);
var inst_28730 = (inst_28722[inst_28723] = inst_28726);
var inst_28731__$1 = (inst_28723 + (1));
var inst_28732 = (inst_28731__$1 < n);
var state_28758__$1 = (function (){var statearr_28772 = state_28758;
(statearr_28772[(11)] = inst_28731__$1);

(statearr_28772[(12)] = inst_28730);

return statearr_28772;
})();
if(cljs.core.truth_(inst_28732)){
var statearr_28773_28799 = state_28758__$1;
(statearr_28773_28799[(1)] = (8));

} else {
var statearr_28774_28800 = state_28758__$1;
(statearr_28774_28800[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28759 === (14))){
var inst_28751 = (state_28758[(2)]);
var inst_28752 = cljs.core.async.close_BANG_.call(null,out);
var state_28758__$1 = (function (){var statearr_28776 = state_28758;
(statearr_28776[(13)] = inst_28751);

return statearr_28776;
})();
var statearr_28777_28801 = state_28758__$1;
(statearr_28777_28801[(2)] = inst_28752);

(statearr_28777_28801[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28759 === (10))){
var inst_28742 = (state_28758[(2)]);
var state_28758__$1 = state_28758;
var statearr_28778_28802 = state_28758__$1;
(statearr_28778_28802[(2)] = inst_28742);

(statearr_28778_28802[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28759 === (8))){
var inst_28731 = (state_28758[(11)]);
var inst_28722 = (state_28758[(8)]);
var tmp28775 = inst_28722;
var inst_28722__$1 = tmp28775;
var inst_28723 = inst_28731;
var state_28758__$1 = (function (){var statearr_28779 = state_28758;
(statearr_28779[(7)] = inst_28723);

(statearr_28779[(8)] = inst_28722__$1);

return statearr_28779;
})();
var statearr_28780_28803 = state_28758__$1;
(statearr_28780_28803[(2)] = null);

(statearr_28780_28803[(1)] = (2));


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
});})(c__22071__auto___28789,out))
;
return ((function (switch__22009__auto__,c__22071__auto___28789,out){
return (function() {
var cljs$core$async$state_machine__22010__auto__ = null;
var cljs$core$async$state_machine__22010__auto____0 = (function (){
var statearr_28784 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28784[(0)] = cljs$core$async$state_machine__22010__auto__);

(statearr_28784[(1)] = (1));

return statearr_28784;
});
var cljs$core$async$state_machine__22010__auto____1 = (function (state_28758){
while(true){
var ret_value__22011__auto__ = (function (){try{while(true){
var result__22012__auto__ = switch__22009__auto__.call(null,state_28758);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22012__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22012__auto__;
}
break;
}
}catch (e28785){if((e28785 instanceof Object)){
var ex__22013__auto__ = e28785;
var statearr_28786_28804 = state_28758;
(statearr_28786_28804[(5)] = ex__22013__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28758);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28785;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22011__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28805 = state_28758;
state_28758 = G__28805;
continue;
} else {
return ret_value__22011__auto__;
}
break;
}
});
cljs$core$async$state_machine__22010__auto__ = function(state_28758){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__22010__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__22010__auto____1.call(this,state_28758);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__22010__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__22010__auto____0;
cljs$core$async$state_machine__22010__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__22010__auto____1;
return cljs$core$async$state_machine__22010__auto__;
})()
;})(switch__22009__auto__,c__22071__auto___28789,out))
})();
var state__22073__auto__ = (function (){var statearr_28787 = f__22072__auto__.call(null);
(statearr_28787[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22071__auto___28789);

return statearr_28787;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22073__auto__);
});})(c__22071__auto___28789,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(){
var G__28807 = arguments.length;
switch (G__28807) {
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
var c__22071__auto___28880 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22071__auto___28880,out){
return (function (){
var f__22072__auto__ = (function (){var switch__22009__auto__ = ((function (c__22071__auto___28880,out){
return (function (state_28849){
var state_val_28850 = (state_28849[(1)]);
if((state_val_28850 === (7))){
var inst_28845 = (state_28849[(2)]);
var state_28849__$1 = state_28849;
var statearr_28851_28881 = state_28849__$1;
(statearr_28851_28881[(2)] = inst_28845);

(statearr_28851_28881[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28850 === (1))){
var inst_28808 = [];
var inst_28809 = inst_28808;
var inst_28810 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_28849__$1 = (function (){var statearr_28852 = state_28849;
(statearr_28852[(7)] = inst_28809);

(statearr_28852[(8)] = inst_28810);

return statearr_28852;
})();
var statearr_28853_28882 = state_28849__$1;
(statearr_28853_28882[(2)] = null);

(statearr_28853_28882[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28850 === (4))){
var inst_28813 = (state_28849[(9)]);
var inst_28813__$1 = (state_28849[(2)]);
var inst_28814 = (inst_28813__$1 == null);
var inst_28815 = cljs.core.not.call(null,inst_28814);
var state_28849__$1 = (function (){var statearr_28854 = state_28849;
(statearr_28854[(9)] = inst_28813__$1);

return statearr_28854;
})();
if(inst_28815){
var statearr_28855_28883 = state_28849__$1;
(statearr_28855_28883[(1)] = (5));

} else {
var statearr_28856_28884 = state_28849__$1;
(statearr_28856_28884[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28850 === (15))){
var inst_28839 = (state_28849[(2)]);
var state_28849__$1 = state_28849;
var statearr_28857_28885 = state_28849__$1;
(statearr_28857_28885[(2)] = inst_28839);

(statearr_28857_28885[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28850 === (13))){
var state_28849__$1 = state_28849;
var statearr_28858_28886 = state_28849__$1;
(statearr_28858_28886[(2)] = null);

(statearr_28858_28886[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28850 === (6))){
var inst_28809 = (state_28849[(7)]);
var inst_28834 = inst_28809.length;
var inst_28835 = (inst_28834 > (0));
var state_28849__$1 = state_28849;
if(cljs.core.truth_(inst_28835)){
var statearr_28859_28887 = state_28849__$1;
(statearr_28859_28887[(1)] = (12));

} else {
var statearr_28860_28888 = state_28849__$1;
(statearr_28860_28888[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28850 === (3))){
var inst_28847 = (state_28849[(2)]);
var state_28849__$1 = state_28849;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28849__$1,inst_28847);
} else {
if((state_val_28850 === (12))){
var inst_28809 = (state_28849[(7)]);
var inst_28837 = cljs.core.vec.call(null,inst_28809);
var state_28849__$1 = state_28849;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28849__$1,(15),out,inst_28837);
} else {
if((state_val_28850 === (2))){
var state_28849__$1 = state_28849;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28849__$1,(4),ch);
} else {
if((state_val_28850 === (11))){
var inst_28813 = (state_28849[(9)]);
var inst_28817 = (state_28849[(10)]);
var inst_28827 = (state_28849[(2)]);
var inst_28828 = [];
var inst_28829 = inst_28828.push(inst_28813);
var inst_28809 = inst_28828;
var inst_28810 = inst_28817;
var state_28849__$1 = (function (){var statearr_28861 = state_28849;
(statearr_28861[(7)] = inst_28809);

(statearr_28861[(8)] = inst_28810);

(statearr_28861[(11)] = inst_28829);

(statearr_28861[(12)] = inst_28827);

return statearr_28861;
})();
var statearr_28862_28889 = state_28849__$1;
(statearr_28862_28889[(2)] = null);

(statearr_28862_28889[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28850 === (9))){
var inst_28809 = (state_28849[(7)]);
var inst_28825 = cljs.core.vec.call(null,inst_28809);
var state_28849__$1 = state_28849;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28849__$1,(11),out,inst_28825);
} else {
if((state_val_28850 === (5))){
var inst_28813 = (state_28849[(9)]);
var inst_28810 = (state_28849[(8)]);
var inst_28817 = (state_28849[(10)]);
var inst_28817__$1 = f.call(null,inst_28813);
var inst_28818 = cljs.core._EQ_.call(null,inst_28817__$1,inst_28810);
var inst_28819 = cljs.core.keyword_identical_QMARK_.call(null,inst_28810,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_28820 = (inst_28818) || (inst_28819);
var state_28849__$1 = (function (){var statearr_28863 = state_28849;
(statearr_28863[(10)] = inst_28817__$1);

return statearr_28863;
})();
if(cljs.core.truth_(inst_28820)){
var statearr_28864_28890 = state_28849__$1;
(statearr_28864_28890[(1)] = (8));

} else {
var statearr_28865_28891 = state_28849__$1;
(statearr_28865_28891[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28850 === (14))){
var inst_28842 = (state_28849[(2)]);
var inst_28843 = cljs.core.async.close_BANG_.call(null,out);
var state_28849__$1 = (function (){var statearr_28867 = state_28849;
(statearr_28867[(13)] = inst_28842);

return statearr_28867;
})();
var statearr_28868_28892 = state_28849__$1;
(statearr_28868_28892[(2)] = inst_28843);

(statearr_28868_28892[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28850 === (10))){
var inst_28832 = (state_28849[(2)]);
var state_28849__$1 = state_28849;
var statearr_28869_28893 = state_28849__$1;
(statearr_28869_28893[(2)] = inst_28832);

(statearr_28869_28893[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28850 === (8))){
var inst_28809 = (state_28849[(7)]);
var inst_28813 = (state_28849[(9)]);
var inst_28817 = (state_28849[(10)]);
var inst_28822 = inst_28809.push(inst_28813);
var tmp28866 = inst_28809;
var inst_28809__$1 = tmp28866;
var inst_28810 = inst_28817;
var state_28849__$1 = (function (){var statearr_28870 = state_28849;
(statearr_28870[(7)] = inst_28809__$1);

(statearr_28870[(14)] = inst_28822);

(statearr_28870[(8)] = inst_28810);

return statearr_28870;
})();
var statearr_28871_28894 = state_28849__$1;
(statearr_28871_28894[(2)] = null);

(statearr_28871_28894[(1)] = (2));


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
});})(c__22071__auto___28880,out))
;
return ((function (switch__22009__auto__,c__22071__auto___28880,out){
return (function() {
var cljs$core$async$state_machine__22010__auto__ = null;
var cljs$core$async$state_machine__22010__auto____0 = (function (){
var statearr_28875 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28875[(0)] = cljs$core$async$state_machine__22010__auto__);

(statearr_28875[(1)] = (1));

return statearr_28875;
});
var cljs$core$async$state_machine__22010__auto____1 = (function (state_28849){
while(true){
var ret_value__22011__auto__ = (function (){try{while(true){
var result__22012__auto__ = switch__22009__auto__.call(null,state_28849);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22012__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22012__auto__;
}
break;
}
}catch (e28876){if((e28876 instanceof Object)){
var ex__22013__auto__ = e28876;
var statearr_28877_28895 = state_28849;
(statearr_28877_28895[(5)] = ex__22013__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28849);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28876;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22011__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28896 = state_28849;
state_28849 = G__28896;
continue;
} else {
return ret_value__22011__auto__;
}
break;
}
});
cljs$core$async$state_machine__22010__auto__ = function(state_28849){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__22010__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__22010__auto____1.call(this,state_28849);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__22010__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__22010__auto____0;
cljs$core$async$state_machine__22010__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__22010__auto____1;
return cljs$core$async$state_machine__22010__auto__;
})()
;})(switch__22009__auto__,c__22071__auto___28880,out))
})();
var state__22073__auto__ = (function (){var statearr_28878 = f__22072__auto__.call(null);
(statearr_28878[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22071__auto___28880);

return statearr_28878;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22073__auto__);
});})(c__22071__auto___28880,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;

//# sourceMappingURL=async.js.map?rel=1441122548410