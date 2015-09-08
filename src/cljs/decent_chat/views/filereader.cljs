(ns decent-chat.views.filereader
    (:require 
      [reagent.core :as reagent :refer [atom]]
      [re-frame.core :refer [subscribe dispatch]]
      [re-com.core :as rc :refer-macros [handler-fn]]
      [decent-chat.config :refer [globals]]
      [filereader.js])
    (:require-macros
      [reagent.ratom :refer [reaction]]))

;;;;;;;;;;;;;;;;;;;;;;
;; Filereader Setup ;;
;;;;;;;;;;;;;;;;;;;;;;

(defn on-file-attach [e file]
  (dispatch [:file-attach (.. e -target -result) file]))

(defn under-size-limit? [file]
  (if (> (.-size file) (:max-attachment-size globals))
    false
    true))

(def filereader-opts #js {
  :accept "image/*"
  :on #js {
    :beforestart under-size-limit?
    :load on-file-attach}})

(defn setup-file-dropper [node]
  (.setupDrop js/FileReaderJS node filereader-opts))

(defn setup-file-input [node]
  (.setupInput js/FileReaderJS node filereader-opts))

;;;;;;;;;;;;;;;;;;;;;;
;; Filereader Views ;;
;;;;;;;;;;;;;;;;;;;;;;

(defn add-file-overlay [text]
   [rc/box 
    :justify :center
    :align :center
    :style {:position "relative"
            :left 0
            :right 0
            :top 0
            :bottom 0
            :z-index 101 
            :color "#aaddee"
            :border "1px dashed #99ccff"
            :background "#cceeff"}
    :child [:p {:style {:font-size "6em"
                        :line-height "0px"
                        :margin "0px"}} text]])

(defn file-placeholder-input [file-input-id]
  (reagent/create-class
    {:display-name "file-placeholder"
     :component-did-mount
     #(setup-file-input (reagent/dom-node %))
     :component-did-update
     #(setup-file-input (reagent/dom-node %))
     :reagent-render
     (fn []
       [:input {
          :type "file"
          :id file-input-id 
          :style {
            :display "none"
            :opacity "0"
            :padding "0px"
            :margin "0px"
            :width "0px"
            :height "0px"
            }}])}))

(defn file-placeholder-visual []
  (let [file-input-id "file-input"]
    [rc/v-box 
     :justify :center
     :align   :center
     :attr {:on-click (handler-fn (.click (.getElementById js/document file-input-id)))}
     :style {:-webkit-touch-callout "none"
             :-webkit-user-select "none"
             :-kthml-user-select "none"
             :-moz-user-select "none"
             :-ms-user-select "none"
             :user-select "none"
             :margin "auto"
             :width "100%"
             :height "100%"
             :color "#cceeff"
             :border "2px dashed #eeeeff"
             :background "#fdfeff"}
     :children [[file-placeholder-input file-input-id]
                [:p {:style {:font-size "7em"
                             :line-height "0px"
                             :margin "0px"}} "+"]]]))

(defn file-display [hover upload-item]
  (fn []
    [rc/box
     :size "auto"
     :attr {:on-mouse-over (handler-fn (reset! hover true))
            :on-mouse-out  (handler-fn (reset! hover false))
            :on-click #(dispatch [:file-detach])}
     :child (if @hover 
              [:img {:src @upload-item
                     :style {:padding "1em"
                             :border "2px dashed #ffdddd"}}]
              [:img {:src @upload-item}])]))

(defn file-box []
  (let [hover       (atom false)
        upload-item (subscribe [:upload-item])]
    (reagent/create-class
      {:display-name "file-box"
       :component-did-mount
       #(setup-file-dropper (reagent/dom-node %))
       :component-did-update
       #(setup-file-dropper (reagent/dom-node %))
       :reagent-render
       (fn []
         [rc/box
          :width "7em"
          :height "7em"
          :attr {:on-mouse-over (handler-fn (reset! hover true))
                 :on-mouse-out  (handler-fn (reset! hover false))}
          :child (if (nil? @upload-item)
                   [file-placeholder-visual]
                   [file-display hover upload-item])])})))
