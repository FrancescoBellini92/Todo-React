import React from 'react';
import {Container, Jumbotron} from 'react-bootstrap';

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
      <Container className="mt-5 pt-5 justify-content-center">
        <Jumbotron className="mx-auto">
          <h4 className="display-5 text-white">You are offline, please come back once you have restored your connection :)</h4>
        </Jumbotron> 
      </Container>
      );
    }
    return this.props.children;
  }
}