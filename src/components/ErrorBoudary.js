import React from 'react';

export default class ErrorBoundary extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            hasError: false,
            errorMessage: ''
        }
    }

    static getDerivedStateFromError (error) {
        return {
            hasError: true,
            errorMessage: String(error)
        }
    }

    componentDidCatch (error, info) {
        console.error(error,info); 
    }

    render () {
        if (this.state.hasError) {
            return (<div className="alert alert-danger text-center">An error emerged: {this.state.errorMessage}</div>);
        }
        return this.props.children;
        
    }
}