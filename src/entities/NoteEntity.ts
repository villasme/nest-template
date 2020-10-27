import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("note_entity")
export class NoteEntity {
  @PrimaryGeneratedColumn({ type: "integer", name: "id" })
  id: number;

  @Column("varchar", { name: "texto", length: 500 })
  texto: string;

  @Column("boolean", { name: "activo", default: () => "1" })
  activo: boolean;
}
