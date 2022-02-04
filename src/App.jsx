import { lazy } from "solid-js";
import { Routes, Route } from "solid-app-router";

const MainLayout = lazy(() => import("./screens/main"));
const Home = lazy(() => import("./screens/main/Home"));

const FriendsLayout = lazy(() => import("./screens/friends"));
const AllFriends = lazy(() => import("./screens/friends/AllFriends"));
const FriendsRequestsReceived = lazy(() =>
  import("./screens/friends/RequestsReceived")
);
const FriendsRequestsSent = lazy(() =>
  import("./screens/friends/RequestsSent")
);
const FriendsSuggestions = lazy(() => import("./screens/friends/Suggestions"));
const GroupsLayout = lazy(() => import("./screens/groups"));
const AllGroups = lazy(() => import("./screens/groups/AllGroups"));
const GroupsDiscover = lazy(() => import("./screens/groups/Discover"));
const CreateGroup = lazy(() => import("./screens/groups/Create"));

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
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
        <Route path="/groups" element={<GroupsLayout />}>
        <Route path="/" element={<AllGroups />}/>
        <Route path="/discover" element={<GroupsDiscover />}/>
        <Route path="/create" element={<CreateGroup />}/>

        </Route>
      </Route>
    </Routes>
  );
}

export default App;
