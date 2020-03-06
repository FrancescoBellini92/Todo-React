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
        <div class="container h-100 align-items-center justify-content-center">
        <div class="jumbotron round my-auto">
          <h1 class="display-5">Something went wrong :( </h1>
        </div>
    </div>
      );
    }
    return this.props.children;
  }
}