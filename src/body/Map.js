import './Map.css';
import CanadaMap from 'react-canada-map';

function Map() {
  const mapClickHandler = (province, event) => {
    console.log("province clicked: ", province)
  }

  const customizeProvince = () => {
    return {
      ON: {
        fillColor: "DarkRed",
        onHoverColor: "black",
      },
      NB: {
        fillColor: "#000000",
      },
      QC: {
        onHoverColor: "#FF69B4",
      },
    }
  }

  return (
    <CanadaMap
      customize={customizeProvince()}
      fillColor="ForestGreen"
      onHoverColor="Gold"
      onClick={mapClickHandler}
    ></CanadaMap>
  )
}

export default Map;
