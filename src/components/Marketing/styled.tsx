import Image from 'next/image'

import styled from 'styled-components'

export const WrapperMarketing = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  -ms-flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 3rem;
  gap: 6rem;
  /* border: solid red 5px; */

  @media (min-width: ${(props) => props.theme.screenSize.LG}) {
    padding: 9rem 6rem;
  }
`
export const ContentMarketing = styled.main`
  width: 100%;
  display: flex;
  flex-direction: column;
  -ms-flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 6rem;
`
export const BlockMarketing = styled.div`
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
        font-weight: 500;
        line-height: 2.4rem;
        color: ${(props) => props.theme.colors.CinzaMedio};
        text-align: center;

        &::first-letter {
          text-transform: capitalize;
        }
      }

      @media (min-width: ${(props) => props.theme.screenSize.MD}) {
        max-width: 60rem;
        margin: 0 auto;
      }
    }
  }
`
export const WrapperMarketingCards = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  grid-template-rows: auto;
  gap: 6rem;

  @media (min-width: ${(props) => props.theme.screenSize.MD}) {
    grid-template-columns: repeat(3, 1fr);
    gap: 2rem;
  }
`
export const MarketingCard = styled.div`
  width: 100%;
  height: 32.5rem;
  display: flex;
  flex-direction: column;
  -ms-flex-direction: column;
  justify-content: start;
  align-items: center;
  gap: 1.6rem;
  position: relative;
`
export const FrameMarketingCard = styled(Image)`
  width: 100%;
  height: auto;
  object-fit: contain;
`
export const ContentMarketingCard = styled.div`
  width: 100%;
  max-width: 85%;
  display: grid;
  place-items: center;
  gap: 1.6rem;
  padding: 0.9rem;
  background: ${(props) => props.theme.colors.Prata};
  border-radius: 0.5rem;
  box-shadow: 0 0.8rem 1.5rem 0 rgba(171, 190, 209, 0.4);

  position: absolute;
  bottom: 0;

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

  button {
    p {
      font-size: 1.6rem;
      font-weight: 600;
      line-height: 2.4rem;
      color: ${(props) => props.theme.colors.Verde};
    }

    padding: 0.875rem 2rem;
    border-radius: 0.375rem;
    background: transparent;

    &::first-letter {
      text-transform: capitalize;
    }

    transition: ease-in 0.03s;
    -webkit-transition: ease-in 0.03s;
    -moz-transition: ease-in 0.03s;
    -o-transition: ease-in 0.03s;

    &:active {
      transform: translateY(0.2rem);
      -webkit-transform: translateY(0.2rem);
      -moz-transform: translateY(0.2rem);
      -o-transform: translateY(0.2rem);
    }
  }
`
