import Link from "next/link"

const linkStyle = {
  textDecoration: 'none'
}

const slashStyle = {
  margin: '0 .5rem'
}

const CustomBreadcrumb = ({firstLink, firstName, secondName}) => {
  if (secondName) return (
    <div>
      <Link href='/' style={linkStyle}>Home</Link> 
      <span style={slashStyle}>/</span>
      <Link href={`/${firstLink}`} style={linkStyle}>{firstName}</Link>
      <span style={slashStyle}>/</span>
      {secondName}
    </div>
  )

  return (
    <div>
      <Link href='/' style={linkStyle}>Home</Link>
      <span style={slashStyle}>/</span>
      {firstName}
    </div>
  )
}

export default CustomBreadcrumb