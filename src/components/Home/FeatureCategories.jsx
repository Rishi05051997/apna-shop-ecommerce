import { Link } from "react-router-dom";
import { useData } from "../../context";

const FeatureCategories = () => {
    const { state: { categories }, } = useData();
    console.log(categories)
    const content = categories.map(
        ({ categoryName, id, description, offer, productImg, bedgeCss }) => (
            <div key={id} className="container-card md-card-width">
                <div className="card-header pad-md">
                    <div className="head-2 highlightMainText">{categoryName}</div>
                    <p className="text-2 bold">{description}</p>
                </div>
                <div className="image-div">
                    <img className="card-img" src={productImg} alt="card-img" />
                </div>
                <div className="card_body text-3 mar-md">
                    <p className="text-2">
                        {offer}
                    </p>
                </div>
                <footer>
                    <div className="card-footer text-2 mar-md">
                        <button className="btn btn-link">
                            <Link to="/products">Read More</Link>
                        </button>
                        <span
                            className="iconify cursor_"
                            data-icon="icon-park-outline:like"
                        ></span>
                        <span className="iconify cursor_" data-icon="ci:share"></span>
                        <span
                            className="iconify cursor_"
                            data-icon="akar-icons:more-vertical-fill"
                        ></span>
                    </div>
                </footer>
                <div className="badge-overlay">
                    <span className={bedgeCss}>Sale</span>
                </div>
            </div>
        )
    );
    return (
        <section className="feature-categories mar-y-3">
            <div className="head-1 highlightMainText">Featured Categories</div>
            <div className="feature-cards-section mar-y-3">{content}</div>
        </section>
    );
};

export default FeatureCategories;
