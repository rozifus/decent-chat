(ns decent-chat.handlers
    (:require [re-frame.core :as re-frame]
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
 :send-message
 (fn [app-state [_ text]]
   (let [id (allocate-next-id (:messages app-state))]
     (assoc-in app-state [:messages id] {:id id :content text}))))

