import React, { Component } from 'react'
import {
  CCol,
  CCarousel,
  CCarouselItem,
  CImage,
  CCarouselCaption,
  CCardImage,
  CCard,
  CCardBody,
  CCardTitle,
  CButton,
  CCardText,
  CRow,
} from '@coreui/react'
import Zoom from 'react-medium-image-zoom'
import 'react-medium-image-zoom/dist/styles.css'

// import Swiper core and required modules
import { Navigation, Pagination, Autoplay } from 'swiper'

import { Swiper, SwiperSlide } from 'swiper/react'

// Import Swiper styles
import 'swiper/swiper-bundle.min.css'
import 'swiper/swiper.min.css'
import 'swiper/components/navigation/navigation.min.css'
import 'swiper/components/pagination/pagination.min.css'

const noticelist = [
  { id: 1, title: '2022년도 자격증반 모집', date: '2022-07-12' },
  { id: 2, title: '설날 정상운영 안내', date: '2022-07-02' },
  { id: 3, title: '2022년도 정기반 코치 모집중(조기마감)', date: '2022-06-30' },
]
const imglist = [
  { id: 1, title: '갤러리제목1', img: 'img/slide1.jpg' },
  { id: 2, title: '갤러리제목2', img: 'img/slide2.jpg' },
  { id: 3, title: '갤러리제목3', img: 'img/slide3.jpg' },
  { id: 4, title: '갤러리제목4', img: 'img/slide4.jpg' },
  { id: 5, title: '갤러리제목5', img: 'img/slide5.jpg' },
  { id: 6, title: '갤러리제목6', img: 'img/slide6.jpg' },
  { id: 7, title: '갤러리제목7', img: 'img/slide7.jpg' },
  { id: 8, title: '갤러리제목8', img: 'img/slide1.jpg' },
  { id: 9, title: '갤러리제목9', img: 'img/slide2.jpg' },
  { id: 10, title: '갤러리제목10', img: 'img/slide3.jpg' },
  { id: 11, title: '갤러리제목11', img: 'img/slide4.jpg' },
  { id: 12, title: '갤러리제목12', img: 'img/slide5.jpg' },
]

class Home extends Component {
  constructor(props) {
    super(props)
    this.state = {
      index: 0,
      noticelist: noticelist,
      imglist: imglist,
    }
  }

  programBtnClicked = () => {
    window.location.href = '#/program'
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' })
  }
  noticeBtnClicked = () => {
    window.location.href = '#/notice'
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' })
  }
  noticelistBtnClicked = () => {
    document.location.href = '#/noticeview'
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' })
  }

  substrSplit = (input) => {
    if (input.length >= 17) {
      return input.substr(0, 17) + '...'
    }
    return input
  }

