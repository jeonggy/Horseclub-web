import React, { Component } from 'react'
import { CCol, CImage, CContainer, CRow, CBadge, CModal, CModalBody, CButton } from '@coreui/react'

const programlist = [
  {
    id: 1,
    completed: 'NEW',
    title: '일일 기승체험',
    minute: '50분',
    img: 'img/class2.jpg',
    weekday_price: 50000,
    weekend_price: 70000,
  },
  {
    id: 2,
    completed: 'NEW',
    title: '쿠폰 프로그램',
    minute: '40분',
    img: 'img/class2.jpg',
    weekday_price: 250000,
    weekend_price: 400000,
  },
  {
    id: 3,
    title: '월회원',
    minute: '45분',
    img: 'img/class2.jpg',
    weekday_price: 750000,
    weekend_price: 800000,
  },
  {
    id: 4,
    completed: 'BEST',
    title: '월회원',
    minute: '45분',
    img: 'img/class2.jpg',
    weekday_price: 750000,
    weekend_price: 800000,
  },
  {
    id: 5,
    title: '월회원',
    minute: '45분',
    img: 'img/class2.jpg',
    weekday_price: 750000,
    weekend_price: 800000,
  },
  {
    id: 6,
    title: '월회원',
    minute: '45분',
    img: 'img/class2.jpg',
    weekday_price: 750000,
    weekend_price: 800000,
  },
]

function badgeColor(completed) {
  if (completed == 'NEW') {
    return 'info'
  }
  if (completed == 'BEST') {
    return 'danger'
  }
}

class Guide extends Component {
  constructor(props) {
    super(props)
    this.state = {
      index: 0,
      programlist: programlist,
      clubAddModalOpen: false,
    }
  }

  numPrice = (num) => {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
  }

  clubModalBtnClicked = () => {
    this.setState({
      clubAddModalOpen: true,
    })
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
            <span style={{ fontWeight: '700' }}>프로그램</span>
          </h2>
        </CCol>
        <CContainer style={{ paddingBottom: '50px' }}>
          <CCol>
            <h1
              className="text-center"
              style={{
                marginTop: '130px',
                marginBottom: '70px',
                color: '#141414',
                lineHeight: '50px',
              }}
            >
              이용안내
            </h1>
          </CCol>
          <CRow className="row-st">
            {this.state.programlist.map((item, index) => (
              <CCol xs="6" style={{ padding: '8px' }} key={item.name}>
                <CCol className="clearfix main-program-st" display="inline-block">
                  <CRow>
                    <CCol xs="4">
                      <CImage
                        style={{ borderRadius: '10px' }}
                        src={item.img}
                        alt="slide 1"
                        Width="180px"
                        overflow="hidden"
                        display="flex"
                      />
                    </CCol>
                    <CCol style={{ color: '#141414', position: 'relative' }}>
                      <CCol>
                        <CBadge color={badgeColor(item.completed)}>{item.completed}</CBadge>
                        <h4 style={{ fontSize: '28px', fontWeight: 500 }}>{item.title}</h4>
                        <h5 style={{ fontWeight: 400, color: '#414141' }}>{item.minute}</h5>
                      </CCol>
                      <CCol
                        style={{
                          alignItems: 'end',
                          justifyContent: 'end',
                          position: 'absolute',
                          right: '20px',
                          bottom: 0,
                        }}
                      >
                        <h3>
                          <span className="span-p-st">주중</span>{' '}
                          {this.numPrice(item.weekday_price)}
                          <span className="span-p-st">원</span>
                        </h3>
                        <h3>
                          <span className="span-p-st">주말</span>{' '}
                          {this.numPrice(item.weekend_price)}
                          <span className="span-p-st">원</span>
                        </h3>
                      </CCol>
                    </CCol>
                  </CRow>
                </CCol>
              </CCol>
            ))}
          </CRow>
        </CContainer>
        <CContainer style={{ paddingTop: '30px', paddingBottom: '150px' }}>
          <CRow>
            <img
              style={{ cursor: 'pointer' }}
              src="img/malta-banner.png"
              onClick={() => this.clubModalBtnClicked()}
            />
          </CRow>
        </CContainer>
        <CModal
          alignment="center"
          centered
          visible={this.state.clubAddModalOpen}
          onClose={() => this.setState({ clubAddModalOpen: false })}
        >
          <CModalBody>
            <CCol style={{ padding: '14px' }}>
              <CCol style={{ margin: 0, padding: 0, textAlign: 'right' }}>
                <CButton
                  style={{ bottom: 'none', right: '14px', border: 'none', top: '14px' }}
                  onClick={() => this.setState({ clubAddModalOpen: false })}
                  className="btn-close"
                ></CButton>
              </CCol>
              <h5 style={{ color: '#141414', fontWeight: 600, fontSize: '26px' }}>
                말타 앱 이동하기
              </h5>
              <p style={{ color: '#898989', fontSize: '18px', paddingBottom: '10px' }}>
                편리하게 승마장 정보 얻고, 빠른 예약을 원한다면!
              </p>
              <CCol className="text-center">
                <img src="img/main-bg-1.png" />
                <h5
                  style={{
                    fontSize: '26px',
                    lineHeight: '28px',
                    backgroundColor: '#F8F9FA',
                    display: 'inline-block',
                    padding: '20px 70px',
                    borderRadius: '10px',
                    color: '#141414',
                  }}
                >
                  Android OS / iOS
                  <br />
                  <span style={{ fontSize: '18px' }}>앱 다운로드 QR</span>
                </h5>
              </CCol>
            </CCol>
          </CModalBody>
        </CModal>
      </>
    )
  }
}
export default Guide
