import React, { Component } from 'react'
import {
  CCol,
  CInputGroup,
  CFormInput,
  CButton,
  CTable,
  CTableHead,
  CTableRow,
  CTableHeaderCell,
  CTableBody,
  CTableDataCell,
  CPagination,
  CPaginationItem,
} from '@coreui/react'

const noticelist = [
  { id: 1, title: '2022년도 자격증반 모집', date: '2022-12-12' },
  { id: 2, title: '설날 정상운영 안내', date: '2022-12-12' },
  { id: 3, title: '2022년도 정기반 모집', date: '2022-12-12' },
  { id: 4, title: '2022년도 기승반 모집', date: '2022-12-12' },
  { id: 5, title: '정기 점검일', date: '2022-12-12' },
  { id: 6, title: '3월 수업 안내', date: '2022-12-12' },
  { id: 7, title: '4월 수업 안내', date: '2022-12-12' },
  { id: 8, title: '5월 수업 안내', date: '2022-12-12' },
  { id: 9, title: '6월 수업 안내', date: '2022-12-12' },
  { id: 10, title: '7월 수업 안내', date: '2022-12-12' },
]

class Notice extends Component {
  constructor(props) {
    super(props)
    this.state = {
      index: 0,
      noticelist: noticelist,
    }
  }
  noticelistBtnClicked = () => {
    document.location.href = '#/noticeview'
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
        <CCol style={{ marginBottom: '50px', padding: '14px' }}>
          <CCol>
            <h1 className="text-center" style={{ marginTop: '36px', color: '#141414' }}>
              공지사항
            </h1>
          </CCol>
          <CCol style={{ marginTop: '50px', marginBottom: '20px' }}>
            <CCol className="float-right text-right">
              <CInputGroup row style={{ marginBottom: '16px' }} align="right">
                <CCol xs="7" className="float-right text-right">
                  <CFormInput className="input-css-m" placeholder="검색어를 입력해주세요" />
                </CCol>
                <CButton className="input-btn-css" type="submit">
                  <img src="img/search-g.png" width="26px" />
                </CButton>
              </CInputGroup>
            </CCol>
          </CCol>
          <CTable align="middle">
            <CTableHead style={{ borderTop: '2px solid' }}>
              <CTableRow align="middle" style={{ textAlign: 'center' }}>
                <CTableHeaderCell colSpan="1" scope="col" style={{ fontSize: '15px' }}>
                  No.
                </CTableHeaderCell>
                <CTableHeaderCell colSpan="9" scope="col" style={{ fontSize: '15px' }}>
                  제목
                </CTableHeaderCell>
                <CTableHeaderCell colSpan="2" scope="col" style={{ fontSize: '15px' }}>
                  작성일
                </CTableHeaderCell>
              </CTableRow>
            </CTableHead>
            <CTableBody>
              {this.state.noticelist.map((item, index) => (
                <CTableRow align="middle" key={item.name} hover style={{ cursor: 'pointer' }}>
                  <CTableHeaderCell
                    colSpan="1"
                    scope="row"
                    style={{
                      color: '#888',
                      textAlign: 'center',
                      paddingRight: '20px',
                      fontSize: '14px',
                    }}
                  >
                    {item.id}
                  </CTableHeaderCell>
                  <CTableDataCell
                    align="middle"
                    colSpan="9"
                    style={{ cursor: 'pointer', fontSize: '16px' }}
                    onClick={() => this.noticelistBtnClicked()}
                  >
                    {item.title}
                  </CTableDataCell>
                  <CTableDataCell
                    align="middle"
                    colSpan="2"
                    style={{ textAlign: 'center', color: '#888', fontSize: '14px' }}
                  >
                    {item.date}
                  </CTableDataCell>
                </CTableRow>
              ))}
            </CTableBody>
          </CTable>
          <CPagination
            aria-label="Page navigation example"
            align="center"
            style={{ marginTop: '50px', cursor: 'pointer' }}
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
      </>
    )
  }
}
export default Notice
