import React from 'react';

const RamenCard = (props) => {
  const store = props.store;
  const rating = ((store.soupRating + store.meatRating + store.noodleRating) / 3).toFixed(2);
  return(
    <div className="mr-10 mb-10">
      <div className="relative pb-5/6 h-64 w-64">
        <img className="absolute inset-0 h-full w-full rounded-lg shadow-md object-cover" src={ store.imageURL } alt="" />
      </div>

      <div className="relative px-4 -mt-16 w-64 ">
        <div className="bg-white rounded-lg px-4 py-4 h-40 shadow-lg flex flex-col justify-between">
          
          <div className="flex items-baseline">
            <span className="inline-block px-2 py-1 leading-none bg-teal-200 text-teal-800 rounded-full font-semibold uppercase tracking-wide text-xs">Plus</span>
            <div className="ml-2 text-xs text-gray-600 font-semibold uppercase tracking-wide">
              { 
                store.tag.map((tag, index) => {
                  return (
                    <span> { tag } </span>
                  )
                }) 
              }
            </div>
          </div>

          <h4 className="break-all mt-1 text-gray-900 font-semibold text-lg">{ store.name }</h4>

          {/* <div className="mt-1">
            <span className="text-gray-900"></span>
            <span className="ml-1 text-sm text-gray-600"></span>
          </div> */}

          <div className=" mt-2 flex items-center text-sm text-gray-600">
            <svg v-for="i in 5" className="h-6 w-6 fill-current">
              <path d="M8.128 19.825a1.586 1.586 0 0 1-1.643-.117 1.543 1.543 0 0 1-.53-.662 1.515 1.515 0 0 1-.096-.837l.736-4.247-3.13-3a1.514 1.514 0 0 1-.39-1.569c.09-.271.254-.513.475-.698.22-.185.49-.306.776-.35L8.66 7.73l1.925-3.862c.128-.26.328-.48.577-.633a1.584 1.584 0 0 1 1.662 0c.25.153.45.373.577.633l1.925 3.847 4.334.615c.29.042.562.162.785.348.224.186.39.43.48.704a1.514 1.514 0 0 1-.404 1.58l-3.13 3 .736 4.247c.047.282.014.572-.096.837-.111.265-.294.494-.53.662a1.582 1.582 0 0 1-1.643.117l-3.865-2-3.865 2z"/>
            </svg>
            <span className="ml-2 mr-8"> { rating } </span> 
            {/* <span className="ml-2">{ store.views } views</span> */}
          </div>

        </div>
      </div>

    </div>
  )
}

export default RamenCard;