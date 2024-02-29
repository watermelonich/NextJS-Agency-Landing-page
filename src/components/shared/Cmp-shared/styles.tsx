import Image from 'next/image'

import styled from 'styled-components'

export const WrapperCompShared = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  -ms-flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  gap: 2rem;

  @media (min-width: ${(props) => props.theme.screenSize.MD}) {
    flex-direction: row;
    -ms-flex-direction: row;
  }
`
export const ContentCompShared = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  -ms-flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  gap: 2rem;

  // Headline Component
  div:nth-child(1) {
    width: 100%;
    display: flex;
    flex-direction: column;
    -ms-flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    text-align: center;
    gap: 1rem;

    h1 {
      font-size: 2.2rem;
      font-weight: 600;
      line-height: 3.3rem;
      color: ${(props) => props.theme.colors.Cinza};
      &::first-letter {
        text-transform: capitalize;
      }
    }

    p {
      font-size: 1.6rem;
      font-weight: 500;
      line-height: 2.4rem;
      color: ${(props) => props.theme.colors.Preto};
      &::first-letter {
        text-transform: capitalize;
      }
    }

    @media (min-width: ${(props) => props.theme.screenSize.MD}) {
      text-align: left;
      align-items: flex-start;
    }
  }

  button {
    background: ${(props) => props.theme.colors.Verde};
    border-radius: 0.25rem;
    box-shadow: 3px 3px 15px 0px rgba(0, 0, 0, 0.1);
    padding: 0.875rem 2rem;

    p {
      font-size: 1.6rem;
      font-weight: 500;
      line-height: 2.4rem;
      text-align: center;
      color: ${(props) => props.theme.colors.Branco};
      text-transform: capitalize;
    }

    cursor: pointer;

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
    align-items: flex-start;
  }
`
export const FrameCompShared = styled(Image)`
  width: 100%;
  height: auto;
  display: flex;
  object-fit: contain;
`
