import { Unidade } from 'src/unidade/entities/unidade.entity';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Consumo {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  consumoForaPontaEmKWH: number;

  @Column('date')
  mesDoConsumo: Date;

  @ManyToOne(() => Unidade, (unidade) => unidade.historicoDeConsumoEmKWH)
  unidade: Unidade;
}
