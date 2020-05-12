import React, { useEffect } from 'react'
import LogItem from './LogItem'
import { connect } from 'react-redux'
import PreLoader from './../layout/PreLoader'
import propTypes from 'prop-types'
import { getLogs } from './../../reducers/action/logAction'
const Logs = ({ log: { logs, loading }, getLogs }) => {


    useEffect(() => {
        getLogs();

        //eslint-disable-next-line
    }, [])

    if (loading || logs === null) {
        return (<PreLoader />)
    }

    return (
        <div>
            <ul className="collection with-header">
                <li className="collection-header">

                    <h4 className="center">System logs</h4>

                </li>
                {(!loading && logs.length === 0) ? (<li><p className="center">No logs found</p></li>) :
                    (logs.map(log => <LogItem key={log.id} log={log} />))}
            </ul>
        </div>
    )
}

Logs.propTypes = {
    log: propTypes.object.isRequired,
    getLogs: propTypes.func.isRequired
}
const mapStateToProps = state => ({
    log: state.log,

})

export default connect(mapStateToProps, { getLogs })(Logs);

