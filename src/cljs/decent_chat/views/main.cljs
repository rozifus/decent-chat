(ns decent-chat.views.main
    (:require 
      [reagent.core :as reagent :refer [atom]]
      [re-frame.core :refer [subscribe dispatch]]
      [re-com.core :as rc :refer-macros [handler-fn]]
      [decent-chat.views.chat-panel :refer [chat-panel]])
    (:require-macros
      [reagent.ratom :refer [reaction]]))

(defn options-panel []
  (fn []
    [rc/v-box
     :children [rc/p "sidebar"]
     ]))

(defn sidebar-panel []
  (fn []
    [rc/box
     :size "0 0 16em"
     :child [options-panel]]))

(defn main-panel []
  (fn []
    [rc/h-box 
     :size "1 1 auto"
     :justify :end
     :children [[rc/gap :size "1em"]
                [chat-panel]
                [sidebar-panel]]]))

(defn header-title []
  (fn []
    [rc/box :child [:h1 "decent-chat"]]))

(defn header-panel []
  (fn []
    [rc/h-box 
     :justify :center
     :children [[header-title]]]))

(defn footer-text []
  (fn []
    [rc/box :child [:p "I like feet"]]))

(defn footer-panel []
  (fn []
    [rc/h-box 
     :justify :center
     :align :end
     :children [[footer-text]]]))

(defn app-panel []
  (fn []
    [rc/v-box 
     :size "auto"
     :height "100%"
     :width "100%"
     :align-self :end
     :children [[header-panel]
                [main-panel]
                [footer-panel]]]))
