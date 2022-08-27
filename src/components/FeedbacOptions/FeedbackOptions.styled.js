import styled from 'styled-components';

export const PrimaryButton = styled.button`
  width: 10rem;
  height: 3rem;
  margin: 5px 0;
  border: none;
  border-radius: 0.3rem;
  text-align: center;
  text-transform: uppercase;
  box-shadow: ${props => props.theme.colors.btn_shadow};
  background-color: ${props => props.theme.colors.primary_bgc};

  cursor: pointer;
  transition: all 0.3s ease;
  :hover {
    color: ${props => props.theme.colors.white};
    background-color: ${props => props.theme.colors.blue};
  }
  :active {
    box-shadow: inset 0.2rem 0.2rem 0.5rem #c8d0e7,
      inset -0.2rem -0.2rem 0.5rem white;
  }
`;
