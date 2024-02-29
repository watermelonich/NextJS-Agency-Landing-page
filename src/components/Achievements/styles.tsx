import Image from 'next/image'

import styled from 'styled-components'

export const ViewAchievements = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  -ms-flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 6rem;

  main:nth-child(2) {
    padding: 3rem;

    @media (min-width: ${(props) => props.theme.screenSize.LG}) {
      padding: 0 6rem;
    }
  }
`
export const WrapperAchievements = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  -ms-flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 3rem;
  gap: 6rem;
  background: ${(props) => props.theme.colors.Prata};

  @media (min-width: ${(props) => props.theme.screenSize.LG}) {
    padding: 9rem 6rem;
  }
`
export const ContentAchievements = styled.main`
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
export const BlockTextAchievements = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  -ms-flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2rem;

  &:first-child {
    div {
      z-index: 5;

      h1 {
        font-size: 2.5rem;
        font-style: normal;
        font-weight: 600;
        line-height: 3.75rem;
        color: ${(props) => props.theme.colors.Cinza};
        text-align: center;

        &::after {
          content: 'business reinvent itself';
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

    @media (min-width: ${(props) => props.theme.screenSize.MD}) {
      div {
        max-width: 28.5rem;
        margin: 0;

        h1,
        p {
          text-align: left;
        }
      }

      align-items: flex-start;
    }
  }
`
export const GridAchievements = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: auto;
  gap: 2rem;
  z-index: 5;
`
export const BlockAchievement = styled.div`
  display: flex;
  flex-direction: row;
  -ms-flex-direction: row;
  justify-content: space-around;
  align-items: flex-start;

  &:nth-child(-n + 4) {
    div {
      gap: 0;
      h1 {
        font-size: 1.6rem;
        font-style: normal;
        font-weight: 600;
        line-height: 2.4rem;
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
export const FrameAchievement = styled(Image)`
  width: 5rem;
  height: auto;
  object-fit: contain;
`
