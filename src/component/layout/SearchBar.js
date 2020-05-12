import React, { Fragment, useRef } from 'react'
import { connect } from 'react-redux'
import { searchLogs } from './../../reducers/action/logAction'
import propTypes from 'prop-types'
const SearchBar = ({ searchLogs }) => {

    const text = useRef("");
    const onChange = e => {
        searchLogs(text.current.value);
    }
    return (
        <Fragment>
            <nav>
                <div className="nav-wrapper">
                    <form>
                        <div className="input-field">
                            <input id="search"
                                type="search"
                                required
                                placeholder="Search Logs..."
                                ref={text}
                                onChange={onChange} />
                            <label className="label-icon" htmlFor="search"><i className="material-icons">search</i></label>
                            <i className="material-icons">close</i>
                        </div>
                    </form>
                </div>
            </nav>
        </Fragment>
    )
}
SearchBar.propTypes = {
    searchLogs: propTypes.func.isRequired
}
export default connect(null, { searchLogs })(SearchBar)
