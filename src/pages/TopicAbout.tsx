import { useEffect } from 'react';

interface TopicAboutProps {
  title: string;
  visible: boolean;
  setVisible: (visible: boolean) => void;
  desc: string;
  desc2?: string;
  img: string;
}

export const TopicAbout = ({ title, visible, setVisible, desc, desc2, img }: TopicAboutProps) => {

  useEffect(() => {
    return () => {
      setVisible(true);
    }
  }, []);


  return (
    !visible ?
      <div className="mb-[5rem]">
        <h1
          className="text-white text-3xl font-bold my-5 text-center"
        >{title}</h1>

        <div
          className="lg:grid lg:grid-cols-2 gap-5 mt-14"
        >

          <img className="aspect-[4/3] rounded shadow bg-gray-600" src={img} alt={title} />

          <p
            className="text-white text-lg lg:mt-0 mt-5"
          >{desc}</p>

          {
            desc2 &&

            <p className="col-span-3 text-white text-lg lg:mt-0 mt-5">{desc2}</p>
          }
        </div>


      </div>
      :
      <></>
  )
}
