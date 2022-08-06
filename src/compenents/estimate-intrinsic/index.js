import React from "react";
import react from "react";
import { Container, Row, Col } from "react-bootstrap";
import "../../assets/css/estimate-intrinsic-value/index.css";
import EstimatedIntrinsicDB from "../data-table/estimated-intrinsic-data-table";

const EstimatedIntrinsicVal = () => {
  return (
    <React.Fragment>
      <Container>
        <Row>
          <Col className="estimate-intrinsic-value">
            <div className="title mt-5">
              <h2 className="text-center">estimated intrinsic value</h2>
            </div>
          </Col>
        </Row>

        <Row className="mt-4 mb-5">
          <Col md={1}></Col>
          <Col md={10} className="estimated-instrinsic-value-form">
            <Row>
            <Col md={7}>
                {/* <div className="title">
                  <h5>Lorem Ipsum doller</h5>
                </div> */}

                <div className="symbool-input">
                  <form>
                    <div class="mb-3">
                      <label
                        for="exampleFormControlInput1"
                        class="form-label col-form-label-sm"
                      >
                        Symbol
                      </label>
                      <input
                        type="text"
                        class="form-control form-control-sm"
                        id="exampleFormControlInput1"
                        placeholder="Symbol"
                      />
                    </div>
                    <div class="col-auto">
                      
                    </div>
                    <div class="col-md-6">
                    <button type="submit" class="btn submit-button mb-3">
                        Submit
                      </button>
                    </div>
                  </form>
                </div>

                <div className="symbool-input">
                  <form class="row g-2">
                    <div class="col-md-6">
                      <label
                        for="inputEmail4"
                        class="col-form-label col-form-label-sm"
                      >
                        Country Risk Premium(%)
                      </label>
                      <input
                        type="number"
                        class="form-control form-control-sm"
                        min={0}
                        max={50}
                        placeholder="0-50 (%)"
                        id="inputEmail4"
                      />
                    </div>
                    <div class="col-md-6">
                      <label
                        for="inputPassword4"
                        class="col-form-label col-form-label-sm"
                      >
                        Company Risk Premium(%)
                      </label>
                      <input
                        type="number"
                        class="form-control form-control-sm"
                        min={0}
                        max={50}
                        id="inputPassword4"
                        placeholder="0-50 (%)"
                      />
                    </div>

                    <div class="col-md-12">
                      <label
                        for="inputPassword4"
                        class="col-form-label col-form-label-sm"
                      >
                        <b>Cost of Equity:</b>
                      </label>
                      <span></span>
                      {/* <input
                    type="text"
                    class="form-control"
                    id="inputPassword4"
                  /> */}
                    </div>

                    <div class="col-md-6">
                      <label
                        for="inputState"
                        class="col-form-label col-form-label-sm"
                      >
                        Rating
                      </label>
                      <select
                        id="inputState"
                        class="form-select form-select-sm"
                      >
                        <option selected>Select Option</option>
                        <option>Option one</option>
                        <option>Option one</option>
                        <option>Option one</option>
                        <option>Option one</option>
                      </select>
                    </div>

                    <div class="col-md-6">
                      <label
                        for="inputPassword4"
                        class="col-form-label col-form-label-sm"
                      >
                        Premium (%)
                      </label>
                      <span></span>
                      <input
                        type="number"
                        class="form-control form-control-sm"
                        min={0}
                        max={50}
                        placeholder="0-50 (%)"
                        id="inputPassword4"
                      />
                    </div>

                    <div class="col-md-12">
                      <label
                        for="inputPassword4"
                        class="col-form-label col-form-label-sm"
                      >
                        <b>Cost of Debt:</b>
                      </label>
                      <span></span>
                      {/* <input
                    type="text"
                    class="form-control"
                    id="inputPassword4"
                  /> */}
                    </div>

                    <Col md={12}>
                      <Row>
                        <div>
                          <h6>Stage 1</h6>
                        </div>
                      </Row>
                      <Row>
                        <div class="col-md-6">
                          <label
                            for="inputPassword4"
                            class="col-form-label col-form-label-sm"
                          >
                            No of Years
                          </label>
                          <span></span>
                          <input
                            type="number"
                            class="form-control form-control-sm"
                            min={0}
                            max={50}
                            id="inputPassword4"
                            placeholder="0-50"
                          />
                        </div>

                        <div class="col-md-6">
                          <label
                            for="inputPassword4"
                            class="col-form-label col-form-label-sm"
                          >
                            Growth Rate
                          </label>
                          <span></span>
                          <input
                            type="number"
                            class="form-control form-control-sm"
                            id="inputPassword4"
                            placeholder="-100 to 999 %"
                          />
                        </div>
                      </Row>
                    </Col>

                    <Col md={12}>
                      <Row>
                        <div>
                          <h6>Stage 2</h6>
                        </div>
                      </Row>
                      <Row>
                        <div class="col-md-6">
                          <label
                            for="inputPassword4"
                            class="col-form-label col-form-label-sm"
                          >
                            No of Years
                          </label>
                          <span></span>
                          <input
                            type="number"
                            class="form-control form-control-sm"
                            min={0}
                            max={50}
                            id="inputPassword4"
                            placeholder="0-50"
                          />
                        </div>

                        <div class="col-md-6">
                          <label
                            for="inputPassword4"
                            class="col-form-label col-form-label-sm"
                          >
                            Growth Rate
                          </label>
                          <span></span>
                          <input
                            type="number"
                            class="form-control form-control-sm"
                            id="inputPassword4"
                            placeholder="-100 to 999 %"
                          />
                        </div>
                      </Row>
                    </Col>

                    <Col md={12}>
                      <Row>
                        <div>
                          <h6>Stage 3 - Perpetual</h6>
                        </div>
                      </Row>
                      <Row>
                        <div class="col-md-6">
                          <label
                            for="inputPassword4"
                            class="col-form-label col-form-label-sm"
                          >
                            No of Years
                          </label>
                          <span></span>
                          <input
                            type="number"
                            class="form-control form-control-sm"
                            min={0}
                            max={50}
                            id="inputPassword4"
                            placeholder="0-50"
                          />
                        </div>

                        <div class="col-md-6">
                          <label
                            for="inputPassword4"
                            class="col-form-label col-form-label-sm"
                          >
                            Growth Rate
                          </label>
                          <span></span>
                          <input
                            type="number"
                            class="form-control form-control-sm"
                            id="inputPassword4"
                            placeholder="-100 to 999 %"
                          />
                        </div>
                      </Row>
                    </Col>

                    <div class="col-6">
                      <button type="submit" class="btn submit-button mt-2">
                        Submit
                      </button>
                    </div>
                  </form>
                </div>
              </Col>

              <Col md={1}></Col>

              <Col md={4} style={{'position': 'relative'}}>
                <div className="result-section">
                  <h3 className="text-center">Estimated Intrinsic Value</h3>
                  <h3 className="text-center text-black">$105.45 mil</h3>
                </div>
                
              </Col>
            </Row>
          </Col>
          <Col md={1}></Col>
        </Row>

        <Row>
          <Col>
          <EstimatedIntrinsicDB />
          </Col>
        </Row>

      </Container>
    </React.Fragment>
  );
};

export default EstimatedIntrinsicVal;
