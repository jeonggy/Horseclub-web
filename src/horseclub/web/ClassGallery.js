import React, { Component } from 'react'
import {
  CCol,
  CImage,
  CContainer,
  CInputGroup,
  CFormInput,
  CButton,
  CRow,
  CPagination,
  CPaginationItem,
} from '@coreui/react'

const galleryimg = [
  { id: 1, title: '갤러리제목1', date: '2022-12-12', img: 'img/class1.jpg' },
  { id: 2, title: '갤러리제목2', date: '2022-12-12', img: 'img/main1.jpg' },
  { id: 3, title: '갤러리제목3', date: '2022-12-12', img: 'img/sub1.jpg' },
  { id: 4, title: '갤러리제목4', date: '2022-12-12', img: 'img/class1.jpg' },
  { id: 5, title: '갤러리제목5', date: '2022-12-12', img: 'img/class1.jpg' },
  { id: 6, title: '갤러리제목6', date: '2022-12-12', img: 'img/class1.jpg' },
  { id: 7, title: '갤러리제목7', date: '2022-12-12', img: 'img/class1.jpg' },
  { id: 8, title: '갤러리제목8', date: '2022-12-12', img: 'img/class1.jpg' },
  { id: 9, title: '갤러리제목9', date: '2022-12-12', img: 'img/class1.jpg' },
  { id: 10, title: '갤러리제목10', date: '2022-12-12', img: 'img/class1.jpg' },
  { id: 11, title: '갤러리제목11', date: '2022-12-12', img: 'img/class1.jpg' },
  { id: 12, title: '갤러리제목12', date: '2022-12-12', img: 'img/class1.jpg' },
]

class ClassGallery extends Component {
  constructor(props) {
    super(props)
    this.state = {
      index: 0,
      galleryimg: galleryimg,
    }
  }
  classgalleryviewBtnClicked = () => {
    document.location.href = '#/classgalleryview'
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' })
  }
  render() {
    return (
      <>
        <CCol
          style={{
            textAlign: 'center',
            background: 'url(img/main2.jpg)', //http://team-ace.co.kr/images/ceo_message.jpg
            height: '330px',
            width: '100%',
            padding: 0,
            margin: 0,
          }}
        >
          <h2 style={{ paddingTop: '94px', fontSize: '46px', color: '#fff' }}>
            <span style={{ fontWeight: '200', fontSize: '26px' }}>타임하이브 승마클럽</span>
            <br />
            <span style={{ fontWeight: '700' }}>클럽갤러리</span>
          </h2>
        </CCol>
        <CContainer style={{ marginBottom: '150px' }}>
          <CCol>
            <h1 className="text-center" style={{ marginTop: '130px', color: '#141414' }}>
              체험갤러리
            </h1>
          </CCol>
          <CCol style={{ marginTop: '80px', marginBottom: '60px' }}>
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
            <CRow>
              {this.state.galleryimg.map((item, index) => (
                <CCol
                  className="clearfix"
                  display="inline-block"
                  key={item.name}
                  xs="6"
                  sm="6"
                  md="4"
                  lg="3"
                  style={{ padding: '10px 10px 24px 10px', overflow: 'hidden', cursor: 'pointer' }}
                  onClick={() => this.classgalleryviewBtnClicked()}
                >
                  <CCol className="board-fixed-image-box">
                    <CImage
                      className="d-block w-100 cover board-fixed-image"
                      src={item.img}
                      alt="slide 1"
                      minHeight={200}
                      Width="auto"
                      overflow="hidden"
                      objectFit="cover"
                      display="flex"
                    />
                  </CCol>
                  <CCol style={{ textAlign: 'left', paddingTop: '12px' }}>
                    <h5
                      style={{ color: '#141414', margin: 0, fontWeight: 400, lineHeight: '30px' }}
                    >
                      {item.title}
                    </h5>
                    <p style={{ color: '#6a6a6a', paddingTop: '4px' }}>{item.date}</p>
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
          </CCol>
        </CContainer>
      </>
    )
  }
}
export default ClassGallery
