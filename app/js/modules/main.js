
require( ['d3', 'vega', 'bows'], function( d3, vg, bows ) {

    var log = bows( 'mainModule' );

    require( ['./modules/data'], function( dummyData ) {
        var table = {};
        table.table = dummyData.getData();
        log( 'fetched data' );
        require( ['./modules/bargraphVega'],
            function( spec ) {
                vg.parse.spec( spec, function( chart ) {
                  var view = chart( { el:"#view", data:table } ).update();
                });
            }
         );
    });

} );