  render() {
    return (
      <>
        <CCol>
          <CCarousel controls indicators style={{ padding: 0 }}>
            <CCarouselItem>
              <CImage
                style={{ objectFit: 'cover' }}
                className="d-block w-100"
                src="img/main2.jpg"
                alt="slide 1"
                height="350px"
              />
              <CCarouselCaption style={{ textAlign: 'left', bottom: '90px' }}>
                <p className="main-p-top-m">잊지 못할 경험과 추억을 타임하이브와 함께 -</p>
                <h1 className="main-h1-m">도심속에서 힐링하기</h1>
                <p className="main-p-m">
                  누구나 승마를 즐길수 있도록 <br />
                  기초부터 엘리트과정까지
                  <br />
                  수준별 프로그램이 준비되어 있습니다.
                </p>
              </CCarouselCaption>
            </CCarouselItem>
            <CCarouselItem>
              <CImage
                style={{ objectFit: 'cover' }}
                className="d-block w-100"
                src="img/main4.jpg"
                alt="slide 2"
                height="350px"
              />
              <CCarouselCaption style={{ textAlign: 'left', bottom: '90px' }}>
                <p className="main-p-top-m">잊지 못할 경험과 추억을 타임하이브와 함께 -</p>
                <h1 className="main-h1-m">도심속에서 힐링하기</h1>
                <p className="main-p-m">
                  누구나 승마를 즐길수 있도록
                  <br />
                  기초부터 엘리트과정까지
                  <br />
                  수준별 프로그램이 준비되어 있습니다.
                </p>
              </CCarouselCaption>
            </CCarouselItem>
            <CCarouselItem>
              <CImage
                style={{ objectFit: 'cover' }}
                className="d-block w-100"
                src="img/main3.jpg"
                alt="slide 3"
                height="350px"
              />
              <CCarouselCaption style={{ textAlign: 'left', bottom: '90px' }}>
                <p className="main-p-top-m">잊지 못할 경험과 추억을 타임하이브와 함께 -</p>
                <h1 className="main-h1-m">도심속에서 힐링하기</h1>
                <p className="main-p-m">
                  누구나 승마를 즐길수 있도록 <br />
                  기초부터 엘리트과정까지
                  <br />
                  수준별 프로그램이 준비되어 있습니다.
                </p>
              </CCarouselCaption>
            </CCarouselItem>
          </CCarousel>
        </CCol>
        <CCol className="text-center" style={{ padding: '14px' }}>
          <h1
            className="main-h1-title-m"
            style={{
              paddingTop: '70px',
              paddingBottom: '10px',
            }}
          >
            몸과 마음까지 쉬어가는,
            <br />
            도심 속 휴식처
          </h1>
        </CCol>
        <CCol style={{ margin: '0px', width: '100%' }}>
          <Swiper
            // install Swiper modules
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={8}
            slidesPerView={2}
            // navigation
            autoplay={true}
            pagination={{ clickable: true }}
            onSlideChange={() => console.log('slide change')}
            onSwiper={(swiper) => console.log(swiper)}
            style={{ paddingLeft: '30px' }}
          >
            {this.state.imglist.map((item, index) => (
              <SwiperSlide key={index}>
                <Zoom>
                  <CImage src={item.img} width="100%" />
                </Zoom>
              </SwiperSlide>
            ))}
          </Swiper>
        </CCol>
        <CCol className="text-center" style={{ padding: '14px' }}>
          <CCol style={{ paddingBottom: '80px', paddingTop: '100px' }}>
            <CRow>
              <CCol xs="8" style={{ paddingBottom: '30px' }}>
                <h1 className="main-h1-title-m">
                  잊지 못할 순간을
                  <br /> 승마클럽과
                  <br />
                  함께
                </h1>
              </CCol>
              <CCol xs="4" style={{ position: 'relative' }}>
                <CButton className="main-btn-st-m" onClick={() => this.programBtnClicked()}>
                  더보기
                </CButton>
              </CCol>
            </CRow>

            <CCard className="main-card-st-m">
              <CCardImage orientation="top" src="img/class1.jpg" />
              <CCardBody className="card-body-st-m">
                <CCardTitle className="main-card-title-m">첫 승마를 위한 체험</CCardTitle>
                <CCardText className="main-card-text-m">
                  승마 체험을 통해 승마에 대한 이해와 자신감,
                  <br />
                  성취감을 느낄 수 있습니다.
                </CCardText>
              </CCardBody>
            </CCard>

            <CCol>
              <CCard className="main-card-st">
                <CCardImage orientation="top" src="img/class2.jpg" />
                <CCardBody className="card-body-st-m">
                  <CCardTitle className="main-card-title-m">지속적인 힐링 강습</CCardTitle>
                  <CCardText className="main-card-text-m">
                    교관과 함께 승마의 기초적인 교육과
                    <br />
                    안전교육, 승마 연습을 하실 수 있습니다.
                  </CCardText>
                </CCardBody>
              </CCard>
            </CCol>
            <CCol>
              <CCard className="main-card-st">
                <CCardImage orientation="top" src="img/class3.jpg" />
                <CCardBody className="card-body-st-m">
                  <CCardTitle className="main-card-title-m">말과의 교감 자유기승</CCardTitle>
                  <CCardText className="main-card-text-m">
                    말과의 교감을 통해 흥미와 자신감을 느끼며
                    <br />
                    승마 연습을 하실 수 있습니다.
                  </CCardText>
                </CCardBody>
              </CCard>
            </CCol>
          </CCol>
          <CCol>
            <CRow>
              <CCol xs="8" className="text-left">
                <h1 className="main-h1-title-m">
                  <span style={{ fontSize: '18px', fontWeight: 400, paddingBottom: '2px' }}>
                    타임하이브 승마클럽의
                  </span>
                  <br />
                  새로운 소식
                </h1>
              </CCol>
              <CCol xs="4" style={{ position: 'relative' }}>
                <CButton
                  style={{ marginTop: '26px' }}
                  className="main-btn-st-m"
                  onClick={() => this.noticeBtnClicked()}
                >
                  더보기
                </CButton>
              </CCol>
            </CRow>
          </CCol>
          <CCol style={{ paddingTop: '28px', paddingBottom: '30px' }}>
            {this.state.noticelist.map((item, index) => (
              <CCol
                key={item.name}
                className="main-news-st-m"
                onClick={() => this.noticelistBtnClicked()}
                style={{ cursor: 'pointer' }}
              >
                <p style={{ color: '#2b91fe', fontSize: '16px', margin: 0, paddingBottom: '4px' }}>
                  {item.date}
                </p>
                <h3 style={{ color: '#141414', margin: 0 }}>{this.substrSplit(item.title)}</h3>
              </CCol>
            ))}
          </CCol>
        </CCol>
        <CCol style={{ position: 'relative', padding: 0 }}>
          <CCol className="main-bottom-img-hover">
            <img
              src="img/main-bottom1.jpg"
              height="200px"
              width="100%"
              style={{ objectFit: 'cover' }}
            />
          </CCol>
          <CRow className="txt-icon-row">
            <CCol xs="4" className="main-bottom-img-hover-icon">
              <img src="img/map-icon.png" height="80px" />
            </CCol>
            <CCol className="main-bottom-img-hover-txt">
              <p style={{ fontWeight: 300, fontSize: '16px', margin: 0, paddingBottom: '6px' }}>
                오시는 길
              </p>
              <h2>
                <span style={{ fontSize: '22px' }}>서울시 강남구 논현동 123-7</span>
              </h2>
              <p style={{ fontSize: '16px', margin: 0 }}>
                운영시간 09:30 - 18:00
                <br />
                (월요일 휴무)
              </p>
            </CCol>
          </CRow>
        </CCol>
        <CCol style={{ position: 'relative', padding: 0 }}>
          <CCol className="main-bottom-img-hover">
            <img
              src="img/main-bottom2.jpg"
              height="150px"
              width="100%"
              style={{ objectFit: 'cover' }}
            />
          </CCol>
          <CRow className="txt-icon-row">
            <CCol xs="4" className="main-bottom-img-hover-icon">
              <img src="img/phone-icon.png" height="80px" />
            </CCol>
            <CCol className="main-bottom-img-hover-txt">
              <p style={{ fontWeight: 300, fontSize: '16px', margin: 0, paddingBottom: '6px' }}>
                승마클럽 문의전화
              </p>
              <h2 style={{ margin: 0 }}>
                <span style={{ fontSize: '24px' }}>080-1234-1234</span>
              </h2>
              <p style={{ fontSize: '16px', margin: 0 }}>평일 09:30 - 18:00</p>
            </CCol>
          </CRow>
        </CCol>
      </>
    )
  }
}
export default Home
