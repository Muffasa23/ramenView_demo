import React,{ useEffect, useCallback } from 'react';
import Header from '../../components/Header';
import SearchFilter from '../../components/SearchFilter';
import RamenCard from '../../components/RamenCard';
import { connect,useSelector, useDispatch } from 'react-redux';
import { ramenActions } from '../../redux/Module/ramenModule';
import { bindActionCreators } from 'redux';

const Main = (props) => {
  
  useEffect(() => {
    props.getInitialDisplayList(["西湖","忠孝敦化","台北車站"],[],'');
    
  }, []);

  return(
    <div id="app" className="min-h-screen bg-gray-200 antialiased xl:flex xl:flex-col xl:h-screen">
      <Header />
      <div className="xl:flex-1 xl:flex xl:overflow-y-hidden">
        <SearchFilter />

        <main className="py-6 xl:flex-1 xl:overflow-x-hidden">
                <div>
                  <div className="px-4 xl:px-8">
                    <h3 className="text-gray-900 text-xl">{  }</h3>
                  </div>
                  <div className="mt-6 sm:overflow-x-auto sm:overflow-y-hidden" >
                    {/* <div className="px-4 sm:inline-flex sm:pt-2 sm:pb-8 xl:px-8">
                      {
                        categorizedByMrtResult[location].map((store, index) => {
                          return(
                            <div>
                              <RamenCard store={store}/>
                            </div>
                          )                          
                        })
                      }                      
                    </div> */}
                  </div>
                </div>
          
        </main>
      </div>
    </div>
  )

}

const mapStateToProps = ( state ) => {
  return{
    storeList: state.ramen.storeList
  }
}

const mapDispatchToProps = (dispatch) => {
  return { 
    getInitialDisplayList: bindActionCreators(ramenActions.getStoreList, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Main); 

/* 
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
    };

  } */