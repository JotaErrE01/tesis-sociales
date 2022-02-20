import { useEffect, useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { optionsList } from '../data/optionList';


export const AsideBar = () => {

  const [urList, setUrList] = useState<string[]>();
  const location = useLocation();

  useEffect(() => {
    if (location) {
      setUrList(location.pathname.split('/'));
    }
  }, [location]);

  return (
    <div className="bg-green-600 lg:w-1/4 rounded-xl p-2 lg:grid items-center">
      <ul className="list-none text-white lg:text-xl text-base md:text-lg justify-evenly h-4/5 my-auto flex lg:block flex-wrap">
        {
          Object.keys(optionsList).map((optionList) => {
            if (urList?.includes(optionList)) {
              return optionsList[(optionList as keyof typeof optionsList)].map(({ id, to, title }, i) => (
                <li key={id} className="w-fit lg:mt-5 block p-2 lg:p-0 text-center lg:text-left">
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
