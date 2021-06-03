import { Button, Col, Form, FormInstance, Input, Row } from 'antd'
import React from 'react'

interface SearchBarProsp{
    form:FormInstance
    loading:boolean;
    loaded_repos:number;
    total_repos:number
}

const SearchBar :React.FC<SearchBarProsp>=({ form, loading, loaded_repos, total_repos})=>{
    
    return (
       <>
        <Row gutter={24}>
        <Col span={21}>
            <Form.Item rules={[{required:true, message:'Enter github ussername'},{
                whitespace:true,message:'Enter github ussername'
            }]} name='name'>
                <Input placeholder='Nhập tên github user' />
            </Form.Item>
        </Col>
        <Col span={3}>
            <Button htmlType='submit' loading={loading} >Tìm kiếm</Button>
        </Col>
           
     </Row>
      <Row>
         <p>{`Public repos: ${total_repos ? total_repos: 0}`}</p> 
     </Row>
        <Row>
          <p>{`Đã load: ${loaded_repos}/${total_repos ? total_repos: 0} repos`}</p>
        </Row>
       </>
    )
}

export default React.memo(SearchBar)