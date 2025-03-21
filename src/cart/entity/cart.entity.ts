import { Column, Model, Table, ForeignKey } from 'sequelize-typescript';
import { Inventory } from '../../inventory/entities/inventory.entity';
import { AuthUser } from '../../auth/entities/auth.entity';

@Table
export class Cart extends Model {
  @ForeignKey(() => AuthUser)
  @Column
  userId: number;

  @ForeignKey(() => Inventory)
  @Column
  productId: number;

  @Column
  quantity: number;
}