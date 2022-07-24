import React, { Component } from 'react'
import { CCol, CContainer, CButton } from '@coreui/react'
import ImageGallery from 'react-image-gallery'

const clubimglist = [
  {
    type: 1,
    title: '실내 승마장',
    img: [
      {
        original: 'img/class2.jpg',
        thumbnail: 'img/class2.jpg',
      },
      {
        original: 'img/class2.jpg',
        thumbnail: 'img/class2.jpg',
      },
      {
        original: 'img/class3.jpg',
        thumbnail: 'img/class3.jpg',
      },
    ],
  },
  {
    type: 2,
    title: '실외 승마장',
    img: [
      {
        original: 'img/class1.jpg',
        thumbnail: 'img/class1.jpg',
      },
      {
        original: 'img/class1.jpg',
        thumbnail: 'img/class1.jpg',
      },
      {
        original: 'img/class3.jpg',
        thumbnail: 'img/class3.jpg',
      },
    ],
  },
]

class HorseRiding extends Component {
  constructor(props) {
    super(props)
    this.state = {
      index: 0,
      clubimglist: clubimglist,
      type: clubimglist.type,
      clubimgType: 1,
    }
  }

  clubimglistData = () => {
    let list = JSON.parse(JSON.stringify(clubimglist))

    const clubimgtype = this.state.clubimgType

    var newList = []
    const type = this.state.type

    for (let index = 0; index < list.length; index++) {
      //반복문
      const element = list[index]
      if (clubimgtype == 1 && element.type == 1) {
        newList.push(element)
      } else if (clubimgtype == 2 && element.type == 2) {
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
            <span style={{ fontWeight: '700' }}>클럽소개</span>
          </h2>
        </CCol>
        <CContainer>
          <CCol>
            <h1 className="text-center" style={{ marginTop: '130px', color: '#141414' }}>
              클럽시설
            </h1>
          </CCol>
          <CCol className="text-center" xs="12" style={{ marginTop: '50px', color: '#141414' }}>
            <CButton
              xs="6"
              className={`horseriding-btn-w ${
                this.state.clubimgType == 1 ? 'btn-outline-info' : 'btn-info'
              }`}
              onClick={() => this.setState({ clubimgType: 1 })}
            >
              실내 승마장
            </CButton>
            <CButton
              xs="6"
              className={`horseriding-btn-w ${
                this.state.clubimgType == 2 ? 'btn-outline-info' : 'btn-info'
              }`}
              onClick={() => this.setState({ clubimgType: 2 })}
            >
              실외 승마장
            </CButton>
          </CCol>
          <CCol
            style={{
              margin: '50px 0px 120px 0px',
              padding: '50px 10px 40px 10px',
            }}
          >
            {this.clubimglistData().map((item, index) => (
              <CCol key={item.index}>
                <CCol className="text-center">
                  <ImageGallery
                    items={item.img}
                    infinite={false}
                    showPlayButton={false}
                    useTranslate3D={false}
                  />
                </CCol>
              </CCol>
            ))}
          </CCol>
        </CContainer>
      </>
    )
  }
}
export default HorseRiding
