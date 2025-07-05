import { Column, CreateDateColumn, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Conversation } from "../chat/conversation.entity";
import { User } from "../users/user.entity";

@Entity('messages')
export class Message {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Conversation, conv => conv.messages)
  conversation: Conversation;

  @ManyToOne(() => User, user => user.messages)
  sender: User;

  @CreateDateColumn()
  timestamp: Date;

  @Column('text')
  content: string;
}