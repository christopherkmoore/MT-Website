import React from 'react';
import { Link } from 'react-router-dom';

import {
    Button,
    Card,
    Icon
} from "@mui/material";
import { makeStyles } from '@mui/styles';
import MediumIconFilled from "../../common/icons/MediumIconFilled";


const useStyles = makeStyles(({ palette, ...theme }) => ({
    card: {
        background: 'rgba(30, 41, 59, 0.7)',
        backdropFilter: 'blur(10px)',
        border: '1px solid rgba(148, 163, 184, 0.2)',
        borderRadius: '16px',
        boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.3), 0 4px 6px -2px rgba(0, 0, 0, 0.2)',
        transition: 'all 0.3s ease',
        overflow: 'hidden',
        height: '100%',
        "&:hover": {
            boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.4), 0 10px 10px -5px rgba(0, 0, 0, 0.3)',
            transform: 'translateY(-2px)',
            borderColor: 'rgba(59, 130, 246, 0.4)',
        },
    },
    imageContainer: {
        position: 'relative',
        overflow: 'hidden',
        height: '250px',
        '&:hover $imageOverlay': {
            opacity: 1,
        },
    },
    cardImage: {
        width: '100%',
        height: '100%',
        objectFit: 'cover',
        transition: 'transform 0.3s ease',
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
        background: "linear-gradient(to top, rgba(30, 41, 59, 0.9) 0%, rgba(30, 41, 59, 0.6) 50%, transparent 100%)",
        transition: "all 0.3s ease",
    },
    readButton: {
        background: 'linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%)',
        color: '#ffffff',
        border: 'none',
        borderRadius: '8px',
        padding: '8px 16px',
        fontSize: '0.875rem',
        fontWeight: '600',
        '&:hover': {
            background: 'linear-gradient(135deg, #2563eb 0%, #1e40af 100%)',
        },
    },
    cardContent: {
        padding: '1.5rem',
        display: 'flex',
        flexDirection: 'column',
        height: 'calc(100% - 250px)',
    },
    dateHolder: {
        background: 'linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%)',
        borderRadius: '8px',
        padding: '0.5rem',
        textAlign: 'center',
        minWidth: '60px',
        marginRight: '1rem',
    },
    dateDay: {
        color: '#ffffff',
        fontSize: '1.125rem',
        fontWeight: '700',
        margin: 0,
        lineHeight: 1,
    },
    dateMonth: {
        color: '#e2e8f0',
        fontSize: '0.75rem',
        fontWeight: '500',
        margin: 0,
        lineHeight: 1,
    },
    title: {
        color: '#e2e8f0 !important',
        fontSize: '1.125rem !important',
        fontWeight: '600 !important',
        margin: '0 0 0.25rem 0',
        lineHeight: 1.3,
    },
    subTitle: {
        color: '#94a3b8 !important',
        fontSize: '0.875rem !important',
        fontWeight: '400 !important',
        margin: 0,
    },
    details: {
        color: '#cbd5e1 !important',
        fontSize: '0.875rem !important',
        lineHeight: 1.5,
        margin: '1rem 0',
        flex: 1,
    },
    footer: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingTop: '1rem',
        borderTop: '1px solid rgba(148, 163, 184, 0.2)',
    },
    readTime: {
        color: '#94a3b8 !important',
        fontSize: '0.75rem !important',
        fontWeight: '500 !important',
    },
    actionButtons: {
        display: 'flex',
        gap: '0.5rem',
    },
    iconButton: {
        background: 'rgba(59, 130, 246, 0.1)',
        border: '1px solid rgba(59, 130, 246, 0.3)',
        borderRadius: '6px',
        padding: '6px',
        color: '#60a5fa',
        transition: 'all 0.2s ease',
        '&:hover': {
            background: 'rgba(59, 130, 246, 0.2)',
            borderColor: 'rgba(59, 130, 246, 0.5)',
        },
    },
}));


const BlogCard = ({ post }) => {

    const classes = useStyles();

    return (
        <Card elevation={0} className={classes.card}>
            <div className={classes.imageContainer}>
                <img
                    className={classes.cardImage}
                    src={post.imageUrl}
                    alt={post.title}
                />
                <div className={classes.imageOverlay}>
                    <Link to={`/blog/${post.urlSlug}`}>
                        <Button className={classes.readButton}>
                            Read Article
                        </Button>
                    </Link>
                </div>
            </div>

            <div className={classes.cardContent}>
                <div style={{ display: 'flex', alignItems: 'flex-start', marginBottom: '1rem' }}>
                    <div className={classes.dateHolder}>
                        <p className={classes.dateDay}>{post.dateDay}</p>
                        <p className={classes.dateMonth}>{post.dateMonth}</p>
                    </div>
                    <div style={{ flex: 1 }}>
                        <h3 className={classes.title}>{post.title}</h3>
                        <h4 className={classes.subTitle}>{post.subSeriesTitle}</h4>
                    </div>
                </div>

                <p className={classes.details}>
                    {post.details}
                </p>

                <div className={classes.footer}>
                    <span className={classes.readTime}>{post.readTime} read</span>
                    <div className={classes.actionButtons}>
                        {post.mediumUrl !== undefined && (
                            <a href={post.mediumUrl} className={classes.iconButton}>
                                <MediumIconFilled fontSize="small" />
                            </a>
                        )}
                        <button
                            className={classes.iconButton}
                            onClick={() => { navigator.clipboard.writeText("https://pixelper.com/#/blog/" + post.urlSlug) }}
                        >
                            <Icon fontSize="small">link</Icon>
                        </button>
                    </div>
                </div>
            </div>
        </Card>
    )
}
export default BlogCard