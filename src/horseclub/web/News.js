import React, { Component } from 'react'
import {
  CCol,
  CContainer,
  CInputGroup,
  CFormInput,
  CButton,
  CRow,
  CImage,
  CPagination,
  CPaginationItem,
} from '@coreui/react'

const newslist = [
  {
    id: 1,
    title: '2022년 올해 승마 즐겁게 즐기는 법을 알아보자',
    date: '2022-12-12',
    img: 'img/class2.jpg',
  },
  { id: 2, title: '기초이론', date: '2022-12-12', img: 'img/class2.jpg' },
  { id: 3, title: '승마 기초 상식', date: '2022-12-12', img: 'img/class2.jpg' },
  { id: 4, title: '승마 복장', date: '2022-12-12', img: 'img/class2.jpg' },
  { id: 5, title: '말의 종류', date: '2022-12-12', img: 'img/class2.jpg' },
  { id: 6, title: '3월 수업 안내', date: '2022-12-12', img: 'img/class2.jpg' },
  { id: 7, title: '4월 수업 안내', date: '2022-12-12', img: 'img/class2.jpg' },
  { id: 8, title: '5월 수업 안내', date: '2022-12-12', img: 'img/class2.jpg' },
  { id: 9, title: '6월 수업 안내', date: '2022-12-12', img: 'img/class2.jpg' },
  { id: 10, title: '7월 수업 안내', date: '2022-12-12', img: 'img/class2.jpg' },
  { id: 11, title: '6월 수업 안내', date: '2022-12-12', img: 'img/class2.jpg' },
  { id: 12, title: '7월 수업 안내', date: '2022-12-12', img: 'img/class2.jpg' },
]

class News extends Component {
  constructor(props) {
    super(props)
    this.state = {
      index: 0,
      newslist: newslist,
    }
  }

  newsviewBtnClicked = () => {
    document.location.href = '#/newsview'
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' })
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
            <span style={{ fontWeight: '700' }}>커뮤니티</span>
          </h2>
        </CCol>
        <CContainer style={{ marginBottom: '150px' }}>
          <CCol>
            <h1 className="text-center" style={{ marginTop: '130px', color: '#141414' }}>
              클럽뉴스
            </h1>
          </CCol>
          <CCol style={{ marginTop: '80px', marginBottom: '32px' }}>
            <CCol className="float-right text-right">
              <CInputGroup row style={{ marginBottom: '16px' }} align="right">
                <CCol xs="3" className="float-right text-right">
                  <CFormInput className="input-css" placeholder="검색어를 입력해주세요" />
                </CCol>
                <CButton className="input-btn-css" type="submit">
                  <img src="img/search-g.png" width="26px" />
                </CButton>
              </CInputGroup>
            </CCol>
          </CCol>
          <CRow>
            {this.state.newslist.map((item, index) => (
              <CCol
                className="clearfix"
                display="inline-block"
                key={item.name}
                xs="3"
                style={{ padding: '10px 10px 40px 10px', overflow: 'hidden', cursor: 'pointer' }}
                onClick={() => this.newsviewBtnClicked()}
              >
                <CCol className="info-board-fixed-image-box">
                  <CImage
                    className="d-block w-100 cover info-board-fixed-image"
                    src={item.img}
                    alt="slide 1"
                    minHeight={200}
                    Width="auto"
                    overflow="hidden"
                    display="flex"
                  />
                </CCol>
                <CCol
                  style={{
                    textAlign: 'left',
                    paddingTop: '16px',
                    position: 'relative',
                    height: '110px',
                  }}
                >
                  <h5 style={{ color: '#141414', margin: 0, fontWeight: 400, lineHeight: '30px' }}>
                    {item.title}
                  </h5>
                  <p
                    style={{
                      color: '#a3a3a3',
                      position: 'absolute',
                      bottom: '0px',
                      margin: 0,
                    }}
                  >
                    {item.date}
                  </p>
                </CCol>
              </CCol>
            ))}
          </CRow>
          <CPagination
            aria-label="Page navigation example"
            align="center"
            style={{ marginTop: '40px', cursor: 'pointer' }}
            size="lg"
          >
            <CPaginationItem aria-label="Previous" disabled>
              <span aria-hidden="true">
                <span aria-hidden="true">
                  <img
                    style={{ cursor: 'pointer' }}
                    src="img/pagination-icon-left.png"
                    width="30px"
                  />
                </span>
              </span>
            </CPaginationItem>
            <CPaginationItem className="page-item-w" active>
              1
            </CPaginationItem>
            <CPaginationItem>2</CPaginationItem>
            <CPaginationItem>3</CPaginationItem>
            <CPaginationItem aria-label="Next">
              <span aria-hidden="true">
                <img
                  style={{ cursor: 'pointer' }}
                  src="img/pagination-icon-right.png"
                  width="30px"
                />
              </span>
            </CPaginationItem>
          </CPagination>
        </CContainer>
      </>
    )
  }
}
export default News
