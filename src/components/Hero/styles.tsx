import Image from 'next/image'

import styled from 'styled-components'

export const WrapperHero = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  -ms-flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 3rem;
  gap: 6rem;

  @media (min-width: ${(props) => props.theme.screenSize.LG}) {
    padding: 9rem 6rem;
  }
`
export const ContentHero = styled.main`
  width: 100%;
  display: flex;
  flex-direction: column;
  -ms-flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 6rem;

  @media (min-width: ${(props) => props.theme.screenSize.MD}) {
    flex-direction: row;
    -ms-flex-direction: row;
  }
`
export const BlockHero = styled.div`
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
        font-size: 4rem;
        font-style: normal;
        font-weight: 600;
        line-height: 4.75rem;
        color: ${(props) => props.theme.colors.Cinza};
        text-align: center;

        &::after {
          content: 'from 8 years';
          color: ${(props) => props.theme.colors.Verde};
        }

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
    }

    button {
      p {
        font-size: 1.6rem;
        font-weight: 600;
        line-height: 2.4rem;
        color: ${(props) => props.theme.colors.Branco};
      }

      padding: 0.875rem 2rem;
      border-radius: 0.375rem;
      background: ${(props) => props.theme.colors.Verde};

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

    @media (min-width: ${(props) => props.theme.screenSize.MD}) {
      div {
        h1,
        p {
          text-align: left;
        }
      }

      align-items: flex-start;
    }
  }
`
export const ContentFrameHero = styled.div`
  width: 100%;
  display: grid;
  place-items: center;
`
export const FrameHero = styled(Image)`
  width: 100%;
  height: auto;
  object-fit: contain;
`
export const ContentClients = styled.div`
  width: 100%;
  display: grid;
  place-items: center;
  gap: 2.5rem;

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
  }
`
export const BlockLogobrands = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  -ms-flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  gap: 2rem;

  overflow-x: scroll;
  transition: transform 0.2s ease-in-out;
  scroll-snap-type: x mandatory;
  scroll-behavior: smooth;

  &::-webkit-scrollbar {
    width: 0;
  }

  @media (min-width: ${(props) => props.theme.screenSize.MD}) {
    justify-content: space-evenly;
    gap: 0;
  }
`
export const FrameLogobrand = styled(Image)`
  width: 4.5rem;
  height: auto;
  object-fit: contain;
`
