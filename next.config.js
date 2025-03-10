/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    // domains: ['localhost', 'backend.citiesprojectglobal.com'], // Trusted domains for images
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'backend.citiesprojectglobal.com',
      },
    ],
  },
  env: {
    NEXT_STRIPE_PUBLISH_KEY: process.env.NEXT_STRIPE_PUBLISH_KEY,
    NEXT_BACKEND_STRIPE_URL: process.env.NEXT_BACKEND_STRIPE_URL,
    NEXT_STRIPE_DONATION_RETURN_URL: process.env.NEXT_STRIPE_DONATION_RETURN_URL,
    NEXT_STRIPE_VANTAGE_RETURN_URL: process.env.NEXT_STRIPE_VANTAGE_RETURN_URL,
    NEXT_BACKEND_PDF_URL: process.env.NEXT_BACKEND_PDF_URL,
  },
  async redirects() {
    return [
      // Updated existing entries with date prefixes
      {
        source: '/2021/07/19/you-are-called-to-be-an-apprentice-of-jesus-what-does-that-really-look-like',
        destination: '/articles/you-are-called-to-be-an-apprentice-of-jesus-what-does-that-really-look-like',
        permanent: true,
      },
      { source: '/about', destination: '/about-us', permanent: true },
      { source: '/author/jonichiang', destination: '/', permanent: true },
      {
        source: '/2021/08/03/what-if-we-aim-to-bless-people-instead-of-convert-them',
        destination: '/articles/what-if-we-aim-to-bless-people-instead-of-convert-them',
        permanent: true,
      },
      {
        source: '/2021/06/15/what-does-it-mean-to-be-righteous-and-why-does-it-matter',
        destination: '/articles/what-does-it-mean-to-be-righteous-and-why-does-it-matter',
        permanent: true,
      },
      {
        source: '/2021/11/19/healing-the-trauma-of-homelessness-through-affordable-housing',
        destination: '/articles/healing-the-trauma-of-homelessness-through-affordable-housing',
        permanent: true,
      },
      { source: '/global-leadership-circle-information-session-recording', destination: '/', permanent: true },
      { source: '/home', destination: '/', permanent: true },
      { source: '/donate', destination: '/donation', permanent: true },
      { source: '/team', destination: '/', permanent: true },
      {
        source: '/2021/07/06/how-genesis-1-helps-us-understand-the-great-commission-better',
        destination: '/articles/how-genesis-1-helps-us-understand-the-great-commission-better',
        permanent: true,
      },
      {
        source: '/2021/06/09/god-created-the-world-to-be-one-beautiful-orchestra-do-you-know-your-part',
        destination: '/articles/god-created-the-world-to-be-one-beautiful-orchestra-do-you-know-your-part',
        permanent: true,
      },
      { source: '/denver-leadership-circle', destination: '/', permanent: true },
      { source: '/blog/page/3', destination: '/articles', permanent: true },
      { source: '/tag/personal-development', destination: '/', permanent: true },
      { source: '/vantagepoint-tier2', destination: '/', permanent: true },
      { source: '/category/uncategorized', destination: '/', permanent: true },
      { source: '/test-home', destination: '/', permanent: true },
      { source: '/shop', destination: '/', permanent: true },
      { source: '/category/uncategorized/page/2', destination: '/', permanent: true },
      { source: '/tag/righteous', destination: '/', permanent: true },
      { source: '/tag/tsaddiqim', destination: '/', permanent: true },
      { source: '/lcglobal2022', destination: '/', permanent: true },
      { source: '/tag/purpose', destination: '/', permanent: true },
      { source: '/tag/career', destination: '/', permanent: true },
      { source: '/book-stage', destination: '/', permanent: true },
      {
        source: '/2021/08/09/god-never-wanted-you-to-divide-your-life-into-sacred-and-secular',
        destination: '/articles/god-never-wanted-you-to-divide-your-life-into-sacred-and-secular',
        permanent: true,
      },
      { source: '/blog', destination: '/articles', permanent: true },
      { source: '/vision-weekend-registration', destination: '/', permanent: true },
      { source: '/category/uncategorized/page/3', destination: '/', permanent: true },
      { source: '/product-category/online-offerings', destination: '/', permanent: false },

      // New entries from CSV (none had date prefixes, so keeping previous pattern)
      {
        source: '/3-tools-to-help-you-discover-your-unique-gifts',
        destination: '/articles/3-tools-to-help-you-discover-your-unique-gifts',
        permanent: true,
      },
      {
        source: '/3-ways-coaching-can-help-you-live-out-your-calling',
        destination: '/articles/3-ways-coaching-can-help-you-live-out-your-calling',
        permanent: true,
      },
      {
        source: '/alumni-story-serving-the-underbanked-to-end-the-cycle-of-poverty-2',
        destination: '/articles/alumni-story-serving-the-underbanked-to-end-the-cycle-of-poverty-2',
        permanent: true,
      },
      {
        source: '/an-excerpt-from-our-small-group-study-vantagepoint',
        destination: '/articles/an-excerpt-from-our-small-group-study-vantagepoint',
        permanent: true,
      },
      { source: '/articles/', destination: '/articles', permanent: true },
      { source: '/book-sample-pdf-view/', destination: '/', permanent: true },
      {
        source: '/building-community-around-the-common-good-2',
        destination: '/articles/building-community-around-the-common-good-2',
        permanent: true,
      },
      {
        source: '/city-renewal-projects-sao-paulo-2016-quick-summary',
        destination: '/articles/city-renewal-projects-sao-paulo-2016-quick-summary',
        permanent: true,
      },
      {
        source: '/col-terra-reforming-public-service-with-purpose',
        destination: '/articles/col-terra-reforming-public-service-with-purpose',
        permanent: true,
      },
      { source: '/donation/', destination: '/donation', permanent: true },
      {
        source: '/dwight-a-stand-for-integrity-in-business',
        destination: '/articles/dwight-a-stand-for-integrity-in-business',
        permanent: true,
      },
      { source: '/event-signup/', destination: '/', permanent: true },
      {
        source: '/fabio-and-alessandra-a-journey-of-faith-purpose-and-impact',
        destination: '/articles/fabio-and-alessandra-a-journey-of-faith-purpose-and-impact',
        permanent: true,
      },
      {
        source: '/fabio-when-business-became-a-ministry',
        destination: '/articles/fabio-when-business-became-a-ministry',
        permanent: true,
      },
      { source: '/global-lc-2025-in-person-2/', destination: '/', permanent: true },
      {
        source: '/healing-the-trauma-of-homelessness-through-affordable-housing-2',
        destination: '/articles/healing-the-trauma-of-homelessness-through-affordable-housing-2',
        permanent: true,
      },
      {
        source: '/how-does-an-exile-transform-into-a-leader',
        destination: '/articles/how-does-an-exile-transform-into-a-leader',
        permanent: true,
      },
      {
        source: '/how-gods-view-of-justice-informs-how-we-should-govern',
        destination: '/articles/how-gods-view-of-justice-informs-how-we-should-govern',
        permanent: true,
      },
      {
        source: '/in-the-midst-of-war-love-comes-through-action-3',
        destination: '/articles/in-the-midst-of-war-love-comes-through-action-3',
        permanent: true,
      },
      {
        source: '/joao-a-legacy-of-faith-for-the-next-generation',
        destination: '/articles/joao-a-legacy-of-faith-for-the-next-generation',
        permanent: true,
      },
      {
        source: '/kingdom-leaders-bringing-transformation-to-bogota-colombia',
        destination: '/articles/kingdom-leaders-bringing-transformation-to-bogota-colombia',
        permanent: true,
      },
      { source: '/leadership-circle-feedback-2020-2022', destination: '/', permanent: true },
      { source: '/leadership-circle/', destination: '/', permanent: true },
      {
        source: '/marcelin-orsot-a-journey-of-faith-and-influence',
        destination: '/articles/marcelin-orsot-a-journey-of-faith-and-influence',
        permanent: true,
      },
      {
        source: '/marcos-a-financial-gurus-journey-to-inclusion',
        destination: '/articles/marcos-a-financial-gurus-journey-to-inclusion',
        permanent: true,
      },
      {
        source: '/nadir-a-new-perspective-on-faith-and-business',
        destination: '/articles/nadir-a-new-perspective-on-faith-and-business',
        permanent: true,
      },
      {
        source: '/our-fundamental-human-job-description-is-to-create-culture',
        destination: '/articles/our-fundamental-human-job-description-is-to-create-culture',
        permanent: true,
      },
      {
        source: '/receiving-and-reflecting-gods-inherent-love-for-us-2',
        destination: '/articles/receiving-and-reflecting-gods-inherent-love-for-us-2',
        permanent: true,
      },
      {
        source: '/ricardo-arias-mora-faith-driven-leadership-and-economic-transformation-in-colombia',
        destination: '/articles/ricardo-arias-mora-faith-driven-leadership-and-economic-transformation-in-colombia',
        permanent: true,
      },
      {
        source: '/ripple-effects-in-greater-cairo-a-transformational-journey-of-early-childhood-education',
        destination:
          '/articles/ripple-effects-in-greater-cairo-a-transformational-journey-of-early-childhood-education',
        permanent: true,
      },
      {
        source: '/shawn-deberry-johnson-denver-reclaiming-purpose-and-calling',
        destination: '/articles/shawn-deberry-johnson-denver-reclaiming-purpose-and-calling',
        permanent: true,
      },
      { source: '/short-courses/', destination: '/', permanent: true },
      {
        source: '/stories-of-impact-leaders-catalyzing-city-renewal-across-the-globe',
        destination: '/articles/stories-of-impact-leaders-catalyzing-city-renewal-across-the-globe',
        permanent: true,
      },
      {
        source: '/the-inspiring-story-of-first-fruits-a-legacy-of-faith-community-and-generosity',
        destination: '/articles/the-inspiring-story-of-first-fruits-a-legacy-of-faith-community-and-generosity',
        permanent: true,
      },
      {
        source: '/the-intersection-podcast-integrating-faith-work-and-life',
        destination: '/articles/the-intersection-podcast-integrating-faith-work-and-life',
        permanent: true,
      },
      {
        source: '/the-work-you-do-has-eternal-significance',
        destination: '/articles/the-work-you-do-has-eternal-significance',
        permanent: true,
      },
      {
        source: '/transformation-comes-from-gaining-perspective-not-just-information',
        destination: '/articles/transformation-comes-from-gaining-perspective-not-just-information',
        permanent: true,
      },
      { source: '/vantage-point/', destination: '/', permanent: true },
      { source: '/vantage-point/vantage-form/', destination: '/', permanent: true },
      { source: '/vantagepoint-sample/', destination: '/', permanent: true },
      {
        source: '/what-does-it-really-mean-to-love-one-another',
        destination: '/articles/what-does-it-really-mean-to-love-one-another',
        permanent: true,
      },

      {
        source: '/2022/02/14/receiving-and-reflecting-gods-inherent-love-for-us',
        destination: '/articles',
        permanent: true,
      },

     

      {
        source: '/2021/06/28/our-fundamental-human-job-description-is-to-create-culture',
        destination: '/articles/our-fundamental-human-job-description-is-to-create-culture',
        permanent: true,
      },

    ]
  },
}


module.exports = nextConfig
