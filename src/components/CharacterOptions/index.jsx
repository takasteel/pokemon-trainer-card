import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import { useState } from 'react';

import { Container } from './styles';

import char0 from '../../assets/0.webp';
import char1 from '../../assets/1.webp';
import char2 from '../../assets/2.webp';
import char3 from '../../assets/3.webp';
import char4 from '../../assets/4.webp';
import char5 from '../../assets/5.webp';
import char6 from '../../assets/6.webp';
import char7 from '../../assets/7.webp';
import char8 from '../../assets/8.webp';
import char9 from '../../assets/9.webp';
import char10 from '../../assets/10.webp';
import char11 from '../../assets/11.webp';
import char12 from '../../assets/12.webp';
import char13 from '../../assets/13.webp';
import char14 from '../../assets/14.webp';
import char15 from '../../assets/15.webp';
import char16 from '../../assets/16.webp';
import char17 from '../../assets/17.webp';

export function CharacterOptions() {
  const [value, setValue] = useState(0);

  const handleChangeCharacter = (event, newValue) => {
    setValue(newValue);
  };

  return(
    <Container>
      <AppBar position="static" color="default">
        <Tabs
          value={value}
          onChange={handleChangeCharacter}
          indicatorColor="secondary"
          textColor="secondary"
          variant="scrollable"
          scrollButtons="auto"
          aria-label="character selection scroll tabs"
        >
          
          <Tab icon={<img src={char0} alt="leaf"/>}/>
          <Tab icon={<img src={char1} alt="red"/>}/>
          <Tab icon={<img src={char2} alt="lyra"/>}/>
          <Tab icon={<img src={char3} alt="ethan"/>}/>
          <Tab icon={<img src={char4} alt="may"/>}/>
          <Tab icon={<img src={char5} alt="brendan"/>}/>
          <Tab icon={<img src={char6} alt="dawn"/>}/>
          <Tab icon={<img src={char7} alt="lucas"/>}/>
          <Tab icon={<img src={char8} alt="hilda"/>}/>
          <Tab icon={<img src={char9} alt="hilbert"/>}/>
          <Tab icon={<img src={char10} alt="rosa"/>}/>
          <Tab icon={<img src={char11} alt="nate"/>}/>
          <Tab icon={<img src={char12} alt="serena"/>}/>
          <Tab icon={<img src={char13} alt="calem"/>}/>
          <Tab icon={<img src={char14} alt="selene"/>}/>
          <Tab icon={<img src={char15} alt="elio"/>}/>
          <Tab icon={<img src={char16} alt="gloria"/>}/>
          <Tab icon={<img src={char17} alt="victor"/>}/>
        </Tabs>
      </AppBar>
    </Container>
  );
}