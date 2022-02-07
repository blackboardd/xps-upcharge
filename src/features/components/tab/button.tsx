import * as React from 'react';
import { StyledButton } from '../../../styles/tab';

const Button: () => JSX.Element = () => {
  return (
    <StyledButton className="upc-button">
      <i className="uk-icon-laptop uk-icon-medium"></i>
    </StyledButton>
  );
};

export default Button;
