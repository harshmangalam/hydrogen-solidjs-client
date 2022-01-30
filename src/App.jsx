import { lazy } from "solid-js";
import { Routes, Route } from "solid-app-router";
const HomeFeeds = lazy(() => import("./screens/HomeFeeds"));

const FriendsLayout = lazy(() => import("./screens/friends"));
const FriendsHome = lazy(() => import("./screens/friends/Home"));
const FriendsRequestsReceived = lazy(() =>
  import("./screens/friends/RequestsReceived")
);
const FriendsRequestsSent = lazy(() =>
  import("./screens/friends/RequestsSent")
);
const FriendsSuggestions = lazy(() => import("./screens/friends/Suggestions"));

const FriendList = lazy(() => import("./screens/friends/List"));

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomeFeeds />} />
      <Route path="/friends" element={<FriendsLayout />}>
        <Route path="/" element={<FriendsHome />} />
        <Route path="/suggestions" element={<FriendsSuggestions />} />
        <Route
          path="/requests-received"
          element={<FriendsRequestsReceived />}
        />
        <Route path="/requests-sent" element={<FriendsRequestsSent />} />
        <Route path="/list" element={<FriendList />} />
      </Route>
    </Routes>
  );
}

export default App;
