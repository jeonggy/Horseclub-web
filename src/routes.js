import React from 'react'

const Home = React.lazy(() => import('./horseclub/web/Home'))
const Introduce = React.lazy(() => import('./horseclub/web/Introduce'))
const Guide = React.lazy(() => import('./horseclub/web/Guide'))
const HorseRiding = React.lazy(() => import('./horseclub/web/HorseRiding'))
const ClubMap = React.lazy(() => import('./horseclub/web/map/ClubMap'))
const Program = React.lazy(() => import('./horseclub/web/Program'))
const HorseGallery = React.lazy(() => import('./horseclub/web/HorseGallery'))
const ClassGallery = React.lazy(() => import('./horseclub/web/ClassGallery'))
const Notice = React.lazy(() => import('./horseclub/web/Notice'))
const News = React.lazy(() => import('./horseclub/web/News'))
const Trainers = React.lazy(() => import('./horseclub/web/Trainers'))
const NoticeView = React.lazy(() => import('./horseclub/web/NoticeView'))
const NewsView = React.lazy(() => import('./horseclub/web/NewsView'))
const HorseGalleryView = React.lazy(() => import('./horseclub/web/HorseGalleryView'))
const ClassGalleryView = React.lazy(() => import('./horseclub/web/ClassGalleryView'))

const routes = [
  { path: '/classgalleryview', name: 'ClassGalleryView', component: ClassGalleryView },
  { path: '/horsegalleryview', name: 'HorseGalleryView', component: HorseGalleryView },
  { path: '/newsview', name: 'NewsView', component: NewsView },
  { path: '/noticeview', name: 'NoticeView', component: NoticeView },
  { path: '/trainers', name: 'Trainers', component: Trainers },
  { path: '/guide', name: 'Guide', component: Guide },
  { path: '/horseriding', name: 'HorseRiding', component: HorseRiding },
  { path: '/map', name: 'ClubMap', component: ClubMap },
  { path: '/program', name: 'Program', component: Program },
  { path: '/horsegallery', name: 'HorseGallery', component: HorseGallery },
  { path: '/classgallery', name: 'ClassGallery', component: ClassGallery },
  { path: '/notice', name: 'Notice', component: Notice },
  { path: '/news', name: 'News', component: News },
  { path: '/introduce', name: 'Introduce', component: Introduce },
  { path: '/', exact: false, name: 'Home', component: Home },
]

export default routes
