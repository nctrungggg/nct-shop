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

  list: {
    padding: 0,
    margin: 0,
    listStyleType: "none",

    "& > li": {
      margin: 0,
    },
  },
  label: {
    "& >span": {
      fontSize: "0.875rem",
    },
  },
}));

const services = [
  { value: "isPromotion", label: "Có Khuyến mãi" },
  { value: "isFreeShip", label: "Miễn phí vận chuyển" },
  { value: "", label: "Rẻ hơn hoàn tiền" },
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
      <Typography variant="subtitle2">DỊCH VỤ</Typography>

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
