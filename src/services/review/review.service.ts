import { TypeReviewData } from '@/services/review/review.type'
import { IReview } from '@/types/reviews.interface'

import { instance } from '@/api/api.interceptor'

const REVIEWS = 'review'

export const ReviewService = {
	async getAll() {
		return instance<IReview[]>({
			url: REVIEWS,
			method: 'GET'
		})
	},

	async leave(productId: string | number, data: TypeReviewData) {
		return instance<IReview>({
			url: `${REVIEWS}/leave/${productId}`,
			method: 'POST',
			data
		})
	}
}
