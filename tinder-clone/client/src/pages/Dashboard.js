import TinderCard from "react-tinder-card";
import ChatContainer from "../components/ChatContainer";
import { useState, useEffect } from "react";
import { useCookies } from "react-cookie";
import axios from "axios";

export default function Dashboard() {
  const [user, setUser] = useState(null);
  const [genderedUsers, setGenderedUsers] = useState(null);
  const [cookies, setCookie, removeCookie] = useCookies(["user"]);
  const userId = cookies.UserId;
  const getUser = async () => {
    try {
      const response = axios.get("http://localhost:8080/user", {
        params: { userId },
      });
      setUser(response.data);
    } catch (err) {
      console.log(err);
    }
  };

  const getGenderedUsers = async () => {
    try {
      const response = await axios.get("http://localhost:8080/gendered-users", {
        params: { gender: user?.gender_interest },
      });

      setGenderedUsers(response.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getUser();
    getGenderedUsers();
  }, [user, genderedUsers]);

  console.log(user);

  const characters = [
    {
      name: "Richard Hendricks",
      url: "https://imgur.com/oPj4A8u.jpg",
    },
    {
      name: "Erlich Bachman",
      url: "./img/erlich.jpg",
    },
    {
      name: "Monica Hall",
      url: "./img/monica.jpg",
    },
    {
      name: "Jared Dunn",
      url: "./img/jared.jpg",
    },
    {
      name: "Dinesh Chungtai",
      url: "./img/dinesh.jpg",
    },
  ];
  const [lastDirection, setLastDirection] = useState();

  const swiped = (direction, nameToDelete) => {
    console.log("removing" + nameToDelete);
    setLastDirection(direction);
  };

  const outOfFrame = (name) => {
    console.log(name + " left the screen!");
  };
  return (
    <div className="dashboard">
      <ChatContainer user={user} />
      <div className="swipe-container">
        <div className="card-container">
          {characters.map((character) => (
            <TinderCard
              className="swipe"
              key={character.name}
              onSwipe={(dir) => swiped(dir, character.name)}
              onCardLeftScreen={() => outOfFrame(character.name)}
            >
              <div style={{ backgroundImage: "url(" + character.url + ")" }} className="card">
                <h3>{character.name}</h3>
              </div>
            </TinderCard>
          ))}

          <div className="swipe-info">{lastDirection ? <p>You swiped {lastDirection}</p> : <p></p>}</div>
        </div>
      </div>
    </div>
  );
}
