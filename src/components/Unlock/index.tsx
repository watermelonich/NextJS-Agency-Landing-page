'use client'

import { Button } from 'components/Ui/Button'
import { Headline } from 'components/Ui/Headline'

import {
  BlockUnlock,
  ContentFrameUnlock,
  ContentUnlock,
  FrameUnlock,
  WrapperUnlock
} from './styles'

import SVG_G15 from 'assets/svg/SVG_G15.svg'

export const Unlock = () => {
  return (
    <WrapperUnlock>
      <ContentUnlock>
        <BlockUnlock>
          <Headline
            title='the unseen of spending three years at Pixelgrade'
            text='lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet justo ipsum. Sed accumsan quam vitae est varius fringilla. Pellentesque placerat vestibulum lorem sed porta. Nullam mattis tristique iaculis. Nullam pulvinar sit amet risus pretium auctor. Etiam quis massa pulvinar, aliquam quam vitae, tempus sem. Donec elementum pulvinar odio.'
          />
          <Button text='learn more' icon='' />
        </BlockUnlock>
        <ContentFrameUnlock>
          <FrameUnlock src={SVG_G15} alt='Frame Unlock' priority={true} />
        </ContentFrameUnlock>
      </ContentUnlock>
    </WrapperUnlock>
  )
}
