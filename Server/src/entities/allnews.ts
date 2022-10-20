import { BaseEntity, Column, Entity, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from "typeorm";
import { Category } from "./category";

@Entity("allnews")
export class Allnews extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column('varchar', { length: 200})
    news: string;

    @Column('varchar', { length: 200})
    date_only: string;

    @Column('boolean')
    status: boolean;

    @ManyToOne(() => Category, category => category.allnews, {
        onDelete: 'CASCADE'
    })

    @JoinColumn({ name: 'category_id' })
    category: Category;
}