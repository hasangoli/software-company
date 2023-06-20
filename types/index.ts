export interface MenuItemType {
  title: string;
  href: string;
  hasBg?: boolean;
  children?: {
    title: string;
    href: string;
  }[];
}

export interface ImagePropsType {
  src: string;
  alt: string;
  width: string;
  height?: string;
  aspectRatio?: number;
  className?: string;
}

export interface CustomLinkPropsTypes {
  title: string;
  href: string;
}

export interface SolutionProps {
  image: string;
  title: string;
  description: string;
}

export interface ProcessProps {
  number: string;
  image: string;
  title: string;
}
