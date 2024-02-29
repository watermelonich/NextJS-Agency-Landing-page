'use client'

import React, { ReactNode } from 'react'

import { Footer } from 'components/Footer'
import { Header } from 'components/Header'
import { ThemeProvider } from 'styled-components'

import { Content } from './styles'

import StyledComponentsRegistry from 'app/registry'
import { GlobalStyle } from 'styles/global'
import { theme } from 'styles/themes/themes'
interface LayoutProps {
  children: ReactNode
}

export const Layout = ({ children }: LayoutProps) => {
  return (
    <StyledComponentsRegistry>
      <ThemeProvider theme={theme}>
        <html lang='en'>
          <body>
            <Content>
              <Header />
              {children}
              <Footer />
            </Content>
          </body>
        </html>
        <GlobalStyle />
      </ThemeProvider>
    </StyledComponentsRegistry>
  )
}
