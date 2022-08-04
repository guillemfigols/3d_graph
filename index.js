// var myData = (function () {
//     var myData = null;
//     $.ajax({
//         'async': false,
//         'global': false,
//         'url': 'dades.json',
//         'dataType': "json",
//         'success': function (data) {
//             myData = data;
//         }
//     });
//     return myData;
// })(); 

// console.log(myData)


function getGraphDataSets() {
    const loadData = function(Graph) {
        Graph
            .cooldownTicks(0)
            .nodeLabel('id')
            .nodeAutoColorBy('group')
            .forceEngine('d3')
            //.jsonUrl('dades.json')
            .graphData(data)
            .enableNodeDrag(false)
            // myData.nodes.forEach(d => {
            //     d.fx = d.x;
            //     d.fy = d.y;
            //     d.fz = d.z;
            //   })
        };
    


    return loadData
}





let it = 0;
const Graph = ForceGraph3D()
	(document.getElementById("3d-graph"))
    .onEngineTick( () => {
        if (it == 0) {
            console.log(Graph.graphData().nodes)
        }
        it++;
    }
        
    )


let curDataSetIdx;
const dataSets = getGraphDataSets();

let toggleData;
(toggleData = function() {
	curDataSetIdx = curDataSetIdx === undefined ? 0 : (curDataSetIdx+2)%dataSets.length;
	const dataSet = dataSets[curDataSetIdx];

	Graph.resetProps(); // Wipe current state
	dataSets(Graph); // Load data set

	
})();