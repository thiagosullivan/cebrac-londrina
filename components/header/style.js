import styled from "styled-components";

export const HeaderContainer = styled.header`
  margin-bottom: 3rem;
  font-family: 'Work Sans', sans-serif;
  
  @media (max-width: 550px){
    margin-bottom: 1rem;
  }
  
  .header_mobile_active {
    display: block;
    height: 100vh;
    visibility: visible;
    position: fixed;
  }
`
export const TopHead = styled.div`

  display: flex;
  align-items: center;
  justify-content: center;
  margin: .5rem 0;
  
  .head__flag {
    margin-right: 10px;
    width: 30px;
    height: 20px;
    box-shadow: 0 5px 5px rgb(0 0 0 / 20%);
  }

  p {
    font-size: 10px;
    font-weight: bold;
  }
`

export const BottomHead = styled.div`
  background-color: #ffffff;
  z-index: 2;
  width: 100%;

  .bottom__header__cont {
    display: flex;
    align-items: center;
    max-width: 1300px;
    width: 100%;
    justify-content: space-between;
    margin: 0 auto;
    padding: .5rem 1rem;
    border-top: 1px solid ${({ theme }) => theme.blueOne};
    border-bottom: 1px solid ${({ theme }) => theme.blueOne};
  } 

  .header__logo {
    cursor: pointer;
  }
`

export const NavHead = styled.nav`
  
  ul {
    display: flex;
    align-items: center;
    
    li {
      margin: 0 25px;
      text-align: center;
      font-size: 12px;

      a {
        font-family: 'Work Sans', sans-serif;
        color: ${({ theme }) => theme.blueOne};
        font-weight: bold;
      }
    }
  }

  @media (max-width: 980px) {
    display: none;
  }

`

export const NavHeadMobile = styled.div`
  /* position: relative; */
  max-width: 320px;

  @media (min-width: 980px) {
    display: none;
  }

  .menu__mobile_ham {
    display: flex;
    justify-content: flex-end;
    font-size: 1.5rem;
  }
`

export const NavHeadMobileCont = styled.nav`
  display: block;
  position: absolute;
  z-index: 90;
  background-color: #ffffff;
  top: 0;
  right: 0;
  box-shadow: 5px 5px 10px rgba(0,0,0,.20);
  width: 100%;
  height: 0;
  color: ${({ theme }) => theme.blueOne};
  visibility: hidden;
  transition: 0.6s;
  overflow-y: hidden;

  .close_header_mobile {
    right: 2rem;
    top: 1.5rem;
    font-size: 1.5rem;
    position: absolute;
  }

  ul {
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    text-align: center;
    height: calc(100vh - 16px);

    li {
      font-size: 1.2rem;
      font-weight: bold;
    }
  }
`