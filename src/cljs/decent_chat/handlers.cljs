(ns decent-chat.handlers
    (:require 
      [re-frame.core :as r :refer [dispatch]]
      [decent-chat.db :as db :refer [blank-message]]))

(enable-console-print!)

(defn scroll-to-bottom [class-name]
  (let [elements (.getElementsByClassName js/document class-name)
        scroller (aget elements 0)]
    (when-not (nil? scroller)
      (set! (.-scrollTop scroller) (.-scrollHeight scroller)))))

(defn scrolled-to-bottom?
  ([class-name] (scrolled-to-bottom? class-name 0))
  ([class-name tolerance] 
   (let [elements (.getElementsByClassName js/document class-name)
         scroller (aget elements 0)]
     (cond 
       (nil? scroller) false 
       (>= (+ (.-scrollTop scroller) (.-clientHeight scroller) tolerance) 
           (.-scrollHeight scroller)) true
       :else false))))

(defn allocate-next-id
  "Returns the next daypart id.
  Assumes dayaprts are sorted.
  Returns one more than the current largest id."
  [todos]
  ((fnil inc 0) (last (keys todos))))


(r/register-handler
 :initialize-db
 (fn  [_ _]
   db/default-db))

(r/register-handler
 :op/recv-message
 (fn [state [_ msg]]
   (let [id (allocate-next-id (-> state :data :messages))]
     (assoc-in state [:data :messages id] (assoc msg :id id)))))

(r/register-handler
 :op/send-message
 (fn [state [_ text]]
   (let [msg (assoc (get-in state [:ui :state :input]) :text text)]
     (println msg)
     (dispatch [:op/recv-message msg])
     (assoc-in state [:ui :state :input] blank-message))))

(r/register-handler
 :ui/scroll-messages-to-bottom
 (fn [state [_]]
   (scroll-to-bottom "message-scroller")
   state))

(r/register-handler
 :ui/scroll-messages-to-bottom-if-latched
 (fn [state [_]]
   (when (get-in state [:ui :state :latch])
     (dispatch [:ui/scroll-messages-to-bottom]))
   state))

(r/register-handler
 :ui/message-scroll
 (fn [state [_]]
   (if (scrolled-to-bottom? "message-scroller" 20)
     (assoc-in state [:ui :state :latch] true)
     (assoc-in state [:ui :state :latch] false))))

(r/register-handler
 :file-attach
 (fn [state [_ file]]
   (assoc-in state [:ui :state :input :file] file)))

(comment "probably not needed" 

(r/register-handler
 :ui/ignore-next-message-scroll
 (fn [state [_]]
   (assoc-in state [:ui :state :ignore-message-scroll] true)))

(r/register-handler
 :ui/set-detect-scroll
 (fn [state [_ detect]]
   (assoc-in state [:ui :state :detect-scroll] detect)))

(r/register-handler
 :ui/deactivate-latch
 (fn [state [_]]
   (assoc-in state [:ui :state :latch] false)))

(r/register-handler
 :ui/set-latch
 (fn [app-state [_ latch? active?]]
   (if active?
     (assoc-in app-state [:ui :state :latch] latch?)
     app-state)))

(r/register-handler
 :ui/activate-latch
 (fn [state [_]]
   (dispatch [:ui/scroll-to-bottom-if-latched])
   (assoc-in state [:ui :state :latch] true)))

)


