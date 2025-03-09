
export interface ISectionTitleProps {
    title: string,
    subtitle?: string,
}
export default function SectionTitle(props: ISectionTitleProps) {
    return (
        <div className="flex  flex-col gap-0 w-full">
            <h4 className=" w-full font-medium text-black text-3xl"> {props.title}</h4>
            {props.subtitle && <p className="w-full md:max-w-3xl msm:max-w-full text-secondary"> {props.subtitle}</p>}
        </div>
    )
}