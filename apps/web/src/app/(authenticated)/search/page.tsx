'use client'

import { useState } from 'react'
import { Input, Button, Card, Row, Col, Typography, Space } from 'antd'
import { SearchOutlined } from '@ant-design/icons'
const { Title, Text } = Typography
import { useAuthentication } from '@web/modules/authentication'
import dayjs from 'dayjs'
import { useSnackbar } from 'notistack'
import { useRouter, useParams } from 'next/navigation'
import { Api, Model } from '@web/domain'
import { PageLayout } from '@web/layouts/Page.layout'

export default function SearchListingsPage() {
  const [searchTerm, setSearchTerm] = useState('')
  const [listings, setListings] = useState([])
  const [loading, setLoading] = useState(false)
  const router = useRouter()
  const { enqueueSnackbar } = useSnackbar()

  const handleSearch = async () => {
    if (!searchTerm) {
      enqueueSnackbar('Please enter a keyword to search.', { variant: 'info' })
      return
    }
    setLoading(true)
    try {
      const listingsFound = await Api.Listing.findMany({
        filters: { title: { ilike: searchTerm } },
        includes: ['user', 'images'],
      })
      setListings(listingsFound)
      setLoading(false)
    } catch (error) {
      enqueueSnackbar('Failed to fetch listings. Please try again.', {
        variant: 'error',
      })
      setLoading(false)
    }
  }

  return (
    <PageLayout layout="narrow">
      <Space direction="vertical" size="large" style={{ width: '100%' }}>
        <Title level={2}>Search Listings</Title>
        <Text>Use the search bar below to find listings by keywords.</Text>
        <Input.Search
          placeholder="Search by keyword"
          enterButton={
            <Button type="primary" icon={<SearchOutlined />} loading={loading}>
              Search
            </Button>
          }
          onSearch={handleSearch}
          onChange={e => setSearchTerm(e.target.value)}
          loading={loading}
        />
        <Row gutter={[16, 16]}>
          {listings?.map(listing => (
            <Col key={listing.id} xs={24} sm={12} md={8} lg={6}>
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
                onClick={() => router.push(`/listing/${listing.id}`)}
              >
                <Card.Meta
                  title={listing.title}
                  description={`$${listing.price}`}
                />
                <Text type="secondary">{listing.user?.name}</Text>
              </Card>
            </Col>
          ))}
        </Row>
      </Space>
    </PageLayout>
  )
}
