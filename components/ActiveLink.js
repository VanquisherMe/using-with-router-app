import { withRouter } from 'next/router'
import Link from 'next/link'
// typically you want to use `next/link` for this usecase
// but this example shows how you can also access the router
// using the withRouter utility.

const ActiveLink = ({ children, router, href }) => {
  console.log(router)
  const style = {
    marginRight: 10,
    color: router.pathname === href ? 'red' : 'black'
  }

  const handleClick = (e) => {
    e.preventDefault()
    router.push(href)
  }

  return (
    <Link href={href} >
      <a  style={style}>{children}</a> 
    </Link>
  )
}

export default withRouter(ActiveLink)
