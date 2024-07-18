import Header from "../components/Header"
import Login from "../components/Login"

export default function LoginPage(){
    return(
        <>
        <div className="min-h-screen bg-gray-50 flex flex-col justify-center relative overflow-hidden sm:py-12" style={{backgroundColor:"grey"}}>
    <div className="
max-w-7xl mx-auto">

<div className='relative ring-1 ring-gray-900/5 rounded-lg leading-none items-top justify-start space-x-6' style={{width:"850px", height:"auto"}}>


        <div className="grid bg-white grid-cols-2 gap-4 flex items-center h-full">
            <div className="px-7 py-6">
             <Header
                heading="Login to your account"
                paragraph="Don't have an account yet? "
                linkName="Signup"
                linkUrl="/signup"
                />
            <Login/>
            </div>
            <div className="forSignIn toggle h-full flex justify-center items-center bg-teal-900 rounded-t">
            <Header
                heading="Welcome back!"
                paragraph="login with your credentials to access all feature"
                linkName=""
                linkUrl=""
                flag={true}
                />
            </div>
        </div>
        </div>
        </div>
        </div>
        </>
    )
}