const Paragraph = ({ children, className = "" }) => {
    return (
        <p className={`text-base md:text-md text-gray-700 ${className}`}>{children}</p>
    )
}

export default Paragraph