
const AuthCard = ({ children }) => {
    return (
        <div className="mx-auto w-full max-w-md space-y-6 bg-white px-4 py-2 rounded-lg">
            <div className="text-center">
                {children}
            </div>
        </div>
    )
}

export default AuthCard