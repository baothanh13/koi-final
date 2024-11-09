import styles from "./index.module.css";
import {Slide} from "react-slideshow-image";
import classNames from "classnames/bind";
import {useRef, useState} from "react";

const cx = classNames.bind(styles);

function ContentSlider({slider}) {
    const [slideIndex, setSlideIndex] = useState(0);

    const slideRef = useRef();

    const goToNext = () => {
        slideRef.current.goNext();
    };

    const goToPrev = () => {
        slideRef.current.goBack();
    };

    const onStartChangeSlide = (from, to) => {
        setSlideIndex(to);
    }

    return (
        <>
            <div
                className={cx("grid grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-4  bg-white p-[2rem] font-medium text-[0.88rem]", "shadow-3")}>
                {slider.map((item, index) => index !== slideIndex && < p key={index}>{index + 1}. {item.title}</p>)}
            </div>
            <div
                className={cx("bg-[#00194F] max-w-[528px] px-4 py-2 flex items-start lg:items-center justify-between")}>
                <div className={cx("flex h-10 lg:h-auto")}>
                    <p className={cx("text-white text-sm font-bold lg:text-base uppercase")}>{slideIndex + 1}.</p>
                    <p className={cx("text-white text-sm lg:text-base font-bold uppercase ml-1")}>
                        {slider[slideIndex].title}
                    </p>
                </div>
                <div className={cx("ml-3 flex")}>
                    <button className={cx("w-10 h-10", "bg-gray-1")} onClick={goToPrev}>
                        <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="chevron-left"
                             className={cx("svg-inline--fa fa-chevron-left ")} role="img"
                             xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" color="white" height="24"
                             width="24">
                            <path fill="currentColor"
                                  d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l192 192c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256 246.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192z"></path>
                        </svg>
                    </button>
                    <button className={cx("w-10 h-10 ml-2", "bg-gray-1")} onClick={goToNext}>
                        <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="chevron-right"
                             className={cx("svg-inline--fa fa-chevron-right")} role="img"
                             xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" color="white" height="24"
                             width="24">
                            <path fill="currentColor"
                                  d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z"></path>
                        </svg>
                    </button>
                </div>
            </div>
            <div className={cx("mt-4")}>
                <Slide ref={slideRef} slidesToScroll={1} slidesToShow={3} arrows={false}
                       onStartChange={onStartChangeSlide}
                       cssClass={cx("slider-container")}>
                    {slider.map((item, index) => {
                        return (
                            <div key={index} className={cx("each-slide ml-4")}>
                                <img src={item.src ?? ""} alt="slide"
                                     className={cx("w-auto h-auto lg:w-[444px] lg:h-[222px] mr-2")}/>
                            </div>
                        );
                    })}
                </Slide>
            </div>
            <div
                className={cx("mt-2 p-4 bg-white max-w-[528px] h-[234px] ", "shadow-2")}>
                <p className={cx("text-lg font-bold uppercase")}>{slider[slideIndex].title}</p>
                <p className={cx("mt-3 text-black text-sm font-normal")}>{slider[slideIndex].desc}</p>
            </div>
        </>
    )
}

export default ContentSlider;