// #region Global Imports
import React from "react";
import { NextPage } from "next";
import { useSelector } from "react-redux";
// #endregion Global Imports

// #region Local Imports
import { withTranslation } from "@Server/i18n";
import { IStore } from "@Redux/IStore";
import { HomeActions } from "@Actions";
import { Header, Navbar } from "@Components";
import Embark from "../../src/Components/Blogs/Embark"
import Nimbus from "../../src/Components/Blogs/Nimbus"
// #endregion Local Imports

// #region Interface Imports
import { IHomePage, ReduxNextPageContext } from "@Interfaces";
// #endregion Interface Imports

const Home: NextPage<IHomePage.IProps, IHomePage.InitialProps> = () => {
    const home = useSelector((state: IStore) => state.home);

    let active = home.active;
    console.log(home)

    return (
        <>
            <Navbar/>
            <Header/>
            {active === 0 ? <Embark/> : active === 1 ? <Nimbus/> : '' }
        </>
    );
};

Home.getInitialProps = async (
    ctx: ReduxNextPageContext
): Promise<IHomePage.InitialProps> => {
    await ctx.store.dispatch(
        HomeActions.GetEmbarkData({
            data: { },
        })
    );
    await ctx.store.dispatch(
        HomeActions.GetNimbusData({
            data: { },
        })
    );
    return { namespacesRequired: ["common"] };
};

const Extended = withTranslation("common")(Home);

export default Extended;
