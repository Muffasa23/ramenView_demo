import React from 'react';
import PropTypes from 'prop-types';
import Header from '../../components/Header';
import SearchFilter from '../../components/SearchFilter';
import RamenCard from '../../components/RamenCard';

class Main extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      locations:[
        {
          MRT: '西湖',
          ramen:[
            {
              imageURL: "https://i.imgur.com/umbgP2y.jpg",
              name: "鶏吉君 とりよしくん らーめん雞白湯專門",
              tags: ["鷄白湯","醬油"],
              rating: 5,
              views: 2
            },{
              imageURL: "https://i.imgur.com/681fvst.jpg",
              name: "拉麵 一番星",
              tags: ["鷄白湯","醬油"],
              rating: 4.25,
              views: 11
            }
          ]
        },
        {
          MRT: '忠孝敦化',
          ramen:[
            {
              imageURL: "https://i.imgur.com/1yl1ISV.jpg",
              name: "山嵐拉麵 台灣分店 YAMAARASHI 忠孝店",
              tags: ["豚骨","沾麵"],
              rating: 4.5,
              views: 8
            },
            {
              imageURL: "https://i.imgur.com/YdYUTHb.jpg",
              name: "麵屋壹の穴 ICHI",
              tags: ["豚骨","鷄白湯","醬油","魚介"],
              rating: 4.19,
              views: 3
            },
            {
              imageURL: "https://i.imgur.com/ut7wDqo.jpg",
              name: "鷹流【台湾本店】",
              tags: ["豚骨","沾麵"],
              rating: 3.83,
              views: 9
            }
          ]
        },
        {
          MRT: "台北車站",
          ramen: [
            {
              imageURL: "https://i.imgur.com/bjgmXfB.jpg",
              name: "麺屋一燈 ITTO",
              tags: ["煮干","沾麵"],
              rating: 2.44,
              views: 11
            },
            {
              imageURL: "https://i.imgur.com/jJzlWoQ.jpg",
              name: "麵屋武藏 本店",
              tags: ["豚骨","鷄白湯","沾麵"],
              rating: 3.5,
              views: 11
            }
          ]
        }
      ]
    }
  }
  
  componentWillMount(){
    window.scrollTo(0, 0);
  }

  render(){
    return(
      <div id="app" class="min-h-screen bg-gray-200 antialiased xl:flex xl:flex-col xl:h-slocacreen">
        <Header />
        <div class="xl:flex-1 xl:flex xl:overflow-y-hidden">
          <SearchFilter />

          <main class="py-6 xl:flex-1 xl:overflow-x-hidden">
            {
              this.state.locations.map((location, index) => {
              return(
                <div>
                  <div class="px-4 xl:px-8">
                    <h3 class="text-gray-900 text-xl">{location.MRT}</h3>
                  </div>
                  <div class="mt-6 sm:overflow-x-auto sm:overflow-y-hidden">
                    <div class="px-4 sm:inline-flex sm:pt-2 sm:pb-8 xl:px-8">
                      {
                        location.ramen.map((store, index) => {
                          return(
                            <div>
                              <RamenCard store={store}/>
                            </div>
                          )                          
                        })
                      }                      
                    </div>
                  </div>
                </div>
              )
            })
          }
            
          </main>
        </div>
      </div>
    )
  }

}

export default Main;