import React,{ useEffect, useCallback, useState } from 'react';
import Header from '../../components/Header';
import SearchFilter from '../../components/SearchFilter';
import RamenCard from '../../components/RamenCard';
import { connect } from 'react-redux';
import { ramenActions } from '../../redux/Module/ramenModule';
import { searchActions } from '../../redux/Module/searchModule';
import { bindActionCreators } from 'redux';

const Main = (props) => {
  const [groupedStoreList, group] = useState([]);
  
  useEffect(() => {
    props.getInitialDisplayList(props.mrtFilter, props.tagFilter, props.keyword); 
  }, []);

  useEffect(() => {   
    group(
      Object.values(props.storeList.reduce(
          (result, store) => {
            result[store.mrt[0]] = result[store.mrt[0]] || [];
            result[store.mrt[0]].push(store);
            return result;
          }, [])
      )
    ); 
  }, [props.storeList]);

  useEffect(() => {
    props.delInitialState("西湖");
    props.delInitialState("忠孝敦化");
  }, []);

  return(
    <div id="app" className="min-h-screen bg-gray-200 antialiased xl:flex xl:flex-col xl:h-screen">
      <Header />
      <div className="xl:flex-1 xl:flex xl:overflow-y-hidden">
        <SearchFilter />

        <main className="py-6 xl:flex-1 xl:overflow-x-hidden">
          {
            groupedStoreList.map((location, index) => {
              return(
                <div>
                  <div className="px-4 xl:px-8">
                    <h3 className="text-gray-900 text-xl">
                      { location[0].mrt }
                    </h3>
                  </div>
                  <div className="mt-6 sm:overflow-x-auto sm:overflow-y-hidden" >
                    <div className="px-4 sm:inline-flex sm:pt-2 sm:pb-8 xl:px-8">
                      {
                        location.map((store, index) => {
                          return(
                            <div>
                              <RamenCard store={ store }/>
                            </div>
                          )
                        })
                      }
                    </div>
                  </div>
                </div>
              );
            })
        }
        </main>
      </div>
    </div>
  )

}

const mapStateToProps = ( state ) => {
  return{
    mrtFilter: state.search.mrtFilter,
    tagFilter: state.search.tagFilter,
    keyword: state.search.keyword,
    storeList: state.ramen.storeList
  }
}

const mapDispatchToProps = (dispatch) => {
  return { 
    getInitialDisplayList: bindActionCreators(ramenActions.getStoreList, dispatch),
    delInitialState: bindActionCreators(searchActions.delMrtFilter, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Main); 