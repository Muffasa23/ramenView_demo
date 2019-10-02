
### Command
`npm run dev` to run server and client concurrently

### Todo
1. 點進拉麵店時不換頁，顯示modal和疊新的page上去，同時配置react-router
2. 404頁面/loader
3. 加入pagination與相關的state
4. login相關功能, facebook api

### Backend
mongodb裡面現在暫時有六家的資料，格式如下：
{
    name: String,
    mrt: [String],
    tag: [String],
    website: String,
    address: String,
    imageURL: String,
    noodleRating: Number,
    meatRating: Number,
    soupRating: Number,
}

`/models/ramenInfo` 定義Schema

`/routes/api/ramenStore` 定義Get(依照keyword, mrtFilter, tagFilter)進行搜尋,還有Post(可以上傳資料)

proxy設在`/client`的`package.json`中，`http://localhost:6000`

### Frontend

#### component
1. Header： logo, searchbar
2. SearchFilter：左方由兩個CheckboxContainer和按鈕組成
3. RamenCard: 主畫面顯示搜尋結果，預設也會顯示一些拉麵店
4. CheckboxContainer: 保管兩組filter, tag & mrt

首頁會抓取西湖、台北車站、忠孝敦化這幾站的拉麵顯示
會因RWD而稍有變更，目前只有一個Page

#### action
```
export const actionTypes= {
  ADD_MRT_FILTER: 'ADD_MRT_FILTER',
  DEL_MRT_FILTER: 'DEL_MRT_FILTER',
  ADD_TAG_FILTER: 'ADD_TAG_FILTER',
  DEL_TAG_FILTER: 'DEL_TAG_FILTER',
  MODIFY_KEYWORD: 'MODIFY_KEYWORD'
};

export const actionsTypes = {
  GET_STORE_LIST: 'GET_STORE_LIST',  
};
````
分別定義在 `/client/src/redux/Module/searchModule` 和 `/client/src/redux/Module/ramenModule`中

在searchbar敲Enter或者是點擊update result按鈕，都會依照目前有的keyword, mrtFilter,tagFilter去資料庫搜索，什麼條件都沒給的時候返回全部（暫定）

#### RWD
畫面縮小時filter會收在filter按鈕裡，而searchbar這個input在大螢幕時屬於Header component，中小螢幕時則屬於searchFilter component。