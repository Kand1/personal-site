import "./../Projects.css"
import "./../About.css"
import "./../App.css"
import src1 from "../assets/social-network.jpg"
import src2 from "../assets/table-test.jpg"


const text1 = "The main project where i was learning React and other libraries that you may find on page 'About me'"
const text2 = "A small test task i made for city-mobil. Dynamic table where you can filter cars by field or by key word." +
    " Content of the table parses from JSON"

const Project = (props) => {
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

export const Projects = (props) => {
    return(
        <div className = "Content_p">
            <div className="Content__projects">
                <Project
                    name = "So-called social network"
                    src = {src2}
                    text = {text1}
                    git = {"https://github.com/Kand1/Learn_React"}
                    deploy = {"https://kand1.github.io/personal-site/"}
                />
                <Project
                    name = "Simple test task"
                    src = {src2}
                    text = {text2}
                    git = {"https://github.com/Kand1/city-mobil-test-case"}
                    deploy = {"https://kand1.github.io/city-mobil-test-case/"}
                />
            </div>
        </div>
    );
}