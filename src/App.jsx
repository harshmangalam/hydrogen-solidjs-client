import { lazy } from "solid-js";
import { Routes, Route } from "solid-app-router";
const Home = lazy(() => import("./screens/Home"));

const FriendsLayout = lazy(() => import("./screens/friends"));
const AllFriends = lazy(() => import("./screens/friends/AllFriends"));
const FriendsRequestsReceived = lazy(() =>
  import("./screens/friends/RequestsReceived")
);
const FriendsRequestsSent = lazy(() =>
  import("./screens/friends/RequestsSent")
);
const FriendsSuggestions = lazy(() => import("./screens/friends/Suggestions"));

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/friends" element={<FriendsLayout />}>
        <Route path="/" element={<AllFriends />} />
        <Route path="/suggestions" element={<FriendsSuggestions />} />
        <Route
          path="/requests-received"
          element={<FriendsRequestsReceived />}
        />
        <Route path="/requests-sent" element={<FriendsRequestsSent />} />
      </Route>
    </Routes>
  );
}

export default App;
