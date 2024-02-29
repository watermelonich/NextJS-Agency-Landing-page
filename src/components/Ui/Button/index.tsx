import { ReactNode } from 'react'

import DisplayText from '../Text'

interface PropButton {
  text: string
  icon: ReactNode
}

export const Button = ({ text, icon }: PropButton) => {
  return (
    <button>
      <DisplayText text={text} />
      {icon}
    </button>
  )
}
