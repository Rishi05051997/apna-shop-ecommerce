import { brands } from "./data/brands";

const FeatureBrands = () => {
    const content = brands.map(({ id, img }) => (
        <img key={id} src={img} alt="feat-img" />
    ));
    return (
        <section className="feature-brands mar-y-3">
            <div className="head-1 highlightMainText">Featured Brands</div>
            <div className="brand-img-div mar-y-3">
                <div className="basic-img-responsive-three-column">{content}</div>
            </div>
        </section>
    );
};

export default FeatureBrands;
