import { gql } from '@apollo/client'
import { SEO_FRAGMENT } from './fragments'

export const HOME_PAGE_QUERY = gql`
  query {
    page(id: "cG9zdDoxNg==") {
      databaseId
      id
      seoMetaFields {
        ...SeoMetaFields
      }
      homeExtraBanner {
        homeBannerSecond {
          homeBannerBackgroundImage {
            node {
              sourceUrl
            }
          }
          homeBannerButtonLink
          homeBannerButtonText
          homeBannerDescription
          homeBannerHeadings
          homeBannerLatestPostImages {
            node {
              sourceUrl
            }
          }
          homeBannerSubtitle
        }
      }
      title
      link
      bannerHome {
        banner {
          node {
            sourceUrl
          }
        }
        textBanner
        textBanner2
        textBanner3
        subtitleupper
        buttonText
        buttonLinkBannerHome
        subtitle_bottom
      }
      bannerHomesecond {
        rightsmallsectionlink
        rightsmallsectiontext
        rightsmallsectionlinktext
        heading_second_section
        buttonLinkSecondSection
        buttonText
        subtitleText
        firstRightImage {
          node {
            sourceUrl
          }
        }
        secondRightImage {
          node {
            sourceUrl
          }
        }
        bannersecondbackground {
          node {
            sourceUrl
          }
        }
      }
      sectionHomethird {
        firstcolumnimage {
          node {
            sourceUrl
          }
        }
        buttonLink1ThirdSection
        buttonLink2ThirdSection
        buttonLink3ThirdSection
        firstcolumnheading
        subtitletextfirst
        buttontxtfirst
        secondcolumnimage {
          node {
            sourceUrl
          }
        }
        secondcolumnheading
        subtitletextsecond
        buttontxtsecond
        thirdcolumnimage {
          node {
            sourceUrl
          }
        }
        thirdcolumnheading
        subtitletextthird
        buttontxtthird
      }
      homefourtsection {
        __typename
        mainheadingfourth
        firstimage {
          node {
            sourceUrl
          }
        }
        firstsubtitle1
        firstheading
        firstparagraph
        secondimage {
          node {
            sourceUrl
          }
        }
        secondheading
        secondsubtitle
        secondparagraph
        thirdimage {
          node {
            sourceUrl
          }
        }
        thirdsubtitle
        thirdheading
        thirdparagraph
      }
      homefifthsection {
        mainheadingfifth
        fifthheadingsimple
        buttonlinkone
        buttonlinksecond
        fifthfirstimage {
          node {
            sourceUrl
          }
        }
        fifthfirstsubtitle
        fifthbuttonone
        textbuttonsecond
        authorimage {
          node {
            sourceUrl
          }
        }
        authortitle
        authordesignation
      }
      patnerssection {
        linknithbox
        mainheading
        firstsubtitlepatner
        imagefirst {
          node {
            sourceUrl
          }
        }
        image5 {
          node {
            sourceUrl
          }
        }
        image2 {
          node {
            sourceUrl
          }
        }
        image3 {
          node {
            sourceUrl
          }
        }
        image4 {
          node {
            sourceUrl
          }
        }
        image6 {
          node {
            sourceUrl
          }
        }
        image7 {
          node {
            sourceUrl
          }
        }
        image8 {
          node {
            sourceUrl
          }
        }
        textninthbox
        linktextninthbox
      }
      homesixthsection {
        heading
        paragraph
        author
        designations
        rightimage {
          node {
            sourceUrl
          }
        }
      }
    }
  }
  ${SEO_FRAGMENT}
`
export const ABOUT_VIDEO_QUERY = gql`
  query MyQuery2 {
    page(id: "cG9zdDoyNjY=") {
      aboutussections {
        videosectionheading
        videosectiontitle
        videosectiondescription
        videosectionbackground {
          node {
            sourceUrl
          }
        }
      }
    }
  }
`

