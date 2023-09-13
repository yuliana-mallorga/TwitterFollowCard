import "./App.css";
import { TwitterFollowCard } from "./TwitterFollow-Card";
export function App() {
//   const formatUserName = (userName) => `@${userName}`

const users=[
    {
        userName: "midudev",
        name: "Miguel Ángel Durán",
        isFollowing: true  
    },
     {
        userName: "pacoHdezs",
        name: "Paco Hdez",
        isFollowing: false 
    },
    {
         userName: "pheralb",
        name: "Pablo Hernandez",
        isFollowing: true 
    },
     {
        userName: "TMChein",
        name: "Tomas",
        isFollowing: false  
    }
]
  return (
    <section className="App">
     {
        users.map(user =>{
            const { userName, name, isFollowing } = user
            return (
                <TwitterFollowCard
                key={userName}
                userName={userName}
                initialIsFollowing={isFollowing}
                >
                    {name}
                </TwitterFollowCard>
            )
        })
     }
    </section>
  );
}
