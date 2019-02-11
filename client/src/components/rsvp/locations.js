import React from 'react';

const locationData = [
    {},
    {
        locationNumber: "0522-10",
        name:'Golden Gate'   
    },
    {
        locationNumber: "0522-28",
        name:'Concord Tow World'   
    },
    {
        locationNumber: "0522-57",
        name:"Bailey's Rentals"   
    },
    {
        locationNumber: "0522-60",
        name:'Storage Pro: Richmond'   
    },
    {
        locationNumber: "0522-69",
        name:'Alameda Auto Lab'   
    },
    {
        locationNumber: "0523-10",
        name:'Hayward'   
    },
    {
        locationNumber: "0523-21",
        name:'Dublin Security Storage'   
    },
    {
        locationNumber: "0523-27",
        name:'Fremont Auto Repair'   
    },
    {
        locationNumber: "0523-29",
        name:'Bay Quality Motors'   
    },
    {
        locationNumber: "0118-10",
        name:'Santa Clara'   
    },{
        locationNumber: "0118-24",
        name:'Alum Rock Self Storage'   
    },{
        locationNumber: "0118-39",
        name:'JDM Monterey Rd.'   
    },{
        locationNumber: "0118-40",
        name:'JDM Montgomery St.'   
    },{
        locationNumber: "0685-10",
        name:'South San Francisco'   
    },
    {
        locationNumber: "0685-20",
        name:'Condon Rentals'   
    },{
        locationNumber: "0685-37",
        name:'Hengehold Rentals'   
    },{
        locationNumber: "0685-57",
        name:'Brake Plus'   
    },
    {
        locationNumber: "0692-10",
        name:'San Francisco Downtown'   
    },{
        locationNumber: "0691-10",
        name:'Santa Rosa'   
    },
    {
        locationNumber: "0691-25",
        name:'Broccos Barn'   
    },{
        locationNumber: "0691-26",
        name:'Heirloom Storage'   
    },{
        locationNumber: "0691-28",
        name:'Bartenders Unlimited'   
    },{
        locationNumber: "0691-31",
        name:'Boulevard Automotive'   
    },{
        locationNumber: "0655-10",
        name:'Gilroy'   
    },
    {
        locationNumber: "0655-27",
        name:'Mini Max Storage'   
    },
    {
        locationNumber: "0655-28",
        name:'Millers Storge'   
    },
    {
        locationNumber: "0655-29",
        name:'Locatelli Moving and Storage'   
    },
    {
        locationNumber: "Golden Gate District",
        name:''
    },
    {
        locationNumber: "Hikers",
        name:''
    }
]

const Locations = (props) => {
    return(
        <select className="form-control" id="location" onChange={props.locationHandler} >
            <option value="" disabled selected>Please choose your location</option>
            {locationData.map( location => {
                return(
                    <option>{location.locationNumber} {location.name}</option>
                )
            })}        
        </select>
    )
}

export default Locations;