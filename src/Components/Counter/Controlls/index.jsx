import React, { Component } from 'react';
import {
  Button,
  Input,
  FormControlLabel,
  RadioGroup,
  FormControl,
  FormLabel,
  Radio,
  Slider,
  Typography,
} from '@material-ui/core';

class Controlls extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {
      handlerStep,
      handleChange,
      change,
      autoClick,
      autoClickChange,
      autoClickTime,
      autoClickStop,
      atrDisabled,
      isVisibleStart,
      isVisibleStop,
    } = this.props;
    return (
      <>
        <FormControl disabled={atrDisabled} component="fieldset">
          <FormLabel className="formLabel" component="legend">
            Increment / Decrement
          </FormLabel>
          <RadioGroup
            onChange={handleChange}
            className="radioGroup"
            defaultValue="increment"
            name="customized-radios">
            <FormControlLabel value="increment" control={<Radio />} label="increment  +" />
            <FormControlLabel value="decrement" control={<Radio />} label="decrement  -" />
          </RadioGroup>
        </FormControl>

        <Input
          disabled={atrDisabled}
          className="inputStep"
          onChange={handlerStep}
          type="number"
          defaultValue="1"
          min="1"
          max="100"></Input>

        <Typography id="discrete-slider-restrict" gutterBottom>
          autoClick value : {autoClickTime} /s
        </Typography>

        <Slider
          disabled={atrDisabled}
          onChange={autoClickChange}
          className="slider"
          aria-labelledby="discrete-slider"
          valueLabelDisplay="auto"
          marks={marks}
          defaultValue={1}
          step={1}
          min={1}
          max={5}
        />

        <div className="buttonsContainer">
          <Button
            disabled={atrDisabled}
            className="clickBtn"
            variant="contained"
            color="primary"
            onClick={change}>
            click
          </Button>

          <Button
            style={{ display: `${isVisibleStart}` }}
            className="autoClick "
            variant="contained"
            color="secondary"
            onClick={autoClick}>
            auto Click
          </Button>

          <Button
            className="autoClickStop"
            style={{ display: `${isVisibleStop}` }}
            variant="contained"
            color="secondary"
            onClick={autoClickStop}>
            auto Click Stop
          </Button>
        </div>
      </>
    );
  }
}

const marks = [
  {
    value: 1,
    label: '1 /sec',
  },
  {
    value: 2,
    label: '2 /sec',
  },
  {
    value: 3,
    label: '3 /sec',
  },
  {
    value: 4,
    label: '4 /sec',
  },
  {
    value: 5,
    label: '5 /sec',
  },
];

export default Controlls;
