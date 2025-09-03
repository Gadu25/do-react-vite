function Header({children}) {
  return (
    <>
      <div className="header">
        <div className="header-content">
          <div className="logo">Do React✨</div>
          {children}
        </div>
      </div>
    </>
  )
}

export default Header;