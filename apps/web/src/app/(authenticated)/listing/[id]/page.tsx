'use client'

import React, { useEffect, useState } from 'react'
import { Typography, Row, Col, Image, Button, Space } from 'antd'
import { HeartOutlined, ShoppingCartOutlined } from '@ant-design/icons'
const { Title, Text, Paragraph } = Typography
import { useAuthentication } from '@web/modules/authentication'
import dayjs from 'dayjs'
import { useSnackbar } from 'notistack'
import { useRouter, useParams } from 'next/navigation'
import { Api, Model } from '@web/domain'
import { PageLayout } from '@web/layouts/Page.layout'

export default function ListingDetailsPage() {
  const router = useRouter()
  const params = useParams<any>()
  const { enqueueSnackbar } = useSnackbar()
  const [listing, setListing] = useState<any>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchListing = async () => {
      try {
        const listingFound = await Api.Listing.findOne(params.id, {
          includes: ['user', 'images'],
        })
        setListing(listingFound)
        setLoading(false)
      } catch (error) {
        enqueueSnackbar('Failed to load listing details', { variant: 'error' })
        setLoading(false)
      }
    }
    fetchListing()
  }, [params.id])

  if (loading) {
    return <PageLayout layout="narrow">Loading...</PageLayout>
  }

  if (!listing) {
    return <PageLayout layout="narrow">Listing not found.</PageLayout>
  }

  return (
    <PageLayout layout="narrow">
      <Title level={2}>{listing.title}</Title>
      <Paragraph>
        <Text strong>Price:</Text> ${listing.price}
      </Paragraph>
      <Row gutter={[16, 16]}>
        {listing.images?.map((image: any) => (
          <Col key={image.id} xs={24} sm={12} md={8} lg={6}>
            <Image
              src={image.url}
              alt={listing.title}
              style={{ width: '100%' }}
            />
          </Col>
        ))}
      </Row>
      <Paragraph>
        <Text strong>Description:</Text> {listing.description}
      </Paragraph>
      <Paragraph>
        <Text strong>Seller Info:</Text> {listing.user?.name}
      </Paragraph>
      <Space>
        <Button
          type="primary"
          icon={<ShoppingCartOutlined />}
          onClick={() => router.push(`/order/create?listingId=${listing.id}`)}
        >
          Buy Now
        </Button>
        <Button icon={<HeartOutlined />}>Add to Wishlist</Button>
      </Space>
    </PageLayout>
  )
}
