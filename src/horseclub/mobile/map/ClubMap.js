import React, { Component } from 'react'
import { CCol } from '@coreui/react'
import Map from './Map'

class ClubMap extends Component {
  constructor(props) {
    super(props)
    this.state = {
      index: 0,
    }
  }

  render() {
    return (
      <>
        <CCol
          style={{
            textAlign: 'center',
            background: 'url(img/main2.jpg)',
            height: '170px',
            width: '100%',
            padding: 0,
            margin: 0,
          }}
        >
          <h2 style={{ paddingTop: '48px', fontSize: '30px', color: '#fff' }}>
            <span style={{ fontWeight: '200', fontSize: '18px' }}>타임하이브 승마클럽</span>
            <br />
            <span style={{ fontWeight: '700' }}>클럽소개</span>
          </h2>
        </CCol>
        <CCol>
          <h1 className="text-center" style={{ paddingTop: '50px', color: '#141414' }}>
            오시는 길
          </h1>
        </CCol>
        <CCol
          style={{ marginBottom: '50px', marginTop: '30px', color: '#141414', padding: '14px' }}
        >
          <Map />
          <h5 style={{ marginBottom: '14px', marginTop: '20px' }}>
            주소 : 경기도 남양주시 와부읍 월문천로 280-7
          </h5>
          <p>
            평일 08:00 - 22:00
            <br />
            대표전화 : 080-088-7745
            <br />
            팩스 : 031-795-7717
          </p>
        </CCol>
      </>
    )
  }
}
export default ClubMap
