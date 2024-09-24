import React from 'react'

const Footer = () => {
    return (
        <footer className="bg-yellow-600 text-white text-center p-4 mt-7 fixed bottom-0 w-full">
            &copy; {new Date().getFullYear()} My Church. All rights reserved.
        </footer>
    )
}

export default Footer