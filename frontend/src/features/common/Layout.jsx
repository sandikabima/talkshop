import PromoBar from "@/shared/components/common/atom/PromoBar"
import Footer from "@/shared/components/common/organisms/Footer"
import Navbar from "@/shared/components/common/organisms/Navbar"
import { Outlet } from "react-router-dom"


const CommonLayout = () => {
    return (
        <>
            <PromoBar />
            <Navbar />
            <main>
                <Outlet />
            </main>
            <Footer />
        </>
    )
}

export default CommonLayout