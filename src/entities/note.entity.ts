import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn } from 'typeorm';
import { ApiProperty } from '@nestjs/swagger'
import { IsString, IsBoolean } from 'class-validator';

@Entity()
export class NoteEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({length: 500})
  @ApiProperty({description: 'texto de la nota'})
  @IsString()
  texto: string;

  @Column({ name: 'activo', default: true })
  @ApiProperty({description: 'indica si la nota esta activa'})
  @IsBoolean()
  activo: boolean

  @CreateDateColumn({type: 'timestamp'})
  createAt:number

  @UpdateDateColumn({type: 'timestamp'})
  updateAt: number
}
