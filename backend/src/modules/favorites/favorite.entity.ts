import { Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { User } from "../users/user.entity";
import { Service } from "../services/service.entity";

@Entity("favorites")
export class Favorite {
    @PrimaryGeneratedColumn()
    id: number;

    @ManyToOne(() => User, user => user.favorites, { onDelete: 'CASCADE' })
    consumer: User;

    @ManyToOne( () => Service, service => service.favorites, {onDelete: 'CASCADE'})
    service: Service; 
}