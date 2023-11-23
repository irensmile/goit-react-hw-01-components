
import { Profile } from "./Profile/Profile";
import user from '../data/user.json';

export const App = () => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: "column",
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 20,
        color: '#010101',
        backgroundColor: '#E7EBF2'
      }}
    >
    
      
      <Profile
      username={user.username}
      tag={user.tag}
      location={user.location}
      avatar={user.avatar}
      stats={user.stats}
      />
     
    </div>
  );
};
