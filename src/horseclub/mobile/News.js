import React, { Component } from 'react'
import {
  CCol,
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
            height: '170px',
            width: '100%',
            padding: 0,
            margin: 0,
          }}
        >
          <h2 style={{ paddingTop: '48px', fontSize: '30px', color: '#fff' }}>
            <span style={{ fontWeight: '200', fontSize: '18px' }}>타임하이브 승마클럽</span>
            <br />
            <span style={{ fontWeight: '700' }}>커뮤니티</span>
          </h2>
        </CCol>
        <CCol style={{ marginBottom: '50px' }}>
          <CCol>
            <h1 className="text-center" style={{ marginTop: '50px', color: '#141414' }}>
              클럽뉴스
            </h1>
          </CCol>
          <CCol style={{ marginTop: '40px', marginBottom: '60px', padding: '14px' }}>
            <CCol className="float-right text-right">
              <CInputGroup row style={{ marginBottom: '6px' }} align="right">
                <CCol xs="7" className="float-right text-right">
                  <CFormInput className="input-css-m" placeholder="검색어를 입력해주세요" />
                </CCol>
                <CButton className="input-btn-css" type="submit">
                  <img src="img/search-g.png" width="26px" />
                </CButton>
              </CInputGroup>
            </CCol>
            <CCol style={{ padding: '8px' }}>
              <CRow>
                {this.state.newslist.map((item, index) => (
                  <CCol
                    className="clearfix"
                    display="inline-block"
                    key={item.name}
                    xs="6"
                    style={{ padding: '10px 4px 20px 4px', overflow: 'hidden' }}
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
                        height: '90px',
                      }}
                    >
                      <h6
                        style={{ color: '#141414', margin: 0, fontWeight: 400, lineHeight: '24px' }}
                      >
                        {item.title}
                      </h6>
                      <p
                        style={{
                          color: '#a3a3a3',
                          position: 'absolute',
                          bottom: '0px',
                          margin: 0,
                          fontSize: '15px',
                        }}
                      >
                        {item.date}
                      </p>
                    </CCol>
                  </CCol>
                ))}
              </CRow>
            </CCol>
            <CPagination
              aria-label="Page navigation example"
              align="center"
              style={{ marginTop: '30px', cursor: 'pointer' }}
              size="sm"
            >
              <CPaginationItem aria-label="Previous" disabled>
                <span aria-hidden="true">
                  <img
                    style={{ cursor: 'pointer' }}
                    src="img/pagination-icon-left.png"
                    width="20px"
                  />
                </span>
              </CPaginationItem>
              <CPaginationItem className="page-item-m" style={{ margin: '6px 16px' }} active>
                1
              </CPaginationItem>
              <CPaginationItem style={{ padding: '6px 16px' }}>2</CPaginationItem>
              <CPaginationItem style={{ padding: '6px 16px' }}>3</CPaginationItem>
              <CPaginationItem aria-label="Next">
                <span aria-hidden="true">
                  <img
                    style={{ cursor: 'pointer' }}
                    src="img/pagination-icon-right.png"
                    width="20px"
                  />
                </span>
              </CPaginationItem>
            </CPagination>
          </CCol>
        </CCol>
      </>
    )
  }
}
export default News
