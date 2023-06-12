import { SectionTitle } from "@/app/sectionTitle/section-title"
import "./experience.scss"
import Image from "next/image"
export function Experience(){
    return(
        <div className='experience'>
        <SectionTitle text="Experience"/>
        <p>Third year student of a Technical Course in IFSul. I have worked for 4 months as Technical assistant fixing notebooks, desktops, printers and networks.</p>
        <div className="experience-time">
          <div>
            <div className="experience-language">
              <Image
                src="/js.svg"
                alt="JavaScript Logo"
                width={40}
                height={40}
                priority
              />
              <div className="experience-unit">
                <div className="experience-measure measure-3">
                  <span>3 years</span>
                </div>
              </div>
            </div>
            <div className="experience-language">
              <Image
                src="/php.svg"
                alt="PHP Logo"
                width={40}
                height={40}
                priority
              />
                <div className="experience-unit">
                <div className="experience-measure measure-1">
                  <span>1 year</span>
                </div>
              </div>
            </div>
            <div className="experience-language">
              <Image
                src="/java.svg"
                alt="Java Logo"
                width={40}
                height={40}
                priority
              />
                <div className="experience-unit">
                <div className="experience-measure measure-2">
                  <span>2 years</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
}
