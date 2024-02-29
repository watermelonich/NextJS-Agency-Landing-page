'use client'

import { Button } from 'components/Ui/Button'
import { Headline } from 'components/Ui/Headline'
/* Importado de Componente Unlock */
import {
  ContentUnlock,
  BlockUnlock,
  ContentFrameUnlock,
  FrameUnlock
} from 'components/Unlock/styles'
/* Importado de Componente Unlock */

import {
  BlockAchievement,
  BlockTextAchievements,
  ContentAchievements,
  FrameAchievement,
  GridAchievements,
  ViewAchievements,
  WrapperAchievements
} from './styles'

import SVG_G11 from 'assets/svg/SVG_G11.svg'
import SVG_G16 from 'assets/svg/SVG_G16.svg'

export const Achievements = () => {
  return (
    <ViewAchievements>
      <WrapperAchievements>
        <ContentAchievements>
          <BlockTextAchievements>
            <Headline
              title='helping a local&thinsp;'
              text='we reached here with our hard work and dedication'
            />
          </BlockTextAchievements>
          <GridAchievements>
            <BlockAchievement>
              <FrameAchievement
                src={SVG_G11}
                alt='Frame Achievements'
                priority={true}
              />
              <Headline title='2,245,341' text='members' />
            </BlockAchievement>
            <BlockAchievement>
              <FrameAchievement
                src={SVG_G11}
                alt='Frame Achievements'
                priority={true}
              />
              <Headline title='2,245,341' text='members' />
            </BlockAchievement>
            <BlockAchievement>
              <FrameAchievement
                src={SVG_G11}
                alt='Frame Achievements'
                priority={true}
              />
              <Headline title='2,245,341' text='members' />
            </BlockAchievement>
            <BlockAchievement>
              <FrameAchievement
                src={SVG_G11}
                alt='Frame Achievements'
                priority={true}
              />
              <Headline title='2,245,341' text='members' />
            </BlockAchievement>
          </GridAchievements>
        </ContentAchievements>
      </WrapperAchievements>
      {/* Importado de Componente Unlock */}
      <ContentUnlock>
        <BlockUnlock>
          <Headline
            title='how to design your site footer like we did'
            text='lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet justo ipsum. Sed accumsan quam vitae est varius fringilla. Pellentesque placerat vestibulum lorem sed porta. Nullam mattis tristique iaculis. Nullam pulvinar sit amet risus pretium auctor. Etiam quis massa pulvinar, aliquam quam vitae, tempus sem. Donec elementum pulvinar odio.'
          />
          <Button text='learn more' icon='' />
        </BlockUnlock>
        <ContentFrameUnlock>
          <FrameUnlock src={SVG_G16} alt='Frame Unlock' priority={true} />
        </ContentFrameUnlock>
      </ContentUnlock>
      {/* Importado de Componente Unlock */}
    </ViewAchievements>
  )
}
