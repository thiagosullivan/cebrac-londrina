import styled from "styled-components";

export const WhatsappContainer = styled.div`
  background-color: ${({ theme}) => theme.whatsapp};
  max-width: 80px;
  width: 100%;
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  padding-left: 1px;
  padding-top: 5px;
  position: fixed;
  bottom: 2rem;
  right: 1rem;
  transition: all 150ms ease-in-out;

  &:hover {
    box-shadow: 1px 1px 10px rgba(0,0,0,.5);
  }
`;