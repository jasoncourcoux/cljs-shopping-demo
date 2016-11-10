(use 'figwheel-sidecar.repl-api)

(start-figwheel!)

(cljs-repl)

(start-autobuild "dev")

(start-autobuild "devcards")

(start-autobuild "test")