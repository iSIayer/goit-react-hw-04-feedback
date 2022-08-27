import PropTypes from 'prop-types';
import { NotificationMessage, NotificationText } from './Notification.styled';
import { BsChatDotsFill } from 'react-icons/bs';

export const Notification = ({ message }) => {
  return (
    <NotificationMessage>
      <NotificationText>{message}</NotificationText>
      <BsChatDotsFill />
    </NotificationMessage>
  );
};

Notification.propTypes = {
  message: PropTypes.string.isRequired,
};
