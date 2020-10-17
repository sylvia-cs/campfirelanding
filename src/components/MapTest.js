import React from 'react';
//import htmlContent from './MapTest.html';
import Chart from 'react-google-charts'; 
import { makeStyles } from '@material-ui/core/styles'; 

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex', 
        justifyContent: 'center', 
        alignItems: 'center', 
    },
    map: {
    },
}))


export default function MapTest() {
    const classes = useStyles();  
    return (
        <div className={classes.root}>
        <Chart
        className={classes.map}
        width={'1000px'}
        height={'600px'}
        chartType="GeoChart"
        data={[
            /*['City', 'Population', 'Area'],
            ['Rome', 2761477, 1285.31],
            ['Milan', 1324110, 181.76],
            ['Naples', 959574, 117.27], */

            ['City', 'Population', 'Area Percentage'],
                ['New Orleans',     65700000,    50], 
                ['Los Angeles',     65700000,    50], 
                /*['US-AL', 0],
                ['US-AK', 0],
                ['US-AR', 0],
                ['US-AK', 0],
                ['US-AZ', 0],
                ['US-Colorado', 0],
                ['US-CO', 0],
                ['US-DE', 0],
                ['US-FL', 0],
                ['US-HI', 0],
                ['US-KS', 0],
                ['US-KY', null],
                ['US-MI', 0],
                ['US-MO', 0],
                ['US-MS', 0],
                ['US-MT', null],
                ['US-NE', 0],
                ['US-NJ', 0],
                ['US-NM', 0],
                ['US-NY', 0],
                ['US-OR', 0],
                ['US-PA', 0],
                ['US-TX', 0],
                ['US-UT', 0],
                ['US-VA', 0],
                ['US-WA', 0],
                ['US-WV', 0],
                ['US-WY', 0], */
        ]}
        options={{
            region: 'US',
            displayMode: 'markers',
            resolution: 'provinces',
            colorAxis: { colors: ['green', 'blue'] },
            datalessRegionColor: 'transparent',
            defaultColor: '#f5f5f5',
            chartArea: {
                backgroundColor: {
                fill: 'transparent',
                fillOpacity: 0.0
                },
            },
            backgroundColor: {
                fill: 'transparent',
            },
        }}
        // Note: you will need to get a mapsApiKey for your project.
        // See: https://developers.google.com/chart/interactive/docs/basic_load_libs#load-settings
        mapsApiKey='AIzaSyD-9tSrke72PouQMnMX-a7eZSW0jkFMBWY'
        rootProps={{ 'data-testid': '3' }}
        />
</div>
    );
}
