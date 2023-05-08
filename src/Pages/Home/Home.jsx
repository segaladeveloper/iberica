import React from 'react';
import './style.css';
import Carousel, { CarouselItem } from '../../Components/Carousel/Carousel';

const Home = () => {
 
  return (
    <div>

      <div className='block'>
        <div className='sectionTitle'>
          <h2>Home</h2>
          <small>Cursos populares</small>
        </div>

        <div className='agrupadorDeCartao'>
          <div className='cartao' >
            <div>
                img
            </div>
            <div>
              1
            </div>
          </div>
          <div className='cartao' >
           2
          </div>
          <div className='cartao' >
          3
          </div>
          <div className='cartao' >
          4
          </div>
        </div>
      </div>

      <div className='block2'>
        <div className='sectionTitle'>
          <h2>Professores</h2>
          <small>Conheça profisionais especializados</small>
          <br/><br/>

          <Carousel>
            <CarouselItem><img src={'logo192.png'} alt='logo'/></CarouselItem>
            <CarouselItem><img src={'logo512.png'} alt='logo'/></CarouselItem>
            <CarouselItem><img src={'logo192.png'} alt='logo'/></CarouselItem>
          </Carousel>
        </div>
      </div>

    </div>
  );

}

export default Home