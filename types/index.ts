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
}

export interface CustomLinkPropsTypes {
  title: string;
  href: string;
}
