import Image from 'next/image'

import styled from 'styled-components'

export const WrapperCommunity = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  -ms-flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 3rem;
  gap: 6rem;

  @media (min-width: ${(props) => props.theme.screenSize.LG}) {
    padding: 0 6rem;
  }
`
export const ContentCommunity = styled.main`
  width: 100%;
  display: flex;
  flex-direction: column;
  -ms-flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 6rem;
`
export const BlockCommunity = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  -ms-flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2rem;

  &:first-child {
    div {
      h1 {
        font-size: 2.5rem;
        font-style: normal;
        font-weight: 600;
        line-height: 3.75rem;
        color: ${(props) => props.theme.colors.Cinza};
        text-align: center;

        &::first-letter {
          text-transform: capitalize;
        }
      }

      p {
        font-size: 1.6rem;
        font-style: normal;
        font-weight: 600;
        line-height: 2.4rem;
        color: ${(props) => props.theme.colors.CinzaMedio};
        text-align: center;

        &::first-letter {
          text-transform: capitalize;
        }
      }

      @media (min-width: ${(props) => props.theme.screenSize.MD}) {
        max-width: 37.6rem;
        margin: 0 auto;
      }
    }
  }
`
export const ContentCardsCommunity = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  -ms-flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2.5rem;
  /* background: ${(props) => props.theme.colors.Prata}; */

  @media (min-width: ${(props) => props.theme.screenSize.MD}) {
    flex-direction: row;
    -ms-flex-direction: row;
  }
`
export const CardCommunity = styled.div`
  width: 100%;
  background: ${(props) => props.theme.colors.Prata};
  border-radius: 0.55rem;
  box-shadow: 0 0.8rem 1.5rem 0 rgba(171, 190, 209, 0.323);

  padding: 1.4rem;
  display: grid;
  place-items: center;
  gap: 2rem;

  &:nth-child(-n + 3) {
    div {
      h1 {
        font-size: 1.8rem;
        font-style: normal;
        font-weight: 600;
        line-height: 2.7rem;
        color: ${(props) => props.theme.colors.Cinza};
        text-align: center;

        &::first-letter {
          text-transform: capitalize;
        }
      }

      p {
        font-size: 1.6rem;
        font-style: normal;
        font-weight: 500;
        line-height: 2.4rem;
        color: ${(props) => props.theme.colors.CinzaMedio};
        text-align: center;

        &::first-letter {
          text-transform: capitalize;
        }
      }
    }
  }
`
export const FrameCardCommunity = styled(Image)`
  width: 100%;
  max-width: 6rem;
  height: auto;
  object-fit: contain;
`
