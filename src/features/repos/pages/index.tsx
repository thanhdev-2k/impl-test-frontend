import { Form } from 'antd'
import React, { useState } from 'react'
import { CardContainer } from '../../../commons/styled'
import ListRepo from '../components/ListRepo'
import SearchBar from '../components/SearchBar'
import useGetCurrentUserByUserName from '../hooks/useGetCurrentUser'
import useGetRepoByUserName from '../hooks/useGetReposByUserName'



const ReposPageIndex:React.FC =()=>{

    const [state, setState]= useState({
        page_index:1,
    })

    const [form] = Form.useForm();

    const {onGetRepoByUserName, loading,data,userName}  = useGetRepoByUserName()
    const {onGetCurrentUserByUserName, total_public_repos, loading: loadingGetUser} = useGetCurrentUserByUserName()

    const onLoadMoreRepo = async()=>{
        await setState(state=>{return ({...state, page_index:state.page_index+1})})
        onGetRepoByUserName({userName:form.getFieldValue('name'),page_index:state.page_index +1})
    }



    const onFinish = (values:any)=>{
       if(userName.trim()?.toLowerCase() !== values.name.trim()?.toLowerCase()){
        onGetCurrentUserByUserName({userName:values.name?.trim()?.toLowerCase()});
        onGetRepoByUserName({userName:values.name?.trim()?.toLowerCase(),page_index:1})
       }
       return
    }
    return (<CardContainer >
        <Form form={form} onFinish={onFinish} >
           <SearchBar total_repos={total_public_repos} loaded_repos={data.length} loading={loadingGetUser||loading} form={form}   />
           {data.length ? <ListRepo total_repos={total_public_repos} data={data} loadMore={onLoadMoreRepo} loading={loading || loadingGetUser} /> :null}
        </Form>
        </CardContainer>)
}

export default React.memo(ReposPageIndex)