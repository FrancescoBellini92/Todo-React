import React from 'react';
import PropTypes from 'prop-types';
import {NavLink} from 'react-router-dom';

export default function footer ({location}) {
  return (
    <div className="footer container-fluid fixed-bottom bg-light pt-2">
      <form className="form-inline my-2 justify-content-center mx-auto">
        <div className="input-group">
          <div className="input-group-prepend dropup">
            <button type="button" className="btn btn-outline-primary dropdown-toggle dropdon-toggle-split"  data-toggle="dropdown"
              aria-expanded="false" aria-label="Filter" title="Filter" aria-haspopup="true">
        
            </button>
            <div className="dropdown-menu">
              <h6 className="dropdown-header bg-light">Filters</h6>
                <NavLink exact className="dropdown-item my-1" activeClassName="no" to={`${location.pathname}/?completed`}>
                  show completed
                </NavLink>
                <NavLink exact className="dropdown-item my-1" activeClassName="no" to={`${location.pathname}/?pending`}>
                  show pending
                </NavLink>
                <NavLink exact className="dropdown-item my-1 active" activeClassName="no" to={`${location.pathname}/?all`}>
                  show all
                </NavLink>
            </div>
          </div>
          <input type="search" className="form-control" placeholder="Cerca clienti..." />
            <div className="input-group-prepend">
              <button type="button" className="btn btn-outline-primary" title="Search" aria-label="Search">
       
              </button>
            </div>
        </div>
      </form>
  </div>
  )
};

footer.propTypes = {
  filterTodo: PropTypes.func.isRequired,
  activeFilter: PropTypes.string
};
/*
<footer className="page-footer bg-dark fixed-bottom" style="display: none;">
            <form className="form-inline justify-content-center my-2">

                <div className="input-group mx-2 footer-container" id="customer-footer-container" style="display: none;">
                    <div className="input-group-prepend dropup">
                        <button type="button" className="btn btn-outline-danger dropdown-toggle dropdon-toggle-split"  data-toggle="dropdown"
                        aria-haspopup="true" aria-expanded="false" aria-label="Impostazioni di ricerca" title="Impostazioni di ricerca" aria-haspopup="true" aria-expanded="false">
                            <i className="fa fa-cog"></i>
                        </button>
                        <div className="dropdown-menu">
                          <h6 className="dropdown-header bg-light">Parametri di ricerca</h6>
                            <button type="button" className="dropdown-item customer-search-param-btn my-1" data-searchparam="piva" title="Cerca per partita iva" aria-label="Cerca per partita Iva">
                                Cerca per partita iva
                            </button>
                            <button type="button" className="dropdown-item customer-search-param-btn my-1 " data-searchparam="id" title="Cerca per codice cliente" aria-label="Cerca per dettagli cliente">
                                Cerca per codice cliente
                            </button>
                            <button type="button" className="dropdown-item customer-search-param-btn my-1 active" data-searchparam="rs" title="Cerca per ragione sociale" aria-label="Cerca per ragione sociale">
                                Cerca per ragione sociale  
                            </button>
                        </div>
                    </div>
                    <input type="search" className="form-control " name="search-customer-input" id="search-customer-input" className="search-input" placeholder="Cerca clienti...">
                    <div className="input-group-prepend">
                      <button type="button" className="btn btn-outline-danger" id="search-customer-btn" title="Cerca" aria-label="Crea nuovo">
                          <i className="fa fa-search"></i>
                      </button>
                      <button type="button" className="btn btn-outline-danger" id="add-customer-btn"  title="Crea nuovo" aria-label="Crea nuovo">
                          <i className="fa fa-plus-circle"></i>
                      </button>
                    </div>`
                </div>*/