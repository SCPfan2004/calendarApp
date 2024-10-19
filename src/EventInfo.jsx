function EventInfo({chosenEvent}) {
    return (chosenEvent.length > 0) ? 
        <>
            <h2>{chosenEvent[0]}</h2>
            <span>Start: {chosenEvent[1][0]}</span><br/>
            <span>End:   {chosenEvent[1][1]}</span>
        </> : 

        <>
            <h2>Click on the blue block above whose information you are interested in</h2>
        </>
}

export default EventInfo;