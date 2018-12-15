val lines = sc.textFile("twitter.edges")
val splitRdd = lines.map( line => line.split(": ")(1))
val myRdd = splitRdd.flatMap(arr => {arr.split(",").map( word => (word, 1) )})
val wordCounts = myRdd.reduceByKey((a,b) => a+b)
// reference: https://stackoverflow.com/questions/46402169/key-value-pair-filter-in-an-arrayint-int
var famousUser = wordCounts.filter {case (k,v) => v > 1000}
famousUser.saveAsTextFile("output")
System.exit(0)
