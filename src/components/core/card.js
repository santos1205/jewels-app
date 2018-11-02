import React from "react";
import PropTypes from "prop-types";
import {currencyFormat} from '../../commonFunctions/maths'
import { withStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import PriceLabel from "./priceLabel";

// TODO: Tipar as props
const styles = {
  card: {
    width: 150,
    height: 210
  },
  media: {
    height: 130,
    width: 100,
    marginTop: "5px",
    marginLeft: "22px"
  }
};

const MyCard = props => {
  const { classes, tipo, valor, isSold } = props;

  let status = isSold ? "VENDIDO" : "";  
  
  return (
    <Card className={classes.card}>
      <CardActionArea>
        <CardMedia
          className={classes.media}          
          //image={'https://uploads.codesandbox.io/uploads/user/e8cb9cd4-720b-4761-8a65-c9f657789081/Di9y-Anel.jpg'}          
          //image={'https://uploads.codesandbox.io/uploads/user/e8cb9cd4-720b-4761-8a65-c9f657789081/M3gL-Pulseira.jpg'}          
          //image={'https://uploads.codesandbox.io/uploads/user/e8cb9cd4-720b-4761-8a65-c9f657789081/I7hs-Brinco.jpg '}          
          image={'https://uploads.codesandbox.io/uploads/user/e8cb9cd4-720b-4761-8a65-c9f657789081/hfpE-Colar.jpg'}          
          title="jewel"
        />
        <CardContent>
          <Typography gutterBottom variant="headline" component="h2">
            <PriceLabel valor={currencyFormat(valor)} status={status} />
          </Typography>
          {`${tipo}`} <b>{status}</b>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

MyCard.propTypes = {
  classes: PropTypes.object.isRequired,  
  isSold: PropTypes.bool
};

export default withStyles(styles)(MyCard);
