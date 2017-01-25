var React = require('react');

var Main = React.createClass({
  render: function () {
    return (
			<div className='main-container'>
				main is here!
        {this.props.children}
      </div>
    )
  }
});

module.exports = Main;
