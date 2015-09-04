(ns decent-chat.db)

(comment 
  (def message-format 
    {:id 0
     :content "hello"
     :media nil
     }))


(def default-db
  {:ui {:state {:latch false 
                :input "" }
        :config {}}
   :data {:messages (sorted-map)}})
