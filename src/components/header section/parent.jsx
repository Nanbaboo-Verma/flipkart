import { useState } from "react";

const Parent = () => {
    const [name, setName] = useState("");
    return (
        <div>
            {name}
            <br />
            <Child babu={name} updateName={(e) => setName(e)} />
        </div>
    );
};



const Child = ({ babu, updateName }) => {
    const [childName, setChildName] = useState("");
    return (
        <input
            type="text"
            value={childName}
            onChange={(e) => {
                setChildName(e.target.value);
                updateName(e.target.value);
            }}
        />
    );
};
export default Parent;