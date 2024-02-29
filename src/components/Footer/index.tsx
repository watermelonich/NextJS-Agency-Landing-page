'use client'

import { Button } from 'components/Ui/Button'
import { Headline } from 'components/Ui/Headline'
import DisplayText from 'components/Ui/Text'
import DisplayTitle from 'components/Ui/Title'

import {
  BsInstagram,
  BsDribbble,
  BsTwitter,
  BsYoutube,
  BsSendFill
} from './Icons'
import {
  BlockField,
  BlockFooter,
  BlockTextFooter,
  ContentFooter,
  FieldSignature,
  LogoFooter,
  SocialFields,
  ViewFooter,
  WrapperFooter
} from './styles'

import Logo from 'assets/svg/Logo-Footer.svg'

export const Footer = () => {
  return (
    <ViewFooter>
      <BlockTextFooter>
        <Headline title='pellentesque suscipit fringilla libero eu.' text='' />
      </BlockTextFooter>
      <WrapperFooter>
        <ContentFooter>
          <BlockFooter>
            <LogoFooter src={Logo} alt='Logo Footer' priority={true} />
            <DisplayText text='copyright © 2020 Nexcent ltd. All rights reserved' />
            <SocialFields>
              <Button text='' icon={<BsInstagram />} />
              <Button text='' icon={<BsDribbble />} />
              <Button text='' icon={<BsTwitter />} />
              <Button text='' icon={<BsYoutube />} />
            </SocialFields>
          </BlockFooter>
          <BlockFooter>
            <DisplayTitle title='company' />
            <DisplayText text='about us' />
            <DisplayText text='blog' />
            <DisplayText text='contact us' />
            <DisplayText text='pricing' />
            <DisplayText text='testimonials' />
          </BlockFooter>
          <BlockFooter>
            <DisplayTitle title='support' />
            <DisplayText text='help center' />
            <DisplayText text='terms of service' />
            <DisplayText text='legal' />
            <DisplayText text='privacy policy' />
            <DisplayText text='status' />
          </BlockFooter>
          <BlockFooter>
            <DisplayTitle title='stay up to date' />
            <BlockField>
              <FieldSignature type='email' placeholder='your email address' />
              <BsSendFill />
            </BlockField>
          </BlockFooter>
        </ContentFooter>
      </WrapperFooter>
    </ViewFooter>
  )
}
