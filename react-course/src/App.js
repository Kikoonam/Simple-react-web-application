import { Route, Routes } from "react-router-dom";
import Layout from "./Components/Layout/Layout";

import AllMeetupsPages from "./Pages/AllMeetups";
import FavoritesPages from "./Pages/Favorites";
import NewMeetUpPages from "./Pages/NewMeetup";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<AllMeetupsPages />} />
        <Route path="/favorites" element={<FavoritesPages />} />
        <Route path="/new-meetup" element={<NewMeetUpPages />} />
      </Routes>
    </Layout>
  );
}

export default App;
