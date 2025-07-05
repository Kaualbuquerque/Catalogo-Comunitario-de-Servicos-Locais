import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Service } from "../services/service.entity";
import { Favorite } from "../favorites/favorite.entity";
import { Note } from "../notes/note.entity";
import { ServiceHistory } from "../history/service-history.entity";
import { ConversationParticipant } from "../chat/conversation-participant.entity";
import { Message } from "../messages/message.entity";

@Entity("users")
export class User {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({ length: 100 })
    name: string;

    @Column({ length: 150, unique: true })
    email: string;

    @Column()
    password: string;

    @Column()
    location: string;

    @Column({ length: 11 })
    phone: string;

    @Column()
    role: 'consumer' | 'provider';

    // relations //

    @OneToMany(() => Service, service => service.provider)
    services: Service[];

    @OneToMany(() => Favorite, favorite => favorite.consumer)
    favorites: Favorite[];

    @OneToMany(() => Note, note => note.user)
    notes: Note[];

    @OneToMany(() => ServiceHistory, history => history.consumer)
    history: ServiceHistory[];

    @OneToMany(() => Message, msg => msg.sender)
    messages: Message[];

    @OneToMany(() => ConversationParticipant, cp => cp.user)
    conversations: ConversationParticipant[];
}