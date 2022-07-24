import React, { Component } from 'react'
import { CCol, CContainer } from '@coreui/react'
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
            height: '330px',
            width: '100%',
            padding: 0,
            margin: 0,
          }}
        >
          <h2 style={{ paddingTop: '94px', fontSize: '46px', color: '#fff' }}>
            <span style={{ fontWeight: '200', fontSize: '26px' }}>타임하이브 승마클럽</span>
            <br />
            <span style={{ fontWeight: '700' }}>클럽소개</span>
          </h2>
        </CCol>
        <CContainer style={{ marginBottom: '150px' }}>
          <CCol>
            <h1 className="text-center" style={{ marginTop: '130px', color: '#141414' }}>
              오시는 길
            </h1>
          </CCol>
          <CCol style={{ marginTop: '70px', color: '#141414' }}>
            <Map />
            <h4 style={{ marginBottom: '14px', marginTop: '20px' }}>
              주소 : 경기도 남양주시 와부읍 월문천로 280-7
            </h4>
            <p>
              평일 08:00 - 22:00
              <br />
              대표전화 : 080-088-7745 / 팩스 : 031-795-7717
            </p>
          </CCol>
        </CContainer>
      </>
    )
  }
}
export default ClubMap
