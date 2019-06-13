import { show, success, error, warning, info, hide, removeAll } from 'react-notification-system-redux';

export const successNotification = () => {
	return success({
		// uid: 'once-please', // you can specify your own uid if required
		title: "Hey, it's good to see you!",
		message: 'Now you can see how easy it is to use notifications in React!',
		position: 'tr',
		autoDismiss: 0,
		action: {
			label: 'Click me!!',
			callback: () => alert('clicked!')
		}
	});
};

export const failNotification = () => {
	return error({
		// uid: 'once-please', // you can specify your own uid if required
		title: 'something is going wrong',
		message: 'there are some problems',
		position: 'tr',
		autoDismiss: 0,
		action: {
			label: 'Click me!!',
			callback: () => alert('clicked!')
		}
	});
};
