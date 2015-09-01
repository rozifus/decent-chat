(ns decent-chat.views
    (:require [reagent.core :as reagent :refer [atom]]
              [re-frame.core :refer [subscribe dispatch]]
              [re-com.core :as rc :refer-macros [handler-fn]]))

(defn title []
  (let [name (subscribe [:name])]
    (fn []
      [rc/title
       :label (str "Hello from " @name)
       :level :level1])))

(defn message-item [message]
  [rc/v-box :children [[:h4 (:id message)]
                       [:p (:content message)]]])


(defn messages-panel []
  (let [messages        (subscribe [:messages])]
    (fn []
      [rc/scroller 
       :v-scroll :auto 
       :size "auto" 
       :child [rc/v-box 
               :children (for [[id message] @messages]
                           ^{:key id} [message-item message])]])))
    

(defn input-box [value]
  (fn []
    [rc/box
      :size "auto" 
      :child [rc/input-textarea 
               :model value
               :width "100%"
               :style {:resize "none"}
               :on-change #(reset! value %)]]))


(defn send-button [input-value]
  (let [hover? (atom false)]
    (fn []
      [rc/border 
       :border "1em solid white"
       :child
      [rc/button 
       :on-click #(do(dispatch [:send-message @input-value])
                     (reset! input-value ""))
       :style {:color "white"
               :background-color (if @hover? "#0072bb" "#4d90fe")}
       :attr {:on-mouse-over (handler-fn (reset! hover? true))
              :on-mouse-out  (handler-fn (reset! hover? false))}
       :label "Send"]])))

(defn latch-button []
  (fn []
    [rc/border
     :border "1em solid white"
     :child
    [rc/button
     :on-click #(dispatch [:toggle-latch])
     :label "Latch"]]))

(defn input-buttons [input-value]
  (fn []
    [rc/v-box 
     :justify :end
     :children [[latch-button]
                [send-button input-value]]]))


        (comment [:button.send {:on-click #(dispatch [:send-message @value])} "send"])

(defn input-panel []
  (let [input-value (atom "")]
    (fn []
      [rc/h-box 
       :size "0 0 6em" 
       :align :end
       :justify :end
       :children [[input-box input-value]
                  [input-buttons input-value]]])))


(defn messaging-panel []
  (fn []
     [rc/v-box 
      :size "auto"
      :children [[messages-panel]
                 [input-panel]]]))

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
                [messaging-panel]
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
