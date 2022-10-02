# Hydrogen - Social media web app (Powered by SolidJs)


## Installation
- install pnpm globally `npm i -g pnpm`
- install dependencies `pnpm i`
- run dev server `pnpm run dev`

### Setup env file
- copy `.env.example` inside `.env`

Update  `.env`

```
VITE_ENDPOINT=https://hydrogen-harsh.herokuapp.com/api
```


**[Live Demo](https://hydrogen-solid.vercel.app/)**

## Dependencies

- Tailwind form 
- Tailwind css
- Axios
- Dayjs
- Js cookies
- Platform
- Shortid
- Socket io client
- Solid app router
- Solid icons
- Solidjs


## 80+ Components

- Modal
- Snackbar
- Radio
- Logo with Navlink
- Theme switcher 
- etc..


			
## Authentication

- Login
    - Email
    - password
- Signup
    - firstName
    - lastName
    - Email
    - Password
    - Gender 


## Dark and light mode

## Home
- Navigation (on left)
- Posts feeds (middle)
- My friends (right)

## Friends
- My friends
- Requests received
- Requests sent
- Friends Suggestions
- Send friend request
- Receive friend request
- Decline friend request
- Accept friend request
- Cancel sent request

## Posts
- My posts
- Trending Posts
- Friends Posts
- Create Post
    - Post content
    - Post privacy
    - Add specific friend who will see the post
    - Tag friend
    - Add  Images
    - Add feelings
    - Add locations
- Add and remove heart on post
- Comment on post
- Delete post
- Show post privacy
- Show post title dynamically generated


## Post details screen
- Write Comment on post
- View comments


## Groups
- Groups Feeds
- Created Groups
- Created Group posts
- Groups Invited
- Groups Joined
- Suggestions
- Notifications
- Create Group Post
    - Post content
    - Post image
    - Choose group
- Like group post
- Create Group
    - Group name
    - Group privacy
    - Group profile image
    - Group cover image
    - Invite friend when group privacy is private
- Delete group option
- Group members count
- Accept group invitation
- Send group invitation
- Ignore group invitation

		
## Group details
- Cover and profile image of group
- Group name
- Group members count
- Group privacy info
- Edit group options
- Group posts
- Group members
- Change profile and cover image


## Notifications
- Realtime notifications using socket.io
- Clear notifications
- See all notifications
- Notification avatar based on Post , Group or friend related generated dynamically
- Notification content generated dynamically 
- Navigate to user profile from notification



## Messenger Navbar
- Show friends on menu bar who send message
- Show last sent or received message on menu
- Navigate to user profile from notification
- Show friend status (active  or idle or logout)
- Show link to navigate on messenger screen



## Messenger Screen
- Different ui from main screen using nested routing (solid app router)
- Navbar 
- Home
- Theme switcher
- Logo
- Mobile
- Splitting screen using solid-app-router
- 1st screen for friend lists on tap on friend navigate to chat screen
- 2nd screen for chat screen
- Left side friend lists
- Right side chat screen
- Chat screen show friend info on top
- Clear chat
- Exit from chat 
- Message textarea
- Send message button
- Messages append in realtime 
- Message status (send , received,seen)

	


## Notifications Page

## Profile
- Cover image
- Profile image
- Profile info
- Friend count
- Friend avatar 
- Navigate to friend profile on clicking the avatar
- Edit profile
- Change cover image
- Change profile image
- Posts lists created by user
- Friends lists of user which nested friends count
- Navigate to friend profile on taping friend 


## Settings
- General settings
    - Show users details 
    - Edit details
- Password settings
    - Change password
- Login activity
    - Clear login session delete login session  accept current session
    - Login details
Os
Browser
Location
Time
Active status
Current  status





## Networking
- Automatically inform if network is unavialable
- Automatically inform if network recovered


## 25+ hooks
- Network status change listener hook
- Cloudinary hook
- Geolocation hook
- Theme switcher hook
- Different different hooks for managing mutation and updating server state in client
- Etc….

Utility
Dayjs utility for getting relative time


## 10+ Services
- Auth services
- Comment services
- Friends services
- Group services
- Messenger services
- Notification services
- Post services
- Search services
- Settings services
- User services



## Context  for state management

- Auth context 
    - Handle account and authenticated related data
    - Manage relatime socket instance
    - Manage account session
    - Manage global auth loader status


- Messenger context
    - Handle mutations on message
    - Clear message
    - Fetch message
    - Send message
    - Fetch friends with last message 
    - Shoes active friends
    - Show active chat
    - Notify on new message

- UI context
    - Manage snackbars
    - Add snackbar
    - Remove  snackbar


- Notifications context
    - Clear notifications
    - Fetch notifications 
    - Realtime notification state mange
    - Manage notifications Count
    - Manage notifications list



## 50+ Screens










## Formatted date and time using dayjs

Image will be uploaded to cludinary or you can provide any valid image url. This will show image preview befor upload


## Realtime friend status  

- Active —>Login and Surfing on site
- Idle —-> Login but not surfing on site
- Logout —-> when user logout from site
