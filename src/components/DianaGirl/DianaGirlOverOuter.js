import React from 'react';
import "./DianaGirl.css";
import DianaGirlOuter from "./DianaGirlOuter";

export default class DianaGirlOverOuter extends React.Component {

    constructor(props) {
        super(props);

        this.state={
            select_set: 0,
            set: [
                {name: "summer",},
                {name: "winter", },
            ]

        }
    }

    changeSet(el) {
        console.log("start change set");
        this.setState({select_set: el.target.getAttribute('data-setindex')});

    }

    render() {
        return(
            <section className="row">
                <ul className="col-2" id="lstSet">
                    {
                        this.state.set.map((set, index) =>

                            <li class='box' data-setindex={index} key={'set_num' + index} onClick={this.changeSet.bind(this)}>
                                {set.name}

                            </li>
                        )
                    }

                </ul>
                <DianaGirlOuter set={this.state.set[this.state.select_set]}

                ></DianaGirlOuter>
            </section>
        )
    }


}