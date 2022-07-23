import { compose, withProps } from "recompose";
import {
	withScriptjs,
	withGoogleMap,
	GoogleMap,
	Marker,
} from "react-google-maps";

const Gmaps = compose(
	withProps({
		googleMapURL:
			"https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places",
		loadingElement: <div style={{ height: `100%` }} />,
		containerElement: <div style={{ height: `400px` }} />,
		mapElement: <div style={{ height: `100%` }} />,
	}),
	withScriptjs,
	withGoogleMap
)((props) => (
	<GoogleMap defaultZoom={8} defaultCenter={{ lat: 1.3521, lng: 103.8198 }}>
		{props.isMarkerShown && (
			<Marker position={{ lat: 1.3521, lng: 103.8198 }} />
		)}
	</GoogleMap>
));

export default Gmaps;
