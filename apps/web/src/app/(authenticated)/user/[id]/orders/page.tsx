'use client'

import React, { useEffect, useState } from 'react'
import { Typography, Table, Tag, Button, Space } from 'antd'
import { EyeOutlined } from '@ant-design/icons'
const { Title, Text } = Typography
import { useAuthentication } from '@web/modules/authentication'
import dayjs from 'dayjs'
import { useSnackbar } from 'notistack'
import { useRouter, useParams } from 'next/navigation'
import { Api, Model } from '@web/domain'
import { PageLayout } from '@web/layouts/Page.layout'

export default function MyOrdersPage() {
  const router = useRouter()
  const authentication = useAuthentication()
  const userId = authentication.user?.id
  const { enqueueSnackbar } = useSnackbar()
  const [orders, setOrders] = useState([])

  useEffect(() => {
    if (userId) {
      Api.Order.findManyByUserId(userId, { includes: ['listing', 'payments'] })
        .then(setOrders)
        .catch(() =>
          enqueueSnackbar('Failed to fetch orders', { variant: 'error' }),
        )
    }
  }, [userId])

  const columns = [
    {
      title: 'Order ID',
      dataIndex: 'id',
      key: 'id',
    },
    {
      title: 'Date',
      dataIndex: 'dateCreated',
      key: 'dateCreated',
      render: dateCreated => dayjs(dateCreated).format('DD/MM/YYYY'),
    },
    {
      title: 'Listing',
      dataIndex: 'listing',
      key: 'listing',
      render: listing => listing?.title,
    },
    {
      title: 'Quantity',
      dataIndex: 'quantity',
      key: 'quantity',
    },
    {
      title: 'Total Price',
      dataIndex: 'totalPrice',
      key: 'totalPrice',
      render: totalPrice => `$${totalPrice.toFixed(2)}`,
    },
    {
      title: 'Status',
      key: 'status',
      dataIndex: 'status',
      render: status => {
        let color = status === 'Pending' ? 'geekblue' : 'green'
        if (status === 'Cancelled') color = 'volcano'
        return (
          <Tag color={color} key={status}>
            {status.toUpperCase()}
          </Tag>
        )
      },
    },
    {
      title: 'Action',
      key: 'action',
      render: (_, record) => (
        <Space size="middle">
          <Button
            icon={<EyeOutlined />}
            onClick={() => router.push(`/order/${record.id}/payment`)}
          >
            View
          </Button>
        </Space>
      ),
    },
  ]

  return (
    <PageLayout layout="narrow">
      <Title level={2}>My Orders</Title>
      <Text>
        Here you can find all your orders, view their details, and manage them.
      </Text>
      <Table columns={columns} dataSource={orders} rowKey="id" />
    </PageLayout>
  )
}
