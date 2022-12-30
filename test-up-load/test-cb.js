function callback(err, value) {
    if (err) {
        return new Error(err)
    } else {

        console.log('value', value)

    }
}

callback(null, "./public")