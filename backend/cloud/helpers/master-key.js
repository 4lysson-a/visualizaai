const USE_MASTER_KEY = process.env.ENV === "dev" ? true : false

module.exports = {
    USE_MASTER_KEY,
}