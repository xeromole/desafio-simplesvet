/* eslint react/prop-types: [2,
  { "ignore": ["meta", "meta.touched", "meta.error", "meta.warning", "field", "input"] }] */

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Inputmask from 'inputmask';

class TextField extends Component {
  componentDidMount() {
    const isDecimal = {
      radixPoint: ',',
      groupSeparator: '.',
      autoGroup: true,
      digits: 3,
      digitsOptional: true,
      placeholder: '0',
      rightAlign: false,
      onBeforeMask(value) {
        return value;
      },
    };

    const isDate = {
      alias: 'dd/mm/yyyy',
      placeholder: '0',
    };

    Inputmask('decimal', isDecimal).mask(document.querySelectorAll('.form-control--decimal'));
    Inputmask('date', isDate).mask(document.querySelectorAll('.form-control--date'));
  }

  render() {
    return (
      <div className="form-group">
        <div htmlFor={this.props.id} className="control-label">{this.props.label}</div>
        <div>
          <input
            className={this.props.className}
            {...this.props.input}
            {...this.props.field}
            type={this.props.type}
          />
          { this.props.meta.touched && (
              (this.props.meta.error &&
                <span className="text-danger">{this.props.meta.error}</span>) ||
              (this.props.meta.warning &&
                <span className="text-warning">{this.props.meta.warning}</span>)
          ) }
        </div>
      </div>
    );
  }
}

TextField.propTypes = {
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  meta: PropTypes.instanceOf(Object).isRequired,
  className: PropTypes.string,
  type: PropTypes.string,
};

TextField.defaultProps = {
  className: 'form-control',
  type: 'text',
};

export default TextField;
