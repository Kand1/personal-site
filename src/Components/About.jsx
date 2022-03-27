import "./../Projects.css"
import "./../About.css"
import "./../App.css"
import src1 from "../assets/social-network.jpg";
import src2 from "../assets/table-test.jpg";
import src3 from "../assets/src3.jpg";
import {Project} from "./Projects";
import {Element} from "react-scroll";


const text1 = "The main project where i was learning React and other libraries that you may find in the 'Technologies' section"
const text2 = "A small test task i made for city-mobil. Dynamic table where you can filter cars by field or by key word." +
    " Content of the table parses from JSON"
const text3 = "Table with currency exchange rates. You can click on any currency to see changes for 10 days period." +
    "Api: https://www.cbr-xml-daily.ru/"


export const ImgAndSpan = (props) => {
    return (
        <li>
            <img src = {props.src} className="Content__about-me__img"/>
            <span className="Content__about-me">
                {props.text}
            </span>
        </li>
    )
}

export const RowOfSpans = (props) => {
    let spans = props.spans.map(text => <li className="Content__about-me_background">{text}</li>)
    return (
            <ul className="Content__about-me_list">
                {spans}
            </ul>
    )
}

export const About = (props) => {
    return(
        <div className = "Content">
            <Element name="About_me">
                <div className = "Content__header">
                    ウラド
                </div>
            </Element>
            <ul className="Content__about-me">
                <ImgAndSpan
                    text = "Volodin Vlad"
                    src = "https://twemoji.maxcdn.com/2/72x72/1f9d1.png"
                />
                <ImgAndSpan
                    text = "Russia, Moscow"
                    src = "https://twemoji.maxcdn.com/2/svg/1f4cd.svg"
                />
                <ImgAndSpan
                    text = "Frontend Developer"
                    src = "https://twemoji.maxcdn.com/2/72x72/1f4bb.png"
                />
                <ImgAndSpan
                    text = "volodin.vlad.01@mail.ru"
                    src = "https://twemoji.maxcdn.com/2/svg/1f4e8.svg"
                />
                <ImgAndSpan
                    text = "Telegram: @Kand111"
                    src = "https://twemoji.maxcdn.com/2/svg/1f4e8.svg"
                />
            </ul>

            <div className="Content__about-me_h" >
                About me
            </div>

            <div className="Content__about-me">
                Currently studying Software Engineering ( 3rd course of Developing Software for Computers and Automation Systems ) in Bauman Moscow State Technical University.
                There I've studied algorithms, data structures, data bases (PostgreSQL), C and C++ languages, OOP.
                <p/>
                I've studied JS / HTML / CSS / ReactJS / Redux on my own.
                I used all these technologies in my main project, that you can find in the 'Projects' section.

            </div>

            <div className="Content__about-me_h" >
                Technologies
            </div>
            <div className="Content__about-me">
                <div className="Content__about-me_str-item">
                <span className="Content__about-me_p" >
                    Languages:
                </span>
                    <RowOfSpans spans = {["JS", "TS", "HTML", "CSS", "SCSS"]}/>
                </div>

                <div className="Content__about-me_str-item">
                <span className="Content__about-me_p" >
                    Also worked with:
                </span>
                    <RowOfSpans spans = {["Python3", "C/C++"]}/>
                </div>

                <div className="Content__about-me_str-item">
                <span className="Content__about-me_p" >
                    JS libraries i worked with:
                </span>
                    <RowOfSpans spans = {["React", "redux", "react-redux",  "axios", "react-router-dom", "redux-thunk", "react-final-form", "react-tooltip"]}/>
                </div>
            </div>
            <Element name="Projects">
                <div className="Content__about-me_h" >
                    Projects
                </div>
            </Element>
                <div className="Content__projects">
                    <Project
                        name = "So-called social network"
                        src = {src1}
                        text = {text1}
                        git = {"https://github.com/Kand1/Learn_React"}
                        deploy = {"https://kand1.github.io/Learn_React/"}
                    />
                    <Project
                        name = "Simple test task"
                        src = {src2}
                        text = {text2}
                        git = {"https://github.com/Kand1/city-mobil-test-case"}
                        deploy = {"https://kand1.github.io/city-mobil-test-case/"}
                    />
                    <Project
                        name = "Exchange rate table"
                        src = {src3}
                        text = {text3}
                        git = {"https://github.com/Kand1/exchange-rates-table"}
                        deploy = {"https://kand1.github.io/exchange-rates-table/"}
                    />
                </div>


        </div>

    );
}