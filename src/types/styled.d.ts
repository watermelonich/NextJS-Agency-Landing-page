import 'styled-components'
import { screenSize } from './../styles/themes/themes'

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: Record<string, string>
    screenSize: typeof screenSize
  }
}
