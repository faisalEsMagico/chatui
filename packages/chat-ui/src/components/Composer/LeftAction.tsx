import React, { FC } from 'react'

const LeftAction: FC<{ userName?: string }> = ({ userName }) => {
  console.log("user name:", { userName })
  const firstLetter = userName && userName?.trim()[0]?.toUpperCase();
  if (!userName) {
    return null
  }
  return (
    <div style={{ borderRadius: '50%', backgroundColor: "#4F378B", color: '#FFFFFF', padding: '7px 14px' }}>
      {firstLetter}
    </div>
  )
}

export default LeftAction