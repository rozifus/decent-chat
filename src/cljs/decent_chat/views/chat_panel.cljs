(ns decent-chat.views.chat-panel
    (:require 
      [reagent.core :as reagent :refer [atom]]
      [re-frame.core :refer [subscribe dispatch]]
      [re-com.core :as rc :refer-macros [handler-fn]]
      dropzone)
    (:require-macros
      [reagent.ratom :refer [reaction]]))

;;;;;;;;;;;;;;;;;
;; Input Panel ;;
;;;;;;;;;;;;;;;;;

(defn send-button [input-value]
  (let [hover? (atom false)
        disabled? (reaction (= "" (clojure.string/trim @input-value)))]
    (fn [input-value]
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
                :on-click #(do(dispatch [:ui/scroll-messages-to-bottom]))
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

(defn dropzone-box []
  (reagent/create-class
    {:display-name "dropzone-area"
     :component-did-mount
     #(js/Dropzone. "#file-dropzone" #js{:url "/file/post"})
     :component-did-update
     #(false)
     :reagent-render
     (fn [] 
       [rc/box 
        :size "auto"
        :child [:div#file-dropzone]])}))

(defn input-panel []
  (let [input-value (atom "")]
    (fn []
      [rc/h-box 
       :size "0 0 6em" 
       :align :end
       :justify :end
       :children [[dropzone-box]
                  [input-box input-value]
                  [input-buttons input-value]]])))

;;;;;;;;;;;;;;;;;;;
;; Message Panel ;;
;;;;;;;;;;;;;;;;;;;

(defn message-item [message]
  [rc/v-box :children [[:h4 (:id message)]
                       [:p (:content message)]]])

(defn message-panel []
  (let [messages        (subscribe [:messages])
        latch           (subscribe [:ui/latch])
        detect-scroll?  (reagent/atom true)]
    (reagent/create-class
      {:display-name "message-panel"
       :component-did-mount
       #(dispatch [:ui/scroll-messages-to-bottom-if-latched]) 
       :component-did-update
       #(dispatch [:ui/scroll-messages-to-bottom-if-latched])
       :reagent-render
       (fn [] 
         [rc/scroller 
          :v-scroll :auto 
          :size "auto" 
          :class "message-scroller"
          :attr { :on-scroll #(dispatch [:ui/message-scroll])}
          :child [rc/v-box 
                  :children (for [[id message] @messages]
                                 ^{:key id} [message-item message])]])})))

;;;;;;;;;;;;;;;;
;; Chat Panel ;;
;;;;;;;;;;;;;;;;

(defn chat-panel []
  (fn []
     [rc/v-box 
      :size "auto"
      :children [[message-panel]
                 [input-panel]]]))


