(ns decent-chat.views.chat
    (:require 
      [cljs.core :refer [js-obj]]
      [reagent.core :as reagent :refer [atom]]
      [re-frame.core :refer [subscribe dispatch]]
      [re-com.core :as rc :refer-macros [handler-fn]]
      [decent-chat.views.filereader :refer [file-box]])
    (:require-macros
      [reagent.ratom :refer [reaction]]))

;;;;;;;;;;;;;;;;;
;; Input Panel ;;
;;;;;;;;;;;;;;;;;

(defn send-button [input-value]
  (let [hover? (atom false)
        disabled? (reaction (= "" (clojure.string/trim @input-value)))]
    (fn [input-value]
      [rc/box
       :size "auto"
       :child
      [rc/button 
       :style {:width "10em"}
       :on-click #(do(dispatch [:op/send-message @input-value])
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
       [rc/button
        :style {:width "5em"}

        :on-click #(do(dispatch [:ui/scroll-messages-to-bottom]))
        :disabled? (reaction @disabled?) 
        :label "Latch"])))

(defn input-buttons [input-value]
  [rc/v-box 
   :justify :end
   :width "5em"
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
       :size "0 0 10em" 
       :padding "1em"
       :align :end
       :justify :end
       :children [[file-box]
                  [input-box input-value]
                  [input-buttons input-value]]])))

;;;;;;;;;;;;;;;;;;;
;; Message Panel ;;
;;;;;;;;;;;;;;;;;;;

(defn media-item [message]
  (let [expanded (atom false)]
    (fn [message]
      [rc/box 
       :size "0 1 auto"
       :attr {:on-click (handler-fn (swap! expanded not))}
       :child [rc/box :size "auto"
               :child 
                    
       [:img 
               {:src (:file message)}
               ]]]))) 

(defn image-item [message]
  (let [expanded (atom false)]
    (fn [message]
      [:img 
       {:src (:file message)
        :on-click (handler-fn (swap! expanded not))
        :style { :max-width (if @expanded "100%" "100px")
                 :margin "0 auto 0 0" }
        }])))


(defn message-item [message]
  [rc/v-box :children [[rc/line]
                       [:h4 (:id message)]
                       (if (:file message) [image-item message])
                       [:p (:text message)]]])

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
          :padding "1em"
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


