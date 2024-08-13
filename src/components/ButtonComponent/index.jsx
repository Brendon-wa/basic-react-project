import P from 'prop-types';

import './styles.css';
import { Component } from 'react';
import React from 'react';

export class ButtonComponent extends Component {
  render() {
    const { text, onClick, disabled = false } = this.props;

    return (
      <button disabled={disabled} className="button" onClick={onClick}>
        {text}
      </button>
    );
  }
}

ButtonComponent.defaultProps = {
  disabled: false,
};

ButtonComponent.propTypes = {
  text: P.string.isRequired,
  onClick: P.func.isRequired,
  disabled: P.bool,
};
