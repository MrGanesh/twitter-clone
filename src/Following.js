import React, { useState, useEffect } from "react";
import "./Followers.css";

function Following() {
    const [dataFollowing, setDataFollowing] = useState('')
    const user = JSON.parse(localStorage.getItem('user'))

    useEffect(() => {
        fetch("https://twitter-clone-fullstack.herokuapp.com/myfollowings", {
            method: "get",
            headers: {
                "Content-Type": "application/json",
                Authorization: "Bearer " + localStorage.getItem("token")
            }
        })
            .then(res => res.json())
            .then(data => {
                console.log("following", data);
                setDataFollowing(data.result);
            });
    }, []);
    let userEmail = [];

    return (
        <div className='follow-main'>
            {
                dataFollowing ? (
                    <>
                        {
                            dataFollowing.map(item => (
                                <div className='followers'>
                                    <img src='https://i2.cinestaan.com/image-bank/1500-1500/140001-141000/140489.jpg' alt='' />
                                    <div>
                                        <h4> {item.name}</h4>
                                        {
                                            userEmail = item.email.split("@")
                                        }
                                        <p> {userEmail ? userEmail[0] : null}  </p>
                                    </div>
                                </div>
                            ))
                        }

                    </>
                ) : (
                    <div className='followers'>
                        <h3> NO followers in your list </h3>
                    </div>
                )
            }


        </div>
    )
}

export default Following