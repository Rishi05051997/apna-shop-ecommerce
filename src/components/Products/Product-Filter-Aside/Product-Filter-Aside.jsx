import { Icon } from "@iconify/react";
import { useData } from "../../../context/data-context";


export const ProductsFilterAside = () => {

    const ratingArray = ['1', '2', '3', '4', '5']
    const {
        state: {
            sortBy,
            inStock,
            fastDelivery,
            priceRange,
            cotton,
            tericot,
            rating,
        },
        dispatch
    } = useData();
    return (
        <aside class="filter-aside pad-md">
            <header class="filter-aside-header">
                <div class="text-3 bold">Filters</div>
                <div class="text-3 bold" onClick={() => dispatch({ type: "CLEAR_ALL_FILTERS" })}>Clear All</div>
            </header>
            <hr className="mar-y-1" />
            <section className="sort-by mar-xl">
                <div class="head-3 highlightMainText">Sort By Price Range 0 to {priceRange}</div>
                <div class="radio-btn mar-y-1">
                    <div className="slider-container">

                        <input
                            type="range"
                            name=""
                            className="slider"
                            step="1000"
                            min="1000"
                            max="30000"
                            value={priceRange}
                            onChange={(event) =>
                                dispatch({ type: "PRICE_RANGE", payload: event.target.value })
                            }

                        />
                    </div>
                </div>
            </section>
            <hr class="mar-y-1" />
            <section class="sort-by mar-xl">
                <div class="head-3 highlightMainText">Sort By Price</div>
                <div class="radio-btn mar-y-1">
                    <input
                        id="high"
                        type="radio"
                        name="yes"
                        checked={sortBy === "HIGH_TO_LOW"}
                        onChange={() => dispatch({ type: "SORT", payload: "HIGH_TO_LOW" })}
                    />
                    <label class="text-2 bold" for="high">
                        Price High To Low
                    </label>
                </div>
                <div class="radio-btn mar-y-1">
                    <input
                        id="low"
                        type="radio"
                        name="yes"
                        checked={sortBy === "LOW_TO_HIGH"}
                        onChange={() => dispatch({ type: "SORT", payload: "LOW_TO_HIGH" })}
                    />
                    <label class="text-2 bold" for="lowhighLow">
                        Price Low To High
                    </label>
                </div>
            </section>
            <hr class="mar-y-1" />
            <section className="sort-by mar-xl">
                <div class="head-3 highlightMainText">Sort By Material Type</div>
                <div class="radio-btn mar-y-1">
                    <input
                        id="shirt"
                        type="checkbox"
                        name="shirt"
                        checked={cotton}
                        onChange={() => dispatch({ type: "TOGGLE_COTTON" })}
                    />
                    <label class="text-2 bold" for="shirt">
                        Cotton Only
                    </label>
                </div>
                <div class="radio-btn mar-y-1">
                    <input
                        id="t-shirt"
                        type="checkbox"
                        name="shirt"
                        checked={tericot}
                        onChange={() => dispatch({ type: "TOGGLE_NON_COTTON" })}
                    />
                    <label class="text-2 bold" for="t-shirt">
                        Tericot Only
                    </label>
                </div>
            </section>
            <hr className="mar-y-1" />
            <section className="sort-by mar-xl">
                <div class="head-3 highlightMainText">Sort By Availability</div>
                <div class="radio-btn mar-y-1">
                    <input
                        id="inStock"
                        type="checkbox"
                        checked={inStock}
                        onChange={() => dispatch({ type: "TOGGLE_STOCK" })}
                    />
                    <label class="text-2 bold" for="inStock">
                        Exclude out of stock
                    </label>
                </div>
                <div class="radio-btn mar-y-1">
                    <input
                        id="fastD"
                        type="checkbox"
                        checked={fastDelivery}
                        onChange={() => dispatch({ type: "TOGGLE_DELIVERY" })}
                    />
                    <label class="text-2 bold" for="fastD">
                        Fast Delivery only
                    </label>
                </div>
            </section>

            <hr className="mar-y-1" />
            <section className="sort-by mar-xl">
                <div class="head-3 highlightMainText">Sort By Rating</div>
                {
                    ratingArray.map((rate) =>
                        <div className="radio-btn mar-y-1">
                            <input
                                id="5"
                                type="radio"
                                name="rating"
                                checked={rating === rate}
                                value={rate}
                                onChange={(e) => dispatch({ type: "TOGGLE_RATING", payload: e.target.value })}
                            />
                            <label className="text-2 bold" htmlFor="5">
                                {rate} <Icon className="iconify" icon="emojione:star"></Icon> and Above
                            </label>
                        </div>
                    )
                }
            </section>
        </aside>
    )
}