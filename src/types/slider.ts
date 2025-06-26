import { Swiper as SwiperClass } from "swiper";

interface BreakpointSettings {
  slidesPerView: number;
  spaceBetween: number;
}

export interface SliderReadyToUseSettings {
  slidesPerView: number;
  spaceBetween: number;
  breakpoints: {
    [key: number]: BreakpointSettings;
  };
}

export interface SlideNavigationProps {
    swiperRef: React.RefObject<SwiperClass | null>;
}


export type SliderClientsKindSettings = {
  dots: boolean;
  arrows: boolean;
  slidesToScroll: number;
  infinite: boolean;
  centerPadding: string;
  slidesToShow: number;
  speed: number;
  responsive: {
    breakpoint: number;
    settings: {
      slidesToShow: number;
      slidesToScroll: number;
      infinite?: boolean;
      dots?: boolean;
      initialSlide?: number;
    };
  }[];
};