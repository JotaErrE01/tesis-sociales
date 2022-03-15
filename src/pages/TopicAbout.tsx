import { Player } from '@lottiefiles/react-lottie-player';
import { useEffect, useState, useRef } from 'react';

interface TopicAboutProps {
  title: string;
  visible: boolean;
  setVisible: (visible: boolean) => void;
  desc: string;
  title2?: string;
  desc2?: string;
  title3?: string;
  desc3?: string;
  title4?: string;
  desc4?: string;
  img: string;
  lottie?: string;
  gif?: string;
  gif2?: string;
}

export const TopicAbout = (props: TopicAboutProps) => {
  useEffect(() => {
    return () => {
      props.setVisible(true);
    }
  }, []);

  console.log(props.gif)

  return (
    !props.visible ?
      <div className="">
        <h1
          className="text-indigo-700 text-3xl font-bold my-5 text-center"
        >{props.title}</h1>

        <div
          className="lg:grid lg:grid-cols-2 gap-5 mt-14 text-left"
        >

          <img className="aspect-[4/3] rounded shadow bg-gray-600" src={props.img} alt={props.title} />

          <p
            className="text-white text-lg lg:mt-0 mt-5"
          >{props.desc}</p>

          <div className="col-span-3">
            {
              props.title2 &&
              <h3 className="text-white font-bold text-xl mb-2 mt-5">{props.title2}</h3>
            }

            {
              props.desc2 &&
              <p className="text-white text-lg lg:mt-0 mt-5">{props.desc2}</p>
            }

            {
              props.gif2 && 
              <img className='w-4/5 block mt-5 md:w-2/5 mb-5 rounded-lg mx-auto' src={props.gif2} alt={props.title} />
            }
          </div>

          <div className="col-span-3">
            {
              props.title3 &&
              <h3 className="text-white font-bold text-xl mb-2">{props.title3}</h3>
            }

            {
              props.desc3 &&
              <p className="text-white text-lg lg:mt-0 mt-5">{props.desc3}</p>
            }
          </div>

          <div className="col-span-3">
            {
              props.title4 &&
              <h3 className="text-white font-bold text-xl mb-2">{props.title4}</h3>
            }

            {
              props.desc3 &&
              <p className="text-white text-lg lg:mt-0 mt-5">{props.desc4}</p>
            }
          </div>

        </div>

        <div className='flex gap-16 justify-center items-center'>
          {
            props.lottie && props.gif ?
            <>
              <img className='basis-2/5 w-10' src={props.gif} alt={props.title} />

              <Player
                autoplay
                loop
                src={props.lottie || ''}
                style={{ width: 250, height: 100 }}
                className="basis-2/5"
                speed={3}
              />
            </>
            :
            props.gif ?
            <img className='w-4/5 mt-2 md:w-2/5 md:mt-0 rounded-lg mb-2' src={props.gif} alt={props.title} />
            :
            <Player 
              autoplay
              loop
              src={props.lottie || ''}
              style={{ width: 200, height: 200 }}
              // className="w-"
              speed={2}
            />
          }
        </div>
      </div>
      :
      <></>
  )
}
