import { MovieEntity } from "src/movie/entities/movie.entity";
import { Column, CreateDateColumn, Entity, Generated, JoinColumn, ManyToOne, PrimaryColumn, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";


@Entity({name: 'reviews'})
export class ReviewEntity {
    // @PrimaryGeneratedColumn() // для числового ID
    // @PrimaryColumn()
    // @Generated('uuid') 
    @PrimaryGeneratedColumn('uuid')
    id: string;

   


    @Column({
        type: 'text',
        nullable: true,
    })
    text: string;

   
    @Column({
        type: 'decimal',
        precision: 3,
        scale: 1,
        default: 0.0,
    })
    rating: number;

    @Column({
        name: 'movie_id',
        type: 'uuid'
    })
    movieId: string;

   @ManyToOne(() => MovieEntity, (movie) => movie.reviews, { onDelete: 'CASCADE', })
   @JoinColumn({name: 'movie_id'})
    movie: MovieEntity;

    @CreateDateColumn({
        name: 'created_at',
    })
    createdAt: Date;

    @UpdateDateColumn({
        name: 'updated_at',
    })
    updatedAt: Date;
}