import { Shantell_Sans } from "next/font/google"

export interface ISectionTitleProps {
    title: string,
    subtitle?: string,
}
const shantell_sans = Shantell_Sans({
    weight: ['500'],
    subsets: ['latin'],
})

export default function SectionTitle(props: ISectionTitleProps) {
    return (
        <div className="flex  flex-col gap-0 w-full">
            <h4 className=" w-full font-medium text-primary text-3xl" style={shantell_sans.style}> {props.title}</h4>
            {props.subtitle && <p className="w-full md:max-w-3xl msm:max-w-full text-white"> {props.subtitle}</p>}
        </div>
    )
}