import { Button, List, Modal } from 'antd'
import React, { useEffect, useState } from 'react'
import useGetListStargazer from '../hooks/useGetListStargazer'

interface ModalProps{
    isShow:boolean;
    toggleShow:(visible?:boolean)=>void
    url:string;
    total_stargzer:number
}

const ListStargazersModal :React.FC<ModalProps>=({isShow,toggleShow,url,total_stargzer})=>{

    const {onGetListStargazer,data, loading} = useGetListStargazer()

    const [pageIndex, setPageIndex] = useState(1) 
   
    useEffect(()=>{
        if(isShow){
            onGetListStargazer({url:`${url}?page=${pageIndex}`})
        }
    },
    // eslint-disable-next-line
    [isShow])



    const onClose= ()=>{
        toggleShow()
    }

    const onLoadMore=()=>{
      setPageIndex(pageIndex+1)
      onGetListStargazer({url:`${url}?page=${pageIndex+1}`})
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
    
    return (
    <Modal visible={isShow} onCancel={onClose} footer={null} title={<>
      <div>Danh sách stargazer </div>
      {`Đã load : ${data.length}/ ${total_stargzer}`}
    </>}>
        <List
        style={{overflowY:'scroll', height:300,maxHeight:350, scrollbarWidth:'none'}}
        className="demo-loadmore-list"
        loading={loading}
        itemLayout="horizontal"
        loadMore={data.length < total_stargzer ? loadMoreButton : null }      
        dataSource={data}
        renderItem={item => (
        <List.Item>
          <List.Item.Meta
          title={item.login}
           description={item?.description}
           />

        </List.Item>
        )}
        />
  </Modal>)
}

export default React.memo(ListStargazersModal)