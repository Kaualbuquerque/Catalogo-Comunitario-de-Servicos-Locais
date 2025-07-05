import { Check, Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { User } from "../users/user.entity";
import { Favorite } from "../favorites/favorite.entity";
import { ServiceHistory } from "../history/service-history.entity";

@Entity("services")
@Check(`"price" >= 1`)
export class Service {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({ length: 100 })
    name: string;

    @Column({ length: 300 })
    description: string;

    @Column({
        type: "decimal", precision: 10, scale: 2, default: 1, transformer: {
            to: (value: number) => value,
            from: (value: string) => parseFloat(value)
        }
    })
    price: number;

    @Column({ length: 100, nullable: true })
    location: string;

    @Column()
    category: string;

    @Column({ type: "text", array: true, nullable: true })
    images: Text[];

    @ManyToOne(() => User, user => user.services, { onDelete: 'CASCADE' })
    provider: User;

    @OneToMany(() => Favorite, favorite => favorite.service)
    favorites: Favorite[];

    @OneToMany(() => ServiceHistory, history => history.service)
    history: ServiceHistory[];
}