'use client'

import React, { useEffect, useState } from 'react'
import {
  Button,
  Select,
  Typography,
  Form,
  InputNumber,
  DatePicker,
  Space,
} from 'antd'
import { DollarCircleOutlined } from '@ant-design/icons'
const { Title, Text } = Typography
const { Option } = Select
import { useAuthentication } from '@web/modules/authentication'
import dayjs from 'dayjs'
import { useSnackbar } from 'notistack'
import { useRouter, useParams } from 'next/navigation'
import { Api, Model } from '@web/domain'
import { PageLayout } from '@web/layouts/Page.layout'

export default function PaymentPage() {
  const router = useRouter()
  const params = useParams<any>()
  const authentication = useAuthentication()
  const userId = authentication.user?.id
  const { enqueueSnackbar } = useSnackbar()
  const [orders, setOrders] = useState([])
  const [selectedOrder, setSelectedOrder] = useState(null)
  const [form] = Form.useForm()

  useEffect(() => {
    if (userId) {
      Api.Order.findManyByUserId(userId, { includes: ['listing'] })
        .then(setOrders)
        .catch(() => {
          enqueueSnackbar('Failed to fetch orders', { variant: 'error' })
        })
    }
  }, [userId])

  const handlePayment = async values => {
    try {
      await Api.Payment.createOneByOrderId(selectedOrder, {
        amount: values.amount,
        paymentDate: values.paymentDate.format('YYYY-MM-DD'),
        paymentMethod: values.paymentMethod,
      })
      enqueueSnackbar('Payment successful', { variant: 'success' })
      router.push(`/user/${userId}/orders`)
    } catch (error) {
      enqueueSnackbar('Payment failed', { variant: 'error' })
    }
  }

  return (
    <PageLayout layout="narrow">
      <Title level={2}>
        <DollarCircleOutlined /> Complete Your Payment
      </Title>
      <Text>Please select an order to proceed with the payment.</Text>
      <Select
        style={{ width: '100%', margin: '20px 0' }}
        placeholder="Select an order"
        onChange={setSelectedOrder}
      >
        {orders?.map(order => (
          <Option key={order.id} value={order.id}>
            {order.listing?.title} - ${order.totalPrice}
          </Option>
        ))}
      </Select>
      {selectedOrder && (
        <Form form={form} onFinish={handlePayment} layout="vertical">
          <Form.Item
            name="amount"
            label="Amount"
            rules={[{ required: true, message: 'Please input the amount!' }]}
          >
            <InputNumber style={{ width: '100%' }} prefix="$" />
          </Form.Item>
          <Form.Item
            name="paymentDate"
            label="Payment Date"
            rules={[
              { required: true, message: 'Please select the payment date!' },
            ]}
          >
            <DatePicker style={{ width: '100%' }} />
          </Form.Item>
          <Form.Item
            name="paymentMethod"
            label="Payment Method"
            rules={[
              { required: true, message: 'Please input the payment method!' },
            ]}
          >
            <InputNumber style={{ width: '100%' }} />
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit">
              Make Payment
            </Button>
          </Form.Item>
        </Form>
      )}
    </PageLayout>
  )
}
