import React from 'react'
import MobileContent from '../components/MobileContent'
import MobileAppHeader from '../components/MobileAppHeader'
import MobileAppFooter from '../components/MobileAppFooter'

const MobileDefaultLayout = () => {
  return (
    <div>
      <div>
        <MobileAppHeader />
        <div>
          <MobileContent />
        </div>
        <MobileAppFooter />
      </div>
    </div>
  )
}

export default MobileDefaultLayout
