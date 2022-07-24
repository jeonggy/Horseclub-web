import React, { Component } from 'react'
import {
  CCol,
  CImage,
  CContainer,
  CTable,
  CTableHead,
  CTableRow,
  CTableHeaderCell,
  CTableBody,
  CTableDataCell,
  CButton,
  CRow,
} from '@coreui/react'

const programlist = [
  {
    type: 1,
    title: '자마회원',
    content:
      '회원님들의 말이 편안한 환경에서 생활할 수 있도록 케어하며, 최상의 퍼포먼스를 유지할 수 있도록 트레이닝 합니다.',
    img1: 'img/mainbottom3.jpg',
    img2: 'img/mainbottom3.jpg',
    img3: 'img/mainbottom3.jpg',
    details: [
      {
        title: '레슨 및 트레이닝',
        content:
          '수석코치이상의 지정코치가 직접 말을 트레이닝하며, 회원님을 레슨합니다. (레슨은 필수입니다.)',
      },
      {
        title: '자마 위탁관리',
        content:
          '말이 편안한 환경에서 최상의 사료/건초를 섭취하며 생활할 수 있도록 하며 지속적으로 모니터링 합니다.',
      },
      {
        title: '특별 운영시간',
        content:
          '주중 7am, 8am, 자마회원 및 월회원 전용타임을 운영하여, 출근하시더라도 자주 기승하실 수 있도록 지원합니다.',
      },
    ],
  },
  {
    type: 2,
    title: '월회원',
    content:
      '회원님들의 말이 편안한 환경에서 생활할 수 있도록 케어하며, 최상의 퍼포먼스를 유지할 수 있도록 트레이닝 합니다.',
    img1: 'img/mainbottom3.jpg',
    img2: 'img/mainbottom3.jpg',
    img3: 'img/mainbottom3.jpg',
    details: [
      {
        title: '레슨 및 트레이닝',
        content:
          '수석코치이상의 지정코치가 직접 말을 트레이닝하며, 회원님을 레슨합니다. (레슨은 필수입니다.)',
      },
      {
        title: '자마 위탁관리',
        content:
          '말이 편안한 환경에서 최상의 사료/건초를 섭취하며 생활할 수 있도록 하며 지속적으로 모니터링 합니다.',
      },
      {
        title: '특별 운영시간',
        content:
          '주중 7am, 8am, 자마회원 및 월회원 전용타임을 운영하여, 출근하시더라도 자주 기승하실 수 있도록 지원합니다.',
      },
    ],
  },
  {
    type: 3,
    title: '쿠폰회원',
    content:
      '회원님들의 말이 편안한 환경에서 생활할 수 있도록 케어하며, 최상의 퍼포먼스를 유지할 수 있도록 트레이닝 합니다.',
    img1: 'img/mainbottom3.jpg',
    img2: 'img/mainbottom3.jpg',
    img3: 'img/mainbottom3.jpg',
    details: [
      {
        title: '레슨 및 트레이닝',
        content:
          '수석코치이상의 지정코치가 직접 말을 트레이닝하며, 회원님을 레슨합니다. (레슨은 필수입니다.)',
      },
      {
        title: '자마 위탁관리',
        content:
          '말이 편안한 환경에서 최상의 사료/건초를 섭취하며 생활할 수 있도록 하며 지속적으로 모니터링 합니다.',
      },
      {
        title: '특별 운영시간',
        content:
          '주중 7am, 8am, 자마회원 및 월회원 전용타임을 운영하여, 출근하시더라도 자주 기승하실 수 있도록 지원합니다.',
      },
    ],
  },
  {
    type: 4,
    title: '체험회원',
    content:
      '회원님들의 말이 편안한 환경에서 생활할 수 있도록 케어하며, 최상의 퍼포먼스를 유지할 수 있도록 트레이닝 합니다.',
    img1: 'img/mainbottom3.jpg',
    img2: 'img/mainbottom3.jpg',
    img3: 'img/mainbottom3.jpg',
    details: [
      {
        title: '레슨 및 트레이닝',
        content:
          '수석코치이상의 지정코치가 직접 말을 트레이닝하며, 회원님을 레슨합니다. (레슨은 필수입니다.)',
      },
      {
        title: '자마 위탁관리',
        content:
          '말이 편안한 환경에서 최상의 사료/건초를 섭취하며 생활할 수 있도록 하며 지속적으로 모니터링 합니다.',
      },
      {
        title: '특별 운영시간',
        content:
          '주중 7am, 8am, 자마회원 및 월회원 전용타임을 운영하여, 출근하시더라도 자주 기승하실 수 있도록 지원합니다.',
      },
    ],
  },
]

