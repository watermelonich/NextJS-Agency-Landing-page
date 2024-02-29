'use client'

import { Headline } from 'components/Ui/Headline'

import {
  BlockCommunity,
  CardCommunity,
  ContentCardsCommunity,
  ContentCommunity,
  FrameCardCommunity,
  WrapperCommunity
} from './styles'

import SVG_G07 from 'assets/svg/SVG_G07.svg'
import SVG_G08 from 'assets/svg/SVG_G08.svg'
import SVG_G09 from 'assets/svg/SVG_G09.svg'

export const Community = () => {
  return (
    <WrapperCommunity>
      <ContentCommunity>
        <BlockCommunity>
          <Headline
            title='manage your entire community in a single system'
            text='who is Nextcent suitable for?'
          />
        </BlockCommunity>
        <ContentCardsCommunity>
          <CardCommunity>
            <FrameCardCommunity
              src={SVG_G07}
              alt='Frame card'
              priority={true}
            />
            <Headline
              title='membership'
              text='our membership management software provides full automation of membership renewals and payments'
            />
          </CardCommunity>
          <CardCommunity>
            <FrameCardCommunity
              src={SVG_G08}
              alt='Frame card'
              priority={true}
            />
            <Headline
              title='Associations'
              text='our membership management software provides full automation of membership renewals and payments'
            />
          </CardCommunity>
          <CardCommunity>
            <FrameCardCommunity
              src={SVG_G09}
              alt='Frame card'
              priority={true}
            />
            <Headline
              title='Clubs&thinsp;/&thinsp;Groups'
              text='our membership management software provides full automation of membership renewals and payments'
            />
          </CardCommunity>
        </ContentCardsCommunity>
      </ContentCommunity>
    </WrapperCommunity>
  )
}
