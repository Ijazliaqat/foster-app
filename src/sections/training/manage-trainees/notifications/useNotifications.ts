import React,{useState} from 'react'

const useNotifications = () => {
    const [currentTab, setCurrentTab] = useState(1);
  return {
    currentTab,setCurrentTab
  }
}

export default useNotifications