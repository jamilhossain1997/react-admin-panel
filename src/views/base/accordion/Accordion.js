import React from 'react'
import {
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CRow,
  CAccordion,
  CAccordionBody,
  CAccordionHeader,
  CAccordionItem,
} from '@coreui/react'
import { DocsExample } from 'src/components';
import logoImg from '../../../assets/images/CJ_round_logo.png'

const Accordion = () => {
  return (
    <>
      <CRow>
        <CCol xs={12}>
          <div className='d-flex justify-content-center mb-1'>
            <img src={logoImg} alt='image' height={60} width={60} />
          </div>
        </CCol>
      </CRow>
      <CRow>

        <CCol xs={12}>
          <CCard className="mb-4">
            <CCardBody>
              <CRow>
                <CCol xs={12}>
                  <div className='d-flex justify-content-center mb-1'>
                    <h3>Online Registration form for Test</h3>
                  </div>
                </CCol>
              </CRow>
              <CRow style={{ marginTop: `10px` }}>
                <CCol xs={6}>
                  <div className='d-flex justify-content-center mb-1'>
                    <p>Last revision made on : 02/05/2022</p>
                  </div>
                </CCol>
                <CCol xs={6}>
                  <div className='d-flex justify-content-center mb-1'>
                    <p>Renewed with effect from : 02/05/2023</p>
                  </div>
                </CCol>
              </CRow>


            </CCardBody>
          </CCard>
        </CCol>
      </CRow>
      <CRow>
        <CCol xs={12}>
          <CCard>
            <CCardBody >
              <label ><strong style={{ fontSize: `bold` }}>Name:</strong>Input any name here</label>
              <hr />
              <label ><strong style={{ fontSize: `bold` }}>Name:</strong>Flat no:1124, House no: 220, Road no: 140, Avenue: 50, Block: D, Sector: 04, Shahid Nazrul Islam Soroni.
                Dhaka Bangladesh.</label>
              <hr />
              <CRow>
                <CCol xs={4}>
                  <label ><strong style={{ fontSize: `bold` }}>Area:</strong>Demo Text</label>
                  <hr />
                </CCol>
                <CCol xs={4}>
                  <label ><strong style={{ fontSize: `bold` }}>District  </strong>Demo Text</label>
                  <hr />
                </CCol>
                <CCol xs={4}>
                  <label ><strong style={{ fontSize: `bold` }}>Division : </strong>Demo Text</label>
                  <hr />
                </CCol>
              </CRow>
            </CCardBody>
            <CCardBody >
              <label ><strong style={{ fontSize: `bold` }}>Name:</strong>Input any name here</label>
              <hr />
              <label ><strong style={{ fontSize: `bold` }}>Name:</strong>Flat no:1124, House no: 220, Road no: 140, Avenue: 50, Block: D, Sector: 04, Shahid Nazrul Islam Soroni.
                Dhaka Bangladesh.</label>
              <hr />
              <CRow>
                <CCol xs={4}>
                  <label ><strong style={{ fontSize: `bold` }}>Area:</strong>Demo Text</label>
                  <hr />
                </CCol>
                <CCol xs={4}>
                  <label ><strong style={{ fontSize: `bold` }}>District  </strong>Demo Text</label>
                  <hr />
                </CCol>
                <CCol xs={4}>
                  <label ><strong style={{ fontSize: `bold` }}>Division : </strong>Demo Text</label>
                  <hr />
                </CCol>
              </CRow>
            </CCardBody>
          </CCard>
        </CCol>
      </CRow>
      <CRow>
        <CCol xs={12}>
          <CCard >
            <CCardBody >
              <label ><strong style={{ fontSize: `bold` }}>Name:</strong>Input any name here</label>
              <hr />
              <label ><strong style={{ fontSize: `bold` }}>Name:</strong>Flat no:1124, House no: 220, Road no: 140, Avenue: 50, Block: D, Sector: 04, Shahid Nazrul Islam Soroni.
                Dhaka Bangladesh.</label>
              <hr />
              <CRow>
                <CCol xs={4}>
                  <label ><strong style={{ fontSize: `bold` }}>Area:</strong>Demo Text</label>
                  <hr />
                </CCol>
                <CCol xs={4}>
                  <label ><strong style={{ fontSize: `bold` }}>District  </strong>Demo Text</label>
                  <hr />
                </CCol>
                <CCol xs={4}>
                  <label ><strong style={{ fontSize: `bold` }}>Division : </strong>Demo Text</label>
                  <hr />
                </CCol>
              </CRow>
            </CCardBody>
          </CCard>
        </CCol>
      </CRow>
      <CRow>
        <CCol xs={12}>
          <CCard >
            <CCardBody >
              <div class="d-flex justify-content-center">
                <button type="button" class="btn btn-danger btn-lg text-white">Read Terms & Conditions</button>
              </div>
              <div class="d-flex justify-content-center">
                <div class="form-check">
                  <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                  <label class="form-check-label" for="flexCheckDefault">
                    After having read and agreed to all the Terms & Conditions, I give my approval to Cyber Jahan
                    Ltd. to complete the registration.
                  </label>
                </div>
              </div>
              <div class="d-flex justify-content-center">
                <CRow>
                  <CCol xs={3}>
                    <button type="button" class="btn btn-info">Approve</button>
                  </CCol>
                  <CCol xs={3}>
                    <button type="button" class="btn btn-warning">Change</button>
                  </CCol>
                  <CCol xs={3}>
                    <button type="button" class="btn btn-primary">Renew</button>
                  </CCol>
                  <CCol xs={3}>
                    <button type="button" class="btn btn-secondary">Print</button>
                  </CCol>
                </CRow>
              </div>
            </CCardBody>

          </CCard>
        </CCol>
      </CRow>
    </>
  )
}

export default Accordion
