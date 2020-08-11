import React from 'react';
import { connect } from 'react-redux';
import { fetchStream } from '../../actions';

class StreamEdit extends React.Component {
  // Fetches the stream using the props params id value parsed to the url
  componentDidMount() {
    this.props.fetchStream(this.props.match.params.id);
  }

  // Renders the Edit Stream
  render() {
    if (!this.props.stream) {
      return <div>Loading...</div>;
    }
    return <div>{this.props.stream.title}</div>;
  }
}

// Use the two values and receieve ths stream using it's own props value
const mapStateToProps = (state, ownProps) => {
  return { stream: state.streams[ownProps.match.params.id] };
};

// Connects the function using the fetchStream action creator and this react component
export default connect(mapStateToProps, { fetchStream })(StreamEdit);
