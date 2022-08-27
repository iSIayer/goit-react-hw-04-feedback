import PropTypes from 'prop-types';
import { SectionContainer, SectionTitle } from './Section.styled';
import { MdSportsBar } from 'react-icons/md';

export const Section = ({ title, children }) => {
  return (
    <SectionContainer>
      <MdSportsBar size="60px" />
      <SectionTitle>{title}</SectionTitle>
      {children}
    </SectionContainer>
  );
};

Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.object.isRequired,
};
