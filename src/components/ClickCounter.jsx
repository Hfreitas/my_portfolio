import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

const ClickCounter = ({ clickCounter }) => {
  return (
    <div>
      <h2>Contador de cliques usando Redux</h2>
      <section>
        <span>{clickCounter}</span>
      </section>
    </div>
  );
};

ClickCounter.propTypes = {
  clickCounter: PropTypes.number.isRequired,
};

const mapStateToProps = (state) => ({ clickCounter: state.rootReducer });

export default connect(mapStateToProps)(ClickCounter);
