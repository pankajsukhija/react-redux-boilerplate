import React from 'react';
import TemplateRedux from './components/TemplateRedux';

export default class App extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            //
        }
    }

    render(){
        return (
            <>
                <TemplateRedux></TemplateRedux>
            </>
        );
    }   
}