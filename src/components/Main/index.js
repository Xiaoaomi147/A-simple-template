import React from 'react';
import { connect } from 'react-redux';
import './index.scss';
import { getone } from '../../actions/index';
import api from '../../utils/api';

class Main extends React.Component {
  constructor(porps) {
    super(porps);
    this.state = {
      numberr: 0,
    };
  }
  componentWillReceiveProps() {
    // console.log('this.props', this.props);
    // console.log('nextProps', nextProps);
  }
  getone() {
    api.getData().then((res) => {
      // console.log('res', res);
      this.setState({ numberr: res.data.data });
    });
  }
  render() {
    const { numberr } = this.state;
    return (
      <div>
            Main
        {numberr}
        <div onClick={e => this.getone(e)} >getone</div>
      </div>
    );
  }
}
function mapStateToProps({ getOne }) {
  return {
    getOne,
  };
}
export default connect(mapStateToProps, {
  getone,
})(Main);
