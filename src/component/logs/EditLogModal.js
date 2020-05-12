import React, { useState, useEffect } from 'react'
import M from 'materialize-css/dist/js/materialize.min'
import { connect } from 'react-redux'
import { updateLog } from './../../reducers/action/logAction'
const EditLogModals = ({ updateLog, current }) => {


    const [msg, setMsg] = useState('');
    const [attention, setAttention] = useState(false);
    const [tech, setTech] = useState("");
    useEffect(() => {
        if (current) {
            setMsg(current.msg)
            setAttention(current.attention)
            setTech(current.tech)
        }
    }, [current])
    const onSubmit = () => {
        if (msg === "" || tech === "") {
            M.toast({ html: "Please enter a message and tech" });
        } else {
            const updLog = {
                id: current.id,
                msg: msg,
                tech: tech,
                attention: attention,
                date: Date.now()
            };

            updateLog(updLog);
            M.toast({ html: "Log updated" });
            // fields clear
            // setMsg("");
            // setTech("");
            // setAttention(false);
        }

    }
    return (
        <div id="edit-log-modal" className="modal" style={modalStyle}>
            <div className="modal-content ">
                <h4>Enter System Log</h4>
                <div className="row">
                    <div className="input-field">
                        <input
                            type='text'
                            name='message'
                            value={msg}
                            onChange={e => setMsg(e.target.value)} />

                    </div>
                </div>
                <div className="row">
                    <div className="input-field">
                        <select name="tech" value={tech}
                            className="browser-default"
                            onChange={e => setTech(e.target.value)}
                        >
                            <option value="" disabled>
                                Select Technician
                            </option>
                            <option value="jhon Doe">
                                Jhon Doe
                            </option>
                            <option value="jhon smith ">
                                Jhon Smith
                            </option>
                            <option value="smith white">
                                Smith White
                            </option>
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

const mapStateToProp = (state) => ({
    current: state.log.current
})
export default connect(mapStateToProp, { updateLog })(EditLogModals)
const modalStyle = {
    width: '75%',
    height: '75%'
};