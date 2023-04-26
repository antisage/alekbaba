import dynamic from 'next/dynamic';
import {FC, memo} from 'react';

import Page from '../components/Layout/Page';
import {homePageMeta} from '../data/data';
import Competition from '../components/Sections/Comp';
import Scoreboard from '../components/Sections/Scoreboard';

// eslint-disable-next-line react-memo/require-memo
const Header = dynamic(() => import('../components/Sections/Header'), {ssr: false});

const Home: FC = memo(() => {
  const {title, description} = homePageMeta;
  return (
    <Page description={description} title={title}>
      <Header />
      <Competition />
      <Scoreboard />
    </Page>
  );
});

export default Home;