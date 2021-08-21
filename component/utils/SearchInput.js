import TextField from '@material-ui/core/TextField';

export default function SearchInput (props) {

    return (
        <TextField  {...props}  id="outlined-search" label={props.label} type="search" variant="outlined"  />
    )
}