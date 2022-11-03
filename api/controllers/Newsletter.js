const { ErrorHelper, MailchimpApiHelper } = require("../helpers")

/**
 *
 * @param {*} req
 * @param {*} res
 */
const subscribeToNewsLetter = async (req, res) => {
    const { body: { email } } = req;
    try {
        const { isError, message } = await MailchimpApiHelper.addMemberToList(email)
        if (isError) {
            return res.status(400).json({
                message
            })
        }
        return res.status(200).json({
            message
        })
    } catch (error) {
        return ErrorHelper.sendDefaultError(error, req, res);
    }
}

module.exports = {
    subscribeToNewsLetter
}