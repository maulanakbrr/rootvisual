'use client'

import CustomContainer from "@/components/CustomContainer"
import Link from "next/link"
import styled from "styled-components"
import { Row, Col } from "react-bootstrap"

const DashboardCard = styled.div`
  border: 1px solid black;
  padding: 1rem .8rem;
  border-radius: .5rem;

  a {
    text-decoration: none;
  }
`

const Dashboard = () => {

  return (
    <CustomContainer adminSection>
      <div>
        <h1>Dashboard</h1>
        <hr />
      </div>

      <Row>
        <Col>
          <DashboardCard>
            <p>Portfolio</p>
            <hr />
            <Link href='/admin/portfolio'>Go to portfolio</Link>
          </DashboardCard>
        </Col>

        <Col>
          <DashboardCard>
            <p>User</p>
            <hr />
            <Link href='/admin/user'>Go to user</Link>
          </DashboardCard>
        </Col>

        <Col>
          <DashboardCard>
            <p>Content</p>
            <hr />
            <Link href='/admin/content'>Go to content</Link>
          </DashboardCard>
        </Col>
      </Row>
    </CustomContainer>
  )
}

export default Dashboard