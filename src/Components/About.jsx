import "./../Projects.css"
import "./../About.css"
import "./../App.css"
import src1 from "../assets/social-network.jpg";
import src2 from "../assets/table-test.jpg";
import src3 from "../assets/src3.jpg";
import src4 from "../assets/friend-list.jpg";
import src5 from "../assets/product-list.jpg";
import src6 from "../assets/cryptocurrency-converter.jpg";
import src7 from "../assets/chess.jpg"
import src8 from "../assets/storybook.jpg"
import {Project} from "./Projects";
import {Element} from "react-scroll";


const text1 = "The first project where i was learning React, redux, react-redux and other libraries."
const text2 = "A small test task i made for city-mobil. Dynamic table where you can filter cars by field or by key word." +
    " Content of the table parses from JSON"
const text3 = "Table with currency exchange rates. You can click on any currency to see changes for 10 days period." +
    " Api: https://www.cbr-xml-daily.ru/"
const text4 = "Test web app for authorization with VK and Drag'n'Drop HTML api."
const text5 = "Product adding form with validation and product list with animations of filtering and deleting."
const text6 = "Cryptocurrency converter with graph of exchange rate for 2 week period."
const text7 = <div>Work in progress! <br/> Done: fully playable local 4 player chess. <br/> To do: make a modern UI using bootstrap, make an online version using firebase</div>
const text8 = "test npm ui module i made using storybook"



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
                I've studied JS / HTML / CSS / React / Vue / on my own.
                I used all these technologies in my projects, that you can find in the 'Projects' section.

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
                    <RowOfSpans spans = {["React", "Vue2", "redux", "react-redux", "redux toolkit", "vuex", "axios", "vuetify", "chart.js", "storybook"]}/>
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
                        name = "Four player chess"
                        src = {src7}
                        text = {text7}
                        git = {"https://github.com/Kand1/react-ts-chess"}
                        deploy = {"https://kand1.github.io/react-ts-chess"}
                    />
                    <Project
                        name = "Product list"
                        src = {src5}
                        text = {text5}
                        git = {"https://github.com/Kand1/product-list-test-case/"}
                        deploy = {"https://kand1.github.io/product-list-test-case/"}
                    />
                    <Project
                        name = "Storybook npm module"
                        src = {src8}
                        text = {text8}
                        git = {"https://github.com/Kand1/test-ui-npm-module"}
                        deploy = {"https://www.npmjs.com/package/test-ui-npm-module"}
                    />
                    <Project
                        name = "Cryptocurrency converter"
                        src = {src6}
                        text = {text6}
                        git = {"https://github.com/Kand1/cryptocurrency-converter-test-case"}
                        deploy = {"https://kand1.github.io/cryptocurrency-converter-test-case"}
                    />
                    <Project
                        name = "Friend list from VK"
                        src = {src4}
                        text = {text4}
                        git = {"https://github.com/Kand1/vue2-friend-list-test-case"}
                        deploy = {"https://kand1.github.io/vue2-friend-list-test-case/"}
                    />
                    <Project
                        name = "City mobile test task"
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
