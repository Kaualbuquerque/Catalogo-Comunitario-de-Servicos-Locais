import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { User } from "../users/user.entity";
import { Service } from "../services/service.entity";

@Entity("service_history")
export class ServiceHistory {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ type: "date" })
    usedAt: string;

    @Column({ length: 100, nullable: true })
    location: string;

    @ManyToOne(() => User, user => user.history, { onDelete: 'CASCADE' })
    consumer: User;

    @ManyToOne(() => Service, service => service.history, { onDelete: 'CASCADE' })
    service: Service;
}