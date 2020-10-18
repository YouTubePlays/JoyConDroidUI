import React from 'react';
import { withNamespaces } from 'react-i18next';
import { makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
    },
    heading: {
        fontSize: theme.typography.pxToRem(15),
        fontWeight: theme.typography.fontWeightBold,
    },
    body: {
        fontSize: theme.typography.pxToRem(15),
        fontWeight: theme.typography.fontWeightRegular,
    },
}));



function Faq(props) {
    const { t } = props;
    const classes = useStyles();
    return (
        <div className={classes.root}>
            {t('faq.questions', { returnObjects: true }).map((question, index) => (
                <Accordion>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                    >
                        <Typography className={classes.heading}>{question}</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography className={classes.body}>
                            <div dangerouslySetInnerHTML={{ __html: t('faq.answers', { returnObjects: true })[index]}} />
                        </Typography>
                    </AccordionDetails>
                </Accordion>
            ))}
        </div>
    );
}
export default withNamespaces()(Faq);