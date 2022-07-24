import React, { Component } from 'react'
import { CCol, CContainer, CButton } from '@coreui/react'
import ImageGallery from 'react-image-gallery'

const galleryimg = [
  {
    original: 'img/class1.jpg',
    thumbnail: 'img/class1.jpg',
  },
  {
    original: 'img/class2.jpg',
    thumbnail: 'img/class2.jpg',
  },
  {
    original: 'img/class3.jpg',
    thumbnail: 'img/class3.jpg',
  },
]

class HorseGalleryView extends Component {
  constructor(props) {
    super(props)
    this.state = {
      index: 0,
      galleryimg: galleryimg,
    }
  }
  horsegalleryBtnClicked = () => {
    document.location.href = '#/horsegallery'
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' })
  }

  render() {
    return (
      <>
        <CContainer style={{ paddingTop: '90px' }}>
          <CCol>
            <p
              style={{
                fontWeight: 400,
                color: '#a3a3a3',
                marginBottom: '2px',
                fontSize: '22px',
                textAlign: 'center',
              }}
            >
              승마갤러리
            </p>
          </CCol>
          <CCol>
            <h2
              style={{
                fontWeight: 500,
                color: '#141414',
                fontSize: '48px',
                lineHeight: '68px',
                textAlign: 'center',
              }}
            >
              승마 체험의 날 찰칵
            </h2>
          </CCol>
          <CCol style={{ borderBottom: '0.5px solid #e4e4e4' }}>
            <p
              style={{
                fontWeight: 400,
                color: '#a3a3a3',
                marginBottom: '2px',
                fontSize: '18px',
                paddingBottom: '40px',
                textAlign: 'center',
              }}
            >
              2022.12.12
            </p>
          </CCol>
          <CCol style={{ paddingTop: '80px', paddingBottom: '40px' }}>
            <ImageGallery items={galleryimg} infinite={false} showPlayButton={false} />
          </CCol>
        </CContainer>
        <CCol className="text-center" style={{ paddingBottom: '80px' }}>
          <CButton onClick={() => this.horsegalleryBtnClicked()} className="news-list-btn">
            목록
          </CButton>
        </CCol>
      </>
    )
  }
}
export default HorseGalleryView
