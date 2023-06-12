interface infoProps{

}
import { SectionTitle } from "@/app/sectionTitle/section-title"
import "./information.scss"
export function Info() {
    return(
        <div className="infos">
        <SectionTitle text="Languages" />
        <div className="languages-info">
          <span>🇺🇸 EN - Advanced</span>
          <span>🇧🇷 PT-BR - Native Speaker</span>
        </div>
        <SectionTitle text="Education" />
        <div className="educational-info"></div>
        <span>🎓</span>
        <span>Informatics Technical Course - Instituto Federal Sul Riograndense of Charqueadas</span>
      </div>
    )
}