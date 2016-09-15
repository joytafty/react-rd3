function readFieldsFromLocalStorage(fields, numElement=500) {
	allData = new Array()
	keys = Object.keys(localStorage)
	let cnt = 0
	for (k in keys) {
		try {
			raw = JSON.parse(localStorage.getItem(keys[k])) 
			if (typeof raw[fields[0]] !== 'undefined' && cnt <= Math.min(numElement, keys.length)) {
				allData = allData.concat( [fields.map(f => raw[f])])
				cnt += 1
			}
		} catch(err) { console.log(err) }
	}
	return allData
}

var fields = ["price", "bedrooms", "bathrooms",  "building_size"]
var fieldData = readFieldsFromLocalStorage(fields)