export const ABOUT_US_PAGE_QUERY = gql`
  query {
    page(id: "cG9zdDoyNjY=") {
      id
      seoMetaFields {
        ...SeoMetaFields
      }
      aboutuspage {
        mainheadingabout
        secondimage {
          node {
            sourceUrl
          }
        }
        secondsectionheading_1
        secondsectionheading_2

        secondsectionrightimage {
          node {
            sourceUrl
          }
        }
        secondsectionimagwithtext_image {
          node {
            sourceUrl
          }
        }
        secondsectionimagwithtextText
        secondsectionimagwithtextSubtext
        secondsectionimagwithtextButtontext
        secondsectionimagwithtextButtonlink
        thirdsectionimage {
          node {
            sourceUrl
          }
        }
        forthsectionlefttext
        fourthsectionleftbutton
        fourthsectionleftbuttonlink
        fourthsectionrightheading
        fourthsectionrightdescrition1
        fourthsectionrightdescrition2
        fourthsectionrightdescrition3
        fourthsectionrightdescrition4
      }

      aboutussections {
        iconsections {
          logoIcons {
            node {
              sourceUrl
            }
          }
          icontitle
        }
        videosectionheading
        videosectionbackground {
          node {
            sourceUrl
          }
        }
        videosectiontitle
        videosectiondescription
        imagewithtextImage1 {
          node {
            sourceUrl
          }
        }
        imagewithtextImage1 {
          node {
            sourceUrl
          }
        }
        imagewithtext1Description1
        imagewithtext1description2
        imagewithtext1description3
        imagewithtext1description4
        imagewithtext1description5
        imagewithtext1Heading
        imagewithtextImage2 {
          node {
            sourceUrl
          }
        }
        imagewithtext2Description1
        imagewithtext2Description2
        imagewithtext2Description3
        imagewithtext2Description4
        imagewithtext2Description5
        imagewithtext2Heading
        reviewsectiontitle1
        reviewsectiondescription1
        tenthsectionleftheading
        tenthsectionrightimage {
          node {
            sourceUrl
          }
        }
        tenthsectionleftsubheading
        tenthsectionleftbuttontext
        tenthsectionleftbuttonlink
        eleventhsectionheading
        eleventhsectionsubheading
        eleventhsectiondescrition
        eleventhsection2descrition
        eleventhsection2heading
        twelthsectionleftimage {
          node {
            sourceUrl
          }
        }
        twelthsectionrightimage {
          node {
            sourceUrl
          }
        }
        twelthsectionrightdescription
        twelthsectionrightdescription2
        tenthsectionrightcolumns {
          columnsimage {
            node {
              sourceUrl
            }
          }
          columnstext
        }
      }
    }
  }
  ${SEO_FRAGMENT}
`

export const BOOK_PAGE_QUERY = gql`
  query Book {
    page(id: "cG9zdDo0MzM=") {
      id
      seoMetaFields {
        ...SeoMetaFields
      }
      bookPageFeilds {
        bookFifthReviewSectionDescription
        bookFifthReviewSectionHeading
        bookFirstSectionMainHeading
        bookFourthSectionFirstColumnText
        bookSeventhSectionButtonOneLink
        bookSeventhSectionButtonTwoLink
        bookSeventhSectionButtonOneText
        bookSeventhSectionButtonTwoText
        bookSeventhSectionDescription1
        bookSeventhSectionDescription2
        bookSeventhSectionDescription3
        bookSeventhSectionDescription4
        bookSeventhSectionMainHeading
        bookSixthSectionVideoDescription
        bookSixthSectionVideoHeading
        bookSixthSectionVideoLink
        bookSixthSectionVideoMainHeading
        bookThirdSectionRightButtonOne
        bookThirdSectionRightButtonTwo
        bookThirdSectionRightButtonTwoLink
        bookThirdSectionRightDescription
        bookThirdSectionRightHeading
        bookThirdSectionRightButtonOneLink {
          url
        }
        bookThirdSectionLeftImage {
          node {
            sourceUrl
          }
        }

        bookSecondSectionImage {
          node {
            sourceUrl
          }
        }
        bookFourthSectionThirdColumnImage {
          node {
            sourceUrl
          }
        }
        bookFourthSectionSecondColumnImage {
          node {
            sourceUrl
          }
        }
        bookFourthSectionFourthColumnImage {
          node {
            sourceUrl
          }
        }
        bookNinthSectionMainLeftHeading
        bookNinthSectionMainRightDescription
        bookNinthSectionRightFirstColumnText
        bookNinthSectionRightSecondColumnButtonLink
        bookNinthSectionRightSecondColumnText
        bookNinthSectionRightImage {
          node {
            sourceUrl
          }
        }
        bookNinthSectionLeftImage {
          node {
            sourceUrl
          }
        }
        bookEigthSectionMainHeading
        bookEigthSectionMainLeftDescription
        bookEigthSectionMainRightDescription1
        bookEigthSectionMainRightDescription2
        bookNinthSectionRightSecondColumnButtonText
        bookEigthSectionMainLeftImage {
          node {
            sourceUrl
          }
        }
        bookEigthSectionMainRightImage {
          node {
            sourceUrl
          }
        }
      }
    }
  }
  ${SEO_FRAGMENT}
`

