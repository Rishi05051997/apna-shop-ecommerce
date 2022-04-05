import { testimonialData } from "./data/testimonial-data";

const Testimonials = () => {
    const content = testimonialData.map(
        ({ id, name, professsion, comment, dataLable, userImg }) => (
            <div key={id} className="container-card sm-card-width">
                <div className="card-header card-badge" data-label={dataLable}>
                    <div className="image-div">
                        <img className="card-img" src={userImg} alt="user" />
                    </div>

                    <div className="sub-card-header">
                        <div className="head-2 highlightMainText">{name}</div>
                        <p className="text-3 bold">{professsion}</p>
                    </div>
                </div>
                <div className="card-body text-2 mar-md">{comment}</div>
                <footer>
                    <div className="card-footer text-2 mar-sm">
                        <button className="btn-link">Read</button>
                        <button className="btn-link">Bookmark</button>
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
            </div>
        )
    );
    return (
        <section className="testimonials mar-y-3">
            <div className="head-1 highlightMainText">Testimonials</div>
            <div className="testimonials-cards mar-y-3">{content}</div>
        </section>
    );
};

export default Testimonials;
