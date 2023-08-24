import React, { useState } from 'react'
import { recommondationResultsViewCarerDetail, recommondationResultsCarerData,recommondationResultsChildData ,recommondationResultsViewChildDetail } from '.';
import { useRouter } from 'next/router';

export const useRecommondationResults = () => {
    const router = useRouter();
    const paramValue = router.query.paramName;
    const {query}:any = useRouter() 
    const queryValue = query?.viewParam;
    const [selectedCard, setSelectedCard] = useState(null);
    const [filteredViewCarerDetailData, setFilteredViewCarerDetailData] = useState(recommondationResultsViewCarerDetail);
    const [filteredViewChildCarerDetailData, setFilteredViewChildCarerDetailData] = useState(recommondationResultsViewChildDetail);
    const handleChangeType = (type: any) => {
        setSelectedCard(type);
        const filteredData: any = (queryValue ==="view carer"?recommondationResultsViewCarerDetail:recommondationResultsViewChildDetail).filter(item => item.type === type);
        setFilteredViewCarerDetailData(filteredData);
        setFilteredViewChildCarerDetailData(filteredData);
        console.log("type is ", type)
    }
    return {
        selectedCard, setSelectedCard, filteredViewCarerDetailData, setFilteredViewCarerDetailData, handleChangeType, recommondationResultsCarerData,recommondationResultsChildData,
         router,paramValue,queryValue
,filteredViewChildCarerDetailData, setFilteredViewChildCarerDetailData
    }


}
