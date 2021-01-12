import React, { Component } from "react";
import axios from "axios";
import Reaptcha from 'reaptcha';

import dynamic from "next/dynamic";
dynamic(() => import("./Form.scss"));

class ContactForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      reCaptchaToken: "",
      captchaReady: false,
      tokenLock: false,
      previousError: null,
      formData: {},
      submitting: false,
      formMessage: {
        type: "nul",
        message: ""
      },
      submission: false
    };
    this.captcha = null;
  }

  componentDidMount() { }

  onLoad = () => {
    this.captcha.renderExplicitly();
  }

  onRender = async () => {
    await this.captcha.execute();
  }

  onVerify = reCaptchaToken => {
    this.setState({ reCaptchaToken, captchaReady: true });
  }

  onExpire = () => {
    this.resetCaptcha();
  }

  resetCaptcha = async () => {
    this.setState({ captchaReady: false });
    await this.captcha.reset();
    await this.captcha.execute();
  }

  handleInputChange = e => {
    this.setState({ formData: { ...this.state.formData, [e.target.name]: e.target.value } });
  }

  buildForm() {
    if (this.state.submission) {
      return;
    }
    let fields = this.props.fields;
    let out = [];
    for (let i = 0; i < fields.length; i++) {

      if (fields[i].type === "textarea") {
        out.push(
          <label key={i} className="form__field">
            <span className="form__label">{fields[i].label} {fields[i].required && "*"}</span>
            <textarea
              className={`form__input form__input--${fields[i].type}`}
              placeholder={fields[i].placeholder}
              maxLength={fields[i].maxlength}
              type={fields[i].type}
              tabIndex={1}
              required={fields[i].required}
              onChange={this.handleInputChange}
              name={fields[i].name}
            />
          </label>
        );
      } else {
        out.push(
          <label key={i} className="form__field">
            <span className="form__label">{fields[i].label} {fields[i].required && "*"}</span>
            <input
              className={`form__input form__input--${fields[i].type}`}
              placeholder={fields[i].placeholder}
              maxLength={fields[i].maxlength}
              type={fields[i].type}
              tabIndex={1}
              required={fields[i].required}
              onChange={this.handleInputChange}
              name={fields[i].name}
            />
          </label>
        );
      }
    }
    return out;
  }

  submitForm = async () => {
    if (this.state.submitting) {
      this.setState({ formMessage: { type: "err", message: "Please wait for the form to submit before submitting again." } });
      return;
    }

    if (this.state.submission) {
      this.setState({ formMessage: { type: "err", message: "Looks like you already made an enquiry... if you're really eager to get in touch give us a call!" } });
      return;
    }


    let input = this.state.formData;
    input.form_id = 76;
    input.captcha_token = this.state.reCaptchaToken;
    this.setState({ submitting: true, formMessage: { type: "nul", message: "" } });

    try {
      let res = await axios.post("https://engine-site-tools.goodprogram.com.au/api/tools/forms/submissions", input);
      this.setState({ submitting: false, submission: true, formMessage: { type: "suc", message: "Thanks for reaching out.. we'll be in touch soon!" } });
    } catch (err) {
      let errorMessage = "";
      if (!err.response.data.errorMessage) {
        errorMessage = "Could not connect to server."
      } else if (typeof err.response.data.errorMessage === "string") {
        errorMessage = err.response.data.errorMessage;
      } else if (typeof err.response.data.errorMessage === "object") {
        let out = [];
        let errors = err.response.data.errorMessage.errors;
        for (let key in errors) {
          out.push(<p>{errors[key]}</p>)
        }
        errorMessage = out;
      } else {
        errorMessage = "Whoops looks like something went wrong with your enquiry... why not give us a call instead?"
      }
      this.setState({ submitting: false, formMessage: { type: "err", message: errorMessage } });
      this.resetCaptcha();
    }
  }

  render() {
    return (
      <form className="form form__contact" >
        <div className={`form__overlay ${this.state.submitting || !this.state.captchaReady ? "form__overlay--active" : "form__overlay--disabled"}`} >
          <img className="form__overlayImage" alt="Contact Web Designer Gosford loader" src="/img/loader.png" />
          <p style={{ color: "white" }}>{!this.state.captchaReady ? "Verifying that you are a human..." : "Submitting..."}</p>
        </div>
        <Reaptcha
          ref={e => { this.captcha = e }}
          sitekey="6Lcmp_MUAAAAADOO5D9ZxWRh8MaAYjdLSep9u6vg"
          size="invisible"
          onLoad={this.onLoad}
          onRender={this.onRender}
          onVerify={this.onVerify}
          explicit />
        {this.buildForm()}
        <div className={`form__message ${this.state.formMessage.type === "err" ? "form__message--err" : this.state.formMessage.type === "suc" ? "form__message--suc" : ""}`} >
          {this.state.formMessage.message}
        </div>
        {!this.state.submission &&
          <button className="button button--primary" onClick={e => { e.preventDefault(); this.submitForm() }} type="submit" style={{
            border: "none", marginTop: "1rem"
          }}>
            Submit
        </button>}
      </form>
    );
  }
}

export default ContactForm;
