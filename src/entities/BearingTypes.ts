import { ApiProperty } from "@nestjs/swagger";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("bearing_types")
export class BearingTypes {
  @ApiProperty()
  @PrimaryGeneratedColumn({ type: "integer", name: "id" })
  id: number;

  @ApiProperty()
  @Column("text", { name: "name", nullable: true })
  name: string | null;

  @ApiProperty()
  @Column("text", { name: "name_en", nullable: true })
  nameEn: string | null;

  @ApiProperty()
  @Column("text", { name: "picture", nullable: true })
  picture: string | null;

  @ApiProperty()
  @Column("text", { name: "jiegou", nullable: true })
  jiegou: string | null;
}
