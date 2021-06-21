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
				maxResult: 25,
			},
		});
		return response.data.items; // fetch()와 다르게 Axios 라이브러리 자체에서 Json 형태로 바꿔줌

		// const response = await fetch(
		// 	`/videos?part=snippet&chart=mostPopular&maxResults=25&key=${this.key}`,
		// 	this.getRequestOptions
		// );
		// const result_1 = await response.json();
		// return result_1.items;
	}

	async search(query) {
		const response = await this.youtube.get('search', {
			params: {
				part: 'snippet',
				type: 'video',
				maxResult: 25,
			},
		});
		return response.data.items;
		// return fetch(
		// 	`https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&type=video&q=${query}&key=${this.key}`,
		// 	this.getRequestOptions
		// )
		// 	.then((response) => response.json())
		// 	.then((result) =>
		// 		result.items.map((item) => ({ ...item, id: item.id.videoId }))
		// 	);
	}
}

export default Youtube;
