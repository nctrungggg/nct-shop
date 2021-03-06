import { Box, Typography } from "@material-ui/core";
import Checkbox from "@material-ui/core/Checkbox";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import { makeStyles } from "@material-ui/core/styles";
import PropTypes from "prop-types";

FilterByService.propTypes = {
  onChange: PropTypes.func,
  filters: PropTypes.object,
};
FilterByService.defaultProps = {
  onChange: null,
  filters: {},
};

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
    borderTop: `2px solid ${theme.palette.grey[300]}`,
  },
  title: {
    fontWeight: "500",
  },
  list: {
    padding: 0,
    margin: 0,
    listStyleType: "none",

    "& .MuiTypography-root ": {
      fontSize: "14px",
      fontFamily: "Poppins, sans-serif",
    },

    "& > li": {
      margin: 0,
      transition: "all .25s",
      position: "relative",
      right: 0,

      "  &:hover": {
        right: "-6px",
        color: theme.palette.primary.dark,
        cursor: "pointer",
      },
    },
  },
  label: {
    "& >span": {
      fontSize: "0.875rem",
    },
  },
}));

const services = [
  { value: "isFreeShip", label: "Miễn phí vận chuyển" },
  { value: "isPromotion", label: "Có Khuyến mãi" },
];

function FilterByService({ filters, onChange }) {
  const classes = useStyles();

  const handleCheckboxChange = (e) => {
    if (!onChange) return;

    const { name, checked } = e.target;
    onChange({ [name]: checked });
  };

  return (
    <Box className={classes.root}>
      <p className={classes.title}>Dịch vụ</p>

      <ul className={classes.list}>
        {services.map((service) => (
          <li key={service.value}>
            <FormControlLabel
              className={classes.label}
              control={
                <Checkbox
                  checked={Boolean(filters[service.value])}
                  onChange={handleCheckboxChange}
                  name={service.value}
                  color="primary"
                  size="small"
                />
              }
              label={service.label}
            />
          </li>
        ))}
      </ul>
    </Box>
  );
}

export default FilterByService;
