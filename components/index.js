import React,{useState,useEffect,useContext} from "react";

// Internal imports

import {
    Table,
    Form,
    Services,
    Profile,
    CompleteShipment,
    GetShipment,
    StartShipment,
     } from "../../components";
     
import {TrackingContext } from "../Conetxt/TrackingContext";

const index = () => {
    const {
        currentUser,
        createShipment,
        getAllShipment,
        completeShipment,
        getShipment,
        StartShipment,
        getShipmentsCount,
    } = useContext(TrackingContext);

// state variables

const [createShipmentModel,setCreateShipmentModel] = useState(false);
const [openProfile, setOpenProfile] = useState(false);
const [startModal, setStartModal] = useState(false);
const [completeModal, setCompleteModal] = useState(false);
const [getModal,setGetModel] = useState(false);

// data state variable

const [allShipmentdata,setallShipmentdat] = useState();

// useEffect for fetching data

useEffect(()=>{
  const getCampaignsData , getAllShipments},[]);
}

// handle functions