import React from 'react';
import ErrorIndicator from '../ErrorIndicator/ErrorIndicator.jsx';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: '',
    }
  }
  componentDidCatch(err) {
    console.log('ERROR');
    this.setState({error: err.message})
  }

  render() {
    if (this.state.error) {
      return (
        <ErrorIndicator message={this.state.error}/>
      )
    } else {
      return this.props.children;
    }
  }
}

export default ErrorBoundary;
