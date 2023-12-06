const Header = ({ title, slogan }) => {
  return (
    <header>
        <h1>{title}</h1>
        <h2>{slogan}</h2>
    </header>
  )
}

Header.defaultProps = {
    title: 'My default App title',
    slogan: 'The default slogan'
}

export default Header
