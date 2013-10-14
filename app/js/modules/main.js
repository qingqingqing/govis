
require( ['jquery'], function ( $ ) {
    console.log( $( '.test' ).text() );
} );


require( ['d3', 'vega'], function( d3, vg ) {
    var spec = {
      "width": 400,
      "height": 200,
      "padding": {"top": 10, "left": 30, "bottom": 30, "right": 10},
      "data": [{"name": "table"}],
      "scales": [
        {
          "name": "x", "type": "ordinal", "range": "width",
          "domain": {"data": "table", "field": "data.x"}
        },
        {
          "name": "y", "range": "height", "nice": true,
          "domain": {"data": "table", "field": "data.y"}
        }
      ],
      "axes": [
        {"type": "x", "scale": "x"},
        {"type": "y", "scale": "y"}
      ],
      "marks": [
        {
          "type": "rect",
          "from": {"data": "table"},
          "properties": {
            "enter": {
              "x": {"scale": "x", "field": "data.x"},
              "y": {"scale": "y", "field": "data.y"},
              "y2": {"scale": "y", "value": 0},
              "width": {"scale": "x", "band": true, "offset": -1}
            },
            "update": {
              "fill": {"value": "steelblue"}
            },
            "hover": {
              "fill": {"value": "red"}
            }
          }
        },
      ]
    };

    var data = {table: [
      {"x": 1,  "y": 28}, {"x": 2,  "y": 55},
      {"x": 3,  "y": 43}, {"x": 4,  "y": 91},
      {"x": 5,  "y": 81}, {"x": 6,  "y": 53},
      {"x": 7,  "y": 19}, {"x": 8,  "y": 87},
      {"x": 9,  "y": 52}, {"x": 10, "y": 48},
      {"x": 11, "y": 24}, {"x": 12, "y": 49},
      {"x": 13, "y": 87}, {"x": 14, "y": 66},
      {"x": 15, "y": 17}, {"x": 16, "y": 27},
      {"x": 17, "y": 68}, {"x": 18, "y": 16},
      {"x": 19, "y": 49}, {"x": 20, "y": 75}
    ]};

    vg.parse.spec(spec, function(chart) {
      var view = chart({el:"#view", data:data}).update();
    });
} );
