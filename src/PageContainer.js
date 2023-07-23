import React from 'react'
function PageContainer({ title, children, className }) {
  return (
    <div className={className}>
      <br></br>
      <br></br>
      <header>{title}</header>
      <main>{children}</main>
    </div>
  )
}
export default PageContainer
