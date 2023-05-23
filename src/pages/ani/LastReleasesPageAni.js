import React, {useEffect, useState} from 'react';
import {getLastReleases} from "../../utils/anilibriaClient";
import LastReleaseAni from "../../components/ani/LastReleaseAni";
import Footer from "../../components/main/Footer";
import MainFooter from "../../components/main/MainFooter";
import HeaderNew from '../../components/HeaderNew';

const LastReleasesPageAni = () => {
    const [releases, setReleases] = useState([])

    useEffect(() => {
        getLastReleases(setReleases)
    }, [])

    return (
        <>
            <HeaderNew selected='last_releases'/>

            <div className="page">
                <div className="page_content">
                    <h1>Последние релизы</h1>

                    <div className="releases_items">
                        {
                            releases?.map(el => <LastReleaseAni anime_info={el} key={el?.id}/>)
                        }
                    </div>
                </div>
            </div>

            <Footer/>
            <MainFooter/>
        </>
    );
};

export default LastReleasesPageAni;