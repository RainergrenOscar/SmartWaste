import React, { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import SpecificAd from "../components/card/SpecificAd"
import { useDispatch, useSelector } from "react-redux"
import { getSpecificAd, reset } from "../redux/ad/AdSlice"
import Loading from "../components/Loading"

const Ad = () => {
	const params = useParams()
	const dispatch = useDispatch()
	const { ad, isLoading, isSuccess, isError, message } = useSelector(
		(state) => state.ads
	)
	const { adId } = useParams()

	useEffect(() => {
		if (isError) {
			console.log(message)
		}
		dispatch(getSpecificAd(adId))
	}, [isError, getSpecificAd, adId])

	if (isLoading) {
		return <Loading />
	}

	if (isError) {
		return <h3>Ooops.... Något blev fel</h3>
	}

	return <div className='blog-details'>{ad.user.name}</div>
}

export default Ad
