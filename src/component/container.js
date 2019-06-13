import React from 'react';
import { connect } from 'react-redux';
import Demo from './demo';

class Container extends React.Component {
	render() {
		const { notifications } = this.props;
		console.log(notifications, this.props);
		return (
			<div>
				<Demo />
			</div>
		);
	}
}

const mapStateToProps = state => {
	const { notifications } = state;
	return {
		notifications
	};
};

const mapDispatchToProps = dispatch => {
	return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(Container);