export const LEADERSHIP_PAGE_QUERY = gql`
  query {
    page(id: "cG9zdDo2MDg=") {
      id
      seoMetaFields {
        ...SeoMetaFields
      }
      leadershipPageFeilds {
        leadershipEightSectionFields {
          leadershipEightSectionFirstRowFirstColumnDescription
          leadershipEightSectionFirstRowFirstColumnHeading
          leadershipEightSectionFirstRowSecondColumnImage {
            node {
              sourceUrl
            }
          }
          leadershipEightSectionFirstRowThirdDescription
          leadershipEightSectionFirstRowThirdHeading
          leadershipEightSectionMainDescription
          leadershipEightSectionMainHeading
          leadershipEightSectionSecondRowFirstImage {
            node {
              sourceUrl
            }
          }
          leadershipEightSectionSecondRowSecondDescription
          leadershipEightSectionSecondRowSecondHeading
          leadershipEightSectionSecondRowThirdImage {
            node {
              sourceUrl
            }
          }
        }
        leadershipEleventhSection {
          leadershipEleventhSectionFirstSection {
            leadershipEleventhFirstText
            leadershipEleventhFirstImage {
              node {
                sourceUrl
              }
            }
          }
          leadershipEleventhSectionMainHeading
          leadershipEleventhSectionSecondButtonLink
          leadershipEleventhSectionSecondButtonText
          leadershipEleventhSectionSecondDescription
          leadershipEleventhSectionSecondImage {
            node {
              sourceUrl
            }
          }
        }
        leadershipFifthSectionFields {
          leadershipFifthSectionFirstColumnDescription
          leadershipFifthSectionFirstColumnHeading
          leadershipFifthSectionFirstColumnImages {
            node {
              sourceUrl
            }
          }
          leadershipFifthSectionSecondColumnDescription1
          leadershipFifthSectionSecondColumnDescription2
          leadershipFifthSectionSecondColumnDescription3
          leadershipFifthSectionSecondColumnDescriptionHeading1
          leadershipFifthSectionSecondColumnDescriptionHeading2
          leadershipFifthSectionSecondColumnDescriptionHeading3
          leadershipFifthSectionSecondColumnMainHeading
          leadershipFifthSectionThirdColumnImage {
            node {
              sourceUrl
            }
          }
        }
        leadershipFirstSectionFeilds {
          leadershipFirstSectionSecondColumnDescription1
          leadershipFirstSectionSecondColumnDescription2
          leadershipFirstSectionSecondColumnHeading
          leadershipFirstSectionFirstColumnImage {
            node {
              sourceUrl
            }
          }
          leadershipFirstSectionThirdColumnImage {
            node {
              sourceUrl
            }
          }
        }
        leadershipFourthSectionFields {
          leadershipFourthSectionFirstColumnImage {
            node {
              sourceUrl
            }
          }
          leadershipFourthSectionMainHeading
          leadershipFourthSectionSecondColumnDescription1
          leadershipFourthSectionSecondColumnDescription2
          leadershipFourthSectionThirdColumnDescription1
          leadershipFourthSectionThirdColumnDescription2
        }
        leadershipMainHeading
        leadershipNinthSection {
          leadershipNinthSectionFirstColumnImage {
            node {
              sourceUrl
            }
          }
          leadershipNinthSectionMainHeading
          leadershipNinthSectionSecondColumnText
          leadershipNinthSectionThirdColumnImage {
            node {
              sourceUrl
            }
          }
        }
        leadershipSecondSectionFields {
          leadershipSecondSectionFirstColumnButtonLink
          leadershipSecondSectionFirstColumnButtonText
          leadershipSecondSectionFirstColumnDescription
          leadershipSecondSectionFirstColumnHeading
          leadershipSecondSectionSecondColumnBackgroundImage {
            node {
              sourceUrl
            }
          }
          leadershipSecondSectionSecondColumnBox {
            leadershipSecondSectionSecondColumnBoxButtonLink {
              node {
                sourceUrl
              }
            }
            leadershipSecondSectionSecondColumnBoxButtonText
            leadershipSecondSectionSecondColumnBoxDescription
            leadershipSecondSectionSecondColumnBoxHeading
          }
        }
        leadershipSeventhSectionFields {
          leadershipSeventhSectionButtonLink
          leadershipSeventhSectionButtonText
          leadershipSeventhSectionDescription
          leadershipSeventhSectionMainHeading
          leadershipSeventhSectionMainImage {
            node {
              sourceUrl
            }
          }
          leadershipSeventhSectionSubheading
        }
        leadershipSixthSectionFields {
          leadershipSixthSectionFirstRowFirstColumnImage {
            node {
              sourceUrl
            }
          }
          leadershipSixthSectionFirstRowSecondColumnDescription
          leadershipSixthSectionFirstRowSecondColumnHeading
          leadershipSixthSectionMainDescription
          leadershipSixthSectionMainHeading
          leadershipSixthSectionSecondRowSecondColumnDescription
          leadershipSixthSectionSecondRowFirstColumnImage {
            node {
              sourceUrl
            }
          }
          leadershipSixthSectionSecondRowSecondColumnHeading
          leadershipSixthSectionSecondRowThirdColumnImages {
            node {
              sourceUrl
            }
          }
          leadershipSixthSectionThirdRowFirstColumnImages {
            node {
              sourceUrl
            }
          }
          leadershipSixthSectionThirdRowSecondsColumnDescription
          leadershipSixthSectionThirdRowSecondsColumnHeading
        }
        leadershipTenthSection {
          leadershipTenthSectionFirstColumnText
          leadershipTenthSectionSecondColumnDescription1
          leadershipTenthSectionSecondColumnDescription2
          leadershipTenthSectionSecondColumnDescription3
          leadershipTenthSectionSecondColumnDescriptionGreenColor
          leadershipTenthSectionSecondColumnHeading
        }
        leadershipThirdSectionFields {
          leadershipThirdSectionBox {
            leadershipThirdSectionBoxDescription
            leadershipThirdSectionBoxHeading
            leadershipThirdSectionBoxImages {
              node {
                sourceUrl
              }
            }
          }
          leadershipThirdSectionMainHeading
        }
        leadershipThirteenSection {
          leadershipThirteenSectionButtonLink
          leadershipThirteenSectionButtonText
          leadershipThirteenSectionHeading
        }
        leadershipTwelfthSection {
          leadershipTwelfthSectionFirstRowFirstColumn
          leadershipTwelfthSectionFirstRowSecondColumnDescription
          leadershipTwelfthSectionMainHeading
          leadershipTwelfthSectionSecondRowFirstColumnDescription
          leadershipTwelfthSectionSecondRowFirstColumnHeading
          leadershipTwelfthSectionSecondRowSecondColumnImage1 {
            node {
              sourceUrl
            }
          }
          leadershipTwelfthSectionSecondRowSecondColumnImage2 {
            node {
              sourceUrl
            }
          }
        }
        leadershipVideoSection {
          leadershipVideoSectionMainHeading
          leadershipVideoSectionBackgroundImage {
            node {
              sourceUrl
            }
          }
          leadershipVideoSectionDescripiton
          leadershipVideoSectionHeading
          leadershipVideoSectionTopImage {
            node {
              sourceUrl
            }
          }
        }
        vantageFormThirdSection {
          vantageFormThirdSectionImage1 {
            node {
              sourceUrl
            }
          }
          vantageFormThirdSectionImage2 {
            node {
              sourceUrl
            }
          }
          vantageFormThirdSectionImage3 {
            node {
              sourceUrl
            }
          }
          vantageFormThirdSectionImage4 {
            node {
              sourceUrl
            }
          }
          vantageFormThirdSectionImage5 {
            node {
              sourceUrl
            }
          }
        }
      }
    }
  }
  ${SEO_FRAGMENT}
`

