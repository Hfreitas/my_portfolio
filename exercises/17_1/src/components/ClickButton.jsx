import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { clickAction } from '../actions/index';

const ClickButton = ({ click }) => {
  return (
    <div>
      <button type="button" onClick={click}>
        Clique Aqui!
      </button>
    </div>
  );
};

ClickButton.propTypes = { click: PropTypes.func.isRequired };

const mapDispatchToProps = (dispatch) => ({
  click: () => dispatch(clickAction()),
});

export default connect(null, mapDispatchToProps)(ClickButton);
