import { useEffect, useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { optionsList } from '../data/optionList';


export const AsideBar = () => {

  const [urList, setUrList] = useState<string[]>();
  const location = useLocation();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (location) {
      setUrList(location.pathname.split('/'));
    }
  }, [location])

  return (
    <div className="bg-green-600 w-1/4 rounded-xl p-2 grid items-center h-full">
      <ul className="list-none text-white text-xl h-4/5 my-auto">
        {
          Object.keys(optionsList).map((optionList) => {
            if (urList?.includes(optionList)) {
              return optionsList[(optionList as keyof typeof optionsList)].map(({ id, to, title }, i) => (
                <li key={id} className="w-fit mt-5 block">
                    <NavLink
                      to={to}
                      style={({ isActive }) => ({
                        borderBottom: isActive ? '2px solid rgb(59 130 246 / 1)' : '',
                      })}
                      className="hover:border-b-2 border-b-blue-500 hover:cursor-pointer"
                    >{title}</NavLink>

                </li>
              ))
            }
          })
        }
      </ul>
    </div>
  )
}
