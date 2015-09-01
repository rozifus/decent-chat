(ns figwheel.connect (:require [figwheel.client] [decent-chat.core] [figwheel.client.utils]))
(figwheel.client/start {:websocket-url "ws://localhost:3449/figwheel-ws", :on-jsload (fn [& x] (if js/decent-chat.core.mount-root (apply js/decent-chat.core.mount-root x) (figwheel.client.utils/log :debug "Figwheel: :on-jsload hook 'decent-chat.core/mount-root' is missing"))), :build-id "dev"})

