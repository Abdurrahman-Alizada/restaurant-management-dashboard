import { createSlice } from '@reduxjs/toolkit'


const initialState = [
  {
    id: '0',
    name: 'Amy Farha',
    avatar_url: 'https://media.istockphoto.com/photos/gold-and-blue-macaw-picture-id95825078?b=1&k=20&m=95825078&s=170667a&w=0&h=1i9fEgQg4-tvVX3tHmW-B8jZg_LEoE4QLLMWlplb3EM=',
    subtitle: 'Vice President',
    membersAvatars:[
      "https://bootdey.com/img/Content/avatar/avatar6.png",
      "https://bootdey.com/img/Content/avatar/avatar7.png",
      "https://bootdey.com/img/Content/avatar/avatar2.png",
    ]
  },
  {
    id: '1',
    name: 'Chris Jackson',
    avatar_url: 'https://media.istockphoto.com/photos/red-tailed-black-cockatoo-picture-id1159108632?b=1&k=20&m=1159108632&s=170667a&w=0&h=Jkf4rYZNDawLV-8ER33bYLFHbXyAiNRGXIa9tx03mBI=',
    subtitle: 'Vice Chairman',
   
    membersAvatars:[
      "https://bootdey.com/img/Content/avatar/avatar6.png", 
      "https://bootdey.com/img/Content/avatar/avatar1.png", 
      "https://bootdey.com/img/Content/avatar/avatar2.png",
      "https://bootdey.com/img/Content/avatar/avatar7.png",
      "https://bootdey.com/img/Content/avatar/avatar3.png",
      "https://bootdey.com/img/Content/avatar/avatar4.png"
    ]
  },
  {
    id: '2',
    name: 'Chris Jackson 3',
    avatar_url: 'https://media.istockphoto.com/photos/red-tailed-black-cockatoo-picture-id1159108632?b=1&k=20&m=1159108632&s=170667a&w=0&h=Jkf4rYZNDawLV-8ER33bYLFHbXyAiNRGXIa9tx03mBI=',
   
    subtitle: 'Vice Chairman',
    membersAvatars:[
      "https://bootdey.com/img/Content/avatar/avatar6.png", 
      "https://bootdey.com/img/Content/avatar/avatar1.png", 
      "https://bootdey.com/img/Content/avatar/avatar2.png",
      "https://bootdey.com/img/Content/avatar/avatar7.png",
      "https://bootdey.com/img/Content/avatar/avatar3.png",
      "https://bootdey.com/img/Content/avatar/avatar4.png"
    ]

  },
  {
    id: '3',
    name: 'Chris Jackson 4',
    avatar_url: 'https://media.istockphoto.com/photos/red-tailed-black-cockatoo-picture-id1159108632?b=1&k=20&m=1159108632&s=170667a&w=0&h=Jkf4rYZNDawLV-8ER33bYLFHbXyAiNRGXIa9tx03mBI=',
    subtitle: 'Vice Chairman',
    membersAvatars:[
      "https://bootdey.com/img/Content/avatar/avatar6.png", 
      "https://bootdey.com/img/Content/avatar/avatar1.png", 
      "https://bootdey.com/img/Content/avatar/avatar2.png",
      "https://bootdey.com/img/Content/avatar/avatar7.png",
      "https://bootdey.com/img/Content/avatar/avatar3.png",
      "https://bootdey.com/img/Content/avatar/avatar4.png"
    ]
  },
 ]


export const groupSlice = createSlice({
  name: 'groups',
  initialState,
  reducers: {
    addGroup: (state, action) =>{
      // console.log(action.payload)
      const newGroup = {
        name : action.payload.name,
        avatar_url:action.payload.avatar_url,
        subtitle : 'subtitle',
        membersAvatars:[
          "https://bootdey.com/img/Content/avatar/avatar6.png",
          "https://bootdey.com/img/Content/avatar/avatar6.png",
          "https://bootdey.com/img/Content/avatar/avatar4.png",
        ]
      }
      state.push(newGroup)
    },
  },
})

// Action creators are generated for each case reducer function
export const { addGroup } = groupSlice.actions

export default groupSlice.reducer