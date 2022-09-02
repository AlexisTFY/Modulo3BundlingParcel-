import React from "react";
import { getRandomArbitrary } from "./randomService";
import classes from "./randomComponentStyles.scss";

export const RandomComponent: React.FC = () => {
  const [randomNumber, setRandom] = React.useState(0);

  React.useEffect(() => {
    setRandom(getRandomArbitrary(1,90));
  }, []);

  return (
    <div className={classes.container}>
      <p>Numero Random <br/> <span>{randomNumber}</span></p>
    </div>
  );
};
