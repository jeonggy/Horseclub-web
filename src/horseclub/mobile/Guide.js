import React, { Component } from 'react'
import { CCol, CImage, CRow, CBadge } from '@coreui/react'
import { isMobile, isAndroid, isIOS } from 'react-device-detect'

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
  android() {
    window.location.href =
      'https://play.google.com/store/apps/details?id=com.timehive.marlta&hl=ko&gl=US'
  }
  ios() {
    window.location.href = 'https://apps.apple.com/kr/app/말타-승마예약앱/id1532007829'
  }

  appdownloadBtnClicked = () => {
    if (isMobile && isIOS) {
      this.ios()
      // window.location.href="https://appstore-link.com";
    } else if (isMobile && isAndroid) {
      this.android()
    } else {
      alert('말타 앱은 iOS, Android 에서만 지원 가능합니다.')
    }
    // this.setState({
    //   appdownloadModalOpen: true,
    // })
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
            height: '170px',
            width: '100%',
            padding: 0,
            margin: 0,
          }}
        >
          <h2 style={{ paddingTop: '48px', fontSize: '30px', color: '#fff' }}>
            <span style={{ fontWeight: '200', fontSize: '18px' }}>타임하이브 승마클럽</span>
            <br />
            <span style={{ fontWeight: '700' }}>프로그램</span>
          </h2>
        </CCol>
        <CCol>
          <h1
            className="text-center"
            style={{ paddingTop: '50px', color: '#141414', paddingBottom: '20px' }}
          >
            이용안내
          </h1>
        </CCol>
        <CCol style={{ paddingBottom: '50px' }}>
          <CRow className="row-st">
            {this.state.programlist.map((item, index) => (
              <CCol style={{ padding: '6px 14px' }} key={item.name}>
                <CCol className="clearfix main-program-st" display="inline-block">
                  <CRow>
                    <CCol>
                      <CImage
                        style={{ borderRadius: '10px' }}
                        src={item.img}
                        alt="slide 1"
                        Width="140px"
                        overflow="hidden"
                        display="flex"
                      />
                    </CCol>
                    <CCol style={{ color: '#141414', position: 'relative' }}>
                      <CCol>
                        <CBadge style={{ fontSize: '10px' }} color={badgeColor(item.completed)}>
                          {item.completed}
                        </CBadge>
                        <h4
                          style={{
                            fontSize: '20px',
                            fontWeight: 600,
                            margin: 0,
                            paddingBottom: '4px',
                          }}
                        >
                          {item.title}
                        </h4>
                        <h6 style={{ fontWeight: 400, color: '#414141', fontSize: '14px' }}>
                          {item.minute}
                        </h6>
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
                        <h3 style={{ fontSize: '18px' }}>
                          <span className="span-p-st" style={{ fontSize: '15px' }}>
                            주중
                          </span>{' '}
                          {this.numPrice(item.weekday_price)}
                          <span className="span-p-st">원</span>
                        </h3>
                        <h3 style={{ fontSize: '18px' }}>
                          <span className="span-p-st" style={{ fontSize: '15px' }}>
                            주말
                          </span>{' '}
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
        </CCol>
        <CCol style={{ padding: '0px 14px 70px 14px' }}>
          <CRow>
            <img
              src="img/mobile/malta-main-banner.png"
              onClick={() => this.appdownloadBtnClicked()}
            />
          </CRow>
        </CCol>
      </>
    )
  }
}
export default Guide
