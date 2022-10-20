import { BaseEntity, Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Allnews } from "./allnews";

@Entity('category')
export class Category extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;
    
    @Column('varchar', { length: 200})
    name: string;

    @OneToMany(() => Allnews, allnews => allnews.category, {
        onDelete: 'CASCADE'
    })
    allnews: Allnews[];
}