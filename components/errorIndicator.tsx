
export default function ErrorIndicator
    ({ title = "Something went wrong !", subtitle = "We're sorry for this, please try again later" }: { title?: string, subtitle?: string }) {
    return (
        <div className="flex items-center justify-center flex-col  p-10" >

            <p className="text-black text-center text-lg font-black">{title}</p>
            <p className=" text-center">{subtitle}</p>
        </div>
    )
}