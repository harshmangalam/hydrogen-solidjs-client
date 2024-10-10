import { lazy } from "solid-js";
import { Routes, Route } from "solid-app-router";

// Lazy load components for code splitting (improves performance)
const AuthLayout = lazy(() => import("../screens/auth"));
const Login = lazy(() => import("../screens/auth/Login"));
const Signup = lazy(() => import("../screens/auth/Signup"));

const MainLayout = lazy(() => import("../screens/MainLayout"));
const Home = lazy(() => import("../screens/Home"));

// Friends-related routes
const FriendsLayout = lazy(() => import("../screens/friends"));
const FriendsMyFriends = lazy(() => import("../screens/friends/MyFriends"));
const FriendsRequestsReceived = lazy(() => import("../screens/friends/RequestsReceived"));
const FriendsRequestsSent = lazy(() => import("../screens/friends/RequestsSent"));
const FriendsSuggestions = lazy(() => import("../screens/friends/Suggestions"));

// Posts-related routes
const PostsLayout = lazy(() => import("../screens/posts"));
const PostsHome = lazy(() => import("../screens/posts/Home"));
const TrendingPosts = lazy(() => import("../screens/posts/Trending"));
const FriendsPosts = lazy(() => import("../screens/posts/FriendsPosts"));
const CreatePost = lazy(() => import("../screens/posts/Create"));
const MyPosts = lazy(() => import("../screens/posts/MyPosts"));

// Groups-related routes
const GroupsLayout = lazy(() => import("../screens/groups"));
const MyGroups = lazy(() => import("../screens/groups/MyGroups"));
const CreatedGroupPosts = lazy(() => import("../screens/groups/CreatedGroupPosts"));
const GroupsFeed = lazy(() => import("../screens/groups/Feed"));
const GroupsSuggestions = lazy(() => import("../screens/groups/Suggestions"));
const GroupsInvited = lazy(() => import("../screens/groups/Invited"));
const GroupsJoined = lazy(() => import("../screens/groups/Joined"));
const CreateGroup = lazy(() => import("../screens/groups/Create"));
const GroupNotifications = lazy(() => import("../screens/groups/Notifications"));
const CreateGroupPost = lazy(() => import("../screens/groups/CreateGroupPost"));

// Group details routes
const GroupDetailsLayout = lazy(() => import("../screens/groups/groupDetails"));
const GroupAbout = lazy(() => import("../screens/groups/groupDetails/About"));
const GroupMembers = lazy(() => import("../screens/groups/groupDetails/Members"));
const GroupPosts = lazy(() => import("../screens/groups/groupDetails/Posts"));

// Profile-related routes
const ProfileLayout = lazy(() => import("../screens/profile"));
const ProfilePosts = lazy(() => import("../screens/profile/Posts"));
const ProfileAboutLayout = lazy(() => import("../screens/profile/about"));
const ProfileAboutOverview = lazy(() => import("../screens/profile/about/Overview"));
const ProfileAboutEducation = lazy(() => import("../screens/profile/about/Education"));
const ProfileAboutContact = lazy(() => import("../screens/profile/about/Contact"));
const ProfileAboutLifeEvent = lazy(() => import("../screens/profile/about/LifeEvent"));
const ProfileAboutPlace = lazy(() => import("../screens/profile/about/Place"));

const ProfileFriendsLayout = lazy(() => import("../screens/profile/friends"));
const ProfileFriendsAll = lazy(() => import("../screens/profile/friends/AllFriends"));
const ProfileFriendsBirthdays = lazy(() => import("../screens/profile/friends/Birthdays"));
const ProfileFriendsCurrentCity = lazy(() => import("../screens/profile/friends/CurrentCity"));
const ProfileFriendsRecentlyAdded = lazy(() => import("../screens/profile/friends/RecentlyAdded"));

// Messenger-related routes
const MessengerLayout = lazy(() => import("../screens/messenger/MessengerLayout"));
const MessengerHome = lazy(() => import("../screens/messenger"));
const Chat = lazy(() => import("../screens/messenger/Chat"));

