import { Button, List } from 'antd'
import React, { useState } from 'react'
import ListStargazerModal from './ListStargazerModal'

interface ListRepoProps{
  data:any[];
  loading:boolean;
  loadMore:()=>void;
  total_repos:number;
}

const ListRepo :React.FC<ListRepoProps> = ({loading, data, loadMore, total_repos})=>{

    const [state, setState]= useState({
    isShow:false,
    url:'',
    total_stargazer:0
    })
    
    const toggleShowModal= (visible?:boolean)=>{
      if(typeof visible !== undefined){
        setState({...state,isShow:!!visible})
      }else {
        setState({...state, isShow: state.isShow})
      }
    }

    const onLoadMore=()=>{
        loadMore()
    }

    const loadStargazer = (url:string,total_stargazer:number)=>()=>{
      setState(state=>({...state, url:url,total_stargazer: total_stargazer,isShow:!state.isShow}))
    }


    const loadMoreButton = !loading ? (
      <div
        style={{
          textAlign: 'center',
          marginTop: 12,
          height: 32,
          lineHeight: '32px',
        }}
      >
        <Button disabled={loading} loading={loading} onClick={onLoadMore}>loading more</Button>
      </div>
    ) : null;

 
    return <>
     <List
    style={{overflowY:'scroll', height:300,maxHeight:350, scrollbarWidth:'none'}}
    className="demo-loadmore-list"
    loading={loading}
    itemLayout="horizontal"
    loadMore={data.length < total_repos ? loadMoreButton : null }
    dataSource={data}
    renderItem={item => (
      <List.Item
       // eslint-disable-next-line
        actions={[ <Button onClick={loadStargazer(item.stargazers_url,item.stargazers_count)} type='link' key="list-loadmore-more">Load stargazers</Button>]}
      >
          <List.Item.Meta
            title={item.name}
            description={item?.description}
          />
           <div>{`Số stargazers: ${item.stargazers_count}`}</div>
      </List.Item>
    )}
  />
      <ListStargazerModal isShow={state.isShow} toggleShow={toggleShowModal} url={state.url} total_stargzer={state.total_stargazer}  />
    </>
}

export default React.memo(ListRepo)