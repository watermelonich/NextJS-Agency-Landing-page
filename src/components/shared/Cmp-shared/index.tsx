import { Button } from 'components/Ui/Button'
import { Headline } from 'components/Ui/Headline'

import { ContentCompShared, FrameCompShared, WrapperCompShared } from './styles'
import { PropsCompShared } from './types'

export const ComponentShared = ({
  frame,
  title,
  subText,
  buttonTxt,
  icon
}: PropsCompShared) => {
  return (
    <WrapperCompShared>
      <ContentCompShared>
        <FrameCompShared src={frame} alt='Frame' priority={true} />
      </ContentCompShared>
      <ContentCompShared>
        <Headline title={title} text={subText} />
        <Button text={buttonTxt} icon={icon} />
      </ContentCompShared>
    </WrapperCompShared>
  )
}
