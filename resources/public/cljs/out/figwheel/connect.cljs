(ns figwheel.connect (:require [shopping-demo.app] [figwheel.client] [figwheel.client.utils]))
(figwheel.client/start {:on-jsload (fn [& x] (if js/shopping-demo.app.load (apply js/shopping-demo.app.load x) (figwheel.client.utils/log :debug "Figwheel: :on-jsload hook 'shopping-demo.app/load' is missing"))), :build-id "dev", :websocket-url "ws://localhost:3448/figwheel-ws"})

