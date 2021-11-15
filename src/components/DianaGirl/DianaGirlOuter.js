import React from 'react';
import "./DianaGirl.css";
import l from "./img/left.png";
import r from "./img/right.png";
import w from "./img/wonder.png";
import s from "./img/sword.png";
import b from "./img/black.png";
import bl from "./img/blue.png";
import f from "./img/fur.png";
import d from "./img/down.png";
import c from "./img/coat.png";
import DianaGirlInner from "./DianaGirlInner";

export default class DianaGirlOuter extends React.Component {

    constructor(props) {
        super(props);

        this.state={
            select_dress: 0,
            select_back: 0,
            dress: [],
            dress_summer: [
                {name: "none", imgSrc: null, },
                {name: "wonder", imgSrc: w, },
                {name: "black", imgSrc: b, },
                {name: "blue", imgSrc: bl, }
            ],
            dress_winter:[
                {name: "none", imgSrc: null, },
                {name: "fur", imgSrc: f, },
                {name: "coat", imgSrc: c, },
                {name: "down", imgSrc: d, }
            ],
            select_armor: [],
            armor: [
                {name: "left", imgSrc: l,  },
                {name: "right", imgSrc: r,  },
                {name: "sword", imgSrc: s,  },
            ],
            back: [
                {name: "none", hash: "#f9f9ff"},
                {name: "sunrise", hash: "#ffccbb"},
                {name: "eye", hash: "#5eb5c0"},
                {name: "candy", hash: "#fa6775"}
            ]

        }
    }

 changeDress(el) {
     console.log("start change dress");
     this.setState({select_dress: el.target.getAttribute('data-dressindex')});

 }
 changeBack(el){
    // console.log("start Change Dress");
    // console.log(el.target.getAttribute('data-dressindex'));
    this.setState({select_back: el.target.getAttribute('data-backindex')});
}
    changeArmor(el){
        //console.log(el.target.getAttribute('data-armorindex'));
        let index = el.target.getAttribute('data-armorindex');
        let select_armor = this.state.select_armor;
        select_armor = select_armor.includes(index)
            ? select_armor.filter(a => a!== index)
            :[...select_armor, index];

        this.setState({select_armor: select_armor});
    }

 render() {

    if(this.props.set.name === "summer") {
        this.state.dress = this.state.dress_summer
    } else {
        this.state.dress  = this.state.dress_winter
    }
    return(

        <section className="row">
            <ul className="col-2" id="lstDress">
                {
                    this.state.dress.map((dress, index) =>

                        <li class='box' data-dressindex={index} key={'dress_num' + index} onClick={this.changeDress.bind(this)}>
                            {dress.name}
                            <img src={dress.imgSrc} data-dressindex={index}  />
                        </li>
                    )
                }
            </ul>

            <DianaGirlInner dress={this.state.dress[this.state.select_dress]}
                            armor={this.state.armor}
                            select_armor={this.state.select_armor}
                            back={this.state.back[this.state.select_back]}
            ></DianaGirlInner>
            <ul className="col-2" id="lstArmor">
                {
                    this.state.armor.map((armor, index) =>

                        <li class='box' data-armorindex={index} key={'armor_num' + index} onClick={this.changeArmor.bind(this)}>
                            {armor.name}
                            <img src={armor.imgSrc} data-armorindex={index}  />
                        </li>
                    )
                }
            </ul>
            <ul className="col-3" id="lstBack">
                    {
                       this.state.back.map(  (back, index) =>
                       <li class='box' data-backindex={index} key={'back_num_' + index} onClick={this.changeBack.bind(this)}>
                           {back.name}
                           <div back={back.hash} className="colorBlock" style={{'background': `${back.hash}`}} data-backindex={index}></div>
                       </li>
                   ) 
                    }
            </ul>
        </section>
    )
}


}