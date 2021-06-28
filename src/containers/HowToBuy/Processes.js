import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

const useStyles = makeStyles(() => ({
  root: {
    width: "75%",
    margin: "3rem auto 0",
    "& .MuiAccordionSummary-content": {
      margin: 0,
    },
    "& .MuiCollapse-wrapper": {
      padding: "15px 0",
    },
    "& .MuiButtonBase-root": {
      padding: 0,
    },
    "& .MuiAccordionSummary-root": {
      padding: "1rem",
    },
    "& .MuiSvgIcon-root": {
      width: "1.2em",
      height: "1.2em",
      color: "#2d3748",
    },
    "& .MuiCollapse-container": {
      borderTop: "1px solid #7c8ba1",
    },
  },
}));

export default function Processes() {
  const [expanded, setExpanded] = React.useState(false);
  const classes = useStyles();

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <div className={`dse__processes ${classes.root}`}>
      <Accordion
        className="process__accordion__item"
        expanded={expanded === "panel1"}
        onChange={handleChange("panel1")}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
          className="accordion__heading"
        >
          <h6>Upload a private list of diamonds with your best COD price.</h6>
        </AccordionSummary>
        <AccordionDetails className="process__detail">
          <ul>
            <li>For next day delivery to your IGI Lab ONLY.</li>
            <li>
              Round, 0.21 to 0.75 (soon 1.99) carats, D-L, FL-SI2, EX-VG Cut.
            </li>
            <li>Diamonds above $750/ct must already be GIA Graded.</li>
            <li>Your lists are confidential, and so are our bids.</li>
          </ul>
        </AccordionDetails>
      </Accordion>
      <Accordion
        className="process__accordion__item"
        expanded={expanded === "panel2"}
        onChange={handleChange("panel2")}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
          className="accordion__heading"
        >
          <h6>We instantly buy or bid on some, or all, of your diamonds.</h6>
        </AccordionSummary>
        <AccordionDetails className="process__detail">
          <ul>
            <li>
              We may accept your asking price, or make an instant cash bid.
            </li>
            <li>
              The commodity is not jewelry, we need all types of diamonds.
            </li>
            <li>Inclusions welcome, printed GIA paperwork not required.</li>
            <li>Bids change frequently as we fill our commodity orders</li>
          </ul>
        </AccordionDetails>
      </Accordion>
      <Accordion
        className="process__accordion__item"
        expanded={expanded === "panel3"}
        onChange={handleChange("panel3")}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
          className="accordion__heading"
        >
          <h6>Accept or Reject our Offer.</h6>
        </AccordionSummary>
        <AccordionDetails className="process__detail">
          <ul>
            <li>Our system generates an instant purchase order.</li>
            <li>
              Deliver to your local IGI Lab – they verify that the diamonds
              match the certs, or grade ungraded diamonds for us.
            </li>
            <li>We pay COD, and never return a matching diamond.</li>
          </ul>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
