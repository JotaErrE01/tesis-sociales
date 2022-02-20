import { useEffect } from 'react';

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
}

export const TopicAbout = (props: TopicAboutProps) => {

  useEffect(() => {
    return () => {
      props.setVisible(true);
    }
  }, []);


  return (
    !props.visible ?
      <div className="mb-[5rem]">
        <h1
          className="text-white text-3xl font-bold my-5 text-center"
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
              <h3 className="text-white font-bold text-xl mb-2">{props.title2}</h3>
            }

            {
              props.desc2 &&
              <p className="text-white text-lg lg:mt-0 mt-5">{props.desc2}</p>
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


      </div>
      :
      <></>
  )
}
