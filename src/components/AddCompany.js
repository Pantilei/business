import React from "react";
import { Field, reduxForm } from "redux-form";
import { Editor } from "@tinymce/tinymce-react";

import CountrySelect from "./CountrySelect";
import CompanyType from "./CompanyType";

class AddCompany extends React.Component {
  constructor() {
    super();
    this.state = {
      logoUrl:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/LEGO_logo.svg/500px-LEGO_logo.svg.png"
    };
  }

  renderTextField = formProps => {
    //console.log(formProps);
    //console.log(formProps.input.value);
    return (
      <Editor
        initialValue="<p>This is the initial content of the editor</p>"
        init={{
          height: 400,
          menubar: true,
          plugins: [
            "advlist autolink lists link image charmap print preview anchor",
            "searchreplace visualblocks code fullscreen",
            "insertdatetime media table paste code help wordcount"
          ],
          toolbar:
            "undo redo | formatselect | bold italic backcolor | \
             alignleft aligncenter alignright alignjustify | \
             bullist numlist outdent indent | removeformat | help"
        }}
        onEditorChange={formProps.input.onChange}
        value={formProps.input.value}
      />
    );
  };

  onSubmit = formValues => {
    console.log(formValues);
    alert(JSON.stringify(formValues));
  };

  render() {
    return (
      <form onSubmit={this.props.handleSubmit(this.onSubmit)}>
        <h5>Add Company</h5>
        <div className="basicInfo">
          <div className="logotype">
            <div className="logoImage">
              <img src={this.state.logoUrl} alt="logo" width="250" />
            </div>
            <button>Choose Logotype</button>
            <button>Delete Logotype</button>
          </div>
          <div className="basicInfoForm">
            <h3>Basic info</h3>
            <div>
              <label htmlFor="name">NAME</label>

              <Field
                name="name"
                component="input"
                className="nameInput"
                type="text"
                placeholder="Lego Co."
              />
            </div>
            <div className="basicInfoFormSmall">
              <div>
                <label htmlFor="country">COUNTRY</label>
                <Field name="country" component="select" className="nameInput">
                  <CountrySelect />
                </Field>
                <label htmlFor="vatin">VATIN</label>
                <Field
                  name="vatin"
                  component="input"
                  type="text"
                  placeholder="21424"
                  className="nameInput"
                />
              </div>
              <div>
                <label htmlFor="companyType">Company Type</label>
                <Field
                  name="companyType"
                  component="select"
                  className="nameInput companyTypeInput"
                >
                  <CompanyType />
                </Field>
                <label htmlFor="URL">URL</label>
                <Field
                  name="URL"
                  component="input"
                  type="text"
                  placeholder="lego.com"
                  className="nameInput companyTypeInput"
                />
              </div>
            </div>

            <h3 className="contactInfo">Contact info</h3>
            <div className="basicInfoFormSmall">
              <div>
                <label htmlFor="Director Name">DIRECTOR NAME</label>
                <Field
                  name="DirectorName"
                  component="input"
                  type="text"
                  placeholder="Ivan Ivanov"
                  className="nameInput"
                ></Field>
                <label htmlFor="telephone">TELEPHONE NUMBER</label>
                <Field
                  name="telephone"
                  component="select"
                  className="nameInput companyTypeInput"
                >
                  <CompanyType />
                </Field>
              </div>
              <div>
                <label htmlFor="email">EMAIL</label>
                <Field
                  name="email"
                  component="input"
                  type="email"
                  placeholder="ivanov@gmail.com"
                  className="nameInput"
                />
                <label htmlFor="fax">FAX NUMBER</label>
                <Field
                  name="fax"
                  component="select"
                  className="nameInput companyTypeInput"
                >
                  <CompanyType />
                </Field>
              </div>
            </div>
            <div>
              <label htmlFor="name">ADDRESS</label>
              <Field
                name="name"
                component="input"
                className="nameInput"
                type="text"
                placeholder="Main St., BennettsBridge"
              />
            </div>
          </div>
        </div>
        <div className="breakLine"></div>

        <div>
          <label htmlFor="slogan">SLOGAN</label>
          <Field
            name="slogan"
            component="input"
            className="nameInput"
            type="text"
            placeholder="We make good toys!"
          />
        </div>

        <div>
          <label htmlFor="keywords">KEYWORDS</label>
          <Field
            name="keywords"
            component="input"
            className="nameInput"
            type="text"
            placeholder="#Shell, #CarSupplies"
          />
        </div>
        <div>
          <label htmlFor="branches">BRANCHES</label>
          <Field
            name="branches"
            component="select"
            className="nameInput companyTypeInput"
          >
            <CompanyType />
          </Field>
        </div>
        <div>
          <label htmlFor="chamberOfCommerce">CHAMBER OF COMMERCE</label>
          <Field
            name="chamberOfCommerce"
            component="select"
            className="nameInput companyTypeInput"
          >
            <CompanyType />
          </Field>

          <label htmlFor="PreviewDesc">PREVIEW DESCRIPTION</label>
          <Field
            name="PreviewDesc"
            component={this.renderTextField}
            type="textarea"
          />
          <label htmlFor="DetailDescription">DETAIL DESCRIPTION</label>
          <Field
            name="DetailDescription"
            component={this.renderTextField}
            type="textarea"
          />
        </div>
        <div className="breakLine"></div>
        <h4>SOCIAL LINK</h4>
        <p>Add social links</p>
        <div className="socialLinks">
          <div>
            <div className="linkSymbol">
              <i className="fa fa-facebook"></i>
            </div>
            <Field name="facebook" component="input" type="text" />
          </div>
          <div>
            <div className="linkSymbol">
              <i className="fa fa-youtube"></i>
            </div>
            <Field name="youtube" component="input" type="text" />
          </div>
          <div>
            <div className="linkSymbol">
              <i className="fa fa-google"></i>
            </div>
            <Field name="google" component="input" type="text" />
          </div>
          <div>
            <div className="linkSymbol">
              <i className="fa fa-linkedin"></i>
            </div>
            <Field name="linkedin" component="input" type="text" />
          </div>
        </div>
        <div className="breakLine"></div>
        <div className="formButtons">
          <button type="submit">Save</button>
          <button>Cancel</button>
        </div>
      </form>
    );
  }
}

export default reduxForm({
  form: "companyInfo"
})(AddCompany);
