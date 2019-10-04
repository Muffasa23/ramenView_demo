import React,{ useState, useCallback } from 'react';

const name = "麵屋武藏 本店";
const mrt = "台北車站";
const address = "台北市中正區忠孝西路一段36號B1";
const website = "https://www.facebook.com/menyaittotw/";
const tag = ["豚骨","鷄白湯","沾麵"];
const soupRating = 2.9;
const noodleRating = 4.3;
const meatRating = 3.8;
const openingHours = [
  "Monday: Closed",
  "Tuesday: 11:30 AM – 2:00 PM, 5:30 – 7:00 PM",
  "Wednesday: 11:30 AM – 2:00 PM, 5:30 – 7:00 PM",
  "Thursday: 11:30 AM – 2:00 PM, 5:30 – 7:00 PM",
  "Friday: 11:30 AM – 2:00 PM, 5:30 – 7:00 PM",
  "Saturday: Closed",
  "Sunday: 11:30 AM – 2:00 PM"
  ];
const today = new Date().toLocaleDateString('en-us', { weekday: 'long' });

const StoreInfo = () => {
  const [isOpen, toggleIsOpen] = useState(false);

  const toggleOpeningHours = useCallback(() => {
    toggleIsOpen(isOpen => !isOpen);
  }, []);

  return(
    <div className="min-h-screen flex flex-col">
      <div className="flex justify-between bg-indigo-300 sm:px-6 px-2 m-4 rounded ">
        
        <div className="flex flex-col flex-shrink sm:px-6 sm:py-6 px-2 py-2">
          <span className="font-bold text-xl">{ name }</span>
          <span className="mt-2">{ mrt }</span>
          <div className="flex flex-wrap mt-2">
            {
              tag.map((tag, index) => {
                return(
                  <span className="mr-4 mb-2 inline-block px-3 py-2 leading-none bg-teal-200 text-teal-800 rounded-full font-semibold uppercase tracking-wide text-sm sm:text-xs">
                    { tag }
                  </span>
                )
              })
            }
          </div>          
        </div>

        <div className="flex items-center flex-shrink">
          <span className="px-4 py-1 bg-teal-200 font-bold text-sm sm:text-4xl text-teal-800 rounded-full">
            {
              ((soupRating + meatRating + noodleRating) / 3).toFixed(2)
            }
          </span>
        </div>

      </div>

      <div className="flex flex-col md:flex-row justify-between px-4 py-4 bg-indigo-300 m-4 rounded">
        
        <table className="bg-white rounded m-2 p-4 flex-3 text-xs sm:text-base">
          <tbody>
            <tr>
              <td className="px-2 py-3 bg-gray-200 border-b-2 border-white text-gray-600 text-center">店名</td>
              <td className="px-4 py-3 border-b-2 border-dotted border-gray-300 break-all">{ name }</td>
            </tr>
            <tr>
              <td className="px-2 py-3 bg-gray-200 border-b-2 border-white text-gray-600 text-center">地址</td>
              <td className="px-4 py-3 border-b-2 border-dotted border-gray-300 break-all">{ address }</td>
            </tr>

            <tr>
              <td className="px-2 py-3 bg-gray-200 border-b-2 border-white text-gray-600 text-center">官網</td>
              <td className="px-4 py-3 border-b-2 border-dotted border-gray-300 break-all">
                <a className="hover:text-indigo-500"
                    href={ website } target="_blank" rel="noopener noreferrer"
                >
                  { website }
                </a>
              </td>
            </tr>

            <tr>
              <td className="px-2 py-3 bg-gray-200 border-b-2 border-white text-gray-600 text-center">營業時間</td>
              <td className="px-4 py-3 border-b-2 border-dotted border-gray-300 break-all">
                <div className="flex items-center">
                  <span className="mr-4">{ openingHours.find(day => day.includes(today)) }</span>
                  {
                    isOpen ? 
                    (<svg onClick={ toggleOpeningHours } className="cursor-pointer stroke-current text-gray-600" viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" ><polyline points="18 15 12 9 6 15"></polyline></svg>)
                    :
                    (<svg onClick={ toggleOpeningHours } className="cursor-pointer stroke-current text-gray-600" viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" ><polyline points="6 9 12 15 18 9"></polyline></svg>)
                  }                  
                </div>
                
                <ul className={`mt-2 text-gray-600 leading-loose ${ isOpen ? "block" : "hidden" }`}>
                  {
                    openingHours.map((day, index) => {
                      if(!day.includes(today)){
                        return(
                          <li>{ day }</li>
                        )
                      }
                    })
                  }
                </ul>
              </td>
            </tr>
          </tbody>
        </table>

        <div className="flex justify-between items-start p-4 flex-wrap flex-1">
            <div className=" mx-1 mb-2 flex flex-col items-center justify-center">
              <div className="flex flex-col items-center rounded bg-teal-200 px-2 py-3">
                <span className="text-teal-800 text-center text-sm sm:text-3xl font-bold">{ soupRating }</span>
                <span className="text-teal-800 text-center">湯</span>
              </div>
              
            </div>

            <div className="mx-1 mb-2 flex flex-col items-center justify-center">
              <div className="flex flex-col items-center rounded bg-teal-200 px-2 py-3">
                <span className="text-teal-800 text-center text-sm sm:text-3xl font-bold">{ noodleRating }</span>
                <span className="text-teal-800 text-center">麵</span>
              </div>
            </div>

            <div className="mx-1 mb-2 flex flex-col items-center justify-center">
              <div className="flex flex-col items-center rounded bg-teal-200 px-2 py-3">
                <span className="text-teal-800 text-center text-sm sm:text-3xl font-bold">{ meatRating }</span>
                <span className="text-teal-800 text-center">叉燒</span>
              </div>
            </div>
            
        </div>
       

        <div>

        </div>
      </div>

    </div>
  );
};

export default StoreInfo;