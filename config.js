//from tuesday night
//from wed morn
//now wed aft
//now wed night
var config = {

    style: 'mapbox://styles/kimsoog/cmg5mdwvr003201qn4hu55d8g', 
    accessToken: 'pk.eyJ1Ijoia2ltc29vZyIsImEiOiJjbWYycmtrNHowNDFzMmtuODBtNnNyZnI3In0.AozRifJUw4i7rwpyQWQkZw',
    

    // theses are the layer namee
    // BIXI STATIONS = 'station-points-4326-6f2wv2', 
    // BIKE NETWORK =  'reseau-cyclable-4326-atr87x', 
    // MTL POLYGON = 'poly-mtl-cs21wa', 
    // BULDINGS = 'buildings', 
    // LOCATION OF METRO SYMBOLE LAYER = 'stm-39ltks', 
    // LOCATION OF MCGILL SYMBOL LAYER = 'mcgill-adx6ml', 
    // LINE FROM STM TO MCGIL 'stm-mcgill-line1-7fx4u0', 
    // SKY = 'sky'


    showMarkers: false,
    markerColor: '#3FB1CE',
    //projection: 'equirectangular',
    //Read more about available projections here
    //https://docs.mapbox.com/mapbox-gl-js/example/projections/
    inset: true,
    insetOptions: {
        markerColor: 'orange'
    },
    insetPosition: 'bottom-right',
    theme: 'dark',
    use3dTerrain: true, //set true for enabling 3D maps.

    auto: false,
    title: 'BIXI use in Montreal',
    subtitle: 'A study of different types of BIXIs, stations over time, and the "last mile"',
    byline: 'By Kimsoo Gopnik, Nick Morton, Matthew Wagman',
    footer: 'Full source citations can be found at <a href="https://neogeoweb.ca/group4/A1.html"> www.neogeoweb.ca/group4/A1.html</a><br> Created using <a href="https://github.com/mapbox/storytelling" target="_blank">Mapbox Storytelling</a> template.',
   


    chapters: [
        {
            //INTRO SECTION
            id: 'intro',
            alignment: 'center',
            hidden: false,
            title: 'Different types of BIXIs',
            image: false, //'images/staticSwipe.png',
            description: '<h3>Electric BIXI:</h3> A 3 geared bike with electric assist <br>For members: 18₵/minute<br> For occasional users: $1.50 unlockng fee then 35₵/minute. <br><h3>Classic BIXI:</h3>The typical, 3 geared bike with an adjustable seat height <br>For members: 18₵/minute after 45 free minutes<br> For occasional users: $1.50 unlocking fee then 20₵/minute',
            
            // THIS IS THE BIXI SLIDER IFRAME
            iframe: 'https://cdn.knightlab.com/libs/juxtapose/latest/embed/index.html?uid=fb6f6c16-9a2b-11f0-ba1b-0e6f42328d7d',
            location: {
                center: [-73.5673, 45.5017],
                zoom: 9,
                pitch: 60,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: 
            [],
            onChapterExit: []
        },



         // THIS IS THE VIDIO CHAPTER WITH AN EMBEDDED VIDEO FROM YOUTUBE
        {
            id: 'video',
            alignment: 'center',
            hidden: false,
            title: 'How to use a BIXI',
            image: false, //'images/staticSwipe.png',
            description: 'This video explains how to use a BIXI',
            iframe: 'https://www.youtube.com/embed/1rx4xooo-TQ?si=z9cDSgZdn6p0UgiR',
            location: {
                center: [-73.5673, 45.5017],
                zoom: 13,
                pitch: 60,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },



        //----------------------------------------------------------------------------------------
        // This is the point section 
        // in each chapter, a different year's bixi stations appears
        // when they are green, they are new that year
        // when they are blue, they have been around for at least a year
        //---------------------------------------------------------------------------------------

        //intro chapter describing what the next section will be about
        {
            id: 'intro to stations',
            alignment: 'center',
            hidden: false,
            title: 'BIXI stations',
            image: 'images/bixi_station.jpg', 
            description: 'As BIXI stations appear on the map, the year they are created they display in green. After they have been established for a year, they turn blue. The map adjusts as the BIXI network expands. <br> We also decided to feature art BIXIs, a project featuring local Montreal artists and supporting public art. Each year displays a differnt Art BIXI and includes the artist.',
            location: {
                center: [-73.55, 45.5],
                zoom: 11.2,
                pitch: 8.01,
                bearing: 0.00
            },
            mapAnimation: 'easeTo',
            rotateAnimation: true,
            callback: false,
            onChapterEnter: [
                {
                layer: 'station-points-4326-6f2wv2',
                opacity: 0,    
                }
            ],
            onChapterExit: []
        },

        //2014, first year we included
        {
            id: '2014',
            alignment: 'right',
            hidden: false,
            title: '2014',
            image: 'images/bixi-2.png',
            description: 'Art BIXI by Aless MC <br> Number of stations: 459 ', 
            location: {
                center: [-73.53, 45.50],
                zoom: 11.5,
                pitch: 8.01,
                bearing: 0.00
            },
            mapAnimation: 'easeTo',
            rotateAnimation: false,
            callback: 'style2014',
            onChapterEnter: [],
            onChapterExit: []
        },


        //2015 year
        {
            id: '2015',
            alignment: 'right',
            hidden: false,
            title: '2015',
            image: 'images/bixi-3.png',
            description: 'Art BIXI by Chien Champion<br> Number of stations: 460',
            location: {
                center: [-73.53, 45.50],
                zoom: 11.5,
                pitch: 8.01,
                bearing: 0.00
            },
            mapAnimation: 'easeTo',
            rotateAnimation: false,
            callback: 'style2015',
            onChapterEnter: [],
            onChapterExit: []
        },

        //2016 year
        {
            id: '2016',
            alignment: 'right',
            hidden: false,
            title: '2016',
            image: 'images/bixi-4.png',
            description: 'Art BIXI by La Charbonne<br> Number of stations: 465',
            location: {
                center: [-73.53, 45.5],
                zoom: 11.3,
                pitch: 8.01,
                bearing: 0.00
            },
            mapAnimation: 'easeTo',
            rotateAnimation: false,
            callback: 'style2016',
            onChapterEnter: [],
            onChapterExit: []
        },

        //2017 year
        {
            id: '2017',
            alignment: 'right',
            hidden: false,
            title: '2017',
            image: 'images/bixi-5.png',
            description: 'Art BIXI by Zephyr<br> Number of stations: 546',
            location: {
                center: [-73.55, 45.5],
                zoom: 11.2,
                pitch: 8.01,
                bearing: 0.00
            },
            mapAnimation: 'easeTo',
            rotateAnimation: false,
            callback: 'style2017',
            onChapterEnter: [],
            onChapterExit: []
        },

        //2018 year
        {
            id: '2018',
            alignment: 'right',
            hidden: false,
            title: '2018',
            image: 'images/bixi-6.png',
            description: 'Art BIXI by Chien Champion<br> Number of stations: 552',
            location: {
                center: [-73.55, 45.5],
                zoom: 11.2,
                pitch: 8.01,
                bearing: 0.00
            },
            mapAnimation: 'easeTo',
            rotateAnimation: false,
            callback: 'style2018',
            onChapterEnter: [],
            onChapterExit: []
        },

        //2019 year
        {
            id: '2019',
            alignment: 'right',
            hidden: false,
            title: '2019',
            image: 'images/bixi-7.png',
            description: 'Art BIXI by La Charbonne<br> Number of stations: 619',
            location: {
                center: [-73.55, 45.53],
                zoom: 10.85,
                pitch: 8.01,
                bearing: 0.00
            },
            mapAnimation: 'easeTo',
            rotateAnimation: false,
            callback: 'style2019',
            onChapterEnter: [],
            onChapterExit: []
        },

        //2020 year
        {
            id: '2020',
            alignment: 'right',
            hidden: false,
            title: '2020',
            image: 'images/bixi-8.png',
            description: 'Art BIXI by Mono sourcil<br> Number of stations: 641',
            location: {
                center: [-73.55, 45.53],
                zoom: 10.85,
                pitch: 8,
                bearing: 0.00
            },
            mapAnimation: 'easeTo',
            rotateAnimation: false,
            callback: 'style2020',
            onChapterEnter: [],
            onChapterExit: []
        },

        //2021 year
        {
            id: '2021',
            alignment: 'right',
            hidden: false,
            title: '2021',
            image: 'images/bixi-9.png',
            description: 'Art BIXI by Aless MC<br> Number of stations: 829',
            location: {
                center: [-73.55, 45.53],
                zoom: 10.8,
                pitch: 8.01,
                bearing: 0.00
            },
            mapAnimation: 'easeTo',
            rotateAnimation: false,
            callback: 'style2021',
            onChapterEnter: [],
            onChapterExit: []
        },

        //2022 year
        {
            id: '2022',
            alignment: 'right',
            hidden: false,
            title: '2022',
            image: 'images/bixi-10.png',
            description: 'Art BIXI by Chien Champion<br> Number of stations: 868',
            location: {
                center: [-73.55, 45.53],
                zoom: 10.7,
                pitch: 8.01,
                bearing: 0.00
            },
            mapAnimation: 'easeTo',
            rotateAnimation: false,
            callback: 'style2022',
            onChapterEnter: [],
            onChapterExit: []
        },

        //2023 year
        {
            id: '2023',
            alignment: 'right',
            hidden: false,
            title: '2023',
            image: 'images/bixi-11.png',
            description: 'Art BIXI by La Charbonne<br> Number of stations: 939',
            location: {
                center: [-73.5, 45.55],
                zoom: 10.5,
                pitch: 8.01,
                bearing: 0.00
            },
            mapAnimation: 'easeTo',
            rotateAnimation: false,
            callback: 'style2023',
            onChapterEnter: [],
            onChapterExit: []
        },

        //2024 year
        {
            id: '2024',
            alignment: 'right',
            hidden: false,
            title: '2024',
            image: 'images/bixi-12.png',
            description: 'Art BIXI by La Charbonne<br> Number of stations: 1127',
            location: {
                center: [-73.42, 45.53],
                zoom: 10.3,
                pitch: 8.01,
                bearing: 0.00
            },
            mapAnimation: 'easeTo',
            rotateAnimation: false,
            callback: 'style2024',
            onChapterEnter: [
                    {
                        layer: 'reseau-cyclable-4326-atr87x', opacity:0
                    } //MAYBE TAKE OUT???????
                ],

            onChapterExit: []
        },


        //------------------------------------------------------------
        //polygons of the dissemination areas of Montreal , coded by the number of Bixi stations in each area
        //------------------------------------------------------------


        {
            id: 'poly',
            alignment: 'right',
            hidden: false,
            title: 'BIXI by Borough',
            image: 'images/Colour_for_poly.PNG', //legend screenshot from arcgis
            description: 'The number of BIXI stations in each administative boundaries in Montreal in 2024',
            location: {
                center: [-73.5673, 45.5017],
                zoom: 9.52,
                pitch: 8.01,
                bearing: 0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'station-points-4326-6f2wv2',opacity: 0
                },

                {
                    layer: 'poly-mtl-cs21wa',
                    opacity: 1,
                    color_poly:
                        [
                            'case',
                            //https://get-color.com/image/
                            //set each polygon to a different color, depending on the attribute 'NumBixi', which was added in ArcGIS
                            ['<=', ['to-number', ['get', 'NumBixi']], 3], '#ffffcc', // blue 0C2C84
                            ['<=', ['to-number', ['get', 'NumBixi']], 12], '#C7E9B4', // green  1D91C0
                            ['<=', ['to-number', ['get', 'NumBixi']], 22], '#7FCDBB', // green 00ff00
                            ['<=', ['to-number', ['get', 'NumBixi']], 36], '#41B6C4', // green 41B6C4
                            ['<=', ['to-number', ['get', 'NumBixi']], 61], '#1D91C0', // green 7FCDBB https://get-color.com/#1D91C0
                            ['<=', ['to-number', ['get', 'NumBixi']], 102], '#225EA8', // green C7E9B4
                            ['<=', ['to-number', ['get', 'NumBixi']], 166], '#0C2C84', // red ffffcc
                            '#000000'  // IF NONE SET COLOUR TO BLACK
                        ],
                    duration: 5
                }
            ],

            onChapterExit: [
                {
                    layer: 'poly-mtl-cs21wa',
                    opacity: 0,     
                } 
            ]
        },


        //--------------------------------------------------------------------------------------------------
        //lines segment
        //to fly over the route that a user could take from Sherbrooke metro station to McGill, using Bixis
        //-------------------------------------------------------------------------------------

        //display all bike lanes
        {
            id: 'bike-lanes',
            alignment: 'left',
            hidden: false,
            title: 'Bike lane network in Montreal',
            image: 'images/unprotectedLane.PNG', //image of an unprotected bike lane
            description: 'There are many bike lanes in montreal, some protected and some unprotected',
            location: {
                center: [-73.5673, 45.5017],
                zoom: 12,
                pitch: 8.01,
                bearing: 0.00
            },
            mapAnimation: 'easeTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'station-points-4326-6f2wv2', size: 3
                },

                //stop displaying the station points
                {
                    layer: 'station-points-4326-6f2wv2',
                    color: '#0000ff',
                    opacity: 0
                },

                //display all the bike lanes
                {
                    layer: 'reseau-cyclable-4326-atr87x',
                    color_line:  '#7FCDBB',
                    opacity:1
                }

            ],

            onChapterExit: []
        },





        //protected bike lanes, change the color
        {
            id: 'protected-lanes',
            alignment: 'left',
            hidden: false,
            title: 'Protected bike lanes',
            image: 'images/bikeLane.jpg', //image of a protected bike lane
            description: 'Some bike lanes provide extra protection from cars by barrier of concrete or posts. <br> The unprotected bike lanes are displayed in teal, the protected bike lanes are displayed in blue.',
            location: {
                center: [-73.5673, 45.5017],
                zoom: 12, //zoomed in becase the lines werent appearing when zoomed out to see all of montreal 
                pitch: 8.01,
                bearing: 0.00
            },
            mapAnimation: 'easeTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [
                //set the protected bike lanes to a different color
                {
                    layer: 'reseau-cyclable-4326-atr87x',
                    opacity: ['case', ['==', ['get', 'PROTEGE_4S'], 'Oui'], 1, 1], //both protected and unprotected cases are displayed with opacity 1
                    color_line: ['case', ['==', ['get', 'PROTEGE_4S'], 'Oui'], '#225EA8', '#7FCDBB'] //if case is protected, change color, else the color is same as before
                },

                {layer: 'station-points-4326-6f2wv2',opacity:0},
                {layer: 'stm-mcgill-line1-7fx4u0', opacity:0},
                {layer: 'stm-39ltks', opacity:0},
                {layer: 'mcgill-adx6ml',opacity:0},
                {layer: 'buildings',opacity:0}     
            ],
            onChapterExit: []
        },





        //----------------------------------------------------------
        // highlight the 3D polygons by adjusting the pitch of the view
        // example with a route from sherbrooke metro station bixi stand to mcgill bixi stand
        //----------------------------------------------------------

        {
            id: 'Route',
            alignment: 'left',
            hidden: false,
            title: 'Route from Sherbrooke Metro station to McGill',
            image: 'images/streetview_sherbrooke.PNG',
            description: 'You can take a BIXI as the "final mile" of transportation',
            location: {
                center: [-73.570,45.516],
                zoom:16.50,
                pitch: 80.01,
                bearing: 210.00
            },
            mapAnimation: 'easeTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
            //set the opacity of the tilesets in mapbox
                {layer: 'stm-39ltks', opacity:1 },
                {layer: 'mcgill-adx6ml', opacity:1 },
                {layer: 'stm-mcgill-line1-7fx4u0', color_line:  '#4d0000', opacity:1},
                {layer: 'buildings', opacity:1},
                {layer: 'reseau-cyclable-4326-atr87x', opacity:0},

                {
                    //making the bixi stations in this example route visible
                    layer: 'station-points-4326-6f2wv2',
                    //just a really long and convoluted if statement
                    opacity: [ 'case',['any',
                            ['==', ['to-number', ['get', 'OBJECTID']], 373] ,  
                            ['==', ['get', 'name'], 'Square St-Louis']
                            ], 1,   0    
                    ],
                    color: '#0000ff',
                    size: 10
                }   

            ],

            onChapterExit: []

        },


        //the flying path along the biking route from Sherbrooke metro station to McGill bixi station
        //each walk is a way of breaking up the fly over so it doesn't go directly to McGill
        {
            id: 'walk-01',
            alignment: 'left',
            hidden: true,
            title: 'Walk 01',
            description: '',
            location: {
                center: [-73.568839, 45.518408], // start
                zoom: 17.6, pitch: 80, bearing: 210,
                speed: 1.0, curve: 1.6, duration: 1800
            },
            mapAnimation: 'easeTo',
            rotateAnimation: false,
            onChapterEnter: [], 
            onChapterExit: []
        },


        //next walk segment
        // jumps smoothly to the south-west segment near the mid-route
        {
            id: 'walk-02',
            alignment: 'left',
            hidden: true,
            title: 'Walk 02',
            description: '',
            location: {
                center: [-73.574600, 45.511555],
                zoom: 17.6, pitch: 80, bearing: 212.8,
                speed: 1.05, curve: 1.6, duration: 1700
            },
            mapAnimation: 'easeTo',
            rotateAnimation: false,
            onChapterEnter: [], onChapterExit: []
        },


        //next walk segment
        {
            id: 'walk-3',
            alignment: 'left',
            hidden: true,
            title: 'Walk 3',
            description: '',
            location: {
                center: [-73.574634, 45.508352],
                zoom: 17.6, pitch: 80, bearing: 173.6,
                speed: 1.1, curve: 1.6, duration: 1400
            },
            mapAnimation: 'easeTo',
            rotateAnimation: false,
            onChapterEnter: [], 
            onChapterExit: []
        },


        //next walk segment
        {
            id: 'walk-4',
            alignment: 'left',
            hidden: true,
            title: 'Walk 4',
            description: '',
            location: {
                center: [-73.576099, 45.506791],
                zoom: 17.6, pitch: 80, bearing: 213.5,
                speed: 1.15, curve: 1.6, duration: 1200
            },
            mapAnimation: 'easeTo',
            rotateAnimation: false,
            onChapterEnter: [], onChapterExit: []
        },

        // --- optional small settle before finish (feel free to remove if you want it even snappier) ---
        {
            id: 'walk-5',
            alignment: 'left',
            hidden: true,
            title: 'Walk 5',
            description: '',
            location: {
                center: [-73.576250, 45.505800],
                zoom: 17.6, pitch: 80, bearing: 200,
                speed: 1.15, curve: 1.6, duration: 1100
            },
            mapAnimation: 'easeTo',
            rotateAnimation: false,
            onChapterEnter: [], onChapterExit: []
        },

