import { RouterObject } from '@web/core/router'
import { useDesignSystem } from '@web/designSystem'
import { Model } from '@web/domain'
import { useAuthentication } from '@web/modules/authentication'
import { Col, Layout, Row } from 'antd'
import { useRouter } from 'next/navigation'
import { ReactNode } from 'react'
import { Leftbar } from './components/Leftbar'
import { Logo } from './components/Logo'
import { SubNavigation } from './components/SubNavigation'
import { Topbar } from './components/Topbar/index.layout'

interface Props {
  children: ReactNode
}

export const NavigationLayout: React.FC<Props> = ({ children }) => {
  const router = useRouter()

  const authentication = useAuthentication()
  const user = authentication?.user as Model.User

  const { isMobile } = useDesignSystem()

  const goTo = (url: string) => {
    router.push(url)
  }

  const goToUserPage = (url: string) => {
    router.push(url.replace(':id', user?.id))
  }

  const itemsLeftbar = []

  const itemsUser = [
    {
      key: '/user/:id/listings',
      label: 'My Listings',
      onClick: () => goToUserPage('/user/:id/listings'),
    },

    {
      key: '/user/:id/orders',
      label: 'My Orders',
      onClick: () => goToUserPage('/user/:id/orders'),
    },
  ]

  const itemsTopbar = [
    {
      key: '/listings',
      label: 'Browse Listings',
      onClick: () => goTo('/listings'),
    },

    {
      key: '/listing/create',
      label: 'Create Listing',
      onClick: () => goTo('/listing/create'),
    },

    {
      key: '/search',
      label: 'Search',
      onClick: () => goTo('/search'),
    },

    {
      key: '/order/create',
      label: 'Place Order',
      onClick: () => goTo('/order/create'),
    },
  ]

  const itemsSubNavigation = [
    {
      key: '/listings',
      label: 'Browse Listings',
    },

    {
      key: '/listing/create',
      label: 'Create Listing',
    },

    {
      key: '/listing/:id',
      label: 'Listing Details',
    },

    {
      key: '/search',
      label: 'Search',
    },

    {
      key: '/category/:id/listings',
      label: 'Category Listings',
    },

    {
      key: '/user/:id/listings',
      label: 'My Listings',
    },

    {
      key: '/order/create',
      label: 'Place Order',
    },

    {
      key: '/user/:id/orders',
      label: 'My Orders',
    },

    {
      key: '/order/:id/payment',
      label: 'Payment',
    },
  ]

  const itemsMobile = [
    {
      key: 'profile',
      label: 'Profile',
      onClick: () => goTo(RouterObject.route.PROFILE),
    },
    {
      key: 'notifications',
      label: 'Notifications',
      onClick: () => goTo(RouterObject.route.NOTIFICATIONS),
    },
    ...itemsTopbar,
    ...itemsLeftbar,
  ]

  const isLeftbar = itemsLeftbar.length > 0 && !isMobile

  return (
    <>
      <Layout>
        <Row
          style={{
            height: '100vh',
            width: '100vw',
          }}
        >
          {isLeftbar && (
            <Col>
              <Leftbar
                items={itemsLeftbar}
                itemsUser={itemsUser}
                logo={<Logo className="m-2" />}
              />
            </Col>
          )}

          <Col
            style={{
              flex: 1,
              height: '100%',
              display: 'flex',
              flexDirection: 'column',
              overflow: 'hidden',
            }}
          >
            <Topbar
              isMobile={isMobile}
              items={itemsTopbar}
              itemsMobile={itemsMobile}
              logo={!isLeftbar && <Logo width={40} height={40} />}
            />

            <Col
              style={{
                flex: 1,
                overflowY: 'auto',
                overflowX: 'hidden',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
              }}
            >
              <SubNavigation items={itemsSubNavigation} />

              {children}
            </Col>
          </Col>
        </Row>
      </Layout>
    </>
  )
}
