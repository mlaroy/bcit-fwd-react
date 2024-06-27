const Footer = ({ copyright, author }) => {
  return (
    <footer>
        <p>&copy; {copyright} {author}</p>
    </footer>
  )
}

Footer.defaultProps = {
  copyright: new Date().getFullYear()
}

export default Footer
