import React from "react";
import Card from "../core/card";
import Grid from "@material-ui/core/Grid";
import MyAppBar from '../layout/myAppBar'
import CssBaseline from "@material-ui/core/CssBaseline";
import withStyles from "@material-ui/core/styles/withStyles";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { actjewelSell, actGetKits, actGetKitById, actGetFirstKit } from "../../actions/listaKitActions";
import compose from 'recompose/compose';

const styles = theme => ({
  "@global": {
    body: {
      backgroundColor: "#DEF1FA"
    }
  },
  paper: {
    height: 140,
    width: 100
  },
  layout: {
    width: "auto",
    marginTop: "20px",
    marginLeft: theme.spacing.unit * 3,
    marginRight: theme.spacing.unit * 3,
    [theme.breakpoints.up(900 + theme.spacing.unit * 3 * 2)]: {
      width: 900,
      marginLeft: "auto",
      marginRight: "auto"
    }
  },
  heroContent: {
    maxWidth: 600,
    margin: "0 auto",
    padding: `${theme.spacing.unit * 8}px 0 ${theme.spacing.unit * 6}px`
  }
});


class ListaKit extends React.Component {

  constructor( props ){
    super( props );
    this.state = {
      spacing: "16"
    };
  }


  componentWillMount() {
    this.props.actGetKitById('5bdc47fc821ac100154e43cd')
  }

  render() {
    const { classes, kit, actjewelSell } = this.props;
    const { spacing } = this.state;
    console.log(kit)
    return (
      <React.Fragment>
        <MyAppBar titulo="Kit" 
          client={kit.client}
          partialJewels={kit.partialJewels}
          totalJewels={kit.totalJewels}
          partialSell={kit.partialSell}
          totalSell={kit.totalSell}
          color='secondary' />
        <CssBaseline />
        <main className={classes.layout}>
          <div className={classes.heroContent}>
            <Grid item xs={12}>
              <Grid
                container
                className={classes.demo}
                justify="center"
                spacing={Number(spacing)}
              >
                {kit.jewels.map(value => (
                  <Grid key={value._id} item onClick={actjewelSell}>
                    <Card
                      tipo={value.tipo}
                      valor={value.valor}
                      isSold={value.isSold}
                    />
                  </Grid>
                ))}
              </Grid>
            </Grid>
          </div>
        </main>
      </React.Fragment>
    );
  }
}
const mapStateToProps = state => ({
  kit: state.listaKit.kit
});
const mapDispatchToProps = dispatch =>
  bindActionCreators({ actjewelSell, actGetKits, actGetKitById, actGetFirstKit }, dispatch);

export default compose(withStyles(styles), connect(mapStateToProps, mapDispatchToProps))(ListaKit);