export const STORIES_QUERY = gql`
  query {
    posts(where: { orderby: { field: DATE, order: DESC }, categoryName: "stories-of-transformation" }) {
      nodes {
        featuredImage {
          node {
            sourceUrl
          }
        }
        title
        id
        slug
        date
      }
    }
    page(id: "cG9zdDoxNg==") {
      databaseId
      homefourtsection {
        postsliderheading
      }
    }
  }
`

export const TESTIMONIAL_QUERY = gql`
  query {
    page(id: "cG9zdDoxOTI=") {
      testimonialSlider {
        slides {
          message
          authorname
          authordescription
        }
      }
    }
  }
`

export const HOME_VIDEO_QUERY = gql`
  {
    page(id: "cG9zdDoxNg==") {
      databaseId
      homevideobanner {
        maintitle
        videosubtitle
        linktext
        videoslider {
          videothumbnail {
            node {
              mediaItemUrl
            }
          }
          videoFileLink {
            node {
              mediaItemUrl
            }
          }
        }
      }
    }
  }
`

export const PROGRAM_PAGE_QUERY = gql`
  query {
    page(id: "cG9zdDozMjY=") {
      id
      seoMetaFields {
        ...SeoMetaFields
      }
      programpagefeild {
        authorDesignation
        fieldGroupName
        firstSectionMainHeading
        secondSectionImage {
          node {
            sourceUrl
          }
        }
        secondSectionLeftAuthorName
        secondSectionLeftColumn
        secondSectionRightAuthorName
        secondSectionRightButtonText
        secondSectionRightButtonLink
        secondSectionRightSubHeading
        thirdSectionLeftText
        thirdSectionMainHeading
        third_section_right_columns {
          button_text_program
          button_link_program
          columnheadingProgram
          columnsubtitleProgram
          columnimages_program {
            node {
              sourceUrl
            }
          }
        }
      }
    }
  }
  ${SEO_FRAGMENT}
`

