import styled from 'styled-components';

export const StatisticsLabel = styled.p`
  min-width: 250px;
  display: flex;
  justify-content: space-between;
  padding: ${props => props.theme.dimensions.small};
  font-weight: ${props => props.theme.fontWeight.normal};
  font-size: ${props => props.theme.dimensions.standart};
  color: ${props => props.theme.colors.primary};
`;
