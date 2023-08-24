import CustomHorizaontalTab from '@root/components/customTabs'
import React from 'react'
import { usePersonaFocusedContent } from './usePersonaFocusedContent'
import Editorial from './editorial/Editorial'
import Personas from './personas/Personas'
import Verticals from './verticals/Verticals'
import ContentIdeas from './contentIdeas/ContentIdeas'
import Published from './published/Published'

const PersonaFocusedContent = () => {
  const {currentTab , handleTabChange} = usePersonaFocusedContent()
  return (
    <CustomHorizaontalTab
    currentTab={currentTab}
    setCurrentTab={handleTabChange}
    tabsArray={["Editorial", "Personas", "Verticals", "Content Ideas" , "Published"]}
  >
    <Editorial/>
    <Personas/>
    <Verticals/>
    <ContentIdeas/>
    <Published/>
  </CustomHorizaontalTab>
  )
}

export default PersonaFocusedContent