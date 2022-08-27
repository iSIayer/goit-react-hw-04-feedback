import styled from 'styled-components';

export const SectionContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: ${props => props.theme.dimensions.small};
  padding: 20px;
  border-radius: 1rem;
  box-shadow: 0.8rem 0.8rem 1.4rem #c8d0e7, -0.2rem -0.2rem 1.8rem white;
  color: ${props => props.theme.colors.blue};
  background-color: ${props => props.theme.colors.bgc};
`;

export const SectionTitle = styled.h2`
  margin: ${props => props.theme.dimensions.standart} 0;
  text-align: center;
  font-weight: ${props => props.theme.fontWeight.normal};
  font-size: 1.8rem;
  letter-spacing: 1px;
`;
