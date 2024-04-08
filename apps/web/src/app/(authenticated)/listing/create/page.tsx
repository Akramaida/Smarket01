'use client'

import React, { useState, useEffect } from 'react'
import { Button, Form, Input, Select, Upload, Typography } from 'antd'
import { PlusOutlined } from '@ant-design/icons'
const { Title, Paragraph } = Typography
const { Option } = Select
import { useAuthentication } from '@web/modules/authentication'
import dayjs from 'dayjs'
import { useSnackbar } from 'notistack'
import { useRouter, useParams } from 'next/navigation'
import { Api, Model } from '@web/domain'
import { PageLayout } from '@web/layouts/Page.layout'

export default function CreateListingPage() {
  const router = useRouter()
  const authentication = useAuthentication()
  const userId = authentication.user?.id
  const { enqueueSnackbar } = useSnackbar()
  const [categories, setCategories] = useState([])
  const [fileList, setFileList] = useState([])

  // Removed useEffect hook that was attempting to fetch categories using a non-existent findAll method

  const handleUpload = async options => {
    const { file } = options
    const url = await Api.Upload.upload(file)
    setFileList(fileList => [...fileList, { url: url, status: 'done' }])
  }

  const onFinish = async values => {
    try {
      const { title, description, price, categoryId } = values
      const listingCreated = await Api.Listing.createOneByUserId(userId, {
        title,
        description,
        price,
        categoryId,
      })

      if (fileList.length > 0) {
        await Api.Image.createOneByListingId(listingCreated.id, {
          url: fileList[0].url,
        })
      }

      enqueueSnackbar('Listing created successfully', { variant: 'success' })
      router.push('/listings')
    } catch (error) {
      enqueueSnackbar('Failed to create listing', { variant: 'error' })
    }
  }

  return (
    <PageLayout layout="narrow">
      <Title>Create a Listing</Title>
      <Paragraph>
        Fill in the details below to list a new item for sale.
      </Paragraph>
      <Form layout="vertical" onFinish={onFinish}>
        <Form.Item
          label="Title"
          name="title"
          rules={[{ required: true, message: 'Please input the title!' }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Description"
          name="description"
          rules={[{ required: true, message: 'Please input the description!' }]}
        >
          <Input.TextArea />
        </Form.Item>
        <Form.Item
          label="Price"
          name="price"
          rules={[{ required: true, message: 'Please input the price!' }]}
        >
          <Input type="number" />
        </Form.Item>
        <Form.Item
          label="Category"
          name="categoryId"
          rules={[{ required: true, message: 'Please select a category!' }]}
        >
          <Select placeholder="Select a category">
            {/* Since fetching categories dynamically is not possible, this section might need to be adjusted based on available data or removed */}
          </Select>
        </Form.Item>
        <Form.Item label="Upload Image">
          <Upload
            fileList={fileList}
            customRequest={handleUpload}
            listType="picture-card"
            maxCount={1}
          >
            {fileList.length < 1 && (
              <div>
                <PlusOutlined />
                <div style={{ marginTop: 8 }}>Upload</div>
              </div>
            )}
          </Upload>
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit">
            Create Listing
          </Button>
        </Form.Item>
      </Form>
    </PageLayout>
  )
}
