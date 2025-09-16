import React from 'react';
import { Link } from 'react-router-dom';

import {
    Button,
    ButtonGroup,
    Card,
    Divider,
    Icon
} from "@mui/material";
import { makeStyles } from '@mui/styles';
import clsx from "clsx";
import MediumIconFilled from "../../common/icons/MediumIconFilled";


const useStyles = makeStyles(({ palette, ...theme }) => ({
    card: {
        borderRadius: 20,
        border: `1px solid transparent`,
        "&:hover": {
            border: `1px solid ${palette.primary.main}`,
        },
        "&:hover $imageOverlay": {
            opacity: 1,
        },

    },
    imageOverlay: {
        position: "absolute",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        top: 0,
        bottom: 0,
        right: 0,
        left: 0,
        zIndex: 1,
        opacity: 0,
        background: "rgba(0,0,0,0.67)",
        transition: "all 250ms ease",
    },
    dateHolder: {
        borderRadius: 4,
        padding: "0.3rem 0.6rem",
        background: "rgba(var(--primary),0.4)",
        textAlign: "center",
        marginRight: "1rem",
    },
}));


const BlogCard = ({ post }) => {

    const classes = useStyles();

    return (

        <Card elevation={3} className={clsx(classes.card, "card")}>
            <div className="relative">
                <img
                    className="w-full block"
                    src={post.imageUrl}
                    alt="sq-1"
                />
                <div className={classes.imageOverlay}>
                    <Link to={`/blog/${post.urlSlug}`}>
                        <Button
                            className="text-white"
                            variant="text"
                            color="primary"
                        >
                            Click to read more
                        </Button>
                    </Link>
                </div>
            </div>
            <div className="px-4 pt-4">
                <div className="flex items-center">
                    <div className={classes.dateHolder}>
                        <p className="m-0 text-white">{post.dateDay}</p>
                        <small className="m-0 text-primary">{post.dateMonth}</small>
                    </div>
                    <div>
                        <h5 className="m-0">{post.title}</h5>
                        <h6 className="m-0">{post.subSeriesTitle}</h6>
                    </div>
                </div>
                <p className="mt-6 mb-8">
                    {post.details}
                </p>
                <Divider className="bg-light-primary" />
                <div className="flex justify-between items-right my-1">
                    {post.readTime} read
                    <div className="flex justify-between items-center">
                    </div>
                    <ButtonGroup variant="plain" >
                        {post.mediumUrl !== undefined &&
                            <a href={post.mediumUrl}>
                                <MediumIconFilled fontSize="small" />
                            </a>
                        }
                        <Button onClick={() => { navigator.clipboard.writeText("https://pixelper.com/#/blog/" + post.urlSlug) }}>
                            <Icon fontSize="small">
                                link
                            </Icon>
                        </Button>
                    </ButtonGroup>
                </div>
            </div>
        </Card>
    )
}
export default BlogCard