
import React from 'react';
import Checkbox from '@material-ui/core/Checkbox';
import styles from './CheckBox.module.css'

export default function Checkboxes(props) {
  const [checked, setChecked] = React.useState(true);

  const handleChange = (event) => {
    setChecked(event.target.checked);
  };

  return (
    <div className={styles.checkboxContainer}>
      <Checkbox
        defaultChecked
        color="primary"
        inputProps={{ 'aria-label': 'secondary checkbox' }}
      />
      <h4>
          {props.label}
      </h4>
    </div>
  );
}
