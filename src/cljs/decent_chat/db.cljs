(ns decent-chat.db)

(def blank-message 
  {:id nil
   :text ""
   :file nil})


(def default-db
  {:ui {:state {:latch true 
                :ignore-message-scroll false 
                :input {:file nil}}
        :config {}}
   :data {:messages (sorted-map)}})
