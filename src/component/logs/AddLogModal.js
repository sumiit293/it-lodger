import React, { useState } from 'react'
import M from 'materialize-css/dist/js/materialize.min'
import { connect } from 'react-redux'
import propTypes from 'prop-types'
import { addLog } from './../../reducers/action/logAction'
import TechSelectOption from './../techs/TechSelectOption'
const AddLogModal = ({ addLog }) => {

    const [message, setMessage] = useState('');
    const [attention, setAttention] = useState(false);
    const [tech, setTech] = useState("");

    const onSubmit = () => {
        if (message === "" || tech === "") {
            M.toast({ html: "Please enter a message and tech" });
        } else {
            const newLog = {
                msg: message,
                attention: attention,
                tech: tech,
                date: new Date()
            }
            addLog(newLog);

            M.toast({ html: `Log added by ${tech}` });
            // fields clear
            setMessage("");
            setTech("");
            setAttention(false);
        }

    }
    return (
        <div id="add-log-modal" className="modal" style={modalStyle}>
            <div className="modal-content ">
                <h4>Enter System Log</h4>
                <div className="row">
                    <div className="input-field">
                        <input
                            type='text'
                            name='message'
                            value={message}
                            onChange={e => setMessage(e.target.value)} />
                        <label htmlFor="message" className="active">
                            Log Message
                        </label>
                    </div>
                </div>
                <div className="row">
                    <div className="input-field">
                        <select name="tech" value={tech}
                            className="browser-default"
                            onChange={e => setTech(e.target.value)}
                        >
                            <TechSelectOption />
                        </select>
                    </div>
                </div>
                <div className="row">
                    <div className="input-field">
                        <p>
                            <label>
                                <input type="checkbox"
                                    className="filled-in"
                                    checked={attention}
                                    value={attention}
                                    onChange={() => setAttention(!attention)} />
                                <span>Needs Attention</span>
                            </label>
                        </p>
                    </div>
                </div>
            </div>
            <div className="modal-footer">
                <a href="#!"
                    onClick={onSubmit}
                    className="modal-close wave-effect waves-green btn blue">
                    Enter
                  </a>
            </div>
        </div>
    )
}
AddLogModal.propTypes = {
    addLog: propTypes.func.isRequired
}

export default connect(null, { addLog })(AddLogModal);
const modalStyle = {
    width: '75%',
    height: '75%'
};