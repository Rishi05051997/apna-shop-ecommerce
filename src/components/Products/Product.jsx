import { useNavigate } from "react-router-dom";
import { AddToCart } from "./../Cart/Add-To-Cart"

const Product = ({ products }) => {
    const navigate = useNavigate();
    const { _id, productImg, productName, categoryName, description, vendorName, finalPrice, mainPrice, off, rating, delivery, badgeCss } = products;
    return (
        <div key={_id} class="container-card sm-card-width">
            <div class="card-header">
                <div class="image-div">
                    <img class="card-img" src={productImg} alt="card-img" />
                </div>
                <div class="sub-card-header">
                    <div class="head-3 highlightMainText">{productName}</div>
                    <div class="text-2 bold highlightMainText">{categoryName}</div>
                </div>
            </div>
            <div class="card-body text-2 mar-md">
                <div class="head-4">{description}</div>
                <div class="text-2">{vendorName}</div>
                <div class="text-2 mar-y-1 bold">
                    <span>₹{finalPrice}</span>
                    <span style={{ textDecoration: "line-through" }}>
                        ₹{mainPrice}
                    </span>
                    <span class="highlightMainText"> {off}</span>
                </div>
                <div class="mar-y-1">
                    <span class="bold">{rating}</span>
                    <span class="iconify" data-icon="emojione:star"></span> |
                    <span class="bold">2 Reviews</span>
                </div>
                <div class="mar-y-1">
                    <span class="bold highlightMainText">{delivery}</span>
                </div>
                <div class="mar-y-1">
                    <button class="btn-link text-2" onClick={() => navigate(`/productDetails/${products._id}`)}>
                        Read More
                    </button>
                </div>
            </div>
            <footer>
                <div class="card-footer text-2 mar-sm">
                    {products.inStock ? (
                        < AddToCart btnNormalCss={"btn btn-primary"} btnSuccessCss={"btn btn-success"} product={products} />
                    ) : (
                        <button className="btn btn-secondory" disabled>
                            Out of Stock
                        </button>
                    )}
                    <span

                        class="iconify cursor_"
                        data-icon="icon-park-outline:like"
                    ></span>
                    <span class="iconify cursor_" data-icon="ci:share"></span>
                    <span
                        class="iconify cursor_"
                        data-icon="akar-icons:more-vertical-fill"
                    ></span>
                </div>
            </footer>
            <div class="badge-overlay">
                <span class={badgeCss}>{off}</span>
            </div>
        </div>
    )
}

export default Product;