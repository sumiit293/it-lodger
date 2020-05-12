import React from 'react'
import propTypes from 'prop-types'
import { connect } from 'react-redux'
import { deleteLog, setCurrent } from './../../reducers/action/logAction'
import M from 'materialize-css/dist/js/materialize.min'


const LogItem = ({ log, deleteLog, setCurrent }) => {

    const onDelete = () => {
        deleteLog(log.id);
        M.toast({ html: "Deleted" })
    }
    return (
        <li className="collection-item">
            <div>
                <a href="#edit-log-modal"
                    className={`modal-trigger ${log.attention ? 'red-text' : 'blue-text'}`}
                    onClick={() => setCurrent(log)}
                >
                    {log.msg}
                </a><br />
                <span>ID:{log.id}</span> last upadted by  <span className="text-grey">{log.tech}  on {log.date}</span>
                <a href="#!" onClick={onDelete} className="secondary-content"><i className='material-icons grey-text'>delete</i></a>
            </div>
        </li>
    )
}

LogItem.propTypes = {
    log: propTypes.object.isRequired,
    deleteLog: propTypes.func.isRequired,
    setCurrent: propTypes.func.isRequired
}

export default connect(null, { deleteLog, setCurrent })(LogItem);
