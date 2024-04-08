'use client'

import React, { useEffect, useState } from 'react'
import { Button, Card, Col, Row, Typography, InputNumber, Modal } from 'antd'
import { ShoppingCartOutlined } from '@ant-design/icons'
const { Title, Text } = Typography
import { useAuthentication } from '@web/modules/authentication'
import dayjs from 'dayjs'
import { useSnackbar } from 'notistack'
import { useRouter, useParams } from 'next/navigation'
import { Api, Model } from '@web/domain'
import { PageLayout } from '@web/layouts/Page.layout'

export default function PlaceOrderPage() {
  const router = useRouter()
  const authentication = useAuthentication()
  const userId = authentication.user?.id
  const { enqueueSnackbar } = useSnackbar()
  const [listings, setListings] = useState([])
  const [isModalVisible, setIsModalVisible] = useState(false)
  const [selectedListing, setSelectedListing] = useState(null)
  const [quantity, setQuantity] = useState<number>(1)

  useEffect(() => {
    const fetchListings = async () => {
      try {
        const listingsFound = await Api.Listing.findMany({
          includes: ['user', 'images'],
        })
        setListings(listingsFound)
      } catch (error) {
        enqueueSnackbar('Failed to fetch listings.', { variant: 'error' })
      }
    }

    fetchListings()
  }, [])

  const handlePlaceOrder = async () => {
    if (!userId || !selectedListing) return

    try {
      await Api.Order.createOneByUserId(userId, {
        quantity,
        totalPrice: quantity * selectedListing.price,
        status: 'Pending',
        listingId: selectedListing.id,
      })
      enqueueSnackbar('Order placed successfully!', { variant: 'success' })
      setIsModalVisible(false)
      router.push(`/user/${userId}/orders`)
    } catch (error) {
      enqueueSnackbar('Failed to place order.', { variant: 'error' })
    }
  }

  const showModal = listing => {
    setSelectedListing(listing)
    setIsModalVisible(true)
  }

  const handleCancel = () => {
    setIsModalVisible(false)
  }

  return (
    <PageLayout layout="narrow">
      <Title level={2}>Place an Order</Title>
      <Text>Choose the goods you wish to purchase.</Text>
      <Row gutter={[16, 16]} style={{ marginTop: '20px' }}>
        {listings?.map(listing => (
          <Col key={listing.id} xs={24} sm={12} md={8} lg={6}>
            <Card
              hoverable
              cover={
                <img alt={listing.title} src={listing.images?.[0]?.url || ''} />
              }
              actions={[
                <Button
                  type="primary"
                  icon={<ShoppingCartOutlined />}
                  onClick={() => showModal(listing)}
                >
                  Place Order
                </Button>,
              ]}
            >
              <Card.Meta
                title={listing.title}
                description={`$${listing.price}`}
              />
            </Card>
          </Col>
        ))}
      </Row>
      <Modal
        title="Confirm Order"
        visible={isModalVisible}
        onOk={handlePlaceOrder}
        onCancel={handleCancel}
      >
        <Text>You are ordering: {selectedListing?.title}</Text>
        <br />
        <Text>Quantity:</Text>
        <InputNumber
          min={1}
          defaultValue={1}
          onChange={value => setQuantity(value)}
        />
        <br />
        <Text>Total Price: ${quantity * (selectedListing?.price || 0)}</Text>
      </Modal>
    </PageLayout>
  )
}
