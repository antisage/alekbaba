import dynamic from 'next/dynamic';
import {FC, memo} from 'react';

import Page from '../components/Layout/Page';
import {homePageMeta} from '../data/data';
import Murph from '../components/Sections/Murph';


// eslint-disable-next-line react-memo/require-memo
const Header = dynamic(() => import('../components/Sections/Header'), {ssr: false});

const Home: FC = memo(() => {
  const {title, description} = homePageMeta;
  return (
    <Page description={description} title={title}>
      <Header />
      <Murph
        title="Murph 1"
        location="East Roswell Park"
        time="April 15, 7:30"
        imageUrl="eddie.jpg"
        details="Example Details"
      />
    </Page>
  );
});

export default Home;