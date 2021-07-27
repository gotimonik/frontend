import React, { Component } from "react";
import Loader from "../../components/Loader";
import { Grid, Button, Container, Typography } from "@material-ui/core";
import classes from "./style.module.scss";
import { getPractices } from "./APICall";
import Record from "../Records";

export default class Practices extends Component {
    constructor(props) {
        super(props);

        this.state = {
            data: [],
            error: false,
            loader: false,
            pageLoader: false,
            offset: 0,
            limit: 10,
            hasMore: false,
        };
    }

    render() {
        const {
            loader,
            error,
            data,
            pageLoader,
            hasMore,
        } = this.state;

        return (
            <Container className={classes.root}>
                {loader && <Loader />}
                {!loader && !error && (
                    <Grid container className={classes.root} justifyContent={"center"}>
                        <Typography gutterBottom variant="h4">Practices</Typography>
                        {!loader &&
                            !error &&
                            data.length > 0 &&
                            data.map((da, index) => (
                                <Grid item xs={12} key={index}>
                                    <Record data={da} />
                                </Grid>
                            ))
                        }
                        {pageLoader && (
                            <Grid item xs={12} style={{ textAlign: "center" }}>
                                <Loader />
                            </Grid>
                        )}

                        {!pageLoader &&
                            hasMore && (
                                <Grid
                                    item
                                    xs={12}
                                    style={{ textAlign: "center", margin: "20px" }}
                                >
                                    <Button
                                        variant={"contained"}
                                        onClick={() => this.loadmore()}
                                        className={'dark-common-button'}
                                    >
                                        Load more
                                    </Button>
                                </Grid>
                            )}
                    </Grid>
                )}
            </Container>
        );
    }

    fetchPractices = async () => {
        const { limit, offset, data } = this.state;
        const result = await getPractices(limit, offset)
        this.setState({ data: [...data, ...result], hasMore: result.length === limit, loader: false, pageLoader: false, offset: [...result, ...data].length || offset })
    }

    loadmore = () => {
        this.setState({ pageLoader: true }, () => this.fetchPractices())
    }

    componentDidMount() {
        this.setState({ loader: true }, () => {
            this.fetchPractices();
        })
    }
}
