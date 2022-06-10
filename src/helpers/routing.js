import SignIn from "../pages/authentication/SignIn/SignIn";
import SignUp from "../pages/authentication/SignUp/SignUp";
import DiariesInRange from "../pages/diariesInRange/DiariesInRange";
import DiaryOpen from "../pages/diaryOpen/DiaryOpen";
import Home from "../pages/home/Home";
import MyDiaries from "../pages/myDiaries/MyDiaries";

import UserHome from "../pages/userHome/UserHome";

export const routing = [
  {
    path: "/signin",
    isPrivate: false,
    component: SignIn,
  },
  {
    path: "/signup",
    isPrivate: false,
    component: SignUp,
  },
  {
    path: "/",
    isPrivate: false,
    component: Home,
  },
  {
    path: "/diaryopen/:_id",
    isPrivate: false,
    component: DiaryOpen,
  },
  {
    path: "/home",
    isPrivate: true,
    component: UserHome,
  },
  {
    path: "/myDiaries",
    isPrivate: true,
    component: MyDiaries,
  },
  {
    path: "/diariesInRange",
    isPrivate: true,
    component: DiariesInRange,
  },
];
