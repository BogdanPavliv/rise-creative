declare module '*.jpg' {
  const value: string;
  export default value;
}

declare module '*.png' {
  const value: string;
  export default value;
}

declare module '*.svg' {
  const ReactComponent: React.FC<React.SVGProps<SVGSVGElement>>;
  const src: string;
  export { ReactComponent };
  export default src;
}

declare module '*.module.css' {
  const classes: { [key: string]: string };
  export default classes;
}

declare module '*.module.scss' {
  const classes: { [key: string]: string };
  export default classes;
}

declare module '../utils/common' {
  export const someUtilityFunction: () => void;
}

declare module 'fslightbox-react' {
  const FSLightbox: React.FC<any>;
  export default FSLightbox;
}

declare module '*.css';
declare module '*.scss';

declare module 'swiper/css';
declare module 'swiper/css/navigation';