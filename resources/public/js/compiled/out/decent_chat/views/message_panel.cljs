(ns decent-chat.views.message-panel
    (:require 
      [reagent.core :as reagent :refer [atom]]
      [re-frame.core :refer [subscribe dispatch]]
      [re-com.core :as rc :refer-macros [handler-fn]])
    (:require-macros
      [reagent.ratom :refer [reaction]]))

(defn message-item [message]
  [rc/v-box :children [[:h4 (:id message)]
                       [:p (:content message)]]])


(defn message-panel []
  (let [messages        (subscribe [:messages])]
    (fn []
      [rc/scroller 
       :v-scroll :auto 
       :size "auto" 
       :attr { :on-scroll #(dispatch [:ui/set-latch false]) }
       :child [rc/v-box 
               :children (for [[id message] @messages]
                           ^{:key id} [message-item message])]])))
