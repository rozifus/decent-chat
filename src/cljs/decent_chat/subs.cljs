(ns decent-chat.subs
    (:require-macros [reagent.ratom :refer [reaction]])
    (:require [re-frame.core :as re-frame]))

(re-frame/register-sub
 :messages
 (fn [db]
   (reaction (:messages @db))))
