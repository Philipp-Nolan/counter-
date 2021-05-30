import React, { Component } from 'react';
import Alert from '@material-ui/lab/Alert';

class Display extends Component {
  render() {
    const { counter, isVisibleAlert } = this.props;
    return (
      <>
        <Alert style={{ display: `${isVisibleAlert}` }} severity="warning">
          Выберите корректное значение !
        </Alert>
        <div className="display">{counter}</div>
      </>
    );
  }
}
export default Display;
