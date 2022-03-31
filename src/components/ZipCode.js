import React from "react";

export default function ZipCode() {
  return (
    <>
      <div
        className="container"
        style={{
          boxSizing: "border-box",
          marginLeft: "auto",
          marginRight: "auto",
          paddingLeft: "16px",
          paddingRight: "16px",
          width: "100%",
          maxWidth: "1140px",
          textAlign: "center"
        }}
      >
        <h1
          className="hero-headline mb-05"
          style={{
            boxSizing: "border-box",
            color: "rgb(10, 12, 14)",
            marginTop: "0px",
            fontFamily:
              '"Basetica", "Roboto", "Helvetica Neue", Arial, Verdana, sans-serif',
            fontSize: "4rem",
            fontWeight: 700,
            lineHeight: 1.125,
            marginBottom: "0.5rem"
          }}
        >
          Let's start with the basics.
        </h1>
        <h2
          className="hero-subheadline mb-2"
          style={{
            boxSizing: "border-box",
            marginTop: "0px",
            color: "rgb(74, 79, 83)",
            fontFamily: "Roboto, Helvetica Neue, Arial, Verdana, sans-serif",
            fontWeight: 400,
            fontSize: "1.125rem",
            lineHeight: 1.44444,
            marginBottom: "2rem"
          }}
        >
          Enter your ZIP code to get personalized{" "}
          <span style={{ boxSizing: "border-box" }}>auto</span> quotes.
        </h2>
        <div
          className="hero-cta row justify-content-center"
          style={{
            boxSizing: "border-box",
            display: "flex",
            flexWrap: "wrap",
            marginLeft: "-16px",
            marginRight: "-16px",
            justifyContent: "center"
          }}
        >
          <div
            className="col-12 col-sm-9 col-lg-6 col-xl-5 col-xxl-4"
            style={{
              boxSizing: "border-box",
              paddingLeft: "16px",
              paddingRight: "16px",
              position: "relative",
              width: "100%",
              flex: "0 0 41.6667%",
              maxWidth: "41.6667%"
            }}
          >
            <div
              className="form-inline form-inline-zip-code form-inline-mobile form-type-auto"
              style={{
                boxSizing: "border-box",
                margin: "auto",
                justifyContent: "center",
                maxWidth: "325px"
              }}
            >
              <form
                className="zipcode-form has-feedback insurance-line-auto"
                action="/api/v4/start/"
                method="POST"
                style={{ boxSizing: "border-box", position: "relative" }}
              >
                <input
                  name="csrfmiddlewaretoken"
                  type="hidden"
                  defaultValue="SkWxCFk5EiVMoxwqJt2tyPyYV46eEaiMKIC5mgRCsRgibanTpdNDfciVXp6LJSAC"
                  style={{
                    boxSizing: "border-box",
                    margin: "0px",
                    fontFamily: "inherit",
                    fontSize: "inherit",
                    lineHeight: "inherit",
                    overflow: "visible"
                  }}
                />
                <div
                  className="radio-button-row radio-btn-row-variant"
                  style={{
                    boxSizing: "border-box",
                    display: "none",
                    marginBottom: "2rem"
                  }}
                >
                  <div
                    className="input-card left-card mock-control-hidden"
                    style={{
                      boxSizing: "border-box",
                      flex: "0 0 50%",
                      maxWidth: "50%"
                    }}
                  >
                    <input
                      id="3c32a709-3f62-47de-b4f1-6f5b00ed2e30auto"
                      name="insurance_line"
                      type="radio"
                      defaultChecked
                      value="auto"
                      style={{
                        margin: "0px",
                        fontFamily: "inherit",
                        fontSize: "inherit",
                        lineHeight: "inherit",
                        overflow: "visible",
                        padding: "0px",
                        boxSizing: "border-box",
                        height: "0px",
                        opacity: 0,
                        position: "absolute",
                        width: "0px"
                      }}
                    />
                    <label
                      htmlFor="3c32a709-3f62-47de-b4f1-6f5b00ed2e30auto"
                      style={{
                        boxSizing: "border-box",
                        borderRadius: "0.25rem",
                        alignItems: "center",
                        display: "flex",
                        flexDirection: "column",
                        height: "100%",
                        justifyContent: "center",
                        marginBottom: "0px",
                        position: "relative",
                        textAlign: "center",
                        width: "100%",
                        padding: "1rem",
                        borderColor: "rgb(87, 76, 250)",
                        opacity: 1,
                        background: "rgb(87, 76, 250) none repeat scroll 0% 0%",
                        border: "2px solid rgb(87, 76, 250)",
                        boxShadow: "none",
                        borderBottomRightRadius: "0px",
                        borderTopRightRadius: "0px"
                      }}
                    >
                      <div
                        className="label-icon label-icon-variant"
                        style={{
                          boxSizing: "border-box",
                          margin: "auto auto 0.5rem",
                          flexDirection: "column",
                          height: "20px",
                          justifyContent: "flex-end",
                          width: "20px",
                          display: "flex"
                        }}
                      >
                        <svg
                          height="16"
                          width="20"
                          viewBox="0 0 20 16"
                          xmlns="http://www.w3.org/2000/svg"
                          style={{
                            boxSizing: "border-box",
                            verticalAlign: "middle",
                            overflow: "hidden",
                            marginTop: "auto",
                            width: "100%"
                          }}
                        >
                          <path
                            d="M18.62,6,16.17,1.11A2,2,0,0,0,14.38,0H5.62A2,2,0,0,0,3.83,1.11L1.38,6H0V8H1v8H5V14H15v2h4V8h1V6ZM14.38,2l2,4H3.62l2-4ZM17,9.25v1.5H14V9.25Zm-11,0v1.5H3V9.25Z"
                            fill="#0a0c0e"
                            fillRule="evenodd"
                            style={{
                              boxSizing: "border-box",
                              fill: "rgb(255, 255, 255)"
                            }}
                          />
                        </svg>
                      </div>
                      <div
                        className="label-title"
                        style={{
                          boxSizing: "border-box",
                          lineHeight: "22px",
                          fontSize: "0.875rem",
                          color: "rgb(255, 255, 255)",
                          fontWeight: 700
                        }}
                      >
                        Car{" "}
                        <br
                          style={{ boxSizing: "border-box", display: "none" }}
                        />
                        insurance
                      </div>
                      <span
                        className="label-mock-control hidden-sm-down"
                        style={{
                          boxSizing: "border-box",
                          border: "1px solid rgb(210, 211, 212)",
                          margin: "0.5rem auto 0px",
                          alignItems: "center",
                          backgroundColor: "rgb(255, 255, 255)",
                          height: "1.5rem",
                          justifyContent: "center",
                          pointerEvents: "none",
                          userSelect: "none",
                          width: "1.5rem",
                          borderRadius: "50%",
                          borderColor: "rgb(87, 76, 250)",
                          display: "none"
                        }}
                      />
                    </label>
                  </div>
                  <div
                    className="separator-text"
                    style={{
                      boxSizing: "border-box",
                      flex: "0 0 10%",
                      alignSelf: "center",
                      fontSize: "1rem",
                      fontWeight: 700,
                      maxWidth: "10%",
                      textAlign: "center",
                      display: "none"
                    }}
                  >
                    {"or"}
                  </div>
                  <div
                    className="input-card right-card mock-control-hidden"
                    style={{
                      boxSizing: "border-box",
                      flex: "0 0 50%",
                      maxWidth: "50%"
                    }}
                  >
                    <input
                      id="3c32a709-3f62-47de-b4f1-6f5b00ed2e30home"
                      name="insurance_line"
                      type="radio"
                      value="home"
                      style={{
                        margin: "0px",
                        fontFamily: "inherit",
                        fontSize: "inherit",
                        lineHeight: "inherit",
                        overflow: "visible",
                        padding: "0px",
                        boxSizing: "border-box",
                        height: "0px",
                        opacity: 0,
                        position: "absolute",
                        width: "0px"
                      }}
                    />
                    <label
                      htmlFor="3c32a709-3f62-47de-b4f1-6f5b00ed2e30home"
                      style={{
                        boxSizing: "border-box",
                        background:
                          "rgb(255, 255, 255) none repeat scroll 0% 0%",
                        borderRadius: "0.25rem",
                        alignItems: "center",
                        display: "flex",
                        flexDirection: "column",
                        height: "100%",
                        justifyContent: "center",
                        marginBottom: "0px",
                        position: "relative",
                        textAlign: "center",
                        width: "100%",
                        padding: "1rem",
                        border: "2px solid rgb(87, 76, 250)",
                        borderBottomLeftRadius: "0px",
                        borderTopLeftRadius: "0px"
                      }}
                    >
                      <div
                        className="label-icon label-icon-variant"
                        style={{
                          boxSizing: "border-box",
                          margin: "auto auto 0.5rem",
                          flexDirection: "column",
                          height: "20px",
                          justifyContent: "flex-end",
                          width: "20px",
                          display: "flex"
                        }}
                      >
                        <svg
                          height="20.01"
                          width="20"
                          viewBox="0 0 20 20.01"
                          xmlns="http://www.w3.org/2000/svg"
                          style={{
                            boxSizing: "border-box",
                            verticalAlign: "middle",
                            overflow: "hidden",
                            marginTop: "auto",
                            width: "100%"
                          }}
                        >
                          <path
                            d="M19,1H17a1,1,0,0,0-1,1V5.59L10.71.29a1,1,0,0,0-1.42,0l-9,9A1,1,0,0,0,0,10v9a1,1,0,0,0,1,1H7a1,1,0,0,0,1-1V14h4v5a1,1,0,0,0,1,1h6a1,1,0,0,0,1-1V2A1,1,0,0,0,19,1Z"
                            fill="#0a0c0e"
                            fillRule="evenodd"
                            transform="translate(0 0.01)"
                            style={{ boxSizing: "border-box" }}
                          />
                        </svg>
                      </div>
                      <div
                        className="label-title"
                        style={{
                          boxSizing: "border-box",
                          lineHeight: "22px",
                          fontSize: "0.875rem"
                        }}
                      >
                        Home{" "}
                        <br
                          style={{ boxSizing: "border-box", display: "none" }}
                        />
                        insurance
                      </div>
                      <span
                        className="label-mock-control hidden-sm-down"
                        style={{
                          boxSizing: "border-box",
                          border: "1px solid rgb(210, 211, 212)",
                          margin: "0.5rem auto 0px",
                          alignItems: "center",
                          backgroundColor: "rgb(255, 255, 255)",
                          height: "1.5rem",
                          justifyContent: "center",
                          pointerEvents: "none",
                          userSelect: "none",
                          width: "1.5rem",
                          borderRadius: "50%",
                          display: "none"
                        }}
                      />
                    </label>
                  </div>
                </div>
                <div
                  className="form-group"
                  style={{
                    boxSizing: "border-box",
                    position: "relative",
                    marginBottom: "0px"
                  }}
                >
                  <div
                    className="input-group"
                    style={{
                      boxSizing: "border-box",
                      alignItems: "stretch",
                      display: "flex",
                      position: "relative",
                      width: "100%",
                      flexWrap: "nowrap"
                    }}
                  >
                    <div
                      className="input-wrapper"
                      style={{
                        boxSizing: "border-box",
                        flex: "1 1 auto",
                        position: "relative",
                        width: "auto"
                      }}
                    >
                      <input
                        id="3c32a709-3f62-47de-b4f1-6f5b00ed2e30"
                        className="form-control with-icon zipcode-text-input"
                        name="zipcode"
                        type="text"
                        autoComplete="postal-code"
                        maxLength="5"
                        required
                        aria-required="true"
                        inputMode="numeric"
                        style={{
                          boxSizing: "border-box",
                          margin: "0px",
                          fontFamily: "inherit",
                          overflow: "visible",
                          border: "0.0625rem solid rgb(210, 211, 212)",
                          borderRadius: "0.25rem",
                          padding: "1.5rem 1.25rem 0.5rem",
                          backgroundClip: "padding-box",
                          backgroundColor: "rgb(255, 255, 255)",
                          backgroundImage: "none",
                          color: "rgb(52, 57, 63)",
                          display: "block",
                          fontSize: "1.125rem",
                          lineHeight: "28px",
                          width: "100%",
                          paddingLeft: "2.5rem",
                          borderWidth: "2px",
                          height: "70px",
                          borderColor: "rgb(87, 76, 250)",
                          boxShadow: "none",
                          flex: "1 1 0%",
                          marginBottom: "0px",
                          position: "relative",
                          minWidth: "140px",
                          borderBottomRightRadius: "0px",
                          borderTopRightRadius: "0px"
                        }}
                      />
                      <div
                        className="form-control-icon"
                        style={{
                          boxSizing: "border-box",
                          transition:
                            "all 0.1s cubic-bezier(0.4, 0, 0.2, 1) 0s",
                          left: "1.25rem",
                          pointerEvents: "none",
                          position: "absolute",
                          top: "50%",
                          transform: "translateY(-50%)",
                          zIndex: 200
                        }}
                      >
                        <svg
                          height="20"
                          width="15"
                          viewBox="0 0 15 20"
                          xmlns="http://www.w3.org/2000/svg"
                          style={{
                            boxSizing: "border-box",
                            verticalAlign: "middle",
                            overflow: "hidden"
                          }}
                        >
                          <title style={{ boxSizing: "border-box" }}>
                            Location pin icon
                          </title>
                          <path
                            d="M7.14,0c3.75,0,7.15,2.84,7.15,6.34S11.19,14,7.14,20C3.1,14,0,9.83,0,6.34S3.39,0,7.14,0Zm0,9.15A2.56,2.56,0,1,0,4.58,6.59h0A2.56,2.56,0,0,0,7.14,9.15Z"
                            fill="#0a0c0e"
                            style={{
                              boxSizing: "border-box",
                              fill: "rgb(163, 167, 169)"
                            }}
                          />
                        </svg>
                      </div>
                      <label
                        className="form-control-label"
                        htmlFor="3c32a709-3f62-47de-b4f1-6f5b00ed2e30"
                        style={{
                          boxSizing: "border-box",
                          display: "inline-block",
                          transition:
                            "font-size 0.1s cubic-bezier(0.4, 0, 0.2, 1) 0s, transform 0.1s cubic-bezier(0.4, 0, 0.2, 1) 0s",
                          color: "rgb(96, 101, 105)",
                          fontSize: "1.125rem",
                          marginBottom: "0px",
                          pointerEvents: "none",
                          position: "absolute",
                          willChange: "transform, font-size, font-weight",
                          zIndex: 200,
                          left: "2.5rem",
                          top: "1.2rem"
                        }}
                      >
                        ZIP code
                      </label>
                    </div>
                    <div
                      className="input-group-append"
                      style={{
                        boxSizing: "border-box",
                        display: "flex",
                        marginLeft: "-0.0625rem",
                        marginTop: "0px",
                        width: "auto"
                      }}
                    >
                      <button
                        className="btn btn-square form-inline-submit-button"
                        type="submit"
                        style={{
                          boxSizing: "border-box",
                          margin: "0px",
                          fontFamily: "inherit",
                          overflow: "visible",
                          textTransform: "none",
                          appearance: "button",
                          border: "1px solid rgb(87, 76, 250)",
                          padding: "23px 34px",
                          textDecoration: "none",
                          alignItems: "center",
                          backgroundColor: "rgb(87, 76, 250)",
                          color: "rgb(255, 255, 255)",
                          cursor: "pointer",
                          display: "inline-flex",
                          fontSize: "16px",
                          fontWeight: 500,
                          justifyContent: "center",
                          lineHeight: "22px",
                          textAlign: "center",
                          touchAction: "manipulation",
                          userSelect: "none",
                          whiteSpace: "nowrap",
                          borderRadius: "0.25rem",
                          transition:
                            "box-shadow 0.1s cubic-bezier(0.4, 0, 0.2, 1) 0s",
                          position: "relative",
                          zIndex: 2,
                          borderBottomLeftRadius: "0px",
                          borderTopLeftRadius: "0px",
                          width: "auto"
                        }}
                      >
                        <span
                          className="btn-text hidden-sm-down"
                          style={{ boxSizing: "border-box" }}
                        >
                          Get my quotes{" "}
                        </span>
                        <span
                          className="btn-text hidden-md-up"
                          style={{ boxSizing: "border-box", display: "none" }}
                        >
                          Start
                        </span>
                      </button>
                    </div>
                  </div>
                  <div
                    className="form-control-feedback bottom"
                    style={{
                      boxSizing: "border-box",
                      borderRadius: "0.3rem",
                      margin: "0px",
                      padding: "1rem",
                      transition: "opacity 0.25s ease 0s, top 0.25s ease 0s",
                      opacity: 0,
                      textAlign: "left",
                      visibility: "hidden",
                      width: "auto",
                      zIndex: 300,
                      left: "0px",
                      position: "absolute",
                      right: "0px",
                      top: "50%"
                    }}
                  >
                    <p
                      style={{
                        boxSizing: "border-box",
                        margin: "0px",
                        marginTop: "0px",
                        marginBottom: "0px",
                        whiteSpace: "nowrap"
                      }}
                    >
                      <span
                        className="icon"
                        style={{
                          boxSizing: "border-box",
                          borderRadius: "100%",
                          backgroundColor: "rgb(255, 255, 255)",
                          color: "rgb(235, 0, 76)",
                          display: "inline-block",
                          fontWeight: 500,
                          height: "18px",
                          lineHeight: 1.25,
                          marginRight: "0.5rem",
                          textAlign: "center",
                          width: "18px"
                        }}
                      >
                        !
                      </span>
                      <span
                        className="zip-error-text"
                        style={{ boxSizing: "border-box" }}
                      >
                        {"This ZIP code is invalid."}
                      </span>
                    </p>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <style
        dangerouslySetInnerHTML={{
          __html: `
html {
  box-sizing: border-box;
  font-family: sans-serif;
  line-height: 1.15;
}

body {
  box-sizing: border-box;
  margin: 0px;
  background-color: rgb(255, 255, 255);
  color: rgb(52, 57, 63);
  font-size: 16px;
  line-height: 1.75;
  text-align: left;
  font-family: "Roboto", "Helvetica Neue", "Arial", "Verdana", sans-serif;
  font-weight: 400;
}
`
        }}
      />
    </>
  );
}
