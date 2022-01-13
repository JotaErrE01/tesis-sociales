import { useEffect } from 'react';

interface TopicAboutProps {
  title: string;
  visible: boolean;
  setVisible: (visible: boolean) => void;
}

export const TopicAbout = ({title, visible, setVisible}: TopicAboutProps) => {

  useEffect(() => {
    return () => {
      setVisible(true);
    }
  }, [])

  return (
    !visible ?
    <div>
      <h1>hola nuevo tema</h1>
    </div>
    :
    <></>
  )
}
