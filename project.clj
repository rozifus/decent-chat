(defproject decent-chat "0.1.0-SNAPSHOT"
  :dependencies [[org.clojure/clojure "1.6.0"]
                 [org.clojure/clojurescript "0.0-3211"]
                 [reagent "0.5.0"]
                 [re-frame "0.4.1"]
                 [re-com "0.6.1"]
                 [garden "1.2.5"]]

  :source-paths ["src/clj"]

  :plugins [[lein-cljsbuild "1.0.6"]
            [lein-figwheel "0.3.3" :exclusions [cider/cider-nrepl]] 
            [lein-garden "0.2.6"] ]

  :clean-targets ^{:protect false} ["resources/public/js/compiled" "target"  
                                    "resources/public/css/compiled"]
  
  :garden {:builds [{:id "screen"
                     :source-paths ["src/clj"]
                     :stylesheet decent-chat.css/screen
                     :compiler {:output-to "resources/public/css/compiled/screen.css"
                                :pretty-print? true}}]}

  :cljsbuild {:builds [{:id "dev"
                        :source-paths ["src/cljs"]

                        :figwheel {:on-jsload "decent-chat.core/mount-root"}

                        :compiler {:main decent-chat.core
                                   :output-to "resources/public/js/compiled/app.js"
                                   :output-dir "resources/public/js/compiled/out"
                                   :asset-path "js/compiled/out"
                                   :source-map-timestamp true}}

                       {:id "min"
                        :source-paths ["src/cljs"]
                        :compiler {:main decent-chat.core
                                   :output-to "resources/public/js/compiled/app.js"
                                   :optimizations :advanced
                                   :pretty-print false}}]})
