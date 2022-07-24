import React, { Component } from 'react'
import { CCol, CButton, CImage } from '@coreui/react'

class NoticeView extends Component {
  constructor(props) {
    super(props)
    this.state = {
      index: 0,
    }
  }

  noticeBtnClicked = () => {
    document.location.href = '#/notice'
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' })
  }

  render() {
    return (
      <>
        <CCol style={{ padding: '36px 14px 0px 14px' }}>
          <CCol>
            <p
              style={{
                fontWeight: 400,
                color: '#a3a3a3',
                marginBottom: '10px',
                fontSize: '18px',
                textAlign: 'center',
              }}
            >
              공지사항
            </p>
          </CCol>
          <CCol>
            <h2
              style={{
                fontWeight: 500,
                color: '#141414',
                fontSize: '30px',
                lineHeight: '38px',
                textAlign: 'center',
              }}
            >
              22년도 자격증반 모집
            </h2>
          </CCol>
          <CCol style={{ borderBottom: '0.5px solid #e4e4e4' }}>
            <p
              style={{
                fontWeight: 400,
                color: '#a3a3a3',
                marginBottom: '2px',
                fontSize: '16px',
                paddingBottom: '30px',
                textAlign: 'center',
              }}
            >
              2022.12.12
            </p>
          </CCol>
          <CCol style={{ paddingTop: '50px', paddingBottom: '30px' }}>
            <CImage className="d-block cover" src="/img/class3.jpg" alt="slide 1" Width="100%" />
          </CCol>
          <CCol style={{ borderBottom: '0.5px solid #e4e4e4' }}>
            <p
              style={{
                paddingTop: '10px',
                lineHeight: '28px',
                color: '#444',
                fontSize: '16px',
                letterSpacing: '-.4px',
                paddingBottom: '30px',
              }}
            >
              경진대회는 농식품 분야 공공·빅데이터를 활용한 아이디어와 비즈니스 모델 발굴을 목적으로
              진행하고 있다. 농식품부는 농림축산식품 공공데이터 포털에 528종의 공공데이터를 개방하고
              있으며 이를 활용한 새 서비스 개발을 추진 중이다.
            </p>
          </CCol>
        </CCol>
        <CCol className="text-center" style={{ paddingBottom: '20px' }}>
          <CButton onClick={() => this.noticeBtnClicked()} className="news-list-btn-m">
            목록
          </CButton>
        </CCol>
      </>
    )
  }
}

export default NoticeView
