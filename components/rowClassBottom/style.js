import styled from "styled-components";

export const RowClassBottomContainer = styled.div`
  .row_class_bottom_cont {
    max-width: 1300px;
    width: 100%;
    margin: 0 auto 0;
    padding: 2rem 1rem;

    display: flex;
    align-items: center;
    justify-content: space-between;
    font-family: 'Work Sans', sans-serif;

    @media (max-width: 700px){
      align-items: unset;
    }

    @media (max-width: 580px){
      flex-direction: column;
    }

    .row_class_bottom_col1,
    .row_class_bottom_col2,
    .row_class_bottom_col3 {
      display: flex;
      align-items: center;
      
      p {
        color: #ffffff;
        margin-left: 1rem;
        font-weight: bold;
        max-width: 130px;

        @media (max-width: 700px){
          text-align: center;
          margin-left: 0;
        }

        @media (max-width: 450px){
          max-width: unset;
        }
      }

      @media (max-width: 700px){
        flex-direction: column;
        align-items: center;
      }

      .row_class_img {
        margin-bottom: .7rem;
      }
    }
    .row_class_bottom_col2,
    .row_class_bottom_col3 {
      margin-left: 1rem;

      @media (max-width: 700px){
        margin-left: unset;
        /* margin-bottom: 1.5rem; */
      }

      @media (max-width: 580px){
        .row_class_img {
          margin-top: 1rem;
        }
      }

      p {
        max-width: 250px;
        margin-bottom: 0.5rem;
        text-transform: uppercase;

        @media (max-width: 450px){
          max-width: unset;
        }

        &:nth-child(2) {
          font-size: 12px;
          text-transform: inherit;
          font-weight: inherit;
        }
      }
      
    }
  }
`