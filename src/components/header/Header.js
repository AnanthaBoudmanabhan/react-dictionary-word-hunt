import { createTheme, TextField, ThemeProvider, MenuItem } from '@material-ui/core';
import './Header.css';
import categories from '../../data/category';

const Header = ({ category, setCategory, word, setWord, lightMode }) => {

    const darkTheme = createTheme({
        palette: {
            primary: {
                main: lightMode ? '#000' : '#fff'
            },
            type: lightMode ? "light" : 'dark'
        }
    });

    const handleChange = (language) => {
        setCategory(language);
        setWord("");
    }

    return (
        <div className="header">
            <span className="title">{word ? word : "Word Hunt"}</span>
            <div className="inputs">
                <ThemeProvider theme={darkTheme}>
                    <TextField
                        id="standard-basic"
                        label="Search a word"
                        className="search"
                        value={word}
                        onChange={(e) => setWord(e.target.value)}

                    />
                    <TextField
                        className="select"
                        select
                        label="Language"
                        value={category}
                        onChange={(e) => handleChange(e.target.value)}
                    >
                        {
                            categories.map((option) => (
                                <MenuItem key={option.label} value={option.label}>{option.value}</MenuItem>
                            ))
                        }
                    </TextField>
                </ThemeProvider>
            </div>
        </div>
    )
}

export default Header;