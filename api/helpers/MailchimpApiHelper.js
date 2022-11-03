const unirest = require('unirest');
const md5 = require('md5');
let mailchimpInstance = process.env.MAILCHIMP_API_INSTANCE,
    listUniqueId = process.env.MAILCHIMP_LIST_ID,
    mailchimpApiKey = process.env.MAILCHIMP_API_KEY;

mailchimpInstance = 'us17'
listUniqueId = 'e7876941be'
mailchimpApiKey = '8f6fa78e2e1653fceb3d3a4a578a46a1-us17'

const addMemberToList = async (
    email,
    firstName = '',
    lastName = '',
) => {
    const response = await checkMemberToList(email);
    if (response.status === 404) {
        const addResponse = await unirest(
            'POST',
            `https://${mailchimpInstance}.api.mailchimp.com/3.0/lists/${listUniqueId}/members`,
        )
            .headers({
                Accept: 'application/json',
                'Content-Type': 'application/json',
                Authorization:
                    'Basic ' + new Buffer('any:' + mailchimpApiKey).toString('base64'),
            })
            .send({
                email_address: email,
                merge_fields: {
                    FNAME: firstName,
                    LNAME: lastName,
                },
                status: 'subscribed',
            });
        if (addResponse && addResponse.body.status === 400) {
            return {
                isError: true,
                message: addResponse.body.detail,
            };
        } else {
            return {
                isError: false,
                message: 'You have subscribed to our newletter successfully',
            };
        }
    }
    else {
        return {
            isError: false,
            message: 'You have subscribed to our newletter successfully',
        };
    }
};

//check member is exist or not in list
const checkMemberToList = async email => {
    const subscriberHash = md5(email ? email.toLowerCase() : '');
    const res = await unirest
        .get(
            `https://${mailchimpInstance}.api.mailchimp.com/3.0/lists/${listUniqueId}/members/${subscriberHash}`,
        )
        .headers({
            Accept: 'application/json',
            'Content-Type': 'application/json',
            Authorization:
                'Basic ' +
                new Buffer('any:' + mailchimpApiKey).toString(
                    'base64',
                ),
        });
    return res;
};

module.exports = {
    addMemberToList
}