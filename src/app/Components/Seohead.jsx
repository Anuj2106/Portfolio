

const SEOHead = () => {
return (
    <>
      <head>
        <title>Anuj Kumar | Frontend Developer Portfolio</title>
        <meta
          name="description"
          content="Hi, I'm Anuj Kumar — a frontend developer passionate about creating responsive and user-friendly websites using React, Next.js, and Bootstrap."
        />
        <meta name="google-site-verification" content="fwxtJOXdrBBKLsgh4ReGp0tMtTNQBntD79PQ0N6Got8" />
        {/* Open Graph for social sharing */}
        <meta property="og:title" content="Anuj Kumar | Frontend Developer Portfolio" />
        <meta
          property="og:description"
          content="Explore my work as a frontend developer. Skilled in React, Next.js, Bootstrap, and modern UI/UX."
        />
        <meta property="og:image" content="/preview.jpg" />
        <meta property="og:url" content="https://anuj2106.vercel.app" />
        <meta property="og:type" content="website" />

        {/* Twitter Cards */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Anuj Kumar | Frontend Developer Portfolio" />
        <meta
          name="twitter:description"
          content="Explore my web development projects and frontend skills."
        />
        <meta name="twitter:image" content="/preview.jpg" />

        {/* Favicon */}
        {/* <link rel="icon" href="/favicon.ico" /> */}
      </head>

      
    </>
  );
};

export default SEOHead;
