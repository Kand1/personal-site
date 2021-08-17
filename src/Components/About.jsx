import {NavLink} from "react-router-dom";
import './../About.css';

const ImgAndSpan = (props) => {
    return (
        <li>
            <img src = {props.src} className="Content__about-me__img"/>
            <span className="Content__about-me">
                {props.text}
            </span>
        </li>
    )
}

const RowOfSpans = (props) => {
    let spans = props.spans.map(text => <div className="Content__about-me_background">{text}</div>)
    return (
            <div className="Content__about-me_inline">

                {spans}
            </div>
    )
}

export const About = (props) => {
    return(
        <div className = "Content">
            <div className = "Content__header">
                ウラド
            </div>
            <ul className="Content__about-me">
                <ImgAndSpan
                    text = "Volodin Vlad"
                    src = "https://twemoji.maxcdn.com/2/72x72/1f9d1.png"
                />
                <ImgAndSpan
                    text = "Software Developer"
                    src = "https://twemoji.maxcdn.com/2/72x72/1f4bb.png"
                />
                <ImgAndSpan
                    text = "Russia, Moscow"
                    src = "https://twemoji.maxcdn.com/2/svg/1f4cd.svg"
                />
                <ImgAndSpan
                    text = "volodin.vlad.01@mail.ru"
                    src = "https://twemoji.maxcdn.com/2/svg/1f4e8.svg"
                />
            </ul>

            <div className="Content__about-me_h" >
                About me
            </div>

            <div className="Content__about-me">
                I`m junior frontend developer.
                Currently studying Software Engineering (Developing Software for Computers and Automation Systems ) in Bauman Moscow State Technical University.
            </div>

            <div className="Content__about-me_h" >
                Technologies
            </div>
            <div className="Content__about-me_inline">
                <div className="Content__about-me_p" >
                    Languages:
                </div>
                <RowOfSpans spans = {["JS", "HTML", "CSS", "Python3", "c/c++"]}/>
            </div>

            <div className="Content__about-me">
                In my biggest pet-project on ReactJS i used:
                axios, react-router-dom, react-redux, redux-thunk,
                react-final-form. <br></br>
                Also, I was studying python3 and c/c++ in my university.
            </div>

        </div>

    );
}