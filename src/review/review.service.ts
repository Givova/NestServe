import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ReviewEntity } from './entity/review.entity';
import { Repository } from 'typeorm';
import { CreateReviewDto } from './dto/create-review.dto';
import { MovieService } from 'src/movie/movie.service';

@Injectable()
export class ReviewService {
    constructor(
        @InjectRepository(ReviewEntity) 
        private readonly reviewRepository: Repository<ReviewEntity>,
        private readonly movieServise: MovieService,
    ) { }

    async create(dto: CreateReviewDto):Promise<ReviewEntity> {
        const {text, rating, movieId} = dto

        const movie = await this.movieServise.findById(movieId);

        const review = this.reviewRepository.create({
            text,
            rating,
            movie,
        });

        return await this.reviewRepository.save(review)
    }


}
// 