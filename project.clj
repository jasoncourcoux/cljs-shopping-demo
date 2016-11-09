(defproject shopping-demo "0.1.0-SNAPSHOT"
  :description "FIXME: write description"
  :url "http://example.com/FIXME"
  :license {:name "Eclipse Public License"
            :url "http://www.eclipse.org/legal/epl-v10.html"}
  :dependencies [[org.clojure/clojure "1.9.0-alpha13"]
                 [org.clojure/test.check "0.9.0"]
                 [com.cemerick/piggieback "0.2.1"]

                 ;; Frontend Dependencies
                 [org.clojure/clojurescript "1.9.293"]

                 [figwheel "0.5.3-2"]
                 [reagent "0.6.0"]
                 [figwheel-sidecar "0.5.2"]]
  :repl-options {:port 5600
                 :nrepl-middleware [cemerick.piggieback/wrap-cljs-repl]}
  :figwheel {:http-server-root "public"
             :server-port 3448
             :css-dirs ["resources/public/css"]}

  :plugins [[lein-cljsbuild "1.1.3"]
            [lein-figwheel "0.5.3-2" :exclusions [org.clojure/clojure]]]

  :cljsbuild {:builds [{:id "dev"
                        :source-paths ["src/cljs"]
                        :figwheel {:websocket-host "localhost"
                                   :on-jsload "shopping-demo.app/load"}
                        :compiler {:output-to "resources/public/cljs/out/app.js"
                                   :output-dir "resources/public/cljs/out"
                                   :optimizations :none
                                   :source-map true}}]})
