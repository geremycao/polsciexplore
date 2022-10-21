d3.select("#wrapper")
.selectAll('p')
.data([1,2,3])
.enter()
.append('p')
.text(dta=>dta);