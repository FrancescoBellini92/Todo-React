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
      return (
        <div class="container mt-5 pt-5 justify-content-center">
        <div class="jumbotron mx-auto">
          <h4 class="display-5 text-white">You are offline, please come back once you have restored your connection :)</h4>
        </div> 
    </div>
      );
    }
    return this.props.children;
  }
}