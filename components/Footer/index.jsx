'use client'

const pStyle = {
    marginBottom: 0,
    textAlign: 'center'
}

const Footer = () => {
  return (
    <footer className="footer mt-auto py-3 bg-dark text-white">
        <div className="container">
            <p style={pStyle}>&copy; 2023 RootVisual - Photography & Videography</p>
        </div>
    </footer>
  )
}

export default Footer