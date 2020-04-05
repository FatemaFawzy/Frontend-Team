import React from "react";
import "./AccountContent.css";
import OverviewContent from "./Overview/OverviewContent.js";
import SetPasswordContent from "./SetPassword/SetPasswordContent.js";
import RecoverPlaylists from "./RecoverPlaylists/RecoverPlaylists";
import {Route , Switch, Redirect} from "react-router-dom";
import EditProfile from "./EditProfile/EditProfile.js";


const AccountContent= (props) => (


    <div className="account-content">
            <Switch>
                <Route path="/account/overview/" component={OverviewContent}/>
                <Route path="/account/profile/" component={EditProfile}/>
                <Route path="/account/set-device-password/" component={SetPasswordContent}/>
                <Route path="/account/recover-playlists/" component={RecoverPlaylists}/>

                <Redirect to = "/account/overview/"/>

            </Switch>

    </div>



);

export default AccountContent;