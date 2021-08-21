import React from 'react'

export default function Footer() {
    let footerStyle={
        position:"relative",
        top:"100px"
    }
    return (
        <footer className="bg-dark text-light py-3 " style={footerStyle}>
            <p className="text-center">
            Copyright &copy; Swarup Das</p>
        </footer>
    )
}

