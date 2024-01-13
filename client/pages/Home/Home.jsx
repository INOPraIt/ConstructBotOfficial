import React from 'react';
import '../../assets/style/Pages/Home.scss';
import { motion } from 'framer-motion';
import CardApplication from '../../assets/components/CardApplication';
import HeaderCard from '../../assets/components/HeaderCard';

export default ({}) => {
  let arrayCardApplication = [
    { id: 1, named: "Покраска стен", price: 40000, tag: '@fronter' },
    { id: 2, named: "Поклейка обоев", price: 40000, tag: '@fronter' },
    { id: 3, named: "Установка окон", price: 40000, tag: '@fronter' },
    { id: 4, named: "Укладка ламината", price: 40000, tag: '@fronter' },
  ];

  const [headerCardSelect, setHeaderCardSelect] = React.useState(true);

  return (
    <div className='containerHome'>
        <div className={"itemCardHeader"}>
          <HeaderCard 
            headerCardSelect={headerCardSelect}
            setHeaderCardSelect={setHeaderCardSelect}
          />
        </div>
      <div className='homeOneInput'>
        <motion.p
          className='welcomeText'
          initial={{ y: 10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          Добро пожаловать
        </motion.p>
        <motion.p
          className='welcomeText'
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.7 }}
        >
          в систему
        </motion.p>
      </div>
      <motion.div
        className='cardContainerTwoOverflow'
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.9 }}
      >
        <swiper-container>
          {arrayCardApplication.map(k =>
            <swiper-slide>
              <CardApplication
                setHeaderCardSelect={setHeaderCardSelect}
                key={k.id}
                named={k.named}
                price={k.price}
                tag={k.tag}
              />
            </swiper-slide>
          )}
        </swiper-container>
      </motion.div>
    </div>
  )
}
