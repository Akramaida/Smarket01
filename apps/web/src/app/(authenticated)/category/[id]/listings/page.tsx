'use client'

import React, { useEffect, useState } from 'react'
import { Typography, Card, Row, Col, Space } from 'antd'
import { HeartOutlined, ShoppingCartOutlined } from '@ant-design/icons'
const { Title, Text } = Typography
import { useAuthentication } from '@web/modules/authentication'
import dayjs from 'dayjs'
import { useSnackbar } from 'notistack'
import { useRouter, useParams } from 'next/navigation'
import { Api, Model } from '@web/domain'
import { PageLayout } from '@web/layouts/Page.layout'

export default function CategoryListingsPage() {
  const router = useRouter()
  const params = useParams<any>()
  const { enqueueSnackbar } = useSnackbar()
  const [listings, setListings] = useState<Model.Listing[]>([])
  const [categoryName, setCategoryName] = useState<string>('')

  useEffect(() => {
    const fetchCategoryListings = async () => {
      try {
        const category = await Api.Category.findOne(params.id, {
          includes: ['listings', 'listings.user'],
        })
        setCategoryName(category.name)
        setListings(category.listings || [])
      } catch (error) {
        enqueueSnackbar('Failed to fetch listings for the category.', {
          variant: 'error',
        })
      }
    }

    if (params.id) {
      fetchCategoryListings()
    }
  }, [params.id])

  return (
    <PageLayout layout="narrow">
      <Title level={2}>{categoryName}</Title>
      <Text type="secondary">
        Browse through the listings in this category.
      </Text>
      <Row gutter={[16, 16]} style={{ marginTop: 24 }}>
        {listings?.map(listing => (
          <Col xs={24} sm={12} md={8} lg={6} key={listing.id}>
            <Card
              hoverable
              cover={
                <img
                  alt={listing.title}
                  src={
                    listing.images?.[0]?.url ||
                    'https://via.placeholder.com/150'
                  }
                />
              }
              actions={[
                <HeartOutlined key="like" />,
                <ShoppingCartOutlined
                  key="cart"
                  onClick={() =>
                    router.push(`/order/create?listingId=${listing.id}`)
                  }
                />,
              ]}
            >
              <Card.Meta
                title={listing.title}
                description={
                  <Space direction="vertical">
                    <Text>{listing.description}</Text>
                    <Text type="secondary">Price: ${listing.price}</Text>
                    <Text type="secondary">
                      Posted: {dayjs(listing.dateCreated).format('DD MMM YYYY')}
                    </Text>
                  </Space>
                }
              />
            </Card>
          </Col>
        ))}
      </Row>
    </PageLayout>
  )
}
