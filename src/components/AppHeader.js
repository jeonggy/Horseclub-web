import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import {
  CContainer,
  CHeader,
  CHeaderBrand,
  CHeaderNav,
  CNavLink,
  CNavItem,
  CDropdown,
  CDropdownToggle,
  CDropdownMenu,
  CDropdownItem,
} from '@coreui/react'

function tabActive(key, key2, key3) {
  var address = window.location.href

  var array = address.split('/')
  // alert(array.lastItem + '/' + array.lastItem.length + '/' + key.length)
  if (array.lastItem.length == 0 && key.length == 0) {
    return true
  }
  if (array.lastItem == key || array.lastItem == key2 || array.lastItem == key3) {
    return true
  } else {
    return false
  }
}
function introduceBtnClicked() {
  document.location.href = '#/introduce'
  window.scrollTo(0, 0)
}
function programBtnClicked() {
  document.location.href = '#/program'
  window.scrollTo(0, 0)
}
function horsegalleryBtnClicked() {
  document.location.href = '#/horsegallery'
  window.scrollTo(0, 0)
}
function noticeBtnClicked() {
  document.location.href = '#/notice'
  window.scrollTo(0, 0)
}

const AppHeader = () => {
  const dispatch = useDispatch()
  const sidebarShow = useSelector((state) => state.sidebarShow)

  return (
    <CHeader position="sticky" className="mb-4" style={{ minWidth: '1280px' }}>
      <CContainer>
        <CHeaderBrand href="#/">
          <img
            src="/img/logo.png"
            alt=""
            width="150"
            height="58"
            className="d-inline-block align-top"
          />
        </CHeaderBrand>
        <CHeaderNav className="justify-content-end">
          <CNavItem>
            <CNavLink href="#/" className={tabActive('') ? 'nav-link-active' : ''}>
              Home
            </CNavLink>
          </CNavItem>
          <CDropdown variant="nav-item">
            <div
              onClick={() => introduceBtnClicked()}
              className={`h-btn-w ${
                tabActive('introduce', 'horseriding', 'trainers', 'map') ? 'nav-link-active' : ''
              }`}
            >
              클럽소개
            </div>

            <CDropdownMenu>
              <div className="dropdown-menu-border">
                <CDropdownItem href="#/introduce">인사말</CDropdownItem>
                <CDropdownItem href="#/horseriding">클럽시설</CDropdownItem>
                <CDropdownItem href="#/trainers">코치소개</CDropdownItem>
                <CDropdownItem href="#/map">오시는길</CDropdownItem>
              </div>
            </CDropdownMenu>
          </CDropdown>
          <CDropdown variant="nav-item">
            <div
              onClick={() => programBtnClicked()}
              className={`h-btn-w ${tabActive('program', 'guide') ? 'nav-link-active' : ''}`}
            >
              프로그램
            </div>

            <CDropdownMenu>
              <div className="dropdown-menu-border">
                <CDropdownItem href="#/program">프로그램 소개</CDropdownItem>
                <CDropdownItem href="#/guide">이용안내</CDropdownItem>
              </div>
            </CDropdownMenu>
          </CDropdown>
          <CDropdown variant="nav-item">
            <div
              onClick={() => horsegalleryBtnClicked()}
              className={`h-btn-w ${
                tabActive('horsegallery', 'classgallery') ? 'nav-link-active' : ''
              }`}
            >
              클럽갤러리
            </div>
            <CDropdownMenu>
              <div className="dropdown-menu-border">
                <CDropdownItem href="#/horsegallery">승마갤러리</CDropdownItem>
                <CDropdownItem href="#/classgallery">체험갤러리</CDropdownItem>
              </div>
            </CDropdownMenu>
          </CDropdown>
          <CDropdown variant="nav-item">
            <div
              onClick={() => noticeBtnClicked()}
              className={`h-btn-w ${tabActive('notice', 'news') ? 'nav-link-active' : ''}`}
            >
              커뮤니티
            </div>
            <CDropdownMenu>
              <div className="dropdown-menu-border">
                <CDropdownItem href="#/notice">공지사항</CDropdownItem>
                <CDropdownItem href="#/news">클럽뉴스</CDropdownItem>
              </div>
            </CDropdownMenu>
          </CDropdown>
        </CHeaderNav>
      </CContainer>
    </CHeader>
  )
}

export default AppHeader
