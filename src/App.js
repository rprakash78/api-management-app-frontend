import {Routes, Route, useNavigate} from 'react-router-dom';
import Register from './components/Register';
import Call from './components/Call'

export default function App() {
  const navigate = useNavigate();

  const navigateToRegister = () => {
    // 👇️ navigate to /contacts
    navigate('/register');
  };

  const navigateToCall = () => {
    // 👇️ navigate to /contacts
    navigate('/call');
  };

  const navigateToList = () => {
    // 👇️ navigate to /contacts
    navigate('/list');
  };

  return (
    <div>
      <div>
        <button onClick={navigateToRegister}>register</button>
        <hr />
        <button onClick={navigateToCall}>call api</button>
        <hr />
        <button onClick={navigateToList}>list users</button>
        <Routes>
        <Route path="/register" element={<Register />} />
          <Route path="/call" element={<Call/>} />
          <Route path="/list" element={<List />} />

        </Routes>
      </div>
    </div>
  );
}

// function Home() {
//   return (
//       <div>
//         <h1>Home Page</h1>
//         <br />
//         <ul>
//           <li>
//             {/* Endpoint to route to Home component */}
//             <Link to="/">Home</Link>
//           </li>
//           <li>
//             {/* Endpoint to route to About component */}
//             <Link to="/register">register</Link>
//           </li>
//           <li>
//             {/* Endpoint to route to About component */}
//             <Link to="/list">list</Link>
//           </li>
//         </ul>
//       </div>
//     );
// }

function List() {
  return <h2>List of users</h2>;
}


