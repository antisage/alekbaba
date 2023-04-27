import dynamic from 'next/dynamic';
import {FC, memo} from 'react';

import Page from '../components/Layout/Page';
import {homePageMeta} from '../data/data';
import Murph from '../components/Sections/Murph';
import MurphResult from '../components/Sections/MurphResult';


// eslint-disable-next-line react-memo/require-memo
const Header = dynamic(() => import('../components/Sections/Header'), {ssr: false});

const Home: FC = memo(() => {
  const {title, description} = homePageMeta;
  return (
    <Page description={description} title={title}>
      <Header />

      <div className="grid-container-wrapper">
        <Murph
          title="April Murph"
          location="675 Tower Rd, Marietta"
          time="April 29, 6:45"
          imageUrl="easter_m-min.png"
          details={["1 Mile Run","x100 Pull-Ups","x200 Push-Ups","x300 Squats","1 Mile Run"]}
        />

      </div>

      <div className="grid-container-wrapper">
        <Murph
          title="Round 2"
          location="Zoo Health Gym, Roswell"
          time="April 15, 11:30"
          imageUrl="bonus2-min.png"
          details={["1 Mile Run","x25 Deadlifts","x25 Pull-Ups","Barbell Press to Failure +15","Weighted Squats to Failure"]}
        />
        <div className='test-down'>
          <MurphResult
          title="Results"
          imageUrl="bonus3-min.png"
          details={["Kagan: Killed It","Tahri: Killed It","Alek: Killed"]}
          />
        </div>
      </div>

      <div className="grid-container-wrapper">
        <Murph
          title="Half Edward Murphy I"
          location="East Roswell Park"
          time="April 15, 7:30"
          imageUrl="eddie2-min.jpg"
          details={["1 Mile Run","x25 Deadlifts","x50 Pull-Ups","x100 Push-Ups","x150 Squats"]}
        />
        <div className='test-down'>
          <MurphResult
          title="Results"
          imageUrl="reg1_2-min.png"
          details={["Shane: 28:29🏆","Long: 29:40","Alek: 34:48"]}
          />
        </div>
      </div>

      <style>{`     
        .grid-container-wrapper {
          display: flex;
          flex-wrap: wrap;
          margin: 10px;
        }
        .test-down {
          margin-top:5.74em;
        }
      `}</style>
    </Page>
  );
});

export default Home;