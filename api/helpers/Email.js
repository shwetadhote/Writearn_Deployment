const nodemailer = require("nodemailer");
const sgMail = require('@sendgrid/mail');
const fs = require('fs');
const path = require('path');

sgMail.setApiKey(process.env.SENDGRID_API_KEY)

class Email {
  /**
   *
   */
  constructor() {
    this.body = "";
    this.subject = "";
    this.to = [];
    this.cc = [];
    // this.transporter = nodemailer.createTransport({
    //   service: process.env.MAIL_DRIVER,
    //   host: process.env.MAIL_HOST,
    //   port: process.env.MAIL_PORT,
    //   auth: {
    //     user: process.env.MAIL_USERNAME,
    //     pass: process.env.MAIL_PASSWORD,
    //   },
    // });
    // return this;
  }
  /**
   *
   * @param {*} subject
   */
  setSubject(subject) {
    this.subject = subject;
    return this;
  }
  /**
   *
   * @param {*} body
   */
  setBody(body, templateName,replaceObject) {
    if (templateName) {
      let content = fs.readFileSync(
        path.join(__dirname, `./../emailTemplates/${templateName}.html`),
        'utf8'
      );
      for (const key in replaceObject) {
        if (replaceObject.hasOwnProperty(key)) {
          const val = replaceObject[key];
          content = content.replace(new RegExp(`{${key}}`, 'g'), val);
        }
      }
      this.body = content;
    }
    else {
      this.body = body;
    }
    return this;
  }
  /**
   *
   * @param {*} cc
   */
  setCC(cc) {
    this.cc = cc;
    return this;
  }
  /**
   *
   * @param {*} email
   */
  async sendEmail(email) {
    if (!email) {
      throw new Error("Please provide email.");
    }
    const msg = {
      to: email,
      from: `Writearn <${process.env.MAIL_USERNAME}>`,
      subject: this.subject,
      html: this.body,
     }
     sgMail
      .send(msg)
      .then(() => {
        console.log('Email sent')
      })
      .catch((error) => {
        console.error(error)
      })
     
    // const mailOption = {
    //   from: `Writearn <${process.env.MAIL_USERNAME}>`,
    //   to: email,
    //   cc: this.cc,
    //   subject: this.subject,
    //   html: this.body,
    // };
    // let resp = this.transporter.sendMail(mailOption);
    // return resp;
  }
}

module.exports = { Email };
