export type OriginInsight = {
  id: number;
  title: string;
  slug: string;
  thumbnail: Thumbnail;
  excerpt: Excerpt;
  content: Content;
  updatedAt: string;
  createdAt: string;
};

export type Insight = {
  title: string;
  slug: string;
  thumbnail: string;
  excerpt: Children[];
  content: Children3[];
};

export type PreviewInsight = {
  id: number;
  title: string;
  slug: string;
  thumbnail: string;
  excerpt: string;
};

export type Thumbnail = {
  id: number;
  alt: string;
  updatedAt: string;
  createdAt: string;
  url: string;
  thumbnailURL: string;
  filename: string;
  mimeType: string;
  filesize: number;
  width: number;
  height: number;
  focalX: number;
  focalY: number;
};

type Excerpt = {
  root: Root2;
};

type Root2 = {
  children: Children[];
  direction: string;
  format: string;
  indent: number;
  type: string;
  version: number;
};

type Children = {
  children: Children2[];
  direction: string;
  format: string;
  indent: number;
  type: string;
  version: number;
  textFormat: number;
  textStyle: string;
};

type Children2 = {
  detail?: number;
  format?: number;
  mode?: string;
  style?: string;
  text?: string;
  type: string;
  version: number;
};

type Content = {
  root: Root3;
};

type Root3 = {
  type: string;
  format: string;
  indent: number;
  version: number;
  children: Children3[];
  direction: string;
};

type Children3 = {
  type: string;
  format: string;
  indent: number;
  version: number;
  children: Children4[];
  direction: string;
  textStyle: string;
  textFormat: number;
};

type Children4 = {
  mode: string;
  text: string;
  type: string;
  style: string;
  detail: number;
  format: number;
  version: number;
};
