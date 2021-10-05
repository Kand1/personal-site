import "./../Projects.css"
import "./../About.css"
import "./../App.css"
import src1 from "../assets/social-network.jpg"
import src2 from "../assets/table-test.jpg"


export const Project = (props) => {
    return ( <div className="Content__projects__item">
            <div className="Content__projects__item__about_h">
                {props.name}
            </div>
            <img className="Content__projects__item__img" src = {props.src} />
            <div className="grid-for-help">
                <div className="Content__projects__item__about">
                    {props.text}
                </div>
                <div className="grid-for-help_a">
                    <a href = {props.git} className="Content__projects__item__about_link">
                        /git
                    </a>
                    <a href = {props.deploy} className="Content__projects__item__about_link">
                        /deploy
                    </a>
                </div>
            </div>

        </div>
    )
}
