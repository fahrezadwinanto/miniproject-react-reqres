import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import NavBar from "../component/NavBar";


const UserDetail = () => {
    const [user, setUser] = useState({});
    const [loading, setLoading] = useState(false);
    
    const { id } = useParams();

    const getUser = () => {
        setLoading(true);
        axios
        .get(`https://reqres.in/api/users/${id}`)
        .then((res) => {
            setUser(res.data.data);
        })
        .catch((err) => {
            console.log(err.response);
        })
        .finally(() => {
            setLoading(false);
        });
    };

    useEffect(() => {
        getUser();
    }, []);

    if (loading) {
        return <div>Loading...</div>
    }

    console.log(id);
    
    return (
        <div>
            <NavBar />
            <h1>User Detail</h1>
            <div className="text-white">{user.first_name}</div>
        </div>
    );
};

export default UserDetail;