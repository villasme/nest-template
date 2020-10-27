import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("name", ["name"], {})
@Entity("bearing_lyc")
export class BearingLyc {
  @PrimaryGeneratedColumn({ type: "integer", name: "id" })
  id: number;

  @Column("text", { name: "brand", nullable: true })
  brand: string | null;

  @Column("text", { name: "type", nullable: true })
  type: string | null;

  @Column("text", { name: "name", nullable: true })
  name: string | null;

  @Column("real", { name: "price", nullable: true, precision: 10, scale: null })
  price: number | null;

  @Column("real", { name: "internal_diameter", nullable: true })
  internalDiameter: number | null;

  @Column("real", { name: "outer_channel", nullable: true })
  outerChannel: number | null;

  @Column("real", { name: "height", nullable: true })
  height: number | null;

  @Column("text", { name: "jiegou", nullable: true })
  jiegou: string | null;
}
