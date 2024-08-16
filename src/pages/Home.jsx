import NavBar from "../component/NavBar";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Home = () => {
    
    const [userList, setUserList] = useState([]);

    const [ pagination, setPagination ] = useState({
        currentPage: 1,
        totalPage: 0,
        nextPage: 0,
        previousPage: 0,
    });

    const navigate = useNavigate();

    const getUserList = () => {
        axios
        .get(`https://reqres.in/api/users`)
        .then((res) => {
            setUserList(res.data.data);
            console.log(res.data.data);
        })
        .catch((err) => {
            console.log(err.response);
        });
    };
    
    useEffect(() => {
        getUserList();
    }, []);

    return (
        <div>
            <NavBar />
            <h1>Ini Home</h1>
            {
                userList.map((user) => {
                    return (
                            <div className="bg-yellow-500">
                                <div className="flex flex-col text-white" key={user.id}>
                                <p>{user.first_name}</p>
                                <p>{user.last_name}</p>
                                <p>{user.email}</p>
                                <img width={200} height={200} className="align-middle" src={user.avatar} />
                                <button onClick={() => navigate(`/user-detail/${user.id}`)}>Detail</button>
                            </div>
                        </div>
                    );
                })  
            }
        </div>
    );
};

export default Home;