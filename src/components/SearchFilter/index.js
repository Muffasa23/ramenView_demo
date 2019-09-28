import React from 'react';

const tags = ["豚骨", "醬油", "味噌", "煮干", "家系", "鷄白湯", "沾麵", "拌麵"];
const stations = ["台北車站","中山","市政府","國父紀念館","忠孝敦化","忠孝敦化","中正紀念堂","公館","古亭","台北小巨蛋","西湖"];

const SearchFilter = () => (
  <section class="bg-gray-800 px-4 py-3 xl:w-64 xl:py-5">
    
    {/* search and filter for sm */}
    <div class="flex justify-between px-4 py-3 xl:hidden">
      <div class="relative max-w-xs w-full">
        <div class="absolute inset-y-0 left-0 flex items-center pl-3">
          <svg class="h-6 w-6 fill-current text-gray-600" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M16.32 14.9l1.1 1.1c.4-.02.83.13 1.14.44l3 3a1.5 1.5 0 0 1-2.12 2.12l-3-3a1.5 1.5 0 0 1-.44-1.14l-1.1-1.1a8 8 0 1 1 1.41-1.41l.01-.01zM10 16a6 6 0 1 0 0-12 6 6 0 0 0 0 12z"/></svg>
        </div>
        <input class="block w-full bg-gray-900 focus:outline-none focus:bg-white focus:text-gray-900 text-white rounded-lg pl-10 pr-4 py-2" placeholder="Search by keywords" />
      </div>

      <button type="button" class="ml-4 inline-flex items-center hover:bg-gray-600 focus:outline-none focus:shadow-outline rounded-lg shadow pl-3 pr-4">
        <svg class="h-6 w-6 fill-current text-gray-500" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M3 6a1 1 0 0 1 1-1h16a1 1 0 1 1 0 2H4a1 1 0 0 1-1-1zm3 6a1 1 0 0 1 1-1h10a1 1 0 1 1 0 2H7a1 1 0 0 1-1-1zm4 5a1 1 0 1 0 0 2h4a1 1 0 1 0 0-2h-4z"/></svg>
        <span class="ml-1 text-white font-medium">Filters</span>
      </button>
    </div>

    {/* filter panel */}
    <form class="xl:block xl:h-full xl:flex xl:flex-col xl:justify-between hidden">

      <div class="lg:flex xl:block xl:overflow-y-auto">
        <div class="px-4 py-4 lg:w-1/3 xl:w-full">
            <span class="block text-sm font-semibold text-gray-500">捷運站</span>
            <div class="sm:flex sm:-mx-2 sm:flex-wrap">
              {
                stations.map((station, index) => {
                  return(
                    <label class="mt-3 flex items-center sm:w-1/4 sm:px-2 lg:w-1/2 xl:w-full">
                      <input class="form-checkbox bg-gray-900 focus:bg-gray-700" type="checkbox" name="balcony" />
                      <span class="ml-2 text-white">{station}</span>
                    </label>
                  );
                })
              }              
            </div>
          </div>

          <div class="px-4 py-4 lg:w-1/3 xl:w-full">
            <span class="block text-sm font-semibold text-gray-500">口味</span>
            <div class="sm:flex sm:-mx-2 sm:flex-wrap">
              {
                tags.map((tag, index) => {
                  return(
                    <label class="mt-3 flex items-center sm:w-1/4 sm:px-2 lg:w-1/2 xl:w-full">
                      <input class="form-checkbox bg-gray-900 focus:bg-gray-700" type="checkbox" name="balcony" />
                      <span class="ml-2 text-white">{tag}</span>
                    </label>
                  );
                })
              }              
            </div>
          </div>
      </div>

    </form>

  </section>
);

export default SearchFilter;