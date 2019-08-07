import React from 'react';
import TemplateRedux from './components/TemplateRedux';
import './index.css';


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