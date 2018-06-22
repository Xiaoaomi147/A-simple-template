import React from 'react';
import { connect } from 'react-redux';
import Cookies from 'js-cookie';
import './index.scss';
import { userLogin, resetAuthrizationResult } from '../../actions/index';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      number: 23,
    };
  }
  componentWillMount() {

  }
  componentWillReceiveProps(nextProps) {
    // console.log('this.props', this.props);
    // console.log('nextProps', nextProps);
    const { userStore: { authrization, result } } = nextProps;
    // 保存cookie
    if (result) {
      this.props.resetAuthrizationResult();
      Cookies.set('Token', authrization.access_token, { expires: 7 });
      this.props.history.push('/Main');
    }
  }

  render() {
    return (
      <div className="login_bg">
        <div className="login_middle_bg">

          <div className="login_ing">
                userName:
            <input type="text" required="required" placeholder={this.state.number} />
            <br />
                passWord:
            <input type="text" required="required" placeholder="请输入11位" />
            <br />
            <button onClick={() => this.props.userLogin()}>登陆</button>
          </div>

        </div>
      </div>
    );
  }
}

function mapStateToProps({ userStore }) {
  return {
    userStore,
  };
}
export default connect(mapStateToProps, {
  userLogin,
  resetAuthrizationResult,
})(Login);
