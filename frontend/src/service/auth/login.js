import { AppParse } from '@/service/Parse';

export const login = async (username, password) => {
	const user = await AppParse.User.logIn(username, password);

	// const validateIfUserSubscriptionIsActive = await AppParse.Cloud.run('isSubscriptionActive', {
	// 	userId: user.id
	// });

	// console.log(validateIfUserSubscriptionIsActive);

	return {
		...user,
	};
};
