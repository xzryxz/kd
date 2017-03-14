import * as React from 'react';

class NotFoundPage extends React.Component<undefined, undefined> {

  render() {
    return (
      <div>
        <h1> Not found </h1>
        <p> The requested page could not be found. </p>
      </div>
    );
  }

}

export default NotFoundPage;
