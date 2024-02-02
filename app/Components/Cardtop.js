import Time from './Time';
export default function cardtop(props){
    const getFormattedDate = () => {
        const today = new Date();
        const day = today.getDate();
        const month = today.getMonth() + 1; // Month is zero-based
        const year = today.getFullYear();
        
        // Pad the day and month with leading zeros if needed
        const formattedDay = day < 10 ? `0${day}` : day;
        const formattedMonth = month < 10 ? `0${month}` : month;

        return `${formattedDay}/${formattedMonth}/${year}`;
    };
    return(
        <div id="card-top">
            <div id="dateweek">
                {props.day}
                <div id="date"> {getFormattedDate()} </div>
            </div>
            <Time />
        </div>
    )
}