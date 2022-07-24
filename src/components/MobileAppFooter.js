import React from 'react'
import { CRow, CCol, CFooter } from '@coreui/react'

const MobileAppFooter = () => {
  return (
    <CFooter style={{ padding: '28px 4px 16px 4px' }}>
      <CCol style={{ textAlign: 'center' }}>
        <p style={{ fontSize: '12px', color: '#8d8d8d', lineHeight: '24px' }}>
          타임하이브 승마클럽
          <br />
          대표자 홍길동 | 서울특별시 강남구 논현동 123-7
          <br />
          사업자번호 123-12-12345 | 대표전화 080-1234-1234
        </p>
        <p
          style={{
            fontSize: '12px',
            color: '#b9b9b9',
          }}
        >
          Copyright(c)2022 Timehive Company. All right Reserved.
        </p>
      </CCol>
    </CFooter>
  )
}

export default React.memo(MobileAppFooter)
