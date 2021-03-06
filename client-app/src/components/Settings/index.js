import React, { Component } from "react";
import { connect } from "react-redux";

import services from "../../services";

import SettingsForm from "./SettingsForm";
import ListErrors from "../ListErrors";


const mapStateToProps = state => {
  return {
    ...state.settings,
    currentUser: state.common.currentUser
  };
};

const mapDispatchToProps = dispatch => ({
  onClickLogout: () => dispatch({ type: "LOGOUT" }),
  onSubmitForm: user =>
    dispatch({ type: "SETTINGS_SAVED", payload: services.Auth.save(user) })
});

class Settings extends Component {

  render() {
    return (

      <div className="container">
        <div className="row">
          <div className="col s12">

            <h3 className="text-xs-center">Settings</h3>





            <ListErrors errors={this.props.errors} />

            <SettingsForm
              currentUser={this.props.currentUser}
              onSubmitForm={this.props.onSubmitForm}
            />


            <br />

            <a onClick={this.props.onClickLogout} className="btn blue">Log Out</a>








          </div>
        </div>
      </div>


    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Settings);

// import React, { Component } from "react";
// import { connect } from "react-redux";

// const mapStateToProps = state => ({
//   appName: state.appName
// });

// class Settings extends Component {
//   render() {
//     return <div>Settings</div>;
//   }
// }

// export default connect(mapStateToProps)(Settings);
