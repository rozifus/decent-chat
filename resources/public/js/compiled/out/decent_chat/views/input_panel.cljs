(ns decent-chat.views.input-panel
    (:require 
      [reagent.core :as reagent :refer [atom]]
      [re-frame.core :refer [subscribe dispatch]]
      [re-com.core :as rc :refer-macros [handler-fn]])
    (:require-macros
      [reagent.ratom :refer [reaction]]))

(defn send-button [input-value]
  (let [hover? (atom false)
        disabled? (reaction (= "" (clojure.string/trim @input-value)))]
    (fn []
      [rc/border 
       :border "1em solid white"
       :child
      [rc/button 
       :on-click #(do(dispatch [:op/send-message @input-value nil])
                     (reset! input-value ""))
       :disabled? @disabled? 
       :style {:color "white"
               :background-color (if @hover? "#0072bb" "#4d90fe")}
       :attr {:on-mouse-over (handler-fn (reset! hover? true))
              :on-mouse-out  (handler-fn (reset! hover? false))}
       :label "Send"]])))

(defn latch-button []
  (let [disabled? (subscribe [:ui/latch])]
    (fn []
      [rc/border
       :border "1em solid white"
       :child [rc/button
                :on-click #(dispatch [:ui/set-latch true])
                :disabled? (reaction @disabled?) 
                :label "Latch"]])))

(defn input-buttons [input-value]
  [rc/v-box 
   :justify :end
   :children [[latch-button]
              [send-button input-value]]])

(defn input-box [value]
  [rc/box
    :size "auto" 
    :child [rc/input-textarea 
             :model value
             :width "100%"
             :style {:resize "none"}
             :change-on-blur? false
             :on-change #(reset! value %)]])

(defn input-panel []
  (let [input-value (atom "")]
    (fn []
      [rc/h-box 
       :size "0 0 6em" 
       :align :end
       :justify :end
       :children [[input-box input-value]
                  [input-buttons input-value]]])))


