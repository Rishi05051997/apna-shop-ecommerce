import { Icon } from "@iconify/react";
export const Footer = () => {
    return (
        <footer className="footer pad-sm">
            <div className="btn-list">
                <div className="btn-round">
                    <button className="btn-primary xl-bdr-radius pad-xs">
                        <a href="https://www.facebbok.com/">
                            <span className="iconify">
                                <Icon icon="ant-design:facebook-filled" />
                            </span>
                        </a>
                    </button>
                </div>
                <div className="btn-round">
                    <button className="btn-primary xl-bdr-radius pad-xs">
                        <a href="https://www.twitter.com/">
                            <span className="iconify">
                                <Icon icon="mdi:twitter" />
                            </span>
                        </a>
                    </button>
                </div>
                <div className="btn-round">
                    <button className="btn-primary xl-bdr-radius pad-xs">
                        <a href="https://www.linkedin.com/in/vrushabh-dhatrak-328ab0148/">
                            <span className="iconify">
                                <Icon icon="akar-icons:linkedin-fill" />
                            </span>
                        </a>
                    </button>
                </div>

                <div className="btn-round">
                    <button className="btn-primary xl-bdr-radius pad-xs">
                        <a href="https://www.instargarm.com/">
                            <span className="iconify">
                                <Icon icon="akar-icons:instagram-fill" />
                            </span>
                        </a>
                    </button>
                </div>

                <div className="btn-round">
                    <button className="btn-primary xl-bdr-radius pad-xs">
                        <a href="https://www.github.com/">
                            <span className="iconify">
                                <Icon icon="akar-icons:github-fill" />
                            </span>
                        </a>
                    </button>
                </div>
            </div>
            <div className="highlightMainText text-2">
                Made With{" "}
                <span role="img" aria-labelledby="like">
                    ❤️
                </span>{" "}
                By Vrushabh Dhatrak
            </div>
            <div className="highlightMainText text-2">Copyright @ 2022</div>
        </footer>
    );
};