import React from 'react'
import styled from 'styled-components'
import { db } from '../firebase'
import { useDispatch } from 'react-redux'
import { enterRoom } from '../feature/appSlice'

function SidebarOption({Icon , title,addchanneloption,id}) {

    const dispatch = useDispatch()

    const addchannel = () => {
        const ChannelName = prompt('plz enter a channelName')

        if(ChannelName) {
            db.collection('rooms').add({
                name:ChannelName,
            })
        }
    }
    const selectchannel = () => {
        if(id) {
            dispatch(enterRoom({
                roomId: id
            }))
        
        }
    }
  return (
    <SidebarOptionContainer onClick={addchanneloption ? addchannel : selectchannel}>
        {Icon && <Icon fontSize ="small" style={{}}/>}
        {Icon ? (
            <h3>{title}</h3>
        ): (
            <SidebarOptionChannel >
              <span>#</span>{title}
            </SidebarOptionChannel>
        )}
    </SidebarOptionContainer>
  )
}
export default SidebarOption

const SidebarOptionContainer = styled.div`
   display: flex;
   cursor: pointer;
   align-items: center;
   padding-left: 5px;
   margin-bottom: 10px;
   :hover {
       opacity: 0.9;
       background-color: #340e36;
   }

   >h3 {
       font-weight: 500;
   }
   > h3 > span {
       padding: 15px;
   }

`;
const SidebarOptionChannel = styled.h3`
    padding: 10px 0;
    font-weight: 300;
`;