export const PROGRAM_TESTIMONIAL_QUERY = gql`
  query MyQuery2 {
    page(id: "cG9zdDozMjY=") {
      programpagefeild {
        secondSectionProgramTestemonials {
          programTestimonialAuthor
          programTestimonialAuthorDescription
          programTestimonialDescription
        }
      }
    }
  }
`

export const ARTICLES_PAGE_QUERY = gql`
  query MyQuery2 {
    page(id: "cG9zdDo1MzQ=") {
      id
      seoMetaFields {
        ...SeoMetaFields
      }
      blogPageFeilds {
        blogLeftThirdSectionHeading
        blogPageMainHeading
        blogRightThirdSectionDescription
        blogRightThirdSectionHeading
        blogSecondSection {
          blogPageLeft {
            node {
              sourceUrl
            }
          }
          blogPageRightButtonText
          blogPageRightDate
          blogPageRightDescription
          blogPageRightHeading
          blogPageRightMonthAndYear
          blogPageRightUpperSubtitle
          blogPageRightImage {
            node {
              sourceUrl
            }
          }
          blogPageRightButtonLink {
            url
          }
        }
      }
    }
  }
  ${SEO_FRAGMENT}
`

export const ARTICLES_QUERY = gql`
  query Articles {
    featuredPosts: posts(where: { tag: "featured", status: PUBLISH }, last: 1) {
      nodes {
        date
        featuredImage {
          node {
            sourceUrl
          }
        }
        title
        id
        slug
        tags {
          nodes {
            name
          }
        }
      }
    }
    otherPosts: posts(
      where: { tagNotIn: ["featured"], status: PUBLISH, orderby: { field: DATE, order: DESC } }
      last: 1000
    ) {
      nodes {
        date
        featuredImage {
          node {
            sourceUrl
          }
        }
        title
        id
        slug
        tags {
          nodes {
            name
          }
        }
      }
    }
  }
`

