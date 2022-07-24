import React from 'react'
import { CRow, CCol, CFooter, CContainer } from '@coreui/react'

const AppFooter = () => {
  return (
    <CFooter>
      <CContainer>
        <CRow>
          <CCol style={{ textAlign: 'left' }}>
            <p style={{ fontSize: '14px', color: '#8d8d8d', lineHeight: '24px' }}>
              타임하이브 승마클럽
              <br />
              대표자 홍길동 | 서울특별시 강남구 논현동 123-7
              <br />
              사업자번호 123-12-12345 | 대표전화 080-1234-1234
            </p>
          </CCol>
          <CCol style={{ textAlign: 'right' }}>
            <p
              style={{
                fontSize: '14px',
                color: '#b9b9b9',
              }}
            >
              Copyright(c)2022 Timehive Company. All right Reserved.
            </p>
          </CCol>
        </CRow>
      </CContainer>
    </CFooter>
  )
}

export default React.memo(AppFooter)
