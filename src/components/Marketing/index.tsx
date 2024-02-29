'use client'

import { Button } from 'components/Ui/Button'
import { Headline } from 'components/Ui/Headline'

import {
  BlockMarketing,
  ContentMarketing,
  ContentMarketingCard,
  FrameMarketingCard,
  MarketingCard,
  WrapperMarketing,
  WrapperMarketingCards
} from './styled'

import IMG_G01 from 'assets/img/IMG_G01.png'
import IMG_G02 from 'assets/img/IMG_G02.png'
import IMG_G03 from 'assets/img/IMG_G03.png'

export const Marketing = () => {
  return (
    <WrapperMarketing>
      <ContentMarketing>
        <BlockMarketing>
          <Headline
            title='caring is the new marketing'
            text='The Nexcent blog is the best place to read about the latest membership insights, trends and more. See whos joining the community, read about how our community are increasing their membership income​'
          />
        </BlockMarketing>
        <WrapperMarketingCards>
          <MarketingCard>
            <FrameMarketingCard src={IMG_G01} alt='Marketing' priority={true} />
            <ContentMarketingCard>
              <Headline
                title=''
                text='creating streamlined safeguarding processes with OneRen'
              />
              <Button text='read more' icon='' />
            </ContentMarketingCard>
          </MarketingCard>
          <MarketingCard>
            <FrameMarketingCard src={IMG_G02} alt='Marketing' priority={true} />
            <ContentMarketingCard>
              <Headline
                title=''
                text='creating streamlined safeguarding processes with OneRen'
              />
              <Button text='read more' icon='' />
            </ContentMarketingCard>
          </MarketingCard>
          <MarketingCard>
            <FrameMarketingCard src={IMG_G03} alt='Marketing' priority={true} />
            <ContentMarketingCard>
              <Headline
                title=''
                text='creating streamlined safeguarding processes with OneRen'
              />
              <Button text='read more' icon='' />
            </ContentMarketingCard>
          </MarketingCard>
        </WrapperMarketingCards>
      </ContentMarketing>
    </WrapperMarketing>
  )
}
