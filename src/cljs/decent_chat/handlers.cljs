(ns decent-chat.handlers
    (:require 
      [re-frame.core :as r :refer [dispatch]]
      [decent-chat.db :as db]))

(enable-console-print!)

(defn scroll-messages-to-bottom []
  (let [elements (.getElementsByClassName js/document "message-scroller")
        scroller (aget elements 0)]
    (set! (.-scrollTop scroller) (.-scrollHeight scroller))))

(defn messages-scrolled-near-bottom? 
  ([] (messages-scrolled-near-bottom? 0))
  ([near] 
   (let [elements (.getElementsByClassName js/document "message-scroller")
         scroller (aget elements 0)]
     (if (>= (+ (.-scrollTop scroller) (.-clientHeight scroller))
             (.-scrollHeight scroller))
       true
       false))))

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
 :op/send-message
 (fn [app-state [_ content media]]
   (let [id (allocate-next-id (-> app-state :data :messages))]
     (assoc-in app-state [:data :messages id] 
               {:id id :content content :media media}))))

(r/register-handler
 :ui/scroll-messages-to-bottom
 (fn [state [_]]
   (scroll-messages-to-bottom)
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
   (if (messages-scrolled-near-bottom? 20)
     (assoc-in state [:ui :state :latch] true)
     (assoc-in state [:ui :state :latch] false))))




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


