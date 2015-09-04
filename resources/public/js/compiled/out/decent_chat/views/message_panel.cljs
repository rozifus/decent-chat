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



(defn scroll-messages-to-bottom [element detect-scroll?]
  (reset! detect-scroll? false)
  (set! (.-scrollTop element) (.-scrollHeight element)))

(defn handle-messages-scroll-event [detect-scroll?]
  (dispatch [:ui/set-latch false @detect-scroll?])
  (reset! detect-scroll? true))

(defn message-panel []
  (let [messages        (subscribe [:messages])
        latch?          (subscribe [:ui/latch])
        detect-scroll?  (reagent/atom true)]
    (reagent/create-class
      {:display-name "message-panel"
       :component-did-mount
       #(when @latch? (scroll-messages-to-bottom (reagent/dom-node %) detect-scroll?))
       :component-did-update
       #(when @latch? (println @(reaction latch?) @latch?) (scroll-messages-to-bottom (reagent/dom-node %) detect-scroll?))
       :reagent-render
       (fn [] 
         [rc/scroller 
          :v-scroll :auto 
          :size "auto" 
          :attr { :on-scroll (handler-fn (handle-messages-scroll-event detect-scroll?))}
          :child [rc/v-box 
                  :children (for [[id message] @messages]
                                 ^{:key id} [message-item message])]])})))


(defn chat-panel []
  (fn []
     [rc/v-box 
      :size "auto"
      :children [[message-panel]
                 [input-panel]]]))


