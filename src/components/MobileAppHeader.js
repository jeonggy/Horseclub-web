import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {
  CNavbar,
  CNavbarBrand,
  CNavLink,
  CNavItem,
  COffcanvas,
  COffcanvasHeader,
  CCloseButton,
  COffcanvasBody,
  CNavbarNav,
  CNavbarToggler,
  CCol,
  CRow,
} from '@coreui/react'

const MobileAppHeader = () => {
  const [visible, setVisible] = useState(false)
  const dispatch = useDispatch()
  const sidebarShow = useSelector((state) => state.sidebarShow)

  return (
    <CNavbar colorScheme="light" style={{ padding: '8px' }}>
      <CCol>
        <CRow className="row-st-none-header">
          <CCol>
            <CNavbarBrand href="#/">
              <img
                src="/img/logo.png"
                alt=""
                width="auto"
                height="42"
                className="d-inline-block align-top"
              />
            </CNavbarBrand>
          </CCol>
          <CCol style={{ textAlign: 'right' }}>
            <CNavbarToggler
              aria-controls="offcanvasNavbar"
              aria-label="Toggle navigation"
              onClick={() => setVisible(!visible)}
            />
          </CCol>
        </CRow>

        <COffcanvas
          id="offcanvasNavbar"
          placement="end"
          portal={false}
          visible={visible}
          onHide={() => setVisible(false)}
        >
          <COffcanvasHeader>
            <CCloseButton
              className="text-reset close-btn-header"
              onClick={() => setVisible(false)}
            />
          </COffcanvasHeader>
          <COffcanvasBody style={{ padding: 0 }}>
            <CNavbarNav className="justify-content-end">
              <CNavItem>
                <CNavLink className="nav-m-st" href="#/" onClick={() => setVisible(false)}>
                  Home
                </CNavLink>
              </CNavItem>
              <CNavItem>
                <CNavLink className="nav-m-st-s" href="#/" onClick={() => setVisible(false)}>
                  클럽소개
                </CNavLink>
              </CNavItem>
              <CNavItem>
                <CNavLink className="nav-m-st" href="#/introduce" onClick={() => setVisible(false)}>
                  인사말
                </CNavLink>
              </CNavItem>
              <CNavItem>
                <CNavLink
                  className="nav-m-st"
                  href="#/horseriding"
                  onClick={() => setVisible(false)}
                >
                  클럽시설
                </CNavLink>
              </CNavItem>
              <CNavItem>
                <CNavLink className="nav-m-st" href="#/trainers" onClick={() => setVisible(false)}>
                  코치소개
                </CNavLink>
              </CNavItem>
              <CNavItem>
                <CNavLink className="nav-m-st" href="#/map" onClick={() => setVisible(false)}>
                  오시는길
                </CNavLink>
              </CNavItem>
              <CNavItem>
                <CNavLink className="nav-m-st-s" href="#/map" onClick={() => setVisible(false)}>
                  프로그램
                </CNavLink>
              </CNavItem>
              <CNavItem>
                <CNavLink className="nav-m-st" href="#/program" onClick={() => setVisible(false)}>
                  프로그램 소개
                </CNavLink>
              </CNavItem>
              <CNavItem>
                <CNavLink className="nav-m-st" href="#/guide" onClick={() => setVisible(false)}>
                  이용안내
                </CNavLink>
              </CNavItem>
              <CNavItem>
                <CNavLink className="nav-m-st-s" href="#/guide" onClick={() => setVisible(false)}>
                  클럽갤러리
                </CNavLink>
              </CNavItem>
              <CNavItem>
                <CNavLink
                  className="nav-m-st"
                  href="#/horsegallery"
                  onClick={() => setVisible(false)}
                >
                  승마갤러리
                </CNavLink>
              </CNavItem>
              <CNavItem>
                <CNavLink
                  className="nav-m-st"
                  href="#/classgallery"
                  onClick={() => setVisible(false)}
                >
                  체험갤러리
                </CNavLink>
              </CNavItem>
              <CNavItem>
                <CNavLink className="nav-m-st-s" href="#/guide" onClick={() => setVisible(false)}>
                  커뮤니티
                </CNavLink>
              </CNavItem>
              <CNavItem>
                <CNavLink className="nav-m-st" href="#/notice" onClick={() => setVisible(false)}>
                  공지사항
                </CNavLink>
              </CNavItem>
              <CNavItem>
                <CNavLink className="nav-m-st" href="#/news" onClick={() => setVisible(false)}>
                  클럽뉴스
                </CNavLink>
              </CNavItem>
            </CNavbarNav>
          </COffcanvasBody>
        </COffcanvas>
      </CCol>
    </CNavbar>
  )
}

export default MobileAppHeader
