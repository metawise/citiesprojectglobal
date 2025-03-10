import { gql } from '@apollo/client'
import React from 'react'
import Image from 'next/image'
import client from 'apollo-client'
import Link from 'next/link'
import { fetchData } from '@/lib/fetchData'

const POSTS_QUERY = gql`
  query MyQuery2 {
    page(id: "cG9zdDo2MDg=") {
      leadershipPageFeilds {
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
`

export default async function LastFiveSection() {
  const data = await fetchData(POSTS_QUERY)

  return (
    <section>
      <div className="flex justify-center mx-auto w-fit gap-3 my-40">
        <div className=" ">
          <Image
            alt=""
            height={1000}
            width={1000}
            className=""
            src={data.page.leadershipPageFeilds.vantageFormThirdSection.vantageFormThirdSectionImage1?.node?.sourceUrl}
          />
        </div>
        <div className=" ">
          <Image
            alt=""
            height={1000}
            width={1000}
            className=""
            src={data.page.leadershipPageFeilds.vantageFormThirdSection.vantageFormThirdSectionImage2?.node?.sourceUrl}
          />
        </div>
        <div className=" ">
          <Image
            alt=""
            height={1000}
            width={1000}
            className=""
            src={data.page.leadershipPageFeilds.vantageFormThirdSection.vantageFormThirdSectionImage3?.node?.sourceUrl}
          />
        </div>
        <div className="] ">
          <Image
            alt=""
            height={1000}
            width={1000}
            className=""
            src={data.page.leadershipPageFeilds.vantageFormThirdSection.vantageFormThirdSectionImage4?.node?.sourceUrl}
          />
        </div>
        <div className="  ">
          <Image
            alt=""
            height={1000}
            width={1000}
            className=""
            src={data.page.leadershipPageFeilds.vantageFormThirdSection.vantageFormThirdSectionImage5?.node?.sourceUrl}
          />
        </div>
      </div>
    </section>
  )
}
