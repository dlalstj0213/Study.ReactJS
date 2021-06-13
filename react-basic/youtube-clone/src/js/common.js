export function getKey(apiKey) {
	if (arguments.length === 1) {
		return getMatchedKeyVal(apiKey);
	} else {
		for (let i = 0; i < arguments.length; i++) {
			const arg = arguments[i];
			if (typeof arg === 'function') {
				return arg(getMatchedKeyVal(apiKey));
			}
		}
	}
}

export function getMatchedKeyVal(key) {
	const apiKeys = {
		youtube: '',
		google: '',
	};
	if (typeof key === 'string') {
		return apiKeys[key];
	} else if (typeof key === 'object') {
		let param = {};
		key.forEach((k) => {
			if (
				apiKeys[k] !== undefined ||
				apiKeys[k] !== null ||
				apiKeys[k] !== ''
			) {
				param[k] = apiKeys[k];
			}
		});
		return param;
	}
}
