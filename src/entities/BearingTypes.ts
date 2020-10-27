import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("bearing_types")
export class BearingTypes {
  @PrimaryGeneratedColumn({ type: "integer", name: "id" })
  id: number;

  @Column("text", { name: "name", nullable: true })
  name: string | null;

  @Column("text", { name: "name_en", nullable: true })
  nameEn: string | null;

  @Column("text", { name: "picture", nullable: true })
  picture: string | null;

  @Column("text", { name: "jiegou", nullable: true })
  jiegou: string | null;
}
