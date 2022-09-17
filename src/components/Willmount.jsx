import axios from "axios";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import "./KidsFashion.css";
import Header from "./Header";
import SideBar from "./SideBar";

function KidsFashion() {
    let [item, setItem] = useState([]);
    useEffect(() => {
        let dataURL = `https://gist.githubusercontent.com/mrbehera2305/b2fd0ca38b402ac14dad851f8858f0ad/raw/02802475a3130c22bbc7b956934d19e3bd48b17d/kidsimg`;
        axios.get(dataURL).then((response) => {
            setItem(response.data)
        }).catch((error) => {
            console.log(error);
        })
    }, [])

    return (
        <React.Fragment>
            <Header />
            <div className="Main-div d-flex">
            <SideBar />
            <div className="row row-cols-1 row-cols-md-6 g-4 m-5 p-3 bg-light">
                {
                    item.map((data) => {
                        return (
                            <div className="col">
                                <div className="card for-hover">
                                    <img src={data.photo} className="card-img-top img-size" alt="..." />
                                    <div className="card-body">
                                        <p>Product Id:-{data.id}</p>
                                        <h5 className="card-title">{data.price}</h5>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
            </div>
            
            
        </React.Fragment>
    )
}
export default KidsFashion;