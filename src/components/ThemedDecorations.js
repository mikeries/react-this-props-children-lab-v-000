import React from 'react';

export default class ThemedParty extends React.Component {
  render() {
    const childrenWithWrapperDiv = React.Children.map(this.props.children, child => {
      return (
        <div className={this.props.theme}>{child}</div> 
      );
    });

    return(
      <div>{childrenWithWrapperDiv}</div>
    )
  }
}