const classlist = [
  {
    id: 1,
    title: '초보 [1회]',
    explanation:
      '1. 안전교육 및 말 다루는 법, 기승자세(5분)\n2. 평보 방향 바꾸기, 정지(10분)\n3. 좌속보 10분, 경속보 10분, 평보 5분',
    minute: '소요시간 45분\n실내외마장',
  },
  {
    id: 2,
    title: '초보 [2-5회]',
    explanation: '평보 5분, 경속보 5분, 좌속보 5분, 평보 5분,\n경속보 10분, 좌속보 10분, 평보 5분',
    minute: '소요시간 45분\n실내외마장',
  },
  {
    id: 3,
    title: '중급 [6-10회]',
    explanation: '평보 5분, 경속보 15분, 좌속보 5분, 평보 5분,\n경속보 10분, 좌속보 10분, 평보 5분',
    minute: '소요시간 45분\n실내외마장',
  },
  {
    id: 4,
    title: '고급 [11회]',
    explanation: '평보 5분, 경속보 15분, 좌속보 5분, 평보 5분,\n좌속보 10분, 구보 5분, 평보 5분',
    minute: '소요시간 45분\n실내외마장',
  },
  {
    id: 5,
    title: '자유기승',
    explanation: '',
    minute: '소요시간 45분\n실내외마장',
  },
]

class ProgramClass extends Component {
  constructor(props) {
    super(props)
    this.state = {
      index: 0,
      classlist: classlist,
      programlist: programlist,
      type: programlist.type,
      programType: 1,
    }
  }