export const ALL_ARTICLES_QUERY = gql`
  query AllArticles {
    posts(where: { status: PUBLISH }, last: 100) {
      nodes {
        slug
      }
    }
  }
`

export const VANTAGEPOINT_QUERY = gql`
  query MyQuery2 {
    page(id: "cG9zdDo5MzE=") {
      id
      seoMetaFields {
        ...SeoMetaFields
      }
      vantageForm {
        fieldGroupName
        vantageFormMainHeading
        vantageFormSecondSectionSecondColumnDescription
        vantageFormSecondSectionSecondColumnHeading
        vantageFormSecondSectionSecondColumnPrice
      }
      vintagePageFeild {
        vintageEightSection {
          vintageEightSectionBackgroundImage {
            node {
              sourceUrl
            }
          }
          vintageEightSectionDescription
          vintageEightSectionMainHeading
          vintageEightSectionMainHeading2
        }
        vintageFifthSection {
          vintageFifthSectionLeftImage {
            node {
              sourceUrl
            }
          }
          vintageFifthSectionMainDescription
          vintageFifthSectionMainHeading
          vintageFifthSectionRightImage {
            node {
              sourceUrl
            }
          }
        }
        vintageFourthSection {
          vintageFourthSectionButtonLink
          vintageFourthSectionButtonText
          vintageFourthSectionDescription
          vintageFourthSectionHeading
          vintageFourthSectionLeftImage {
            node {
              sourceUrl
            }
          }
          vintageFourthSectionRightImage {
            node {
              sourceUrl
            }
          }
        }
        vintageMainDescriptionRight
        vintageMainHeading
        vintageMainRightImage {
          node {
            sourceUrl
          }
        }
        vintageNinthSection {
          vintageNinthSectionLeftSectionImage {
            node {
              sourceUrl
            }
          }
          vintageNinthSectionRightSectionDescription
          vintageNinthSectionRightSectionMainHeading
          vintageNinthSectionRightSectionRowFirstImage {
            node {
              sourceUrl
            }
          }
          vintageNinthSectionRightSectionRowSecondDescription
          vintageNinthSectionRightSectionRowSecondHeading
        }
        vintageReviewSlider {
          vintageReviewSliderFirstReviewRow {
            vintageReviewSliderFirstUserImage {
              node {
                sourceUrl
              }
            }
            vintageReviewSliderReviewFirstReview
            vintageReviewSliderReviewFirstUserName
            vintageReviewSliderReviewFirstUserStatus
          }
          vintageReviewSliderMainDescription
          vintageReviewSliderMainHeading
          vintageReviewSliderSecondReviewRow {
            vintageReviewSliderReviewSecondReview
            vintageReviewSliderReviewSecondUserImage {
              node {
                sourceUrl
              }
            }
            vintageReviewSliderReviewSecondUserName
            vintageReviewSliderReviewSecondUserStatus
          }
        }
        vintageSecondSection {
          vintageSecondSectionBackgroundImage {
            node {
              sourceUrl
            }
          }
          vintageSecondSectionLeftText
          vintageSecondSectionRightCardButtonLink
          vintageSecondSectionRightCardButtonText
          vintageSecondSectionRightCardDescription
          vintageSecondSectionRightCardHeading
          vintageSecondSectionRightCardHeading2
          vintageSecondSectionRightCardPrice
        }
        vintageSeventhSection {
          vintageSeventhSectionFirstColumnImage {
            node {
              sourceUrl
            }
          }
          vintageSeventhSectionLastRowContent {
            vintageSeventhSectionLastRowMainHeading
            vintageSeventhSectionLastRowContentGroups {
              vintageSeventhSectionLastRowContentFirstColumnDescription
              vintageSeventhSectionLastRowContentFirstColumnHeading
              vintageSeventhSectionLastRowContentSecondColumnSession1
              vintageSeventhSectionLastRowContentSecondColumnSession2
              vintageSeventhSectionLastRowContentSecondColumnSession3
            }
          }
          vintageSeventhSectionMainHeading
          vintageSeventhSectionSecondColumnBlackBoxButtonLink
          vintageSeventhSectionSecondColumnBlackBoxButtonText
          vintageSeventhSectionSecondColumnBlackBoxDescription
          vintageSeventhSectionSecondColumnBlackBoxHeading
          vintageSeventhSectionSecondColumnDescription
          vintageSeventhSectionThirdColumnImage {
            node {
              sourceUrl
            }
          }
        }
        vintageTenthSection {
          vintageTenthSectionFirstColumnImage {
            node {
              sourceUrl
            }
          }
          vintageTenthSectionFourthColumnImage {
            node {
              sourceUrl
            }
          }
          vintageTenthSectionSecondColumnMainDescription
          vintageTenthSectionSecondColumnMainHeading
          vintageTenthSectionSecondColumnMainPrice
          vintageTenthSectionThirdColumnButtonLink
          vintageTenthSectionThirdColumnButtonText
          vintageTenthSectionThirdColumnText
        }
        vintageThirdSection {
          vintageThirdSectionMainDescription
          vintageThirdSectionMainHeading
          vintageThirdSectionRowFirstImage {
            node {
              sourceUrl
            }
          }
          vintageThirdSectionRowSecondDescription
          vintageThirdSectionRowSecondHeading
          vintageThirdSectionRowSecondImage {
            node {
              sourceUrl
            }
          }
          vintageThirdSectionRowThirdImage {
            node {
              sourceUrl
            }
          }
        }
      }
    }
  }
  ${SEO_FRAGMENT}
`

