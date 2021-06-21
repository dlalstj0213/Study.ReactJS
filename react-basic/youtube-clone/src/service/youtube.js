import axios from 'axios'; //Axios 라이브러리 임포트

class Youtube {
	/**
	 *  Axios library 추가 [$yarn add axios]
	 *  fetch() 대용으로 사용할 수 있는 라이브러리
	 */
	constructor(httpClient) {
		this.youtube = httpClient;
	}

	async mostPopular() {
		const response = await this.youtube.get('videos', {
			params: {
				part: 'snippet',
				chart: 'mostPopular',
				maxResults: 25,
			},
		});
		return response.data.items; // fetch()와 다르게 Axios 라이브러리 자체에서 Json 형태로 바꿔줌
	}

	async search(query) {
		const response = await this.youtube.get('search', {
			params: {
				part: 'snippet',
				type: 'video',
				maxResults: 25,
				q: query,
			},
		});
		return response.data.items.map((item) => ({
			...item,
			id: item.id.videoId,
		}));
	}
}

export default Youtube;
