import Head from 'next/head';

export interface Meta {
  title?: string;
  description?: string;
  image?: string;
  type?: string;
}

export const Seo = ({ ...props }) => {
  const { ...customMeta }: Meta = props;
  const meta: Meta = {
    title: 'Greg Ogun',
    description: 'Developer, designer and course creator.',
    image: 'https://gregogun.xyz/static/images/banner.png',
    type: 'website',
    ...customMeta,
  };

  return (
    <Head>
      <title>{meta.title}</title>
      <meta content={meta.description} name="description" />
      <meta property="og:type" content={meta.type} />
      <meta property="og:site_name" content="Greg Ogun" />
      <meta property="og:description" content={meta.description} />
      <meta property="og:title" content={meta.title} />
      <meta property="og:image" content={meta.image} />
      <meta name="twitter:site" content="@gregogun" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={meta.title} />
      <meta name="twitter:description" content={meta.description} />
      <meta name="twitter:image" content={meta.image} />
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/static/favicons/apple-touch-icon.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/static/favicons/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/static/favicons/favicon-16x16.png"
      />
      <link rel="manifest" href="/static/favicons/site.webmanifest" />
      <link
        rel="mask-icon"
        href="/static/favicons/safari-pinned-tab.svg"
        color="#171717"
      />
      <meta name="msapplication-TileColor" content="#171717" />
      <meta name="theme-color" content="#171717" />
    </Head>
  );
};