export const HOME_HERO_NEWS_QUERY = gql`
  query {
    posts(where: { tag: "featured" }) {
      nodes {
        featuredImage {
          node {
            sourceUrl
          }
        }
        title
        id
        databaseId
        slug
      }
    }
  }
`

export const SHORT_COURSE_PAGE_QUERY = gql`
  query MyQuery2 {
    page(id: "cG9zdDo4ODk=") {
      seoMetaFields {
        seo {
          metaDescription
          metaKeywords
          pageTitle
        }
      }
      shortCourseFields {
        shortCourseMainHeadingPart1
        shortCourseMainHeadingPart2
        shortCoursesFifthSection {
          shortCoursesFifthSectionReview
          shortCoursesFifthSectionSubText
          shortCoursesFifthSectionText
        }
        shortCoursesFirstSection {
          shortCoursesFirstSectionFirstColumnButtonLink
          shortCoursesFirstSectionFirstColumnButtonText
          shortCoursesFirstSectionFirstColumnText
          shortCoursesFirstSectionSecondColumnBottomImage {
            node {
              sourceUrl
            }
          }
          shortCoursesFirstSectionSecondColumnMainImage {
            node {
              sourceUrl
            }
          }
          shortCoursesFirstSectionSecondColumnUpperImage {
            node {
              sourceUrl
            }
          }
          shortCoursesFirstSectionThirdColumnDescription
          shortCoursesFirstSectionThirdColumnHeading
          shortCoursesFirstSectionThirdColumnImage {
            node {
              sourceUrl
            }
          }
          shortCoursesMainBackgroundImage {
            node {
              sourceUrl
            }
          }
        }
        shortCoursesFourthSection {
          shortCoursesFourthSectionDescription
          shortCoursesFourthSectionDescriptionPart2
          shortCoursesFourthSectionHeading
          shortCoursesFourthSectionImage {
            node {
              sourceUrl
            }
          }
        }
        shortCoursesSecondSection {
          shortCoursesSecondSectionFirstColumnText
          shortCoursesSecondSectionSecondColumnHeading
          shortCoursesSecondSectionSecondColumnBottomFeilds {
            shortCoursesSecondSectionSecondColumnBottomFeildsDescription
            shortCoursesSecondSectionSecondColumnBottomFeildsHeading
          }
        }
        shortCoursesSixthSection {
          shortCoursesSixthSectionFirstReviewRow {
            shortCoursesSixthSectionReviewFirstReview
            shortCoursesSixthSectionReviewFirstUserImage {
              node {
                sourceUrl
              }
            }
            shortCoursesSixthSectionReviewFirstUserName
            shortCoursesSixthSectionReviewFirstUserStatus
          }
          shortCoursesSixthSectionMainDescription
          shortCoursesSixthSectionMainHeading
          shortCoursesSixthSectionSecondReviewRow {
            shortCourseSixthSectionReviewSecondUserName
            shortCoursesSixthSectionReviewSecondReview
            shortCoursesSixthSectionReviewSecondUserImage {
              node {
                sourceUrl
              }
            }
            shortCoursesSixthSectionReviewSecondUserStatus
          }
        }
        shortCoursesThirdSection {
          shortCoursesThirdSectionMainFirstRowDescription
          shortCoursesThirdSectionMainFirstRowHeading
          shortCoursesThirdSectionMainSecondRowCards {
            shortCoursesThirdSectionMainSecondRowCardButtonLink
            shortCoursesThirdSectionMainSecondRowCardButtonText
            shortCoursesThirdSectionMainSecondRowCardImage {
              node {
                sourceUrl
              }
            }
            shortCoursesThirdSectionMainSecondRowCardPrice
            shortCoursesThirdSectionMainSecondRowCardTitle
          }
        }
      }
    }
  }
`

