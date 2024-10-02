---

# Hydrogen - Social Media Web App (Powered by SolidJs)

Welcome to Hydrogen, a feature-rich social media web app built with SolidJs. Explore a vast array of functionalities including real-time notifications, dynamic posts, group management, and more.

![image](https://github.com/user-attachments/assets/8d098473-ec30-4c2a-8f74-3dfb9415b00b)


## Table of Contents

1. [Installation](#installation)
2. [Setup `.env` File](#setup-env-file)
3. [Server Repo](#server-repo)
4. [Dependencies](#dependencies)
5. [Key Features](#key-features)
    - [Authentication](#authentication)
    - [Home](#home)
    - [Friends](#friends)
    - [Posts](#posts)
    - [Post Details](#post-details)
    - [Groups](#groups)
    - [Group Details](#group-details)
    - [Notifications](#notifications)
    - [Messenger](#messenger)
    - [Profile](#profile)
    - [Settings](#settings)
    - [Networking](#networking)
6. [Utilities](#utilities)
7. [Services](#services)
8. [Context for State Management](#context-for-state-management)
9. [Date and Time Formatting](#date-and-time-formatting)
10. [Real-time Friend Status](#realtime-friend-status)

---

## Installation

Follow these steps to install the project:

#### Install pnpm globally
```bash
npm i -g pnpm
```

#### Install dependencies
```bash
pnpm i
```

#### Run the development server
```bash
pnpm run dev
```


## Setup `.env` File

1. Create a new file named `.env` in the root directory of your project.
2. Copy the contents of the `.env.example` file into the `.env` file.
3. Replace the placeholder values with your actual credentials.

Here's an example of what your `.env` file might look like:

```
VITE_ENDPOINT=
VITE_CLOUDINARY_UPLOAD_PRESET=
VITE_CLOUDINARY_API_KEY=
```

### SERVER REPO

**[SERVER REPO](https://github.com/harshmangalam/hydrogen-nodejs-server)**

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

## 25+ hooks

## 50+ Screens

## Dark and light mode

## Authentication

- Login
- Signup

## Home

- Navigation
- Posts feeds
- My friends

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
  - Add Images
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
- Show friend status (active or idle or logout)
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
- Login activity - Clear login session delete login session accept current session - Login details
  Os
  Browser
  Location
  Time
  Active status
  Current status

## Networking

- Automatically notify if network is unavialable
- Automatically notify if network recovered

Utility
Dayjs utility for getting relative time

## Services

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

## Context for state management

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
  - Remove snackbar

- Notifications context
  - Clear notifications
  - Fetch notifications
  - Realtime notification state mange
  - Manage notifications Count
  - Manage notifications list

## Formatted date and time using dayjs

Image will be uploaded to cludinary or you can provide any valid image url. This will show image preview befor upload

## Realtime friend status

- Active —>Login and Surfing on site
- Idle —-> Login but not surfing on site
- Logout —-> when user logout from site
