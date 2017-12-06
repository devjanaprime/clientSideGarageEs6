let garage = [];

$( document ).ready( ()=>{
    $( '#addCarButton' ).on( 'click', () =>{
            console.log( 'in addCar' );
            //check for empties
            if( $( '#yearIn' ).val() === '' || $( '#makeIn' ).val() === '' || $( '#modelIn' ).val() === '' ){
                alert( 'please fill in all fields' );
            } // end empties
            else{
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
            } // end no empties
        } // end add car
    ) // end addCarButton on click
    $( '#output' ).on( 'click', '.removeCarButton', function( event ){
        // remove car with this index from garage
        garage.splice( $( this ).data( 'index' ), 1 );
        // update view
        showCars();
    }); // end remove car button click
}); //end doc ready

var showCars = () =>{
    // get HTML element
    let garageList = $( '#garageList' );
    // empty element
    garageList.empty();
    // loop through all cars and append to list on DOM
    for( let i=0; i< garage.length; i++ ){
        let outputString = '<li>' + garage[ i ].year + ' ' + garage[ i ].make + ' ' + garage[ i ].model + ' <button class="removeCarButton btn btn-danger" data-index=' + i + '>remove</button></li>';
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