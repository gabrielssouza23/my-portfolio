import { GitIcon } from "../icons/github-icon";
import { LinkedInIcon } from "../icons/linkedin-icon";

import './social-btns.scss'

export function SocialBtns() {
    return(
        <div className="social">
            <a href="https://github.com/gabrielssouza23">
                <GitIcon/>
            </a> 
            <a href="https://www.linkedin.com/in/gabriel-de-souza-silva-7b706620b/">
                <LinkedInIcon/>
            </a>
        </div>
    )
}