import React, { Component } from 'react'
import { CCol, CImage, CRow, CButton } from '@coreui/react'

const trainerslist = [
  {
    type: 1,
    name: '김코치',
    title: '원장',
    img: 'img/class1.jpg',
    career: [
      {
        id: 1,
        content: '전문스포츠 지도사 2급',
      },
      {
        id: 2,
        content: '패럴림픽 승마 국가대표 감독',
      },
      {
        id: 3,
        content: '대한승마협회 자격검정위원',
      },
      {
        id: 4,
        content: '대한승마협회 자격검정위원',
      },
    ],
    prize: [
      {
        id: 1,
        content: '전국단체승마대회 단체 1위',
      },
    ],
  },
  {
    type: 2,
    name: '이코치',
    title: '수석코치',
    img: 'img/class1.jpg',
    career: [
      {
        id: 1,
        content: '전문스포츠 지도사 2급',
      },
      {
        id: 2,
        content: '패럴림픽 승마 국가대표 감독',
      },
      {
        id: 3,
        content: '대한승마협회 자격검정위원',
      },
    ],
    prize: [
      {
        id: 1,
        content: '전국단체승마대회 단체 1위',
      },
      {
        id: 2,
        content: '전국승마선수권대회 중장애 1위',
      },
      {
        id: 3,
        content: '전국단체승마대회 단체 1위',
      },
      {
        id: 4,
        content: '전국단체승마대회 단체 1위',
      },
    ],
  },
  {
    type: 3,
    name: '박코치',
    title: '수석코치',
    img: 'img/class1.jpg',
    career: [
      {
        id: 1,
        content: '전문스포츠 지도사 2급',
      },
      {
        id: 2,
        content: '패럴림픽 승마 국가대표 감독',
      },
    ],
    prize: [
      {
        id: 1,
        content: '전국단체승마대회 단체 1위',
      },
      {
        id: 2,
        content: '전국승마선수권대회 중장애 1위',
      },
      {
        id: 3,
        content: '전국단체승마대회 단체 1위',
      },
    ],
  },
  {
    type: 4,
    name: '서코치',
    title: '수석코치',
    img: 'img/class1.jpg',
    career: [
      {
        id: 1,
        content: '전문스포츠 지도사 2급',
      },
      {
        id: 2,
        content: '패럴림픽 승마 국가대표 감독',
      },
      {
        id: 3,
        content: '대한승마협회 자격검정위원',
      },
      {
        id: 4,
        content: '대한승마협회 자격검정위원',
      },
    ],
    prize: [
      {
        id: 1,
        content: '전국단체승마대회 단체 1위',
      },
      {
        id: 2,
        content: '전국승마선수권대회 중장애 1위',
      },
      {
        id: 3,
        content: '전국단체승마대회 단체 1위',
      },
      {
        id: 4,
        content: '전국단체승마대회 단체 1위',
      },
    ],
  },
]

class Trainers extends Component {
  constructor(props) {
    super(props)
    this.state = {
      index: 0,
      trainerslist: trainerslist,
      type: trainerslist.type,
      trainerType: 1,
    }
  }

  trainerslistData = () => {
    let list = JSON.parse(JSON.stringify(trainerslist))

    const trainertype = this.state.trainerType

    var newList = []
    const type = this.state.type

    for (let index = 0; index < list.length; index++) {
      //반복문
      const element = list[index]
      if (trainertype == 1 && element.type == 1) {
        newList.push(element)
      } else if (trainertype == 2 && element.type == 2) {
        newList.push(element)
      } else if (trainertype == 3 && element.type == 3) {
        newList.push(element)
      } else if (trainertype == 4 && element.type == 4) {
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
            height: '170px',
            width: '100%',
            padding: 0,
            margin: 0,
          }}
        >
          <h2 style={{ paddingTop: '48px', fontSize: '30px', color: '#fff' }}>
            <span style={{ fontWeight: '200', fontSize: '18px' }}>타임하이브 승마클럽</span>
            <br />
            <span style={{ fontWeight: '700' }}>클럽소개</span>
          </h2>
        </CCol>
        <CCol>
          <h1
            className="text-center"
            style={{ marginTop: '50px', color: '#141414', fontWeight: 600 }}
          >
            코치소개
          </h1>
          <p className="sub-p-m text-center">타임하이브는 최고의 전문가로 구성되어 있습니다.</p>
        </CCol>
        <CCol
          className="text-center m-category-btn"
          style={{ marginTop: '20px', color: '#141414' }}
        >
          <CButton
            xs="3"
            className={`trainer-btn-m ${
              this.state.trainerType == 1 ? 'btn-outline-info' : 'btn-info'
            }`}
            onClick={() => this.setState({ trainerType: 1 })}
          >
            김코치<span style={{ fontSize: '14px', paddingLeft: '6px' }}>원장</span>
          </CButton>

          <CButton
            xs="3"
            className={`trainer-btn-m ${
              this.state.trainerType == 2 ? 'btn-outline-info' : 'btn-info'
            }`}
            onClick={() => this.setState({ trainerType: 2 })}
          >
            이코치<span style={{ fontSize: '14px', paddingLeft: '6px' }}>수석코치</span>
          </CButton>

          <CButton
            xs="3"
            className={`trainer-btn-m ${
              this.state.trainerType == 3 ? 'btn-outline-info' : 'btn-info'
            }`}
            onClick={() => this.setState({ trainerType: 3 })}
          >
            박코치<span style={{ fontSize: '14px', paddingLeft: '6px' }}>수석코치</span>
          </CButton>

          <CButton
            xs="3"
            className={`trainer-btn-m ${
              this.state.trainerType == 4 ? 'btn-outline-info' : 'btn-info'
            }`}
            onClick={() => this.setState({ trainerType: 4 })}
          >
            서코치<span style={{ fontSize: '14px', paddingLeft: '6px' }}>수석코치</span>
          </CButton>
        </CCol>
        <CRow>
          {this.trainerslistData().map((item, index) => (
            <CCol key={item.index} style={{ padding: '14px 10px 10px 10px', margin: '16px 0px' }}>
              <CCol className="text-center">
                <CImage src={item.img} alt="trainers" Width="auto" Height="300px" />
              </CCol>
              <CCol className="text-center" style={{ padding: '22px 14px 14px 14px' }}>
                <h1
                  style={{
                    color: '#141414',
                    backgroundColor: '#f8f8f8',
                    display: 'inline',
                    padding: '4px 10px',
                    borderRadius: '10px',
                  }}
                >
                  {item.name}
                  <span style={{ fontSize: '18px' }}>{item.title}</span>
                </h1>
                <CCol style={{ paddingTop: '22px' }}>
                  {item.career.map((careerItem, careerIndex) => (
                    <h6 key={careerItem.index} style={{ color: '#141414', fontWeight: 400 }}>
                      {careerItem.content}
                    </h6>
                  ))}
                </CCol>
                <CCol style={{ paddingTop: '40px' }}>
                  <h5
                    style={{
                      color: '#141414',
                      backgroundColor: '#f8f8f8',
                      display: 'inline',
                      padding: '4px 10px',
                      borderRadius: '10px',
                    }}
                  >
                    입상내역
                  </h5>
                  <CCol style={{ paddingTop: '20px' }}>
                    {item.prize.map((prizeItem, prizeIndex) => (
                      <h6 key={prizeItem.index} style={{ color: '#141414', fontWeight: 400 }}>
                        {prizeItem.content}
                      </h6>
                    ))}
                  </CCol>
                </CCol>
              </CCol>
            </CCol>
          ))}
        </CRow>
      </>
    )
  }
}
export default Trainers
