import Header from "../components/Header";
import Signup from "../components/Signup";

export default function SignupPage(){
    return(
        <>
 <div className="min-h-screen bg-gray-50 flex flex-col justify-center relative overflow-hidden sm:py-12" style={{backgroundColor:"grey"}}>     <div className="
 max-w-7xl mx-auto">

<div className='relative bg-white ring-1 ring-gray-900/5 rounded-lg leading-none items-top justify-start space-x-6' style={{width:"850px", height:"auto"}}>
            <div className="grid grid-cols-2 gap-4 flex items-center h-full">
            <div className="forSignUp toggle h-full flex justify-center items-center bg-teal-900 rounded-t">
           
            <Header
                heading="Hi!"
                paragraph="register with you personal details to access all feature"
                linkName=""
                linkUrl=""
                flag={true}
                />
            </div>
            <div className="px-7 py-6">
            <Header
              heading="Create an account"
              paragraph="Already have an account? "
              linkName="Login"
              linkUrl="/"
            />
            <Signup/>

            </div>
       
        </div>
        </div>
        </div>
        </div>
        </>
        
    )
}
