import Image from 'next/image'

import styled from 'styled-components'

export const ViewFooter = styled.footer`
  width: 100%;
  display: flex;
  flex-direction: column;
  -ms-flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2rem;
`
export const BlockTextFooter = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  -ms-flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  padding: 2rem 0;

  &:first-child {
    div {
      h1 {
        font-size: 4rem;
        font-style: normal;
        font-weight: 600;
        line-height: 4.75rem;
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
        max-width: 60rem;
        margin: 0 auto;
      }
    }
  }
`
export const WrapperFooter = styled.main`
  min-width: 100vw;
  display: flex;
  flex-direction: column;
  -ms-flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 6rem;
  padding: 3rem;

  background: ${(props) => props.theme.colors.Preto};

  @media (min-width: ${(props) => props.theme.screenSize.LG}) {
    padding: 4rem 10.3125rem;
  }
`
export const ContentFooter = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  -ms-flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2.5rem;

  @media (min-width: ${(props) => props.theme.screenSize.MD}) {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: auto;
    justify-content: flex-start;
    align-items: flex-start;
  }

  @media (min-width: ${(props) => props.theme.screenSize.LG}) {
    max-width: 102.4rem;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: auto;
    justify-content: flex-start;
    align-items: flex-start;
  }
`
export const BlockFooter = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  -ms-flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2.5rem;

  &:nth-child(-n + 4) {
    h1 {
      font-size: 1.6rem;
      font-style: normal;
      font-weight: 600;
      line-height: 2.4rem;
      color: ${(props) => props.theme.colors.Prata};
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
`
export const SocialFields = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  -ms-flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 2rem;

  button {
    display: flex;
    flex-direction: row;
    -ms-flex-direction: row;
    justify-content: center;
    align-items: center;
    cursor: pointer;

    padding: 0.875rem;
    border-radius: 100%;
    background: ${(props) => props.theme.colors.Cinza};

    svg {
      font-size: 2rem;
      color: ${(props) => props.theme.colors.Branco};
    }
  }
`
export const BlockField = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  -ms-flex-direction: row;
  justify-content: space-between;
  align-items: center;
  gap: 2rem;
  background: ${(props) => props.theme.colors.Cinza};
  border-radius: 0.55rem;

  svg {
    font-size: 2rem;
    margin-right: 2rem;
    color: ${(props) => props.theme.colors.Prata};

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
export const FieldSignature = styled.input`
  padding: 1.3rem;
  background: none;
  outline: none;
  caret-color: ${(props) => props.theme.colors.Branco};
  font-size: 1.6rem;
  font-style: normal;
  font-weight: 600;
  line-height: 2.4rem;
  color: ${(props) => props.theme.colors.Branco};
  text-align: left;

  &::placeholder {
    text-transform: capitalize;
  }
`

export const LogoFooter = styled(Image)`
  width: 16rem;
  height: auto;
  object-fit: contain;
`
