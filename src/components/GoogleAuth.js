import React from 'react';
import { connect } from 'react-redux';
import { signIn, signOut } from '../actions';

class GoogleAuth extends React.Component{


    componentDidMount(){
        window.gapi.load('client:auth2', () => {
            window.gapi.client.init({
                clientId: "666799278722-bklquvt2kfqu027nt48hvrue1gt20k6l.apps.googleusercontent.com",
                scope: "email"
            }).then(() => {
                // this.auth is just a random variable holder for window.gapi.auth2.getAuthInstance();
                this.auth = window.gapi.auth2.getAuthInstance();
                this.onAuthChange(this.auth.isSignedIn.get());
                this.auth.isSignedIn.listen(this.onAuthChange);
            });
        });
    }

    onAuthChange = (isSignedIn) => {
        if(isSignedIn){
            this.props.signIn(this.auth.currentUser.get().getId());
        }else{
            this.props.signOut();
        }
    }

    onSignInClick = () => {
        this.auth.signIn(this.auth.currentUser.get().getId());
    }

    onSignOutClick = () => {
        this.auth.signOut();
    }

    renderAuthButton(){
        if(this.props.isSignedIn === null){
            return null;
        }else if(this.props.isSignedIn){
            return(
                <div  onClick={this.onSignOutClick} className="ui red google button">
                   <i className="google icon" />
                   Sign Out
                </div>
            );
        }else{
            return(
                <div onClick={this.onSignInClick} className="ui red google button">
                   <i className="google icon" />
                   Sign in with Google
                </div>
            );
        }
    }

    render(){
        return(
            <div>{this.renderAuthButton()}</div>
        );
    }
}

const mapStateToProps = (state) => {
    return { isSignedIn: state.auth.isSignedIn }
}

export default connect(mapStateToProps, {signIn, signOut})(GoogleAuth);