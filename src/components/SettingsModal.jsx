import React from 'react';
import Modal from 'react-modal';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import * as actions from '../actions/actions';

const mapStateToProps = state => ({
  showDeltas: state.showDeltas,
  celcius: state.celcius,
  coloredIcons: state.coloredIcons,
  userLoc: state.userLoc,
  blinkTime: state.blinkTime,
  showPadded: state.showPadded,
  show24Hour: state.show24Hour,
});

const mapDispatchToProps = dispatch => ({
  setDeltas: delta => dispatch(actions.setDeltas(delta)),
  showCelcius: celcius => dispatch(actions.showCelcius(celcius)),
  showColoredIcons: showIcons => dispatch(actions.showColoredIcons(showIcons)),
  setBlinkTime: blinkTime => dispatch(actions.setBlinkTime(blinkTime)),
  setShowPadded: showPadded => dispatch(actions.setShowPadded(showPadded)),
});

Modal.setAppElement('#root');

const modalStyle = {
  content: {
    backgroundColor: 'black',
    color: 'white',
    width: '80%',
    height: '40%',
    margin: 'auto auto',
    textAlign: 'center',
    justifyContent: 'center',
  },
};

class ConnectedSettings extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      temperaturePrecision: true,
    };
  }

  render() {
    const {
      setShowPadded,
      showPadded,
      celcius,
      showCelcius,
      showDeltas,
      setDeltas,
      isOpen,
      toggleModal,
      setBlinkTime,
      blinkTime,
      show24Hour,
    } = this.props;
    return (
      <Modal isOpen={isOpen} style={modalStyle}>
        <h1>Settings</h1>
        <table>
          <tbody>
            <tr>
              <td>Prefer Celcius? </td>
              <td><input type="checkbox" checked={celcius} onChange={() => showCelcius(!celcius)} /></td>
            </tr>
            <tr>
              <td>Show Temperature Delta Indicators? </td>
              <td><input type="checkbox" checked={showDeltas} onChange={() => setDeltas(!showDeltas)} /></td>
            </tr>
            <tr>
              <td>Blink Time Colon</td>
              <td><input type="checkbox" checked={blinkTime} onChange={() => setBlinkTime(!blinkTime)} /></td>
            </tr>
            <tr>
              <td>Precise Temperatures? (WIP)</td>
              <td><input type="checkbox" checked={this.state.temperaturePrecision} onChange={() => this.setState({ temperaturePrecision: !this.state.temperaturePrecision })} /></td>
            </tr>
            <tr>
              <td>Show padded zeroes?</td>
              <td><input type="checkbox" checked={showPadded} onChange={() => setShowPadded(!showPadded)} /></td>
            </tr>
            <tr>
              <td>24 hour clock?</td>
              <td><input type="checkbox" checked={show24Hour} onChange={() => actions.setShow24HourClock(!show24Hour)} /></td>
            </tr>
          </tbody>
        </table>
        <button id="modal-button" onClick={() => toggleModal()}>Close</button>
      </Modal>);
  }
}

ConnectedSettings.propTypes = {
  setShowPadded: PropTypes.func.isRequired,
  showPadded: PropTypes.bool.isRequired,
  celcius: PropTypes.bool.isRequired,
  showCelcius: PropTypes.func.isRequired,
  showDeltas: PropTypes.bool.isRequired,
  setDeltas: PropTypes.func.isRequired,
  isOpen: PropTypes.bool.isRequired,
  toggleModal: PropTypes.func.isRequired,
  setBlinkTime: PropTypes.func.isRequired,
  blinkTime: PropTypes.bool.isRequired,
};

const SettingsModal = connect(mapStateToProps, mapDispatchToProps)(ConnectedSettings);

export default SettingsModal;
