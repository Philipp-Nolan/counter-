import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Controlls from './Controlls';
import Display from './Display';
import style from './style.module.scss';
let time = null;
class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
      step: 1,
      change: this.increment,
      autoClickTime: 1,
      isVisibleStop: 'none',
      isVisibleStart: 'inline-flex',
      isVisibleAlert: 'none',
      atrDisabled: false,
    };
  }
  increment = () => {
    const { counter, step } = this.state;
    this.setState({ counter: counter + step });
  };

  decrement = () => {
    const { counter, step } = this.state;
    this.setState({ counter: counter - step });
  };

  handleChange = (event) => {
    if (event.target.value === 'increment') {
      this.setState({ change: this.increment });
    } else {
      this.setState({ change: this.decrement });
    }
  };

  handlerStep = (event) => {
    event.target.min = 1;
    event.target.max = 100;
    this.setState({ step: parseInt(event.target.value) });
  };

  autoClickChange = (event) => {
    this.setState({ autoClickTime: event.target.ariaValueNow });
    if (this.state.autoClickTime === null) {
      this.setState({ isVisibleAlert: 'block' });
      const timerId = setTimeout(() => {
        clearInterval(timerId);
        this.setState({ isVisibleAlert: 'none' });
      }, 5000);
    }
  };

  autoClick = () => {
    this.setState({ isVisibleStop: 'inline-flex' });
    this.setState({ isVisibleStart: 'none' });
    this.setState({ atrDisabled: true });
    const { autoClickTime, change } = this.state;
    change();
    time = setTimeout(this.autoClick, autoClickTime * 1000);
  };

  autoClickStop = () => {
    clearTimeout(time);
    this.setState({ isVisibleStop: 'none' });
    this.setState({ isVisibleStart: 'inline-flex' });
    this.setState({ atrDisabled: false });
    this.setState({ counter: 0 });
  };

  render() {
    const { counter, isVisibleAlert } = this.state;

    return (
      <div style={style} className="counter">
        <Display counter={counter} isVisibleAlert={isVisibleAlert} />

        <Controlls
          handleChange={this.handleChange}
          handlerStep={this.handlerStep}
          change={this.state.change}
          autoClick={this.autoClick}
          autoClickChange={this.autoClickChange}
          autoClickTime={this.state.autoClickTime}
          autoClickStop={this.autoClickStop}
          atrDisabled={this.state.atrDisabled}
          isVisibleStop={this.state.isVisibleStop}
          isVisibleStart={this.state.isVisibleStart}
        />
      </div>
    );
  }
}

Counter.propTypes = {
  counter: PropTypes.number,
  step: PropTypes.number,
  change: PropTypes.func,
};

export default Counter;
