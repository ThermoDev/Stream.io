import _ from 'lodash';
import React from 'react';
import { connect } from 'react-redux';
import { fetchStream, editStream } from '../../actions';
import StreamForm from './StreamForm';

class StreamEdit extends React.Component {
  // Fetches the stream using the props params id value parsed to the url
  componentDidMount() {
    this.props.fetchStream(this.props.match.params.id);
  }

  // Handles form submit
  onSubmit = (formValues) => {
    this.props.editStream(this.props.match.params.id, formValues);
  };

  // Renders the Edit Stream
  render() {
    // Check if the has loaded from componentDidMount before displaying it.
    if (!this.props.stream) {
      return (
        <div className="ui" style={{ textAlign: 'center' }}>
          <div className="ui active inline loader"></div>
          <div>Loading...</div>
        </div>
      );
    }
    return (
      <div>
        <h3>Edit a Stream</h3>
        {/*  Use Redux-Form's initialValues property to set up the initial values. */}
        {/* This props stream object has title and description property, which are updated in streamForm Field name property */}
        <StreamForm
          initialValues={_.pick(this.props.stream, 'title', 'description')}
          onSubmit={this.onSubmit}
        />
      </div>
    );
  }
}

// Use the two values and receive ths stream using it's own props value
const mapStateToProps = (state, ownProps) => {
  return { stream: state.streams[ownProps.match.params.id] };
};

// Connects the function using the fetchStream action creator and this react component
export default connect(mapStateToProps, { fetchStream, editStream })(
  StreamEdit
);
