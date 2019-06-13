import React from 'react';
import { connect } from 'react-redux';

import { successNotification, failNotification } from '../store/actions';

class Demo extends React.Component {
	render() {
		const { onSuccess, onError, notifications } = this.props;
		console.log(notifications, this.props);
		return (
			<div>
				<p> some random text</p>
				<button
					onClick={() => {
						onSuccess();
					}}
				>
					BUTTON success
				</button>
				<button
					onClick={() => {
						onError();
					}}
				>
					BUTTON error
				</button>
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
	return {
		onSuccess: () => dispatch(successNotification()),
		onError: () => dispatch(failNotification())
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(Demo);
