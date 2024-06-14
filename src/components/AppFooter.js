import React from 'react'
import { CFooter,CAvatar } from '@coreui/react'
import CIcon from '@coreui/icons-react'
import tanstack from 'src/assets/images/logo/tanstack.png'
import vercel from 'src/assets/images/logo/vercel.png'
import coreui from 'src/assets/images/logo/coreui.png'
import { cilLeaf } from '@coreui/icons'




const AppFooter = () => {
  return (
    <CFooter className="px-4">
      <div>
       {/* <CIcon icon={cilMenu} size="lg" /> */}
        <a href="https://coreui.io" target="_blank" rel="noopener noreferrer">
          CanVerwalt
        </a>
        <span className="ms-1">&copy; 2024 avantGardeLabs.</span>
      </div>
      <div className="ms-auto">
        <span className="me-1">Powered by</span>
        <CAvatar size="md" src={coreui} />
        <a href="https://coreui.io/react" target="_blank" rel="noopener noreferrer">
          CoreUI React Admin &amp; Dashboard Template
        </a>
        <span className="me-1"> </span>
        {/* <CIcon icon={cilMenu} size="lg" /> */}
        <CAvatar size="md" src={vercel} />
        <a href="https://vercel.com" target="_blank" rel="noopener noreferrer">
          Vercel &amp; Deployment
        </a>
        <span className="me-1"> </span>
        {/* <CIcon icon={cilMenu} size="lg" /> */}
        <CAvatar size="md" src={tanstack} />
        <a href="https://tanstack.com/table/latest/" target="_blank" rel="noopener noreferrer">
          Tanstack &amp; Table
        </a>
      </div>
    </CFooter>
  )
}

export default React.memo(AppFooter)
