function marshaller(object) {
    return Buffer.from(object)
}

function unmarshaller(buffer) {
    return buffer.toString('utf8')
}

module.exports = {
    marshaller: marshaller,
    unmarshaller: unmarshaller,
}