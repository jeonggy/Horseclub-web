import React, { Component } from 'react'
import { CCol, CImage, CRow, CContainer } from '@coreui/react'

class Introduce extends Component {
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
              인사말
            </h1>
          </CCol>
          <CCol style={{ marginTop: '90px' }}>
            <CRow>
              <CCol xs="6" style={{ color: '#141414' }}>
                <h3 style={{ marginBottom: '40px', lineHeight: '38px' }}>
                  “타임하이브 승마클럽을 방문해주신 여러분께
                  <br />
                  진심으로 감사의 말씀을 전합니다.”
                </h3>
                <p>
                  서울에서 가까운 강남에서 20여분거리 미사대교 건너 덕소, 삼패IC 부근
                  <br />
                  예봉산 아래 와부읍 월문리 체육시설업 등록업체로 몸과 마음을 힐링할
                  <br />
                  수 있는 친정집, 처가집 같은 가족같은 분위기 동서울 승마클럽 입니다.
                  <br />
                  생활 승마 코스로 안전하고 저렴하게 남녀노소
                  <br />
                  누구나 승마할 수 있는 곳입니다.
                  <br />
                </p>

                <p>
                  나이 불문하여 유아 5세이상 7,80대도 안전하게 승마하실 수 있습니다.
                  <br />
                  승마는 정신운동이며 전신운동으로 장애우도 가능합니다.
                  <br />
                </p>

                <p>
                  연중무휴로 아침 8시 - 저녁 10시까지 운영하오니
                  <br />
                  새로운 경헐과 평생에 멋진 추억을 만들어보십시오.
                  <br />
                  감사합니다.
                </p>
                <br />
                <br />
                <p>타임하이브 승마클럽 대표 홍길동</p>
              </CCol>
              <CCol xs="6">
                <CImage
                  align="center"
                  src="img/sub1.jpg"
                  width="100%"
                  style={{
                    boxShadow: '2px 2px 14px 2px rgba(0, 0, 60, 0.1)',
                  }}
                />
              </CCol>
            </CRow>
          </CCol>
          {/* <CCol style={{ marginTop: '120px', color: '#141414' }}>
            <CRow>
              <CCol className="clearfix" style={{ padding: '14px' }} xs="12" sm="12" md="4" lg="4">
                <CImage rounded src="img/sub1.jpg" width="100%" />
                <h5 style={{ paddingTop: '12px', textAlign: 'center' }}>타임하이브 승마클럽</h5>
              </CCol>
              <CCol className="clearfix" style={{ padding: '14px' }} xs="12" sm="12" md="4" lg="4">
                <CImage rounded src="img/sub1.jpg" width="100%" />
                <h5 style={{ paddingTop: '12px', textAlign: 'center' }}>실내 승마장</h5>
              </CCol>
              <CCol className="clearfix" style={{ padding: '14px' }} xs="12" sm="12" md="4" lg="4">
                <CImage rounded src="img/sub1.jpg" width="100%" />
                <h5 style={{ paddingTop: '12px', textAlign: 'center' }}>실외 승마장</h5>
              </CCol>
            </CRow>
          </CCol> */}
        </CContainer>
      </>
    )
  }
}
export default Introduce
