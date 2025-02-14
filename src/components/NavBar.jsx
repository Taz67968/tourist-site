// import { useNavigate } from "react-router";

function NavBar (){
    // const navigate = useNavigate()
    return(
        <>
        <div className="contianerone">
            <div className="na">
                <img src="\src\assets\images\Rectangle 645.png" alt="" />
                <div className="ma">
                    <a href="/">Home</a>
                    <a href="/About/">About</a>
                    <a href="/TourPackage">Tour package</a>
                    <a href="/Gallery/">Gallery</a>
                    <a href="#">Blog</a>
                    <a href="/ContactUS/">Contact US</a>
                </div>
            </div>
            <button>Sign In</button>
        </div>
        </>
    )
}

export default NavBar