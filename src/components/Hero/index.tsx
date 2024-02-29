'use client'

import { Button } from 'components/Ui/Button'
import { Headline } from 'components/Ui/Headline'

import {
  BlockHero,
  BlockLogobrands,
  ContentClients,
  ContentFrameHero,
  ContentHero,
  FrameHero,
  FrameLogobrand,
  WrapperHero
} from './styles'

import SVG_G01 from 'assets/svg/SVG_G01.svg'
import SVG_G02 from 'assets/svg/SVG_G02.svg'
import SVG_G03 from 'assets/svg/SVG_G03.svg'
import SVG_G04 from 'assets/svg/SVG_G04.svg'
import SVG_G05 from 'assets/svg/SVG_G05.svg'
import SVG_G06 from 'assets/svg/SVG_G06.svg'

export const Hero = () => {
  return (
    <WrapperHero>
      <ContentHero>
        <BlockHero>
          <Headline
            title='lessons and insights&thinsp;'
            text='where to grow your business as a photographer: site or social media?'
          />
          <Button text='register' icon='' />
        </BlockHero>
        <ContentFrameHero>
          <FrameHero src={SVG_G01} alt='Frame Hero' priority={true} />
        </ContentFrameHero>
      </ContentHero>
      <ContentClients>
        <Headline
          title='our clients'
          text='we have been working with some Fortune 500+ clients'
        />
        <BlockLogobrands>
          <FrameLogobrand src={SVG_G02} alt='LogoBrand' priority={true} />
          <FrameLogobrand src={SVG_G03} alt='LogoBrand' priority={true} />
          <FrameLogobrand src={SVG_G04} alt='LogoBrand' priority={true} />
          <FrameLogobrand src={SVG_G05} alt='LogoBrand' priority={true} />
          <FrameLogobrand src={SVG_G06} alt='LogoBrand' priority={true} />
          <FrameLogobrand src={SVG_G04} alt='LogoBrand' priority={true} />
        </BlockLogobrands>
      </ContentClients>
    </WrapperHero>
  )
}
