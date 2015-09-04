(ns decent-chat.core
    (:require [reagent.core :as reagent]
              [re-frame.core :as re-frame]
              [decent-chat.handlers]
              [decent-chat.subs]
              [decent-chat.views.main :refer [app-panel]]))

(defn mount-root []
  (reagent/render [app-panel]
                  (.getElementById js/document "app")))

(defn ^:export init [] 
  (re-frame/dispatch-sync [:initialize-db])
  (mount-root))
