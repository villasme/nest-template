import { ApiProperty } from "@nestjs/swagger";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("user_entity")
export class UserEntity {
  @PrimaryGeneratedColumn({ type: "integer", name: "id" })
  id: number;

  @ApiProperty()
  @Column("varchar", { name: "username" })
  username: string;

  @ApiProperty()
  @Column("varchar", { name: "password" })
  password: string;
}
