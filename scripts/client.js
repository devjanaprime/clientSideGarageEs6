let garage = [];

$( document ).ready( ()=>{
    $( '#addCarButton' ).on( 'click', () =>{
            console.log( 'in addCar' );
            // get user input & create car
            let newCar = new Car( $( '#yearIn' ).val(), $( '#makeIn' ).val(), $( '#modelIn' ).val() );
            // push car into garage
            garage.push( newCar );
            // update display
            showCars();
            // empty inputs
            $( '#yearIn' ).val( '' );
            $( '#makeIn' ).val( '' );
            $( '#modelIn' ).val( '' );
        } // end add car
    ) // end addCarButton on click
}); //end doc ready

var showCars = () =>{
    // get HTML element
    let garageList = $( '#garageList' );
    // empty element
    garageList.empty();
    // loop through all cars and append to list on DOM
    for( let i=0; i< garage.length; i++ ){
        let outputString = '<li>' + garage[ i ].year + ' ' + garage[ i ].make + ' ' + garage[ i ].model + '</li>';
        garageList.append( outputString );
    } // end for 
} // end showCars

class Car{
    constructor( year, make, model ){
        this.year = year;
        this.make = make;
        this.model = model;
    } //end constructor
}