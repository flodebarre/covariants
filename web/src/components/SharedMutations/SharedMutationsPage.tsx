import React from 'react'

import { Col, Container, Row } from 'reactstrap'
import styled from 'styled-components'

import { Editable, CenteredEditable } from 'src/components/Common/Editable'
import { Layout } from 'src/components/Layout/Layout'

import SharedMutationsIntro from '../../../../content/SharedMutations.md'
import { SharedMutations } from './SharedMutations'
import { PageHeading } from '../Common/PageHeading'

export const SharedMutationsPageContainer = styled(Container)``

export const SharedMutationsWrapper = styled.div`
  display: block;
  flex: 0;
  overflow-x: auto;
`

export const SharedMutationsWrapperInner = styled.div`
  flex: 1;
`

export function SharedMutationsPage() {
  return (
    <Layout>
      <SharedMutationsPageContainer>
        <Row noGutters>
          <Col>
            <PageHeading>{'Shared mutations'}</PageHeading>
          </Col>
        </Row>

        <Row noGutters>
          <Col>
            <CenteredEditable githubUrl="blob/master/content/SharedMutations.md">
              <SharedMutationsIntro />
            </CenteredEditable>
          </Col>
        </Row>

        <Row noGutters>
          <Col className="pb-10">
            <Editable githubUrl="blob/master/scripts" text={'View data generation scripts'}>
              <SharedMutationsWrapper>
                <SharedMutations />
              </SharedMutationsWrapper>
            </Editable>
          </Col>
        </Row>
      </SharedMutationsPageContainer>
    </Layout>
  )
}
