const g_svg = d3.select("#geremy");
    g_width = +g_svg.attr("width"),
    g_height = +g_svg.attr("height");


// Map and projection
const g_projection = d3.geoMercator()
.center([144.946, -37.815018])                // GPS of location to zoom on
.scale(1500)                       // This is like the zoom
.translate([ width/2, height/2 ])

// Load external data and boot
d3.json("/E_VIC21_region.geojson").then( function(data) {

    // Draw the map
    g_svg.append("g")
        .selectAll("path")
        .data(data.features)
        .join("path")
            .attr("fill", "#69b3a2")
            .attr("d", d3.geoPath()
            .projection(g_projection)
            )
            .style("stroke", "#fff")

})

    
let g_zoom = d3.zoom()
    .on('zoom', handleZoom);

function handleZoom(e) {
    d3.select('#josh g')
      .attr('transform', e.transform);
}


d3.select('#geremy')
  .call(g_zoom);