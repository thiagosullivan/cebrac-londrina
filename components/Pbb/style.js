import styled from "styled-components";

export const PbbContainer = styled.section`
  font-family: 'Work Sans', sans-serif;

  .title__pbb {
    color: ${({ theme }) => theme.pinkOne};
    text-transform: uppercase;
    font-size: 2.1rem;
  }

  .row__pbb {
    background: ${({ theme }) => theme.pinkOne};
  }

  .rowbottom__pbb {
    background: ${({ theme }) => theme.pinkOne};
  }

  .BottomInfos__col1, .BottomInfos__col2 {
    span {
      color: ${({ theme }) => theme.pinkOne};
      text-transform: uppercase;
      font-weight: bold;
    }
  }

  .class_info_bottom {
    max-width: 1300px;
    width: 100%;
    margin: 0 auto 5rem;
    display: flex;
    padding: 0 1rem;

    @media (max-width: 980px){
      flex-direction: column-reverse;
      align-items: center;
      padding: 0;
    }

    .class__container__info {

      @media (max-width: 980px){
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 0 1rem;
      }

      .class__container__info__content {
  
        display: flex;
        align-items: center;
        margin-bottom: 1.8rem;
        color: ${({ theme }) => theme.blackOne};
  
        .class_desc_icon {
          width: 75px;
          height: 75px;
          position: relative;
          margin-right: 1.6rem;
        }

        @media (max-width: 550px){
          flex-direction: column;

          h4 {
            text-align: center;
          }

          .class_desc_icon {            
            margin-right: 0 !important;
            margin-bottom: 1rem;
          }
        }
  
        h4 {
          margin-bottom: 0.6rem;
          text-transform: uppercase;
        }
        p {
          max-width: 620px;
          text-align: justify;
        }
      }

      .subtitle__pbb {
        margin-bottom: 3.1rem;

        h3 {
          color: ${({ theme }) => theme.pinkOne};
          text-transform: uppercase;
          margin-bottom: 0.6rem;
        }

        p {
          color: ${({ theme }) => theme.blackOne};
          text-align: justify;
        }
      }
    } 
  }
`

export const AsideClass = styled.aside`
  max-width: 500px;
  width: 100%;
  height: 100%;
  margin-right: 3.1rem;

  p {
    font-family: 'Merriweather', serif;
    color: #ffffff;
    margin-bottom: 1rem;
    line-height: 1.5;

    span {
      color: ${({ theme }) => theme.pinkOne};
      text-transform: uppercase;
    }

    @media (max-width: 550px){
      text-align: justify;
    }
  }

  @media (max-width: 1150px) {
    margin-right: 1.8rem;
  }

  @media (max-width: 980px){
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-right: 0;
    max-width: 980px;
    width: 100%;
  }

  .class_iframe_mobile {
    display: none;
  }

  @media (max-width: 500px) {
    .class_iframe {
      display: none;
    }
    .class_iframe_mobile {
      display: block;
    }
  }
`

export const AsideImage = styled.div`
  padding: 3.75rem;
  background-image: url(${props => props.imgUrl});
  margin-bottom: 3.1rem;

  @media (max-width: 980px) {
    background-repeat: no-repeat;
    background-size: cover;
  }
  
  @media (max-width: 550px){
    padding: 2rem;
  }
`