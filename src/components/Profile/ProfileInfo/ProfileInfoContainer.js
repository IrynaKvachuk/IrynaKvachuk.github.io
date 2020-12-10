import React from 'react';
import ProfileInfo from "./ProfileInfo";
import updateInfoAC from "../../../state/ProfileReducer";
import { connect } from "react-redux";

class ProfileInfoContainer extends React.Component {
    render() {
        return <ProfileInfo
            profile={this.props.profile}
            status={this.props.status}
            updateStatus={this.props.updateStatus}
        />
    }
}

const mapStateToProps = (state) => {
    return {
        profile: state.profile,
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        updateInfo: () => dispatch((updateInfoAC))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProfileInfoContainer);