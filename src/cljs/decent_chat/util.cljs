(ns decent-chat.util)

(defn suppress-event [e] 
  (.stopPropagation e)
  (.preventDefault e))