  programlistData = () => {
    let list = JSON.parse(JSON.stringify(programlist))

    const programtype = this.state.programType

    var newList = []
    const type = this.state.type

    for (let index = 0; index < list.length; index++) {
      //반복문
      const element = list[index]
      if (programtype == 1 && element.type == 1) {
        newList.push(element)
      } else if (programtype == 2 && element.type == 2) {
        newList.push(element)
      } else if (programtype == 3 && element.type == 3) {
        newList.push(element)
      } else if (programtype == 4 && element.type == 4) {
        newList.push(element)
      }
    }
    // alert(JSON.stringify(newList));
    return newList
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
            <span style={{ fontWeight: '700' }}>프로그램</span>
          </h2>
        </CCol>
        <CContainer>
          <CCol>
            <h1 className="text-center" style={{ marginTop: '130px', color: '#141414' }}>
              프로그램 소개
            </h1>
            <p className="sub-p text-center">타임하이브는 최고의 전문가로 구성되어 있습니다.</p>
          </CCol>
          <CCol className="text-center" xs="12" style={{ marginTop: '50px', color: '#141414' }}>
            <CButton
              xs="3"
              className={`trainer-btn-w ${
                this.state.programType == 1 ? 'btn-outline-info' : 'btn-info'
              }`}
              onClick={() => this.setState({ programType: 1 })}
            >
              자마회원
            </CButton>

            <CButton
              xs="3"
              className={`trainer-btn-w ${
                this.state.programType == 2 ? 'btn-outline-info' : 'btn-info'
              }`}
              onClick={() => this.setState({ programType: 2 })}
            >
              월회원
            </CButton>

            <CButton
              xs="3"
              className={`trainer-btn-w ${
                this.state.programType == 3 ? 'btn-outline-info' : 'btn-info'
              }`}
              onClick={() => this.setState({ programType: 3 })}
            >
              쿠폰회원
            </CButton>

            <CButton
              xs="3"
              className={`trainer-btn-w ${
                this.state.programType == 4 ? 'btn-outline-info' : 'btn-info'
              }`}
              onClick={() => this.setState({ programType: 4 })}
            >
              체험회원
            </CButton>
          </CCol>
          <CCol
            style={{
              backgroundColor: '#f8f8f8',
              margin: '80px 0px 10px 0px',
              padding: '50px 10px 40px 10px',
              borderRadius: '20px',
            }}
          >
            {this.programlistData().map((item, index) => (
              <CCol key={item.index}>
                <CCol className="text-center">
                  <h1 style={{ color: '#141414' }}>{item.title}</h1>
                  <p className="sub-p text-center" style={{ paddingBottom: '10px' }}>
                    {item.content}
                  </p>
                  <CCol style={{ padding: '10px' }}>
                    <CImage
                      xs="4"
                      src={item.img1}
                      alt="trainers"
                      Width="auto"
                      Height="270px"
                      style={{ padding: '20px' }}
                    />

                    <CImage
                      xs="4"
                      src={item.img2}
                      alt="trainers"
                      Width="auto"
                      Height="270px"
                      style={{ padding: '20px' }}
                    />

                    <CImage
                      xs="4"
                      src={item.img3}
                      alt="trainers"
                      Width="auto"
                      Height="270px"
                      style={{ padding: '20px' }}
                    />
                  </CCol>
                </CCol>
                <CCol
                  style={{
                    paddingTop: '60px',
                  }}
                >
                  {item.details.map((detailsItem, detailsIndex) => (
                    <CRow key={detailsItem.index}>
                      <CCol xs="3" style={{ paddingLeft: '60px' }}>
                        <h6 style={{ color: '#141414', fontWeight: 500, fontSize: '22px' }}>
                          {detailsItem.title}
                        </h6>
                      </CCol>
                      <CCol xs="9" style={{ padding: 0, paddingRight: '40px' }}>
                        <p style={{ fontSize: '20px', color: '#141414' }}>{detailsItem.content}</p>
                      </CCol>
                    </CRow>
                  ))}
                </CCol>
              </CCol>
            ))}
          </CCol>
        </CContainer>
        <CCol
          className="text-center"
          style={{
            paddingTop: '170px',
            paddingBottom: '30px',
          }}
        >
          <h1 style={{ paddingBottom: '10px', color: '#141414' }}>프로그램 교육</h1>
          <p className="sub-p">
            개인에 따라 다르지만 3개월 11회 기승 4단계 코스로
            <br />
            취미 레저승마를 가능하게 하는 실용 승마 교육
          </p>
        </CCol>
        <CContainer>
          <CCol
            style={{
              paddingTop: '10px',
              display: 'block',
              textAlign: 'center',
              paddingBottom: '40px',
            }}
          >
            <CCol
              style={{
                background: '#F8F8F8',
                padding: '50px 84px',
                margin: 20,
                borderRadius: '20px',
                display: 'inline-block',
                left: 0,
                top: 0,
              }}
            >
              <h1
                style={{
                  fontSize: '22px',
                  color: '#629F22',
                  justifyContent: 'center',
                  alignItems: 'center',
                  textAlign: 'center',
                  height: '100%',
                  display: 'flex',
                }}
              >
                몸과 마음을 치유하는
                <br />
                편안한 힐링승마
              </h1>
            </CCol>
            <CCol
              style={{
                textAlign: 'center',
                background: '#F8F8F8',
                padding: '50px 84px',
                margin: 20,
                borderRadius: '20px',
                display: 'inline-block',
                left: 0,
                top: 0,
              }}
            >
              <h1
                style={{
                  fontSize: '22px',
                  color: '#22799F',
                  justifyContent: 'center',
                  alignItems: 'center',
                  textAlign: 'center',
                  height: '100%',
                  display: 'flex',
                }}
              >
                스트레스를 시원하게
                <br />
                풀어버리는 생활승마
              </h1>
            </CCol>
            <CCol
              style={{
                textAlign: 'center',
                background: '#F8F8F8',
                padding: '50px 84px',
                margin: 20,
                borderRadius: '20px',
                display: 'inline-block',
                left: 0,
                top: 0,
              }}
            >
              <h1
                style={{
                  fontSize: '22px',
                  color: '#FF9300',
                  justifyContent: 'center',
                  alignItems: 'center',
                  textAlign: 'center',
                  height: '100%',
                  display: 'flex',
                }}
              >
                ADHD 또는 장애인 치료에
                <br />
                응용한 재활승마 등
              </h1>
            </CCol>
          </CCol>
        </CContainer>
        <CContainer>
          <CCol style={{ marginTop: '50px' }}>
            <CTable align="middle">
              <CTableHead style={{ borderTop: '2px solid' }} className="table-club">
                <CTableRow align="middle" style={{ textAlign: 'center' }}>
                  <CTableHeaderCell colSpan="3" scope="col">
                    구분
                  </CTableHeaderCell>
                  <CTableHeaderCell colSpan="6" scope="col">
                    강습방법
                  </CTableHeaderCell>
                  <CTableHeaderCell colSpan="3" scope="col">
                    비고
                  </CTableHeaderCell>
                </CTableRow>
              </CTableHead>
              <CTableBody>
                {this.state.classlist.map((item, index) => (
                  <>
                    <CTableRow align="middle" key={item.index} hover>
                      <CTableDataCell
                        align="middle"
                        colSpan="3"
                        style={{ textAlign: 'center', fontWeight: 600 }}
                      >
                        {item.title}
                      </CTableDataCell>
                      <CTableDataCell
                        align="middle"
                        colSpan="6"
                        style={{ textAlign: 'center', whiteSpace: 'pre-line' }}
                      >
                        {item.explanation}
                      </CTableDataCell>
                      <CTableDataCell align="middle" colSpan="3" style={{ textAlign: 'center' }}>
                        {item.minute}
                      </CTableDataCell>
                    </CTableRow>
                  </>
                ))}
              </CTableBody>
            </CTable>
          </CCol>
          <CCol className="text-center" style={{ paddingTop: '40px', paddingBottom: '130px' }}>
            <p
              style={{
                color: '#141414',
                fontSize: '18px',
                backgroundColor: '#F8F9FA',
                display: 'inline-block',
                padding: '34px 50px',
                borderRadius: '10px',
              }}
            >
              상기 프로그램은 11회 쿠폰회원 기준이며 개인의 체력에 따라 다소 다를 수 있습니다.
              <br />* 기승시간은 적당한 운동량을 고려하여 45분을 원칙으로 합니다.
            </p>
          </CCol>
        </CContainer>
      </>
    )
  }
}
export default ProgramClass
