import { useState } from 'react'

import { Button } from 'components/Ui/Button'

import { RiCloseFill, RiMenu5Fill } from './Icons_Header'
import {
  BlockLinks,
  ContentButtons,
  ContentHeader,
  ContentLinks,
  ControlSidebar,
  DisplayLink,
  LogoBranding,
  WrapperHeader
} from './styles'

import Logo from 'assets/svg/Logo.svg'

export const Header = () => {
  const [open, setOpen] = useState(false)
  const handleSideBar = () => {
    setOpen(!open)
  }
  return (
    <WrapperHeader>
      <ContentHeader>
        <LogoBranding src={Logo} alt='Logo' priority={true} />
        <ControlSidebar onClick={handleSideBar}>
          {open ? <RiCloseFill /> : <RiMenu5Fill />}
        </ControlSidebar>
        <ContentLinks open={open}>
          <BlockLinks>
            <DisplayLink href='#'>home</DisplayLink>
            <DisplayLink href='#'>service</DisplayLink>
            <DisplayLink href='#'>features</DisplayLink>
            <DisplayLink href='#'>product</DisplayLink>
            <DisplayLink href='#'>Testimonial</DisplayLink>
            <DisplayLink href='#'>faq</DisplayLink>
          </BlockLinks>
          <ContentButtons>
            <Button text='login' icon='' />
            <Button text='sign up' icon='' />
          </ContentButtons>
        </ContentLinks>
      </ContentHeader>
    </WrapperHeader>
  )
}
