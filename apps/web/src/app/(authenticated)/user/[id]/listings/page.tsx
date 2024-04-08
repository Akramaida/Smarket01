'use client'

import React, { useEffect, useState } from 'react'
import { Button, Card, Col, Row, Space, Typography } from 'antd'
import { EditOutlined, DeleteOutlined } from '@ant-design/icons'
const { Title, Text } = Typography
import { useAuthentication } from '@web/modules/authentication'
import dayjs from 'dayjs'
import { useSnackbar } from 'notistack'
import { useRouter, useParams } from 'next/navigation'
import { Api, Model } from '@web/domain'
import { PageLayout } from '@web/layouts/Page.layout'

export default function UserListingsPage() {
  const router = useRouter()
  const { enqueueSnackbar } = useSnackbar()
  const authentication = useAuthentication()
  const userId = authentication.user?.id
  const [listings, setListings] = useState([])

  useEffect(() => {
    const fetchListings = async () => {
      if (userId) {
        try {
          const listingsFound = await Api.Listing.findManyByUserId(userId, {
            includes: ['user', 'images'],
          })
          setListings(listingsFound)
        } catch (error) {
          enqueueSnackbar('Failed to fetch listings.', { variant: 'error' })
        }
      }
    }

    fetchListings()
  }, [userId])

  const handleEdit = listingId => {
    router.push(`/listing/${listingId}`)
  }

  const handleDelete = async listingId => {
    try {
      await Api.Listing.deleteOne(listingId)
      setListings(listings.filter(listing => listing.id !== listingId))
      enqueueSnackbar('Listing deleted successfully.', { variant: 'success' })
    } catch (error) {
      enqueueSnackbar('Failed to delete listing.', { variant: 'error' })
    }
  }

  return (
    <PageLayout layout="narrow">
      <Title level={2}>My Listings</Title>
      <Text>Here you can view, edit, or delete your listings.</Text>
      <Row gutter={[16, 16]} style={{ marginTop: '20px' }}>
        {listings?.map(listing => (
          <Col key={listing.id} xs={24} sm={12} md={8} lg={6}>
            <Card
              hoverable
              cover={
                <img
                  alt={listing.title}
                  src={listing.images?.[0]?.url || '/placeholder.jpg'}
                />
              }
              actions={[
                <EditOutlined
                  key="edit"
                  onClick={() => handleEdit(listing.id)}
                />,
                <DeleteOutlined
                  key="delete"
                  onClick={() => handleDelete(listing.id)}
                />,
              ]}
            >
              <Card.Meta
                title={listing.title}
                description={
                  <>
                    <Text>{listing.description}</Text>
                    <br />
                    <Text type="secondary">
                      {dayjs(listing.dateCreated).format('YYYY-MM-DD')}
                    </Text>
                  </>
                }
              />
            </Card>
          </Col>
        ))}
      </Row>
      <Space style={{ marginTop: '20px' }}>
        <Button type="primary" onClick={() => router.push('/listing/create')}>
          Create New Listing
        </Button>
      </Space>
    </PageLayout>
  )
}
