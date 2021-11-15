import React from "react";
import "./DianaGirl.css";
import mainPhoto from "./img/diana.png";

export  default class DianaGirlInner extends React.Component {
    render() {
        let armor = (<ul className="dianaGirlPhoto" id="dianaGirlArmor">
            {
                this.props.select_armor.map ((armor_num, index) =>
                    <li
                        className="dianaGirlPhoto"
                        style={{'backgroundImage': `url(${this.props.armor[armor_num].imgSrc})` }}
                        key={'armor_' + index}>

                    </li>
                )
            }
        </ul>);

        return (
            <div className="col-2 dianaGirlPhoto" id="dianaGirlMain" style={{'background': `${this.props.back.hash}`}}>
                <div className="dianaGirlPhoto" id="dianaGirlMain"
                    style={{'backgroundImage': `url(${mainPhoto})` }}>
                    <div className="dianaGirlPhoto"  style={{'backgroundImage': `url(${this.props.dress.imgSrc})` }} >
                        {armor}
                    </div>
                </div>
            </div>
        )
    }

}