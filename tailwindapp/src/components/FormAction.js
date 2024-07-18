export default function FormAction({
    handleSubmit,
    type='Button',
    action='submit',
    text
}){
    return(
        <>
        {
            type==='Button' ?
            <button
                type={action}
                className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm text-white font-medium rounded-md bg-teal-900 hover:bg-teal-950 focus:outline-none focus:ring-2 focus:ring-offset-2  focus:ring-teal-900 mt-10"
                onClick={handleSubmit}
            >
                {text}
            </button>
            :
            <></>
        }
        </>
    )
}