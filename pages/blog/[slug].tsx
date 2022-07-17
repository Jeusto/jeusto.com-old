import { useMemo } from "react";
import { bundleMDX } from "mdx-bundler";
import { getMDXComponent } from "mdx-bundler/client";
import fs from "fs";
import type { ProcessorOptions } from "@mdx-js/esbuild/lib";
import readingTime from "reading-time";
import mdxComponents from "@/components/mdx/MDXComponents";
import BlogLayout from "@/layouts/BlogLayout";
import rehypeCodeTitles from "rehype-code-titles";
import rehypePrism from "rehype-prism-plus";
import remarkGfm from "remark-gfm";
import remarkHeadings from "remark-autolink-headings";
import remarkSlug from "remark-slug";
import remarkUnwrapImages from "remark-unwrap-images";
import rehypeExternalLinks from "rehype-external-links";
import rehypeToc from "rehype-toc";

interface PostProps {
  code: string;
  frontmatter: any;
}

interface Params {
  params: {
    slug: string;
  };
}

export default function Post({ code, frontmatter }: PostProps) {
  // Avoid recreating the component every render
  const Component = useMemo(() => getMDXComponent(code), [code]);

  return (
    <BlogLayout frontmatter={frontmatter}>
      <Component components={mdxComponents as any} />
    </BlogLayout>
  );
}

export async function getStaticPaths() {
  // Post paths
  const currentDirectory = process.cwd();
  const posts = fs.readdirSync(`${currentDirectory}/posts`);
  const postPaths = posts.map((post) => post);

  // Paths
  const paths = postPaths.map((path) => ({
    params: { slug: path },
  }));

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }: Params) {
  const { slug } = params;

  // Mdx plugins
  const options = {
    mdxOptions(options: ProcessorOptions) {
      options.remarkPlugins = [
        ...(options.remarkPlugins ?? []),
        // github flavored markdown
        remarkGfm,
        // add id to headings
        remarkSlug,
        // add links to headings
        remarkHeadings,
        // remove paragraph around images
        remarkUnwrapImages,
      ];
      options.rehypePlugins = [
        ...(options.rehypePlugins ?? []),
        // open external links in new tab
        rehypeExternalLinks,
        // title for code blocks (has to come before `rehypePrism`)
        // rehypeCodeTitles,
        // syntax highlight
        rehypePrism,
        // table of contents
        // rehypeToc,
      ];
      return options;
    },
  };

  // Post path
  const currentDirectory = process.cwd();
  const postPath = `${currentDirectory}/posts/${slug}/${slug}.mdx`;
  const markdown = await bundleMDX({ file: postPath, ...options });
  const { code, frontmatter } = markdown;

  frontmatter.published = new Date(frontmatter.published)
    .toDateString()
    .split(" ")
    .slice(1)
    .join(" ");

  frontmatter.readingTime = readingTime(code).text;

  return {
    props: {
      code,
      frontmatter,
    },
  };
}
