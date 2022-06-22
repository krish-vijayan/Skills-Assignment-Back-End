import React, { useState } from 'react';

function AllMembers(){
    const [ member, setMember ] = useState([]);

    const ApiGet = ()  => {
        fetch('http://localhost:8080/members')
        .then((response) => response.json())
        .then((json) => {
            setMember(json)
            console.log(json)

        });
    };
    
    return member;

}

export default AllMembers;