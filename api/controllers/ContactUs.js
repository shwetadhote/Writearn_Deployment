const { ErrorHelper, MailchimpApiHelper, EmailHelper } = require("../helpers");
const { ContactUsModel, JobQueueModel } = require("../models")

/**
 *
 * @param {*} req
 * @param {*} res
 */
const addContactUs = async (req, res) => {
    try {
        const { body: { firstName, lastName, email, message, phone } } = req;
        await ContactUsModel.create({
            firstName, lastName, email, message, phone
        })
        await MailchimpApiHelper.addMemberToList(email)
        try {
            // To send email to customer
            await JobQueueModel.create({
                data: {
                    to: email,
                    subject: "Thanks for contacting us",
                    body: `<div style="padding:50px 0;margin:0;background-color:#ececec;font-family:sans-serif">
            <table align="center" border="0" cellpadding="0" cellspacing="0" width="600" style="font-family:sans-serif">
            <tbody><tr>
            <td style="border-top:5px solid #0d2f88;font-family:sans-serif;font-size:15px">
            <table width="600" border="0" cellpadding="0" cellspacing="0" style="width:600px;margin:0 auto;background-color:#fff">
            <tbody><tr>
            <td align="center" style="text-align:center;background: #000;padding: 10px 0px 10px;">
            <a href="https://www.writearn.in/" style="text-decoration:none;display: inline-block;                            " target="_blank">
            <img alt="writearn" src="https://www.writearn.in/static/files/static/logo.png" width="45" height="45" class="CToWUd">
            </a>
            </td>
            </tr>
            <tr>
            <td style="font-family:sans-serif;padding: 15px 20px;">
            <p>Hi ${firstName},</p>
            <p>
            Thanks for contacting us. We'll be in touch with you shortly!
            </p>
            <p style="margin: 0px">Thanks</p> 
            <p style="margin: 0px">Writearn Team</p> 
            </td>
            </tr>
            </tbody></table> 
            </td>
            </tr>
            <tr>
            <td align="center" style="text-align:center;color:#959595;padding-top:20px">
            <table cellpadding="0" cellspacing="0" style="background-color:#ececec;width:100%" bgcolor="#ececec" width="100%"></table> 
            </td>
            </tr>
            </tbody></table><div style="
            text-align: center;margin-top: 10px;">
              <a href="http://www.facebook.com/writearn.in" style="margin: 5px;"><img
                  src="https://www.writearn.in/static/files/static/facebook.png" /></a>
              <a href="https://twitter.com/writearn" style="margin: 5px;"><img
                  src="https://www.writearn.in/static/files/static/twitter.png" /></a>
              <a href="https://www.instagram.com/writearn/" style="margin: 5px;"><img
                  src="https://www.writearn.in/static/files/static/instagram.png" /></a>
            </div><div class="yj6qo"></div><div class="adL">
            </div></div>`,
                },
                type: "email",
            });
            // To send email to admin panel
            await JobQueueModel.create({
                data: {
                    to: 'contact@writearn.in',
                    subject: "New enquiry at writearn",
                    body: `<div style="padding:50px 0;margin:0;background-color:#ececec;font-family:sans-serif">
              <table align="center" border="0" cellpadding="0" cellspacing="0" width="600" style="font-family:sans-serif">
              <tbody><tr>
              <td style="border-top:5px solid #fdd835;font-family:sans-serif;font-size:15px">
              <table width="600" border="0" cellpadding="0" cellspacing="0" style="width:600px;margin:0 auto;background-color:#fff">
              <tbody><tr>
              <td align="center" style="text-align:center;background: #000;padding: 10px 0px 10px;">
              <a href="https://writearn.in/" style="text-decoration:none;display: inline-block;                            " target="_blank">
              <img alt="Writearn" src="https://writearn.in/static/media/logo.86b339a7.png" width="45" height="45" class="CToWUd">
              </a>
              </td>
              </tr>
              <tr>
                            <td
                              style="font-family: -apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji;padding:15px 20px">
                              <p style="color: #222222;">Hi, there is a new enquiry from the contact us form, here are the details of the user:</p>
                              <label> Contact Person Name: </label>
                              <b style="color: #1155cc;">${firstName}</b><br />
                              <label> Email: </label>
                              <b style="color: #1155cc;">${email}</b><br />
                              <label> Message: </label>
                              <b style="color: #1155cc;">${message}</b>
                            </td>
                          </tr>
              </tbody></table> 
              </td>
              </tr>
              <tr>
              <td align="center" style="text-align:center;color:#959595;padding-top:20px">
              <table cellpadding="0" cellspacing="0" style="background-color:#ececec;width:100%" bgcolor="#ececec" width="100%"></table> 
              </td>
              </tr>
              </tbody></table><div class="yj6qo"></div><div class="adL">
              </div></div>`,
                },
                type: "email",
            });
        } catch (error) {
            ErrorHelper.createError(error, req);
        }
        return res.status(200).json({
            message: "Thanks for contacting us. We'll be in touch with you shortly!"
        })
    } catch (error) {
        return ErrorHelper.sendDefaultError(error, req, res);
    }

}

module.exports = {
    addContactUs
}