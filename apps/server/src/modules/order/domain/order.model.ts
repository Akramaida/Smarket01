import { ColumnNumeric } from '@server/core/database'
import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm'

import { User } from '../../../modules/user/domain'

import { Listing } from '../../../modules/listing/domain'

import { Payment } from '../../../modules/payment/domain'

@Entity()
export class Order {
  @PrimaryGeneratedColumn('uuid')
  id: string

  @ColumnNumeric({ type: 'numeric' })
  quantity: number

  @ColumnNumeric({ type: 'numeric' })
  totalPrice: number

  @Column({})
  status: string

  @Column({})
  userId: string

  @ManyToOne(() => User, parent => parent.orders)
  @JoinColumn({ name: 'userId' })
  user?: User

  @Column({})
  listingId: string

  @ManyToOne(() => Listing, parent => parent.orders)
  @JoinColumn({ name: 'listingId' })
  listing?: Listing

  @OneToMany(() => Payment, child => child.order)
  payments?: Payment[]

  @CreateDateColumn()
  dateCreated: string

  @UpdateDateColumn()
  dateUpdated: string

  @DeleteDateColumn()
  dateDeleted: string
}
