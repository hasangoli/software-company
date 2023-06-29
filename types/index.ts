export type MenuItemType = {
  title: string;
  href: string;
  hasBg?: boolean;
  children?: {
    title: string;
    href: string;
  }[];
};

export type ImagePropsType = {
  src: string;
  alt: string;
  width: string;
  height?: string;
  aspectRatio?: number;
  className?: string;
  imgClass?: string;
};

export type HeroProps = {
  image: string;
  title: string;
  description: string;
};

export type CustomLinkPropsTypes = {
  title: string;
  href: string;
};

export type SolutionProps = {
  image: string;
  title: string;
  description: string;
};

export type ProcessProps = {
  number: string;
  image: string;
  title: string;
};

export type HeaderProps = {
  logo: string;
  data: MenuItemType[];
};

export type SolutionsData = {
  title: string;
  mainTitle: string;
  description: string;
  data: SolutionProps[];
};

export type ProcessesData = {
  title: string;
  mainTitle: string;
  description: string;
  data: ProcessProps[];
};

export type SpecializedProps = {
  image: string;
  title: string;
};

export type SpecializedItemProps = {
  items: SpecializedProps[];
};

export type SpecializedDataProps = {
  title: string;
  mainTitle: string;
  data: SpecializedItemProps[];
};

export type TechnologiesProps = {
  title: string;
  mainTitle: string;
  logos: string[];
};
