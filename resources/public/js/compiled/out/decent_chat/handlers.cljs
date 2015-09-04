(ns decent-chat.handlers
    (:require 
      [re-frame.core :as re-frame]
      [decent-chat.db :as db]))

(enable-console-print!)

(defn allocate-next-id
  "Returns the next daypart id.
  Assumes dayaprts are sorted.
  Returns one more than the current largest id."
  [todos]
  ((fnil inc 0) (last (keys todos))))


(re-frame/register-handler
 :initialize-db
 (fn  [_ _]
   db/default-db))

(re-frame/register-handler
 :op/send-message
 (fn [app-state [_ content media]]
   (println app-state)
   (let [id (allocate-next-id (-> app-state :data :messages))]
     (assoc-in app-state [:data :messages id] 
               {:id id :content content :media media}))))

(re-frame/register-handler
 :ui/set-latch
 (fn [app-state [_ tf]]
   (assoc-in app-state [:ui :state :latch] tf)))


