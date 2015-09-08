(ns decent-chat.subs
    (:require-macros [reagent.ratom :refer [reaction]])
    (:require [re-frame.core :as re-frame]))

(re-frame/register-sub
 :messages
 (fn [db]
   (reaction (get-in @db [:data :messages]))))

(re-frame/register-sub
 :ui/latch
 (fn [db]
   (reaction (get-in @db [:ui :state :latch]))))

(re-frame/register-sub
 :upload-item
 (fn [db]
   (reaction (get-in @db [:ui :state :input :file]))))
