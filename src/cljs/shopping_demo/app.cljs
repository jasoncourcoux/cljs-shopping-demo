(ns shopping-demo.app
  (:require [reagent.core :as r]
            [goog.i18n.NumberFormat :as NumberFormat]
            [goog.dom :as gdom]
            [cljs.spec :as s]
            [clojure.test.check.generators :as gen]
            [devcards.core])
  (:require-macros
    [devcards.core :as dc :refer [defcard defcard-doc noframe-doc deftest dom-node]]))

(enable-console-print!)

(set! goog.i18n.NumberFormatSymbols goog.i18n.NumberFormatSymbols_en_GB)

(def app-state (r/atom {:logged-in true}))

(s/def ::brand (s/and string? #(> (count %) 5)))

(s/def ::id uuid?)

(s/def ::description (s/and string? #(> (count %) 25)))

(s/def ::price (s/double-in :min 0.01 :max 3000))

(s/def ::number-of-products (s/int-in 5 100))

(s/def ::product (s/keys :req [::id
                               ::brand
                               ::description
                               ::price]))

(defn generate-random-products! []
  (swap! app-state assoc :products (shuffle (map (fn [p]
                                                   {:id          (::id p)
                                                    :brand       (::brand p)
                                                    :description (::description p)
                                                    :price       (::price p)})
                                                 (vals (s/exercise ::product
                                                                   (first (shuffle (vals (s/exercise ::number-of-products))))))))))

(generate-random-products!)

(defn logged-in? [state]
  (:logged-in state))

(defn header [state]
  [:div.section.header
   [:div.account-status-bar
    [:div.links
     [:a {:href "javascript:void(0);"} "About"]
     [:a {:href     "javascript:void(0);"
          :on-click (fn [e] (swap! app-state assoc :logged-in (-> state :logged-in not)))}
      (if (logged-in? state) "Logout" "Login")]
     [:a {:href "javascript:void(0);"} "Your Account"]]]
   [:div.main-header-container
    [:div.logo
     [:img {:src "img/cljs.svg"}]
     [:span "ClojureScript Demo"]]
    [:div.search
     [:input {:type        "search"
              :placeholder "search"
              :on-input (fn [e]
                          (swap! app-state assoc :search-input-value (.. e -target -value)))}]
     [:button {:type     :submit
               :on-click (fn [e]
                           (swap! app-state assoc :products :loading)
                           (swap! app-state assoc :search-term (:search-input-value state))
                           (generate-random-products!))} "Go"]]]])

(defn breadcrumbs [state]
  [:nav.section.breadcrumb-container
   [:a {:href      "javascript:void(0);"
        :className "breadcrumb-link"} "Home"]
   [:span.breadcrumb-seperator ">"]
   [:a {:href      "javascript:void(0);"
        :className "breadcrumb-link"} "Categories"]])

(defn product [product]
  [:div.product-container {:key (:id product)}
   [:img {:src "https://placeholdit.imgix.net/~text?txtsize=33&txt=Product%20Image&w=250&h=250"}]
   [:div.description
    [:div.name
     [:b (:brand product)]
     " - " (:description product)]]
   [:div.pricing
    [:div.price "Price: " (.format (goog.i18n.NumberFormat. (.-CURRENCY NumberFormat/Format)) (:price product))]]])

(defn content [state]
  [:section.section.content
   [:nav.section.filter "Filter"]
   [:section.section.search-results
    (let [products (:products state)]
      (cond (= products :loading) [:div.noproducts "Loading..."]
            (empty? products) [:div.noproducts "Sorry there are no products for this search"]
            :else [:div [:section.section.search-header
                         "Showing results for "
                         [:b (:search-term state)]]
                   [:div.products
                    (map #(product %) (:products state))]]))]])

(defn footer [state]
  [:footer.section.footer
   [:div "© 2016 Jason Courcoux"]
   [:div "Clojure/ClojureScript commerce app demo for brown bag session."]])

(defn app [s]
  (fn []
    (let [state @s]
      [:div
       (header state)
       (breadcrumbs state)
       (content state)
       (footer state)])))

(defn mountit []
  (r/render-component [(app app-state)]
                      (gdom/getElement "container")))

(mountit)
