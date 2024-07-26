import { createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom";
import Template from "../Template/Template";
import Home from "../../Page/Home/Home";
import TypingBox from "../../components/TypingBox/TypingBox";
import TypingTest from "../../Page/TypingTest/TypingTest";
import Resister from "../../Page/UserLoginAndResiter/Resister";
import Login from "../../Page/UserLoginAndResiter/Login";
import Profile from "../../Page/Profile/Profile";
import LeaderBoard from "../../Page/LeaderBoard/LeaderBoard";
import AuthLogin from "../../components/PrivateRoutes/AuthLogin";
import Contact from "../../Page/Contact/Contact";

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<Template />}>
            <Route index element={<Home />} />
            <Route path="/typing-box" element={<TypingTest />} />
            <Route path="/" element={<AuthLogin />}>
                <Route path="/resister" element={<Resister />} />
                <Route path="/Login" element={<Login />} />
            </Route>
            <Route path="/contact" element={<Contact />} />
            <Route path="/profile/:id" element={<Profile />} />
            <Route path="/leaderboard" element={<LeaderBoard/>}/>
        </Route>
    )
)

export default router