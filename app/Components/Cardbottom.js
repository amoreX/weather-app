export default function cardbottom(props){
    return (
        <div id="card-bottom">
			<div id="temp">
				{props.temp}°C
			</div>
           <div id="date">
            {props.day}
            </div>
        </div>
    )
}