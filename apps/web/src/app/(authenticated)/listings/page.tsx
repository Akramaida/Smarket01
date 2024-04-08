'use client'

import React, { useEffect, useState } from 'react'
import { Card, Col, Row, Typography, Space } from 'antd'
import { HeartOutlined } from '@ant-design/icons'
const { Title, Text } = Typography
import { useAuthentication } from '@web/modules/authentication'
import dayjs from 'dayjs'
import { useSnackbar } from 'notistack'
import { useRouter, useParams } from 'next/navigation'
import { Api, Model } from '@web/domain'
import { PageLayout } from '@web/layouts/Page.layout'

export default function BrowseListingsPage() {
  const router = useRouter()
  const { enqueueSnackbar } = useSnackbar()
  const authentication = useAuthentication()
  const userId = authentication.user?.id
  const [listings, setListings] = useState([])

  useEffect(() => {
    const fetchListings = async () => {
      try {
        const listingsFound = await Api.Listing.findMany({
          includes: ['user', 'images'],
        })
        setListings(listingsFound)
      } catch (error) {
        enqueueSnackbar('Failed to fetch listings', { variant: 'error' })
      }
    }

    fetchListings()
  }, [])

  return (
    <PageLayout layout="narrow">
      <Space direction="vertical" size="large" style={{ width: '100%' }}>
        <Title level={2}>Browse Listings</Title>
        <Text>Explore a wide range of items available for purchase.</Text>
        <Row gutter={[16, 16]}>
          {listings?.map(listing => (
            <Col key={listing.id} xs={24} sm={12} md={8} lg={6}>
              <Card
                hoverable
                cover={
                  <img
                    alt={listing.title}
                    src={listing.images?.[0]?.url || ''}
                  />
                }
                actions={[<HeartOutlined key="like" />]}
                onClick={() => router.push(`/listing/${listing.id}`)}
              >
                <Card.Meta
                  title={listing.title}
                  description={`${listing.description.substring(0, 100)}...`}
                />
                <Text strong>${listing.price}</Text>
                <br />
                <Text type="secondary">
                  Posted on {dayjs(listing.dateCreated).format('MMM D, YYYY')}
                </Text>
              </Card>
            </Col>
          ))}
        </Row>
      </Space>
    </PageLayout>
  )
}
