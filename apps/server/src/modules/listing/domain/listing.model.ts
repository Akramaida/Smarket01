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

import { Category } from '../../../modules/category/domain'

import { Image } from '../../../modules/image/domain'

import { Order } from '../../../modules/order/domain'

@Entity()
export class Listing {
  @PrimaryGeneratedColumn('uuid')
  id: string

  @Column({})
  title: string

  @Column({})
  description: string

  @ColumnNumeric({ type: 'numeric' })
  price: number

  @Column({})
  userId: string

  @ManyToOne(() => User, parent => parent.listings)
  @JoinColumn({ name: 'userId' })
  user?: User

  @Column({})
  categoryId: string

  @ManyToOne(() => Category, parent => parent.listings)
  @JoinColumn({ name: 'categoryId' })
  category?: Category

  @OneToMany(() => Image, child => child.listing)
  images?: Image[]

  @OneToMany(() => Order, child => child.listing)
  orders?: Order[]

  @CreateDateColumn()
  dateCreated: string

  @UpdateDateColumn()
  dateUpdated: string

  @DeleteDateColumn()
  dateDeleted: string
}