// Settings-related routes
const SettingsLayout = lazy(() => import("../screens/settings/SettingsLayout"));
const LoginHistory = lazy(() => import("../screens/settings/LoginHistory"));
const SettingsHome = lazy(() => import("../screens/settings"));
const ChangePasswordSettings = lazy(() => import("../screens/settings/ChangePassword"));
const GeneralSettings = lazy(() => import("../screens/settings/General"));
const DeleteAccount = lazy(() => import("../screens/settings/DeleteAccount"));

// Miscellaneous routes
const Search = lazy(() => import("../screens/Search"));
const Notifications = lazy(() => import("../screens/Notifications"));
const PostDetails = lazy(() => import("../screens/PostDetails"));

export default function AppRouter() {
  return (
    <Routes>
      {/* Main app routes */}
      <Route path="/" element={<MainLayout />}>
        <Route path="" element={<Home />} />
        <Route path="notifications" element={<Notifications />} />
        <Route path="search" element={<Search />} />
        <Route path="/posts/:postId" element={<PostDetails />} />

        {/* Friends-related routes */}
        <Route path="friends" element={<FriendsLayout />}>
          <Route path="" element={<FriendsMyFriends />} />
          <Route path="suggestions" element={<FriendsSuggestions />} />
          <Route path="requests-received" element={<FriendsRequestsReceived />} />
          <Route path="requests-sent" element={<FriendsRequestsSent />} />
        </Route>

        {/* Posts-related routes */}
        <Route path="posts" element={<PostsLayout />}>
          <Route path="" element={<PostsHome />} />
          <Route path="trending" element={<TrendingPosts />} />
          <Route path="friends_posts" element={<FriendsPosts />} />
          <Route path="create" element={<CreatePost />} />
          <Route path="my_posts" element={<MyPosts />} />
        </Route>

        {/* Groups-related routes */}
        <Route path="groups" element={<GroupsLayout />}>
          <Route path="" element={<GroupsFeed />} />
          <Route path="groups_created" element={<MyGroups />} />
          <Route path="created_group_posts" element={<CreatedGroupPosts />} />
          <Route path="invites" element={<GroupsInvited />} />
          <Route path="joined" element={<GroupsJoined />} />
          <Route path="suggestions" element={<GroupsSuggestions />} />
          <Route path="notifications" element={<GroupNotifications />} />
          <Route path="create_group_post" element={<CreateGroupPost />} />
          <Route path="group_create" element={<CreateGroup />} />
        </Route>

        {/* Group details routes */}
        <Route path="groups/:groupId" element={<GroupDetailsLayout />}>
          <Route path="" element={<GroupPosts />} />
          <Route path="members" element={<GroupMembers />} />
        </Route>

        {/* Profile-related routes */}
        <Route path="/:userId" element={<ProfileLayout />}>
          <Route path="" element={<ProfilePosts />} />
          <Route path="about" element={<ProfileAboutLayout />}>
            <Route path="" element={<ProfileAboutOverview />} />
            <Route path="education" element={<ProfileAboutEducation />} />
            <Route path="place" element={<ProfileAboutPlace />} />
            <Route path="contact" element={<ProfileAboutContact />} />
            <Route path="life_events" element={<ProfileAboutLifeEvent />} />
          </Route>
          <Route path="friends" element={<ProfileFriendsLayout />}>
            <Route path="" element={<ProfileFriendsAll />} />
            <Route path="recently_added" element={<ProfileFriendsRecentlyAdded />} />
            <Route path="birthdays" element={<ProfileFriendsBirthdays />} />
            <Route path="current_city" element={<ProfileFriendsCurrentCity />} />
          </Route>
        </Route>
      </Route>

      {/* Authentication routes */}
      <Route path="/auth" element={<AuthLayout />}>
        <Route path="login" element={<Login />} />
        <Route path="signup" element={<Signup />} />
      </Route>

      {/* Messenger routes */}
      <Route path="/messenger" element={<MessengerLayout />}>
        <Route path="" element={<MessengerHome />} />
        <Route path="/:userId" element={<Chat />} />
      </Route>

      {/* Settings-related routes */}
      <Route path="/settings" element={<SettingsLayout />}>
        <Route path="" element={<SettingsHome />} />
        <Route path="general_settings" element={<GeneralSettings />} />
        <Route path="login_history" element={<LoginHistory />} />
        <Route path="change_password" element={<ChangePasswordSettings />} />
        <Route path="delete_account" element={<DeleteAccount />} />
      </Route>
    </Routes>
  );
}
