import React from 'react';
import {connect} from 'react-redux';
import {setAwsmAction, unsetAwsmAction} from '../redux/actions'

class TemplateRedux extends React.Component { //
    constructor(props){
        super(props);
        this.state = {
            //
        }
    }

    changeAwsmState = () => {
        if (this.props.state.isAwesome){
            this.props.unsetAwsmAction()
        }else{
            this.props.setAwsmAction()
        }
    }

    render(){
        return (
            <>
                <h1>TemplateRedux</h1>
                <div>{this.props.state.isAwesome.toString()}</div>
                <button onClick={this.changeAwsmState}>Change Awesome State</button>
            </>
        );
    }   
}

const mapStateToProps = (state /*, ownProps*/) => {
    return {state}
}

const mapDispatchToProps = {setAwsmAction, unsetAwsmAction}

export default connect(mapStateToProps, mapDispatchToProps)(TemplateRedux)