import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("user_entity")
export class UserEntity {
  @PrimaryGeneratedColumn({ type: "integer", name: "id" })
  id: number;

  @Column("varchar", { name: "username" })
  username: string;

  @Column("varchar", { name: "password" })
  password: string;
}