//next walk segment
        {
            id: 'walk-6',
            alignment: 'left',
            hidden: true,
            title: 'walk 6',
            description: '',
            location: {
                center: [-73.576470, 45.504300], // a touch past the old endpoint (-73.576450, 45.504669)
                zoom: 15.6, pitch: 0, bearing: 188,
                speed: 1.1, curve: 1.6, duration: 1400
            },
            mapAnimation: 'easeTo',
            rotateAnimation: true,   // your template spins after the fly
            onChapterEnter: [
                {layer: 'stm-39ltks', opacity:1 },
                {layer: 'mcgill-adx6ml', opacity:1 },
                {layer: 'stm-mcgill-line1-7fx4u0', color_line:  '#4d0000', opacity:1},
                {layer: 'buildings', opacity:1},
                {layer: 'reseau-cyclable-4326-atr87x', opacity:0}
            ], 
            onChapterExit: [
                {layer: 'stm-mcgill-line1-7fx4u0', color_line:  '#4d0000', opacity:0},
                ]
        },


        //------------------------------------------
        //conclude the storymap
        //------------------------------------------


        {
            id: 'conclusion',
            alignment: 'fully',
            hidden: false,
            title: 'Conclusion',
            image: null,
            description: 'BIXIs are a great way to navigate around Montreal, and their expansion over time is impressive.<br>The multiple types of BIXIs (classic and electric) enhance user experience. BIXIs are a great way for a distance too close for a metro stop but <em>juuust</em> far enough for a long walk. ',
            location: {
                center: [-73.5673, 45.5017],
                zoom: 4,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {layer: 'stm-39ltks', opacity:0},
                {layer: 'mcgill-adx6ml',opacity:0,duration: 3000}, //the ghost of the McGill logo haunts us all
                {layer: 'buildings',opacity:0},
                {layer: 'station-points-4326-6f2wv2',opacity:0},
                {layer: 'stm-mcgill-line1-7fx4u0',opacity:0}



            ],
            onChapterExit: []
        }
    ]
};
