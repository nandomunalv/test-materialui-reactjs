import 'date-fns';
import React from 'react';
import Grid from '@material-ui/core/Grid';
import DateFnsUtils from '@date-io/date-fns';
import {createMuiTheme} from "@material-ui/core";
import {ThemeProvider} from "@material-ui/styles";
import lightBlue from "@material-ui/core/colors/lightBlue";
import {
    MuiPickersUtilsProvider,
    KeyboardTimePicker,
    KeyboardDatePicker,
} from '@material-ui/pickers';

export const MaterialUIPickers = () => {
    // The first commit of Material-UI

    const today_1 = new Date();
    const today_2 = new Date();

    const [selectedDate, setSelectedDate] = React.useState(today_1);
    const [thirtyDate, setThirtyDate] = React.useState(today_2.setDate(today_2.getDate() + 30));

    const handleDateChange = (date) => {
        const s = document.getElementsByClassName('MuiButtonBase-root MuiIconButton-root MuiPickersDay-day MuiPickersDay-dayDisabled');
        console.log(s);
        setSelectedDate(date);
    };

    const materialTheme = createMuiTheme({
        overrides: {
            MuiButton: {
                label: '#EF3340'
            },
            MuiPickersToolbar: {
                toolbar: {
                    backgroundColor: '#EF3340',
                },
            },
            MuiPickersCalendarHeader: {
                switchHeader: {
                    // backgroundColor: lightBlue.A200,
                    // color: "white",
                },
            },
            MuiPickersDay: {
                // day: {
                //     color: '#EF3340',
                // },
                daySelected: {
                    backgroundColor: '#EF3340',
                },
                // dayDisabled: {
                //     color: lightBlue["100"],
                // },
                current: {
                    color: '#EF3340',
                },
            },
        },
    });


    return (
        <ThemeProvider theme={materialTheme}>
            <MuiPickersUtilsProvider utils={DateFnsUtils}>
                <Grid container justify="space-around">
                    <KeyboardDatePicker
                        disableToolbar
                        variant="inline"
                        format="MM/dd/yyyy"
                        margin="normal"
                        id="date-picker-inline"
                        label="Date picker inline"
                        value={selectedDate}
                        onChange={handleDateChange}
                        KeyboardButtonProps={{
                            'aria-label': 'change date',
                        }}
                    />
                    <KeyboardDatePicker

                        margin="normal"
                        id="date-picker-dialog"
                        label="Date picker dialog"
                        format="MM/dd/yyyy"
                        value={selectedDate}
                        onChange={handleDateChange}
                        disablePast
                        maxDate={thirtyDate}
                        KeyboardButtonProps={{
                            'aria-label': 'change date',
                        }}
                    />
                    <KeyboardTimePicker
                        margin="normal"
                        id="time-picker"
                        label="Time picker"
                        value={selectedDate}
                        onChange={handleDateChange}
                        KeyboardButtonProps={{
                            'aria-label': 'change time',
                        }}
                    />
                    {/*<DatePicker*/}
                    {/*    autoOk*/}
                    {/*    label="Clearable"*/}
                    {/*    clearable*/}
                    {/*    value={selectedDate}*/}
                    {/*    disablePast*/}
                    {/*    maxDate={thirtyDate}*/}
                    {/*    onChange={handleDateChange}*/}
                    {/*/>*/}
                </Grid>
            </MuiPickersUtilsProvider>
        </ThemeProvider>
    );
}