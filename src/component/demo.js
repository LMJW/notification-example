import React from 'react';
import { connect } from 'react-redux';

import { notify } from 'reapop';

class Demo extends React.Component {
	render() {
		const { notify } = this.props;
		console.log(this.props);
		return (
			<div>
				<p> some random text</p>
				<button
					onClick={() => {
						console.log('haha');
						notify({
							title: 'success',
							message: 'you clicked on the button',
							status: 'success',
							dismissible: true,
							dismissAfter: 3000
						});
					}}
				>
					BUTTON success
				</button>
				<button
					onClick={() => {
						notify({
							title: 'fail',
							message: 'you clicked on the button',
							status: 'error',
							dismissible: true,
							dismissAfter: 3000
						});
					}}
				>
					BUTTON error
				</button>
			</div>
		);
	}
}

// const mapStateToProps = state => {
// 	const { notifications } = state;
// 	return { notifications };
// };

// const mapDispatchToProps = dispatch => {
// 	return { notify };
// };

export default connect(null, { notify })(Demo);
