import {
  ComposableMap,
  Geographies,
  Geography,
  Marker,
} from "react-simple-maps";

const markers = [
  { name: "Buenos Aires", coordinates: [-58.3816, -34.6037] },
  { name: "La Paz", coordinates: [-68.1193, -16.4897] },
  { name: "Brasilia", coordinates: [-47.8825, -15.7942] },
  { name: "Santiago", coordinates: [-70.6693, -33.4489] },
  { name: "Bogota", coordinates: [-74.0721, 4.711] },
  { name: "Quito", coordinates: [-78.4678, -0.1807] },
  { name: "Georgetown", coordinates: [-58.1551, 6.8013] },
  { name: "Asuncion", coordinates: [-57.5759, -25.2637] },
  { name: "Paramaribo", coordinates: [-55.2038, 5.852] },
  { name: "Montevideo", coordinates: [-56.1645, -34.9011] },
  { name: "Caracas", coordinates: [-66.9036, 10.4806] },
  { name: "Lima", coordinates: [-77.0428, -12.0464] },
];

export default function Map(props) {
  // const markers = props.logs;
  return (
      <ComposableMap color="primary">
        <Geographies
          geography="/features.json"
        >
          {({ geographies }) =>
            geographies.map((geo) => (
              <Geography key={geo.rsmKey} geography={geo} fill="#2aa49c"
          stroke="#0b776c"/>
            ))
          }
        </Geographies>
        {markers.map(({ _, coordinates }) => (
          <Marker coordinates={coordinates}>
            <circle r={2} fill="#a42a32" stroke="#a42a32" strokeWidth={2} />
          </Marker>
        ))}
      </ComposableMap>
  );
}
