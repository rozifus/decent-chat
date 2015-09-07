(ns decent-chat.views.filereader
    (:require 
      [reagent.core :as reagent :refer [atom]]
      [re-frame.core :refer [subscribe dispatch]]
      [re-com.core :as rc :refer-macros [handler-fn]]
      [filereader.js])
    (:require-macros
      [reagent.ratom :refer [reaction]]))

;;;;;;;;;;;;;;;;
;; Filereader ;;
;;;;;;;;;;;;;;;;

(defn onloadie [e file]
  (let [img (js/Image.)]
    (set! (.-onload img) (fn []
                          (.appendChild (.-body js/document) img)))
    (set! (.-src img) (.. e -target -result))))

(defn on-file-attach [e file]
  (dispatch [:file-attach (.. e -target -result) file]))

(defn filereader-box []
  (reagent/create-class
    {:display-name "filereader-area"
     :component-did-mount
     #(.setupDrop js/FileReaderJS (reagent/dom-node %) 
                                  #js{:on #js {:load on-file-attach}})
     :component-did-update
     #(false)
     :reagent-render
     (fn [] 
       [rc/box 
        :size "auto"
        :child [rc/alert-box 
                :alert-type :info]])}))
                


