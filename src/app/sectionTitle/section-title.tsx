import "./section-title.scss"
interface sectionTitleProps {
    text: string;
}
export function SectionTitle({ text }: sectionTitleProps) {
    return(
        <h3 className="section-title">{text}</h3>
    )
}