export const DONATION_PAGE_QUERY = gql`
  query MyQuery2 {
    page(id: "cG9zdDo1MTQ=") {
      seoMetaFields {
        seo {
          metaDescription
          metaKeywords
          pageTitle
        }
      }
      donatePageFeilds {
        donateFifthSectionDescription
        donateFifthSectionHeading
        donateFifthSectionLink
        donateFirstSectionMainDescription
        donateFirstSectionMainHeading
        donateSecondSectionLeftButtonLink
        donateSecondSectionLeftButtonText
        donateSecondSectionLeftDescription
        donateSecondSectionLeftHeading
        donateThirdSectionDescription
        donateThirdSectionHeading
        donate_fourth_section_scrolltext
        donateThirdSectionSubheading
        donateFifthSectionButtonText
        donateThirdSectionImage {
          node {
            sourceUrl
          }
        }
        donateSecondSectionRightImage {
          node {
            sourceUrl
          }
        }
        donateSecondSectionLeftFaqs {
          donateFaqDescription
          donateFaqTitle
          fieldGroupName
        }
        donateFourthSectionThirdImage {
          node {
            sourceUrl
          }
        }
        donateFourthSectionSecondImage {
          node {
            sourceUrl
          }
        }
        donateFourthSection {
          node {
            sourceUrl
          }
        }
      }
    }
  }
`

export const CONTACT_PAGE_POSTS_QUERY = gql`
  query MyQuery2 {
    page(id: "cG9zdDozNjM=") {
      seoMetaFields {
        seo {
          metaDescription
          metaKeywords
          pageTitle
        }
      }

      contactpagefeilds {
        firstMainHeadingPart1
        firstRightImage {
          node {
            sourceUrl
          }
        }
        firstSubheading
        first_main_heading_part_2
        secondContactSectionDescription
        secondContactSectionFormHeading
        secondContactSectionImage {
          node {
            sourceUrl
          }
        }
        secondContactSectionHeading
        thirdSectionCenterFirstButton
        thirdSectionCenterHeading
        thirdSectionCenterSecondButton
        thirdSectionCenterSubHeading
        thirdSectionCenterUppertext
        thirdSectionCenterFirstButtonLink
        thirdSectionCenterSecondButtonLink
        thirdSectionLeftImage {
          node {
            sourceUrl
          }
        }
        thirdSectionRightImage {
          node {
            sourceUrl
          }
        }
      }
    }
  }
`

export const LEADERSHIP_CIRCLE_TESTIMONIALS = gql`
  query MyQuery2 {
    page(id: "cG9zdDo2MDg=") {
      leadershipPageFeilds {
        leadershipWatchOurCommunitySection {
          watchOurCommunitySlider {
            watchOurCommunitySliderAuthor
            watchOurCommunitySliderDesignation
            watchOurCommunityVideoLink
            watchOurCommunitySliderImage {
              node {
                sourceUrl
              }
            }
          }
        }
      }
    }
  }
`

export const POST_QUERY = gql`
  query ($slug: ID!) {
    post(id: $slug, idType: SLUG) {
      databaseId
      content
      date
      title
      tags {
        nodes {
          name
        }
      }
      featuredImage {
        node {
          sourceUrl
        }
      }
      seoMetaFields {
        seo {
          metaDescription
          metaKeywords
          pageTitle
        }
      }
    }
  }
`
