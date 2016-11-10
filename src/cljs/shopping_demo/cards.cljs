(ns shopping-demo.cards
  (:require [reagent.core :as r]
            [goog.i18n.NumberFormat :as NumberFormat]
            [goog.dom :as gdom]
            [cljs.spec :as s]
            [clojure.test.check.generators :as gen]
            [devcards.core])
  (:require-macros
    [devcards.core :as dc :refer [defcard defcard-doc noframe-doc deftest dom-node]]))

(enable-console-print!)

(defcard basket
         "This is simple text card")