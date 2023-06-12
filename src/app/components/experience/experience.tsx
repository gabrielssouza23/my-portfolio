import { SectionTitle } from "@/app/sectionTitle/section-title"
import "./experience.scss"
import Image from "next/image"
export function Experience(){
    return(
        <div className='experience'>
        <SectionTitle text="Experience"/>
        <p>3 years working as a Software Developer, in companys such as Itaú, Stone and Aftersale.</p>
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