export interface Post {
  tags: string;
  description: string;
  coverImage: string;
  published: number;
  slug: string;
  title: string;
  readingTime: object;
  isFeatured: boolean;
}

export interface Project {
  title: string;
  image: string;
  icon: string;
  description: string;
  descriptionFr: string;
  order: number;
  isSecondary: boolean;
  repoLink: string;
  demoLink: string;
  tags: string[];
}
